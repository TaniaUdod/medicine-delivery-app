"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{382:function(n,e,t){t.d(e,{Dx:function(){return l},EF:function(){return d},tA:function(){return x},xv:function(){return f},zx:function(){return p}});var r,i,c,a,o,s=t(766),u=t(924),d=u.ZP.li(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid #ccc;\n  margin-bottom: 10px;\n  padding: 10px;\n  flex-direction: column;\n"]))),l=u.ZP.h3(i||(i=(0,s.Z)(["\n  font-weight: bold;\n  margin: 0;\n  text-align: left;\n"]))),f=u.ZP.p(c||(c=(0,s.Z)(["\n  margin: 10px 0 0 0;\n"]))),x=u.ZP.p(a||(a=(0,s.Z)(["\n  margin: 0;\n  text-align: right;\n  font-weight: bold;\n"]))),p=u.ZP.button(o||(o=(0,s.Z)(["\n  margin-left: auto;\n  padding: 10px 30px;\n  margin-top: 5px;\n  background-color: #59ad59;\n  border: none;\n  font-weight: bold;\n  border-radius: 8px;\n  transition: background-color 0.3s ease, transform 0.3s ease;\n\n  &:hover {\n    background-color: #5ac45a;\n    transform: scale(1.1);\n    cursor: pointer;\n  }\n"])))},645:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,i,c=t(433),a=t(439),o=t(791),s=t(861),u=t(687),d=t.n(u),l=t(294),f=function(){var n=(0,s.Z)(d().mark((function n(){var e,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.get("/pharmacies");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.result);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=(0,s.Z)(d().mark((function n(){var e,t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.Z.get("/medicines");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.result);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=t(258),h=t(766),m=t(87),g=t(924),Z=g.ZP.li(r||(r=(0,h.Z)(["\n  border: 1px solid #ccc;\n  padding: 10px;\n  margin-bottom: 10px;\n  transition: transform 0.3s ease;\n  text-align: center;\n\n  &:hover {\n    color: #59ad59;\n    transform: scale(1.1);\n  }\n"]))),v=(0,g.ZP)(m.rU)(i||(i=(0,h.Z)(["\n  text-decoration: none;\n  color: inherit;\n"]))),j=t(184),b=function(n){var e=n.pharmacies;return(0,j.jsxs)("div",{children:[(0,j.jsx)("h3",{style:{textAlign:"center"},children:"Shops"}),(0,j.jsx)("ul",{children:e.map((function(n){var e=n._id,t=n.name,r=n.phone;return(0,j.jsx)(Z,{children:(0,j.jsxs)(v,{to:"/pharmacies",children:[(0,j.jsx)("p",{children:t}),(0,j.jsx)("p",{children:r})]})},e)}))})]})},w=t(960),y=t(382),k=function(n){var e=n.medicines,t=(0,w.j)().addToCart,r=(0,o.useState)([]),i=(0,a.Z)(r,2),s=i[0],u=i[1];return(0,j.jsx)("div",{style:{height:"80vh",overflowY:"scroll"},children:(0,j.jsx)("ul",{children:e.map((function(n){return(0,j.jsxs)(y.EF,{children:[(0,j.jsx)(y.Dx,{children:n.title}),(0,j.jsx)(y.xv,{children:n.description}),(0,j.jsxs)(y.tA,{children:["$",n.price]}),(0,j.jsx)(y.zx,{onClick:function(){return function(n){t(n),u([].concat((0,c.Z)(s),[n._id]))}(n)},disabled:s.includes(n._id),children:s.includes(n._id)?"Already in cart":"Add to cart"})]},n._id)}))})})},_=function(){var n=(0,o.useState)(!1),e=(0,a.Z)(n,2),t=e[0],r=e[1],i=(0,o.useState)([]),s=(0,a.Z)(i,2),u=s[0],d=s[1],l=(0,o.useState)([]),h=(0,a.Z)(l,2),m=h[0],g=h[1],Z=(0,o.useState)([]),v=(0,a.Z)(Z,2),w=v[0],y=v[1],_=(0,o.useState)(""),S=(0,a.Z)(_,2),P=S[0],A=S[1];return(0,o.useEffect)((function(){r(!0),f().then((function(n){d(n)})).catch((function(n){A(n.message)})),x().then((function(n){g(n)})).catch((function(n){A(n.message)})).finally((function(){r(!1)}))}),[]),(0,j.jsxs)("div",{style:{display:"flex"},children:[t&&(0,j.jsx)(p.Z,{}),(0,j.jsx)("div",{style:{flex:"0 0 30%",marginRight:"20px"},children:(0,j.jsx)(b,{pharmacies:u})}),(0,j.jsx)("div",{style:{flex:"1"},children:(0,j.jsx)(k,{medicines:m,addToCart:function(n){var e=m.find((function(e){return e._id===n}));e?y([].concat((0,c.Z)(w),[e])):console.error("Medicine with id ".concat(n," not found"))}})}),P&&(0,j.jsxs)("p",{style:{textAlign:"center",margin:"auto"},children:["Sorry. ",P," \ud83d\ude2d"]})]})}}}]);
//# sourceMappingURL=645.be51ce63.chunk.js.map