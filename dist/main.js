(()=>{"use strict";var e,t,i,r={936:(e,t,i)=>{var r=i(893),s=i(745),o=i(655),n=i(250),a=i(294);const c=(0,a.createContext)(null),l=e=>{const[t,i]=(0,a.useState)("/home"),[s,o]=(0,a.useState)(""),n={pathname:t,hash:"",search:"",lang:s,setPath:i,setLang:o},l=(0,a.useMemo)((()=>n),[JSON.stringify(n)]);return(0,r.jsx)(c.Provider,Object.assign({value:l},{children:e.children}))};var d=i(133);i.p;const h=(0,d.vJ)((({theme:e})=>d.iv`
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
  `)),x="#fafafa",p="#f5f5f5",u="#eeeeee",m="#e0e0e0",g="#bdbdbd",j="#9e9e9e",v="#757575",b="#616161",f="#424242",_="#37474f",w="#141414",y={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:x,bg2:p,bg3:u,bg4:m,text1:"#212121",text2:f,text3:b,text4:j,gray:j,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:x,black:w},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},S=(Object.assign(Object.assign({},y),{colors:Object.assign(Object.assign({},y.colors),{bg1:w,bg2:f+"44",bg3:b+"44",bg4:v+"44",text1:m,text2:g,text3:j,text4:b,gray:v,white:m})}),d.ZP.div((({theme:e})=>d.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),k=d.ZP.div((()=>d.iv`
    height: 100%;
    overflow-y: auto;
  `)),P=d.ZP.div((({theme:e})=>d.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),z=e=>(0,r.jsx)(S,{children:(0,r.jsx)(k,{children:(0,r.jsx)(P,Object.assign({id:"doc-content"},{children:e.children}))})});const A=()=>{return e=void 0,t=void 0,r=function*(){const e=document.getElementById("doc-content"),t=document.createElement("iframe");document.body.appendChild(t);const i=t.contentDocument;i.head.innerHTML=document.head.innerHTML,i.body.innerHTML=e.innerHTML,t.style.position="absolute",t.style.left="100%",t.style.top="0",yield new Promise((e=>setTimeout(e,1e3))),t.contentWindow.print()},new((i=void 0)||(i=Promise))((function(s,o){function n(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(n,a)}c((r=r.apply(e,t||[])).next())}));var e,t,i,r};var O=i(279);const $={download:(0,r.jsx)(O.HA8,{}),selector:(0,r.jsx)(O.ZaQ,{})},I=d.ZP.span((({theme:e,size:t})=>d.iv`
    display: inline-flex;
    font-size: ${e.size(t||7)};
    cursor: pointer;
  `)),C=e=>{const{type:t,size:i,style:s,onPress:o}=e;return(0,r.jsx)(I,Object.assign({className:"icon",size:i,style:s,onClick:o},{children:$[t]}))},E=d.ZP.div((({theme:e})=>d.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
    background-color: ${f};
    color: ${e.colors.white};
    padding: ${e.size(2)};
    font-size: ${e.fontSize.verySmall};
  `)),R=d.ZP.select((({theme:e})=>d.iv`
    background-color: ${e.colors.bg2};
  `)),T=d.ZP.button((({theme:e})=>d.iv`
    background-color: ${e.colors.bg2};
  `)),J=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},N=J(),M=()=>(0,r.jsxs)(E,{children:[(0,r.jsx)(R,{children:(0,r.jsx)("option",{children:"Template 1"})}),(0,r.jsxs)(R,Object.assign({defaultValue:N,onChange:e=>(e=>{const[t,i]=location.href.split("?"),r=new URLSearchParams(i);r.set("lang",e),location.href=`${t}?${r.toString()}`})(e.target.value)},{children:[(0,r.jsx)("option",Object.assign({value:"en"},{children:"English"})),(0,r.jsx)("option",Object.assign({value:"pt"},{children:"Português"})),(0,r.jsx)("option",Object.assign({value:"es"},{children:"Spanish"}))]})),(0,r.jsxs)(T,Object.assign({onClick:A},{children:[(0,r.jsx)(C,{type:"download"}),"Save as PDF"]}))]}),q=d.ZP.div((({theme:e})=>d.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),W=e=>(0,r.jsx)(q,{children:e.children}),Z=JSON.parse('{"header_address":"Address","header_city":"City","header_phone":"Phone","cv_resume":"A small guy from a small town with big dreams who loves programming any kind of ideas and like to spent hours trying to improve his own code, like to always code his own solution to the problem but keeping everthing as simple as possible, like to learn new ways to coding and build applications and of course like games.","experience_title":"Experience","experience_westpoint_text":"UK software company that provides software development services to third-party companies.","experience_collums_text":"Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with React, NodeJS, Mongodb and Docker.","experience_vouchio_text":"Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Online platform that uses the powers of GPT chat to evaluate candidates\' CVs and assign them a score, built with NextJS with MatineUI, OpenAI API and AWS services.","experience_vintage_text":"Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services.","experience_quarx_text":"Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services.","experience_website_text":"Company website built with NextJS and Styled Components.","experience_socialpower_text":" Web application with geolocation to map streets points that need attention from the city hall, built using nodeJS and AngularJS.","education_title":"Education","extraworks_title":"Extra Works","extraworks_personalcv_text":"This document in HTML and available in multiple languages, built with React.","extraworks_consoleui_text":"Application that provide console interface like PS5/Xbox for PCs, built with React and Electron.","extraworks_easyencrypt_text":"Web and Mobile application to encrypt plan text, built with React, React Native and CryptoJS.","extraworks_taskmanage_text":"Todo application with calendar and notes, built with React.","extraworks_translationpwa_text":"Translation website with multiple language support, built with React and GoogleAPIs."}'),G=JSON.parse('{"header_address":"Endereço","header_city":"Cidade","header_phone":"Telefone","cv_resume":"Um pequeno menino de uma cidade pequena com grandes sonhos que adora programar qualquer tipo de ideia e gosta de passar horas tentando melhorar seu próprio código, gosta de sempre codificar sua própria solução para o problema mas mantendo tudo o mais simples possível, gosta de aprender novas formas de desenvolvimento de software e é claro gosta de jogos.","experience_title":"Experiência","experience_westpoint_text":"Empresa de software do Reino Unido que fornece serviços de desenvolvimento de software para empresas terceirizadas.","experience_collums_text":"Plataforma online utilizada para gerenciamento de clínicas de Estética com mais de 11 franquias como cliente, desenvolvida em React, NodeJS, Mongodb e Docker.","experience_vouchio_text":"Aplicativo móvel usado para lidar com veículos (abrir/fechar portas, ligar/desligar motor, etc), construído com ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Plataforma online que utiliza os poderes do chat GPT para avaliar currículos de candidatos e atribuir-lhes uma pontuação, desenvolvida em NextJS com MatineUI, API OpenAI e AWS services.","experience_vintage_text":"Dashboard para gestão de estoque e vendas de barris, sincronizado com planilhas Google, desenvolvida em ViteJS com MantineUI, Google APIs e AWS services.","experience_quarx_text":"Extensão de navegador que fornece guias em tempo real para ajudar os usuários a realizar tarefas complexas em muitos sites (AWS, Google Cloud, etc.), desenvolvidos em React, Chrome APIs e AWS services.","experience_website_text":"Site da empresa construído com NextJS e Styled Components.","experience_socialpower_text":" Aplicação web com geolocalização para mapear pontos de ruas que necessitam de atenção da prefeitura, desenvolvidos em nodeJS e AngularJS.","education_title":"Educação","extraworks_title":"Trabalhos extras","extraworks_personalcv_text":"Este documento em HTML e disponível em vários idiomas, desenvolvida em React.","extraworks_consoleui_text":"Aplicativo que fornece interface de console como PS5/Xbox para PCs, desenvolvida em React e Electron.","extraworks_easyencrypt_text":"Aplicativo Web e Mobile para criptografar texto, desenvolvida em React, React Native e CryptoJS.","extraworks_taskmanage_text":"Aplicativo Todo com calendário e notas, desenvolvida em React.","extraworks_translationpwa_text":"Site de tradução com suporte a vários idiomas, desenvolvida em React e Google APIs."}'),L=JSON.parse('{"header_address":"DIRECCIÓN","header_city":"Ciudad","header_phone":"Teléfono","cv_resume":"Un chico pequeño de un pueblo pequeño con grandes sueños a quien le encanta programar cualquier tipo de idea y le gusta pasar horas tratando de mejorar su propio código, le gusta codificar siempre su propia solución al problema pero manteniendo todo lo más simple posible, le gusta aprender. ","experience_title":"Experiencia","experience_westpoint_text":"Empresa de software del Reino Unido que proporciona servicios de desarrollo de software a empresas de terceros.","experience_collums_text":"Plataforma online utilizada para gestionar clínicas de Estética con más de 11 franquicias como cliente, construida con React, NodeJS, Mongodb y Docker.","experience_vouchio_text":"Aplicación móvil utilizada para manejar vehículos (abrir/cerrar puertas, arrancar/parar motor, etc.), construida con ClojureScript, React Native, API Blockchain, API de Android/IOS.","experience_talentId_text":"Plataforma online que utiliza los poderes del chat GPT para evaluar los CV de los candidatos y asignarles una puntuación, construida con NextJS con MatineUI, OpenAI API y servicios AWS.","experience_vintage_text":"Dashboard para gestión de inventario y venta de barriles, sincronizado con hojas de cálculo de Google, construido con ViteJS con MantineUI, API de Google y servicios de AWS.","experience_quarx_text":"Extensión del navegador que proporciona guías en tiempo real para ayudar a los usuarios a realizar tareas complejas en muchos sitios web (AWS, nube de Google, etc.), creada con React, API de Chrome y servicios de AWS.","experience_website_text":"Sitio web de la empresa creado con NextJS y Styled Components.","experience_socialpower_text":" Aplicación web con geolocalización para mapear puntos de calles que necesitan atención del ayuntamiento, construida usando nodeJS y AngularJS.","education_title":"Educación","extraworks_title":"Trabajos adicionales","extraworks_personalcv_text":"Este documento está disponible en varios idiomas, creado con React.","extraworks_consoleui_text":"Aplicación que proporciona una interfaz de consola como PS5/Xbox para PC, construida con React y Electron.","extraworks_easyencrypt_text":"Aplicación web y móvil para cifrar texto de planes, construida con React, React Native y CryptoJS.","extraworks_taskmanage_text":"Aplicación Todo con calendario y notas, construida con React.","extraworks_translationpwa_text":"Sitio web de traducción con soporte para múltiples idiomas, creado con React y GoogleAPI."}'),F=J(),U=Z,D=G,B=L,V=e=>{const{path:t}=e;return"es"===F?(0,r.jsx)(r.Fragment,{children:B[t]||"NO TEXT"}):"pt"===F?(0,r.jsx)(r.Fragment,{children:D[t]||"NO TEXT"}):(0,r.jsx)(r.Fragment,{children:U[t]||"NO TEXT"})},H=d.ZP.div((()=>d.iv``)),Q=d.ZP.div((({theme:e})=>d.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${_};
    color: ${u};

    h1 {
      margin-bottom: ${e.size(2)};
      color: ${p};
    }

    h3 {
      margin-bottom: ${e.size(4)};
    }
  `)),K=d.ZP.div((({theme:e})=>d.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${x};
    color: ${f};
  `)),X=d.ZP.div((({theme:e})=>d.iv`
    margin: ${e.size(4)} 0;
  `)),Y=d.ZP.h4((({theme:e})=>d.iv`
    margin-bottom: ${e.size(2)};
  `)),ee=d.ZP.span((({theme:e})=>d.iv`
    b {
      margin-right: ${e.size(2)};
    }
  `)),te=d.ZP.div((({theme:e,gap:t,mb:i})=>d.iv`
    display: flex;
    gap: ${e.size(t)};
    margin-bottom: ${e.size(i||2)};
  `)),ie=d.ZP.div((({theme:e,gap:t})=>d.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(t)};
  `)),re=d.ZP.div((({theme:e})=>d.iv`
    width: ${e.size(40)};
    font-size: ${e.fontSize.verySmall};
    margin-top: ${e.size(.75)};
  `)),se=d.ZP.ul((({theme:e})=>d.iv`
    list-style: disc inside;
    padding-left: ${e.size(1)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(2)};
    }
  `)),oe=()=>(0,r.jsxs)(Q,{children:[(0,r.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,r.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,r.jsxs)(te,Object.assign({gap:8,mb:1},{children:[(0,r.jsxs)(ie,Object.assign({gap:2},{children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(V,{path:"header_address"})}),"Rua Pernambuco Bairro Geraldão"]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(V,{path:"header_city"})}),"Bertolínia, Piauí, Brasil"]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(V,{path:"header_phone"})}),"+55 89994009646"]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Email"}),(0,r.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,r.jsxs)(ie,Object.assign({gap:2},{children:[(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"GitHub"}),(0,r.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Linkedin"}),(0,r.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),ne=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{children:(0,r.jsx)(V,{path:"experience_title"})}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2021/12 - 2023/12"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Y,{children:"WestPoint Software Solutions"}),(0,r.jsx)("p",{children:(0,r.jsx)(V,{path:"experience_westpoint_text"})}),(0,r.jsxs)(se,{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Collums"}),(0,r.jsx)(V,{path:"experience_collums_text"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Vouch IO"}),(0,r.jsx)(V,{path:"experience_vouchio_text"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"TalentId"}),(0,r.jsx)(V,{path:"experience_talentId_text"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Vintage Acquisitions"}),(0,r.jsx)(V,{path:"experience_vintage_text"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Quarx"}),(0,r.jsx)(V,{path:"experience_quarx_text"})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Westpoint Website"}),(0,r.jsx)(V,{path:"experience_website_text"})]})})]})]})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2018/08 - 2019/11"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Y,{children:"SocialPower "}),(0,r.jsx)("p",{children:(0,r.jsx)(V,{path:"experience_socialpower_text"})})]})]})]}),ae=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{children:(0,r.jsx)(V,{path:"education_title"})}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2020/01 - 2023/12"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Y,{children:"Udemy Certificates"}),(0,r.jsx)("p",{children:(0,r.jsxs)(se,{children:[(0,r.jsx)("li",{children:"Clojure Introduction"}),(0,r.jsx)("li",{children:"Java with SQL Databases"}),(0,r.jsx)("li",{children:"Saverless Applications on AWS"}),(0,r.jsx)("li",{children:"Typescript with NodeJS, SQL and noSQL Databases"}),(0,r.jsx)("li",{children:"ReactJS with Redux"}),(0,r.jsx)("li",{children:"English Step-by-Step"})]})})]})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2017/01 - 2019/11"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Y,{children:"IFPI - Instituto Federal do Piauí"}),(0,r.jsx)("p",{children:"Ensino Superior, Análise de Sistemas de Computação."})]})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2018/08 - 2020/01"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)(Y,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"}),(0,r.jsx)("p",{children:"Ensino Médio, Técnico em Informatica."})]})]})]}),ce=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{children:(0,r.jsx)(V,{path:"extraworks_title"})}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2024"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Personal CV"}),(0,r.jsx)(V,{path:"extraworks_personalcv_text"})]})})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2023"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Console UI for desktops"}),(0,r.jsx)(V,{path:"extraworks_consoleui_text"})]})})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2023"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Easy Encrypt"}),(0,r.jsx)(V,{path:"extraworks_easyencrypt_text"})]})})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2022"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Task Manager"}),(0,r.jsx)(V,{path:"extraworks_taskmanage_text"})]})})]}),(0,r.jsxs)(te,{children:[(0,r.jsx)("div",{children:(0,r.jsx)(re,{children:"2021"})}),(0,r.jsx)("div",{children:(0,r.jsxs)(ee,{children:[(0,r.jsx)("b",{children:"Translation PWA"}),(0,r.jsx)(V,{path:"extraworks_translationpwa_text"})]})})]})]}),le=()=>(0,r.jsxs)(H,{children:[(0,r.jsx)(oe,{}),(0,r.jsxs)(K,{children:[(0,r.jsx)(X,{children:(0,r.jsx)(V,{path:"cv_resume"})}),(0,r.jsx)(ne,{}),(0,r.jsx)(ae,{}),(0,r.jsx)(ce,{})]})]}),de=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M,{}),(0,r.jsx)(W,{children:(0,r.jsx)(z,{children:(0,r.jsx)(le,{})})})]}),he=()=>{const e=(0,a.useContext)(c);return(0,r.jsxs)(d.f6,Object.assign({theme:y},{children:[(0,r.jsx)(h,{}),(0,r.jsx)(n.Z5,Object.assign({location:e},{children:(0,r.jsx)(n.AW,{path:"/*",element:(0,r.jsx)(de,{})})}))]}))},xe=(0,a.createContext)(null),pe=e=>{const[t,i]=(0,a.useState)(!0),[s,o]=(0,a.useState)(""),n={firstRun:t,bgImage:s,setFirstRun:i,setBgImage:o},c=(0,a.useMemo)((()=>n),[JSON.stringify(n)]);return(0,r.jsx)(xe.Provider,Object.assign({value:c},{children:e.children}))};(0,s.s)(document.getElementById("root")).render((0,r.jsx)((()=>(0,r.jsx)(pe,{children:(0,r.jsx)(l,{children:(0,r.jsx)(d.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,r.jsx)(o.VK,{children:(0,r.jsx)(he,{})})}))})})),{}))}},s={};function o(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return r[e](i,i.exports,o),i.exports}o.m=r,e=[],o.O=(t,i,r,s)=>{if(!i){var n=1/0;for(d=0;d<e.length;d++){for(var[i,r,s]=e[d],a=!0,c=0;c<i.length;c++)(!1&s||n>=s)&&Object.keys(o.O).every((e=>o.O[e](i[c])))?i.splice(c--,1):(a=!1,s<n&&(n=s));if(a){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,r,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var s=Object.create(null);o.r(s);var n={};t=t||[null,i({}),i([]),i(i)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,o.d(s,n),s},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,i)=>{var r,s,[n,a,c]=i,l=0;if(n.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var d=c(o)}for(t&&t(i);l<n.length;l++)s=n[l],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},i=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),o.nc=void 0;var n=o.O(void 0,[977],(()=>o(936)));n=o.O(n)})();