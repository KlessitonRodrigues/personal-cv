(()=>{"use strict";var e,t,i,o={928:(e,t,i)=>{var o=i(893),r=i(745),s=i(655),n=i(133),a=i(250),c=i(294);const l=(0,c.createContext)(null),d=e=>{const[t,i]=(0,c.useState)("/home"),[r,s]=(0,c.useState)(""),n={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:s},a=(0,c.useMemo)((()=>n),[JSON.stringify(n)]);return(0,o.jsx)(l.Provider,Object.assign({value:a},{children:e.children}))},h=(i.p,(0,n.vJ)((({theme:e})=>n.iv`
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
      padding: 0 ${e.size(1)};
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
  `))),p="#fafafa",x="#f5f5f5",u="#eeeeee",m="#e0e0e0",g="#bdbdbd",b="#9e9e9e",j="#757575",v="#616161",f="#424242",_="#37474f",w="#141414",y={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:p,bg2:x,bg3:u,bg4:m,text1:"#212121",text2:f,text3:v,text4:b,gray:b,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:p,black:w},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},S=(Object.assign(Object.assign({},y),{colors:Object.assign(Object.assign({},y.colors),{bg1:w,bg2:f+"44",bg3:v+"44",bg4:j+"44",text1:m,text2:g,text3:b,text4:v,gray:j,white:m})}),n.ZP.div((({theme:e})=>n.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),k=n.ZP.div((()=>n.iv`
    height: 100%;
    overflow-y: auto;
  `)),P=n.ZP.div((({theme:e})=>n.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),$=e=>(0,o.jsx)(S,{children:(0,o.jsx)(k,{children:(0,o.jsx)(P,Object.assign({id:"doc-content"},{children:e.children}))})});const z=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},A=z();var O=i(279);const I={download:(0,o.jsx)(O.UMo,{}),selector:(0,o.jsx)(O.ZaQ,{}),spinner:(0,o.jsx)(O.H4p,{}),github:(0,o.jsx)(O.ioR,{}),template:(0,o.jsx)(O.jNQ,{}),language:(0,o.jsx)(O.RSg,{})},C=n.ZP.span((({theme:e,size:t})=>n.iv`
    display: inline-flex;
    font-size: ${e.size(t||6)};
    cursor: pointer;
  `)),R=e=>{const{type:t,size:i,style:r,onPress:s}=e,n=(0,c.useMemo)((()=>I[t]),[]);return(0,o.jsx)(C,Object.assign({className:"icon",size:i,style:r,onClick:s},{children:n}))},E=e=>e.check?e.true||e.children:e.false,T=(n.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,n.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),Z=(n.F4`
   from {opacity: 0}
   to {opacity: 1}
`,n.F4`
   to {transform: rotateZ(360deg);}
`),J=T,M=Z,N=n.ZP.div((()=>n.iv``)),q=n.ZP.div((()=>n.iv`
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
  `)),W=n.ZP.div((e=>n.iv`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.theme.size(8)};
    animation: ${M} 0.8s infinite linear;
  `)),F=n.ZP.p((e=>n.iv`
    font-size: ${e.theme.fontSize.label};
    margin-bottom: ${e.theme.size(2)};
    animation: ${J} 0.5s ease-out;
  `)),G=n.ZP.p((e=>n.iv`
    color: ${e.theme.colors.text4};
    font-size: ${e.theme.fontSize.verySmall};
    animation: ${J} 0.5s ease-out;
  `)),L=e=>{const{show:t,type:i,title:r,description:s}=e;return(0,o.jsxs)(N,{children:[(0,o.jsx)(E,Object.assign({check:t&&"icon"===i},{children:(0,o.jsx)(W,{children:(0,o.jsx)(R,{type:"spinner",size:12})})})),(0,o.jsx)(E,Object.assign({check:t&&"fullScreen"===i},{children:(0,o.jsxs)(q,{children:[(0,o.jsx)(W,{children:(0,o.jsx)(R,{type:"spinner",size:12})}),(0,o.jsx)(F,{children:r}),(0,o.jsx)(G,{children:s})]})}))]})},U=n.ZP.label((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    padding: 0 ${e.size(1)};
    font-size: ${e.fontSize.label};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text1};
    border-radius: ${e.radius.verySmall};
    box-shadow: ${e.shadow.medium};
  `)),D=n.ZP.select((({theme:e})=>n.iv`
    color: ${e.colors.text1};
    font-size: ${e.fontSize.small};
    padding-top: ${e.size(.5)};
    font-weight: 600;

    &::-webkit-scrollbar {
      width: ${e.size(2)};
    }

    &::-webkit-scrollbar-track {
      background: ${e.colors.bg1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${e.colors.gray};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${e.colors.white};
    }
  `)),B=(n.ZP.div((()=>n.iv`
    min-width: max-content;
  `)),n.ZP.option((({theme:e})=>n.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
    font-family: sans-serif;
    font-weight: bold;
  `))),V=JSON.parse('{"header_pdf_btn":"Save as PDF","header_address":"Address","header_city":"City","header_phone":"Phone","cv_resume":"A small guy from a small town with big dreams who loves programming any kind of ideas and like to spent hours trying to improve his own code, like to always code his own solution to the problem but keeping everthing as simple as possible, like to learn new ways to coding and build applications and of course like games.","experience_title":"Experience","experience_westpoint_text":"UK software company that provides software development services to third-party companies.","experience_collums_text":"Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with React, NodeJS, Mongodb and Docker.","experience_vouchio_text":"Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Online platform that uses the powers of GPT chat to evaluate candidates\' CVs and assign them a score, built with NextJS with MatineUI, OpenAI API and AWS services.","experience_vintage_text":"Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services.","experience_quarx_text":"Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services.","experience_website_text":"Company website built with NextJS and Styled Components.","experience_socialpower_text":" Web application with geolocation to map streets points that need attention from the city hall, built with nodeJS and AngularJS.","education_title":"Education","education_udemy_title":"Udemy Certificates","extraworks_title":"Extra Works","extraworks_personalcv_text":"This document in HTML and available in multiple languages, built with React.","extraworks_consoleui_text":"Application that provide console interface like PS5/Xbox for PCs, built with React and Electron.","extraworks_easyencrypt_text":"Web and Mobile application to encrypt plan text, built with React, React Native and CryptoJS.","extraworks_taskmanage_text":"Todo application with calendar and notes, built with React.","extraworks_translationpwa_text":"Translation website with multiple language support, built with React and GoogleAPIs."}'),H=JSON.parse('{"header_address":"DIRECCIÓN","header_city":"Ciudad","header_phone":"Teléfono","cv_resume":"Un chico pequeño de un pueblo pequeño con grandes sueños a quien le encanta programar cualquier tipo de idea y le gusta pasar horas tratando de mejorar su propio código, le gusta codificar siempre su propia solución al problema pero manteniendo todo lo más simple posible, le gusta aprender. ","experience_title":"Experiencia","experience_westpoint_text":"Empresa de software del Reino Unido que proporciona servicios de desarrollo de software a empresas de terceros.","experience_collums_text":"Plataforma online utilizada para gestionar clínicas de Estética con más de 11 franquicias como cliente, construida con React, NodeJS, Mongodb y Docker.","experience_vouchio_text":"Aplicación móvil utilizada para manejar vehículos (abrir/cerrar puertas, arrancar/parar motor, etc.), construida con ClojureScript, React Native, API Blockchain, API de Android/IOS.","experience_talentId_text":"Plataforma online que utiliza los poderes del chat GPT para evaluar los CV de los candidatos y asignarles una puntuación, construida con NextJS con MatineUI, OpenAI API y servicios AWS.","experience_vintage_text":"Dashboard para gestión de inventario y venta de barriles, sincronizado con hojas de cálculo de Google, construido con ViteJS con MantineUI, API de Google y servicios de AWS.","experience_quarx_text":"Extensión del navegador que proporciona guías en tiempo real para ayudar a los usuarios a realizar tareas complejas en muchos sitios web (AWS, nube de Google, etc.), creada con React, API de Chrome y servicios de AWS.","experience_website_text":"Sitio web de la empresa creado con NextJS y Styled Components.","experience_socialpower_text":" Aplicación web con geolocalización para mapear puntos de calles que necesitan atención del ayuntamiento, construida usando nodeJS y AngularJS.","education_title":"Educación","education_udemy_title":"Certificates da la Udemy","extraworks_title":"Trabajos adicionales","extraworks_personalcv_text":"Este documento está disponible en varios idiomas, creado con React.","extraworks_consoleui_text":"Aplicación que proporciona una interfaz de consola como PS5/Xbox para PC, construida con React y Electron.","extraworks_easyencrypt_text":"Aplicación web y móvil para cifrar texto de planes, construida con React, React Native y CryptoJS.","extraworks_taskmanage_text":"Aplicación Todo con calendario y notas, construida con React.","extraworks_translationpwa_text":"Sitio web de traducción con soporte para múltiples idiomas, creado con React y GoogleAPI."}'),Q=JSON.parse('{"header_pdf_btn":"Salvar como PDF","header_address":"Endereço","header_city":"Cidade","header_phone":"Telefone","cv_resume":"Um pequeno menino de uma cidade pequena com grandes sonhos que adora programar qualquer tipo de ideia e gosta de passar horas tentando melhorar seu próprio código, gosta de sempre codificar sua própria solução para o problema mas mantendo tudo o mais simples possível, gosta de aprender novas formas de desenvolvimento de software e é claro gosta de jogos.","experience_title":"Experiência","experience_westpoint_text":"Empresa de software do Reino Unido que fornece serviços de desenvolvimento de software para empresas terceirizadas.","experience_collums_text":"Plataforma online utilizada para gerenciamento de clínicas de Estética com mais de 11 franquias como cliente, desenvolvida em React, NodeJS, Mongodb e Docker.","experience_vouchio_text":"Aplicativo móvel usado para lidar com veículos (abrir/fechar portas, ligar/desligar motor, etc), construído com ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Plataforma online que utiliza os poderes do chat GPT para avaliar currículos de candidatos e atribuir-lhes uma pontuação, desenvolvida em NextJS com MatineUI, API OpenAI e AWS services.","experience_vintage_text":"Dashboard para gestão de estoque e vendas de barris, sincronizado com planilhas Google, desenvolvida em ViteJS com MantineUI, Google APIs e AWS services.","experience_quarx_text":"Extensão de navegador que fornece guias em tempo real para ajudar os usuários a realizar tarefas complexas em muitos sites (AWS, Google Cloud, etc.), desenvolvidos em React, Chrome APIs e AWS services.","experience_website_text":"Site da empresa construído com NextJS e Styled Components.","experience_socialpower_text":" Aplicação web com geolocalização para mapear pontos de ruas que necessitam de atenção da prefeitura, desenvolvidos em nodeJS e AngularJS.","education_title":"Educação","education_udemy_title":"Certificados da Udemy","extraworks_title":"Trabalhos extras","extraworks_personalcv_text":"Este documento em HTML e disponível em vários idiomas, desenvolvida em React.","extraworks_consoleui_text":"Aplicativo que fornece interface de console como PS5/Xbox para PCs, desenvolvida em React e Electron.","extraworks_easyencrypt_text":"Aplicativo Web e Mobile para criptografar texto, desenvolvida em React, React Native e CryptoJS.","extraworks_taskmanage_text":"Aplicativo Todo com calendário e notas, desenvolvida em React.","extraworks_translationpwa_text":"Site de tradução com suporte a vários idiomas, desenvolvida em React e Google APIs."}'),K=z(),X=V,Y=Q,ee=H,te=e=>{const{path:t}=e;return"es"===K?(0,o.jsx)(o.Fragment,{children:ee[t]||"NO TEXT"}):"pt"===K?(0,o.jsx)(o.Fragment,{children:Y[t]||"NO TEXT"}):(0,o.jsx)(o.Fragment,{children:X[t]||"NO TEXT"})},ie=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    background-color: ${f};
    color: ${e.colors.white};
    padding: ${e.size(2)} ${e.size(6)};
    font-size: ${e.fontSize.verySmall};
  `)),oe=n.ZP.button((({theme:e})=>n.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
  `)),re=(n.ZP.select((({theme:e})=>n.iv`
    background-color: ${e.colors.bg2};
  `)),n.ZP.button((({theme:e})=>n.iv`
    background-color: ${e.colors.bg2};
  `))),se=n.ZP.a((({theme:e})=>n.iv`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${e.size(1)};
    color: ${e.colors.bg2};

    &:hover {
      text-decoration: underline;
    }
  `));const ne=()=>{const[e,t]=(0,c.useState)(!1);return(0,o.jsxs)(ie,{children:[(0,o.jsxs)(oe,{children:[(0,o.jsxs)(U,{children:[(0,o.jsx)(R,{type:"language"}),(0,o.jsxs)(D,Object.assign({defaultValue:A,onChange:e=>(e=>{const[t,i]=location.href.split("?"),o=new URLSearchParams(i);o.set("lang",e),location.href=`${t}?${o.toString()}`})(e.target.value)},{children:[(0,o.jsx)(B,Object.assign({value:"en"},{children:"English"})),(0,o.jsx)(B,Object.assign({value:"pt"},{children:"Português"})),(0,o.jsx)(B,Object.assign({value:"es"},{children:"Spanish"}))]}))]}),(0,o.jsxs)(U,{children:[(0,o.jsx)(R,{type:"template"}),(0,o.jsx)(D,{children:(0,o.jsx)(B,{children:"Template 1"})})]}),(0,o.jsxs)(re,Object.assign({onClick:()=>{return e=void 0,i=void 0,r=function*(){var e,i,o,r;t(!0),yield(e=void 0,i=void 0,o=void 0,r=function*(){const e=document.getElementById("doc-content"),t=document.createElement("iframe");document.body.appendChild(t);const i=t.contentDocument;i.head.innerHTML=document.head.innerHTML,i.body.innerHTML=e.innerHTML,t.style.position="absolute",t.style.left="100%",t.style.top="0",yield new Promise((e=>setTimeout(e,1e3))),t.contentWindow.print()},new(o||(o=Promise))((function(t,s){function n(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}c((r=r.apply(e,i||[])).next())}))),t(!1)},new((o=void 0)||(o=Promise))((function(t,s){function n(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(n,a)}c((r=r.apply(e,i||[])).next())}));var e,i,o,r}},{children:[(0,o.jsx)(R,{type:"download"}),(0,o.jsx)(te,{path:"header_pdf_btn"})]}))]}),(0,o.jsxs)(se,Object.assign({href:"https://github.com/KlessitonRodrigues/personal-cv",target:"_blank"},{children:[(0,o.jsx)(R,{type:"github"}),"GitHub"]})),(0,o.jsx)(L,{type:"fullScreen",show:e})]})},ae=n.ZP.div((({theme:e})=>n.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),ce=e=>(0,o.jsx)(ae,{children:e.children}),le=n.ZP.ul((({theme:e})=>n.iv`
    list-style: none;
    padding-left: ${e.size(5)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(2)};
    }
  `)),de=n.ZP.li((({theme:e})=>n.iv`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 2px;
      border: 1px solid ${e.colors.text3};
      background-color: ${e.colors.text1};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 6px;
    }

    b {
      margin-right: ${e.size(2)};
    }
  `)),he=n.ZP.div((()=>n.iv``)),pe=n.ZP.div((({theme:e})=>n.iv`
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
  `)),xe=n.ZP.div((({theme:e})=>n.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${p};
    color: ${f};
  `)),ue=n.ZP.div((({theme:e})=>n.iv`
    margin: ${e.size(4)} 0;
  `)),me=n.ZP.h4((({theme:e})=>n.iv`
    margin-bottom: ${e.size(2)};
  `)),ge=n.ZP.span((({theme:e})=>n.iv`
    b {
      margin-right: ${e.size(2)};
    }
  `)),be=n.ZP.div((({theme:e,gap:t,mb:i})=>n.iv`
    display: flex;
    gap: ${e.size(t)};
    margin-bottom: ${e.size(i||2)};
  `)),je=n.ZP.div((({theme:e,gap:t})=>n.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(t)};
  `)),ve=n.ZP.div((({theme:e})=>n.iv`
    width: ${e.size(40)};
    font-size: ${e.fontSize.verySmall};
    margin-top: ${e.size(.75)};
  `)),fe=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(me,{children:(0,o.jsx)(te,{path:"education_title"})}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2020/01 - 2023/12"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(me,{children:(0,o.jsx)(te,{path:"education_udemy_title"})}),(0,o.jsxs)(le,{children:[(0,o.jsx)(de,{children:"Clojure Introduction"}),(0,o.jsx)(de,{children:"Java with SQL Databases"}),(0,o.jsx)(de,{children:"Saverless AppListItemcations on AWS"}),(0,o.jsx)(de,{children:"Typescript with NodeJS, SQL and noSQL Databases"}),(0,o.jsx)(de,{children:"ReactJS with Redux"}),(0,o.jsx)(de,{children:"EngListItemsh Step-by-Step"})]})]})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2017/01 - 2019/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(me,{children:"IFPI - Instituto Federal do Piauí"}),(0,o.jsx)("p",{children:"Ensino Superior, Análise de Sistemas de Computação."})]})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2014/02 - 2016/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(me,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"}),(0,o.jsx)("p",{children:"Ensino Médio, Técnico em Informatica."})]})]})]}),_e=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(me,{children:(0,o.jsx)(te,{path:"experience_title"})}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2021/12 - 2023/12"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(me,{children:"WestPoint Software Solutions"}),(0,o.jsx)("p",{children:(0,o.jsx)(te,{path:"experience_westpoint_text"})}),(0,o.jsxs)(le,{children:[(0,o.jsxs)(de,{children:[(0,o.jsx)("b",{children:"Collums"}),(0,o.jsx)(te,{path:"experience_collums_text"})]}),(0,o.jsxs)(de,{children:[(0,o.jsx)("b",{children:"Vouch IO"}),(0,o.jsx)(te,{path:"experience_vouchio_text"})]}),(0,o.jsxs)(de,{children:[(0,o.jsx)("b",{children:"TalentId"}),(0,o.jsx)(te,{path:"experience_talentId_text"})]}),(0,o.jsxs)(de,{children:[(0,o.jsx)("b",{children:"Vintage Acquisitions"}),(0,o.jsx)(te,{path:"experience_vintage_text"})]}),(0,o.jsxs)(de,{children:[(0,o.jsx)("b",{children:"Quarx"}),(0,o.jsx)(te,{path:"experience_quarx_text"})]}),(0,o.jsxs)(de,{children:[(0,o.jsx)("b",{children:"Westpoint Website"}),(0,o.jsx)(te,{path:"experience_website_text"})]})]})]})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2018/08 - 2019/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(me,{children:"SocialPower "}),(0,o.jsx)("p",{children:(0,o.jsx)(te,{path:"experience_socialpower_text"})})]})]})]}),we=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(me,{children:(0,o.jsx)(te,{path:"extraworks_title"})}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2024"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Personal CV"}),(0,o.jsx)(te,{path:"extraworks_personalcv_text"})]})})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2023"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Console UI for desktops"}),(0,o.jsx)(te,{path:"extraworks_consoleui_text"})]})})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2023"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Easy Encrypt"}),(0,o.jsx)(te,{path:"extraworks_easyencrypt_text"})]})})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2022"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Task Manager"}),(0,o.jsx)(te,{path:"extraworks_taskmanage_text"})]})})]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(ve,{children:"2021"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Translation PWA"}),(0,o.jsx)(te,{path:"extraworks_translationpwa_text"})]})})]})]}),ye=()=>(0,o.jsxs)(pe,{children:[(0,o.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,o.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,o.jsxs)(be,Object.assign({gap:8,mb:1},{children:[(0,o.jsxs)(je,Object.assign({gap:2},{children:[(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(te,{path:"header_address"})}),"Rua Pernambuco Bairro Geraldão"]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(te,{path:"header_city"})}),"Bertolínia, Piauí, Brasil"]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(te,{path:"header_phone"})}),"+55 89994009646"]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Email"}),(0,o.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,o.jsxs)(je,Object.assign({gap:2},{children:[(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"GitHub"}),(0,o.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("b",{children:"Linkedin"}),(0,o.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),Se=()=>(0,o.jsxs)(he,{children:[(0,o.jsx)(ye,{}),(0,o.jsxs)(xe,{children:[(0,o.jsx)(ue,{children:(0,o.jsx)(te,{path:"cv_resume"})}),(0,o.jsx)(_e,{}),(0,o.jsx)(fe,{}),(0,o.jsx)(we,{})]})]}),ke=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ne,{}),(0,o.jsx)(ce,{children:(0,o.jsx)($,{children:(0,o.jsx)(Se,{})})})]}),Pe=()=>{const e=(0,c.useContext)(l);return(0,o.jsxs)(n.f6,Object.assign({theme:y},{children:[(0,o.jsx)(h,{}),(0,o.jsx)(a.Z5,Object.assign({location:e},{children:(0,o.jsx)(a.AW,{path:"/*",element:(0,o.jsx)(ke,{})})}))]}))},$e=(0,c.createContext)(null),ze=e=>{const[t,i]=(0,c.useState)(!0),[r,s]=(0,c.useState)(""),n={firstRun:t,bgImage:r,setFirstRun:i,setBgImage:s},a=(0,c.useMemo)((()=>n),[JSON.stringify(n)]);return(0,o.jsx)($e.Provider,Object.assign({value:a},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,o.jsx)((()=>(0,o.jsx)(ze,{children:(0,o.jsx)(d,{children:(0,o.jsx)(n.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,o.jsx)(s.VK,{children:(0,o.jsx)(Pe,{})})}))})})),{}))}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.m=o,e=[],s.O=(t,i,o,r)=>{if(!i){var n=1/0;for(d=0;d<e.length;d++){for(var[i,o,r]=e[d],a=!0,c=0;c<i.length;c++)(!1&r||n>=r)&&Object.keys(s.O).every((e=>s.O[e](i[c])))?i.splice(c--,1):(a=!1,r<n&&(n=r));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,o,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);s.r(r);var n={};t=t||[null,i({}),i([]),i(i)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,s.d(r,n),r},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var o,r,[n,a,c]=i,l=0;if(n.some((t=>0!==e[t]))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(c)var d=c(s)}for(t&&t(i);l<n.length;l++)r=n[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},i=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),s.nc=void 0;var n=s.O(void 0,[977],(()=>s(928)));n=s.O(n)})();