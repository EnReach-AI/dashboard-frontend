(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{43563:function(e,t,n){Promise.resolve().then(n.bind(n,60491)),Promise.resolve().then(n.bind(n,9371)),Promise.resolve().then(n.bind(n,35802)),Promise.resolve().then(n.bind(n,59404)),Promise.resolve().then(n.bind(n,42351)),Promise.resolve().then(n.bind(n,17861)),Promise.resolve().then(n.bind(n,6419)),Promise.resolve().then(n.bind(n,72361)),Promise.resolve().then(n.bind(n,23857)),Promise.resolve().then(n.bind(n,69085)),Promise.resolve().then(n.bind(n,24714)),Promise.resolve().then(n.bind(n,89121)),Promise.resolve().then(n.bind(n,78526)),Promise.resolve().then(n.bind(n,8221)),Promise.resolve().then(n.bind(n,87844)),Promise.resolve().then(n.bind(n,72714)),Promise.resolve().then(n.bind(n,75473)),Promise.resolve().then(n.bind(n,58648)),Promise.resolve().then(n.bind(n,99250)),Promise.resolve().then(n.bind(n,79361)),Promise.resolve().then(n.bind(n,25366)),Promise.resolve().then(n.bind(n,31871)),Promise.resolve().then(n.bind(n,57250)),Promise.resolve().then(n.bind(n,77469)),Promise.resolve().then(n.bind(n,85353)),Promise.resolve().then(n.bind(n,90917)),Promise.resolve().then(n.bind(n,17075)),Promise.resolve().then(n.bind(n,62850)),Promise.resolve().then(n.bind(n,81581)),Promise.resolve().then(n.bind(n,50398)),Promise.resolve().then(n.bind(n,98967)),Promise.resolve().then(n.bind(n,40022)),Promise.resolve().then(n.bind(n,29277)),Promise.resolve().then(n.bind(n,23222)),Promise.resolve().then(n.bind(n,33233)),Promise.resolve().then(n.bind(n,23320)),Promise.resolve().then(n.bind(n,71305)),Promise.resolve().then(n.t.bind(n,40001,23)),Promise.resolve().then(n.t.bind(n,72324,23)),Promise.resolve().then(n.t.bind(n,43323,23)),Promise.resolve().then(n.bind(n,58782)),Promise.resolve().then(n.t.bind(n,54327,23))},58782:function(e,t,n){"use strict";n.d(t,{PageLayout:function(){return b}});var s=n(81210),r=n(38722),o=n(49755),a=n(36062),i=n(63568),l=n(60164),d=n(20337),c=n(44384),u=n(87106),h=n(65843);n(77422);let m=()=>{let e="light",t="light";return"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(document.documentElement.classList.remove("dark"),e="light",t="light"):(document.documentElement.classList.add("dark"),e="dark",t="dark"),"theme"in localStorage||(e="system"),{themeMode:e,theme:t}},f=(0,h.U)(e=>({...m(),setThemeMode:t=>e(()=>({themeMode:t})),setTheme:t=>e(()=>({theme:t}))}));u.EWX,u.Dq,u.pUp;let p=new l.S;function v(e){let{children:t}=e;return f(),(0,s.jsx)(r.w,{className:"App overflow-auto max-w-screen-2xl mx-auto",children:(0,s.jsx)(c.rg,{clientId:"425165933886-vpv32tvbhfeqfujnel0fdjm88kfn1lhn.apps.googleusercontent.com",children:(0,s.jsx)(d.aH,{client:p,children:(0,s.jsx)(i.Ho,{children:t})})})})}function b(e){let{children:t}=e,[n,r]=(0,o.useState)(!1);return((0,o.useEffect)(()=>{n||r(!0)},[n]),n)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.x7,{position:"top-right",offset:70,theme:"light"}),(0,s.jsx)(v,{children:t})]}):null}},63568:function(e,t,n){"use strict";n.d(t,{Vo:function(){return d},Ho:function(){return h},Eu:function(){return m}});var s=n(81210),r=n(74572);function o(){return window.EnReachAI}var a=n(95258),i=n(49755),l=n(44761);let d=(0,i.createContext)({login:async()=>{},setUser:()=>{},logout:()=>{}}),c="last-login-user",u=()=>{try{let e=localStorage.getItem(c);if(!e)return null;return JSON.parse(e)}catch(e){return console.error(e),null}},h=e=>{let{children:t}=e,n=(0,a.useRouter)(),[h,m]=(0,i.useState)(u()),f=e=>{var t,s;e?(m(e),localStorage.setItem(c,JSON.stringify(e)),e.token&&(null===(s=o())||void 0===s||s.request({name:"setAccessToken",body:e.token}).catch(console.error)),n.push("/")):(m(null),localStorage.removeItem(c),null===(t=o())||void 0===t||t.request({name:"clearAccessToken"}).catch(console.error),n.push("/signin"))},p=()=>{f()};(0,i.useEffect)(()=>{let e;return h&&h.token&&(e=setInterval(()=>{let e=o();if(!e){console.warn("Extension not installed");return}e.request({name:"getStat"}).then(e=>{if(e.userLogout)console.info("sync logout from ext"),p();else if(e.logined)console.info("not need do something");else{var t;console.info("sync login to ext"),null===(t=o())||void 0===t||t.request({name:"setAccessToken",body:h.token}).catch(console.error)}}).catch(console.error)},1e3)),()=>clearInterval(e)},[h]);let v=async e=>{try{if(!e.email||!e.password)return;let t=await r.Z.loginApi(e);f(t),r.Z.setAuth()}catch(e){console.error(e)}};r.Z.setAuth(null==h?void 0:h.token);let b=(0,l.ZP)(["QueryUserInfo",null==h?void 0:h.token],()=>r.Z.userInfo());return(0,s.jsx)(d.Provider,{value:{user:h,login:v,logout:p,setUser:f,queryUserInfo:b},children:t})},m=()=>(0,i.useContext)(d)},77422:function(e,t,n){"use strict";n.d(t,{C:function(){return c},m:function(){return d}});var s=n(81210),r=n(29906),o=n(12014),a=n(21585),i=n(10307),l=n(85947);function d(e){let{children:t,contentProps:n,bodyProps:i,...l}=e;return(0,s.jsx)(r.R,{isDismissable:!1,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},hideCloseButton:!0,...l,children:(0,s.jsx)(o.A,{className:"w-[360px] p-6 bg-m1 rounded-3xl",...n||{},children:(0,s.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...i||{},children:t})})})}function c(e){let{tit:t,children:n,contentProps:d,bodyProps:c,...u}=e;return(0,s.jsx)(r.R,{hideCloseButton:!0,backdrop:"blur",classNames:{backdrop:"backdrop-blur"},...u,children:(0,s.jsx)(o.A,{className:"w-[500px] bg-m1 gap-6 p-6 rounded-3xl",...d||{},children:e=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.k,{className:"justify-between p-0",children:[(0,s.jsx)("span",{className:"text-base font-bold text-left text-white",children:t}),(0,s.jsx)("div",{className:"p-0 rounded-full w-6 h-6 flex justify-center items-center text-xs cursor-pointer bg-white/10 hover:bg-white/30",onClick:e,children:(0,s.jsx)(l.q5L,{})})]}),(0,s.jsx)(a.I,{className:"flex flex-col justify-start items-center w-full gap-6 p-0",...c||{},children:n})]})})})}},74572:function(e,t,n){"use strict";n.d(t,{t:function(){return r}});var s=n(80957);let r="beta"==n(36957).Vi?"https://dev-api.enreach.network/api":"https://api.enreach.network/api",o=s.Z.create({baseURL:r,headers:{"Content-Type":"application/json"}}),a={setAuth:e=>{e?o.defaults.headers.common.Authorization=e.startsWith("Bearer")?e:"Bearer ".concat(e):delete o.defaults.headers.common.Authorization},loginApi:async e=>{let t=await o.post("/user/signIn",e);return a.setAuth(t.data.data.token),t.data.data},loginByGoogleApi:async e=>{let t=await o.post("/user/google/signIn",e);return a.setAuth(t.data.data.token),t.data.data},loginSetReferralApi:async e=>{let t=await o.post("/user/referral/by",e);return a.setAuth(t.data.data.token),t.data.data},registerApi:async e=>(await o.post("/user/signUp",{...e})).data.data,registerByGoogleApi:async e=>(await o.post("/user/google/signUp",{accessToken:e})).data.data,resendRegisterVerifyCode:async e=>(await o.post("/verify/".concat(e,"/resend")),!0),verifyRegisterCode:async(e,t)=>(await o.post("/verify/".concat(e,"/").concat(t))).data.data,userInfo:async()=>(await o.get("/user/profile")).data.data,sendResetPassword:async e=>(await o.post("/user/password/reset/send",{email:e}),!0),resetPassword:async e=>(await o.post("/user/password/reset",e),!0),userUpdate:async e=>(await o.post("/user/profile/update",e),!0),userReward:async()=>(await o.get("/user/reward")).data.data,nodeList:async()=>(await o.get("/node/list")).data.data,trendingRewards:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"month";return(await o.get("/trending/rewards",{params:{type:e}})).data.data},getAccessToken:async()=>(await o.get("/user/accessToken")).data.data.accessToken,getIP:async()=>(await s.Z.get("https://api.bigdatacloud.net/data/client-ip")).data};t.Z=a},36957:function(e,t,n){"use strict";n.d(t,{Vi:function(){return s},u1:function(){return r}}),n(45303).env.NEXT_PUBLIC_BASE_PATH;let s="beta",r=""},54327:function(){}},function(e){e.O(0,[166,686,720,717,542,510,46,761,614,832,527,930,403,331,744],function(){return e(e.s=43563)}),_N_E=e.O()}]);