"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[909],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(y,c(c({ref:t},i),{},{components:r})):n.createElement(y,c({ref:t},i))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9445:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},c=void 0,s={unversionedId:"python/Functions-vs-Procedures",id:"python/Functions-vs-Procedures",title:"Functions-vs-Procedures",description:"Procedures:",source:"@site/docs/python/Functions-vs-Procedures.md",sourceDirName:"python",slug:"/python/Functions-vs-Procedures",permalink:"/My-Cs/docs/python/Functions-vs-Procedures",draft:!1,editUrl:"https://github.com/Jaeden-T/My-Cs/edit/master/docs/python/Functions-vs-Procedures.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Validation -\\_(!-!)_/-",permalink:"/My-Cs/docs/python/python-valid"},next:{title:"symbols",permalink:"/My-Cs/docs/python/symbols"}},u={},l=[],i={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Procedures:\nA procedure is a named block of code that performs a specific task, but does not return a value. The procedure can be called by another part of the program. "),(0,o.kt)("p",null,"Eg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'def display_menu():\n    print("1: Log in")\n    print("2: Sign up")\n    print("9: Quit")\n')),(0,o.kt)("p",null,"Functions:\nA function is a named block of code that has the purpose of returning a value (called the 'return value'). Like a procedure, a function can be called by another part of the program."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def calculate_area(length):\n    area = length * length\n    return area\n\ndef main():\n    length = 12\n    result = calculate_area(length)\n    print(result)\n")))}p.isMDXComponent=!0}}]);