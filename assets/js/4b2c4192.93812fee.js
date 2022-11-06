"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[863],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(y,o(o({ref:e},u),{},{components:r})):n.createElement(y,o({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9478:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},o=void 0,i={unversionedId:"symbols",id:"symbols",title:"symbols",description:"|Operator|Description|Syntax|",source:"@site/docs/symbols.md",sourceDirName:".",slug:"/symbols",permalink:"/docs/symbols",draft:!1,editUrl:"https://github.npcom/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/symbols.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"functions",permalink:"/docs/functions"}},p={},s=[],u={toc:s};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Syntax"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"+"),(0,a.kt)("td",{parentName:"tr",align:null},"Addition: adds two operands"),(0,a.kt)("td",{parentName:"tr",align:null},"x + y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u2013"),(0,a.kt)("td",{parentName:"tr",align:null},"Subtraction: subtracts two operands"),(0,a.kt)("td",{parentName:"tr",align:null},"x \u2013 y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"*"),(0,a.kt)("td",{parentName:"tr",align:null},"Multiplication: multiplies two operands"),(0,a.kt)("td",{parentName:"tr",align:null},"x * y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Division (float): divides the first operand by the second"),(0,a.kt)("td",{parentName:"tr",align:null},"x / y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"//"),(0,a.kt)("td",{parentName:"tr",align:null},"Division (floor): divides the first operand by the second"),(0,a.kt)("td",{parentName:"tr",align:null},"x // y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"%"),(0,a.kt)("td",{parentName:"tr",align:null},"Modulus: returns the remainder when first operand is divided by the second"),(0,a.kt)("td",{parentName:"tr",align:null},"x % y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"**"),(0,a.kt)("td",{parentName:"tr",align:null},"Power : Returns first raised to power second"),(0,a.kt)("td",{parentName:"tr",align:null},"x ** y")))))}c.isMDXComponent=!0}}]);