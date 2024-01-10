(()=>{"use strict";var e,i,s,n={406:(e,i,s)=>{var n=s(893),r=s(745),t=s(655),l=s(250),o=s(294);const c=(0,o.createContext)(null),d=e=>{const[i,s]=(0,o.useState)("/home"),[r,t]=(0,o.useState)(""),l={pathname:i,hash:"",search:"",lang:r,setPath:s,setLang:t},d=(0,o.useMemo)((()=>l),[JSON.stringify(l)]);return(0,n.jsx)(c.Provider,Object.assign({value:d},{children:e.children}))};var a=s(133);s.p;const h=(0,a.vJ)((({theme:e})=>a.iv`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${e.fontSize.body};
      height: 100vh;
      width: 100vw;
      max-height: 100vh;
      max-width: 100vw;
      overflow: hidden;
    }
    html,
    body {
      font-family: 'Quicksand', sans-serif;
      background-color: ${e.colors.bg1};
      color: ${e.colors.text1};
      font-weight: 500;
    }
    h1 {
      font-size: ${e.fontSize.h1};
    }
    h2 {
      font-size: ${e.fontSize.h2};
    }
    h3 {
      font-size: ${e.fontSize.h3};
    }
    h4 {
      font-size: ${e.fontSize.h4};
    }
    h5 {
      font-size: ${e.fontSize.h5};
    }
    h6 {
      font-size: ${e.fontSize.h6};
    }
    p {
      font-size: ${e.fontSize.body};
      max-width: ${e.size(200)};
    }
    ul {
      list-style: none;
    }
    a {
      color: unset;
      text-decoration: underline;
    }
    button,
    select {
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      min-height: ${e.size(8)};
      display: flex;
      align-items: center;
      gap: ${e.size(1)};
      padding: 0 ${e.size(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${e.radius.verySmall};
      cursor: pointer;
    }
    div::-webkit-scrollbar {
      width: ${e.size(2)};
    }
    div::-webkit-scrollbar-track {
      background: #0000;
    }
    div::-webkit-scrollbar-thumb {
      background: ${e.colors.gray};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${e.colors.main};
    }
    #root {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  `)),x="#fafafa",j="#f5f5f5",u="#eeeeee",p="#e0e0e0",m="#bdbdbd",g="#9e9e9e",b="#757575",f="#616161",v="#424242",y="#37474f",w="#141414",S={size:e=>.2*e+"rem",colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:x,bg2:j,bg3:u,bg4:p,text1:"#212121",text2:v,text3:f,text4:g,gray:g,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:x,black:w},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},$=(Object.assign(Object.assign({},S),{colors:Object.assign(Object.assign({},S.colors),{bg1:w,bg2:v+"44",bg3:f+"44",bg4:b+"44",text1:p,text2:m,text3:g,text4:f,gray:b,white:p})}),a.ZP.div((({theme:e})=>a.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),z=a.ZP.div((()=>a.iv`
    height: 100%;
    overflow-y: auto;
  `)),O=a.ZP.div((({theme:e})=>a.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),P=e=>(0,n.jsx)($,{children:(0,n.jsx)(z,{children:(0,n.jsx)(O,Object.assign({id:"doc-content"},{children:e.children}))})});const k=()=>{return e=void 0,i=void 0,n=function*(){const e=document.getElementById("doc-content"),i=document.createElement("iframe");document.body.appendChild(i);const s=i.contentDocument;s.head.innerHTML=document.head.innerHTML,s.body.innerHTML=e.innerHTML,i.style.position="absolute",i.style.left="100vh",i.contentWindow.print()},new((s=void 0)||(s=Promise))((function(r,t){function l(e){try{c(n.next(e))}catch(e){t(e)}}function o(e){try{c(n.throw(e))}catch(e){t(e)}}function c(e){var i;e.done?r(e.value):(i=e.value,i instanceof s?i:new s((function(e){e(i)}))).then(l,o)}c((n=n.apply(e,i||[])).next())}));var e,i,s,n};var A=s(279);const C={download:(0,n.jsx)(A.HA8,{}),selector:(0,n.jsx)(A.ZaQ,{})},I=a.ZP.span((({theme:e,size:i})=>a.iv`
    display: inline-flex;
    font-size: ${e.size(i||7)};
    cursor: pointer;
  `)),E=e=>{const{type:i,size:s,style:r,onPress:t}=e;return(0,n.jsx)(I,Object.assign({className:"icon",size:s,style:r,onClick:t},{children:C[i]}))},T=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
    background-color: ${v};
    color: ${e.colors.white};
    padding: ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
  `)),Z=a.ZP.select((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),L=a.ZP.button((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),M=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},R=M(),W=()=>(0,n.jsxs)(T,{children:[(0,n.jsx)(Z,{children:(0,n.jsx)("option",{children:"Template 1"})}),(0,n.jsxs)(Z,Object.assign({defaultValue:R,onChange:e=>(e=>{const[i,s]=location.href.split("?"),n=new URLSearchParams(s);n.set("lang",e),location.href=`${i}?${n.toString()}`})(e.target.value)},{children:[(0,n.jsx)("option",Object.assign({value:"en"},{children:"English"})),(0,n.jsx)("option",Object.assign({value:"pt"},{children:"Português"}))]})),(0,n.jsxs)(L,Object.assign({onClick:k},{children:[(0,n.jsx)(E,{type:"download"}),"Save as PDF"]}))]}),J=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),F=e=>(0,n.jsx)(J,{children:e.children}),D={1:"Olá",2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam natus tempore atque incidunt at nihil qui, temporanisi, autem ex fuga ducimus voluptatum est vitae eligen dipraesentium sed architecto?",3:"",4:""},N={1:"",2:"",3:"",4:""},_=M(),B=e=>{const{textId:i,children:s}=e;return"es"===_?(0,n.jsx)("span",{children:N[i]||"NO TEXT"}):"pt"===_?(0,n.jsx)("span",{children:D[i]||"NO TEXT"}):(0,n.jsx)("span",{children:s})},G=a.ZP.div((()=>a.iv``)),U=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${y};
    color: ${u};

    h1 {
      margin-bottom: ${e.size(2)};
      color: ${j};
    }

    h3 {
      margin-bottom: ${e.size(4)};
    }
  `)),V=a.ZP.div((({theme:e})=>a.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${x};
    color: ${v};
  `)),Q=a.ZP.div((({theme:e})=>a.iv`
    margin: ${e.size(4)} 0;
  `)),H=a.ZP.h4((({theme:e})=>a.iv`
    margin-bottom: ${e.size(2)};
  `)),K=a.ZP.div((({theme:e})=>a.iv`
    display: inline-flex;
    gap: ${e.size(2)};

    span {
      font-weight: bold;
    }
  `)),q=a.ZP.div((({theme:e,gap:i,mb:s})=>a.iv`
    display: flex;
    gap: ${e.size(i)};
    margin-bottom: ${e.size(s||2)};
  `)),X=a.ZP.div((({theme:e,gap:i})=>a.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(i)};
  `)),Y=a.ZP.div((({theme:e})=>a.iv`
    width: ${e.size(40)};
    font-size: ${e.fontSize.verySmall};
    margin-top: ${e.size(.75)};
  `)),ee=a.ZP.ul((({theme:e})=>a.iv`
    list-style: disc inside;
    padding-left: ${e.size(1)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(2)};
    }
  `)),ie=()=>(0,n.jsxs)(U,{children:[(0,n.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,n.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,n.jsxs)(q,Object.assign({gap:12,mb:1},{children:[(0,n.jsxs)(X,Object.assign({gap:2},{children:[(0,n.jsxs)(K,{children:[(0,n.jsx)(B,{children:"Address"}),"Rua Pernambuco Bairro Geraldão"]}),(0,n.jsxs)(K,{children:[(0,n.jsx)(B,{children:"Phone"}),"+55 89994009646"]}),(0,n.jsxs)(K,{children:[(0,n.jsx)(B,{children:"Email"}),(0,n.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,n.jsxs)(X,Object.assign({gap:2},{children:[(0,n.jsxs)(K,{children:[(0,n.jsx)(B,{children:"GitHub"}),(0,n.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,n.jsxs)(K,{children:[(0,n.jsx)(B,{children:"Linkedin"}),(0,n.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),se=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"Experience"})}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2021/12 - 2023/12"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"WestPoint Software Solutions"})}),(0,n.jsx)("p",{children:(0,n.jsx)(B,{children:"UK software company that provides software development services to third-party companies."})}),(0,n.jsxs)(ee,{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Collums"})}),(0,n.jsx)(B,{children:" Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with ReactJS, NodeJS, Mongodb and Docker."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Vouch IO"})}),(0,n.jsx)(B,{children:" Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, Blockchain API, Android/IOS APIs."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"TalentId"})}),(0,n.jsx)(B,{children:" Online platform that uses the powers of GPT chat to evaluate candidates' CVs and assign them a score. built with NextJS with MatineUI, OpenAI API and AWS services."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Vintage Acquisitions"})}),(0,n.jsx)(B,{children:" Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Quarx"})}),(0,n.jsx)(B,{children:" Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Westpoint Website"})}),(0,n.jsx)(B,{children:" Company website built with NextJS and Styled Components."})]})]})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2018/08 - 2019/11"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"SocialPower"})}),(0,n.jsx)("p",{children:(0,n.jsx)(B,{children:"Web application with geolocation to map streets points that need attention from the city hall, built using nodeJS and AngularJS."})})]})]})]}),ne=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"Education"})}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2020/01 - 2023/12"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"Udemy Certificates"})}),(0,n.jsx)("p",{children:(0,n.jsxs)(ee,{children:[(0,n.jsx)("li",{children:"Clojure Introduction"}),(0,n.jsx)("li",{children:"Java with SQL Databases"}),(0,n.jsx)("li",{children:"Saverless Applications on AWS"}),(0,n.jsx)("li",{children:"Typescript with NodeJS, SQL and noSQL Databases"}),(0,n.jsx)("li",{children:"ReactJS with Redux"}),(0,n.jsx)("li",{children:"English Step-by-Step"})]})})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2017/01 - 2019/11"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"IFPI - Instituto Federal do Piauí"})}),(0,n.jsx)("p",{children:(0,n.jsx)(B,{children:"Ensino Superior, Análise de Sistemas de Computação."})})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2018/08 - 2020/01"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"})}),(0,n.jsx)("p",{children:(0,n.jsx)(B,{children:"Ensino Médio, Técnico em Informatica."})})]})]})]}),re=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(H,{children:(0,n.jsx)(B,{children:"Extra Works"})}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2024"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Personal CV"})}),(0,n.jsx)(B,{children:" This document wronte in react with support to multiple languages."})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2023"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Console UI for desktops"})}),(0,n.jsx)(B,{children:" Desktop application using electron and react to provide console experience like PS5/Xbox for PCs."})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2023"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Easy Encrypt"})}),(0,n.jsx)(B,{children:" Web and Mobile application to encrypt plan text."})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2022"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Task Manager"})}),(0,n.jsx)(B,{children:" Todo application with calendar and notes."})]})]}),(0,n.jsxs)(q,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(B,{children:"2021"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(K,{children:(0,n.jsx)(B,{children:"Translation PWA"})}),(0,n.jsx)(B,{children:" Translation website with multiple language support."})]})]})]}),te=()=>(0,n.jsxs)(G,{children:[(0,n.jsx)(ie,{}),(0,n.jsxs)(V,{children:[(0,n.jsx)(Q,{children:(0,n.jsx)(B,{children:"Resume, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga ea veniam harum repellendus fugiat illo error laboriosam ducimus accusamus inventore beatae vero quod necessitatibus facilis unde rerum quis. Corporis?"})}),(0,n.jsx)(se,{}),(0,n.jsx)(ne,{}),(0,n.jsx)(re,{})]})]}),le=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(W,{}),(0,n.jsx)(F,{children:(0,n.jsx)(P,{children:(0,n.jsx)(te,{})})})]}),oe=()=>{const e=(0,o.useContext)(c);return(0,n.jsxs)(a.f6,Object.assign({theme:S},{children:[(0,n.jsx)(h,{}),(0,n.jsx)(l.Z5,Object.assign({location:e},{children:(0,n.jsx)(l.AW,{path:"/*",element:(0,n.jsx)(le,{})})}))]}))},ce=(0,o.createContext)(null),de=e=>{const[i,s]=(0,o.useState)(!0),[r,t]=(0,o.useState)(""),l={firstRun:i,bgImage:r,setFirstRun:s,setBgImage:t},c=(0,o.useMemo)((()=>l),[JSON.stringify(l)]);return(0,n.jsx)(ce.Provider,Object.assign({value:c},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,n.jsx)((()=>(0,n.jsx)(de,{children:(0,n.jsx)(d,{children:(0,n.jsx)(a.LC,{children:(0,n.jsx)(t.VK,{children:(0,n.jsx)(oe,{})})})})})),{}))}},r={};function t(e){var i=r[e];if(void 0!==i)return i.exports;var s=r[e]={exports:{}};return n[e](s,s.exports,t),s.exports}t.m=n,e=[],t.O=(i,s,n,r)=>{if(!s){var l=1/0;for(a=0;a<e.length;a++){for(var[s,n,r]=e[a],o=!0,c=0;c<s.length;c++)(!1&r||l>=r)&&Object.keys(t.O).every((e=>t.O[e](s[c])))?s.splice(c--,1):(o=!1,r<l&&(l=r));if(o){e.splice(a--,1);var d=n();void 0!==d&&(i=d)}}return i}r=r||0;for(var a=e.length;a>0&&e[a-1][2]>r;a--)e[a]=e[a-1];e[a]=[s,n,r]},t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var r=Object.create(null);t.r(r);var l={};i=i||[null,s({}),s([]),s(s)];for(var o=2&n&&e;"object"==typeof o&&!~i.indexOf(o);o=s(o))Object.getOwnPropertyNames(o).forEach((i=>l[i]=()=>e[i]));return l.default=()=>e,t.d(r,l),r},t.d=(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var s=i.getElementsByTagName("script");if(s.length)for(var n=s.length-1;n>-1&&!e;)e=s[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={179:0};t.O.j=i=>0===e[i];var i=(i,s)=>{var n,r,[l,o,c]=s,d=0;if(l.some((i=>0!==e[i]))){for(n in o)t.o(o,n)&&(t.m[n]=o[n]);if(c)var a=c(t)}for(i&&i(s);d<l.length;d++)r=l[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(a)},s=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))})(),t.nc=void 0;var l=t.O(void 0,[977],(()=>t(406)));l=t.O(l)})();