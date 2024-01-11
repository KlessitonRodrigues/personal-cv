(()=>{"use strict";var e,i,n,s={406:(e,i,n)=>{var s=n(893),t=n(745),r=n(655),l=n(250),o=n(294);const c=(0,o.createContext)(null),d=e=>{const[i,n]=(0,o.useState)("/home"),[t,r]=(0,o.useState)(""),l={pathname:i,hash:"",search:"",lang:t,setPath:n,setLang:r},d=(0,o.useMemo)((()=>l),[JSON.stringify(l)]);return(0,s.jsx)(c.Provider,Object.assign({value:d},{children:e.children}))};var a=n(133);n.p;const h=(0,a.vJ)((({theme:e})=>a.iv`
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
  `)),x="#fafafa",j="#f5f5f5",u="#eeeeee",p="#e0e0e0",m="#bdbdbd",g="#9e9e9e",b="#757575",v="#616161",f="#424242",w="#37474f",y="#141414",S={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:x,bg2:j,bg3:u,bg4:p,text1:"#212121",text2:f,text3:v,text4:g,gray:g,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:x,black:y},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},$=(Object.assign(Object.assign({},S),{colors:Object.assign(Object.assign({},S.colors),{bg1:y,bg2:f+"44",bg3:v+"44",bg4:b+"44",text1:p,text2:m,text3:g,text4:v,gray:b,white:p})}),a.ZP.div((({theme:e})=>a.iv`
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
  `)),P=e=>(0,s.jsx)($,{children:(0,s.jsx)(z,{children:(0,s.jsx)(O,Object.assign({id:"doc-content"},{children:e.children}))})});const k=()=>{return e=void 0,i=void 0,s=function*(){const e=document.getElementById("doc-content"),i=document.createElement("iframe");document.body.appendChild(i);const n=i.contentDocument;n.head.innerHTML=document.head.innerHTML,n.body.innerHTML=e.innerHTML,i.style.position="absolute",i.style.left="100%",i.style.top="0",yield new Promise((e=>setTimeout(e,1e3))),i.contentWindow.print()},new((n=void 0)||(n=Promise))((function(t,r){function l(e){try{c(s.next(e))}catch(e){r(e)}}function o(e){try{c(s.throw(e))}catch(e){r(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(l,o)}c((s=s.apply(e,i||[])).next())}));var e,i,n,s};var A=n(279);const C={download:(0,s.jsx)(A.HA8,{}),selector:(0,s.jsx)(A.ZaQ,{})},I=a.ZP.span((({theme:e,size:i})=>a.iv`
    display: inline-flex;
    font-size: ${e.size(i||7)};
    cursor: pointer;
  `)),E=e=>{const{type:i,size:n,style:t,onPress:r}=e;return(0,s.jsx)(I,Object.assign({className:"icon",size:n,style:t,onClick:r},{children:C[i]}))},T=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
    background-color: ${f};
    color: ${e.colors.white};
    padding: ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
  `)),R=a.ZP.select((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),Z=a.ZP.button((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),M=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},L=M(),J=()=>(0,s.jsxs)(T,{children:[(0,s.jsx)(R,{children:(0,s.jsx)("option",{children:"Template 1"})}),(0,s.jsxs)(R,Object.assign({defaultValue:L,onChange:e=>(e=>{const[i,n]=location.href.split("?"),s=new URLSearchParams(n);s.set("lang",e),location.href=`${i}?${s.toString()}`})(e.target.value)},{children:[(0,s.jsx)("option",Object.assign({value:"en"},{children:"English"})),(0,s.jsx)("option",Object.assign({value:"pt"},{children:"Português"}))]})),(0,s.jsxs)(Z,Object.assign({onClick:k},{children:[(0,s.jsx)(E,{type:"download"}),"Save as PDF"]}))]}),W=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),F=e=>(0,s.jsx)(W,{children:e.children}),N={1:"Olá",2:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam natus tempore atque incidunt at nihil qui, temporanisi, autem ex fuga ducimus voluptatum est vitae eligen dipraesentium sed architecto?",3:"",4:""},D={1:"",2:"",3:"",4:""},_=M(),B=e=>{const{textId:i,children:n}=e;return"es"===_?(0,s.jsx)("span",{children:D[i]||"NO TEXT"}):"pt"===_?(0,s.jsx)("span",{children:N[i]||"NO TEXT"}):(0,s.jsx)("span",{children:n})},G=a.ZP.div((()=>a.iv``)),U=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${w};
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
    color: ${f};
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
  `)),q=a.ZP.div((({theme:e,gap:i,mb:n})=>a.iv`
    display: flex;
    gap: ${e.size(i)};
    margin-bottom: ${e.size(n||2)};
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
  `)),ie=()=>(0,s.jsxs)(U,{children:[(0,s.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,s.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,s.jsxs)(q,Object.assign({gap:12,mb:1},{children:[(0,s.jsxs)(X,Object.assign({gap:2},{children:[(0,s.jsxs)(K,{children:[(0,s.jsx)(B,{children:"Address"}),"Rua Pernambuco Bairro Geraldão"]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(B,{children:"Phone"}),"+55 89994009646"]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(B,{children:"Email"}),(0,s.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,s.jsxs)(X,Object.assign({gap:2},{children:[(0,s.jsxs)(K,{children:[(0,s.jsx)(B,{children:"GitHub"}),(0,s.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,s.jsxs)(K,{children:[(0,s.jsx)(B,{children:"Linkedin"}),(0,s.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),ne=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"Experience"})}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2021/12 - 2023/12"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"WestPoint Software Solutions"})}),(0,s.jsx)("p",{children:(0,s.jsx)(B,{children:"UK software company that provides software development services to third-party companies."})}),(0,s.jsxs)(ee,{children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Collums"})}),(0,s.jsx)(B,{children:" Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with ReactJS, NodeJS, Mongodb and Docker."})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Vouch IO"})}),(0,s.jsx)(B,{children:" Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS APIs."})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"TalentId"})}),(0,s.jsx)(B,{children:" Online platform that uses the powers of GPT chat to evaluate candidates' CVs and assign them a score. built with NextJS with MatineUI, OpenAI API and AWS services."})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Vintage Acquisitions"})}),(0,s.jsx)(B,{children:" Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services."})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Quarx"})}),(0,s.jsx)(B,{children:" Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services."})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Westpoint Website"})}),(0,s.jsx)(B,{children:" Company website built with NextJS and Styled Components."})]})]})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2018/08 - 2019/11"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"SocialPower"})}),(0,s.jsx)("p",{children:(0,s.jsx)(B,{children:"Web application with geolocation to map streets points that need attention from the city hall, built using nodeJS and AngularJS."})})]})]})]}),se=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"Education"})}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2020/01 - 2023/12"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"Udemy Certificates"})}),(0,s.jsx)("p",{children:(0,s.jsxs)(ee,{children:[(0,s.jsx)("li",{children:"Clojure Introduction"}),(0,s.jsx)("li",{children:"Java with SQL Databases"}),(0,s.jsx)("li",{children:"Saverless Applications on AWS"}),(0,s.jsx)("li",{children:"Typescript with NodeJS, SQL and noSQL Databases"}),(0,s.jsx)("li",{children:"ReactJS with Redux"}),(0,s.jsx)("li",{children:"English Step-by-Step"})]})})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2017/01 - 2019/11"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"IFPI - Instituto Federal do Piauí"})}),(0,s.jsx)("p",{children:(0,s.jsx)(B,{children:"Ensino Superior, Análise de Sistemas de Computação."})})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2018/08 - 2020/01"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"})}),(0,s.jsx)("p",{children:(0,s.jsx)(B,{children:"Ensino Médio, Técnico em Informatica."})})]})]})]}),te=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{children:(0,s.jsx)(B,{children:"Extra Works"})}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2024"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Personal CV"})}),(0,s.jsx)(B,{children:" This document wronte in react with support to multiple languages. built with ReactJS."})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2023"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Console UI for desktops"})}),(0,s.jsx)(B,{children:" Desktop application using electron and react to provide console experience like PS5/Xbox for PCs. built with React and Electron."})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2023"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Easy Encrypt"})}),(0,s.jsx)(B,{children:" Web and Mobile application to encrypt plan text. built with React, React Native and CryptoJS."})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2022"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Task Manager"})}),(0,s.jsx)(B,{children:" Todo application with calendar and notes. built with React."})]})]}),(0,s.jsxs)(q,{children:[(0,s.jsx)("div",{children:(0,s.jsx)(Y,{children:(0,s.jsx)(B,{children:"2021"})})}),(0,s.jsxs)("div",{children:[(0,s.jsx)(K,{children:(0,s.jsx)(B,{children:"Translation PWA"})}),(0,s.jsx)(B,{children:" Translation website with multiple language support. built with React and Google APIs."})]})]})]}),re=()=>(0,s.jsxs)(G,{children:[(0,s.jsx)(ie,{}),(0,s.jsxs)(V,{children:[(0,s.jsx)(Q,{children:(0,s.jsx)(B,{children:"A small guy from a small town with big dreams who loves programming any kind of ideas and like to spent hours trying to improve his own code, like to always code his own solution to the problem but keeping everthing as simple as possible, like to learn new ways to coding and build applications and of course like games."})}),(0,s.jsx)(ne,{}),(0,s.jsx)(se,{}),(0,s.jsx)(te,{})]})]}),le=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(J,{}),(0,s.jsx)(F,{children:(0,s.jsx)(P,{children:(0,s.jsx)(re,{})})})]}),oe=()=>{const e=(0,o.useContext)(c);return(0,s.jsxs)(a.f6,Object.assign({theme:S},{children:[(0,s.jsx)(h,{}),(0,s.jsx)(l.Z5,Object.assign({location:e},{children:(0,s.jsx)(l.AW,{path:"/*",element:(0,s.jsx)(le,{})})}))]}))},ce=(0,o.createContext)(null),de=e=>{const[i,n]=(0,o.useState)(!0),[t,r]=(0,o.useState)(""),l={firstRun:i,bgImage:t,setFirstRun:n,setBgImage:r},c=(0,o.useMemo)((()=>l),[JSON.stringify(l)]);return(0,s.jsx)(ce.Provider,Object.assign({value:c},{children:e.children}))};(0,t.s)(document.getElementById("root")).render((0,s.jsx)((()=>(0,s.jsx)(de,{children:(0,s.jsx)(d,{children:(0,s.jsx)(a.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,s.jsx)(r.VK,{children:(0,s.jsx)(oe,{})})}))})})),{}))}},t={};function r(e){var i=t[e];if(void 0!==i)return i.exports;var n=t[e]={exports:{}};return s[e](n,n.exports,r),n.exports}r.m=s,e=[],r.O=(i,n,s,t)=>{if(!n){var l=1/0;for(a=0;a<e.length;a++){for(var[n,s,t]=e[a],o=!0,c=0;c<n.length;c++)(!1&t||l>=t)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(o=!1,t<l&&(l=t));if(o){e.splice(a--,1);var d=s();void 0!==d&&(i=d)}}return i}t=t||0;for(var a=e.length;a>0&&e[a-1][2]>t;a--)e[a]=e[a-1];e[a]=[n,s,t]},r.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return r.d(i,{a:i}),i},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,s){if(1&s&&(e=this(e)),8&s)return e;if("object"==typeof e&&e){if(4&s&&e.__esModule)return e;if(16&s&&"function"==typeof e.then)return e}var t=Object.create(null);r.r(t);var l={};i=i||[null,n({}),n([]),n(n)];for(var o=2&s&&e;"object"==typeof o&&!~i.indexOf(o);o=n(o))Object.getOwnPropertyNames(o).forEach((i=>l[i]=()=>e[i]));return l.default=()=>e,r.d(t,l),t},r.d=(e,i)=>{for(var n in i)r.o(i,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var i=r.g.document;if(!e&&i&&(i.currentScript&&(e=i.currentScript.src),!e)){var n=i.getElementsByTagName("script");if(n.length)for(var s=n.length-1;s>-1&&!e;)e=n[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=i=>0===e[i];var i=(i,n)=>{var s,t,[l,o,c]=n,d=0;if(l.some((i=>0!==e[i]))){for(s in o)r.o(o,s)&&(r.m[s]=o[s]);if(c)var a=c(r)}for(i&&i(n);d<l.length;d++)t=l[d],r.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return r.O(a)},n=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))})(),r.nc=void 0;var l=r.O(void 0,[977],(()=>r(406)));l=r.O(l)})();