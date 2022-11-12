"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:7,description:"Using Validation",title:"Validation -_(!-!)_/-",id:"python-valid"},i=void 0,l={unversionedId:"python/python-valid",id:"python/python-valid",title:"Validation -\\_(!-!)_/-",description:"Using Validation",source:"@site/docs/python/7validation.md",sourceDirName:"python",slug:"/python/python-valid",permalink:"/My-Cs/docs/python/python-valid",draft:!1,editUrl:"https://github.com/Jaeden-T/My-Cs/edit/master/docs/python/7validation.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Using Validation",title:"Validation -\\_(!-!)_/-",id:"python-valid"},sidebar:"myAutogeneratedSidebar",previous:{title:"Getting time!",permalink:"/My-Cs/docs/python/python-time"},next:{title:"Random stuff",permalink:"/My-Cs/docs/python/python-random"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'#What is validatton?\n"Data validation is when a program checks the data to make sure it meets some rules or restrictions." - study.com'),(0,o.kt)("p",null,"Example issue:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'x = input("Input something 6 characters long: ")\nprint(x)\n')),(0,o.kt)("p",null,"Since there is no if statment to check the length of the string it allows us to input any length\nExample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Input something 6 characters long: 1000000000\n1000000000\n")),(0,o.kt)("p",null,'it allows me to input "1000000000" which is longer then 6 characters.'),(0,o.kt)("p",null,"This is where validaiton comes in to prevent this.\nOne could use a while length of x does not equal to 6"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'x = "" \nwhile len(x) != 6: #Checks that the length of x does not equal 6\n    x = input("Input something 6 characters long: ")\n\n\nprint(x)\n')),(0,o.kt)("p",null,"The result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Input something 6 characters long: 1000\nInput something 6 characters long: 100000\n100000\n")),(0,o.kt)("p",null,"The code only accepts my input when the length of the string is equal to 6 characters"))}u.isMDXComponent=!0}}]);