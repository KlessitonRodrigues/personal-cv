(()=>{"use strict";var e,i,s,n={406:(e,i,s)=>{var n=s(893),t=s(745),r=s(655),o=s(250),l=s(294);const c=(0,l.createContext)(null),a=e=>{const[i,s]=(0,l.useState)("/home"),[t,r]=(0,l.useState)(""),o={pathname:i,hash:"",search:"",lang:t,setPath:s,setLang:r},a=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,n.jsx)(c.Provider,Object.assign({value:a},{children:e.children}))};var d=s(133);s.p;const h=(0,d.vJ)((({theme:e})=>d.iv`
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
      text-decoration: underline;
      color: unset;
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
  `)),x="#fafafa",u="#f5f5f5",j="#eeeeee",m="#e0e0e0",g="#bdbdbd",p="#9e9e9e",b="#757575",f="#616161",v="#424242",y="#37474f",w="#141414",$={size:e=>.2*e+"rem",colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:x,bg2:u,bg3:j,bg4:m,text1:"#212121",text2:v,text3:f,text4:p,gray:p,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:x,black:w},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},O=(Object.assign(Object.assign({},$),{colors:Object.assign(Object.assign({},$.colors),{bg1:w,bg2:v+"44",bg3:f+"44",bg4:b+"44",text1:m,text2:g,text3:p,text4:f,gray:b,white:m})}),d.ZP.div((({theme:e})=>d.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),z=d.ZP.div((()=>d.iv`
    height: 100%;
    overflow-y: auto;
  `)),S=d.ZP.div((({theme:e})=>d.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),P=e=>(0,n.jsx)(O,{children:(0,n.jsx)(z,{children:(0,n.jsx)(S,Object.assign({id:"doc-content"},{children:e.children}))})});const k=()=>{return e=void 0,i=void 0,n=function*(){const e=document.getElementById("doc-content"),i=document.createElement("iframe");document.body.appendChild(i);const s=i.contentDocument;s.head.innerHTML=document.head.innerHTML,s.body.innerHTML=e.innerHTML,i.style.position="absolute",i.style.left="100vh",i.contentWindow.print()},new((s=void 0)||(s=Promise))((function(t,r){function o(e){try{c(n.next(e))}catch(e){r(e)}}function l(e){try{c(n.throw(e))}catch(e){r(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof s?i:new s((function(e){e(i)}))).then(o,l)}c((n=n.apply(e,i||[])).next())}));var e,i,s,n};var C=s(279);const A={download:(0,n.jsx)(C.HA8,{}),selector:(0,n.jsx)(C.ZaQ,{})},E=d.ZP.span((({theme:e,size:i})=>d.iv`
    display: inline-flex;
    font-size: ${e.size(i||7)};
    cursor: pointer;
  `)),I=e=>{const{type:i,size:s,style:t,onPress:r}=e;return(0,n.jsx)(E,Object.assign({className:"icon",size:s,style:t,onClick:r},{children:A[i]}))},T=d.ZP.div((({theme:e})=>d.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
    background-color: ${v};
    color: ${e.colors.white};
    padding: ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
  `)),Z=d.ZP.select((({theme:e})=>d.iv`
    background-color: ${e.colors.bg2};
  `)),L=d.ZP.button((({theme:e})=>d.iv`
    background-color: ${e.colors.bg2};
  `)),M=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},F=M(),R=()=>(0,n.jsxs)(T,{children:[(0,n.jsx)(Z,{children:(0,n.jsx)("option",{children:"Template 1"})}),(0,n.jsxs)(Z,Object.assign({defaultValue:F,onChange:e=>(e=>{const[i,s]=location.href.split("?"),n=new URLSearchParams(s);n.set("lang",e),location.href=`${i}?${n.toString()}`})(e.target.value)},{children:[(0,n.jsx)("option",Object.assign({value:"en"},{children:"English"})),(0,n.jsx)("option",Object.assign({value:"pt"},{children:"Português"}))]})),(0,n.jsxs)(L,Object.assign({onClick:k},{children:[(0,n.jsx)(I,{type:"download"}),"Save as PDF"]}))]}),_=d.ZP.div((({theme:e})=>d.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),N=e=>(0,n.jsx)(_,{children:e.children}),W={1:"Olá",2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam natus tempore atque incidunt at nihil qui, temporanisi, autem ex fuga ducimus voluptatum est vitae eligen dipraesentium sed architecto?",3:"",4:""},D={1:"",2:"",3:"",4:""},B=M(),J=e=>{const{textId:i,children:s}=e;return"es"===B?(0,n.jsx)("span",{children:D[i]||"NO TEXT"}):"pt"===B?(0,n.jsx)("span",{children:W[i]||"NO TEXT"}):(0,n.jsx)("span",{children:s})},V=d.ZP.div((()=>d.iv``)),G=d.ZP.div((({theme:e})=>d.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${y};
    color: ${j};

    h1 {
      margin-bottom: ${e.size(2)};
      color: ${u};
    }

    h3 {
      margin-bottom: ${e.size(4)};
    }
  `)),U=d.ZP.div((({theme:e})=>d.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${x};
    color: ${v};
  `)),H=d.ZP.div((({theme:e})=>d.iv`
    margin: ${e.size(4)} 0;
  `)),K=d.ZP.h4((({theme:e})=>d.iv`
    margin: ${e.size(4)} 0;
  `)),q=d.ZP.div((({theme:e})=>d.iv`
    display: inline-flex;
    gap: ${e.size(2)};

    span {
      font-weight: bold;
    }

    a {
      text-decoration: underline;
    }
  `)),Q=d.ZP.div((({theme:e,gap:i,mb:s})=>d.iv`
    display: flex;
    gap: ${e.size(i)};
    margin-bottom: ${e.size(s)};
  `)),X=d.ZP.div((({theme:e,gap:i})=>d.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(i)};
  `)),Y=d.ZP.div((({theme:e})=>d.iv`
    width: ${e.size(45)};
    font-size: ${e.fontSize.verySmall};
  `)),ee=d.ZP.ul((({theme:e})=>d.iv`
    list-style: disc inside;
    padding-left: ${e.size(1)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(4)};
    }
  `)),ie=()=>(0,n.jsxs)(G,{children:[(0,n.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,n.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,n.jsxs)(Q,Object.assign({gap:12},{children:[(0,n.jsxs)(X,Object.assign({gap:2},{children:[(0,n.jsxs)(q,{children:[(0,n.jsx)(J,{children:"Address"}),"Rua Pernambuco Bairro Geraldão"]}),(0,n.jsxs)(q,{children:[(0,n.jsx)(J,{children:"Phone"}),"+55 89994009646"]}),(0,n.jsxs)(q,{children:[(0,n.jsx)(J,{children:"Email"}),(0,n.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,n.jsxs)(X,Object.assign({gap:2},{children:[(0,n.jsxs)(q,{children:[(0,n.jsx)(J,{children:"GitHub"}),(0,n.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,n.jsxs)(q,{children:[(0,n.jsx)(J,{children:"Linkedin"}),(0,n.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),se=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(K,{children:(0,n.jsx)(J,{children:"Experience"})}),(0,n.jsxs)(Q,Object.assign({mb:4},{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(J,{children:"2021/12 - 2023/12"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h6",{children:(0,n.jsx)("a",Object.assign({href:"https://www.westpoint.io/"},{children:(0,n.jsx)(J,{children:"Westpoint"})}))}),(0,n.jsx)("p",{children:(0,n.jsx)(J,{children:"United Kingdown componany that provides software development services"})}),(0,n.jsxs)(ee,{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Collums"})}),(0,n.jsx)(J,{children:" Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built using ReactJS, NodeJS, Mongodb and Docker."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Vouch IO"})}),(0,n.jsx)(J,{children:" Mobile Application used to handles vehicles like Lightyear one and Vitage broncos"})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Quarx"})}),(0,n.jsx)(J,{children:" Browser extension that provides real-time guides to help users to do complex tasks on many Websites, built using React, Chrome APIs and AWS services."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"TalentId"})}),(0,n.jsx)(J,{children:" Online platform that uses the powers of chat GPT to evaluate candidates' CVs and assign them a score. built using NextJS with MatineUI, OpenAI API and AWS services."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Vintage Acquisitions"})}),(0,n.jsx)(J,{children:" Dashboard to handle stock and sales of casks, sychonized with Google spreadsheets, built using ViteJS with MantineUI, Google APIs and AWS services."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Westpoint Website"})}),(0,n.jsx)(J,{children:" Company website built using NextJS and Styled Components."})]})]})]})]})),(0,n.jsxs)(Q,Object.assign({mb:4},{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(J,{children:"2018/08 - 2020/01"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h6",{children:(0,n.jsx)(J,{children:"WTCS"})}),(0,n.jsx)("p",{children:(0,n.jsx)(J,{children:"Application with geolocation to map waring point at city streats."})})]})]}))]}),ne=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(K,{children:(0,n.jsx)(J,{children:"Education"})}),(0,n.jsxs)(Q,Object.assign({mb:4},{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(J,{children:"2017/01 - 2019/11"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h6",{children:(0,n.jsx)(J,{children:"IFPI - Instituto Federal do Piauí"})}),(0,n.jsx)("p",{children:(0,n.jsx)(J,{children:"Ensino Superior, Análise de Sistemas de Computação."})})]})]})),(0,n.jsxs)(Q,Object.assign({mb:4},{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(J,{children:"2018/08 - 2020/01"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h6",{children:(0,n.jsx)(J,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"})}),(0,n.jsx)("p",{children:(0,n.jsx)(J,{children:"Ensino Médio, Técnico em Informatica."})})]})]}))]}),te=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(K,{children:(0,n.jsx)(J,{children:"Extra Works"})}),(0,n.jsxs)(Q,Object.assign({mb:4},{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(J,{children:"2024"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Personal CV"})}),(0,n.jsx)(J,{children:" This document wronte in react with support to multiple languages."})]})]})),(0,n.jsxs)(Q,Object.assign({mb:4},{children:[(0,n.jsx)("div",{children:(0,n.jsx)(Y,{children:(0,n.jsx)(J,{children:"2023"})})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(q,{children:(0,n.jsx)(J,{children:"Console UI for desktops"})}),(0,n.jsx)(J,{children:" Desktop application using electron and react to provide console experience like PS5/Xbox for PCs."})]})]}))]}),re=()=>(0,n.jsxs)(V,{children:[(0,n.jsx)(ie,{}),(0,n.jsxs)(U,{children:[(0,n.jsx)(H,{children:(0,n.jsx)(J,{children:"Resume, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga ea veniam harum repellendus fugiat illo error laboriosam ducimus accusamus inventore beatae vero quod necessitatibus facilis unde rerum quis. Corporis?"})}),(0,n.jsx)(se,{}),(0,n.jsx)(ne,{}),(0,n.jsx)(te,{})]})]}),oe=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R,{}),(0,n.jsx)(N,{children:(0,n.jsx)(P,{children:(0,n.jsx)(re,{})})})]}),le=()=>{const e=(0,l.useContext)(c);return(0,n.jsxs)(d.f6,Object.assign({theme:$},{children:[(0,n.jsx)(h,{}),(0,n.jsx)(o.Z5,Object.assign({location:e},{children:(0,n.jsx)(o.AW,{path:"/*",element:(0,n.jsx)(oe,{})})}))]}))},ce=(0,l.createContext)(null),ae=e=>{const[i,s]=(0,l.useState)(!0),[t,r]=(0,l.useState)(""),o={firstRun:i,bgImage:t,setFirstRun:s,setBgImage:r},c=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,n.jsx)(ce.Provider,Object.assign({value:c},{children:e.children}))};(0,t.s)(document.getElementById("root")).render((0,n.jsx)((()=>(0,n.jsx)(ae,{children:(0,n.jsx)(a,{children:(0,n.jsx)(d.LC,{children:(0,n.jsx)(r.VK,{children:(0,n.jsx)(le,{})})})})})),{}))}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var s=t[e]={exports:{}};return n[e](s,s.exports,r),s.exports}r.m=n,e=[],r.O=(i,s,n,t)=>{if(!s){var o=1/0;for(d=0;d<e.length;d++){for(var[s,n,t]=e[d],l=!0,c=0;c<s.length;c++)(!1&t||o>=t)&&Object.keys(r.O).every((e=>r.O[e](s[c])))?s.splice(c--,1):(l=!1,t<o&&(o=t));if(l){e.splice(d--,1);var a=n();void 0!==a&&(i=a)}}return i}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[s,n,t]},r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},s=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var t=Object.create(null);r.r(t);var o={};i=i||[null,s({}),s([]),s(s)];for(var l=2&n&&e;"object"==typeof l&&!~i.indexOf(l);l=s(l))Object.getOwnPropertyNames(l).forEach((i=>o[i]=()=>e[i]));return o.default=()=>e,r.d(t,o),t},r.d=(e,i)=>{for(var s in i)r.o(i,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var i=r.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var s=i.getElementsByTagName("script");if(s.length)for(var n=s.length-1;n>-1&&!e;)e=s[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=i=>0===e[i];var i=(i,s)=>{var n,t,[o,l,c]=s,a=0;if(o.some((i=>0!==e[i]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(c)var d=c(r)}for(i&&i(s);a<o.length;a++)t=o[a],r.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return r.O(d)},s=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];s.forEach(i.bind(null,0)),s.push=i.bind(null,s.push.bind(s))})(),r.nc=void 0;var o=r.O(void 0,[977],(()=>r(406)));o=r.O(o)})();