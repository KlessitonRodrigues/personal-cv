(()=>{"use strict";var e,t,i,n={549:(e,t,i)=>{var n=i(893),o=i(745),r=i(655),s=i(133),a=i(250),c=i(294);const l=(0,c.createContext)(null),d=e=>{const[t,i]=(0,c.useState)("/home"),[o,r]=(0,c.useState)(""),s={pathname:t,hash:"",search:"",lang:o,setPath:i,setLang:r},a=(0,c.useMemo)((()=>s),[JSON.stringify(s)]);return(0,n.jsx)(l.Provider,Object.assign({value:a},{children:e.children}))},h=(i.p,(0,s.vJ)((({theme:e})=>s.iv`
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
  `))),p="#fafafa",x="#f5f5f5",u="#eeeeee",m="#e0e0e0",g="#bdbdbd",j="#9e9e9e",v="#757575",b="#616161",f="#424242",_="#37474f",y="#141414",w={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:p,bg2:x,bg3:u,bg4:m,text1:"#212121",text2:f,text3:b,text4:j,gray:j,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:p,black:y},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},S=(Object.assign(Object.assign({},w),{colors:Object.assign(Object.assign({},w.colors),{bg1:y,bg2:f+"44",bg3:b+"44",bg4:v+"44",text1:m,text2:g,text3:j,text4:b,gray:v,white:m})}),s.ZP.div((({theme:e})=>s.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),P=s.ZP.div((()=>s.iv`
    height: 100%;
    overflow-y: auto;
  `)),k=s.ZP.div((({theme:e})=>s.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),z=e=>(0,n.jsx)(S,{children:(0,n.jsx)(P,{children:(0,n.jsx)(k,Object.assign({id:"doc-content"},{children:e.children}))})});const $=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},A=$();var O=i(279);const I={download:(0,n.jsx)(O.HA8,{}),selector:(0,n.jsx)(O.ZaQ,{}),spinner:(0,n.jsx)(O.H4p,{}),github:(0,n.jsx)(O.ioR,{})},C=s.ZP.span((({theme:e,size:t})=>s.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),R=e=>{const{type:t,size:i,style:o,onPress:r}=e;return(0,n.jsx)(C,Object.assign({className:"icon",size:i,style:o,onClick:r},{children:I[t]}))},E=e=>e.check?e.true||e.children:e.false,T=(s.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,s.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),J=(s.F4`
   from {opacity: 0}
   to {opacity: 1}
`,s.F4`
   to {transform: rotateZ(360deg);}
`),Z=T,N=J,M=s.ZP.div((()=>s.iv``)),q=s.ZP.div((()=>s.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000b;
    backdrop-filter: blur(10px);
  `)),W=s.ZP.div((e=>s.iv`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.theme.size(8)};
    animation: ${N} 0.8s infinite linear;
  `)),F=s.ZP.p((e=>s.iv`
    font-size: ${e.theme.fontSize.label};
    margin-bottom: ${e.theme.size(2)};
    animation: ${Z} 0.5s ease-out;
  `)),G=s.ZP.p((e=>s.iv`
    color: ${e.theme.colors.text4};
    font-size: ${e.theme.fontSize.verySmall};
    animation: ${Z} 0.5s ease-out;
  `)),L=e=>{const{show:t,type:i,title:o,description:r}=e;return(0,n.jsxs)(M,{children:[(0,n.jsx)(E,Object.assign({check:t&&"icon"===i},{children:(0,n.jsx)(W,{children:(0,n.jsx)(R,{type:"spinner",size:12})})})),(0,n.jsx)(E,Object.assign({check:t&&"fullScreen"===i},{children:(0,n.jsxs)(q,{children:[(0,n.jsx)(W,{children:(0,n.jsx)(R,{type:"spinner",size:12})}),(0,n.jsx)(F,{children:o}),(0,n.jsx)(G,{children:r})]})}))]})},U=s.ZP.div((({theme:e})=>s.iv`
    width: 100%;
    display: flex;
    background-color: ${f};
    color: ${e.colors.white};
    padding: ${e.size(2)} ${e.size(6)};
    font-size: ${e.fontSize.verySmall};
  `)),D=s.ZP.button((({theme:e})=>s.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
  `)),B=s.ZP.select((({theme:e})=>s.iv`
    background-color: ${e.colors.bg2};
  `)),V=s.ZP.button((({theme:e})=>s.iv`
    background-color: ${e.colors.bg2};
  `)),H=s.ZP.a((({theme:e})=>s.iv`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${e.size(1)};
    color: ${e.colors.bg2};

    &:hover {
      text-decoration: underline;
    }
  `));const K=()=>{const[e,t]=(0,c.useState)(!1);return(0,n.jsxs)(U,{children:[(0,n.jsxs)(D,{children:[(0,n.jsx)(B,{children:(0,n.jsx)("option",{children:"Template 1"})}),(0,n.jsxs)(B,Object.assign({defaultValue:A,onChange:e=>(e=>{const[t,i]=location.href.split("?"),n=new URLSearchParams(i);n.set("lang",e),location.href=`${t}?${n.toString()}`})(e.target.value)},{children:[(0,n.jsx)("option",Object.assign({value:"en"},{children:"English"})),(0,n.jsx)("option",Object.assign({value:"pt"},{children:"Português"})),(0,n.jsx)("option",Object.assign({value:"es"},{children:"Spanish"}))]})),(0,n.jsxs)(V,Object.assign({onClick:()=>{return e=void 0,i=void 0,o=function*(){var e,i,n,o;t(!0),yield(e=void 0,i=void 0,n=void 0,o=function*(){const e=document.getElementById("doc-content"),t=document.createElement("iframe");document.body.appendChild(t);const i=t.contentDocument;i.head.innerHTML=document.head.innerHTML,i.body.innerHTML=e.innerHTML,t.style.position="absolute",t.style.left="100%",t.style.top="0",yield new Promise((e=>setTimeout(e,1e3))),t.contentWindow.print()},new(n||(n=Promise))((function(t,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,a)}c((o=o.apply(e,i||[])).next())}))),t(!1)},new((n=void 0)||(n=Promise))((function(t,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(e){e(i)}))).then(s,a)}c((o=o.apply(e,i||[])).next())}));var e,i,n,o}},{children:[(0,n.jsx)(R,{type:"download"}),"Save as PDF"]}))]}),(0,n.jsxs)(H,Object.assign({href:"https://github.com/KlessitonRodrigues/personal-cv",target:"_blank"},{children:[(0,n.jsx)(R,{type:"github"}),"GitHub"]})),(0,n.jsx)(L,{type:"fullScreen",show:e})]})},Q=s.ZP.div((({theme:e})=>s.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),X=e=>(0,n.jsx)(Q,{children:e.children}),Y=JSON.parse('{"header_address":"Address","header_city":"City","header_phone":"Phone","cv_resume":"A small guy from a small town with big dreams who loves programming any kind of ideas and like to spent hours trying to improve his own code, like to always code his own solution to the problem but keeping everthing as simple as possible, like to learn new ways to coding and build applications and of course like games.","experience_title":"Experience","experience_westpoint_text":"UK software company that provides software development services to third-party companies.","experience_collums_text":"Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with React, NodeJS, Mongodb and Docker.","experience_vouchio_text":"Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Online platform that uses the powers of GPT chat to evaluate candidates\' CVs and assign them a score, built with NextJS with MatineUI, OpenAI API and AWS services.","experience_vintage_text":"Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services.","experience_quarx_text":"Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services.","experience_website_text":"Company website built with NextJS and Styled Components.","experience_socialpower_text":" Web application with geolocation to map streets points that need attention from the city hall, built with nodeJS and AngularJS.","education_title":"Education","education_udemy_title":"Udemy Certificates","extraworks_title":"Extra Works","extraworks_personalcv_text":"This document in HTML and available in multiple languages, built with React.","extraworks_consoleui_text":"Application that provide console interface like PS5/Xbox for PCs, built with React and Electron.","extraworks_easyencrypt_text":"Web and Mobile application to encrypt plan text, built with React, React Native and CryptoJS.","extraworks_taskmanage_text":"Todo application with calendar and notes, built with React.","extraworks_translationpwa_text":"Translation website with multiple language support, built with React and GoogleAPIs."}'),ee=JSON.parse('{"header_address":"DIRECCIÓN","header_city":"Ciudad","header_phone":"Teléfono","cv_resume":"Un chico pequeño de un pueblo pequeño con grandes sueños a quien le encanta programar cualquier tipo de idea y le gusta pasar horas tratando de mejorar su propio código, le gusta codificar siempre su propia solución al problema pero manteniendo todo lo más simple posible, le gusta aprender. ","experience_title":"Experiencia","experience_westpoint_text":"Empresa de software del Reino Unido que proporciona servicios de desarrollo de software a empresas de terceros.","experience_collums_text":"Plataforma online utilizada para gestionar clínicas de Estética con más de 11 franquicias como cliente, construida con React, NodeJS, Mongodb y Docker.","experience_vouchio_text":"Aplicación móvil utilizada para manejar vehículos (abrir/cerrar puertas, arrancar/parar motor, etc.), construida con ClojureScript, React Native, API Blockchain, API de Android/IOS.","experience_talentId_text":"Plataforma online que utiliza los poderes del chat GPT para evaluar los CV de los candidatos y asignarles una puntuación, construida con NextJS con MatineUI, OpenAI API y servicios AWS.","experience_vintage_text":"Dashboard para gestión de inventario y venta de barriles, sincronizado con hojas de cálculo de Google, construido con ViteJS con MantineUI, API de Google y servicios de AWS.","experience_quarx_text":"Extensión del navegador que proporciona guías en tiempo real para ayudar a los usuarios a realizar tareas complejas en muchos sitios web (AWS, nube de Google, etc.), creada con React, API de Chrome y servicios de AWS.","experience_website_text":"Sitio web de la empresa creado con NextJS y Styled Components.","experience_socialpower_text":" Aplicación web con geolocalización para mapear puntos de calles que necesitan atención del ayuntamiento, construida usando nodeJS y AngularJS.","education_title":"Educación","education_udemy_title":"Certificates da la Udemy","extraworks_title":"Trabajos adicionales","extraworks_personalcv_text":"Este documento está disponible en varios idiomas, creado con React.","extraworks_consoleui_text":"Aplicación que proporciona una interfaz de consola como PS5/Xbox para PC, construida con React y Electron.","extraworks_easyencrypt_text":"Aplicación web y móvil para cifrar texto de planes, construida con React, React Native y CryptoJS.","extraworks_taskmanage_text":"Aplicación Todo con calendario y notas, construida con React.","extraworks_translationpwa_text":"Sitio web de traducción con soporte para múltiples idiomas, creado con React y GoogleAPI."}'),te=JSON.parse('{"header_address":"Endereço","header_city":"Cidade","header_phone":"Telefone","cv_resume":"Um pequeno menino de uma cidade pequena com grandes sonhos que adora programar qualquer tipo de ideia e gosta de passar horas tentando melhorar seu próprio código, gosta de sempre codificar sua própria solução para o problema mas mantendo tudo o mais simples possível, gosta de aprender novas formas de desenvolvimento de software e é claro gosta de jogos.","experience_title":"Experiência","experience_westpoint_text":"Empresa de software do Reino Unido que fornece serviços de desenvolvimento de software para empresas terceirizadas.","experience_collums_text":"Plataforma online utilizada para gerenciamento de clínicas de Estética com mais de 11 franquias como cliente, desenvolvida em React, NodeJS, Mongodb e Docker.","experience_vouchio_text":"Aplicativo móvel usado para lidar com veículos (abrir/fechar portas, ligar/desligar motor, etc), construído com ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Plataforma online que utiliza os poderes do chat GPT para avaliar currículos de candidatos e atribuir-lhes uma pontuação, desenvolvida em NextJS com MatineUI, API OpenAI e AWS services.","experience_vintage_text":"Dashboard para gestão de estoque e vendas de barris, sincronizado com planilhas Google, desenvolvida em ViteJS com MantineUI, Google APIs e AWS services.","experience_quarx_text":"Extensão de navegador que fornece guias em tempo real para ajudar os usuários a realizar tarefas complexas em muitos sites (AWS, Google Cloud, etc.), desenvolvidos em React, Chrome APIs e AWS services.","experience_website_text":"Site da empresa construído com NextJS e Styled Components.","experience_socialpower_text":" Aplicação web com geolocalização para mapear pontos de ruas que necessitam de atenção da prefeitura, desenvolvidos em nodeJS e AngularJS.","education_title":"Educação","education_udemy_title":"Certificados da Udemy","extraworks_title":"Trabalhos extras","extraworks_personalcv_text":"Este documento em HTML e disponível em vários idiomas, desenvolvida em React.","extraworks_consoleui_text":"Aplicativo que fornece interface de console como PS5/Xbox para PCs, desenvolvida em React e Electron.","extraworks_easyencrypt_text":"Aplicativo Web e Mobile para criptografar texto, desenvolvida em React, React Native e CryptoJS.","extraworks_taskmanage_text":"Aplicativo Todo com calendário e notas, desenvolvida em React.","extraworks_translationpwa_text":"Site de tradução com suporte a vários idiomas, desenvolvida em React e Google APIs."}'),ie=$(),ne=Y,oe=te,re=ee,se=e=>{const{path:t}=e;return"es"===ie?(0,n.jsx)(n.Fragment,{children:re[t]||"NO TEXT"}):"pt"===ie?(0,n.jsx)(n.Fragment,{children:oe[t]||"NO TEXT"}):(0,n.jsx)(n.Fragment,{children:ne[t]||"NO TEXT"})},ae=s.ZP.div((()=>s.iv``)),ce=s.ZP.div((({theme:e})=>s.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${_};
    color: ${u};

    h1 {
      margin-bottom: ${e.size(2)};
      color: ${x};
    }

    h3 {
      margin-bottom: ${e.size(4)};
    }
  `)),le=s.ZP.div((({theme:e})=>s.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${p};
    color: ${f};
  `)),de=s.ZP.div((({theme:e})=>s.iv`
    margin: ${e.size(4)} 0;
  `)),he=s.ZP.h4((({theme:e})=>s.iv`
    margin-bottom: ${e.size(2)};
  `)),pe=s.ZP.span((({theme:e})=>s.iv`
    b {
      margin-right: ${e.size(2)};
    }
  `)),xe=s.ZP.div((({theme:e,gap:t,mb:i})=>s.iv`
    display: flex;
    gap: ${e.size(t)};
    margin-bottom: ${e.size(i||2)};
  `)),ue=s.ZP.div((({theme:e,gap:t})=>s.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(t)};
  `)),me=s.ZP.div((({theme:e})=>s.iv`
    width: ${e.size(40)};
    font-size: ${e.fontSize.verySmall};
    margin-top: ${e.size(.75)};
  `)),ge=s.ZP.ul((({theme:e})=>s.iv`
    list-style: disc inside;
    padding-left: ${e.size(1)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(2)};
    }
  `)),je=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(he,{children:(0,n.jsx)(se,{path:"education_title"})}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2020/01 - 2023/12"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(he,{children:(0,n.jsx)(se,{path:"education_udemy_title"})}),(0,n.jsx)("p",{children:(0,n.jsxs)(ge,{children:[(0,n.jsx)("li",{children:"Clojure Introduction"}),(0,n.jsx)("li",{children:"Java with SQL Databases"}),(0,n.jsx)("li",{children:"Saverless Applications on AWS"}),(0,n.jsx)("li",{children:"Typescript with NodeJS, SQL and noSQL Databases"}),(0,n.jsx)("li",{children:"ReactJS with Redux"}),(0,n.jsx)("li",{children:"English Step-by-Step"})]})})]})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2017/01 - 2019/11"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(he,{children:"IFPI - Instituto Federal do Piauí"}),(0,n.jsx)("p",{children:"Ensino Superior, Análise de Sistemas de Computação."})]})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2014/02 - 2016/11"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(he,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"}),(0,n.jsx)("p",{children:"Ensino Médio, Técnico em Informatica."})]})]})]}),ve=(s.ZP.ul((({theme:e})=>s.iv`
    padding-left: ${e.size(6)};
  `)),s.ZP.li((({theme:e})=>s.iv`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 3px;
      border: 1px solid ${e.colors.text3};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 6px;
    }
  `))),be=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(he,{children:(0,n.jsx)(se,{path:"experience_title"})}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2021/12 - 2023/12"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(he,{children:"WestPoint Software Solutions"}),(0,n.jsx)("p",{children:(0,n.jsx)(se,{path:"experience_westpoint_text"})}),(0,n.jsxs)(ge,{children:[(0,n.jsx)(ve,{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Collums"}),(0,n.jsx)(se,{path:"experience_collums_text"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Vouch IO"}),(0,n.jsx)(se,{path:"experience_vouchio_text"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"TalentId"}),(0,n.jsx)(se,{path:"experience_talentId_text"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Vintage Acquisitions"}),(0,n.jsx)(se,{path:"experience_vintage_text"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Quarx"}),(0,n.jsx)(se,{path:"experience_quarx_text"})]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Westpoint Website"}),(0,n.jsx)(se,{path:"experience_website_text"})]})})]})]})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2018/08 - 2019/11"})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(he,{children:"SocialPower "}),(0,n.jsx)("p",{children:(0,n.jsx)(se,{path:"experience_socialpower_text"})})]})]})]}),fe=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(he,{children:(0,n.jsx)(se,{path:"extraworks_title"})}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2024"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Personal CV"}),(0,n.jsx)(se,{path:"extraworks_personalcv_text"})]})})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2023"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Console UI for desktops"}),(0,n.jsx)(se,{path:"extraworks_consoleui_text"})]})})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2023"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Easy Encrypt"}),(0,n.jsx)(se,{path:"extraworks_easyencrypt_text"})]})})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2022"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Task Manager"}),(0,n.jsx)(se,{path:"extraworks_taskmanage_text"})]})})]}),(0,n.jsxs)(xe,{children:[(0,n.jsx)("div",{children:(0,n.jsx)(me,{children:"2021"})}),(0,n.jsx)("div",{children:(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Translation PWA"}),(0,n.jsx)(se,{path:"extraworks_translationpwa_text"})]})})]})]}),_e=()=>(0,n.jsxs)(ce,{children:[(0,n.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,n.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,n.jsxs)(xe,Object.assign({gap:8,mb:1},{children:[(0,n.jsxs)(ue,Object.assign({gap:2},{children:[(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:(0,n.jsx)(se,{path:"header_address"})}),"Rua Pernambuco Bairro Geraldão"]}),(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:(0,n.jsx)(se,{path:"header_city"})}),"Bertolínia, Piauí, Brasil"]}),(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:(0,n.jsx)(se,{path:"header_phone"})}),"+55 89994009646"]}),(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Email"}),(0,n.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,n.jsxs)(ue,Object.assign({gap:2},{children:[(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"GitHub"}),(0,n.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,n.jsxs)(pe,{children:[(0,n.jsx)("b",{children:"Linkedin"}),(0,n.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),ye=()=>(0,n.jsxs)(ae,{children:[(0,n.jsx)(_e,{}),(0,n.jsxs)(le,{children:[(0,n.jsx)(de,{children:(0,n.jsx)(se,{path:"cv_resume"})}),(0,n.jsx)(be,{}),(0,n.jsx)(je,{}),(0,n.jsx)(fe,{})]})]}),we=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(K,{}),(0,n.jsx)(X,{children:(0,n.jsx)(z,{children:(0,n.jsx)(ye,{})})})]}),Se=()=>{const e=(0,c.useContext)(l);return(0,n.jsxs)(s.f6,Object.assign({theme:w},{children:[(0,n.jsx)(h,{}),(0,n.jsx)(a.Z5,Object.assign({location:e},{children:(0,n.jsx)(a.AW,{path:"/*",element:(0,n.jsx)(we,{})})}))]}))},Pe=(0,c.createContext)(null),ke=e=>{const[t,i]=(0,c.useState)(!0),[o,r]=(0,c.useState)(""),s={firstRun:t,bgImage:o,setFirstRun:i,setBgImage:r},a=(0,c.useMemo)((()=>s),[JSON.stringify(s)]);return(0,n.jsx)(Pe.Provider,Object.assign({value:a},{children:e.children}))};(0,o.s)(document.getElementById("root")).render((0,n.jsx)((()=>(0,n.jsx)(ke,{children:(0,n.jsx)(d,{children:(0,n.jsx)(s.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,n.jsx)(r.VK,{children:(0,n.jsx)(Se,{})})}))})})),{}))}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=(t,i,n,o)=>{if(!i){var s=1/0;for(d=0;d<e.length;d++){for(var[i,n,o]=e[d],a=!0,c=0;c<i.length;c++)(!1&o||s>=o)&&Object.keys(r.O).every((e=>r.O[e](i[c])))?i.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(d--,1);var l=n();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,n,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);r.r(o);var s={};t=t||[null,i({}),i([]),i(i)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>s[t]=()=>e[t]));return s.default=()=>e,r.d(o,s),o},r.d=(e,t)=>{for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,i)=>{var n,o,[s,a,c]=i,l=0;if(s.some((t=>0!==e[t]))){for(n in a)r.o(a,n)&&(r.m[n]=a[n]);if(c)var d=c(r)}for(t&&t(i);l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},i=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),r.nc=void 0;var s=r.O(void 0,[977],(()=>r(549)));s=r.O(s)})();