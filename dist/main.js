(()=>{"use strict";var e,t,i,o={949:(e,t,i)=>{var o=i(893),s=i(745),n=i(655),r=i(133),a=i(250),c=i(294);const l=(0,c.createContext)(null),d=e=>{const[t,i]=(0,c.useState)("/home"),[s,n]=(0,c.useState)(""),r={pathname:t,hash:"",search:"",lang:s,setPath:i,setLang:n},a=(0,c.useMemo)((()=>r),[JSON.stringify(r)]);return(0,o.jsx)(l.Provider,Object.assign({value:a},{children:e.children}))},h=(i.p,(0,r.vJ)((({theme:e})=>r.iv`
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
      font-family: 'Inter', sans-serif;
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
      min-height: ${e.size(9)};
      display: flex;
      align-items: center;
      gap: ${e.size(1)};
      padding: 0 ${e.size(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${e.radius.medium};
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
  `))),x="#fafafa",u="#f5f5f5",p="#eeeeee",m="#e0e0e0",g="#bdbdbd",j="#9e9e9e",_="#757575",b="#616161",v="#424242",f="#37474f",y="#141414",w={size:e=>`${(.2*e).toFixed(1)}rem`,colors:{main:"#1D7AFC",mainBg:"#0C66E4",bg1:x,bg2:u,bg3:p,bg4:m,text1:"#212121",text2:v,text3:b,text4:j,gray:j,yellow:"#B38600",red:"#AE2A19",blue:"#388BFF",green:"#558b2f",white:x,black:y},fontSize:{body:"1rem",small:"0.95rem",verySmall:"0.82rem",label:"0.9rem",h1:"1.6rem",h2:"1.4rem",h3:"1.2rem",h4:"1.1rem",h5:"1.075rem",h6:"1.05rem"},shadow:{low:"1px 1px 2px 0 #0004",medium:"1px 1px 2px 0 #0009",high:"1px 2px 2px 0 #0007",mediumGray:"1px 1px 4px 1px #777a",lowRight:"3px 0 4px 0px #0002",mediumLeft:"-4px 0 4px 0px #0006"},radius:{verySmall:"0.2rem",small:"0.3rem",medium:"0.4rem",large:"0.5rem",veryLarge:"0.6rem",full:"50%"}},S=(Object.assign(Object.assign({},w),{colors:Object.assign(Object.assign({},w.colors),{bg1:y,bg2:v+"44",bg3:b+"44",bg4:_+"44",text1:m,text2:g,text3:j,text4:b,gray:_,white:m})}),r.ZP.div((({theme:e})=>r.iv`
    height: 100%;
    width: fit-content;
    margin: auto;
    padding-bottom: ${e.size(15)};
  `))),k=r.ZP.div((()=>r.iv`
    height: 100%;
    overflow-y: auto;
  `)),$=r.ZP.div((({theme:e})=>r.iv`
    margin: 0 ${e.size(2)};
    max-width: ${e.size(300)};
    border-radius: ${e.radius.small};
    background-color: ${e.colors.white};
  `)),P=e=>(0,o.jsx)(S,{children:(0,o.jsx)(k,{children:(0,o.jsx)($,Object.assign({id:"doc-content"},{children:e.children}))})});const z=()=>{const e=location.href.split("?");return new URLSearchParams(e[1]).get("lang")||""},A=z();var O=i(279);const I={download:(0,o.jsx)(O.UMo,{}),selector:(0,o.jsx)(O.ZaQ,{}),spinner:(0,o.jsx)(O.H4p,{}),github:(0,o.jsx)(O.ioR,{}),template:(0,o.jsx)(O.jNQ,{}),language:(0,o.jsx)(O.RSg,{})},R=r.ZP.span((({theme:e,size:t})=>r.iv`
    display: inline-flex;
    font-size: ${e.size(t||6)};
    cursor: pointer;
  `)),C=e=>{const{type:t,size:i,style:s,onPress:n}=e,r=(0,c.useMemo)((()=>I[t]),[]);return(0,o.jsx)(R,Object.assign({className:"icon",size:i,style:s,onClick:n},{children:r}))},E=e=>e.check?e.true||e.children:e.false,J=(r.F4`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`,r.F4`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`),Z=(r.F4`
   from {opacity: 0}
   to {opacity: 1}
`,r.F4`
   to {transform: rotateZ(360deg);}
`),F=J,N=Z,T=r.ZP.div((()=>r.iv``)),W=r.ZP.div((({theme:e})=>r.iv`
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
  `)),M=r.ZP.div((e=>r.iv`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${e.theme.size(8)};
    animation: ${N} 0.8s infinite linear;
  `)),L=r.ZP.p((e=>r.iv`
    font-size: ${e.theme.fontSize.label};
    margin-bottom: ${e.theme.size(2)};
    animation: ${F} 0.5s ease-out;
  `)),G=r.ZP.p((e=>r.iv`
    font-size: ${e.theme.fontSize.verySmall};
    animation: ${F} 0.5s ease-out;
  `)),B=e=>{const{show:t,type:i,title:s,description:n}=e;return(0,o.jsxs)(T,{children:[(0,o.jsx)(E,Object.assign({check:t&&"icon"===i},{children:(0,o.jsx)(M,{children:(0,o.jsx)(C,{type:"spinner",size:12})})})),(0,o.jsx)(E,Object.assign({check:t&&"fullScreen"===i},{children:(0,o.jsxs)(W,{children:[(0,o.jsx)(M,{children:(0,o.jsx)(C,{type:"spinner",size:12})}),(0,o.jsx)(L,{children:s}),(0,o.jsx)(G,{children:n})]})}))]})},D=r.ZP.label((({theme:e})=>r.iv`
    display: flex;
    align-items: center;
    padding: 0 ${e.size(2)};
    font-size: ${e.fontSize.label};
    background-color: ${e.colors.bg3};
    color: ${e.colors.text1};
    border-radius: ${e.radius.medium};
    box-shadow: ${e.shadow.medium};
  `)),U=r.ZP.select((({theme:e})=>r.iv`
    color: ${e.colors.text1};
    font-size: ${e.fontSize.small};
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
  `)),q=(r.ZP.div((()=>r.iv`
    min-width: max-content;
  `)),r.ZP.option((({theme:e})=>r.iv`
    background-color: ${e.colors.bg1};
    color: ${e.colors.text1};
    font-family: sans-serif;
    font-weight: bold;
  `))),V=JSON.parse('{"header_pdf_btn":"Save as PDF","header_address":"Address","header_city":"City","header_phone":"Phone","cv_resume":"Fullstack developer with experience in Web and Mobile applications using ReactJS ecosystem and also developing APIs through frameworks such as NestJS or Spring Boot, good knowledge of AWS and cloud systems. I like to be creative and always try to develop my own solution for the problem and also to learn different kind of technologies and more productive ways to improve code quality and deliver applications faster.","experience_title":"Experience","experience_westpoint_text":"UK software company that provides software development services to third-party companies. some projects:","experience_collums_text":"Online platform used to manage Aesthetic clinics with more than 11 franchises as client, built with React, NodeJS, Mongodb and Docker.","experience_vouchio_text":"Mobile Application used to handles vehicles (open/close doors, start/stop engine, etc), built with ClojureScript, React Native, Blockchain API, Android/IOS APIs.","experience_talentId_text":"Online platform that uses the powers of GPT chat to evaluate candidates\' CVs and assign them a score, built with NextJS with MatineUI, OpenAI API and AWS services.","experience_vintage_text":"Dashboard for inventory management and barrel sales, synchronized with Google spreadsheets, built with ViteJS with MantineUI, Google APIs and AWS services.","experience_quarx_text":"Browser extension that provides real-time guides to help users perform complex tasks across many Websites (AWS, Google cloud, etc), built with React, Chrome APIs and AWS services.","experience_website_text":"Company website built with NextJS and Styled Components.","experience_centralacademy_text":"Web application with calendar to schedule workout time, built with React and AWS services.","experience_cef_text":"Online platform to manage students and it\'s class activities, with professor dashhboard, blog section and course payments, built with NextJS and Django.","experience_socialpower_text":"Web application with geolocation to map streets points that need attention from the city hall, built with nodeJS and AngularJS.","education_title":"Education","education_udemy_title":"Udemy Certificates","education_udemy_course_1":"ReactJS Applications with Redux","education_udemy_course_2":"Design of MVP with Figma","education_udemy_course_3":"NestJS Fundamentals","education_udemy_course_4":"Serverless Applications on AWS","education_udemy_course_5":"Agile Software Development","education_udemy_course_6":"Typescript with NodeJS, SQL and NoSQL databases","education_udemy_course_7":"Introduction to Clojure language","education_udemy_course_8":"Java and Spring Boot with SQL databases","education_udemy_course_9":"English Step-by-Step","education_ifpi":"Graduation, Analysis and development of systems.","education_school":"School, Computer Technician.","language_title":"Languages","language_pt_title":"Portuguese","language_pt_text":"Fluent Language.","language_en_title":"English","language_en_text":"Good writing and reading, advanced speaking.","language_jp_text":"Basic writing and reading.","extraworks_title":"Extra Works","extraworks_gamefinder_text":"Web application to discovery new games with more than 50,000 games filtered by platform, category and release year, built with React.","extraworks_personalcv_text":"This document that was made in React and available in multiple languages, built with React.","extraworks_consoleui_text":"Application that provide console interface like PS5/Xbox for PCs, built with React and Electron.","extraworks_easyencrypt_text":"Web and Mobile application to encrypt plan text, built with React, React Native and CryptoJS.","extraworks_taskmanage_text":"Todo application with calendar and notes, built with React.","extraworks_translationpwa_text":"Translation website with multiple language support, built with React and GoogleAPIs."}'),Q=JSON.parse('{"header_pdf_btn":"Salvar como PDF","header_address":"Endereço","header_city":"Cidade","header_phone":"Telefone","cv_resume":"Desenvolvedor Fullstack com experiência em aplicações Web e Mobile utilizando o ecossistema ReactJS e no desenvolvendo APIs através de frameworks como NestJS ou Spring Boot, bom conhecimento em AWS e sistemas em nuvem. Gosto de ser criativo e sempre tento desenvolver minha própria solução para o problema, também gosto de aprender diferentes tipos de tecnologias e formas mais produtivas de melhorar a qualidade do código e entregar aplicações mais rapidamente.","experience_title":"Experiência","experience_westpoint_text":"Empresa de software do Reino Unido que fornece serviços de desenvolvimento de software para empresas de terceiros. Alguns projetos:","experience_collums_text":"Plataforma online usada para gerenciar clínicas estéticas com mais de 11 franquias como cliente, construída com React, NodeJS, Mongodb e Docker.","experience_vouchio_text":"Aplicativo móvel usado para controlar veículos (abrir/fechar portas, ligar/desligar o motor, etc), construído com ClojureScript, React Native, Blockchain API, APIs Android/IOS.","experience_talentId_text":"Plataforma online que utiliza os poderes do chat GPT para avaliar CVs de candidatos e atribuir-lhes uma pontuação, construída com NextJS com MatineUI, OpenAI API e serviços AWS.","experience_vintage_text":"Dashboard para gestão de inventário e vendas de barril, sincronizado com planilhas do Google, construído com ViteJS com MantineUI, APIs do Google e serviços AWS.","experience_quarx_text":"Extensão do navegador que fornece guias em tempo real para ajudar os usuários a realizar tarefas complexas em muitos sites (AWS, Google cloud, etc), construída com React, APIs do Chrome e serviços AWS.","experience_website_text":"Site da empresa construído com NextJS e Styled Components.","experience_centralacademy_text":"Aplicativo web com calendário para agendar tempo de treino, construído com React e serviços AWS.","experience_cef_text":"Plataforma online para gerenciar alunos e suas atividades de classe, com painel de professor, seção de blog e pagamento de cursos, construída com NextJS e Django.","experience_socialpower_text":"Aplicativo web com geolocalização para mapear pontos de ruas que precisam de atenção da prefeitura, construído com nodeJS e AngularJS.","education_title":"Educação","education_udemy_title":"Certificados Udemy","education_udemy_course_1":"Aplicações ReactJS com Redux","education_udemy_course_2":"Design de MVP com Figma","education_udemy_course_3":"Fundamentos do NestJS","education_udemy_course_4":"Aplicações sem servidor na AWS","education_udemy_course_5":"Desenvolvimento Ágil de Software","education_udemy_course_6":"Typescript com NodeJS, bancos de dados SQL e NoSQL","education_udemy_course_7":"Introdução à linguagem Clojure","education_udemy_course_8":"Java e Spring Boot com bancos de dados SQL","education_udemy_course_9":"Inglês Passo a Passo","education_ifpi":"Graduação, Análise e desenvolvimento de sistemas.","education_school":"Escola, Técnico em Informática.","language_title":"Idiomas","language_pt_title":"Português","language_pt_text":"Língua fluente.","language_en_title":"Inglês","language_en_text":"Boa escrita e leitura, fala avançada.","language_jp_text":"Escrita e leitura básicas.","extraworks_title":"Trabalhos Extras","extraworks_gamefinder_text":"Aplicativo web para descobrir novos jogos com mais de 50.000 jogos filtrados por plataforma, categoria e ano de lançamento, construído com React.","extraworks_personalcv_text":"Este documento foi feito em React e está disponível em vários idiomas, construído com React.","extraworks_consoleui_text":"Aplicativo que fornece interface de console como PS5/Xbox para PCs, construído com React e Electron.","extraworks_easyencrypt_text":"Aplicativo web e móvel para criptografar texto plano, construído com React, React Native e CryptoJS.","extraworks_taskmanage_text":"Aplicativo de tarefas com calendário e notas, construído com React.","extraworks_translationpwa_text":"Site de tradução com suporte a vários idiomas, construído com React e GoogleAPIs."}'),H=z(),K=V,X=Q,Y=e=>{const{path:t}=e;return"pt"===H?(0,o.jsx)(o.Fragment,{children:X[t]||"NO TEXT"}):(0,o.jsx)(o.Fragment,{children:K[t]||"NO TEXT"})},ee=r.ZP.div((({theme:e})=>r.iv`
    width: 100%;
    display: flex;
    background-color: ${v};
    color: ${e.colors.white};
    padding: ${e.size(2)} ${e.size(6)};
    font-size: ${e.fontSize.verySmall};
  `)),te=r.ZP.button((({theme:e})=>r.iv`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${e.size(4)};
  `)),ie=(r.ZP.select((({theme:e})=>r.iv`
    background-color: ${e.colors.bg2};
  `)),r.ZP.button((({theme:e})=>r.iv`
    background-color: ${e.colors.bg2};
  `))),oe=r.ZP.a((({theme:e})=>r.iv`
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: ${e.size(1)};
    color: ${e.colors.bg2};
    font-size: ${e.fontSize.label};

    &:hover {
      text-decoration: underline;
    }
  `));const se=()=>{const[e,t]=(0,c.useState)(!1);return(0,o.jsxs)(ee,{children:[(0,o.jsxs)(te,{children:[(0,o.jsxs)(D,{children:[(0,o.jsx)(C,{type:"language"}),(0,o.jsxs)(U,Object.assign({defaultValue:A,onChange:e=>(e=>{const[t,i]=location.href.split("?"),o=new URLSearchParams(i);o.set("lang",e),location.href=`${t}?${o.toString()}`})(e.target.value)},{children:[(0,o.jsx)(q,{label:"English",value:"en",selected:!0}),(0,o.jsx)(q,{label:"Português",value:"pt"})]}))]}),(0,o.jsxs)(D,{children:[(0,o.jsx)(C,{type:"template"}),(0,o.jsx)(U,{children:(0,o.jsx)(q,{label:"Template 1",value:"0"})})]}),(0,o.jsxs)(ie,Object.assign({onClick:()=>{return e=void 0,i=void 0,s=function*(){var e,i,o,s;t(!0),yield(e=void 0,i=void 0,o=void 0,s=function*(){const e=document.getElementById("doc-content"),t=document.createElement("iframe");document.body.appendChild(t);const i=t.contentDocument;i.head.innerHTML=document.head.innerHTML,i.body.innerHTML=e.innerHTML,t.style.position="absolute",t.style.left="100%",t.style.top="0",yield new Promise((e=>setTimeout(e,1e3))),t.contentWindow.print()},new(o||(o=Promise))((function(t,n){function r(e){try{c(s.next(e))}catch(e){n(e)}}function a(e){try{c(s.throw(e))}catch(e){n(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(r,a)}c((s=s.apply(e,i||[])).next())}))),t(!1)},new((o=void 0)||(o=Promise))((function(t,n){function r(e){try{c(s.next(e))}catch(e){n(e)}}function a(e){try{c(s.throw(e))}catch(e){n(e)}}function c(e){var i;e.done?t(e.value):(i=e.value,i instanceof o?i:new o((function(e){e(i)}))).then(r,a)}c((s=s.apply(e,i||[])).next())}));var e,i,o,s}},{children:[(0,o.jsx)(C,{type:"download"}),(0,o.jsx)(Y,{path:"header_pdf_btn"})]}))]}),(0,o.jsxs)(oe,Object.assign({href:"https://github.com/KlessitonRodrigues/personal-cv",target:"_blank"},{children:[(0,o.jsx)(C,{size:7,type:"github"}),"GitHub"]})),(0,o.jsx)(B,{type:"fullScreen",show:e})]})},ne=r.ZP.div((({theme:e})=>r.iv`
    width: 100%;
    height: 100%;
    padding: ${e.size(4)};
    background-color: ${e.colors.bg4};
  `)),re=e=>(0,o.jsx)(ne,{children:e.children}),ae=r.ZP.ul((({theme:e})=>r.iv`
    list-style: none;
    padding-left: ${e.size(5)};
    margin: ${e.size(2)} 0;

    li {
      margin-bottom: ${e.size(2)};
    }
  `)),ce=r.ZP.li((({theme:e})=>r.iv`
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
  `)),le=r.ZP.div((()=>r.iv``)),de=r.ZP.div((({theme:e})=>r.iv`
    width: 100%;
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${f};
    color: ${p};

    h1 {
      margin-bottom: ${e.size(2)};
      color: ${u};
    }

    h3 {
      margin-bottom: ${e.size(4)};
    }
  `)),he=r.ZP.div((({theme:e})=>r.iv`
    padding: ${e.size(6)} ${e.size(12)};
    background-color: ${x};
    color: ${v};
  `)),xe=r.ZP.div((({theme:e})=>r.iv`
    margin: ${e.size(4)} 0;
  `)),ue=r.ZP.h4((({theme:e})=>r.iv`
    margin-bottom: ${e.size(2)};
  `)),pe=r.ZP.div((({theme:e})=>r.iv`
    width: ${e.size(45)};
    margin-top: ${e.size(.75)};
    font-size: ${e.fontSize.small};
  `)),me=r.ZP.span((({theme:e})=>r.iv`
    b {
      margin-right: ${e.size(2)};
    }
  `)),ge=r.ZP.div((({theme:e,gap:t,mb:i})=>r.iv`
    display: flex;
    gap: ${e.size(t)};
    margin-bottom: ${e.size(i||2)};
  `)),je=r.ZP.div((({theme:e,gap:t})=>r.iv`
    display: flex;
    flex-direction: column;
    gap: ${e.size(t)};
  `)),_e=r.ZP.div((({theme:e})=>r.iv`
    width: ${e.size(45)};
    font-size: ${e.fontSize.verySmall};
    margin-top: ${e.size(.75)};
  `)),be=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ue,{children:(0,o.jsx)(Y,{path:"education_title"})}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2020/01 - 2023/12"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:(0,o.jsx)(Y,{path:"education_udemy_title"})}),(0,o.jsxs)(ae,{children:[(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_1"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_2"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_3"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_4"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_5"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_6"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_7"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_8"})}),(0,o.jsx)(ce,{children:(0,o.jsx)(Y,{path:"education_udemy_course_9"})})]})]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2017/01 - 2019/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:"IFPI - Instituto Federal do Piauí"}),(0,o.jsx)("p",{children:(0,o.jsx)(Y,{path:"education_ifpi"})})]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2014/02 - 2016/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:"Centro Estadual de Educação Profissional Professora Maria Amália"}),(0,o.jsx)(Y,{path:"education_school"})]})]})]}),ve=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ue,{children:(0,o.jsx)(Y,{path:"experience_title"})}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2024/01 - 2024/02"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:"Centro Educacional De Floriano"}),(0,o.jsx)("p",{children:(0,o.jsx)(Y,{path:"experience_cef_text"})})]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2021/12 - 2023/12"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:"WestPoint Software Solutions"}),(0,o.jsx)("p",{children:(0,o.jsx)(Y,{path:"experience_westpoint_text"})}),(0,o.jsxs)(ae,{children:[(0,o.jsxs)(ce,{children:[(0,o.jsx)("b",{children:"Collums"}),(0,o.jsx)(Y,{path:"experience_collums_text"})]}),(0,o.jsxs)(ce,{children:[(0,o.jsx)("b",{children:"Vouch IO"}),(0,o.jsx)(Y,{path:"experience_vouchio_text"})]}),(0,o.jsxs)(ce,{children:[(0,o.jsx)("b",{children:"TalentId"}),(0,o.jsx)(Y,{path:"experience_talentId_text"})]}),(0,o.jsxs)(ce,{children:[(0,o.jsx)("b",{children:"Vintage Acquisitions"}),(0,o.jsx)(Y,{path:"experience_vintage_text"})]}),(0,o.jsxs)(ce,{children:[(0,o.jsx)("b",{children:"Quarx"}),(0,o.jsx)(Y,{path:"experience_quarx_text"})]}),(0,o.jsxs)(ce,{children:[(0,o.jsx)("b",{children:"WestPoint Website"}),(0,o.jsx)(Y,{path:"experience_website_text"})]})]})]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2021/03 - 2021/09"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:"Central Fitness"}),(0,o.jsx)("p",{children:(0,o.jsx)(Y,{path:"experience_centralacademy_text"})})]})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2018/11 - 2019/11"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)(ue,{children:"SocialPower"}),(0,o.jsx)("p",{children:(0,o.jsx)(Y,{path:"experience_socialpower_text"})})]})]})]}),fe=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ue,{children:(0,o.jsx)(Y,{path:"extraworks_title"})}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2024"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Game Finder"}),(0,o.jsx)(Y,{path:"extraworks_gamefinder_text"})]})})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2024"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Personal CV"}),(0,o.jsx)(Y,{path:"extraworks_personalcv_text"})]})})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2023"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Console UI for desktops"}),(0,o.jsx)(Y,{path:"extraworks_consoleui_text"})]})})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2023"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Easy Encrypt"}),(0,o.jsx)(Y,{path:"extraworks_easyencrypt_text"})]})})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2022"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Task Manager"}),(0,o.jsx)(Y,{path:"extraworks_taskmanage_text"})]})})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(_e,{children:"2021"})}),(0,o.jsx)("div",{children:(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Translation PWA"}),(0,o.jsx)(Y,{path:"extraworks_translationpwa_text"})]})})]})]}),ye=()=>(0,o.jsxs)(de,{children:[(0,o.jsx)("h1",{children:"KLÉSSITON RODRIGUES DA SILVA"}),(0,o.jsx)("h3",{children:"Fullstack JavaScript Developer"}),(0,o.jsxs)(ge,Object.assign({gap:8,mb:1},{children:[(0,o.jsxs)(je,Object.assign({gap:2},{children:[(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(Y,{path:"header_address"})}),"Rua Pernambuco Bairro Geraldão"]}),(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(Y,{path:"header_city"})}),"Bertolínia, Piauí, Brasil"]}),(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(Y,{path:"header_phone"})}),"+55 89994009646"]}),(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Email"}),(0,o.jsx)("a",Object.assign({href:"mailto:klessitonrds@gmail.com",target:"blank"},{children:"klessitonrds@gmail.com"}))]})]})),(0,o.jsxs)(je,Object.assign({gap:2},{children:[(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"GitHub"}),(0,o.jsx)("a",Object.assign({href:"http://github.com/KlessitonRodrigues",target:"blank"},{children:"KlessitonRodrigues"}))]}),(0,o.jsxs)(me,{children:[(0,o.jsx)("b",{children:"Linkedin"}),(0,o.jsx)("a",Object.assign({href:"http://linkedin.com/in/klessitonrds",target:"blank"},{children:"Klessitonrds"}))]})]}))]}))]}),we=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ue,{children:(0,o.jsx)(Y,{path:"language_title"})}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(pe,{children:(0,o.jsx)(Y,{path:"language_pt_title"})})}),(0,o.jsx)("div",{children:(0,o.jsx)(Y,{path:"language_pt_text"})})]}),(0,o.jsxs)(ge,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(pe,{children:(0,o.jsx)(Y,{path:"language_en_title"})})}),(0,o.jsx)("div",{children:(0,o.jsx)(Y,{path:"language_en_text"})})]})]}),Se=()=>(0,o.jsxs)(le,{children:[(0,o.jsx)(ye,{}),(0,o.jsxs)(he,{children:[(0,o.jsx)(xe,{children:(0,o.jsx)(Y,{path:"cv_resume"})}),(0,o.jsx)(ve,{}),(0,o.jsx)(be,{}),(0,o.jsx)(fe,{}),(0,o.jsx)(we,{})]})]}),ke=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(se,{}),(0,o.jsx)(re,{children:(0,o.jsx)(P,{children:(0,o.jsx)(Se,{})})})]}),$e=()=>{const e=(0,c.useContext)(l);return(0,o.jsxs)(r.f6,Object.assign({theme:w},{children:[(0,o.jsx)(h,{}),(0,o.jsx)(a.Z5,Object.assign({location:e},{children:(0,o.jsx)(a.AW,{path:"/*",element:(0,o.jsx)(ke,{})})}))]}))},Pe=(0,c.createContext)(null),ze=e=>{const[t,i]=(0,c.useState)(!0),[s,n]=(0,c.useState)(""),r={firstRun:t,bgImage:s,setFirstRun:i,setBgImage:n},a=(0,c.useMemo)((()=>r),[JSON.stringify(r)]);return(0,o.jsx)(Pe.Provider,Object.assign({value:a},{children:e.children}))};(0,s.s)(document.getElementById("root")).render((0,o.jsx)((()=>(0,o.jsx)(ze,{children:(0,o.jsx)(d,{children:(0,o.jsx)(r.LC,Object.assign({disableCSSOMInjection:!0},{children:(0,o.jsx)(n.VK,{children:(0,o.jsx)($e,{})})}))})})),{}))}},s={};function n(e){var t=s[e];if(void 0!==t)return t.exports;var i=s[e]={exports:{}};return o[e](i,i.exports,n),i.exports}n.m=o,e=[],n.O=(t,i,o,s)=>{if(!i){var r=1/0;for(d=0;d<e.length;d++){for(var[i,o,s]=e[d],a=!0,c=0;c<i.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((e=>n.O[e](i[c])))?i.splice(c--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,o,s]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},i=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,n.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var s=Object.create(null);n.r(s);var r={};t=t||[null,i({}),i([]),i(i)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=i(a))Object.getOwnPropertyNames(a).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,n.d(s,r),s},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var o,s,[r,a,c]=i,l=0;if(r.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(i);l<r.length;l++)s=r[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(d)},i=this.webpackChunkpersonal_cv=this.webpackChunkpersonal_cv||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var r=n.O(void 0,[977],(()=>n(949)));r=n.O(r)})();