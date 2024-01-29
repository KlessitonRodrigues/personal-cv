(()=>{"use strict";var e,t,i,o={165:(e,t,i)=>{var o=i(893),r=i(745),s=i(655),a=i(133),n=i(250),c=i(294);const l=(0,c.createContext)(null),d=e=>{const[t,i]=(0,c.useState)("/home"),[r,s]=(0,c.useState)(""),a={pathname:t,hash:"",search:"",lang:r,setPath:i,setLang:s},n=(0,c.useMemo)((()=>a),[JSON.stringify(a)]);return(0,o.jsx)(l.Provider,Object.assign({value:n},{children:e.children}))},p=(i.p,(0,a.vJ)((({theme:e})=>a.iv`
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
  `))),h="#fafafa",u="#f5f5f5",x="#eeeeee",m="#e0e0e0",g="#bdbdbd",v="#9e9e9e",b="#757575",j="#616161",f="#424242",_="#37474f",w="#141414",y={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:h,bg2:u,bg3:x,bg4:m,text1:"#212121",text2:f,text3:j,text4:v,gray:v,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:h,black:w},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.85rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},S=(Object.assign(Object.assign({},y),{colors:Object.assign(Object.assign({},y.colors),{bg1:w,bg2:f+"44",bg3:j+"44",bg4:b+"44",text1:m,text2:g,text3:v,text4:j,gray:b,white:m})}),a.ZP.div((({theme:e})=>a.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),k=a.ZP.div((()=>a.iv`
    height: 100%;
    overflow-y: auto;
  `)),P=a.ZP.div((({theme:e})=>a.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),z=e=>(0,o.jsx)(S,{children:(0,o.jsx)(k,{children:(0,o.jsx)(P,Object.assign({id:"doc-content"},{children:e.children}))})});const $=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},A=$();var O=i(279);const I={download:(0,o.jsx)(O.UMo,{}),selector:(0,o.jsx)(O.ZaQ,{}),spinner:(0,o.jsx)(O.H4p,{}),github:(0,o.jsx)(O.ioR,{}),template:(0,o.jsx)(O.jNQ,{}),language:(0,o.jsx)(O.RSg,{})},R=a.ZP.span((({theme:e,size:t})=>a.iv`
    display: inline-flex;
    font-size: ${e.size(t||6)};
    cursor: pointer;
  `)),C=e=>{const{type:t,size:i,style:r,onPress:s}=e,a=(0,c.useMemo)((()=>I[t]),[]);return(0,o.jsx)(R,Object.assign({className:"icon",size:i,style:r,onClick:s},{children:a}))},E=e=>e.check?e.true||e.children:e.false,T=(a.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,a.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),q=(a.F4`
   from {opacity: 0}
   to {opacity: 1}
`,a.F4`
   to {transform: rotateZ(360deg);}
`),J=T,N=q,M=a.ZP.div((()=>a.iv``)),Z=a.ZP.div((({theme:e})=>a.iv`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${e.colors.black+"88"};
    color: ${e.colors.white};
    backdrop-filter: blur(10px);
    z-index: 2;
  `)),W=a.ZP.div((e=>a.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.theme.size(8)};
    animation: ${N} 0.8s infinite linear;
  `)),G=a.ZP.p((e=>a.iv`
    font-size: ${e.theme.fontSize.label};
    margin-bottom: ${e.theme.size(2)};
    animation: ${J} 0.5s ease-out;
  `)),F=a.ZP.p((e=>a.iv`
    font-size: ${e.theme.fontSize.verySmall};
    animation: ${J} 0.5s ease-out;
  `)),U=e=>{const{show:t,type:i,title:r,description:s}=e;return(0,o.jsxs)(M,{children:[(0,o.jsx)(E,Object.assign({check:t&&"icon"===i},{children:(0,o.jsx)(W,{children:(0,o.jsx)(C,{type:"spinner",size:12})})})),(0,o.jsx)(E,Object.assign({check:t&&"fullScreen"===i},{children:(0,o.jsxs)(Z,{children:[(0,o.jsx)(W,{children:(0,o.jsx)(C,{type:"spinner",size:12})}),(0,o.jsx)(G,{children:r}),(0,o.jsx)(F,{children:s})]})}))]})},D=a.ZP.label((({theme:e})=>a.iv`
    display: flex;
    align-items: center;
    padding: 0 ${e.size(2)};
    font-size: ${e.fontSize.label};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text1};
    border-radius: ${e.radius.verySmall};
    box-shadow: ${e.shadow.medium};
  `)),L=a.ZP.select((({theme:e})=>a.iv`
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
  `)),B=(a.ZP.div((()=>a.iv`
    min-width: max-content;
  `)),a.ZP.option((({theme:e})=>a.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
    font-family: sans-serif;
    font-weight: bold;
  `))),V=JSON.parse('{"header_pdf_btn":"Save as PDF","header_address":"Address","header_city":"City","header_phone":"Phone","cv_resume":"A small guy from a small town with big dreams who loves programming any kind of ideas and like to spent hours trying to improve his own code, like to always code his own solution to the problem but keeping everthing as simple as possible, like to learn new ways to coding and build applications and of course like games.","experience_title":"Experience","experience_westpoint_text":"UK software company that provides software development services to third-party companies. some projects:","experience_collums_text":"Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with React, NodeJS, Mongodb and Docker.","experience_vouchio_text":"Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Online platform that uses the powers of GPT chat to evaluate candidates\' CVs and assign them a score, built with NextJS with MatineUI, OpenAI API and AWS services.","experience_vintage_text":"Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services.","experience_quarx_text":"Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services.","experience_website_text":"Company website built with NextJS and Styled Components.","experience_socialpower_text":" Web application with geolocation to map streets points that need attention from the city hall, built with nodeJS and AngularJS.","education_title":"Education","education_udemy_title":"Udemy Certificates","education_ifpi":"Graduation, Analysis and development of systems.","education_school":"School, Computer Technician.","extraworks_title":"Extra Works","extraworks_gamefinder_text":"Web application to discovery new games with more than 50,000 games filtered by platform, category and release year, built with React.","extraworks_personalcv_text":"This document in HTML and available in multiple languages, built with React.","extraworks_consoleui_text":"Application that provide console interface like PS5/Xbox for PCs, built with React and Electron.","extraworks_easyencrypt_text":"Web and Mobile application to encrypt plan text, built with React, React Native and CryptoJS.","extraworks_taskmanage_text":"Todo application with calendar and notes, built with React.","extraworks_translationpwa_text":"Translation website with multiple language support, built with React and GoogleAPIs."}'),H=JSON.parse('{"header_pdf_btn":"Guardar como PDF","header_address":"Dirección","header_city":"Ciudad","header_phone":"Phone","cv_resume":"Un chico de una pequeña ciudad con grandes sueños que ama la programación de cualquier tipo de ideas y le gusta pasar horas tratando de mejorar su propio código, como para codificar siempre su propia solución al problema, pero manteniendo everthing lo más simple posible, como para aprender nuevas formas de codificación y construir aplicaciones y, por supuesto, como los juegos ","experience_title":"Experience","experience_westpoint_text":"Empresa de software del Reino Unido que presta servicios de desarrollo de software a terceras empresas. algunos proyectos:","experience_collums_text":"Plataforma online utilizada para gestionar clínicas de Estética con más de 11 franquicias como cliente, construida con React, NodeJS, Mongodb y Docker.","experiencia_vouchio_text":"Aplicación móvil utilizada para manejar vehículos (abrir/cerrar puertas, arrancar/parar motor, etc), construida con ClojureScript, React Native, API Blockchain, APIs Android/IOS.","experience_talentId_text":"Plataforma online que utiliza los poderes del chat GPT para evaluar los CV de los candidatos y asignarles una puntuación, construida con NextJS con MatineUI, API OpenAI y servicios AWS.","experience_vintage_text":"Dashboard para gestión de inventario y venta de barriles, sincronizado con hojas de cálculo de Google, construido con ViteJS con MantineUI, API de Google y servicios de AWS.","experience_quarx_text":"Extensión del navegador que proporciona guías en tiempo real para ayudar a los usuarios a realizar tareas complejas en muchos sitios web (AWS, nube de Google, etc.), construida con React, API de Chrome y servicios de AWS.","experience_website_text":"Sitio web de la empresa construido con NextJS y Styled Components","experience_socialpower_text":"Aplicación web con geolocalización para mapear puntos de calles que necesitan atención por parte del ayuntamiento, construida con nodeJS y AngularJS.","education_title":"education","education_udemy_title":"Certificados Udemy","education_ifpi":"Graduación, Análisis y desarrollo de sistemas","education_school":"Escuela, Técnico Informático","extraworks_title":"Extra Works","extraworks_gamefinder_text":"Aplicación web para descubrir nuevos juegos con más de 50.000 juegos filtrados por plataforma, categoría y año de lanzamiento, construida con React","extraworks_personalcv_text":"Este documento en HTML y disponible en varios idiomas, construido con React","extraworks_consoleui_text":"Aplicación que proporciona interfaz de consola como PS5/Xbox para PC, construida con React y Electron","extraworks_easyencrypt_text":"Aplicación web y móvil para cifrar texto de planes, construida con React, React Native y CryptoJS","extraworks_taskmanage_text":"Aplicación todo con calendario y notas, construida con React","extraworks_translationpwa_text":"Sitio web de traducción con soporte para múltiples idiomas, construido con React y GoogleAPIs"}'),Q=JSON.parse('{"header_pdf_btn":"Enregistrer en PDF","header_address":"Adresse","header_city":"City","header_phone":"Phone","cv_resume":"Il aime passer des heures à essayer d\'améliorer son propre code, aime toujours coder sa propre solution au problème tout en gardant tout aussi simple que possible, aime apprendre de nouvelles façons de coder et de construire des applications et bien sûr aime les jeux","experience_title":"Expérience","experience_westpoint_text":"Entreprise de logiciels britannique qui fournit des services de développement de logiciels à des entreprises tierces. Quelques projets :","experience_collums_text":"Plateforme en ligne utilisée pour gérer les cliniques d\'esthétique avec plus de 11 franchises comme client, construite avec React, NodeJS, Mongodb et Docker","experience_vouchio_text":"Application mobile utilisée pour manipuler des véhicules (ouvrir/fermer les portes, démarrer/arrêter le moteur, etc), construite avec ClojureScript, React Native, Blockchain API, Android/IOS APIs","experience_talentId_text":"Plateforme en ligne qui utilise les pouvoirs du chat GPT pour évaluer les CV des candidats et leur attribuer une note, construite avec NextJS avec MatineUI, OpenAI API et les services AWS","experience_vintage_text":"Tableau de bord pour la gestion des stocks et la vente de barriques, synchronisé avec les feuilles de calcul Google, construit avec ViteJS avec MantineUI, Google APIs et les services AWS","experience_quarx_text":"Extension de navigateur qui fournit des guides en temps réel pour aider les utilisateurs à effectuer des tâches complexes sur de nombreux sites Web (AWS, Google cloud, etc), construite avec React, Chrome APIs et les services AWS","experience_website_text":"Site web de l\'entreprise construit avec NextJS et Styled Components","experience_socialpower_text":" Application web avec géolocalisation pour cartographier les points des rues qui nécessitent l\'attention de la mairie, construite avec nodeJS et AngularJS. ","education_title":"Education","education_udemy_title":"Certificats Udemy","education_ifpi":"Diplôme, Analyse et développement de systèmes","education_school":"École, Technicien informatique","extraworks_title":"Extra Works","extraworks_gamefinder_text":"Application web de découverte de nouveaux jeux avec plus de 50 000 jeux filtrés par plateforme, catégorie et année de sortie, construite avec React","extraworks_personalcv_text":"Ce document en HTML et disponible en plusieurs langues, construit avec React","extraworks_consoleui_text":"Application qui fournit une interface console comme PS5/Xbox pour les PC, construite avec React et Electron","extraworks_easyencrypt_text":"Application web et mobile pour crypter le texte d\'un plan, construite avec React, React Native et CryptoJS","extraworks_taskmanage_text":"Application Todo avec calendrier et notes, construite avec React","extraworks_translationpwa_text":"Site web de traduction avec prise en charge de plusieurs langues, construit avec React et GoogleAPIs."}'),X=JSON.parse('{"header_pdf_btn":"Salvar como PDF","header_address":"Endereço","header_city":"Cidade","header_phone":"Telefone","cv_resume":"Um pequeno menino de uma cidade pequena com grandes sonhos que adora programar qualquer tipo de ideia e gosta de passar horas tentando melhorar seu próprio código, gosta de sempre codificar sua própria solução para o problema mas mantendo tudo o mais simples possível, gosta de aprender novas formas de desenvolvimento de software e é claro gosta de jogos.","experience_title":"Experiência","experience_westpoint_text":"Empresa de software do Reino Unido que fornece serviços de desenvolvimento de software para empresas terceirizadas. alguns projetos:","experience_collums_text":"Plataforma online utilizada para gerenciamento de clínicas de Estética com mais de 11 franquias como cliente, desenvolvida em React, NodeJS, Mongodb e Docker.","experience_vouchio_text":"Aplicativo móvel usado para lidar com veículos (abrir/fechar portas, ligar/desligar motor, etc), construído com ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Plataforma online que utiliza os poderes do chat GPT para avaliar currículos de candidatos e atribuir-lhes uma pontuação, desenvolvida em NextJS com MatineUI, API OpenAI e AWS services.","experience_vintage_text":"Dashboard para gestão de estoque e vendas de barris, sincronizado com planilhas Google, desenvolvida em ViteJS com MantineUI, Google APIs e AWS services.","experience_quarx_text":"Extensão de navegador que fornece guias em tempo real para ajudar os usuários a realizar tarefas complexas em muitos sites (AWS, Google Cloud, etc.), desenvolvidos em React, Chrome APIs e AWS services.","experience_website_text":"Site da empresa construído com NextJS e Styled Components.","experience_socialpower_text":" Aplicação web com geolocalização para mapear pontos de ruas que necessitam de atenção da prefeitura, desenvolvidos em nodeJS e AngularJS.","education_title":"Educação","education_udemy_title":"Certificados da Udemy","education_ifpi":"Graduação, Análise e Desenvolvimento de Sistemas.","education_school":"Escola, Técnico em Informática ","extraworks_title":"Trabalhos extras","extraworks_gamefinder_text":"Aplicação web para descubrir novos jogos com mais de 50,000 games filtrados por plataforma, categoria e ano de lançamento, desenvolvido em React.","extraworks_personalcv_text":"Este documento em HTML e disponível em vários idiomas, desenvolvida em React.","extraworks_consoleui_text":"Aplicativo que fornece interface de console como PS5/Xbox para PCs, desenvolvida em React e Electron.","extraworks_easyencrypt_text":"Aplicativo Web e Mobile para criptografar texto, desenvolvida em React, React Native e CryptoJS.","extraworks_taskmanage_text":"Aplicativo Todo com calendário e notas, desenvolvida em React.","extraworks_translationpwa_text":"Site de tradução com suporte a vários idiomas, desenvolvida em React e Google APIs."}'),K=$(),Y=V,ee=X,te=H,ie=Q,oe=e=>{const{path:t}=e;return"es"===K?(0,o.jsx)(o.Fragment,{children:te[t]||"NO TEXT"}):"pt"===K?(0,o.jsx)(o.Fragment,{children:ee[t]||"NO TEXT"}):"fr"===K?(0,o.jsx)(o.Fragment,{children:ie[t]||"NO TEXT"}):(0,o.jsx)(o.Fragment,{children:Y[t]||"NO TEXT"})},re=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    display: flex;
    background-color: ${f};
    color: ${e.colors.white};
    padding: ${e.size(2)} ${e.size(6)};
    font-size: ${e.fontSize.verySmall};
  `)),se=a.ZP.button((({theme:e})=>a.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
  `)),ae=(a.ZP.select((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `)),a.ZP.button((({theme:e})=>a.iv`
    background-color: ${e.colors.bg2};
  `))),ne=a.ZP.a((({theme:e})=>a.iv`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${e.size(1)};
    color: ${e.colors.bg2};
    font-size: ${e.fontSize.label};

    &:hover {
      text-decoration: underline;
    }
  `));const ce=()=>{const[e,t]=(0,c.useState)(!1);return(0,o.jsxs)(re,{children:[(0,o.jsxs)(se,{children:[(0,o.jsxs)(D,{children:[(0,o.jsx)(C,{type:"language"}),(0,o.jsxs)(L,Object.assign({defaultValue:A,onChange:e=>(e=>{const[t,i]=location.href.split("?"),o=new URLSearchParams(i);o.set("lang",e),location.href=`${t}?${o.toString()}`})(e.target.value)},{children:[(0,o.jsx)(B,{label:"English",value:"en",selected:!0}),(0,o.jsx)(B,{label:"Português",value:"pt"}),(0,o.jsx)(B,{label:"Spanish (auto)",value:"es"}),(0,o.jsx)(B,{label:"French (auto)",value:"fr"})]}))]}),(0,o.jsxs)(D,{children:[(0,o.jsx)(C,{type:"template"}),(0,o.jsx)(L,{children:(0,o.jsx)(B,{label:"Template 1",value:"0"})})]}),(0,o.jsxs)(ae,Object.assign({onClick:()=>{return e=void 0,i=void 0,r=function*(){var e,i,o,r;t(!0),yield(e=void 0,i=void 0,o=void 0,r=function*(){const e=document.getElementById("doc-content"),t=document.createElement("iframe");document.body.appendChild(t);const i=t.contentDocument;i.head.innerHTML=document.head.innerHTML,i.body.innerHTML=e.innerHTML,t.style.position="absolute",t.style.left="100%",t.style.top="0",yield new Promise((e=>setTimeout(e,1e3))),t.contentWindow.print()},new(o||(o=Promise))((function(t,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function n(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(a,n)}c((r=r.apply(e,i||[])).next())}))),t(!1)},new((o=void 0)||(o=Promise))((function(t,s){function a(e){try{c(r.next(e))}catch(e){s(e)}}function n(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(a,n)}c((r=r.apply(e,i||[])).next())}));var e,i,o,r}},{children:[(0,o.jsx)(C,{type:"download"}),(0,o.jsx)(oe,{path:"header_pdf_btn"})]}))]}),(0,o.jsxs)(ne,Object.assign({href:"https://github.com/KlessitonRodrigues/personal-cv",target:"_blank"},{children:[(0,o.jsx)(C,{size:7,type:"github"}),"GitHub"]})),(0,o.jsx)(U,{type:"fullScreen",show:e})]})},le=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),de=e=>(0,o.jsx)(le,{children:e.children}),pe=a.ZP.ul((({theme:e})=>a.iv`
    list-style: none;
    padding-left: ${e.size(5)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(2)};
    }
  `)),he=a.ZP.li((({theme:e})=>a.iv`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 2px;
      border: 1px solid ${e.colors.text1};
      background-color: ${e.colors.text1};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 7px;
    }

    b {
      margin-right: ${e.size(2)};
    }
  `)),ue=a.ZP.div((()=>a.iv``)),xe=a.ZP.div((({theme:e})=>a.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${_};
    color: ${x};

    h1 {
      margin-bottom: ${e.size(2)};
      color: ${u};
    }

    h3 {
      margin-bottom: ${e.size(4)};
    }
  `)),me=a.ZP.div((({theme:e})=>a.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${h};
    color: ${f};
  `)),ge=a.ZP.div((({theme:e})=>a.iv`
    margin: ${e.size(4)} 0;
  `)),ve=a.ZP.h4((({theme:e})=>a.iv`
    margin-bottom: ${e.size(2)};
  `)),be=a.ZP.span((({theme:e})=>a.iv`
    b {
      margin-right: ${e.size(2)};
    }
  `)),je=a.ZP.div((({theme:e,gap:t,mb:i})=>a.iv`
    display: flex;
    gap: ${e.size(t)};
    margin-bottom: ${e.size(i||2)};
  `)),fe=a.ZP.div((({theme:e,gap:t})=>a.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(t)};
  `)),_e=a.ZP.div((({theme:e})=>a.iv`
    width: ${e.size(40)};
    font-size: ${e.fontSize.verySmall};
    margin-top: ${e.size(.75)};
  `)),we=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ve,{children:(0,o.jsx)(oe,{path:"education_title"})}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2020/01 - 2023/12"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ve,{children:(0,o.jsx)(oe,{path:"education_udemy_title"})}),(0,o.jsxs)(pe,{children:[(0,o.jsx)(he,{children:"Clojure Introduction"}),(0,o.jsx)(he,{children:"Java with SQL Databases"}),(0,o.jsx)(he,{children:"Saverless Applications on AWS"}),(0,o.jsx)(he,{children:"Typescript with NodeJS, SQL and noSQL Databases"}),(0,o.jsx)(he,{children:"ReactJS with Redux"}),(0,o.jsx)(he,{children:"English Step-by-Step"})]})]})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2017/01 - 2019/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ve,{children:"IFPI - Instituto Federal do Piauí"}),(0,o.jsx)("p",{children:(0,o.jsx)(oe,{path:"education_ifpi"})})]})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2014/02 - 2016/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ve,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"}),(0,o.jsx)(oe,{path:"education_school"})]})]})]}),ye=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ve,{children:(0,o.jsx)(oe,{path:"experience_title"})}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2021/12 - 2023/12"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ve,{children:"WestPoint Software Solutions"}),(0,o.jsx)("p",{children:(0,o.jsx)(oe,{path:"experience_westpoint_text"})}),(0,o.jsxs)(pe,{children:[(0,o.jsxs)(he,{children:[(0,o.jsx)("b",{children:"Collums"}),(0,o.jsx)(oe,{path:"experience_collums_text"})]}),(0,o.jsxs)(he,{children:[(0,o.jsx)("b",{children:"Vouch IO"}),(0,o.jsx)(oe,{path:"experience_vouchio_text"})]}),(0,o.jsxs)(he,{children:[(0,o.jsx)("b",{children:"TalentId"}),(0,o.jsx)(oe,{path:"experience_talentId_text"})]}),(0,o.jsxs)(he,{children:[(0,o.jsx)("b",{children:"Vintage Acquisitions"}),(0,o.jsx)(oe,{path:"experience_vintage_text"})]}),(0,o.jsxs)(he,{children:[(0,o.jsx)("b",{children:"Quarx"}),(0,o.jsx)(oe,{path:"experience_quarx_text"})]}),(0,o.jsxs)(he,{children:[(0,o.jsx)("b",{children:"Westpoint Website"}),(0,o.jsx)(oe,{path:"experience_website_text"})]})]})]})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2018/08 - 2019/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ve,{children:"SocialPower "}),(0,o.jsx)("p",{children:(0,o.jsx)(oe,{path:"experience_socialpower_text"})})]})]})]}),Se=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ve,{children:(0,o.jsx)(oe,{path:"extraworks_title"})}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2024"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Game Finder"}),(0,o.jsx)(oe,{path:"extraworks_gamefinder_text"})]})})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2024"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Personal CV"}),(0,o.jsx)(oe,{path:"extraworks_personalcv_text"})]})})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2023"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Console UI for desktops"}),(0,o.jsx)(oe,{path:"extraworks_consoleui_text"})]})})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2023"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Easy Encrypt"}),(0,o.jsx)(oe,{path:"extraworks_easyencrypt_text"})]})})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2022"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Task Manager"}),(0,o.jsx)(oe,{path:"extraworks_taskmanage_text"})]})})]}),(0,o.jsxs)(je,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2021"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Translation PWA"}),(0,o.jsx)(oe,{path:"extraworks_translationpwa_text"})]})})]})]}),ke=()=>(0,o.jsxs)(xe,{children:[(0,o.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,o.jsx)("h3",{children:"Fullstack Javascript Developer"}),(0,o.jsxs)(je,Object.assign({gap:8,mb:1},{children:[(0,o.jsxs)(fe,Object.assign({gap:2},{children:[(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(oe,{path:"header_address"})}),"Rua Pernambuco Bairro Geraldão"]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(oe,{path:"header_city"})}),"Bertolínia, Piauí, Brasil"]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(oe,{path:"header_phone"})}),"+55 89994009646"]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Email"}),(0,o.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,o.jsxs)(fe,Object.assign({gap:2},{children:[(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"GitHub"}),(0,o.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,o.jsxs)(be,{children:[(0,o.jsx)("b",{children:"Linkedin"}),(0,o.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),Pe=()=>(0,o.jsxs)(ue,{children:[(0,o.jsx)(ke,{}),(0,o.jsxs)(me,{children:[(0,o.jsx)(ge,{children:(0,o.jsx)(oe,{path:"cv_resume"})}),(0,o.jsx)(ye,{}),(0,o.jsx)(we,{}),(0,o.jsx)(Se,{})]})]}),ze=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ce,{}),(0,o.jsx)(de,{children:(0,o.jsx)(z,{children:(0,o.jsx)(Pe,{})})})]}),$e=()=>{const e=(0,c.useContext)(l);return(0,o.jsxs)(a.f6,Object.assign({theme:y},{children:[(0,o.jsx)(p,{}),(0,o.jsx)(n.Z5,Object.assign({location:e},{children:(0,o.jsx)(n.AW,{path:"/*",element:(0,o.jsx)(ze,{})})}))]}))},Ae=(0,c.createContext)(null),Oe=e=>{const[t,i]=(0,c.useState)(!0),[r,s]=(0,c.useState)(""),a={firstRun:t,bgImage:r,setFirstRun:i,setBgImage:s},n=(0,c.useMemo)((()=>a),[JSON.stringify(a)]);return(0,o.jsx)(Ae.Provider,Object.assign({value:n},{children:e.children}))};(0,r.s)(document.getElementById("root")).render((0,o.jsx)((()=>(0,o.jsx)(Oe,{children:(0,o.jsx)(d,{children:(0,o.jsx)(a.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,o.jsx)(s.VK,{children:(0,o.jsx)($e,{})})}))})})),{}))}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,s),i.exports}s.m=o,e=[],s.O=(t,i,o,r)=>{if(!i){var a=1/0;for(d=0;d<e.length;d++){for(var[i,o,r]=e[d],n=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((e=>s.O[e](i[c])))?i.splice(c--,1):(n=!1,r<a&&(a=r));if(n){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[i,o,r]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var r=Object.create(null);s.r(r);var a={};t=t||[null,i({}),i([]),i(i)];for(var n=2&o&&e;"object"==typeof n&&!~t.indexOf(n);n=i(n))Object.getOwnPropertyNames(n).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,s.d(r,a),r},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,i)=>{var o,r,[a,n,c]=i,l=0;if(a.some((t=>0!==e[t]))){for(o in n)s.o(n,o)&&(s.m[o]=n[o]);if(c)var d=c(s)}for(t&&t(i);l<a.length;l++)r=a[l],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(d)},i=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),s.nc=void 0;var a=s.O(void 0,[977],(()=>s(165)));a=s.O(a)})();