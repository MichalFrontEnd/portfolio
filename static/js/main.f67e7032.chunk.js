(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(e,t,i){},37:function(e,t,i){},59:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),c=i(11),o=i.n(c),s=(i(35),i(36),i(37),i(38),i(12)),r=i(5),l=i(2),d=[{path:"/",exact:!0,component:"Home",navbar:function(){return Object(l.jsx)("div",{children:"Home"})}},{path:"/projects",exact:!0,component:"Projects",navbar:function(){return Object(l.jsx)("div",{children:"Projects"})}},{path:"/about",exact:!0,component:"About",navbar:function(){return Object(l.jsx)("div",{children:"About"})}}];function h(){return Object(l.jsx)("navbar",{children:d.map((function(e,t){return Object(l.jsx)(s.c,{to:e.path,exact:e.exact,className:"navlink",children:e.component},t)}))})}var j=i(14),g=i(13),p=[{id:0,name:"campus cat",liner:"Kittyish online petition",desc:"Student project at Spiced Academy. In this project I built a petition site that can be found here. The cause for this petition is to have cats on campuses, starting with the Spiced Academy campus, for the well-being of the students.",stack:"Node (Express), PostgreSQL, jQuery, Handlebars, Canvas, Adobe Photoshop. Deployed on Heroku.",url:"http://campuscat.herokuapp.com/",features:["Registration/Login","Canvas signature","Editable user profile","Signers page, can be filtered by city","Routing middleware that allows only logged-in users to view certain pages, and redirects","logged-out users to the registration page"],gif:"/gifs/Campus-Cat-Preview.gif",img:!0,tv:"/images/cctv.png",imgsrc:"/images/petition",git:"https://github.com/MichalFrontEnd/campus-cat",folder:"petition",toleft:!0},{id:1,name:"pattern board",liner:"Patternful image board",desc:"Student project at Spiced Academy. In this project I built an image board focusing on different types of patterns, for design purposes. A logged-in user can add photos to the board, comment on them and share it on pinterest.",stack:"Node (Express), PostgreSQL, Vue.js, AWS (S3), Axios.",url:"",features:["Registration/Login","Photo Upload","Modal display for clicked image","Commenting","Hash browsing","Infinite scrolling","Pinterest sharing"],gif:"",img:!1,tv:"/images/cstv.png",imgsrc:"/images/imgboard",git:"",folder:"imgboard",toleft:!1},{id:2,name:"threads",liner:"A social network for creative people",desc:"Student project at Spiced Academy. This is a 2-page social media app that includes: login/registration, authentication, editable user profile (profile picture, bio), wall posts, user search, friend requests functionality, chat.",stack:"Node (Express), PostgreSQL, React, React Router, Redux, AWS (S3, SES), Socket.io.",url:"",features:["Logo design by Sharo003 @fiverr.com","Authentcation and password reset via email","Photo Upload","Random cover photos with creative themes","Default profile photo","Editable bio section","User search - Also displays the 3 newest users on the site","Friend request/cancel friend request","Wall posts - only visible to friends","Post delete functionality on own wall","Chat"],gif:"/gifs/threads-preview.gif",img:!0,tv:"/images/threadstv.png",imgsrc:"/images/threads",git:"https://github.com/MichalFrontEnd/threads",folder:"threads",toleft:!0},{id:3,name:"furmature",liner:"A color-matching helper for home design",desc:"Graduation project at Spiced Academy. In this single-page app I built in a week I experimented with Konva and React-Konva to create a color-matching app for home design. The app user can drag & drop items, rescale them and color or pattern-fill them. Includes photo upload and image save for the final result..",stack:"Node (Express), PostgreSQL, React, Konva, React-Konva, React Color, Redux, AWS (S3), Socket.io",url:"",features:["Drag & drop","rescaling","Ordering (Layering)","Random color generator","Image upload","Dumping of temprory photo uploads upon leaving the site","Image save using DataURL"],gif:"/gifs/FurMatchure-preview.gif",img:!0,tv:"/images/fmtv.png",imgsrc:"/images/final",git:"https://github.com/MichalFrontEnd/FurMatchure",folder:"final",toleft:!1}],m=i(64),u=i(60),b=i(61),f=i(29),x=i.n(f),O=i(30),v=i.n(O),w=i.p+"static/media/Comingsoon.6fa60416.png";function k(e){for(var t=Object(n.useState)(!1),i=Object(g.a)(t,2),a=i[0],c=i[1],o=[],s=1;s<=5;s++)o.push({original:window.location.origin+"".concat(e.imgsrc,"/").concat(s,".png"),thumbnail:window.location.origin+"".concat(e.imgsrc,"/").concat(s,"_thumb.png")});return Object(l.jsx)("div",{className:"portfolio-shroud",onClick:e.toggle,children:Object(l.jsxs)(m.a,{isOpen:e.modal,contentClassName:"portfolio-modal capitalize",toggle:e.toggle,centered:!0,fluid:!0,children:[Object(l.jsx)(u.a,{close:"X",onClick:e.toggle,children:Object(l.jsx)("h1",{children:e.name})}),Object(l.jsx)(b.a,{children:Object(l.jsxs)("div",{className:"project",children:[Object(l.jsx)("h3",{children:e.liner}),Object(l.jsx)("div",{className:"gif-container mb-5",children:e.gif?Object(l.jsx)(x.a,{gif:window.location.origin+e.gif,still:window.location.origin+"".concat(e.imgsrc,"/1.png"),onTogglePlay:function(e){c(!a)}}):Object(l.jsx)("img",{src:w,alt:"Coming Soon"})}),Object(l.jsxs)("p",{children:["Stack: ",e.stack]}),Object(l.jsxs)("div",{className:"proj-links",children:[e.url&&Object(l.jsxs)("p",{className:"projurl",children:["Check out the ",Object(l.jsx)("a",{href:e.url,children:"Project"})]}),Object(l.jsxs)("p",{className:"giturl",children:["Check out the ",Object(l.jsx)("a",{href:e.git,children:"Code"})]})]}),e.img?Object(l.jsxs)("div",{className:"gallery-container",children:[Object(l.jsx)("p",{children:"See some more:"}),Object(l.jsx)(v.a,{items:o,showBullets:!0,showThumbnails:!1,thumbnailClass:"thumbnail",thumbnailPosition:"left"})]}):null]})})]})})}function y(e){console.log("props.tv: ",e.tv);var t=Object(n.useState)(!1),i=Object(g.a)(t,2),a=i[0],c=i[1],o=function(){return c(!a)};return Object(l.jsxs)(n.Fragment,{children:[a&&Object(l.jsx)(k,Object(j.a)(Object(j.a)({},e),{},{toggle:o,modal:a})),Object(l.jsxs)("div",{className:"portfolio-item",children:[Object(l.jsxs)("a",{className:"portfolio-link","data-bs-toggle":"modal",href:"#portfolioModal1",onClick:function(){return o()},children:[Object(l.jsx)("div",{className:"portfolio-hover",children:Object(l.jsx)("div",{className:"portfolio-hover-content",children:Object(l.jsx)("p",{children:e.stack})})}),Object(l.jsx)("img",{className:"img-fluid",src:window.location.origin+e.tv,alt:"..."})]}),Object(l.jsxs)("div",{className:"portfolio-caption",children:[Object(l.jsx)("h4",{className:"portfolio-caption-heading mt-4 capitalize",children:e.name}),Object(l.jsx)("p",{className:"portfolio-caption-subheading text-muted mt-4",children:e.liner})]})]})]})}function S(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),i=t[0],a=t[1];return Object(n.useEffect)((function(){a(p)}),[i]),Object(l.jsx)("div",{className:"gen-container",children:Object(l.jsx)("div",{className:"proj-container",children:i&&i.slice(0).reverse().map((function(e,t){return Object(n.createElement)(y,Object(j.a)(Object(j.a)({},e),{},{key:t}))}))})})}var N=i(62),A=i(63);function C(){return Object(l.jsx)(N.a,{fluid:!0,children:Object(l.jsxs)(A.a,{fluid:!0,className:"header-container lg",children:[Object(l.jsx)("h1",{children:"Michal Front"}),Object(l.jsx)("h3",{className:"sub-header",children:"Full-Stack Web Developer"}),Object(l.jsx)(s.b,{to:"/projects",children:Object(l.jsx)("div",{class:"center-con",fluid:!0,children:Object(l.jsxs)("div",{class:"round",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})})})]})})}function I(){return Object(l.jsx)("div",{children:Object(l.jsx)(C,{})})}var P=i.p+"static/media/about.2e22900b.jpg",F=[{icon:"/images/email.png",alt:"email",text:"michal.front@outlook.com",link:!1},{icon:"/images/li.png",alt:"linkedin",text:"/michal-front",link:"www.linkedin.com/in/michal-front"},{icon:"/images/git.png",alt:"github",text:"/MichalFrontEnd",link:"www.github.com/MichalFrontEnd"}];function E(){return Object(l.jsx)("div",{className:"contact-container",fluid:!0,children:F.map((function(e,t){return Object(l.jsxs)("div",{className:"contact-item",children:[Object(l.jsx)("img",{src:window.location.origin+e.icon,alt:e.alt}),Object(l.jsx)("div",{}),e.link?Object(l.jsx)("a",{href:e.link,children:Object(l.jsx)("p",{children:e.text})}):Object(l.jsx)("p",{children:e.text})]},t)}))})}function R(){return Object(l.jsx)("div",{children:Object(l.jsx)(A.a,{fluid:!0,className:"gen-container",children:Object(l.jsxs)("div",{className:"about-container",children:[Object(l.jsx)("img",{src:P,alt:"mfront",className:"me"}),Object(l.jsxs)("div",{className:"about-text",children:[Object(l.jsx)("h2",{children:"Hi! I'm Michal Front"}),Object(l.jsx)("h4",{children:"A full stack web developer from Berlin, Germany."}),Object(l.jsx)("p",{children:"I have a strong affinity to the Front-End side of things, though I do enjoy getting my hands dirty on some server work. I currently work in JavaScript, focusing mainly on React. While always striving to learn and implement new things, I also love to dive deeper into the nitty-gritty of my current stack."}),Object(l.jsx)("p",{children:"In my spare time I enjoy classical singing, swing dancing, sewing and embroidery."}),Object(l.jsx)("p",{children:"Available for work."})]}),Object(l.jsx)(E,{})]})})})}var M=function(){return Object(l.jsx)(s.a,{basename:"/",children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(h,{}),Object(l.jsx)(r.a,{exact:!0,path:"/",component:I}),Object(l.jsx)(r.a,{exact:!0,path:"/projects",component:S}),Object(l.jsx)(r.a,{exact:!0,path:"/about",component:R})]})})},L=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,65)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;i(e),n(e),a(e),c(e),o(e)}))};o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(M,{})}),document.getElementById("root")),L()}},[[59,1,2]]]);
//# sourceMappingURL=main.f67e7032.chunk.js.map