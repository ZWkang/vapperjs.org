(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(t,e,a){t.exports=a.p+"assets/img/spa-ssr-prerender.701eb249.png"},240:function(t,e,a){t.exports=a.p+"assets/img/builder.b418cf5b.png"},241:function(t,e,a){t.exports=a.p+"assets/img/error-handling.41c5ea55.png"},242:function(t,e,a){t.exports=a.p+"assets/img/vue-ssr-prefetcher.08f99325.png"},296:function(t,e,a){"use strict";a.r(e);var n=a(38),s=Object(n.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",[t._v("This section will introduce the design principles of "),n("code",[t._v("Vapper")])])]),t._v(" "),n("p",[n("code",[t._v("Vapper")]),t._v(" is a Vue-based server-side rendering("),n("code",[t._v("SSR")]),t._v(") framework with core goals of "),n("strong",[t._v("simplicity")]),t._v(", "),n("strong",[t._v("flexibility")]),t._v(", and "),n("strong",[t._v("powerful")]),t._v(".")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("simplicity")]),t._v(": Vapper does its utmost to make the development of the "),n("code",[t._v("SSR")]),t._v(" application consistent with the development of the "),n("code",[t._v("SPA")]),t._v(" application, reducing the cost of learning and the cost of switching between projects. The most typical example is the "),n("router-link",{attrs:{to:"/data-prefetching.html#data-prefetch"}},[t._v("data prefetch")]),t._v(" scheme provided by "),n("code",[t._v("Vapper")]),t._v(".")],1)]),t._v(" "),n("li",[n("p",[n("strong",[t._v("flexibility")]),t._v(": Flexibility is reflected in many aspects. For example, "),n("code",[t._v("Vapper")]),t._v(" is only responsible for the necessary "),n("code",[t._v("webpack")]),t._v(" configuration, which makes it work with great tools like "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue CLI"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://poi.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Poi"),n("OutboundLink")],1),t._v(". At the same time "),n("code",[t._v("Vapper")]),t._v(" allows you to control whether to enable "),n("code",[t._v("SSR")]),t._v(", "),n("code",[t._v("SPA")]),t._v(" or "),n("code",[t._v("pre-rendering")]),t._v(" at the routing level, which means that different routes in the same project may be handled differently.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("powerful")]),t._v(": The core of "),n("code",[t._v("Vapper")]),t._v(" is very simple, but its "),n("router-link",{attrs:{to:"/using-plugin.html#intro"}},[t._v("plugin")]),t._v(' architecture allows you to have "progressive" enhancements. Extend '),n("code",[t._v("Vapper")]),t._v(" with different plugins to do almost anything you expect. In fact, many of the core features of "),n("code",[t._v("Vapper")]),t._v(" are also implemented as plugins.")],1)])]),t._v(" "),n("h2",{attrs:{id:"necessary-webpack-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#necessary-webpack-configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Necessary webpack configuration")]),t._v(" "),n("p",[t._v("In fact, the principle of "),n("code",[t._v("Vue")]),t._v(" SSR is very simple, we need two "),n("code",[t._v("webpack")]),t._v(" configurations: "),n("code",[t._v("server config")]),t._v(" and "),n("code",[t._v("client config")]),t._v(", where "),n("code",[t._v("server config")]),t._v(" is used to generate "),n("code",[t._v("server bundle")]),t._v(", "),n("code",[t._v("client config")]),t._v(" for Generate the resources sent to the browser and generate "),n("code",[t._v("clientManifest")]),t._v(".")]),t._v(" "),n("p",[t._v("These "),n("code",[t._v("webpack")]),t._v(" configurations are similar to the "),n("code",[t._v("webpack")]),t._v(" configuration of the "),n("code",[t._v("SPA")]),t._v(" application, and can be used for "),n("code",[t._v("SSR")]),t._v(" with a little tweaking, So "),n("code",[t._v("Vapper")]),t._v(" doesn't manage all the "),n("code",[t._v("webpack")]),t._v(" configurations by itself, but only the necessary "),n("code",[t._v("webpack")]),t._v(" configuration, so "),n("code",[t._v("Vapper")]),t._v(" can be used with great tools like "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-CLI"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://poi.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Poi"),n("OutboundLink")],1),t._v(". The benefit of doing this is that the capabilities of "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-CLI"),n("OutboundLink")],1),t._v(" or "),n("a",{attrs:{href:"https://poi.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Poi"),n("OutboundLink")],1),t._v(" indirectly become the power of "),n("code",[t._v("Vapper")]),t._v(".")]),t._v(" "),n("p",[n("code",[t._v("Vapper")]),t._v(" provides two packages for integration "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-CLI"),n("OutboundLink")],1),t._v(" and "),n("a",{attrs:{href:"https://poi.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Poi"),n("OutboundLink")],1),t._v(":")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"/configer.html#vapper-configer-vue-cli"}},[t._v("@vapper/configer-vue-cli")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/configer.html#vapper-configer-poi"}},[t._v("@vapper/configer-poi")])],1)]),t._v(" "),n("p",[t._v("As shown in the following diagram:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(240),alt:"builder"}})]),t._v(" "),n("p",[t._v("In addition to using "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-CLI"),n("OutboundLink")],1),t._v(" or "),n("a",{attrs:{href:"https://poi.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Poi"),n("OutboundLink")],1),t._v(" as the "),n("code",[t._v("webpack")]),t._v(" management tool, you can also use your own "),n("code",[t._v("webpack")]),t._v(" configuration. Vapper's "),n("code",[t._v("Builder")]),t._v(" module only requires you to expose the "),n("code",[t._v("getServerConfig")]),t._v(" and "),n("code",[t._v("getClientConfig")]),t._v(" methods:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("MyOwnConfiger")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token function"}},[t._v("getServerConfig")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// Return server configuration")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token function"}},[t._v("getClientConfig")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token operator"}},[t._v("...")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("// Return client configuration")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("For details, please see: "),n("router-link",{attrs:{to:"/configer.html#writing-configer"}},[t._v("Write Configer")])],1),t._v(" "),n("h2",{attrs:{id:"route-level-control"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#route-level-control","aria-hidden":"true"}},[t._v("#")]),t._v(" Route level control")]),t._v(" "),n("p",[t._v("Another design goal of "),n("code",[t._v("Vapper")]),t._v(" is to be as flexible as possible, considering the following scenario:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(227),alt:"spa-ssr-prerender"}})]),t._v(" "),n("p",[t._v("Our requirement is that when the user accesses "),n("code",[t._v("/home")]),t._v(", we want to perform server-side rendering ("),n("code",[t._v("SSR")]),t._v("); When the user accesses "),n("code",[t._v("/foo")]),t._v(", we want to send the "),n("code",[t._v("SPA")]),t._v(" page to the user; When the user accesses "),n("code",[t._v("/bar")]),t._v(", we want to send the pre-rendered content to the user. You may have noticed that this requires us to have routing-level control, and "),n("code",[t._v("Vapper")]),t._v(" has this capability, as shown in the following routing rules:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Factory function for creating routes")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'history'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    routes"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./components/Home.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// Enable ssr")]),t._v("\n        meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ssr"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/foo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./components/Foo.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// Disable ssr and send the SPA page to the user")]),t._v("\n        meta"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ssr"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("We can use the "),n("code",[t._v("@vapper/plugin-prerender")]),t._v(" plugin to support pre-rendering and specify routes that need to be pre-rendered, then "),n("code",[t._v("Vapper")]),t._v(" will render these routes into "),n("code",[t._v("html")]),t._v(" files at build time. When a user request comes, "),n("code",[t._v("Vapper")]),t._v(" will send this "),n("code",[t._v("html")]),t._v(" as a static resource to the user.")]),t._v(" "),n("h2",{attrs:{id:"error-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#error-handling","aria-hidden":"true"}},[t._v("#")]),t._v(" Error handling")]),t._v(" "),n("p",[t._v("When an error occurs, we have two choices:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(241),alt:"error-handling"}})]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("Show error page to user")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("Instead of displaying the error page, fall back to "),n("code",[t._v("SPA")]),t._v(" mode")])])])]),t._v(" "),n("p",[n("code",[t._v("Vapper")]),t._v(" allows you flexible control over how errors are handled. When an error occurs, you can display the error page to the user. You can also fall back to the "),n("code",[t._v("SPA")]),t._v(" mode so that when a non-fatal error occurs, the user can still Use our app.")]),t._v(" "),n("p",[t._v("One thing you need to know is: "),n("strong",[t._v("When there is no route in the "),n("code",[t._v("Vapper")]),t._v(" project to enable "),n("code",[t._v("SSR")]),t._v(", then it is a "),n("code",[t._v("SPA")]),t._v(" application")]),t._v(".")]),t._v(" "),n("p",[t._v("Read "),n("router-link",{attrs:{to:"/error-handling.html#custom-error-page"}},[t._v("Custom Error Page")]),t._v(" and "),n("router-link",{attrs:{to:"/error-handling.html#fall-back-to-spa-mode"}},[t._v("Fallback SPA")]),t._v(" for details.")],1),t._v(" "),n("h2",{attrs:{id:"data-prefetch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-prefetch","aria-hidden":"true"}},[t._v("#")]),t._v(" Data prefetch")]),t._v(" "),n("p",[n("code",[t._v("Vapper")]),t._v(" provides a more intuitive and powerful data prefetch method:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(242),alt:"vue-ssr-prefetcher"}})]),t._v(" "),n("p",[t._v("For details, please read: "),n("router-link",{attrs:{to:"/data-prefetching.html#the-createfetcher-function"}},[t._v("Data prefetch")])],1),t._v(" "),n("h2",{attrs:{id:"plugin-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plugin-architecture","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin architecture")]),t._v(" "),n("p",[t._v("The plugin architecture of "),n("code",[t._v("Vapper")]),t._v(" is very flexible. It borrows the plugin architecture of "),n("a",{attrs:{href:"https://cli.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-CLI"),n("OutboundLink")],1),t._v(". You can extend the "),n("code",[t._v("CLI")]),t._v(" command, add server middleware, and use the hook function to participate in the entire life cycle of "),n("code",[t._v("Vapper")]),t._v(".")]),t._v(" "),n("p",[t._v("In fact, many of the core features of "),n("code",[t._v("Vapper")]),t._v(" are written using their own plug-in mechanisms, such as "),n("code",[t._v("Fallback SPA")]),t._v(", "),n("code",[t._v("micro-caching")]),t._v(", etc. In addition, "),n("code",[t._v("Vapper")]),t._v(" can progressively support your desired functions through plugins, the official plugin is as follows:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("@vapper/plugin-fs-routes")])]),t._v(" "),n("li",[n("router-link",{attrs:{to:"/using-plugin.html#vapper-plugin-cookie"}},[t._v("@vapper/plugin-cookie")])],1),t._v(" "),n("li",[n("code",[t._v("@vapper/plugin-apollo")])])]),t._v(" "),n("p",[t._v("You can check out "),n("router-link",{attrs:{to:"/write-plugin.html#basic"}},[t._v("plugin development")]),t._v(" to learn how to write a plugin.")],1)])},[],!1,null,null,null);e.default=s.exports}}]);