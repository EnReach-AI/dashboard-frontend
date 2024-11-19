"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{63568:function(e,t,n){n.d(t,{Vo:function(){return c},Ho:function(){return f},Eu:function(){return x}});var r=n(81210),a=n(93271);function s(){return window.EnReachAI}var o=n(76114),l=n(95258),i=n(49755);let c=(0,i.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),u="last-login-user",d=()=>{try{let e=localStorage.getItem(u);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},f=e=>{let{children:t}=e,n=(0,l.useRouter)(),[f,x]=(0,i.useState)(d()),p=e=>{var t,r;e?(x(e),localStorage.setItem(u,JSON.stringify(e)),e.token&&(null===(r=s())||void 0===r||r.request({name:"setAccessToken",body:e.token}).catch(console.error)),n.push("/")):(x(null),localStorage.removeItem(u),null===(t=s())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),n.push("/signin"))};(0,i.useEffect)(()=>{let e;return f&&f.token&&(e=setInterval(()=>{let e=s();if(!e){console.warn("Extension not installed");return}e.request({name:"getUser"}).then(t=>{t&&"success"===t.status||e.request({name:"setAccessToken",body:f.token})})},1e3)),()=>clearInterval(e)},[f]);let h=async e=>{try{if(!e.email||!e.password)return;let t=await a.Z.loginApi(e);p(t),a.Z.setAuth()}catch(e){console.error(e)}},m=(0,o.a)({queryKey:["QueryUserInfo",null==f?void 0:f.token],enabled:!!(null==f?void 0:f.token),queryFn:async()=>(a.Z.setAuth(null==f?void 0:f.token),a.Z.userInfo())});return(0,r.jsx)(c.Provider,{value:{user:f,login:h,logout:()=>{p()},setUser:p,queryUserInfo:m},children:t})},x=()=>(0,i.useContext)(c)},62985:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(81210),a=n(27767),s=n(77422),o=n(36689),l=n(93271),i=n(47608),c=n(44384),u=n(17528),d=n(49755),f=n(84200),x=n(54957),p=n(36062),h=n(63568),m=n(52897),g=n(13882);function w(){let[e,t]=(0,d.useState)(""),[n,w]=(0,d.useState)(""),[b,v]=(0,d.useState)(""),[y,j]=(0,x.Z)(!1),{login:k,setUser:N}=(0,d.useContext)(h.Vo),A=(0,d.useRef)(""),{mutate:C}=(0,u.D)({onError:i.rV,mutationFn:async e=>{A.current=e.access_token;let t=await l.Z.loginByGoogleApi({accessToken:e.access_token});t.token?N(t):j()}}),S=(0,c.Nq)({flow:"implicit",onError:e=>p.Am.error("".concat(e.error," : ").concat(e.error_description)),onSuccess:C}),{mutate:P,isPending:R}=(0,u.D)({onError:i.rV,mutationFn:async t=>{t.preventDefault(),await k({email:e,password:n})}}),{mutate:I,isPending:E}=(0,u.D)({onError:i.rV,mutationFn:async()=>{b&&!0===(0,m.tx)(b)&&A.current&&N(await l.Z.loginSetReferralApi({accessToken:A.current,referralCode:b}))}});return(0,r.jsxs)("div",{className:"mx-auto px-5 min-h-full flex flex-col gap-4 items-center w-full max-w-[25rem]",children:[(0,r.jsx)("img",{src:"logo.svg",alt:"Logo",className:"mt-auto h-[79px]"}),(0,r.jsxs)("form",{onSubmit:P,className:"flex flex-col gap-5 w-full",children:[(0,r.jsx)(o.j7,{setEmail:t}),(0,r.jsx)(o.CM,{setPassword:w}),(0,r.jsx)(a.un,{type:"submit",isLoading:R,children:"Sign In"}),(0,r.jsxs)(a.un,{type:"button",onClick:()=>S(),children:[(0,r.jsx)(f.JM8,{})," Sign in with Google"]})]}),(0,r.jsxs)("div",{className:"mb-auto flex items-center w-full text-xs text-white/60",children:["Don’t have an account?",(0,r.jsx)(g.g,{href:"/signup",className:"ml-2 text-xs",children:"Sign up"}),(0,r.jsx)(g.g,{href:"/reset",className:"ml-auto text-xs",children:"Forget password?"})]}),(0,r.jsxs)(s.m,{isOpen:y,children:[(0,r.jsx)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-base text-center text-white",children:"A Special Welcome"}),(0,r.jsxs)("p",{className:"self-stretch flex-grow-0 flex-shrink-0  text-sm text-center text-white/50",children:["New qualified users with a referral code enjoy ",(0,r.jsx)("span",{className:"text-white",children:"50 BERRY"})," rewards and EXPs for extra boost!"]}),(0,r.jsx)(o.Fx,{onChange:v}),(0,r.jsx)(a.un,{className:"w-full",onClick:()=>I(),isLoading:E,children:"Get Boosted"})]})]})}},27767:function(e,t,n){n.d(t,{a5:function(){return c},uU:function(){return i},un:function(){return l}});var r=n(81210),a=n(11013),s=n(41551),o=n(62365);function l(e){let{children:t,className:n,...o}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,s.cn)("h-[42px] hover:bg-default",n),...o,children:t})}function i(e){let{children:t,className:n,...o}=e;return(0,r.jsx)(a.A,{color:"primary",className:(0,s.cn)("h-[42px] bg-l1 shadow-1 backdrop-blur-lg hover:bg-primary",n),...o,children:t})}function c(e){let{children:t,className:n,tip:l,...i}=e;return(0,r.jsx)(o.S,{content:l,children:(0,r.jsx)(a.A,{color:"primary",className:(0,s.cn)("h-8 w-8 min-w-8 max-w-8 rounded-full p-0 hover:bg-default",n),...i,children:t})})}},77422:function(e,t,n){n.d(t,{C:function(){return u},m:function(){return c}});var r=n(81210),a=n(29906),s=n(12014),o=n(21585),l=n(10307),i=n(85947);function c(e){let{children:t,contentProps:n,bodyProps:l,...i}=e;return(0,r.jsx)(a.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...i,children:(0,r.jsx)(s.A,{className:"w-[360px] p-6 bg-m1 rounded-3xl",...n||{},children:(0,r.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...l||{},children:t})})})}function u(e){let{tit:t,children:n,contentProps:c,bodyProps:u,...d}=e;return(0,r.jsx)(a.R,{hideCloseButton:!0,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},...d,children:(0,r.jsx)(s.A,{className:"w-[500px] bg-m1 gap-6 p-6 rounded-3xl",...c||{},children:e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.k,{className:"justify-between p-0",children:[(0,r.jsx)("span",{className:"text-base font-bold text-left text-white",children:t}),(0,r.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,r.jsx)(i.q5L,{})})]}),(0,r.jsx)(o.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...u||{},children:n})]})})})}},36689:function(e,t,n){n.d(t,{CM:function(){return d},Fx:function(){return h},Iv:function(){return p},e9:function(){return x},j7:function(){return f}});var r=n(81210),a=n(52897),s=n(37018),o=n(84824),l=n(54957),i=n(29060),c=n.n(i);let u={inputWrapper:"h-[42px] rounded-lg bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",label:"text-xs",input:"text-xs"};function d(e){let{setPassword:t,label:n,error:i}=e,[c,d]=(0,l.Z)(!1);return(0,r.jsx)(s.Y,{isRequired:!0,classNames:u,type:c?"text":"password",placeholder:n||"Password",labelPlacement:"inside",variant:"bordered",validate:a.uo,endContent:(0,r.jsx)("button",{className:"focus:outline-none h-full",type:"button",onClick:()=>d(),"aria-label":"toggle password visibility",children:c?(0,r.jsx)(o.VhL,{className:"text-xs text-default-400 pointer-events-none"}):(0,r.jsx)(o.nO8,{className:"text-xs text-default-400 pointer-events-none"})}),errorMessage:i,onChange:e=>t(e.target.value)})}function f(e){let{setEmail:t}=e;return(0,r.jsx)(s.Y,{classNames:u,type:"email",placeholder:"Email",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.oH,onChange:e=>t(e.target.value)})}function x(e){let{setReferalCode:t}=e;return(0,r.jsx)(s.Y,{classNames:u,type:"text",placeholder:"Referral code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.tx,onChange:e=>t(e.target.value)})}function p(e){let{setVerifyCode:t}=e;return(0,r.jsx)(s.Y,{classNames:u,type:"text",placeholder:"Verification Code",labelPlacement:"inside",variant:"bordered",isRequired:!0,validate:a.jg,onChange:e=>t(e.target.value)})}function h(e){let{onComplete:t,onChange:n}=e;return(0,r.jsx)(c(),{placeholder:"",onChange:n,onComplete:t,classNames:{container:"w-full justify-between h-[42px] ",character:"rounded-lg max-w-[42px]  w-[42px] bg-l1 bg-transparent backdrop-blur-lg shadow-1 text-white text-xl leading-[42px] uppercase"}})}},13882:function(e,t,n){n.d(t,{g:function(){return o}});var r=n(81210),a=n(41551),s=n(36805);function o(e){let{children:t,className:n,onClick:o,isDisable:l,href:i="javascript:void(0);",...c}=e;return(0,r.jsx)(s.default,{href:i,onClick:e=>{l||null==o||o(e)},className:(0,a.cn)("underline text-white/60 hover:text-primary cursor-pointer",{"cursor-not-allowed hover:text-white/60":l},n),...c,children:t})}},62365:function(e,t,n){n.d(t,{S:function(){return o}});var r=n(81210),a=n(62216),s=n(47048);function o(e){let{content:t,children:n}=e;return(0,r.jsx)(a.e,{showArrow:!1,content:t,color:"default",className:" min-h-9 min-w-[4.5rem]",classNames:{content:"bg-[#40414F] border border-solid border-[rgba(255,255,255,0.1)] min-h-9 min-w-[4.5rem] text-xs"},children:n||(0,r.jsx)("button",{className:"outline-none border-none",children:(0,r.jsx)(s.nj5,{})})})}},93271:function(e,t,n){n.d(t,{t:function(){return a},Z:function(){return l}});var r=n(80957);n(45303).env.NEXT_PUBLIC_BASE_PATH;let a="https://dev-api.enreach.network/api",s=r.Z.create({baseURL:a,headers:{"Content-Type":"application/json"}}),o={setAuth:e=>{e?s.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete s.defaults.headers.common.Authorization},loginApi:async e=>{let t=await s.post("/user/signIn",e);return o.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await s.post("/user/google/signIn",e);return o.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await s.post("/user/referral/by",e);return o.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await s.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await s.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await s.post("/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await s.post("/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>(await s.get("/user/info")).data.data,sendResetPassword:async e=>(await s.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await s.post("/user/password/reset",e),!0),userUpdate:async e=>(await s.post("/user/profile/update",e),!0),userReward:async()=>(await s.get("/user/reward")).data.data,nodeList:async()=>(await s.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await s.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await s.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await r.Z.get("https://api.bigdatacloud.net/data/client-ip")).data};var l=o},47608:function(e,t,n){n.d(t,{G$:function(){return d},N3:function(){return i},Y:function(){return f},_v:function(){return u},rV:function(){return c}});var r=n(36062),a=n(28672),s=n.n(a),o=n(85542),l=n.n(o);function i(e){return e.toLowerCase().replaceAll(" ","_")}function c(e){let t;r.Am.error((t="Unkown","string"==typeof e?t=e:"string"==typeof(null==e?void 0:e.msg)?t=null==e?void 0:e.msg:"string"==typeof(null==e?void 0:e.message)&&(t=null==e?void 0:e.message),t))}function u(e){return new Promise(t=>setTimeout(t,e))}function d(e,t){return s()(e).format(t)}function f(e,t){return s().duration(e).format(t)}s().extend(l())},52897:function(e,t,n){function r(e){return e?!!/\S+@\S+\.\S+/.test(e)||"Please enter a vaild email !":null}function a(e){return e?!!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(e)||"Please enter a vaild password (@$!%*?&,number,a-z,A-Z,>=8) !":null}function s(e){return e?6==e.length||"Please enter a vaild referral code !":null}function o(e){return e?6==e.length||"Please enter a vaild verify code !":null}n.d(t,{jg:function(){return o},oH:function(){return r},tx:function(){return s},uo:function(){return a}})}}]);