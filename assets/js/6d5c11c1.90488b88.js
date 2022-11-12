"use strict";(self.webpackChunkcs=self.webpackChunkcs||[]).push([[686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:1,description:"Basics to file handling",title:"Files Basics",id:"python-file-basics"},l=void 0,o={unversionedId:"python/file/python-file-basics",id:"python/file/python-file-basics",title:"Files Basics",description:"Basics to file handling",source:"@site/docs/python/file/basics.md",sourceDirName:"python/file",slug:"/python/file/python-file-basics",permalink:"/My-Cs/docs/python/file/python-file-basics",draft:!1,editUrl:"https://github.com/Jaeden-T/My-Cs/edit/master/docs/python/file/basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Basics to file handling",title:"Files Basics",id:"python-file-basics"},sidebar:"myAutogeneratedSidebar",previous:{title:"Adding Information to an Array",permalink:"/My-Cs/docs/python/Arrays/python-arrays-append"},next:{title:"symbols",permalink:"/My-Cs/docs/python/symbols"}},s={},p=[{value:"Opening",id:"opening",level:2},{value:"Read Lines",id:"read-lines",level:2},{value:"Create a New File",id:"create-a-new-file",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can find the sample file used bellow."),(0,r.kt)("p",null,'"r" - Read - Default value. Opens a file for reading, error if the file does not exist'),(0,r.kt)("p",null,'"a" - Append - Opens a file for appending, creates the file if it does not exist'),(0,r.kt)("p",null,'"w" - Write - Opens a file for writing, creates the file if it does not exist'),(0,r.kt)("p",null,'"x" - Create - Creates the specified file, returns an error if the file exists'),(0,r.kt)("h2",{id:"opening"},"Opening"),(0,r.kt)("p",null,"In python you can use open() to open a python file\neg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'f = open("testFile.txt")\n')),(0,r.kt)("h1",{id:"closing"},"Closing"),(0,r.kt)("p",null,"its always good pratcice to close a file after using it so running ",(0,r.kt)("inlineCode",{parentName:"p"},"f.close() ")," closes the file"),(0,r.kt)("h1",{id:"reading"},"Reading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'f = open("testFile.txt")\nprint(f.read())\n\n# Or if you want to be more eficent and use f in if statements\nf = open("testFile.txt").read()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# This reads the first 2 charcters\nf = open("testFile.txt").read(2)\n')),(0,r.kt)("p",null,"The output would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Lo")),(0,r.kt)("h2",{id:"read-lines"},"Read Lines"),(0,r.kt)("p",null,"This reads the first line in the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'f = open("testFile.txt")\nprint(f.readline())\n')),(0,r.kt)("h1",{id:"sample-file"},"Sample File:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt etiam sit amet nisl purus.\nUt etiam sit amet nisl purus.\nUt etiam sit amet nisl purus.\nUt etiam sit amet nisl purus.\n")),(0,r.kt)("h1",{id:"writting"},"Writting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'f = open("testFile.txt", "a")\nf.write(\'\\n\')\nf.write("Woah new line")\nf.close()\n\nf = open("testFile.txt")\nprint(f.read())\n')),(0,r.kt)("p",null," \\n stands for new  lines and you have to close the file for the changes to take effect"),(0,r.kt)("p",null,"The output becomes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt etiam sit amet nisl purus.\nUt etiam sit amet nisl purus.\nUt etiam sit amet nisl purus.\nUt etiam sit amet nisl purus.\nWoah new line\n")),(0,r.kt)("h2",{id:"create-a-new-file"},"Create a New File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'f = open("testFile360noScope.txt", "x")\n')),(0,r.kt)("p",null,"the 'x' stands for create file for some reason but roll with it"),(0,r.kt)("h1",{id:"delete-file"},"Delete file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'import os\nos.remove("testFile360noScope.txt") #Removes the file name - file name in ""\n')),(0,r.kt)("p",null,"Using the OS module allows us to delete files"))}u.isMDXComponent=!0}}]);