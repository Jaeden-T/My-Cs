"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[856],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(s,".").concat(u)]||d[u]||y[u]||o;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},287:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1,description:"Arrays",title:"Adding Information to an Array",id:"python-arrays-append"},i=void 0,p={unversionedId:"python/Arrays/python-arrays-append",id:"python/Arrays/python-arrays-append",title:"Adding Information to an Array",description:"Arrays",source:"@site/docs/python/Arrays/append.md",sourceDirName:"python/Arrays",slug:"/python/Arrays/python-arrays-append",permalink:"/My-Cs/docs/python/Arrays/python-arrays-append",draft:!1,editUrl:"https://github.com/Jaeden-T/My-Cs/edit/master/docs/python/Arrays/append.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Arrays",title:"Adding Information to an Array",id:"python-arrays-append"},sidebar:"myAutogeneratedSidebar",previous:{title:"Validation -\\_(!-!)_/-",permalink:"/My-Cs/docs/python/python-valid"},next:{title:"Array Basics",permalink:"/My-Cs/docs/python/Arrays/python-arrays-basics"}},s={},l=[{value:"Use in 1D Arrays",id:"use-in-1d-arrays",level:2},{value:"Use in 2D Arrays",id:"use-in-2d-arrays",level:2}],c={toc:l};function y(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The append function adds information to the end of an array "),(0,a.kt)("h2",{id:"use-in-1d-arrays"},"Use in 1D Arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'testArray = ["apple", "rice", "fish"]\n\ntestArray.append("Test")\n')),(0,a.kt)("p",null,'This adds the word "test" to the end of the array.\nChanging it to ',(0,a.kt)("inlineCode",{parentName:"p"},"['apple', 'rice', 'fish', 'Test']")),(0,a.kt)("h2",{id:"use-in-2d-arrays"},"Use in 2D Arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'testArray = [["apple", "rice", "fish"], ["row1apple", "row1rice", "row1fish"]]\n\ntestArray[1].append("Test")\n\nprint(testArray)\n')),(0,a.kt)("p",null,'This code adds the word "Test" to the end of row 1\nTHis changes the array to look like this\n\'[',"['apple', 'rice', 'fish']",", ","['row1apple', 'row1rice', 'row1fish', 'Test']","]'"),(0,a.kt)("p",null,"or if you want to append another row to a 2d array you can do this: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'testArray = [["apple", "rice", "fish"], ["row1apple", "row1rice", "row1fish"]]\n\ntestArray.append(["row2apple", "row2rice", "row2fish"])\n\nprint(testArray)\n')),(0,a.kt)("p",null,"This leads to the output being\n",(0,a.kt)("inlineCode",{parentName:"p"},"[['apple', 'rice', 'fish'], ['row1apple', 'row1rice', 'row1fish'], ['row1apple', 'row1rice', 'row1fish']]")))}y.isMDXComponent=!0}}]);