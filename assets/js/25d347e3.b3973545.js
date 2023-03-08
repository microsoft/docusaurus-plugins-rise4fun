"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[560],{5318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=o(n),g=a,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,u=new Array(i);u[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,u[1]=l;for(var o=2;o<i;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9798:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(7378),a=n(8944);const i="tabItem_wHwb";function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,u),hidden:n},t)}},3930:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(2685),a=n(7378),i=n(8944),u=n(3457),l=n(3620),s=n(654),o=n(784),c=n(1819);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function g(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=d(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[s,o]=f({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=s??p;return g({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),m(e)}),[o,m,i]),tabValues:i}}var b=n(6457);const h="tabList_J5MA",y="tabItem_l0OV";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,u.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=o[n].value;r!==l&&(p(t),s(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},u,{className:(0,i.Z)("tabs__item",y,u?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",h)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(w,(0,r.Z)({},e,t)))}function E(e){const t=(0,b.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},2462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(2685),a=(n(7378),n(5318)),i=n(3930),u=n(9798);const l={sidebar_position:2},s="\ud83d\udce6 plugin-application-insights",o={unversionedId:"plugins/docusaurus-plugin-application-insights",id:"plugins/docusaurus-plugin-application-insights",title:"\ud83d\udce6 plugin-application-insights",description:"This plugin lets you track page views using Microsoft Application Insights.",source:"@site/docs/plugins/docusaurus-plugin-application-insights.mdx",sourceDirName:"plugins",slug:"/plugins/docusaurus-plugin-application-insights",permalink:"/docusaurus-plugins-rise4fun/docs/plugins/docusaurus-plugin-application-insights",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Plugins",permalink:"/docusaurus-plugins-rise4fun/docs/plugins/"},next:{title:"\ud83d\udce6 plugin-rise4fun",permalink:"/docusaurus-plugins-rise4fun/docs/plugins/docusaurus-plugin-rise4fun"}},c={},p=[{value:"Configuration",id:"configuration",level:2}],d={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-plugin-application-insights"},"\ud83d\udce6 plugin-application-insights"),(0,a.kt)("p",null,"This plugin lets you track page views using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@microsoft/applicationinsights-web"},"Microsoft Application Insights"),"."),(0,a.kt)("p",null,"This plugin is only active in production mode."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Install the plugin"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @rise4fun/docusaurus-plugin-application-insights\n"))),(0,a.kt)(u.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @rise4fun/docusaurus-plugin-application-insights\n")))),(0,a.kt)("p",null,"Add the plugin to your plugin list along with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/ApplicationInsights-JS#snippet-configuration-options"},"application-insights-web configuration")," object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const config = {\n    plugins: [\n        ...,\n        // highlight-start\n        ["@rise4fun/docusaurus-plugin-application-insights", {\n            instrumentationKey: "YOUR INSTRUMENTATION KEY HERE"\n        }]\n        // highlight-end\n    ]\n}\n')))}g.isMDXComponent=!0}}]);