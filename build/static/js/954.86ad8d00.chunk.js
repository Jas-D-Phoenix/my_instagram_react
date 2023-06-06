"use strict";(self.webpackChunkinstagram=self.webpackChunkinstagram||[]).push([[954,376],{954:function(e,s,t){t.r(s);var a=t(9439),r=t(2791),l=t(1570),n=t(3504),c=(t(3376),t(8155)),i=t(184);s.default=function(){var e=(0,r.useState)(""),s=(0,a.Z)(e,2),t=s[0],o=s[1],d=(0,r.useState)(""),m=(0,a.Z)(d,2),u=m[0],x=m[1],f=""===t.trim();return(0,r.useEffect)((function(){document.title="Forgot Password - Instagram"}),[]),(0,i.jsx)("div",{className:"h-screen w-screen flex flex-wrap items-center justify-center p-3",children:(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsxs)("div",{className:"border-[1px] border-black rounded p-4 w-80 p-3",children:[(0,i.jsx)("div",{className:"w-full",children:(0,i.jsx)("img",{src:"/images/instatext.png",className:"mt-2 max-w-[8rem] mx-auto my-2",alt:"instagram"})}),(0,i.jsx)("div",{className:"flex items-center my-3 w-full",children:(0,i.jsx)("div",{className:"border-black h-0 w-full"})}),u&&(0,i.jsx)("p",{className:"mb-4 text-xs text-red-500",children:u}),(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var s=(0,l.v0)();(0,l.LS)(s,t).then((function(){alert("Password reset email sent!")})).catch((function(e){x("".concat(e.code," ").concat(e.message))}))},className:"",method:"post",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"mb-2 block",children:"Email"}),(0,i.jsx)("input",{type:"text","aria-label":"Enter your email address",placeholder:"Enter Your Email",className:"text-xs p-3 mb-3 outline-none border-[1px] rounded bg-white w-full border-black",value:t,onChange:function(e){return o(e.target.value)}})]}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{disabled:f,type:"submit",className:"bg-blue-500  mt-4 cursor-pointer text-white rounded-2xl w-full h-8 font-bold ".concat(f&&"opacity-50"),children:"Reset Password"})}),(0,i.jsx)("div",{className:"flex justify-center items-center flex-col border-t-0 w-full p-4 ",children:(0,i.jsx)("p",{className:"text-sm",children:(0,i.jsx)(n.rU,{to:c.ym,className:"font-semibold text-blue-500",children:"Back to Login"})})})]})]})})})}},3376:function(e,s,t){t.r(s);var a=t(4165),r=t(5861),l=t(9439),n=t(2791),c=t(6871),i=t(3504),o=t(2303),d=(t(2517),t(8155)),m=t(184);s.default=function(){var e=(0,n.useContext)(o.Z).firebase,s=(0,c.s0)(),t=(0,n.useState)(""),u=(0,l.Z)(t,2),x=u[0],f=u[1],b=(0,n.useState)(""),h=(0,l.Z)(b,2),p=h[0],j=h[1],v=(0,n.useState)(""),w=(0,l.Z)(v,2),g=w[0],N=w[1],y=""===p||""===x,k=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,e.auth().signInWithEmailAndPassword(x,p);case 4:s(d.Sd),t.next=12;break;case 7:t.prev=7,t.t0=t.catch(1),f(""),j(""),N(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){document.title="Login - Instagram"}),[]),(0,m.jsx)("div",{className:"h-screen w-screen flex flex-wrap items-center justify-center p-3",children:(0,m.jsxs)("div",{className:"flex space-x-5 items-center",children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"/images/homebg.png",alt:"home bg",className:"max-w-[25rem] w-full"})}),(0,m.jsx)("div",{className:"flex flex-col",children:(0,m.jsxs)("div",{className:"border-[1px] border-black rounded p-3 mb-10 w-80",children:[(0,m.jsx)("div",{className:"w-full mb-5",children:(0,m.jsx)("img",{src:"/images/instatext.png",alt:"instalogo",className:"max-w-[9rem] block mx-auto"})}),g&&(0,m.jsx)("p",{className:"mb-4 text-xs text-red-500",children:g}),(0,m.jsxs)("form",{onSubmit:k,className:"mt-3",method:"post",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"mb-1 block",children:"Email account"}),(0,m.jsx)("input",{type:"text","aria-label":"Your email address",placeholder:"Your email account",className:"text-xs p-3 mb-3 border-[1px] border-gray-400 outline-none rounded bg-white w-full border-black",value:x,onChange:function(e){return f(e.target.value)}})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{className:"mb-1 block",children:"Password"}),(0,m.jsx)("input",{type:"password","aria-label":"Your password",placeholder:"Password",className:"text-xs p-3 mb-3 border-[1px] border-gray-400 outline-none rounded bg-white w-full border-black",value:p,onChange:function(e){return j(e.target.value)}})]}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{disabled:y,type:"submit",className:"bg-blue-500  mt-3 cursor-pointer text-white rounded-2xl w-full h-8 font-bold \n                  ".concat(y&&"opacity-50"),children:"Log In"})}),(0,m.jsx)("div",{className:"text-center mt-3 ",children:"------------ OR ------------"}),(0,m.jsx)("div",{className:"text-center mt-3 ",children:(0,m.jsx)(i.rU,{to:d.aL,className:"text-blue-500 font-semibold text-center w-full text-x font-thin my-3",children:"Forgot password?"})}),(0,m.jsx)("div",{className:"flex justify-center items-center flex-col w-full p-4",children:(0,m.jsxs)("p",{className:"text-sm",children:["Don't have an account?",(0,m.jsx)(i.rU,{to:d._5,className:"font-semibold ml-2 text-blue-500",children:"Sign up"})]})})]})]})})]})})}},2517:function(){}}]);
//# sourceMappingURL=954.86ad8d00.chunk.js.map