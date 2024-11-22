(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[966],{97154:function(e,r,t){Promise.resolve().then(t.bind(t,19242))},59951:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(49755),o=function(e){return(e+1)%1e6};function s(e,r){return"function"==typeof e?e.length?e(r):e():e}function a(e,r,t){void 0===e&&(e=0),void 0===r&&(r=null),void 0===t&&(t=null);var a,i,u,c=s(e);"number"!=typeof c&&console.error("initialValue has to be a number, got "+typeof e),"number"==typeof t?c=Math.max(c,t):null!==t&&console.error("min has to be a number, got "+typeof t),"number"==typeof r?c=Math.min(c,r):null!==r&&console.error("max has to be a number, got "+typeof r);var l=(a=c,i=(0,n.useRef)(s(a)),u=(0,n.useReducer)(o,0)[1],(0,n.useMemo)(function(){return[function(){return i.current},function(e){i.current=s(e,i.current),u()}]},[])),f=l[0],m=l[1];return[f(),(0,n.useMemo)(function(){var e=function(e){var n=f(),o=s(e,n);n!==o&&("number"==typeof t&&(o=Math.max(o,t)),"number"==typeof r&&(o=Math.min(o,r)),n!==o&&m(o))};return{get:f,set:e,inc:function(r){void 0===r&&(r=1);var t=s(r,f());"number"!=typeof t&&console.error("delta has to be a number or function returning a number, got "+typeof t),e(function(e){return e+t})},dec:function(r){void 0===r&&(r=1);var t=s(r,f());"number"!=typeof t&&console.error("delta has to be a number or function returning a number, got "+typeof t),e(function(e){return e-t})},reset:function(r){void 0===r&&(r=c);var t=s(r,f());"number"!=typeof t&&console.error("value has to be a number or function returning a number, got "+typeof t),c=t,e(t)}}},[c,t,r])]}},3762:function(e,r,t){"use strict";var n=t(49755);r.Z=function(e,r){var t=(0,n.useRef)(function(){});(0,n.useEffect)(function(){t.current=e}),(0,n.useEffect)(function(){if(null!==r){var e=setInterval(function(){return t.current()},r||0);return function(){return clearInterval(e)}}},[r])}},19242:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(81210),o=t(27767),s=t(36689),a=t(13882),i=t(2793),u=t(74572),c=t(47608),l=t(52897),f=t(85444),m=t(17528),d=t(95258),h=t(49755),x=t(54957),g=t(59951),v=t(3762);function b(){let e=(0,d.useSearchParams)(),[r,t]=(0,h.useState)(""),[b,p]=(0,h.useState)(""),[y,w]=(0,h.useState)(""),[j,E]=(0,h.useState)(e.get("referral")||""),[P,N]=(0,h.useState)(!1),[S,C]=(0,x.Z)(!1),[R,k]=(0,g.Z)(60,60,0);(0,v.Z)(()=>k.dec(1),1e3);let[D,M]=(0,h.useState)(""),V=(0,d.useRouter)(),Z=(0,h.useRef)(),{mutate:I,isPending:_}=(0,m.D)({onError:c.rV,mutationFn:async e=>{if(e.preventDefault(),!r||!b||!y)throw Error("Please enter email or password");if(b!==y)throw Error("Please confirm password");if(!j)throw Error("Please enter referral code");if(!S)throw Error("Plase checked Term of Service and Privacy Policy");Z.current=await u.Z.registerApi({email:r,password:b,referralCode:j}),k.reset(60),N(!0)}}),{mutate:F,isPending:A}=(0,m.D)({onError:c.rV,mutationFn:async()=>{if(!D||!0!==(0,l.jg)(D))throw Error("Please enter verify code");if(!Z.current)throw Error("Please sign up");await u.Z.verifyRegisterCode(Z.current.userId,D),V.push("/signin")}}),{mutate:L,isPending:O}=(0,m.D)({onError:c.rV,mutationFn:async e=>{if(e.preventDefault(),!Z.current)throw Error("Please sign up");await u.Z.resendRegisterVerifyCode(Z.current.userId),k.reset(60)}}),T=A||!0!==(0,l.jg)(D),$=_||!S||!0!==(0,l.tx)(j)||!0!==(0,l.oH)(r)||!0!==(0,l.uo)(b)||!0!==(0,l.S$)(y,b);return(0,l.tx)(j),(0,n.jsxs)("div",{className:"mx-auto p-5 min-h-full flex flex-col gap-5 items-center w-full max-w-[25rem]",children:[(0,n.jsx)("img",{src:"logo.svg",alt:"Logo",className:"mt-auto h-[79px]"}),P?(0,n.jsxs)("div",{className:"flex flex-col items-center gap-5 w-full mb-auto",children:[(0,n.jsxs)("div",{className:"text-center whitespace-nowrap",children:["Verify your email",(0,n.jsx)("br",{}),"Enter the 6-digit verification code we sent to your inbox below:"]}),(0,n.jsx)(s.Fx,{onChange:M}),(0,n.jsx)(o.un,{className:"w-full",onClick:F,isDisabled:T,isLoading:A,children:"Verify Email"}),(0,n.jsx)(a.g,{className:"text-xs -mt-1",onClick:L,isDisable:R>0||O,children:R>0?"Resend Email (".concat(R,"s)"):"Resend Email"})]}):(0,n.jsxs)("form",{onSubmit:I,className:"flex flex-col gap-5 w-full mb-auto",children:[(0,n.jsx)(s.j7,{setEmail:t}),(0,n.jsx)(s.CM,{setPassword:p}),(0,n.jsx)(s.CM,{label:"Confirm Password",setPassword:w,validate:e=>(0,l.S$)(e,b)}),(0,n.jsx)(s.e9,{value:j,setReferalCode:E}),(0,n.jsxs)(f.K,{classNames:{label:"text-xs text-white/60",icon:"w-[9px] h-[10px]"},checked:S,onValueChange:C,children:["I agree to the EnReach.AI"," ",(0,n.jsx)(a.g,{className:"text-xs",href:"/terms",children:"Term of Service"})," ","and"," ",(0,n.jsx)(a.g,{className:"text-xs",href:"/privacy",children:"Privacy Policy"}),"."]}),(0,n.jsx)(o.un,{type:"submit",isDisabled:$,isLoading:_,children:"Sign Up"}),(0,n.jsx)(i.e,{btn:"Sign up with Google",defReferralCode:j}),(0,n.jsxs)("div",{className:"text-center text-xs text-white/60",children:["Already have an account?"," ",(0,n.jsx)(a.g,{href:"/signin",className:"text-xs",children:"Sign In"})]})]})]})}}},function(e){e.O(0,[825,242,720,862,510,406,110,566,444,805,359,403,331,744],function(){return e(e.s=97154)}),_N_E=e.O()}]);