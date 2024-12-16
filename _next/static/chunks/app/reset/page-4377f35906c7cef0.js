(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[0],{55013:function(e,t,n){Promise.resolve().then(n.bind(n,18310))},59951:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(49755),a=function(e){return(e+1)%1e6};function o(e,t){return"function"==typeof e?e.length?e(t):e():e}function s(e,t,n){void 0===e&&(e=0),void 0===t&&(t=null),void 0===n&&(n=null);var s,u,i,l=o(e);"number"!=typeof l&&console.error("initialValue has to be a number, got "+typeof e),"number"==typeof n?l=Math.max(l,n):null!==n&&console.error("min has to be a number, got "+typeof n),"number"==typeof t?l=Math.min(l,t):null!==t&&console.error("max has to be a number, got "+typeof t);var c=(s=l,u=(0,r.useRef)(o(s)),i=(0,r.useReducer)(a,0)[1],(0,r.useMemo)(function(){return[function(){return u.current},function(e){u.current=o(e,u.current),i()}]},[])),d=c[0],f=c[1];return[d(),(0,r.useMemo)(function(){var e=function(e){var r=d(),a=o(e,r);r!==a&&("number"==typeof n&&(a=Math.max(a,n)),"number"==typeof t&&(a=Math.min(a,t)),r!==a&&f(a))};return{get:d,set:e,inc:function(t){void 0===t&&(t=1);var n=o(t,d());"number"!=typeof n&&console.error("delta has to be a number or function returning a number, got "+typeof n),e(function(e){return e+n})},dec:function(t){void 0===t&&(t=1);var n=o(t,d());"number"!=typeof n&&console.error("delta has to be a number or function returning a number, got "+typeof n),e(function(e){return e-n})},reset:function(t){void 0===t&&(t=l);var n=o(t,d());"number"!=typeof n&&console.error("value has to be a number or function returning a number, got "+typeof n),l=n,e(n)}}},[l,n,t])]}},3762:function(e,t,n){"use strict";var r=n(49755);t.Z=function(e,t){var n=(0,r.useRef)(function(){});(0,r.useEffect)(function(){n.current=e}),(0,r.useEffect)(function(){if(null!==t){var e=setInterval(function(){return n.current()},t||0);return function(){return clearInterval(e)}}},[t])}},53179:function(e,t,n){"use strict";n.d(t,{Vo:function(){return d},Ho:function(){return p},Eu:function(){return g}});var r=n(81210),a=n(74572),o=n(36957);let s={beta:"EnreachExt_beta",staging:"EnreachExt_staging",prod:"EnreachExt"};function u(){return window[s[o.Vi]]}var i=n(76114),l=n(95258),c=n(49755);let d=(0,c.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),f="last-login-user",m=()=>{try{let e=localStorage.getItem(f);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},p=e=>{let{children:t}=e,n=(0,c.useRef)(!1),o=(0,l.useRouter)(),[s,p]=(0,c.useState)(m()),g=e=>{var t,r;e?(n.current=!1,p(e),localStorage.setItem(f,JSON.stringify(e)),e.token&&(null===(r=u())||void 0===r||r.request({name:"setAccessToken",body:e.token}).catch(console.error)),o.push("/")):(n.current=!0,p(null),localStorage.removeItem(f),null===(t=u())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),o.push("/signin"))},h=()=>{g()};(0,c.useEffect)(()=>{let e;return s&&s.token&&(e=setInterval(()=>{let e=u();if(!e){console.warn("Extension not installed");return}e.request({name:"getStat"}).then(e=>{e.logined||(console.info("sync logout from ext"),h())}).catch(console.error)},1e3)),()=>clearInterval(e)},[s]);let v=async e=>{try{if(!e.email||!e.password)return;let t=await a.Z.loginApi(e);g(t),a.Z.setAuth()}catch(e){throw console.error(e),e}};a.Z.setAuth(null==s?void 0:s.token);let b=(0,i.a)({queryKey:["QueryUserInfo",null==s?void 0:s.token],enabled:!!(null==s?void 0:s.token),queryFn:()=>a.Z.userInfo()});return(0,r.jsx)(d.Provider,{value:{user:s,login:v,logout:h,setUser:g,queryUserInfo:b},children:t})},g=()=>(0,c.useContext)(d)},18310:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(81210),a=n(27767),o=n(36689),s=n(74572),u=n(47608),i=n(52897),l=n(17528),c=n(95258),d=n(49755),f=n(59951),m=n(3762),p=n(36062),g=n(53179),h=n(53573);function v(){let e=(0,c.useSearchParams)(),[t,n]=(0,d.useState)(e.get("email")||""),[v,b]=(0,d.useState)(""),[w,x]=(0,d.useState)(""),[y,P]=(0,d.useState)(""),[j,N]=(0,f.Z)(0,60,0);(0,m.Z)(()=>{N.dec(1)},1e3);let A=(0,c.useRouter)(),k=(0,g.Eu)(),{mutate:C,isPending:E}=(0,l.D)({onError:u.rV,mutationFn:async e=>{if(e.preventDefault(),!t)throw Error("Please enter email");if(!v||!w)throw Error("Please enter email or password");if(v!==w)throw Error("Please confirm password");if(!y)throw Error("Please enter verify code");await s.Z.resetPassword({email:t,password:v,verifyCode:y}),p.Am.success("Reset Password Success!"),k.logout(),await (0,u._v)(2e3),A.push("/signin")}}),{mutate:R,isPending:I,isIdle:S}=(0,l.D)({onError:u.rV,mutationFn:async()=>{if(!t)throw Error("Please enter email");await s.Z.sendResetPassword(t),N.reset(60)}}),_=E||!0!==(0,i.jg)(y)||!0!==(0,i.oH)(t)||!0!==(0,i.uo)(v)||!0!==(0,i.S$)(w,v),Z=I||j>0||!0!==(0,i.oH)(t);return(0,r.jsxs)(h.z,{className:"mx-auto p-5 min-h-full flex flex-col gap-5 items-center w-full max-w-[25rem]",children:[(0,r.jsx)("img",{src:"logo.svg",alt:"Logo",className:"flip_item mt-auto h-[4.9375rem]"}),(0,r.jsxs)("form",{onSubmit:C,className:"flex flex-col gap-5 w-full mb-auto",children:[(0,r.jsx)(o.j7,{value:t,setEmail:n}),(0,r.jsx)(o.CM,{label:"New Password",setPassword:b}),(0,r.jsx)(o.CM,{label:"Confirm Password",setPassword:x,validate:e=>(0,i.S$)(e,v)}),(0,r.jsxs)("div",{className:"flex gap-5",children:[(0,r.jsx)(o.Iv,{setVerifyCode:P}),(0,r.jsx)(a.un,{type:"button",isDisabled:Z,isLoading:I,onClick:R,children:I?"":S?"Send":j>0?"".concat(j,"s"):"Resend"})]}),(0,r.jsx)(a.un,{type:"submit",isDisabled:_,isLoading:E,children:"Reset Password"})]})]})}},53573:function(e,t,n){"use strict";n.d(t,{z:function(){return u}});var r=n(81210),a=n(97572),o=n(64558),s=n(49755);function u(e){let t=(0,s.useRef)(null);return(0,a.V)(()=>{o.ZP.set(".flip_item",{alpha:0}),o.ZP.to(".flip_item",{alpha:1,yPercent:0,stagger:.1,duration:.5,ease:"back.out",startAt:{alpha:0,yPercent:30}})},{scope:t}),(0,r.jsx)("div",{className:e.className,ref:t,children:e.children})}o.ZP.registerPlugin(a.V)},27767:function(e,t,n){"use strict";n.d(t,{a5:function(){return l},uU:function(){return i},un:function(){return u}});var r=n(81210),a=n(11013),o=n(41551),s=n(62365);function u(e){let{children:t,className:n,...s}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("flip_item h-[2.625rem] hover:bg-default","default"==s.color?"hover:bg-l1":"",n),...s,children:t})}function i(e){let{children:t,className:n,...s}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("flip_item h-[2.625rem] bg-l1 shadow-1 backdrop-blur-lg hover:bg-primary",n),...s,children:t})}function l(e){let{children:t,className:n,tip:u,...i}=e;return(0,r.jsx)(s.S,{content:u,children:(0,r.jsx)(a.A,{color:"primary",className:(0,o.cn)("flip_item h-8 w-8 min-w-8 max-w-8 rounded-full p-0 hover:bg-default",n),...i,children:t})})}},74568:function(e,t,n){"use strict";n.d(t,{Ie:function(){return u},Ih:function(){return s},if:function(){return i}});var r=n(13910),a=n.n(r),o=n(28853);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=a().toNumber(e);return n?(0,o.Z)(n).format({mantissa:2,trimMantissa:!0,average:n>=1e3}).toUpperCase():t}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",n=a().toNumber(e),r=n?Math.min(a().round(100*n/10),100):0;return n?r<33.33?"Poor":r<66.66?"Good":"Superb":t}function i(e){return Math.max(a().round(a().toNumber(e||"1"),1),1)}},36689:function(e,t,n){"use strict";n.d(t,{CM:function(){return d},Fx:function(){return g},Iv:function(){return p},e9:function(){return m},j7:function(){return f}});var r=n(81210),a=n(52897),o=n(37018),s=n(84824),u=n(54957),i=n(29060),l=n.n(i);let c={inputWrapper:"flip_item h-[2.625rem] rounded-lg bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",label:"text-xs",input:"text-xs !text-white"};function d(e){let{setPassword:t,label:n,error:i,validate:l=a.uo}=e,[d,f]=(0,u.Z)(!1);return(0,r.jsx)(o.Y,{isRequired:!0,classNames:c,type:d?"text":"password",placeholder:n||"Password",labelPlacement:"inside",variant:"bordered",validate:l,endContent:(0,r.jsx)("button",{className:"focus:outline-none h-full",type:"button",onClick:()=>f(),"aria-label":"toggle password visibility",children:d?(0,r.jsx)(s.VhL,{className:"text-xs text-default-400 pointer-events-none"}):(0,r.jsx)(s.nO8,{className:"text-xs text-default-400 pointer-events-none"})}),errorMessage:i,onChange:e=>t(e.target.value)})}function f(e){let{setEmail:t,value:n}=e;return(0,r.jsx)(o.Y,{value:n,classNames:c,type:"email",placeholder:"Email",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.oH,onChange:e=>t(e.target.value)})}function m(e){let{setReferalCode:t,value:n}=e;return(0,r.jsx)(o.Y,{value:n,classNames:c,type:"text",placeholder:"Referral code (optional)",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.tx,onChange:e=>t(e.target.value)})}function p(e){let{setVerifyCode:t}=e;return(0,r.jsx)(o.Y,{classNames:c,type:"text",placeholder:"Verification Code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.jg,onChange:e=>t(e.target.value)})}function g(e){let{onComplete:t,onChange:n}=e;return(0,r.jsx)(l(),{placeholder:"",onChange:n,onComplete:t,classNames:{container:"flip_item w-full justify-between h-[2.625rem] ",character:"rounded-lg max-w-[2.625rem]  w-[2.625rem] bg-l1 bg-transparent backdrop-blur-lg shadow-1 text-white text-xl leading-[2.625rem] uppercase"}})}},62365:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});var r=n(81210),a=n(62216),o=n(47048);function s(e){let{content:t,children:n}=e;return(0,r.jsx)(a.e,{showArrow:!1,content:t,color:"default",className:" min-h-9 min-w-[4.5rem] max-w-[12.5rem]",classNames:{content:"bg-[#40414F] border border-solid border-[rgba(255,255,255,0.1)] min-h-9 min-w-[4.5rem] text-xs"},children:n||(0,r.jsx)("button",{className:"outline-none border-none",children:(0,r.jsx)(o.nj5,{})})})}},74572:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var r=n(80957),a=n(36957),o=n(13910),s=n.n(o),u=n(74568);let i={beta:"https://dev-api.enreach.network/api",staging:"https://staging-api-1.enreach.network/api",prod:"https://api.enreach.network/api"}[a.Vi],l=r.default.create({baseURL:i,headers:{"Content-Type":"application/json"}}),c={setAuth:e=>{e?l.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete l.defaults.headers.common.Authorization},loginApi:async e=>{let t=await l.post("/user/signIn",e);return c.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await l.post("/user/google/signIn",e);return c.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await l.post("/user/referral/by",e);return c.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await l.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await l.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await l.post("/user/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await l.post("/user/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>{let e=await l.get("/user/profile"),t=e.data.data.point;return s().keys(t).forEach(e=>{t[e]=s().toNumber(t[e])}),t.total=(0,u.if)(e.data.data.stat.extraBoost)*t.total,e.data.data},sendResetPassword:async e=>(await l.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await l.post("/user/password/reset",e),!0),userUpdate:async e=>(await l.post("/user/profile/update",e),!0),userReward:async()=>(await l.get("/user/reward")).data.data,nodeList:async()=>(await l.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await l.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await l.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await r.default.get("https://api.bigdatacloud.net/data/client-ip")).data,updateNodeName:async(e,t)=>(await l.post("/node/rename/".concat(e.connectionId,"/").concat(encodeURIComponent(e.ipAddress),"/").concat(encodeURIComponent(t))),!0)};t.Z=c},36957:function(e,t,n){"use strict";n.d(t,{Vi:function(){return r},u1:function(){return a}}),n(45303).env.NEXT_PUBLIC_BASE_PATH;let r="beta",a=""},47608:function(e,t,n){"use strict";n.d(t,{G$:function(){return p},N3:function(){return d},Q1:function(){return h},Y:function(){return g},_v:function(){return m},rV:function(){return f}});var r=n(36062),a=n(28672),o=n.n(a),s=n(85542),u=n.n(s),i=n(94782),l=n(13910),c=n.n(l);function d(e){return e.toLowerCase().replaceAll(" ","_")}function f(e){var t,n;let a;r.Am.error(c().upperFirst((a="Unkown","string"==typeof e?a=e:e instanceof i.d7?a=(null===(n=e.response)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.message)||e.message:"string"==typeof(null==e?void 0:e.msg)?a=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(a=null==e?void 0:e.message),a).trim()))}function m(e){return new Promise(t=>setTimeout(t,e))}function p(e,t){return o()(e).format(t)}function g(e,t){return o().duration(e).format(t)}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;return c().round(e/t,4)+"rem"}o().extend(u())},52897:function(e,t,n){"use strict";function r(e){return e?!!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e)||"Please enter a vaild email !":null}function a(e){return e?!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/.test(e)||"Your password must be at least 8 characters long and include: at least one uppercase letter, one lowercase letter, and one number. Special characters (@$!%*?&) are allowed.":null}function o(e,t){return e&&t?e===t||"Passwords do not match!":null}function s(e){return e?6==e.length||"Invalid referral code!":null}function u(e){return e?6==e.length||"Invalid verification code":null}n.d(t,{S$:function(){return o},jg:function(){return u},oH:function(){return r},tx:function(){return s},uo:function(){return a}})}},function(e){e.O(0,[495,863,825,242,364,510,406,463,403,331,744],function(){return e(e.s=55013)}),_N_E=e.O()}]);