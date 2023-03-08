"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[344],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6503:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7378),o=n(8944);const a="browserWindow_s0V6",s="browserWindowHeader_HY6p",c="buttons_kP2n",l="browserWindowAddressBar_EPHM",i="dot_rw9t",u="browserWindowMenuIcon_ibuU",p="bar_Wn1S",m="browserWindowBody__sFz";function d(e){let{children:t,minHeight:n,url:d="http://localhost:3000"}=e;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:s},r.createElement("div",{className:c},r.createElement("span",{className:i,style:{background:"#f25f58"}}),r.createElement("span",{className:i,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,o.Z)(l,"text--truncate")},d),r.createElement("div",{className:u},r.createElement("div",null,r.createElement("span",{className:p}),r.createElement("span",{className:p}),r.createElement("span",{className:p})))),r.createElement("div",{className:m},t))}},8110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(2685),o=(n(7378),n(5318)),a=n(6503);const s={id:"custom-tool",sidebar_position:5},c="Custom tool",l={unversionedId:"markdown-features/compile-code/custom-tool",id:"markdown-features/compile-code/custom-tool",title:"Custom tool",description:"To support custom scenario, you can provide a compile function",source:"@site/docs/markdown-features/compile-code/custom-tool.mdx",sourceDirName:"markdown-features/compile-code",slug:"/markdown-features/compile-code/custom-tool",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/compile-code/custom-tool",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"custom-tool",sidebar_position:5},sidebar:"docs",previous:{title:"HTML page",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/compile-code/html-page"},next:{title:"Code Element",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/code-element"}},i={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-tool"},"Custom tool"),(0,o.kt)("p",null,"To support custom scenario, you can provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"compile")," function\nand wire it up as you please."),(0,o.kt)("p",null,"In this example, we use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/piuccio/cowsay"},"cowsay")," to create silly looking cows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="./docusaurus.config.js"',title:'"./docusaurus.config.js"'},'const { say } = require("cowsay")\n\n...\n    compileCode: {\n        langs: [\n        ...,\n// highlight-start\n        {\n            lang: "cowsay",\n            compile: async (text, langOptions) => ({\n                stdout: say({ text })\n            })\n        }\n// highlight-end\n    ]}\n')),(0,o.kt)("p",null,"Let's take a look at this example in action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"```cowsay\nhello\n```\n")),(0,o.kt)("p",null,"When rendered in the docs, this snippet looks like any other code snippe.\nBut you'll also notice an additional box\nunderneath with the capitalized text."),(0,o.kt)(a.Z,{mdxType:"BrowserWindow"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cowsay"},"hello\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",metastring:'undefined title="Output"',undefined:!0,title:'"Output"'}," _______\n< hello >\n -------\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||\n"))))}m.isMDXComponent=!0}}]);