(this.webpackJsonpmynd=this.webpackJsonpmynd||[]).push([[0],{105:function(e,t,n){},108:function(e,t,n){},114:function(e,t,n){},133:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a,c,s,i,r=n(1),l=n.n(r),o=n(18),d=n.n(o),j=n(15),u=n(27),b=n(22),h=(n(99),n.p+"static/media/test.1a0abdd8.png"),m=n(3),p=function(e){return Object(m.jsx)("div",{className:"banner",children:Object(m.jsxs)("div",{className:"homepage-banner-img",children:[Object(m.jsxs)("div",{className:"homepage-banner-text",children:[Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{children:"Talking"})," to others is the best form of ",Object(m.jsx)("span",{children:"EPICNESS"})]}),Object(m.jsx)("p",{children:e.description}),Object(m.jsx)("a",{href:"/sign-up",children:"Sign Up!"}),Object(m.jsx)("a",{href:"/about",children:"About Mynd"})]}),Object(m.jsx)("img",{src:h,alt:"test"})]})})},O=function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"homepage-description",children:[Object(m.jsx)("h1",{children:"What is Mynd?"}),Object(m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue dui, luctus in lobortis eget, ullamcorper tristique ante. Duis sit amet elit maximus, fringilla diam vel, pretium ex. Morbi elit erat, volutpat quis nibh sit amet, egestas interdum nunc. Aliquam justo dui, bibendum non risus non, tincidunt finibus mauris."}),Object(m.jsx)("hr",{}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit."}),Object(m.jsx)("li",{children:"Aliquam tincidunt mauris eu risus."}),Object(m.jsx)("li",{children:"Vestibulum auctor dapibus neque."}),Object(m.jsx)("li",{children:"Nunc dignissim risus id metus."})]})]})})})},x=function(e){return Object(m.jsx)("div",{className:"quote container",children:Object(m.jsxs)("div",{className:"content",children:['"',e.quote,'" - ',Object(m.jsx)("span",{children:e.author})]})})},v=n(184),g=function(e){return Object(m.jsxs)("div",{className:"FAQSegment-container",children:[Object(m.jsxs)("div",{className:"top-layer",children:[Object(m.jsx)(v.a,{className:"FAQ-image",src:"https://st4.depositphotos.com/27941032/30853/v/950/depositphotos_308538152-stock-illustration-target-minimal-thin-line-web.jpg",alt:"test"}),Object(m.jsx)("h2",{children:e.question})]}),Object(m.jsx)("p",{children:e.answer}),Object(m.jsx)("div",{className:"vl"})]})},f=function(e){return Object(m.jsx)("div",{className:"faqs-container container",children:Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{children:"FAQs"}),Object(m.jsx)("div",{className:"question-container",children:[{question:"Question 1",answer:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."},{question:"Question 2",answer:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."},{question:"Question 3",answer:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede."}].map((function(e){return Object(m.jsx)(g,{question:e.question,answer:e.answer})}))})]})})},y=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{title:"",description:"Join hundreds of others giving and receiving peer support now! En stuff"}),Object(m.jsx)(O,{image:h}),Object(m.jsx)(x,{quote:"An awesome quote from our company!",author:"Mynd CEO"}),Object(m.jsx)(f,{}),Object(m.jsx)("div",{id:"background-stripe"})]})},N=n(29),k=n(26),C=n(34),w=n(33),S=n(169),D=(n(105),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={selectedQuote:{text:"quote",author:"author"},hr:(new Date).getHours()},e}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){var n=Math.floor(Math.random()*t.length);e.setState({selectedQuote:t[n]})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"hero-container",children:[Object(m.jsxs)("div",{className:"bg-text",children:[this.state.hr>=18?Object(m.jsxs)("h1",{children:["Good Evening ",this.props.name]}):this.state.hr>=12?Object(m.jsxs)("h1",{children:["Good Afternoon ",this.props.name]}):Object(m.jsxs)("h1",{children:["Good Morning ",this.props.name]}),Object(m.jsxs)("p",{children:[' "',this.state.selectedQuote.text,'" - ',this.state.selectedQuote.author]})]}),Object(m.jsxs)("div",{className:"bg-buttons",children:[Object(m.jsx)(S.a,{variant:"contained",color:"primary",size:"large",className:"h-btn",children:"Jump in"}),Object(m.jsx)(S.a,{variant:"contained",color:"primary",size:"large",className:"h-btn",children:"DMs"})]})]})}}]),n}(l.a.Component)),M=n(65),L=M.a.initializeApp({apiKey:"AIzaSyAfWKz58uiIA8LLgDVN4q1xISRzUkXkalQ",authDomain:"mynd-project.firebaseapp.com",databaseURL:"https://mynd-project-default-rtdb.europe-west1.firebasedatabase.app",projectId:"mynd-project",storageBucket:"mynd-project.appspot.com",messagingSenderId:"253356081597",appId:"1:253356081597:web:63418886db235ea212d2d4",measurementId:"G-R9Z0QFX1C9"}).firestore(),A=M.a.auth(),I=new M.a.auth.GoogleAuthProvider,F=n(41),q=function(e){var t=Object(F.a)(A),n=Object(j.a)(t,1)[0];return Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{className:"inner-footer",children:[Object(m.jsxs)("div",{className:"footer-top",children:[Object(m.jsx)("h1",{children:"Mynd"}),Object(m.jsx)("span",{children:"General"}),Object(m.jsx)("span",{children:"Features"}),Object(m.jsx)("span",{children:"User"})]}),Object(m.jsxs)("div",{className:"footer-bottom",children:[Object(m.jsx)("div",{className:"footer-brand"}),Object(m.jsxs)("div",{className:"footer-section",children:[Object(m.jsx)("p",{children:"Link 1"}),Object(m.jsx)("p",{children:"Link 2"}),Object(m.jsx)("p",{children:"Link 3"}),Object(m.jsx)("p",{children:"Link 4"})]}),Object(m.jsxs)("div",{className:"footer-section",children:[Object(m.jsx)("p",{children:"Link 1"}),Object(m.jsx)("p",{children:"Link 2"}),Object(m.jsx)("p",{children:"Link 3"}),Object(m.jsx)("p",{children:"Link 4"})]}),Object(m.jsxs)("div",{className:"footer-section",children:[n?Object(m.jsx)("button",{onClick:function(){return A.signOut()},children:"Sign Out"}):Object(m.jsx)("p",{children:"Logged Out"}),Object(m.jsx)("p",{children:"My Chats"}),Object(m.jsx)("p",{children:"Recent"}),Object(m.jsx)("p",{children:"Link 4"})]})]})]}),Object(m.jsx)("div",{className:"copyright",children:"Made by Mynd"})]})},E=n(179),R=n(183),Q=n(36),P=n(182),U=n(173),T=n(174),z=n(175),B=n(176),W=n(177),G=n(185),J=n(178),H=n(181),Y=n(170),V=n(171),K=n(172),X=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){return Object(N.a)(this,n),t.call(this,e)}return Object(k.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"calendar-event-card",children:Object(m.jsx)(Y.a,{children:Object(m.jsxs)(V.a,{children:[Object(m.jsx)(K.a,{variant:"h6",component:"h2",children:this.props.time}),Object(m.jsx)(K.a,{gutterBottom:!0,variant:"h5",component:"h2",children:this.props.title}),Object(m.jsxs)(K.a,{variant:"body2",component:"p",children:["Speaking by: ",this.props.speakers]})]})})})}}]),n}(l.a.Component),Z=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(N.a)(this,n),(a=t.call(this,e)).state={currentDate:new Date,selectedDate:Object(P.a)(new Date,{days:1})},a.getFullMonth=a.getFullMonth.bind(Object(Q.a)(a)),a.dayColour=a.dayColour.bind(Object(Q.a)(a)),a}return Object(k.a)(n,[{key:"getFullMonth",value:function(e){for(var t=[],n=Object(U.a)(Object(T.a)(e)),a=Object(z.a)(Object(B.a)(e));Object(W.a)(n,a);)t.push(n),n=Object(P.a)(n,{days:1});return t}},{key:"dayColour",value:function(e){return Object(G.a)(e,this.state.currentDate)?"calendar-current-day":Object(G.a)(e,this.state.selectedDate)?"calendar-selected-day":Object(J.a)(e,this.state.selectedDate)?"calendar-current-month":"calendar-standard"}},{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"calendar-container",children:[Object(m.jsxs)("header",{className:"month-name",children:[Object(m.jsxs)("h2",{children:["  ",Object(H.a)(this.state.selectedDate,"MMMM yyyy"),"  "]}),Object(m.jsx)("span",{className:"calendar-arrows",onClick:function(){return e.setState({selectedDate:Object(P.a)(e.state.selectedDate,{months:-1})})},children:"\u2190"}),Object(m.jsx)("span",{className:"calendar-arrows",onClick:function(){return e.setState({selectedDate:e.state.currentDate})},children:"Today"}),Object(m.jsx)("span",{className:"calendar-arrows",onClick:function(){return e.setState({selectedDate:Object(P.a)(e.state.selectedDate,{months:1})})},children:"\u2192"})]}),Object(m.jsx)("ul",{className:"weekdays",children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e){return Object(m.jsx)("li",{className:"day-name",children:Object(m.jsx)("abbr",{title:e[0],children:e})},e)}))}),Object(m.jsx)("div",{className:"calendar-grid",children:Object(m.jsx)("ol",{className:"day",children:this.getFullMonth(this.state.selectedDate).map((function(t){return Object(m.jsx)("li",{className:"calendar-li",children:Object(m.jsx)("div",{className:e.dayColour(t),onClick:function(){return e.setState({selectedDate:t})},children:Object(H.a)(t,"dd")})},t.toString())}))})})]}),Object(m.jsxs)("div",{className:"selected-day-events",children:[Object(m.jsxs)("h1",{children:[" Events on ",Object(H.a)(this.state.selectedDate,"dd MMMM YYY")]}),Object(m.jsx)(E.a,{container:!0,spacing:2,children:[{title:"Some kinda speaking event",speakers:"Alex, Sam",time:"9:15"},{title:"Some kinda speaking event",speakers:"Alex",time:"10:15"},{title:"This is just dummy data lmao",speakers:"Alex, Harvey",time:"19:15"},{title:"hiya",speakers:"Bob",time:"21:15"},{title:"This is gettin late",speakers:"Bob",time:"23:15"},{title:"Lorem Ipsum amiright",speakers:"Bob",time:"23:35"},{title:"John i think",speakers:"John",time:"23:45"}].map((function(e){return Object(m.jsx)(E.a,{item:!0,xs:4,children:Object(m.jsx)("li",{className:"calendar-events-items",children:Object(m.jsx)(X,{title:e.title,speakers:e.speakers,time:e.time})})})}))})]})]})}}]),n}(l.a.Component),_=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(N.a)(this,n),(a=t.call(this,e)).state={currentDate:new Date},a}return Object(k.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"calendar-upcoming-events",children:[Object(m.jsx)("h1",{children:Object(H.a)(this.state.currentDate,"EEEE d MMMM yyyy")}),Object(m.jsx)("h2",{children:"Your Events Today:"}),Object(m.jsx)("div",{className:"calender-events-list",children:Object(m.jsx)("ul",{children:[{title:"Some kinda speaking event",speakers:"Alex, Sam",time:"9:15"},{title:"Some kinda speaking event",speakers:"Alex",time:"10:15"},{title:"This is just dummy data lmao",speakers:"Alex, Harvey",time:"19:15"},{title:"hiya",speakers:"Bob",time:"21:15"},{title:"This is gettin late",speakers:"Bob",time:"23:15"},{title:"I just want scrolling",speakers:"John",time:"23:45"},{title:"MORE SCROLL!!!",speakers:"James",time:"23:50"}].map((function(e){return Object(m.jsx)("li",{className:"calendar-events-items",children:Object(m.jsx)(X,{title:e.title,speakers:e.speakers,time:e.time})})}))})})]})}}]),n}(l.a.Component),$=(n(108),function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(N.a)(this,n),(a=t.call(this,e)).state={},a}return Object(k.a)(n,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"calendar-page",children:Object(m.jsxs)(E.a,{container:!0,spacing:2,children:[Object(m.jsxs)(E.a,{item:!0,xs:3,children:[Object(m.jsx)(R.a,{size:"small",onChange:function(){return document.body.classList.toggle("dark-mode")}}),Object(m.jsx)(_,{})]}),Object(m.jsx)(E.a,{item:!0,xs:9,children:Object(m.jsx)(Z,{})})]})})})}}]),n}(l.a.Component)),ee=n(67),te=n.n(ee),ne=n(80),ae=n(180),ce=n(68),se=n(81),ie=function(e){var t=Object(se.a)(L.collection("chat-rooms"),{snapshotListenOptions:{includeMetadataChanges:!0}}),n=Object(j.a)(t,3),a=n[0];n[1],n[2];return Object(m.jsxs)("div",{className:"chat-sidebar",children:[Object(m.jsx)("p",{children:" Change these to some generate new chat? "}),a&&a.docs.map((function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("p",{children:[" - ",e.id]})},e.id)}))]})},re=function(e){var t=Object(b.g)().roomId,n=Object(F.a)(A),a=Object(j.a)(n,1)[0],c=Object(r.useState)(""),s=Object(j.a)(c,2),i=s[0],l=s[1],o=Object(r.useState)([]),d=Object(j.a)(o,2),u=d[0],h=d[1];Object(r.useEffect)((function(){var e=ce.a.firestore().collection("chat-rooms").doc(t).collection("messages").orderBy("createdAt","asc").onSnapshot((function(e){h(e.docs.map((function(e){return e})))}));return function(){return e()}}),[t,u]);var p=function(){var e=Object(ne.a)(te.a.mark((function e(n){return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),a&&""!=i&&(l(""),L.collection("chat-rooms").doc(t).collection("messages").add({text:i,createdAt:ce.a.firestore.FieldValue.serverTimestamp(),user:a.uid}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"chat-page-container",children:Object(m.jsxs)(E.a,{container:!0,spacing:2,children:[Object(m.jsx)(E.a,{item:!0,xs:2,children:Object(m.jsx)(ie,{})}),Object(m.jsxs)(E.a,{item:!0,xs:10,children:[Object(m.jsx)("div",{className:"chat-container",id:"chat",children:Object(m.jsx)("div",{children:u.map((function(e){return Object(m.jsx)("div",{className:a&&e.data().user==a.uid?"user message":"matcher message",children:Object(m.jsx)("p",{children:e.data().text})},e.id)}))})}),Object(m.jsx)("div",{className:"chat-message-input",children:Object(m.jsx)("form",{onChange:function(e){l(e.target.value)},onSubmit:p,children:Object(m.jsxs)(E.a,{container:!0,children:[Object(m.jsx)(E.a,{item:!0,xs:11,children:Object(m.jsx)(ae.a,{value:i,className:"input-message",fullWidth:!0,id:"outlined"})}),Object(m.jsx)(E.a,{item:!0,xs:1,children:Object(m.jsx)(S.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",children:" Send "})})]})})})]})]})})})},le=(n(114),function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(u.a,{children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/chat/:roomId",children:Object(m.jsx)(re,{})}),Object(m.jsx)(b.b,{path:"/chat/"})]})})})}),oe=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("h1",{id:"not-found",children:"A 404 page. Better go back."})})},de=n(53),je=n(42),ue=n(63),be=Object(ue.b)({name:"app",initialState:{user:null,chatID:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null},enterChat:function(e,t){e.chatID=t.payload.chatID}}}),he=be.actions,me=he.login,pe=he.logout,Oe=(he.enterChat,be.reducer),xe=n(54),ve=n.p+"static/media/googleIcon.6bc7d493.png",ge=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),l=i[0],o=i[1],d=Object(je.b)();return Object(m.jsx)(fe,{children:Object(m.jsxs)(ye,{children:[Object(m.jsx)("h1",{children:"Mynd"}),Object(m.jsx)("h2",{children:"Login"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"email",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Email"}),Object(m.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},placeholder:"Password"}),Object(m.jsx)(S.a,{className:"button",type:"submit",onClick:function(e){e.preventDefault(),A.signInWithEmailAndPassword(a,l).then((function(e){var t,n,a,c;d(me({email:null===(t=e.user)||void 0===t?void 0:t.email,uid:null===(n=e.user)||void 0===n?void 0:n.uid,displayName:null===(a=e.user)||void 0===a?void 0:a.displayName,photoURL:null===(c=e.user)||void 0===c?void 0:c.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"}),Object(m.jsxs)(S.a,{className:"button",onClick:function(e){e.preventDefault(),A.signInWithPopup(I).catch((function(e){return alert(e.message)}))},children:[Object(m.jsx)("img",{src:ve}),"Google Sign In"]}),Object(m.jsx)(S.a,{className:"button",href:"/register",children:"Or Register"})]})]})})},fe=xe.a.div(a||(a=Object(de.a)(["\n  background-color: #2c2c2c;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n"]))),ye=xe.a.div(c||(c=Object(de.a)(["\n  padding: 100px;\n  text-align: center;\n  background: linear-gradient(to bottom, #66ffcc 0%, #99ff99 100%);\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 255, 0, 1), 0 1px 2px rgba(0, 0, 0, 0.24);\n  display: grid;\n  place-items: center;\n\n  > h1 {\n    color: #ed4f3a;\n  }\n\n  > h2 {\n    color: black;\n  }\n\n  > form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > input {\n      width: 35vw;\n      height: 5vh;\n      font-size: 20px;\n      padding-left: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n    }\n\n    > .button {\n      width: 36vw;\n      height: 5vh;\n      font-size: medium;\n      color: #fff;\n      background-color: #26a8ff;\n      border-radius: 5px;\n      margin-bottom: 7px;\n\n      :hover {\n        background-color: white;\n        transition: 0.2s;\n        color: black;\n        cursor: pointer;\n      }\n\n      img {\n        object-fit: contain;\n        height: 15px;\n        margin-right: 5px;\n      }\n    }\n  }\n"]))),Ne=n(87),ke=n.n(Ne),Ce=(n(133),n(48)),we=n(49),Se=function(e){var t,n=Object(F.a)(A),a=Object(j.a)(n,1)[0],c=(null===a||void 0===a?void 0:a.photoURL)||"",s="Hi, "+((null===a||void 0===a||null===(t=a.displayName)||void 0===t?void 0:t.split(" ")[0])||"");return Object(m.jsx)("nav",{id:"navbar-vertical",children:Object(m.jsxs)("ul",{className:"nv-nav",children:[Object(m.jsx)("li",{className:"nv-logo nv-item",children:Object(m.jsxs)(u.b,{to:"/",children:[Object(m.jsx)(Ce.a,{icon:we.a}),Object(m.jsx)("span",{className:"link-text",children:"Mynd"})]})}),Object(m.jsx)("li",{className:"nv-item",children:Object(m.jsxs)(u.c,{to:"/home",activeClassName:"active",children:[Object(m.jsx)(Ce.a,{icon:we.d}),Object(m.jsx)("span",{className:"link-text",children:"Home"})]})}),Object(m.jsx)("li",{className:"nv-item",children:Object(m.jsxs)(u.c,{to:"/news",activeClassName:"active",children:[Object(m.jsx)(Ce.a,{icon:we.f}),Object(m.jsx)("span",{className:"link-text",children:"News"})]})}),Object(m.jsx)("li",{className:"nv-item",children:Object(m.jsxs)(u.c,{to:"/chat",activeClassName:"active",children:[Object(m.jsx)(Ce.a,{icon:we.c}),Object(m.jsx)("span",{className:"link-text",children:"Chat"})]})}),Object(m.jsx)("li",{className:"nv-item",children:Object(m.jsxs)(u.c,{to:"/inbox",activeClassName:"active",children:[Object(m.jsx)(Ce.a,{icon:we.e}),Object(m.jsx)("span",{className:"link-text",children:"Inbox"})]})}),Object(m.jsx)("li",{className:"nv-item",children:Object(m.jsxs)(u.c,{to:"/calendar",activeClassName:"active",children:[Object(m.jsx)(Ce.a,{icon:we.b}),Object(m.jsx)("span",{className:"link-text",children:"Calendar"})]})}),Object(m.jsx)("li",{className:"nv-item",children:Object(m.jsxs)(u.c,{to:"/profile",activeClassName:"active",children:[Object(m.jsx)("img",{src:c,alt:s,className:"avatar"}),Object(m.jsx)("span",{className:"link-text",children:s})]})})]})})},De=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),l=i[0],o=i[1],d=Object(r.useState)(""),u=Object(j.a)(d,2),b=u[0],h=u[1],p=Object(r.useState)(""),O=Object(j.a)(p,2),x=O[0],v=O[1],g=Object(je.b)();return Object(m.jsx)(Me,{children:Object(m.jsxs)(Le,{children:[Object(m.jsx)("h1",{children:"Mynd"}),Object(m.jsx)("h2",{children:"Register"}),Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{type:"text",value:b,onChange:function(e){return h(e.target.value)},placeholder:"Full name"}),Object(m.jsx)("input",{type:"text",value:x,onChange:function(e){return v(e.target.value)},placeholder:"Profile picture URL"}),Object(m.jsx)("input",{type:"email",value:a,onChange:function(e){return c(e.target.value)},placeholder:"Email"}),Object(m.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},placeholder:"Password"}),Object(m.jsx)(S.a,{className:"button",type:"submit",onClick:function(e){if(e.preventDefault(),!b)return alert("Please enter a full name");A.createUserWithEmailAndPassword(a,l).then((function(e){var t;null===(t=e.user)||void 0===t||t.updateProfile({displayName:b,photoURL:x}).then((function(){var t,n;g(me({email:null===(t=e.user)||void 0===t?void 0:t.email,uid:null===(n=e.user)||void 0===n?void 0:n.uid,displayName:b,photoURL:x}))}))})).catch((function(e){return alert(e)}))},children:"Register"}),Object(m.jsxs)(S.a,{className:"button",onClick:function(e){e.preventDefault(),A.signInWithPopup(I).catch((function(e){return alert(e.message)}))},children:[Object(m.jsx)("img",{src:ve}),"Google Register"]}),Object(m.jsx)(S.a,{className:"button",href:"/login",children:"Or Login"})]})]})})},Me=xe.a.div(s||(s=Object(de.a)(["\n  background-color: #2c2c2c;\n  height: 100vh;\n  display: grid;\n  place-items: center;\n"]))),Le=xe.a.div(i||(i=Object(de.a)(["\n  padding: 100px;\n  text-align: center;\n  background: linear-gradient(to bottom, #66ffcc 0%, #99ff99 100%);\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 255, 0, 1), 0 1px 2px rgba(0, 0, 0, 0.24);\n  display: grid;\n  place-items: center;\n\n  > h1 {\n    color: #ed4f3a;\n  }\n\n  > h2 {\n    color: black;\n  }\n\n  > form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > input {\n      width: 35vw;\n      height: 5vh;\n      font-size: 20px;\n      padding-left: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n    }\n\n    > .button {\n      width: 36vw;\n      height: 5vh;\n      font-size: medium;\n      color: #fff;\n      background-color: #26a8ff;\n      border-radius: 5px;\n      margin-bottom: 7px;\n\n      :hover {\n        background-color: white;\n        transition: 0.2s;\n        color: black;\n        cursor: pointer;\n      }\n\n      img {\n        object-fit: contain;\n        height: 15px;\n        margin-right: 5px;\n      }\n    }\n  }\n"])));var Ae=function(){var e=Object(F.a)(A),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(je.b)(),s=(null===n||void 0===n?void 0:n.displayName)||"";return Object(r.useEffect)((function(){A.onAuthStateChanged((function(e){c(e?me({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):pe())}))}),[c]),a?Object(m.jsx)("div",{className:"loading",children:Object(m.jsx)("div",{className:"loadingContents",children:Object(m.jsx)(ke.a,{name:"ball-spin-fade-loader",color:"purple",fadeIn:"none"})})}):Object(m.jsxs)(u.a,{children:[n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Se,{}),Object(m.jsx)("div",{className:"app-container",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{path:"/login",children:Object(m.jsx)(b.a,{to:"/"})}),Object(m.jsx)(b.b,{path:"/register",children:Object(m.jsx)(b.a,{to:"/"})}),Object(m.jsx)(b.b,{path:"/home",children:Object(m.jsx)(D,{name:s})}),Object(m.jsx)(b.b,{path:"/calendar",children:Object(m.jsx)($,{})}),Object(m.jsx)(b.b,{path:"/chat",children:Object(m.jsx)(le,{})}),Object(m.jsx)(b.b,{exact:!0,path:"/",children:Object(m.jsx)(y,{})}),Object(m.jsx)(b.b,{path:"*",exact:!0,component:oe})]})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"app-container",children:Object(m.jsxs)(b.d,{children:[Object(m.jsx)(b.b,{exact:!0,path:"/",children:Object(m.jsx)(b.a,{to:"/login"})}),Object(m.jsx)(b.b,{path:"/login",children:Object(m.jsx)(ge,{})}),Object(m.jsx)(b.b,{path:"/register",children:Object(m.jsx)(De,{})}),Object(m.jsx)(b.b,{path:"*",exact:!0,children:Object(m.jsx)(b.a,{to:"/login"})})]})})}),Object(m.jsx)(q,{})]})},Ie=Object(ue.a)({reducer:{user:Oe}}),Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};d.a.render(Object(m.jsx)(l.a.StrictMode,{children:Object(m.jsx)(je.a,{store:Ie,children:Object(m.jsx)(Ae,{})})}),document.getElementById("root")),Fe()},99:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.b33391e9.chunk.js.map