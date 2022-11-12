"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4,description:"If/elif/else",title:"Conditions!",id:"python-conditions"},a=void 0,s={unversionedId:"python/python-conditions",id:"python/python-conditions",title:"Conditions!",description:"If/elif/else",source:"@site/docs/python/4conditions.md",sourceDirName:"python",slug:"/python/python-conditions",permalink:"/My-Cs/docs/python/python-conditions",draft:!1,editUrl:"https://github.com/Jaeden-T/My-Cs/edit/master/docs/python/4conditions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"If/elif/else",title:"Conditions!",id:"python-conditions"},sidebar:"myAutogeneratedSidebar",previous:{title:"Input!",permalink:"/My-Cs/docs/python/python-input"},next:{title:"Fuctions vs PRocderues",permalink:"/My-Cs/docs/python/python-funcVsProc"}},l={},p=[{value:"Using elif vs if",id:"using-elif-vs-if",level:2},{value:"Nested if:",id:"nested-if",level:3},{value:"Elif statements:",id:"elif-statements",level:3}],c={toc:p};function f(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Conditions can be used in if statments and loops"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Equals: a == b"),(0,i.kt)("li",{parentName:"ul"},"Not Equals: a != b"),(0,i.kt)("li",{parentName:"ul"},"Less than: a < b"),(0,i.kt)("li",{parentName:"ul"},"Less than or equal to: a <= b"),(0,i.kt)("li",{parentName:"ul"},"Greater than: a > b"),(0,i.kt)("li",{parentName:"ul"},"Greater than or equal to: a >= b")),(0,i.kt)("p",null,"Example Conditions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'x = 10\ny = 10\nif x == y:\n    print("x = y")\nelse:\n    print("Diffrent")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'x = 10\ny = 10\nif x == y:\n    print("x = y")\nelif x >= y:\n    print("X more than or equal to y")\nelse:\n    print("Diffrent")\n')),(0,i.kt)("h2",{id:"using-elif-vs-if"},"Using elif vs if"),(0,i.kt)("h3",{id:"nested-if"},"Nested if:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'x = 10\ny = 10\nif x == y:\n    print("x = y")\nif x >= y:\n    print("X more than or equal to y")\nelse:\n    print("Diffrent")\n')),(0,i.kt)("p",null,"EXAMPLE IF STAMENT DIGRAM:\n(Image from cs50p)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ifstat",src:n(6723).Z,width:"464",height:"1140"})),(0,i.kt)("p",null,"The code is slower as it has to check for another if statement even if it reads true/false"),(0,i.kt)("h3",{id:"elif-statements"},"Elif statements:"),(0,i.kt)("p",null,"(Image from cs50p)\n",(0,i.kt)("img",{alt:"ifstat",src:n(4379).Z,width:"1066",height:"1146"})),(0,i.kt)("p",null,"This code is more efficient as it only goes to the next ",(0,i.kt)("inlineCode",{parentName:"p"},"elif")," statement only if it reads false instead of checking it for both true and false results."))}f.isMDXComponent=!0},4379:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/elif example-8a0c2c8dff59c081db23268ee981c45f.png"},6723:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ifexample-8ec947a11868577f3fb15d23f60c5c4a.png"}}]);