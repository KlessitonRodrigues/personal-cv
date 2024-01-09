(()=>{"use strict";var e,i,n,s={235:(e,i,n)=>{var s=n(893),r=n(745),t=n(655),o=n(250),l=n(294);const c=(0,l.createContext)(null),d=e=>{const[i,n]=(0,l.useState)("/home"),[r,t]=(0,l.useState)(""),o={pathname:i,hash:"",search:"",lang:r,setPath:n,setLang:t},d=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,s.jsx)(c.Provider,Object.assign({value:d},{children:e.children}))};var a=n(133);n.p;const h=(0,a.vJ)((({theme:e})=>a.iv`
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
      text-decoration: none;
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
  `)),x="#fafafa",j="#f5f5f5",u="#eeeeee",m="#e0e0e0",p="#bdbdbd",g="#9e9e9e",b="#757575",f="#616161",v="#424242",y="#37474f",$="#141414",O={size:e=>.2*e+"rem",colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:x,bg2:j,bg3:u,bg4:m,text1:"#212121",text2:v,text3:f,text4:g,gray:g,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:x,black:$},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},w=(Object.assign(Object.assign({},O),{colors:Object.assign(Object.assign({},O.colors),{bg1:$,bg2:v+"44",bg3:f+"44",bg4:b+"44",text1:m,text2:p,text3:g,text4:f,gray:b,white:m})}),a.ZP.div((({theme:e})=>a.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),z=a.ZP.div((()=>a.iv`
    height: 100%;
    overflow-y: auto;
  `)),P=a.ZP.div((({theme:e})=>a.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),S=e=>(0,s.jsx)(w,{children:(0,s.jsx)(z,{children:(0,s.jsx)(P,Object.assign({id:"doc-content"},{children:e.children}))})});const k=()=>{return e=void 0,i=void 0,s=function*(){const e=document.getElementById("doc-content"),i=document.createElement("iframe");document.body.appendChild(i);const n=i.contentDocument;n.head.innerHTML=document.head.innerHTML,n.body.innerHTML=e.innerHTML,i.style.position="absolute",i.style.left="100vh",i.contentWindow.print()},new((n=void 0)||(n=Promise))((function(r,t){function o(e){try{c(s.next(e))}catch(e){t(e)}}function l(e){try{c(s.throw(e))}catch(e){t(e)}}function c(e){var i;e.done?r(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(o,l)}c((s=s.apply(e,i||[])).next())}));var e,i,n,s};var E=n(279);const Z={download:(0,s.jsx)(E.HA8,{}),selector:(0,s.jsx)(E.ZaQ,{})},C=a.ZP.span((({theme:e,size:i})=>a.iv`
    display: inline-flex;
    font-size: ${e.size(i||7)};
    cursor: pointer;
  `)),T=e=>{const{type:i,size:n,style:r,onPress:t}=e;return(0,s.jsx)(C,Object.assign({className:"icon",size:n,style:r,onClick:t},{children:Z[i]}))},L=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
    background-color: ${v};
    color: ${e.colors.white};
    padding: ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
  `)),A=a.ZP.select((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),I=a.ZP.button((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),M=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},_=M(),R=()=>(0,s.jsxs)(L,{children:[(0,s.jsx)(A,{children:(0,s.jsx)("option",{children:"Template 1"})}),(0,s.jsxs)(A,Object.assign({defaultValue:_,onChange:e=>(e=>{const[i,n]=location.href.split("?"),s=new URLSearchParams(n);s.set("lang",e),location.href=`${i}?${s.toString()}`})(e.target.value)},{children:[(0,s.jsx)("option",Object.assign({value:"en"},{children:"English"})),(0,s.jsx)("option",Object.assign({value:"pt"},{children:"Português"}))]})),(0,s.jsxs)(I,Object.assign({onClick:k},{children:[(0,s.jsx)(T,{type:"download"}),"Save as PDF"]}))]}),F=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),B=e=>(0,s.jsx)(F,{children:e.children}),D={1:"Olá",2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam natus tempore atque incidunt at nihil qui, temporanisi, autem ex fuga ducimus voluptatum est vitae eligen dipraesentium sed architecto?",3:"",4:""},J={1:"",2:"",3:"",4:""},N=M(),H=e=>{const{textId:i,children:n}=e;return"es"===N?(0,s.jsx)("span",{children:J[i]||"NO TEXT"}):"pt"===N?(0,s.jsx)("span",{children:D[i]||"NO TEXT"}):(0,s.jsx)("span",{children:n})},K=a.ZP.div((()=>a.iv``)),U=a.ZP.div((({theme:e})=>a.iv`
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
  `)),W=a.ZP.div((({theme:e})=>a.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${x};
    color: ${v};
  `)),q=a.ZP.div((({theme:e})=>a.iv`
    margin: ${e.size(4)} 0;
  `)),G=a.ZP.h4((({theme:e})=>a.iv`
    margin: ${e.size(4)} 0;
  `)),V=a.ZP.div((({theme:e})=>a.iv`
    display: inline-flex;
    gap: ${e.size(2)};

    span {
      font-weight: bold;
    }

    a {
      text-decoration: underline;
    }
  `)),Q=a.ZP.div((({theme:e,gap:i,mb:n})=>a.iv`
    display: flex;
    gap: ${e.size(i)};
    margin-bottom: ${e.size(n)};
  `)),X=a.ZP.div((({theme:e,gap:i})=>a.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(i)};
  `)),Y=a.ZP.div((({theme:e})=>a.iv`
    width: ${e.size(50)};
    font-size: ${e.fontSize.small};
  `)),ee=a.ZP.ul((({theme:e})=>a.iv`
    list-style: disc inside;
    padding-left: ${e.size(1)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(1)};
    }
  `)),ie=()=>(0,s.jsxs)(K,{children:[(0,s.jsxs)(U,{children:[(0,s.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,s.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,s.jsxs)(Q,Object.assign({gap:12},{children:[(0,s.jsxs)(X,Object.assign({gap:2},{children:[(0,s.jsxs)(V,{children:[(0,s.jsx)(H,{children:"Address"}),"Rua Pernambuco Bairro Geraldão"]}),(0,s.jsxs)(V,{children:[(0,s.jsx)(H,{children:"Phone"}),"+55 89994009646"]}),(0,s.jsxs)(V,{children:[(0,s.jsx)(H,{children:"Email"}),(0,s.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,s.jsxs)(X,Object.assign({gap:2},{children:[(0,s.jsxs)(V,{children:[(0,s.jsx)(H,{children:"GitHub"}),(0,s.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,s.jsxs)(V,{children:[(0,s.jsx)(H,{children:"Linkedin"}),(0,s.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),(0,s.jsxs)(W,{children:[(0,s.jsx)(q,{children:(0,s.jsx)(H,{children:"Resume, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, fuga ea veniam harum repellendus fugiat illo error laboriosam ducimus accusamus inventore beatae vero quod necessitatibus facilis unde rerum quis. Corporis?"})}),(0,s.jsx)(G,{children:(0,s.jsx)(H,{children:"Experience"})}),(0,s.jsxs)(Q,Object.assign({mb:3},{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(H,{children:"2021/12 - 2023/12"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:(0,s.jsx)(H,{children:"Westpoint"})}),(0,s.jsx)("p",{children:(0,s.jsx)(H,{children:"United Kingdown componany that provides software development services"})}),(0,s.jsxs)(ee,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(V,{children:(0,s.jsx)(H,{children:"Javascript developer"})}),(0,s.jsx)(H,{children:" On talent id"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(V,{children:(0,s.jsx)(H,{children:"Javascript developer"})}),(0,s.jsx)(H,{children:" On talent id"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(V,{children:(0,s.jsx)(H,{children:"Javascript developer"})}),(0,s.jsx)(H,{children:" On talent id"})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(V,{children:(0,s.jsx)(H,{children:"Javascript developer"})}),(0,s.jsx)(H,{children:" On talent id"})]})]})]})]})),(0,s.jsxs)(Q,Object.assign({mb:3},{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(H,{children:"2018/08 - 2020/01"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:(0,s.jsx)(H,{children:"WTCS"})}),(0,s.jsx)("p",{children:(0,s.jsx)(H,{children:"Application with geolocation to map waring point at city streats."})})]})]})),(0,s.jsx)(G,{children:(0,s.jsx)(H,{children:"Education"})}),(0,s.jsxs)(Q,Object.assign({mb:3},{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(H,{children:"2017/01 - 2019/11"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:(0,s.jsx)(H,{children:"IFPI - Instituto Federal do Piauí"})}),(0,s.jsx)("p",{children:(0,s.jsx)(H,{children:"Ensino Superior, Análise de Sistemas de Computação."})})]})]})),(0,s.jsxs)(Q,Object.assign({mb:3},{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(H,{children:"2018/08 - 2020/01"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:(0,s.jsx)(H,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"})}),(0,s.jsx)("p",{children:(0,s.jsx)(H,{children:"Ensino Médio, Técnico em Informatica."})})]})]})),(0,s.jsx)(G,{children:(0,s.jsx)(H,{children:"Extra Works"})}),(0,s.jsxs)(Q,Object.assign({mb:3},{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(H,{children:"2024"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:(0,s.jsx)(H,{children:"Personal CV"})}),(0,s.jsx)("p",{children:(0,s.jsx)(H,{children:"This document wronte in react with support to multiple languages."})})]})]})),(0,s.jsxs)(Q,Object.assign({mb:3},{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(H,{children:"2023"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:(0,s.jsx)(H,{children:"Console UI for desktops"})}),(0,s.jsx)("p",{children:(0,s.jsx)(H,{children:"Desktop application using electron and react to provide console experience like PS5/Xbox for PCs."})})]})]}))]})]}),ne=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R,{}),(0,s.jsx)(B,{children:(0,s.jsx)(S,{children:(0,s.jsx)(ie,{})})})]}),se=()=>{const e=(0,l.useContext)(c);return(0,s.jsxs)(a.f6,Object.assign({theme:O},{children:[(0,s.jsx)(h,{}),(0,s.jsx)(o.Z5,Object.assign({location:e},{children:(0,s.jsx)(o.AW,{path:"/*",element:(0,s.jsx)(ne,{})})}))]}))},re=(0,l.createContext)(null),te=e=>{const[i,n]=(0,l.useState)(!0),[r,t]=(0,l.useState)(""),o={firstRun:i,bgImage:r,setFirstRun:n,setBgImage:t},c=(0,l.useMemo)((()=>o),[JSON.stringify(o)]);return(0,s.jsx)(re.Provider,Object.assign({value:c},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,s.jsx)((()=>(0,s.jsx)(te,{children:(0,s.jsx)(d,{children:(0,s.jsx)(a.LC,{children:(0,s.jsx)(t.VK,{children:(0,s.jsx)(se,{})})})})})),{}))}},r={};function t(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}};return s[e](n,n.exports,t),n.exports}t.m=s,e=[],t.O=(i,n,s,r)=>{if(!n){var o=1/0;for(a=0;a<e.length;a++){for(var[n,s,r]=e[a],l=!0,c=0;c<n.length;c++)(!1&r||o>=r)&&Object.keys(t.O).every((e=>t.O[e](n[c])))?n.splice(c--,1):(l=!1,r<o&&(o=r));if(l){e.splice(a--,1);var d=s();void 0!==d&&(i=d)}}return i}r=r||0;for(var a=e.length;a>0&&e[a-1][2]>r;a--)e[a]=e[a-1];e[a]=[n,s,r]},t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var r=Object.create(null);t.r(r);var o={};i=i||[null,n({}),n([]),n(n)];for(var l=2&s&&e;"object"==typeof l&&!~i.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach((i=>o[i]=()=>e[i]));return o.default=()=>e,t.d(r,o),r},t.d=(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var i=t.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&!e;)e=n[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e={179:0};t.O.j=i=>0===e[i];var i=(i,n)=>{var s,r,[o,l,c]=n,d=0;if(o.some((i=>0!==e[i]))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(c)var a=c(t)}for(i&&i(n);d<o.length;d++)r=o[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(a)},n=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))})(),t.nc=void 0;var o=t.O(void 0,[977],(()=>t(235)));o=t.O(o)})();