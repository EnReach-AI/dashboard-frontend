(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{97154:function(e,r,t){Promise.resolve().then(t.bind(t,19242))},59951:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(49755),o=function(e){return(e+1)%1e6};function s(e,r){return"function"==typeof e?e.length?e(r):e():e}function a(e,r,t){void 0===e&&(e=0),void 0===r&&(r=null),void 0===t&&(t=null);var a,i,u,c=s(e);"number"!=typeof c&&console.error("initialValue has to be a number, got "+typeof e),"number"==typeof t?c=Math.max(c,t):null!==t&&console.error("min has to be a number, got "+typeof t),"number"==typeof r?c=Math.min(c,r):null!==r&&console.error("max has to be a number, got "+typeof r);var l=(a=c,i=(0,n.useRef)(s(a)),u=(0,n.useReducer)(o,0)[1],(0,n.useMemo)(function(){return[function(){return i.current},function(e){i.current=s(e,i.current),u()}]},[])),f=l[0],m=l[1];return[f(),(0,n.useMemo)(function(){var e=function(e){var n=f(),o=s(e,n);n!==o&&("number"==typeof t&&(o=Math.max(o,t)),"number"==typeof r&&(o=Math.min(o,r)),n!==o&&m(o))};return{get:f,set:e,inc:function(r){void 0===r&&(r=1);var t=s(r,f());"number"!=typeof t&&console.error("delta has to be a number or function returning a number, got "+typeof t),e(function(e){return e+t})},dec:function(r){void 0===r&&(r=1);var t=s(r,f());"number"!=typeof t&&console.error("delta has to be a number or function returning a number, got "+typeof t),e(function(e){return e-t})},reset:function(r){void 0===r&&(r=c);var t=s(r,f());"number"!=typeof t&&console.error("value has to be a number or function returning a number, got "+typeof t),c=t,e(t)}}},[c,t,r])]}},3762:function(e,r,t){"use strict";var n=t(49755);r.Z=function(e,r){var t=(0,n.useRef)(function(){});(0,n.useEffect)(function(){t.current=e}),(0,n.useEffect)(function(){if(null!==r){var e=setInterval(function(){return t.current()},r||0);return function(){return clearInterval(e)}}},[r])}},19242:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return y}});var n=t(81210),o=t(27767),s=t(36689),a=t(13882),i=t(2793),u=t(74572),c=t(47608),l=t(52897),f=t(83332),m=t(85444),d=t(17528),x=t(95258),h=t(49755),g=t(54957),p=t(59951),v=t(3762),b=t(63568);function y(){let e=(0,x.useSearchParams)(),r=(0,b.Eu)(),[t,y]=(0,h.useState)(""),[w,j]=(0,h.useState)(""),[E,P]=(0,h.useState)(""),[N,S]=(0,h.useState)(e.get("referral")||""),[C,R]=(0,h.useState)(!1),[k,Z]=(0,g.Z)(!1),[D,M]=(0,p.Z)(60,60,0);(0,v.Z)(()=>M.dec(1),1e3);let[V,I]=(0,h.useState)(""),_=(0,x.useRouter)(),A=(0,h.useRef)(),{mutate:F,isPending:L}=(0,d.D)({onError:c.rV,mutationFn:async e=>{if(e.preventDefault(),!t||!w||!E)throw Error("Please enter email or password");if(w!==E)throw Error("Please confirm password");if(!N)throw Error("Please enter referral code");if(!k)throw Error("Plase checked Term of Service and Privacy Policy");A.current=await u.Z.registerApi({email:t,password:w,referralCode:N}),M.reset(60),R(!0)}}),{mutate:U,isPending:O}=(0,d.D)({onError:c.rV,mutationFn:async()=>{if(!V||!0!==(0,l.jg)(V))throw Error("Please enter verify code");if(!A.current)throw Error("Please sign up");let e=await u.Z.verifyRegisterCode(A.current.userId,V);if(e&&e.token)r.setUser(e);else{let e=await u.Z.loginApi({email:t,password:w});e.token?r.setUser(e):_.push("/signin")}}}),{mutate:T,isPending:$}=(0,d.D)({onError:c.rV,mutationFn:async e=>{if(e.preventDefault(),!A.current)throw Error("Please sign up");await u.Z.resendRegisterVerifyCode(A.current.userId),M.reset(60)}}),z=O||!0!==(0,l.jg)(V),G=L||!k||!0!==(0,l.tx)(N)||!0!==(0,l.oH)(t)||!0!==(0,l.uo)(w)||!0!==(0,l.S$)(E,w),H=D>0||$;return(0,n.jsxs)("div",{className:"mx-auto p-5 min-h-full flex flex-col gap-5 items-center w-full max-w-[25rem]",children:[(0,n.jsx)("img",{src:"logo.svg",alt:"Logo",className:"mt-auto h-[79px]"}),C?(0,n.jsxs)("div",{className:"flex flex-col items-center gap-5 w-full mb-auto",children:[(0,n.jsxs)("div",{className:"text-center whitespace-nowrap",children:["Verify your email",(0,n.jsx)("br",{}),"Enter the 6-digit verification code we sent to your inbox below:"]}),(0,n.jsx)(s.Fx,{onChange:I}),(0,n.jsx)(o.un,{className:"w-full",onClick:U,isDisabled:z,isLoading:O,children:"Verify Email"}),(0,n.jsxs)(a.g,{className:"text-xs -mt-1 flex items-center gap-2",onClick:T,isDisable:H,children:[$&&(0,n.jsx)(f.c,{size:"sm"}),D>0?"Resend Email (".concat(D,"s)"):"Resend Email"]})]}):(0,n.jsxs)("form",{onSubmit:F,className:"flex flex-col gap-5 w-full mb-auto",children:[(0,n.jsx)(s.j7,{setEmail:y}),(0,n.jsx)(s.CM,{setPassword:j}),(0,n.jsx)(s.CM,{label:"Confirm Password",setPassword:P,validate:e=>(0,l.S$)(e,w)}),(0,n.jsx)(s.e9,{value:N,setReferalCode:S}),(0,n.jsxs)(m.K,{classNames:{label:"text-xs text-white/60",icon:"w-[9px] h-[10px]"},checked:k,onValueChange:Z,children:["I agree to the EnReach.AI"," ",(0,n.jsx)(a.g,{className:"text-xs",href:"/terms",children:"Term of Service"})," ","and"," ",(0,n.jsx)(a.g,{className:"text-xs",href:"/privacy",children:"Privacy Policy"}),"."]}),(0,n.jsx)(o.un,{type:"submit",isDisabled:G,isLoading:L,children:"Sign Up"}),(0,n.jsx)(i.e,{btn:"Sign up with Google",defReferralCode:N}),(0,n.jsxs)("div",{className:"text-center text-xs text-white/60",children:["Already have an account?"," ",(0,n.jsx)(a.g,{href:"/signin",className:"text-xs",children:"Sign In"})]})]})]})}}},function(e){e.O(0,[495,825,242,720,862,510,406,110,566,444,805,359,403,331,744],function(){return e(e.s=97154)}),_N_E=e.O()}]);