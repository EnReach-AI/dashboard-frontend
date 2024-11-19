"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[832],{27511:function(e,t,n){let r;n.d(t,{J:function(){return s}});let i=Symbol.for("react-aria.i18n.locale"),o=Symbol.for("react-aria.i18n.strings");class s{getStringForLocale(e,t){let n=this.getStringsForLocale(t)[e];if(!n)throw Error(`Could not find intl message ${e} in ${t} locale`);return n}getStringsForLocale(e){let t=this.strings[e];return t||(t=function(e,t,n="en-US"){if(t[e])return t[e];let r=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[r])return t[r];for(let e in t)if(e.startsWith(r+"-"))return t[e];return t[n]}(e,this.strings,this.defaultLocale),this.strings[e]=t),t}static getGlobalDictionaryForPackage(e){if("undefined"==typeof window)return null;let t=window[i];if(void 0===r){let e=window[o];if(!e)return null;for(let n in r={},e)r[n]=new s({[t]:e[n]},t)}let n=null==r?void 0:r[e];if(!n)throw Error(`Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);return n}constructor(e,t="en-US"){this.strings=Object.fromEntries(Object.entries(e).filter(([,e])=>e)),this.defaultLocale=t}}},36094:function(e,t,n){n.d(t,{E:function(){return o}});let r=new Map,i=new Map;class o{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let i=t["="+e];if(i)return"function"==typeof i?i():i;let o=this.locale+":"+n,s=r.get(o);return s||(s=new Intl.PluralRules(this.locale,{type:n}),r.set(o,s)),"function"==typeof(i=t[s.select(e)]||t.other)?i():i}number(e){let t=i.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),i.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}},10307:function(e,t,n){n.d(t,{k:function(){return d}});var r=n(79539),i=n(49755),o=n(71964),s=n(10233),l=n(15177),a=n(81210),u=(0,o.Gp)((e,t)=>{let{as:n,children:o,className:u,...d}=e,{slots:c,classNames:m,headerId:f,setHeaderMounted:p}=(0,r.v)(),h=(0,s.gy)(t);return(0,i.useEffect)(()=>(p(!0),()=>p(!1)),[p]),(0,a.jsx)(n||"header",{ref:h,className:c.header({class:(0,l.W)(null==m?void 0:m.header,u)}),id:f,...d,children:o})});u.displayName="NextUI.ModalHeader";var d=u},79539:function(e,t,n){n.d(t,{D:function(){return r},v:function(){return i}});var[r,i]=(0,n(55525).k)({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"})},21585:function(e,t,n){n.d(t,{I:function(){return d}});var r=n(79539),i=n(49755),o=n(71964),s=n(10233),l=n(15177),a=n(81210),u=(0,o.Gp)((e,t)=>{let{as:n,children:o,className:u,...d}=e,{slots:c,classNames:m,bodyId:f,setBodyMounted:p}=(0,r.v)(),h=(0,s.gy)(t);return(0,i.useEffect)(()=>(p(!0),()=>p(!1)),[p]),(0,a.jsx)(n||"div",{ref:h,className:c.body({class:(0,l.W)(null==m?void 0:m.body,u)}),id:f,...d,children:o})});u.displayName="NextUI.ModalBody";var d=u},48514:function(e,t,n){let r;n.d(t,{d:function(){return F}});var i=n(42920),o=n(26606),s=n(60793),l=n(45120),a=n(47883);let u="undefined"!=typeof document&&window.visualViewport,d=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]),c=0;function m(e,t,n){let r=e.style[t];return e.style[t]=n,()=>{e.style[t]=r}}function f(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}function p(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let t=(0,a.r)(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let n=t.getBoundingClientRect().top,r=e.getBoundingClientRect().top;r>n+e.clientHeight&&(t.scrollTop+=r-n)}e=t.parentElement}}function h(e){return e instanceof HTMLInputElement&&!d.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var v=n(32978),b=n(34429),g=n(87651),w=n(49755),x=n(55108),y=n(13721),E=(0,x.tv)({slots:{wrapper:["flex","w-screen","h-[100dvh]","fixed","inset-0","z-50","overflow-x-auto","justify-center","h-[--visual-viewport-height]"],base:["flex","flex-col","relative","bg-white","z-50","w-full","box-border","bg-content1","outline-none","mx-1","my-1","sm:mx-6","sm:my-16"],backdrop:"z-50",header:"flex py-4 px-6 flex-initial text-large font-semibold",body:"flex flex-1 flex-col gap-3 px-6 py-2",footer:"flex flex-row gap-2 px-6 py-4 justify-end",closeButton:["absolute","appearance-none","outline-none","select-none","top-1","right-1","rtl:left-1","rtl:right-[unset]","p-2","text-foreground-500","rounded-full","hover:bg-default-100","active:bg-default-200","tap-highlight-transparent",...y.Dh]},variants:{size:{xs:{base:"max-w-xs"},sm:{base:"max-w-sm"},md:{base:"max-w-md"},lg:{base:"max-w-lg"},xl:{base:"max-w-xl"},"2xl":{base:"max-w-2xl"},"3xl":{base:"max-w-3xl"},"4xl":{base:"max-w-4xl"},"5xl":{base:"max-w-5xl"},full:{base:"my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] min-h-[100dvh] !rounded-none"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},placement:{auto:{wrapper:"items-end sm:items-center"},center:{wrapper:"items-center sm:items-center"},top:{wrapper:"items-start sm:items-start"},"top-center":{wrapper:"items-start sm:items-center"},bottom:{wrapper:"items-end sm:items-end"},"bottom-center":{wrapper:"items-end sm:items-center"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{backdrop:"hidden"},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-md backdrop-saturate-150 bg-overlay/30"}},scrollBehavior:{normal:{base:"overflow-y-hidden"},inside:{base:"max-h-[calc(100%_-_8rem)]",body:"overflow-y-auto"},outside:{wrapper:"items-start sm:items-start overflow-y-auto",base:"my-16"}},disableAnimation:{false:{wrapper:["[--scale-enter:100%]","[--scale-exit:100%]","[--slide-enter:0px]","[--slide-exit:80px]","sm:[--scale-enter:100%]","sm:[--scale-exit:103%]","sm:[--slide-enter:0px]","sm:[--slide-exit:0px]"]}}},defaultVariants:{size:"md",radius:"lg",shadow:"sm",placement:"auto",backdrop:"opaque",scrollBehavior:"normal"},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"w-screen h-screen fixed inset-0"}}]}),C=n(27897),k=n(71964),L=n(72888),N=n(75851),S=n(15177),T=n(15249),j=n(41571),D=n(10233),B=n(95363),M=n(70734);function F(e){var t,n,d;let x=(0,C.w)(),[y,F]=(0,k.oe)(e,E.variantKeys),{ref:O,as:I,className:P,classNames:R,isOpen:A,defaultOpen:W,onOpenChange:H,motionProps:z,closeButton:_,isDismissable:q=!0,hideCloseButton:U=!1,shouldBlockScroll:V=!0,portalContainer:G,isKeyboardDismissDisabled:K=!1,onClose:J,...$}=y,X=(0,D.gy)(O),Y=(0,w.useRef)(null),[Z,Q]=(0,w.useState)(!1),[ee,et]=(0,w.useState)(!1),en=null!=(n=null!=(t=e.disableAnimation)?t:null==x?void 0:x.disableAnimation)&&n,er=(0,w.useId)(),ei=(0,w.useId)(),eo=(0,w.useId)(),es=(0,B.d)({isOpen:A,defaultOpen:W,onOpenChange:e=>{null==H||H(e),e||null==J||J()}}),{modalProps:el,underlayProps:ea}=function(e={shouldBlockScroll:!0},t,n){let{overlayProps:d,underlayProps:x}=(0,i.I)({...e,isOpen:t.isOpen,onClose:t.close},n);return!function(e={}){let{isDisabled:t}=e;(0,o.b)(()=>{if(!t){let e,t,n,i,o;return 1==++c&&(r=(0,s.gn)()?(n=null,i=()=>{if(n)return;let e=window.pageXOffset,t=window.pageYOffset;n=(0,l.t)(f(window,"scroll",()=>{window.scrollTo(0,0)}),m(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),m(document.documentElement,"overflow","hidden"),m(document.body,"marginTop",`-${t}px`),()=>{window.scrollTo(e,t)}),window.scrollTo(0,0)},o=(0,l.t)(f(document,"touchstart",n=>{((e=(0,a.r)(n.target,!0))!==document.documentElement||e!==document.body)&&e instanceof HTMLElement&&"auto"===window.getComputedStyle(e).overscrollBehavior&&(t=m(e,"overscrollBehavior","contain"))},{passive:!1,capture:!0}),f(document,"touchmove",t=>{if(!e||e===document.documentElement||e===document.body){t.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&t.preventDefault()},{passive:!1,capture:!0}),f(document,"touchend",e=>{let n=e.target;h(n)&&n!==document.activeElement&&(e.preventDefault(),i(),n.style.transform="translateY(-2000px)",n.focus(),requestAnimationFrame(()=>{n.style.transform=""})),t&&t()},{passive:!1,capture:!0}),f(document,"focus",e=>{let t=e.target;h(t)&&(i(),t.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{t.style.transform="",u&&(u.height<window.innerHeight?requestAnimationFrame(()=>{p(t)}):u.addEventListener("resize",()=>p(t),{once:!0}))}))},!0)),()=>{null==t||t(),null==n||n(),o()}):(0,l.t)(m(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),m(document.documentElement,"overflow","hidden"))),()=>{0==--c&&r()}}},[t])}({isDisabled:!t.isOpen||!e.shouldBlockScroll}),(0,v.Bq)(),(0,w.useEffect)(()=>{if(t.isOpen&&n.current)return(0,b.R)([n.current])},[t.isOpen,n]),{modalProps:(0,g.d)(d),underlayProps:x}}({isDismissable:q,shouldBlockScroll:V,isKeyboardDismissDisabled:K},es,X),{buttonProps:eu}=(0,L.j)({onPress:es.close},Y),{isFocusVisible:ed,focusProps:ec}=(0,N.F)(),em=(0,S.W)(null==R?void 0:R.base,P),ef=(0,w.useMemo)(()=>E({...F,disableAnimation:en}),[(0,T.Xx)(F),en]),ep=(0,w.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{className:ef.backdrop({class:null==R?void 0:R.backdrop}),onClick:()=>es.close(),...ea,...e}},[ef,R,ea]);return{Component:I||"section",slots:ef,domRef:X,headerId:ei,bodyId:eo,motionProps:z,classNames:R,isDismissable:q,closeButton:_,hideCloseButton:U,portalContainer:G,shouldBlockScroll:V,backdrop:null!=(d=e.backdrop)?d:"opaque",isOpen:es.isOpen,onClose:es.close,disableAnimation:en,setBodyMounted:et,setHeaderMounted:Q,getDialogProps:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{ref:(0,M.l)(t,X),...(0,g.d)(el,$,e),className:ef.base({class:(0,S.W)(em,e.className)}),id:er,"data-open":(0,j.PB)(es.isOpen),"data-dismissable":(0,j.PB)(q),"aria-modal":(0,j.PB)(!0),"aria-labelledby":Z?ei:void 0,"aria-describedby":ee?eo:void 0}},getBackdropProps:ep,getCloseButtonProps:()=>({role:"button",tabIndex:0,"aria-label":"Close","data-focus-visible":(0,j.PB)(ed),className:ef.closeButton({class:null==R?void 0:R.closeButton}),...(0,g.d)(eu,ec)})}}},12014:function(e,t,n){n.d(t,{A:function(){return y}});var r=n(19907),i={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter)",opacity:1,transition:{scale:{duration:.4,ease:r.Lj.ease},opacity:{duration:.4,ease:r.Lj.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:r.Lj.ease}}},o=n(79539),s=n(49755),l=n(71964),a=n(68963),u=n(41600),d=n(72159),c=n(66260),m=n(96205),f=n(55144),p=n(58067);let h="undefined"!=typeof document&&window.visualViewport;function v(){return{width:h&&(null==h?void 0:h.width)||window.innerWidth,height:h&&(null==h?void 0:h.height)||window.innerHeight}}var b=n(87651),g=n(45120),w=n(81210),x=(0,l.Gp)((e,t)=>{let{as:n,children:l,role:x="dialog",...y}=e,{Component:E,domRef:C,slots:k,classNames:L,motionProps:N,backdrop:S,closeButton:T,hideCloseButton:j,disableAnimation:D,getDialogProps:B,getBackdropProps:M,getCloseButtonProps:F,onClose:O}=(0,o.v)(),I=function(){let e=(0,p.Av)(),[t,n]=(0,s.useState)(()=>e?{width:0,height:0}:v());return(0,s.useEffect)(()=>{let e=()=>{n(e=>{let t=v();return t.width===e.width&&t.height===e.height?e:t})};return h?h.addEventListener("resize",e):window.addEventListener("resize",e),()=>{h?h.removeEventListener("resize",e):window.removeEventListener("resize",e)}},[]),t}(),{dialogProps:P}=(0,f.R)({role:x},C),R=(0,s.isValidElement)(T)?(0,s.cloneElement)(T,F()):(0,w.jsx)("button",{...F(),children:(0,w.jsx)(u.T,{})}),A=(0,s.useCallback)(e=>{"Tab"===e.key&&e.nativeEvent.isComposing&&(e.stopPropagation(),e.preventDefault())},[]),W=B((0,b.d)(P,y)),H=(0,w.jsxs)(n||E||"div",{...W,onKeyDown:(0,g.t)(W.onKeyDown,A),children:[(0,w.jsx)(a.U,{onDismiss:O}),!j&&R,"function"==typeof l?l(O):l,(0,w.jsx)(a.U,{onDismiss:O})]}),z=(0,s.useMemo)(()=>"transparent"===S?null:D?(0,w.jsx)("div",{...M()}):(0,w.jsx)(d.X,{features:c.H,children:(0,w.jsx)(m.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:r.y7.fade,...M()})}),[S,D,M]),_={"--visual-viewport-height":I.height+"px"},q=D?(0,w.jsx)("div",{className:k.wrapper({class:null==L?void 0:L.wrapper}),"data-slot":"wrapper",style:_,children:H}):(0,w.jsx)(d.X,{features:c.H,children:(0,w.jsx)(m.m.div,{animate:"enter",className:k.wrapper({class:null==L?void 0:L.wrapper}),"data-slot":"wrapper",exit:"exit",initial:"exit",variants:i,...N,style:_,children:H})});return(0,w.jsxs)("div",{tabIndex:-1,children:[z,q]})});x.displayName="NextUI.ModalContent";var y=x},29906:function(e,t,n){n.d(t,{R:function(){return d}});var r=n(48514),i=n(79539),o=n(96557),s=n(32978),l=n(71964),a=n(81210),u=(0,l.Gp)((e,t)=>{let{children:n,...l}=e,u=(0,r.d)({...l,ref:t}),d=(0,a.jsx)(s.aV,{portalContainer:u.portalContainer,children:n});return(0,a.jsx)(i.D,{value:u,children:u.disableAnimation&&u.isOpen?d:(0,a.jsx)(o.M,{children:u.isOpen?d:null})})});u.displayName="NextUI.Modal";var d=u},41600:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(81210),i=e=>{let{isSelected:t,isIndeterminate:n,disableAnimation:i,...o}=e;return(0,r.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...o,children:(0,r.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})})}},55144:function(e,t,n){n.d(t,{R:function(){return a}});var r=n(53801),i=n(42175),o=n(2480),s=n(49755),l=n(32978);function a(e,t){let{role:n="dialog"}=e,a=(0,r.mp)();a=e["aria-label"]?void 0:a;let u=(0,s.useRef)(!1);return(0,s.useEffect)(()=>{if(t.current&&!t.current.contains(document.activeElement)){(0,o.e)(t.current);let e=setTimeout(()=>{document.activeElement===t.current&&(u.current=!0,t.current&&(t.current.blur(),(0,o.e)(t.current)),u.current=!1)},500);return()=>{clearTimeout(e)}}},[t]),(0,l.Bq)(),{dialogProps:{...(0,i.z)(e,{labelable:!0}),role:n,tabIndex:-1,"aria-labelledby":e["aria-labelledby"]||a,onBlur:e=>{u.current&&e.stopPropagation()}},titleProps:{id:a}}}},41945:function(e,t,n){n.d(t,{q:function(){return a}});var r=n(56204),i=n(27511),o=n(36094),s=n(49755);let l=new WeakMap;function a(e,t){let n,{locale:a}=(0,r.j)(),u=t&&(0,i.J).getGlobalDictionaryForPackage(t)||((n=l.get(e))||(n=new i.J(e),l.set(e,n)),n);return(0,s.useMemo)(()=>new o.E(a,u),[a,u])}},68963:function(e,t,n){n.d(t,{U:function(){return a}});var r={};r={"ar-AE":{dismiss:`\u{62A}\u{62C}\u{627}\u{647}\u{644}`},"bg-BG":{dismiss:`\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`},"cs-CZ":{dismiss:"Odstranit"},"da-DK":{dismiss:"Luk"},"de-DE":{dismiss:`Schlie\xdfen`},"el-GR":{dismiss:`\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`},"en-US":{dismiss:"Dismiss"},"es-ES":{dismiss:"Descartar"},"et-EE":{dismiss:`L\xf5peta`},"fi-FI":{dismiss:`Hylk\xe4\xe4`},"fr-FR":{dismiss:"Rejeter"},"he-IL":{dismiss:`\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`},"hr-HR":{dismiss:"Odbaci"},"hu-HU":{dismiss:`Elutas\xedt\xe1s`},"it-IT":{dismiss:"Ignora"},"ja-JP":{dismiss:`\u{9589}\u{3058}\u{308B}`},"ko-KR":{dismiss:`\u{BB34}\u{C2DC}`},"lt-LT":{dismiss:"Atmesti"},"lv-LV":{dismiss:`Ner\u{101}d\u{12B}t`},"nb-NO":{dismiss:"Lukk"},"nl-NL":{dismiss:"Negeren"},"pl-PL":{dismiss:"Zignoruj"},"pt-BR":{dismiss:"Descartar"},"pt-PT":{dismiss:"Dispensar"},"ro-RO":{dismiss:"Revocare"},"ru-RU":{dismiss:`\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`},"sk-SK":{dismiss:`Zru\u{161}i\u{165}`},"sl-SI":{dismiss:"Opusti"},"sr-SP":{dismiss:"Odbaci"},"sv-SE":{dismiss:"Avvisa"},"tr-TR":{dismiss:"Kapat"},"uk-UA":{dismiss:`\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`},"zh-CN":{dismiss:`\u{53D6}\u{6D88}`},"zh-TW":{dismiss:`\u{95DC}\u{9589}`}};var i=n(49755),o=n(359),s=n(41945),l=n(86226);function a(e){var t;let{onDismiss:n,...a}=e,u=(0,s.q)((t=r)&&t.__esModule?t.default:t,"@react-aria/overlays"),d=(0,o.b)(a,u.format("dismiss"));return i.createElement(l.T,null,i.createElement("button",{...d,tabIndex:-1,onClick:()=>{n&&n()},style:{width:1,height:1}}))}},32978:function(e,t,n){n.d(t,{aV:function(){return m},Bq:function(){return f}});var r=n(49755);let i=(0,r.createContext)({});var o=n(65528);function s({children:e}){let t=(0,r.useMemo)(()=>({register:()=>{}}),[]);return r.createElement(o.O.Provider,{value:t},e)}var l=n(23237),a=n(40806),u=n(58067),d=n(26606);let c=r.createContext(null);function m(e){var t;let n=(0,u.Av)(),{portalContainer:o=n?null:document.body,isExiting:d}=e,[m,f]=(0,r.useState)(!1),p=(0,r.useMemo)(()=>({contain:m,setContain:f}),[m,f]),{getContainer:h}=null!==(t=(0,r.useContext)(i))&&void 0!==t?t:{};if(!e.portalContainer&&h&&(o=h()),!o)return null;let v=e.children;return e.disableFocusManagement||(v=r.createElement(l.MT,{restoreFocus:!0,contain:m&&!d},v)),v=r.createElement(c.Provider,{value:p},r.createElement(s,null,v)),a.createPortal(v,o)}function f(){let e=(0,r.useContext)(c),t=null==e?void 0:e.setContain;(0,d.b)(()=>{null==t||t(!0)},[t])}},34429:function(e,t,n){n.d(t,{R:function(){return o}});let r=new WeakMap,i=[];function o(e,t=document.body){let n=new Set(e),o=new Set,s=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(t);let t=e=>{if(n.has(e)||o.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),i=t(e);if(i===NodeFilter.FILTER_ACCEPT&&l(e),i!==NodeFilter.FILTER_REJECT){let e=r.nextNode();for(;null!=e;)l(e),e=r.nextNode()}},l=e=>{var t;let n=null!==(t=r.get(e))&&void 0!==t?t:0;("true"!==e.getAttribute("aria-hidden")||0!==n)&&(0===n&&e.setAttribute("aria-hidden","true"),o.add(e),r.set(e,n+1))};i.length&&i[i.length-1].disconnect(),s(t);let a=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...o].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),o.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?n.add(e):e instanceof Element&&s(e)}});a.observe(t,{childList:!0,subtree:!0});let u={observe(){a.observe(t,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return i.push(u),()=>{for(let e of(a.disconnect(),o)){let t=r.get(e);1===t?(e.removeAttribute("aria-hidden"),r.delete(e)):r.set(e,t-1)}u===i[i.length-1]?(i.pop(),i.length&&i[i.length-1].observe()):i.splice(i.indexOf(u),1)}}},47883:function(e,t,n){n.d(t,{r:function(){return i}});var r=n(46314);function i(e,t){let n=e;for((0,r.a)(n,t)&&(n=n.parentElement);n&&!(0,r.a)(n,t);)n=n.parentElement;return n||document.scrollingElement||document.documentElement}},46314:function(e,t,n){n.d(t,{a:function(){return r}});function r(e,t){let n=window.getComputedStyle(e),r=/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY);return r&&t&&(r=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),r}},70734:function(e,t,n){n.d(t,{l:function(){return r}});function r(...e){return 1===e.length?e[0]:t=>{for(let n of e)"function"==typeof n?n(t):null!=n&&(n.current=t)}}},359:function(e,t,n){n.d(t,{b:function(){return i}});var r=n(53801);function i(e,t){let{id:n,"aria-label":i,"aria-labelledby":o}=e;return n=(0,r.Me)(n),o&&i?o=[...new Set([n,...o.trim().split(/\s+/)])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),i||o||!t||(i=t),{id:n,"aria-label":i,"aria-labelledby":o}}},95363:function(e,t,n){n.d(t,{d:function(){return o}});var r=n(49755),i=n(96383);function o(e){let[t,n]=(0,i.z)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),o=(0,r.useCallback)(()=>{n(!0)},[n]),s=(0,r.useCallback)(()=>{n(!1)},[n]),l=(0,r.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:o,close:s,toggle:l}}}}]);