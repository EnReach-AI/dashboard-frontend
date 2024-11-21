"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{34050:function(t,e,s){s.d(e,{A:function(){return h},z:function(){return u}});var r=s(49358),i=s(2969),n=s(41241),a=s(72246),h=class extends a.F{#t;#e;#s;#r;#i;#n;constructor(t){super(),this.#n=!1,this.#i=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#s=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#t=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,s=void 0!==e,r=s?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:s?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#t,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(t){this.options={...this.#i,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#s.remove(this)}setData(t,e){let s=(0,r.oE)(this.state.data,t,this.options);return this.#a({data:s,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),s}setState(t,e){this.#a({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#r?.promise;return this.#r?.cancel(t),e?e.then(r.ZT).catch(r.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#t)}isActive(){return this.observers.some(t=>!1!==(0,r.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===r.CN||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,r.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#r&&(this.#n?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#s.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#a({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let s=new AbortController,i=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#n=!0,s.signal)})},a={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,r.cG)(this.options,e),s={queryKey:this.queryKey,meta:this.meta};return(i(s),this.#n=!1,this.options.persister)?this.options.persister(t,s,this):t(s)}};i(a),this.options.behavior?.onFetch(a,this),this.#e=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==a.fetchOptions?.meta)&&this.#a({type:"fetch",meta:a.fetchOptions?.meta});let h=t=>{(0,n.DV)(t)&&t.silent||this.#a({type:"error",error:t}),(0,n.DV)(t)||(this.#s.config.onError?.(t,this),this.#s.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#r=(0,n.Mz)({initialPromise:e?.initialPromise,fn:a.fetchFn,abort:s.abort.bind(s),onSuccess:t=>{if(void 0===t){h(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){h(t);return}this.#s.config.onSuccess?.(t,this),this.#s.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:h,onFail:(t,e)=>{this.#a({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#a({type:"pause"})},onContinue:()=>{this.#a({type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0}),this.#r.start()}#a(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,n.DV)(s)&&s.revert&&this.#e)return{...this.#e,fetchStatus:"idle"};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),i.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#s.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,n.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},76114:function(t,e,s){let r;s.d(e,{a:function(){return D}});var i=s(77772),n=s(2969),a=s(34050),h=s(23354),u=s(71960),o=s(49358),c=class extends h.l{constructor(t,e){super(),this.options=e,this.#h=t,this.#u=null,this.#o=(0,u.O)(),this.options.experimental_prefetchInRender||this.#o.reject(Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(e)}#h;#c=void 0;#l=void 0;#d=void 0;#p;#f;#o;#u;#y;#v;#b;#R;#m;#g;#C=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#c.addObserver(this),l(this.#c,this.options)?this.#S():this.updateResult(),this.#O())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return d(this.#c,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return d(this.#c,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#Q(),this.#I(),this.#c.removeObserver(this)}setOptions(t,e){let s=this.options,r=this.#c;if(this.options=this.#h.defaultQueryOptions(t),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled&&"function"!=typeof this.options.enabled&&"boolean"!=typeof(0,o.Nc)(this.options.enabled,this.#c))throw Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#F(),this.#c.setOptions(this.options),s._defaulted&&!(0,o.VS)(this.options,s)&&this.#h.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#c,observer:this});let i=this.hasListeners();i&&p(this.#c,r,this.options,s)&&this.#S(),this.updateResult(e),i&&(this.#c!==r||(0,o.Nc)(this.options.enabled,this.#c)!==(0,o.Nc)(s.enabled,this.#c)||(0,o.KC)(this.options.staleTime,this.#c)!==(0,o.KC)(s.staleTime,this.#c))&&this.#T();let n=this.#U();i&&(this.#c!==r||(0,o.Nc)(this.options.enabled,this.#c)!==(0,o.Nc)(s.enabled,this.#c)||n!==this.#g)&&this.#D(n)}getOptimisticResult(t){let e=this.#h.getQueryCache().build(this.#h,t),s=this.createResult(e,t);return(0,o.VS)(this.getCurrentResult(),s)||(this.#d=s,this.#f=this.options,this.#p=this.#c.state),s}getCurrentResult(){return this.#d}trackResult(t,e){let s={};return Object.keys(t).forEach(r=>{Object.defineProperty(s,r,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(r),e?.(r),t[r])})}),s}trackProp(t){this.#C.add(t)}getCurrentQuery(){return this.#c}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){let e=this.#h.defaultQueryOptions(t),s=this.#h.getQueryCache().build(this.#h,e);return s.fetch().then(()=>this.createResult(s,e))}fetch(t){return this.#S({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#d))}#S(t){this.#F();let e=this.#c.fetch(this.options,t);return t?.throwOnError||(e=e.catch(o.ZT)),e}#T(){this.#Q();let t=(0,o.KC)(this.options.staleTime,this.#c);if(o.sk||this.#d.isStale||!(0,o.PN)(t))return;let e=(0,o.Kp)(this.#d.dataUpdatedAt,t);this.#R=setTimeout(()=>{this.#d.isStale||this.updateResult()},e+1)}#U(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#c):this.options.refetchInterval)??!1}#D(t){this.#I(),this.#g=t,!o.sk&&!1!==(0,o.Nc)(this.options.enabled,this.#c)&&(0,o.PN)(this.#g)&&0!==this.#g&&(this.#m=setInterval(()=>{(this.options.refetchIntervalInBackground||i.j.isFocused())&&this.#S()},this.#g))}#O(){this.#T(),this.#D(this.#U())}#Q(){this.#R&&(clearTimeout(this.#R),this.#R=void 0)}#I(){this.#m&&(clearInterval(this.#m),this.#m=void 0)}createResult(t,e){let s;let r=this.#c,i=this.options,n=this.#d,h=this.#p,c=this.#f,d=t!==r?t.state:this.#l,{state:y}=t,v={...y},b=!1;if(e._optimisticResults){let s=this.hasListeners(),n=!s&&l(t,e),h=s&&p(t,r,e,i);(n||h)&&(v={...v,...(0,a.z)(y.data,t.options)}),"isRestoring"===e._optimisticResults&&(v.fetchStatus="idle")}let{error:R,errorUpdatedAt:m,status:g}=v;if(e.select&&void 0!==v.data){if(n&&v.data===h?.data&&e.select===this.#y)s=this.#v;else try{this.#y=e.select,s=e.select(v.data),s=(0,o.oE)(n?.data,s,e),this.#v=s,this.#u=null}catch(t){this.#u=t}}else s=v.data;if(void 0!==e.placeholderData&&void 0===s&&"pending"===g){let t;if(n?.isPlaceholderData&&e.placeholderData===c?.placeholderData)t=n.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#b?.state.data,this.#b):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#u=null}catch(t){this.#u=t}void 0!==t&&(g="success",s=(0,o.oE)(n?.data,t,e),b=!0)}this.#u&&(R=this.#u,s=this.#v,m=Date.now(),g="error");let C="fetching"===v.fetchStatus,S="pending"===g,O="error"===g,Q=S&&C,I=void 0!==s,F={status:g,fetchStatus:v.fetchStatus,isPending:S,isSuccess:"success"===g,isError:O,isInitialLoading:Q,isLoading:Q,data:s,dataUpdatedAt:v.dataUpdatedAt,error:R,errorUpdatedAt:m,failureCount:v.fetchFailureCount,failureReason:v.fetchFailureReason,errorUpdateCount:v.errorUpdateCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>d.dataUpdateCount||v.errorUpdateCount>d.errorUpdateCount,isFetching:C,isRefetching:C&&!S,isLoadingError:O&&!I,isPaused:"paused"===v.fetchStatus,isPlaceholderData:b,isRefetchError:O&&I,isStale:f(t,e),refetch:this.refetch,promise:this.#o};if(this.options.experimental_prefetchInRender){let e=t=>{"error"===F.status?t.reject(F.error):void 0!==F.data&&t.resolve(F.data)},s=()=>{e(this.#o=F.promise=(0,u.O)())},i=this.#o;switch(i.status){case"pending":t.queryHash===r.queryHash&&e(i);break;case"fulfilled":("error"===F.status||F.data!==i.value)&&s();break;case"rejected":("error"!==F.status||F.error!==i.reason)&&s()}}return F}updateResult(t){let e=this.#d,s=this.createResult(this.#c,this.options);if(this.#p=this.#c.state,this.#f=this.options,void 0!==this.#p.data&&(this.#b=this.#c),(0,o.VS)(s,e))return;this.#d=s;let r={};t?.listeners!==!1&&(()=>{if(!e)return!0;let{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.#C.size)return!0;let r=new Set(s??this.#C);return this.options.throwOnError&&r.add("error"),Object.keys(this.#d).some(t=>this.#d[t]!==e[t]&&r.has(t))})()&&(r.listeners=!0),this.#E({...r,...t})}#F(){let t=this.#h.getQueryCache().build(this.#h,this.options);if(t===this.#c)return;let e=this.#c;this.#c=t,this.#l=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#O()}#E(t){n.V.batch(()=>{t.listeners&&this.listeners.forEach(t=>{t(this.#d)}),this.#h.getQueryCache().notify({query:this.#c,type:"observerResultsUpdated"})})}};function l(t,e){return!1!==(0,o.Nc)(e.enabled,t)&&void 0===t.state.data&&!("error"===t.state.status&&!1===e.retryOnMount)||void 0!==t.state.data&&d(t,e,e.refetchOnMount)}function d(t,e,s){if(!1!==(0,o.Nc)(e.enabled,t)){let r="function"==typeof s?s(t):s;return"always"===r||!1!==r&&f(t,e)}return!1}function p(t,e,s,r){return(t!==e||!1===(0,o.Nc)(r.enabled,t))&&(!s.suspense||"error"!==t.state.status)&&f(t,s)}function f(t,e){return!1!==(0,o.Nc)(e.enabled,t)&&t.isStaleByTime((0,o.KC)(e.staleTime,t))}var y=s(49755),v=s(20337);s(81210);var b=y.createContext((r=!1,{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r})),R=()=>y.useContext(b),m=s(36799),g=(t,e)=>{(t.suspense||t.throwOnError||t.experimental_prefetchInRender)&&!e.isReset()&&(t.retryOnMount=!1)},C=t=>{y.useEffect(()=>{t.clearReset()},[t])},S=t=>{let{result:e,errorResetBoundary:s,throwOnError:r,query:i}=t;return e.isError&&!s.isReset()&&!e.isFetching&&i&&(0,m.L)(r,[e.error,i])},O=y.createContext(!1),Q=()=>y.useContext(O);O.Provider;var I=t=>{t.suspense&&(void 0===t.staleTime&&(t.staleTime=1e3),"number"==typeof t.gcTime&&(t.gcTime=Math.max(t.gcTime,1e3)))},F=(t,e)=>t.isLoading&&t.isFetching&&!e,T=(t,e)=>t?.suspense&&e.isPending,U=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function D(t,e){return function(t,e,s){var r,i,a,h,u;let c=(0,v.NL)(s),l=Q(),d=R(),p=c.defaultQueryOptions(t);null===(i=c.getDefaultOptions().queries)||void 0===i||null===(r=i._experimental_beforeQuery)||void 0===r||r.call(i,p),p._optimisticResults=l?"isRestoring":"optimistic",I(p),g(p,d),C(d);let f=!c.getQueryCache().get(p.queryHash),[b]=y.useState(()=>new e(c,p)),O=b.getOptimisticResult(p);if(y.useSyncExternalStore(y.useCallback(t=>{let e=l?()=>void 0:b.subscribe(n.V.batchCalls(t));return b.updateResult(),e},[b,l]),()=>b.getCurrentResult(),()=>b.getCurrentResult()),y.useEffect(()=>{b.setOptions(p,{listeners:!1})},[p,b]),T(p,O))throw U(p,b,d);if(S({result:O,errorResetBoundary:d,throwOnError:p.throwOnError,query:c.getQueryCache().get(p.queryHash)}))throw O.error;if(null===(h=c.getDefaultOptions().queries)||void 0===h||null===(a=h._experimental_afterQuery)||void 0===a||a.call(h,p,O),p.experimental_prefetchInRender&&!o.sk&&F(O,l)){let t=f?U(p,b,d):null===(u=c.getQueryCache().get(p.queryHash))||void 0===u?void 0:u.promise;null==t||t.catch(m.Z).finally(()=>{b.updateResult()})}return p.notifyOnChangeProps?O:b.trackResult(O)}(t,c,e)}}}]);