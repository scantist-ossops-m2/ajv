# Code generation

Starting from v7 Ajv uses [CodeGen module](../lib/compile/codegen/index.ts) that replaced [doT](https://github.com/olado/dot) templates used earlier.

The motivations for this change:

- doT templates were difficult to maintain and to change, particularly for the occasional contributors.
- they discouraged modularity within validation keywords code and also led to implicit dependancies between different parts of code.
- they had risks of remote code execution in case untrusted schemas were used, even though all identified issues were patched.
- ES6 template literals that are now widely supported offer a great alternative to both ASTs and to plain string concatenation - this option was not available when Ajv started.

## Safe code generation

CodeGen module defines two tagged templates that should be passed to all code generation methods and used in other tagged templates:

- `_` - to create instances of private \_Code class that will not be escaped when used in code or other tagged templates.
- `str` - to create code for string expressions.

For example, this code:

```typescript
const x = 0
// Name is a subclass of _Code that can be safely used in code - it only allows valid identifiers
// gen.const creates a unique variable name with the prefix "num".
const num: Name = gen.const("num", 5)
gen.if(
  // _`...` returns the instance of _Code with safe interpolation of `num` and `x`.
  // if `x` was a string, it would be inserted into code as a quoted string value rather than as a code fragment,
  // so if `x` contained some code, it would not be executed.
  _`${num} > ${x}`,
  () => log("greater"),
  () => log("smaller or equal")
)

function log(comparison: string): void {
  // msg creates a string expression with concatenation - see generated code below
  // type Code = _Code | Name, _Code can only be constructed with template literals
  const msg: Code = str`${num} is ${comparison} than ${x}`
  // msg is _Code instance, so it will be inserted via another template without quotes
  gen.code(_`console log(${msg})`)
}
```

generates this javascript code:

```javascript
const num0 = 5
if (num0 > 0) {
  console.log(num0 + " is greater than 0")
} else {
  console.log(num0 + " is smaller than 0")
}
```

`.const`, `.if` and `.code` above are methods of CodeGen class that generate code inside class instance `gen` - see [source code](../lib/compile/codegen/index.ts) for all available methods and [tests](../spec/codegen.spec.ts) for other code generation examples.

These methods only accept instances of private class `_Code`, other values will be rejected by Typescript compiler - the risk to pass unsafe string is mitigated on type level.

If a string is used in template literals, it will be wrapped in quotes - the generated code could be invalid, but it prevents the risk of code execution that atacker could pass via untrusted schema as a string value that will be interpolated. Also see the comment in the example.

## Code optimization

CodeGen class generates code trees and performs several optimizations before the code is rendered:

1. removes empty and unreachable branches (e.g. `else` branch after `if(true)`, etc.).
2. removes unused variable declarations.
3. replaces variables that are used only once and assigned expressions that are explicitely marked as "constant" (i.e. having referential transparency) with the expressions themselves.

These optimizations assume that the expressions in `if` coditions, `for` loop headers and assignemnts are free of any side effects - this is the case for all pre-defined validation keywords. You can either use the same approach in user-defined keywords, or you may need to disable optimization.

See [these tests](../spec/codegen.spec.ts) for examples.

By default Ajv does 1-pass optimization - based on the test suite it achives 10.5% code size reduction and 16.7% tree nodes reduction (TODO benchmark the validation time). The second optimization pass would only change it marginally, by less than 0.1%, so you won't need it unless you have really complex schemas or if you generate standalone code and want it to pass relevant eslint rules.

Optimization mode can be changed with options:

- `{code: {optimize: false}}` - to disable,
- `{code: {optimize: 2}}` - 2-pass optimization.

## User-defined keywords

While tagged template literals wrap passed strings based on their run-time values, CodeGen class methods rely on types to ensure safety of passed parameters - there is no run-time checks that the passed value is an instance of \_Code class.

It is strongly recommended to define addiitonal keywords only with Typescript - using plain typescript would still allow passing unsafe strings to code generation methods.