(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{402:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"format-validation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format-validation"}},[t._v("#")]),t._v(" Format validation")]),t._v(" "),a("h2",{attrs:{id:"string-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-formats"}},[t._v("#")]),t._v(" String formats")]),t._v(" "),a("p",[t._v("From version 7 Ajv does not include formats defined by JSON Schema specification - these and several other formats are provided by "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),a("OutboundLink")],1),t._v(" plugin.")]),t._v(" "),a("p",[t._v("To add all formats from this plugin:")]),t._v(" "),a("code-group",[a("code-block",{attrs:{title:"JavaScript"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" addFormats "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("code-block",{attrs:{title:"TypeScript"}},[a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ajv "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" addFormats "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv-formats"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormats")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),a("OutboundLink")],1),t._v(" documentation for further details.")]),t._v(" "),a("p",[t._v('It is recommended NOT to use "format" keyword implementations with untrusted data, as they may use potentially unsafe regular expressions (even though known issues are fixed) - see '),a("RouterLink",{attrs:{to:"/security.html#redos-attack"}},[t._v("ReDoS attack")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Format validation of untrusted data")]),t._v(" "),a("p",[t._v('If you need to use "format" keyword to validate untrusted data, you MUST assess their suitability and safety for your validation scenarios.')])]),t._v(" "),a("p",[t._v("The following formats are defined in "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),a("OutboundLink")],1),t._v(' for string validation with "format" keyword:')]),t._v(" "),a("ul",[a("li",[a("em",[t._v("date")]),t._v(": full-date according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc3339#section-5.6",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("time")]),t._v(": time with optional time-zone.")]),t._v(" "),a("li",[a("em",[t._v("date-time")]),t._v(": date-time from the same source (time-zone is mandatory).")]),t._v(" "),a("li",[a("em",[t._v("duration")]),t._v(": duration from "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc3339#appendix-A",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC3339"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("uri")]),t._v(": full URI.")]),t._v(" "),a("li",[a("em",[t._v("uri-reference")]),t._v(": URI reference, including full and relative URIs.")]),t._v(" "),a("li",[a("em",[t._v("uri-template")]),t._v(": URI template according to "),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc6570/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6570"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("em",[t._v("url")]),t._v(" (deprecated): "),a("a",{attrs:{href:"https://url.spec.whatwg.org/#concept-url",target:"_blank",rel:"noopener noreferrer"}},[t._v("URL record"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("email")]),t._v(": email address.")]),t._v(" "),a("li",[a("em",[t._v("hostname")]),t._v(": host name according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/rfc1034#section-3.5",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC1034"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("ipv4")]),t._v(": IP address v4.")]),t._v(" "),a("li",[a("em",[t._v("ipv6")]),t._v(": IP address v6.")]),t._v(" "),a("li",[a("em",[t._v("regex")]),t._v(": tests whether a string is a valid regular expression by passing it to RegExp constructor.")]),t._v(" "),a("li",[a("em",[t._v("uuid")]),t._v(": Universally Unique Identifier according to "),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc4122/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC4122"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("json-pointer")]),t._v(": JSON-pointer according to "),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc6901/",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC6901"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("em",[t._v("relative-json-pointer")]),t._v(": relative JSON-pointer according to "),a("a",{attrs:{href:"http://tools.ietf.org/html/draft-luff-relative-json-pointer-00",target:"_blank",rel:"noopener noreferrer"}},[t._v("this draft"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Additional formats in ajv-formats-draft2019")]),t._v(" "),a("p",[t._v("JSON Schema draft-07 also defines formats "),a("code",[t._v("iri")]),t._v(", "),a("code",[t._v("iri-reference")]),t._v(", "),a("code",[t._v("idn-hostname")]),t._v(" and "),a("code",[t._v("idn-email")]),t._v(" for URLs, hostnames and emails with international characters. These formats are available in "),a("a",{attrs:{href:"https://github.com/luzlab/ajv-formats-draft2019",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats-draft2019"),a("OutboundLink")],1),t._v(" plugin.")])]),t._v(" "),a("h2",{attrs:{id:"user-defined-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-formats"}},[t._v("#")]),t._v(" User-defined formats")]),t._v(" "),a("p",[t._v("You can add and replace any formats using "),a("RouterLink",{attrs:{to:"/api.html#ajv-addformat-name-string-format-format-ajv"}},[t._v("addFormat")]),t._v(" method:")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"identifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^a-z\\$_[a-zA-Z$_0-9]*$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Ajv also allows defining the formats that would be applied to numbers only:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFormat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"byte"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("validate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"formats-and-standalone-validation-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formats-and-standalone-validation-code"}},[t._v("#")]),t._v(" Formats and standalone validation code")]),t._v(" "),a("p",[t._v("If you use formats from "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-formats"),a("OutboundLink")],1),t._v(" package, "),a("a",{attrs:{href:"../standalone"}},[t._v("standalone validation code")]),t._v(" will be supported out of the box.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Standalone code and Ajv versions")]),t._v(" "),a("p",[t._v("You need to make sure that ajv-formats imports the same version and the same code of ajv as the one you use in your application for standalone validation code to work (because of "),a("code",[t._v("instanceof")]),t._v(" check that is currently used).")]),t._v(" "),a("p",[a("code",[t._v("npm")]),t._v(" and other package managers may not update the version of ajv dependency of ajv-formats when you update version of ajv in your application - the workaround is to use clean npm installation.")])]),t._v(" "),a("p",[t._v("If you define your own formats, for standalone code generation to work you need to pass the code snippet that evaluates to an object with all defined formats to the option "),a("code",[t._v("code.formats")]),t._v(":")]),t._v(" "),a("code-group",[a("code-block",{attrs:{title:"JavaScript"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("formats")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('require("./my_formats")')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),a("code-block",{attrs:{title:"TypeScript"}},[a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Ajv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ajv"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("formats"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('require("./my_formats")')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);