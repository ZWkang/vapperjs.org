(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{302:function(t,a,s){"use strict";s.r(a);var n=s(38),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"使用缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用缓存")]),t._v(" "),s("p",[t._v("缓存能够更快的将内容发送给客户端，提升 "),s("code",[t._v("web")]),t._v(" 应用程序的性能，同时减少服务器的负载。")]),t._v(" "),s("h2",{attrs:{id:"页面级缓存-micro-caching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面级缓存-micro-caching","aria-hidden":"true"}},[t._v("#")]),t._v(" 页面级缓存(micro-caching)")]),t._v(" "),s("p",[t._v("如"),s("a",{attrs:{href:"https://ssr.vuejs.org/guide/caching.html#page-level-caching",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档中介绍"),s("OutboundLink")],1),t._v("的那样，对特定的页面合理的应用 "),s("a",{attrs:{href:"https://www.nginx.com/blog/benefits-of-microcaching-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("micro-caching"),s("OutboundLink")],1),t._v(" 能够大大改善服务器处理并发的能力(吞吐率 "),s("code",[t._v("RPS")]),t._v(")。")]),t._v(" "),s("p",[t._v("但并非所有页面都适合应用 "),s("a",{attrs:{href:"https://www.nginx.com/blog/benefits-of-microcaching-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("micro-caching"),s("OutboundLink")],1),t._v(" 缓存策略，我们可以将资源分为三类：")]),t._v(" "),s("ul",[s("li",[t._v("静态资源：如 "),s("code",[t._v("js")]),t._v("、"),s("code",[t._v("css")]),t._v("、"),s("code",[t._v("images")]),t._v(" 等。")]),t._v(" "),s("li",[t._v("用户特定的动态资源：不同的用户访问相同的资源会得到不同的内容。")]),t._v(" "),s("li",[t._v("用户无关的动态资源：任何用户访问该资源都会得到相同的内容，但该内容可能在任意时间发生变化，如博客文章。")])]),t._v(" "),s("p",[t._v("只有“用户无关的动态资源”适合应用 "),s("a",{attrs:{href:"https://www.nginx.com/blog/benefits-of-microcaching-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("micro-caching"),s("OutboundLink")],1),t._v(" 缓存策略。")]),t._v(" "),s("p",[t._v("默认情况下 "),s("code",[t._v("Vapper")]),t._v(" 不会对任何页面应用 "),s("a",{attrs:{href:"https://www.nginx.com/blog/benefits-of-microcaching-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("micro-caching"),s("OutboundLink")],1),t._v(" 缓存策略，你可以通过在 "),s("code",[t._v("vapper.config.js")]),t._v(" 文件中指定 "),s("code",[t._v("pageCache")]),t._v(" 配置选项开启 "),s("a",{attrs:{href:"https://www.nginx.com/blog/benefits-of-microcaching-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("micro-caching"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pageCache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 只有 /about 会被应用 micro-caching")]),t._v("\n    cacheable"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" req "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/about'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"cacheable-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cacheable-函数","aria-hidden":"true"}},[t._v("#")]),t._v(" cacheable 函数")]),t._v(" "),s("p",[t._v("默认情况下，"),s("code",[t._v("Vapper")]),t._v(" 不会对任何页面应用 "),s("a",{attrs:{href:"https://www.nginx.com/blog/benefits-of-microcaching-nginx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("micro-caching"),s("OutboundLink")],1),t._v(" 缓存策略，因此 "),s("code",[t._v("pageCache.cacheable")]),t._v(" 的默认值为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pageCache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("// 不开启缓存")]),t._v("\n    cacheable"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("cacheable")]),t._v(" 函数接受请求对象("),s("code",[t._v("req")]),t._v(")作为参数，通过返回 "),s("code",[t._v("true")]),t._v(" 或 "),s("code",[t._v("false")]),t._v("，来决定是否缓存该页面，如果返回 "),s("code",[t._v("true")]),t._v(" 则代表需要缓存。因此可以通过自定义 "),s("code",[t._v("cacheable")]),t._v(" 函数编写缓存策略：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pageCache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cacheable"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" req "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/about'")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"缓存选项-cacheoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存选项-cacheoptions","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存选项 cacheOptions")]),t._v(" "),s("p",[s("code",[t._v("Vapper")]),t._v(" 内部使用了 "),s("a",{attrs:{href:"https://github.com/isaacs/node-lru-cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-lru-cache"),s("OutboundLink")],1),t._v("，默认的选项为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pageCache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cacheOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      max"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      maxAge"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("全部选项请查看："),s("a",{attrs:{href:"https://github.com/isaacs/node-lru-cache#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("node-lru-cache Options"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"缓存的-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存的-key","aria-hidden":"true"}},[t._v("#")]),t._v(" 缓存的 key")]),t._v(" "),s("p",[t._v("默认情况下，"),s("code",[t._v("Vapper")]),t._v(" 采用当前 URL 作为缓存的 "),s("code",[t._v("key")]),t._v(" 值，当有时这不能满足需求，你可以通过自定义 "),s("code",[t._v("pageCache.getCacheKey")]),t._v(" 函数来实现自定义的缓存 "),s("code",[t._v("key")]),t._v("，"),s("code",[t._v("pageCache.getCacheKey")]),t._v(" 的默认值为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  pageCache"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function-variable function"}},[t._v("getCacheKey")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" req "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" req"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"组件级缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件级缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件级缓存")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://ssr.vuejs.org/#what-is-server-side-rendering-ssr",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-server-renderer"),s("OutboundLink")],1),t._v(" 内置了"),s("a",{attrs:{href:"https://ssr.vuejs.org/guide/caching.html#component-level-caching",target:"_blank",rel:"noopener noreferrer"}},[t._v("组件级缓存"),s("OutboundLink")],1),t._v("，只需要提供相应的缓存实现即可。")]),t._v(" "),s("p",[t._v("可以通过 "),s("code",[t._v("vapper.config.js")]),t._v(" 文件的 "),s("code",[t._v("rendererOptions")]),t._v(" 选项指定相应的缓存实现：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// vapper.config.js")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("LRU")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'lru-cache'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cache "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("LRU")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  max"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10000")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maxAge"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rendererOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cache\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("接着通过 "),s("code",[t._v("serverCacheKey")]),t._v(" 组件选项实现组件的缓存，但有一些注意事项建议您优先阅读："),s("a",{attrs:{href:"https://ssr.vuejs.org/guide/caching.html#component-level-caching",target:"_blank",rel:"noopener noreferrer"}},[t._v("Component-level Caching"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);