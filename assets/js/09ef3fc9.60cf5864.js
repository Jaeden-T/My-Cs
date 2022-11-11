"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[951],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,f=u["".concat(i,".").concat(d)]||u[d]||y[d]||o;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=u;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var c=2;c<o;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,description:"Arrays",title:"Array Removal",id:"python-arrays-pop"},p="Pop",s={unversionedId:"python/Arrays/python-arrays-pop",id:"python/Arrays/python-arrays-pop",title:"Array Removal",description:"Arrays",source:"@site/docs/python/Arrays/pop.md",sourceDirName:"python/Arrays",slug:"/python/Arrays/python-arrays-pop",permalink:"/My-Cs/docs/python/Arrays/python-arrays-pop",draft:!1,editUrl:"https://github.com/Jaeden-T/My-Cs/edit/master/docs/python/Arrays/pop.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Arrays",title:"Array Removal",id:"python-arrays-pop"},sidebar:"myAutogeneratedSidebar",previous:{title:"Array Basics",permalink:"/My-Cs/docs/python/Arrays/python-arrays-basics"},next:{title:"Functions-vs-Procedures",permalink:"/My-Cs/docs/python/Functions-vs-Procedures"}},i={},c=[{value:"1D Array",id:"1d-array",level:2},{value:"2D array",id:"2d-array",level:2}],l={toc:c};function y(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pop"},"Pop"),(0,a.kt)("p",null,"Pop is basically a way to remove stuff from array"),(0,a.kt)("h2",{id:"1d-array"},"1D Array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'testArray = ["apple", "rice", "fish"]\n\ntestArray.pop(1)\n\nprint(testArray)\n')),(0,a.kt)("p",null,'The 1 in .pop(1) stands for position 1 in the array which stands is "rice" which leads our output to be ',(0,a.kt)("inlineCode",{parentName:"p"},"['apple', 'fish']")),(0,a.kt)("h2",{id:"2d-array"},"2D array"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'testArray = [["apple", "rice", "fish"], ["row1apple", "row1rice", "row1fish"]]\n\ntestArray[1].pop(1)\n\nprint(testArray)\n')),(0,a.kt)("p",null,"So TestrArray","[1]",' the 1 there represents which row and the .pop(1) removes the colleum\nour output would be "[',"['apple', 'rice', 'fish']",", ","['row1apple', 'row1fish']",']" as it selected row 1 and collem 1.'))}y.isMDXComponent=!0}}]);