(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(58),r=n.n(a),s=(n(68),n(18)),l=n(26),o=n(14),i=n.n(o),u=n(16),j=n(6),b=(n(70),n(22)),p=(n(90),n(124)),d=n(125),O=n(17),h=n.n(O),f=n(3),m=function(e){var t=e.setShowLogin,n=e.myStorage,a=e.setCurrentUser,r=Object(c.useState)(!1),s=Object(j.a)(r,2),l=s[0],o=s[1],b=Object(c.useRef)(),O=Object(c.useRef)(),m=function(){var e=Object(u.a)(i.a.mark((function e(c){var r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r={username:b.current.value,password:O.current.value},e.prev=2,e.next=5,h.a.post("".concat("https://mern-travel-app.cyclic.app/api","/users/login"),r);case 5:s=e.sent,n.setItem("user",s.data.username),a(s.data.username),t(!1),o(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),o(!0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"loginContainer",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)(p.a,{}),"DkPin"]}),Object(f.jsxs)("form",{onSubmit:m,children:[Object(f.jsx)("input",{type:"text",placeholder:"Enter your username",ref:b}),Object(f.jsx)("input",{type:"password",placeholder:"password",ref:O}),Object(f.jsx)("button",{className:"loginBtn",children:"Login"}),l&&Object(f.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(f.jsx)(d.a,{className:"loginCancel",onClick:function(){return t(!1)}})]})},x=(n(111),function(e){var t=e.setShowRegister,n=Object(c.useState)(!1),a=Object(j.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(!1),o=Object(j.a)(l,2),b=o[0],O=o[1],m=Object(c.useRef)(),x=Object(c.useRef)(),g=Object(c.useRef)(),v=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:m.current.value,email:x.current.value,password:g.current.value},e.prev=2,e.next=5,h.a.post("".concat("https://mern-travel-app.cyclic.app/api","/users/register"),n);case 5:O(!1),s(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"registerContainer",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)(p.a,{}),"DkPin"]}),Object(f.jsxs)("form",{onSubmit:v,children:[Object(f.jsx)("input",{type:"text",placeholder:"Enter your username",ref:m}),Object(f.jsx)("input",{type:"email",placeholder:"Enter your email",ref:x}),Object(f.jsx)("input",{type:"password",placeholder:"password",ref:g}),Object(f.jsx)("button",{className:"registerBtn",children:"Signup"}),r&&Object(f.jsx)("span",{className:"success",children:"Successful.You can login now"}),b&&Object(f.jsx)("span",{className:"failure",children:"Something went wrong!"})]}),Object(f.jsx)(d.a,{className:"registerCancel",onClick:function(){return t(!1)}})]})}),g=n(126),v=n(62);var w=function(){var e=window.localStorage,t=Object(c.useState)({width:"100vw",height:"100vh",latitude:21.7679,longitude:78.8718,zoom:4}),n=Object(j.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(e.getItem("user")),d=Object(j.a)(o,2),O=d[0],w=d[1],S=Object(c.useState)([]),y=Object(j.a)(S,2),k=y[0],N=y[1],C=Object(c.useState)(null),z=Object(j.a)(C,2),R=z[0],D=z[1],L=Object(c.useState)(null),A=Object(j.a)(L,2),I=A[0],T=A[1],B=Object(c.useState)(null),E=Object(j.a)(B,2),J=E[0],F=E[1],P=Object(c.useState)(null),Y=Object(j.a)(P,2),_=Y[0],G=Y[1],M=Object(c.useState)(0),U=Object(j.a)(M,2),V=U[0],W=U[1],X=Object(c.useState)(!1),Z=Object(j.a)(X,2),H=Z[0],K=Z[1],Q=Object(c.useState)(!1),q=Object(j.a)(Q,2),$=q[0],ee=q[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("".concat("https://mern-travel-app.cyclic.app/api","/pins"));case 3:t=e.sent,console.log(t),N(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var te=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:O,title:J,desc:_,rating:V,lat:I.lat,long:I.long},e.prev=2,e.next=5,h.a.post("/pins",n);case 5:c=e.sent,N([].concat(Object(s.a)(k),[c.data])),T(null),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(b.c,Object(l.a)(Object(l.a)({},a),{},{mapboxApiAccessToken:"pk.eyJ1IjoiZGttYXAzOTc3ODciLCJhIjoiY2tzd3FmM3FpMThibDJvbHNrNWdneTk1eiJ9.an6V2ZxKXoW2Gmjtm1rofQ",onViewportChange:function(e){return r(e)},mapStyle:"mapbox://styles/dkmap397787/ckswt1nbw55ml18o277cfsfh2",onDblClick:function(e){var t=Object(j.a)(e.lngLat,2),n=t[0],c=t[1];console.log(e),T({lat:c,long:n})},transitionDuration:"200",children:[k.map((function(e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{latitude:e.lat,longitude:e.long,offsetLeft:3.5*-a.zoom,offsetTop:7*-a.zoom,children:Object(f.jsx)(p.a,{style:{fontSize:7*a.zoom,color:e.username===O?"#ff5e57":"#0984e3",cursor:"pointer"},onClick:function(){return t=e._id,n=e.lat,c=e.long,D(t),void r(Object(l.a)(Object(l.a)({},a),{},{latitude:n,longitude:c}));var t,n,c}})},e._id),e._id===R&&Object(f.jsx)(b.b,{latitude:e.lat,longitude:e.long,closeButton:!0,closeOnClick:!1,onClose:function(){return D(null)},anchor:"left",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("label",{children:"Place"}),Object(f.jsx)("h4",{className:"place",children:e.title}),Object(f.jsx)("label",{children:"Review"}),Object(f.jsx)("p",{className:"desc",children:e.desc}),Object(f.jsx)("label",{children:"Rating"}),Object(f.jsx)("div",{className:"stars",children:Array(e.rating).fill(Object(f.jsx)(g.a,{className:"star"}))}),Object(f.jsx)("label",{children:"Information"}),Object(f.jsxs)("span",{className:"username",children:["Created by ",Object(f.jsx)("b",{children:e.username})]}),Object(f.jsx)("span",{className:"date",children:Object(v.a)(e.createdAt)})]})})]})})),I&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(b.a,{latitude:I.lat,longitude:I.long,offsetLeft:-3.5*a.zoom,offsetTop:-7*a.zoom,children:Object(f.jsx)(p.a,{style:{fontSize:7*a.zoom,color:"tomato",cursor:"pointer"}})}),Object(f.jsx)(b.b,{latitude:I.lat,longitude:I.long,closeButton:!0,closeOnClick:!1,onClose:function(){return T(null)},anchor:"left",children:Object(f.jsx)("div",{children:Object(f.jsxs)("form",{onSubmit:te,children:[Object(f.jsx)("label",{children:"Title"}),Object(f.jsx)("input",{placeholder:"Enter a title",autoFocus:!0,onChange:function(e){return F(e.target.value)}}),Object(f.jsx)("label",{children:"Description"}),Object(f.jsx)("textarea",{placeholder:"Say us something about this place.",onChange:function(e){return G(e.target.value)}}),Object(f.jsx)("label",{children:"Rating"}),Object(f.jsxs)("select",{onChange:function(e){return W(e.target.value)},children:[Object(f.jsx)("option",{value:"1",children:"1"}),Object(f.jsx)("option",{value:"2",children:"2"}),Object(f.jsx)("option",{value:"3",children:"3"}),Object(f.jsx)("option",{value:"4",children:"4"}),Object(f.jsx)("option",{value:"5",children:"5"})]}),Object(f.jsx)("button",{type:"submit",className:"submitButton",children:"Add Pin"})]})})})]}),O?Object(f.jsx)("button",{className:"button logout",onClick:function(){e.removeItem("user"),w(null)},children:"Logout"}):Object(f.jsxs)("div",{className:"buttons",children:[Object(f.jsx)("button",{className:"button login",onClick:function(){return ee(!0)},children:"Login"}),Object(f.jsx)("button",{className:"button register",onClick:function(){return K(!0)},children:"Register"})]}),H&&Object(f.jsx)(x,{setShowRegister:K}),$&&Object(f.jsx)(m,{setShowLogin:ee,myStorage:e,setCurrentUser:w})]}))})};r.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))},68:function(e,t,n){},70:function(e,t,n){},90:function(e,t,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.c5745de4.chunk.js.map