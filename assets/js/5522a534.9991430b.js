"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[684],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,g=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6503:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7378),a=n(8944);const o="browserWindow_s0V6",s="browserWindowHeader_HY6p",l="buttons_kP2n",i="browserWindowAddressBar_EPHM",u="dot_rw9t",c="browserWindowMenuIcon_ibuU",d="bar_Wn1S",m="browserWindowBody__sFz";function p(e){let{children:t,minHeight:n,url:p="http://localhost:3000"}=e;return r.createElement("div",{className:o,style:{minHeight:n}},r.createElement("div",{className:s},r.createElement("div",{className:l},r.createElement("span",{className:u,style:{background:"#f25f58"}}),r.createElement("span",{className:u,style:{background:"#fbbe3c"}}),r.createElement("span",{className:u,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(i,"text--truncate")},p),r.createElement("div",{className:c},r.createElement("div",null,r.createElement("span",{className:d}),r.createElement("span",{className:d}),r.createElement("span",{className:d})))),r.createElement("div",{className:m},t))}},5014:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(2685),a=(n(7378),n(5318)),o=n(6503);const s={title:"Docusaurus Extras",sidebar_position:.5},l=void 0,i={unversionedId:"markdown-features/docusaurus-extras",id:"markdown-features/docusaurus-extras",title:"Docusaurus Extras",description:"Docusaurus supports extra Markdown features out of the box.",source:"@site/docs/markdown-features/docusaurus-extras.mdx",sourceDirName:"markdown-features",slug:"/markdown-features/docusaurus-extras",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/docusaurus-extras",draft:!1,tags:[],version:"current",sidebarPosition:.5,frontMatter:{title:"Docusaurus Extras",sidebar_position:.5},sidebar:"docs",previous:{title:"Markdown Features",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/"},next:{title:"Math Equations",permalink:"/docusaurus-plugins-rise4fun/docs/markdown-features/math-equations"}},u={},c=[{value:"Front Matter",id:"front-matter",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code Blocks",id:"code-blocks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX and React Components",id:"mdx-and-react-components",level:2}],d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert(`You clicked the color ${n} with label ${t}`)}},t)},m={toc:c,Highlight:d};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Docusaurus supports extra ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/markdown-features"},"Markdown features"))," out of the box."),(0,a.kt)("h2",{id:"front-matter"},"Front Matter"),(0,a.kt)("p",null,"Markdown documents have metadata at the top called ",(0,a.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./hello.md)\n")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"```md\nLet's learn about [diagrams](./diagrams).\n```\n")),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,"Let's learn about ",(0,a.kt)("a",{parentName:"p",href:"./diagrams"},"diagrams"),".")),(0,a.kt)("h2",{id:"images"},"Images"),(0,a.kt)("p",null,"Regular Markdown images are supported."),(0,a.kt)("p",null,"You can use absolute paths to reference images in the static directory (",(0,a.kt)("inlineCode",{parentName:"p"},"static/img/logo.svg"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"```md\n![Docusaurus logo](/img/logo.svg)\n```\n")),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docusaurus logo",src:n(8685).Z,width:"2500",height:"2500"}))),(0,a.kt)("p",null,"You can reference images relative to the current file as well."),(0,a.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n"))),(0,a.kt)("h2",{id:"admonitions"},"Admonitions"),(0,a.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("admonition",{title:"My tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this awesome feature option")),(0,a.kt)("admonition",{title:"Take care",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"This action is dangerous"))),(0,a.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,a.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,a.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '20px',\n      color: '#fff',\n      padding: '10px',\n      cursor: 'pointer',\n    }}\n    onClick={() => {\n      alert(`You clicked the color ${color} with label ${children}`)\n    }}>\n    {children}\n  </span>\n);\n\nThis is <Highlight color=\"#25c2a0\">Docusaurus green</Highlight> !\n")),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("p",null,"This is ",(0,a.kt)(d,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !")))}p.isMDXComponent=!0},8685:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNDk5LjYgMjUwMCIgdmlld0JveD0iMCAwIDI0OTkuNiAyNTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0xMTg3LjkgMTE4Ny45aC0xMTg3Ljl2LTExODcuOWgxMTg3Ljl6IiBmaWxsPSIjZjE1MTFiIi8+PHBhdGggZD0ibTI0OTkuNiAxMTg3LjloLTExODh2LTExODcuOWgxMTg3Ljl2MTE4Ny45eiIgZmlsbD0iIzgwY2MyOCIvPjxwYXRoIGQ9Im0xMTg3LjkgMjUwMGgtMTE4Ny45di0xMTg3LjloMTE4Ny45eiIgZmlsbD0iIzAwYWRlZiIvPjxwYXRoIGQ9Im0yNDk5LjYgMjUwMGgtMTE4OHYtMTE4Ny45aDExODcuOXYxMTg3Ljl6IiBmaWxsPSIjZmJiYzA5Ii8+PC9zdmc+"}}]);