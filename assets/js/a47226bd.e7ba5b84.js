"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6503:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7378),i=n(8944);const a="browserWindow_s0V6",o="browserWindowHeader_HY6p",l="buttons_kP2n",s="browserWindowAddressBar_EPHM",p="dot_rw9t",d="browserWindowMenuIcon_ibuU",m="bar_Wn1S",c="browserWindowBody__sFz";function u(e){let{children:t,minHeight:n,url:u="http://localhost:3000"}=e;return r.createElement("div",{className:a,style:{minHeight:n}},r.createElement("div",{className:o},r.createElement("div",{className:l},r.createElement("span",{className:p,style:{background:"#f25f58"}}),r.createElement("span",{className:p,style:{background:"#fbbe3c"}}),r.createElement("span",{className:p,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,i.Z)(s,"text--truncate")},u),r.createElement("div",{className:d},r.createElement("div",null,r.createElement("span",{className:m}),r.createElement("span",{className:m}),r.createElement("span",{className:m})))),r.createElement("div",{className:c},t))}},731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(2685),i=(n(7378),n(5318)),a=n(6503);const o={title:"Import File",sidebar_position:3.5},l="Import File",s={unversionedId:"markdown-features/import-file",id:"markdown-features/import-file",title:"Import File",description:"Rise4fun automatically add support for importing patial markdown files.",source:"@site/docs/markdown-features/import-file.mdx",sourceDirName:"markdown-features",slug:"/markdown-features/import-file",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/import-file",draft:!1,tags:[],version:"current",sidebarPosition:3.5,frontMatter:{title:"Import File",sidebar_position:3.5},sidebar:"docs",previous:{title:"CodeSandbox button",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/codesandbox-button"},next:{title:"Code Tabs",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/code-tabs"}},p={},d=[{value:"This is an imported markdown file",id:"this-is-an-imported-markdown-file",level:3},{value:"This heading was imported",id:"this-heading-was-imported",level:2},{value:"Optional imports",id:"optional-imports",level:2},{value:"Hiding partial files",id:"hiding-partial-files",level:2}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"import-file"},"Import File"),(0,i.kt)("p",null,"Rise4fun automatically add support for importing patial markdown files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"Some content.\n\n{@import ./hello.mdp}\n\nMore content.\n")),(0,i.kt)("p",null,"The file path is relative to the current file location."),(0,i.kt)(a.Z,{mdxType:"BrowserWindow"},(0,i.kt)("p",null,"Some content."),(0,i.kt)("h3",{id:"this-is-an-imported-markdown-file"},"This is an imported markdown file"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Hello, this text is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.mdp"),".")),(0,i.kt)("h2",{id:"this-heading-was-imported"},"This heading was imported"),(0,i.kt)("p",null,"More content.")),(0,i.kt)("h2",{id:"optional-imports"},"Optional imports"),(0,i.kt)("p",null,"By default, the importer throws if the file is not found. You can make the file import optinal by using ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"This file below should be imported if present.\n\n{@import optional ./missing.mdp}\n\nMore content.\n")),(0,i.kt)(a.Z,{mdxType:"BrowserWindow"},(0,i.kt)("p",null,"This file below should be imported if present."),(0,i.kt)("p",null),(0,i.kt)("p",null,"More content.")),(0,i.kt)("h2",{id:"hiding-partial-files"},"Hiding partial files"),(0,i.kt)("p",null,"By default, all markdown files will end up in the sidebar and generated as pages. To avoid this, you can use\na different file extension, like ",(0,i.kt)("inlineCode",{parentName:"p"},".mdp"),". To get tooling support in VS code, add a file association entry in the settings and\ninstall the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx"},"MDX extension"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".vscode/settings.json"',title:'".vscode/settings.json"'},'{\n    "files.associations": {\n        // highlight-next-line\n        "*.mdp": "mdx"\n    }\n}\n')))}c.isMDXComponent=!0}}]);