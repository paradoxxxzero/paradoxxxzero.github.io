(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function k_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F_={exports:{}},mu={},z_={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),mM=Symbol.for("react.portal"),gM=Symbol.for("react.fragment"),vM=Symbol.for("react.strict_mode"),_M=Symbol.for("react.profiler"),yM=Symbol.for("react.provider"),xM=Symbol.for("react.context"),SM=Symbol.for("react.forward_ref"),MM=Symbol.for("react.suspense"),EM=Symbol.for("react.memo"),wM=Symbol.for("react.lazy"),Qm=Symbol.iterator;function bM(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var B_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H_=Object.assign,G_={};function No(t,e,n){this.props=t,this.context=e,this.refs=G_,this.updater=n||B_}No.prototype.isReactComponent={};No.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};No.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function V_(){}V_.prototype=No.prototype;function fp(t,e,n){this.props=t,this.context=e,this.refs=G_,this.updater=n||B_}var dp=fp.prototype=new V_;dp.constructor=fp;H_(dp,No.prototype);dp.isPureReactComponent=!0;var Jm=Array.isArray,W_=Object.prototype.hasOwnProperty,hp={current:null},j_={key:!0,ref:!0,__self:!0,__source:!0};function X_(t,e,n){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)W_.call(e,i)&&!j_.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:el,type:t,key:a,ref:o,props:r,_owner:hp.current}}function TM(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function AM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var eg=/\/+/g;function Mf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AM(""+t.key):e.toString(36)}function hc(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case mM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mf(o,0):i,Jm(r)?(n="",t!=null&&(n=t.replace(eg,"$&/")+"/"),hc(r,e,n,"",function(c){return c})):r!=null&&(pp(r)&&(r=TM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(eg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jm(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+Mf(a,s);o+=hc(a,e,n,l,r)}else if(l=bM(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+Mf(a,s++),o+=hc(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function pl(t,e,n){if(t==null)return t;var i=[],r=0;return hc(t,i,"","",function(a){return e.call(n,a,r++)}),i}function CM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},pc={transition:null},RM={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:pc,ReactCurrentOwner:hp};Xe.Children={map:pl,forEach:function(t,e,n){pl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pl(t,function(){e++}),e},toArray:function(t){return pl(t,function(e){return e})||[]},only:function(t){if(!pp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=No;Xe.Fragment=gM;Xe.Profiler=_M;Xe.PureComponent=fp;Xe.StrictMode=vM;Xe.Suspense=MM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RM;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=H_({},t.props),r=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=hp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)W_.call(e,l)&&!j_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:el,type:t.type,key:r,ref:a,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:xM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yM,_context:t},t.Consumer=t};Xe.createElement=X_;Xe.createFactory=function(t){var e=X_.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:SM,render:t}};Xe.isValidElement=pp;Xe.lazy=function(t){return{$$typeof:wM,_payload:{_status:-1,_result:t},_init:CM}};Xe.memo=function(t,e){return{$$typeof:EM,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=pc.transition;pc.transition={};try{t()}finally{pc.transition=e}};Xe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Xe.useCallback=function(t,e){return pn.current.useCallback(t,e)};Xe.useContext=function(t){return pn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return pn.current.useEffect(t,e)};Xe.useId=function(){return pn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return pn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Xe.useRef=function(t){return pn.current.useRef(t)};Xe.useState=function(t){return pn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return pn.current.useTransition()};Xe.version="18.2.0";z_.exports=Xe;var ze=z_.exports;const Xi=k_(ze);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PM=ze,LM=Symbol.for("react.element"),IM=Symbol.for("react.fragment"),DM=Object.prototype.hasOwnProperty,UM=PM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,NM={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)DM.call(e,i)&&!NM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:LM,type:t,key:a,ref:o,props:r,_owner:UM.current}}mu.Fragment=IM;mu.jsx=$_;mu.jsxs=$_;F_.exports=mu;var $=F_.exports,Y_={exports:{}},On={},q_={exports:{}},K_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,N){var H=U.length;U.push(N);e:for(;0<H;){var L=H-1>>>1,V=U[L];if(0<r(V,N))U[L]=N,U[H]=V,H=L;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var N=U[0],H=U.pop();if(H!==N){U[0]=H;e:for(var L=0,V=U.length,ae=V>>>1;L<ae;){var re=2*(L+1)-1,ce=U[re],ge=re+1,_e=U[ge];if(0>r(ce,H))ge<V&&0>r(_e,ce)?(U[L]=_e,U[ge]=H,L=ge):(U[L]=ce,U[re]=H,L=re);else if(ge<V&&0>r(_e,H))U[L]=_e,U[ge]=H,L=ge;else break e}}return N}function r(U,N){var H=U.sortIndex-N.sortIndex;return H!==0?H:U.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],u=1,f=null,d=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(U){for(var N=n(c);N!==null;){if(N.callback===null)i(c);else if(N.startTime<=U)i(c),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(c)}}function x(U){if(y=!1,m(U),!v)if(n(l)!==null)v=!0,Y(S);else{var N=n(c);N!==null&&W(x,N.startTime-U)}}function S(U,N){v=!1,y&&(y=!1,h(R),R=-1),p=!0;var H=d;try{for(m(N),f=n(l);f!==null&&(!(f.expirationTime>N)||U&&!z());){var L=f.callback;if(typeof L=="function"){f.callback=null,d=f.priorityLevel;var V=L(f.expirationTime<=N);N=t.unstable_now(),typeof V=="function"?f.callback=V:f===n(l)&&i(l),m(N)}else i(l);f=n(l)}if(f!==null)var ae=!0;else{var re=n(c);re!==null&&W(x,re.startTime-N),ae=!1}return ae}finally{f=null,d=H,p=!1}}var b=!1,E=null,R=-1,M=5,T=-1;function z(){return!(t.unstable_now()-T<M)}function K(){if(E!==null){var U=t.unstable_now();T=U;var N=!0;try{N=E(!0,U)}finally{N?q():(b=!1,E=null)}}else b=!1}var q;if(typeof _=="function")q=function(){_(K)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,B=I.port2;I.port1.onmessage=K,q=function(){B.postMessage(null)}}else q=function(){g(K,0)};function Y(U){E=U,b||(b=!0,q())}function W(U,N){R=g(function(){U(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Y(S))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(d){case 1:case 2:case 3:var N=3;break;default:N=d}var H=d;d=N;try{return U()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,N){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var H=d;d=U;try{return N()}finally{d=H}},t.unstable_scheduleCallback=function(U,N,H){var L=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?L+H:L):H=L,U){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=H+V,U={id:u++,callback:N,priorityLevel:U,startTime:H,expirationTime:V,sortIndex:-1},H>L?(U.sortIndex=H,e(c,U),n(l)===null&&U===n(c)&&(y?(h(R),R=-1):y=!0,W(x,H-L))):(U.sortIndex=V,e(l,U),v||p||(v=!0,Y(S))),U},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(U){var N=d;return function(){var H=d;d=N;try{return U.apply(this,arguments)}finally{d=H}}}})(K_);q_.exports=K_;var OM=q_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_=ze,Nn=OM;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q_=new Set,bs={};function Sa(t,e){_o(t,e),_o(t+"Capture",e)}function _o(t,e){for(bs[t]=e,t=0;t<e.length;t++)Q_.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,kM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tg={},ng={};function FM(t){return Gd.call(ng,t)?!0:Gd.call(tg,t)?!1:kM.test(t)?ng[t]=!0:(tg[t]=!0,!1)}function zM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BM(t,e,n,i){if(e===null||typeof e>"u"||zM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mp=/[\-:]([a-z])/g;function gp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mp,gp);Xt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mp,gp);Xt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mp,gp);Xt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vp(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BM(e,n,r,i)&&(n=null),i||r===null?FM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=Z_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ml=Symbol.for("react.element"),Va=Symbol.for("react.portal"),Wa=Symbol.for("react.fragment"),_p=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),J_=Symbol.for("react.provider"),e1=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),Wd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),xp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),t1=Symbol.for("react.offscreen"),ig=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=ig&&t[ig]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Ef;function as(t){if(Ef===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ef=e&&e[1]||""}return`
`+Ef+t}var wf=!1;function bf(t,e){if(!t||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?as(t):""}function HM(t){switch(t.tag){case 5:return as(t.type);case 16:return as("Lazy");case 13:return as("Suspense");case 19:return as("SuspenseList");case 0:case 2:case 15:return t=bf(t.type,!1),t;case 11:return t=bf(t.type.render,!1),t;case 1:return t=bf(t.type,!0),t;default:return""}}function Xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wa:return"Fragment";case Va:return"Portal";case Vd:return"Profiler";case _p:return"StrictMode";case Wd:return"Suspense";case jd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e1:return(t.displayName||"Context")+".Consumer";case J_:return(t._context.displayName||"Context")+".Provider";case yp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xp:return e=t.displayName||null,e!==null?e:Xd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Xd(t(e))}catch{}}return null}function GM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xd(e);case 8:return e===_p?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VM(t){var e=n1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gl(t){t._valueTracker||(t._valueTracker=VM(t))}function i1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n1(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $d(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r1(t,e){e=e.checked,e!=null&&vp(t,"checked",e,!1)}function Yd(t,e){r1(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&qd(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qd(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var os=Array.isArray;function so(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function og(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(os(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function a1(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vl,s1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vl=vl||document.createElement("div"),vl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WM=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){WM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function l1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function c1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l1(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var jM=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(t,e){if(e){if(jM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function Sp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,lo=null,co=null;function lg(t){if(t=il(t)){if(typeof th!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=xu(e),th(t.stateNode,t.type,e))}}function u1(t){lo?co?co.push(t):co=[t]:lo=t}function f1(){if(lo){var t=lo,e=co;if(co=lo=null,lg(t),e)for(t=0;t<e.length;t++)lg(e[t])}}function d1(t,e){return t(e)}function h1(){}var Tf=!1;function p1(t,e,n){if(Tf)return t(e,n);Tf=!0;try{return d1(t,e,n)}finally{Tf=!1,(lo!==null||co!==null)&&(h1(),f1())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var i=xu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var nh=!1;if($i)try{var $o={};Object.defineProperty($o,"passive",{get:function(){nh=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{nh=!1}function XM(t,e,n,i,r,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var hs=!1,Dc=null,Uc=!1,ih=null,$M={onError:function(t){hs=!0,Dc=t}};function YM(t,e,n,i,r,a,o,s,l){hs=!1,Dc=null,XM.apply($M,arguments)}function qM(t,e,n,i,r,a,o,s,l){if(YM.apply(this,arguments),hs){if(hs){var c=Dc;hs=!1,Dc=null}else throw Error(Q(198));Uc||(Uc=!0,ih=c)}}function Ma(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cg(t){if(Ma(t)!==t)throw Error(Q(188))}function KM(t){var e=t.alternate;if(!e){if(e=Ma(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return cg(r),t;if(a===i)return cg(r),e;a=a.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function g1(t){return t=KM(t),t!==null?v1(t):null}function v1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v1(t);if(e!==null)return e;t=t.sibling}return null}var _1=Nn.unstable_scheduleCallback,ug=Nn.unstable_cancelCallback,ZM=Nn.unstable_shouldYield,QM=Nn.unstable_requestPaint,bt=Nn.unstable_now,JM=Nn.unstable_getCurrentPriorityLevel,Mp=Nn.unstable_ImmediatePriority,y1=Nn.unstable_UserBlockingPriority,Nc=Nn.unstable_NormalPriority,eE=Nn.unstable_LowPriority,x1=Nn.unstable_IdlePriority,gu=null,bi=null;function tE(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:rE,nE=Math.log,iE=Math.LN2;function rE(t){return t>>>=0,t===0?32:31-(nE(t)/iE|0)|0}var _l=64,yl=4194304;function ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=ss(s):(a&=o,a!==0&&(i=ss(a)))}else o=n&~r,o!==0?i=ss(o):a!==0&&(i=ss(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ui(e),r=1<<n,i|=t[n],e&=~r;return i}function aE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-ui(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=aE(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S1(){var t=_l;return _l<<=1,!(_l&4194240)&&(_l=64),t}function Af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ui(e),t[e]=n}function sE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ui(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function Ep(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ui(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function M1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E1,wp,w1,b1,T1,ah=!1,xl=[],yr=null,xr=null,Sr=null,Cs=new Map,Rs=new Map,dr=[],lE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Yo(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=il(e),e!==null&&wp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cE(t,e,n,i,r){switch(e){case"focusin":return yr=Yo(yr,t,e,n,i,r),!0;case"dragenter":return xr=Yo(xr,t,e,n,i,r),!0;case"mouseover":return Sr=Yo(Sr,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return Cs.set(a,Yo(Cs.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Rs.set(a,Yo(Rs.get(a)||null,t,e,n,i,r)),!0}return!1}function A1(t){var e=Qr(t.target);if(e!==null){var n=Ma(e);if(n!==null){if(e=n.tag,e===13){if(e=m1(n),e!==null){t.blockedOn=e,T1(t.priority,function(){w1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);eh=i,n.target.dispatchEvent(i),eh=null}else return e=il(n),e!==null&&wp(e),t.blockedOn=n,!1;e.shift()}return!0}function dg(t,e,n){mc(t)&&n.delete(e)}function uE(){ah=!1,yr!==null&&mc(yr)&&(yr=null),xr!==null&&mc(xr)&&(xr=null),Sr!==null&&mc(Sr)&&(Sr=null),Cs.forEach(dg),Rs.forEach(dg)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,ah||(ah=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,uE)))}function Ps(t){function e(r){return qo(r,t)}if(0<xl.length){qo(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&qo(yr,t),xr!==null&&qo(xr,t),Sr!==null&&qo(Sr,t),Cs.forEach(e),Rs.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)A1(n),n.blockedOn===null&&dr.shift()}var uo=er.ReactCurrentBatchConfig,kc=!0;function fE(t,e,n,i){var r=Je,a=uo.transition;uo.transition=null;try{Je=1,bp(t,e,n,i)}finally{Je=r,uo.transition=a}}function dE(t,e,n,i){var r=Je,a=uo.transition;uo.transition=null;try{Je=4,bp(t,e,n,i)}finally{Je=r,uo.transition=a}}function bp(t,e,n,i){if(kc){var r=oh(t,e,n,i);if(r===null)kf(t,e,i,Fc,n),fg(t,i);else if(cE(r,t,e,n,i))i.stopPropagation();else if(fg(t,i),e&4&&-1<lE.indexOf(t)){for(;r!==null;){var a=il(r);if(a!==null&&E1(a),a=oh(t,e,n,i),a===null&&kf(t,e,i,Fc,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else kf(t,e,i,null,n)}}var Fc=null;function oh(t,e,n,i){if(Fc=null,t=Sp(i),t=Qr(t),t!==null)if(e=Ma(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fc=t,null}function C1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(JM()){case Mp:return 1;case y1:return 4;case Nc:case eE:return 16;case x1:return 536870912;default:return 16}default:return 16}}var pr=null,Tp=null,gc=null;function R1(){if(gc)return gc;var t,e=Tp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[a-i];i++);return gc=r.slice(t,1<i?1-i:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Sl(){return!0}function hg(){return!1}function kn(t){function e(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Sl:hg,this.isPropagationStopped=hg,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sl)},persist:function(){},isPersistent:Sl}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ap=kn(Oo),nl=yt({},Oo,{view:0,detail:0}),hE=kn(nl),Cf,Rf,Ko,vu=yt({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ko&&(Ko&&t.type==="mousemove"?(Cf=t.screenX-Ko.screenX,Rf=t.screenY-Ko.screenY):Rf=Cf=0,Ko=t),Cf)},movementY:function(t){return"movementY"in t?t.movementY:Rf}}),pg=kn(vu),pE=yt({},vu,{dataTransfer:0}),mE=kn(pE),gE=yt({},nl,{relatedTarget:0}),Pf=kn(gE),vE=yt({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),_E=kn(vE),yE=yt({},Oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xE=kn(yE),SE=yt({},Oo,{data:0}),mg=kn(SE),ME={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wE[t])?!!e[t]:!1}function Cp(){return bE}var TE=yt({},nl,{key:function(t){if(t.key){var e=ME[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cp,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AE=kn(TE),CE=yt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gg=kn(CE),RE=yt({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cp}),PE=kn(RE),LE=yt({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),IE=kn(LE),DE=yt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),UE=kn(DE),NE=[9,13,27,32],Rp=$i&&"CompositionEvent"in window,ps=null;$i&&"documentMode"in document&&(ps=document.documentMode);var OE=$i&&"TextEvent"in window&&!ps,P1=$i&&(!Rp||ps&&8<ps&&11>=ps),vg=String.fromCharCode(32),_g=!1;function L1(t,e){switch(t){case"keyup":return NE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ja=!1;function kE(t,e){switch(t){case"compositionend":return I1(e);case"keypress":return e.which!==32?null:(_g=!0,vg);case"textInput":return t=e.data,t===vg&&_g?null:t;default:return null}}function FE(t,e){if(ja)return t==="compositionend"||!Rp&&L1(t,e)?(t=R1(),gc=Tp=pr=null,ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P1&&e.locale!=="ko"?null:e.data;default:return null}}var zE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!zE[t.type]:e==="textarea"}function D1(t,e,n,i){u1(i),e=zc(e,"onChange"),0<e.length&&(n=new Ap("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ms=null,Ls=null;function BE(t){W1(t,0)}function _u(t){var e=Ya(t);if(i1(e))return t}function HE(t,e){if(t==="change")return e}var U1=!1;if($i){var Lf;if($i){var If="oninput"in document;if(!If){var xg=document.createElement("div");xg.setAttribute("oninput","return;"),If=typeof xg.oninput=="function"}Lf=If}else Lf=!1;U1=Lf&&(!document.documentMode||9<document.documentMode)}function Sg(){ms&&(ms.detachEvent("onpropertychange",N1),Ls=ms=null)}function N1(t){if(t.propertyName==="value"&&_u(Ls)){var e=[];D1(e,Ls,t,Sp(t)),p1(BE,e)}}function GE(t,e,n){t==="focusin"?(Sg(),ms=e,Ls=n,ms.attachEvent("onpropertychange",N1)):t==="focusout"&&Sg()}function VE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(Ls)}function WE(t,e){if(t==="click")return _u(e)}function jE(t,e){if(t==="input"||t==="change")return _u(e)}function XE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:XE;function Is(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function Mg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Eg(t,e){var n=Mg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mg(n)}}function O1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function k1(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $E(t){var e=k1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O1(n.ownerDocument.documentElement,n)){if(i!==null&&Pp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Eg(n,a);var o=Eg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YE=$i&&"documentMode"in document&&11>=document.documentMode,Xa=null,sh=null,gs=null,lh=!1;function wg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||Xa==null||Xa!==Ic(i)||(i=Xa,"selectionStart"in i&&Pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gs&&Is(gs,i)||(gs=i,i=zc(sh,"onSelect"),0<i.length&&(e=new Ap("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xa)))}function Ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $a={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},Df={},F1={};$i&&(F1=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function yu(t){if(Df[t])return Df[t];if(!$a[t])return t;var e=$a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F1)return Df[t]=e[n];return t}var z1=yu("animationend"),B1=yu("animationiteration"),H1=yu("animationstart"),G1=yu("transitionend"),V1=new Map,bg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){V1.set(t,e),Sa(e,[t])}for(var Uf=0;Uf<bg.length;Uf++){var Nf=bg[Uf],qE=Nf.toLowerCase(),KE=Nf[0].toUpperCase()+Nf.slice(1);kr(qE,"on"+KE)}kr(z1,"onAnimationEnd");kr(B1,"onAnimationIteration");kr(H1,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(G1,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ls="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ls));function Tg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,qM(i,e,void 0,t),t.currentTarget=null}function W1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;Tg(r,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;Tg(r,s,c),a=l}}}if(Uc)throw t=ih,Uc=!1,ih=null,t}function st(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var i=t+"__bubble";n.has(i)||(j1(e,t,2,!1),n.add(i))}function Of(t,e,n){var i=0;e&&(i|=4),j1(n,t,i,e)}var El="_reactListening"+Math.random().toString(36).slice(2);function Ds(t){if(!t[El]){t[El]=!0,Q_.forEach(function(n){n!=="selectionchange"&&(ZE.has(n)||Of(n,!1,t),Of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[El]||(e[El]=!0,Of("selectionchange",!1,e))}}function j1(t,e,n,i){switch(C1(e)){case 1:var r=fE;break;case 4:r=dE;break;default:r=bp}n=r.bind(null,e,n,t),r=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kf(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Qr(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}p1(function(){var c=a,u=Sp(n),f=[];e:{var d=V1.get(t);if(d!==void 0){var p=Ap,v=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":p=AE;break;case"focusin":v="focus",p=Pf;break;case"focusout":v="blur",p=Pf;break;case"beforeblur":case"afterblur":p=Pf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=PE;break;case z1:case B1:case H1:p=_E;break;case G1:p=IE;break;case"scroll":p=hE;break;case"wheel":p=UE;break;case"copy":case"cut":case"paste":p=xE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gg}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var _=c,m;_!==null;){m=_;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,h!==null&&(x=As(_,h),x!=null&&y.push(Us(_,x,m)))),g)break;_=_.return}0<y.length&&(d=new p(d,v,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==eh&&(v=n.relatedTarget||n.fromElement)&&(Qr(v)||v[Yi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Qr(v):null,v!==null&&(g=Ma(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=pg,x="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=gg,x="onPointerLeave",h="onPointerEnter",_="pointer"),g=p==null?d:Ya(p),m=v==null?d:Ya(v),d=new y(x,_+"leave",p,n,u),d.target=g,d.relatedTarget=m,x=null,Qr(u)===c&&(y=new y(h,_+"enter",v,n,u),y.target=m,y.relatedTarget=g,x=y),g=x,p&&v)t:{for(y=p,h=v,_=0,m=y;m;m=Ea(m))_++;for(m=0,x=h;x;x=Ea(x))m++;for(;0<_-m;)y=Ea(y),_--;for(;0<m-_;)h=Ea(h),m--;for(;_--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ea(y),h=Ea(h)}y=null}else y=null;p!==null&&Ag(f,d,p,y,!1),v!==null&&g!==null&&Ag(f,g,v,y,!0)}}e:{if(d=c?Ya(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=HE;else if(yg(d))if(U1)S=jE;else{S=VE;var b=GE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=WE);if(S&&(S=S(t,c))){D1(f,S,n,u);break e}b&&b(t,d,c),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&qd(d,"number",d.value)}switch(b=c?Ya(c):window,t){case"focusin":(yg(b)||b.contentEditable==="true")&&(Xa=b,sh=c,gs=null);break;case"focusout":gs=sh=Xa=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,wg(f,n,u);break;case"selectionchange":if(YE)break;case"keydown":case"keyup":wg(f,n,u)}var E;if(Rp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ja?L1(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(P1&&n.locale!=="ko"&&(ja||R!=="onCompositionStart"?R==="onCompositionEnd"&&ja&&(E=R1()):(pr=u,Tp="value"in pr?pr.value:pr.textContent,ja=!0)),b=zc(c,R),0<b.length&&(R=new mg(R,t,null,n,u),f.push({event:R,listeners:b}),E?R.data=E:(E=I1(n),E!==null&&(R.data=E)))),(E=OE?kE(t,n):FE(t,n))&&(c=zc(c,"onBeforeInput"),0<c.length&&(u=new mg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}W1(f,e)})}function Us(t,e,n){return{instance:t,listener:e,currentTarget:n}}function zc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=As(t,n),a!=null&&i.unshift(Us(t,a,r)),a=As(t,e),a!=null&&i.push(Us(t,a,r))),t=t.return}return i}function Ea(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ag(t,e,n,i,r){for(var a=e._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,r?(l=As(n,a),l!=null&&o.unshift(Us(n,l,s))):r||(l=As(n,a),l!=null&&o.push(Us(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var QE=/\r\n?/g,JE=/\u0000|\uFFFD/g;function Cg(t){return(typeof t=="string"?t:""+t).replace(QE,`
`).replace(JE,"")}function wl(t,e,n){if(e=Cg(e),Cg(t)!==e&&n)throw Error(Q(425))}function Bc(){}var ch=null,uh=null;function fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,ew=typeof clearTimeout=="function"?clearTimeout:void 0,Rg=typeof Promise=="function"?Promise:void 0,tw=typeof queueMicrotask=="function"?queueMicrotask:typeof Rg<"u"?function(t){return Rg.resolve(null).then(t).catch(nw)}:dh;function nw(t){setTimeout(function(){throw t})}function Ff(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ps(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ps(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ko,Ns="__reactProps$"+ko,Yi="__reactContainer$"+ko,hh="__reactEvents$"+ko,iw="__reactListeners$"+ko,rw="__reactHandles$"+ko;function Qr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pg(t);t!==null;){if(n=t[Mi])return n;t=Pg(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[Mi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ya(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function xu(t){return t[Ns]||null}var ph=[],qa=-1;function Fr(t){return{current:t}}function ft(t){0>qa||(t.current=ph[qa],ph[qa]=null,qa--)}function at(t,e){qa++,ph[qa]=t.current,t.current=e}var Pr={},nn=Fr(Pr),Sn=Fr(!1),da=Pr;function yo(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Hc(){ft(Sn),ft(nn)}function Lg(t,e,n){if(nn.current!==Pr)throw Error(Q(168));at(nn,e),at(Sn,n)}function X1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,GM(t)||"Unknown",r));return yt({},n,i)}function Gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,da=nn.current,at(nn,t),at(Sn,Sn.current),!0}function Ig(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=X1(t,e,da),i.__reactInternalMemoizedMergedChildContext=t,ft(Sn),ft(nn),at(nn,t)):ft(Sn),at(Sn,n)}var Fi=null,Su=!1,zf=!1;function $1(t){Fi===null?Fi=[t]:Fi.push(t)}function aw(t){Su=!0,$1(t)}function zr(){if(!zf&&Fi!==null){zf=!0;var t=0,e=Je;try{var n=Fi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Su=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),_1(Mp,zr),r}finally{Je=e,zf=!1}}return null}var Ka=[],Za=0,Vc=null,Wc=0,Gn=[],Vn=0,ha=null,zi=1,Bi="";function Yr(t,e){Ka[Za++]=Wc,Ka[Za++]=Vc,Vc=t,Wc=e}function Y1(t,e,n){Gn[Vn++]=zi,Gn[Vn++]=Bi,Gn[Vn++]=ha,ha=t;var i=zi;t=Bi;var r=32-ui(i)-1;i&=~(1<<r),n+=1;var a=32-ui(e)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-ui(e)+r|n<<r|i,Bi=a+t}else zi=1<<a|n<<r|i,Bi=t}function Lp(t){t.return!==null&&(Yr(t,1),Y1(t,1,0))}function Ip(t){for(;t===Vc;)Vc=Ka[--Za],Ka[Za]=null,Wc=Ka[--Za],Ka[Za]=null;for(;t===ha;)ha=Gn[--Vn],Gn[Vn]=null,Bi=Gn[--Vn],Gn[Vn]=null,zi=Gn[--Vn],Gn[Vn]=null}var Dn=null,In=null,pt=!1,ai=null;function q1(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,In=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ha!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,In=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(pt){var e=In;if(e){var n=e;if(!Dg(t,e)){if(mh(t))throw Error(Q(418));e=Mr(n.nextSibling);var i=Dn;e&&Dg(t,e)?q1(i,n):(t.flags=t.flags&-4097|2,pt=!1,Dn=t)}}else{if(mh(t))throw Error(Q(418));t.flags=t.flags&-4097|2,pt=!1,Dn=t}}}function Ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function bl(t){if(t!==Dn)return!1;if(!pt)return Ug(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fh(t.type,t.memoizedProps)),e&&(e=In)){if(mh(t))throw K1(),Error(Q(418));for(;e;)q1(t,e),e=Mr(e.nextSibling)}if(Ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Dn?Mr(t.stateNode.nextSibling):null;return!0}function K1(){for(var t=In;t;)t=Mr(t.nextSibling)}function xo(){In=Dn=null,pt=!1}function Dp(t){ai===null?ai=[t]:ai.push(t)}var ow=er.ReactCurrentBatchConfig;function ii(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var jc=Fr(null),Xc=null,Qa=null,Up=null;function Np(){Up=Qa=Xc=null}function Op(t){var e=jc.current;ft(jc),t._currentValue=e}function vh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fo(t,e){Xc=t,Up=Qa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function qn(t){var e=t._currentValue;if(Up!==t)if(t={context:t,memoizedValue:e,next:null},Qa===null){if(Xc===null)throw Error(Q(308));Qa=t,Xc.dependencies={lanes:0,firstContext:t}}else Qa=Qa.next=t;return e}var Jr=null;function kp(t){Jr===null?Jr=[t]:Jr.push(t)}function Z1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function _c(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}function Ng(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;fr=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;o=0,u=c=l=null,s=a;do{var d=s.lane,p=s.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=t,y=s;switch(d=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=yt({},f,d);break e;case 2:fr=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;d=s,s=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);ma|=o,t.lanes=o,t.memoizedState=f}}function Og(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var J1=new Z_.Component().refs;function _h(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mu={isMounted:function(t){return(t=t._reactInternals)?Ma(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=fn(),r=br(t),a=Gi(i,r);a.payload=e,n!=null&&(a.callback=n),e=Er(t,a,r),e!==null&&(fi(e,t,r,i),_c(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=fn(),r=br(t),a=Gi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Er(t,a,r),e!==null&&(fi(e,t,r,i),_c(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=fn(),i=br(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Er(t,r,i),e!==null&&(fi(e,t,i,n),_c(e,t,i))}};function kg(t,e,n,i,r,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Is(n,i)||!Is(r,a):!0}function ey(t,e,n){var i=!1,r=Pr,a=e.contextType;return typeof a=="object"&&a!==null?a=qn(a):(r=Mn(e)?da:nn.current,i=e.contextTypes,a=(i=i!=null)?yo(t,r):Pr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Fg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mu.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=J1,Fp(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=qn(a):(a=Mn(e)?da:nn.current,r.context=yo(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(_h(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mu.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=r.refs;s===J1&&(s=r.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zg(t){var e=t._init;return e(t._payload)}function ty(t){function e(h,_){if(t){var m=h.deletions;m===null?(h.deletions=[_],h.flags|=16):m.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Tr(h,_),h.index=0,h.sibling=null,h}function a(h,_,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<_?(h.flags|=2,_):m):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function s(h,_,m,x){return _===null||_.tag!==6?(_=Xf(m,h.mode,x),_.return=h,_):(_=r(_,m),_.return=h,_)}function l(h,_,m,x){var S=m.type;return S===Wa?u(h,_,m.props.children,x,m.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&zg(S)===_.type)?(x=r(_,m.props),x.ref=Zo(h,_,m),x.return=h,x):(x=wc(m.type,m.key,m.props,null,h.mode,x),x.ref=Zo(h,_,m),x.return=h,x)}function c(h,_,m,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=$f(m,h.mode,x),_.return=h,_):(_=r(_,m.children||[]),_.return=h,_)}function u(h,_,m,x,S){return _===null||_.tag!==7?(_=aa(m,h.mode,x,S),_.return=h,_):(_=r(_,m),_.return=h,_)}function f(h,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Xf(""+_,h.mode,m),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ml:return m=wc(_.type,_.key,_.props,null,h.mode,m),m.ref=Zo(h,null,_),m.return=h,m;case Va:return _=$f(_,h.mode,m),_.return=h,_;case ur:var x=_._init;return f(h,x(_._payload),m)}if(os(_)||Xo(_))return _=aa(_,h.mode,m,null),_.return=h,_;Tl(h,_)}return null}function d(h,_,m,x){var S=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(h,_,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ml:return m.key===S?l(h,_,m,x):null;case Va:return m.key===S?c(h,_,m,x):null;case ur:return S=m._init,d(h,_,S(m._payload),x)}if(os(m)||Xo(m))return S!==null?null:u(h,_,m,x,null);Tl(h,m)}return null}function p(h,_,m,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(m)||null,s(_,h,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ml:return h=h.get(x.key===null?m:x.key)||null,l(_,h,x,S);case Va:return h=h.get(x.key===null?m:x.key)||null,c(_,h,x,S);case ur:var b=x._init;return p(h,_,m,b(x._payload),S)}if(os(x)||Xo(x))return h=h.get(m)||null,u(_,h,x,S,null);Tl(_,x)}return null}function v(h,_,m,x){for(var S=null,b=null,E=_,R=_=0,M=null;E!==null&&R<m.length;R++){E.index>R?(M=E,E=null):M=E.sibling;var T=d(h,E,m[R],x);if(T===null){E===null&&(E=M);break}t&&E&&T.alternate===null&&e(h,E),_=a(T,_,R),b===null?S=T:b.sibling=T,b=T,E=M}if(R===m.length)return n(h,E),pt&&Yr(h,R),S;if(E===null){for(;R<m.length;R++)E=f(h,m[R],x),E!==null&&(_=a(E,_,R),b===null?S=E:b.sibling=E,b=E);return pt&&Yr(h,R),S}for(E=i(h,E);R<m.length;R++)M=p(E,h,R,m[R],x),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?R:M.key),_=a(M,_,R),b===null?S=M:b.sibling=M,b=M);return t&&E.forEach(function(z){return e(h,z)}),pt&&Yr(h,R),S}function y(h,_,m,x){var S=Xo(m);if(typeof S!="function")throw Error(Q(150));if(m=S.call(m),m==null)throw Error(Q(151));for(var b=S=null,E=_,R=_=0,M=null,T=m.next();E!==null&&!T.done;R++,T=m.next()){E.index>R?(M=E,E=null):M=E.sibling;var z=d(h,E,T.value,x);if(z===null){E===null&&(E=M);break}t&&E&&z.alternate===null&&e(h,E),_=a(z,_,R),b===null?S=z:b.sibling=z,b=z,E=M}if(T.done)return n(h,E),pt&&Yr(h,R),S;if(E===null){for(;!T.done;R++,T=m.next())T=f(h,T.value,x),T!==null&&(_=a(T,_,R),b===null?S=T:b.sibling=T,b=T);return pt&&Yr(h,R),S}for(E=i(h,E);!T.done;R++,T=m.next())T=p(E,h,R,T.value,x),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?R:T.key),_=a(T,_,R),b===null?S=T:b.sibling=T,b=T);return t&&E.forEach(function(K){return e(h,K)}),pt&&Yr(h,R),S}function g(h,_,m,x){if(typeof m=="object"&&m!==null&&m.type===Wa&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ml:e:{for(var S=m.key,b=_;b!==null;){if(b.key===S){if(S=m.type,S===Wa){if(b.tag===7){n(h,b.sibling),_=r(b,m.props.children),_.return=h,h=_;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===ur&&zg(S)===b.type){n(h,b.sibling),_=r(b,m.props),_.ref=Zo(h,b,m),_.return=h,h=_;break e}n(h,b);break}else e(h,b);b=b.sibling}m.type===Wa?(_=aa(m.props.children,h.mode,x,m.key),_.return=h,h=_):(x=wc(m.type,m.key,m.props,null,h.mode,x),x.ref=Zo(h,_,m),x.return=h,h=x)}return o(h);case Va:e:{for(b=m.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(h,_.sibling),_=r(_,m.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=$f(m,h.mode,x),_.return=h,h=_}return o(h);case ur:return b=m._init,g(h,_,b(m._payload),x)}if(os(m))return v(h,_,m,x);if(Xo(m))return y(h,_,m,x);Tl(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,m),_.return=h,h=_):(n(h,_),_=Xf(m,h.mode,x),_.return=h,h=_),o(h)):n(h,_)}return g}var So=ty(!0),ny=ty(!1),rl={},Ti=Fr(rl),Os=Fr(rl),ks=Fr(rl);function ea(t){if(t===rl)throw Error(Q(174));return t}function zp(t,e){switch(at(ks,e),at(Os,t),at(Ti,rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zd(e,t)}ft(Ti),at(Ti,e)}function Mo(){ft(Ti),ft(Os),ft(ks)}function iy(t){ea(ks.current);var e=ea(Ti.current),n=Zd(e,t.type);e!==n&&(at(Os,t),at(Ti,n))}function Bp(t){Os.current===t&&(ft(Ti),ft(Os))}var vt=Fr(0);function Yc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bf=[];function Hp(){for(var t=0;t<Bf.length;t++)Bf[t]._workInProgressVersionPrimary=null;Bf.length=0}var yc=er.ReactCurrentDispatcher,Hf=er.ReactCurrentBatchConfig,pa=0,_t=null,Lt=null,kt=null,qc=!1,vs=!1,Fs=0,sw=0;function qt(){throw Error(Q(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Vp(t,e,n,i,r,a){if(pa=a,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yc.current=t===null||t.memoizedState===null?fw:dw,t=n(i,r),vs){a=0;do{if(vs=!1,Fs=0,25<=a)throw Error(Q(301));a+=1,kt=Lt=null,e.updateQueue=null,yc.current=hw,t=n(i,r)}while(vs)}if(yc.current=Kc,e=Lt!==null&&Lt.next!==null,pa=0,kt=Lt=_t=null,qc=!1,e)throw Error(Q(300));return t}function Wp(){var t=Fs!==0;return Fs=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?_t.memoizedState=kt=t:kt=kt.next=t,kt}function Kn(){if(Lt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=kt===null?_t.memoizedState:kt.next;if(e!==null)kt=e,Lt=t;else{if(t===null)throw Error(Q(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?_t.memoizedState=kt=t:kt=kt.next=t}return kt}function zs(t,e){return typeof e=="function"?e(t):e}function Gf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,c=a;do{var u=c.lane;if((pa&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=i):l=l.next=f,_t.lanes|=u,ma|=u}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,hi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,_t.lanes|=a,ma|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vf(t){var e=Kn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=t(a,o.action),o=o.next;while(o!==r);hi(a,e.memoizedState)||(yn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function ry(){}function ay(t,e){var n=_t,i=Kn(),r=e(),a=!hi(i.memoizedState,r);if(a&&(i.memoizedState=r,yn=!0),i=i.queue,jp(ly.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Bs(9,sy.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(Q(349));pa&30||oy(n,e,r)}return r}function oy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function sy(t,e,n,i){e.value=n,e.getSnapshot=i,cy(e)&&uy(t)}function ly(t,e,n){return n(function(){cy(e)&&uy(t)})}function cy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function uy(t){var e=qi(t,1);e!==null&&fi(e,t,1,-1)}function Bg(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:t},e.queue=t,t=t.dispatch=uw.bind(null,_t,t),[e.memoizedState,t]}function Bs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fy(){return Kn().memoizedState}function xc(t,e,n,i){var r=_i();_t.flags|=t,r.memoizedState=Bs(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=Kn();i=i===void 0?null:i;var a=void 0;if(Lt!==null){var o=Lt.memoizedState;if(a=o.destroy,i!==null&&Gp(i,o.deps)){r.memoizedState=Bs(e,n,a,i);return}}_t.flags|=t,r.memoizedState=Bs(1|e,n,a,i)}function Hg(t,e){return xc(8390656,8,t,e)}function jp(t,e){return Eu(2048,8,t,e)}function dy(t,e){return Eu(4,2,t,e)}function hy(t,e){return Eu(4,4,t,e)}function py(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function my(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,py.bind(null,e,t),n)}function Xp(){}function gy(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vy(t,e){var n=Kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _y(t,e,n){return pa&21?(hi(n,e)||(n=S1(),_t.lanes|=n,ma|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function lw(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Hf.transition;Hf.transition={};try{t(!1),e()}finally{Je=n,Hf.transition=i}}function yy(){return Kn().memoizedState}function cw(t,e,n){var i=br(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},xy(t))Sy(e,n);else if(n=Z1(t,e,n,i),n!==null){var r=fn();fi(n,t,i,r),My(n,e,i)}}function uw(t,e,n){var i=br(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(xy(t))Sy(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,hi(s,o)){var l=e.interleaved;l===null?(r.next=r,kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Z1(t,e,r,i),n!==null&&(r=fn(),fi(n,t,i,r),My(n,e,i))}}function xy(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function Sy(t,e){vs=qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function My(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ep(t,n)}}var Kc={readContext:qn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},fw={readContext:qn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:qn,useEffect:Hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xc(4194308,4,py.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return xc(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cw.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:Bg,useDebugValue:Xp,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=Bg(!1),e=t[0];return t=lw.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=_i();if(pt){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),zt===null)throw Error(Q(349));pa&30||oy(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,Hg(ly.bind(null,i,a,t),[t]),i.flags|=2048,Bs(9,sy.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=_i(),e=zt.identifierPrefix;if(pt){var n=Bi,i=zi;n=(i&~(1<<32-ui(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dw={readContext:qn,useCallback:gy,useContext:qn,useEffect:jp,useImperativeHandle:my,useInsertionEffect:dy,useLayoutEffect:hy,useMemo:vy,useReducer:Gf,useRef:fy,useState:function(){return Gf(zs)},useDebugValue:Xp,useDeferredValue:function(t){var e=Kn();return _y(e,Lt.memoizedState,t)},useTransition:function(){var t=Gf(zs)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:ry,useSyncExternalStore:ay,useId:yy,unstable_isNewReconciler:!1},hw={readContext:qn,useCallback:gy,useContext:qn,useEffect:jp,useImperativeHandle:my,useInsertionEffect:dy,useLayoutEffect:hy,useMemo:vy,useReducer:Vf,useRef:fy,useState:function(){return Vf(zs)},useDebugValue:Xp,useDeferredValue:function(t){var e=Kn();return Lt===null?e.memoizedState=t:_y(e,Lt.memoizedState,t)},useTransition:function(){var t=Vf(zs)[0],e=Kn().memoizedState;return[t,e]},useMutableSource:ry,useSyncExternalStore:ay,useId:yy,unstable_isNewReconciler:!1};function Eo(t,e){try{var n="",i=e;do n+=HM(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Wf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pw=typeof WeakMap=="function"?WeakMap:Map;function Ey(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qc||(Qc=!0,Ph=i),xh(t,e)},n}function wy(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xh(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){xh(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Gg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new pw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cw.bind(null,t,e,n),e.then(t,t))}function Vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var mw=er.ReactCurrentOwner,yn=!1;function ln(t,e,n,i){e.child=t===null?ny(e,null,n,i):So(e,t.child,n,i)}function jg(t,e,n,i,r){n=n.render;var a=e.ref;return fo(e,r),i=Vp(t,e,n,i,a,r),n=Wp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(pt&&n&&Lp(e),e.flags|=1,ln(t,e,i,r),e.child)}function Xg(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!em(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,by(t,e,a,i,r)):(t=wc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Is,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=Tr(a,i),t.ref=e.ref,t.return=e,e.child=t}function by(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Is(a,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return Sh(t,e,n,i,r)}function Ty(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(eo,Rn),Rn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(eo,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,at(eo,Rn),Rn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,at(eo,Rn),Rn|=i;return ln(t,e,r,n),e.child}function Ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sh(t,e,n,i,r){var a=Mn(n)?da:nn.current;return a=yo(e,a),fo(e,r),n=Vp(t,e,n,i,a,r),i=Wp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(pt&&i&&Lp(e),e.flags|=1,ln(t,e,n,r),e.child)}function $g(t,e,n,i,r){if(Mn(n)){var a=!0;Gc(e)}else a=!1;if(fo(e,r),e.stateNode===null)Sc(t,e),ey(e,n,i),yh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=qn(c):(c=Mn(n)?da:nn.current,c=yo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&Fg(e,o,i,c),fr=!1;var d=e.memoizedState;o.state=d,$c(e,i,o,r),l=e.memoizedState,s!==i||d!==l||Sn.current||fr?(typeof u=="function"&&(_h(e,n,u,i),l=e.memoizedState),(s=fr||kg(e,n,s,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Q1(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:ii(e.type,s),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=qn(l):(l=Mn(n)?da:nn.current,l=yo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Fg(e,o,i,l),fr=!1,d=e.memoizedState,o.state=d,$c(e,i,o,r);var v=e.memoizedState;s!==f||d!==v||Sn.current||fr?(typeof p=="function"&&(_h(e,n,p,i),v=e.memoizedState),(c=fr||kg(e,n,c,i,d,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Mh(t,e,n,i,a,r)}function Mh(t,e,n,i,r,a){Ay(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Ig(e,n,!1),Ki(t,e,a);i=e.stateNode,mw.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,a),e.child=So(e,null,s,a)):ln(t,e,s,a),e.memoizedState=i.state,r&&Ig(e,n,!0),e.child}function Cy(t){var e=t.stateNode;e.pendingContext?Lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lg(t,e.context,!1),zp(t,e.containerInfo)}function Yg(t,e,n,i,r){return xo(),Dp(r),e.flags|=256,ln(t,e,n,i),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function wh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ry(t,e,n){var i=e.pendingProps,r=vt.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(vt,r&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Tu(o,i,0,null),t=aa(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=wh(n),e.memoizedState=Eh,t):$p(e,o));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return gw(t,e,o,i,s,r,n);if(a){a=i.fallback,o=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=Tr(s,a):(a=aa(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?wh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=Eh,i}return a=t.child,t=a.sibling,i=Tr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $p(t,e){return e=Tu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,i){return i!==null&&Dp(i),So(e,t.child,null,n),t=$p(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gw(t,e,n,i,r,a,o){if(n)return e.flags&256?(e.flags&=-257,i=Wf(Error(Q(422))),Al(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Tu({mode:"visible",children:i.children},r,0,null),a=aa(a,r,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=wh(o),e.memoizedState=Eh,a);if(!(e.mode&1))return Al(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(Q(419)),i=Wf(a,i,void 0),Al(t,e,o,i)}if(s=(o&t.childLanes)!==0,yn||s){if(i=zt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,qi(t,r),fi(i,t,r,-1))}return Jp(),i=Wf(Error(Q(421))),Al(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Rw.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,In=Mr(r.nextSibling),Dn=e,pt=!0,ai=null,t!==null&&(Gn[Vn++]=zi,Gn[Vn++]=Bi,Gn[Vn++]=ha,zi=t.id,Bi=t.overflow,ha=e),e=$p(e,i.children),e.flags|=4096,e)}function qg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),vh(t.return,e,n)}function jf(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Py(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(ln(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qg(t,n,e);else if(t.tag===19)qg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Yc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jf(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Yc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jf(e,!0,n,null,a);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ma|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vw(t,e,n){switch(e.tag){case 3:Cy(e),xo();break;case 5:iy(e);break;case 1:Mn(e.type)&&Gc(e);break;case 4:zp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Ry(t,e,n):(at(vt,vt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);at(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Py(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ty(t,e,n)}return Ki(t,e,n)}var Ly,bh,Iy,Dy;Ly=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bh=function(){};Iy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ea(Ti.current);var a=null;switch(n){case"input":r=$d(t,r),i=$d(t,i),a=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),a=[];break;case"textarea":r=Kd(t,r),i=Kd(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Bc)}Qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bs.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&st("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Dy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _w(t,e,n){var i=e.pendingProps;switch(Ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(e),null;case 1:return Mn(e.type)&&Hc(),Kt(e),null;case 3:return i=e.stateNode,Mo(),ft(Sn),ft(nn),Hp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(bl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Dh(ai),ai=null))),bh(t,e),Kt(e),null;case 5:Bp(e);var r=ea(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)Iy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Kt(e),null}if(t=ea(Ti.current),bl(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Mi]=e,i[Ns]=a,t=(e.mode&1)!==0,n){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<ls.length;r++)st(ls[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":rg(i,a),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},st("invalid",i);break;case"textarea":og(i,a),st("invalid",i)}Qd(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&wl(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&wl(i.textContent,s,t),r=["children",""+s]):bs.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&st("scroll",i)}switch(n){case"input":gl(i),ag(i,a,!0);break;case"textarea":gl(i),sg(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Bc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Mi]=e,t[Ns]=i,Ly(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jd(n,i),n){case"dialog":st("cancel",t),st("close",t),r=i;break;case"iframe":case"object":case"embed":st("load",t),r=i;break;case"video":case"audio":for(r=0;r<ls.length;r++)st(ls[r],t);r=i;break;case"source":st("error",t),r=i;break;case"img":case"image":case"link":st("error",t),st("load",t),r=i;break;case"details":st("toggle",t),r=i;break;case"input":rg(t,i),r=$d(t,i),st("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),st("invalid",t);break;case"textarea":og(t,i),r=Kd(t,i),st("invalid",t);break;default:r=i}Qd(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?c1(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s1(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(bs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&st("scroll",t):l!=null&&vp(t,a,l,o))}switch(n){case"input":gl(t),ag(t,i,!1);break;case"textarea":gl(t),sg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?so(t,!!i.multiple,a,!1):i.defaultValue!=null&&so(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Bc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Kt(e),null;case 6:if(t&&e.stateNode!=null)Dy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=ea(ks.current),ea(Ti.current),bl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(a=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wl(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return Kt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&In!==null&&e.mode&1&&!(e.flags&128))K1(),xo(),e.flags|=98560,a=!1;else if(a=bl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(Q(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(Q(317));a[Mi]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Kt(e),a=!1}else ai!==null&&(Dh(ai),ai=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?It===0&&(It=3):Jp())),e.updateQueue!==null&&(e.flags|=4),Kt(e),null);case 4:return Mo(),bh(t,e),t===null&&Ds(e.stateNode.containerInfo),Kt(e),null;case 10:return Op(e.type._context),Kt(e),null;case 17:return Mn(e.type)&&Hc(),Kt(e),null;case 19:if(ft(vt),a=e.memoizedState,a===null)return Kt(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)Qo(a,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Yc(t),o!==null){for(e.flags|=128,Qo(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(vt,vt.current&1|2),e.child}t=t.sibling}a.tail!==null&&bt()>wo&&(e.flags|=128,i=!0,Qo(a,!1),e.lanes=4194304)}else{if(!i)if(t=Yc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!pt)return Kt(e),null}else 2*bt()-a.renderingStartTime>wo&&n!==1073741824&&(e.flags|=128,i=!0,Qo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=bt(),e.sibling=null,n=vt.current,at(vt,i?n&1|2:n&1),e):(Kt(e),null);case 22:case 23:return Qp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Kt(e),e.subtreeFlags&6&&(e.flags|=8192)):Kt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function yw(t,e){switch(Ip(e),e.tag){case 1:return Mn(e.type)&&Hc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),ft(Sn),ft(nn),Hp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bp(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return Mo(),null;case 10:return Op(e.type._context),null;case 22:case 23:return Qp(),null;case 24:return null;default:return null}}var Cl=!1,Jt=!1,xw=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ja(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Th(t,e,n){try{n()}catch(i){St(t,e,i)}}var Kg=!1;function Sw(t,e){if(ch=kc,t=k1(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(s=o+r),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(s=o),d===a&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},kc=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ii(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(x){St(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return v=Kg,Kg=!1,v}function _s(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&Th(e,n,a)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Uy(t){var e=t.alternate;e!==null&&(t.alternate=null,Uy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[Ns],delete e[hh],delete e[iw],delete e[rw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ny(t){return t.tag===5||t.tag===3||t.tag===4}function Zg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ny(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bc));else if(i!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Gt=null,ri=!1;function nr(t,e,n){for(n=n.child;n!==null;)Oy(t,e,n),n=n.sibling}function Oy(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:Jt||Ja(n,e);case 6:var i=Gt,r=ri;Gt=null,nr(t,e,n),Gt=i,ri=r,Gt!==null&&(ri?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(ri?(t=Gt,n=n.stateNode,t.nodeType===8?Ff(t.parentNode,n):t.nodeType===1&&Ff(t,n),Ps(t)):Ff(Gt,n.stateNode));break;case 4:i=Gt,r=ri,Gt=n.stateNode.containerInfo,ri=!0,nr(t,e,n),Gt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Th(n,e,o),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!Jt&&(Ja(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){St(n,e,s)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,nr(t,e,n),Jt=i):nr(t,e,n);break;default:nr(t,e,n)}}function Qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xw),e.forEach(function(i){var r=Pw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ei(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Gt=s.stateNode,ri=!1;break e;case 3:Gt=s.stateNode.containerInfo,ri=!0;break e;case 4:Gt=s.stateNode.containerInfo,ri=!0;break e}s=s.return}if(Gt===null)throw Error(Q(160));Oy(a,o,r),Gt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ky(e,t),e=e.sibling}function ky(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ei(e,t),vi(t),i&4){try{_s(3,t,t.return),wu(3,t)}catch(y){St(t,t.return,y)}try{_s(5,t,t.return)}catch(y){St(t,t.return,y)}}break;case 1:ei(e,t),vi(t),i&512&&n!==null&&Ja(n,n.return);break;case 5:if(ei(e,t),vi(t),i&512&&n!==null&&Ja(n,n.return),t.flags&32){var r=t.stateNode;try{Ts(r,"")}catch(y){St(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&r1(r,a),Jd(s,o);var c=Jd(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?c1(r,f):u==="dangerouslySetInnerHTML"?s1(r,f):u==="children"?Ts(r,f):vp(r,u,f,c)}switch(s){case"input":Yd(r,a);break;case"textarea":a1(r,a);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?so(r,!!a.multiple,p,!1):d!==!!a.multiple&&(a.defaultValue!=null?so(r,!!a.multiple,a.defaultValue,!0):so(r,!!a.multiple,a.multiple?[]:"",!1))}r[Ns]=a}catch(y){St(t,t.return,y)}}break;case 6:if(ei(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(y){St(t,t.return,y)}}break;case 3:if(ei(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(y){St(t,t.return,y)}break;case 4:ei(e,t),vi(t);break;case 13:ei(e,t),vi(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Kp=bt())),i&4&&Qg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||u,ei(e,t),Jt=c):ei(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(f=he=u;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:_s(4,d,d.return);break;case 1:Ja(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){St(i,n,y)}}break;case 5:Ja(d,d.return);break;case 22:if(d.memoizedState!==null){e0(f);continue}}p!==null?(p.return=d,he=p):e0(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=l1("display",o))}catch(y){St(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){St(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ei(e,t),vi(t),i&4&&Qg(t);break;case 21:break;default:ei(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ny(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ts(r,""),i.flags&=-33);var a=Zg(t);Rh(t,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Zg(t);Ch(t,s,o);break;default:throw Error(Q(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mw(t,e,n){he=t,Fy(t)}function Fy(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Cl;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Jt;s=Cl;var c=Jt;if(Cl=o,(Jt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?t0(r):l!==null?(l.return=o,he=l):t0(r);for(;a!==null;)he=a,Fy(a),a=a.sibling;he=r,Cl=s,Jt=c}Jg(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,he=a):Jg(t)}}function Jg(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Og(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Og(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ps(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Jt||e.flags&512&&Ah(e)}catch(d){St(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function e0(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function t0(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var a=e.return;try{Ah(e)}catch(l){St(e,a,l)}break;case 5:var o=e.return;try{Ah(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){he=null;break}var s=e.sibling;if(s!==null){s.return=e.return,he=s;break}he=e.return}}var Ew=Math.ceil,Zc=er.ReactCurrentDispatcher,Yp=er.ReactCurrentOwner,$n=er.ReactCurrentBatchConfig,Ke=0,zt=null,Pt=null,jt=0,Rn=0,eo=Fr(0),It=0,Hs=null,ma=0,bu=0,qp=0,ys=null,vn=null,Kp=0,wo=1/0,Oi=null,Qc=!1,Ph=null,wr=null,Rl=!1,mr=null,Jc=0,xs=0,Lh=null,Mc=-1,Ec=0;function fn(){return Ke&6?bt():Mc!==-1?Mc:Mc=bt()}function br(t){return t.mode&1?Ke&2&&jt!==0?jt&-jt:ow.transition!==null?(Ec===0&&(Ec=S1()),Ec):(t=Je,t!==0||(t=window.event,t=t===void 0?16:C1(t.type)),t):1}function fi(t,e,n,i){if(50<xs)throw xs=0,Lh=null,Error(Q(185));tl(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(bu|=n),It===4&&hr(t,jt)),En(t,i),n===1&&Ke===0&&!(e.mode&1)&&(wo=bt()+500,Su&&zr()))}function En(t,e){var n=t.callbackNode;oE(t,e);var i=Oc(t,t===zt?jt:0);if(i===0)n!==null&&ug(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ug(n),e===1)t.tag===0?aw(n0.bind(null,t)):$1(n0.bind(null,t)),tw(function(){!(Ke&6)&&zr()}),n=null;else{switch(M1(i)){case 1:n=Mp;break;case 4:n=y1;break;case 16:n=Nc;break;case 536870912:n=x1;break;default:n=Nc}n=Xy(n,zy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function zy(t,e){if(Mc=-1,Ec=0,Ke&6)throw Error(Q(327));var n=t.callbackNode;if(ho()&&t.callbackNode!==n)return null;var i=Oc(t,t===zt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=eu(t,i);else{e=i;var r=Ke;Ke|=2;var a=Hy();(zt!==t||jt!==e)&&(Oi=null,wo=bt()+500,ra(t,e));do try{Tw();break}catch(s){By(t,s)}while(1);Np(),Zc.current=a,Ke=r,Pt!==null?e=0:(zt=null,jt=0,e=It)}if(e!==0){if(e===2&&(r=rh(t),r!==0&&(i=r,e=Ih(t,r))),e===1)throw n=Hs,ra(t,0),hr(t,i),En(t,bt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ww(r)&&(e=eu(t,i),e===2&&(a=rh(t),a!==0&&(i=a,e=Ih(t,a))),e===1))throw n=Hs,ra(t,0),hr(t,i),En(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:qr(t,vn,Oi);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Kp+500-bt(),10<e)){if(Oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){fn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=dh(qr.bind(null,t,vn,Oi),e);break}qr(t,vn,Oi);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ui(i);a=1<<o,o=e[o],o>r&&(r=o),i&=~a}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ew(i/1960))-i,10<i){t.timeoutHandle=dh(qr.bind(null,t,vn,Oi),i);break}qr(t,vn,Oi);break;case 5:qr(t,vn,Oi);break;default:throw Error(Q(329))}}}return En(t,bt()),t.callbackNode===n?zy.bind(null,t):null}function Ih(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(ra(t,e).flags|=256),t=eu(t,e),t!==2&&(e=vn,vn=n,e!==null&&Dh(e)),t}function Dh(t){vn===null?vn=t:vn.push.apply(vn,t)}function ww(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!hi(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~qp,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ui(e),i=1<<n;t[n]=-1,e&=~i}}function n0(t){if(Ke&6)throw Error(Q(327));ho();var e=Oc(t,0);if(!(e&1))return En(t,bt()),null;var n=eu(t,e);if(t.tag!==0&&n===2){var i=rh(t);i!==0&&(e=i,n=Ih(t,i))}if(n===1)throw n=Hs,ra(t,0),hr(t,e),En(t,bt()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,vn,Oi),En(t,bt()),null}function Zp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(wo=bt()+500,Su&&zr())}}function ga(t){mr!==null&&mr.tag===0&&!(Ke&6)&&ho();var e=Ke;Ke|=1;var n=$n.transition,i=Je;try{if($n.transition=null,Je=1,t)return t()}finally{Je=i,$n.transition=n,Ke=e,!(Ke&6)&&zr()}}function Qp(){Rn=eo.current,ft(eo)}function ra(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ew(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Hc();break;case 3:Mo(),ft(Sn),ft(nn),Hp();break;case 5:Bp(i);break;case 4:Mo();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:Op(i.type._context);break;case 22:case 23:Qp()}n=n.return}if(zt=t,Pt=t=Tr(t.current,null),jt=Rn=e,It=0,Hs=null,qp=bu=ma=0,vn=ys=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}Jr=null}return t}function By(t,e){do{var n=Pt;try{if(Np(),yc.current=Kc,qc){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qc=!1}if(pa=0,kt=Lt=_t=null,vs=!1,Fs=0,Yp.current=null,n===null||n.return===null){It=1,Hs=e,Pt=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=jt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Vg(o);if(p!==null){p.flags&=-257,Wg(p,o,s,a,e),p.mode&1&&Gg(a,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Gg(a,c,e),Jp();break e}l=Error(Q(426))}}else if(pt&&s.mode&1){var g=Vg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Wg(g,o,s,a,e),Dp(Eo(l,s));break e}}a=l=Eo(l,s),It!==4&&(It=2),ys===null?ys=[a]:ys.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var h=Ey(a,l,e);Ng(a,h);break e;case 1:s=l;var _=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wr===null||!wr.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=wy(a,s,e);Ng(a,x);break e}}a=a.return}while(a!==null)}Vy(n)}catch(S){e=S,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(1)}function Hy(){var t=Zc.current;return Zc.current=Kc,t===null?Kc:t}function Jp(){(It===0||It===3||It===2)&&(It=4),zt===null||!(ma&268435455)&&!(bu&268435455)||hr(zt,jt)}function eu(t,e){var n=Ke;Ke|=2;var i=Hy();(zt!==t||jt!==e)&&(Oi=null,ra(t,e));do try{bw();break}catch(r){By(t,r)}while(1);if(Np(),Ke=n,Zc.current=i,Pt!==null)throw Error(Q(261));return zt=null,jt=0,It}function bw(){for(;Pt!==null;)Gy(Pt)}function Tw(){for(;Pt!==null&&!ZM();)Gy(Pt)}function Gy(t){var e=jy(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?Vy(t):Pt=e,Yp.current=null}function Vy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yw(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Pt=null;return}}else if(n=_w(n,e,Rn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);It===0&&(It=5)}function qr(t,e,n){var i=Je,r=$n.transition;try{$n.transition=null,Je=1,Aw(t,e,n,i)}finally{$n.transition=r,Je=i}return null}function Aw(t,e,n,i){do ho();while(mr!==null);if(Ke&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(sE(t,a),t===zt&&(Pt=zt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rl||(Rl=!0,Xy(Nc,function(){return ho(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=$n.transition,$n.transition=null;var o=Je;Je=1;var s=Ke;Ke|=4,Yp.current=null,Sw(t,n),ky(n,t),$E(uh),kc=!!ch,uh=ch=null,t.current=n,Mw(n),QM(),Ke=s,Je=o,$n.transition=a}else t.current=n;if(Rl&&(Rl=!1,mr=t,Jc=r),a=t.pendingLanes,a===0&&(wr=null),tE(n.stateNode),En(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qc)throw Qc=!1,t=Ph,Ph=null,t;return Jc&1&&t.tag!==0&&ho(),a=t.pendingLanes,a&1?t===Lh?xs++:(xs=0,Lh=t):xs=0,zr(),null}function ho(){if(mr!==null){var t=M1(Jc),e=$n.transition,n=Je;try{if($n.transition=null,Je=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Jc=0,Ke&6)throw Error(Q(331));var r=Ke;for(Ke|=4,he=t.current;he!==null;){var a=he,o=a.child;if(he.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:_s(8,u,a)}var f=u.child;if(f!==null)f.return=u,he=f;else for(;he!==null;){u=he;var d=u.sibling,p=u.return;if(Uy(u),u===c){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}he=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,he=o;else e:for(;he!==null;){if(a=he,a.flags&2048)switch(a.tag){case 0:case 11:case 15:_s(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,he=h;break e}he=a.return}}var _=t.current;for(he=_;he!==null;){o=he;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,he=m;else e:for(o=_;he!==null;){if(s=he,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:wu(9,s)}}catch(S){St(s,s.return,S)}if(s===o){he=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,he=x;break e}he=s.return}}if(Ke=r,zr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(gu,t)}catch{}i=!0}return i}finally{Je=n,$n.transition=e}}return!1}function i0(t,e,n){e=Eo(n,e),e=Ey(t,e,1),t=Er(t,e,1),e=fn(),t!==null&&(tl(t,1,e),En(t,e))}function St(t,e,n){if(t.tag===3)i0(t,t,n);else for(;e!==null;){if(e.tag===3){i0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=Eo(n,t),t=wy(e,t,1),e=Er(e,t,1),t=fn(),e!==null&&(tl(e,1,t),En(e,t));break}}e=e.return}}function Cw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=fn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(jt&n)===n&&(It===4||It===3&&(jt&130023424)===jt&&500>bt()-Kp?ra(t,0):qp|=n),En(t,e)}function Wy(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=fn();t=qi(t,e),t!==null&&(tl(t,e,n),En(t,n))}function Rw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wy(t,n)}function Pw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),Wy(t,n)}var jy;jy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,vw(t,e,n);yn=!!(t.flags&131072)}else yn=!1,pt&&e.flags&1048576&&Y1(e,Wc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sc(t,e),t=e.pendingProps;var r=yo(e,nn.current);fo(e,n),r=Vp(null,e,i,t,r,n);var a=Wp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(a=!0,Gc(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fp(e),r.updater=Mu,e.stateNode=r,r._reactInternals=e,yh(e,i,t,n),e=Mh(null,e,i,!0,a,n)):(e.tag=0,pt&&a&&Lp(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Iw(i),t=ii(i,t),r){case 0:e=Sh(null,e,i,t,n);break e;case 1:e=$g(null,e,i,t,n);break e;case 11:e=jg(null,e,i,t,n);break e;case 14:e=Xg(null,e,i,ii(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Sh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),$g(t,e,i,r,n);case 3:e:{if(Cy(e),t===null)throw Error(Q(387));i=e.pendingProps,a=e.memoizedState,r=a.element,Q1(t,e),$c(e,i,null,n);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Eo(Error(Q(423)),e),e=Yg(t,e,i,n,r);break e}else if(i!==r){r=Eo(Error(Q(424)),e),e=Yg(t,e,i,n,r);break e}else for(In=Mr(e.stateNode.containerInfo.firstChild),Dn=e,pt=!0,ai=null,n=ny(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=Ki(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return iy(e),t===null&&gh(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,o=r.children,fh(i,r)?o=null:a!==null&&fh(i,a)&&(e.flags|=32),Ay(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return Ry(t,e,n);case 4:return zp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=So(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),jg(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,o=r.value,at(jc,i._currentValue),i._currentValue=o,a!==null)if(hi(a.value,o)){if(a.children===r.children&&!Sn.current){e=Ki(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),vh(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(Q(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),vh(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fo(e,n),r=qn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),Xg(t,e,i,r,n);case 15:return by(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Sc(t,e),e.tag=1,Mn(i)?(t=!0,Gc(e)):t=!1,fo(e,n),ey(e,i,r),yh(e,i,r,n),Mh(null,e,i,!0,t,n);case 19:return Py(t,e,n);case 22:return Ty(t,e,n)}throw Error(Q(156,e.tag))};function Xy(t,e){return _1(t,e)}function Lw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Lw(t,e,n,i)}function em(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Iw(t){if(typeof t=="function")return em(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yp)return 11;if(t===xp)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wc(t,e,n,i,r,a){var o=2;if(i=t,typeof t=="function")em(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wa:return aa(n.children,r,a,e);case _p:o=8,r|=8;break;case Vd:return t=Xn(12,n,e,r|2),t.elementType=Vd,t.lanes=a,t;case Wd:return t=Xn(13,n,e,r),t.elementType=Wd,t.lanes=a,t;case jd:return t=Xn(19,n,e,r),t.elementType=jd,t.lanes=a,t;case t1:return Tu(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case J_:o=10;break e;case e1:o=9;break e;case yp:o=11;break e;case xp:o=14;break e;case ur:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=Xn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function aa(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Tu(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=t1,t.lanes=n,t.stateNode={isHidden:!1},t}function Xf(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function $f(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Dw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Af(0),this.expirationTimes=Af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Af(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function tm(t,e,n,i,r,a,o,s,l){return t=new Dw(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Xn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(a),t}function Uw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Va,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function $y(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ma(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(Mn(n))return X1(t,n,e)}return e}function Yy(t,e,n,i,r,a,o,s,l){return t=tm(n,i,!0,t,r,a,o,s,l),t.context=$y(null),n=t.current,i=fn(),r=br(n),a=Gi(i,r),a.callback=e??null,Er(n,a,r),t.current.lanes=r,tl(t,r,i),En(t,i),t}function Au(t,e,n,i){var r=e.current,a=fn(),o=br(r);return n=$y(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Er(r,e,o),t!==null&&(fi(t,r,o,a),_c(t,r,o)),o}function tu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function r0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nm(t,e){r0(t,e),(t=t.alternate)&&r0(t,e)}function Nw(){return null}var qy=typeof reportError=="function"?reportError:function(t){console.error(t)};function im(t){this._internalRoot=t}Cu.prototype.render=im.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));Au(t,e,null,null)};Cu.prototype.unmount=im.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ga(function(){Au(null,t,null,null)}),e[Yi]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=b1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&A1(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function a0(){}function Ow(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=tu(o);a.call(c)}}var o=Yy(e,i,t,0,null,!1,!1,"",a0);return t._reactRootContainer=o,t[Yi]=o.current,Ds(t.nodeType===8?t.parentNode:t),ga(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var c=tu(l);s.call(c)}}var l=tm(t,0,!1,null,null,!1,!1,"",a0);return t._reactRootContainer=l,t[Yi]=l.current,Ds(t.nodeType===8?t.parentNode:t),ga(function(){Au(e,l,n,i)}),l}function Pu(t,e,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=tu(o);s.call(l)}}Au(e,o,t,r)}else o=Ow(n,e,t,r,i);return tu(o)}E1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ss(e.pendingLanes);n!==0&&(Ep(e,n|1),En(e,bt()),!(Ke&6)&&(wo=bt()+500,zr()))}break;case 13:ga(function(){var i=qi(t,1);if(i!==null){var r=fn();fi(i,t,1,r)}}),nm(t,1)}};wp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=fn();fi(e,t,134217728,n)}nm(t,134217728)}};w1=function(t){if(t.tag===13){var e=br(t),n=qi(t,e);if(n!==null){var i=fn();fi(n,t,e,i)}nm(t,e)}};b1=function(){return Je};T1=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};th=function(t,e,n){switch(e){case"input":if(Yd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xu(i);if(!r)throw Error(Q(90));i1(i),Yd(i,r)}}}break;case"textarea":a1(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};d1=Zp;h1=ga;var kw={usingClientEntryPoint:!1,Events:[il,Ya,xu,u1,f1,Zp]},Jo={findFiberByHostInstance:Qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Fw={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g1(t),t===null?null:t.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||Nw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{gu=Pl.inject(Fw),bi=Pl}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kw;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(Q(200));return Uw(t,e,null,n)};On.createRoot=function(t,e){if(!rm(t))throw Error(Q(299));var n=!1,i="",r=qy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=tm(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,Ds(t.nodeType===8?t.parentNode:t),new im(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=g1(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return ga(t)};On.hydrate=function(t,e,n){if(!Ru(e))throw Error(Q(200));return Pu(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=qy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Yy(e,null,t,1,n??null,r,!1,a,o),t[Yi]=e.current,Ds(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Cu(e)};On.render=function(t,e,n){if(!Ru(e))throw Error(Q(200));return Pu(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Ru(t))throw Error(Q(40));return t._reactRootContainer?(ga(function(){Pu(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};On.unstable_batchedUpdates=Zp;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ru(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return Pu(t,e,n,!1,i)};On.version="18.2.0-next-9e3b772b8-20220608";function Ky(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ky)}catch(t){console.error(t)}}Ky(),Y_.exports=On;var Zy=Y_.exports,Qy,o0=Zy;o0.createRoot,Qy=o0.hydrateRoot;var Jy={exports:{}},ex={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bo=ze;function zw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bw=typeof Object.is=="function"?Object.is:zw,Hw=bo.useState,Gw=bo.useEffect,Vw=bo.useLayoutEffect,Ww=bo.useDebugValue;function jw(t,e){var n=e(),i=Hw({inst:{value:n,getSnapshot:e}}),r=i[0].inst,a=i[1];return Vw(function(){r.value=n,r.getSnapshot=e,Yf(r)&&a({inst:r})},[t,n,e]),Gw(function(){return Yf(r)&&a({inst:r}),t(function(){Yf(r)&&a({inst:r})})},[t]),Ww(n),n}function Yf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bw(t,n)}catch{return!0}}function Xw(t,e){return e()}var $w=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Xw:jw;ex.useSyncExternalStore=bo.useSyncExternalStore!==void 0?bo.useSyncExternalStore:$w;Jy.exports=ex;var Yw=Jy.exports,tx={exports:{}},nx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=ze,qw=Yw;function Kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zw=typeof Object.is=="function"?Object.is:Kw,Qw=qw.useSyncExternalStore,Jw=Lu.useRef,e2=Lu.useEffect,t2=Lu.useMemo,n2=Lu.useDebugValue;nx.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var a=Jw(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=t2(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return f=v}return f=p}if(v=f,Zw(u,p))return v;var y=i(p);return r!==void 0&&r(v,y)?v:(u=p,f=y)}var c=!1,u,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var s=Qw(t,a[0],a[1]);return e2(function(){o.hasValue=!0,o.value=s},[s]),n2(s),s};tx.exports=nx;var i2=tx.exports;function r2(t){t()}let ix=r2;const a2=t=>ix=t,o2=()=>ix,s0=Symbol.for("react-redux-context"),l0=typeof globalThis<"u"?globalThis:{};function s2(){var t;if(!ze.createContext)return{};const e=(t=l0[s0])!=null?t:l0[s0]=new Map;let n=e.get(ze.createContext);return n||(n=ze.createContext(null),e.set(ze.createContext,n)),n}const Lr=s2();function am(t=Lr){return function(){return ze.useContext(t)}}const rx=am(),l2=()=>{throw new Error("uSES not initialized!")};let ax=l2;const c2=t=>{ax=t},u2=(t,e)=>t===e;function f2(t=Lr){const e=t===Lr?rx:am(t);return function(i,r={}){const{equalityFn:a=u2,stabilityCheck:o=void 0,noopCheck:s=void 0}=typeof r=="function"?{equalityFn:r}:r,{store:l,subscription:c,getServerState:u,stabilityCheck:f,noopCheck:d}=e();ze.useRef(!0);const p=ze.useCallback({[i.name](y){return i(y)}}[i.name],[i,f,o]),v=ax(c.addNestedSub,l.getState,u||l.getState,p,a);return ze.useDebugValue(v),v}}const Vi=f2();var ox={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bt=typeof Symbol=="function"&&Symbol.for,om=Bt?Symbol.for("react.element"):60103,sm=Bt?Symbol.for("react.portal"):60106,Iu=Bt?Symbol.for("react.fragment"):60107,Du=Bt?Symbol.for("react.strict_mode"):60108,Uu=Bt?Symbol.for("react.profiler"):60114,Nu=Bt?Symbol.for("react.provider"):60109,Ou=Bt?Symbol.for("react.context"):60110,lm=Bt?Symbol.for("react.async_mode"):60111,ku=Bt?Symbol.for("react.concurrent_mode"):60111,Fu=Bt?Symbol.for("react.forward_ref"):60112,zu=Bt?Symbol.for("react.suspense"):60113,d2=Bt?Symbol.for("react.suspense_list"):60120,Bu=Bt?Symbol.for("react.memo"):60115,Hu=Bt?Symbol.for("react.lazy"):60116,h2=Bt?Symbol.for("react.block"):60121,p2=Bt?Symbol.for("react.fundamental"):60117,m2=Bt?Symbol.for("react.responder"):60118,g2=Bt?Symbol.for("react.scope"):60119;function Fn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case om:switch(t=t.type,t){case lm:case ku:case Iu:case Uu:case Du:case zu:return t;default:switch(t=t&&t.$$typeof,t){case Ou:case Fu:case Hu:case Bu:case Nu:return t;default:return e}}case sm:return e}}}function sx(t){return Fn(t)===ku}et.AsyncMode=lm;et.ConcurrentMode=ku;et.ContextConsumer=Ou;et.ContextProvider=Nu;et.Element=om;et.ForwardRef=Fu;et.Fragment=Iu;et.Lazy=Hu;et.Memo=Bu;et.Portal=sm;et.Profiler=Uu;et.StrictMode=Du;et.Suspense=zu;et.isAsyncMode=function(t){return sx(t)||Fn(t)===lm};et.isConcurrentMode=sx;et.isContextConsumer=function(t){return Fn(t)===Ou};et.isContextProvider=function(t){return Fn(t)===Nu};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===om};et.isForwardRef=function(t){return Fn(t)===Fu};et.isFragment=function(t){return Fn(t)===Iu};et.isLazy=function(t){return Fn(t)===Hu};et.isMemo=function(t){return Fn(t)===Bu};et.isPortal=function(t){return Fn(t)===sm};et.isProfiler=function(t){return Fn(t)===Uu};et.isStrictMode=function(t){return Fn(t)===Du};et.isSuspense=function(t){return Fn(t)===zu};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Iu||t===ku||t===Uu||t===Du||t===zu||t===d2||typeof t=="object"&&t!==null&&(t.$$typeof===Hu||t.$$typeof===Bu||t.$$typeof===Nu||t.$$typeof===Ou||t.$$typeof===Fu||t.$$typeof===p2||t.$$typeof===m2||t.$$typeof===g2||t.$$typeof===h2)};et.typeOf=Fn;ox.exports=et;var v2=ox.exports,lx=v2,_2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cx={};cx[lx.ForwardRef]=_2;cx[lx.Memo]=y2;var it={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=Symbol.for("react.element"),um=Symbol.for("react.portal"),Gu=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),Wu=Symbol.for("react.profiler"),ju=Symbol.for("react.provider"),Xu=Symbol.for("react.context"),x2=Symbol.for("react.server_context"),$u=Symbol.for("react.forward_ref"),Yu=Symbol.for("react.suspense"),qu=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),Zu=Symbol.for("react.lazy"),S2=Symbol.for("react.offscreen"),ux;ux=Symbol.for("react.module.reference");function Qn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case cm:switch(t=t.type,t){case Gu:case Wu:case Vu:case Yu:case qu:return t;default:switch(t=t&&t.$$typeof,t){case x2:case Xu:case $u:case Zu:case Ku:case ju:return t;default:return e}}case um:return e}}}it.ContextConsumer=Xu;it.ContextProvider=ju;it.Element=cm;it.ForwardRef=$u;it.Fragment=Gu;it.Lazy=Zu;it.Memo=Ku;it.Portal=um;it.Profiler=Wu;it.StrictMode=Vu;it.Suspense=Yu;it.SuspenseList=qu;it.isAsyncMode=function(){return!1};it.isConcurrentMode=function(){return!1};it.isContextConsumer=function(t){return Qn(t)===Xu};it.isContextProvider=function(t){return Qn(t)===ju};it.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===cm};it.isForwardRef=function(t){return Qn(t)===$u};it.isFragment=function(t){return Qn(t)===Gu};it.isLazy=function(t){return Qn(t)===Zu};it.isMemo=function(t){return Qn(t)===Ku};it.isPortal=function(t){return Qn(t)===um};it.isProfiler=function(t){return Qn(t)===Wu};it.isStrictMode=function(t){return Qn(t)===Vu};it.isSuspense=function(t){return Qn(t)===Yu};it.isSuspenseList=function(t){return Qn(t)===qu};it.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Gu||t===Wu||t===Vu||t===Yu||t===qu||t===S2||typeof t=="object"&&t!==null&&(t.$$typeof===Zu||t.$$typeof===Ku||t.$$typeof===ju||t.$$typeof===Xu||t.$$typeof===$u||t.$$typeof===ux||t.getModuleId!==void 0)};it.typeOf=Qn;function M2(){const t=o2();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,a=n={callback:i,next:null,prev:n};return a.prev?a.prev.next=a:e=a,function(){!r||e===null||(r=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}const c0={notify(){},get:()=>[]};function E2(t,e){let n,i=c0,r=0,a=!1;function o(y){u();const g=i.subscribe(y);let h=!1;return()=>{h||(h=!0,g(),f())}}function s(){i.notify()}function l(){v.onStateChange&&v.onStateChange()}function c(){return a}function u(){r++,n||(n=e?e.addNestedSub(l):t.subscribe(l),i=M2())}function f(){r--,n&&r===0&&(n(),n=void 0,i.clear(),i=c0)}function d(){a||(a=!0,u())}function p(){a&&(a=!1,f())}const v={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:l,isSubscribed:c,trySubscribe:d,tryUnsubscribe:p,getListeners:()=>i};return v}const w2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b2=w2?ze.useLayoutEffect:ze.useEffect;function T2({store:t,context:e,children:n,serverState:i,stabilityCheck:r="once",noopCheck:a="once"}){const o=ze.useMemo(()=>{const c=E2(t);return{store:t,subscription:c,getServerState:i?()=>i:void 0,stabilityCheck:r,noopCheck:a}},[t,i,r,a]),s=ze.useMemo(()=>t.getState(),[t]);b2(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,s]);const l=e||Lr;return ze.createElement(l.Provider,{value:o},n)}function fx(t=Lr){const e=t===Lr?rx:am(t);return function(){const{store:i}=e();return i}}const A2=fx();function C2(t=Lr){const e=t===Lr?A2:fx(t);return function(){return e().dispatch}}const fm=C2();c2(i2.useSyncExternalStoreWithSelector);a2(Zy.unstable_batchedUpdates);function Gs(t){"@babel/helpers - typeof";return Gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gs(t)}function R2(t,e){if(Gs(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Gs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function P2(t){var e=R2(t,"string");return Gs(e)==="symbol"?e:String(e)}function L2(t,e,n){return e=P2(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function f0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u0(Object(n),!0).forEach(function(i){L2(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Cn(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var d0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),qf=function(){return Math.random().toString(36).substring(7).split("").join(".")},h0={INIT:"@@redux/INIT"+qf(),REPLACE:"@@redux/REPLACE"+qf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+qf()}};function I2(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function dx(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Cn(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Cn(1));return n(dx)(t,e)}if(typeof t!="function")throw new Error(Cn(2));var r=t,a=e,o=[],s=o,l=!1;function c(){s===o&&(s=o.slice())}function u(){if(l)throw new Error(Cn(3));return a}function f(y){if(typeof y!="function")throw new Error(Cn(4));if(l)throw new Error(Cn(5));var g=!0;return c(),s.push(y),function(){if(g){if(l)throw new Error(Cn(6));g=!1,c();var _=s.indexOf(y);s.splice(_,1),o=null}}}function d(y){if(!I2(y))throw new Error(Cn(7));if(typeof y.type>"u")throw new Error(Cn(8));if(l)throw new Error(Cn(9));try{l=!0,a=r(a,y)}finally{l=!1}for(var g=o=s,h=0;h<g.length;h++){var _=g[h];_()}return y}function p(y){if(typeof y!="function")throw new Error(Cn(10));r=y,d({type:h0.REPLACE})}function v(){var y,g=f;return y={subscribe:function(_){if(typeof _!="object"||_===null)throw new Error(Cn(11));function m(){_.next&&_.next(u())}m();var x=g(m);return{unsubscribe:x}}},y[d0]=function(){return this},y}return d({type:h0.INIT}),i={dispatch:d,subscribe:f,getState:u,replaceReducer:p},i[d0]=v,i}function hx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function D2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),a=function(){throw new Error(Cn(15))},o={getState:r.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=e.map(function(l){return l(o)});return a=hx.apply(void 0,s)(r.dispatch),f0(f0({},r),{},{dispatch:a})}}}function px(t){var e=function(i){var r=i.dispatch,a=i.getState;return function(o){return function(s){return typeof s=="function"?s(r,a,t):o(s)}}};return e}var mx=px();mx.withExtraArgument=px;const U2=mx;var en=function(){return en=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},en.apply(this,arguments)};function nu(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,a;i<r;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return t.concat(a||Array.prototype.slice.call(e))}var lt="-ms-",Ss="-moz-",Qe="-webkit-",gx="comm",Qu="rule",dm="decl",N2="@import",vx="@keyframes",O2="@layer",k2=Math.abs,hm=String.fromCharCode,Uh=Object.assign;function F2(t,e){return Ft(t,0)^45?(((e<<2^Ft(t,0))<<2^Ft(t,1))<<2^Ft(t,2))<<2^Ft(t,3):0}function _x(t){return t.trim()}function ki(t,e){return(t=e.exec(t))?t[0]:t}function Fe(t,e,n){return t.replace(e,n)}function bc(t,e){return t.indexOf(e)}function Ft(t,e){return t.charCodeAt(e)|0}function To(t,e,n){return t.slice(e,n)}function yi(t){return t.length}function yx(t){return t.length}function cs(t,e){return e.push(t),t}function z2(t,e){return t.map(e).join("")}function p0(t,e){return t.filter(function(n){return!ki(n,e)})}var Ju=1,Ao=1,xx=0,Zn=0,Rt=0,Fo="";function ef(t,e,n,i,r,a,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:a,line:Ju,column:Ao,length:o,return:"",siblings:s}}function cr(t,e){return Uh(ef("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function wa(t){for(;t.root;)t=cr(t.root,{children:[t]});cs(t,t.siblings)}function B2(){return Rt}function H2(){return Rt=Zn>0?Ft(Fo,--Zn):0,Ao--,Rt===10&&(Ao=1,Ju--),Rt}function di(){return Rt=Zn<xx?Ft(Fo,Zn++):0,Ao++,Rt===10&&(Ao=1,Ju++),Rt}function oa(){return Ft(Fo,Zn)}function Tc(){return Zn}function tf(t,e){return To(Fo,t,e)}function Nh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G2(t){return Ju=Ao=1,xx=yi(Fo=t),Zn=0,[]}function V2(t){return Fo="",t}function Kf(t){return _x(tf(Zn-1,Oh(t===91?t+2:t===40?t+1:t)))}function W2(t){for(;(Rt=oa())&&Rt<33;)di();return Nh(t)>2||Nh(Rt)>3?"":" "}function j2(t,e){for(;--e&&di()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return tf(t,Tc()+(e<6&&oa()==32&&di()==32))}function Oh(t){for(;di();)switch(Rt){case t:return Zn;case 34:case 39:t!==34&&t!==39&&Oh(Rt);break;case 40:t===41&&Oh(t);break;case 92:di();break}return Zn}function X2(t,e){for(;di()&&t+Rt!==47+10;)if(t+Rt===42+42&&oa()===47)break;return"/*"+tf(e,Zn-1)+"*"+hm(t===47?t:di())}function $2(t){for(;!Nh(oa());)di();return tf(t,Zn)}function Y2(t){return V2(Ac("",null,null,null,[""],t=G2(t),0,[0],t))}function Ac(t,e,n,i,r,a,o,s,l){for(var c=0,u=0,f=o,d=0,p=0,v=0,y=1,g=1,h=1,_=0,m="",x=r,S=a,b=i,E=m;g;)switch(v=_,_=di()){case 40:if(v!=108&&Ft(E,f-1)==58){bc(E+=Fe(Kf(_),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Kf(_);break;case 9:case 10:case 13:case 32:E+=W2(v);break;case 92:E+=j2(Tc()-1,7);continue;case 47:switch(oa()){case 42:case 47:cs(q2(X2(di(),Tc()),e,n,l),l);break;default:E+="/"}break;case 123*y:s[c++]=yi(E)*h;case 125*y:case 59:case 0:switch(_){case 0:case 125:g=0;case 59+u:h==-1&&(E=Fe(E,/\f/g,"")),p>0&&yi(E)-f&&cs(p>32?g0(E+";",i,n,f-1,l):g0(Fe(E," ","")+";",i,n,f-2,l),l);break;case 59:E+=";";default:if(cs(b=m0(E,e,n,c,u,r,s,m,x=[],S=[],f,a),a),_===123)if(u===0)Ac(E,e,b,b,x,a,f,s,S);else switch(d===99&&Ft(E,3)===110?100:d){case 100:case 108:case 109:case 115:Ac(t,b,b,i&&cs(m0(t,b,b,0,0,r,s,m,r,x=[],f,S),S),r,S,f,s,i?x:S);break;default:Ac(E,b,b,b,[""],S,0,s,S)}}c=u=p=0,y=h=1,m=E="",f=o;break;case 58:f=1+yi(E),p=v;default:if(y<1){if(_==123)--y;else if(_==125&&y++==0&&H2()==125)continue}switch(E+=hm(_),_*y){case 38:h=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(yi(E)-1)*h,h=1;break;case 64:oa()===45&&(E+=Kf(di())),d=oa(),u=f=yi(m=E+=$2(Tc())),_++;break;case 45:v===45&&yi(E)==2&&(y=0)}}return a}function m0(t,e,n,i,r,a,o,s,l,c,u,f){for(var d=r-1,p=r===0?a:[""],v=yx(p),y=0,g=0,h=0;y<i;++y)for(var _=0,m=To(t,d+1,d=k2(g=o[y])),x=t;_<v;++_)(x=_x(g>0?p[_]+" "+m:Fe(m,/&\f/g,p[_])))&&(l[h++]=x);return ef(t,e,n,r===0?Qu:s,l,c,u,f)}function q2(t,e,n,i){return ef(t,e,n,gx,hm(B2()),To(t,2,-2),0,i)}function g0(t,e,n,i,r){return ef(t,e,n,dm,To(t,0,i),To(t,i+1,-1),i,r)}function Sx(t,e,n){switch(F2(t,e)){case 5103:return Qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+t+t;case 4789:return Ss+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+t+Ss+t+lt+t+t;case 5936:switch(Ft(t,e+11)){case 114:return Qe+t+lt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Qe+t+lt+Fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Qe+t+lt+Fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Qe+t+lt+t+t;case 6165:return Qe+t+lt+"flex-"+t+t;case 5187:return Qe+t+Fe(t,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+lt+"flex-$1$2")+t;case 5443:return Qe+t+lt+"flex-item-"+Fe(t,/flex-|-self/g,"")+(ki(t,/flex-|baseline/)?"":lt+"grid-row-"+Fe(t,/flex-|-self/g,""))+t;case 4675:return Qe+t+lt+"flex-line-pack"+Fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Qe+t+lt+Fe(t,"shrink","negative")+t;case 5292:return Qe+t+lt+Fe(t,"basis","preferred-size")+t;case 6060:return Qe+"box-"+Fe(t,"-grow","")+Qe+t+lt+Fe(t,"grow","positive")+t;case 4554:return Qe+Fe(t,/([^-])(transform)/g,"$1"+Qe+"$2")+t;case 6187:return Fe(Fe(Fe(t,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),t,"")+t;case 5495:case 3959:return Fe(t,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Fe(Fe(t,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+t+t;case 4200:if(!ki(t,/flex-|baseline/))return lt+"grid-column-align"+To(t,e)+t;break;case 2592:case 3360:return lt+Fe(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,ki(i.props,/grid-\w+-end/)})?~bc(t+(n=n[e].value),"span")?t:lt+Fe(t,"-start","")+t+lt+"grid-row-span:"+(~bc(n,"span")?ki(n,/\d+/):+ki(n,/\d+/)-+ki(t,/\d+/))+";":lt+Fe(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return ki(i.props,/grid-\w+-start/)})?t:lt+Fe(Fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Fe(t,/(.+)-inline(.+)/,Qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yi(t)-1-e>6)switch(Ft(t,e+1)){case 109:if(Ft(t,e+4)!==45)break;case 102:return Fe(t,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+Ss+(Ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~bc(t,"stretch")?Sx(Fe(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,a,o,s,l,c){return lt+r+":"+a+c+(o?lt+r+"-span:"+(s?l:+l-+a)+c:"")+t});case 4949:if(Ft(t,e+6)===121)return Fe(t,":",":"+Qe)+t;break;case 6444:switch(Ft(t,Ft(t,14)===45?18:11)){case 120:return Fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Ft(t,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+lt+"$2box$3")+t;case 100:return Fe(t,":",":"+lt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(t,"scroll-","scroll-snap-")+t}return t}function iu(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function K2(t,e,n,i){switch(t.type){case O2:if(t.children.length)break;case N2:case dm:return t.return=t.return||t.value;case gx:return"";case vx:return t.return=t.value+"{"+iu(t.children,i)+"}";case Qu:if(!yi(t.value=t.props.join(",")))return""}return yi(n=iu(t.children,i))?t.return=t.value+"{"+n+"}":""}function Z2(t){var e=yx(t);return function(n,i,r,a){for(var o="",s=0;s<e;s++)o+=t[s](n,i,r,a)||"";return o}}function Q2(t){return function(e){e.root||(e=e.return)&&t(e)}}function J2(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case dm:t.return=Sx(t.value,t.length,n);return;case vx:return iu([cr(t,{value:Fe(t.value,"@","@"+Qe)})],i);case Qu:if(t.length)return z2(n=t.props,function(r){switch(ki(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":wa(cr(t,{props:[Fe(r,/:(read-\w+)/,":"+Ss+"$1")]})),wa(cr(t,{props:[r]})),Uh(t,{props:p0(n,i)});break;case"::placeholder":wa(cr(t,{props:[Fe(r,/:(plac\w+)/,":"+Qe+"input-$1")]})),wa(cr(t,{props:[Fe(r,/:(plac\w+)/,":"+Ss+"$1")]})),wa(cr(t,{props:[Fe(r,/:(plac\w+)/,lt+"input-$1")]})),wa(cr(t,{props:[r]})),Uh(t,{props:p0(n,i)});break}return""})}}var eb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Co=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",pm=typeof window<"u"&&"HTMLElement"in window,tb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),nf=Object.freeze([]),Ro=Object.freeze({});function nb(t,e,n){return n===void 0&&(n=Ro),t.theme!==n.theme&&t.theme||e||n.theme}var Mx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ib=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rb=/(^-|-$)/g;function v0(t){return t.replace(ib,"-").replace(rb,"")}var ab=/(a)(d)/gi,_0=function(t){return String.fromCharCode(t+(t>25?39:97))};function kh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=_0(e%52)+n;return(_0(e%52)+n).replace(ab,"$1-$2")}var Zf,to=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Ex=function(t){return to(5381,t)};function ob(t){return kh(Ex(t)>>>0)}function sb(t){return t.displayName||t.name||"Component"}function Qf(t){return typeof t=="string"&&!0}var wx=typeof Symbol=="function"&&Symbol.for,bx=wx?Symbol.for("react.memo"):60115,lb=wx?Symbol.for("react.forward_ref"):60112,cb={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ub={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Tx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fb=((Zf={})[lb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zf[bx]=Tx,Zf);function y0(t){return("type"in(e=t)&&e.type.$$typeof)===bx?Tx:"$$typeof"in t?fb[t.$$typeof]:cb;var e}var db=Object.defineProperty,hb=Object.getOwnPropertyNames,x0=Object.getOwnPropertySymbols,pb=Object.getOwnPropertyDescriptor,mb=Object.getPrototypeOf,S0=Object.prototype;function Ax(t,e,n){if(typeof e!="string"){if(S0){var i=mb(e);i&&i!==S0&&Ax(t,i,n)}var r=hb(e);x0&&(r=r.concat(x0(e)));for(var a=y0(t),o=y0(e),s=0;s<r.length;++s){var l=r[s];if(!(l in ub||n&&n[l]||o&&l in o||a&&l in a)){var c=pb(e,l);try{db(t,l,c)}catch{}}}}return t}function va(t){return typeof t=="function"}function mm(t){return typeof t=="object"&&"styledComponentId"in t}function ta(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function M0(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function Vs(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Fh(t,e,n){if(n===void 0&&(n=!1),!n&&!Vs(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Fh(t[i],e[i]);else if(Vs(e))for(var i in e)t[i]=Fh(t[i],e[i]);return t}function gm(t,e){Object.defineProperty(t,"toString",{value:e})}function _a(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var gb=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,a=r;e>=a;)if((a<<=1)<0)throw _a(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[e]++,s++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var a=i;a<r;a++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),a=r+i,o=r;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Cc=new Map,ru=new Map,Jf=1,Ll=function(t){if(Cc.has(t))return Cc.get(t);for(;ru.has(Jf);)Jf++;var e=Jf++;return Cc.set(t,e),ru.set(e,t),e},vb=function(t,e){Cc.set(t,e),ru.set(e,t)},_b="style[".concat(Co,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),yb=new RegExp("^".concat(Co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xb=function(t,e,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&t.registerName(e,i)},Sb=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],a=0,o=i.length;a<o;a++){var s=i[a].trim();if(s){var l=s.match(yb);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(vb(u,c),xb(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}};function Mb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cx=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Co,"]")));return l[l.length-1]}(n),a=r!==void 0?r.nextSibling:null;i.setAttribute(Co,"active"),i.setAttribute("data-styled-version","6.0.8");var o=Mb();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},Eb=function(){function t(e){this.element=Cx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,a=i.length;r<a;r++){var o=i[r];if(o.ownerNode===n)return o}throw _a(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),wb=function(){function t(e){this.element=Cx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),bb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),E0=pm,Tb={isServer:!pm,useCSSOMInjection:!tb},Rx=function(){function t(e,n,i){e===void 0&&(e=Ro),n===void 0&&(n={});var r=this;this.options=en(en({},Tb),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&pm&&E0&&(E0=!1,function(a){for(var o=document.querySelectorAll(_b),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(Co)!=="active"&&(Sb(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),gm(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",c=function(f){var d=function(h){return ru.get(h)}(f);if(d===void 0)return"continue";var p=a.names.get(d),v=o.getGroup(f);if(p===void 0||v.length===0)return"continue";var y="".concat(Co,".g").concat(f,'[id="').concat(d,'"]'),g="";p!==void 0&&p.forEach(function(h){h.length>0&&(g+="".concat(h,","))}),l+="".concat(v).concat(y,'{content:"').concat(g,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)c(u);return l}(r)})}return t.registerId=function(e){return Ll(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(en(en({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new bb(r):i?new Eb(r):new wb(r)}(this.options),new gb(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ll(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Ll(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ll(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Ab=/&/g,Cb=/^\s*\/\/.*$/gm;function Px(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Px(n.children,e)),n})}function Rb(t){var e,n,i,r=t===void 0?Ro:t,a=r.options,o=a===void 0?Ro:a,s=r.plugins,l=s===void 0?nf:s,c=function(d,p,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===Qu&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Ab,n).replace(i,c))}),o.prefix&&u.push(J2),u.push(K2);var f=function(d,p,v,y){p===void 0&&(p=""),v===void 0&&(v=""),y===void 0&&(y="&"),e=y,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=d.replace(Cb,""),h=Y2(v||p?"".concat(v," ").concat(p," { ").concat(g," }"):g);o.namespace&&(h=Px(h,o.namespace));var _=[];return iu(h,Z2(u.concat(Q2(function(m){return _.push(m)})))),_};return f.hash=l.length?l.reduce(function(d,p){return p.name||_a(15),to(d,p.name)},5381).toString():"",f}var Pb=new Rx,zh=Rb(),Lx=Xi.createContext({shouldForwardProp:void 0,styleSheet:Pb,stylis:zh});Lx.Consumer;Xi.createContext(void 0);function w0(){return ze.useContext(Lx)}var Lb=function(){function t(e,n){var i=this;this.inject=function(r,a){a===void 0&&(a=zh);var o=i.name+a.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,a(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,gm(this,function(){throw _a(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=zh),this.name+e.hash},t}(),Ib=function(t){return t>="A"&&t<="Z"};function b0(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;Ib(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var Ix=function(t){return t==null||t===!1||t===""},Dx=function(t){var e,n,i=[];for(var r in t){var a=t[r];t.hasOwnProperty(r)&&!Ix(a)&&(Array.isArray(a)&&a.isCss||va(a)?i.push("".concat(b0(r),":"),a,";"):Vs(a)?i.push.apply(i,nu(nu(["".concat(r," {")],Dx(a),!1),["}"],!1)):i.push("".concat(b0(r),": ").concat((e=r,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in eb||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function sa(t,e,n,i){if(Ix(t))return[];if(mm(t))return[".".concat(t.styledComponentId)];if(va(t)){if(!va(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var r=t(e);return sa(r,e,n,i)}var a;return t instanceof Lb?n?(t.inject(n,i),[t.getName(i)]):[t]:Vs(t)?Dx(t):Array.isArray(t)?Array.prototype.concat.apply(nf,t.map(function(o){return sa(o,e,n,i)})):[t.toString()]}function Db(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(va(n)&&!mm(n))return!1}return!0}var Ub=Ex("6.0.8"),Nb=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Db(e),this.componentId=n,this.baseHash=to(Ub,n),this.baseStyle=i,Rx.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=ta(r,this.staticRulesId);else{var a=M0(sa(this.rules,e,n,i)),o=kh(to(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=i(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}r=ta(r,o),this.staticRulesId=o}else{for(var l=to(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var d=M0(sa(f,e,n,i));l=to(l,d+u),c+=d}}if(c){var p=kh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=ta(r,p)}}return r},t}(),au=Xi.createContext(void 0);au.Consumer;function Ob(t){var e=Xi.useContext(au),n=ze.useMemo(function(){return function(i,r){if(!i)throw _a(14);if(va(i)){var a=i(r);return a}if(Array.isArray(i)||typeof i!="object")throw _a(8);return r?en(en({},r),i):i}(t.theme,e)},[t.theme,e]);return t.children?Xi.createElement(au.Provider,{value:n},t.children):null}var ed={};function kb(t,e,n){var i=mm(t),r=t,a=!Qf(t),o=e.attrs,s=o===void 0?nf:o,l=e.componentId,c=l===void 0?function(m,x){var S=typeof m!="string"?"sc":v0(m);ed[S]=(ed[S]||0)+1;var b="".concat(S,"-").concat(ob("6.0.8"+S+ed[S]));return x?"".concat(x,"-").concat(b):b}(e.displayName,e.parentComponentId):l,u=e.displayName;u===void 0&&function(m){return Qf(m)?"styled.".concat(m):"Styled(".concat(sb(m),")")}(t);var f=e.displayName&&e.componentId?"".concat(v0(e.displayName),"-").concat(e.componentId):e.componentId||c,d=i&&r.attrs?r.attrs.concat(s).filter(Boolean):s,p=e.shouldForwardProp;if(i&&r.shouldForwardProp){var v=r.shouldForwardProp;if(e.shouldForwardProp){var y=e.shouldForwardProp;p=function(m,x){return v(m,x)&&y(m,x)}}else p=v}var g=new Nb(n,f,i?r.componentStyle:void 0);function h(m,x){return function(S,b,E){var R=S.attrs,M=S.componentStyle,T=S.defaultProps,z=S.foldedComponentIds,K=S.styledComponentId,q=S.target,I=Xi.useContext(au),B=w0(),Y=S.shouldForwardProp||B.shouldForwardProp,W=function(ae,re,ce){for(var ge,_e=en(en({},re),{className:void 0,theme:ce}),Se=0;Se<ae.length;Se+=1){var $e=va(ge=ae[Se])?ge(_e):ge;for(var mt in $e)_e[mt]=mt==="className"?ta(_e[mt],$e[mt]):mt==="style"?en(en({},_e[mt]),$e[mt]):$e[mt]}return re.className&&(_e.className=ta(_e.className,re.className)),_e}(R,b,nb(b,I,T)||Ro),U=W.as||q,N={};for(var H in W)W[H]===void 0||H[0]==="$"||H==="as"||H==="theme"||(H==="forwardedAs"?N.as=W.forwardedAs:Y&&!Y(H,U)||(N[H]=W[H]));var L=function(ae,re){var ce=w0(),ge=ae.generateAndInjectStyles(re,ce.styleSheet,ce.stylis);return ge}(M,W),V=ta(z,K);return L&&(V+=" "+L),W.className&&(V+=" "+W.className),N[Qf(U)&&!Mx.has(U)?"class":"className"]=V,N.ref=E,ze.createElement(U,N)}(_,m,x)}var _=Xi.forwardRef(h);return _.attrs=d,_.componentStyle=g,_.shouldForwardProp=p,_.foldedComponentIds=i?ta(r.foldedComponentIds,r.styledComponentId):"",_.styledComponentId=f,_.target=i?r.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=i?function(x){for(var S=[],b=1;b<arguments.length;b++)S[b-1]=arguments[b];for(var E=0,R=S;E<R.length;E++)Fh(x,R[E],!0);return x}({},r.defaultProps,m):m}}),gm(_,function(){return".".concat(_.styledComponentId)}),a&&Ax(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function T0(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var A0=function(t){return Object.assign(t,{isCss:!0})};function rf(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(va(t)||Vs(t)){var i=t;return A0(sa(T0(nf,nu([i],e,!0))))}var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?sa(r):A0(sa(T0(r,e)))}function Bh(t,e,n){if(n===void 0&&(n=Ro),!e)throw _a(1,e);var i=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return t(e,n,rf.apply(void 0,nu([r],a,!1)))};return i.attrs=function(r){return Bh(t,e,en(en({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Bh(t,e,en(en({},n),r))},i}var Ux=function(t){return Bh(kb,t)},Pe=Ux;Mx.forEach(function(t){Pe[t]=Ux(t)});const Fb={fg:{normal:"hsla(0, 100%, 100%, 1)",clickable:"hsla(180, 100%, 64%, 1)",mute:"hsla(0, 0%, 100%, 0.75)"},bg:{normal:"hsla(0, 0%, 0%, 0.4)",mute:"hsla(0, 0%, 0%, 0.2)"},animationDuration:"250ms"},Nx="SET_PAGE_PROGRESSION",zb=(t,e,n)=>({type:Nx,relative:t,absolute:e,total:n}),Ox="SET_STARS",C0=t=>({type:Ox,stars:t}),kx="SET_ANCHOR",Bb=(t,e)=>({type:kx,name:t,anchor:e}),Fx="SET_PAGE_SIZE",Hb=(t,e,n)=>({type:Fx,width:t,height:e,devicePixelRatio:n});var Gb={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Vb={prefix:"fas",iconName:"shuttle-space",icon:[640,512,["space-shuttle"],"f197","M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96h2zM352 128L245.2 63.9C210.4 43 170.6 32 130 32h-2v96l224 0zM96 128l0-96H80C53.5 32 32 53.5 32 80v48h8c-22.1 0-40 17.9-40 40v16V328v16c0 22.1 17.9 40 40 40H32v48c0 26.5 21.5 48 48 48H96l0-96h8c26.2 0 49.4-12.6 64-32H456c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6v24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4V212.4c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z"]},Wb=Vb,jb={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Xb=jb,$b={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Yb={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};function R0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?R0(Object(n),!0).forEach(function(i){Dt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ou(t){"@babel/helpers - typeof";return ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ou(t)}function qb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P0(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Kb(t,e,n){return e&&P0(t.prototype,e),n&&P0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Dt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vm(t,e){return Qb(t)||eT(t,e)||zx(t,e)||nT()}function al(t){return Zb(t)||Jb(t)||zx(t)||tT()}function Zb(t){if(Array.isArray(t))return Hh(t)}function Qb(t){if(Array.isArray(t))return t}function Jb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function zx(t,e){if(t){if(typeof t=="string")return Hh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hh(t,e)}}function Hh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function tT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var L0=function(){},_m={},Bx={},Hx=null,Gx={mark:L0,measure:L0};try{typeof window<"u"&&(_m=window),typeof document<"u"&&(Bx=document),typeof MutationObserver<"u"&&(Hx=MutationObserver),typeof performance<"u"&&(Gx=performance)}catch{}var iT=_m.navigator||{},I0=iT.userAgent,D0=I0===void 0?"":I0,Ir=_m,dt=Bx,U0=Hx,Il=Gx;Ir.document;var tr=!!dt.documentElement&&!!dt.head&&typeof dt.addEventListener=="function"&&typeof dt.createElement=="function",Vx=~D0.indexOf("MSIE")||~D0.indexOf("Trident/"),Dl,Ul,Nl,Ol,kl,Zi="___FONT_AWESOME___",Gh=16,Wx="fa",jx="svg-inline--fa",ya="data-fa-i2svg",Vh="data-fa-pseudo-element",rT="data-fa-pseudo-element-pending",ym="data-prefix",xm="data-icon",N0="fontawesome-i2svg",aT="async",oT=["HTML","HEAD","STYLE","SCRIPT"],Xx=function(){try{return!0}catch{return!1}}(),ut="classic",Mt="sharp",Sm=[ut,Mt];function ol(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[ut]}})}var Ws=ol((Dl={},Dt(Dl,ut,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Dt(Dl,Mt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Dl)),js=ol((Ul={},Dt(Ul,ut,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Dt(Ul,Mt,{solid:"fass",regular:"fasr",light:"fasl"}),Ul)),Xs=ol((Nl={},Dt(Nl,ut,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Dt(Nl,Mt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Nl)),sT=ol((Ol={},Dt(Ol,ut,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Dt(Ol,Mt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Ol)),lT=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,$x="fa-layers-text",cT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,uT=ol((kl={},Dt(kl,ut,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Dt(kl,Mt,{900:"fass",400:"fasr",300:"fasl"}),kl)),Yx=[1,2,3,4,5,6,7,8,9,10],fT=Yx.concat([11,12,13,14,15,16,17,18,19,20]),dT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],na={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$s=new Set;Object.keys(js[ut]).map($s.add.bind($s));Object.keys(js[Mt]).map($s.add.bind($s));var hT=[].concat(Sm,al($s),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",na.GROUP,na.SWAP_OPACITY,na.PRIMARY,na.SECONDARY]).concat(Yx.map(function(t){return"".concat(t,"x")})).concat(fT.map(function(t){return"w-".concat(t)})),Ms=Ir.FontAwesomeConfig||{};function pT(t){var e=dt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function mT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(dt&&typeof dt.querySelector=="function"){var gT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];gT.forEach(function(t){var e=vm(t,2),n=e[0],i=e[1],r=mT(pT(n));r!=null&&(Ms[i]=r)})}var qx={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wx,replacementClass:jx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ms.familyPrefix&&(Ms.cssPrefix=Ms.familyPrefix);var Po=de(de({},qx),Ms);Po.autoReplaceSvg||(Po.observeMutations=!1);var ve={};Object.keys(qx).forEach(function(t){Object.defineProperty(ve,t,{enumerable:!0,set:function(n){Po[t]=n,Es.forEach(function(i){return i(ve)})},get:function(){return Po[t]}})});Object.defineProperty(ve,"familyPrefix",{enumerable:!0,set:function(e){Po.cssPrefix=e,Es.forEach(function(n){return n(ve)})},get:function(){return Po.cssPrefix}});Ir.FontAwesomeConfig=ve;var Es=[];function vT(t){return Es.push(t),function(){Es.splice(Es.indexOf(t),1)}}var ir=Gh,wi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _T(t){if(!(!t||!tr)){var e=dt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=dt.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return dt.head.insertBefore(e,i),t}}var yT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ys(){for(var t=12,e="";t-- >0;)e+=yT[Math.random()*62|0];return e}function zo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Mm(t){return t.classList?zo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Kx(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Kx(t[n]),'" ')},"").trim()}function af(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Em(t){return t.size!==wi.size||t.x!==wi.x||t.y!==wi.y||t.rotate!==wi.rotate||t.flipX||t.flipY}function ST(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function MT(t){var e=t.transform,n=t.width,i=n===void 0?Gh:n,r=t.height,a=r===void 0?Gh:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Vx?l+="translate(".concat(e.x/ir-i/2,"em, ").concat(e.y/ir-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):l+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),l+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var ET=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zx(){var t=Wx,e=jx,n=ve.cssPrefix,i=ve.replacementClass,r=ET;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var O0=!1;function td(){ve.autoAddCss&&!O0&&(_T(Zx()),O0=!0)}var wT={mixout:function(){return{dom:{css:Zx,insertCss:td}}},hooks:function(){return{beforeDOMElementCreation:function(){td()},beforeI2svg:function(){td()}}}},Qi=Ir||{};Qi[Zi]||(Qi[Zi]={});Qi[Zi].styles||(Qi[Zi].styles={});Qi[Zi].hooks||(Qi[Zi].hooks={});Qi[Zi].shims||(Qi[Zi].shims=[]);var ci=Qi[Zi],Qx=[],bT=function t(){dt.removeEventListener("DOMContentLoaded",t),su=1,Qx.map(function(e){return e()})},su=!1;tr&&(su=(dt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(dt.readyState),su||dt.addEventListener("DOMContentLoaded",bT));function TT(t){tr&&(su?setTimeout(t,0):Qx.push(t))}function sl(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?Kx(t):"<".concat(e," ").concat(xT(i),">").concat(a.map(sl).join(""),"</").concat(e,">")}function k0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var AT=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},nd=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?AT(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function CT(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Wh(t){var e=CT(t);return e.length===1?e[0].toString(16):null}function RT(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function F0(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function jh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=F0(e);typeof ci.hooks.addPack=="function"&&!r?ci.hooks.addPack(t,F0(e)):ci.styles[t]=de(de({},ci.styles[t]||{}),a),t==="fas"&&jh("fa",e)}var Fl,zl,Bl,no=ci.styles,PT=ci.shims,LT=(Fl={},Dt(Fl,ut,Object.values(Xs[ut])),Dt(Fl,Mt,Object.values(Xs[Mt])),Fl),wm=null,Jx={},eS={},tS={},nS={},iS={},IT=(zl={},Dt(zl,ut,Object.keys(Ws[ut])),Dt(zl,Mt,Object.keys(Ws[Mt])),zl);function DT(t){return~hT.indexOf(t)}function UT(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!DT(r)?r:null}var rS=function(){var e=function(a){return nd(no,function(o,s,l){return o[l]=nd(s,a,{}),o},{})};Jx=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),eS=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),iS=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in no||ve.autoFetchSvg,i=nd(PT,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});tS=i.names,nS=i.unicodes,wm=of(ve.styleDefault,{family:ve.familyDefault})};vT(function(t){wm=of(t.styleDefault,{family:ve.familyDefault})});rS();function bm(t,e){return(Jx[t]||{})[e]}function NT(t,e){return(eS[t]||{})[e]}function ia(t,e){return(iS[t]||{})[e]}function aS(t){return tS[t]||{prefix:null,iconName:null}}function OT(t){var e=nS[t],n=bm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return wm}var Tm=function(){return{prefix:null,iconName:null,rest:[]}};function of(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?ut:n,r=Ws[i][t],a=js[i][t]||js[i][r],o=t in ci.styles?t:null;return a||o||null}var z0=(Bl={},Dt(Bl,ut,Object.keys(Xs[ut])),Dt(Bl,Mt,Object.keys(Xs[Mt])),Bl);function sf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Dt(e,ut,"".concat(ve.cssPrefix,"-").concat(ut)),Dt(e,Mt,"".concat(ve.cssPrefix,"-").concat(Mt)),e),o=null,s=ut;(t.includes(a[ut])||t.some(function(c){return z0[ut].includes(c)}))&&(s=ut),(t.includes(a[Mt])||t.some(function(c){return z0[Mt].includes(c)}))&&(s=Mt);var l=t.reduce(function(c,u){var f=UT(ve.cssPrefix,u);if(no[u]?(u=LT[s].includes(u)?sT[s][u]:u,o=u,c.prefix=u):IT[s].indexOf(u)>-1?(o=u,c.prefix=of(u,{family:s})):f?c.iconName=f:u!==ve.replacementClass&&u!==a[ut]&&u!==a[Mt]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?aS(c.iconName):{},p=ia(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!no.far&&no.fas&&!ve.autoFetchSvg&&(c.prefix="fas")}return c},Tm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Mt&&(no.fass||ve.autoFetchSvg)&&(l.prefix="fass",l.iconName=ia(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Dr()||"fas"),l}var kT=function(){function t(){qb(this,t),this.definitions={}}return Kb(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=de(de({},n.definitions[s]||{}),o[s]),jh(s,o[s]);var l=Xs[ut][s];l&&jh(l,o[s]),rS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),B0=[],io={},po={},FT=Object.keys(po);function zT(t,e){var n=e.mixoutsTo;return B0=t,io={},Object.keys(po).forEach(function(i){FT.indexOf(i)===-1&&delete po[i]}),B0.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),ou(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){io[o]||(io[o]=[]),io[o].push(a[o])})}i.provides&&i.provides(po)}),n}function Xh(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=io[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function xa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=io[t]||[];r.forEach(function(a){a.apply(null,n)})}function Ji(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return po[t]?po[t].apply(null,e):void 0}function $h(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Dr();if(e)return e=ia(n,e)||e,k0(oS.definitions,n,e)||k0(ci.styles,n,e)}var oS=new kT,BT=function(){ve.autoReplaceSvg=!1,ve.observeMutations=!1,xa("noAuto")},HT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tr?(xa("beforeI2svg",e),Ji("pseudoElements2svg",e),Ji("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ve.autoReplaceSvg===!1&&(ve.autoReplaceSvg=!0),ve.observeMutations=!0,TT(function(){VT({autoReplaceSvgRoot:n}),xa("watch",e)})}},GT={icon:function(e){if(e===null)return null;if(ou(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ia(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=of(e[0]);return{prefix:i,iconName:ia(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ve.cssPrefix,"-"))>-1||e.match(lT))){var r=sf(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Dr(),iconName:ia(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Dr();return{prefix:a,iconName:ia(a,e)||e}}}},zn={noAuto:BT,config:ve,dom:HT,parse:GT,library:oS,findIconDefinition:$h,toHtml:sl},VT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?dt:n;(Object.keys(ci.styles).length>0||ve.autoFetchSvg)&&tr&&ve.autoReplaceSvg&&zn.dom.i2svg({node:i})};function lf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return sl(i)})}}),Object.defineProperty(t,"node",{get:function(){if(tr){var i=dt.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function WT(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(Em(o)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=af(de(de({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function jT(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(ve.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:de(de({},r),{},{id:o}),children:i}]}]}function Am(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,v=i.found?i:n,y=v.width,g=v.height,h=r==="fak",_=[ve.replacementClass,a?"".concat(ve.cssPrefix,"-").concat(a):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),m={children:[],attributes:de(de({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(g)})},x=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/g*16*.0625,"em")}:{};p&&(m.attributes[ya]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(u||Ys())},children:[l]}),delete m.attributes.title);var S=de(de({},m),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:o,symbol:s,styles:de(de({},x),f.styles)}),b=i.found&&n.found?Ji("generateAbstractMask",S)||{children:[],attributes:{}}:Ji("generateAbstractIcon",S)||{children:[],attributes:{}},E=b.children,R=b.attributes;return S.children=E,S.attributes=R,s?jT(S):WT(S)}function H0(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=de(de(de({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[ya]="");var u=de({},o.styles);Em(r)&&(u.transform=MT({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=af(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function XT(t){var e=t.content,n=t.title,i=t.extra,r=de(de(de({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=af(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var id=ci.styles;function Yh(t){var e=t[0],n=t[1],i=t.slice(4),r=vm(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(ve.cssPrefix,"-").concat(na.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(na.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(na.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var $T={found:!1,width:512,height:512};function YT(t,e){!Xx&&!ve.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function qh(t,e){var n=e;return e==="fa"&&ve.styleDefault!==null&&(e=Dr()),new Promise(function(i,r){if(Ji("missingIconAbstract"),n==="fa"){var a=aS(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&id[e]&&id[e][t]){var o=id[e][t];return i(Yh(o))}YT(t,e),i(de(de({},$T),{},{icon:ve.showMissingIcons&&t?Ji("missingIconAbstract")||{}:{}}))})}var G0=function(){},Kh=ve.measurePerformance&&Il&&Il.mark&&Il.measure?Il:{mark:G0,measure:G0},us='FA "6.4.2"',qT=function(e){return Kh.mark("".concat(us," ").concat(e," begins")),function(){return sS(e)}},sS=function(e){Kh.mark("".concat(us," ").concat(e," ends")),Kh.measure("".concat(us," ").concat(e),"".concat(us," ").concat(e," begins"),"".concat(us," ").concat(e," ends"))},Cm={begin:qT,end:sS},Rc=function(){};function V0(t){var e=t.getAttribute?t.getAttribute(ya):null;return typeof e=="string"}function KT(t){var e=t.getAttribute?t.getAttribute(ym):null,n=t.getAttribute?t.getAttribute(xm):null;return e&&n}function ZT(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ve.replacementClass)}function QT(){if(ve.autoReplaceSvg===!0)return Pc.replace;var t=Pc[ve.autoReplaceSvg];return t||Pc.replace}function JT(t){return dt.createElementNS("http://www.w3.org/2000/svg",t)}function eA(t){return dt.createElement(t)}function lS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?JT:eA:n;if(typeof t=="string")return dt.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(lS(o,{ceFn:i}))}),r}function tA(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Pc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(lS(r),n)}),n.getAttribute(ya)===null&&ve.keepOriginalSource){var i=dt.createComment(tA(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Mm(n).indexOf(ve.replacementClass))return Pc.replace(e);var r=new RegExp("".concat(ve.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===ve.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return sl(s)}).join(`
`);n.setAttribute(ya,""),n.innerHTML=o}};function W0(t){t()}function cS(t,e){var n=typeof e=="function"?e:Rc;if(t.length===0)n();else{var i=W0;ve.mutateApproach===aT&&(i=Ir.requestAnimationFrame||W0),i(function(){var r=QT(),a=Cm.begin("mutate");t.map(r),a(),n()})}}var Rm=!1;function uS(){Rm=!0}function Zh(){Rm=!1}var lu=null;function j0(t){if(U0&&ve.observeMutations){var e=t.treeCallback,n=e===void 0?Rc:e,i=t.nodeCallback,r=i===void 0?Rc:i,a=t.pseudoElementsCallback,o=a===void 0?Rc:a,s=t.observeMutationsRoot,l=s===void 0?dt:s;lu=new U0(function(c){if(!Rm){var u=Dr();zo(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!V0(f.addedNodes[0])&&(ve.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&ve.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&V0(f.target)&&~dT.indexOf(f.attributeName))if(f.attributeName==="class"&&KT(f.target)){var d=sf(Mm(f.target)),p=d.prefix,v=d.iconName;f.target.setAttribute(ym,p||u),v&&f.target.setAttribute(xm,v)}else ZT(f.target)&&r(f.target)})}}),tr&&lu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nA(){lu&&lu.disconnect()}function iA(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function rA(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=sf(Mm(t));return r.prefix||(r.prefix=Dr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=NT(r.prefix,t.innerText)||bm(r.prefix,Wh(t.innerText))),!r.iconName&&ve.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function aA(t){var e=zo(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return ve.autoA11y&&(n?e["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(i||Ys()):(e["aria-hidden"]="true",e.focusable="false")),e}function oA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=rA(t),i=n.iconName,r=n.prefix,a=n.rest,o=aA(t),s=Xh("parseNodeAttributes",{},t),l=e.styleParser?iA(t):[];return de({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var sA=ci.styles;function fS(t){var e=ve.autoReplaceSvg==="nest"?X0(t,{styleParser:!1}):X0(t);return~e.extra.classes.indexOf($x)?Ji("generateLayersText",t,e):Ji("generateSvgReplacementMutation",t,e)}var Ur=new Set;Sm.map(function(t){Ur.add("fa-".concat(t))});Object.keys(Ws[ut]).map(Ur.add.bind(Ur));Object.keys(Ws[Mt]).map(Ur.add.bind(Ur));Ur=al(Ur);function $0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tr)return Promise.resolve();var n=dt.documentElement.classList,i=function(f){return n.add("".concat(N0,"-").concat(f))},r=function(f){return n.remove("".concat(N0,"-").concat(f))},a=ve.autoFetchSvg?Ur:Sm.map(function(u){return"fa-".concat(u)}).concat(Object.keys(sA));a.includes("fa")||a.push("fa");var o=[".".concat($x,":not([").concat(ya,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(ya,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=zo(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=Cm.begin("onTree"),c=s.reduce(function(u,f){try{var d=fS(f);d&&u.push(d)}catch(p){Xx||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){cS(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function lA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fS(t).then(function(n){n&&cS([n],e)})}function cA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:$h(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:$h(r||{})),t(i,de(de({},n),{},{mask:r}))}}var uA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?wi:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,v=p===void 0?null:p,y=n.classes,g=y===void 0?[]:y,h=n.attributes,_=h===void 0?{}:h,m=n.styles,x=m===void 0?{}:m;if(e){var S=e.prefix,b=e.iconName,E=e.icon;return lf(de({type:"icon"},e),function(){return xa("beforeDOMElementCreation",{iconDefinition:e,params:n}),ve.autoA11y&&(d?_["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(v||Ys()):(_["aria-hidden"]="true",_.focusable="false")),Am({icons:{main:Yh(E),mask:l?Yh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:de(de({},wi),r),symbol:o,title:d,maskId:u,titleId:v,extra:{attributes:_,styles:x,classes:g}})})}},fA={mixout:function(){return{icon:cA(uA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$0,n.nodeCallback=lA,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?dt:i,a=n.callback,o=a===void 0?function(){}:a;return $0(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,v){Promise.all([qh(r,s),u.iconName?qh(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var g=vm(y,2),h=g[0],_=g[1];p([n,Am({icons:{main:h,mask:_},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=af(s);l.length>0&&(r.style=l);var c;return Em(o)&&(c=Ji("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},dA={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return lf({type:"layer"},function(){xa("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ve.cssPrefix,"-layers")].concat(al(a)).join(" ")},children:o}]})}}}},hA={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return lf({type:"counter",content:n},function(){return xa("beforeDOMElementCreation",{content:n,params:i}),XT({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(ve.cssPrefix,"-layers-counter")].concat(al(s))}})})}}}},pA={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?wi:r,o=i.title,s=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return lf({type:"text",content:n},function(){return xa("beforeDOMElementCreation",{content:n,params:i}),H0({content:n,transform:de(de({},wi),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(ve.cssPrefix,"-layers-text")].concat(al(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(Vx){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return ve.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,H0({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},mA=new RegExp('"',"ug"),Y0=[1105920,1112319];function gA(t){var e=t.replace(mA,""),n=RT(e,0),i=n>=Y0[0]&&n<=Y0[1],r=e.length===2?e[0]===e[1]:!1;return{value:Wh(r?e[0]:e),isSecondary:i||r}}function q0(t,e){var n="".concat(rT).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=zo(t.children),o=a.filter(function(E){return E.getAttribute(Vh)===e})[0],s=Ir.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(cT),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Mt:ut,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?js[d][l[2].toLowerCase()]:uT[d][c],v=gA(f),y=v.value,g=v.isSecondary,h=l[0].startsWith("FontAwesome"),_=bm(p,y),m=_;if(h){var x=OT(y);x.iconName&&x.prefix&&(_=x.iconName,p=x.prefix)}if(_&&!g&&(!o||o.getAttribute(ym)!==p||o.getAttribute(xm)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var S=oA(),b=S.extra;b.attributes[Vh]=e,qh(_,p).then(function(E){var R=Am(de(de({},S),{},{icons:{main:E,mask:Tm()},prefix:p,iconName:m,extra:b,watchable:!0})),M=dt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=R.map(function(T){return sl(T)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function vA(t){return Promise.all([q0(t,"::before"),q0(t,"::after")])}function _A(t){return t.parentNode!==document.head&&!~oT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function K0(t){if(tr)return new Promise(function(e,n){var i=zo(t.querySelectorAll("*")).filter(_A).map(vA),r=Cm.begin("searchPseudoElements");uS(),Promise.all(i).then(function(){r(),Zh(),e()}).catch(function(){r(),Zh(),n()})})}var yA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=K0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?dt:i;ve.searchPseudoElements&&K0(r)}}},Z0=!1,xA={mixout:function(){return{dom:{unwatch:function(){uS(),Z0=!0}}}},hooks:function(){return{bootstrap:function(){j0(Xh("mutationObserverCallbacks",{}))},noAuto:function(){nA()},watch:function(n){var i=n.observeMutationsRoot;Z0?Zh():j0(Xh("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},Q0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},SA={mixout:function(){return{parse:{transform:function(n){return Q0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=Q0(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:de({},p.outer),children:[{tag:"g",attributes:de({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:de(de({},i.icon.attributes),p.path)}]}]}}}},rd={x:0,y:0,width:"100%",height:"100%"};function J0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function MA(t){return t.tag==="g"?t.children:[t]}var EA={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?sf(r.split(" ").map(function(o){return o.trim()})):Tm();return a.prefix||(a.prefix=Dr()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,f=o.width,d=o.icon,p=ST({transform:l,containerWidth:f,iconWidth:c}),v={tag:"rect",attributes:de(de({},rd),{},{fill:"white"})},y=u.children?{children:u.children.map(J0)}:{},g={tag:"g",attributes:de({},p.inner),children:[J0(de({tag:u.tag,attributes:de(de({},u.attributes),p.path)},y))]},h={tag:"g",attributes:de({},p.outer),children:[g]},_="mask-".concat(s||Ys()),m="clip-".concat(s||Ys()),x={tag:"mask",attributes:de(de({},rd),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,h]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:MA(d)},x]};return i.push(S,{tag:"rect",attributes:de({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(_,")")},rd)}),{children:i,attributes:r}}}},wA={provides:function(e){var n=!1;Ir.matchMedia&&(n=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:de(de({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=de(de({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:de(de({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:de(de({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:de(de({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:de(de({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:de(de({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:de(de({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:de(de({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},bA={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},TA=[wT,fA,dA,hA,pA,yA,xA,SA,EA,wA,bA];zT(TA,{mixoutsTo:zn});zn.noAuto;zn.config;zn.library;zn.dom;var Qh=zn.parse;zn.findIconDefinition;zn.toHtml;var AA=zn.icon;zn.layer;zn.text;zn.counter;var dS={exports:{}},CA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",RA=CA,PA=RA;function hS(){}function pS(){}pS.resetWarningCache=hS;var LA=function(){function t(i,r,a,o,s,l){if(l!==PA){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:pS,resetWarningCache:hS};return n.PropTypes=n,n};dS.exports=LA();var IA=dS.exports;const We=k_(IA);function ev(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function gr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ev(Object(n),!0).forEach(function(i){ro(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ev(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function cu(t){"@babel/helpers - typeof";return cu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},cu(t)}function ro(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function DA(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function UA(t,e){if(t==null)return{};var n=DA(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Jh(t){return NA(t)||OA(t)||kA(t)||FA()}function NA(t){if(Array.isArray(t))return ep(t)}function OA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kA(t,e){if(t){if(typeof t=="string")return ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ep(t,e)}}function ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function FA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zA(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,f=t.pulse,d=t.fixedWidth,p=t.inverse,v=t.border,y=t.listItem,g=t.flip,h=t.size,_=t.rotation,m=t.pull,x=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":v,"fa-li":y,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},ro(e,"fa-".concat(h),typeof h<"u"&&h!==null),ro(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),ro(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),ro(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(x).map(function(S){return x[S]?S:null}).filter(function(S){return S})}function BA(t){return t=t-0,t===t}function mS(t){return BA(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var HA=["style"];function GA(t){return t.charAt(0).toUpperCase()+t.slice(1)}function VA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=mS(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[GA(r)]=a:e[r]=a,e},{})}function gS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return gS(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=VA(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[mS(c)]=u}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=UA(n,HA);return r.attrs.style=gr(gr({},r.attrs.style),o),t.apply(void 0,[e.tag,gr(gr({},r.attrs),s)].concat(Jh(i)))}var vS=!1;try{vS=!0}catch{}function WA(){if(!vS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function tv(t){if(t&&cu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Qh.icon)return Qh.icon(t);if(t===null)return null;if(t&&cu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ad(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ro({},t,e):{}}var Pn=Xi.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,c=tv(n),u=ad("classes",[].concat(Jh(zA(t)),Jh(a.split(" ")))),f=ad("transform",typeof t.transform=="string"?Qh.transform(t.transform):t.transform),d=ad("mask",tv(i)),p=AA(c,gr(gr(gr(gr({},u),f),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!p)return WA("Could not find icon",c),null;var v=p.abstract,y={ref:e};return Object.keys(t).forEach(function(g){Pn.defaultProps.hasOwnProperty(g)||(y[g]=t[g])}),jA(v[0],y)});Pn.displayName="FontAwesomeIcon";Pn.propTypes={beat:We.bool,border:We.bool,beatFade:We.bool,bounce:We.bool,className:We.string,fade:We.bool,flash:We.bool,mask:We.oneOfType([We.object,We.array,We.string]),maskId:We.string,fixedWidth:We.bool,inverse:We.bool,flip:We.oneOf([!0,!1,"horizontal","vertical","both"]),icon:We.oneOfType([We.object,We.array,We.string]),listItem:We.bool,pull:We.oneOf(["right","left"]),pulse:We.bool,rotation:We.oneOf([0,90,180,270]),shake:We.bool,size:We.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:We.bool,spinPulse:We.bool,spinReverse:We.bool,symbol:We.oneOfType([We.bool,We.string]),title:We.string,titleId:We.string,transform:We.oneOfType([We.string,We.object]),swapOpacity:We.bool};Pn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var jA=gS.bind(null,Xi.createElement);const _S=Pe.span`
  position: absolute;
  transform: scale(0);
  transition: ease-in-out ${t=>t.theme.animationDuration} transform;
  top: 0;
  left: 0.25em;
  color: ${t=>t.theme.fg.mute};
  font-size: 0.75em;
`,XA=Pe.span`
  position: relative;
`,$A=Pe.div`
  display: inline-block;

  &:hover ${_S} {
    transform: scale(1);
  }
`,YA=Pe.a`
  color: ${t=>t.theme.fg.clickable};
`;function un({url:t,className:e,children:n,...i}){return $.jsxs($A,{className:e,children:[$.jsx(YA,{rel:"noreferrer noopener",href:t,target:"_blank",...i,children:n}),$.jsx(XA,{children:$.jsx(_S,{children:$.jsx(Pn,{icon:Xb})})})]})}const qA=Pe.div`
  color: ${t=>t.theme.fg.mute};
`,KA=Pe.time`
  color: ${t=>t.theme.fg.normal};
  font-size: 1.5em;
`,ZA=Pe.time`
  color: ${t=>t.theme.fg.mute};
  font-size: 0.75em;
`;function QA({start:t,end:e}){return $.jsxs(qA,{children:[$.jsx(KA,{dateTime:e,children:e})," ‒ ",$.jsx(ZA,{dateTime:t,children:t})]})}const JA=[{start:"2019",end:new Date().getFullYear(),activities:[{name:"EAP Expertise Art et Patrimoine",role:"CEO",url:"https://www.eap-expertise.fr/"},{name:"Akretion",role:"Odoo freelancer",url:"https://www.akretion.com/fr"}]},{start:"2011",end:"2019",activities:[{name:"Kozea",role:"Python / ECMAScript Architect",url:"https://kozea.fr/"}]},{start:"2009",end:"2011",activities:[{name:"Viseo",role:"Java / ECMAScript Developper",url:"https://www.viseo.com/"}]},{start:"2004",end:"2009",activities:[{name:"INSA Lyon",role:"Studied IT",url:"http://insa-lyon.fr/"}]}],eC=Pe.header`
  margin-top: 2em;
  margin-bottom: 2em;
  margin-right: ${t=>t.$left?"1em":0};
  margin-left: ${t=>t.$left?0:"1em"};
  display: flex;
  flex-direction: column;
  text-align: ${t=>t.$left?"right":"left"};
  min-width: ${t=>t.$left?57:48}%;
  align-self: ${t=>t.$left?"flex-start":"flex-end"};
`,tC=Pe.div`
  width: 100%;
  color: ${t=>t.theme.fg.normal};
  border-bottom: 2px solid ${t=>t.theme.fg.normal};
  font-size: 2em;
  align-self: flex-end;
  margin-left: ${t=>t.$left?"1em":0};
  margin-bottom: 0.5em;
`,nC=Pe.div`
  color: ${t=>t.theme.fg.mute};
  font-size: 1.25em;
  margin-left: ${t=>t.$left?"1em":0};
  margin-right: ${t=>t.$left?0:"1em"};
`;function Bo({level:t,children:e,className:n}){t=t||2;const i=t%2;return $.jsx(eC,{$left:i,className:n,children:ze.Children.map(e,(r,a)=>a===0?$.jsx(tC,{as:`h${t}`,$left:i,children:r}):$.jsx(nC,{$left:i,children:r}))})}const iC=Pe.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
`;function Br({anchor:t,className:e,children:n}){const i=ze.useRef(),r=fm(),{width:a,height:o}=Vi(l=>l.page),s=ze.useCallback(()=>r(Bb(t,i.current.offsetTop)),[r,t,a,o]);return ze.useEffect(()=>(s(),window.addEventListener("load",s,!1),()=>window.removeEventListener("load",s)),[s]),$.jsx(iC,{className:e,ref:i,children:n})}const rC=Pe.article`
  margin: 1em;
  font-size: 1.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${t=>t.theme.fg.normal};
  align-self: center;
`,aC=Pe.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: ${t=>t.theme.bg.normal};
  backdrop-filter: blur(5px);
`;function Pm({className:t,children:e}){return $.jsx(rC,{className:t,children:$.jsx(aC,{children:e})})}const oC=Pe.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;function Lm({className:t,children:e}){return $.jsx(oC,{className:t,children:e})}const sC=Pe.li`
  margin: 1em 0.5em;
`;function Ei({className:t,children:e}){return $.jsx(sC,{className:t,children:e})}const lC=Pe.div`
  margin-left: 1em;
  margin-top: 0.25em;
  margin-bottom: 0.5em;
`;function cC(){const t=Math.floor((new Date().getTime()-523e9)/31536e6);return $.jsxs(Br,{anchor:"bio",children:[$.jsxs(Bo,{children:["Bio",$.jsxs($.Fragment,{children:[t," years old"]}),$.jsxs($.Fragment,{children:["Living in"," ",$.jsx(un,{url:"https://www.google.com/maps/place/Lyon",children:"Lyon, France"})]})]}),$.jsx(Pm,{children:$.jsx(Lm,{children:JA.map(({start:e,end:n,activities:i})=>$.jsxs(Ei,{children:[$.jsx(QA,{start:e,end:n}),i.map(({name:r,role:a,url:o})=>$.jsxs(lC,{children:[a," at ",$.jsx(un,{url:o,children:r})]},o))]},i.map(({name:r})=>r).join("|")))})})]})}var uC={prefix:"fab",iconName:"gitlab",icon:[512,512,[],"f296","M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"]},fC={prefix:"fab",iconName:"reddit-alien",icon:[512,512,[],"f281","M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"]},dC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},hC={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function pC(){return $.jsxs(Br,{anchor:"contact",children:[$.jsx(Bo,{children:"Contact"}),$.jsx(Pm,{children:$.jsxs(Lm,{children:[$.jsxs(Ei,{children:[$.jsx(Pn,{icon:$b})," ",$.jsx(un,{url:"mailto:mounier.florian+dev@gmail.com",title:"Professional",children:"mounier.florian@gmail.com"})," "]}),$.jsxs(Ei,{children:[$.jsx(Pn,{icon:hC})," ",$.jsx(un,{url:"mailto:paradoxxx.zero+dev@gmail.com",title:"Personal",children:"paradoxxx.zero@gmail.com"})]}),$.jsxs(Ei,{children:[$.jsx(Pn,{icon:dC})," ",$.jsx(un,{url:"https://github.com/paradoxxxzero",title:"github",children:"paradoxxxzero"})]}),$.jsxs(Ei,{children:[$.jsx(Pn,{icon:uC})," ",$.jsx(un,{url:"https://gitlab.com/paradoxxxzero",title:"gitlab",children:"paradoxxxzero"})]}),$.jsxs(Ei,{children:[$.jsx(Pn,{icon:fC})," ",$.jsx(un,{url:"https://www.reddit.com/user/paradoxxx_zero",title:"reddit",children:"paradoxxx_zero"})]})]})})]})}const mC=Pe(Br)`
  min-height: 400%;
`,gC=Pe(Br)`
  min-height: 800%;
`;function vC(){return $.jsxs($.Fragment,{children:[$.jsx(mC,{anchor:"extra"}),$.jsx(gC,{anchor:"extra2"}),$.jsx(Br,{anchor:"end"})]})}function _C(){return $.jsx(Br,{anchor:"home",children:$.jsxs(Bo,{$level:1,children:["Full Stack Developper",$.jsx($.Fragment,{children:"Skilled Pythonist"}),$.jsx($.Fragment,{children:"Seasoned ECMAScripter"}),$.jsx($.Fragment,{children:"Open Source Enthusiast"})]})})}const uu=680,yC=Pe.ul`
  position: relative;
  display: flex;
  flex-direction: ${t=>t.$expanded?"row":"column"};
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`,xC=Pe.li`
  color: ${t=>t.theme.fg.normal};
  cursor: pointer;
  font-weight: ${t=>t.$active?"bold":"normal"};
  &:hover {
    background: ${t=>t.theme.bg.normal};
  }
  ${t=>t.$display&&rf`
      padding: 1em ${e=>e.$expanded?"2em":"1em"};
    `};

  font-size: ${t=>t.$expanded?"1em":"1.25em"};
  user-select: none;
`,SC=Pe.div`
  position: absolute;
  background-color: ${t=>t.theme.fg.normal};
  height: 5px;
  left: 0;
  top: -3px;
  transition: ${t=>t.theme.animationDuration} all;
`,MC=Pe.div`
  position: absolute;
  background-color: ${t=>t.theme.fg.normal};
  width: 5px;
  right: 0;
  top: 0;
  transition: ${t=>t.theme.animationDuration} all;
`,EC=Pe.nav`
  backdrop-filter: blur(2px);
  position: fixed;
  right: 0;
  top: 2em;
  z-index: 42;

  ${t=>t.$expanded&&rf`
      border-top: 2px solid ${e=>e.theme.fg.normal};
      min-width: 33%;
      max-width: max-content;
    `}
`,wC=[{name:"home",content:$.jsx(Pn,{icon:Yb})},{name:"experiments",content:"Experiments"},{name:"projects",content:"Projects"},{name:"bio",content:"Bio"},{name:"contact",content:"Contact"},{name:"meta",content:"Meta"},{name:"extra",content:$.jsx(Pn,{icon:Wb})},{name:"extra2",content:null},{name:"end",content:null}];function bC({onScrollRequested:t}){const e=Vi(d=>d.anchors),{width:n}=Vi(d=>d.page),i=ze.useRef(),r=ze.useRef(),a=ze.useRef({}),o=ze.useRef(),{absolute:s}=Vi(d=>d.progression),l=Object.entries(e).sort((d,p)=>d[1]-p[1]).reduce((d,[p,v])=>s>=v?p:d,null),c=n>uu&&l===Object.keys(e)[0],u=d=>()=>t(e[d]),f=d=>p=>{a.current[d]=p};return ze.useEffect(()=>{const{current:d}=i,{current:p}=r;if(!l)return;o.current!==null&&(clearTimeout(o.current),o.current=null);const v=a.current[l],y=()=>{c?(d.style.left=`${v.offsetLeft}px`,d.style.width=`${v.clientWidth}px`):(p.style.top=`${v.offsetTop}px`,p.style.height=`${v.clientHeight}px`),c?d.style.opacity=1:p.style.opacity=1};return!c&&+d.style.opacity==0?y():o.current=setTimeout(y,250),c?p.style.opacity=0:d.style.opacity=0,()=>{o.current!==null&&(clearTimeout(o.current),o.current=null)}},[i,r,o,a,l,c]),$.jsxs(EC,{anchor:"extra",$expanded:c,children:[$.jsx(SC,{ref:i}),$.jsx(MC,{ref:r}),$.jsx(yC,{$expanded:c,children:wC.map(({name:d,content:p})=>$.jsx(xC,{$anchor:d,$active:l===d,$expanded:c,$display:!!p,onClick:u(d),ref:f(d),title:typeof p=="string"?p:null,children:c||typeof p!="string"?p:p[0]},d))})]})}const TC=Pe.p`
  margin-top: 0.5em;
`,AC=Pe(Bo)`
  justify-content: flex-end;
`;function CC(){return $.jsxs(Br,{anchor:"meta",children:[$.jsx(Bo,{children:"Meta"}),$.jsxs(Pm,{children:[$.jsx(TC,{children:"This site has been hand-crafted with the help of these wonderful libraries:"}),$.jsxs(Lm,{children:[$.jsxs(Ei,{children:[$.jsx(un,{url:"https://react.dev/",children:"React"})," — for building the structure."]}),$.jsxs(Ei,{children:[$.jsx(un,{url:"https://redux.js.org/",children:"redux"})," ","— for containing this application state."]}),$.jsxs(Ei,{children:[$.jsx(un,{url:"https://threejs.org/",children:"three.js"})," ","— for a simple and powerful API on top of WebGL."]}),$.jsxs(Ei,{children:[$.jsx(un,{url:"https://vitejs.dev/",children:"vite"})," — to put everything together."]})]})]}),$.jsxs(AC,{$level:3,children:["Browse this site source code at",$.jsx(un,{url:"https://github.com/paradoxxxzero/paradoxxxzero.github.io/tree/src",children:"github.com/paradoxxxzero/paradoxxxzero.github.io"})]})]})}const RC=t=>t.replace(/https?:\/\/(.*)\/?/,"$1"),nv=t=>t.reduce((e,{full_name:n,stargazers_count:i})=>(e[n]=i,e),{}),PC=(t,e,n)=>isNaN(t)?e:Math.min(n,Math.max(e,t)),ba=(t,{start:e,end:n},i=0,r=1)=>PC((t-e)/(n-e),i,r),iv=()=>new Date().getTime(),LC=50,rv=async t=>{const e=await fetch(t),[n]=(e.headers.get("Content-Type")||"").split(";");if(e.status>300||e.status<200){if(n!=="application/json"){const r=await e.text();return console.error(e.status,r),{data:[],response:e}}const i=await e.json();return console.error(e.status,i.message||i.description,i),{data:[],response:e}}return{data:await e.json(),response:e}},IC=async t=>{const e=o=>`https://api.github.com/${t}/repos?per_page=${LC}&page=${o}`,{data:n,response:i}=await rv(e(1)),r=i.headers.get("Link");if(!r)return[];const a=+r.match(/<.+page=(\d+)>;\srel="last"/)[1];return a!==1&&(await Promise.all(new Array(a-1).fill().map((o,s)=>rv(e(s+2))))).map(({data:o})=>n.push(...o)),n},DC=()=>async t=>{try{const r=JSON.parse(localStorage.getItem("stars")||"{}");if(Object.keys(r).length&&(t(C0(r.stars)),iv()-r.time<1e3*60*60))return}catch(r){console.error(r)}const[e,n]=await Promise.all(["users/paradoxxxzero","orgs/Kozea"].map(r=>IC(r))),i={...nv(e),...nv(n)};try{localStorage.setItem("stars",JSON.stringify({time:iv(),stars:i}))}catch(r){console.error(r)}return t(C0(i))},UC=""+new URL("default-b7095637.webp",import.meta.url).href,yS=Pe.a`
  display: flex;
  color: gold;
  text-decoration: none;
`,NC=Pe.span`
  color: ${t=>t.theme.fg.normal};
`;function OC({url:t,stars:e,className:n}){return e==null&&(e=null),$.jsxs(yS,{href:t,className:n,children:[$.jsx(NC,{children:e||""}),$.jsx("span",{children:" "}),$.jsx(Pn,{icon:Gb})]})}const kC=Pe.article`
  flex: 2;
  margin: 1em;
`,xS=Pe.h2`
  display: flex;
  justify-content: space-between;
  flex: 1;
  color: ${t=>t.theme.fg.normal};
  margin: 0.5em 0;
`,FC=Pe.span`
  font-size: 0.75em;
  color: ${t=>t.theme.fg.mute};
`,SS=Pe.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`,MS=Pe.li`
  background: ${t=>t.theme.bg.normal};
  padding: 0.3em;
  margin: 0.2em;
  color: ${t=>t.theme.fg.mute};
`,zC=Pe(MS)`
  font-size: 0.75em;
`,BC=Pe(MS)`
  font-size: 0.66em;
`,HC=Pe.div`
  margin: 1em 0;
  color: ${t=>t.theme.fg.mute};
`,GC=Pe.aside`
  flex: 1;
  display: flex;
`,VC=Pe(un)`
  flex: 1;
  display: flex;
  position: relative;

  &::before {
    position: absolute;
    pointer-events: none;
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(
      hsla(0, 0%, 0%, 0) 0,
      hsla(0, 0%, 0%, 0) 40%,
      hsla(0, 0%, 0%, 0.1) 80%,
      hsla(0, 0%, 0%, 0.1) 85%,
      hsla(0, 0%, 0%, 0.05) 100%
    );
  }
`,WC=Pe(un)`
  a {
    color: inherit;
    text-decoration: none;
  }
`,jC=Pe(un)`
  @media (max-width: ${`${uu}px`}) {
    word-break: break-all;
  }
`,XC=Pe.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 256px;
`,$C=Pe.li`
  background: ${t=>t.theme.bg.normal};
  ${t=>t.$unreleased&&rf`
      filter: grayscale(0.1);
    `};

  margin: 1em;
  font-size: ${t=>t.$major?"1.5em":"1.15em"};
  text-align: left;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${`${uu}px`}) {
    flex-direction: column-reverse;
  }

  &:nth-child(2n) {
    flex-direction: row;
    @media (max-width: ${`${uu}px`}) {
      flex-direction: column-reverse;
    }
    text-align: right;
    ${xS} {
      flex-direction: row-reverse;
    }
    ${yS} {
      flex-direction: row-reverse;
    }
    ${SS} {
      flex-direction: row-reverse;
    }
  }
`;function YC({id:t,name:e,url:n,demoUrl:i,description:r,languages:a,libraries:o,major:s,preview:l,unreleased:c}){const f=Vi(p=>p.stars)[t],d=i||n;return $.jsxs($C,{$major:s,$unreleased:c,children:[$.jsxs(kC,{children:[$.jsxs(xS,{children:[$.jsx(WC,{url:d,children:e}),$.jsx(OC,{url:n,stars:f})]}),$.jsxs(SS,{children:[a.map(p=>$.jsx(zC,{children:p},p)),o.map(p=>$.jsx(BC,{children:p},p))]}),$.jsx(HC,{children:r}),c?$.jsx(FC,{children:" Unreleased"}):$.jsx(jC,{url:d,children:RC(d)})]}),$.jsx(GC,{children:$.jsx(VC,{url:d,children:$.jsx(XC,{src:l||UC,alt:`Image preview of ${e}`})})})]})}const qC={projects:"Projects",experiments:"Experiments"},KC=Pe.ul`
  max-width: 1000px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;function av({type:t}){const e=fm(),n=Vi(i=>i.projects).filter(i=>i.type===t).sort((i,r)=>r.major-i.major);return ze.useEffect(()=>{e(DC())},[e]),$.jsxs(Br,{anchor:t,children:[$.jsx(Bo,{children:qC[t]}),$.jsx(KC,{children:n.filter(({hidden:i})=>!i).map(i=>$.jsx(YC,{...i},i.id))})]})}const ZC=Pe.main`
  position: relative;
  z-index: 2;
  height: 100%;
`;function QC(){const t=fm(),e=ze.useCallback(n=>{document.scrollingElement.scrollTo(0,n)},[]);return ze.useEffect(()=>{const n=()=>{t(Hb(window.innerWidth,document.body.clientHeight,window.devicePixelRatio))},i=r=>{const{scrollingElement:a}=r.target,{clientHeight:o,scrollTop:s,scrollHeight:l}=a,c=s/(l-o);t(zb(c,s,l))};return window.addEventListener("resize",n,!1),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("load",i,!1),()=>{window.removeEventListener("resize",n),window.removeEventListener("scroll",i),window.removeEventListener("load",i)}},[t]),$.jsx(Ob,{theme:Fb,children:$.jsxs(ZC,{children:[$.jsx(bC,{onScrollRequested:e}),$.jsx(_C,{}),$.jsx(av,{type:"experiments"}),$.jsx(av,{type:"projects"}),$.jsx(cC,{}),$.jsx(pC,{}),$.jsx(CC,{}),$.jsx(vC,{})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Im="157",JC=0,ov=1,e3=2,ES=1,t3=2,Ni=3,Nr=0,dn=1,Ln=2,Wi=0,la=1,ji=2,sv=3,lv=4,n3=5,Ga=100,i3=101,r3=102,cv=103,uv=104,a3=200,o3=201,s3=202,l3=203,wS=204,bS=205,c3=206,u3=207,f3=208,d3=209,h3=210,p3=0,m3=1,g3=2,tp=3,v3=4,_3=5,y3=6,x3=7,cf=0,S3=1,M3=2,Ar=0,E3=1,w3=2,b3=3,T3=4,TS=5,AS=300,Lo=301,Io=302,np=303,ip=304,uf=306,qs=1e3,si=1001,rp=1002,cn=1003,fv=1004,od=1005,Wn=1006,A3=1007,Ks=1008,Cr=1009,C3=1010,R3=1011,Dm=1012,CS=1013,vr=1014,_r=1015,Or=1016,RS=1017,PS=1018,ca=1020,P3=1021,li=1023,L3=1024,I3=1025,ua=1026,Do=1027,D3=1028,LS=1029,U3=1030,IS=1031,DS=1033,sd=33776,ld=33777,cd=33778,ud=33779,dv=35840,hv=35841,pv=35842,mv=35843,N3=36196,gv=37492,vv=37496,_v=37808,yv=37809,xv=37810,Sv=37811,Mv=37812,Ev=37813,wv=37814,bv=37815,Tv=37816,Av=37817,Cv=37818,Rv=37819,Pv=37820,Lv=37821,fd=36492,Iv=36494,Dv=36495,O3=36283,Uv=36284,Nv=36285,Ov=36286,US=3e3,fa=3001,k3=3200,F3=3201,Um=0,z3=1,jn="",Vt="srgb",pi="srgb-linear",Nm="display-p3",ff="display-p3-linear",fu="linear",ct="srgb",du="rec709",hu="p3",dd=7680,B3=519,H3=512,G3=513,V3=514,W3=515,j3=516,X3=517,$3=518,Y3=519,kv=35044,Fv=35040,zv="300 es",ap=1035,Hi=2e3,pu=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hd=Math.PI/180,op=180/Math.PI;function ll(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[t&255]+Zt[t>>8&255]+Zt[t>>16&255]+Zt[t>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[n&63|128]+Zt[n>>8&255]+"-"+Zt[n>>16&255]+Zt[n>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function q3(t,e){return(t%e+e)%e}function pd(t,e,n){return(1-n)*t+n*e}function Bv(t){return(t&t-1)===0&&t!==0}function sp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,a,o,s,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],v=i[8],y=r[0],g=r[3],h=r[6],_=r[1],m=r[4],x=r[7],S=r[2],b=r[5],E=r[8];return a[0]=o*y+s*_+l*S,a[3]=o*g+s*m+l*b,a[6]=o*h+s*x+l*E,a[1]=c*y+u*_+f*S,a[4]=c*g+u*m+f*b,a[7]=c*h+u*x+f*E,a[2]=d*y+p*_+v*S,a[5]=d*g+p*m+v*b,a[8]=d*h+p*x+v*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,p=c*a-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(s*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*a-s*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*a)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(md.makeScale(e,n)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,n){return this.premultiply(md.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const md=new Ge;function NS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K3(){const t=Zs("canvas");return t.style.display="block",t}const Hv={};function ws(t){t in Hv||(Hv[t]=!0,console.warn(t))}const Gv=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vv=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hl={[pi]:{transfer:fu,primaries:du,toReference:t=>t,fromReference:t=>t},[Vt]:{transfer:ct,primaries:du,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ff]:{transfer:fu,primaries:hu,toReference:t=>t.applyMatrix3(Vv),fromReference:t=>t.applyMatrix3(Gv)},[Nm]:{transfer:ct,primaries:hu,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Vv),fromReference:t=>t.applyMatrix3(Gv).convertLinearToSRGB()}},Z3=new Set([pi,ff]),nt={enabled:!0,_workingColorSpace:pi,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Z3.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Hl[e].toReference,r=Hl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Hl[t].primaries},getTransfer:function(t){return t===jn?fu:Hl[t].transfer}};function mo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function gd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ta;class OS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ta===void 0&&(Ta=Zs("canvas")),Ta.width=e.width,Ta.height=e.height;const i=Ta.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ta}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=mo(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(mo(n[i]/255)*255):n[i]=mo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q3=0;class kS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q3++}),this.uuid=ll(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(vd(r[o].image)):a.push(vd(r[o]))}else a=vd(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function vd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?OS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J3=0;class wn extends Ho{constructor(e=wn.DEFAULT_IMAGE,n=wn.DEFAULT_MAPPING,i=si,r=si,a=Wn,o=Ks,s=li,l=Cr,c=wn.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J3++}),this.uuid=ll(),this.name="",this.source=new kS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===fa?Vt:jn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qs:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case rp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qs:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case rp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?fa:US}set encoding(e){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fa?Vt:jn}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=AS;wn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],v=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,x=(p+1)/2,S=(h+1)/2,b=(u+d)/4,E=(f+y)/4,R=(v+g)/4;return m>x&&m>S?m<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(m),r=b/i,a=E/i):x>S?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=b/r,a=R/r):S<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(S),i=E/a,r=R/a),this.set(i,r,a,n),this}let _=Math.sqrt((g-v)*(g-v)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(f-y)/_,this.z=(d-u)/_,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class eR extends Ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===fa?Vt:jn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new kS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends eR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class FS extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tR extends wn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=a[o+0],p=a[o+1],v=a[o+2],y=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==v){let g=1-s;const h=l*d+c*p+u*v+f*y,_=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const S=Math.sqrt(m),b=Math.atan2(S,h*_);g=Math.sin(g*b)/S,s=Math.sin(s*b)/S}const x=s*_;if(l=l*g+d*x,c=c*g+p*x,u=u*g+v*x,f=f*g+y*x,g===1-s){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],d=a[o+1],p=a[o+2],v=a[o+3];return e[n]=s*v+u*f+l*p-c*d,e[n+1]=l*v+u*d+c*f-s*p,e[n+2]=c*v+u*p+s*d-l*f,e[n+3]=u*v-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),d=l(i/2),p=l(r/2),v=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"YXZ":this._x=d*u*f+c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"ZXY":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f-d*p*v;break;case"ZYX":this._x=d*u*f-c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f+d*p*v;break;case"YZX":this._x=d*u*f+c*p*v,this._y=c*p*f+d*u*v,this._z=c*u*v-d*p*f,this._w=c*u*f-d*p*v;break;case"XZY":this._x=d*u*f-c*p*v,this._y=c*p*f-d*u*v,this._z=c*u*v+d*p*f,this._w=c*u*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,n=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*n+o*r-s*i,u=l*i+s*n-a*r,f=l*r+a*i-o*n,d=-a*n-o*i-s*r;return this.x=c*l+d*-a+u*-s-f*-o,this.y=u*l+d*-o+f*-a-c*-s,this.z=f*l+d*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _d.copy(this).projectOnVector(e),this.sub(_d)}reflect(e){return this.sub(_d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new D,Wv=new Go;class cl{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox),Aa.applyMatrix4(e.matrixWorld),this.union(Aa);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Pi.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Pi)}else r.boundingBox===null&&r.computeBoundingBox(),Aa.copy(r.boundingBox),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ts),Gl.subVectors(this.max,ts),Ca.subVectors(e.a,ts),Ra.subVectors(e.b,ts),Pa.subVectors(e.c,ts),rr.subVectors(Ra,Ca),ar.subVectors(Pa,Ra),Wr.subVectors(Ca,Pa);let n=[0,-rr.z,rr.y,0,-ar.z,ar.y,0,-Wr.z,Wr.y,rr.z,0,-rr.x,ar.z,0,-ar.x,Wr.z,0,-Wr.x,-rr.y,rr.x,0,-ar.y,ar.x,0,-Wr.y,Wr.x,0];return!yd(n,Ca,Ra,Pa,Gl)||(n=[1,0,0,0,1,0,0,0,1],!yd(n,Ca,Ra,Pa,Gl))?!1:(Vl.crossVectors(rr,ar),n=[Vl.x,Vl.y,Vl.z],yd(n,Ca,Ra,Pa,Gl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new D,new D,new D,new D,new D,new D,new D,new D],Pi=new D,Aa=new cl,Ca=new D,Ra=new D,Pa=new D,rr=new D,ar=new D,Wr=new D,ts=new D,Gl=new D,Vl=new D,jr=new D;function yd(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){jr.fromArray(t,a);const s=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),c=n.dot(jr),u=i.dot(jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const nR=new cl,ns=new D,xd=new D;class ul{constructor(e=new D,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nR.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ns.subVectors(e,this.center);const n=ns.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ns.copy(e.center).add(xd)),this.expandByPoint(ns.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new D,Sd=new D,Wl=new D,or=new D,Md=new D,jl=new D,Ed=new D;class Om{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Sd.copy(e).add(n).multiplyScalar(.5),Wl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(Sd);const a=e.distanceTo(n)*.5,o=-this.direction.dot(Wl),s=or.dot(this.direction),l=-or.dot(Wl),c=or.lengthSq(),u=Math.abs(1-o*o);let f,d,p,v;if(u>0)if(f=o*l-s,d=o*s-l,v=a*u,f>=0)if(d>=-v)if(d<=v){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Sd).addScaledVector(Wl,d),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,a){Md.subVectors(n,e),jl.subVectors(i,e),Ed.crossVectors(Md,jl);let o=this.direction.dot(Ed),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=s*this.direction.dot(jl.crossVectors(or,jl));if(l<0)return null;const c=s*this.direction.dot(Md.cross(or));if(c<0||l+c>o)return null;const u=-s*or.dot(Ed);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,a,o,s,l,c,u,f,d,p,v,y,g){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,f,d,p,v,y,g)}set(e,n,i,r,a,o,s,l,c,u,f,d,p,v,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/La.setFromMatrixColumn(e,0).length(),a=1/La.setFromMatrixColumn(e,1).length(),o=1/La.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,v=s*u,y=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=d-y*c,n[9]=-s*l,n[2]=y-d*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,v=c*u,y=c*f;n[0]=d+y*s,n[4]=v*s-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-s,n[2]=p*s-v,n[6]=y+d*s,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,v=c*u,y=c*f;n[0]=d-y*s,n[4]=-o*f,n[8]=v+p*s,n[1]=p+v*s,n[5]=o*u,n[9]=y-d*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,v=s*u,y=s*f;n[0]=l*u,n[4]=v*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-v,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=s*l,y=s*c;n[0]=l*u,n[4]=y-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+v,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,v=s*l,y=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=o*u,n[9]=p*f-v,n[2]=v*f-p,n[6]=s*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iR,e,rR)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),sr.crossVectors(i,Tn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),sr.crossVectors(i,Tn)),sr.normalize(),Xl.crossVectors(Tn,sr),r[0]=sr.x,r[4]=Xl.x,r[8]=Tn.x,r[1]=sr.y,r[5]=Xl.y,r[9]=Tn.y,r[2]=sr.z,r[6]=Xl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],v=i[2],y=i[6],g=i[10],h=i[14],_=i[3],m=i[7],x=i[11],S=i[15],b=r[0],E=r[4],R=r[8],M=r[12],T=r[1],z=r[5],K=r[9],q=r[13],I=r[2],B=r[6],Y=r[10],W=r[14],U=r[3],N=r[7],H=r[11],L=r[15];return a[0]=o*b+s*T+l*I+c*U,a[4]=o*E+s*z+l*B+c*N,a[8]=o*R+s*K+l*Y+c*H,a[12]=o*M+s*q+l*W+c*L,a[1]=u*b+f*T+d*I+p*U,a[5]=u*E+f*z+d*B+p*N,a[9]=u*R+f*K+d*Y+p*H,a[13]=u*M+f*q+d*W+p*L,a[2]=v*b+y*T+g*I+h*U,a[6]=v*E+y*z+g*B+h*N,a[10]=v*R+y*K+g*Y+h*H,a[14]=v*M+y*q+g*W+h*L,a[3]=_*b+m*T+x*I+S*U,a[7]=_*E+m*z+x*B+S*N,a[11]=_*R+m*K+x*Y+S*H,a[15]=_*M+m*q+x*W+S*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],v=e[3],y=e[7],g=e[11],h=e[15];return v*(+a*l*f-r*c*f-a*s*d+i*c*d+r*s*p-i*l*p)+y*(+n*l*p-n*c*d+a*o*d-r*o*p+r*c*u-a*l*u)+g*(+n*c*f-n*s*p-a*o*f+i*o*p+a*s*u-i*c*u)+h*(-r*s*u-n*l*f+n*s*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],v=e[12],y=e[13],g=e[14],h=e[15],_=f*g*c-y*d*c+y*l*p-s*g*p-f*l*h+s*d*h,m=v*d*c-u*g*c-v*l*p+o*g*p+u*l*h-o*d*h,x=u*y*c-v*f*c+v*s*p-o*y*p-u*s*h+o*f*h,S=v*f*l-u*y*l-v*s*d+o*y*d+u*s*g-o*f*g,b=n*_+i*m+r*x+a*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=_*E,e[1]=(y*d*a-f*g*a-y*r*p+i*g*p+f*r*h-i*d*h)*E,e[2]=(s*g*a-y*l*a+y*r*c-i*g*c-s*r*h+i*l*h)*E,e[3]=(f*l*a-s*d*a-f*r*c+i*d*c+s*r*p-i*l*p)*E,e[4]=m*E,e[5]=(u*g*a-v*d*a+v*r*p-n*g*p-u*r*h+n*d*h)*E,e[6]=(v*l*a-o*g*a-v*r*c+n*g*c+o*r*h-n*l*h)*E,e[7]=(o*d*a-u*l*a+u*r*c-n*d*c-o*r*p+n*l*p)*E,e[8]=x*E,e[9]=(v*f*a-u*y*a-v*i*p+n*y*p+u*i*h-n*f*h)*E,e[10]=(o*y*a-v*s*a+v*i*c-n*y*c-o*i*h+n*s*h)*E,e[11]=(u*s*a-o*f*a-u*i*c+n*f*c+o*i*p-n*s*p)*E,e[12]=S*E,e[13]=(u*y*r-v*f*r+v*i*d-n*y*d-u*i*g+n*f*g)*E,e[14]=(v*s*r-o*y*r-v*i*l+n*y*l+o*i*g-n*s*g)*E,e[15]=(o*f*r-u*s*r+u*i*l-n*f*l-o*i*d+n*s*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,f=s+s,d=a*c,p=a*u,v=a*f,y=o*u,g=o*f,h=s*f,_=l*c,m=l*u,x=l*f,S=i.x,b=i.y,E=i.z;return r[0]=(1-(y+h))*S,r[1]=(p+x)*S,r[2]=(v-m)*S,r[3]=0,r[4]=(p-x)*b,r[5]=(1-(d+h))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(v+m)*E,r[9]=(g-_)*E,r[10]=(1-(d+y))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=La.set(r[0],r[1],r[2]).length();const o=La.set(r[4],r[5],r[6]).length(),s=La.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/a,u=1/o,f=1/s;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,n.setFromRotationMatrix(ti),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=Hi){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(s===Hi)p=-(o+a)/(o-a),v=-2*o*a/(o-a);else if(s===pu)p=-o/(o-a),v=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=Hi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-a),d=(n+e)*c,p=(i+r)*u;let v,y;if(s===Hi)v=(o+a)*f,y=-2*f;else if(s===pu)v=a*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const La=new D,ti=new ht,iR=new D(0,0,0),rR=new D(1,1,1),sr=new D,Xl=new D,Tn=new D,jv=new ht,Xv=new Go;class df{constructor(e=0,n=0,i=0,r=df.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return jv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xv.setFromEuler(this),this.setFromQuaternion(Xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}df.DEFAULT_ORDER="XYZ";class zS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aR=0;const $v=new D,Ia=new Go,Ii=new ht,$l=new D,is=new D,oR=new D,sR=new Go,Yv=new D(1,0,0),qv=new D(0,1,0),Kv=new D(0,0,1),lR={type:"added"},cR={type:"removed"};class tn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new D,n=new df,i=new Go,r=new D(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ge}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ia.setFromAxisAngle(e,n),this.quaternion.multiply(Ia),this}rotateOnWorldAxis(e,n){return Ia.setFromAxisAngle(e,n),this.quaternion.premultiply(Ia),this}rotateX(e){return this.rotateOnAxis(Yv,e)}rotateY(e){return this.rotateOnAxis(qv,e)}rotateZ(e){return this.rotateOnAxis(Kv,e)}translateOnAxis(e,n){return $v.copy(e).applyQuaternion(this.quaternion),this.position.add($v.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yv,e)}translateY(e){return this.translateOnAxis(qv,e)}translateZ(e){return this.translateOnAxis(Kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$l.copy(e):$l.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(is,$l,this.up):Ii.lookAt($l,is,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Ia.setFromRotationMatrix(Ii),this.quaternion.premultiply(Ia.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,oR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,sR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new D(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new D,Di=new D,wd=new D,Ui=new D,Da=new D,Ua=new D,Zv=new D,bd=new D,Td=new D,Ad=new D;let Yl=!1;class oi{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){ni.subVectors(r,n),Di.subVectors(i,n),wd.subVectors(e,n);const o=ni.dot(ni),s=ni.dot(Di),l=ni.dot(wd),c=Di.dot(Di),u=Di.dot(wd),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const d=1/f,p=(c*l-s*u)*d,v=(o*u-s*l)*d;return a.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui),Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getUV(e,n,i,r,a,o,s,l){return Yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yl=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Ui),l.setScalar(0),l.addScaledVector(a,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(s,Ui.z),l}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Di.subVectors(e,n),ni.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ni.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Yl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yl=!0),oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;Da.subVectors(r,i),Ua.subVectors(a,i),bd.subVectors(e,i);const l=Da.dot(bd),c=Ua.dot(bd);if(l<=0&&c<=0)return n.copy(i);Td.subVectors(e,r);const u=Da.dot(Td),f=Ua.dot(Td);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Da,o);Ad.subVectors(e,a);const p=Da.dot(Ad),v=Ua.dot(Ad);if(v>=0&&p<=v)return n.copy(a);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return s=c/(c-v),n.copy(i).addScaledVector(Ua,s);const g=u*v-p*f;if(g<=0&&f-u>=0&&p-v>=0)return Zv.subVectors(a,r),s=(f-u)/(f-u+(p-v)),n.copy(r).addScaledVector(Zv,s);const h=1/(g+y+d);return o=y*h,s=d*h,n.copy(i).addScaledVector(Da,o).addScaledVector(Ua,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let uR=0;class Hr extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uR++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=la,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wS,this.blendDst=bS,this.blendEquation=Ga,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=tp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B3,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dd,this.stencilZFail=dd,this.stencilZPass=dd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==Nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const BS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Cd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ne{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=q3(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=Cd(o,a,e+1/3),this.g=Cd(o,a,e),this.b=Cd(o,a,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=Vt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vt){const i=BS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}copyLinearToSRGB(e){return this.r=gd(e.r),this.g=gd(e.g),this.b=gd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return nt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Wt(Qt.r*255,0,255))*65536+Math.round(Wt(Qt.g*255,0,255))*256+Math.round(Wt(Qt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,a=Qt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Vt){nt.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Vt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(ql);const i=pd(lr.h,ql.h,n),r=pd(lr.s,ql.s,n),a=pd(lr.l,ql.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ne;Ne.NAMES=BS;class HS extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new D,Kl=new qe;class Yn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=kv,this.updateRange={offset:0,count:-1},this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Kl.fromBufferAttribute(this,n),Kl.applyMatrix3(e),this.setXY(n,Kl.x,Kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=es(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=es(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=es(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),a=gn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class GS extends Yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class VS extends Yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Un extends Yn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let fR=0;const Hn=new ht,Rd=new tn,Na=new D,An=new cl,rs=new cl,Ot=new D;class Jn extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NS(e)?VS:GS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,i){return Hn.makeTranslation(e,n,i),this.applyMatrix4(Hn),this}scale(e,n,i){return Hn.makeScale(e,n,i),this.applyMatrix4(Hn),this}lookAt(e){return Rd.lookAt(e),Rd.updateMatrix(),this.applyMatrix4(Rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Un(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];An.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];rs.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(An.min,rs.min),An.expandByPoint(Ot),Ot.addVectors(An.max,rs.max),An.expandByPoint(Ot)):(An.expandByPoint(rs.min),An.expandByPoint(rs.max))}An.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Ot.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Ot.fromBufferAttribute(s,c),l&&(Na.fromBufferAttribute(e,c),Ot.add(Na)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<s;T++)c[T]=new D,u[T]=new D;const f=new D,d=new D,p=new D,v=new qe,y=new qe,g=new qe,h=new D,_=new D;function m(T,z,K){f.fromArray(r,T*3),d.fromArray(r,z*3),p.fromArray(r,K*3),v.fromArray(o,T*2),y.fromArray(o,z*2),g.fromArray(o,K*2),d.sub(f),p.sub(f),y.sub(v),g.sub(v);const q=1/(y.x*g.y-g.x*y.y);isFinite(q)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(q),_.copy(p).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(q),c[T].add(h),c[z].add(h),c[K].add(h),u[T].add(_),u[z].add(_),u[K].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,z=x.length;T<z;++T){const K=x[T],q=K.start,I=K.count;for(let B=q,Y=q+I;B<Y;B+=3)m(i[B+0],i[B+1],i[B+2])}const S=new D,b=new D,E=new D,R=new D;function M(T){E.fromArray(a,T*3),R.copy(E);const z=c[T];S.copy(z),S.sub(E.multiplyScalar(E.dot(z))).normalize(),b.crossVectors(R,z);const q=b.dot(u[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=q}for(let T=0,z=x.length;T<z;++T){const K=x[T],q=K.start,I=K.count;for(let B=q,Y=q+I;B<Y;B+=3)M(i[B+0]),M(i[B+1]),M(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new D,a=new D,o=new D,s=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),s.add(u),l.add(u),c.add(u),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){s.isInterleavedBufferAttribute?p=l[y]*s.data.stride+s.offset:p=l[y]*u;for(let h=0;h<u;h++)d[v++]=c[p++]}return new Yn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qv=new ht,Xr=new Om,Zl=new ul,Jv=new D,Oa=new D,ka=new D,Fa=new D,Pd=new D,Ql=new D,Jl=new qe,ec=new qe,tc=new qe,e_=new D,t_=new D,n_=new D,nc=new D,ic=new D;class xn extends tn{constructor(e=new Jn,n=new HS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Ql.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(Pd.fromBufferAttribute(f,e),o?Ql.addScaledVector(Pd,u):Ql.addScaledVector(Pd.sub(n),u))}n.add(Ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(a),Xr.copy(e.ray).recast(e.near),!(Zl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Zl,Jv)===null||Xr.origin.distanceToSquared(Jv)>(e.far-e.near)**2))&&(Qv.copy(a).invert(),Xr.copy(e.ray).applyMatrix4(Qv),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const g=d[v],h=o[g.materialIndex],_=Math.max(g.start,p.start),m=Math.min(s.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,S=m;x<S;x+=3){const b=s.getX(x),E=s.getX(x+1),R=s.getX(x+2);r=rc(this,h,e,i,c,u,f,b,E,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(s.count,p.start+p.count);for(let g=v,h=y;g<h;g+=3){const _=s.getX(g),m=s.getX(g+1),x=s.getX(g+2);r=rc(this,o,e,i,c,u,f,_,m,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const g=d[v],h=o[g.materialIndex],_=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=_,S=m;x<S;x+=3){const b=x,E=x+1,R=x+2;r=rc(this,h,e,i,c,u,f,b,E,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,h=y;g<h;g+=3){const _=g,m=g+1,x=g+2;r=rc(this,o,e,i,c,u,f,_,m,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function dR(t,e,n,i,r,a,o,s){let l;if(e.side===dn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Nr,s),l===null)return null;ic.copy(s),ic.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ic);return c<n.near||c>n.far?null:{distance:c,point:ic.clone(),object:t}}function rc(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,Oa),t.getVertexPosition(l,ka),t.getVertexPosition(c,Fa);const u=dR(t,e,n,i,Oa,ka,Fa,nc);if(u){r&&(Jl.fromBufferAttribute(r,s),ec.fromBufferAttribute(r,l),tc.fromBufferAttribute(r,c),u.uv=oi.getInterpolation(nc,Oa,ka,Fa,Jl,ec,tc,new qe)),a&&(Jl.fromBufferAttribute(a,s),ec.fromBufferAttribute(a,l),tc.fromBufferAttribute(a,c),u.uv1=oi.getInterpolation(nc,Oa,ka,Fa,Jl,ec,tc,new qe),u.uv2=u.uv1),o&&(e_.fromBufferAttribute(o,s),t_.fromBufferAttribute(o,l),n_.fromBufferAttribute(o,c),u.normal=oi.getInterpolation(nc,Oa,ka,Fa,e_,t_,n_,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new D,materialIndex:0};oi.getNormal(Oa,ka,Fa,f.normal),u.face=f}return u}class Vo extends Jn{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,a,0),v("z","y","x",1,-1,i,n,-e,o,a,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,a,4),v("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(u,3)),this.setAttribute("uv",new Un(f,2));function v(y,g,h,_,m,x,S,b,E,R,M){const T=x/E,z=S/R,K=x/2,q=S/2,I=b/2,B=E+1,Y=R+1;let W=0,U=0;const N=new D;for(let H=0;H<Y;H++){const L=H*z-q;for(let V=0;V<B;V++){const ae=V*T-K;N[y]=ae*_,N[g]=L*m,N[h]=I,c.push(N.x,N.y,N.z),N[y]=0,N[g]=0,N[h]=b>0?1:-1,u.push(N.x,N.y,N.z),f.push(V/E),f.push(1-H/R),W+=1}}for(let H=0;H<R;H++)for(let L=0;L<E;L++){const V=d+L+B*H,ae=d+L+B*(H+1),re=d+(L+1)+B*(H+1),ce=d+(L+1)+B*H;l.push(V,ae,ce),l.push(ae,re,ce),U+=6}s.addGroup(p,U,M),p+=U,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Uo(t[n]);for(const r in i)e[r]=i[r]}return e}function hR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function WS(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const fl={clone:Uo,merge:sn};var pR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pR,this.fragmentShader=mR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=hR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jS extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class _n extends jS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=op*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return op*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(hd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const za=-90,Ba=1;class gR extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(za,Ba,e,n);r.layers=this.layers,this.add(r);const a=new _n(za,Ba,e,n);a.layers=this.layers,this.add(a);const o=new _n(za,Ba,e,n);o.layers=this.layers,this.add(o);const s=new _n(za,Ba,e,n);s.layers=this.layers,this.add(s);const l=new _n(za,Ba,e,n);l.layers=this.layers,this.add(l);const c=new _n(za,Ba,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class XS extends wn{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Lo,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vR extends Ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fa?Vt:jn),this.texture=new XS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Vo(5,5,5),a=new hn({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:Wi});a.uniforms.tEquirect.value=n;const o=new xn(r,a),s=n.minFilter;return n.minFilter===Ks&&(n.minFilter=Wn),new gR(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const Ld=new D,_R=new D,yR=new Ge;class xi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ld.subVectors(i,n).cross(_R.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ld),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||yR.getNormalMatrix(e),r=this.coplanarPoint(Ld).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new ul,ac=new D;class $S{constructor(e=new xi,n=new xi,i=new xi,r=new xi,a=new xi,o=new xi){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],v=r[9],y=r[10],g=r[11],h=r[12],_=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-a,d-c,g-p,x-h).normalize(),i[1].setComponents(l+a,d+c,g+p,x+h).normalize(),i[2].setComponents(l+o,d+u,g+v,x+_).normalize(),i[3].setComponents(l-o,d-u,g-v,x-_).normalize(),i[4].setComponents(l-s,d-f,g-y,x-m).normalize(),n===Hi)i[5].setComponents(l+s,d+f,g+y,x+m).normalize();else if(n===pu)i[5].setComponents(s,f,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ac.x=r.normal.x>0?e.max.x:e.min.x,ac.y=r.normal.y>0?e.max.y:e.min.y,ac.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function YS(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function xR(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class hf extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,d=n/l,p=[],v=[],y=[],g=[];for(let h=0;h<u;h++){const _=h*d-o;for(let m=0;m<c;m++){const x=m*f-a;v.push(x,-_,0),y.push(0,0,1),g.push(m/s),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<s;_++){const m=_+c*h,x=_+c*(h+1),S=_+1+c*(h+1),b=_+1+c*h;p.push(m,x,b),p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Un(v,3)),this.setAttribute("normal",new Un(y,3)),this.setAttribute("uv",new Un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.width,e.height,e.widthSegments,e.heightSegments)}}var SR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ER=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,NR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WR=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$R=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qR="gl_FragColor = linearToOutputTexel( gl_FragColor );",KR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ZR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,_P=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,RP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,UP=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,NP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,OP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$P=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,oL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _L=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ML=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EL=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wL=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bL=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,TL=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,AL=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,CL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PL=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LL=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IL=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$L=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YL=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:SR,alphahash_pars_fragment:MR,alphamap_fragment:ER,alphamap_pars_fragment:wR,alphatest_fragment:bR,alphatest_pars_fragment:TR,aomap_fragment:AR,aomap_pars_fragment:CR,begin_vertex:RR,beginnormal_vertex:PR,bsdfs:LR,iridescence_fragment:IR,bumpmap_pars_fragment:DR,clipping_planes_fragment:UR,clipping_planes_pars_fragment:NR,clipping_planes_pars_vertex:OR,clipping_planes_vertex:kR,color_fragment:FR,color_pars_fragment:zR,color_pars_vertex:BR,color_vertex:HR,common:GR,cube_uv_reflection_fragment:VR,defaultnormal_vertex:WR,displacementmap_pars_vertex:jR,displacementmap_vertex:XR,emissivemap_fragment:$R,emissivemap_pars_fragment:YR,colorspace_fragment:qR,colorspace_pars_fragment:KR,envmap_fragment:ZR,envmap_common_pars_fragment:QR,envmap_pars_fragment:JR,envmap_pars_vertex:eP,envmap_physical_pars_fragment:dP,envmap_vertex:tP,fog_vertex:nP,fog_pars_vertex:iP,fog_fragment:rP,fog_pars_fragment:aP,gradientmap_pars_fragment:oP,lightmap_fragment:sP,lightmap_pars_fragment:lP,lights_lambert_fragment:cP,lights_lambert_pars_fragment:uP,lights_pars_begin:fP,lights_toon_fragment:hP,lights_toon_pars_fragment:pP,lights_phong_fragment:mP,lights_phong_pars_fragment:gP,lights_physical_fragment:vP,lights_physical_pars_fragment:_P,lights_fragment_begin:yP,lights_fragment_maps:xP,lights_fragment_end:SP,logdepthbuf_fragment:MP,logdepthbuf_pars_fragment:EP,logdepthbuf_pars_vertex:wP,logdepthbuf_vertex:bP,map_fragment:TP,map_pars_fragment:AP,map_particle_fragment:CP,map_particle_pars_fragment:RP,metalnessmap_fragment:PP,metalnessmap_pars_fragment:LP,morphcolor_vertex:IP,morphnormal_vertex:DP,morphtarget_pars_vertex:UP,morphtarget_vertex:NP,normal_fragment_begin:OP,normal_fragment_maps:kP,normal_pars_fragment:FP,normal_pars_vertex:zP,normal_vertex:BP,normalmap_pars_fragment:HP,clearcoat_normal_fragment_begin:GP,clearcoat_normal_fragment_maps:VP,clearcoat_pars_fragment:WP,iridescence_pars_fragment:jP,opaque_fragment:XP,packing:$P,premultiplied_alpha_fragment:YP,project_vertex:qP,dithering_fragment:KP,dithering_pars_fragment:ZP,roughnessmap_fragment:QP,roughnessmap_pars_fragment:JP,shadowmap_pars_fragment:eL,shadowmap_pars_vertex:tL,shadowmap_vertex:nL,shadowmask_pars_fragment:iL,skinbase_vertex:rL,skinning_pars_vertex:aL,skinning_vertex:oL,skinnormal_vertex:sL,specularmap_fragment:lL,specularmap_pars_fragment:cL,tonemapping_fragment:uL,tonemapping_pars_fragment:fL,transmission_fragment:dL,transmission_pars_fragment:hL,uv_pars_fragment:pL,uv_pars_vertex:mL,uv_vertex:gL,worldpos_vertex:vL,background_vert:_L,background_frag:yL,backgroundCube_vert:xL,backgroundCube_frag:SL,cube_vert:ML,cube_frag:EL,depth_vert:wL,depth_frag:bL,distanceRGBA_vert:TL,distanceRGBA_frag:AL,equirect_vert:CL,equirect_frag:RL,linedashed_vert:PL,linedashed_frag:LL,meshbasic_vert:IL,meshbasic_frag:DL,meshlambert_vert:UL,meshlambert_frag:NL,meshmatcap_vert:OL,meshmatcap_frag:kL,meshnormal_vert:FL,meshnormal_frag:zL,meshphong_vert:BL,meshphong_frag:HL,meshphysical_vert:GL,meshphysical_frag:VL,meshtoon_vert:WL,meshtoon_frag:jL,points_vert:XL,points_frag:$L,shadow_vert:YL,shadow_frag:qL,sprite_vert:KL,sprite_frag:ZL},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Si={basic:{uniforms:sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:sn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:sn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:sn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:sn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:sn([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:sn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:sn([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:sn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:sn([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:sn([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:sn([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Si.physical={uniforms:sn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const oc={r:0,b:0,g:0};function QL(t,e,n,i,r,a,o){const s=new Ne(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function v(g,h){let _=!1,m=h.isScene===!0?h.background:null;m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?y(s,l):m&&m.isColor&&(y(m,1),_=!0);const x=t.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===uf)?(u===void 0&&(u=new xn(new Vo(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:Uo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=nt.getTransfer(m.colorSpace)!==ct,(f!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new xn(new hf(2,2),new hn({name:"BackgroundMaterial",uniforms:Uo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=nt.getTransfer(m.colorSpace)!==ct,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,h){g.getRGB(oc,WS(t)),i.buffers.color.setClear(oc.r,oc.g,oc.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(g,h=1){s.set(g),l=h,y(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(s,l)},render:v}}function JL(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=g(null);let c=l,u=!1;function f(I,B,Y,W,U){let N=!1;if(o){const H=y(W,Y,B);c!==H&&(c=H,p(c.object)),N=h(I,W,Y,U),N&&_(I,W,Y,U)}else{const H=B.wireframe===!0;(c.geometry!==W.id||c.program!==Y.id||c.wireframe!==H)&&(c.geometry=W.id,c.program=Y.id,c.wireframe=H,N=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(N||u)&&(u=!1,R(I,B,Y,W),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(I){return i.isWebGL2?t.bindVertexArray(I):a.bindVertexArrayOES(I)}function v(I){return i.isWebGL2?t.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function y(I,B,Y){const W=Y.wireframe===!0;let U=s[I.id];U===void 0&&(U={},s[I.id]=U);let N=U[B.id];N===void 0&&(N={},U[B.id]=N);let H=N[W];return H===void 0&&(H=g(d()),N[W]=H),H}function g(I){const B=[],Y=[],W=[];for(let U=0;U<r;U++)B[U]=0,Y[U]=0,W[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:W,object:I,attributes:{},index:null}}function h(I,B,Y,W){const U=c.attributes,N=B.attributes;let H=0;const L=Y.getAttributes();for(const V in L)if(L[V].location>=0){const re=U[V];let ce=N[V];if(ce===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;H++}return c.attributesNum!==H||c.index!==W}function _(I,B,Y,W){const U={},N=B.attributes;let H=0;const L=Y.getAttributes();for(const V in L)if(L[V].location>=0){let re=N[V];re===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),U[V]=ce,H++}c.attributes=U,c.attributesNum=H,c.index=W}function m(){const I=c.newAttributes;for(let B=0,Y=I.length;B<Y;B++)I[B]=0}function x(I){S(I,0)}function S(I,B){const Y=c.newAttributes,W=c.enabledAttributes,U=c.attributeDivisors;Y[I]=1,W[I]===0&&(t.enableVertexAttribArray(I),W[I]=1),U[I]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,B),U[I]=B)}function b(){const I=c.newAttributes,B=c.enabledAttributes;for(let Y=0,W=B.length;Y<W;Y++)B[Y]!==I[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function E(I,B,Y,W,U,N,H){H===!0?t.vertexAttribIPointer(I,B,Y,U,N):t.vertexAttribPointer(I,B,Y,W,U,N)}function R(I,B,Y,W){if(i.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const U=W.attributes,N=Y.getAttributes(),H=B.defaultAttributeValues;for(const L in N){const V=N[L];if(V.location>=0){let ae=U[L];if(ae===void 0&&(L==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),L==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),ae!==void 0){const re=ae.normalized,ce=ae.itemSize,ge=n.get(ae);if(ge===void 0)continue;const _e=ge.buffer,Se=ge.type,$e=ge.bytesPerElement,mt=i.isWebGL2===!0&&(Se===t.INT||Se===t.UNSIGNED_INT||ae.gpuType===CS);if(ae.isInterleavedBufferAttribute){const Be=ae.data,k=Be.stride,$t=ae.offset;if(Be.isInstancedInterleavedBuffer){for(let we=0;we<V.locationSize;we++)S(V.location+we,Be.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let we=0;we<V.locationSize;we++)x(V.location+we);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let we=0;we<V.locationSize;we++)E(V.location+we,ce/V.locationSize,Se,re,k*$e,($t+ce/V.locationSize*we)*$e,mt)}else{if(ae.isInstancedBufferAttribute){for(let Be=0;Be<V.locationSize;Be++)S(V.location+Be,ae.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Be=0;Be<V.locationSize;Be++)x(V.location+Be);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Be=0;Be<V.locationSize;Be++)E(V.location+Be,ce/V.locationSize,Se,re,ce*$e,ce/V.locationSize*Be*$e,mt)}}else if(H!==void 0){const re=H[L];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(V.location,re);break;case 3:t.vertexAttrib3fv(V.location,re);break;case 4:t.vertexAttrib4fv(V.location,re);break;default:t.vertexAttrib1fv(V.location,re)}}}}b()}function M(){K();for(const I in s){const B=s[I];for(const Y in B){const W=B[Y];for(const U in W)v(W[U].object),delete W[U];delete B[Y]}delete s[I]}}function T(I){if(s[I.id]===void 0)return;const B=s[I.id];for(const Y in B){const W=B[Y];for(const U in W)v(W[U].object),delete W[U];delete B[Y]}delete s[I.id]}function z(I){for(const B in s){const Y=s[B];if(Y[I.id]===void 0)continue;const W=Y[I.id];for(const U in W)v(W[U].object),delete W[U];delete Y[I.id]}}function K(){q(),u=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:z,initAttributes:m,enableAttribute:x,disableUnusedAttributes:b}}function eI(t,e,n,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){t.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,c,u,f),n.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function tI(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,x=o||e.has("OES_texture_float"),S=m&&x,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:y,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:m,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:b}}function nI(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new xi,s=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||a&&!g)a?u(null):c();else{const _=a?0:i,m=_*4;let x=h.clippingState||null;l.value=x,x=u(v,d,m,p);for(let S=0;S!==m;++S)x[S]=n[S];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,v){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const h=p+y*4,_=d.matrixWorldInverse;s.getNormalMatrix(_),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,x=p;m!==y;++m,x+=4)o.copy(f[m]).applyMatrix4(_,s),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function iI(t){let e=new WeakMap;function n(o,s){return s===np?o.mapping=Lo:s===ip&&(o.mapping=Io),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===np||s===ip)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vR(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class qS extends jS{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ao=4,i_=[.125,.215,.35,.446,.526,.582],Zr=20,Id=new qS,r_=new Ne;let Dd=null;const Kr=(1+Math.sqrt(5))/2,Ha=1/Kr,a_=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Kr,Ha),new D(0,Kr,-Ha),new D(Ha,0,Kr),new D(-Ha,0,Kr),new D(Kr,Ha,0),new D(-Kr,Ha,0)];class o_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Dd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd),e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Lo||e.mapping===Io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Or,format:li,colorSpace:pi,depthBuffer:!1},r=s_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=s_(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rI(a)),this._blurMaterial=aI(a,e,n)}return r}_compileMaterial(e){const n=new xn(this._lodPlanes[0],e);this._renderer.compile(n,Id)}_sceneToCubeUV(e,n,i,r){const s=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(r_),u.toneMapping=Ar,u.autoClear=!1;const p=new HS({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),v=new xn(new Vo,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(r_),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):_===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const m=this._cubeSize;sc(r,_*m,h>2?m:0,m,m),u.setRenderTarget(r),y&&u.render(v,s),u.render(e,s)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Lo||e.mapping===Io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;sc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Id)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=a_[(r-1)%a_.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),y=a/v,g=isFinite(a)?1+Math.floor(u*y):Zr;g>Zr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zr}`);const h=[];let _=0;for(let E=0;E<Zr;++E){const R=E/y,M=Math.exp(-R*R/2);h.push(M),E===0?_+=M:E<g&&(_+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/_;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:m}=this;d.dTheta.value=v,d.mipInt.value=m-i;const x=this._sizeLods[r],S=3*x*(r>m-ao?r-m+ao:0),b=4*(this._cubeSize-x);sc(n,S,b,3*x,2*x),l.setRenderTarget(n),l.render(f,Id)}}function rI(t){const e=[],n=[],i=[];let r=t;const a=t-ao+1+i_.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-ao?l=i_[o-t+ao-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,y=3,g=2,h=1,_=new Float32Array(y*v*p),m=new Float32Array(g*v*p),x=new Float32Array(h*v*p);for(let b=0;b<p;b++){const E=b%3*2/3-1,R=b>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];_.set(M,y*v*b),m.set(d,g*v*b);const T=[b,b,b,b,b,b];x.set(T,h*v*b)}const S=new Jn;S.setAttribute("position",new Yn(_,y)),S.setAttribute("uv",new Yn(m,g)),S.setAttribute("faceIndex",new Yn(x,h)),e.push(S),r>ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function s_(t,e,n){const i=new Ai(t,e,n);return i.texture.mapping=uf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aI(t,e,n){const i=new Float32Array(Zr),r=new D(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:km(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function l_(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:km(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function c_(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:km(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function km(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oI(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===np||l===ip,u=l===Lo||l===Io;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new o_(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new o_(t));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function sI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function lI(t,e,n,i){const r={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const y=d.morphAttributes[v];for(let g=0,h=y.length;g<h;g++)e.remove(y[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const y=p[v];for(let g=0,h=y.length;g<h;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let m=0,x=_.length;m<x;m+=3){const S=_[m+0],b=_[m+1],E=_[m+2];d.push(S,b,b,E,E,S)}}else if(v!==void 0){const _=v.array;y=v.version;for(let m=0,x=_.length/3-1;m<x;m+=3){const S=m+0,b=m+1,E=m+2;d.push(S,b,b,E,E,S)}}else return;const g=new(NS(d)?VS:GS)(d,1);g.version=y;const h=a.get(f);h&&e.remove(h),a.set(f,g)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function cI(t,e,n,i){const r=i.isWebGL2;let a;function o(d){a=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(a,p,s,d*l),n.update(p,a,1)}function f(d,p,v){if(v===0)return;let y,g;if(r)y=t,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](a,p,s,d*l,v),n.update(p,a,v)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function uI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function fI(t,e){return t[0]-e[0]}function dI(t,e){return Math.abs(e[1])-Math.abs(t[1])}function hI(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new Et,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let y=a.get(u);if(y===void 0||y.count!==v){let I=function(){K.dispose(),a.delete(u),u.removeEventListener("dispose",I)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let R=0;_===!0&&(R=1),m===!0&&(R=2),x===!0&&(R=3);let M=u.attributes.position.count*R,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const z=new Float32Array(M*T*4*v),K=new FS(z,M,T,v);K.type=_r,K.needsUpdate=!0;const q=R*4;for(let B=0;B<v;B++){const Y=S[B],W=b[B],U=E[B],N=M*T*4*B;for(let H=0;H<Y.count;H++){const L=H*q;_===!0&&(o.fromBufferAttribute(Y,H),z[N+L+0]=o.x,z[N+L+1]=o.y,z[N+L+2]=o.z,z[N+L+3]=0),m===!0&&(o.fromBufferAttribute(W,H),z[N+L+4]=o.x,z[N+L+5]=o.y,z[N+L+6]=o.z,z[N+L+7]=0),x===!0&&(o.fromBufferAttribute(U,H),z[N+L+8]=o.x,z[N+L+9]=o.y,z[N+L+10]=o.z,z[N+L+11]=U.itemSize===4?o.w:1)}}y={count:v,texture:K,size:new qe(M,T)},a.set(u,y),u.addEventListener("dispose",I)}let g=0;for(let _=0;_<d.length;_++)g+=d[_];const h=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{const p=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==p){v=[];for(let m=0;m<p;m++)v[m]=[m,0];i[u.id]=v}for(let m=0;m<p;m++){const x=v[m];x[0]=m,x[1]=d[m]}v.sort(dI);for(let m=0;m<8;m++)m<p&&v[m][1]?(s[m][0]=v[m][0],s[m][1]=v[m][1]):(s[m][0]=Number.MAX_SAFE_INTEGER,s[m][1]=0);s.sort(fI);const y=u.morphAttributes.position,g=u.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const x=s[m],S=x[0],b=x[1];S!==Number.MAX_SAFE_INTEGER&&b?(y&&u.getAttribute("morphTarget"+m)!==y[S]&&u.setAttribute("morphTarget"+m,y[S]),g&&u.getAttribute("morphNormal"+m)!==g[S]&&u.setAttribute("morphNormal"+m,g[S]),r[m]=b,h+=b):(y&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),g&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}const _=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function pI(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const KS=new wn,ZS=new FS,QS=new tR,JS=new XS,u_=[],f_=[],d_=new Float32Array(16),h_=new Float32Array(9),p_=new Float32Array(4);function Wo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=u_[r];if(a===void 0&&(a=new Float32Array(r),u_[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pf(t,e){let n=f_[e];n===void 0&&(n=new Int32Array(e),f_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function gI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function vI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function _I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function yI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;p_.set(i),t.uniformMatrix2fv(this.addr,!1,p_),Nt(n,i)}}function xI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;h_.set(i),t.uniformMatrix3fv(this.addr,!1,h_),Nt(n,i)}}function SI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ut(n,i))return;d_.set(i),t.uniformMatrix4fv(this.addr,!1,d_),Nt(n,i)}}function MI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function EI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function wI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function bI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function TI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function AI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function CI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function RI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function PI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||KS,r)}function LI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||QS,r)}function II(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||JS,r)}function DI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ZS,r)}function UI(t){switch(t){case 5126:return mI;case 35664:return gI;case 35665:return vI;case 35666:return _I;case 35674:return yI;case 35675:return xI;case 35676:return SI;case 5124:case 35670:return MI;case 35667:case 35671:return EI;case 35668:case 35672:return wI;case 35669:case 35673:return bI;case 5125:return TI;case 36294:return AI;case 36295:return CI;case 36296:return RI;case 35678:case 36198:case 36298:case 36306:case 35682:return PI;case 35679:case 36299:case 36307:return LI;case 35680:case 36300:case 36308:case 36293:return II;case 36289:case 36303:case 36311:case 36292:return DI}}function NI(t,e){t.uniform1fv(this.addr,e)}function OI(t,e){const n=Wo(e,this.size,2);t.uniform2fv(this.addr,n)}function kI(t,e){const n=Wo(e,this.size,3);t.uniform3fv(this.addr,n)}function FI(t,e){const n=Wo(e,this.size,4);t.uniform4fv(this.addr,n)}function zI(t,e){const n=Wo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function BI(t,e){const n=Wo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function HI(t,e){const n=Wo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function GI(t,e){t.uniform1iv(this.addr,e)}function VI(t,e){t.uniform2iv(this.addr,e)}function WI(t,e){t.uniform3iv(this.addr,e)}function jI(t,e){t.uniform4iv(this.addr,e)}function XI(t,e){t.uniform1uiv(this.addr,e)}function $I(t,e){t.uniform2uiv(this.addr,e)}function YI(t,e){t.uniform3uiv(this.addr,e)}function qI(t,e){t.uniform4uiv(this.addr,e)}function KI(t,e,n){const i=this.cache,r=e.length,a=pf(n,r);Ut(i,a)||(t.uniform1iv(this.addr,a),Nt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||KS,a[o])}function ZI(t,e,n){const i=this.cache,r=e.length,a=pf(n,r);Ut(i,a)||(t.uniform1iv(this.addr,a),Nt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||QS,a[o])}function QI(t,e,n){const i=this.cache,r=e.length,a=pf(n,r);Ut(i,a)||(t.uniform1iv(this.addr,a),Nt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||JS,a[o])}function JI(t,e,n){const i=this.cache,r=e.length,a=pf(n,r);Ut(i,a)||(t.uniform1iv(this.addr,a),Nt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||ZS,a[o])}function eD(t){switch(t){case 5126:return NI;case 35664:return OI;case 35665:return kI;case 35666:return FI;case 35674:return zI;case 35675:return BI;case 35676:return HI;case 5124:case 35670:return GI;case 35667:case 35671:return VI;case 35668:case 35672:return WI;case 35669:case 35673:return jI;case 5125:return XI;case 36294:return $I;case 36295:return YI;case 36296:return qI;case 35678:case 36198:case 36298:case 36306:case 35682:return KI;case 35679:case 36299:case 36307:return ZI;case 35680:case 36300:case 36308:case 36293:return QI;case 36289:case 36303:case 36311:case 36292:return JI}}class tD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=UI(n.type)}}class nD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=eD(n.type)}}class iD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function m_(t,e){t.seq.push(e),t.map[e.id]=e}function rD(t,e,n){const i=t.name,r=i.length;for(Ud.lastIndex=0;;){const a=Ud.exec(i),o=Ud.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){m_(n,c===void 0?new tD(s,t,e):new nD(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new iD(s),m_(n,f)),n=f}}}class Lc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);rD(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function g_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let aD=0;function oD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function sD(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===hu&&n===du?i="LinearDisplayP3ToLinearSRGB":e===du&&n===hu&&(i="LinearSRGBToLinearDisplayP3"),t){case pi:case ff:return[i,"LinearTransferOETF"];case Vt:case Nm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function v_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+oD(t.getShaderSource(e),o)}else return r}function lD(t,e){const n=sD(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cD(t,e){let n;switch(e){case E3:n="Linear";break;case w3:n="Reinhard";break;case b3:n="OptimizedCineon";break;case T3:n="ACESFilmic";break;case TS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function uD(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fs).join(`
`)}function fD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function fs(t){return t!==""}function __(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hD=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(t){return t.replace(hD,mD)}const pD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mD(t,e){let n=De[e];if(n===void 0){const i=pD.get(e);if(i!==void 0)n=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lp(n)}const gD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(t){return t.replace(gD,vD)}function vD(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function S_(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _D(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===t3?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function yD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Lo:case Io:e="ENVMAP_TYPE_CUBE";break;case uf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Io:e="ENVMAP_MODE_REFRACTION";break}return e}function SD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cf:e="ENVMAP_BLENDING_MULTIPLY";break;case S3:e="ENVMAP_BLENDING_MIX";break;case M3:e="ENVMAP_BLENDING_ADD";break}return e}function MD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ED(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=_D(n),c=yD(n),u=xD(n),f=SD(n),d=MD(n),p=n.isWebGL2?"":uD(n),v=fD(a),y=r.createProgram();let g,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fs).join(`
`),g.length>0&&(g+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(fs).join(`
`),h.length>0&&(h+=`
`)):(g=[S_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),h=[p,S_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ar?"#define TONE_MAPPING":"",n.toneMapping!==Ar?De.tonemapping_pars_fragment:"",n.toneMapping!==Ar?cD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,lD("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fs).join(`
`)),o=lp(o),o=__(o,n),o=y_(o,n),s=lp(s),s=__(s,n),s=y_(s,n),o=x_(o),s=x_(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===zv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===zv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=_+g+o,x=_+h+s,S=g_(r,r.VERTEX_SHADER,m),b=g_(r,r.FRAGMENT_SHADER,x);if(r.attachShader(y,S),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(S).trim(),z=r.getShaderInfoLog(b).trim();let K=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,S,b);else{const I=v_(r,S,"vertex"),B=v_(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+I+`
`+B)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||z==="")&&(q=!1);q&&(this.diagnostics={runnable:K,programLog:M,vertexShader:{log:T,prefix:g},fragmentShader:{log:z,prefix:h}})}r.deleteShader(S),r.deleteShader(b);let E;this.getUniforms=function(){return E===void 0&&(E=new Lc(r,y)),E};let R;return this.getAttributes=function(){return R===void 0&&(R=dD(r,y)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aD++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=S,this.fragmentShader=b,this}let wD=0;class bD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TD(e),n.set(e,i)),i}}class TD{constructor(e){this.id=wD++,this.code=e,this.usedTimes=0}}function AD(t,e,n,i,r,a,o){const s=new zS,l=new bD,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function g(M,T,z,K,q){const I=K.fog,B=q.geometry,Y=M.isMeshStandardMaterial?K.environment:null,W=(M.isMeshStandardMaterial?n:e).get(M.envMap||Y),U=W&&W.mapping===uf?W.image.height:null,N=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const H=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,L=H!==void 0?H.length:0;let V=0;B.morphAttributes.position!==void 0&&(V=1),B.morphAttributes.normal!==void 0&&(V=2),B.morphAttributes.color!==void 0&&(V=3);let ae,re,ce,ge;if(N){const ot=Si[N];ae=ot.vertexShader,re=ot.fragmentShader}else ae=M.vertexShader,re=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const _e=t.getRenderTarget(),Se=q.isInstancedMesh===!0,$e=!!M.map,mt=!!M.matcap,Be=!!W,k=!!M.aoMap,$t=!!M.lightMap,we=!!M.bumpMap,Oe=!!M.normalMap,Le=!!M.displacementMap,gt=!!M.emissiveMap,Ye=!!M.metalnessMap,He=!!M.roughnessMap,rt=M.anisotropy>0,Ht=M.clearcoat>0,Yt=M.iridescence>0,C=M.sheen>0,w=M.transmission>0,G=rt&&!!M.anisotropyMap,te=Ht&&!!M.clearcoatMap,J=Ht&&!!M.clearcoatNormalMap,ne=Ht&&!!M.clearcoatRoughnessMap,ye=Yt&&!!M.iridescenceMap,se=Yt&&!!M.iridescenceThicknessMap,fe=C&&!!M.sheenColorMap,Te=C&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,ee=!!M.specularColorMap,tt=!!M.specularIntensityMap,Ie=w&&!!M.transmissionMap,Ae=w&&!!M.thicknessMap,Ee=!!M.gradientMap,P=!!M.alphaMap,oe=M.alphaTest>0,ie=!!M.alphaHash,pe=!!M.extensions,ue=!!B.attributes.uv1,Z=!!B.attributes.uv2,xe=!!B.attributes.uv3;let Ue=Ar;return M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ue=t.toneMapping),{isWebGL2:u,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:ae,fragmentShader:re,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Se,instancingColor:Se&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:pi,map:$e,matcap:mt,envMap:Be,envMapMode:Be&&W.mapping,envMapCubeUVHeight:U,aoMap:k,lightMap:$t,bumpMap:we,normalMap:Oe,displacementMap:d&&Le,emissiveMap:gt,normalMapObjectSpace:Oe&&M.normalMapType===z3,normalMapTangentSpace:Oe&&M.normalMapType===Um,metalnessMap:Ye,roughnessMap:He,anisotropy:rt,anisotropyMap:G,clearcoat:Ht,clearcoatMap:te,clearcoatNormalMap:J,clearcoatRoughnessMap:ne,iridescence:Yt,iridescenceMap:ye,iridescenceThicknessMap:se,sheen:C,sheenColorMap:fe,sheenRoughnessMap:Te,specularMap:Ze,specularColorMap:ee,specularIntensityMap:tt,transmission:w,transmissionMap:Ie,thicknessMap:Ae,gradientMap:Ee,opaque:M.transparent===!1&&M.blending===la,alphaMap:P,alphaTest:oe,alphaHash:ie,combine:M.combine,mapUv:$e&&y(M.map.channel),aoMapUv:k&&y(M.aoMap.channel),lightMapUv:$t&&y(M.lightMap.channel),bumpMapUv:we&&y(M.bumpMap.channel),normalMapUv:Oe&&y(M.normalMap.channel),displacementMapUv:Le&&y(M.displacementMap.channel),emissiveMapUv:gt&&y(M.emissiveMap.channel),metalnessMapUv:Ye&&y(M.metalnessMap.channel),roughnessMapUv:He&&y(M.roughnessMap.channel),anisotropyMapUv:G&&y(M.anisotropyMap.channel),clearcoatMapUv:te&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Te&&y(M.sheenRoughnessMap.channel),specularMapUv:Ze&&y(M.specularMap.channel),specularColorMapUv:ee&&y(M.specularColorMap.channel),specularIntensityMapUv:tt&&y(M.specularIntensityMap.channel),transmissionMapUv:Ie&&y(M.transmissionMap.channel),thicknessMapUv:Ae&&y(M.thicknessMap.channel),alphaMapUv:P&&y(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Oe||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Z,vertexUv3s:xe,pointsUvs:q.isPoints===!0&&!!B.attributes.uv&&($e||P),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:V,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,useLegacyLights:t._useLegacyLights,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ln,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const z in M.defines)T.push(z),T.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(_(T,M),m(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function m(M,T){s.disableAll(),T.isWebGL2&&s.enable(0),T.supportsVertexTextures&&s.enable(1),T.instancing&&s.enable(2),T.instancingColor&&s.enable(3),T.matcap&&s.enable(4),T.envMap&&s.enable(5),T.normalMapObjectSpace&&s.enable(6),T.normalMapTangentSpace&&s.enable(7),T.clearcoat&&s.enable(8),T.iridescence&&s.enable(9),T.alphaTest&&s.enable(10),T.vertexColors&&s.enable(11),T.vertexAlphas&&s.enable(12),T.vertexUv1s&&s.enable(13),T.vertexUv2s&&s.enable(14),T.vertexUv3s&&s.enable(15),T.vertexTangents&&s.enable(16),T.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.skinning&&s.enable(4),T.morphTargets&&s.enable(5),T.morphNormals&&s.enable(6),T.morphColors&&s.enable(7),T.premultipliedAlpha&&s.enable(8),T.shadowMapEnabled&&s.enable(9),T.useLegacyLights&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function x(M){const T=v[M.type];let z;if(T){const K=Si[T];z=fl.clone(K.uniforms)}else z=M.uniforms;return z}function S(M,T){let z;for(let K=0,q=c.length;K<q;K++){const I=c[K];if(I.cacheKey===T){z=I,++z.usedTimes;break}}return z===void 0&&(z=new ED(t,T,M,a),c.push(z)),z}function b(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:x,acquireProgram:S,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function CD(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function RD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function M_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function E_(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,y,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=y,h.group=g),e++,h}function s(f,d,p,v,y,g){const h=o(f,d,p,v,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,v,y,g){const h=o(f,d,p,v,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||RD),i.length>1&&i.sort(d||M_),r.length>1&&r.sort(d||M_)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function PD(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new E_,t.set(i,[o])):r>=a.length?(o=new E_,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function LD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new Ne};break;case"SpotLight":n={position:new D,direction:new D,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":n={color:new Ne,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function ID(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let DD=0;function UD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ND(t,e){const n=new LD,i=ID(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const a=new D,o=new ht,s=new ht;function l(u,f){let d=0,p=0,v=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,g=0,h=0,_=0,m=0,x=0,S=0,b=0,E=0,R=0,M=0;u.sort(UD);const T=f===!0?Math.PI:1;for(let K=0,q=u.length;K<q;K++){const I=u[K],B=I.color,Y=I.intensity,W=I.distance,U=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=B.r*Y*T,p+=B.g*Y*T,v+=B.b*Y*T;else if(I.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(I.sh.coefficients[N],Y);M++}else if(I.isDirectionalLight){const N=n.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*T),I.castShadow){const H=I.shadow,L=i.get(I);L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,r.directionalShadow[y]=L,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=I.shadow.matrix,x++}r.directional[y]=N,y++}else if(I.isSpotLight){const N=n.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(B).multiplyScalar(Y*T),N.distance=W,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,r.spot[h]=N;const H=I.shadow;if(I.map&&(r.spotLightMap[E]=I.map,E++,H.updateMatrices(I),I.castShadow&&R++),r.spotLightMatrix[h]=H.matrix,I.castShadow){const L=i.get(I);L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,r.spotShadow[h]=L,r.spotShadowMap[h]=U,b++}h++}else if(I.isRectAreaLight){const N=n.get(I);N.color.copy(B).multiplyScalar(Y),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),r.rectArea[_]=N,_++}else if(I.isPointLight){const N=n.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity*T),N.distance=I.distance,N.decay=I.decay,I.castShadow){const H=I.shadow,L=i.get(I);L.shadowBias=H.bias,L.shadowNormalBias=H.normalBias,L.shadowRadius=H.radius,L.shadowMapSize=H.mapSize,L.shadowCameraNear=H.camera.near,L.shadowCameraFar=H.camera.far,r.pointShadow[g]=L,r.pointShadowMap[g]=U,r.pointShadowMatrix[g]=I.shadow.matrix,S++}r.point[g]=N,g++}else if(I.isHemisphereLight){const N=n.get(I);N.skyColor.copy(I.color).multiplyScalar(Y*T),N.groundColor.copy(I.groundColor).multiplyScalar(Y*T),r.hemi[m]=N,m++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==y||z.pointLength!==g||z.spotLength!==h||z.rectAreaLength!==_||z.hemiLength!==m||z.numDirectionalShadows!==x||z.numPointShadows!==S||z.numSpotShadows!==b||z.numSpotMaps!==E||z.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=_,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=b+E-R,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=M,z.directionalLength=y,z.pointLength=g,z.spotLength=h,z.rectAreaLength=_,z.hemiLength=m,z.numDirectionalShadows=x,z.numPointShadows=S,z.numSpotShadows=b,z.numSpotMaps=E,z.numLightProbes=M,r.version=DD++)}function c(u,f){let d=0,p=0,v=0,y=0,g=0;const h=f.matrixWorldInverse;for(let _=0,m=u.length;_<m;_++){const x=u[_];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(h),d++}else if(x.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(h),v++}else if(x.isRectAreaLight){const S=r.rectArea[y];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),s.identity(),o.copy(x.matrixWorld),o.premultiply(h),s.extractRotation(o),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),y++}else if(x.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:r}}function w_(t,e){const n=new ND(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function OD(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new w_(t,e),n.set(a,[l])):o>=s.length?(l=new w_(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class kD extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FD extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HD(t,e,n){let i=new $S;const r=new qe,a=new qe,o=new Et,s=new kD({depthPacking:F3}),l=new FD,c={},u=n.maxTextureSize,f={[Nr]:dn,[dn]:Nr,[Ln]:Ln},d=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:zD,fragmentShader:BD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Jn;v.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xn(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ES;let h=this.type;this.render=function(S,b,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const R=t.getRenderTarget(),M=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Wi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const K=h!==Ni&&this.type===Ni,q=h===Ni&&this.type!==Ni;for(let I=0,B=S.length;I<B;I++){const Y=S[I],W=Y.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const U=W.getFrameExtents();if(r.multiply(U),a.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/U.x),r.x=a.x*U.x,W.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/U.y),r.y=a.y*U.y,W.mapSize.y=a.y)),W.map===null||K===!0||q===!0){const H=this.type!==Ni?{minFilter:cn,magFilter:cn}:{};W.map!==null&&W.map.dispose(),W.map=new Ai(r.x,r.y,H),W.map.texture.name=Y.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const N=W.getViewportCount();for(let H=0;H<N;H++){const L=W.getViewport(H);o.set(a.x*L.x,a.y*L.y,a.x*L.z,a.y*L.w),z.viewport(o),W.updateMatrices(Y,H),i=W.getFrustum(),x(b,E,W.camera,Y,this.type)}W.isPointLightShadow!==!0&&this.type===Ni&&_(W,E),W.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(R,M,T)};function _(S,b){const E=e.update(y);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ai(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(b,null,E,d,y,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(b,null,E,p,y,null)}function m(S,b,E,R){let M=null;const T=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=E.isPointLight===!0?l:s,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=M.uuid,K=b.uuid;let q=c[z];q===void 0&&(q={},c[z]=q);let I=q[K];I===void 0&&(I=M.clone(),q[K]=I),M=I}if(M.visible=b.visible,M.wireframe=b.wireframe,R===Ni?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=E}return M}function x(S,b,E,R,M){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Ni)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const K=e.update(S),q=S.material;if(Array.isArray(q)){const I=K.groups;for(let B=0,Y=I.length;B<Y;B++){const W=I[B],U=q[W.materialIndex];if(U&&U.visible){const N=m(S,U,R,M);t.renderBufferDirect(E,null,K,N,S,W)}}}else if(q.visible){const I=m(S,q,R,M);t.renderBufferDirect(E,null,K,I,S,null)}}const z=S.children;for(let K=0,q=z.length;K<q;K++)x(z[K],b,E,R,M)}}function GD(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const oe=new Et;let ie=null;const pe=new Et(0,0,0,0);return{setMask:function(ue){ie!==ue&&!P&&(t.colorMask(ue,ue,ue,ue),ie=ue)},setLocked:function(ue){P=ue},setClear:function(ue,Z,xe,Ue,rn){rn===!0&&(ue*=Ue,Z*=Ue,xe*=Ue),oe.set(ue,Z,xe,Ue),pe.equals(oe)===!1&&(t.clearColor(ue,Z,xe,Ue),pe.copy(oe))},reset:function(){P=!1,ie=null,pe.set(-1,0,0,0)}}}function a(){let P=!1,oe=null,ie=null,pe=null;return{setTest:function(ue){ue?_e(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(ue){oe!==ue&&!P&&(t.depthMask(ue),oe=ue)},setFunc:function(ue){if(ie!==ue){switch(ue){case p3:t.depthFunc(t.NEVER);break;case m3:t.depthFunc(t.ALWAYS);break;case g3:t.depthFunc(t.LESS);break;case tp:t.depthFunc(t.LEQUAL);break;case v3:t.depthFunc(t.EQUAL);break;case _3:t.depthFunc(t.GEQUAL);break;case y3:t.depthFunc(t.GREATER);break;case x3:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=ue}},setLocked:function(ue){P=ue},setClear:function(ue){pe!==ue&&(t.clearDepth(ue),pe=ue)},reset:function(){P=!1,oe=null,ie=null,pe=null}}}function o(){let P=!1,oe=null,ie=null,pe=null,ue=null,Z=null,xe=null,Ue=null,rn=null;return{setTest:function(ot){P||(ot?_e(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(ot){oe!==ot&&!P&&(t.stencilMask(ot),oe=ot)},setFunc:function(ot,gi,an){(ie!==ot||pe!==gi||ue!==an)&&(t.stencilFunc(ot,gi,an),ie=ot,pe=gi,ue=an)},setOp:function(ot,gi,an){(Z!==ot||xe!==gi||Ue!==an)&&(t.stencilOp(ot,gi,an),Z=ot,xe=gi,Ue=an)},setLocked:function(ot){P=ot},setClear:function(ot){rn!==ot&&(t.clearStencil(ot),rn=ot)},reset:function(){P=!1,oe=null,ie=null,pe=null,ue=null,Z=null,xe=null,Ue=null,rn=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},v=new WeakMap,y=[],g=null,h=!1,_=null,m=null,x=null,S=null,b=null,E=null,R=null,M=!1,T=null,z=null,K=null,q=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(U)[1]),Y=W>=1):U.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),Y=W>=2);let N=null,H={};const L=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),ae=new Et().fromArray(L),re=new Et().fromArray(V);function ce(P,oe,ie,pe){const ue=new Uint8Array(4),Z=t.createTexture();t.bindTexture(P,Z),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<ie;xe++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(oe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(oe+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Z}const ge={};ge[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ge[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ge[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ge[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(t.DEPTH_TEST),l.setFunc(tp),Le(!1),gt(ov),_e(t.CULL_FACE),we(Wi);function _e(P){d[P]!==!0&&(t.enable(P),d[P]=!0)}function Se(P){d[P]!==!1&&(t.disable(P),d[P]=!1)}function $e(P,oe){return p[P]!==oe?(t.bindFramebuffer(P,oe),p[P]=oe,i&&(P===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=oe),P===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=oe)),!0):!1}function mt(P,oe){let ie=y,pe=!1;if(P)if(ie=v.get(oe),ie===void 0&&(ie=[],v.set(oe,ie)),P.isWebGLMultipleRenderTargets){const ue=P.texture;if(ie.length!==ue.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Z=0,xe=ue.length;Z<xe;Z++)ie[Z]=t.COLOR_ATTACHMENT0+Z;ie.length=ue.length,pe=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,pe=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Be(P){return g!==P?(t.useProgram(P),g=P,!0):!1}const k={[Ga]:t.FUNC_ADD,[i3]:t.FUNC_SUBTRACT,[r3]:t.FUNC_REVERSE_SUBTRACT};if(i)k[cv]=t.MIN,k[uv]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(k[cv]=P.MIN_EXT,k[uv]=P.MAX_EXT)}const $t={[a3]:t.ZERO,[o3]:t.ONE,[s3]:t.SRC_COLOR,[wS]:t.SRC_ALPHA,[h3]:t.SRC_ALPHA_SATURATE,[f3]:t.DST_COLOR,[c3]:t.DST_ALPHA,[l3]:t.ONE_MINUS_SRC_COLOR,[bS]:t.ONE_MINUS_SRC_ALPHA,[d3]:t.ONE_MINUS_DST_COLOR,[u3]:t.ONE_MINUS_DST_ALPHA};function we(P,oe,ie,pe,ue,Z,xe,Ue){if(P===Wi){h===!0&&(Se(t.BLEND),h=!1);return}if(h===!1&&(_e(t.BLEND),h=!0),P!==n3){if(P!==_||Ue!==M){if((m!==Ga||b!==Ga)&&(t.blendEquation(t.FUNC_ADD),m=Ga,b=Ga),Ue)switch(P){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ji:t.blendFunc(t.ONE,t.ONE);break;case sv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ji:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case sv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}x=null,S=null,E=null,R=null,_=P,M=Ue}return}ue=ue||oe,Z=Z||ie,xe=xe||pe,(oe!==m||ue!==b)&&(t.blendEquationSeparate(k[oe],k[ue]),m=oe,b=ue),(ie!==x||pe!==S||Z!==E||xe!==R)&&(t.blendFuncSeparate($t[ie],$t[pe],$t[Z],$t[xe]),x=ie,S=pe,E=Z,R=xe),_=P,M=!1}function Oe(P,oe){P.side===Ln?Se(t.CULL_FACE):_e(t.CULL_FACE);let ie=P.side===dn;oe&&(ie=!ie),Le(ie),P.blending===la&&P.transparent===!1?we(Wi):we(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),s.setMask(P.colorWrite);const pe=P.stencilWrite;c.setTest(pe),pe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),He(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){T!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),T=P)}function gt(P){P!==JC?(_e(t.CULL_FACE),P!==z&&(P===ov?t.cullFace(t.BACK):P===e3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),z=P}function Ye(P){P!==K&&(Y&&t.lineWidth(P),K=P)}function He(P,oe,ie){P?(_e(t.POLYGON_OFFSET_FILL),(q!==oe||I!==ie)&&(t.polygonOffset(oe,ie),q=oe,I=ie)):Se(t.POLYGON_OFFSET_FILL)}function rt(P){P?_e(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Ht(P){P===void 0&&(P=t.TEXTURE0+B-1),N!==P&&(t.activeTexture(P),N=P)}function Yt(P,oe,ie){ie===void 0&&(N===null?ie=t.TEXTURE0+B-1:ie=N);let pe=H[ie];pe===void 0&&(pe={type:void 0,texture:void 0},H[ie]=pe),(pe.type!==P||pe.texture!==oe)&&(N!==ie&&(t.activeTexture(ie),N=ie),t.bindTexture(P,oe||ge[P]),pe.type=P,pe.texture=oe)}function C(){const P=H[N];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function w(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(P){ae.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function tt(P){re.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function Ie(P,oe){let ie=f.get(oe);ie===void 0&&(ie=new WeakMap,f.set(oe,ie));let pe=ie.get(P);pe===void 0&&(pe=t.getUniformBlockIndex(oe,P.name),ie.set(P,pe))}function Ae(P,oe){const pe=f.get(oe).get(P);u.get(oe)!==pe&&(t.uniformBlockBinding(oe,pe,P.__bindingPointIndex),u.set(oe,pe))}function Ee(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},N=null,H={},p={},v=new WeakMap,y=[],g=null,h=!1,_=null,m=null,x=null,S=null,b=null,E=null,R=null,M=!1,T=null,z=null,K=null,q=null,I=null,ae.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:_e,disable:Se,bindFramebuffer:$e,drawBuffers:mt,useProgram:Be,setBlending:we,setMaterial:Oe,setFlipSided:Le,setCullFace:gt,setLineWidth:Ye,setPolygonOffset:He,setScissorTest:rt,activeTexture:Ht,bindTexture:Yt,unbindTexture:C,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:Te,texImage3D:Ze,updateUBOMapping:Ie,uniformBlockBinding:Ae,texStorage2D:se,texStorage3D:fe,texSubImage2D:te,texSubImage3D:J,compressedTexSubImage2D:ne,compressedTexSubImage3D:ye,scissor:ee,viewport:tt,reset:Ee}}function VD(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let y;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return h?new OffscreenCanvas(C,w):Zs("canvas")}function m(C,w,G,te){let J=1;if((C.width>te||C.height>te)&&(J=te/Math.max(C.width,C.height)),J<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ne=w?sp:Math.floor,ye=ne(J*C.width),se=ne(J*C.height);y===void 0&&(y=_(ye,se));const fe=G?_(ye,se):y;return fe.width=ye,fe.height=se,fe.getContext("2d").drawImage(C,0,0,ye,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+se+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function x(C){return Bv(C.width)&&Bv(C.height)}function S(C){return s?!1:C.wrapS!==si||C.wrapT!==si||C.minFilter!==cn&&C.minFilter!==Wn}function b(C,w){return C.generateMipmaps&&w&&C.minFilter!==cn&&C.minFilter!==Wn}function E(C){t.generateMipmap(C)}function R(C,w,G,te,J=!1){if(s===!1)return w;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ne=w;if(w===t.RED&&(G===t.FLOAT&&(ne=t.R32F),G===t.HALF_FLOAT&&(ne=t.R16F),G===t.UNSIGNED_BYTE&&(ne=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ne=t.R8UI),G===t.UNSIGNED_SHORT&&(ne=t.R16UI),G===t.UNSIGNED_INT&&(ne=t.R32UI),G===t.BYTE&&(ne=t.R8I),G===t.SHORT&&(ne=t.R16I),G===t.INT&&(ne=t.R32I)),w===t.RG&&(G===t.FLOAT&&(ne=t.RG32F),G===t.HALF_FLOAT&&(ne=t.RG16F),G===t.UNSIGNED_BYTE&&(ne=t.RG8)),w===t.RGBA){const ye=J?fu:nt.getTransfer(te);G===t.FLOAT&&(ne=t.RGBA32F),G===t.HALF_FLOAT&&(ne=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ne=ye===ct?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(C,w,G){return b(C,G)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){return C===cn||C===fv||C===od?t.NEAREST:t.LINEAR}function z(C){const w=C.target;w.removeEventListener("dispose",z),q(w),w.isVideoTexture&&v.delete(w)}function K(C){const w=C.target;w.removeEventListener("dispose",K),B(w)}function q(C){const w=i.get(C);if(w.__webglInit===void 0)return;const G=C.source,te=g.get(G);if(te){const J=te[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(C),Object.keys(te).length===0&&g.delete(G)}i.remove(C)}function I(C){const w=i.get(C);t.deleteTexture(w.__webglTexture);const G=C.source,te=g.get(G);delete te[w.__cacheKey],o.memory.textures--}function B(C){const w=C.texture,G=i.get(C),te=i.get(w);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(G.__webglFramebuffer[J]))for(let ne=0;ne<G.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(G.__webglFramebuffer[J]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[J])}else{if(Array.isArray(G.__webglFramebuffer))for(let J=0;J<G.__webglFramebuffer.length;J++)t.deleteFramebuffer(G.__webglFramebuffer[J]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let J=0;J<G.__webglColorRenderbuffer.length;J++)G.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[J]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,ne=w.length;J<ne;J++){const ye=i.get(w[J]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(w[J])}i.remove(w),i.remove(C)}let Y=0;function W(){Y=0}function U(){const C=Y;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Y+=1,C}function N(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function H(C,w){const G=i.get(C);if(C.isVideoTexture&&Ht(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$e(G,C,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function L(C,w){const G=i.get(C);if(C.version>0&&G.__version!==C.version){$e(G,C,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function V(C,w){const G=i.get(C);if(C.version>0&&G.__version!==C.version){$e(G,C,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function ae(C,w){const G=i.get(C);if(C.version>0&&G.__version!==C.version){mt(G,C,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const re={[qs]:t.REPEAT,[si]:t.CLAMP_TO_EDGE,[rp]:t.MIRRORED_REPEAT},ce={[cn]:t.NEAREST,[fv]:t.NEAREST_MIPMAP_NEAREST,[od]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[A3]:t.LINEAR_MIPMAP_NEAREST,[Ks]:t.LINEAR_MIPMAP_LINEAR},ge={[H3]:t.NEVER,[Y3]:t.ALWAYS,[G3]:t.LESS,[W3]:t.LEQUAL,[V3]:t.EQUAL,[$3]:t.GEQUAL,[j3]:t.GREATER,[X3]:t.NOTEQUAL};function _e(C,w,G){if(G?(t.texParameteri(C,t.TEXTURE_WRAP_S,re[w.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,re[w.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,re[w.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,ce[w.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,ce[w.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==si||w.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(w.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==cn&&w.minFilter!==Wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===cn||w.minFilter!==od&&w.minFilter!==Ks||w.type===_r&&e.has("OES_texture_float_linear")===!1||s===!1&&w.type===Or&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Se(C,w){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",z));const te=w.source;let J=g.get(te);J===void 0&&(J={},g.set(te,J));const ne=N(w);if(ne!==C.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[ne].usedTimes++;const ye=J[C.__cacheKey];ye!==void 0&&(J[C.__cacheKey].usedTimes--,ye.usedTimes===0&&I(w)),C.__cacheKey=ne,C.__webglTexture=J[ne].texture}return G}function $e(C,w,G){let te=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=t.TEXTURE_3D);const J=Se(C,w),ne=w.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+G);const ye=i.get(ne);if(ne.version!==ye.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const se=nt.getPrimaries(nt.workingColorSpace),fe=w.colorSpace===jn?null:nt.getPrimaries(w.colorSpace),Te=w.colorSpace===jn||se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ze=S(w)&&x(w.image)===!1;let ee=m(w.image,Ze,!1,u);ee=Yt(w,ee);const tt=x(ee)||s,Ie=a.convert(w.format,w.colorSpace);let Ae=a.convert(w.type),Ee=R(w.internalFormat,Ie,Ae,w.colorSpace,w.isVideoTexture);_e(te,w,tt);let P;const oe=w.mipmaps,ie=s&&w.isVideoTexture!==!0,pe=ye.__version===void 0||J===!0,ue=M(w,ee,tt);if(w.isDepthTexture)Ee=t.DEPTH_COMPONENT,s?w.type===_r?Ee=t.DEPTH_COMPONENT32F:w.type===vr?Ee=t.DEPTH_COMPONENT24:w.type===ca?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:w.type===_r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ua&&Ee===t.DEPTH_COMPONENT&&w.type!==Dm&&w.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=vr,Ae=a.convert(w.type)),w.format===Do&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,w.type!==ca&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ca,Ae=a.convert(w.type))),pe&&(ie?n.texStorage2D(t.TEXTURE_2D,1,Ee,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ie,Ae,null));else if(w.isDataTexture)if(oe.length>0&&tt){ie&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,Ee,oe[0].width,oe[0].height);for(let Z=0,xe=oe.length;Z<xe;Z++)P=oe[Z],ie?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,P.width,P.height,Ie,Ae,P.data):n.texImage2D(t.TEXTURE_2D,Z,Ee,P.width,P.height,0,Ie,Ae,P.data);w.generateMipmaps=!1}else ie?(pe&&n.texStorage2D(t.TEXTURE_2D,ue,Ee,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,Ie,Ae,ee.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ee.width,ee.height,0,Ie,Ae,ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ie&&pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Ee,oe[0].width,oe[0].height,ee.depth);for(let Z=0,xe=oe.length;Z<xe;Z++)P=oe[Z],w.format!==li?Ie!==null?ie?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,P.width,P.height,ee.depth,Ie,P.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Ee,P.width,P.height,ee.depth,0,P.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,P.width,P.height,ee.depth,Ie,Ae,P.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Ee,P.width,P.height,ee.depth,0,Ie,Ae,P.data)}else{ie&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,Ee,oe[0].width,oe[0].height);for(let Z=0,xe=oe.length;Z<xe;Z++)P=oe[Z],w.format!==li?Ie!==null?ie?n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,P.width,P.height,Ie,P.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Ee,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,P.width,P.height,Ie,Ae,P.data):n.texImage2D(t.TEXTURE_2D,Z,Ee,P.width,P.height,0,Ie,Ae,P.data)}else if(w.isDataArrayTexture)ie?(pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,Ee,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ie,Ae,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ee.width,ee.height,ee.depth,0,Ie,Ae,ee.data);else if(w.isData3DTexture)ie?(pe&&n.texStorage3D(t.TEXTURE_3D,ue,Ee,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ie,Ae,ee.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ee.width,ee.height,ee.depth,0,Ie,Ae,ee.data);else if(w.isFramebufferTexture){if(pe)if(ie)n.texStorage2D(t.TEXTURE_2D,ue,Ee,ee.width,ee.height);else{let Z=ee.width,xe=ee.height;for(let Ue=0;Ue<ue;Ue++)n.texImage2D(t.TEXTURE_2D,Ue,Ee,Z,xe,0,Ie,Ae,null),Z>>=1,xe>>=1}}else if(oe.length>0&&tt){ie&&pe&&n.texStorage2D(t.TEXTURE_2D,ue,Ee,oe[0].width,oe[0].height);for(let Z=0,xe=oe.length;Z<xe;Z++)P=oe[Z],ie?n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Ie,Ae,P):n.texImage2D(t.TEXTURE_2D,Z,Ee,Ie,Ae,P);w.generateMipmaps=!1}else ie?(pe&&n.texStorage2D(t.TEXTURE_2D,ue,Ee,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ie,Ae,ee)):n.texImage2D(t.TEXTURE_2D,0,Ee,Ie,Ae,ee);b(w,tt)&&E(te),ye.__version=ne.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function mt(C,w,G){if(w.image.length!==6)return;const te=Se(C,w),J=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const ne=i.get(J);if(J.version!==ne.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const ye=nt.getPrimaries(nt.workingColorSpace),se=w.colorSpace===jn?null:nt.getPrimaries(w.colorSpace),fe=w.colorSpace===jn||ye===se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Te=w.isCompressedTexture||w.image[0].isCompressedTexture,Ze=w.image[0]&&w.image[0].isDataTexture,ee=[];for(let Z=0;Z<6;Z++)!Te&&!Ze?ee[Z]=m(w.image[Z],!1,!0,c):ee[Z]=Ze?w.image[Z].image:w.image[Z],ee[Z]=Yt(w,ee[Z]);const tt=ee[0],Ie=x(tt)||s,Ae=a.convert(w.format,w.colorSpace),Ee=a.convert(w.type),P=R(w.internalFormat,Ae,Ee,w.colorSpace),oe=s&&w.isVideoTexture!==!0,ie=ne.__version===void 0||te===!0;let pe=M(w,tt,Ie);_e(t.TEXTURE_CUBE_MAP,w,Ie);let ue;if(Te){oe&&ie&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,P,tt.width,tt.height);for(let Z=0;Z<6;Z++){ue=ee[Z].mipmaps;for(let xe=0;xe<ue.length;xe++){const Ue=ue[xe];w.format!==li?Ae!==null?oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Ue.width,Ue.height,Ae,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,P,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Ue.width,Ue.height,Ae,Ee,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,P,Ue.width,Ue.height,0,Ae,Ee,Ue.data)}}}else{ue=w.mipmaps,oe&&ie&&(ue.length>0&&pe++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,P,ee[0].width,ee[0].height));for(let Z=0;Z<6;Z++)if(Ze){oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ee[Z].width,ee[Z].height,Ae,Ee,ee[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,P,ee[Z].width,ee[Z].height,0,Ae,Ee,ee[Z].data);for(let xe=0;xe<ue.length;xe++){const rn=ue[xe].image[Z].image;oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,rn.width,rn.height,Ae,Ee,rn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,P,rn.width,rn.height,0,Ae,Ee,rn.data)}}else{oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,Ee,ee[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,P,Ae,Ee,ee[Z]);for(let xe=0;xe<ue.length;xe++){const Ue=ue[xe];oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Ae,Ee,Ue.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,P,Ae,Ee,Ue.image[Z])}}}b(w,Ie)&&E(t.TEXTURE_CUBE_MAP),ne.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Be(C,w,G,te,J,ne){const ye=a.convert(G.format,G.colorSpace),se=a.convert(G.type),fe=R(G.internalFormat,ye,se,G.colorSpace);if(!i.get(w).__hasExternalTextures){const Ze=Math.max(1,w.width>>ne),ee=Math.max(1,w.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,fe,Ze,ee,w.depth,0,ye,se,null):n.texImage2D(J,ne,fe,Ze,ee,0,ye,se,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),rt(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,i.get(G).__webglTexture,0,He(w)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,i.get(G).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(C,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let te=s===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||rt(w)){const J=w.depthTexture;J&&J.isDepthTexture&&(J.type===_r?te=t.DEPTH_COMPONENT32F:J.type===vr&&(te=t.DEPTH_COMPONENT24));const ne=He(w);rt(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,te,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,te,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){const te=He(w);G&&rt(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,w.width,w.height):rt(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0;J<te.length;J++){const ne=te[J],ye=a.convert(ne.format,ne.colorSpace),se=a.convert(ne.type),fe=R(ne.internalFormat,ye,se,ne.colorSpace),Te=He(w);G&&rt(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,fe,w.width,w.height):rt(w)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Te,fe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,fe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $t(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,J=He(w);if(w.depthTexture.format===ua)rt(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(w.depthTexture.format===Do)rt(w)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(C){const w=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");$t(w.__webglFramebuffer,C)}else if(G){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=t.createRenderbuffer(),k(w.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),k(w.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(C,w,G){const te=i.get(C);w!==void 0&&Be(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&we(C)}function Le(C){const w=C.texture,G=i.get(C),te=i.get(w);C.addEventListener("dispose",K),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,o.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,ne=C.isWebGLMultipleRenderTargets===!0,ye=x(C)||s;if(J){G.__webglFramebuffer=[];for(let se=0;se<6;se++)if(s&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[se]=[];for(let fe=0;fe<w.mipmaps.length;fe++)G.__webglFramebuffer[se][fe]=t.createFramebuffer()}else G.__webglFramebuffer[se]=t.createFramebuffer()}else{if(s&&w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let se=0;se<w.mipmaps.length;se++)G.__webglFramebuffer[se]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ne)if(r.drawBuffers){const se=C.texture;for(let fe=0,Te=se.length;fe<Te;fe++){const Ze=i.get(se[fe]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&rt(C)===!1){const se=ne?w:[w];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<se.length;fe++){const Te=se[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const Ze=a.convert(Te.format,Te.colorSpace),ee=a.convert(Te.type),tt=R(Te.internalFormat,Ze,ee,Te.colorSpace,C.isXRRenderTarget===!0),Ie=He(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,tt,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),k(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),_e(t.TEXTURE_CUBE_MAP,w,ye);for(let se=0;se<6;se++)if(s&&w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Be(G.__webglFramebuffer[se][fe],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else Be(G.__webglFramebuffer[se],C,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);b(w,ye)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ne){const se=C.texture;for(let fe=0,Te=se.length;fe<Te;fe++){const Ze=se[fe],ee=i.get(Ze);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),_e(t.TEXTURE_2D,Ze,ye),Be(G.__webglFramebuffer,C,Ze,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),b(Ze,ye)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let se=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?se=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(se,te.__webglTexture),_e(se,w,ye),s&&w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)Be(G.__webglFramebuffer[fe],C,w,t.COLOR_ATTACHMENT0,se,fe);else Be(G.__webglFramebuffer,C,w,t.COLOR_ATTACHMENT0,se,0);b(w,ye)&&E(se),n.unbindTexture()}C.depthBuffer&&we(C)}function gt(C){const w=x(C)||s,G=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,J=G.length;te<J;te++){const ne=G[te];if(b(ne,w)){const ye=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,se=i.get(ne).__webglTexture;n.bindTexture(ye,se),E(ye),n.unbindTexture()}}}function Ye(C){if(s&&C.samples>0&&rt(C)===!1){const w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],G=C.width,te=C.height;let J=t.COLOR_BUFFER_BIT;const ne=[],ye=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=i.get(C),fe=C.isWebGLMultipleRenderTargets===!0;if(fe)for(let Te=0;Te<w.length;Te++)n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let Te=0;Te<w.length;Te++){ne.push(t.COLOR_ATTACHMENT0+Te),C.depthBuffer&&ne.push(ye);const Ze=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(Ze===!1&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),fe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,se.__webglColorRenderbuffer[Te]),Ze===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),fe){const ee=i.get(w[Te]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,te,0,0,G,te,J,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Te=0;Te<w.length;Te++){n.bindFramebuffer(t.FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.RENDERBUFFER,se.__webglColorRenderbuffer[Te]);const Ze=i.get(w[Te]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Te,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function He(C){return Math.min(f,C.samples)}function rt(C){const w=i.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ht(C){const w=o.render.frame;v.get(C)!==w&&(v.set(C,w),C.update())}function Yt(C,w){const G=C.colorSpace,te=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ap||G!==pi&&G!==jn&&(nt.getTransfer(G)===ct?s===!1?e.has("EXT_sRGB")===!0&&te===li?(C.format=ap,C.minFilter=Wn,C.generateMipmaps=!1):w=OS.sRGBToLinear(w):(te!==li||J!==Cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}this.allocateTextureUnit=U,this.resetTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=L,this.setTexture3D=V,this.setTextureCube=ae,this.rebindTextures=Oe,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=rt}function WD(t,e,n){const i=n.isWebGL2;function r(a,o=jn){let s;const l=nt.getTransfer(o);if(a===Cr)return t.UNSIGNED_BYTE;if(a===RS)return t.UNSIGNED_SHORT_4_4_4_4;if(a===PS)return t.UNSIGNED_SHORT_5_5_5_1;if(a===C3)return t.BYTE;if(a===R3)return t.SHORT;if(a===Dm)return t.UNSIGNED_SHORT;if(a===CS)return t.INT;if(a===vr)return t.UNSIGNED_INT;if(a===_r)return t.FLOAT;if(a===Or)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===P3)return t.ALPHA;if(a===li)return t.RGBA;if(a===L3)return t.LUMINANCE;if(a===I3)return t.LUMINANCE_ALPHA;if(a===ua)return t.DEPTH_COMPONENT;if(a===Do)return t.DEPTH_STENCIL;if(a===ap)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===D3)return t.RED;if(a===LS)return t.RED_INTEGER;if(a===U3)return t.RG;if(a===IS)return t.RG_INTEGER;if(a===DS)return t.RGBA_INTEGER;if(a===sd||a===ld||a===cd||a===ud)if(l===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===sd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ld)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ud)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===sd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ld)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ud)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===dv||a===hv||a===pv||a===mv)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===dv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===hv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===pv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===mv)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===N3)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===gv||a===vv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===gv)return l===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===vv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===_v||a===yv||a===xv||a===Sv||a===Mv||a===Ev||a===wv||a===bv||a===Tv||a===Av||a===Cv||a===Rv||a===Pv||a===Lv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===_v)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===yv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===xv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Sv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ev)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===wv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===bv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Tv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Av)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Cv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Rv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lv)return l===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===fd||a===Iv||a===Dv)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===fd)return l===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Iv)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Dv)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===O3||a===Uv||a===Nv||a===Ov)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===fd)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Uv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Nv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ov)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===ca?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class jD extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oo extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XD={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(XD)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $D extends wn{constructor(e,n,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:ua,u!==ua&&u!==Do)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ua&&(i=vr),i===void 0&&u===Do&&(i=ca),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class YD extends Ho{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,v=null;const y=n.getContextAttributes();let g=null,h=null;const _=[],m=[],x=new _n;x.layers.enable(1),x.viewport=new Et;const S=new _n;S.layers.enable(2),S.viewport=new Et;const b=[x,S],E=new jD;E.layers.enable(1),E.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let V=_[L];return V===void 0&&(V=new Nd,_[L]=V),V.getTargetRaySpace()},this.getControllerGrip=function(L){let V=_[L];return V===void 0&&(V=new Nd,_[L]=V),V.getGripSpace()},this.getHand=function(L){let V=_[L];return V===void 0&&(V=new Nd,_[L]=V),V.getHandSpace()};function T(L){const V=m.indexOf(L.inputSource);if(V===-1)return;const ae=_[V];ae!==void 0&&(ae.update(L.inputSource,L.frame,c||o),ae.dispatchEvent({type:L.type,data:L.inputSource}))}function z(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",K);for(let L=0;L<_.length;L++){const V=m[L];V!==null&&(m[L]=null,_[L].disconnect(V))}R=null,M=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",z),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:p}),h=new Ai(p.framebufferWidth,p.framebufferHeight,{format:li,type:Cr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let V=null,ae=null,re=null;y.depth&&(re=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=y.stencil?Do:ua,ae=y.stencil?ca:vr);const ce={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:a};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ce),r.updateRenderState({layers:[d]}),h=new Ai(d.textureWidth,d.textureHeight,{format:li,type:Cr,depthTexture:new $D(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ge=e.properties.get(h);ge.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),H.setContext(r),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(L){for(let V=0;V<L.removed.length;V++){const ae=L.removed[V],re=m.indexOf(ae);re>=0&&(m[re]=null,_[re].disconnect(ae))}for(let V=0;V<L.added.length;V++){const ae=L.added[V];let re=m.indexOf(ae);if(re===-1){for(let ge=0;ge<_.length;ge++)if(ge>=m.length){m.push(ae),re=ge;break}else if(m[ge]===null){m[ge]=ae,re=ge;break}if(re===-1)break}const ce=_[re];ce&&ce.connect(ae)}}const q=new D,I=new D;function B(L,V,ae){q.setFromMatrixPosition(V.matrixWorld),I.setFromMatrixPosition(ae.matrixWorld);const re=q.distanceTo(I),ce=V.projectionMatrix.elements,ge=ae.projectionMatrix.elements,_e=ce[14]/(ce[10]-1),Se=ce[14]/(ce[10]+1),$e=(ce[9]+1)/ce[5],mt=(ce[9]-1)/ce[5],Be=(ce[8]-1)/ce[0],k=(ge[8]+1)/ge[0],$t=_e*Be,we=_e*k,Oe=re/(-Be+k),Le=Oe*-Be;V.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Le),L.translateZ(Oe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const gt=_e+Oe,Ye=Se+Oe,He=$t-Le,rt=we+(re-Le),Ht=$e*Se/Ye*gt,Yt=mt*Se/Ye*gt;L.projectionMatrix.makePerspective(He,rt,Ht,Yt,gt,Ye),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function Y(L,V){V===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(V.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;E.near=S.near=x.near=L.near,E.far=S.far=x.far=L.far,(R!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,M=E.far);const V=L.parent,ae=E.cameras;Y(E,V);for(let re=0;re<ae.length;re++)Y(ae[re],V);ae.length===2?B(E,x,S):E.projectionMatrix.copy(x.projectionMatrix),W(L,E,V)};function W(L,V,ae){ae===null?L.matrix.copy(V.matrixWorld):(L.matrix.copy(ae.matrixWorld),L.matrix.invert(),L.matrix.multiply(V.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(V.projectionMatrix),L.projectionMatrixInverse.copy(V.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=op*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)};let U=null;function N(L,V){if(u=V.getViewerPose(c||o),v=V,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let re=!1;ae.length!==E.cameras.length&&(E.cameras.length=0,re=!0);for(let ce=0;ce<ae.length;ce++){const ge=ae[ce];let _e=null;if(p!==null)_e=p.getViewport(ge);else{const $e=f.getViewSubImage(d,ge);_e=$e.viewport,ce===0&&(e.setRenderTargetTextures(h,$e.colorTexture,d.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(h))}let Se=b[ce];Se===void 0&&(Se=new _n,Se.layers.enable(ce),Se.viewport=new Et,b[ce]=Se),Se.matrix.fromArray(ge.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ge.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(_e.x,_e.y,_e.width,_e.height),ce===0&&(E.matrix.copy(Se.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),re===!0&&E.cameras.push(Se)}}for(let ae=0;ae<_.length;ae++){const re=m[ae],ce=_[ae];re!==null&&ce!==void 0&&ce.update(re,V,c||o)}U&&U(L,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),v=null}const H=new YS;H.setAnimationLoop(N),this.setAnimationLoop=function(L){U=L},this.dispose=function(){}}}function qD(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,WS(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,_,m,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(g,h):h.isMeshToonMaterial?(a(g,h),f(g,h)):h.isMeshPhongMaterial?(a(g,h),u(g,h)):h.isMeshStandardMaterial?(a(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(a(g,h),v(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),y(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&s(g,h)):h.isPointsMaterial?l(g,h,_,m):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===dn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===dn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function s(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,_,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*_,g.scale.value=m*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,_){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===dn&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const _=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KD(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,m){const x=m.program;i.uniformBlockBinding(_,x)}function c(_,m){let x=r[_.id];x===void 0&&(v(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",g));const S=m.program;i.updateUBOMapping(_,S);const b=e.render.frame;a[_.id]!==b&&(d(_),a[_.id]=b)}function u(_){const m=f();_.__bindingPointIndex=m;const x=t.createBuffer(),S=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,S,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,x),x}function f(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const m=r[_.id],x=_.uniforms,S=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let b=0,E=x.length;b<E;b++){const R=x[b];if(p(R,b,S)===!0){const M=R.__offset,T=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let K=0;K<T.length;K++){const q=T[K],I=y(q);typeof q=="number"?(R.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,M+z,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=q.elements[0],R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=q.elements[0],R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=q.elements[0]):(q.toArray(R.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,R.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,m,x){const S=_.value;if(x[m]===void 0){if(typeof S=="number")x[m]=S;else{const b=Array.isArray(S)?S:[S],E=[];for(let R=0;R<b.length;R++)E.push(b[R].clone());x[m]=E}return!0}else if(typeof S=="number"){if(x[m]!==S)return x[m]=S,!0}else{const b=Array.isArray(x[m])?x[m]:[x[m]],E=Array.isArray(S)?S:[S];for(let R=0;R<b.length;R++){const M=b[R];if(M.equals(E[R])===!1)return M.copy(E[R]),!0}}return!1}function v(_){const m=_.uniforms;let x=0;const S=16;let b=0;for(let E=0,R=m.length;E<R;E++){const M=m[E],T={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let K=0,q=z.length;K<q;K++){const I=z[K],B=y(I);T.boundary+=B.boundary,T.storage+=B.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=x,E>0){b=x%S;const K=S-b;b!==0&&K-T.boundary<0&&(x+=S-b,M.__offset=x)}x+=T.storage}return b=x%S,b>0&&(x+=S-b),_.__size=x,_.__cache={},this}function y(_){const m={boundary:0,storage:0};return typeof _=="number"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function g(_){const m=_.target;m.removeEventListener("dispose",g);const x=o.indexOf(m.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete a[m.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}class eM{constructor(e={}){const{canvas:n=K3(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=Ar,this.toneMappingExposure=1;const m=this;let x=!1,S=0,b=0,E=null,R=-1,M=null;const T=new Et,z=new Et;let K=null;const q=new Ne(0);let I=0,B=n.width,Y=n.height,W=1,U=null,N=null;const H=new Et(0,0,B,Y),L=new Et(0,0,B,Y);let V=!1;const ae=new $S;let re=!1,ce=!1,ge=null;const _e=new ht,Se=new qe,$e=new D,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return E===null?W:1}let k=i;function $t(A,O){for(let j=0;j<A.length;j++){const F=A[j],X=n.getContext(F,O);if(X!==null)return X}return null}try{const A={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Im}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",pe,!1),k===null){const O=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&O.shift(),k=$t(O,A),k===null)throw $t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let we,Oe,Le,gt,Ye,He,rt,Ht,Yt,C,w,G,te,J,ne,ye,se,fe,Te,Ze,ee,tt,Ie,Ae;function Ee(){we=new sI(k),Oe=new tI(k,we,e),we.init(Oe),tt=new WD(k,we,Oe),Le=new GD(k,we,Oe),gt=new uI(k),Ye=new CD,He=new VD(k,we,Le,Ye,Oe,tt,gt),rt=new iI(m),Ht=new oI(m),Yt=new xR(k,Oe),Ie=new JL(k,we,Yt,Oe),C=new lI(k,Yt,gt,Ie),w=new pI(k,C,Yt,gt),Te=new hI(k,Oe,He),ye=new nI(Ye),G=new AD(m,rt,Ht,we,Oe,Ie,ye),te=new qD(m,Ye),J=new PD,ne=new OD(we,Oe),fe=new QL(m,rt,Ht,Le,w,d,l),se=new HD(m,w,Oe),Ae=new KD(k,gt,Oe,Le),Ze=new eI(k,we,gt,Oe),ee=new cI(k,we,gt,Oe),gt.programs=G.programs,m.capabilities=Oe,m.extensions=we,m.properties=Ye,m.renderLists=J,m.shadowMap=se,m.state=Le,m.info=gt}Ee();const P=new YD(m,k);this.xr=P,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=we.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=we.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(B,Y,!1))},this.getSize=function(A){return A.set(B,Y)},this.setSize=function(A,O,j=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Y=O,n.width=Math.floor(A*W),n.height=Math.floor(O*W),j===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(B*W,Y*W).floor()},this.setDrawingBufferSize=function(A,O,j){B=A,Y=O,W=j,n.width=Math.floor(A*j),n.height=Math.floor(O*j),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,O,j,F){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,O,j,F),Le.viewport(T.copy(H).multiplyScalar(W).floor())},this.getScissor=function(A){return A.copy(L)},this.setScissor=function(A,O,j,F){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,O,j,F),Le.scissor(z.copy(L).multiplyScalar(W).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){Le.setScissorTest(V=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(A=!0,O=!0,j=!0){let F=0;if(A){let X=!1;if(E!==null){const me=E.texture.format;X=me===DS||me===IS||me===LS}if(X){const me=E.texture.type,Me=me===Cr||me===vr||me===Dm||me===ca||me===RS||me===PS,Ce=fe.getClearColor(),Re=fe.getClearAlpha(),Ve=Ce.r,be=Ce.g,ke=Ce.b;Me?(p[0]=Ve,p[1]=be,p[2]=ke,p[3]=Re,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=Ve,v[1]=be,v[2]=ke,v[3]=Re,k.clearBufferiv(k.COLOR,0,v))}else F|=k.COLOR_BUFFER_BIT}O&&(F|=k.DEPTH_BUFFER_BIT),j&&(F|=k.STENCIL_BUFFER_BIT),k.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),J.dispose(),ne.dispose(),Ye.dispose(),rt.dispose(),Ht.dispose(),w.dispose(),Ie.dispose(),Ae.dispose(),G.dispose(),P.dispose(),P.removeEventListener("sessionstart",ot),P.removeEventListener("sessionend",gi),ge&&(ge.dispose(),ge=null),an.stop()};function oe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=gt.autoReset,O=se.enabled,j=se.autoUpdate,F=se.needsUpdate,X=se.type;Ee(),gt.autoReset=A,se.enabled=O,se.autoUpdate=j,se.needsUpdate=F,se.type=X}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const O=A.target;O.removeEventListener("dispose",ue),Z(O)}function Z(A){xe(A),Ye.remove(A)}function xe(A){const O=Ye.get(A).programs;O!==void 0&&(O.forEach(function(j){G.releaseProgram(j)}),A.isShaderMaterial&&G.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,j,F,X,me){O===null&&(O=mt);const Me=X.isMesh&&X.matrixWorld.determinant()<0,Ce=fM(A,O,j,F,X);Le.setMaterial(F,Me);let Re=j.index,Ve=1;if(F.wireframe===!0){if(Re=C.getWireframeAttribute(j),Re===void 0)return;Ve=2}const be=j.drawRange,ke=j.attributes.position;let xt=be.start*Ve,wt=(be.start+be.count)*Ve;me!==null&&(xt=Math.max(xt,me.start*Ve),wt=Math.min(wt,(me.start+me.count)*Ve)),Re!==null?(xt=Math.max(xt,0),wt=Math.min(wt,Re.count)):ke!=null&&(xt=Math.max(xt,0),wt=Math.min(wt,ke.count));const Bn=wt-xt;if(Bn<0||Bn===1/0)return;Ie.setup(X,F,Ce,j,Re);let Ci,Tt=Ze;if(Re!==null&&(Ci=Yt.get(Re),Tt=ee,Tt.setIndex(Ci)),X.isMesh)F.wireframe===!0?(Le.setLineWidth(F.wireframeLinewidth*Be()),Tt.setMode(k.LINES)):Tt.setMode(k.TRIANGLES);else if(X.isLine){let je=F.linewidth;je===void 0&&(je=1),Le.setLineWidth(je*Be()),X.isLineSegments?Tt.setMode(k.LINES):X.isLineLoop?Tt.setMode(k.LINE_LOOP):Tt.setMode(k.LINE_STRIP)}else X.isPoints?Tt.setMode(k.POINTS):X.isSprite&&Tt.setMode(k.TRIANGLES);if(X.isInstancedMesh)Tt.renderInstances(xt,Bn,X.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_f=Math.min(j.instanceCount,je);Tt.renderInstances(xt,Bn,_f)}else Tt.render(xt,Bn)},this.compile=function(A,O){function j(F,X,me){F.transparent===!0&&F.side===Ln&&F.forceSinglePass===!1?(F.side=dn,F.needsUpdate=!0,hl(F,X,me),F.side=Nr,F.needsUpdate=!0,hl(F,X,me),F.side=Ln):hl(F,X,me)}g=ne.get(A),g.init(),_.push(g),A.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(m._useLegacyLights),A.traverse(function(F){const X=F.material;if(X)if(Array.isArray(X))for(let me=0;me<X.length;me++){const Me=X[me];j(Me,A,F)}else j(X,A,F)}),_.pop(),g=null};let Ue=null;function rn(A){Ue&&Ue(A)}function ot(){an.stop()}function gi(){an.start()}const an=new YS;an.setAnimationLoop(rn),typeof self<"u"&&an.setContext(self),this.setAnimationLoop=function(A){Ue=A,P.setAnimationLoop(A),A===null?an.stop():an.start()},P.addEventListener("sessionstart",ot),P.addEventListener("sessionend",gi),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,O,E),g=ne.get(A,_.length),g.init(),_.push(g),_e.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ae.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,re=ye.init(this.clippingPlanes,ce),y=J.get(A,h.length),y.init(),h.push(y),Xm(A,O,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(U,N),this.info.render.frame++,re===!0&&ye.beginShadows();const j=g.state.shadowsArray;if(se.render(j,A,O),re===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(y,A),g.setupLights(m._useLegacyLights),O.isArrayCamera){const F=O.cameras;for(let X=0,me=F.length;X<me;X++){const Me=F[X];$m(y,A,Me,Me.viewport)}}else $m(y,A,O);E!==null&&(He.updateMultisampleRenderTarget(E),He.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(m,A,O),Ie.resetDefaultState(),R=-1,M=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function Xm(A,O,j,F){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ae.intersectsSprite(A)){F&&$e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const Me=w.update(A),Ce=A.material;Ce.visible&&y.push(A,Me,Ce,j,$e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ae.intersectsObject(A))){const Me=w.update(A),Ce=A.material;if(F&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),$e.copy(A.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),$e.copy(Me.boundingSphere.center)),$e.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ce)){const Re=Me.groups;for(let Ve=0,be=Re.length;Ve<be;Ve++){const ke=Re[Ve],xt=Ce[ke.materialIndex];xt&&xt.visible&&y.push(A,Me,xt,j,$e.z,ke)}}else Ce.visible&&y.push(A,Me,Ce,j,$e.z,null)}}const me=A.children;for(let Me=0,Ce=me.length;Me<Ce;Me++)Xm(me[Me],O,j,F)}function $m(A,O,j,F){const X=A.opaque,me=A.transmissive,Me=A.transparent;g.setupLightsView(j),re===!0&&ye.setGlobalState(m.clippingPlanes,j),me.length>0&&uM(X,me,O,j),F&&Le.viewport(T.copy(F)),X.length>0&&dl(X,O,j),me.length>0&&dl(me,O,j),Me.length>0&&dl(Me,O,j),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function uM(A,O,j,F){const X=Oe.isWebGL2;ge===null&&(ge=new Ai(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?Or:Cr,minFilter:Ks,samples:X?4:0})),m.getDrawingBufferSize(Se),X?ge.setSize(Se.x,Se.y):ge.setSize(sp(Se.x),sp(Se.y));const me=m.getRenderTarget();m.setRenderTarget(ge),m.getClearColor(q),I=m.getClearAlpha(),I<1&&m.setClearColor(16777215,.5),m.clear();const Me=m.toneMapping;m.toneMapping=Ar,dl(A,j,F),He.updateMultisampleRenderTarget(ge),He.updateRenderTargetMipmap(ge);let Ce=!1;for(let Re=0,Ve=O.length;Re<Ve;Re++){const be=O[Re],ke=be.object,xt=be.geometry,wt=be.material,Bn=be.group;if(wt.side===Ln&&ke.layers.test(F.layers)){const Ci=wt.side;wt.side=dn,wt.needsUpdate=!0,Ym(ke,j,F,xt,wt,Bn),wt.side=Ci,wt.needsUpdate=!0,Ce=!0}}Ce===!0&&(He.updateMultisampleRenderTarget(ge),He.updateRenderTargetMipmap(ge)),m.setRenderTarget(me),m.setClearColor(q,I),m.toneMapping=Me}function dl(A,O,j){const F=O.isScene===!0?O.overrideMaterial:null;for(let X=0,me=A.length;X<me;X++){const Me=A[X],Ce=Me.object,Re=Me.geometry,Ve=F===null?Me.material:F,be=Me.group;Ce.layers.test(j.layers)&&Ym(Ce,O,j,Re,Ve,be)}}function Ym(A,O,j,F,X,me){A.onBeforeRender(m,O,j,F,X,me),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(m,O,j,F,A,me),X.transparent===!0&&X.side===Ln&&X.forceSinglePass===!1?(X.side=dn,X.needsUpdate=!0,m.renderBufferDirect(j,O,F,X,A,me),X.side=Nr,X.needsUpdate=!0,m.renderBufferDirect(j,O,F,X,A,me),X.side=Ln):m.renderBufferDirect(j,O,F,X,A,me),A.onAfterRender(m,O,j,F,X,me)}function hl(A,O,j){O.isScene!==!0&&(O=mt);const F=Ye.get(A),X=g.state.lights,me=g.state.shadowsArray,Me=X.state.version,Ce=G.getParameters(A,X.state,me,O,j),Re=G.getProgramCacheKey(Ce);let Ve=F.programs;F.environment=A.isMeshStandardMaterial?O.environment:null,F.fog=O.fog,F.envMap=(A.isMeshStandardMaterial?Ht:rt).get(A.envMap||F.environment),Ve===void 0&&(A.addEventListener("dispose",ue),Ve=new Map,F.programs=Ve);let be=Ve.get(Re);if(be!==void 0){if(F.currentProgram===be&&F.lightsStateVersion===Me)return qm(A,Ce),be}else Ce.uniforms=G.getUniforms(A),A.onBuild(j,Ce,m),A.onBeforeCompile(Ce,m),be=G.acquireProgram(Ce,Re),Ve.set(Re,be),F.uniforms=Ce.uniforms;const ke=F.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=ye.uniform),qm(A,Ce),F.needsLights=hM(A),F.lightsStateVersion=Me,F.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix);const xt=be.getUniforms(),wt=Lc.seqWithValue(xt.seq,ke);return F.currentProgram=be,F.uniformsList=wt,be}function qm(A,O){const j=Ye.get(A);j.outputColorSpace=O.outputColorSpace,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function fM(A,O,j,F,X){O.isScene!==!0&&(O=mt),He.resetTextureUnits();const me=O.fog,Me=F.isMeshStandardMaterial?O.environment:null,Ce=E===null?m.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:pi,Re=(F.isMeshStandardMaterial?Ht:rt).get(F.envMap||Me),Ve=F.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,be=!!j.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),ke=!!j.morphAttributes.position,xt=!!j.morphAttributes.normal,wt=!!j.morphAttributes.color;let Bn=Ar;F.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Bn=m.toneMapping);const Ci=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Tt=Ci!==void 0?Ci.length:0,je=Ye.get(F),_f=g.state.lights;if(re===!0&&(ce===!0||A!==M)){const bn=A===M&&F.id===R;ye.setState(F,A,bn)}let At=!1;F.version===je.__version?(je.needsLights&&je.lightsStateVersion!==_f.state.version||je.outputColorSpace!==Ce||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||je.envMap!==Re||F.fog===!0&&je.fog!==me||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ye.numPlanes||je.numIntersection!==ye.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==be||je.morphTargets!==ke||je.morphNormals!==xt||je.morphColors!==wt||je.toneMapping!==Bn||Oe.isWebGL2===!0&&je.morphTargetsCount!==Tt)&&(At=!0):(At=!0,je.__version=F.version);let Gr=je.currentProgram;At===!0&&(Gr=hl(F,O,X));let Km=!1,jo=!1,yf=!1;const on=Gr.getUniforms(),Vr=je.uniforms;if(Le.useProgram(Gr.program)&&(Km=!0,jo=!0,yf=!0),F.id!==R&&(R=F.id,jo=!0),Km||M!==A){on.setValue(k,"projectionMatrix",A.projectionMatrix),on.setValue(k,"viewMatrix",A.matrixWorldInverse);const bn=on.map.cameraPosition;bn!==void 0&&bn.setValue(k,$e.setFromMatrixPosition(A.matrixWorld)),Oe.logarithmicDepthBuffer&&on.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&on.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,jo=!0,yf=!0)}if(X.isSkinnedMesh){on.setOptional(k,X,"bindMatrix"),on.setOptional(k,X,"bindMatrixInverse");const bn=X.skeleton;bn&&(Oe.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),on.setValue(k,"boneTexture",bn.boneTexture,He),on.setValue(k,"boneTextureSize",bn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xf=j.morphAttributes;if((xf.position!==void 0||xf.normal!==void 0||xf.color!==void 0&&Oe.isWebGL2===!0)&&Te.update(X,j,Gr),(jo||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,on.setValue(k,"receiveShadow",X.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Vr.envMap.value=Re,Vr.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),jo&&(on.setValue(k,"toneMappingExposure",m.toneMappingExposure),je.needsLights&&dM(Vr,yf),me&&F.fog===!0&&te.refreshFogUniforms(Vr,me),te.refreshMaterialUniforms(Vr,F,W,Y,ge),Lc.upload(k,je.uniformsList,Vr,He)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Lc.upload(k,je.uniformsList,Vr,He),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&on.setValue(k,"center",X.center),on.setValue(k,"modelViewMatrix",X.modelViewMatrix),on.setValue(k,"normalMatrix",X.normalMatrix),on.setValue(k,"modelMatrix",X.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const bn=F.uniformsGroups;for(let Sf=0,pM=bn.length;Sf<pM;Sf++)if(Oe.isWebGL2){const Zm=bn[Sf];Ae.update(Zm,Gr),Ae.bind(Zm,Gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gr}function dM(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function hM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,O,j){Ye.get(A.texture).__webglTexture=O,Ye.get(A.depthTexture).__webglTexture=j;const F=Ye.get(A);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=j===void 0,F.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const j=Ye.get(A);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,j=0){E=A,S=O,b=j;let F=!0,X=null,me=!1,Me=!1;if(A){const Re=Ye.get(A);Re.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(k.FRAMEBUFFER,null),F=!1):Re.__webglFramebuffer===void 0?He.setupRenderTarget(A):Re.__hasExternalTextures&&He.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const be=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(be[O])?X=be[O][j]:X=be[O],me=!0):Oe.isWebGL2&&A.samples>0&&He.useMultisampledRTT(A)===!1?X=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(be)?X=be[j]:X=be,T.copy(A.viewport),z.copy(A.scissor),K=A.scissorTest}else T.copy(H).multiplyScalar(W).floor(),z.copy(L).multiplyScalar(W).floor(),K=V;if(Le.bindFramebuffer(k.FRAMEBUFFER,X)&&Oe.drawBuffers&&F&&Le.drawBuffers(A,X),Le.viewport(T),Le.scissor(z),Le.setScissorTest(K),me){const Re=Ye.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,j)}else if(Me){const Re=Ye.get(A.texture),Ve=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,j||0,Ve)}R=-1},this.readRenderTargetPixels=function(A,O,j,F,X,me,Me){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){Le.bindFramebuffer(k.FRAMEBUFFER,Ce);try{const Re=A.texture,Ve=Re.format,be=Re.type;if(Ve!==li&&tt.convert(Ve)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=be===Or&&(we.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&we.has("EXT_color_buffer_float"));if(be!==Cr&&tt.convert(be)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===_r&&(Oe.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-F&&j>=0&&j<=A.height-X&&k.readPixels(O,j,F,X,tt.convert(Ve),tt.convert(be),me)}finally{const Re=E!==null?Ye.get(E).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,O,j=0){const F=Math.pow(2,-j),X=Math.floor(O.image.width*F),me=Math.floor(O.image.height*F);He.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,A.x,A.y,X,me),Le.unbindTexture()},this.copyTextureToTexture=function(A,O,j,F=0){const X=O.image.width,me=O.image.height,Me=tt.convert(j.format),Ce=tt.convert(j.type);He.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,F,A.x,A.y,X,me,Me,Ce,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,F,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,Me,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,F,A.x,A.y,Me,Ce,O.image),F===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(A,O,j,F,X=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,Ce=A.max.z-A.min.z+1,Re=tt.convert(F.format),Ve=tt.convert(F.type);let be;if(F.isData3DTexture)He.setTexture3D(F,0),be=k.TEXTURE_3D;else if(F.isDataArrayTexture)He.setTexture2DArray(F,0),be=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,F.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,F.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),wt=k.getParameter(k.UNPACK_SKIP_PIXELS),Bn=k.getParameter(k.UNPACK_SKIP_ROWS),Ci=k.getParameter(k.UNPACK_SKIP_IMAGES),Tt=j.isCompressedTexture?j.mipmaps[0]:j.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?k.texSubImage3D(be,X,O.x,O.y,O.z,me,Me,Ce,Re,Ve,Tt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(be,X,O.x,O.y,O.z,me,Me,Ce,Re,Tt.data)):k.texSubImage3D(be,X,O.x,O.y,O.z,me,Me,Ce,Re,Ve,Tt),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Bn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ci),X===0&&F.generateMipmaps&&k.generateMipmap(be),Le.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?He.setTextureCube(A,0):A.isData3DTexture?He.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?He.setTexture2DArray(A,0):He.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){S=0,b=0,E=null,Le.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Nm?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===ff?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?fa:US}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===fa?Vt:pi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ZD extends eM{}ZD.prototype.isWebGL1Renderer=!0;class QD extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class mf extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const b_=new D,T_=new D,A_=new ht,Od=new Om,lc=new ul;class JD extends tn{constructor(e=new Jn,n=new mf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,a=n.count;r<a;r++)b_.fromBufferAttribute(n,r-1),T_.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=b_.distanceTo(T_);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=a,e.ray.intersectsSphere(lc)===!1)return;A_.copy(r).invert(),Od.copy(e.ray).applyMatrix4(A_);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new D,u=new D,f=new D,d=new D,p=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const h=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let m=h,x=_-1;m<x;m+=p){const S=v.getX(m),b=v.getX(m+1);if(c.fromBufferAttribute(g,S),u.fromBufferAttribute(g,b),Od.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||n.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let m=h,x=_-1;m<x;m+=p){if(c.fromBufferAttribute(g,m),u.fromBufferAttribute(g,m+1),Od.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||n.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}const C_=new D,R_=new D;class eU extends JD{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,a=n.count;r<a;r+=2)C_.fromBufferAttribute(n,r),R_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+C_.distanceTo(R_);e.setAttribute("lineDistance",new Un(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tM extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const P_=new ht,cp=new Om,cc=new ul,uc=new D;class nM extends tn{constructor(e=new Jn,n=new tM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(r),cc.radius+=a,e.ray.intersectsSphere(cc)===!1)return;P_.copy(r).invert(),cp.copy(e.ray).applyMatrix4(P_);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=d,y=p;v<y;v++){const g=c.getX(v);uc.fromBufferAttribute(f,g),L_(uc,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let v=d,y=p;v<y;v++)uc.fromBufferAttribute(f,v),L_(uc,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function L_(t,e,n,i,r,a,o){const s=cp.distanceSqToPoint(t);if(s<n){const l=new D;cp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class tU{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),a=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),n.push(a),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const a=i.length;let o;n?o=n:o=e*i[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(a-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(a-1)}getTangent(e,n){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=n||(o.isVector2?new qe:new D);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new D,r=[],a=[],o=[],s=new D,l=new ht;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new D)}a[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),o[p]=o[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();const v=Math.acos(Wt(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(s,v))}o[p].crossVectors(r[p],a[p])}if(n===!0){let p=Math.acos(Wt(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(p=-p);for(let v=1;v<=e;v++)a[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],a[v])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Fm(){let t=0,e=0,n=0,i=0;function r(a,o,s,l){t=a,e=s,n=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,f){let d=(o-a)/c-(s-a)/(c+u)+(s-o)/u,p=(s-o)/u-(l-o)/(u+f)+(l-s)/f;d*=u,p*=u,r(o,s,d,p)},calc:function(a){const o=a*a,s=o*a;return t+e*a+n*o+i*s}}}const fc=new D,kd=new Fm,Fd=new Fm,zd=new Fm;class nU extends tU{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new D){const i=n,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(fc.subVectors(r[0],r[1]).add(r[0]),c=fc);const f=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(fc.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=fc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),kd.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,v,y,g),Fd.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,v,y,g),zd.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,v,y,g)}else this.curveType==="catmullrom"&&(kd.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Fd.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),zd.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(kd.calc(l),Fd.calc(l),zd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class iM extends Hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Um,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iU extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Um,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const I_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rU{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const aU=new rU;class zm{constructor(e){this.manager=e!==void 0?e:aU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zm.DEFAULT_MATERIAL_NAME="__DEFAULT";class oU extends zm{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=I_.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=Zs("img");function l(){u(),I_.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class up extends zm{constructor(e){super(e)}load(e,n,i,r){const a=new wn,o=new oU(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class sU extends tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class lU extends sU{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=D_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=D_();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function D_(){return(typeof performance>"u"?Date:performance).now()}class U_{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Wt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Im}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Im);const go=({colors:t})=>({cell:e})=>t[(e||0)%t.length],aM=`
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * (10.0 / - mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
`,oM=`
uniform float opacity;
varying vec3 vColor;

void main() {
  if (length(gl_PointCoord - vec2( 0.5, 0.5 )) > 0.475) discard;

  gl_FragColor = vec4(vColor, opacity);
}
`,vo=new Array(128).fill().map((t,e)=>`hsl(${e*29%360}, 60%, 60%)`),Bd={faces:{enabled:!0,useColors:!0,colorGenerator:go,colors:vo,reuse:"none",split:"cells",splitScale:100,material:new iM({transparent:!0,opacity:.25,blending:la,depthWrite:!1,side:Ln,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:go,colors:vo,reuse:"faces",split:"cells",splitScale:100,material:new mf({transparent:!0,opacity:.25,blending:ji,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:go,colors:vo,reuse:"faces",split:"none",splitScale:100,material:new hn({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:aM,fragmentShader:oM,transparent:!0,blending:ji})}},cU=["all","faces","none"],uU=["none","cells","faces"];class fU extends oo{constructor(e,{all:n={},faces:i={},edges:r={},points:a={}}={all:{},faces:{},edges:{},points:{}}){super(),this.shape=e,this.config={faces:{...Bd.faces,...i,...n},edges:{...Bd.edges,...r,...n},points:{...Bd.points,...a,...n}},this.parts={};const o={faces:xn,edges:eU,points:nM};["points","edges","faces"].map((s,l)=>{if(this.config[s].enabled){const c=typeof this.config[s].reuse=="string"?cU.indexOf(this.config[s].reuse):this.config[s].reuse;let u=typeof this.config[s].split=="string"?uU.indexOf(this.config[s].split):this.config[s].split;u>c&&(console.warn(`Geometry order ${u} can’t be superior to unfold order ${c}`),u=c);const f=this.getVerticesIndices(c,u),d=this.getIndices(c,u,l+1),p=this.buildGeometry(f,this.config[s].useColors,s);d&&this.setIndices(p,d),this[s]=this.createMesh(p,this.config[s].material,o[s]),this.config[s].useColors&&this.setColor(p,f,c,u,this.config[s].colorGenerator,this.config[s].colors,s),this.parts[s]={geometry:p,verticesIndices:f},this.add(this[s])}})}initGeometry(e,n){}getVerticesIndices(e,n){const i=r=>this.shape.faces[r];if(e===0){if(n===0)return new Array(this.shape.vertices.length).fill().map((r,a)=>a)}else if(e===1){if(n===0)return this.shape.cells.map(r=>[...new Set(r.map(i).flat())]).flat();if(n===1)return this.shape.cells.map(r=>[...new Set(r.map(i).flat())])}else if(e===2){if(n===0)return this.shape.cells.map(r=>r.map(i).flat()).flat();if(n===1)return this.shape.cells.map(r=>r.map(i).flat());if(n===2)return this.shape.cells.map(r=>r.map(i))}}setColor(e,n,i,r,a,o,s){const l=a({shape:this.shape,colors:o.map(u=>new Ne(u))}),c=u=>this.shape.faces[u];if(i===0){if(r===0){let u=0;n.forEach(f=>{const[d,p,v]=l({vertex:f,type:s}).toArray();e.attributes.color.array[u++]=d,e.attributes.color.array[u++]=p,e.attributes.color.array[u++]=v}),e.attributes.color.needsUpdate=!0}}else if(i===1){if(r===0){let u=0;this.shape.cells.forEach((f,d)=>{[...new Set(f.map(c).flat())].map(p=>{const[v,y,g]=l({cell:d,vertex:p,type:s}).toArray();e.attributes.color.array[u++]=v,e.attributes.color.array[u++]=y,e.attributes.color.array[u++]=g})}),e.attributes.color.needsUpdate=!0}r===1&&this.shape.cells.forEach((u,f)=>{let d=0;[...new Set(u.map(c).flat())].map(p=>{const[v,y,g]=l({cell:f,vertex:p,type:s}).toArray();e[f].attributes.color.array[d++]=v,e[f].attributes.color.array[d++]=y,e[f].attributes.color.array[d++]=g}),e[f].attributes.color.needsUpdate=!0})}else if(i===2)if(r===0){let u=0;this.shape.cells.forEach((f,d)=>{f.map(c).map((p,v)=>{p.forEach(y=>{const[g,h,_]=l({cell:d,face:v,vertex:y,type:s}).toArray();e.attributes.color.array[u++]=g,e.attributes.color.array[u++]=h,e.attributes.color.array[u++]=_})})}),e.attributes.color.needsUpdate=!0}else r===1?this.shape.cells.forEach((u,f)=>{let d=0;u.map(c).map((p,v)=>{p.forEach(y=>{const[g,h,_]=l({cell:f,face:v,vertex:y,type:s}).toArray();e[f].attributes.color.array[d++]=g,e[f].attributes.color.array[d++]=h,e[f].attributes.color.array[d++]=_})}),e[f].attributes.color.needsUpdate=!0}):r===2&&this.shape.cells.forEach((u,f)=>{u.map(c).map((d,p)=>{let v=0;d.forEach(y=>{const[g,h,_]=l({cell:f,face:p,vertex:y,type:s}).toArray();e[f][p].attributes.color.array[v++]=g,e[f][p].attributes.color.array[v++]=h,e[f][p].attributes.color.array[v++]=_}),e[f][p].attributes.color.needsUpdate=!0})})}getIndices(e,n,i){const r=o=>this.shape.faces[o];let a;if(i===0||i===1)a=null;else if(i===2){if(a=[],e===0)n===0&&this.shape.cells.forEach(o=>o.map(r).forEach(s=>{s.forEach((l,c)=>{a.push(l,s[(c+1)%s.length])})}));else if(e===1)if(n===0){let o=0;this.shape.cells.forEach(s=>{const l=[...new Set(s.map(r).flat())];s.map(r).forEach(c=>{c.forEach((u,f)=>{a.push(o+l.indexOf(u),o+l.indexOf(c[(f+1)%c.length]))})}),o+=l.length})}else n===1&&this.shape.cells.forEach((o,s)=>{const l=[...new Set(o.map(r).flat())],c=[];o.map(r).forEach(u=>{u.forEach((f,d)=>{c.push(l.indexOf(f),l.indexOf(u[(d+1)%u.length]))})}),a.push(c)});else if(e===2)if(n===0){let o=0;this.shape.cells.forEach(s=>{s.map(r).forEach(l=>{l.forEach((c,u)=>{a.push(o+u,o+(u+1)%l.length)}),o+=l.length})})}else n===1?this.shape.cells.forEach(o=>{let s=0;const l=[];o.map(r).forEach(c=>{c.forEach((u,f)=>{l.push(s+f,s+(f+1)%c.length)}),s+=c.length}),a.push(l)}):n===2&&this.shape.cells.forEach(o=>{const s=[];o.map(r).forEach(l=>{const c=[];l.forEach((u,f)=>{c.push(f,(f+1)%l.length)}),s.push(c)}),a.push(s)})}else if(i===3){if(a=[],e===0)this.shape.cells.forEach(o=>o.map(r).forEach(s=>{new Array(s.length-2).fill().forEach((l,c)=>{a.push(s[0],s[c+1],s[c+2])})}));else if(e===1)if(n===0){let o=0;this.shape.cells.forEach(s=>{const l=[...new Set(s.map(r).flat())];s.map(r).forEach(c=>{new Array(c.length-2).fill().forEach((u,f)=>{a.push(o+l.indexOf(c[0]),o+l.indexOf(c[f+1]),o+l.indexOf(c[f+2]))})}),o+=l.length})}else n===1&&this.shape.cells.forEach((o,s)=>{const l=[...new Set(o.map(r).flat())],c=[];o.map(r).forEach(u=>{new Array(u.length-2).fill().forEach((f,d)=>{c.push(l.indexOf(u[0]),l.indexOf(u[d+1]),l.indexOf(u[d+2]))})}),a.push(c)});else if(e===2)if(n===0){let o=0;this.shape.cells.forEach(s=>{s.map(r).forEach(l=>{new Array(l.length-2).fill().forEach((c,u)=>{a.push(o,o+u+1,o+u+2)}),o+=l.length})})}else n===1?this.shape.cells.forEach(o=>{let s=0;const l=[];o.map(r).forEach(c=>{new Array(c.length-2).fill().forEach((u,f)=>{l.push(s,s+f+1,s+f+2)}),s+=c.length}),a.push(l)}):n===2&&this.shape.cells.forEach(o=>{const s=[];o.map(r).forEach(l=>{const c=[];new Array(l.length-2).fill().forEach((u,f)=>{c.push(0,f+1,f+2)}),s.push(c)}),a.push(s)})}return a}buildGeometry(e,n,i,r=0){const[a]=e;if(Array.isArray(a))return e.map(l=>this.buildGeometry(l,n,i,r+1));const o=e.length,s=new Jn;return s.setAttribute("position",new Yn(new Float32Array(3*o),3).setUsage(Fv)),n&&s.setAttribute("color",new Yn(new Float32Array(3*o),3).setUsage(Fv)),s.name=`${i} geometry, level ${r}`,s}setIndices(e,n){return Array.isArray(e)?e.map((i,r)=>this.setIndices(i,n[r])):e.setIndex(n)}createMesh(e,n,i){if(Array.isArray(e)){const r=new oo;return r.add(...e.map((a,o)=>this.createMesh(a,Array.isArray(n)?n[o]:n,i))),r}return new i(e,n)}walk(e,n,i){if(Array.isArray(e))return e.forEach((r,a)=>this.walk(r,n[a],i));i(e,n)}setPoint(e,n,i,r){this.walk(e,n,(a,o)=>{let s=0;o.forEach(l=>{const[c,u,f]=r[l];a.attributes.position.array[s++]=c,a.attributes.position.array[s++]=u,a.attributes.position.array[s++]=f}),a.attributes.position.needsUpdate=!0,i==="faces"&&(a.computeVertexNormals(),a.attributes.normal.needsUpdate=!0)})}recenter(e,n){if(e.isGroup)return e.children.map(r=>this.recenter(r,n));const i=new D;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getCenter(i),e.geometry.center(),e.position.copy(i),e.scale.setScalar(n/100)}update(e){e.prepare(this.shape.vertices);const n=this.shape.vertices.map(e.project.bind(e));Object.entries(this.parts).forEach(([i,r])=>{this.config[i].enabled&&(this.setPoint(r.geometry,r.verticesIndices,i,n),this.recenter(this[i],this.config[i].splitScale))})}}class dU{constructor(e,n,i){this.fov=e||Math.PI/2,this.w=n||10,this.wt=0,this.wSlice=0,this.rotation=i||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}_directProject([e,n,i,r]){const a=1+r*this.fov/this.w;return[e/a,n/a,i/a]}project([e,n,i,r]){return this._directProject(this.rotatePoint([e,n,i,r]))}_directSlice([e,n,i,r],[a,o,s,l]){if((this.wSlice-r)*(this.wSlice-l)>=0)return;const c=(this.wSlice-r)/(l-r),u=e+c*(a-e),f=n+c*(o-n),d=i+c*(s-i);return[u,f,d]}slice(e,n){return this._directSlice(this.rotatePoint(e),this.rotatePoint(n))}shiftSlice(e,n,i){this.wt+=e/100;const r=(1+Math.cos(this.wt))*.5;this.wSlice=n+(i-n)*r}rotate(e){Object.keys(this.rotation).forEach(n=>{this.rotation[n]=(this.rotation[n]+(e[n]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,n,i,r]){const{xy:a,xz:o,xw:s,yz:l,yw:c,zw:u}=this.rotation,f=Math.cos(a),d=Math.sin(a),p=Math.cos(o),v=Math.sin(o),y=Math.cos(s),g=Math.sin(s),h=Math.cos(l),_=Math.sin(l),m=Math.cos(c),x=Math.sin(c),S=Math.cos(u),b=Math.sin(u);let E=e;return e=e*f+n*d,n=n*f-E*d,E=e,e=e*p+i*v,i=i*p-E*v,E=e,e=e*y+r*g,r=r*y-E*g,E=n,n=n*h+i*_,i=i*h-E*_,E=n,n=n*m+r*x,r=r*m-E*x,E=i,i=i*S+r*b,r=r*S-E*b,[e,n,i,r]}prepare(){}}new iM({side:Ln,shininess:50,vertexColors:!0}),new mf({transparent:!0,opacity:.25,blending:ji,depthWrite:!1,vertexColors:!0,linewidth:2}),new hn({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:aM,fragmentShader:oM,transparent:!0,blending:ji});var hU={vertices:[[-1,0,0,0],[1,0,0,0],[0,-1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,1,0],[0,0,0,-1],[0,0,0,1]],faces:[[0,2,4],[0,2,5],[0,2,6],[0,2,7],[0,3,4],[0,3,5],[0,3,6],[0,3,7],[0,4,6],[0,4,7],[0,5,6],[0,5,7],[1,2,4],[1,2,5],[1,2,6],[1,2,7],[1,3,4],[1,3,5],[1,3,6],[1,3,7],[1,4,6],[1,4,7],[1,5,6],[1,5,7],[2,4,6],[2,4,7],[2,5,6],[2,5,7],[3,4,6],[3,4,7],[3,5,6],[3,5,7]],cells:[[0,2,8,24],[0,3,9,25],[1,2,10,26],[1,3,11,27],[4,6,8,28],[4,7,9,29],[5,6,10,30],[5,7,11,31],[12,14,20,24],[12,15,21,25],[13,14,22,26],[13,15,23,27],[16,18,20,28],[16,19,21,29],[17,18,22,30],[17,19,23,31]]},N_={vertices:[[1,1,1,-1/Math.sqrt(5)],[1,-1,-1,-1/Math.sqrt(5)],[-1,1,-1,-1/Math.sqrt(5)],[-1,-1,1,-1/Math.sqrt(5)],[0,0,0,Math.sqrt(5)-1/Math.sqrt(5)]],faces:[[1,2,3],[0,1,2],[0,1,3],[0,3,2],[0,4,1],[0,2,4],[0,3,4],[2,4,3],[1,3,4],[1,4,2]],cells:[[0,1,2,3],[1,5,4,9],[3,6,5,7],[2,4,6,8],[0,7,8,9]]};const Bm=([t,e],[n,i],[r,a],[o,s])=>({vertices:[[e,i,a,s],[e,i,r,s],[e,n,r,s],[e,n,a,s],[t,i,a,s],[t,i,r,s],[t,n,r,s],[t,n,a,s],[e,i,a,o],[e,i,r,o],[e,n,r,o],[e,n,a,o],[t,i,a,o],[t,i,r,o],[t,n,r,o],[t,n,a,o]],faces:[[0,1,2,3],[0,4,5,1],[0,3,7,4],[3,2,6,7],[1,5,6,2],[4,7,6,5],[0,1,9,8],[4,5,13,12],[3,2,10,11],[7,6,14,15],[0,3,11,8],[4,7,15,12],[1,2,10,9],[5,6,14,13],[0,4,12,8],[1,5,13,9],[2,6,14,10],[3,7,15,11],[11,10,9,8],[9,13,12,8],[12,15,11,8],[15,14,10,11],[10,14,13,9],[13,14,15,12]],cells:[[0,1,2,3,4,5],[0,6,12,8,10,18],[1,6,14,7,15,19],[4,12,16,13,15,22],[3,8,16,9,17,21],[2,10,17,11,14,20],[5,7,13,9,11,23],[18,19,20,21,22,23]]}),pU=Bm([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),sM=t=>Bm([-t,t],[-t,t],[-t,t],[-t,t]);var mU=sM(1);const Hm=([t,e],[n,i],[r,a],o)=>({vertices:[[t,n,r,0],[t,n,a,0],[t,i,r,0],[t,i,a,0],[e,n,r,0],[e,n,a,0],[e,i,r,0],[e,i,a,0],[0,0,0,o]],faces:[[1,5,8],[4,5,8],[0,4,8],[0,1,8],[0,1,5,4],[2,6,8],[4,6,8],[0,2,8],[0,2,6,4],[1,3,8],[2,3,8],[0,1,3,2],[5,7,8],[6,7,8],[4,5,7,6],[3,7,8],[2,3,7,6],[1,3,7,5]],cells:[[0,1,2,3,4],[5,6,2,7,8],[9,10,7,3,11],[12,13,6,1,14],[15,13,5,10,16],[15,12,0,9,17],[4,8,11,14,16,17]]}),gU=t=>Hm([-t,t],[-t,t],[-t,t],t),vU=Hm([-.25,.25],[-.5,.5],[-.75,.75],1),Gm=([t,e],[n,i],[r,a],[o,s])=>({vertices:[[0,0,0,o],[t,n,r,0],[t,n,a,0],[t,i,r,0],[t,i,a,0],[e,n,r,0],[e,n,a,0],[e,i,r,0],[e,i,a,0],[0,0,0,s]],faces:[[6,8,9],[7,8,9],[5,7,9],[5,6,9],[5,6,8,7],[4,8,9],[3,7,9],[3,4,9],[3,4,8,7],[2,6,9],[2,4,9],[2,4,8,6],[1,5,9],[1,3,9],[1,3,7,5],[1,2,9],[1,2,6,5],[1,2,4,3],[0,7,8],[0,6,8],[0,5,6],[0,5,7],[0,4,8],[0,3,4],[0,3,7],[0,2,4],[0,2,6],[0,1,3],[0,1,5],[0,1,2]],cells:[[0,1,2,3,4],[5,1,6,7,8],[5,0,9,10,11],[6,2,12,13,14],[9,3,12,15,16],[10,7,13,15,17],[18,19,20,21,4],[18,22,23,24,8],[19,22,25,26,11],[21,24,27,28,14],[20,26,29,28,16],[23,25,29,27,17]]}),_U=t=>Gm([-t,t],[-t,t],[-t,t],[-t,t]),yU=Gm([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),Vm=([t,e],[n,i],[r,a],o)=>({vertices:[[t,0,0,0],[0,n,0,0],[0,0,r,0],[0,0,a,0],[0,i,0,0],[e,0,0,0],[0,0,0,o]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),xU=t=>Vm([-t,t],[-t,t],[-t,t],t),SU=Vm([-.25,.25],[-.5,.5],[-.75,.75],1),Wm=([t,e],[n,i],[r,a],[o,s])=>({vertices:[[t,0,0,0],[0,n,0,0],[0,0,r,0],[0,0,0,o],[0,0,0,s],[0,0,a,0],[0,i,0,0],[e,0,0,0]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),MU=t=>Wm([-t,t],[-t,t],[-t,t],[-t,t]),EU=Wm([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]);var wU={vertices:[[-.5,-.5,-.5,-.5],[-.5,-.5,-.5,.5],[-.5,-.5,.5,-.5],[-.5,-.5,.5,.5],[-1,0,0,0],[-.5,.5,-.5,-.5],[-.5,.5,-.5,.5],[-.5,.5,.5,-.5],[-.5,.5,.5,.5],[0,-1,0,0],[0,0,-1,0],[0,0,0,-1],[0,0,0,1],[0,0,1,0],[0,1,0,0],[.5,-.5,-.5,-.5],[.5,-.5,-.5,.5],[.5,-.5,.5,-.5],[.5,-.5,.5,.5],[1,0,0,0],[.5,.5,-.5,-.5],[.5,.5,-.5,.5],[.5,.5,.5,-.5],[.5,.5,.5,.5]],faces:[[14,20,22],[11,20,22],[7,14,22],[7,11,22],[5,14,20],[5,11,20],[5,7,14],[5,7,11],[11,15,17],[9,15,17],[2,11,17],[2,9,17],[0,11,15],[0,9,15],[0,2,11],[0,2,9],[12,16,21],[10,16,21],[6,12,21],[6,10,21],[1,12,16],[1,10,16],[1,6,12],[1,6,10],[13,17,18],[9,17,18],[3,13,18],[3,9,18],[2,13,17],[2,3,13],[2,3,9],[12,16,18],[9,16,18],[3,12,18],[1,9,16],[1,3,12],[1,3,9],[5,6,10],[0,5,10],[0,1,10],[4,5,6],[1,4,6],[0,4,5],[0,1,4],[10,15,16],[9,15,16],[0,10,15],[0,1,9],[2,7,11],[0,5,11],[4,5,7],[2,4,7],[0,2,4],[14,20,21],[10,20,21],[6,14,21],[5,10,20],[5,6,14],[13,17,22],[11,17,22],[7,13,22],[2,7,13],[2,3,4],[1,3,4],[6,8,12],[3,8,12],[4,6,8],[3,4,8],[7,8,13],[3,8,13],[4,7,8],[17,18,19],[16,18,19],[15,17,19],[15,16,19],[7,8,14],[6,8,14],[11,15,20],[10,15,20],[19,20,21],[16,19,21],[15,19,20],[19,20,22],[17,19,22],[19,21,23],[12,21,23],[18,19,23],[12,18,23],[14,21,23],[8,14,23],[8,12,23],[13,18,23],[8,13,23],[19,22,23],[13,22,23],[14,22,23]],cells:[[0,1,2,3,4,5,6,7],[8,9,10,11,12,13,14,15],[16,17,18,19,20,21,22,23],[24,25,26,27,28,11,29,30],[31,32,33,27,20,34,35,36],[37,23,38,39,40,41,42,43],[44,45,21,34,46,13,39,47],[7,48,49,14,50,51,42,52],[53,54,55,19,4,56,57,37],[58,59,60,3,28,10,61,48],[30,36,15,47,62,63,52,43],[64,65,22,35,66,67,41,63],[68,69,61,29,70,67,51,62],[71,72,73,74,25,32,9,45],[75,76,6,57,70,66,50,40],[77,78,5,56,12,46,49,38],[79,54,80,17,81,78,74,44],[82,1,83,59,81,77,73,8],[84,85,86,87,80,16,72,31],[88,85,89,90,55,18,76,64],[91,87,92,90,26,33,69,65],[93,94,86,91,83,58,71,24],[95,94,89,92,2,60,75,68],[93,95,84,88,82,0,79,53]]};const lM=(t,[e,n,i=16,r=!1,a=!0],[o,s,l=16,c=!1,u=!0])=>{const f=[],d=[],p=[];for(let v=0;v<l;v++){let y=[];for(let g=0;g<i;g++){f.push(t(e+g*(n-e)/(i-(r?1:0)),o+v*(s-o)/(l-(c?1:0))));const h=g+1<i?g+1:0,_=v+1<l?v+1:0;(a||g+1<i)&&(u||v+1<l)&&(d.push([g+v*i,h+v*i,h+_*i,g+_*i]),y.push(d.length-1))}y.length&&p.push(y)}return{vertices:f,faces:d,cells:p}},cM=(t,e,n=32)=>lM((i,r)=>[t*Math.cos(i),t*Math.sin(i),e*Math.cos(r),e*Math.sin(r)],[-Math.PI,Math.PI,n],[-Math.PI,Math.PI,n]),bU=(t,e=32)=>cM(t,t,e);cM(1,.5);bU(1);lM((t,e)=>[Math.cos(t)*Math.sin(e),Math.sin(t)*Math.sin(e),Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t)],[-Math.PI,Math.PI,32],[-Math.PI,Math.PI,32]);const mi=(t,[e,n,i=16,r=!1,a=!0],[o,s,l=16,c=!1,u=!0],[f,d,p=16,v=!1,y=!0],g={u:!0,v:!0,w:!0})=>{const h=[],_=[],m=[],x=[],S=[];for(let b=0;b<p;b++){let E=[];for(let R=0;R<l;R++){let M=S[R]||[];for(let T=0;T<i;T++){let z=x[T]||[];h.push(t(e+T*(n-e)/(i-(r?1:0)),o+R*(s-o)/(l-(c?1:0)),f+b*(d-f)/(p-(v?1:0))));const K=T+1<i?T+1:0,q=R+1<l?R+1:0,I=b+1<p?b+1:0;(a||T+1<i)&&(u||R+1<l)&&(_.push([T+R*i+b*i*l,K+R*i+b*i*l,K+q*i+b*i*l,T+q*i+b*i*l]),E.push(_.length-1)),(a||T+1<i)&&(y||b+1<p)&&(_.push([T+R*i+b*i*l,T+R*i+I*i*l,K+R*i+I*i*l,K+R*i+b*i*l]),M.push(_.length-1)),(u||R+1<l)&&(y||b+1<p)&&(_.push([T+R*i+b*i*l,T+R*i+I*i*l,T+q*i+I*i*l,T+q*i+b*i*l]),z.push(_.length-1)),x[T]=z}S[R]=M}g.w&&m.push(E)}return g.v&&S.map(b=>m.push(b)),g.u&&x.map(b=>m.push(b)),{vertices:h,faces:_,cells:m}},TU=t=>mi((e,n,i)=>[t*Math.cos(e),t*Math.sin(e)*Math.cos(n),t*Math.sin(e)*Math.sin(n)*Math.cos(i),t*Math.sin(e)*Math.sin(n)*Math.sin(i)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]);TU(1);const AU=(t,e,n)=>mi((i,r,a)=>[t*Math.cos(i),(e+t*Math.sin(i))*Math.cos(r),(n+(e+t*Math.sin(i))*Math.sin(r))*Math.cos(a),(n+(e+t*Math.sin(i))*Math.sin(r))*Math.sin(a)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]);AU(.25,.5,1);mi((t,e,n)=>[2*Math.cos(t)*Math.cos(e),2*Math.cos(t)*Math.sin(e),2*Math.sin(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]);mi((t,e,n)=>[n+2*Math.cos(t)*Math.cos(e),n+2*Math.cos(t)*Math.sin(e),n+2*Math.sin(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]);mi((t,e,n)=>[Math.sin(t)*Math.cos(e),Math.sin(t)*Math.sin(e),Math.cos(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0});mi((t,e,n)=>[(1+.5*Math.cos(t))*Math.cos(e),(1+.5*Math.cos(t))*Math.sin(e),.5*Math.cos(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0});mi((t,e,n)=>[Math.cos(t),Math.sin(t),e,n],[-Math.PI,Math.PI,32,!0],[-1,1,2,!0],[-1,1,2,!0],{u:!1,v:!0,w:!0});mi((t,e,n)=>[.25*Math.cos(t)+1*Math.cos(t)*Math.cos(n),.25*Math.sin(t)+1*Math.sin(t)*Math.cos(n),.75*Math.cos(e)+1*Math.cos(e)*Math.sin(n),.75*Math.sin(e)+1*Math.sin(e)*Math.sin(n)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],{u:!0,v:!1,w:!0});mi((t,e,n)=>[.5*Math.cos(t)*Math.cos(e)*Math.cos(n)+1*Math.cos(e)*Math.cos(n),.5*Math.cos(t)*Math.cos(e)*Math.sin(n)+1*Math.cos(e)*Math.sin(n),.5*Math.cos(t)*Math.sin(e)+1*Math.sin(e),.5*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]);mi((t,e,n)=>[.5*Math.cos(t)*Math.cos(e)*Math.cos(n)+1*Math.cos(n),.5*Math.cos(t)*Math.cos(e)*Math.sin(n)+1*Math.sin(n),.5*Math.cos(t)*Math.sin(e),.5*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]);mi((t,e,n)=>[t,e,n,t*e*n],[-1,1,2,!0],[-1,1,2,!0],[-1,1,2,!0]);const CU={cuboidPyramid:vU,generateCubicPyramid:gU,generateCuboidPyramid:Hm,cuboidBiPyramid:yU,generateCubicBiPyramid:_U,generateCuboidBiPyramid:Gm,hexadecachoron:hU,pentachoron:N_,icositetrachoron:wU,octahedraloidPyramid:SU,generateOctahedralPyramid:xU,generateOctahedraloidPyramid:Vm,octahedraloidBiPyramid:EU,generateOctahedralBiPyramid:MU,generateOctahedraloidBiPyramid:Wm,pentachoron:N_,tesseract:mU,hyperCuboid:pU,generateTesseract:sM,generateHyperCuboid:Bm};class Qs extends xn{constructor(e,n={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new _n;const i=this,r=n.color!==void 0?new Ne(n.color):new Ne(8355711),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,l=n.shader||Qs.ReflectorShader,c=n.multisample!==void 0?n.multisample:4,u=new xi,f=new D,d=new D,p=new D,v=new ht,y=new D(0,0,-1),g=new Et,h=new D,_=new D,m=new Et,x=new ht,S=this.camera,b=new Ai(a,o,{samples:c,type:Or}),E=new hn({name:l.name!==void 0?l.name:"unspecified",uniforms:fl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=b.texture,E.uniforms.color.value=r,E.uniforms.textureMatrix.value=x,this.material=E,this.onBeforeRender=function(R,M,T){if(d.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(T.matrixWorld),v.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(v),h.subVectors(d,p),h.dot(f)>0)return;h.reflect(f).negate(),h.add(d),v.extractRotation(T.matrixWorld),y.set(0,0,-1),y.applyMatrix4(v),y.add(p),_.subVectors(d,y),_.reflect(f).negate(),_.add(d),S.position.copy(h),S.up.set(0,1,0),S.up.applyMatrix4(v),S.up.reflect(f),S.lookAt(_),S.far=T.far,S.updateMatrixWorld(),S.projectionMatrix.copy(T.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(S.projectionMatrix),x.multiply(S.matrixWorldInverse),x.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(S.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const z=S.projectionMatrix;m.x=(Math.sign(g.x)+z.elements[8])/z.elements[0],m.y=(Math.sign(g.y)+z.elements[9])/z.elements[5],m.z=-1,m.w=(1+z.elements[10])/z.elements[14],g.multiplyScalar(2/g.dot(m)),z.elements[2]=g.x,z.elements[6]=g.y,z.elements[10]=g.z+1-s,z.elements[14]=g.w,i.visible=!1;const K=R.getRenderTarget(),q=R.xr.enabled,I=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(b),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(M,S),R.xr.enabled=q,R.shadowMap.autoUpdate=I,R.setRenderTarget(K);const B=T.viewport;B!==void 0&&R.state.viewport(B),i.visible=!0},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),i.material.dispose()}}}Qs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class Js extends xn{constructor(e,n={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new _n;const i=this,r=n.color!==void 0?new Ne(n.color):new Ne(8355711),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,l=n.shader||Js.RefractorShader,c=n.multisample!==void 0?n.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const f=new xi,d=new ht,p=new Ai(a,o,{samples:c,type:Or});this.material=new hn({uniforms:fl.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=p.texture,this.material.uniforms.textureMatrix.value=d;const v=function(){const m=new D,x=new D,S=new ht,b=new D,E=new D;return function(M){return m.setFromMatrixPosition(i.matrixWorld),x.setFromMatrixPosition(M.matrixWorld),b.subVectors(m,x),S.extractRotation(i.matrixWorld),E.set(0,0,1),E.applyMatrix4(S),b.dot(E)<0}}(),y=function(){const m=new D,x=new D,S=new Go,b=new D;return function(){i.matrixWorld.decompose(x,S,b),m.set(0,0,1).applyQuaternion(S).normalize(),m.negate(),f.setFromNormalAndCoplanarPoint(m,x)}}(),g=function(){const m=new xi,x=new Et,S=new Et;return function(E){u.matrixWorld.copy(E.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(E.projectionMatrix),u.far=E.far,m.copy(f),m.applyMatrix4(u.matrixWorldInverse),x.set(m.normal.x,m.normal.y,m.normal.z,m.constant);const R=u.projectionMatrix;S.x=(Math.sign(x.x)+R.elements[8])/R.elements[0],S.y=(Math.sign(x.y)+R.elements[9])/R.elements[5],S.z=-1,S.w=(1+R.elements[10])/R.elements[14],x.multiplyScalar(2/x.dot(S)),R.elements[2]=x.x,R.elements[6]=x.y,R.elements[10]=x.z+1-s,R.elements[14]=x.w}}();function h(m){d.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),d.multiply(m.projectionMatrix),d.multiply(m.matrixWorldInverse),d.multiply(i.matrixWorld)}function _(m,x,S){i.visible=!1;const b=m.getRenderTarget(),E=m.xr.enabled,R=m.shadowMap.autoUpdate;m.xr.enabled=!1,m.shadowMap.autoUpdate=!1,m.setRenderTarget(p),m.autoClear===!1&&m.clear(),m.render(x,u),m.xr.enabled=E,m.shadowMap.autoUpdate=R,m.setRenderTarget(b);const M=S.viewport;M!==void 0&&m.state.viewport(M),i.visible=!0}this.onBeforeRender=function(m,x,S){S.userData.refractor!==!0&&v(S)&&(y(),h(S),g(S),_(m,x,S))},this.getRenderTarget=function(){return p},this.dispose=function(){p.dispose(),i.material.dispose()}}}Js.RefractorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class gf extends xn{constructor(e,n={}){super(e),this.isWater=!0,this.type="Water";const i=this,r=n.color!==void 0?new Ne(n.color):new Ne(16777215),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,l=n.flowDirection||new qe(1,0),c=n.flowSpeed||.03,u=n.reflectivity||.02,f=n.scale||1,d=n.shader||gf.WaterShader,p=new up,v=n.flowMap||void 0,y=n.normalMap0||p.load("textures/water/Water_1_M_Normal.jpg"),g=n.normalMap1||p.load("textures/water/Water_2_M_Normal.jpg"),h=.15,_=h*.5,m=new ht,x=new rM;if(Qs===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(Js===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const S=new Qs(e,{textureWidth:a,textureHeight:o,clipBias:s}),b=new Js(e,{textureWidth:a,textureHeight:o,clipBias:s});S.matrixAutoUpdate=!1,b.matrixAutoUpdate=!1,this.material=new hn({uniforms:fl.merge([le.fog,d.uniforms]),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,transparent:!0,fog:!0}),v!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:v}):this.material.uniforms.flowDirection={type:"v2",value:l},y.wrapS=y.wrapT=qs,g.wrapS=g.wrapT=qs,this.material.uniforms.tReflectionMap.value=S.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=b.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=y,this.material.uniforms.tNormalMap1.value=g,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=m,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=_,this.material.uniforms.config.value.z=_,this.material.uniforms.config.value.w=f;function E(M){m.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),m.multiply(M.projectionMatrix),m.multiply(M.matrixWorldInverse),m.multiply(i.matrixWorld)}function R(){const M=x.getDelta(),T=i.material.uniforms.config;T.value.x+=c*M,T.value.y=T.value.x+_,T.value.x>=h?(T.value.x=0,T.value.y=_):T.value.y>=h&&(T.value.y=T.value.y-h)}this.onBeforeRender=function(M,T,z){E(z),R(),i.visible=!1,S.matrixWorld.copy(i.matrixWorld),b.matrixWorld.copy(i.matrixWorld),S.onBeforeRender(M,T,z),b.onBeforeRender(M,T,z),i.visible=!0}}}gf.WaterShader={uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new Et}},vertexShader:`

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,fragmentShader:`

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>

		}`};const RU={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class vf{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const PU=new qS(-1,1,1,-1,0,1),jm=new Jn;jm.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3));jm.setAttribute("uv",new Un([0,2,0,0,2,0],2));class LU{constructor(e){this._mesh=new xn(jm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PU)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class IU extends vf{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fl.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new LU(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class O_ extends vf{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class DU extends vf{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class UU{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new qe);this._width=i.width,this._height=i.height,n=new Ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Or}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IU(RU),this.copyPass.material.blending=Wi,this.clock=new rM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}O_!==void 0&&(o instanceof O_?i=!0:o instanceof DU&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new qe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class NU extends vf{constructor(e,n,i=null,r=null,a=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const OU=""+new URL("Water0-6d782546.jpg",import.meta.url).href,kU=""+new URL("Water1-1f6f3fc5.jpg",import.meta.url).href,FU=`// This shader comes from three.js sky example by zz85 / https://github.com/zz85
// See https://github.com/mrdoob/three.js/blob/master/examples/jsm/objects/Sky.js
// For original source and credits
varying vec3 vWorldPosition;
varying vec3 vSunDirection;
varying float vSunfade;
varying vec3 vBetaR;
varying vec3 vBetaM;
varying float vSunE;

uniform float mieDirectionalG;
uniform float shade;
uniform vec3 up;

const vec3 cameraPos = vec3(0.0, 0.0, 0.0);

// constants for atmospheric scattering
const float pi = 3.141592653589793238462643383279502884197169;

const float n = 1.0003; // refractive index of air
const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

// optical length at zenith for molecules
const float rayleighZenithLength = 8.4E3;
const float mieZenithLength = 1.25E3;
// 66 arc seconds -> degrees, and the cosine of that
const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

// 3.0 / ( 16.0 * pi )
const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
// 1.0 / ( 4.0 * pi )
const float ONE_OVER_FOURPI = 0.07957747154594767;

float rayleighPhase(float cosTheta) {
   return THREE_OVER_SIXTEENPI * (1.0 + pow(cosTheta, 2.0));
}

float hgPhase(float cosTheta, float g) {
   float g2 = pow(g, 2.0);
   float inverse = 1.0 / pow(1.0 - 2.0 * g * cosTheta + g2, 1.5);
   return ONE_OVER_FOURPI * ((1.0 - g2) * inverse);
}

void main() {

   vec3 direction = normalize(vWorldPosition - cameraPos);

   // optical length
   // cutoff angle at 90 to avoid singularity in next formula.
   float zenithAngle = acos(max(0.0, dot(up, direction)));
   float inverse = 1.0 / (cos(zenithAngle) + 0.15 * pow(93.885 - ((zenithAngle * 180.0) / pi), -1.253));
   float sR = rayleighZenithLength * inverse;
   float sM = mieZenithLength * inverse;

   // combined extinction factor
   vec3 Fex = exp(-(vBetaR * sR + vBetaM * sM));

   // in scattering
   float cosTheta = dot(direction, vSunDirection);

   float rPhase = rayleighPhase(cosTheta * 0.5 + 0.5);
   vec3 betaRTheta = vBetaR * rPhase;

   float mPhase = hgPhase(cosTheta, mieDirectionalG);
   vec3 betaMTheta = vBetaM * mPhase;

   vec3 Lin = pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * (1.0 - Fex), vec3(1.5));
   Lin *= mix(vec3(1.0), pow(vSunE * ((betaRTheta + betaMTheta) / (vBetaR + vBetaM)) * Fex, vec3(1.0 / 2.0)), clamp(pow(1.0 - dot(up, vSunDirection), 5.0), 0.0, 1.0));

   // nightsky
   float theta = acos(direction.y); // elevation --> y-axis, [-pi/2, pi/2]
   float phi = atan(direction.z, direction.x); // azimuth --> x-axis [-pi/2, pi/2]
   vec2 uv = vec2(phi, theta) / vec2(2.0 * pi, pi) + vec2(0.5, 0.0);
   vec3 L0 = vec3(0.1) * Fex;

   // composition + solar disc
   float sundisk = smoothstep(sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta);
   L0 += (vSunE * 19000.0 * Fex) * sundisk;

   vec3 texColor = (Lin + L0) * 0.04 + vec3(0.0, 0.0003, 0.00075);

   vec3 retColor = pow(texColor, vec3(1.0 / (1.2 + (1.2 * vSunfade))));

   gl_FragColor = vec4(retColor, 1.0);

   #include <tonemapping_fragment>
   #include <colorspace_fragment>

   gl_FragColor.xyz *= (1. - shade);
}
`,zU=""+new URL("star-53e32529.png",import.meta.url).href,BU=`// This shader comes from three.js sky example by zz85 / https://github.com/zz85
// See https://github.com/mrdoob/three.js/blob/master/examples/jsm/objects/Sky.js
// For original source and credits
uniform vec3 sunPosition;
uniform float rayleigh;
uniform float turbidity;
uniform float mieCoefficient;
uniform vec3 up;

varying vec3 vWorldPosition;
varying vec3 vSunDirection;
varying float vSunfade;
varying vec3 vBetaR;
varying vec3 vBetaM;
varying float vSunE;

// constants for atmospheric scattering
const float e = 2.71828182845904523536028747135266249775724709369995957;
const float pi = 3.141592653589793238462643383279502884197169;

// wavelength of used primaries, according to preetham
const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

// mie stuff
// K coefficient for the primaries
const float v = 4.0;
const vec3 K = vec3( 0.686, 0.678, 0.666 );
// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

// earth shadow hack
// cutoffAngle = pi / 1.95;
const float cutoffAngle = 1.6110731556870734;
const float steepness = 1.5;
const float EE = 1000.0;

float sunIntensity( float zenithAngleCos ) {
   zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
   return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
}

vec3 totalMie( float T ) {
   float c = ( 0.2 * T ) * 10E-18;
   return 0.434 * c * MieConst;
}

void main() {

   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
   vWorldPosition = worldPosition.xyz;

   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
   gl_Position.z = gl_Position.w; // set z to camera.far

   vSunDirection = normalize( sunPosition );

   vSunE = sunIntensity( dot( vSunDirection, up ) );

   vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

   float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

   // extinction (absorbtion + out scattering)
   // rayleigh coefficients
   vBetaR = totalRayleigh * rayleighCoefficient;

   // mie coefficients
   vBetaM = totalMie( turbidity ) * mieCoefficient;

}
`,Hd=2e4,dc=new nU([new D(0,1,2.5),new D(0,2,0),new D(-200,400,-400),new D(-350,700,-700)],!1,"chordal");De.tonemapping_pars_fragment=De.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )

      float toneMappingWhitePoint = 1.0;

      vec3 CustomToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

      }`);function HU(){const{relative:t,total:e}=Vi(l=>l.progression),n=ze.useRef(),{width:i,height:r,devicePixelRatio:a}=Vi(l=>l.page),o=Vi(l=>l.anchors),s=ze.useMemo(()=>({day:{start:0,end:1.075*o.bio/(e-r)},night:{start:1.1*o.bio/(e-r),end:o.meta/(e-r)},stars:{start:(o.bio-r)/(e-r),end:o.contact/(e-r)},water:{start:o.projects/(e-r),end:o.extra2/(e-r)},travelling:{start:o.contact/(e-r),end:.99},tesseract:{start:1-2*r/(e-r),end:.99}}),[o,r,e]);return ze.useEffect(()=>{let l=null;try{l=new eM,l.setPixelRatio(a),l.setSize(i,r),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=TS,l.toneMappingExposure=.4,l.outputColorSpace=pi,l.domElement.id="canvas",document.body.appendChild(l.domElement)}catch{return}const c=new _n(60,i/r,1,1e3);c.zoom=Math.min(1,i/r);const u={turbidity:{value:20},rayleigh:{value:3},mieCoefficient:{value:.001},mieDirectionalG:{value:.995},sunPosition:{value:new D},up:{value:new D(0,1,0)},shade:{value:0}},f=new hn({fragmentShader:FU,vertexShader:BU,uniforms:u,side:dn}),d=new xn(new Vo(1,1,1),f);d.scale.setScalar(9e3);const p=new QD;p.add(d);const v=new lU(16777215);p.add(v);const y=new U_,g=new Jn,h=new Array(Hd).fill().map(()=>{y.radius=250+Math.random()*800,y.theta=Math.random()*2*Math.PI,y.phi=Math.acos(Math.random());const B=new D().setFromSpherical(y);return[B.x,B.y,B.z]}).flat();g.setAttribute("position",new Un(h,3));const _=Hd/10,m=_/3,x=B=>(B+2)/3;g.setAttribute("color",new Un(new Array(Hd).fill().map(()=>{const B=Math.random()*(_+1),Y=B>2*m?1-(B-2*m)/m:1,W=B<m?B/m:Y,U=B<m?0:B>2*m?1:(B-m)/m;return[Y,W,U].map(x)}).flat(),3));const S=new tM({size:8,map:new up().load(zU,()=>{l.render(p,c)}),vertexColors:!0,blending:ji,transparent:!0,opacity:1,depthWrite:!1});S.map.premultiplyAlpha=!0,S.map.colorSpace=pi;const b=new nM(g,S);b.rotation.reorder("ZXY"),p.add(b);const E=new U_,R=new up,M=new hf(500,500),T=new gf(M,{color:"#ffffff",scale:5,flowDirection:new qe(.1,.1),textureWidth:1024,textureHeight:1024,normalMap0:R.load(OU),normalMap1:R.load(kU)});T.rotation.x=-Math.PI/2,T.visible=!1,p.add(T);const{tesseract:z}=CU,K=new dU(1.5,5),q=new fU(z,{all:{colors:["#5c6370","#e06c75","#98c379","#d19a66","#61afef","#c678dd","#56b6c2","#403e41"]},faces:{material:new iU({opacity:.25,transparent:!0,blending:ji,side:Ln,depthWrite:!1,vertexColors:!0})},edges:{material:new mf({opacity:.1,transparent:!0,blending:ji,side:Ln,depthWrite:!1,linewidth:2,vertexColors:!0})}});q.position.copy(dc.getPointAt(1).multiplyScalar(1.005)),p.add(q);const I=new UU(l);I.addPass(new NU(p,c)),window.sky=n.current={scene:p,camera:c,renderer:l,composer:I,sky:d,water:T,stars:b,sunSpherical:E,hyperRenderer:K,hyperMesh:q},I.render(p)},[]),ze.useEffect(()=>{const{current:l}=n;if(!l)return;const{renderer:c,composer:u,scene:f,camera:d}=l;d.aspect=i/r,d.zoom=Math.min(1,i/r),d.updateProjectionMatrix(),c.setSize(i,r),u.setSize(i,r),u.render(f)},[i,r]),ze.useEffect(()=>{const{current:l}=n;if(!l)return;const{composer:c,scene:u,water:f,hyperMesh:d,hyperRenderer:p}=l;let v=null;const y=()=>{v=requestAnimationFrame(y),d.visible&&(p.rotate({xy:0,xz:0,xw:10,yz:0,yw:10,zw:10}),d.update(p)),(d.visible||f.visible)&&c.render(u)};return v=requestAnimationFrame(y),()=>cancelAnimationFrame(v)},[]),ze.useEffect(()=>{const{current:l}=n;if(!l)return;const{composer:c,renderer:u,scene:f,camera:d,sky:p,water:v,stars:y,sunSpherical:g,hyperMesh:h}=l,_=ba(t,s.day);g.radius=1e3,g.theta=(Math.PI/2-Math.PI*_)/Math.PI,g.phi=-Math.PI/2+Math.PI/4*(1-Math.pow(1.5*_-.41,2));const{uniforms:{sunPosition:m}}=p.material;m.value.setFromSpherical(g);const x=ba(t,s.night);p.material.uniforms.shade.value=x,u.toneMappingExposure=.4+.4*x;const S=ba(t,s.water);v.visible=S>0&&S<1;const b=ba(t,s.stars);y.material.opacity=Math.pow(b,3),y.rotation.set(-Math.PI/4,t,Math.PI/8);const E=ba(t,s.travelling);d.position.copy(dc.getPoint(E)),d.lookAt(dc.getPoint(E).add(dc.getTangent(E))),d.updateProjectionMatrix();const R=ba(t,s.tesseract);h.visible=!!R,h.config.faces.splitScale=h.config.edges.splitScale=R*R*R*100;const M=50-49*R;h.scale.setScalar(M),c.render(f)},[t,s]),null}const GU="data:image/webp;base64,UklGRgAHAABXRUJQVlA4IPQGAABwPgCdASqNAUABPpFCnUyloyKioZC40LASCWlu7tp//d1XzUYAGcqBC4OwrT6/bgSHe8Bv0zf8/dbc8Hptn9S6bz1ov+BkpL8GFDZ6dkv/px18GPv2Ja/aui47aYDPSYcSAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEfsHOiBrjIy2hCMdY6yOB91FQxwP4KnL8sSAkBIBgCDEhvvP1XL6cxOZz86nP4idfliQEgIyH/u+un/RHCqonRTjSMleQum+Bv3dwgSFc6Bn39c3Iy2hCMdWQNCPF/zbXUFgossIKnpOfwRz5/9O8MGK7OHv1JoCWc0mHEgJASiXuMM1ICENVIaSIaJ3W1xgIF0mHEgGKzMmeltu3JoKXTtVAZK2wE4hMjLaEIxznW12QEh/Il78CmfUfT4t1W7h779BkGVMYB/xeS7vDcSSxICQEgIyx26+LweuOZx79RmS+r1B11zjCk28roX4rAfQYZCoe0tvo/wD4P7w6x1i31ja+Lo3N1nKzW1kA2X5HgolvduYBza+KjHWOsdYvBtCXl3EvdsjaLXUZ9GtwpdVyEY6x1jrHWekNdfliQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBGAAP76HqAAAAAAYQJP847VXc2TH9kXOQFN6ToL5PekzqqhYcpfuYUZot+6aP+PIUlaLX2/spGavhCXf2xo627lUWAJBndGykjXuzE3RbPh10kuhTxYsUahXcpVVRmdQdnF4Dbw4+/fY0NXuzhXX5KAu0uxNl/WrHaQEWS8+OOV/SGnAQIgHYXV6RxBAjgGlHTviV68OjmFol6ui/PcAegrwbcx+IcRXxLwoYTE+AJck42ydT6tdGzXQ+cukv7VNAbxf7nSKXoJaSYRK5U1E1iwhwxTj90hvnofnp1+fdmxnnMa5uPRj0nkV/+9tO641bE3+znB3wM75T8pYtNKci/a5cKZKNShpPUqeJy1pOT0ETD8aMJkwR0Tfn2GsA3D2Vu4c5x6FowGpYrtxqceMMPbwMAs4LbMJUfgBOt0hmMEM5KCrjA4IdDyf4dfkVYMTWQ1Aspcxz/q5PWg4T6o+DjZLfI408Db0rN4psUKkokCLx345ZyjrDJDuW513nncKKbLvTJdgshJCI7ey1bujAHEWWSm3Jhhe1pJcmsTp6JzKvGNEzvSx0xa7xJbaQ8cEqTacjxAcI+C648HxXBn83zHaefUYib06Plgs37iINvN12WoZ8YVN9oCxurZrSneyG2RbXo7cYRVJI9p5pxCp1a4omClkZcR1V0nqJbYSD2bt/aHuJAvLRkcDjIkzyLJiyMtpRDjfYO9qTl+JsnczTA0CraH2gc6RKpcvAlZpmgbfv6VFyuAc3k+R9riVgXy/qCiDQa39DUhxRVi16J2AOTWpOVvsN7ouWg/PGTyJPSqI6Pnk1NqOWhk26D91X+yTjibJN+5dafqWG8j41DCh4i+xbwBbrbcV7HzB2BPCTdREt58d8GLu69MO4z0JsCfPEiK3Ka9Xiai9cYRe6bgvYTvaAAUaFfHB3Yj/JyrG4G/55Keh5XV0PCkGRJtUBkeeIEaccPCXVkI0Tv20YyyqNhv+mHBeDkQs1m766LxUOA1Vf55Ug+tJATTa7GJAssZz+a/hfvnCwOB4Oiv9H3traXJSwjuUQW949B4gLGtHygrN7DpkPpH6duBVwtTGZW7xOqPruO3WSUDfqMc4Z3V2lVjQ00yGfz5ryFURHFkYDAGECsFdK61GFr/rKQaE1K1aFEk8irjYTNVd4wcA9Cy/EVsqVk3UNjU2SsID/vhHbmMmi+NQUqeeYsT72Ds5HO0jl7E7iD5n/P7UKnBiQcTdITvzj51xAXxL26RW82Eb0h8tj+6U3t9HudocKCehLVVqp+4gXqgg7BfWuqjb+JnPViUuC2/BB5an7LavNI+wmXXb1lU7vd/x8eRIzYCRtfXvcWKcAAnb+9tYCUZchb3ihTa1ztLXh80qzegqAYmqTYWjKrHkOKsE+gQT2jf5n5/j0ZGcFKBFC5XL/Je9Pn6yyvcMvym8PJX5cGUBfXIh2D1WMck800QCRr5bQGkTTYKCxiOAxV4zH+rti8ojazXUbkXFGvlR1gF9UDyqRmMy5VHvrTd8lMRlO7qn+zPyjGM6ZaoaC/zam171QCswhH1IvcItp8EzqFQ7EnaD093894uQwHTxtb+Rqa8SyzplF+egLsIZRkJIepr9QquNGSy7RDYORaIOkCag2HcUZuLkB9XEqxr9qALawrxjY/aoR6LJWgHZzm0LUqFazHxLAnv4CIAAAAAAAAAAAAA",VU=""+new URL("frustals-9f35bd41.webp",import.meta.url).href,WU=""+new URL("kalong-52c63593.webp",import.meta.url).href,jU=""+new URL("inversion-c57e73e9.webp",import.meta.url).href,XU="data:image/webp;base64,UklGRgAPAABXRUJQVlA4IPQOAACwYACdASpuAUABPpFEnEulo6Kho3IKqLASCWlu4XHhETkWJLkS3lT++/yvt7/ufhH4XfRck44/+T/Zj9v/cfMT/b+BfxY1Avyf+j7oTpv+i9AL2M+q/83vyP6r+6eof1s9gD+Wf07/d+oP+u8DfyD2AP5h/VP+F/e/zA+lD+R/9v+o86H6J/k//X7gv87/r//h/xftgeu390/ZG/aT//j55lK235QYQOpNXUZgrNGxfhwaYKvT6aJhZNEuzCYbdGX+w7f7PjJKV76sz5XNQMV4wvg8AsOrG6pTIkbKkQWFL3cjT9vodWdxVZ3C0aolPBWA0+rBEjZUiQ2mNd8v3+lM9HMwcHzoQShNt/xpdLn3ePfavRAIKa6RspgLtTVeF9jon9ySgQR3QZjKfMUKa6RsqRI2VIkbKkSNlSJGx4T16FfoVEiZeFErtHwho+b/OWxF9L1EFWED7FcoTQ2GJEvTRMLJSVM082Kp3bKFzWdcDz/C+0ZkpuvaMxfQiIBicaX4IEPVKdOcDpfA6YttlQWJOeLr5ZhNtUqMXdlna7qz9ov0ghjQuv+7Ia1DVqp0Uwhmn8f1Vd7ctlO+zPyl4xgsAsgx6mnZ2ORtjUOME5PWfnlsrP0bK0bSM0a2bGgr2jAPzl/1vJToxPML3GcCrONdI2VHW2VG1Wkb0sZnmt9PpomFk0TCyZ1aWURjN1Cm/nP1MXvJj4VbiBQCte0ZkpuvaMyU3XsjcmccTQ86iaX3DMNba22HXpqs2zTFIrdbxVxLppZerVNGrlAnsN3xpuWUerW3jt155RWAu/rn3CrFu5WY2wNZKgy20z13z0VNXK3dRilN17RmSm66KNXwV0L/gPwg5C2tDKMj6CjyVT4FNdI2VKdb5M2TKyL03qBUtSL8MpCCr1rTPTTG2ns+qn7ekk7Ahq7CwKa6RsqRI2PUwaEn5jz2CwIMO+SmukbKkSNjwk6xkxN3pymPAEKLluw0yAuvUY5fXEbUlHQHUG7pvJTXSNlSJGzl6wfzwUh0jYdE2QZcSWqRI2VIkbKjYAD+8oWs7106ibwo3H2LHlaDa8/xE93SPZAbnG+LjR2JNUnv0nr/sLE9Jsnj7xYXzVybw+o9kbyjs7PNNzFDo9JSTLHZwLIR8n4licngSjCCp+dgVaUUdyj4QOnk9Tiz/nPfLH7eHkr8nKx1Eone4RmIKqj84fSYeVMUxazZPqBNHvKaO6k3jlj3TGzP/4F4c51Z5GcXlg31A2InfTKiixaADZ0PcxurPHt0wrDG3Q+oZp25sYxubXWPtoGFTe9PZS7aT8uKgfRO9mUfxIdw7CvOIIwgQSJmoJgRUEDOiiEyI3y9Ja5oFH34IZ4AG4GSABHN6rEHLHHHoU+tXT0jQFV1yZjpKzMxI0+VcF49Hy5KbNFsqyYftuqbPt45YQGmbKbjZmL+sytPncwLPnGcwucXKPW6fol1rSKwfZv2BB7Pr0VyUmNU1kB0hwv4x1Un5filFqJjkpaR522xYd7izpj1slCcMIVpM4aV8O/JrRYqpOuy2CIKvOPH/s/skjXLzpZPIz3/uluAfQ/xKkIDhHks9xg31nCOxHSXdLOSTrJmpSMhXzUz1XtvqqfKcjs3tzm97tDCPuEJrTH/CBETfMdiBptgm1uJ4dGe5o7UkJEqIBKu8IpoER7ExxmfBwM6CNVzWEvShqejp89Rd5/o5isqymhgfBKhGqXjtNnWP24o/s71a939umg3ihV9vOqVZ7GT0xcHRG0wQHwvEonxz+DD2czfMAReo2MZ5lp5W0UsZHN5u34eznlXgJZoTUxsjemSjVn7urhc6DJ7663A6cTbz4jNa7fgm/NH0BJDvEqzjoabnPNzBF9C5bZenohDvQiXPllLaXf2gkJNMwf1MtFKlF45g/NXfEUT2taAE1lK5NY44hHuxXl222IDuy2/241NynROV6ThKC3QCnashHfqqAzKQIW7y/bBWjSr0bPHwOZygLS34WuFNVZMcUvzYi3tId8alWMOnK4Z3Du5rEkCt2Wf1q9rKYlP50HaALV+p7iyj9P5jGtPgT9k+pG5zs3KWgCtG7otskHBiD13S6GkwLRrrCEMCCpMEA+7Lek4wWSJMujbHaV4OCu6HiPCD2oh8g0InYlTvIQcoudTyKBT6EOvXLshmUWHLueKJqYVTtWrozl950bpI0IwGlh+dR9KrAGrWdAjHlxg3AzumsDuVkX/ihD9N9mSvmXuwx3328mSVVCvom0WC9c5J6/C1gHGf+jHXeiy6rkBFrQv2vqytRBant1PNSki/ST4z9FkCcK3UB83Td0634suw3oZuT6APwfIgD43auLX3aGqzAQ75rzWAdDMx6Ihsx6pjRKnq4dLBDcDjkArkmQ8KlZscehpt31xLDt3BEau26s6aN/0RLh5EuCHBIQAH23AE8oFWySMQScg8CIbANjlmB6AICx2Jmnih1N9NZt3r+FexRGAlRywe6yAZ51F9lfWrG+GiGl5QV8lDlUW43MFE8mFU0U4SivUyn3cyBjeROBcv7w4ZepCIC9d2mCWYfH66m5NvR9kzQCar/6B7RG4YAxdqXM/1xPh3P2kSpOWoKQO+sDk8GgdQPA3zEk8SgamjPc6/hNaQbMXiOMGDCJNd/gYreSaNOlZhBjMmZkhY/9Y/mFbAtSz9AKxB3KKLfABnB7aQA1UOldDrRqa/h1l/inmhw/lx0Rp4czCaSPvXL8Vbm61NN59JqPj3ifzkcjzZJeUh2JtYd4UPTeYn0CvSnrLeID34nkElxMPXy5y0rQB0KNJ18epbRwc3n7ASsTareqPqPJjrtgzEAEgb70qrHJSOLWxfUqDX8rYa+urtVQwqcNaLxe87bnsjsSYoOlvEXxNfgYWnEEKl/umvHdeM5h45y+4Co+k86RKH4u5r8sQOh8DDQ9epFCjs2nGi/kDDmJrLe1kL20Lgzl9cTUCEmLck1mAFVzKVUGm9+Z0/lf7uK8XevvOrvXzdWOvPPhly5biagbOl00g5EdueB7ysJhPVjmrPdjTL50hoCmDiPmqtXkMAVSaoIMY5+GYDVbi8rgd66/LADbrFSMlZtokRiu4YKMlC0VBAN9qmUuOi5szsk9uOABiz1i016+Hf3KfI32eXagycBCaBMPgb37ZKGkBpxy3rh6kt/P+ej5SWQfkqCgA7310vZMLnlFi0kCPsQYwSJeqGtTTRvErtXUeTayQS6xAAv4i+wXgqOmGV5i5qaRrG+DclCbjARJN5KfVKXy3J0GomWxnly90u1r55QCJ4fPKZi7go4xQbRLAhV8JbmHFnePk0hbC3EUl+rRX57Od7Ra01F55ZRpukhDyDPA0akY0t9al6V4RNwrX+4/4M3lAapR3AwJpOwH5aTV/vykGEwSoKM0hNAymdC5g98yHFHao/GKEW8xf+HgX/JVUml2ceCpluw8iEoKeVGQCe2IZTTH+QWxjVmxmxJSWQlzni3gct/f59p/PqEVfBr/WXBczq4KvtrTPiK9eq0p37FLcoUS17mM5r4BDSdYyb1dzc1OrOFYiuG/tCW7xO8KB0L0WTb29wsjYhKIHWU69S3a/0F2r0vTUVH5bx/sMrontNMNvZBFABN720nvm2XwZJTbhRRdxnhjxpKdNwpgD+ljeLjZTZBbQsNtDN4uSN/oF+Aoqz/V5M9PwgJls+AzsXH7Rrtjbdt1XSkk8ItTrK5uD5wp/JPXzW7TlemZ2MIQpgzO0oqNq2A/+G2UgKGdRChLQDp0Si3NjmbSwPIwdlf842AMqlaGm5Fvc9Q2fv7RNkrDzbfj54b7tW91AaGbsTSDwz/HFciDW2Hct+QqofUvMK1vFiulc5qZl0H78cnlZpL2zP52INAw1XkPtB3L2b2sSC3rKXn8thHcGNc7darB8moQtfTQvpxEWcgunxmhzPKxPhbtBdVI3OnJ8Jhextztz3rnNz5OvCuwZBuSFf4C6Us9oprlAJms2NhWuKoGlc5hgBcUsdyd6FDXS+5SbSMCQTv5L+OTY0SAG64x1PO6NWaltzK13kxg46qJkLCJVDiNzLPVuWl9Hv3W81K8pskw2Sxga6dSsWJShvfHG0s3J+gObSrvggvofecn3OW890+LexhmnUILF3xO9rd0WrftPfiyZVuJHoaDXPRnBbE2E6TOllLzFJYE2s8/cEktzMKT2oVsS2u5OCA0X1QBi2WRj6sKEdEECuq0WjrEGr0uxY2y02TTEmV4Z9+mCG3k+kyVL+rpPHae50qmfQfOTusUTJIy0ZXuO1delL2vlUYEzPPDKif/9f9EXjr90p16yMMqQg4v+Gcw2FtWPZI6RsVoSWKuo2qphh/D9F3ky3lkNRU9ETi6vBPTd436ZMKqZmTGzkI1slKq054/w0xuLLWvzAilU8maB/KspQ9RxoXlLFQt5054ZOiUHC/zAkEEmUxSX1eyuSrGD97ajEfro8L2FMEwD13q46Pep0HvK96mMN3me2qCEro18anVsPGdF6Kyh0A9LhRlnlh098lHis+N5ZX9txOfUWL0RJlBCuHQ+t1nvBEaPKg+QgEJSG6EMbEOh+XMJ/lxEaHjV1XQFyBckQvxAVq+5Pf/XRr//OKd7vrpgF4+SUIycfYYaC+1pzd2fb0SvEERnBmWT4rIcw22tYSTsKVbpSdcAgkcVcUHDK8JnhDrdc5IxtJWZaqIwzFPTciGVwMN5X/8hzO/6GoL0brRagW9P59gFeidx2waE/B/Ab+PFiZctrDBnMsC3b9V8W3hMZ+xX5ogZX4lA/cx+QN/eVCyl6g4xMZl2MvuEjOMO+zVP2lZSgU9z7v04O0qT0nENC0f+yOhcqnvnq2euWeAD9ByiMnXHhj/Gm5bm2BrmhjvJqw5lbSlskqYrbPC4cgCexMLL1mV9Klid0EIUOxL63XZjid7N5YIhq9v4h+jy/UmLzoX5clT7TxGyN6t7fKRMriuIl8yWbxLYSV1F7b7uCspcibDZ6l087nMU3NgF7Tuw2lSUO752N8sf9k2U27/BZPC2Glpma18ekZ6CxktpOhzovAHFbMMltQNKgfMKgzgXG4/Thw3inWm7+OCIQN+BSS9J+66fARBFnpq50AAAAAA=",$U=""+new URL("unrest-8902c0ce.webp",import.meta.url).href,YU=""+new URL("pygal-b9f90fa2.webp",import.meta.url).href,qU=""+new URL("wdb-da93b7d5.webp",import.meta.url).href,KU=""+new URL("umlaut-c9aed0c4.webp",import.meta.url).href,ZU=""+new URL("butterfly-690b0d23.webp",import.meta.url).href,QU=""+new URL("anakataGL-56327cef.webp",import.meta.url).href,JU=""+new URL("annealation-acae447a.webp",import.meta.url).href,eN="data:image/webp;base64,UklGRh4KAABXRUJQVlA4IBIKAABQTwCdASrQAUABPpFIn0wlpCKiotQYoLASCWlu4XJ0ImAMv2WJsp3cF29lQM/Rl/3t2JzyHnj755/Xemz9Xf/T5MD9f7quGbaS9hP8pxnjxrXvqEeEdaE+0+oB+TvWS72dFH7DfRPEKSoDri1W64MXF/PIZC1QHXFpbbELM3DL3SdcYIpe6Tri1XDP0WAsBYFaRn6LAWAsBYCwFgLAPEvnVwirhn6LAWAsBYCwFgHrZ8tVnm1qpe0u4wOH/DetcfCxcYCwFgLAn3c/Q8riUSTP1kbKPTWGLmrSgX5Y5utytUB1xaioXcoZAOkovpY5IDOEffIQL+JW/xGzaLkpMjAaAriA64tQL+U7wikmLFA+861Gzdx5OBGN+dZcmy080lvLHq82tcM5YoDj1TAm1qjZ3DQ1MOsvZn9eoQlWDC1dvwJQy90nXLWrADa/w5Zkdsbegz8wPb7EUdzR2f7ib0M1W0Eh+dBJHWP8rXLEWg9I0WW9NlfQ+/j8vxykb/cyKn+YIrnPRkyyPevmQr3gYrefzjiCegXsO0jj6ERw5yyjr/1AZgAYuvfvHy8jBZTnG+x1/l1HQAYHPXuGpauhRb9kpPY1JMKKAFzyEn7ZySbfjypGnM5YvxHtk3kTUgrhn6K+0SwpGnL4+UaE6kl0evvRDOsYEB4utbgz2bMb56JDP0WAtRyA0Cpk4iUWhlU0mYHjPXsJ19/Q1XDYqdcWq4Zebw0+oNzN5BAqcbk7Xmk3bw+EM/RYkoBn6LAWAsBVp39gT1/NrW8cEDPdnywyqeq4Z+iwFgMMDgLAVxvqi/yGfosBYCwFgLAWAvX8SdcWq4Z+iwFgLAV+k5JLvRGbWuGfoqwAAP7+p0bi0YGWsGud9gHtjqUJCpAe7Be7nvJOJKUi7agi2w2noP55KqMFjnqxU/q4Ca2qvQVC7dXAkADwSABw85xuMy/lFhv2cEaKon0GTQgAORUAoBpucKM8EPGMldZOWZtOj9HdLsFGZSAY3iZGOCHcStG5H+IHtuC4hFkqNq3SR58cd4hDw+uJsZ4xGlZC4RZ4GUwDqFiBJRYDnG2J3chrsQhKHMByyRpj2uNlfylI94t96BdXWyBW76vDpjcPgHSmYczM5dhIE7Cty83MMwN5IblhCKwmN4op/lQqP7NHEGwCBSjVNwOqk+va6x473LxSKhZABFOxWhgX2NNvxuIYU0KMpRWE0v5SbHVbNntRTRS7ZP0P/yM41AiTQhIyAZf6KS4BnBzdHWzruNOk5JrjNO3DajBjZ0Tcx1jtFonQ9AQxAQJUhd1+6Htb+XyrCSAyLEsKobebRcSIj1HV32XB6JauFNuB4EUYc9oVcTUoY2fnsV9oy6ofYIq1U06hvpjV9LWIrlWik5w0NKG8vLHFYM0pRT92zE15tR96Xn7UKhKQLyhxGk0lpGlZFrbEmYWAskNUY7Kk2w1wTRtHlaD9AC9Ci+DEkMYzXBLD/GvY8N9/w8QJoIi5DaWXKAmQLDuOV3WV7TMh23T0cA+ROXQC2X0FCpgGd8DGZgJn9nVCHUSfx+fblaxVJ6tPpuUQ97BTYa47IgaRA/z8s7NNGqHTu5zYVhIUwEzGMZTIkCpwVVu8lavtXi5i5n4El5aMPtXcXFDT2Z7jj9/fLohF262Jge2bwCx5p+rUa4q00vlZjIIvEAjP+nVBmz3HdjxYEUzLib/9lOuK41RFox34PCwkvXh5R+Yr97o+IJJGw3iPgPyqD1E0DB3RZSHdECEiAsZSgwCMwBqPoSieF3+dzRIJhbZNsq83JPHn0R8obnzO/I76bz9zRSAKDs0M721kCM7xLYL1wPkyYKftfgdIzN8ZuNW1W769oZddZC5ZsoIh7XezP0CJ6UO4xYyNs/nNS2v6fBWGrmx2tisWiQPuvv1FO5kQR5sDLUG0g3g9rD3HI0Xx/AUO1/W2aHqR/c6mChoGcq8FxvXx0DmN0aXhEwNjX9IZKFcwH9/7DMJ5w5+7+HuozcixVc2DgfBWyyHCdGomr9oQdNrpVGFFu9Ln69lX45OpaJX8lSVeyNQb5qm4OLdOvDeyIDxcmjgwPNdL2S3TayeVFUH7kcCqhjdvlzSofbQkaFVVORqLqrUF1+VZBvd7DhbREkRHoYoYyVchC7bHKc59AM7SUHTapWS0cOMb4hgnncASvbK6+HJ8cBKCnM1jtYi+EtudXU4VH/yjUPPd5Ydqzp1tfo+aVxmqDrcpqu2Jy7ye/QWSgN1B61LJUSmc/KwHLQBxOuQBeEyQUh5kSUM2I5lgsTap+ob+bd4+Chorz/sS/Up6hujo3dTpRy2Yg+OC2660ThvbmRAGfj8R01dkr8lz7i8UI2VxxsemhwBJg6DbZU75olqRh3Of/kkqC9dIy+63hfbczNGB79JBnQMLxWEqSyNysHJ2ZjzqwM9L0CwxpPbywu+Q0VeLqmE3Uw03cmnRtfZWlWFAGduYHw5XWyWGfgE5zoQhkDq+CzVgghd+R8wm8ZFiij8rcd9hWUwA1ylDD81usLMBn3H3Z+4X9dphfNiXKEpJGWX9LdekPJHOc14vT9c01mOS588ru9+fIJnZhrpr7wHyH31nWZNyjlSnOrfhCEz4GRn61qVGtfYyfHe2sRBmGli4x+a1N4m/qSXogh2FN+0ubyu6+BNmRuIGyr4yQVEHI6gW/QVhKk8YMikcyC+b3ZLu31sdD4TuNpl4L7y05YUkPO0VlafTFppElN2YQVEG5Ix9Dxtga6L7Vhf8APfmOYMk/wqC7LdDreyUfwwZ3CH1LVRYyrOV7D5ioNWP1bSBz0zGgdrP1oeZ1TlhzlrUK070SzoV34T/LV+b/1ibRe5O3PlMdD3NfWDaimOKEas+FllDB8SXUK4njULMacXhbiHaQ7zvkMqMBNdo5T/DT0ECaO71lCb2ywf0BxEJPNVj/wwrmDitHycX2GSU7huBGpQTEw16iYisxAIfj2WnRDCc/0bae35f6lxIyjMrlBZ7H/0AZElovD7w5NuoI2OgZXelQqyJYUsD/9OjyeLs1jvI6crxOHMO7BEn/VscKb90FFZ5ls6IKw3NsTcIJfQBHHNcwCyngE6BN9D2BcEfr6nuy6UR67jnZJn7wwHi751Dy/oXlQ3ROefC47HCU7LDUyJ8CvI0EeEsPeVwXn1wfff4SJWP+PE8lt9QLcVZMw7D9Oz8JfYxyx12jFBPP1svl3XM2ZNNAFo+AZH6ddK5qbzsSDJ19Zl4ZUp8GUkrE9Pci7UdB6Dt4hiPK/5g3ycCC0VeDbWv3YJrJA/oWSN4vwEXVu6bkhSM7cuDYrIARKlv2/W/GAdx6BaCkLuvnxO+Q1nnGzkkgFGXCBjPOZ5JawSpibLPeiAz3ktUJBfulf8K9nIqYqapSUzj2LoUdzOrCAAHSJmMr7gBg/kuAAP9WN/zBi3/3IkOBRZSjTu+QAAA",tN=""+new URL("graphitGL-13d5738d.webp",import.meta.url).href,nN=""+new URL("hanabi-a8ef34d7.webp",import.meta.url).href,iN=""+new URL("nocolon-2b51d69b.webp",import.meta.url).href,rN=""+new URL("clutterm-570a1e1e.webp",import.meta.url).href,aN=""+new URL("gnome-shell-shader-effect-ae435560.webp",import.meta.url).href,oN=""+new URL("gnome-shell-focus-effects-extension-810ef518.webp",import.meta.url).href,sN=""+new URL("jsfractals-3284f607.webp",import.meta.url).href,lN=""+new URL("gnome-shell-system-monitor-d2a38030.webp",import.meta.url).href,cN=""+new URL("bemboo-40e5a560.webp",import.meta.url).href,uN=""+new URL("atom-python-import-magic-60641fc2.webp",import.meta.url).href,fN=""+new URL("atom-undo-tree-49595ab8.webp",import.meta.url).href,dN=""+new URL("atom-rainbow-delimiters-a8927940.webp",import.meta.url).href,hN=""+new URL("atom-one-color-by-project-0fd8dab9.webp",import.meta.url).href,pN=""+new URL("fawn-c8010cdb.webp",import.meta.url).href,mN=""+new URL("scudd-b361f350.webp",import.meta.url).href,gN=""+new URL("helicity-192086b2.webp",import.meta.url).href,vN=""+new URL("coxeter-explorer-89f3aade.webp",import.meta.url).href,_N=""+new URL("raymarcher-f9173848.webp",import.meta.url).href,yN=[{id:"paradoxxxzero/coxeter-explorer",name:"Coxeter Explorer",url:"https://github.com/paradoxxxzero/coxeter-explorer",demoUrl:"https://florian.mounier.dev/coxeter-explorer",languages:["ECMAScript","glsl"],libraries:["three.js"],major:!0,type:"experiments",description:"A N dimensional coxeter group explorer.",preview:vN},{id:"paradoxxxzero/helicity",name:"Helicity",url:"https://github.com/paradoxxxzero/helicity",demoUrl:"https://helicity.vercel.app/",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"Shoot ’em up with power-ups as orbital shields.",preview:gN,unreleased:!0},{id:"paradoxxxzero/kalong",name:"Kalong",url:"https://github.com/paradoxxxzero/kalong",languages:["ECMAScript","Python"],libraries:["React","Redux","Material-UI","aiohttp"],major:!0,type:"projects",description:"Standalone Python debugger with a web interface.",preview:WU},{id:"paradoxxxzero/anakataGL",name:"AnakataGL",url:"https://github.com/paradoxxxzero/anakataGL",demoUrl:"https://florian.mounier.dev/anakataGL",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"4 dimensions mesh renderer in WebGL.",preview:QU},{id:"paradoxxxzero/annealation",name:"Annealation",url:"https://github.com/paradoxxxzero/annealation",demoUrl:"https://florian.mounier.dev/annealation",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"Gravitational N-Body simulation in WebGL.",preview:JU},{id:"paradoxxxzero/raymarcher",name:"Raymarcher",url:"https://github.com/paradoxxxzero/raymarcher",demoUrl:"https://florian.mounier.dev/raymarcher",languages:["ECMAScript","glsl"],libraries:[],type:"experiments",description:"A simple glsl editor with bundled raymarching functions.",preview:_N},{id:"paradoxxxzero/frustals",name:"Frustals",url:"https://github.com/paradoxxxzero/frustals",demoUrl:"https://florian.mounier.dev/frustals",languages:["ECMAScript","Rust"],libraries:["wasm-bindgen"],major:!1,type:"experiments",description:"Fractal plotter written in Rust with a web interface base on WASM.",preview:VU},{id:"paradoxxxzero/inversion",name:"Inversion",url:"https://github.com/paradoxxxzero/inversion",demoUrl:"https://inversion-one.vercel.app/",languages:["ECMAScript"],libraries:["three.js","React","Redux"],major:!0,type:"experiments",description:"Puzzle game in WebGL.",preview:jU,unreleased:!0},{id:"Kozea/formol",name:"Formol",url:"https://github.com/Kozea/formol/",demoUrl:"https://kozea.github.io/formol/",languages:["ECMAScript"],libraries:["React"],major:!0,type:"projects",description:"Full featured object edition form framework for React.",preview:XU},{id:"Kozea/unrest",name:"Unrest",url:"https://github.com/Kozea/unrest/",demoUrl:"https://kozea.github.io/unrest/",languages:["Python"],libraries:["SqlAlchemy","Flask","Tornado","Sanic"],major:!0,type:"projects",description:"Simple sqlalchemy REST API generation.",preview:$U},{id:"paradoxxxzero/butterfly",name:"Butterfly",url:"https://github.com/paradoxxxzero/butterfly",languages:["Python","ECMAScript"],libraries:["Tornado"],major:!0,type:"projects",description:"Xterm compatible terminal that runs in your browser.",preview:ZU},{id:"Kozea/pygal",name:"Pygal",url:"https://kozea.github.io/pygal/",demoUrl:"http://www.pygal.org/",languages:["Python"],libraries:["lxml"],major:!0,type:"projects",description:"Python charting library with a clean and simple API.",preview:YU},{id:"Kozea/wdb",name:"Wdb",url:"https://github.com/Kozea/wdb",languages:["Python","ECMAScript"],libraries:["tornado"],major:!0,type:"projects",description:"Full featured web debugger for python based on a client-server",preview:qU},{id:"Kozea/umlaut",name:"Umlaut",url:"https://kozea.github.io/umlaut/",languages:["ECMAScript"],libraries:["d3.js","jQuery"],major:!0,type:"projects",description:"Simple SVG diagram modeler with dot support.",preview:KU},{id:"paradoxxxzero/gnome-shell-system-monitor-applet",name:"System Monitor",url:"https://github.com/paradoxxxzero/gnome-shell-system-monitor-applet",languages:["ECMAScript"],libraries:["GLib"],major:!0,type:"projects",description:"Gnome extension that displays system informations in gnome shell",preview:lN},{id:"paradoxxxzero/anakata",name:"Anakata",url:"https://florian.mounier.dev/anakata/",languages:["ECMAScript"],libraries:["canvas"],major:!1,type:"experiments",description:"4 dimensions mesh renderer implemented in 2d canvas. Ancestor of anakataGL",preview:GU},{id:"paradoxxxzero/hanabi",name:"Hanabi",url:"https://florian.mounier.dev/hanabi/",languages:["ECMAScript"],libraries:["canvas"],major:!1,type:"experiments",description:"Fireworks in canvas.",preview:nN},{id:"paradoxxxzero/bemboo",name:"Bemboo",url:"https://github.com/paradoxxxzero/bemboo",languages:["ECMAScript"],libraries:["React"],major:!1,type:"projects",description:"BEM generator based on objects for React 16+.",preview:cN},{id:"paradoxxxzero/atom-python-import-magic",name:"Atom Python importmagic",url:"https://github.com/paradoxxxzero/atom-python-import-magic",languages:["ECMAScript","Python"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to automatically import python modules using",preview:uN,hidden:!0},{id:"paradoxxxzero/atom-undo-tree",name:"Atom undo tree",url:"https://github.com/paradoxxxzero/atom-undo-tree",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to transform undo/redo in an undo tree similar to emacs",preview:fN,hidden:!0},{id:"paradoxxxzero/atom-rainbow-delimiters",name:"Atom rainbow delimiters",url:"https://github.com/paradoxxxzero/atom-rainbow-delimiters",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to highlight delimiters around the cursor.",preview:dN,hidden:!0},{id:"paradoxxxzero/atom-one-theme-color-by-project",name:"Atom one theme color by project",url:"https://github.com/paradoxxxzero/atom-one-theme-color-by-project",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to colorize Atom One themes according to the current",preview:hN,hidden:!0},{id:"paradoxxxzero/jinja2-mode",name:"Jinja2 mode",url:"https://github.com/paradoxxxzero/jinja2-mode",languages:["Elisp"],libraries:["Emacs","Jinja2"],major:!1,type:"projects",description:"Jinja2 mode for Emacs."},{id:"paradoxxxzero/tornado-template-mode",name:"Tornado template mode",url:"https://github.com/paradoxxxzero/tornado-template-mode",languages:["Elisp"],libraries:["Emacs","Jinja2"],major:!1,type:"projects",description:"Tornado template mode for Emacs.",hidden:!0},{id:"paradoxxxzero/graphit",name:"Graphit",url:"https://github.com/paradoxxxzero/graphit",demoUrl:"http://paradoxxxzero.github.io/graphit",languages:["ECMAScript"],libraries:["canvas"],major:!0,type:"experiments",description:"Advanced function plotter and sound generator.",preview:eN},{id:"paradoxxxzero/graphitGL",name:"GraphitGL",url:"https://github.com/paradoxxxzero/graphitGL",demoUrl:"https://florian.mounier.dev/graphitGL",languages:["ECMAScript"],libraries:["three.js"],type:"experiments",major:!1,description:"z = f(x, y) function plotter demo.",preview:tN},{id:"paradoxxxzero/nocolon",name:"Nocolon",url:"https://github.com/paradoxxxzero/nocolon",languages:["Python"],libraries:[],type:"experiments",major:!1,description:"UTF-8 compatible toy encoding that removes the need of colons in",preview:iN},{id:"paradoxxxzero/gnome-shell-shader-extension",name:"Gnome Shell Shader Extension",url:"https://github.com/paradoxxxzero/gnome-shell-shader-extension",languages:["ECMAScript","glsl"],libraries:["GLib"],type:"experiments",major:!1,description:"Gnome extension that allows to add glsl shaders on specific windows.",preview:aN,hidden:!0},{id:"paradoxxxzero/gnome-shell-focus-effects-extension",name:"Gnome Shell, Focus Effects Extension",url:"https://github.com/paradoxxxzero/gnome-shell-focus-effects-extension",languages:["ECMAScript"],libraries:["GLib"],type:"experiments",major:!1,description:"Gnome extension that allows to add custom effects on window",preview:oN,hidden:!0},{id:"paradoxxxzero/clutterm",name:"Clutterm",url:"https://github.com/paradoxxxzero/clutterm",languages:["Python"],libraries:["clutter"],type:"experiments",major:!1,description:"Attempt to create a clutter based terminal written in pure python.",preview:rN},{id:"paradoxxxzero/jsfractals",name:"Jsfsactals",url:"https://github.com/paradoxxxzero/jsfractals",demoUrl:"https://florian.mounier.dev/jsfractals",languages:["ECMAScript"],libraries:["canvas","jQuery"],type:"experiments",major:!1,description:"Pure js fractal drawer.",preview:sN},{id:"paradoxxxzero/wsreload",name:"Wsreload",url:"https://github.com/paradoxxxzero/wsreload",languages:["ECMAScript","Python"],libraries:["tornado"],type:"projects",major:!1,description:"Browser page reloader based on WebSocket."},{id:"paradoxxxzero/fawn",name:"Fawn",url:"https://github.com/paradoxxxzero/fawn",languages:["Python"],libraries:["Flask","uWSGI"],type:"projects",major:!1,description:"Flask extension allowing WebSocket uWSGI broadcasting from PostgreSQL",preview:pN},{id:"paradoxxxzero/scudd",name:"Scudd",url:"https://github.com/paradoxxxzero/scudd",languages:["ECMAScript"],libraries:["React"],type:"projects",major:!1,description:"Small lib for inspecting React PureComponent render triggers.",preview:mN,hidden:!0}],xN={progression:{relative:0,absolute:0,direction:"up"},page:typeof window<"u"?{width:window.innerWidth,height:document.body.clientHeight,devicePixelRatio:window.devicePixelRatio}:{width:1920,height:1080,devicePixelRatio:1},projects:yN,stars:{},anchors:{}},SN=(t=xN,e)=>{switch(e.type){case Nx:return{...t,progression:{relative:e.relative,absolute:e.absolute,total:e.total,direction:e.absolute-t.progression.absolute>0?"down":"up"}};case Fx:return{...t,page:{...t.page,width:e.width,height:e.height,devicePixelRatio:e.devicePixelRatio}};case Ox:return{...t,stars:e.stars};case kx:return{...t,anchors:{...t.anchors,[e.name]:e.anchor}};default:return t}},MN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||hx,EN=dx(SN,MN(D2(U2))),wN=$.jsxs(T2,{store:EN,children:[$.jsx(HU,{}),$.jsx(QC,{})]});Qy(document.getElementById("root"),wN);
