function tM(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function b_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var C_={exports:{}},xu={},R_={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var el=Symbol.for("react.element"),nM=Symbol.for("react.portal"),iM=Symbol.for("react.fragment"),rM=Symbol.for("react.strict_mode"),sM=Symbol.for("react.profiler"),oM=Symbol.for("react.provider"),aM=Symbol.for("react.context"),lM=Symbol.for("react.forward_ref"),cM=Symbol.for("react.suspense"),uM=Symbol.for("react.memo"),fM=Symbol.for("react.lazy"),pg=Symbol.iterator;function dM(t){return t===null||typeof t!="object"?null:(t=pg&&t[pg]||t["@@iterator"],typeof t=="function"?t:null)}var P_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L_=Object.assign,I_={};function ko(t,e,n){this.props=t,this.context=e,this.refs=I_,this.updater=n||P_}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function D_(){}D_.prototype=ko.prototype;function Cp(t,e,n){this.props=t,this.context=e,this.refs=I_,this.updater=n||P_}var Rp=Cp.prototype=new D_;Rp.constructor=Cp;L_(Rp,ko.prototype);Rp.isPureReactComponent=!0;var mg=Array.isArray,N_=Object.prototype.hasOwnProperty,Pp={current:null},U_={key:!0,ref:!0,__self:!0,__source:!0};function O_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)N_.call(e,i)&&!U_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:el,type:t,key:s,ref:o,props:r,_owner:Pp.current}}function hM(t,e){return{$$typeof:el,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===el}function pM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gg=/\/+/g;function rf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pM(""+t.key):e.toString(36)}function lc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case el:case nM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+rf(o,0):i,mg(r)?(n="",t!=null&&(n=t.replace(gg,"$&/")+"/"),lc(r,e,n,"",function(c){return c})):r!=null&&(Lp(r)&&(r=hM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(gg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",mg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+rf(s,a);o+=lc(s,e,n,l,r)}else if(l=dM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+rf(s,a++),o+=lc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(t,e,n){if(t==null)return t;var i=[],r=0;return lc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function mM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},cc={transition:null},gM={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:cc,ReactCurrentOwner:Pp};function F_(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ml,forEach:function(t,e,n){ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ml(t,function(){e++}),e},toArray:function(t){return ml(t,function(e){return e})||[]},only:function(t){if(!Lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=ko;Ge.Fragment=iM;Ge.Profiler=sM;Ge.PureComponent=Cp;Ge.StrictMode=rM;Ge.Suspense=cM;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gM;Ge.act=F_;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=L_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)N_.call(e,l)&&!U_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:el,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:aM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oM,_context:t},t.Consumer=t};Ge.createElement=O_;Ge.createFactory=function(t){var e=O_.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:lM,render:t}};Ge.isValidElement=Lp;Ge.lazy=function(t){return{$$typeof:fM,_payload:{_status:-1,_result:t},_init:mM}};Ge.memo=function(t,e){return{$$typeof:uM,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=cc.transition;cc.transition={};try{t()}finally{cc.transition=e}};Ge.unstable_act=F_;Ge.useCallback=function(t,e){return on.current.useCallback(t,e)};Ge.useContext=function(t){return on.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return on.current.useEffect(t,e)};Ge.useId=function(){return on.current.useId()};Ge.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return on.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ge.useRef=function(t){return on.current.useRef(t)};Ge.useState=function(t){return on.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return on.current.useTransition()};Ge.version="18.3.1";R_.exports=Ge;var at=R_.exports;const ci=b_(at),vg=tM({__proto__:null,default:ci},[at]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vM=at,_M=Symbol.for("react.element"),xM=Symbol.for("react.fragment"),yM=Object.prototype.hasOwnProperty,SM=vM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,MM={key:!0,ref:!0,__self:!0,__source:!0};function k_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)yM.call(e,i)&&!MM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:_M,type:t,key:s,ref:o,props:r,_owner:SM.current}}xu.Fragment=xM;xu.jsx=k_;xu.jsxs=k_;C_.exports=xu;var X=C_.exports,z_={exports:{}},Dn={},B_={exports:{}},H_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var Z=L.length;L.push($);e:for(;0<Z;){var ie=Z-1>>>1,ye=L[ie];if(0<r(ye,$))L[ie]=$,L[Z]=ye,Z=ie;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],Z=L.pop();if(Z!==$){L[0]=Z;e:for(var ie=0,ye=L.length,Be=ye>>>1;ie<Be;){var j=2*(ie+1)-1,J=L[j],ae=j+1,le=L[ae];if(0>r(J,Z))ae<ye&&0>r(le,J)?(L[ie]=le,L[ae]=Z,ie=ae):(L[ie]=J,L[j]=Z,ie=j);else if(ae<ye&&0>r(le,Z))L[ie]=le,L[ae]=Z,ie=ae;else break e}}return $}function r(L,$){var Z=L.sortIndex-$.sortIndex;return Z!==0?Z:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(L){for(var $=n(c);$!==null;){if($.callback===null)i(c);else if($.startTime<=L)i(c),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(c)}}function S(L){if(x=!1,g(L),!v)if(n(l)!==null)v=!0,B(b);else{var $=n(c);$!==null&&ee(S,$.startTime-L)}}function b(L,$){v=!1,x&&(x=!1,h(C),C=-1),p=!0;var Z=f;try{for(g($),d=n(l);d!==null&&(!(d.expirationTime>$)||L&&!w());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var ye=ie(d.expirationTime<=$);$=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&i(l),g($)}else i(l);d=n(l)}if(d!==null)var Be=!0;else{var j=n(c);j!==null&&ee(S,j.startTime-$),Be=!1}return Be}finally{d=null,f=Z,p=!1}}var A=!1,E=null,C=-1,G=5,y=-1;function w(){return!(t.unstable_now()-y<G)}function H(){if(E!==null){var L=t.unstable_now();y=L;var $=!0;try{$=E(!0,L)}finally{$?F():(A=!1,E=null)}}else A=!1}var F;if(typeof _=="function")F=function(){_(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,Y=V.port2;V.port1.onmessage=H,F=function(){Y.postMessage(null)}}else F=function(){m(H,0)};function B(L){E=L,A||(A=!0,F())}function ee(L,$){C=m(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,B(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var Z=f;f=$;try{return L()}finally{f=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=f;f=L;try{return $()}finally{f=Z}},t.unstable_scheduleCallback=function(L,$,Z){var ie=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ie+Z:ie):Z=ie,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Z+ye,L={id:u++,callback:$,priorityLevel:L,startTime:Z,expirationTime:ye,sortIndex:-1},Z>ie?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(x?(h(C),C=-1):x=!0,ee(S,Z-ie))):(L.sortIndex=ye,e(l,L),v||p||(v=!0,B(b))),L},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(L){var $=f;return function(){var Z=f;f=$;try{return L.apply(this,arguments)}finally{f=Z}}}})(H_);B_.exports=H_;var EM=B_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wM=at,In=EM;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var V_=new Set,Ra={};function ws(t,e){xo(t,e),xo(t+"Capture",e)}function xo(t,e){for(Ra[t]=e,t=0;t<e.length;t++)V_.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,TM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_g={},xg={};function AM(t){return wd.call(xg,t)?!0:wd.call(_g,t)?!1:TM.test(t)?xg[t]=!0:(_g[t]=!0,!1)}function bM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CM(t,e,n,i){if(e===null||typeof e>"u"||bM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Vt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Vt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Vt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Vt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Vt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Vt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Vt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Vt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Vt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function Dp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,Dp);Vt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,Dp);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,Dp);Vt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Vt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Np(t,e,n,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CM(e,n,r,i)&&(n=null),i||r===null?AM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=wM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gl=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),js=Symbol.for("react.fragment"),Up=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),W_=Symbol.for("react.context"),Op=Symbol.for("react.forward_ref"),Ad=Symbol.for("react.suspense"),bd=Symbol.for("react.suspense_list"),Fp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),j_=Symbol.for("react.offscreen"),yg=Symbol.iterator;function Yo(t){return t===null||typeof t!="object"?null:(t=yg&&t[yg]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,sf;function ca(t){if(sf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sf=e&&e[1]||""}return`
`+sf+t}var of=!1;function af(t,e){if(!t||of)return"";of=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{of=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function RM(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=af(t.type,!1),t;case 11:return t=af(t.type.render,!1),t;case 1:return t=af(t.type,!0),t;default:return""}}function Cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case js:return"Fragment";case Ws:return"Portal";case Td:return"Profiler";case Up:return"StrictMode";case Ad:return"Suspense";case bd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case W_:return(t.displayName||"Context")+".Consumer";case G_:return(t._context.displayName||"Context")+".Provider";case Op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fp:return e=t.displayName||null,e!==null?e:Cd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Cd(t(e))}catch{}}return null}function PM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(e);case 8:return e===Up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function X_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LM(t){var e=X_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vl(t){t._valueTracker||(t._valueTracker=LM(t))}function $_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=X_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Nc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rd(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y_(t,e){e=e.checked,e!=null&&Np(t,"checked",e,!1)}function Pd(t,e){Y_(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ld(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ld(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ld(t,e,n){(e!=="number"||Nc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function ao(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ua(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function q_(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function K_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?K_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,Z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IM=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(t){IM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),va[e]=va[t]})});function Q_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||va.hasOwnProperty(t)&&va[t]?(""+e).trim():e+"px"}function J_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Q_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var DM=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(DM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=null;function kp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,lo=null,co=null;function Tg(t){if(t=il(t)){if(typeof Fd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=wu(e),Fd(t.stateNode,t.type,e))}}function ex(t){lo?co?co.push(t):co=[t]:lo=t}function tx(){if(lo){var t=lo,e=co;if(co=lo=null,Tg(t),e)for(t=0;t<e.length;t++)Tg(e[t])}}function nx(t,e){return t(e)}function ix(){}var lf=!1;function rx(t,e,n){if(lf)return t(e,n);lf=!0;try{return nx(t,e,n)}finally{lf=!1,(lo!==null||co!==null)&&(ix(),tx())}}function La(t,e){var n=t.stateNode;if(n===null)return null;var i=wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var kd=!1;if($i)try{var qo={};Object.defineProperty(qo,"passive",{get:function(){kd=!0}}),window.addEventListener("test",qo,qo),window.removeEventListener("test",qo,qo)}catch{kd=!1}function NM(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var _a=!1,Uc=null,Oc=!1,zd=null,UM={onError:function(t){_a=!0,Uc=t}};function OM(t,e,n,i,r,s,o,a,l){_a=!1,Uc=null,NM.apply(UM,arguments)}function FM(t,e,n,i,r,s,o,a,l){if(OM.apply(this,arguments),_a){if(_a){var c=Uc;_a=!1,Uc=null}else throw Error(ne(198));Oc||(Oc=!0,zd=c)}}function Ts(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ag(t){if(Ts(t)!==t)throw Error(ne(188))}function kM(t){var e=t.alternate;if(!e){if(e=Ts(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ag(r),t;if(s===i)return Ag(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function ox(t){return t=kM(t),t!==null?ax(t):null}function ax(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ax(t);if(e!==null)return e;t=t.sibling}return null}var lx=In.unstable_scheduleCallback,bg=In.unstable_cancelCallback,zM=In.unstable_shouldYield,BM=In.unstable_requestPaint,Tt=In.unstable_now,HM=In.unstable_getCurrentPriorityLevel,zp=In.unstable_ImmediatePriority,cx=In.unstable_UserBlockingPriority,Fc=In.unstable_NormalPriority,VM=In.unstable_LowPriority,ux=In.unstable_IdlePriority,yu=null,wi=null;function GM(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:XM,WM=Math.log,jM=Math.LN2;function XM(t){return t>>>=0,t===0?32:31-(WM(t)/jM|0)|0}var xl=64,yl=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=fa(a):(s&=o,s!==0&&(i=fa(s)))}else o=n&~r,o!==0?i=fa(o):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function $M(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=$M(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fx(){var t=xl;return xl<<=1,!(xl&4194240)&&(xl=64),t}function cf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function tl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function qM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function dx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hx,Hp,px,mx,gx,Hd=!1,Sl=[],yr=null,Sr=null,Mr=null,Ia=new Map,Da=new Map,pr=[],KM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(e.pointerId)}}function Ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=il(e),e!==null&&Hp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ZM(t,e,n,i,r){switch(e){case"focusin":return yr=Ko(yr,t,e,n,i,r),!0;case"dragenter":return Sr=Ko(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=Ko(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,Ko(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Da.set(s,Ko(Da.get(s)||null,t,e,n,i,r)),!0}return!1}function vx(t){var e=ts(t.target);if(e!==null){var n=Ts(e);if(n!==null){if(e=n.tag,e===13){if(e=sx(n),e!==null){t.blockedOn=e,gx(t.priority,function(){px(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Od=i,n.target.dispatchEvent(i),Od=null}else return e=il(n),e!==null&&Hp(e),t.blockedOn=n,!1;e.shift()}return!0}function Rg(t,e,n){uc(t)&&n.delete(e)}function QM(){Hd=!1,yr!==null&&uc(yr)&&(yr=null),Sr!==null&&uc(Sr)&&(Sr=null),Mr!==null&&uc(Mr)&&(Mr=null),Ia.forEach(Rg),Da.forEach(Rg)}function Zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,QM)))}function Na(t){function e(r){return Zo(r,t)}if(0<Sl.length){Zo(Sl[0],t);for(var n=1;n<Sl.length;n++){var i=Sl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&Zo(yr,t),Sr!==null&&Zo(Sr,t),Mr!==null&&Zo(Mr,t),Ia.forEach(e),Da.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)vx(n),n.blockedOn===null&&pr.shift()}var uo=er.ReactCurrentBatchConfig,zc=!0;function JM(t,e,n,i){var r=rt,s=uo.transition;uo.transition=null;try{rt=1,Vp(t,e,n,i)}finally{rt=r,uo.transition=s}}function eE(t,e,n,i){var r=rt,s=uo.transition;uo.transition=null;try{rt=4,Vp(t,e,n,i)}finally{rt=r,uo.transition=s}}function Vp(t,e,n,i){if(zc){var r=Vd(t,e,n,i);if(r===null)xf(t,e,i,Bc,n),Cg(t,i);else if(ZM(r,t,e,n,i))i.stopPropagation();else if(Cg(t,i),e&4&&-1<KM.indexOf(t)){for(;r!==null;){var s=il(r);if(s!==null&&hx(s),s=Vd(t,e,n,i),s===null&&xf(t,e,i,Bc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xf(t,e,i,null,n)}}var Bc=null;function Vd(t,e,n,i){if(Bc=null,t=kp(i),t=ts(t),t!==null)if(e=Ts(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bc=t,null}function _x(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HM()){case zp:return 1;case cx:return 4;case Fc:case VM:return 16;case ux:return 536870912;default:return 16}default:return 16}}var vr=null,Gp=null,fc=null;function xx(){if(fc)return fc;var t,e=Gp,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return fc=r.slice(t,1<i?1-i:void 0)}function dc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Pg(){return!1}function Nn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:Pg,this.isPropagationStopped=Pg,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wp=Nn(zo),nl=St({},zo,{view:0,detail:0}),tE=Nn(nl),uf,ff,Qo,Su=St({},nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(uf=t.screenX-Qo.screenX,ff=t.screenY-Qo.screenY):ff=uf=0,Qo=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Lg=Nn(Su),nE=St({},Su,{dataTransfer:0}),iE=Nn(nE),rE=St({},nl,{relatedTarget:0}),df=Nn(rE),sE=St({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),oE=Nn(sE),aE=St({},zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lE=Nn(aE),cE=St({},zo,{data:0}),Ig=Nn(cE),uE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=dE[t])?!!e[t]:!1}function jp(){return hE}var pE=St({},nl,{key:function(t){if(t.key){var e=uE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(t){return t.type==="keypress"?dc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),mE=Nn(pE),gE=St({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dg=Nn(gE),vE=St({},nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),_E=Nn(vE),xE=St({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yE=Nn(xE),SE=St({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=Nn(SE),EE=[9,13,27,32],Xp=$i&&"CompositionEvent"in window,xa=null;$i&&"documentMode"in document&&(xa=document.documentMode);var wE=$i&&"TextEvent"in window&&!xa,yx=$i&&(!Xp||xa&&8<xa&&11>=xa),Ng=" ",Ug=!1;function Sx(t,e){switch(t){case"keyup":return EE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function TE(t,e){switch(t){case"compositionend":return Mx(e);case"keypress":return e.which!==32?null:(Ug=!0,Ng);case"textInput":return t=e.data,t===Ng&&Ug?null:t;default:return null}}function AE(t,e){if(Xs)return t==="compositionend"||!Xp&&Sx(t,e)?(t=xx(),fc=Gp=vr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yx&&e.locale!=="ko"?null:e.data;default:return null}}var bE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Og(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bE[t.type]:e==="textarea"}function Ex(t,e,n,i){ex(i),e=Hc(e,"onChange"),0<e.length&&(n=new Wp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ya=null,Ua=null;function CE(t){Nx(t,0)}function Mu(t){var e=qs(t);if($_(e))return t}function RE(t,e){if(t==="change")return e}var wx=!1;if($i){var hf;if($i){var pf="oninput"in document;if(!pf){var Fg=document.createElement("div");Fg.setAttribute("oninput","return;"),pf=typeof Fg.oninput=="function"}hf=pf}else hf=!1;wx=hf&&(!document.documentMode||9<document.documentMode)}function kg(){ya&&(ya.detachEvent("onpropertychange",Tx),Ua=ya=null)}function Tx(t){if(t.propertyName==="value"&&Mu(Ua)){var e=[];Ex(e,Ua,t,kp(t)),rx(CE,e)}}function PE(t,e,n){t==="focusin"?(kg(),ya=e,Ua=n,ya.attachEvent("onpropertychange",Tx)):t==="focusout"&&kg()}function LE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(Ua)}function IE(t,e){if(t==="click")return Mu(e)}function DE(t,e){if(t==="input"||t==="change")return Mu(e)}function NE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ui=typeof Object.is=="function"?Object.is:NE;function Oa(t,e){if(ui(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wd.call(e,r)||!ui(t[r],e[r]))return!1}return!0}function zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=zg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zg(n)}}function Ax(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ax(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bx(){for(var t=window,e=Nc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Nc(t.document)}return e}function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UE(t){var e=bx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ax(n.ownerDocument.documentElement,n)){if(i!==null&&$p(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Bg(n,s);var o=Bg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var OE=$i&&"documentMode"in document&&11>=document.documentMode,$s=null,Gd=null,Sa=null,Wd=!1;function Hg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wd||$s==null||$s!==Nc(i)||(i=$s,"selectionStart"in i&&$p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sa&&Oa(Sa,i)||(Sa=i,i=Hc(Gd,"onSelect"),0<i.length&&(e=new Wp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$s)))}function El(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},mf={},Cx={};$i&&(Cx=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Eu(t){if(mf[t])return mf[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cx)return mf[t]=e[n];return t}var Rx=Eu("animationend"),Px=Eu("animationiteration"),Lx=Eu("animationstart"),Ix=Eu("transitionend"),Dx=new Map,Vg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Dx.set(t,e),ws(e,[t])}for(var gf=0;gf<Vg.length;gf++){var vf=Vg[gf],FE=vf.toLowerCase(),kE=vf[0].toUpperCase()+vf.slice(1);Or(FE,"on"+kE)}Or(Rx,"onAnimationEnd");Or(Px,"onAnimationIteration");Or(Lx,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Ix,"onTransitionEnd");xo("onMouseEnter",["mouseout","mouseover"]);xo("onMouseLeave",["mouseout","mouseover"]);xo("onPointerEnter",["pointerout","pointerover"]);xo("onPointerLeave",["pointerout","pointerover"]);ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zE=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Gg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,FM(i,e,void 0,t),t.currentTarget=null}function Nx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Gg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Gg(r,a,c),s=l}}}if(Oc)throw t=zd,Oc=!1,zd=null,t}function dt(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var i=t+"__bubble";n.has(i)||(Ux(e,t,2,!1),n.add(i))}function _f(t,e,n){var i=0;e&&(i|=4),Ux(n,t,i,e)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Fa(t){if(!t[wl]){t[wl]=!0,V_.forEach(function(n){n!=="selectionchange"&&(zE.has(n)||_f(n,!1,t),_f(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wl]||(e[wl]=!0,_f("selectionchange",!1,e))}}function Ux(t,e,n,i){switch(_x(e)){case 1:var r=JM;break;case 4:r=eE;break;default:r=Vp}n=r.bind(null,e,n,t),r=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}rx(function(){var c=s,u=kp(n),d=[];e:{var f=Dx.get(t);if(f!==void 0){var p=Wp,v=t;switch(t){case"keypress":if(dc(n)===0)break e;case"keydown":case"keyup":p=mE;break;case"focusin":v="focus",p=df;break;case"focusout":v="blur",p=df;break;case"beforeblur":case"afterblur":p=df;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=iE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_E;break;case Rx:case Px:case Lx:p=oE;break;case Ix:p=yE;break;case"scroll":p=tE;break;case"wheel":p=ME;break;case"copy":case"cut":case"paste":p=lE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Dg}var x=(e&4)!==0,m=!x&&t==="scroll",h=x?f!==null?f+"Capture":null:f;x=[];for(var _=c,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=La(_,h),S!=null&&x.push(ka(_,S,g)))),m)break;_=_.return}0<x.length&&(f=new p(f,v,null,n,u),d.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Od&&(v=n.relatedTarget||n.fromElement)&&(ts(v)||v[Yi]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?ts(v):null,v!==null&&(m=Ts(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=Lg,S="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Dg,S="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?f:qs(p),g=v==null?f:qs(v),f=new x(S,_+"leave",p,n,u),f.target=m,f.relatedTarget=g,S=null,ts(u)===c&&(x=new x(h,_+"enter",v,n,u),x.target=g,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,h=v,_=0,g=x;g;g=bs(g))_++;for(g=0,S=h;S;S=bs(S))g++;for(;0<_-g;)x=bs(x),_--;for(;0<g-_;)h=bs(h),g--;for(;_--;){if(x===h||h!==null&&x===h.alternate)break t;x=bs(x),h=bs(h)}x=null}else x=null;p!==null&&Wg(d,f,p,x,!1),v!==null&&m!==null&&Wg(d,m,v,x,!0)}}e:{if(f=c?qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=RE;else if(Og(f))if(wx)b=DE;else{b=LE;var A=PE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=IE);if(b&&(b=b(t,c))){Ex(d,b,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ld(f,"number",f.value)}switch(A=c?qs(c):window,t){case"focusin":(Og(A)||A.contentEditable==="true")&&($s=A,Gd=c,Sa=null);break;case"focusout":Sa=Gd=$s=null;break;case"mousedown":Wd=!0;break;case"contextmenu":case"mouseup":case"dragend":Wd=!1,Hg(d,n,u);break;case"selectionchange":if(OE)break;case"keydown":case"keyup":Hg(d,n,u)}var E;if(Xp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Xs?Sx(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(yx&&n.locale!=="ko"&&(Xs||C!=="onCompositionStart"?C==="onCompositionEnd"&&Xs&&(E=xx()):(vr=u,Gp="value"in vr?vr.value:vr.textContent,Xs=!0)),A=Hc(c,C),0<A.length&&(C=new Ig(C,t,null,n,u),d.push({event:C,listeners:A}),E?C.data=E:(E=Mx(n),E!==null&&(C.data=E)))),(E=wE?TE(t,n):AE(t,n))&&(c=Hc(c,"onBeforeInput"),0<c.length&&(u=new Ig("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=E))}Nx(d,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=La(t,n),s!=null&&i.unshift(ka(t,s,r)),s=La(t,e),s!=null&&i.push(ka(t,s,r))),t=t.return}return i}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=La(n,s),l!=null&&o.unshift(ka(n,l,a))):r||(l=La(n,s),l!=null&&o.push(ka(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var BE=/\r\n?/g,HE=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(BE,`
`).replace(HE,"")}function Tl(t,e,n){if(e=jg(e),jg(t)!==e&&n)throw Error(ne(425))}function Vc(){}var jd=null,Xd=null;function $d(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,VE=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,GE=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(t){return Xg.resolve(null).then(t).catch(WE)}:Yd;function WE(t){setTimeout(function(){throw t})}function yf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Na(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Na(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $g(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),yi="__reactFiber$"+Bo,za="__reactProps$"+Bo,Yi="__reactContainer$"+Bo,qd="__reactEvents$"+Bo,jE="__reactListeners$"+Bo,XE="__reactHandles$"+Bo;function ts(t){var e=t[yi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[yi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$g(t);t!==null;){if(n=t[yi])return n;t=$g(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[yi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function wu(t){return t[za]||null}var Kd=[],Ks=-1;function Fr(t){return{current:t}}function mt(t){0>Ks||(t.current=Kd[Ks],Kd[Ks]=null,Ks--)}function lt(t,e){Ks++,Kd[Ks]=t.current,t.current=e}var Pr={},Kt=Fr(Pr),mn=Fr(!1),ps=Pr;function yo(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Gc(){mt(mn),mt(Kt)}function Yg(t,e,n){if(Kt.current!==Pr)throw Error(ne(168));lt(Kt,e),lt(mn,n)}function Ox(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,PM(t)||"Unknown",r));return St({},n,i)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ps=Kt.current,lt(Kt,t),lt(mn,mn.current),!0}function qg(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Ox(t,e,ps),i.__reactInternalMemoizedMergedChildContext=t,mt(mn),mt(Kt),lt(Kt,t)):mt(mn),lt(mn,n)}var ki=null,Tu=!1,Sf=!1;function Fx(t){ki===null?ki=[t]:ki.push(t)}function $E(t){Tu=!0,Fx(t)}function kr(){if(!Sf&&ki!==null){Sf=!0;var t=0,e=rt;try{var n=ki;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,Tu=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),lx(zp,kr),r}finally{rt=e,Sf=!1}}return null}var Zs=[],Qs=0,jc=null,Xc=0,kn=[],zn=0,ms=null,zi=1,Bi="";function qr(t,e){Zs[Qs++]=Xc,Zs[Qs++]=jc,jc=t,Xc=e}function kx(t,e,n){kn[zn++]=zi,kn[zn++]=Bi,kn[zn++]=ms,ms=t;var i=zi;t=Bi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,zi=1<<32-oi(e)+r|n<<r|i,Bi=s+t}else zi=1<<s|n<<r|i,Bi=t}function Yp(t){t.return!==null&&(qr(t,1),kx(t,1,0))}function qp(t){for(;t===jc;)jc=Zs[--Qs],Zs[Qs]=null,Xc=Zs[--Qs],Zs[Qs]=null;for(;t===ms;)ms=kn[--zn],kn[zn]=null,Bi=kn[--zn],kn[zn]=null,zi=kn[--zn],kn[zn]=null}var Cn=null,An=null,vt=!1,ti=null;function zx(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Kg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function Zd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(vt){var e=An;if(e){var n=e;if(!Kg(t,e)){if(Zd(t))throw Error(ne(418));e=Er(n.nextSibling);var i=Cn;e&&Kg(t,e)?zx(i,n):(t.flags=t.flags&-4097|2,vt=!1,Cn=t)}}else{if(Zd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,vt=!1,Cn=t}}}function Zg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Al(t){if(t!==Cn)return!1;if(!vt)return Zg(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$d(t.type,t.memoizedProps)),e&&(e=An)){if(Zd(t))throw Bx(),Error(ne(418));for(;e;)zx(t,e),e=Er(e.nextSibling)}if(Zg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?Er(t.stateNode.nextSibling):null;return!0}function Bx(){for(var t=An;t;)t=Er(t.nextSibling)}function So(){An=Cn=null,vt=!1}function Kp(t){ti===null?ti=[t]:ti.push(t)}var YE=er.ReactCurrentBatchConfig;function Jo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qg(t){var e=t._init;return e(t._payload)}function Hx(t){function e(h,_){if(t){var g=h.deletions;g===null?(h.deletions=[_],h.flags|=16):g.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=br(h,_),h.index=0,h.sibling=null,h}function s(h,_,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<_?(h.flags|=2,_):g):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,g,S){return _===null||_.tag!==6?(_=Cf(g,h.mode,S),_.return=h,_):(_=r(_,g),_.return=h,_)}function l(h,_,g,S){var b=g.type;return b===js?u(h,_,g.props.children,S,g.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&Qg(b)===_.type)?(S=r(_,g.props),S.ref=Jo(h,_,g),S.return=h,S):(S=xc(g.type,g.key,g.props,null,h.mode,S),S.ref=Jo(h,_,g),S.return=h,S)}function c(h,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Rf(g,h.mode,S),_.return=h,_):(_=r(_,g.children||[]),_.return=h,_)}function u(h,_,g,S,b){return _===null||_.tag!==7?(_=ls(g,h.mode,S,b),_.return=h,_):(_=r(_,g),_.return=h,_)}function d(h,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Cf(""+_,h.mode,g),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case gl:return g=xc(_.type,_.key,_.props,null,h.mode,g),g.ref=Jo(h,null,_),g.return=h,g;case Ws:return _=Rf(_,h.mode,g),_.return=h,_;case dr:var S=_._init;return d(h,S(_._payload),g)}if(ua(_)||Yo(_))return _=ls(_,h.mode,g,null),_.return=h,_;bl(h,_)}return null}function f(h,_,g,S){var b=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return b!==null?null:a(h,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gl:return g.key===b?l(h,_,g,S):null;case Ws:return g.key===b?c(h,_,g,S):null;case dr:return b=g._init,f(h,_,b(g._payload),S)}if(ua(g)||Yo(g))return b!==null?null:u(h,_,g,S,null);bl(h,g)}return null}function p(h,_,g,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,a(_,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gl:return h=h.get(S.key===null?g:S.key)||null,l(_,h,S,b);case Ws:return h=h.get(S.key===null?g:S.key)||null,c(_,h,S,b);case dr:var A=S._init;return p(h,_,g,A(S._payload),b)}if(ua(S)||Yo(S))return h=h.get(g)||null,u(_,h,S,b,null);bl(_,S)}return null}function v(h,_,g,S){for(var b=null,A=null,E=_,C=_=0,G=null;E!==null&&C<g.length;C++){E.index>C?(G=E,E=null):G=E.sibling;var y=f(h,E,g[C],S);if(y===null){E===null&&(E=G);break}t&&E&&y.alternate===null&&e(h,E),_=s(y,_,C),A===null?b=y:A.sibling=y,A=y,E=G}if(C===g.length)return n(h,E),vt&&qr(h,C),b;if(E===null){for(;C<g.length;C++)E=d(h,g[C],S),E!==null&&(_=s(E,_,C),A===null?b=E:A.sibling=E,A=E);return vt&&qr(h,C),b}for(E=i(h,E);C<g.length;C++)G=p(E,h,C,g[C],S),G!==null&&(t&&G.alternate!==null&&E.delete(G.key===null?C:G.key),_=s(G,_,C),A===null?b=G:A.sibling=G,A=G);return t&&E.forEach(function(w){return e(h,w)}),vt&&qr(h,C),b}function x(h,_,g,S){var b=Yo(g);if(typeof b!="function")throw Error(ne(150));if(g=b.call(g),g==null)throw Error(ne(151));for(var A=b=null,E=_,C=_=0,G=null,y=g.next();E!==null&&!y.done;C++,y=g.next()){E.index>C?(G=E,E=null):G=E.sibling;var w=f(h,E,y.value,S);if(w===null){E===null&&(E=G);break}t&&E&&w.alternate===null&&e(h,E),_=s(w,_,C),A===null?b=w:A.sibling=w,A=w,E=G}if(y.done)return n(h,E),vt&&qr(h,C),b;if(E===null){for(;!y.done;C++,y=g.next())y=d(h,y.value,S),y!==null&&(_=s(y,_,C),A===null?b=y:A.sibling=y,A=y);return vt&&qr(h,C),b}for(E=i(h,E);!y.done;C++,y=g.next())y=p(E,h,C,y.value,S),y!==null&&(t&&y.alternate!==null&&E.delete(y.key===null?C:y.key),_=s(y,_,C),A===null?b=y:A.sibling=y,A=y);return t&&E.forEach(function(H){return e(h,H)}),vt&&qr(h,C),b}function m(h,_,g,S){if(typeof g=="object"&&g!==null&&g.type===js&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gl:e:{for(var b=g.key,A=_;A!==null;){if(A.key===b){if(b=g.type,b===js){if(A.tag===7){n(h,A.sibling),_=r(A,g.props.children),_.return=h,h=_;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===dr&&Qg(b)===A.type){n(h,A.sibling),_=r(A,g.props),_.ref=Jo(h,A,g),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}g.type===js?(_=ls(g.props.children,h.mode,S,g.key),_.return=h,h=_):(S=xc(g.type,g.key,g.props,null,h.mode,S),S.ref=Jo(h,_,g),S.return=h,h=S)}return o(h);case Ws:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(h,_.sibling),_=r(_,g.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Rf(g,h.mode,S),_.return=h,h=_}return o(h);case dr:return A=g._init,m(h,_,A(g._payload),S)}if(ua(g))return v(h,_,g,S);if(Yo(g))return x(h,_,g,S);bl(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,g),_.return=h,h=_):(n(h,_),_=Cf(g,h.mode,S),_.return=h,h=_),o(h)):n(h,_)}return m}var Mo=Hx(!0),Vx=Hx(!1),$c=Fr(null),Yc=null,Js=null,Zp=null;function Qp(){Zp=Js=Yc=null}function Jp(t){var e=$c.current;mt($c),t._currentValue=e}function Jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fo(t,e){Yc=t,Zp=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Zp!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Yc===null)throw Error(ne(308));Js=t,Yc.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var ns=null;function em(t){ns===null?ns=[t]:ns.push(t)}function Gx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,em(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function tm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,em(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function hc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bp(t,n)}}function Jg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(f=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=St({},d,f);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=d}}function e0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var rl={},Ti=Fr(rl),Ba=Fr(rl),Ha=Fr(rl);function is(t){if(t===rl)throw Error(ne(174));return t}function nm(t,e){switch(lt(Ha,e),lt(Ba,t),lt(Ti,rl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dd(e,t)}mt(Ti),lt(Ti,e)}function Eo(){mt(Ti),mt(Ba),mt(Ha)}function jx(t){is(Ha.current);var e=is(Ti.current),n=Dd(e,t.type);e!==n&&(lt(Ba,t),lt(Ti,n))}function im(t){Ba.current===t&&(mt(Ti),mt(Ba))}var xt=Fr(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mf=[];function rm(){for(var t=0;t<Mf.length;t++)Mf[t]._workInProgressVersionPrimary=null;Mf.length=0}var pc=er.ReactCurrentDispatcher,Ef=er.ReactCurrentBatchConfig,gs=0,yt=null,Pt=null,Ut=null,Zc=!1,Ma=!1,Va=0,qE=0;function Gt(){throw Error(ne(321))}function sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ui(t[n],e[n]))return!1;return!0}function om(t,e,n,i,r,s){if(gs=s,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pc.current=t===null||t.memoizedState===null?JE:ew,t=n(i,r),Ma){s=0;do{if(Ma=!1,Va=0,25<=s)throw Error(ne(301));s+=1,Ut=Pt=null,e.updateQueue=null,pc.current=tw,t=n(i,r)}while(Ma)}if(pc.current=Qc,e=Pt!==null&&Pt.next!==null,gs=0,Ut=Pt=yt=null,Zc=!1,e)throw Error(ne(300));return t}function am(){var t=Va!==0;return Va=0,t}function pi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function jn(){if(Pt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ut===null?yt.memoizedState:Ut.next;if(e!==null)Ut=e,Pt=t;else{if(t===null)throw Error(ne(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?yt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function Ga(t,e){return typeof e=="function"?e(t):e}function wf(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((gs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,yt.lanes|=u,vs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ui(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,yt.lanes|=s,vs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tf(t){var e=jn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ui(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Xx(){}function $x(t,e){var n=yt,i=jn(),r=e(),s=!ui(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,lm(Kx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Wa(9,qx.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ne(349));gs&30||Yx(n,e,r)}return r}function Yx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function qx(t,e,n,i){e.value=n,e.getSnapshot=i,Zx(e)&&Qx(t)}function Kx(t,e,n){return n(function(){Zx(e)&&Qx(t)})}function Zx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ui(t,n)}catch{return!0}}function Qx(t){var e=qi(t,1);e!==null&&ai(e,t,1,-1)}function t0(t){var e=pi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:t},e.queue=t,t=t.dispatch=QE.bind(null,yt,t),[e.memoizedState,t]}function Wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jx(){return jn().memoizedState}function mc(t,e,n,i){var r=pi();yt.flags|=t,r.memoizedState=Wa(1|e,n,void 0,i===void 0?null:i)}function Au(t,e,n,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Pt!==null){var o=Pt.memoizedState;if(s=o.destroy,i!==null&&sm(i,o.deps)){r.memoizedState=Wa(e,n,s,i);return}}yt.flags|=t,r.memoizedState=Wa(1|e,n,s,i)}function n0(t,e){return mc(8390656,8,t,e)}function lm(t,e){return Au(2048,8,t,e)}function e1(t,e){return Au(4,2,t,e)}function t1(t,e){return Au(4,4,t,e)}function n1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i1(t,e,n){return n=n!=null?n.concat([t]):null,Au(4,4,n1.bind(null,e,t),n)}function cm(){}function r1(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function s1(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function o1(t,e,n){return gs&21?(ui(n,e)||(n=fx(),yt.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function KE(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Ef.transition;Ef.transition={};try{t(!1),e()}finally{rt=n,Ef.transition=i}}function a1(){return jn().memoizedState}function ZE(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},l1(t))c1(e,n);else if(n=Gx(t,e,n,i),n!==null){var r=nn();ai(n,t,i,r),u1(n,e,i)}}function QE(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(l1(t))c1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ui(a,o)){var l=e.interleaved;l===null?(r.next=r,em(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gx(t,e,r,i),n!==null&&(r=nn(),ai(n,t,i,r),u1(n,e,i))}}function l1(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function c1(t,e){Ma=Zc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function u1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bp(t,n)}}var Qc={readContext:Wn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},JE={readContext:Wn,useCallback:function(t,e){return pi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:n0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mc(4194308,4,n1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mc(4194308,4,t,e)},useInsertionEffect:function(t,e){return mc(4,2,t,e)},useMemo:function(t,e){var n=pi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=pi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ZE.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=pi();return t={current:t},e.memoizedState=t},useState:t0,useDebugValue:cm,useDeferredValue:function(t){return pi().memoizedState=t},useTransition:function(){var t=t0(!1),e=t[0];return t=KE.bind(null,t[1]),pi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=pi();if(vt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ft===null)throw Error(ne(349));gs&30||Yx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,n0(Kx.bind(null,i,s,t),[t]),i.flags|=2048,Wa(9,qx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=pi(),e=Ft.identifierPrefix;if(vt){var n=Bi,i=zi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Va++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ew={readContext:Wn,useCallback:r1,useContext:Wn,useEffect:lm,useImperativeHandle:i1,useInsertionEffect:e1,useLayoutEffect:t1,useMemo:s1,useReducer:wf,useRef:Jx,useState:function(){return wf(Ga)},useDebugValue:cm,useDeferredValue:function(t){var e=jn();return o1(e,Pt.memoizedState,t)},useTransition:function(){var t=wf(Ga)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Xx,useSyncExternalStore:$x,useId:a1,unstable_isNewReconciler:!1},tw={readContext:Wn,useCallback:r1,useContext:Wn,useEffect:lm,useImperativeHandle:i1,useInsertionEffect:e1,useLayoutEffect:t1,useMemo:s1,useReducer:Tf,useRef:Jx,useState:function(){return Tf(Ga)},useDebugValue:cm,useDeferredValue:function(t){var e=jn();return Pt===null?e.memoizedState=t:o1(e,Pt.memoizedState,t)},useTransition:function(){var t=Tf(Ga)[0],e=jn().memoizedState;return[t,e]},useMutableSource:Xx,useSyncExternalStore:$x,useId:a1,unstable_isNewReconciler:!1};function Jn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function eh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?Ts(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Ar(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(ai(e,t,r,i),hc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=Ar(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(ai(e,t,r,i),hc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=Ar(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(ai(e,t,i,n),hc(e,t,i))}};function i0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oa(n,i)||!Oa(r,s):!0}function f1(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=gn(e)?ps:Kt.current,i=e.contextTypes,s=(i=i!=null)?yo(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function r0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function th(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},tm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=gn(e)?ps:Kt.current,r.context=yo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(eh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bu.enqueueReplaceState(r,r.state,null),qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function wo(t,e){try{var n="",i=e;do n+=RM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Af(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var nw=typeof WeakMap=="function"?WeakMap:Map;function d1(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){eu||(eu=!0,dh=i),nh(t,e)},n}function h1(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nh(t,e),typeof i!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function s0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new nw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=gw.bind(null,t,e,n),e.then(t,t))}function o0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function a0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var iw=er.ReactCurrentOwner,pn=!1;function Jt(t,e,n,i){e.child=t===null?Vx(e,null,n,i):Mo(e,t.child,n,i)}function l0(t,e,n,i,r){n=n.render;var s=e.ref;return fo(e,r),i=om(t,e,n,i,s,r),n=am(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(vt&&n&&Yp(e),e.flags|=1,Jt(t,e,i,r),e.child)}function c0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,p1(t,e,s,i,r)):(t=xc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oa,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function p1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oa(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return ih(t,e,n,i,r)}function m1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(to,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(to,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(to,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(to,wn),wn|=i;return Jt(t,e,r,n),e.child}function g1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ih(t,e,n,i,r){var s=gn(n)?ps:Kt.current;return s=yo(e,s),fo(e,r),n=om(t,e,n,i,s,r),i=am(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(vt&&i&&Yp(e),e.flags|=1,Jt(t,e,n,r),e.child)}function u0(t,e,n,i,r){if(gn(n)){var s=!0;Wc(e)}else s=!1;if(fo(e,r),e.stateNode===null)gc(t,e),f1(e,n,i),th(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=gn(n)?ps:Kt.current,c=yo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&r0(e,o,i,c),hr=!1;var f=e.memoizedState;o.state=f,qc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||mn.current||hr?(typeof u=="function"&&(eh(e,n,u,i),l=e.memoizedState),(a=hr||i0(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Wx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=gn(n)?ps:Kt.current,l=yo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&r0(e,o,i,l),hr=!1,f=e.memoizedState,o.state=f,qc(e,i,o,r);var v=e.memoizedState;a!==d||f!==v||mn.current||hr?(typeof p=="function"&&(eh(e,n,p,i),v=e.memoizedState),(c=hr||i0(e,n,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return rh(t,e,n,i,s,r)}function rh(t,e,n,i,r,s){g1(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&qg(e,n,!1),Ki(t,e,s);i=e.stateNode,iw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Mo(e,t.child,null,s),e.child=Mo(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&qg(e,n,!0),e.child}function v1(t){var e=t.stateNode;e.pendingContext?Yg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yg(t,e.context,!1),nm(t,e.containerInfo)}function f0(t,e,n,i,r){return So(),Kp(r),e.flags|=256,Jt(t,e,n,i),e.child}var sh={dehydrated:null,treeContext:null,retryLane:0};function oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function _1(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(xt,r&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=oh(n),e.memoizedState=sh,t):um(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return rw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sh,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function um(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cl(t,e,n,i){return i!==null&&Kp(i),Mo(e,t.child,null,n),t=um(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Af(Error(ne(422))),Cl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pu({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Mo(e,t.child,null,o),e.child.memoizedState=oh(o),e.memoizedState=sh,s);if(!(e.mode&1))return Cl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Af(s,i,void 0),Cl(t,e,o,i)}if(a=(o&t.childLanes)!==0,pn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),ai(i,t,r,-1))}return gm(),i=Af(Error(ne(421))),Cl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=vw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=Er(r.nextSibling),Cn=e,vt=!0,ti=null,t!==null&&(kn[zn++]=zi,kn[zn++]=Bi,kn[zn++]=ms,zi=t.id,Bi=t.overflow,ms=e),e=um(e,i.children),e.flags|=4096,e)}function d0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Jd(t.return,e,n)}function bf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function x1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&d0(t,n,e);else if(t.tag===19)d0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bf(e,!0,n,null,s);break;case"together":bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function sw(t,e,n){switch(e.tag){case 3:v1(e),So();break;case 5:jx(e);break;case 1:gn(e.type)&&Wc(e);break;case 4:nm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt($c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?_1(t,e,n):(lt(xt,xt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);lt(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return x1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,m1(t,e,n)}return Ki(t,e,n)}var y1,ah,S1,M1;y1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ah=function(){};S1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,is(Ti.current);var s=null;switch(n){case"input":r=Rd(t,r),i=Rd(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Id(t,r),i=Id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vc)}Nd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ra.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ra.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};M1=function(t,e,n,i){n!==i&&(e.flags|=4)};function ea(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Wt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ow(t,e,n){var i=e.pendingProps;switch(qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(e),null;case 1:return gn(e.type)&&Gc(),Wt(e),null;case 3:return i=e.stateNode,Eo(),mt(mn),mt(Kt),rm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ti!==null&&(mh(ti),ti=null))),ah(t,e),Wt(e),null;case 5:im(e);var r=is(Ha.current);if(n=e.type,t!==null&&e.stateNode!=null)S1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Wt(e),null}if(t=is(Ti.current),Al(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[yi]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)dt(da[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":Sg(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":Eg(i,s),dt("invalid",i)}Nd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tl(i.textContent,a,t),r=["children",""+a]):Ra.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":vl(i),Mg(i,s,!0);break;case"textarea":vl(i),wg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=K_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[yi]=e,t[za]=i,y1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ud(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)dt(da[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":Sg(t,i),r=Rd(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),dt("invalid",t);break;case"textarea":Eg(t,i),r=Id(t,i),dt("invalid",t);break;default:r=i}Nd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?J_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ra.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Np(t,s,l,o))}switch(n){case"input":vl(t),Mg(t,i,!1);break;case"textarea":vl(t),wg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ao(t,!!i.multiple,s,!1):i.defaultValue!=null&&ao(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Wt(e),null;case 6:if(t&&e.stateNode!=null)M1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=is(Ha.current),is(Ti.current),Al(e)){if(i=e.stateNode,n=e.memoizedProps,i[yi]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Tl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[yi]=e,e.stateNode=i}return Wt(e),null;case 13:if(mt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&An!==null&&e.mode&1&&!(e.flags&128))Bx(),So(),e.flags|=98560,s=!1;else if(s=Al(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[yi]=e}else So(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Wt(e),s=!1}else ti!==null&&(mh(ti),ti=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Lt===0&&(Lt=3):gm())),e.updateQueue!==null&&(e.flags|=4),Wt(e),null);case 4:return Eo(),ah(t,e),t===null&&Fa(e.stateNode.containerInfo),Wt(e),null;case 10:return Jp(e.type._context),Wt(e),null;case 17:return gn(e.type)&&Gc(),Wt(e),null;case 19:if(mt(xt),s=e.memoizedState,s===null)return Wt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ea(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,ea(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>To&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ea(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!vt)return Wt(e),null}else 2*Tt()-s.renderingStartTime>To&&n!==1073741824&&(e.flags|=128,i=!0,ea(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=xt.current,lt(xt,i?n&1|2:n&1),e):(Wt(e),null);case 22:case 23:return mm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Wt(e),e.subtreeFlags&6&&(e.flags|=8192)):Wt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function aw(t,e){switch(qp(e),e.tag){case 1:return gn(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Eo(),mt(mn),mt(Kt),rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return im(e),null;case 13:if(mt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));So()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(xt),null;case 4:return Eo(),null;case 10:return Jp(e.type._context),null;case 22:case 23:return mm(),null;case 24:return null;default:return null}}var Rl=!1,$t=!1,lw=typeof WeakSet=="function"?WeakSet:Set,pe=null;function eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function lh(t,e,n){try{n()}catch(i){Et(t,e,i)}}var h0=!1;function cw(t,e){if(jd=zc,t=bx(),$p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xd={focusedElem:t,selectionRange:n},zc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:Jn(e.type,x),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){Et(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=h0,h0=!1,v}function Ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lh(e,n,s)}r=r.next}while(r!==i)}}function Cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function E1(t){var e=t.alternate;e!==null&&(t.alternate=null,E1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yi],delete e[za],delete e[qd],delete e[jE],delete e[XE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function w1(t){return t.tag===5||t.tag===3||t.tag===4}function p0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||w1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vc));else if(i!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}function fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}var zt=null,ei=!1;function ir(t,e,n){for(n=n.child;n!==null;)T1(t,e,n),n=n.sibling}function T1(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(yu,n)}catch{}switch(n.tag){case 5:$t||eo(n,e);case 6:var i=zt,r=ei;zt=null,ir(t,e,n),zt=i,ei=r,zt!==null&&(ei?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(ei?(t=zt,n=n.stateNode,t.nodeType===8?yf(t.parentNode,n):t.nodeType===1&&yf(t,n),Na(t)):yf(zt,n.stateNode));break;case 4:i=zt,r=ei,zt=n.stateNode.containerInfo,ei=!0,ir(t,e,n),zt=i,ei=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lh(n,e,o),r=r.next}while(r!==i)}ir(t,e,n);break;case 1:if(!$t&&(eo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Et(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?($t=(i=$t)||n.memoizedState!==null,ir(t,e,n),$t=i):ir(t,e,n);break;default:ir(t,e,n)}}function m0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lw),e.forEach(function(i){var r=_w.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,ei=!1;break e;case 3:zt=a.stateNode.containerInfo,ei=!0;break e;case 4:zt=a.stateNode.containerInfo,ei=!0;break e}a=a.return}if(zt===null)throw Error(ne(160));T1(s,o,r),zt=null,ei=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)A1(e,t),e=e.sibling}function A1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),hi(t),i&4){try{Ea(3,t,t.return),Cu(3,t)}catch(x){Et(t,t.return,x)}try{Ea(5,t,t.return)}catch(x){Et(t,t.return,x)}}break;case 1:qn(e,t),hi(t),i&512&&n!==null&&eo(n,n.return);break;case 5:if(qn(e,t),hi(t),i&512&&n!==null&&eo(n,n.return),t.flags&32){var r=t.stateNode;try{Pa(r,"")}catch(x){Et(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Y_(r,s),Ud(a,o);var c=Ud(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?J_(r,d):u==="dangerouslySetInnerHTML"?Z_(r,d):u==="children"?Pa(r,d):Np(r,u,d,c)}switch(a){case"input":Pd(r,s);break;case"textarea":q_(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ao(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ao(r,!!s.multiple,s.defaultValue,!0):ao(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(x){Et(t,t.return,x)}}break;case 6:if(qn(e,t),hi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Et(t,t.return,x)}}break;case 3:if(qn(e,t),hi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Na(e.containerInfo)}catch(x){Et(t,t.return,x)}break;case 4:qn(e,t),hi(t);break;case 13:qn(e,t),hi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(hm=Tt())),i&4&&m0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||u,qn(e,t),$t=c):qn(e,t),hi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(pe=t,u=t.child;u!==null;){for(d=pe=u;pe!==null;){switch(f=pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ea(4,f,f.return);break;case 1:eo(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Et(i,n,x)}}break;case 5:eo(f,f.return);break;case 22:if(f.memoizedState!==null){v0(d);continue}}p!==null?(p.return=f,pe=p):v0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Q_("display",o))}catch(x){Et(t,t.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){Et(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),hi(t),i&4&&m0(t);break;case 21:break;default:qn(e,t),hi(t)}}function hi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(w1(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Pa(r,""),i.flags&=-33);var s=p0(t);fh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=p0(t);uh(t,a,o);break;default:throw Error(ne(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uw(t,e,n){pe=t,b1(t)}function b1(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Rl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Rl;var c=$t;if(Rl=o,($t=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?_0(r):l!==null?(l.return=o,pe=l):_0(r);for(;s!==null;)pe=s,b1(s),s=s.sibling;pe=r,Rl=a,$t=c}g0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):g0(t)}}function g0(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&e0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}e0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Na(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&ch(e)}catch(f){Et(e,e.return,f)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function v0(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function _0(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Cu(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{ch(e)}catch(l){Et(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){Et(e,o,l)}}}catch(l){Et(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var fw=Math.ceil,Jc=er.ReactCurrentDispatcher,fm=er.ReactCurrentOwner,Vn=er.ReactCurrentBatchConfig,qe=0,Ft=null,Rt=null,Ht=0,wn=0,to=Fr(0),Lt=0,ja=null,vs=0,Ru=0,dm=0,wa=null,dn=null,hm=0,To=1/0,Oi=null,eu=!1,dh=null,Tr=null,Pl=!1,_r=null,tu=0,Ta=0,hh=null,vc=-1,_c=0;function nn(){return qe&6?Tt():vc!==-1?vc:vc=Tt()}function Ar(t){return t.mode&1?qe&2&&Ht!==0?Ht&-Ht:YE.transition!==null?(_c===0&&(_c=fx()),_c):(t=rt,t!==0||(t=window.event,t=t===void 0?16:_x(t.type)),t):1}function ai(t,e,n,i){if(50<Ta)throw Ta=0,hh=null,Error(ne(185));tl(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(Ru|=n),Lt===4&&mr(t,Ht)),vn(t,i),n===1&&qe===0&&!(e.mode&1)&&(To=Tt()+500,Tu&&kr()))}function vn(t,e){var n=t.callbackNode;YM(t,e);var i=kc(t,t===Ft?Ht:0);if(i===0)n!==null&&bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bg(n),e===1)t.tag===0?$E(x0.bind(null,t)):Fx(x0.bind(null,t)),GE(function(){!(qe&6)&&kr()}),n=null;else{switch(dx(i)){case 1:n=zp;break;case 4:n=cx;break;case 16:n=Fc;break;case 536870912:n=ux;break;default:n=Fc}n=U1(n,C1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C1(t,e){if(vc=-1,_c=0,qe&6)throw Error(ne(327));var n=t.callbackNode;if(ho()&&t.callbackNode!==n)return null;var i=kc(t,t===Ft?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nu(t,i);else{e=i;var r=qe;qe|=2;var s=P1();(Ft!==t||Ht!==e)&&(Oi=null,To=Tt()+500,as(t,e));do try{pw();break}catch(a){R1(t,a)}while(!0);Qp(),Jc.current=s,qe=r,Rt!==null?e=0:(Ft=null,Ht=0,e=Lt)}if(e!==0){if(e===2&&(r=Bd(t),r!==0&&(i=r,e=ph(t,r))),e===1)throw n=ja,as(t,0),mr(t,i),vn(t,Tt()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!dw(r)&&(e=nu(t,i),e===2&&(s=Bd(t),s!==0&&(i=s,e=ph(t,s))),e===1))throw n=ja,as(t,0),mr(t,i),vn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Kr(t,dn,Oi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=hm+500-Tt(),10<e)){if(kc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yd(Kr.bind(null,t,dn,Oi),e);break}Kr(t,dn,Oi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*fw(i/1960))-i,10<i){t.timeoutHandle=Yd(Kr.bind(null,t,dn,Oi),i);break}Kr(t,dn,Oi);break;case 5:Kr(t,dn,Oi);break;default:throw Error(ne(329))}}}return vn(t,Tt()),t.callbackNode===n?C1.bind(null,t):null}function ph(t,e){var n=wa;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=nu(t,e),t!==2&&(e=dn,dn=n,e!==null&&mh(e)),t}function mh(t){dn===null?dn=t:dn.push.apply(dn,t)}function dw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ui(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~dm,e&=~Ru,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function x0(t){if(qe&6)throw Error(ne(327));ho();var e=kc(t,0);if(!(e&1))return vn(t,Tt()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var i=Bd(t);i!==0&&(e=i,n=ph(t,i))}if(n===1)throw n=ja,as(t,0),mr(t,e),vn(t,Tt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Kr(t,dn,Oi),vn(t,Tt()),null}function pm(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(To=Tt()+500,Tu&&kr())}}function _s(t){_r!==null&&_r.tag===0&&!(qe&6)&&ho();var e=qe;qe|=1;var n=Vn.transition,i=rt;try{if(Vn.transition=null,rt=1,t)return t()}finally{rt=i,Vn.transition=n,qe=e,!(qe&6)&&kr()}}function mm(){wn=to.current,mt(to)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,VE(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(qp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gc();break;case 3:Eo(),mt(mn),mt(Kt),rm();break;case 5:im(i);break;case 4:Eo();break;case 13:mt(xt);break;case 19:mt(xt);break;case 10:Jp(i.type._context);break;case 22:case 23:mm()}n=n.return}if(Ft=t,Rt=t=br(t.current,null),Ht=wn=e,Lt=0,ja=null,dm=Ru=vs=0,dn=wa=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ns=null}return t}function R1(t,e){do{var n=Rt;try{if(Qp(),pc.current=Qc,Zc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zc=!1}if(gs=0,Ut=Pt=yt=null,Ma=!1,Va=0,fm.current=null,n===null||n.return===null){Lt=1,ja=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=o0(o);if(p!==null){p.flags&=-257,a0(p,o,a,s,e),p.mode&1&&s0(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){s0(s,c,e),gm();break e}l=Error(ne(426))}}else if(vt&&a.mode&1){var m=o0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),a0(m,o,a,s,e),Kp(wo(l,a));break e}}s=l=wo(l,a),Lt!==4&&(Lt=2),wa===null?wa=[s]:wa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=d1(s,l,e);Jg(s,h);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Tr===null||!Tr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=h1(s,a,e);Jg(s,S);break e}}s=s.return}while(s!==null)}I1(n)}catch(b){e=b,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function P1(){var t=Jc.current;return Jc.current=Qc,t===null?Qc:t}function gm(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(vs&268435455)&&!(Ru&268435455)||mr(Ft,Ht)}function nu(t,e){var n=qe;qe|=2;var i=P1();(Ft!==t||Ht!==e)&&(Oi=null,as(t,e));do try{hw();break}catch(r){R1(t,r)}while(!0);if(Qp(),qe=n,Jc.current=i,Rt!==null)throw Error(ne(261));return Ft=null,Ht=0,Lt}function hw(){for(;Rt!==null;)L1(Rt)}function pw(){for(;Rt!==null&&!zM();)L1(Rt)}function L1(t){var e=N1(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?I1(t):Rt=e,fm.current=null}function I1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=aw(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Rt=null;return}}else if(n=ow(n,e,wn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Kr(t,e,n){var i=rt,r=Vn.transition;try{Vn.transition=null,rt=1,mw(t,e,n,i)}finally{Vn.transition=r,rt=i}return null}function mw(t,e,n,i){do ho();while(_r!==null);if(qe&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qM(t,s),t===Ft&&(Rt=Ft=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,U1(Fc,function(){return ho(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=rt;rt=1;var a=qe;qe|=4,fm.current=null,cw(t,n),A1(n,t),UE(Xd),zc=!!jd,Xd=jd=null,t.current=n,uw(n),BM(),qe=a,rt=o,Vn.transition=s}else t.current=n;if(Pl&&(Pl=!1,_r=t,tu=r),s=t.pendingLanes,s===0&&(Tr=null),GM(n.stateNode),vn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(eu)throw eu=!1,t=dh,dh=null,t;return tu&1&&t.tag!==0&&ho(),s=t.pendingLanes,s&1?t===hh?Ta++:(Ta=0,hh=t):Ta=0,kr(),null}function ho(){if(_r!==null){var t=dx(tu),e=Vn.transition,n=rt;try{if(Vn.transition=null,rt=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,tu=0,qe&6)throw Error(ne(331));var r=qe;for(qe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var u=pe;switch(u.tag){case 0:case 11:case 15:Ea(8,u,s)}var d=u.child;if(d!==null)d.return=u,pe=d;else for(;pe!==null;){u=pe;var f=u.sibling,p=u.return;if(E1(u),u===c){pe=null;break}if(f!==null){f.return=p,pe=f;break}pe=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,pe=h;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(b){Et(a,a.return,b)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(qe=r,kr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(yu,t)}catch{}i=!0}return i}finally{rt=n,Vn.transition=e}}return!1}function y0(t,e,n){e=wo(n,e),e=d1(t,e,1),t=wr(t,e,1),e=nn(),t!==null&&(tl(t,1,e),vn(t,e))}function Et(t,e,n){if(t.tag===3)y0(t,t,n);else for(;e!==null;){if(e.tag===3){y0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Tr===null||!Tr.has(i))){t=wo(n,t),t=h1(e,t,1),e=wr(e,t,1),t=nn(),e!==null&&(tl(e,1,t),vn(e,t));break}}e=e.return}}function gw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Ht&n)===n&&(Lt===4||Lt===3&&(Ht&130023424)===Ht&&500>Tt()-hm?as(t,0):dm|=n),vn(t,e)}function D1(t,e){e===0&&(t.mode&1?(e=yl,yl<<=1,!(yl&130023424)&&(yl=4194304)):e=1);var n=nn();t=qi(t,e),t!==null&&(tl(t,e,n),vn(t,n))}function vw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D1(t,n)}function _w(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),D1(t,n)}var N1;N1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,sw(t,e,n);pn=!!(t.flags&131072)}else pn=!1,vt&&e.flags&1048576&&kx(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;gc(t,e),t=e.pendingProps;var r=yo(e,Kt.current);fo(e,n),r=om(null,e,i,t,r,n);var s=am();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tm(e),r.updater=bu,e.stateNode=r,r._reactInternals=e,th(e,i,t,n),e=rh(null,e,i,!0,s,n)):(e.tag=0,vt&&s&&Yp(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(gc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yw(i),t=Jn(i,t),r){case 0:e=ih(null,e,i,t,n);break e;case 1:e=u0(null,e,i,t,n);break e;case 11:e=l0(null,e,i,t,n);break e;case 14:e=c0(null,e,i,Jn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),ih(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),u0(t,e,i,r,n);case 3:e:{if(v1(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wx(t,e),qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=wo(Error(ne(423)),e),e=f0(t,e,i,n,r);break e}else if(i!==r){r=wo(Error(ne(424)),e),e=f0(t,e,i,n,r);break e}else for(An=Er(e.stateNode.containerInfo.firstChild),Cn=e,vt=!0,ti=null,n=Vx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(So(),i===r){e=Ki(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return jx(e),t===null&&Qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,$d(i,r)?o=null:s!==null&&$d(i,s)&&(e.flags|=32),g1(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return _1(t,e,n);case 4:return nm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Mo(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),l0(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,lt($c,i._currentValue),i._currentValue=o,s!==null)if(ui(s.value,o)){if(s.children===r.children&&!mn.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Jd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Jd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fo(e,n),r=Wn(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),c0(t,e,i,r,n);case 15:return p1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),gc(t,e),e.tag=1,gn(i)?(t=!0,Wc(e)):t=!1,fo(e,n),f1(e,i,r),th(e,i,r,n),rh(null,e,i,!0,t,n);case 19:return x1(t,e,n);case 22:return m1(t,e,n)}throw Error(ne(156,e.tag))};function U1(t,e){return lx(t,e)}function xw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new xw(t,e,n,i)}function vm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yw(t){if(typeof t=="function")return vm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Op)return 11;if(t===Fp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case js:return ls(n.children,r,s,e);case Up:o=8,r|=8;break;case Td:return t=Bn(12,n,e,r|2),t.elementType=Td,t.lanes=s,t;case Ad:return t=Bn(13,n,e,r),t.elementType=Ad,t.lanes=s,t;case bd:return t=Bn(19,n,e,r),t.elementType=bd,t.lanes=s,t;case j_:return Pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G_:o=10;break e;case W_:o=9;break e;case Op:o=11;break e;case Fp:o=14;break e;case dr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Bn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function Pu(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=j_,t.lanes=n,t.stateNode={isHidden:!1},t}function Cf(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Rf(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cf(0),this.expirationTimes=cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _m(t,e,n,i,r,s,o,a,l){return t=new Sw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tm(s),t}function Mw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function O1(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ts(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(gn(n))return Ox(t,n,e)}return e}function F1(t,e,n,i,r,s,o,a,l){return t=_m(n,i,!0,t,r,s,o,a,l),t.context=O1(null),n=t.current,i=nn(),r=Ar(n),s=Gi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,tl(t,r,i),vn(t,i),t}function Lu(t,e,n,i){var r=e.current,s=nn(),o=Ar(r);return n=O1(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(ai(t,r,o,s),hc(t,r,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function S0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xm(t,e){S0(t,e),(t=t.alternate)&&S0(t,e)}function Ew(){return null}var k1=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}Iu.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Lu(t,e,null,null)};Iu.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){Lu(null,t,null,null)}),e[Yi]=null}};function Iu(t){this._internalRoot=t}Iu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&vx(t)}};function Sm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function M0(){}function ww(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=iu(o);s.call(c)}}var o=F1(e,i,t,0,null,!1,!1,"",M0);return t._reactRootContainer=o,t[Yi]=o.current,Fa(t.nodeType===8?t.parentNode:t),_s(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=iu(l);a.call(c)}}var l=_m(t,0,!1,null,null,!1,!1,"",M0);return t._reactRootContainer=l,t[Yi]=l.current,Fa(t.nodeType===8?t.parentNode:t),_s(function(){Lu(e,l,n,i)}),l}function Nu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=iu(o);a.call(l)}}Lu(e,o,t,r)}else o=ww(n,e,t,r,i);return iu(o)}hx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(Bp(e,n|1),vn(e,Tt()),!(qe&6)&&(To=Tt()+500,kr()))}break;case 13:_s(function(){var i=qi(t,1);if(i!==null){var r=nn();ai(i,t,1,r)}}),xm(t,1)}};Hp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=nn();ai(e,t,134217728,n)}xm(t,134217728)}};px=function(t){if(t.tag===13){var e=Ar(t),n=qi(t,e);if(n!==null){var i=nn();ai(n,t,e,i)}xm(t,e)}};mx=function(){return rt};gx=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Fd=function(t,e,n){switch(e){case"input":if(Pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wu(i);if(!r)throw Error(ne(90));$_(i),Pd(i,r)}}}break;case"textarea":q_(t,n);break;case"select":e=n.value,e!=null&&ao(t,!!n.multiple,e,!1)}};nx=pm;ix=_s;var Tw={usingClientEntryPoint:!1,Events:[il,qs,wu,ex,tx,pm]},ta={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Aw={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ox(t),t===null?null:t.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||Ew,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{yu=Ll.inject(Aw),wi=Ll}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tw;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sm(e))throw Error(ne(200));return Mw(t,e,null,n)};Dn.createRoot=function(t,e){if(!Sm(t))throw Error(ne(299));var n=!1,i="",r=k1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_m(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,Fa(t.nodeType===8?t.parentNode:t),new ym(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=ox(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return _s(t)};Dn.hydrate=function(t,e,n){if(!Du(e))throw Error(ne(200));return Nu(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!Sm(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=k1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F1(e,null,t,1,n??null,r,!1,s,o),t[Yi]=e.current,Fa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Iu(e)};Dn.render=function(t,e,n){if(!Du(e))throw Error(ne(200));return Nu(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!Du(t))throw Error(ne(40));return t._reactRootContainer?(_s(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Dn.unstable_batchedUpdates=pm;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Du(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Nu(t,e,n,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function z1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z1)}catch(t){console.error(t)}}z1(),z_.exports=Dn;var bw=z_.exports,B1,E0=bw;E0.createRoot,B1=E0.hydrateRoot;var H1={exports:{}},V1={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=at;function Cw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rw=typeof Object.is=="function"?Object.is:Cw,Pw=sl.useSyncExternalStore,Lw=sl.useRef,Iw=sl.useEffect,Dw=sl.useMemo,Nw=sl.useDebugValue;V1.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=Lw(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=Dw(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return d=v}return d=p}if(v=d,Rw(u,p))return v;var x=i(p);return r!==void 0&&r(v,x)?v:(u=p,d=x)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,i,r]);var a=Pw(t,s[0],s[1]);return Iw(function(){o.hasValue=!0,o.value=a},[a]),Nw(a),a};H1.exports=V1;var Uw=H1.exports,bn="default"in vg?ci:vg,w0=Symbol.for("react-redux-context"),T0=typeof globalThis<"u"?globalThis:{};function Ow(){if(!bn.createContext)return{};const t=T0[w0]??(T0[w0]=new Map);let e=t.get(bn.createContext);return e||(e=bn.createContext(null),t.set(bn.createContext,e)),e}var Lr=Ow(),Fw=()=>{throw new Error("uSES not initialized!")};function Mm(t=Lr){return function(){return bn.useContext(t)}}var G1=Mm(),W1=Fw,kw=t=>{W1=t},zw=(t,e)=>t===e;function Bw(t=Lr){const e=t===Lr?G1:Mm(t),n=(i,r={})=>{const{equalityFn:s=zw,devModeChecks:o={}}=typeof r=="function"?{equalityFn:r}:r,{store:a,subscription:l,getServerState:c,stabilityCheck:u,identityFunctionCheck:d}=e();bn.useRef(!0);const f=bn.useCallback({[i.name](v){return i(v)}}[i.name],[i,u,o.stabilityCheck]),p=W1(l.addNestedSub,a.getState,c||a.getState,f,s);return bn.useDebugValue(p),p};return Object.assign(n,{withTypes:()=>n}),n}var Wi=Bw();function Hw(t){t()}function Vw(){let t=null,e=null;return{clear(){t=null,e=null},notify(){Hw(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let i=t;for(;i;)n.push(i),i=i.next;return n},subscribe(n){let i=!0;const r=e={callback:n,next:null,prev:e};return r.prev?r.prev.next=r:t=r,function(){!i||t===null||(i=!1,r.next?r.next.prev=r.prev:e=r.prev,r.prev?r.prev.next=r.next:t=r.next)}}}}var A0={notify(){},get:()=>[]};function Gw(t,e){let n,i=A0,r=0,s=!1;function o(x){u();const m=i.subscribe(x);let h=!1;return()=>{h||(h=!0,m(),d())}}function a(){i.notify()}function l(){v.onStateChange&&v.onStateChange()}function c(){return s}function u(){r++,n||(n=t.subscribe(l),i=Vw())}function d(){r--,n&&r===0&&(n(),n=void 0,i.clear(),i=A0)}function f(){s||(s=!0,u())}function p(){s&&(s=!1,d())}const v={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:l,isSubscribed:c,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>i};return v}var Ww=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jw=typeof navigator<"u"&&navigator.product==="ReactNative",Xw=Ww||jw?bn.useLayoutEffect:bn.useEffect;function $w({store:t,context:e,children:n,serverState:i,stabilityCheck:r="once",identityFunctionCheck:s="once"}){const o=bn.useMemo(()=>{const c=Gw(t);return{store:t,subscription:c,getServerState:i?()=>i:void 0,stabilityCheck:r,identityFunctionCheck:s}},[t,i,r,s]),a=bn.useMemo(()=>t.getState(),[t]);Xw(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const l=e||Lr;return bn.createElement(l.Provider,{value:o},n)}var Yw=$w;function j1(t=Lr){const e=t===Lr?G1:Mm(t),n=()=>{const{store:i}=e();return i};return Object.assign(n,{withTypes:()=>n}),n}var qw=j1();function Kw(t=Lr){const e=t===Lr?qw:j1(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Em=Kw();kw(Uw.useSyncExternalStoreWithSelector);function fn(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Zw=typeof Symbol=="function"&&Symbol.observable||"@@observable",b0=Zw,Pf=()=>Math.random().toString(36).substring(7).split("").join("."),Qw={INIT:`@@redux/INIT${Pf()}`,REPLACE:`@@redux/REPLACE${Pf()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Pf()}`},C0=Qw;function Jw(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function X1(t,e,n){if(typeof t!="function")throw new Error(fn(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(fn(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(fn(1));return n(X1)(t,e)}let i=t,r=e,s=new Map,o=s,a=0,l=!1;function c(){o===s&&(o=new Map,s.forEach((m,h)=>{o.set(h,m)}))}function u(){if(l)throw new Error(fn(3));return r}function d(m){if(typeof m!="function")throw new Error(fn(4));if(l)throw new Error(fn(5));let h=!0;c();const _=a++;return o.set(_,m),function(){if(h){if(l)throw new Error(fn(6));h=!1,c(),o.delete(_),s=null}}}function f(m){if(!Jw(m))throw new Error(fn(7));if(typeof m.type>"u")throw new Error(fn(8));if(typeof m.type!="string")throw new Error(fn(17));if(l)throw new Error(fn(9));try{l=!0,r=i(r,m)}finally{l=!1}return(s=o).forEach(_=>{_()}),m}function p(m){if(typeof m!="function")throw new Error(fn(10));i=m,f({type:C0.REPLACE})}function v(){const m=d;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(fn(11));function _(){const S=h;S.next&&S.next(u())}return _(),{unsubscribe:m(_)}},[b0](){return this}}}return f({type:C0.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[b0]:v}}function $1(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...i)=>e(n(...i)))}function eT(...t){return e=>(n,i)=>{const r=e(n,i);let s=()=>{throw new Error(fn(15))};const o={getState:r.getState,dispatch:(l,...c)=>s(l,...c)},a=t.map(l=>l(o));return s=$1(...a)(r.dispatch),{...r,dispatch:s}}}function tT(t){return({dispatch:n,getState:i})=>r=>s=>typeof s=="function"?s(n,i,t):r(s)}var nT=tT(),Yt=function(){return Yt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Yt.apply(this,arguments)};function ru(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var ht="-ms-",Aa="-moz-",tt="-webkit-",Y1="comm",Uu="rule",wm="decl",iT="@import",q1="@keyframes",rT="@layer",K1=Math.abs,Tm=String.fromCharCode,gh=Object.assign;function sT(t,e){return Ot(t,0)^45?(((e<<2^Ot(t,0))<<2^Ot(t,1))<<2^Ot(t,2))<<2^Ot(t,3):0}function Z1(t){return t.trim()}function Fi(t,e){return(t=e.exec(t))?t[0]:t}function ke(t,e,n){return t.replace(e,n)}function yc(t,e,n){return t.indexOf(e,n)}function Ot(t,e){return t.charCodeAt(e)|0}function Ao(t,e,n){return t.slice(e,n)}function gi(t){return t.length}function Q1(t){return t.length}function ha(t,e){return e.push(t),t}function oT(t,e){return t.map(e).join("")}function R0(t,e){return t.filter(function(n){return!Fi(n,e)})}var Ou=1,bo=1,J1=0,Xn=0,Ct=0,Ho="";function Fu(t,e,n,i,r,s,o,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Ou,column:bo,length:o,return:"",siblings:a}}function fr(t,e){return gh(Fu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Cs(t){for(;t.root;)t=fr(t.root,{children:[t]});ha(t,t.siblings)}function aT(){return Ct}function lT(){return Ct=Xn>0?Ot(Ho,--Xn):0,bo--,Ct===10&&(bo=1,Ou--),Ct}function li(){return Ct=Xn<J1?Ot(Ho,Xn++):0,bo++,Ct===10&&(bo=1,Ou++),Ct}function cs(){return Ot(Ho,Xn)}function Sc(){return Xn}function ku(t,e){return Ao(Ho,t,e)}function vh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cT(t){return Ou=bo=1,J1=gi(Ho=t),Xn=0,[]}function uT(t){return Ho="",t}function Lf(t){return Z1(ku(Xn-1,_h(t===91?t+2:t===40?t+1:t)))}function fT(t){for(;(Ct=cs())&&Ct<33;)li();return vh(t)>2||vh(Ct)>3?"":" "}function dT(t,e){for(;--e&&li()&&!(Ct<48||Ct>102||Ct>57&&Ct<65||Ct>70&&Ct<97););return ku(t,Sc()+(e<6&&cs()==32&&li()==32))}function _h(t){for(;li();)switch(Ct){case t:return Xn;case 34:case 39:t!==34&&t!==39&&_h(Ct);break;case 40:t===41&&_h(t);break;case 92:li();break}return Xn}function hT(t,e){for(;li()&&t+Ct!==57;)if(t+Ct===84&&cs()===47)break;return"/*"+ku(e,Xn-1)+"*"+Tm(t===47?t:li())}function pT(t){for(;!vh(cs());)li();return ku(t,Xn)}function mT(t){return uT(Mc("",null,null,null,[""],t=cT(t),0,[0],t))}function Mc(t,e,n,i,r,s,o,a,l){for(var c=0,u=0,d=o,f=0,p=0,v=0,x=1,m=1,h=1,_=0,g="",S=r,b=s,A=i,E=g;m;)switch(v=_,_=li()){case 40:if(v!=108&&Ot(E,d-1)==58){yc(E+=ke(Lf(_),"&","&\f"),"&\f",K1(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Lf(_);break;case 9:case 10:case 13:case 32:E+=fT(v);break;case 92:E+=dT(Sc()-1,7);continue;case 47:switch(cs()){case 42:case 47:ha(gT(hT(li(),Sc()),e,n,l),l);break;default:E+="/"}break;case 123*x:a[c++]=gi(E)*h;case 125*x:case 59:case 0:switch(_){case 0:case 125:m=0;case 59+u:h==-1&&(E=ke(E,/\f/g,"")),p>0&&gi(E)-d&&ha(p>32?L0(E+";",i,n,d-1,l):L0(ke(E," ","")+";",i,n,d-2,l),l);break;case 59:E+=";";default:if(ha(A=P0(E,e,n,c,u,r,a,g,S=[],b=[],d,s),s),_===123)if(u===0)Mc(E,e,A,A,S,s,d,a,b);else switch(f===99&&Ot(E,3)===110?100:f){case 100:case 108:case 109:case 115:Mc(t,A,A,i&&ha(P0(t,A,A,0,0,r,a,g,r,S=[],d,b),b),r,b,d,a,i?S:b);break;default:Mc(E,A,A,A,[""],b,0,a,b)}}c=u=p=0,x=h=1,g=E="",d=o;break;case 58:d=1+gi(E),p=v;default:if(x<1){if(_==123)--x;else if(_==125&&x++==0&&lT()==125)continue}switch(E+=Tm(_),_*x){case 38:h=u>0?1:(E+="\f",-1);break;case 44:a[c++]=(gi(E)-1)*h,h=1;break;case 64:cs()===45&&(E+=Lf(li())),f=cs(),u=d=gi(g=E+=pT(Sc())),_++;break;case 45:v===45&&gi(E)==2&&(x=0)}}return s}function P0(t,e,n,i,r,s,o,a,l,c,u,d){for(var f=r-1,p=r===0?s:[""],v=Q1(p),x=0,m=0,h=0;x<i;++x)for(var _=0,g=Ao(t,f+1,f=K1(m=o[x])),S=t;_<v;++_)(S=Z1(m>0?p[_]+" "+g:ke(g,/&\f/g,p[_])))&&(l[h++]=S);return Fu(t,e,n,r===0?Uu:a,l,c,u,d)}function gT(t,e,n,i){return Fu(t,e,n,Y1,Tm(aT()),Ao(t,2,-2),0,i)}function L0(t,e,n,i,r){return Fu(t,e,n,wm,Ao(t,0,i),Ao(t,i+1,-1),i,r)}function ey(t,e,n){switch(sT(t,e)){case 5103:return tt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+t+t;case 4789:return Aa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+t+Aa+t+ht+t+t;case 5936:switch(Ot(t,e+11)){case 114:return tt+t+ht+ke(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return tt+t+ht+ke(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return tt+t+ht+ke(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return tt+t+ht+t+t;case 6165:return tt+t+ht+"flex-"+t+t;case 5187:return tt+t+ke(t,/(\w+).+(:[^]+)/,tt+"box-$1$2"+ht+"flex-$1$2")+t;case 5443:return tt+t+ht+"flex-item-"+ke(t,/flex-|-self/g,"")+(Fi(t,/flex-|baseline/)?"":ht+"grid-row-"+ke(t,/flex-|-self/g,""))+t;case 4675:return tt+t+ht+"flex-line-pack"+ke(t,/align-content|flex-|-self/g,"")+t;case 5548:return tt+t+ht+ke(t,"shrink","negative")+t;case 5292:return tt+t+ht+ke(t,"basis","preferred-size")+t;case 6060:return tt+"box-"+ke(t,"-grow","")+tt+t+ht+ke(t,"grow","positive")+t;case 4554:return tt+ke(t,/([^-])(transform)/g,"$1"+tt+"$2")+t;case 6187:return ke(ke(ke(t,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),t,"")+t;case 5495:case 3959:return ke(t,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return ke(ke(t,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+t+t;case 4200:if(!Fi(t,/flex-|baseline/))return ht+"grid-column-align"+Ao(t,e)+t;break;case 2592:case 3360:return ht+ke(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Fi(i.props,/grid-\w+-end/)})?~yc(t+(n=n[e].value),"span",0)?t:ht+ke(t,"-start","")+t+ht+"grid-row-span:"+(~yc(n,"span",0)?Fi(n,/\d+/):+Fi(n,/\d+/)-+Fi(t,/\d+/))+";":ht+ke(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Fi(i.props,/grid-\w+-start/)})?t:ht+ke(ke(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ke(t,/(.+)-inline(.+)/,tt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(gi(t)-1-e>6)switch(Ot(t,e+1)){case 109:if(Ot(t,e+4)!==45)break;case 102:return ke(t,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+Aa+(Ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~yc(t,"stretch",0)?ey(ke(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ke(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,o,a,l,c){return ht+r+":"+s+c+(o?ht+r+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(Ot(t,e+6)===121)return ke(t,":",":"+tt)+t;break;case 6444:switch(Ot(t,Ot(t,14)===45?18:11)){case 120:return ke(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(Ot(t,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+ht+"$2box$3")+t;case 100:return ke(t,":",":"+ht)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(t,"scroll-","scroll-snap-")+t}return t}function su(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function vT(t,e,n,i){switch(t.type){case rT:if(t.children.length)break;case iT:case wm:return t.return=t.return||t.value;case Y1:return"";case q1:return t.return=t.value+"{"+su(t.children,i)+"}";case Uu:if(!gi(t.value=t.props.join(",")))return""}return gi(n=su(t.children,i))?t.return=t.value+"{"+n+"}":""}function _T(t){var e=Q1(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function xT(t){return function(e){e.root||(e=e.return)&&t(e)}}function yT(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case wm:t.return=ey(t.value,t.length,n);return;case q1:return su([fr(t,{value:ke(t.value,"@","@"+tt)})],i);case Uu:if(t.length)return oT(n=t.props,function(r){switch(Fi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cs(fr(t,{props:[ke(r,/:(read-\w+)/,":"+Aa+"$1")]})),Cs(fr(t,{props:[r]})),gh(t,{props:R0(n,i)});break;case"::placeholder":Cs(fr(t,{props:[ke(r,/:(plac\w+)/,":"+tt+"input-$1")]})),Cs(fr(t,{props:[ke(r,/:(plac\w+)/,":"+Aa+"$1")]})),Cs(fr(t,{props:[ke(r,/:(plac\w+)/,ht+"input-$1")]})),Cs(fr(t,{props:[r]})),gh(t,{props:R0(n,i)});break}return""})}}var ST={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},En={},Co=typeof process<"u"&&En!==void 0&&(En.REACT_APP_SC_ATTR||En.SC_ATTR)||"data-styled",ty="active",ny="data-styled-version",zu="6.1.13",Am=`/*!sc*/
`,ou=typeof window<"u"&&"HTMLElement"in window,MT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&En!==void 0&&En.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&En.REACT_APP_SC_DISABLE_SPEEDY!==""?En.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&En.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&En!==void 0&&En.SC_DISABLE_SPEEDY!==void 0&&En.SC_DISABLE_SPEEDY!==""&&En.SC_DISABLE_SPEEDY!=="false"&&En.SC_DISABLE_SPEEDY),Bu=Object.freeze([]),Ro=Object.freeze({});function ET(t,e,n){return n===void 0&&(n=Ro),t.theme!==n.theme&&t.theme||e||n.theme}var iy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),wT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TT=/(^-|-$)/g;function I0(t){return t.replace(wT,"-").replace(TT,"")}var AT=/(a)(d)/gi,Il=52,D0=function(t){return String.fromCharCode(t+(t>25?39:97))};function xh(t){var e,n="";for(e=Math.abs(t);e>Il;e=e/Il|0)n=D0(e%Il)+n;return(D0(e%Il)+n).replace(AT,"$1-$2")}var If,ry=5381,no=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},sy=function(t){return no(ry,t)};function bT(t){return xh(sy(t)>>>0)}function CT(t){return t.displayName||t.name||"Component"}function Df(t){return typeof t=="string"&&!0}var oy=typeof Symbol=="function"&&Symbol.for,ay=oy?Symbol.for("react.memo"):60115,RT=oy?Symbol.for("react.forward_ref"):60112,PT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},LT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ly={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IT=((If={})[RT]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},If[ay]=ly,If);function N0(t){return("type"in(e=t)&&e.type.$$typeof)===ay?ly:"$$typeof"in t?IT[t.$$typeof]:PT;var e}var DT=Object.defineProperty,NT=Object.getOwnPropertyNames,U0=Object.getOwnPropertySymbols,UT=Object.getOwnPropertyDescriptor,OT=Object.getPrototypeOf,O0=Object.prototype;function cy(t,e,n){if(typeof e!="string"){if(O0){var i=OT(e);i&&i!==O0&&cy(t,i,n)}var r=NT(e);U0&&(r=r.concat(U0(e)));for(var s=N0(t),o=N0(e),a=0;a<r.length;++a){var l=r[a];if(!(l in LT||n&&n[l]||o&&l in o||s&&l in s)){var c=UT(e,l);try{DT(t,l,c)}catch{}}}}return t}function xs(t){return typeof t=="function"}function bm(t){return typeof t=="object"&&"styledComponentId"in t}function rs(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function F0(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function Xa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function yh(t,e,n){if(n===void 0&&(n=!1),!n&&!Xa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=yh(t[i],e[i]);else if(Xa(e))for(var i in e)t[i]=yh(t[i],e[i]);return t}function Cm(t,e){Object.defineProperty(t,"toString",{value:e})}function ys(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var FT=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw ys(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,o=r;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Am);return n},t}(),Ec=new Map,au=new Map,wc=1,Dl=function(t){if(Ec.has(t))return Ec.get(t);for(;au.has(wc);)wc++;var e=wc++;return Ec.set(t,e),au.set(e,t),e},kT=function(t,e){wc=e+1,Ec.set(t,e),au.set(e,t)},zT="style[".concat(Co,"][").concat(ny,'="').concat(zu,'"]'),BT=new RegExp("^".concat(Co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),HT=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},VT=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Am),r=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var l=a.match(BT);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(kT(u,c),HT(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},k0=function(t){for(var e=document.querySelectorAll(zT),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(Co)!==ty&&(VT(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function GT(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uy=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Co,"]")));return l[l.length-1]}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(Co,ty),i.setAttribute(ny,zu);var o=GT();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},WT=function(){function t(e){this.element=uy(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var o=i[r];if(o.ownerNode===n)return o}throw ys(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),jT=function(){function t(e){this.element=uy(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),XT=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),z0=ou,$T={isServer:!ou,useCSSOMInjection:!MT},fy=function(){function t(e,n,i){e===void 0&&(e=Ro),n===void 0&&(n={});var r=this;this.options=Yt(Yt({},$T),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&ou&&z0&&(z0=!1,k0(this)),Cm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var f=function(h){return au.get(h)}(d);if(f===void 0)return"continue";var p=s.names.get(f),v=o.getGroup(d);if(p===void 0||!p.size||v.length===0)return"continue";var x="".concat(Co,".g").concat(d,'[id="').concat(f,'"]'),m="";p!==void 0&&p.forEach(function(h){h.length>0&&(m+="".concat(h,","))}),l+="".concat(v).concat(x,'{content:"').concat(m,'"}').concat(Am)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return Dl(e)},t.prototype.rehydrate=function(){!this.server&&ou&&k0(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Yt(Yt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new XT(r):i?new WT(r):new jT(r)}(this.options),new FT(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Dl(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Dl(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Dl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),YT=/&/g,qT=/^\s*\/\/.*$/gm;function dy(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=dy(n.children,e)),n})}function KT(t){var e,n,i,r=Ro,s=r.options,o=s===void 0?Ro:s,a=r.plugins,l=a===void 0?Bu:a,c=function(f,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):f},u=l.slice();u.push(function(f){f.type===Uu&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(YT,n).replace(i,c))}),o.prefix&&u.push(yT),u.push(vT);var d=function(f,p,v,x){p===void 0&&(p=""),v===void 0&&(v=""),x===void 0&&(x="&"),e=x,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var m=f.replace(qT,""),h=mT(v||p?"".concat(v," ").concat(p," { ").concat(m," }"):m);o.namespace&&(h=dy(h,o.namespace));var _=[];return su(h,_T(u.concat(xT(function(g){return _.push(g)})))),_};return d.hash=l.length?l.reduce(function(f,p){return p.name||ys(15),no(f,p.name)},ry).toString():"",d}var ZT=new fy,Sh=KT(),hy=ci.createContext({shouldForwardProp:void 0,styleSheet:ZT,stylis:Sh});hy.Consumer;ci.createContext(void 0);function B0(){return at.useContext(hy)}var QT=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Sh);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Cm(this,function(){throw ys(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Sh),this.name+e.hash},t}(),JT=function(t){return t>="A"&&t<="Z"};function H0(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;JT(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var py=function(t){return t==null||t===!1||t===""},my=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!py(s)&&(Array.isArray(s)&&s.isCss||xs(s)?i.push("".concat(H0(r),":"),s,";"):Xa(s)?i.push.apply(i,ru(ru(["".concat(r," {")],my(s),!1),["}"],!1)):i.push("".concat(H0(r),": ").concat((e=r,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in ST||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function us(t,e,n,i){if(py(t))return[];if(bm(t))return[".".concat(t.styledComponentId)];if(xs(t)){if(!xs(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return us(r,e,n,i)}var s;return t instanceof QT?n?(t.inject(n,i),[t.getName(i)]):[t]:Xa(t)?my(t):Array.isArray(t)?Array.prototype.concat.apply(Bu,t.map(function(o){return us(o,e,n,i)})):[t.toString()]}function eA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(xs(n)&&!bm(n))return!1}return!0}var tA=sy(zu),nA=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&eA(e),this.componentId=n,this.baseHash=no(tA,n),this.baseStyle=i,fy.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=rs(r,this.staticRulesId);else{var s=F0(us(this.rules,e,n,i)),o=xh(no(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}r=rs(r,o),this.staticRulesId=o}else{for(var l=no(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var f=F0(us(d,e,n,i));l=no(l,f+u),c+=f}}if(c){var p=xh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=rs(r,p)}}return r},t}(),lu=ci.createContext(void 0);lu.Consumer;function iA(t){var e=ci.useContext(lu),n=at.useMemo(function(){return function(i,r){if(!i)throw ys(14);if(xs(i)){var s=i(r);return s}if(Array.isArray(i)||typeof i!="object")throw ys(8);return r?Yt(Yt({},r),i):i}(t.theme,e)},[t.theme,e]);return t.children?ci.createElement(lu.Provider,{value:n},t.children):null}var Nf={};function rA(t,e,n){var i=bm(t),r=t,s=!Df(t),o=e.attrs,a=o===void 0?Bu:o,l=e.componentId,c=l===void 0?function(S,b){var A=typeof S!="string"?"sc":I0(S);Nf[A]=(Nf[A]||0)+1;var E="".concat(A,"-").concat(bT(zu+A+Nf[A]));return b?"".concat(b,"-").concat(E):E}(e.displayName,e.parentComponentId):l,u=e.displayName,d=u===void 0?function(S){return Df(S)?"styled.".concat(S):"Styled(".concat(CT(S),")")}(t):u,f=e.displayName&&e.componentId?"".concat(I0(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(i&&r.shouldForwardProp){var x=r.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;v=function(S,b){return x(S,b)&&m(S,b)}}else v=x}var h=new nA(n,f,i?r.componentStyle:void 0);function _(S,b){return function(A,E,C){var G=A.attrs,y=A.componentStyle,w=A.defaultProps,H=A.foldedComponentIds,F=A.styledComponentId,V=A.target,Y=ci.useContext(lu),B=B0(),ee=A.shouldForwardProp||B.shouldForwardProp,L=ET(E,Y,w)||Ro,$=function(J,ae,le){for(var Ae,Te=Yt(Yt({},ae),{className:void 0,theme:le}),He=0;He<J.length;He+=1){var $e=xs(Ae=J[He])?Ae(Te):Ae;for(var Ue in $e)Te[Ue]=Ue==="className"?rs(Te[Ue],$e[Ue]):Ue==="style"?Yt(Yt({},Te[Ue]),$e[Ue]):$e[Ue]}return ae.className&&(Te.className=rs(Te.className,ae.className)),Te}(G,E,L),Z=$.as||V,ie={};for(var ye in $)$[ye]===void 0||ye[0]==="$"||ye==="as"||ye==="theme"&&$.theme===L||(ye==="forwardedAs"?ie.as=$.forwardedAs:ee&&!ee(ye,Z)||(ie[ye]=$[ye]));var Be=function(J,ae){var le=B0(),Ae=J.generateAndInjectStyles(ae,le.styleSheet,le.stylis);return Ae}(y,$),j=rs(H,F);return Be&&(j+=" "+Be),$.className&&(j+=" "+$.className),ie[Df(Z)&&!iy.has(Z)?"class":"className"]=j,ie.ref=C,at.createElement(Z,ie)}(g,S,b)}_.displayName=d;var g=ci.forwardRef(_);return g.attrs=p,g.componentStyle=h,g.displayName=d,g.shouldForwardProp=v,g.foldedComponentIds=i?rs(r.foldedComponentIds,r.styledComponentId):"",g.styledComponentId=f,g.target=i?r.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=i?function(b){for(var A=[],E=1;E<arguments.length;E++)A[E-1]=arguments[E];for(var C=0,G=A;C<G.length;C++)yh(b,G[C],!0);return b}({},r.defaultProps,S):S}}),Cm(g,function(){return".".concat(g.styledComponentId)}),s&&cy(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function V0(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var G0=function(t){return Object.assign(t,{isCss:!0})};function Hu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(xs(t)||Xa(t))return G0(us(V0(Bu,ru([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?us(i):G0(us(V0(i,e)))}function Mh(t,e,n){if(n===void 0&&(n=Ro),!e)throw ys(1,e);var i=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Hu.apply(void 0,ru([r],s,!1)))};return i.attrs=function(r){return Mh(t,e,Yt(Yt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Mh(t,e,Yt(Yt({},n),r))},i}var gy=function(t){return Mh(rA,t)},Ne=gy;iy.forEach(function(t){Ne[t]=gy(t)});const sA={fg:{normal:"hsla(0, 100%, 100%, 1)",clickable:"hsla(180, 100%, 64%, 1)",mute:"hsla(0, 0%, 100%, 0.75)"},bg:{normal:"hsla(0, 0%, 0%, 0.4)",mute:"hsla(0, 0%, 0%, 0.2)"},animationDuration:"250ms"},vy="SET_PAGE_PROGRESSION",oA=(t,e,n)=>({type:vy,relative:t,absolute:e,total:n}),_y="SET_STARS",W0=t=>({type:_y,stars:t}),xy="SET_ANCHOR",aA=(t,e)=>({type:xy,name:t,anchor:e}),yy="SET_PAGE_SIZE",lA=(t,e,n)=>({type:yy,width:t,height:e,devicePixelRatio:n}),cA={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},uA={prefix:"fas",iconName:"shuttle-space",icon:[640,512,["space-shuttle"],"f197","M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96 2 0zM352 128L245.2 63.9C210.4 43 170.6 32 130 32l-2 0 0 96 224 0zM96 128l0-96L80 32C53.5 32 32 53.5 32 80l0 48 8 0c-22.1 0-40 17.9-40 40l0 16L0 328l0 16c0 22.1 17.9 40 40 40l-8 0 0 48c0 26.5 21.5 48 48 48l16 0 0-96 8 0c26.2 0 49.4-12.6 64-32l288 0c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160l-288 0c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6l0 24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4l0-87.1c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z"]},fA=uA,dA={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6l0-128c0-17.7-14.3-32-32-32L352 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"]},hA=dA,pA={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},mA={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},j0=()=>{};let Rm={},Sy={},My=null,Ey={mark:j0,measure:j0};try{typeof window<"u"&&(Rm=window),typeof document<"u"&&(Sy=document),typeof MutationObserver<"u"&&(My=MutationObserver),typeof performance<"u"&&(Ey=performance)}catch{}const{userAgent:X0=""}=Rm.navigator||{},Ir=Rm,gt=Sy,$0=My,Nl=Ey;Ir.document;const tr=!!gt.documentElement&&!!gt.head&&typeof gt.addEventListener=="function"&&typeof gt.createElement=="function",wy=~X0.indexOf("MSIE")||~X0.indexOf("Trident/");var _t="classic",Ty="duotone",Rn="sharp",Pn="sharp-duotone",gA=[_t,Ty,Rn,Pn],vA={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Y0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_A=["kit"],xA=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,yA=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,SA={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},MA={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},EA={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},wA={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},TA={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},AA={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ay={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},bA=["solid","regular","light","thin","duotone","brands"],by=[1,2,3,4,5,6,7,8,9,10],CA=by.concat([11,12,13,14,15,16,17,18,19,20]),pa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},RA=[...Object.keys(wA),...bA,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pa.GROUP,pa.SWAP_OPACITY,pa.PRIMARY,pa.SECONDARY].concat(by.map(t=>"".concat(t,"x"))).concat(CA.map(t=>"w-".concat(t))),PA={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},LA={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},IA={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},q0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Zi="___FONT_AWESOME___",Eh=16,Cy="fa",Ry="svg-inline--fa",Ss="data-fa-i2svg",wh="data-fa-pseudo-element",DA="data-fa-pseudo-element-pending",Pm="data-prefix",Lm="data-icon",K0="fontawesome-i2svg",NA="async",UA=["HTML","HEAD","STYLE","SCRIPT"],Py=(()=>{try{return!0}catch{return!1}})(),Ly=[_t,Rn,Pn];function ol(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[_t]}})}const Iy={...Ay};Iy[_t]={...Ay[_t],...Y0.kit,...Y0["kit-duotone"]};const fs=ol(Iy),Th={...AA};Th[_t]={...Th[_t],...q0.kit,...q0["kit-duotone"]};const $a=ol(Th),Ah={...TA};Ah[_t]={...Ah[_t],...IA.kit};const ds=ol(Ah),bh={...EA};bh[_t]={...bh[_t],...LA.kit};const OA=ol(bh),FA=xA,Dy="fa-layers-text",kA=yA,zA={...vA};ol(zA);const BA=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Uf=pa,Po=new Set;Object.keys($a[_t]).map(Po.add.bind(Po));Object.keys($a[Rn]).map(Po.add.bind(Po));Object.keys($a[Pn]).map(Po.add.bind(Po));const HA=[..._A,...RA],ba=Ir.FontAwesomeConfig||{};function VA(t){var e=gt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function GA(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}gt&&typeof gt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=GA(VA(n));r!=null&&(ba[i]=r)});const Ny={styleDefault:"solid",familyDefault:"classic",cssPrefix:Cy,replacementClass:Ry,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ba.familyPrefix&&(ba.cssPrefix=ba.familyPrefix);const Lo={...Ny,...ba};Lo.autoReplaceSvg||(Lo.observeMutations=!1);const _e={};Object.keys(Ny).forEach(t=>{Object.defineProperty(_e,t,{enumerable:!0,set:function(e){Lo[t]=e,Ca.forEach(n=>n(_e))},get:function(){return Lo[t]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(t){Lo.cssPrefix=t,Ca.forEach(e=>e(_e))},get:function(){return Lo.cssPrefix}});Ir.FontAwesomeConfig=_e;const Ca=[];function WA(t){return Ca.push(t),()=>{Ca.splice(Ca.indexOf(t),1)}}const rr=Eh,Mi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jA(t){if(!t||!tr)return;const e=gt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=gt.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return gt.head.insertBefore(e,i),t}const XA="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ya(){let t=12,e="";for(;t-- >0;)e+=XA[Math.random()*62|0];return e}function Vo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Im(t){return t.classList?Vo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Uy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function $A(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Uy(t[n]),'" '),"").trim()}function Vu(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Dm(t){return t.size!==Mi.size||t.x!==Mi.x||t.y!==Mi.y||t.rotate!==Mi.rotate||t.flipX||t.flipY}function YA(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function qA(t){let{transform:e,width:n=Eh,height:i=Eh,startCentered:r=!1}=t,s="";return r&&wy?s+="translate(".concat(e.x/rr-n/2,"em, ").concat(e.y/rr-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/rr,"em), calc(-50% + ").concat(e.y/rr,"em)) "):s+="translate(".concat(e.x/rr,"em, ").concat(e.y/rr,"em) "),s+="scale(".concat(e.size/rr*(e.flipX?-1:1),", ").concat(e.size/rr*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var KA=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
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
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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
}`;function Oy(){const t=Cy,e=Ry,n=_e.cssPrefix,i=_e.replacementClass;let r=KA;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}let Z0=!1;function Of(){_e.autoAddCss&&!Z0&&(jA(Oy()),Z0=!0)}var ZA={mixout(){return{dom:{css:Oy,insertCss:Of}}},hooks(){return{beforeDOMElementCreation(){Of()},beforeI2svg(){Of()}}}};const Qi=Ir||{};Qi[Zi]||(Qi[Zi]={});Qi[Zi].styles||(Qi[Zi].styles={});Qi[Zi].hooks||(Qi[Zi].hooks={});Qi[Zi].shims||(Qi[Zi].shims=[]);var Ei=Qi[Zi];const Fy=[],ky=function(){gt.removeEventListener("DOMContentLoaded",ky),cu=1,Fy.map(t=>t())};let cu=!1;tr&&(cu=(gt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(gt.readyState),cu||gt.addEventListener("DOMContentLoaded",ky));function QA(t){tr&&(cu?setTimeout(t,0):Fy.push(t))}function al(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?Uy(t):"<".concat(e," ").concat($A(n),">").concat(i.map(al).join(""),"</").concat(e,">")}function Q0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ff=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=n,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<o;l++)c=s[l],u=a(u,e[c],c,e);return u};function JA(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ch(t){const e=JA(t);return e.length===1?e[0].toString(16):null}function e2(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function J0(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function Rh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=J0(e);typeof Ei.hooks.addPack=="function"&&!i?Ei.hooks.addPack(t,J0(e)):Ei.styles[t]={...Ei.styles[t]||{},...r},t==="fas"&&Rh("fa",e)}const{styles:Qr,shims:t2}=Ei,n2={[_t]:Object.values(ds[_t]),[Rn]:Object.values(ds[Rn]),[Pn]:Object.values(ds[Pn])};let Nm=null,zy={},By={},Hy={},Vy={},Gy={};const i2={[_t]:Object.keys(fs[_t]),[Rn]:Object.keys(fs[Rn]),[Pn]:Object.keys(fs[Pn])};function r2(t){return~HA.indexOf(t)}function s2(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!r2(r)?r:null}const Wy=()=>{const t=i=>Ff(Qr,(r,s,o)=>(r[o]=Ff(s,i,{}),r),{});zy=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=s}),i)),By=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=s}),i)),Gy=t((i,r,s)=>{const o=r[2];return i[s]=s,o.forEach(a=>{i[a]=s}),i});const e="far"in Qr||_e.autoFetchSvg,n=Ff(t2,(i,r)=>{const s=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:a}),i},{names:{},unicodes:{}});Hy=n.names,Vy=n.unicodes,Nm=Gu(_e.styleDefault,{family:_e.familyDefault})};WA(t=>{Nm=Gu(t.styleDefault,{family:_e.familyDefault})});Wy();function Um(t,e){return(zy[t]||{})[e]}function o2(t,e){return(By[t]||{})[e]}function xr(t,e){return(Gy[t]||{})[e]}function jy(t){return Hy[t]||{prefix:null,iconName:null}}function a2(t){const e=Vy[t],n=Um("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Dr(){return Nm}const Om=()=>({prefix:null,iconName:null,rest:[]});function Gu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=_t}=e,i=fs[n][t],r=$a[n][t]||$a[n][i],s=t in Ei.styles?t:null;return r||s||null}const l2={[_t]:Object.keys(ds[_t]),[Rn]:Object.keys(ds[Rn]),[Pn]:Object.keys(ds[Pn])};function Wu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[_t]:"".concat(_e.cssPrefix,"-").concat(_t),[Rn]:"".concat(_e.cssPrefix,"-").concat(Rn),[Pn]:"".concat(_e.cssPrefix,"-").concat(Pn)};let r=null,s=_t;const o=gA.filter(l=>l!==Ty);o.forEach(l=>{(t.includes(i[l])||t.some(c=>l2[l].includes(c)))&&(s=l)});const a=t.reduce((l,c)=>{const u=s2(_e.cssPrefix,c);if(Qr[c]?(c=n2[s].includes(c)?OA[s][c]:c,r=c,l.prefix=c):i2[s].indexOf(c)>-1?(r=c,l.prefix=Gu(c,{family:s})):u?l.iconName=u:c!==_e.replacementClass&&!o.some(d=>c===i[d])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const d=r==="fa"?jy(l.iconName):{},f=xr(l.prefix,l.iconName);d.prefix&&(r=null),l.iconName=d.iconName||f||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Qr.far&&Qr.fas&&!_e.autoFetchSvg&&(l.prefix="fas")}return l},Om());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===Rn&&(Qr.fass||_e.autoFetchSvg)&&(a.prefix="fass",a.iconName=xr(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===Pn&&(Qr.fasds||_e.autoFetchSvg)&&(a.prefix="fasds",a.iconName=xr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=Dr()||"fas"),a}let c2=class{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},Rh(s,r[s]);const o=ds[_t][s];o&&Rh(o,r[s]),Wy()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:o,icon:a}=i[r],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=a)}),e[s][o]=a}),e}},ev=[],io={};const po={},u2=Object.keys(po);function f2(t,e){let{mixoutsTo:n}=e;return ev=t,io={},Object.keys(po).forEach(i=>{u2.indexOf(i)===-1&&delete po[i]}),ev.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(o=>{io[o]||(io[o]=[]),io[o].push(s[o])})}i.provides&&i.provides(po)}),n}function Ph(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(io[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function Ms(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(io[t]||[]).forEach(s=>{s.apply(null,n)})}function Nr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return po[t]?po[t].apply(null,e):void 0}function Lh(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Dr();if(e)return e=xr(n,e)||e,Q0(Xy.definitions,n,e)||Q0(Ei.styles,n,e)}const Xy=new c2,d2=()=>{_e.autoReplaceSvg=!1,_e.observeMutations=!1,Ms("noAuto")},h2={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tr?(Ms("beforeI2svg",t),Nr("pseudoElements2svg",t),Nr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,QA(()=>{m2({autoReplaceSvgRoot:e}),Ms("watch",t)})}},p2={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Gu(t[0]);return{prefix:n,iconName:xr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(_e.cssPrefix,"-"))>-1||t.match(FA))){const e=Wu(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Dr(),iconName:xr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Dr();return{prefix:e,iconName:xr(e,t)||t}}}},Un={noAuto:d2,config:_e,dom:h2,parse:p2,library:Xy,findIconDefinition:Lh,toHtml:al},m2=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=gt}=t;(Object.keys(Ei.styles).length>0||_e.autoFetchSvg)&&tr&&_e.autoReplaceSvg&&Un.dom.i2svg({node:e})};function ju(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>al(n))}}),Object.defineProperty(t,"node",{get:function(){if(!tr)return;const n=gt.createElement("div");return n.innerHTML=t.html,n.children}}),t}function g2(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:o}=t;if(Dm(o)&&n.found&&!i.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};r.style=Vu({...s,"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function v2(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:i}]}]}function Fm(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:d=!1}=t,{width:f,height:p}=n.found?n:e,v=i==="fak",x=[_e.replacementClass,r?"".concat(_e.cssPrefix,"-").concat(r):""].filter(b=>u.classes.indexOf(b)===-1).filter(b=>b!==""||!!b).concat(u.classes).join(" ");let m={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:x,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(p)}};const h=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(f/p*16*.0625,"em")}:{};d&&(m.attributes[Ss]=""),a&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ya())},children:[a]}),delete m.attributes.title);const _={...m,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...h,...u.styles}},{children:g,attributes:S}=n.found&&e.found?Nr("generateAbstractMask",_)||{children:[],attributes:{}}:Nr("generateAbstractIcon",_)||{children:[],attributes:{}};return _.children=g,_.attributes=S,o?v2(_):g2(_)}function tv(t){const{content:e,width:n,height:i,transform:r,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Ss]="");const c={...o.styles};Dm(r)&&(c.transform=qA({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);const u=Vu(c);u.length>0&&(l.style=u);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function _2(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=Vu(i.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:kf}=Ei;function Ih(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Uf.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Uf.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Uf.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const x2={found:!1,width:512,height:512};function y2(t,e){!Py&&!_e.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dh(t,e){let n=e;return e==="fa"&&_e.styleDefault!==null&&(e=Dr()),new Promise((i,r)=>{if(n==="fa"){const s=jy(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&kf[e]&&kf[e][t]){const s=kf[e][t];return i(Ih(s))}y2(t,e),i({...x2,icon:_e.showMissingIcons&&t?Nr("missingIconAbstract")||{}:{}})})}const nv=()=>{},Nh=_e.measurePerformance&&Nl&&Nl.mark&&Nl.measure?Nl:{mark:nv,measure:nv},ma='FA "6.6.0"',S2=t=>(Nh.mark("".concat(ma," ").concat(t," begins")),()=>$y(t)),$y=t=>{Nh.mark("".concat(ma," ").concat(t," ends")),Nh.measure("".concat(ma," ").concat(t),"".concat(ma," ").concat(t," begins"),"".concat(ma," ").concat(t," ends"))};var km={begin:S2,end:$y};const Tc=()=>{};function iv(t){return typeof(t.getAttribute?t.getAttribute(Ss):null)=="string"}function M2(t){const e=t.getAttribute?t.getAttribute(Pm):null,n=t.getAttribute?t.getAttribute(Lm):null;return e&&n}function E2(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(_e.replacementClass)}function w2(){return _e.autoReplaceSvg===!0?Ac.replace:Ac[_e.autoReplaceSvg]||Ac.replace}function T2(t){return gt.createElementNS("http://www.w3.org/2000/svg",t)}function A2(t){return gt.createElement(t)}function Yy(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?T2:A2}=e;if(typeof t=="string")return gt.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(Yy(s,{ceFn:n}))}),i}function b2(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ac={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Yy(n),e)}),e.getAttribute(Ss)===null&&_e.keepOriginalSource){let n=gt.createComment(b2(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Im(e).indexOf(_e.replacementClass))return Ac.replace(t);const i=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===_e.replacementClass||a.match(i)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>al(s)).join(`
`);e.setAttribute(Ss,""),e.innerHTML=r}};function rv(t){t()}function qy(t,e){const n=typeof e=="function"?e:Tc;if(t.length===0)n();else{let i=rv;_e.mutateApproach===NA&&(i=Ir.requestAnimationFrame||rv),i(()=>{const r=w2(),s=km.begin("mutate");t.map(r),s(),n()})}}let zm=!1;function Ky(){zm=!0}function Uh(){zm=!1}let uu=null;function sv(t){if(!$0||!_e.observeMutations)return;const{treeCallback:e=Tc,nodeCallback:n=Tc,pseudoElementsCallback:i=Tc,observeMutationsRoot:r=gt}=t;uu=new $0(s=>{if(zm)return;const o=Dr();Vo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!iv(a.addedNodes[0])&&(_e.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&_e.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&iv(a.target)&&~BA.indexOf(a.attributeName))if(a.attributeName==="class"&&M2(a.target)){const{prefix:l,iconName:c}=Wu(Im(a.target));a.target.setAttribute(Pm,l||o),c&&a.target.setAttribute(Lm,c)}else E2(a.target)&&n(a.target)})}),tr&&uu.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function C2(){uu&&uu.disconnect()}function R2(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function P2(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=Wu(Im(t));return r.prefix||(r.prefix=Dr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=o2(r.prefix,t.innerText)||Um(r.prefix,Ch(t.innerText))),!r.iconName&&_e.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function L2(t){const e=Vo(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return _e.autoA11y&&(n?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||Ya()):(e["aria-hidden"]="true",e.focusable="false")),e}function I2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ov(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=P2(t),s=L2(t),o=Ph("parseNodeAttributes",{},t);let a=e.styleParser?R2(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Mi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:s},...o}}const{styles:D2}=Ei;function Zy(t){const e=_e.autoReplaceSvg==="nest"?ov(t,{styleParser:!1}):ov(t);return~e.extra.classes.indexOf(Dy)?Nr("generateLayersText",t,e):Nr("generateSvgReplacementMutation",t,e)}let Ai=new Set;Ly.map(t=>{Ai.add("fa-".concat(t))});Object.keys(fs[_t]).map(Ai.add.bind(Ai));Object.keys(fs[Rn]).map(Ai.add.bind(Ai));Object.keys(fs[Pn]).map(Ai.add.bind(Ai));Ai=[...Ai];function av(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tr)return Promise.resolve();const n=gt.documentElement.classList,i=u=>n.add("".concat(K0,"-").concat(u)),r=u=>n.remove("".concat(K0,"-").concat(u)),s=_e.autoFetchSvg?Ai:Ly.map(u=>"fa-".concat(u)).concat(Object.keys(D2));s.includes("fa")||s.push("fa");const o=[".".concat(Dy,":not([").concat(Ss,"])")].concat(s.map(u=>".".concat(u,":not([").concat(Ss,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Vo(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();const l=km.begin("onTree"),c=a.reduce((u,d)=>{try{const f=Zy(d);f&&u.push(f)}catch(f){Py||f.name==="MissingIcon"&&console.error(f)}return u},[]);return new Promise((u,d)=>{Promise.all(c).then(f=>{qy(f,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(f=>{l(),d(f)})})}function N2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zy(t).then(n=>{n&&qy([n],e)})}function U2(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Lh(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Lh(r||{})),t(i,{...n,mask:r})}}const O2=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Mi,symbol:i=!1,mask:r=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:p}=t;return ju({type:"icon",...t},()=>(Ms("beforeDOMElementCreation",{iconDefinition:t,params:e}),_e.autoA11y&&(o?c["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(a||Ya()):(c["aria-hidden"]="true",c.focusable="false")),Fm({icons:{main:Ih(p),mask:r?Ih(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:{...Mi,...n},symbol:i,title:o,maskId:s,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var F2={mixout(){return{icon:U2(O2)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=av,t.nodeCallback=N2,t}}},provides(t){t.i2svg=function(e){const{node:n=gt,callback:i=()=>{}}=e;return av(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:d}=n;return new Promise((f,p)=>{Promise.all([Dh(i,o),c.iconName?Dh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[x,m]=v;f([e,Fm({icons:{main:x,mask:m},prefix:o,iconName:i,transform:a,symbol:l,maskId:u,title:r,titleId:s,extra:d,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:o}=e;const a=Vu(o);a.length>0&&(i.style=a);let l;return Dm(s)&&(l=Nr("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},k2={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ju({type:"layer"},()=>{Ms("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},z2={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return ju({type:"counter",content:t},()=>(Ms("beforeDOMElementCreation",{content:t,params:e}),_2({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(_e.cssPrefix,"-layers-counter"),...i]}})))}}}},B2={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Mi,title:i=null,classes:r=[],attributes:s={},styles:o={}}=e;return ju({type:"text",content:t},()=>(Ms("beforeDOMElementCreation",{content:t,params:e}),tv({content:t,transform:{...Mi,...n},title:i,extra:{attributes:s,styles:o,classes:["".concat(_e.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let o=null,a=null;if(wy){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return _e.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,tv({content:e.innerHTML,width:o,height:a,transform:r,title:i,extra:s,watchable:!0})])}}};const H2=new RegExp('"',"ug"),lv=[1105920,1112319],cv={FontAwesome:{normal:"fas",400:"fas"},...MA,...SA,...PA},Oh=Object.keys(cv).reduce((t,e)=>(t[e.toLowerCase()]=cv[e],t),{}),V2=Object.keys(Oh).reduce((t,e)=>{const n=Oh[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function G2(t){const e=t.replace(H2,""),n=e2(e,0),i=n>=lv[0]&&n<=lv[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ch(r?e[0]:e),isSecondary:i||r}}function W2(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Oh[n]||{})[r]||V2[n]}function uv(t,e){const n="".concat(DA).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const o=Vo(t.children).filter(f=>f.getAttribute(wh)===e)[0],a=Ir.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(kA),u=a.getPropertyValue("font-weight"),d=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),i();if(c&&d!=="none"&&d!==""){const f=a.getPropertyValue("content");let p=W2(l,u);const{value:v,isSecondary:x}=G2(f),m=c[0].startsWith("FontAwesome");let h=Um(p,v),_=h;if(m){const g=a2(v);g.iconName&&g.prefix&&(h=g.iconName,p=g.prefix)}if(h&&!x&&(!o||o.getAttribute(Pm)!==p||o.getAttribute(Lm)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);const g=I2(),{extra:S}=g;S.attributes[wh]=e,Dh(h,p).then(b=>{const A=Fm({...g,icons:{main:b,mask:Om()},prefix:p,iconName:_,extra:S,watchable:!0}),E=gt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=A.map(C=>al(C)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function j2(t){return Promise.all([uv(t,"::before"),uv(t,"::after")])}function X2(t){return t.parentNode!==document.head&&!~UA.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(wh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fv(t){if(tr)return new Promise((e,n)=>{const i=Vo(t.querySelectorAll("*")).filter(X2).map(j2),r=km.begin("searchPseudoElements");Ky(),Promise.all(i).then(()=>{r(),Uh(),e()}).catch(()=>{r(),Uh(),n()})})}var $2={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fv,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=gt}=e;_e.searchPseudoElements&&fv(n)}}};let dv=!1;var Y2={mixout(){return{dom:{unwatch(){Ky(),dv=!0}}}},hooks(){return{bootstrap(){sv(Ph("mutationObserverCallbacks",{}))},noAuto(){C2()},watch(t){const{observeMutationsRoot:e}=t;dv?Uh():sv(Ph("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const hv=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var q2={mixout(){return{parse:{transform:t=>hv(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=hv(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},f={outer:o,inner:u,path:d};return{tag:"g",attributes:{...f.outer},children:[{tag:"g",attributes:{...f.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...f.path}}]}]}}}};const zf={x:0,y:0,width:"100%",height:"100%"};function pv(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function K2(t){return t.tag==="g"?t.children:[t]}var Z2={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?Wu(n.split(" ").map(r=>r.trim())):Om();return i.prefix||(i.prefix=Dr()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:o,transform:a}=e;const{width:l,icon:c}=r,{width:u,icon:d}=s,f=YA({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:{...zf,fill:"white"}},v=c.children?{children:c.children.map(pv)}:{},x={tag:"g",attributes:{...f.inner},children:[pv({tag:c.tag,attributes:{...c.attributes,...f.path},...v})]},m={tag:"g",attributes:{...f.outer},children:[x]},h="mask-".concat(o||Ya()),_="clip-".concat(o||Ya()),g={tag:"mask",attributes:{...zf,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[p,m]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:K2(d)},g]};return n.push(S,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(h,")"),...zf}}),{children:n,attributes:i}}}},Q2={provides(t){let e=!1;Ir.matchMedia&&(e=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},J2={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},eb=[ZA,F2,k2,z2,B2,$2,Y2,q2,Z2,Q2,J2];f2(eb,{mixoutsTo:Un});Un.noAuto;Un.config;Un.library;Un.dom;const Fh=Un.parse;Un.findIconDefinition;Un.toHtml;const tb=Un.icon;Un.layer;Un.text;Un.counter;var Qy={exports:{}},nb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ib=nb,rb=ib;function Jy(){}function eS(){}eS.resetWarningCache=Jy;var sb=function(){function t(i,r,s,o,a,l){if(l!==rb){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:eS,resetWarningCache:Jy};return n.PropTypes=n,n};Qy.exports=sb();var ob=Qy.exports;const Ve=b_(ob);function mv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function vi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mv(Object(n),!0).forEach(function(i){ro(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mv(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function fu(t){"@babel/helpers - typeof";return fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fu(t)}function ro(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ab(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function lb(t,e){if(t==null)return{};var n=ab(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function kh(t){return cb(t)||ub(t)||fb(t)||db()}function cb(t){if(Array.isArray(t))return zh(t)}function ub(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fb(t,e){if(t){if(typeof t=="string")return zh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zh(t,e)}}function zh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function db(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function hb(t){var e,n=t.beat,i=t.fade,r=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,v=t.border,x=t.listItem,m=t.flip,h=t.size,_=t.rotation,g=t.pull,S=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":v,"fa-li":x,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},ro(e,"fa-".concat(h),typeof h<"u"&&h!==null),ro(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),ro(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),ro(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(S).map(function(b){return S[b]?b:null}).filter(function(b){return b})}function pb(t){return t=t-0,t===t}function tS(t){return pb(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var mb=["style"];function gb(t){return t.charAt(0).toUpperCase()+t.slice(1)}function vb(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=tS(n.slice(0,i)),s=n.slice(i+1).trim();return r.startsWith("webkit")?e[gb(r)]=s:e[r]=s,e},{})}function nS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return nS(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=vb(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[tS(c)]=u}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=lb(n,mb);return r.attrs.style=vi(vi({},r.attrs.style),o),t.apply(void 0,[e.tag,vi(vi({},r.attrs),a)].concat(kh(i)))}var iS=!1;try{iS=!0}catch{}function _b(){if(!iS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function gv(t){if(t&&fu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Fh.icon)return Fh.icon(t);if(t===null)return null;if(t&&fu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Bf(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ro({},t,e):{}}var vv={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},ni=ci.forwardRef(function(t,e){var n=vi(vi({},vv),t),i=n.icon,r=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,c=n.maskId,u=gv(i),d=Bf("classes",[].concat(kh(hb(n)),kh((o||"").split(" ")))),f=Bf("transform",typeof n.transform=="string"?Fh.transform(n.transform):n.transform),p=Bf("mask",gv(r)),v=tb(u,vi(vi(vi(vi({},d),f),p),{},{symbol:s,title:a,titleId:l,maskId:c}));if(!v)return _b("Could not find icon",u),null;var x=v.abstract,m={ref:e};return Object.keys(n).forEach(function(h){vv.hasOwnProperty(h)||(m[h]=n[h])}),xb(x[0],m)});ni.displayName="FontAwesomeIcon";ni.propTypes={beat:Ve.bool,border:Ve.bool,beatFade:Ve.bool,bounce:Ve.bool,className:Ve.string,fade:Ve.bool,flash:Ve.bool,mask:Ve.oneOfType([Ve.object,Ve.array,Ve.string]),maskId:Ve.string,fixedWidth:Ve.bool,inverse:Ve.bool,flip:Ve.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ve.oneOfType([Ve.object,Ve.array,Ve.string]),listItem:Ve.bool,pull:Ve.oneOf(["right","left"]),pulse:Ve.bool,rotation:Ve.oneOf([0,90,180,270]),shake:Ve.bool,size:Ve.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ve.bool,spinPulse:Ve.bool,spinReverse:Ve.bool,symbol:Ve.oneOfType([Ve.bool,Ve.string]),title:Ve.string,titleId:Ve.string,transform:Ve.oneOfType([Ve.string,Ve.object]),swapOpacity:Ve.bool};var xb=nS.bind(null,ci.createElement);const rS=Ne.span`
  position: absolute;
  transform: scale(0);
  transition: ease-in-out ${t=>t.theme.animationDuration} transform;
  top: 0;
  left: 0.25em;
  color: ${t=>t.theme.fg.mute};
  font-size: 0.75em;
`,yb=Ne.span`
  position: relative;
`,Sb=Ne.div`
  display: inline-block;

  &:hover ${rS} {
    transform: scale(1);
  }
`,Mb=Ne.a`
  color: ${t=>t.theme.fg.clickable};
`;function en({url:t,className:e,children:n,...i}){return X.jsxs(Sb,{className:e,children:[X.jsx(Mb,{rel:"noreferrer noopener",href:t,target:"_blank",...i,children:n}),X.jsx(yb,{children:X.jsx(rS,{children:X.jsx(ni,{icon:hA})})})]})}const Eb=Ne.div`
  color: ${t=>t.theme.fg.mute};
`,wb=Ne.time`
  color: ${t=>t.theme.fg.normal};
  font-size: 1.5em;
`,Tb=Ne.time`
  color: ${t=>t.theme.fg.mute};
  font-size: 0.75em;
`;function Ab({start:t,end:e}){return X.jsxs(Eb,{children:[X.jsx(wb,{dateTime:e,children:e})," ‒ ",X.jsx(Tb,{dateTime:t,children:t})]})}const bb=[{start:"2019",end:new Date().getFullYear(),activities:[{name:"EAP Expertise Art et Patrimoine",role:"CEO",url:"https://www.eap-expertise.fr/"},{name:"Akretion",role:"Odoo freelancer",url:"https://www.akretion.com/fr"}]},{start:"2011",end:"2019",activities:[{name:"Kozea",role:"Python / ECMAScript Architect",url:"https://kozea.fr/"}]},{start:"2009",end:"2011",activities:[{name:"Viseo",role:"Java / ECMAScript Developper",url:"https://www.viseo.com/"}]},{start:"2004",end:"2009",activities:[{name:"INSA Lyon",role:"Studied IT",url:"http://insa-lyon.fr/"}]}],Cb=Ne.header`
  margin-top: 2em;
  margin-bottom: 2em;
  margin-right: ${t=>t.$left?"1em":0};
  margin-left: ${t=>t.$left?0:"1em"};
  display: flex;
  flex-direction: column;
  text-align: ${t=>t.$left?"right":"left"};
  min-width: ${t=>t.$left?57:48}%;
  align-self: ${t=>t.$left?"flex-start":"flex-end"};
`,Rb=Ne.div`
  width: 100%;
  color: ${t=>t.theme.fg.normal};
  border-bottom: 2px solid ${t=>t.theme.fg.normal};
  font-size: 2em;
  align-self: flex-end;
  margin-left: ${t=>t.$left?"1em":0};
  margin-bottom: 0.5em;
`,Pb=Ne.div`
  color: ${t=>t.theme.fg.mute};
  font-size: 1.25em;
  margin-left: ${t=>t.$left?"1em":0};
  margin-right: ${t=>t.$left?0:"1em"};
`;function Go({level:t,children:e,className:n}){t=t||2;const i=t%2;return X.jsx(Cb,{$left:i,className:n,children:at.Children.map(e,(r,s)=>s===0?X.jsx(Rb,{as:`h${t}`,$left:i,children:r}):X.jsx(Pb,{$left:i,children:r}))})}const Lb=Ne.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
`;function zr({anchor:t,className:e,children:n}){const i=at.useRef(),r=Em(),{width:s,height:o}=Wi(l=>l.page),a=at.useCallback(()=>r(aA(t,i.current.offsetTop)),[r,t,s,o]);return at.useEffect(()=>(a(),window.addEventListener("load",a,!1),()=>window.removeEventListener("load",a)),[a]),X.jsx(Lb,{className:e,ref:i,children:n})}const Ib=Ne.article`
  margin: 1em;
  font-size: 1.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${t=>t.theme.fg.normal};
  align-self: center;
`,Db=Ne.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: ${t=>t.theme.bg.normal};
  backdrop-filter: blur(5px);
`;function Bm({className:t,children:e}){return X.jsx(Ib,{className:t,children:X.jsx(Db,{children:e})})}const Nb=Ne.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;function Hm({className:t,children:e}){return X.jsx(Nb,{className:t,children:e})}const Ub=Ne.li`
  margin: 1em 0.5em;
`;function Si({className:t,children:e}){return X.jsx(Ub,{className:t,children:e})}const Ob=Ne.div`
  margin-left: 1em;
  margin-top: 0.25em;
  margin-bottom: 0.5em;
`;function Fb(){const t=Math.floor((new Date().getTime()-523e9)/31536e6);return X.jsxs(zr,{anchor:"bio",children:[X.jsxs(Go,{children:["Bio",X.jsxs(X.Fragment,{children:[t," years old"]}),X.jsxs(X.Fragment,{children:["Living in"," ",X.jsx(en,{url:"https://www.google.com/maps/place/Lyon",children:"Lyon, France"})]})]}),X.jsx(Bm,{children:X.jsx(Hm,{children:bb.map(({start:e,end:n,activities:i})=>X.jsxs(Si,{children:[X.jsx(Ab,{start:e,end:n}),i.map(({name:r,role:s,url:o})=>X.jsxs(Ob,{children:[s," at ",X.jsx(en,{url:o,children:r})]},o))]},i.map(({name:r})=>r).join("|")))})})]})}const kb={prefix:"fab",iconName:"gitlab",icon:[512,512,[],"f296","M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"]},zb={prefix:"fab",iconName:"reddit-alien",icon:[512,512,[],"f281","M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"]},Bb={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Hb={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"]};function Vb(){return X.jsxs(zr,{anchor:"contact",children:[X.jsx(Go,{children:"Contact"}),X.jsx(Bm,{children:X.jsxs(Hm,{children:[X.jsxs(Si,{children:[X.jsx(ni,{icon:pA})," ",X.jsx(en,{url:"mailto:mounier.florian+dev@gmail.com",title:"Professional",children:"mounier.florian@gmail.com"})," "]}),X.jsxs(Si,{children:[X.jsx(ni,{icon:Hb})," ",X.jsx(en,{url:"mailto:paradoxxx.zero+dev@gmail.com",title:"Personal",children:"paradoxxx.zero@gmail.com"})]}),X.jsxs(Si,{children:[X.jsx(ni,{icon:Bb})," ",X.jsx(en,{url:"https://github.com/paradoxxxzero",title:"github",children:"paradoxxxzero"})]}),X.jsxs(Si,{children:[X.jsx(ni,{icon:kb})," ",X.jsx(en,{url:"https://gitlab.com/paradoxxxzero",title:"gitlab",children:"paradoxxxzero"})]}),X.jsxs(Si,{children:[X.jsx(ni,{icon:zb})," ",X.jsx(en,{url:"https://www.reddit.com/user/paradoxxx_zero",title:"reddit",children:"paradoxxx_zero"})]})]})})]})}const Gb=Ne(zr)`
  min-height: 400%;
`,Wb=Ne(zr)`
  min-height: 800%;
`;function jb(){return X.jsxs(X.Fragment,{children:[X.jsx(Gb,{anchor:"extra"}),X.jsx(Wb,{anchor:"extra2"}),X.jsx(zr,{anchor:"end"})]})}function Xb(){return X.jsx(zr,{anchor:"home",children:X.jsxs(Go,{$level:1,children:["Full Stack Developper",X.jsx(X.Fragment,{children:"Skilled Pythonist"}),X.jsx(X.Fragment,{children:"Seasoned ECMAScripter"}),X.jsx(X.Fragment,{children:"Open Source Enthusiast"})]})})}const du=680,$b=Ne.ul`
  position: relative;
  display: flex;
  flex-direction: ${t=>t.$expanded?"row":"column"};
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`,Yb=Ne.li`
  color: ${t=>t.theme.fg.normal};
  cursor: pointer;
  font-weight: ${t=>t.$active?"bold":"normal"};
  &:hover {
    background: ${t=>t.theme.bg.normal};
  }
  ${t=>t.$display&&Hu`
      padding: 1em ${e=>e.$expanded?"2em":"1em"};
    `};

  font-size: ${t=>t.$expanded?"1em":"1.25em"};
  user-select: none;
`,qb=Ne.div`
  position: absolute;
  background-color: ${t=>t.theme.fg.normal};
  height: 5px;
  left: 0;
  top: -3px;
  transition: ${t=>t.theme.animationDuration} all;
`,Kb=Ne.div`
  position: absolute;
  background-color: ${t=>t.theme.fg.normal};
  width: 5px;
  right: 0;
  top: 0;
  transition: ${t=>t.theme.animationDuration} all;
`,Zb=Ne.nav`
  backdrop-filter: blur(2px);
  position: fixed;
  right: 0;
  top: 2em;
  z-index: 42;

  ${t=>t.$expanded&&Hu`
      border-top: 2px solid ${e=>e.theme.fg.normal};
      min-width: 33%;
      max-width: max-content;
    `}
`,Qb=[{name:"home",content:X.jsx(ni,{icon:mA})},{name:"experiments",content:"Experiments"},{name:"projects",content:"Projects"},{name:"bio",content:"Bio"},{name:"contact",content:"Contact"},{name:"meta",content:"Meta"},{name:"extra",content:X.jsx(ni,{icon:fA})},{name:"extra2",content:null},{name:"end",content:null}];function Jb({onScrollRequested:t}){const e=Wi(f=>f.anchors),{width:n}=Wi(f=>f.page),i=at.useRef(),r=at.useRef(),s=at.useRef({}),o=at.useRef(),{absolute:a}=Wi(f=>f.progression),l=Object.entries(e).sort((f,p)=>f[1]-p[1]).reduce((f,[p,v])=>a>=v?p:f,null),c=n>du&&l===Object.keys(e)[0],u=f=>()=>t(e[f]),d=f=>p=>{s.current[f]=p};return at.useEffect(()=>{const{current:f}=i,{current:p}=r;if(!l)return;o.current!==null&&(clearTimeout(o.current),o.current=null);const v=s.current[l],x=()=>{c?(f.style.left=`${v.offsetLeft}px`,f.style.width=`${v.clientWidth}px`):(p.style.top=`${v.offsetTop}px`,p.style.height=`${v.clientHeight}px`),c?f.style.opacity=1:p.style.opacity=1};return!c&&+f.style.opacity==0?x():o.current=setTimeout(x,250),c?p.style.opacity=0:f.style.opacity=0,()=>{o.current!==null&&(clearTimeout(o.current),o.current=null)}},[i,r,o,s,l,c]),X.jsxs(Zb,{anchor:"extra",$expanded:c,children:[X.jsx(qb,{ref:i}),X.jsx(Kb,{ref:r}),X.jsx($b,{$expanded:c,children:Qb.map(({name:f,content:p})=>X.jsx(Yb,{$anchor:f,$active:l===f,$expanded:c,$display:!!p,onClick:u(f),ref:d(f),title:typeof p=="string"?p:null,children:c||typeof p!="string"?p:p[0]},f))})]})}const eC=Ne.p`
  margin-top: 0.5em;
`,tC=Ne(Go)`
  justify-content: flex-end;
`;function nC(){return X.jsxs(zr,{anchor:"meta",children:[X.jsx(Go,{children:"Meta"}),X.jsxs(Bm,{children:[X.jsx(eC,{children:"This site has been hand-crafted with the help of these wonderful libraries:"}),X.jsxs(Hm,{children:[X.jsxs(Si,{children:[X.jsx(en,{url:"https://react.dev/",children:"React"})," — for building the structure."]}),X.jsxs(Si,{children:[X.jsx(en,{url:"https://redux.js.org/",children:"redux"})," ","— for containing this application state."]}),X.jsxs(Si,{children:[X.jsx(en,{url:"https://threejs.org/",children:"three.js"})," ","— for a simple and powerful API on top of WebGL."]}),X.jsxs(Si,{children:[X.jsx(en,{url:"https://vitejs.dev/",children:"vite"})," — to put everything together."]})]})]}),X.jsxs(tC,{$level:3,children:["Browse this site source code at",X.jsx(en,{url:"https://github.com/paradoxxxzero/paradoxxxzero.github.io/tree/src",children:"github.com/paradoxxxzero/paradoxxxzero.github.io"})]})]})}const iC=t=>t.replace(/https?:\/\/(.*)\/?/,"$1"),_v=t=>t.reduce((e,{full_name:n,stargazers_count:i})=>(e[n]=i,e),{}),rC=(t,e,n)=>isNaN(t)?e:Math.min(n,Math.max(e,t)),Rs=(t,{start:e,end:n},i=0,r=1)=>rC((t-e)/(n-e),i,r),xv=()=>new Date().getTime(),sC=50,yv=async t=>{const e=await fetch(t),[n]=(e.headers.get("Content-Type")||"").split(";");if(e.status>300||e.status<200){if(n!=="application/json"){const r=await e.text();return console.error(e.status,r),{data:[],response:e}}const i=await e.json();return console.error(e.status,i.message||i.description,i),{data:[],response:e}}return{data:await e.json(),response:e}},oC=async t=>{const e=o=>`https://api.github.com/${t}/repos?per_page=${sC}&page=${o}`,{data:n,response:i}=await yv(e(1)),r=i.headers.get("Link");if(!r)return[];const s=+r.match(/<.+page=(\d+)>;\srel="last"/)[1];return s!==1&&(await Promise.all(new Array(s-1).fill().map((o,a)=>yv(e(a+2))))).map(({data:o})=>n.push(...o)),n},aC=()=>async t=>{try{const r=JSON.parse(localStorage.getItem("stars")||"{}");if(Object.keys(r).length&&(t(W0(r.stars)),xv()-r.time<1e3*60*60))return}catch(r){console.error(r)}const[e,n]=await Promise.all(["users/paradoxxxzero","orgs/Kozea"].map(r=>oC(r))),i={..._v(e),..._v(n)};try{localStorage.setItem("stars",JSON.stringify({time:xv(),stars:i}))}catch(r){console.error(r)}return t(W0(i))},lC=""+new URL("default-CFXWIgiw.webp",import.meta.url).href,sS=Ne.a`
  display: flex;
  color: gold;
  text-decoration: none;
`,cC=Ne.span`
  color: ${t=>t.theme.fg.normal};
`;function uC({url:t,stars:e,className:n}){return e==null&&(e=null),X.jsxs(sS,{href:t,className:n,children:[X.jsx(cC,{children:e||""}),X.jsx("span",{children:" "}),X.jsx(ni,{icon:cA})]})}const fC=Ne.article`
  flex: 2;
  margin: 1em;
`,oS=Ne.h2`
  display: flex;
  justify-content: space-between;
  flex: 1;
  color: ${t=>t.theme.fg.normal};
  margin: 0.5em 0;
`,dC=Ne.span`
  font-size: 0.75em;
  color: ${t=>t.theme.fg.mute};
`,aS=Ne.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`,lS=Ne.li`
  background: ${t=>t.theme.bg.normal};
  padding: 0.3em;
  margin: 0.2em;
  color: ${t=>t.theme.fg.mute};
`,hC=Ne(lS)`
  font-size: 0.75em;
`,pC=Ne(lS)`
  font-size: 0.66em;
`,mC=Ne.div`
  margin: 1em 0;
  color: ${t=>t.theme.fg.mute};
`,gC=Ne.aside`
  flex: 1;
  display: flex;
`,vC=Ne(en)`
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
`,_C=Ne(en)`
  a {
    color: inherit;
    text-decoration: none;
  }
`,xC=Ne(en)`
  @media (max-width: ${`${du}px`}) {
    word-break: break-all;
  }
`,yC=Ne.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 256px;
`,SC=Ne.li`
  background: ${t=>t.theme.bg.normal};
  ${t=>t.$unreleased&&Hu`
      filter: grayscale(0.1);
    `};

  margin: 1em;
  font-size: ${t=>t.$major?"1.5em":"1.15em"};
  text-align: left;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${`${du}px`}) {
    flex-direction: column-reverse;
  }

  &:nth-child(2n) {
    flex-direction: row;
    @media (max-width: ${`${du}px`}) {
      flex-direction: column-reverse;
    }
    text-align: right;
    ${oS} {
      flex-direction: row-reverse;
    }
    ${sS} {
      flex-direction: row-reverse;
    }
    ${aS} {
      flex-direction: row-reverse;
    }
  }
`;function MC({id:t,name:e,url:n,demoUrl:i,description:r,languages:s,libraries:o,major:a,preview:l,unreleased:c}){const d=Wi(p=>p.stars)[t],f=i||n;return X.jsxs(SC,{$major:a,$unreleased:c,children:[X.jsxs(fC,{children:[X.jsxs(oS,{children:[X.jsx(_C,{url:f,children:e}),X.jsx(uC,{url:n,stars:d})]}),X.jsxs(aS,{children:[s.map(p=>X.jsx(hC,{children:p},p)),o.map(p=>X.jsx(pC,{children:p},p))]}),X.jsx(mC,{children:r}),c?X.jsx(dC,{children:" Unreleased"}):X.jsx(xC,{url:f,children:iC(f)})]}),X.jsx(gC,{children:X.jsx(vC,{url:f,children:X.jsx(yC,{src:l||lC,alt:`Image preview of ${e}`})})})]})}const EC={projects:"Projects",experiments:"Experiments"},wC=Ne.ul`
  max-width: 1000px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;function Sv({type:t}){const e=Em(),n=Wi(i=>i.projects).filter(i=>i.type===t).sort((i,r)=>r.major-i.major);return at.useEffect(()=>{e(aC())},[e]),X.jsxs(zr,{anchor:t,children:[X.jsx(Go,{children:EC[t]}),X.jsx(wC,{children:n.filter(({hidden:i})=>!i).map(i=>X.jsx(MC,{...i},i.id))})]})}const TC=Ne.main`
  position: relative;
  z-index: 2;
  height: 100%;
`;function AC(){const t=Em(),e=at.useCallback(n=>{document.scrollingElement.scrollTo(0,n)},[]);return at.useEffect(()=>{const n=()=>{t(lA(window.innerWidth,document.body.clientHeight,window.devicePixelRatio))},i=r=>{const{scrollingElement:s}=r.target,{clientHeight:o,scrollTop:a,scrollHeight:l}=s,c=a/(l-o);t(oA(c,a,l))};return window.addEventListener("resize",n,!1),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("load",i,!1),()=>{window.removeEventListener("resize",n),window.removeEventListener("scroll",i),window.removeEventListener("load",i)}},[t]),X.jsx(iA,{theme:sA,children:X.jsxs(TC,{children:[X.jsx(Jb,{onScrollRequested:e}),X.jsx(Xb,{}),X.jsx(Sv,{type:"experiments"}),X.jsx(Sv,{type:"projects"}),X.jsx(Fb,{}),X.jsx(Vb,{}),X.jsx(nC,{}),X.jsx(jb,{})]})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vm="169",bC=0,Mv=1,CC=2,cS=1,RC=2,Ui=3,Ur=0,rn=1,Tn=2,ji=0,hs=1,Xi=2,Ev=3,wv=4,PC=5,Jr=100,LC=101,IC=102,DC=103,NC=104,UC=200,OC=201,FC=202,kC=203,Bh=204,Hh=205,zC=206,BC=207,HC=208,VC=209,GC=210,WC=211,jC=212,XC=213,$C=214,Vh=0,Gh=1,Wh=2,Io=3,jh=4,Xh=5,$h=6,Yh=7,Xu=0,YC=1,qC=2,Cr=0,KC=1,ZC=2,QC=3,JC=4,uS=5,e3=6,t3=7,fS=300,Do=301,No=302,qh=303,Kh=304,$u=306,qa=1e3,ss=1001,Zh=1002,Hn=1003,n3=1004,Ul=1005,ii=1006,Hf=1007,os=1008,Ji=1009,dS=1010,hS=1011,Ka=1012,Gm=1013,Es=1014,Hi=1015,Br=1016,Wm=1017,jm=1018,Uo=1020,pS=35902,mS=1021,gS=1022,si=1023,vS=1024,_S=1025,mo=1026,Oo=1027,xS=1028,Xm=1029,yS=1030,$m=1031,Ym=1033,bc=33776,Cc=33777,Rc=33778,Pc=33779,Qh=35840,Jh=35841,ep=35842,tp=35843,np=36196,ip=37492,rp=37496,sp=37808,op=37809,ap=37810,lp=37811,cp=37812,up=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,vp=37820,_p=37821,Lc=36492,xp=36494,yp=36495,SS=36283,Sp=36284,Mp=36285,Ep=36286,i3=3200,r3=3201,qm=0,s3=1,gr="",mi="srgb",bi="srgb-linear",Km="display-p3",Yu="display-p3-linear",hu="linear",pt="srgb",pu="rec709",mu="p3",Ps=7680,Tv=519,o3=512,a3=513,l3=514,MS=515,c3=516,u3=517,f3=518,d3=519,Av=35044,bv=35040,Cv="300 es",Vi=2e3,gu=2001;class Wo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=Math.PI/180,wp=180/Math.PI;function ll(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function h3(t,e){return(t%e+e)%e}function Gf(t,e,n){return(1-n)*t+n*e}function na(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],x=r[0],m=r[3],h=r[6],_=r[1],g=r[4],S=r[7],b=r[2],A=r[5],E=r[8];return s[0]=o*x+a*_+l*b,s[3]=o*m+a*g+l*A,s[6]=o*h+a*S+l*E,s[1]=c*x+u*_+d*b,s[4]=c*m+u*g+d*A,s[7]=c*h+u*S+d*E,s[2]=f*x+p*_+v*b,s[5]=f*m+p*g+v*A,s[8]=f*h+p*S+v*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=n*d+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wf.makeScale(e,n)),this}rotate(e){return this.premultiply(Wf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wf=new ze;function ES(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Za(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function p3(){const t=Za("canvas");return t.style.display="block",t}const Rv={};function Ic(t){t in Rv||(Rv[t]=!0,console.warn(t))}function m3(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function g3(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function v3(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Pv=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lv=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[bi]:{transfer:hu,primaries:pu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[mi]:{transfer:pt,primaries:pu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Yu]:{transfer:hu,primaries:mu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Lv),fromReference:t=>t.applyMatrix3(Pv)},[Km]:{transfer:pt,primaries:mu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Lv),fromReference:t=>t.applyMatrix3(Pv).convertLinearToSRGB()}},_3=new Set([bi,Yu]),nt={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_3.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ia[e].toReference,r=ia[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ia[t].primaries},getTransfer:function(t){return t===gr?hu:ia[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ia[e].luminanceCoefficients)}};function go(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ls;class x3{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Za("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Za("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=go(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(go(n[i]/255)*255):n[i]=go(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y3=0;class wS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y3++}),this.uuid=ll(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xf(r[o].image)):s.push(Xf(r[o]))}else s=Xf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?x3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S3=0;class sn extends Wo{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=ss,r=ss,s=ii,o=os,a=si,l=Ji,c=sn.DEFAULT_ANISOTROPY,u=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S3++}),this.uuid=ll(),this.name="",this.source=new wS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case ss:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case ss:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=fS;sn.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,n=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,S=(p+1)/2,b=(h+1)/2,A=(u+f)/4,E=(d+x)/4,C=(v+m)/4;return g>S&&g>b?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=E/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=C/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=C/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M3 extends Wo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ct(0,0,e,n),this.scissorTest=!1,this.viewport=new ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends M3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class TS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class E3 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=ss,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==v){let m=1-a;const h=l*f+c*p+u*v+d*x,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const b=Math.sqrt(g),A=Math.atan2(b,h*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const S=a*_;if(l=l*m+f*S,c=c*m+p*S,u=u*m+v*S,d=d*m+x*S,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+u*d+l*p-c*f,e[n+1]=l*v+u*f+c*d-a*p,e[n+2]=c*v+u*p+a*f-l*d,e[n+3]=u*v-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Iv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Iv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $f.copy(this).projectOnVector(e),this.sub($f)}reflect(e){return this.sub($f.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $f=new N,Iv=new jo;class cl{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ol.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ol.copy(i.boundingBox)),Ol.applyMatrix4(e.matrixWorld),this.union(Ol)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Fl.subVectors(this.max,ra),Is.subVectors(e.a,ra),Ds.subVectors(e.b,ra),Ns.subVectors(e.c,ra),sr.subVectors(Ds,Is),or.subVectors(Ns,Ds),Gr.subVectors(Is,Ns);let n=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Gr.z,Gr.y,sr.z,0,-sr.x,or.z,0,-or.x,Gr.z,0,-Gr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Gr.y,Gr.x,0];return!Yf(n,Is,Ds,Ns,Fl)||(n=[1,0,0,0,1,0,0,0,1],!Yf(n,Is,Ds,Ns,Fl))?!1:(kl.crossVectors(sr,or),n=[kl.x,kl.y,kl.z],Yf(n,Is,Ds,Ns,Fl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new N,new N,new N,new N,new N,new N,new N,new N],Kn=new N,Ol=new cl,Is=new N,Ds=new N,Ns=new N,sr=new N,or=new N,Gr=new N,ra=new N,Fl=new N,kl=new N,Wr=new N;function Yf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wr.fromArray(t,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=n.dot(Wr),u=i.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const w3=new cl,sa=new N,qf=new N;class ul{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):w3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(qf)),this.expandByPoint(sa.copy(e.center).sub(qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new N,Kf=new N,zl=new N,ar=new N,Zf=new N,Bl=new N,Qf=new N;class Zm{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kf.copy(e).add(n).multiplyScalar(.5),zl.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(Kf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(zl),a=ar.dot(this.direction),l=-ar.dot(zl),c=ar.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=s*u,d>=0)if(f>=-v)if(f<=v){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kf).addScaledVector(zl,f),p}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,s){Zf.subVectors(n,e),Bl.subVectors(i,e),Qf.crossVectors(Zf,Bl);let o=this.direction.dot(Qf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Bl.crossVectors(ar,Bl));if(l<0)return null;const c=a*this.direction.dot(Zf.cross(ar));if(c<0||l+c>o)return null;const u=-a*ar.dot(Qf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,v,x,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,v,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,v=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,v=c*u,x=c*d;n[0]=f+x*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-v,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,v=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,v=a*u,x=a*d;n[0]=l*u,n[4]=v*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=v*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+v,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(T3,e,A3)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),lr.crossVectors(i,Sn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),lr.crossVectors(i,Sn)),lr.normalize(),Hl.crossVectors(Sn,lr),r[0]=lr.x,r[4]=Hl.x,r[8]=Sn.x,r[1]=lr.y,r[5]=Hl.y,r[9]=Sn.y,r[2]=lr.z,r[6]=Hl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],h=i[14],_=i[3],g=i[7],S=i[11],b=i[15],A=r[0],E=r[4],C=r[8],G=r[12],y=r[1],w=r[5],H=r[9],F=r[13],V=r[2],Y=r[6],B=r[10],ee=r[14],L=r[3],$=r[7],Z=r[11],ie=r[15];return s[0]=o*A+a*y+l*V+c*L,s[4]=o*E+a*w+l*Y+c*$,s[8]=o*C+a*H+l*B+c*Z,s[12]=o*G+a*F+l*ee+c*ie,s[1]=u*A+d*y+f*V+p*L,s[5]=u*E+d*w+f*Y+p*$,s[9]=u*C+d*H+f*B+p*Z,s[13]=u*G+d*F+f*ee+p*ie,s[2]=v*A+x*y+m*V+h*L,s[6]=v*E+x*w+m*Y+h*$,s[10]=v*C+x*H+m*B+h*Z,s[14]=v*G+x*F+m*ee+h*ie,s[3]=_*A+g*y+S*V+b*L,s[7]=_*E+g*w+S*Y+b*$,s[11]=_*C+g*H+S*B+b*Z,s[15]=_*G+g*F+S*ee+b*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],h=e[15];return v*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],h=e[15],_=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,g=v*f*c-u*m*c-v*l*p+o*m*p+u*l*h-o*f*h,S=u*x*c-v*d*c+v*a*p-o*x*p-u*a*h+o*d*h,b=v*d*l-u*x*l-v*a*f+o*x*f+u*a*m-o*d*m,A=n*_+i*g+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=_*E,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*E,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*E,e[4]=g*E,e[5]=(u*m*s-v*f*s+v*r*p-n*m*p-u*r*h+n*f*h)*E,e[6]=(v*l*s-o*m*s-v*r*c+n*m*c+o*r*h-n*l*h)*E,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*E,e[8]=S*E,e[9]=(v*d*s-u*x*s-v*i*p+n*x*p+u*i*h-n*d*h)*E,e[10]=(o*x*s-v*a*s+v*i*c-n*x*c-o*i*h+n*a*h)*E,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*E,e[12]=b*E,e[13]=(u*x*r-v*d*r+v*i*f-n*x*f-u*i*m+n*d*m)*E,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*E,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,v=s*d,x=o*u,m=o*d,h=a*d,_=l*c,g=l*u,S=l*d,b=i.x,A=i.y,E=i.z;return r[0]=(1-(x+h))*b,r[1]=(p+S)*b,r[2]=(v-g)*b,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+g)*E,r[9]=(m-_)*E,r[10]=(1-(f+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/s,u=1/o,d=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,v;if(a===Vi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===gu)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Vi){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let v,x;if(a===Vi)v=(o+s)*d,x=-2*d;else if(a===gu)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Us=new N,Zn=new st,T3=new N(0,0,0),A3=new N(1,1,1),lr=new N,Hl=new N,Sn=new N,Dv=new st,Nv=new jo;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nv.setFromEuler(this),this.setFromQuaternion(Nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class AS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b3=0;const Uv=new N,Os=new jo,Ii=new st,Vl=new N,oa=new N,C3=new N,R3=new jo,Ov=new N(1,0,0),Fv=new N(0,1,0),kv=new N(0,0,1),zv={type:"added"},P3={type:"removed"},Fs={type:"childadded",child:null},Jf={type:"childremoved",child:null};class qt extends Wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b3++}),this.uuid=ll(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new N,n=new fi,i=new jo,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new ze}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new AS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Ov,e)}rotateY(e){return this.rotateOnAxis(Fv,e)}rotateZ(e){return this.rotateOnAxis(kv,e)}translateOnAxis(e,n){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ov,e)}translateY(e){return this.translateOnAxis(Fv,e)}translateZ(e){return this.translateOnAxis(kv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Vl.copy(e):Vl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(oa,Vl,this.up):Ii.lookAt(Vl,oa,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Os.setFromRotationMatrix(Ii),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zv),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(P3),Jf.child=e,this.dispatchEvent(Jf),Jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zv),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,C3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,R3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new N(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new N,Di=new N,ed=new N,Ni=new N,ks=new N,zs=new N,Bv=new N,td=new N,nd=new N,id=new N,rd=new ct,sd=new ct,od=new ct;class ri{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),Di.subVectors(i,n),ed.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(Di),l=Qn.dot(ed),c=Di.dot(Di),u=Di.dot(ed),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return rd.setScalar(0),sd.setScalar(0),od.setScalar(0),rd.fromBufferAttribute(e,n),sd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(rd,s.x),o.addScaledVector(sd,s.y),o.addScaledVector(od,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),Di.subVectors(e,n),Qn.cross(Di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),Qn.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ks.subVectors(r,i),zs.subVectors(s,i),td.subVectors(e,i);const l=ks.dot(td),c=zs.dot(td);if(l<=0&&c<=0)return n.copy(i);nd.subVectors(e,r);const u=ks.dot(nd),d=zs.dot(nd);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ks,o);id.subVectors(e,s);const p=ks.dot(id),v=zs.dot(id);if(v>=0&&p<=v)return n.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(zs,a);const m=u*v-p*d;if(m<=0&&d-u>=0&&p-v>=0)return Bv.subVectors(s,r),a=(d-u)/(d-u+(p-v)),n.copy(r).addScaledVector(Bv,a);const h=1/(m+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(ks,o).addScaledVector(zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function ad(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class De{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=h3(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ad(o,s,e+1/3),this.g=ad(o,s,e),this.b=ad(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=mi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const i=bS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}copyLinearToSRGB(e){return this.r=jf(e.r),this.g=jf(e.g),this.b=jf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return nt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Bt(Xt.r*255,0,255))*65536+Math.round(Bt(Xt.g*255,0,255))*256+Math.round(Bt(Xt.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=mi){nt.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+n,cr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(cr),e.getHSL(Gl);const i=Gf(cr.h,Gl.h,n),r=Gf(cr.s,Gl.s,n),s=Gf(cr.l,Gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new De;De.NAMES=bS;let L3=0;class Hr extends Wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L3++}),this.uuid=ll(),this.name="",this.type="Material",this.blending=hs,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Hh,this.blendEquation=Jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Hh&&(i.blendDst=this.blendDst),this.blendEquation!==Jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Io&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class CS extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,Wl=new Xe;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Av,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wl.fromBufferAttribute(this,n),Wl.applyMatrix3(e),this.setXY(n,Wl.x,Wl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=na(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=na(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=na(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=na(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=na(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Av&&(e.usage=this.usage),e}}class RS extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class PS extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let I3=0;const Fn=new st,ld=new qt,Bs=new N,Mn=new cl,aa=new cl,Nt=new N;class $n extends Wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I3++}),this.uuid=ll(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ES(e)?PS:RS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Mn.min,aa.min),Mn.expandByPoint(Nt),Nt.addVectors(Mn.max,aa.max),Mn.expandByPoint(Nt)):(Mn.expandByPoint(aa.min),Mn.expandByPoint(aa.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Nt.add(Bs)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new N,l[C]=new N;const c=new N,u=new N,d=new N,f=new Xe,p=new Xe,v=new Xe,x=new N,m=new N;function h(C,G,y){c.fromBufferAttribute(i,C),u.fromBufferAttribute(i,G),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,C),p.fromBufferAttribute(s,G),v.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const w=1/(p.x*v.y-v.x*p.y);isFinite(w)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(w),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(w),a[C].add(x),a[G].add(x),a[y].add(x),l[C].add(m),l[G].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let C=0,G=_.length;C<G;++C){const y=_[C],w=y.start,H=y.count;for(let F=w,V=w+H;F<V;F+=3)h(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const g=new N,S=new N,b=new N,A=new N;function E(C){b.fromBufferAttribute(r,C),A.copy(b);const G=a[C];g.copy(G),g.sub(b.multiplyScalar(b.dot(G))).normalize(),S.crossVectors(A,G);const w=S.dot(l[C])<0?-1:1;o.setXYZW(C,g.x,g.y,g.z,w)}for(let C=0,G=_.length;C<G;++C){const y=_[C],w=y.start,H=y.count;for(let F=w,V=w+H;F<V;F+=3)E(e.getX(F+0)),E(e.getX(F+1)),E(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new Gn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $n,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hv=new st,jr=new Zm,jl=new ul,Vv=new N,Xl=new N,$l=new N,Yl=new N,cd=new N,ql=new N,Gv=new N,Kl=new N;class tn extends qt{constructor(e=new $n,n=new CS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(cd.fromBufferAttribute(d,e),o?ql.addScaledVector(cd,u):ql.addScaledVector(cd.sub(n),u))}n.add(ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(jl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(jl,Vv)===null||jr.origin.distanceToSquared(Vv)>(e.far-e.near)**2))&&(Hv.copy(s).invert(),jr.copy(e.ray).applyMatrix4(Hv),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,b=g;S<b;S+=3){const A=a.getX(S),E=a.getX(S+1),C=a.getX(S+2);r=Zl(this,h,e,i,c,u,d,A,E,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const _=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=Zl(this,o,e,i,c,u,d,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,b=g;S<b;S+=3){const A=S,E=S+1,C=S+2;r=Zl(this,h,e,i,c,u,d,A,E,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,h=x;m<h;m+=3){const _=m,g=m+1,S=m+2;r=Zl(this,o,e,i,c,u,d,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function D3(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;Kl.copy(a),Kl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Kl);return c<n.near||c>n.far?null:{distance:c,point:Kl.clone(),object:t}}function Zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Xl),t.getVertexPosition(l,$l),t.getVertexPosition(c,Yl);const u=D3(t,e,n,i,Xl,$l,Yl,Gv);if(u){const d=new N;ri.getBarycoord(Gv,Xl,$l,Yl,d),r&&(u.uv=ri.getInterpolatedAttribute(r,a,l,c,d,new Xe)),s&&(u.uv1=ri.getInterpolatedAttribute(s,a,l,c,d,new Xe)),o&&(u.normal=ri.getInterpolatedAttribute(o,a,l,c,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};ri.getNormal(Xl,$l,Yl,f.normal),u.face=f,u.barycoord=d}return u}class Xo extends $n{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(d,2));function v(x,m,h,_,g,S,b,A,E,C,G){const y=S/E,w=b/C,H=S/2,F=b/2,V=A/2,Y=E+1,B=C+1;let ee=0,L=0;const $=new N;for(let Z=0;Z<B;Z++){const ie=Z*w-F;for(let ye=0;ye<Y;ye++){const Be=ye*y-H;$[x]=Be*_,$[m]=ie*g,$[h]=V,c.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[h]=A>0?1:-1,u.push($.x,$.y,$.z),d.push(ye/E),d.push(1-Z/C),ee+=1}}for(let Z=0;Z<C;Z++)for(let ie=0;ie<E;ie++){const ye=f+ie+Y*Z,Be=f+ie+Y*(Z+1),j=f+(ie+1)+Y*(Z+1),J=f+(ie+1)+Y*Z;l.push(ye,Be,J),l.push(Be,j,J),L+=6}a.addGroup(p,L,G),p+=L,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Fo(t[n]);for(const r in i)e[r]=i[r]}return e}function N3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function LS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const fl={clone:Fo,merge:Qt};var U3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zt extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=U3,this.fragmentShader=O3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fo(e.uniforms),this.uniformsGroups=N3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class IS extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ur=new N,Wv=new Xe,jv=new Xe;class hn extends IS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(Vf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,Wv,jv),n.subVectors(jv,Wv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class F3 extends qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Hs,Vs,e,n);r.layers=this.layers,this.add(r);const s=new hn(Hs,Vs,e,n);s.layers=this.layers,this.add(s);const o=new hn(Hs,Vs,e,n);o.layers=this.layers,this.add(o);const a=new hn(Hs,Vs,e,n);a.layers=this.layers,this.add(a);const l=new hn(Hs,Vs,e,n);l.layers=this.layers,this.add(l);const c=new hn(Hs,Vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class DS extends sn{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Do,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class k3 extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new DS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xo(5,5,5),s=new Zt({name:"CubemapFromEquirect",uniforms:Fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ji});s.uniforms.tEquirect.value=n;const o=new tn(r,s),a=n.minFilter;return n.minFilter===os&&(n.minFilter=ii),new F3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ud=new N,z3=new N,B3=new ze;class _i{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ud.subVectors(i,n).cross(z3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ud),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||B3.getNormalMatrix(e),r=this.coplanarPoint(ud).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ul,Ql=new N;class NS{constructor(e=new _i,n=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],v=r[9],x=r[10],m=r[11],h=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-h).normalize(),i[1].setComponents(l+s,f+c,m+p,S+h).normalize(),i[2].setComponents(l+o,f+u,m+v,S+_).normalize(),i[3].setComponents(l-o,f-u,m-v,S-_).normalize(),i[4].setComponents(l-a,f-d,m-x,S-g).normalize(),n===Vi)i[5].setComponents(l+a,f+d,m+x,S+g).normalize();else if(n===gu)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ql.x=r.normal.x>0?e.max.x:e.min.x,Ql.y=r.normal.y>0?e.max.y:e.min.y,Ql.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function US(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function H3(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],x=d[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class dl extends $n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],v=[],x=[],m=[];for(let h=0;h<u;h++){const _=h*f-o;for(let g=0;g<c;g++){const S=g*d-s;v.push(S,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const g=_+c*h,S=_+c*(h+1),b=_+1+c*(h+1),A=_+1+c*h;p.push(g,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new Ln(v,3)),this.setAttribute("normal",new Ln(x,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.widthSegments,e.heightSegments)}}var V3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G3=`#ifdef USE_ALPHAHASH
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
#endif`,W3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Z3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tR=`#ifdef USE_IRIDESCENCE
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
#endif`,nR=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,rR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,fR=`#define PI 3.141592653589793
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
} // validated`,dR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,hR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_R="gl_FragColor = linearToOutputTexel( gl_FragColor );",xR=`
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
}`,yR=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,SR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,MR=`#ifdef USE_ENVMAP
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
#endif`,ER=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wR=`#ifdef USE_ENVMAP
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
#endif`,TR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RR=`#ifdef USE_GRADIENTMAP
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
}`,PR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DR=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,NR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,UR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zR=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
}`,HR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,VR=`#if defined( RE_IndirectDiffuse )
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
#endif`,GR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$R=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZR=`#if defined( USE_POINTS_UV )
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
#endif`,QR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uP=`#ifdef USE_NORMALMAP
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
#endif`,fP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,vP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PP=`#ifdef USE_SKINNING
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
#endif`,LP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NP=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,UP=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OP=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VP=`uniform sampler2D t2D;
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
}`,GP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$P=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,YP=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,KP=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JP=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eL=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tL=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,nL=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,iL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rL=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,sL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,oL=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,aL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,lL=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,uL=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,fL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dL=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pL=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,mL=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,gL=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,vL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_L=`uniform vec3 color;
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
}`,xL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,yL=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Fe={alphahash_fragment:V3,alphahash_pars_fragment:G3,alphamap_fragment:W3,alphamap_pars_fragment:j3,alphatest_fragment:X3,alphatest_pars_fragment:$3,aomap_fragment:Y3,aomap_pars_fragment:q3,batching_pars_vertex:K3,batching_vertex:Z3,begin_vertex:Q3,beginnormal_vertex:J3,bsdfs:eR,iridescence_fragment:tR,bumpmap_pars_fragment:nR,clipping_planes_fragment:iR,clipping_planes_pars_fragment:rR,clipping_planes_pars_vertex:sR,clipping_planes_vertex:oR,color_fragment:aR,color_pars_fragment:lR,color_pars_vertex:cR,color_vertex:uR,common:fR,cube_uv_reflection_fragment:dR,defaultnormal_vertex:hR,displacementmap_pars_vertex:pR,displacementmap_vertex:mR,emissivemap_fragment:gR,emissivemap_pars_fragment:vR,colorspace_fragment:_R,colorspace_pars_fragment:xR,envmap_fragment:yR,envmap_common_pars_fragment:SR,envmap_pars_fragment:MR,envmap_pars_vertex:ER,envmap_physical_pars_fragment:NR,envmap_vertex:wR,fog_vertex:TR,fog_pars_vertex:AR,fog_fragment:bR,fog_pars_fragment:CR,gradientmap_pars_fragment:RR,lightmap_pars_fragment:PR,lights_lambert_fragment:LR,lights_lambert_pars_fragment:IR,lights_pars_begin:DR,lights_toon_fragment:UR,lights_toon_pars_fragment:OR,lights_phong_fragment:FR,lights_phong_pars_fragment:kR,lights_physical_fragment:zR,lights_physical_pars_fragment:BR,lights_fragment_begin:HR,lights_fragment_maps:VR,lights_fragment_end:GR,logdepthbuf_fragment:WR,logdepthbuf_pars_fragment:jR,logdepthbuf_pars_vertex:XR,logdepthbuf_vertex:$R,map_fragment:YR,map_pars_fragment:qR,map_particle_fragment:KR,map_particle_pars_fragment:ZR,metalnessmap_fragment:QR,metalnessmap_pars_fragment:JR,morphinstance_vertex:eP,morphcolor_vertex:tP,morphnormal_vertex:nP,morphtarget_pars_vertex:iP,morphtarget_vertex:rP,normal_fragment_begin:sP,normal_fragment_maps:oP,normal_pars_fragment:aP,normal_pars_vertex:lP,normal_vertex:cP,normalmap_pars_fragment:uP,clearcoat_normal_fragment_begin:fP,clearcoat_normal_fragment_maps:dP,clearcoat_pars_fragment:hP,iridescence_pars_fragment:pP,opaque_fragment:mP,packing:gP,premultiplied_alpha_fragment:vP,project_vertex:_P,dithering_fragment:xP,dithering_pars_fragment:yP,roughnessmap_fragment:SP,roughnessmap_pars_fragment:MP,shadowmap_pars_fragment:EP,shadowmap_pars_vertex:wP,shadowmap_vertex:TP,shadowmask_pars_fragment:AP,skinbase_vertex:bP,skinning_pars_vertex:CP,skinning_vertex:RP,skinnormal_vertex:PP,specularmap_fragment:LP,specularmap_pars_fragment:IP,tonemapping_fragment:DP,tonemapping_pars_fragment:NP,transmission_fragment:UP,transmission_pars_fragment:OP,uv_pars_fragment:FP,uv_pars_vertex:kP,uv_vertex:zP,worldpos_vertex:BP,background_vert:HP,background_frag:VP,backgroundCube_vert:GP,backgroundCube_frag:WP,cube_vert:jP,cube_frag:XP,depth_vert:$P,depth_frag:YP,distanceRGBA_vert:qP,distanceRGBA_frag:KP,equirect_vert:ZP,equirect_frag:QP,linedashed_vert:JP,linedashed_frag:eL,meshbasic_vert:tL,meshbasic_frag:nL,meshlambert_vert:iL,meshlambert_frag:rL,meshmatcap_vert:sL,meshmatcap_frag:oL,meshnormal_vert:aL,meshnormal_frag:lL,meshphong_vert:cL,meshphong_frag:uL,meshphysical_vert:fL,meshphysical_frag:dL,meshtoon_vert:hL,meshtoon_frag:pL,points_vert:mL,points_frag:gL,shadow_vert:vL,shadow_frag:_L,sprite_vert:xL,sprite_frag:yL},oe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},xi={basic:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new De(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Qt([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Qt([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Qt([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Qt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Qt([oe.lights,oe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};xi.physical={uniforms:Qt([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Jl={r:0,b:0,g:0},$r=new fi,SL=new st;function ML(t,e,n,i,r,s,o){const a=new De(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function x(_){let g=!1;const S=v(_);S===null?h(a,l):S&&S.isColor&&(h(S,1),g=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const S=v(g);S&&(S.isCubeTexture||S.mapping===$u)?(u===void 0&&(u=new tn(new Xo(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:Fo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$r.copy(g.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SL.makeRotationFromEuler($r)),u.material.toneMapped=nt.getTransfer(S.colorSpace)!==pt,(d!==S||f!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new tn(new dl(2,2),new Zt({name:"BackgroundMaterial",uniforms:Fo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,g){_.getRGB(Jl,LS(t)),i.buffers.color.setClear(Jl.r,Jl.g,Jl.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:x,addToRenderList:m}}function EL(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,w,H,F,V){let Y=!1;const B=d(F,H,w);s!==B&&(s=B,c(s.object)),Y=p(y,F,H,V),Y&&v(y,F,H,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(y,w,H,F),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function u(y){return t.deleteVertexArray(y)}function d(y,w,H){const F=H.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let Y=V[w.id];Y===void 0&&(Y={},V[w.id]=Y);let B=Y[F];return B===void 0&&(B=f(l()),Y[F]=B),B}function f(y){const w=[],H=[],F=[];for(let V=0;V<n;V++)w[V]=0,H[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:H,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,w,H,F){const V=s.attributes,Y=w.attributes;let B=0;const ee=H.getAttributes();for(const L in ee)if(ee[L].location>=0){const Z=V[L];let ie=Y[L];if(ie===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;B++}return s.attributesNum!==B||s.index!==F}function v(y,w,H,F){const V={},Y=w.attributes;let B=0;const ee=H.getAttributes();for(const L in ee)if(ee[L].location>=0){let Z=Y[L];Z===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),V[L]=ie,B++}s.attributes=V,s.attributesNum=B,s.index=F}function x(){const y=s.newAttributes;for(let w=0,H=y.length;w<H;w++)y[w]=0}function m(y){h(y,0)}function h(y,w){const H=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;H[y]=1,F[y]===0&&(t.enableVertexAttribArray(y),F[y]=1),V[y]!==w&&(t.vertexAttribDivisor(y,w),V[y]=w)}function _(){const y=s.newAttributes,w=s.enabledAttributes;for(let H=0,F=w.length;H<F;H++)w[H]!==y[H]&&(t.disableVertexAttribArray(H),w[H]=0)}function g(y,w,H,F,V,Y,B){B===!0?t.vertexAttribIPointer(y,w,H,V,Y):t.vertexAttribPointer(y,w,H,F,V,Y)}function S(y,w,H,F){x();const V=F.attributes,Y=H.getAttributes(),B=w.defaultAttributeValues;for(const ee in Y){const L=Y[ee];if(L.location>=0){let $=V[ee];if($===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const Z=$.normalized,ie=$.itemSize,ye=e.get($);if(ye===void 0)continue;const Be=ye.buffer,j=ye.type,J=ye.bytesPerElement,ae=j===t.INT||j===t.UNSIGNED_INT||$.gpuType===Gm;if($.isInterleavedBufferAttribute){const le=$.data,Ae=le.stride,Te=$.offset;if(le.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)h(L.location+He,le.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let He=0;He<L.locationSize;He++)m(L.location+He);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let He=0;He<L.locationSize;He++)g(L.location+He,ie/L.locationSize,j,Z,Ae*J,(Te+ie/L.locationSize*He)*J,ae)}else{if($.isInstancedBufferAttribute){for(let le=0;le<L.locationSize;le++)h(L.location+le,$.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let le=0;le<L.locationSize;le++)m(L.location+le);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let le=0;le<L.locationSize;le++)g(L.location+le,ie/L.locationSize,j,Z,ie*J,ie/L.locationSize*le*J,ae)}}else if(B!==void 0){const Z=B[ee];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}_()}function b(){C();for(const y in i){const w=i[y];for(const H in w){const F=w[H];for(const V in F)u(F[V].object),delete F[V];delete w[H]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const H in w){const F=w[H];for(const V in F)u(F[V].object),delete F[V];delete w[H]}delete i[y.id]}function E(y){for(const w in i){const H=i[w];if(H[y.id]===void 0)continue;const F=H[y.id];for(const V in F)u(F[V].object),delete F[V];delete H[y.id]}}function C(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function wL(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let x=0;x<d;x++)v+=u[x];for(let x=0;x<f.length;x++)n.update(v,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function TL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==si&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const C=E===Br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ji&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hi&&!C)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:S,vertexTextures:b,maxSamples:A}}function AL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _i,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let S=h.clippingState||null;l.value=S,S=u(v,f,g,p);for(let b=0;b!==g;++b)S[b]=n[b];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const h=p+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,S=p;g!==x;++g,S+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function bL(t){let e=new WeakMap;function n(o,a){return a===qh?o.mapping=Do:a===Kh&&(o.mapping=No),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qh||a===Kh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new k3(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OS extends IS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const so=4,Xv=[.125,.215,.35,.446,.526,.582],es=20,fd=new OS,$v=new De;let dd=null,hd=0,pd=0,md=!1;const Zr=(1+Math.sqrt(5))/2,Gs=1/Zr,Yv=[new N(-Zr,Gs,0),new N(Zr,Gs,0),new N(-Gs,0,Zr),new N(Gs,0,Zr),new N(0,Zr,-Gs),new N(0,Zr,Gs),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,hd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Do||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Br,format:si,colorSpace:bi,depthBuffer:!1},r=Kv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CL(s)),this._blurMaterial=RL(s,e,n)}return r}_compileMaterial(e){const n=new tn(this._lodPlanes[0],e);this._renderer.compile(n,fd)}_sceneToCubeUV(e,n,i,r){const a=new hn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($v),u.toneMapping=Cr,u.autoClear=!1;const p=new CS({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new tn(new Xo,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy($v),x=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;ec(r,_*g,h>2?g:0,g,g),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Do||e.mapping===No;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ec(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,fd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yv[(r-s-1)%Yv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*es-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):es;m>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);const h=[];let _=0;for(let E=0;E<es;++E){const C=E/x,G=Math.exp(-C*C/2);h.push(G),E===0?_+=G:E<m&&(_+=2*G)}for(let E=0;E<h.length;E++)h[E]=h[E]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-i;const S=this._sizeLods[r],b=3*S*(r>g-so?r-g+so:0),A=4*(this._cubeSize-S);ec(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(d,fd)}}function CL(t){const e=[],n=[],i=[];let r=t;const s=t-so+1+Xv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-so?l=Xv[o-t+so-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,x=3,m=2,h=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),S=new Float32Array(h*v*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,C=A>2?0:-1,G=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(G,x*v*A),g.set(f,m*v*A);const y=[A,A,A,A,A,A];S.set(y,h*v*A)}const b=new $n;b.setAttribute("position",new Gn(_,x)),b.setAttribute("uv",new Gn(g,m)),b.setAttribute("faceIndex",new Gn(S,h)),e.push(b),r>so&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kv(t,e,n){const i=new Ci(t,e,n);return i.texture.mapping=$u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ec(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RL(t,e,n){const i=new Float32Array(es),r=new N(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Zv(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qv(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Qm(){return`

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
	`}function PL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qh||l===Kh,u=l===Do||l===No;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new qv(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new qv(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ic("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IL(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,h=x.length;m<h;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)e.update(f[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,h=x.length;m<h;m++)e.update(x[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,S=_.length;g<S;g+=3){const b=_[g+0],A=_[g+1],E=_[g+2];f.push(b,A,A,E,E,b)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const b=g+0,A=g+1,E=g+2;f.push(b,A,A,E,E,b)}}else return;const m=new(ES(f)?PS:RS)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function DL(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function d(f,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,v);let h=0;for(let _=0;_<v;_++)h+=p[_];for(let _=0;_<x.length;_++)n.update(h,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function NL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UL(t,e,n){const i=new WeakMap,r=new ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let G=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",G)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let g=0;p===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let S=a.attributes.position.count*g,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*b*4*d),E=new TS(A,S,b,d);E.type=Hi,E.needsUpdate=!0;const C=g*4;for(let y=0;y<d;y++){const w=m[y],H=h[y],F=_[y],V=S*b*4*y;for(let Y=0;Y<w.count;Y++){const B=Y*C;p===!0&&(r.fromBufferAttribute(w,Y),A[V+B+0]=r.x,A[V+B+1]=r.y,A[V+B+2]=r.z,A[V+B+3]=0),v===!0&&(r.fromBufferAttribute(H,Y),A[V+B+4]=r.x,A[V+B+5]=r.y,A[V+B+6]=r.z,A[V+B+7]=0),x===!0&&(r.fromBufferAttribute(F,Y),A[V+B+8]=r.x,A[V+B+9]=r.y,A[V+B+10]=r.z,A[V+B+11]=F.itemSize===4?r.w:1)}}f={count:d,texture:E,size:new Xe(S,b)},i.set(a,f),a.addEventListener("dispose",G)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function OL(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class FS extends sn{constructor(e,n,i,r,s,o,a,l,c,u=mo){if(u!==mo&&u!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===mo&&(i=Es),i===void 0&&u===Oo&&(i=Uo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Hn,this.minFilter=l!==void 0?l:Hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const kS=new sn,Jv=new FS(1,1),zS=new TS,BS=new E3,HS=new DS,e_=[],t_=[],n_=new Float32Array(16),i_=new Float32Array(9),r_=new Float32Array(4);function $o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=e_[r];if(s===void 0&&(s=new Float32Array(r),e_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qu(t,e){let n=t_[e];n===void 0&&(n=new Int32Array(e),t_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function zL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function BL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function HL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;r_.set(i),t.uniformMatrix2fv(this.addr,!1,r_),Dt(n,i)}}function VL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;i_.set(i),t.uniformMatrix3fv(this.addr,!1,i_),Dt(n,i)}}function GL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;n_.set(i),t.uniformMatrix4fv(this.addr,!1,n_),Dt(n,i)}}function WL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function jL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function XL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function $L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function YL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function KL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function ZL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function QL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jv.compareFunction=MS,s=Jv):s=kS,n.setTexture2D(e||s,r)}function JL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||BS,r)}function eI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||HS,r)}function tI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zS,r)}function nI(t){switch(t){case 5126:return FL;case 35664:return kL;case 35665:return zL;case 35666:return BL;case 35674:return HL;case 35675:return VL;case 35676:return GL;case 5124:case 35670:return WL;case 35667:case 35671:return jL;case 35668:case 35672:return XL;case 35669:case 35673:return $L;case 5125:return YL;case 36294:return qL;case 36295:return KL;case 36296:return ZL;case 35678:case 36198:case 36298:case 36306:case 35682:return QL;case 35679:case 36299:case 36307:return JL;case 35680:case 36300:case 36308:case 36293:return eI;case 36289:case 36303:case 36311:case 36292:return tI}}function iI(t,e){t.uniform1fv(this.addr,e)}function rI(t,e){const n=$o(e,this.size,2);t.uniform2fv(this.addr,n)}function sI(t,e){const n=$o(e,this.size,3);t.uniform3fv(this.addr,n)}function oI(t,e){const n=$o(e,this.size,4);t.uniform4fv(this.addr,n)}function aI(t,e){const n=$o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function lI(t,e){const n=$o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cI(t,e){const n=$o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function uI(t,e){t.uniform1iv(this.addr,e)}function fI(t,e){t.uniform2iv(this.addr,e)}function dI(t,e){t.uniform3iv(this.addr,e)}function hI(t,e){t.uniform4iv(this.addr,e)}function pI(t,e){t.uniform1uiv(this.addr,e)}function mI(t,e){t.uniform2uiv(this.addr,e)}function gI(t,e){t.uniform3uiv(this.addr,e)}function vI(t,e){t.uniform4uiv(this.addr,e)}function _I(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kS,s[o])}function xI(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||BS,s[o])}function yI(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||HS,s[o])}function SI(t,e,n){const i=this.cache,r=e.length,s=qu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||zS,s[o])}function MI(t){switch(t){case 5126:return iI;case 35664:return rI;case 35665:return sI;case 35666:return oI;case 35674:return aI;case 35675:return lI;case 35676:return cI;case 5124:case 35670:return uI;case 35667:case 35671:return fI;case 35668:case 35672:return dI;case 35669:case 35673:return hI;case 5125:return pI;case 36294:return mI;case 36295:return gI;case 36296:return vI;case 35678:case 36198:case 36298:case 36306:case 35682:return _I;case 35679:case 36299:case 36307:return xI;case 35680:case 36300:case 36308:case 36293:return yI;case 36289:case 36303:case 36311:case 36292:return SI}}class EI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=nI(n.type)}}class wI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MI(n.type)}}class TI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function s_(t,e){t.seq.push(e),t.map[e.id]=e}function AI(t,e,n){const i=t.name,r=i.length;for(gd.lastIndex=0;;){const s=gd.exec(i),o=gd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){s_(n,c===void 0?new EI(a,t,e):new wI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new TI(a),s_(n,d)),n=d}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);AI(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function o_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const bI=37297;let CI=0;function RI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function PI(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===mu&&n===pu?i="LinearDisplayP3ToLinearSRGB":e===pu&&n===mu&&(i="LinearSRGBToLinearDisplayP3"),t){case bi:case Yu:return[i,"LinearTransferOETF"];case mi:case Km:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function a_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+RI(t.getShaderSource(e),o)}else return r}function LI(t,e){const n=PI(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function II(t,e){let n;switch(e){case KC:n="Linear";break;case ZC:n="Reinhard";break;case QC:n="Cineon";break;case JC:n="ACESFilmic";break;case e3:n="AgX";break;case t3:n="Neutral";break;case uS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tc=new N;function DI(){nt.getLuminanceCoefficients(tc);const t=tc.x.toFixed(4),e=tc.y.toFixed(4),n=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function UI(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OI(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ga(t){return t!==""}function l_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(t){return t.replace(FI,zI)}const kI=new Map;function zI(t,e){let n=Fe[e];if(n===void 0){const i=kI.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tp(n)}const BI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(t){return t.replace(BI,HI)}function HI(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function f_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function VI(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function GI(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Do:case No:e="ENVMAP_TYPE_CUBE";break;case $u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function WI(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function jI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Xu:e="ENVMAP_BLENDING_MULTIPLY";break;case YC:e="ENVMAP_BLENDING_MIX";break;case qC:e="ENVMAP_BLENDING_ADD";break}return e}function XI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $I(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=VI(n),c=GI(n),u=WI(n),d=jI(n),f=XI(n),p=NI(n),v=UI(s),x=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ga).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ga).join(`
`),h.length>0&&(h+=`
`)):(m=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),h=[f_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?Fe.tonemapping_pars_fragment:"",n.toneMapping!==Cr?II("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,LI("linearToOutputTexel",n.outputColorSpace),DI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ga).join(`
`)),o=Tp(o),o=l_(o,n),o=c_(o,n),a=Tp(a),a=l_(a,n),a=c_(a,n),o=u_(o),a=u_(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Cv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=_+m+o,S=_+h+a,b=o_(r,r.VERTEX_SHADER,g),A=o_(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(w){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),F=r.getShaderInfoLog(b).trim(),V=r.getShaderInfoLog(A).trim();let Y=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,b,A);else{const ee=a_(r,b,"vertex"),L=a_(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+H+`
`+ee+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(F===""||V==="")&&(B=!1);B&&(w.diagnostics={runnable:Y,programLog:H,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(b),r.deleteShader(A),C=new Dc(r,x),G=OI(r,x)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let G;this.getAttributes=function(){return G===void 0&&E(this),G};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,bI)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CI++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=A,this}let YI=0;class qI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new KI(e),n.set(e,i)),i}}class KI{constructor(e){this.id=YI++,this.code=e,this.usedTimes=0}}function ZI(t,e,n,i,r,s,o){const a=new AS,l=new qI,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function h(y,w,H,F,V){const Y=F.fog,B=V.geometry,ee=y.isMeshStandardMaterial?F.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||ee),$=L&&L.mapping===$u?L.image.height:null,Z=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=ie!==void 0?ie.length:0;let Be=0;B.morphAttributes.position!==void 0&&(Be=1),B.morphAttributes.normal!==void 0&&(Be=2),B.morphAttributes.color!==void 0&&(Be=3);let j,J,ae,le;if(Z){const cn=xi[Z];j=cn.vertexShader,J=cn.fragmentShader}else j=y.vertexShader,J=y.fragmentShader,l.update(y),ae=l.getVertexShaderID(y),le=l.getFragmentShaderID(y);const Ae=t.getRenderTarget(),Te=V.isInstancedMesh===!0,He=V.isBatchedMesh===!0,$e=!!y.map,Ue=!!y.matcap,P=!!L,_n=!!y.aoMap,We=!!y.lightMap,Ke=!!y.bumpMap,Re=!!y.normalMap,ut=!!y.displacementMap,Ie=!!y.emissiveMap,R=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,K=y.clearcoat>0,te=y.dispersion>0,q=y.iridescence>0,Me=y.sheen>0,ce=y.transmission>0,me=O&&!!y.anisotropyMap,Ze=K&&!!y.clearcoatMap,re=K&&!!y.clearcoatNormalMap,ge=K&&!!y.clearcoatRoughnessMap,Pe=q&&!!y.iridescenceMap,Le=q&&!!y.iridescenceThicknessMap,ve=Me&&!!y.sheenColorMap,je=Me&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,ot=!!y.specularColorMap,I=!!y.specularIntensityMap,de=ce&&!!y.transmissionMap,W=ce&&!!y.thicknessMap,Q=!!y.gradientMap,ue=!!y.alphaMap,he=y.alphaTest>0,Ye=!!y.alphaHash,At=!!y.extensions;let ln=Cr;y.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ln=t.toneMapping);const Qe={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:J,defines:y.defines,customVertexShaderID:ae,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:He,batchingColor:He&&V._colorsTexture!==null,instancing:Te,instancingColor:Te&&V.instanceColor!==null,instancingMorph:Te&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ae===null?t.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:bi,alphaToCoverage:!!y.alphaToCoverage,map:$e,matcap:Ue,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:$,aoMap:_n,lightMap:We,bumpMap:Ke,normalMap:Re,displacementMap:p&&ut,emissiveMap:Ie,normalMapObjectSpace:Re&&y.normalMapType===s3,normalMapTangentSpace:Re&&y.normalMapType===qm,metalnessMap:R,roughnessMap:M,anisotropy:O,anisotropyMap:me,clearcoat:K,clearcoatMap:Ze,clearcoatNormalMap:re,clearcoatRoughnessMap:ge,dispersion:te,iridescence:q,iridescenceMap:Pe,iridescenceThicknessMap:Le,sheen:Me,sheenColorMap:ve,sheenRoughnessMap:je,specularMap:Oe,specularColorMap:ot,specularIntensityMap:I,transmission:ce,transmissionMap:de,thicknessMap:W,gradientMap:Q,opaque:y.transparent===!1&&y.blending===hs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:he,alphaHash:Ye,combine:y.combine,mapUv:$e&&m(y.map.channel),aoMapUv:_n&&m(y.aoMap.channel),lightMapUv:We&&m(y.lightMap.channel),bumpMapUv:Ke&&m(y.bumpMap.channel),normalMapUv:Re&&m(y.normalMap.channel),displacementMapUv:ut&&m(y.displacementMap.channel),emissiveMapUv:Ie&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:Ze&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(y.sheenRoughnessMap.channel),specularMapUv:Oe&&m(y.specularMap.channel),specularColorMapUv:ot&&m(y.specularColorMap.channel),specularIntensityMapUv:I&&m(y.specularIntensityMap.channel),transmissionMapUv:de&&m(y.transmissionMap.channel),thicknessMapUv:W&&m(y.thicknessMap.channel),alphaMapUv:ue&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Re||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&($e||ue),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&H.length>0,shadowMapType:t.shadowMap.type,toneMapping:ln,decodeVideoTexture:$e&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:At&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function _(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const H in y.defines)w.push(H),w.push(y.defines[H]);return y.isRawShaderMaterial===!1&&(g(w,y),S(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function S(y,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),y.push(a.mask)}function b(y){const w=x[y.type];let H;if(w){const F=xi[w];H=fl.clone(F.uniforms)}else H=y.uniforms;return H}function A(y,w){let H;for(let F=0,V=u.length;F<V;F++){const Y=u[F];if(Y.cacheKey===w){H=Y,++H.usedTimes;break}}return H===void 0&&(H=new $I(t,w,y,s),u.push(H)),H}function E(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function G(){l.dispose()}return{getParameters:h,getProgramCacheKey:_,getUniforms:b,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:u,dispose:G}}function QI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function JI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function d_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function h_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,v,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,v,x,m){const h=o(d,f,p,v,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,v,x,m){const h=o(d,f,p,v,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||JI),i.length>1&&i.sort(f||d_),r.length>1&&r.sort(f||d_)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function eD(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new h_,t.set(i,[o])):r>=s.length?(o=new h_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function tD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new De};break;case"SpotLight":n={position:new N,direction:new N,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function nD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iD=0;function rD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function sD(t){const e=new tD,n=nD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new st,o=new st;function a(c){let u=0,d=0,f=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,v=0,x=0,m=0,h=0,_=0,g=0,S=0,b=0,A=0,E=0;c.sort(rD);for(let G=0,y=c.length;G<y;G++){const w=c[G],H=w.color,F=w.intensity,V=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=H.r*F,d+=H.g*F,f+=H.b*F;else if(w.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(w.sh.coefficients[B],F);E++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const ee=w.shadow,L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=Y,i.directionalShadowMatrix[p]=w.shadow.matrix,_++}i.directional[p]=B,p++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(H).multiplyScalar(F),B.distance=V,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,i.spot[x]=B;const ee=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,ee.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[x]=ee.matrix,w.castShadow){const L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=Y,S++}x++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(H).multiplyScalar(F),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const ee=w.shadow,L=n.get(w);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=Y,i.pointShadowMatrix[v]=w.shadow.matrix,g++}i.point[v]=B,v++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(F),B.groundColor.copy(w.groundColor).multiplyScalar(F),i.hemi[h]=B,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const C=i.hash;(C.directionalLength!==p||C.pointLength!==v||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==h||C.numDirectionalShadows!==_||C.numPointShadows!==g||C.numSpotShadows!==S||C.numSpotMaps!==b||C.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,C.directionalLength=p,C.pointLength=v,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=h,C.numDirectionalShadows=_,C.numPointShadows=g,C.numSpotShadows=S,C.numSpotMaps=b,C.numLightProbes=E,i.version=iD++)}function l(c,u){let d=0,f=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const g=c[h];if(g.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(g.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(g.width*.5,0,0),S.halfHeight.set(0,g.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(g.matrixWorld),S.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(g.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function p_(t){const e=new sD(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function oD(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new p_(t),e.set(r,[a])):s>=o.length?(a=new p_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class aD extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lD extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uD=`uniform sampler2D shadow_pass;
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
}`;function fD(t,e,n){let i=new NS;const r=new Xe,s=new Xe,o=new ct,a=new aD({depthPacking:r3}),l=new lD,c={},u=n.maxTextureSize,d={[Ur]:rn,[rn]:Ur,[Tn]:Tn},f=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:cD,fragmentShader:uD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new $n;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cS;let h=this.type;this.render=function(A,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const G=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),H=t.state;H.setBlending(ji),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const F=h!==Ui&&this.type===Ui,V=h===Ui&&this.type!==Ui;for(let Y=0,B=A.length;Y<B;Y++){const ee=A[Y],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||F===!0||V===!0){const ie=this.type!==Ui?{minFilter:Hn,magFilter:Hn}:{};L.map!==null&&L.map.dispose(),L.map=new Ci(r.x,r.y,ie),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let ie=0;ie<Z;ie++){const ye=L.getViewport(ie);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),H.viewport(o),L.updateMatrices(ee,ie),i=L.getFrustum(),S(E,C,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===Ui&&_(L,C),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(G,y,w)};function _(A,E){const C=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ci(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,C,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,C,p,x,null)}function g(A,E,C,G){let y=null;const w=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)y=w;else if(y=C.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const H=y.uuid,F=E.uuid;let V=c[H];V===void 0&&(V={},c[H]=V);let Y=V[F];Y===void 0&&(Y=y.clone(),V[F]=Y,E.addEventListener("dispose",b)),y=Y}if(y.visible=E.visible,y.wireframe=E.wireframe,G===Ui?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:d[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=C}return y}function S(A,E,C,G,y){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ui)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const F=e.update(A),V=A.material;if(Array.isArray(V)){const Y=F.groups;for(let B=0,ee=Y.length;B<ee;B++){const L=Y[B],$=V[L.materialIndex];if($&&$.visible){const Z=g(A,$,G,y);A.onBeforeShadow(t,A,E,C,F,Z,L),t.renderBufferDirect(C,null,F,Z,A,L),A.onAfterShadow(t,A,E,C,F,Z,L)}}}else if(V.visible){const Y=g(A,V,G,y);A.onBeforeShadow(t,A,E,C,F,Y,null),t.renderBufferDirect(C,null,F,Y,A,null),A.onAfterShadow(t,A,E,C,F,Y,null)}}const H=A.children;for(let F=0,V=H.length;F<V;F++)S(H[F],E,C,G,y)}function b(A){A.target.removeEventListener("dispose",b);for(const C in c){const G=c[C],y=A.target.uuid;y in G&&(G[y].dispose(),delete G[y])}}}const dD={[Vh]:Gh,[Wh]:$h,[jh]:Yh,[Io]:Xh,[Gh]:Vh,[$h]:Wh,[Yh]:jh,[Xh]:Io};function hD(t){function e(){let I=!1;const de=new ct;let W=null;const Q=new ct(0,0,0,0);return{setMask:function(ue){W!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){I=ue},setClear:function(ue,he,Ye,At,ln){ln===!0&&(ue*=At,he*=At,Ye*=At),de.set(ue,he,Ye,At),Q.equals(de)===!1&&(t.clearColor(ue,he,Ye,At),Q.copy(de))},reset:function(){I=!1,W=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,de=!1,W=null,Q=null,ue=null;return{setReversed:function(he){de=he},setTest:function(he){he?ae(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(he){W!==he&&!I&&(t.depthMask(he),W=he)},setFunc:function(he){if(de&&(he=dD[he]),Q!==he){switch(he){case Vh:t.depthFunc(t.NEVER);break;case Gh:t.depthFunc(t.ALWAYS);break;case Wh:t.depthFunc(t.LESS);break;case Io:t.depthFunc(t.LEQUAL);break;case jh:t.depthFunc(t.EQUAL);break;case Xh:t.depthFunc(t.GEQUAL);break;case $h:t.depthFunc(t.GREATER);break;case Yh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=he}},setLocked:function(he){I=he},setClear:function(he){ue!==he&&(t.clearDepth(he),ue=he)},reset:function(){I=!1,W=null,Q=null,ue=null}}}function i(){let I=!1,de=null,W=null,Q=null,ue=null,he=null,Ye=null,At=null,ln=null;return{setTest:function(Qe){I||(Qe?ae(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(Qe){de!==Qe&&!I&&(t.stencilMask(Qe),de=Qe)},setFunc:function(Qe,cn,Ri){(W!==Qe||Q!==cn||ue!==Ri)&&(t.stencilFunc(Qe,cn,Ri),W=Qe,Q=cn,ue=Ri)},setOp:function(Qe,cn,Ri){(he!==Qe||Ye!==cn||At!==Ri)&&(t.stencilOp(Qe,cn,Ri),he=Qe,Ye=cn,At=Ri)},setLocked:function(Qe){I=Qe},setClear:function(Qe){ln!==Qe&&(t.clearStencil(Qe),ln=Qe)},reset:function(){I=!1,de=null,W=null,Q=null,ue=null,he=null,Ye=null,At=null,ln=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,h=null,_=null,g=null,S=null,b=null,A=new De(0,0,0),E=0,C=!1,G=null,y=null,w=null,H=null,F=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=B>=1):ee.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=B>=2);let L=null,$={};const Z=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),ye=new ct().fromArray(Z),Be=new ct().fromArray(ie);function j(I,de,W,Q){const ue=new Uint8Array(4),he=t.createTexture();t.bindTexture(I,he),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<W;Ye++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Q,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(de+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return he}const J={};J[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),J[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),J[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(t.DEPTH_TEST),s.setFunc(Io),We(!1),Ke(Mv),ae(t.CULL_FACE),P(ji);function ae(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function le(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ae(I,de){return u[I]!==de?(t.bindFramebuffer(I,de),u[I]=de,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Te(I,de){let W=f,Q=!1;if(I){W=d.get(de),W===void 0&&(W=[],d.set(de,W));const ue=I.textures;if(W.length!==ue.length||W[0]!==t.COLOR_ATTACHMENT0){for(let he=0,Ye=ue.length;he<Ye;he++)W[he]=t.COLOR_ATTACHMENT0+he;W.length=ue.length,Q=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,Q=!0);Q&&t.drawBuffers(W)}function He(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const $e={[Jr]:t.FUNC_ADD,[LC]:t.FUNC_SUBTRACT,[IC]:t.FUNC_REVERSE_SUBTRACT};$e[DC]=t.MIN,$e[NC]=t.MAX;const Ue={[UC]:t.ZERO,[OC]:t.ONE,[FC]:t.SRC_COLOR,[Bh]:t.SRC_ALPHA,[GC]:t.SRC_ALPHA_SATURATE,[HC]:t.DST_COLOR,[zC]:t.DST_ALPHA,[kC]:t.ONE_MINUS_SRC_COLOR,[Hh]:t.ONE_MINUS_SRC_ALPHA,[VC]:t.ONE_MINUS_DST_COLOR,[BC]:t.ONE_MINUS_DST_ALPHA,[WC]:t.CONSTANT_COLOR,[jC]:t.ONE_MINUS_CONSTANT_COLOR,[XC]:t.CONSTANT_ALPHA,[$C]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,de,W,Q,ue,he,Ye,At,ln,Qe){if(I===ji){v===!0&&(le(t.BLEND),v=!1);return}if(v===!1&&(ae(t.BLEND),v=!0),I!==PC){if(I!==x||Qe!==C){if((m!==Jr||g!==Jr)&&(t.blendEquation(t.FUNC_ADD),m=Jr,g=Jr),Qe)switch(I){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xi:t.blendFunc(t.ONE,t.ONE);break;case Ev:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xi:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ev:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}h=null,_=null,S=null,b=null,A.set(0,0,0),E=0,x=I,C=Qe}return}ue=ue||de,he=he||W,Ye=Ye||Q,(de!==m||ue!==g)&&(t.blendEquationSeparate($e[de],$e[ue]),m=de,g=ue),(W!==h||Q!==_||he!==S||Ye!==b)&&(t.blendFuncSeparate(Ue[W],Ue[Q],Ue[he],Ue[Ye]),h=W,_=Q,S=he,b=Ye),(At.equals(A)===!1||ln!==E)&&(t.blendColor(At.r,At.g,At.b,ln),A.copy(At),E=ln),x=I,C=!1}function _n(I,de){I.side===Tn?le(t.CULL_FACE):ae(t.CULL_FACE);let W=I.side===rn;de&&(W=!W),We(W),I.blending===hs&&I.transparent===!1?P(ji):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ut(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ae(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function We(I){G!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),G=I)}function Ke(I){I!==bC?(ae(t.CULL_FACE),I!==y&&(I===Mv?t.cullFace(t.BACK):I===CC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),y=I}function Re(I){I!==w&&(Y&&t.lineWidth(I),w=I)}function ut(I,de,W){I?(ae(t.POLYGON_OFFSET_FILL),(H!==de||F!==W)&&(t.polygonOffset(de,W),H=de,F=W)):le(t.POLYGON_OFFSET_FILL)}function Ie(I){I?ae(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+V-1),L!==I&&(t.activeTexture(I),L=I)}function M(I,de,W){W===void 0&&(L===null?W=t.TEXTURE0+V-1:W=L);let Q=$[W];Q===void 0&&(Q={type:void 0,texture:void 0},$[W]=Q),(Q.type!==I||Q.texture!==de)&&(L!==W&&(t.activeTexture(W),L=W),t.bindTexture(I,de||J[I]),Q.type=I,Q.texture=de)}function O(){const I=$[L];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ze(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){ye.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ye.copy(I))}function ve(I){Be.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Be.copy(I))}function je(I,de){let W=l.get(de);W===void 0&&(W=new WeakMap,l.set(de,W));let Q=W.get(I);Q===void 0&&(Q=t.getUniformBlockIndex(de,I.name),W.set(I,Q))}function Oe(I,de){const Q=l.get(de).get(I);a.get(de)!==Q&&(t.uniformBlockBinding(de,Q,I.__bindingPointIndex),a.set(de,Q))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,$={},u={},d=new WeakMap,f=[],p=null,v=!1,x=null,m=null,h=null,_=null,g=null,S=null,b=null,A=new De(0,0,0),E=0,C=!1,G=null,y=null,w=null,H=null,F=null,ye.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ae,disable:le,bindFramebuffer:Ae,drawBuffers:Te,useProgram:He,setBlending:P,setMaterial:_n,setFlipSided:We,setCullFace:Ke,setLineWidth:Re,setPolygonOffset:ut,setScissorTest:Ie,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:ge,texImage3D:Pe,updateUBOMapping:je,uniformBlockBinding:Oe,texStorage2D:Ze,texStorage3D:re,texSubImage2D:q,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Le,viewport:ve,reset:ot}}function m_(t,e,n,i){const r=pD(i);switch(n){case mS:return t*e;case vS:return t*e;case _S:return t*e*2;case xS:return t*e/r.components*r.byteLength;case Xm:return t*e/r.components*r.byteLength;case yS:return t*e*2/r.components*r.byteLength;case $m:return t*e*2/r.components*r.byteLength;case gS:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case Ym:return t*e*4/r.components*r.byteLength;case bc:case Cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jh:case tp:return Math.max(t,16)*Math.max(e,8)/4;case Qh:case ep:return Math.max(t,8)*Math.max(e,8)/2;case np:case ip:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case op:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case up:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Lc:case xp:case yp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case SS:case Sp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pD(t){switch(t){case Ji:case dS:return{byteLength:1,components:1};case Ka:case hS:case Br:return{byteLength:2,components:1};case Wm:case jm:return{byteLength:2,components:4};case Es:case Gm:case Hi:return{byteLength:4,components:1};case pS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function mD(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,M){return p?new OffscreenCanvas(R,M):Za("canvas")}function x(R,M,O){let K=1;const te=Ie(R);if((te.width>O||te.height>O)&&(K=O/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(K*te.width),Me=Math.floor(K*te.height);d===void 0&&(d=v(q,Me));const ce=M?v(q,Me):d;return ce.width=q,ce.height=Me,ce.getContext("2d").drawImage(R,0,0,q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Me+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Hn&&R.minFilter!==ii}function h(R){t.generateMipmap(R)}function _(R,M,O,K,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===t.RED&&(O===t.FLOAT&&(q=t.R32F),O===t.HALF_FLOAT&&(q=t.R16F),O===t.UNSIGNED_BYTE&&(q=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.R8UI),O===t.UNSIGNED_SHORT&&(q=t.R16UI),O===t.UNSIGNED_INT&&(q=t.R32UI),O===t.BYTE&&(q=t.R8I),O===t.SHORT&&(q=t.R16I),O===t.INT&&(q=t.R32I)),M===t.RG&&(O===t.FLOAT&&(q=t.RG32F),O===t.HALF_FLOAT&&(q=t.RG16F),O===t.UNSIGNED_BYTE&&(q=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RG8UI),O===t.UNSIGNED_SHORT&&(q=t.RG16UI),O===t.UNSIGNED_INT&&(q=t.RG32UI),O===t.BYTE&&(q=t.RG8I),O===t.SHORT&&(q=t.RG16I),O===t.INT&&(q=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(q=t.RGB16UI),O===t.UNSIGNED_INT&&(q=t.RGB32UI),O===t.BYTE&&(q=t.RGB8I),O===t.SHORT&&(q=t.RGB16I),O===t.INT&&(q=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),O===t.UNSIGNED_INT&&(q=t.RGBA32UI),O===t.BYTE&&(q=t.RGBA8I),O===t.SHORT&&(q=t.RGBA16I),O===t.INT&&(q=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),M===t.RGBA){const Me=te?hu:nt.getTransfer(K);O===t.FLOAT&&(q=t.RGBA32F),O===t.HALF_FLOAT&&(q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(q=Me===pt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(R,M){let O;return R?M===null||M===Es||M===Uo?O=t.DEPTH24_STENCIL8:M===Hi?O=t.DEPTH32F_STENCIL8:M===Ka&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Es||M===Uo?O=t.DEPTH_COMPONENT24:M===Hi?O=t.DEPTH_COMPONENT32F:M===Ka&&(O=t.DEPTH_COMPONENT16),O}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Hn&&R.minFilter!==ii?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),E(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),G(M)}function E(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,K=f.get(O);if(K){const te=K[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(K).length===0&&f.delete(O)}i.remove(R)}function C(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const O=R.source,K=f.get(O);delete K[M.__cacheKey],o.memory.textures--}function G(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let te=0;te<M.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[K][te]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let K=0,te=O.length;K<te;K++){const q=i.get(O[K]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(O[K])}i.remove(R)}let y=0;function w(){y=0}function H(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function F(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function V(R,M){const O=i.get(R);if(R.isVideoTexture&&Re(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(O,R,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function Y(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Be(O,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function B(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){Be(O,R,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const O=i.get(R);if(R.version>0&&O.__version!==R.version){j(O,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const L={[qa]:t.REPEAT,[ss]:t.CLAMP_TO_EDGE,[Zh]:t.MIRRORED_REPEAT},$={[Hn]:t.NEAREST,[n3]:t.NEAREST_MIPMAP_NEAREST,[Ul]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[Hf]:t.LINEAR_MIPMAP_NEAREST,[os]:t.LINEAR_MIPMAP_LINEAR},Z={[o3]:t.NEVER,[d3]:t.ALWAYS,[a3]:t.LESS,[MS]:t.LEQUAL,[l3]:t.EQUAL,[f3]:t.GEQUAL,[c3]:t.GREATER,[u3]:t.NOTEQUAL};function ie(R,M){if(M.type===Hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ii||M.magFilter===Hf||M.magFilter===Ul||M.magFilter===os||M.minFilter===ii||M.minFilter===Hf||M.minFilter===Ul||M.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,L[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,$[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,$[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Hn||M.minFilter!==Ul&&M.minFilter!==os||M.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ye(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const K=M.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const q=F(M);if(q!==R.__cacheKey){te[q]===void 0&&(te[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[q].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&C(M)),R.__cacheKey=q,R.__webglTexture=te[q].texture}return O}function Be(R,M,O){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const te=ye(R,M),q=M.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+O);const Me=i.get(q);if(q.version!==Me.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const ce=nt.getPrimaries(nt.workingColorSpace),me=M.colorSpace===gr?null:nt.getPrimaries(M.colorSpace),Ze=M.colorSpace===gr||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let re=x(M.image,!1,r.maxTextureSize);re=ut(M,re);const ge=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let Le=_(M.internalFormat,ge,Pe,M.colorSpace,M.isVideoTexture);ie(K,M);let ve;const je=M.mipmaps,Oe=M.isVideoTexture!==!0,ot=Me.__version===void 0||te===!0,I=q.dataReady,de=S(M,re);if(M.isDepthTexture)Le=g(M.format===Oo,M.type),ot&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Le,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,Pe,null));else if(M.isDataTexture)if(je.length>0){Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,de,Le,je[0].width,je[0].height);for(let W=0,Q=je.length;W<Q;W++)ve=je[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Pe,ve.data):n.texImage2D(t.TEXTURE_2D,W,Le,ve.width,ve.height,0,ge,Pe,ve.data);M.generateMipmaps=!1}else Oe?(ot&&n.texStorage2D(t.TEXTURE_2D,de,Le,re.width,re.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,ge,Pe,re.data)):n.texImage2D(t.TEXTURE_2D,0,Le,re.width,re.height,0,ge,Pe,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,je[0].width,je[0].height,re.depth);for(let W=0,Q=je.length;W<Q;W++)if(ve=je[W],M.format!==si)if(ge!==null)if(Oe){if(I)if(M.layerUpdates.size>0){const ue=m_(ve.width,ve.height,M.format,M.type);for(const he of M.layerUpdates){const Ye=ve.data.subarray(he*ue/ve.data.BYTES_PER_ELEMENT,(he+1)*ue/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,he,ve.width,ve.height,1,ge,Ye,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,re.depth,ge,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Le,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,re.depth,ge,Pe,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Le,ve.width,ve.height,re.depth,0,ge,Pe,ve.data)}else{Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,de,Le,je[0].width,je[0].height);for(let W=0,Q=je.length;W<Q;W++)ve=je[W],M.format!==si?ge!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve.width,ve.height,ge,Pe,ve.data):n.texImage2D(t.TEXTURE_2D,W,Le,ve.width,ve.height,0,ge,Pe,ve.data)}else if(M.isDataArrayTexture)if(Oe){if(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Le,re.width,re.height,re.depth),I)if(M.layerUpdates.size>0){const W=m_(re.width,re.height,M.format,M.type);for(const Q of M.layerUpdates){const ue=re.data.subarray(Q*W/re.data.BYTES_PER_ELEMENT,(Q+1)*W/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ge,Pe,ue)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ge,Pe,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,ge,Pe,re.data);else if(M.isData3DTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_3D,de,Le,re.width,re.height,re.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ge,Pe,re.data)):n.texImage3D(t.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,ge,Pe,re.data);else if(M.isFramebufferTexture){if(ot)if(Oe)n.texStorage2D(t.TEXTURE_2D,de,Le,re.width,re.height);else{let W=re.width,Q=re.height;for(let ue=0;ue<de;ue++)n.texImage2D(t.TEXTURE_2D,ue,Le,W,Q,0,ge,Pe,null),W>>=1,Q>>=1}}else if(je.length>0){if(Oe&&ot){const W=Ie(je[0]);n.texStorage2D(t.TEXTURE_2D,de,Le,W.width,W.height)}for(let W=0,Q=je.length;W<Q;W++)ve=je[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge,Pe,ve):n.texImage2D(t.TEXTURE_2D,W,Le,ge,Pe,ve);M.generateMipmaps=!1}else if(Oe){if(ot){const W=Ie(re);n.texStorage2D(t.TEXTURE_2D,de,Le,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Pe,re)}else n.texImage2D(t.TEXTURE_2D,0,Le,ge,Pe,re);m(M)&&h(K),Me.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function j(R,M,O){if(M.image.length!==6)return;const K=ye(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const q=i.get(te);if(te.version!==q.__version||K===!0){n.activeTexture(t.TEXTURE0+O);const Me=nt.getPrimaries(nt.workingColorSpace),ce=M.colorSpace===gr?null:nt.getPrimaries(M.colorSpace),me=M.colorSpace===gr||Me===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ze=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Q=0;Q<6;Q++)!Ze&&!re?ge[Q]=x(M.image[Q],!0,r.maxCubemapSize):ge[Q]=re?M.image[Q].image:M.image[Q],ge[Q]=ut(M,ge[Q]);const Pe=ge[0],Le=s.convert(M.format,M.colorSpace),ve=s.convert(M.type),je=_(M.internalFormat,Le,ve,M.colorSpace),Oe=M.isVideoTexture!==!0,ot=q.__version===void 0||K===!0,I=te.dataReady;let de=S(M,Pe);ie(t.TEXTURE_CUBE_MAP,M);let W;if(Ze){Oe&&ot&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){W=ge[Q].mipmaps;for(let ue=0;ue<W.length;ue++){const he=W[ue];M.format!==si?Le!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,he.width,he.height,Le,he.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,je,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,0,0,he.width,he.height,Le,ve,he.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue,je,he.width,he.height,0,Le,ve,he.data)}}}else{if(W=M.mipmaps,Oe&&ot){W.length>0&&de++;const Q=Ie(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ge[Q].width,ge[Q].height,Le,ve,ge[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ge[Q].width,ge[Q].height,0,Le,ve,ge[Q].data);for(let ue=0;ue<W.length;ue++){const Ye=W[ue].image[Q].image;Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Ye.width,Ye.height,Le,ve,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,je,Ye.width,Ye.height,0,Le,ve,Ye.data)}}else{Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,ve,ge[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Le,ve,ge[Q]);for(let ue=0;ue<W.length;ue++){const he=W[ue];Oe?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,0,0,Le,ve,he.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ue+1,je,Le,ve,he.image[Q])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),q.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,O,K,te,q){const Me=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),me=_(O.internalFormat,Me,ce,O.colorSpace);if(!i.get(M).__hasExternalTextures){const re=Math.max(1,M.width>>q),ge=Math.max(1,M.height>>q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,q,me,re,ge,M.depth,0,Me,ce,null):n.texImage2D(te,q,me,re,ge,0,Me,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,i.get(O).__webglTexture,0,We(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,i.get(O).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(R,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const K=M.depthTexture,te=K&&K.isDepthTexture?K.type:null,q=g(M.stencilBuffer,te),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=We(M);Ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,q,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const K=M.textures;for(let te=0;te<K.length;te++){const q=K[te],Me=s.convert(q.format,q.colorSpace),ce=s.convert(q.type),me=_(q.internalFormat,Me,ce,q.colorSpace),Ze=We(M);O&&Ke(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ze,me,M.width,M.height):Ke(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ze,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const K=i.get(M.depthTexture).__webglTexture,te=We(M);if(M.depthTexture.format===mo)Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(M.depthTexture.format===Oo)Ke(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");le(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),ae(M.__webglDepthbuffer[K],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,q)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ae(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(R,M,O){const K=i.get(R);M!==void 0&&J(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Ae(R)}function He(R){const M=R.texture,O=i.get(R),K=i.get(M);R.addEventListener("dispose",A);const te=R.textures,q=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),q){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)O.__webglFramebuffer[ce][me]=t.createFramebuffer()}else O.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)O.__webglFramebuffer[ce]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Me)for(let ce=0,me=te.length;ce<me;ce++){const Ze=i.get(te[ce]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ke(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const me=te[ce];O.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const Ze=s.convert(me.format,me.colorSpace),re=s.convert(me.type),ge=_(me.internalFormat,Ze,re,me.colorSpace,R.isXRRenderTarget===!0),Pe=We(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),ie(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)J(O.__webglFramebuffer[ce][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else J(O.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let ce=0,me=te.length;ce<me;ce++){const Ze=te[ce],re=i.get(Ze);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),ie(t.TEXTURE_2D,Ze),J(O.__webglFramebuffer,R,Ze,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ze)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,K.__webglTexture),ie(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)J(O.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,ce,me);else J(O.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);m(M)&&h(ce),n.unbindTexture()}R.depthBuffer&&Ae(R)}function $e(R){const M=R.textures;for(let O=0,K=M.length;O<K;O++){const te=M[O];if(m(te)){const q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(te).__webglTexture;n.bindTexture(q,Me),h(q),n.unbindTexture()}}}const Ue=[],P=[];function _n(R){if(R.samples>0){if(Ke(R)===!1){const M=R.textures,O=R.width,K=R.height;let te=t.COLOR_BUFFER_BIT;const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const Ze=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ze,0)}t.blitFramebuffer(0,0,O,K,0,0,O,K,te,t.NEAREST),l===!0&&(Ue.length=0,P.length=0,Ue.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ue.push(q),P.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const Ze=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function We(R){return Math.min(r.maxSamples,R.samples)}function Ke(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ut(R,M){const O=R.colorSpace,K=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==bi&&O!==gr&&(nt.getTransfer(O)===pt?(K!==si||te!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=B,this.setTextureCube=ee,this.rebindTextures=Te,this.setupRenderTarget=He,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ke}function gD(t,e){function n(i,r=gr){let s;const o=nt.getTransfer(r);if(i===Ji)return t.UNSIGNED_BYTE;if(i===Wm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===dS)return t.BYTE;if(i===hS)return t.SHORT;if(i===Ka)return t.UNSIGNED_SHORT;if(i===Gm)return t.INT;if(i===Es)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===Br)return t.HALF_FLOAT;if(i===mS)return t.ALPHA;if(i===gS)return t.RGB;if(i===si)return t.RGBA;if(i===vS)return t.LUMINANCE;if(i===_S)return t.LUMINANCE_ALPHA;if(i===mo)return t.DEPTH_COMPONENT;if(i===Oo)return t.DEPTH_STENCIL;if(i===xS)return t.RED;if(i===Xm)return t.RED_INTEGER;if(i===yS)return t.RG;if(i===$m)return t.RG_INTEGER;if(i===Ym)return t.RGBA_INTEGER;if(i===bc||i===Cc||i===Rc||i===Pc)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qh||i===Jh||i===ep||i===tp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ep)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===np||i===ip||i===rp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===np||i===ip)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===fp||i===dp||i===hp||i===pp||i===mp||i===gp||i===vp||i===_p)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===op)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ap)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===lp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===cp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===up)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vp)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_p)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===xp||i===yp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lc)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===SS||i===Sp||i===Mp||i===Ep)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ep)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class vD extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oo extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _D={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_D)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const xD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zt({vertexShader:xD,fragmentShader:yD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new tn(new dl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MD extends Wo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const x=new SD,m=n.getContextAttributes();let h=null,_=null;const g=[],S=[],b=new Xe;let A=null;const E=new hn;E.layers.enable(1),E.viewport=new ct;const C=new hn;C.layers.enable(2),C.viewport=new ct;const G=[E,C],y=new vD;y.layers.enable(1),y.layers.enable(2);let w=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=g[j];return J===void 0&&(J=new vd,g[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=g[j];return J===void 0&&(J=new vd,g[j]=J),J.getGripSpace()},this.getHand=function(j){let J=g[j];return J===void 0&&(J=new vd,g[j]=J),J.getHandSpace()};function F(j){const J=S.indexOf(j.inputSource);if(J===-1)return;const ae=g[J];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||o),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Y);for(let j=0;j<g.length;j++){const J=S[j];J!==null&&(S[j]=null,g[j].disconnect(J))}w=null,H=null,x.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ci(p.framebufferWidth,p.framebufferHeight,{format:si,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ae=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=m.stencil?Oo:mo,ae=m.stencil?Uo:Es);const Ae={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ci(f.textureWidth,f.textureHeight,{format:si,type:Ji,depthTexture:new FS(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(j){for(let J=0;J<j.removed.length;J++){const ae=j.removed[J],le=S.indexOf(ae);le>=0&&(S[le]=null,g[le].disconnect(ae))}for(let J=0;J<j.added.length;J++){const ae=j.added[J];let le=S.indexOf(ae);if(le===-1){for(let Te=0;Te<g.length;Te++)if(Te>=S.length){S.push(ae),le=Te;break}else if(S[Te]===null){S[Te]=ae,le=Te;break}if(le===-1)break}const Ae=g[le];Ae&&Ae.connect(ae)}}const B=new N,ee=new N;function L(j,J,ae){B.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const le=B.distanceTo(ee),Ae=J.projectionMatrix.elements,Te=ae.projectionMatrix.elements,He=Ae[14]/(Ae[10]-1),$e=Ae[14]/(Ae[10]+1),Ue=(Ae[9]+1)/Ae[5],P=(Ae[9]-1)/Ae[5],_n=(Ae[8]-1)/Ae[0],We=(Te[8]+1)/Te[0],Ke=He*_n,Re=He*We,ut=le/(-_n+We),Ie=ut*-_n;if(J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const R=He+ut,M=$e+ut,O=Ke-Ie,K=Re+(le-Ie),te=Ue*$e/M*R,q=P*$e/M*R;j.projectionMatrix.makePerspective(O,K,te,q,R,M),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let J=j.near,ae=j.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),y.near=C.near=E.near=J,y.far=C.far=E.far=ae,(w!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,H=y.far);const le=j.parent,Ae=y.cameras;$(y,le);for(let Te=0;Te<Ae.length;Te++)$(Ae[Te],le);Ae.length===2?L(y,E,C):y.projectionMatrix.copy(E.projectionMatrix),Z(j,y,le)};function Z(j,J,ae){ae===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wp*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ie=null;function ye(j,J){if(u=J.getViewerPose(c||o),v=J,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let le=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let Te=0;Te<ae.length;Te++){const He=ae[Te];let $e=null;if(p!==null)$e=p.getViewport(He);else{const P=d.getViewSubImage(f,He);$e=P.viewport,Te===0&&(e.setRenderTargetTextures(_,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(_))}let Ue=G[Te];Ue===void 0&&(Ue=new hn,Ue.layers.enable(Te),Ue.viewport=new ct,G[Te]=Ue),Ue.matrix.fromArray(He.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(He.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set($e.x,$e.y,$e.width,$e.height),Te===0&&(y.matrix.copy(Ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Ue)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Te=d.getDepthInformation(ae[0]);Te&&Te.isValid&&Te.texture&&x.init(e,Te,r.renderState)}}for(let ae=0;ae<g.length;ae++){const le=S[ae],Ae=g[ae];le!==null&&Ae!==void 0&&Ae.update(le,J,c||o)}ie&&ie(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const Be=new US;Be.setAnimationLoop(ye),this.setAnimationLoop=function(j){ie=j},this.dispose=function(){}}}const Yr=new fi,ED=new st;function wD(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,LS(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,g,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),g=_.envMap,S=_.envMapRotation;g&&(m.envMap.value=g,Yr.copy(S),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),m.envMapRotation.value.setFromMatrix4(ED.makeRotationFromEuler(Yr)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=g*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function TD(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function c(_,g){let S=r[_.id];S===void 0&&(v(_),S=u(_),r[_.id]=S,_.addEventListener("dispose",m));const b=g.program;i.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function u(_){const g=d();_.__bindingPointIndex=g;const S=t.createBuffer(),b=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=r[_.id],S=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,E=S.length;A<E;A++){const C=Array.isArray(S[A])?S[A]:[S[A]];for(let G=0,y=C.length;G<y;G++){const w=C[G];if(p(w,A,G,b)===!0){const H=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let Y=0;Y<F.length;Y++){const B=F[Y],ee=x(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,H+V,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,S,b){const A=_.value,E=g+"_"+S;if(b[E]===void 0)return typeof A=="number"||typeof A=="boolean"?b[E]=A:b[E]=A.clone(),!0;{const C=b[E];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return b[E]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function v(_){const g=_.uniforms;let S=0;const b=16;for(let E=0,C=g.length;E<C;E++){const G=Array.isArray(g[E])?g[E]:[g[E]];for(let y=0,w=G.length;y<w;y++){const H=G[y],F=Array.isArray(H.value)?H.value:[H.value];for(let V=0,Y=F.length;V<Y;V++){const B=F[V],ee=x(B),L=S%b,$=L%ee.boundary,Z=L+$;S+=$,Z!==0&&b-Z<ee.storage&&(S+=b-Z),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ee.storage}}}const A=S%b;return A>0&&(S+=b-A),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class AD{constructor(e={}){const{canvas:n=p3(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=Cr,this.toneMappingExposure=1;const g=this;let S=!1,b=0,A=0,E=null,C=-1,G=null;const y=new ct,w=new ct;let H=null;const F=new De(0);let V=0,Y=n.width,B=n.height,ee=1,L=null,$=null;const Z=new ct(0,0,Y,B),ie=new ct(0,0,Y,B);let ye=!1;const Be=new NS;let j=!1,J=!1;const ae=new st,le=new st,Ae=new N,Te=new ct,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ue(){return E===null?ee:1}let P=i;function _n(T,D){return n.getContext(T,D)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vm}`),n.addEventListener("webglcontextlost",Q,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",he,!1),P===null){const D="webgl2";if(P=_n(D,T),P===null)throw _n(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let We,Ke,Re,ut,Ie,R,M,O,K,te,q,Me,ce,me,Ze,re,ge,Pe,Le,ve,je,Oe,ot,I;function de(){We=new LL(P),We.init(),Oe=new gD(P,We),Ke=new TL(P,We,e,Oe),Re=new hD(P),Ke.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),ut=new NL(P),Ie=new QI,R=new mD(P,We,Re,Ie,Ke,Oe,ut),M=new bL(g),O=new PL(g),K=new H3(P),ot=new EL(P,K),te=new IL(P,K,ut,ot),q=new OL(P,te,K,ut),Le=new UL(P,Ke,R),re=new AL(Ie),Me=new ZI(g,M,O,We,Ke,ot,re),ce=new wD(g,Ie),me=new eD,Ze=new oD(We),Pe=new ML(g,M,O,Re,q,f,l),ge=new fD(g,q,Ke),I=new TD(P,ut,Ke,Re),ve=new wL(P,We,ut),je=new DL(P,We,ut),ut.programs=Me.programs,g.capabilities=Ke,g.extensions=We,g.properties=Ie,g.renderLists=me,g.shadowMap=ge,g.state=Re,g.info=ut}de();const W=new MD(g,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=We.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=We.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Y,B,!1))},this.getSize=function(T){return T.set(Y,B)},this.setSize=function(T,D,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,B=D,n.width=Math.floor(T*ee),n.height=Math.floor(D*ee),k===!0&&(n.style.width=T+"px",n.style.height=D+"px"),this.setViewport(0,0,T,D)},this.getDrawingBufferSize=function(T){return T.set(Y*ee,B*ee).floor()},this.setDrawingBufferSize=function(T,D,k){Y=T,B=D,ee=k,n.width=Math.floor(T*k),n.height=Math.floor(D*k),this.setViewport(0,0,T,D)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,D,k,z){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,D,k,z),Re.viewport(y.copy(Z).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,D,k,z){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,D,k,z),Re.scissor(w.copy(ie).multiplyScalar(ee).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Re.setScissorTest(ye=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,D=!0,k=!0){let z=0;if(T){let U=!1;if(E!==null){const se=E.texture.format;U=se===Ym||se===$m||se===Xm}if(U){const se=E.texture.type,fe=se===Ji||se===Es||se===Ka||se===Uo||se===Wm||se===jm,xe=Pe.getClearColor(),Se=Pe.getClearAlpha(),be=xe.r,Ce=xe.g,Ee=xe.b;fe?(p[0]=be,p[1]=Ce,p[2]=Ee,p[3]=Se,P.clearBufferuiv(P.COLOR,0,p)):(v[0]=be,v[1]=Ce,v[2]=Ee,v[3]=Se,P.clearBufferiv(P.COLOR,0,v))}else z|=P.COLOR_BUFFER_BIT}D&&(z|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),k&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Q,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",he,!1),me.dispose(),Ze.dispose(),Ie.dispose(),M.dispose(),O.dispose(),q.dispose(),ot.dispose(),I.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",og),W.removeEventListener("sessionend",ag),Vr.stop()};function Q(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=ut.autoReset,D=ge.enabled,k=ge.autoUpdate,z=ge.needsUpdate,U=ge.type;de(),ut.autoReset=T,ge.enabled=D,ge.autoUpdate=k,ge.needsUpdate=z,ge.type=U}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ye(T){const D=T.target;D.removeEventListener("dispose",Ye),At(D)}function At(T){ln(T),Ie.remove(T)}function ln(T){const D=Ie.get(T).programs;D!==void 0&&(D.forEach(function(k){Me.releaseProgram(k)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,D,k,z,U,se){D===null&&(D=He);const fe=U.isMesh&&U.matrixWorld.determinant()<0,xe=ZS(T,D,k,z,U);Re.setMaterial(z,fe);let Se=k.index,be=1;if(z.wireframe===!0){if(Se=te.getWireframeAttribute(k),Se===void 0)return;be=2}const Ce=k.drawRange,Ee=k.attributes.position;let it=Ce.start*be,ft=(Ce.start+Ce.count)*be;se!==null&&(it=Math.max(it,se.start*be),ft=Math.min(ft,(se.start+se.count)*be)),Se!==null?(it=Math.max(it,0),ft=Math.min(ft,Se.count)):Ee!=null&&(it=Math.max(it,0),ft=Math.min(ft,Ee.count));const Mt=ft-it;if(Mt<0||Mt===1/0)return;ot.setup(U,z,xe,k,Se);let xn,Je=ve;if(Se!==null&&(xn=K.get(Se),Je=je,Je.setIndex(xn)),U.isMesh)z.wireframe===!0?(Re.setLineWidth(z.wireframeLinewidth*Ue()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(U.isLine){let we=z.linewidth;we===void 0&&(we=1),Re.setLineWidth(we*Ue()),U.isLineSegments?Je.setMode(P.LINES):U.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else U.isPoints?Je.setMode(P.POINTS):U.isSprite&&Je.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const we=U._multiDrawStarts,kt=U._multiDrawCounts,et=U._multiDrawCount,Yn=Se?K.get(Se).bytesPerElement:1,As=Ie.get(z).currentProgram.getUniforms();for(let yn=0;yn<et;yn++)As.setValue(P,"_gl_DrawID",yn),Je.render(we[yn]/Yn,kt[yn])}else if(U.isInstancedMesh)Je.renderInstances(it,Mt,U.count);else if(k.isInstancedBufferGeometry){const we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,kt=Math.min(k.instanceCount,we);Je.renderInstances(it,Mt,kt)}else Je.render(it,Mt)};function Qe(T,D,k){T.transparent===!0&&T.side===Tn&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,pl(T,D,k),T.side=Ur,T.needsUpdate=!0,pl(T,D,k),T.side=Tn):pl(T,D,k)}this.compile=function(T,D,k=null){k===null&&(k=T),m=Ze.get(k),m.init(D),_.push(m),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),T!==k&&T.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const se=U.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const xe=se[fe];Qe(xe,k,U),z.add(xe)}else Qe(se,k,U),z.add(se)}),_.pop(),m=null,z},this.compileAsync=function(T,D,k=null){const z=this.compile(T,D,k);return new Promise(U=>{function se(){if(z.forEach(function(fe){Ie.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){U(T);return}setTimeout(se,10)}We.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let cn=null;function Ri(T){cn&&cn(T)}function og(){Vr.stop()}function ag(){Vr.start()}const Vr=new US;Vr.setAnimationLoop(Ri),typeof self<"u"&&Vr.setContext(self),this.setAnimationLoop=function(T){cn=T,W.setAnimationLoop(T),T===null?Vr.stop():Vr.start()},W.addEventListener("sessionstart",og),W.addEventListener("sessionend",ag),this.render=function(T,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(D),D=W.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,D,E),m=Ze.get(T,_.length),m.init(D),_.push(m),le.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Be.setFromProjectionMatrix(le),J=this.localClippingEnabled,j=re.init(this.clippingPlanes,J),x=me.get(T,h.length),x.init(),h.push(x),W.enabled===!0&&W.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&Ju(se,D,-1/0,g.sortObjects)}Ju(T,D,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(L,$),$e=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,$e&&Pe.addToRenderList(x,T),this.info.render.frame++,j===!0&&re.beginShadows();const k=m.state.shadowsArray;ge.render(k,T,D),j===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=x.opaque,U=x.transmissive;if(m.setupLights(),D.isArrayCamera){const se=D.cameras;if(U.length>0)for(let fe=0,xe=se.length;fe<xe;fe++){const Se=se[fe];cg(z,U,T,Se)}$e&&Pe.render(T);for(let fe=0,xe=se.length;fe<xe;fe++){const Se=se[fe];lg(x,T,Se,Se.viewport)}}else U.length>0&&cg(z,U,T,D),$e&&Pe.render(T),lg(x,T,D);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(g,T,D),ot.resetDefaultState(),C=-1,G=null,_.pop(),_.length>0?(m=_[_.length-1],j===!0&&re.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Ju(T,D,k,z){if(T.visible===!1)return;if(T.layers.test(D.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(D);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){z&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const fe=q.update(T),xe=T.material;xe.visible&&x.push(T,fe,xe,k,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const fe=q.update(T),xe=T.material;if(z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(xe)){const Se=fe.groups;for(let be=0,Ce=Se.length;be<Ce;be++){const Ee=Se[be],it=xe[Ee.materialIndex];it&&it.visible&&x.push(T,fe,it,k,Te.z,Ee)}}else xe.visible&&x.push(T,fe,xe,k,Te.z,null)}}const se=T.children;for(let fe=0,xe=se.length;fe<xe;fe++)Ju(se[fe],D,k,z)}function lg(T,D,k,z){const U=T.opaque,se=T.transmissive,fe=T.transparent;m.setupLightsView(k),j===!0&&re.setGlobalState(g.clippingPlanes,k),z&&Re.viewport(y.copy(z)),U.length>0&&hl(U,D,k),se.length>0&&hl(se,D,k),fe.length>0&&hl(fe,D,k),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function cg(T,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Ci(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Br:Ji,minFilter:os,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const se=m.state.transmissionRenderTarget[z.id],fe=z.viewport||y;se.setSize(fe.z,fe.w);const xe=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(F),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear(),$e&&Pe.render(k);const Se=g.toneMapping;g.toneMapping=Cr;const be=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),j===!0&&re.setGlobalState(g.clippingPlanes,z),hl(T,k,z),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ee=0,it=D.length;Ee<it;Ee++){const ft=D[Ee],Mt=ft.object,xn=ft.geometry,Je=ft.material,we=ft.group;if(Je.side===Tn&&Mt.layers.test(z.layers)){const kt=Je.side;Je.side=rn,Je.needsUpdate=!0,ug(Mt,k,z,xn,Je,we),Je.side=kt,Je.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}g.setRenderTarget(xe),g.setClearColor(F,V),be!==void 0&&(z.viewport=be),g.toneMapping=Se}function hl(T,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,se=T.length;U<se;U++){const fe=T[U],xe=fe.object,Se=fe.geometry,be=z===null?fe.material:z,Ce=fe.group;xe.layers.test(k.layers)&&ug(xe,D,k,Se,be,Ce)}}function ug(T,D,k,z,U,se){T.onBeforeRender(g,D,k,z,U,se),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(g,D,k,z,T,se),U.transparent===!0&&U.side===Tn&&U.forceSinglePass===!1?(U.side=rn,U.needsUpdate=!0,g.renderBufferDirect(k,D,z,U,T,se),U.side=Ur,U.needsUpdate=!0,g.renderBufferDirect(k,D,z,U,T,se),U.side=Tn):g.renderBufferDirect(k,D,z,U,T,se),T.onAfterRender(g,D,k,z,U,se)}function pl(T,D,k){D.isScene!==!0&&(D=He);const z=Ie.get(T),U=m.state.lights,se=m.state.shadowsArray,fe=U.state.version,xe=Me.getParameters(T,U.state,se,D,k),Se=Me.getProgramCacheKey(xe);let be=z.programs;z.environment=T.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(T.isMeshStandardMaterial?O:M).get(T.envMap||z.environment),z.envMapRotation=z.environment!==null&&T.envMap===null?D.environmentRotation:T.envMapRotation,be===void 0&&(T.addEventListener("dispose",Ye),be=new Map,z.programs=be);let Ce=be.get(Se);if(Ce!==void 0){if(z.currentProgram===Ce&&z.lightsStateVersion===fe)return dg(T,xe),Ce}else xe.uniforms=Me.getUniforms(T),T.onBeforeCompile(xe,g),Ce=Me.acquireProgram(xe,Se),be.set(Se,Ce),z.uniforms=xe.uniforms;const Ee=z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ee.clippingPlanes=re.uniform),dg(T,xe),z.needsLights=JS(T),z.lightsStateVersion=fe,z.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMap.value=U.state.directionalShadowMap,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotShadowMap.value=U.state.spotShadowMap,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMap.value=U.state.pointShadowMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ce,z.uniformsList=null,Ce}function fg(T){if(T.uniformsList===null){const D=T.currentProgram.getUniforms();T.uniformsList=Dc.seqWithValue(D.seq,T.uniforms)}return T.uniformsList}function dg(T,D){const k=Ie.get(T);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function ZS(T,D,k,z,U){D.isScene!==!0&&(D=He),R.resetTextureUnits();const se=D.fog,fe=z.isMeshStandardMaterial?D.environment:null,xe=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:bi,Se=(z.isMeshStandardMaterial?O:M).get(z.envMap||fe),be=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ce=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ee=!!k.morphAttributes.position,it=!!k.morphAttributes.normal,ft=!!k.morphAttributes.color;let Mt=Cr;z.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=g.toneMapping);const xn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=xn!==void 0?xn.length:0,we=Ie.get(z),kt=m.state.lights;if(j===!0&&(J===!0||T!==G)){const On=T===G&&z.id===C;re.setState(z,T,On)}let et=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==kt.state.version||we.outputColorSpace!==xe||U.isBatchedMesh&&we.batching===!1||!U.isBatchedMesh&&we.batching===!0||U.isBatchedMesh&&we.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&we.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&we.instancing===!1||!U.isInstancedMesh&&we.instancing===!0||U.isSkinnedMesh&&we.skinning===!1||!U.isSkinnedMesh&&we.skinning===!0||U.isInstancedMesh&&we.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&we.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&we.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&we.instancingMorph===!1&&U.morphTexture!==null||we.envMap!==Se||z.fog===!0&&we.fog!==se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==be||we.vertexTangents!==Ce||we.morphTargets!==Ee||we.morphNormals!==it||we.morphColors!==ft||we.toneMapping!==Mt||we.morphTargetsCount!==Je)&&(et=!0):(et=!0,we.__version=z.version);let Yn=we.currentProgram;et===!0&&(Yn=pl(z,D,U));let As=!1,yn=!1,ef=!1;const wt=Yn.getUniforms(),nr=we.uniforms;if(Re.useProgram(Yn.program)&&(As=!0,yn=!0,ef=!0),z.id!==C&&(C=z.id,yn=!0),As||G!==T){Ke.reverseDepthBuffer?(ae.copy(T.projectionMatrix),g3(ae),v3(ae),wt.setValue(P,"projectionMatrix",ae)):wt.setValue(P,"projectionMatrix",T.projectionMatrix),wt.setValue(P,"viewMatrix",T.matrixWorldInverse);const On=wt.map.cameraPosition;On!==void 0&&On.setValue(P,Ae.setFromMatrixPosition(T.matrixWorld)),Ke.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,yn=!0,ef=!0)}if(U.isSkinnedMesh){wt.setOptional(P,U,"bindMatrix"),wt.setOptional(P,U,"bindMatrixInverse");const On=U.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),wt.setValue(P,"boneTexture",On.boneTexture,R))}U.isBatchedMesh&&(wt.setOptional(P,U,"batchingTexture"),wt.setValue(P,"batchingTexture",U._matricesTexture,R),wt.setOptional(P,U,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",U._indirectTexture,R),wt.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",U._colorsTexture,R));const tf=k.morphAttributes;if((tf.position!==void 0||tf.normal!==void 0||tf.color!==void 0)&&Le.update(U,k,Yn),(yn||we.receiveShadow!==U.receiveShadow)&&(we.receiveShadow=U.receiveShadow,wt.setValue(P,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(nr.envMap.value=Se,nr.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(nr.envMapIntensity.value=D.environmentIntensity),yn&&(wt.setValue(P,"toneMappingExposure",g.toneMappingExposure),we.needsLights&&QS(nr,ef),se&&z.fog===!0&&ce.refreshFogUniforms(nr,se),ce.refreshMaterialUniforms(nr,z,ee,B,m.state.transmissionRenderTarget[T.id]),Dc.upload(P,fg(we),nr,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Dc.upload(P,fg(we),nr,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(P,"center",U.center),wt.setValue(P,"modelViewMatrix",U.modelViewMatrix),wt.setValue(P,"normalMatrix",U.normalMatrix),wt.setValue(P,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const On=z.uniformsGroups;for(let nf=0,eM=On.length;nf<eM;nf++){const hg=On[nf];I.update(hg,Yn),I.bind(hg,Yn)}}return Yn}function QS(T,D){T.ambientLightColor.needsUpdate=D,T.lightProbe.needsUpdate=D,T.directionalLights.needsUpdate=D,T.directionalLightShadows.needsUpdate=D,T.pointLights.needsUpdate=D,T.pointLightShadows.needsUpdate=D,T.spotLights.needsUpdate=D,T.spotLightShadows.needsUpdate=D,T.rectAreaLights.needsUpdate=D,T.hemisphereLights.needsUpdate=D}function JS(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,D,k){Ie.get(T.texture).__webglTexture=D,Ie.get(T.depthTexture).__webglTexture=k;const z=Ie.get(T);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,D){const k=Ie.get(T);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(T,D=0,k=0){E=T,b=D,A=k;let z=!0,U=null,se=!1,fe=!1;if(T){const Se=Ie.get(T);if(Se.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(Se.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Se.__hasExternalTextures)R.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ee=T.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Ie.has(Ee)&&(T.width!==Ee.image.width||T.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(fe=!0);const Ce=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[D])?U=Ce[D][k]:U=Ce[D],se=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?U=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?U=Ce[k]:U=Ce,y.copy(T.viewport),w.copy(T.scissor),H=T.scissorTest}else y.copy(Z).multiplyScalar(ee).floor(),w.copy(ie).multiplyScalar(ee).floor(),H=ye;if(Re.bindFramebuffer(P.FRAMEBUFFER,U)&&z&&Re.drawBuffers(T,U),Re.viewport(y),Re.scissor(w),Re.setScissorTest(H),se){const Se=Ie.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,Se.__webglTexture,k)}else if(fe){const Se=Ie.get(T.texture),be=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.__webglTexture,k||0,be)}C=-1},this.readRenderTargetPixels=function(T,D,k,z,U,se,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Re.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Se=T.texture,be=Se.format,Ce=Se.type;if(!Ke.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=T.width-z&&k>=0&&k<=T.height-U&&P.readPixels(D,k,z,U,Oe.convert(be),Oe.convert(Ce),se)}finally{const Se=E!==null?Ie.get(E).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(T,D,k,z,U,se,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const Se=T.texture,be=Se.format,Ce=Se.type;if(!Ke.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=T.width-z&&k>=0&&k<=T.height-U){Re.bindFramebuffer(P.FRAMEBUFFER,xe);const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(D,k,z,U,Oe.convert(be),Oe.convert(Ce),0);const it=E!==null?Ie.get(E).__webglFramebuffer:null;Re.bindFramebuffer(P.FRAMEBUFFER,it);const ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await m3(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ee),P.deleteSync(ft),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,D=null,k=0){T.isTexture!==!0&&(Ic("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,T=arguments[1]);const z=Math.pow(2,-k),U=Math.floor(T.image.width*z),se=Math.floor(T.image.height*z),fe=D!==null?D.x:0,xe=D!==null?D.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,fe,xe,U,se),Re.unbindTexture()},this.copyTextureToTexture=function(T,D,k=null,z=null,U=0){T.isTexture!==!0&&(Ic("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1],D=arguments[2],U=arguments[3]||0,k=null);let se,fe,xe,Se,be,Ce;k!==null?(se=k.max.x-k.min.x,fe=k.max.y-k.min.y,xe=k.min.x,Se=k.min.y):(se=T.image.width,fe=T.image.height,xe=0,Se=0),z!==null?(be=z.x,Ce=z.y):(be=0,Ce=0);const Ee=Oe.convert(D.format),it=Oe.convert(D.type);R.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const ft=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xn=P.getParameter(P.UNPACK_SKIP_PIXELS),Je=P.getParameter(P.UNPACK_SKIP_ROWS),we=P.getParameter(P.UNPACK_SKIP_IMAGES),kt=T.isCompressedTexture?T.mipmaps[U]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,kt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,kt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Se),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,be,Ce,se,fe,Ee,it,kt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,be,Ce,kt.width,kt.height,Ee,kt.data):P.texSubImage2D(P.TEXTURE_2D,U,be,Ce,se,fe,Ee,it,kt),P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we),U===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,D,k=null,z=null,U=0){T.isTexture!==!0&&(Ic("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,T=arguments[2],D=arguments[3],U=arguments[4]||0);let se,fe,xe,Se,be,Ce,Ee,it,ft;const Mt=T.isCompressedTexture?T.mipmaps[U]:T.image;k!==null?(se=k.max.x-k.min.x,fe=k.max.y-k.min.y,xe=k.max.z-k.min.z,Se=k.min.x,be=k.min.y,Ce=k.min.z):(se=Mt.width,fe=Mt.height,xe=Mt.depth,Se=0,be=0,Ce=0),z!==null?(Ee=z.x,it=z.y,ft=z.z):(Ee=0,it=0,ft=0);const xn=Oe.convert(D.format),Je=Oe.convert(D.type);let we;if(D.isData3DTexture)R.setTexture3D(D,0),we=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)R.setTexture2DArray(D,0),we=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);const kt=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Yn=P.getParameter(P.UNPACK_SKIP_PIXELS),As=P.getParameter(P.UNPACK_SKIP_ROWS),yn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Se),P.pixelStorei(P.UNPACK_SKIP_ROWS,be),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(we,U,Ee,it,ft,se,fe,xe,xn,Je,Mt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(we,U,Ee,it,ft,se,fe,xe,xn,Mt.data):P.texSubImage3D(we,U,Ee,it,ft,se,fe,xe,xn,Je,Mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,As),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yn),U===0&&D.generateMipmaps&&P.generateMipmap(we),Re.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){b=0,A=0,E=null,Re.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Km?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Yu?"display-p3":"srgb"}}class bD extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ku extends Hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vu=new N,_u=new N,g_=new st,la=new Zm,nc=new ul,_d=new N,v_=new N;class CD extends qt{constructor(e=new $n,n=new Ku){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)vu.fromBufferAttribute(n,r-1),_u.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vu.distanceTo(_u);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(r),nc.radius+=s,e.ray.intersectsSphere(nc)===!1)return;g_.copy(r).invert(),la.copy(e.ray).applyMatrix4(g_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const h=u.getX(x),_=u.getX(x+1),g=ic(this,e,la,l,h,_);g&&n.push(g)}if(this.isLineLoop){const x=u.getX(v-1),m=u.getX(p),h=ic(this,e,la,l,x,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let x=p,m=v-1;x<m;x+=c){const h=ic(this,e,la,l,x,x+1);h&&n.push(h)}if(this.isLineLoop){const x=ic(this,e,la,l,v-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ic(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(vu.fromBufferAttribute(o,r),_u.fromBufferAttribute(o,s),n.distanceSqToSegment(vu,_u,_d,v_)>i)return;_d.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(_d);if(!(l<e.near||l>e.far))return{distance:l,point:v_.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const __=new N,x_=new N;class RD extends CD{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)__.fromBufferAttribute(n,r),x_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+__.distanceTo(x_);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VS extends Hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const y_=new st,Ap=new Zm,rc=new ul,sc=new N;class GS extends qt{constructor(e=new $n,n=new VS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rc.copy(i.boundingSphere),rc.applyMatrix4(r),rc.radius+=s,e.ray.intersectsSphere(rc)===!1)return;y_.copy(r).invert(),Ap.copy(e.ray).applyMatrix4(y_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);sc.fromBufferAttribute(d,m),S_(sc,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,x=p;v<x;v++)sc.fromBufferAttribute(d,v),S_(sc,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function S_(t,e,n,i,r,s,o){const a=Ap.distanceSqToPoint(t);if(a<n){const l=new N;Ap.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class PD{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Xe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new st;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Jm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,d){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const oc=new N,xd=new Jm,yd=new Jm,Sd=new Jm;class LD extends PD{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(oc.subVectors(r[0],r[1]).add(r[0]),c=oc);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(oc.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=oc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),xd.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,v,x,m),yd.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,v,x,m),Sd.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),yd.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Sd.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(xd.calc(l),yd.calc(l),Sd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class WS extends Hr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new De(16777215),this.specular=new De(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qm,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ID extends Hr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qm,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const M_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class DD{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],v=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return v}return null}}}const ND=new DD;class eg{constructor(e){this.manager=e!==void 0?e:ND,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}eg.DEFAULT_MATERIAL_NAME="__DEFAULT";class UD extends eg{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=M_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Za("img");function l(){u(),M_.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bp extends eg{constructor(e){super(e)}load(e,n,i,r){const s=new sn,o=new UD(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class OD extends qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class FD extends OD{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class jS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=E_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=E_();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function E_(){return performance.now()}class w_{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vm);const vo=({colors:t})=>({cell:e})=>t[(e||0)%t.length],XS=`
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * (10.0 / - mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
`,$S=`
uniform float opacity;
varying vec3 vColor;

void main() {
  if (length(gl_PointCoord - vec2( 0.5, 0.5 )) > 0.475) discard;

  gl_FragColor = vec4(vColor, opacity);
}
`,_o=new Array(128).fill().map((t,e)=>`hsl(${e*29%360}, 60%, 60%)`),Md={faces:{enabled:!0,useColors:!0,colorGenerator:vo,colors:_o,reuse:"none",split:"cells",splitScale:100,material:new WS({transparent:!0,opacity:.25,blending:hs,depthWrite:!1,side:Tn,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:vo,colors:_o,reuse:"faces",split:"cells",splitScale:100,material:new Ku({transparent:!0,opacity:.25,blending:Xi,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:vo,colors:_o,reuse:"faces",split:"none",splitScale:100,material:new Zt({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:XS,fragmentShader:$S,transparent:!0,blending:Xi})}},kD=["all","faces","none"],zD=["none","cells","faces"];class BD extends oo{constructor(e,{all:n={},faces:i={},edges:r={},points:s={}}={all:{},faces:{},edges:{},points:{}}){super(),this.shape=e,this.config={faces:{...Md.faces,...i,...n},edges:{...Md.edges,...r,...n},points:{...Md.points,...s,...n}},this.parts={};const o={faces:tn,edges:RD,points:GS};["points","edges","faces"].map((a,l)=>{if(this.config[a].enabled){const c=typeof this.config[a].reuse=="string"?kD.indexOf(this.config[a].reuse):this.config[a].reuse;let u=typeof this.config[a].split=="string"?zD.indexOf(this.config[a].split):this.config[a].split;u>c&&(console.warn(`Geometry order ${u} can’t be superior to unfold order ${c}`),u=c);const d=this.getVerticesIndices(c,u),f=this.getIndices(c,u,l+1),p=this.buildGeometry(d,this.config[a].useColors,a);f&&this.setIndices(p,f),this[a]=this.createMesh(p,this.config[a].material,o[a]),this.config[a].useColors&&this.setColor(p,d,c,u,this.config[a].colorGenerator,this.config[a].colors,a),this.parts[a]={geometry:p,verticesIndices:d},this.add(this[a])}})}initGeometry(e,n){}getVerticesIndices(e,n){const i=r=>this.shape.faces[r];if(e===0){if(n===0)return new Array(this.shape.vertices.length).fill().map((r,s)=>s)}else if(e===1){if(n===0)return this.shape.cells.map(r=>[...new Set(r.map(i).flat())]).flat();if(n===1)return this.shape.cells.map(r=>[...new Set(r.map(i).flat())])}else if(e===2){if(n===0)return this.shape.cells.map(r=>r.map(i).flat()).flat();if(n===1)return this.shape.cells.map(r=>r.map(i).flat());if(n===2)return this.shape.cells.map(r=>r.map(i))}}setColor(e,n,i,r,s,o,a){const l=s({shape:this.shape,colors:o.map(u=>new De(u))}),c=u=>this.shape.faces[u];if(i===0){if(r===0){let u=0;n.forEach(d=>{const[f,p,v]=l({vertex:d,type:a}).toArray();e.attributes.color.array[u++]=f,e.attributes.color.array[u++]=p,e.attributes.color.array[u++]=v}),e.attributes.color.needsUpdate=!0}}else if(i===1){if(r===0){let u=0;this.shape.cells.forEach((d,f)=>{[...new Set(d.map(c).flat())].map(p=>{const[v,x,m]=l({cell:f,vertex:p,type:a}).toArray();e.attributes.color.array[u++]=v,e.attributes.color.array[u++]=x,e.attributes.color.array[u++]=m})}),e.attributes.color.needsUpdate=!0}r===1&&this.shape.cells.forEach((u,d)=>{let f=0;[...new Set(u.map(c).flat())].map(p=>{const[v,x,m]=l({cell:d,vertex:p,type:a}).toArray();e[d].attributes.color.array[f++]=v,e[d].attributes.color.array[f++]=x,e[d].attributes.color.array[f++]=m}),e[d].attributes.color.needsUpdate=!0})}else if(i===2)if(r===0){let u=0;this.shape.cells.forEach((d,f)=>{d.map(c).map((p,v)=>{p.forEach(x=>{const[m,h,_]=l({cell:f,face:v,vertex:x,type:a}).toArray();e.attributes.color.array[u++]=m,e.attributes.color.array[u++]=h,e.attributes.color.array[u++]=_})})}),e.attributes.color.needsUpdate=!0}else r===1?this.shape.cells.forEach((u,d)=>{let f=0;u.map(c).map((p,v)=>{p.forEach(x=>{const[m,h,_]=l({cell:d,face:v,vertex:x,type:a}).toArray();e[d].attributes.color.array[f++]=m,e[d].attributes.color.array[f++]=h,e[d].attributes.color.array[f++]=_})}),e[d].attributes.color.needsUpdate=!0}):r===2&&this.shape.cells.forEach((u,d)=>{u.map(c).map((f,p)=>{let v=0;f.forEach(x=>{const[m,h,_]=l({cell:d,face:p,vertex:x,type:a}).toArray();e[d][p].attributes.color.array[v++]=m,e[d][p].attributes.color.array[v++]=h,e[d][p].attributes.color.array[v++]=_}),e[d][p].attributes.color.needsUpdate=!0})})}getIndices(e,n,i){const r=o=>this.shape.faces[o];let s;if(i===0||i===1)s=null;else if(i===2){if(s=[],e===0)n===0&&this.shape.cells.forEach(o=>o.map(r).forEach(a=>{a.forEach((l,c)=>{s.push(l,a[(c+1)%a.length])})}));else if(e===1)if(n===0){let o=0;this.shape.cells.forEach(a=>{const l=[...new Set(a.map(r).flat())];a.map(r).forEach(c=>{c.forEach((u,d)=>{s.push(o+l.indexOf(u),o+l.indexOf(c[(d+1)%c.length]))})}),o+=l.length})}else n===1&&this.shape.cells.forEach((o,a)=>{const l=[...new Set(o.map(r).flat())],c=[];o.map(r).forEach(u=>{u.forEach((d,f)=>{c.push(l.indexOf(d),l.indexOf(u[(f+1)%u.length]))})}),s.push(c)});else if(e===2)if(n===0){let o=0;this.shape.cells.forEach(a=>{a.map(r).forEach(l=>{l.forEach((c,u)=>{s.push(o+u,o+(u+1)%l.length)}),o+=l.length})})}else n===1?this.shape.cells.forEach(o=>{let a=0;const l=[];o.map(r).forEach(c=>{c.forEach((u,d)=>{l.push(a+d,a+(d+1)%c.length)}),a+=c.length}),s.push(l)}):n===2&&this.shape.cells.forEach(o=>{const a=[];o.map(r).forEach(l=>{const c=[];l.forEach((u,d)=>{c.push(d,(d+1)%l.length)}),a.push(c)}),s.push(a)})}else if(i===3){if(s=[],e===0)this.shape.cells.forEach(o=>o.map(r).forEach(a=>{new Array(a.length-2).fill().forEach((l,c)=>{s.push(a[0],a[c+1],a[c+2])})}));else if(e===1)if(n===0){let o=0;this.shape.cells.forEach(a=>{const l=[...new Set(a.map(r).flat())];a.map(r).forEach(c=>{new Array(c.length-2).fill().forEach((u,d)=>{s.push(o+l.indexOf(c[0]),o+l.indexOf(c[d+1]),o+l.indexOf(c[d+2]))})}),o+=l.length})}else n===1&&this.shape.cells.forEach((o,a)=>{const l=[...new Set(o.map(r).flat())],c=[];o.map(r).forEach(u=>{new Array(u.length-2).fill().forEach((d,f)=>{c.push(l.indexOf(u[0]),l.indexOf(u[f+1]),l.indexOf(u[f+2]))})}),s.push(c)});else if(e===2)if(n===0){let o=0;this.shape.cells.forEach(a=>{a.map(r).forEach(l=>{new Array(l.length-2).fill().forEach((c,u)=>{s.push(o,o+u+1,o+u+2)}),o+=l.length})})}else n===1?this.shape.cells.forEach(o=>{let a=0;const l=[];o.map(r).forEach(c=>{new Array(c.length-2).fill().forEach((u,d)=>{l.push(a,a+d+1,a+d+2)}),a+=c.length}),s.push(l)}):n===2&&this.shape.cells.forEach(o=>{const a=[];o.map(r).forEach(l=>{const c=[];new Array(l.length-2).fill().forEach((u,d)=>{c.push(0,d+1,d+2)}),a.push(c)}),s.push(a)})}return s}buildGeometry(e,n,i,r=0){const[s]=e;if(Array.isArray(s))return e.map(l=>this.buildGeometry(l,n,i,r+1));const o=e.length,a=new $n;return a.setAttribute("position",new Gn(new Float32Array(3*o),3).setUsage(bv)),n&&a.setAttribute("color",new Gn(new Float32Array(3*o),3).setUsage(bv)),a.name=`${i} geometry, level ${r}`,a}setIndices(e,n){return Array.isArray(e)?e.map((i,r)=>this.setIndices(i,n[r])):e.setIndex(n)}createMesh(e,n,i){if(Array.isArray(e)){const r=new oo;return r.add(...e.map((s,o)=>this.createMesh(s,Array.isArray(n)?n[o]:n,i))),r}return new i(e,n)}walk(e,n,i){if(Array.isArray(e))return e.forEach((r,s)=>this.walk(r,n[s],i));i(e,n)}setPoint(e,n,i,r){this.walk(e,n,(s,o)=>{let a=0;o.forEach(l=>{const[c,u,d]=r[l];s.attributes.position.array[a++]=c,s.attributes.position.array[a++]=u,s.attributes.position.array[a++]=d}),s.attributes.position.needsUpdate=!0,i==="faces"&&(s.computeVertexNormals(),s.attributes.normal.needsUpdate=!0)})}recenter(e,n){if(e.isGroup)return e.children.map(r=>this.recenter(r,n));const i=new N;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getCenter(i),e.geometry.center(),e.position.copy(i),e.scale.setScalar(n/100)}update(e){e.prepare(this.shape.vertices);const n=this.shape.vertices.map(e.project.bind(e));Object.entries(this.parts).forEach(([i,r])=>{this.config[i].enabled&&(this.setPoint(r.geometry,r.verticesIndices,i,n),this.recenter(this[i],this.config[i].splitScale))})}}class HD{constructor(e,n,i){this.fov=e||Math.PI/2,this.w=n||10,this.wt=0,this.wSlice=0,this.rotation=i||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}_directProject([e,n,i,r]){const s=1+r*this.fov/this.w;return[e/s,n/s,i/s]}project([e,n,i,r]){return this._directProject(this.rotatePoint([e,n,i,r]))}_directSlice([e,n,i,r],[s,o,a,l]){if((this.wSlice-r)*(this.wSlice-l)>=0)return;const c=(this.wSlice-r)/(l-r),u=e+c*(s-e),d=n+c*(o-n),f=i+c*(a-i);return[u,d,f]}slice(e,n){return this._directSlice(this.rotatePoint(e),this.rotatePoint(n))}shiftSlice(e,n,i){this.wt+=e/100;const r=(1+Math.cos(this.wt))*.5;this.wSlice=n+(i-n)*r}rotate(e){Object.keys(this.rotation).forEach(n=>{this.rotation[n]=(this.rotation[n]+(e[n]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,n,i,r]){const{xy:s,xz:o,xw:a,yz:l,yw:c,zw:u}=this.rotation,d=Math.cos(s),f=Math.sin(s),p=Math.cos(o),v=Math.sin(o),x=Math.cos(a),m=Math.sin(a),h=Math.cos(l),_=Math.sin(l),g=Math.cos(c),S=Math.sin(c),b=Math.cos(u),A=Math.sin(u);let E=e;return e=e*d+n*f,n=n*d-E*f,E=e,e=e*p+i*v,i=i*p-E*v,E=e,e=e*x+r*m,r=r*x-E*m,E=n,n=n*h+i*_,i=i*h-E*_,E=n,n=n*g+r*S,r=r*g-E*S,E=i,i=i*b+r*A,r=r*b-E*A,[e,n,i,r]}prepare(){}}new WS({side:Tn,shininess:50,vertexColors:!0}),new Ku({transparent:!0,opacity:.25,blending:Xi,depthWrite:!1,vertexColors:!0,linewidth:2}),new Zt({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:XS,fragmentShader:$S,transparent:!0,blending:Xi});var VD={vertices:[[-1,0,0,0],[1,0,0,0],[0,-1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,1,0],[0,0,0,-1],[0,0,0,1]],faces:[[0,2,4],[0,2,5],[0,2,6],[0,2,7],[0,3,4],[0,3,5],[0,3,6],[0,3,7],[0,4,6],[0,4,7],[0,5,6],[0,5,7],[1,2,4],[1,2,5],[1,2,6],[1,2,7],[1,3,4],[1,3,5],[1,3,6],[1,3,7],[1,4,6],[1,4,7],[1,5,6],[1,5,7],[2,4,6],[2,4,7],[2,5,6],[2,5,7],[3,4,6],[3,4,7],[3,5,6],[3,5,7]],cells:[[0,2,8,24],[0,3,9,25],[1,2,10,26],[1,3,11,27],[4,6,8,28],[4,7,9,29],[5,6,10,30],[5,7,11,31],[12,14,20,24],[12,15,21,25],[13,14,22,26],[13,15,23,27],[16,18,20,28],[16,19,21,29],[17,18,22,30],[17,19,23,31]]},T_={vertices:[[1,1,1,-1/Math.sqrt(5)],[1,-1,-1,-1/Math.sqrt(5)],[-1,1,-1,-1/Math.sqrt(5)],[-1,-1,1,-1/Math.sqrt(5)],[0,0,0,Math.sqrt(5)-1/Math.sqrt(5)]],faces:[[1,2,3],[0,1,2],[0,1,3],[0,3,2],[0,4,1],[0,2,4],[0,3,4],[2,4,3],[1,3,4],[1,4,2]],cells:[[0,1,2,3],[1,5,4,9],[3,6,5,7],[2,4,6,8],[0,7,8,9]]};const tg=([t,e],[n,i],[r,s],[o,a])=>({vertices:[[e,i,s,a],[e,i,r,a],[e,n,r,a],[e,n,s,a],[t,i,s,a],[t,i,r,a],[t,n,r,a],[t,n,s,a],[e,i,s,o],[e,i,r,o],[e,n,r,o],[e,n,s,o],[t,i,s,o],[t,i,r,o],[t,n,r,o],[t,n,s,o]],faces:[[0,1,2,3],[0,4,5,1],[0,3,7,4],[3,2,6,7],[1,5,6,2],[4,7,6,5],[0,1,9,8],[4,5,13,12],[3,2,10,11],[7,6,14,15],[0,3,11,8],[4,7,15,12],[1,2,10,9],[5,6,14,13],[0,4,12,8],[1,5,13,9],[2,6,14,10],[3,7,15,11],[11,10,9,8],[9,13,12,8],[12,15,11,8],[15,14,10,11],[10,14,13,9],[13,14,15,12]],cells:[[0,1,2,3,4,5],[0,6,12,8,10,18],[1,6,14,7,15,19],[4,12,16,13,15,22],[3,8,16,9,17,21],[2,10,17,11,14,20],[5,7,13,9,11,23],[18,19,20,21,22,23]]}),GD=tg([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),YS=t=>tg([-t,t],[-t,t],[-t,t],[-t,t]);var WD=YS(1);const ng=([t,e],[n,i],[r,s],o)=>({vertices:[[t,n,r,0],[t,n,s,0],[t,i,r,0],[t,i,s,0],[e,n,r,0],[e,n,s,0],[e,i,r,0],[e,i,s,0],[0,0,0,o]],faces:[[1,5,8],[4,5,8],[0,4,8],[0,1,8],[0,1,5,4],[2,6,8],[4,6,8],[0,2,8],[0,2,6,4],[1,3,8],[2,3,8],[0,1,3,2],[5,7,8],[6,7,8],[4,5,7,6],[3,7,8],[2,3,7,6],[1,3,7,5]],cells:[[0,1,2,3,4],[5,6,2,7,8],[9,10,7,3,11],[12,13,6,1,14],[15,13,5,10,16],[15,12,0,9,17],[4,8,11,14,16,17]]}),jD=t=>ng([-t,t],[-t,t],[-t,t],t),XD=ng([-.25,.25],[-.5,.5],[-.75,.75],1),ig=([t,e],[n,i],[r,s],[o,a])=>({vertices:[[0,0,0,o],[t,n,r,0],[t,n,s,0],[t,i,r,0],[t,i,s,0],[e,n,r,0],[e,n,s,0],[e,i,r,0],[e,i,s,0],[0,0,0,a]],faces:[[6,8,9],[7,8,9],[5,7,9],[5,6,9],[5,6,8,7],[4,8,9],[3,7,9],[3,4,9],[3,4,8,7],[2,6,9],[2,4,9],[2,4,8,6],[1,5,9],[1,3,9],[1,3,7,5],[1,2,9],[1,2,6,5],[1,2,4,3],[0,7,8],[0,6,8],[0,5,6],[0,5,7],[0,4,8],[0,3,4],[0,3,7],[0,2,4],[0,2,6],[0,1,3],[0,1,5],[0,1,2]],cells:[[0,1,2,3,4],[5,1,6,7,8],[5,0,9,10,11],[6,2,12,13,14],[9,3,12,15,16],[10,7,13,15,17],[18,19,20,21,4],[18,22,23,24,8],[19,22,25,26,11],[21,24,27,28,14],[20,26,29,28,16],[23,25,29,27,17]]}),$D=t=>ig([-t,t],[-t,t],[-t,t],[-t,t]),YD=ig([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),rg=([t,e],[n,i],[r,s],o)=>({vertices:[[t,0,0,0],[0,n,0,0],[0,0,r,0],[0,0,s,0],[0,i,0,0],[e,0,0,0],[0,0,0,o]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),qD=t=>rg([-t,t],[-t,t],[-t,t],t),KD=rg([-.25,.25],[-.5,.5],[-.75,.75],1),sg=([t,e],[n,i],[r,s],[o,a])=>({vertices:[[t,0,0,0],[0,n,0,0],[0,0,r,0],[0,0,0,o],[0,0,0,a],[0,0,s,0],[0,i,0,0],[e,0,0,0]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),ZD=t=>sg([-t,t],[-t,t],[-t,t],[-t,t]),QD=sg([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]);var JD={vertices:[[-.5,-.5,-.5,-.5],[-.5,-.5,-.5,.5],[-.5,-.5,.5,-.5],[-.5,-.5,.5,.5],[-1,0,0,0],[-.5,.5,-.5,-.5],[-.5,.5,-.5,.5],[-.5,.5,.5,-.5],[-.5,.5,.5,.5],[0,-1,0,0],[0,0,-1,0],[0,0,0,-1],[0,0,0,1],[0,0,1,0],[0,1,0,0],[.5,-.5,-.5,-.5],[.5,-.5,-.5,.5],[.5,-.5,.5,-.5],[.5,-.5,.5,.5],[1,0,0,0],[.5,.5,-.5,-.5],[.5,.5,-.5,.5],[.5,.5,.5,-.5],[.5,.5,.5,.5]],faces:[[14,20,22],[11,20,22],[7,14,22],[7,11,22],[5,14,20],[5,11,20],[5,7,14],[5,7,11],[11,15,17],[9,15,17],[2,11,17],[2,9,17],[0,11,15],[0,9,15],[0,2,11],[0,2,9],[12,16,21],[10,16,21],[6,12,21],[6,10,21],[1,12,16],[1,10,16],[1,6,12],[1,6,10],[13,17,18],[9,17,18],[3,13,18],[3,9,18],[2,13,17],[2,3,13],[2,3,9],[12,16,18],[9,16,18],[3,12,18],[1,9,16],[1,3,12],[1,3,9],[5,6,10],[0,5,10],[0,1,10],[4,5,6],[1,4,6],[0,4,5],[0,1,4],[10,15,16],[9,15,16],[0,10,15],[0,1,9],[2,7,11],[0,5,11],[4,5,7],[2,4,7],[0,2,4],[14,20,21],[10,20,21],[6,14,21],[5,10,20],[5,6,14],[13,17,22],[11,17,22],[7,13,22],[2,7,13],[2,3,4],[1,3,4],[6,8,12],[3,8,12],[4,6,8],[3,4,8],[7,8,13],[3,8,13],[4,7,8],[17,18,19],[16,18,19],[15,17,19],[15,16,19],[7,8,14],[6,8,14],[11,15,20],[10,15,20],[19,20,21],[16,19,21],[15,19,20],[19,20,22],[17,19,22],[19,21,23],[12,21,23],[18,19,23],[12,18,23],[14,21,23],[8,14,23],[8,12,23],[13,18,23],[8,13,23],[19,22,23],[13,22,23],[14,22,23]],cells:[[0,1,2,3,4,5,6,7],[8,9,10,11,12,13,14,15],[16,17,18,19,20,21,22,23],[24,25,26,27,28,11,29,30],[31,32,33,27,20,34,35,36],[37,23,38,39,40,41,42,43],[44,45,21,34,46,13,39,47],[7,48,49,14,50,51,42,52],[53,54,55,19,4,56,57,37],[58,59,60,3,28,10,61,48],[30,36,15,47,62,63,52,43],[64,65,22,35,66,67,41,63],[68,69,61,29,70,67,51,62],[71,72,73,74,25,32,9,45],[75,76,6,57,70,66,50,40],[77,78,5,56,12,46,49,38],[79,54,80,17,81,78,74,44],[82,1,83,59,81,77,73,8],[84,85,86,87,80,16,72,31],[88,85,89,90,55,18,76,64],[91,87,92,90,26,33,69,65],[93,94,86,91,83,58,71,24],[95,94,89,92,2,60,75,68],[93,95,84,88,82,0,79,53]]};const qS=(t,[e,n,i=16,r=!1,s=!0],[o,a,l=16,c=!1,u=!0])=>{const d=[],f=[],p=[];for(let v=0;v<l;v++){let x=[];for(let m=0;m<i;m++){d.push(t(e+m*(n-e)/(i-(r?1:0)),o+v*(a-o)/(l-(c?1:0))));const h=m+1<i?m+1:0,_=v+1<l?v+1:0;(s||m+1<i)&&(u||v+1<l)&&(f.push([m+v*i,h+v*i,h+_*i,m+_*i]),x.push(f.length-1))}x.length&&p.push(x)}return{vertices:d,faces:f,cells:p}},KS=(t,e,n=32)=>qS((i,r)=>[t*Math.cos(i),t*Math.sin(i),e*Math.cos(r),e*Math.sin(r)],[-Math.PI,Math.PI,n],[-Math.PI,Math.PI,n]),eN=(t,e=32)=>KS(t,t,e);KS(1,.5);eN(1);qS((t,e)=>[Math.cos(t)*Math.sin(e),Math.sin(t)*Math.sin(e),Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t)],[-Math.PI,Math.PI,32],[-Math.PI,Math.PI,32]);const di=(t,[e,n,i=16,r=!1,s=!0],[o,a,l=16,c=!1,u=!0],[d,f,p=16,v=!1,x=!0],m={u:!0,v:!0,w:!0})=>{const h=[],_=[],g=[],S=[],b=[];for(let A=0;A<p;A++){let E=[];for(let C=0;C<l;C++){let G=b[C]||[];for(let y=0;y<i;y++){let w=S[y]||[];h.push(t(e+y*(n-e)/(i-(r?1:0)),o+C*(a-o)/(l-(c?1:0)),d+A*(f-d)/(p-(v?1:0))));const H=y+1<i?y+1:0,F=C+1<l?C+1:0,V=A+1<p?A+1:0;(s||y+1<i)&&(u||C+1<l)&&(_.push([y+C*i+A*i*l,H+C*i+A*i*l,H+F*i+A*i*l,y+F*i+A*i*l]),E.push(_.length-1)),(s||y+1<i)&&(x||A+1<p)&&(_.push([y+C*i+A*i*l,y+C*i+V*i*l,H+C*i+V*i*l,H+C*i+A*i*l]),G.push(_.length-1)),(u||C+1<l)&&(x||A+1<p)&&(_.push([y+C*i+A*i*l,y+C*i+V*i*l,y+F*i+V*i*l,y+F*i+A*i*l]),w.push(_.length-1)),S[y]=w}b[C]=G}m.w&&g.push(E)}return m.v&&b.map(A=>g.push(A)),m.u&&S.map(A=>g.push(A)),{vertices:h,faces:_,cells:g}},tN=t=>di((e,n,i)=>[t*Math.cos(e),t*Math.sin(e)*Math.cos(n),t*Math.sin(e)*Math.sin(n)*Math.cos(i),t*Math.sin(e)*Math.sin(n)*Math.sin(i)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]);tN(1);const nN=(t,e,n)=>di((i,r,s)=>[t*Math.cos(i),(e+t*Math.sin(i))*Math.cos(r),(n+(e+t*Math.sin(i))*Math.sin(r))*Math.cos(s),(n+(e+t*Math.sin(i))*Math.sin(r))*Math.sin(s)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]);nN(.25,.5,1);di((t,e,n)=>[2*Math.cos(t)*Math.cos(e),2*Math.cos(t)*Math.sin(e),2*Math.sin(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]);di((t,e,n)=>[n+2*Math.cos(t)*Math.cos(e),n+2*Math.cos(t)*Math.sin(e),n+2*Math.sin(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]);di((t,e,n)=>[Math.sin(t)*Math.cos(e),Math.sin(t)*Math.sin(e),Math.cos(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0});di((t,e,n)=>[(1+.5*Math.cos(t))*Math.cos(e),(1+.5*Math.cos(t))*Math.sin(e),.5*Math.cos(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0});di((t,e,n)=>[Math.cos(t),Math.sin(t),e,n],[-Math.PI,Math.PI,32,!0],[-1,1,2,!0],[-1,1,2,!0],{u:!1,v:!0,w:!0});di((t,e,n)=>[.25*Math.cos(t)+1*Math.cos(t)*Math.cos(n),.25*Math.sin(t)+1*Math.sin(t)*Math.cos(n),.75*Math.cos(e)+1*Math.cos(e)*Math.sin(n),.75*Math.sin(e)+1*Math.sin(e)*Math.sin(n)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],{u:!0,v:!1,w:!0});di((t,e,n)=>[.5*Math.cos(t)*Math.cos(e)*Math.cos(n)+1*Math.cos(e)*Math.cos(n),.5*Math.cos(t)*Math.cos(e)*Math.sin(n)+1*Math.cos(e)*Math.sin(n),.5*Math.cos(t)*Math.sin(e)+1*Math.sin(e),.5*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]);di((t,e,n)=>[.5*Math.cos(t)*Math.cos(e)*Math.cos(n)+1*Math.cos(n),.5*Math.cos(t)*Math.cos(e)*Math.sin(n)+1*Math.sin(n),.5*Math.cos(t)*Math.sin(e),.5*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]);di((t,e,n)=>[t,e,n,t*e*n],[-1,1,2,!0],[-1,1,2,!0],[-1,1,2,!0]);const iN={cuboidPyramid:XD,generateCubicPyramid:jD,generateCuboidPyramid:ng,cuboidBiPyramid:YD,generateCubicBiPyramid:$D,generateCuboidBiPyramid:ig,hexadecachoron:VD,pentachoron:T_,icositetrachoron:JD,octahedraloidPyramid:KD,generateOctahedralPyramid:qD,generateOctahedraloidPyramid:rg,octahedraloidBiPyramid:QD,generateOctahedralBiPyramid:ZD,generateOctahedraloidBiPyramid:sg,pentachoron:T_,tesseract:WD,hyperCuboid:GD,generateTesseract:YS,generateHyperCuboid:tg};class Qa extends tn{constructor(e,n={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new hn;const i=this,r=n.color!==void 0?new De(n.color):new De(8355711),s=n.textureWidth||512,o=n.textureHeight||512,a=n.clipBias||0,l=n.shader||Qa.ReflectorShader,c=n.multisample!==void 0?n.multisample:4,u=new _i,d=new N,f=new N,p=new N,v=new st,x=new N(0,0,-1),m=new ct,h=new N,_=new N,g=new ct,S=new st,b=this.camera,A=new Ci(s,o,{samples:c,type:Br}),E=new Zt({name:l.name!==void 0?l.name:"unspecified",uniforms:fl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=A.texture,E.uniforms.color.value=r,E.uniforms.textureMatrix.value=S,this.material=E,this.onBeforeRender=function(C,G,y){if(f.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(y.matrixWorld),v.extractRotation(i.matrixWorld),d.set(0,0,1),d.applyMatrix4(v),h.subVectors(f,p),h.dot(d)>0)return;h.reflect(d).negate(),h.add(f),v.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(v),x.add(p),_.subVectors(f,x),_.reflect(d).negate(),_.add(f),b.position.copy(h),b.up.set(0,1,0),b.up.applyMatrix4(v),b.up.reflect(d),b.lookAt(_),b.far=y.far,b.updateMatrixWorld(),b.projectionMatrix.copy(y.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(b.projectionMatrix),S.multiply(b.matrixWorldInverse),S.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(b.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const w=b.projectionMatrix;g.x=(Math.sign(m.x)+w.elements[8])/w.elements[0],g.y=(Math.sign(m.y)+w.elements[9])/w.elements[5],g.z=-1,g.w=(1+w.elements[10])/w.elements[14],m.multiplyScalar(2/m.dot(g)),w.elements[2]=m.x,w.elements[6]=m.y,w.elements[10]=m.z+1-a,w.elements[14]=m.w,i.visible=!1;const H=C.getRenderTarget(),F=C.xr.enabled,V=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(A),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(G,b),C.xr.enabled=F,C.shadowMap.autoUpdate=V,C.setRenderTarget(H);const Y=y.viewport;Y!==void 0&&C.state.viewport(Y),i.visible=!0},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),i.material.dispose()}}}Qa.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};class Ja extends tn{constructor(e,n={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new hn;const i=this,r=n.color!==void 0?new De(n.color):new De(8355711),s=n.textureWidth||512,o=n.textureHeight||512,a=n.clipBias||0,l=n.shader||Ja.RefractorShader,c=n.multisample!==void 0?n.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const d=new _i,f=new st,p=new Ci(s,o,{samples:c,type:Br});this.material=new Zt({name:l.name!==void 0?l.name:"unspecified",uniforms:fl.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=p.texture,this.material.uniforms.textureMatrix.value=f;const v=function(){const g=new N,S=new N,b=new st,A=new N,E=new N;return function(G){return g.setFromMatrixPosition(i.matrixWorld),S.setFromMatrixPosition(G.matrixWorld),A.subVectors(g,S),b.extractRotation(i.matrixWorld),E.set(0,0,1),E.applyMatrix4(b),A.dot(E)<0}}(),x=function(){const g=new N,S=new N,b=new jo,A=new N;return function(){i.matrixWorld.decompose(S,b,A),g.set(0,0,1).applyQuaternion(b).normalize(),g.negate(),d.setFromNormalAndCoplanarPoint(g,S)}}(),m=function(){const g=new _i,S=new ct,b=new ct;return function(E){u.matrixWorld.copy(E.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(E.projectionMatrix),u.far=E.far,g.copy(d),g.applyMatrix4(u.matrixWorldInverse),S.set(g.normal.x,g.normal.y,g.normal.z,g.constant);const C=u.projectionMatrix;b.x=(Math.sign(S.x)+C.elements[8])/C.elements[0],b.y=(Math.sign(S.y)+C.elements[9])/C.elements[5],b.z=-1,b.w=(1+C.elements[10])/C.elements[14],S.multiplyScalar(2/S.dot(b)),C.elements[2]=S.x,C.elements[6]=S.y,C.elements[10]=S.z+1-a,C.elements[14]=S.w}}();function h(g){f.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),f.multiply(g.projectionMatrix),f.multiply(g.matrixWorldInverse),f.multiply(i.matrixWorld)}function _(g,S,b){i.visible=!1;const A=g.getRenderTarget(),E=g.xr.enabled,C=g.shadowMap.autoUpdate;g.xr.enabled=!1,g.shadowMap.autoUpdate=!1,g.setRenderTarget(p),g.autoClear===!1&&g.clear(),g.render(S,u),g.xr.enabled=E,g.shadowMap.autoUpdate=C,g.setRenderTarget(A);const G=b.viewport;G!==void 0&&g.state.viewport(G),i.visible=!0}this.onBeforeRender=function(g,S,b){b.userData.refractor!==!0&&v(b)&&(x(),h(b),m(b),_(g,S,b))},this.getRenderTarget=function(){return p},this.dispose=function(){p.dispose(),i.material.dispose()}}}Ja.RefractorShader={name:"RefractorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

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

		}`};class Zu extends tn{constructor(e,n={}){super(e),this.isWater=!0,this.type="Water";const i=this,r=n.color!==void 0?new De(n.color):new De(16777215),s=n.textureWidth!==void 0?n.textureWidth:512,o=n.textureHeight!==void 0?n.textureHeight:512,a=n.clipBias!==void 0?n.clipBias:0,l=n.flowDirection!==void 0?n.flowDirection:new Xe(1,0),c=n.flowSpeed!==void 0?n.flowSpeed:.03,u=n.reflectivity!==void 0?n.reflectivity:.02,d=n.scale!==void 0?n.scale:1,f=n.shader!==void 0?n.shader:Zu.WaterShader,p=new bp,v=n.flowMap||void 0,x=n.normalMap0||p.load("textures/water/Water_1_M_Normal.jpg"),m=n.normalMap1||p.load("textures/water/Water_2_M_Normal.jpg"),h=.15,_=h*.5,g=new st,S=new jS;if(Qa===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(Ja===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const b=new Qa(e,{textureWidth:s,textureHeight:o,clipBias:a}),A=new Ja(e,{textureWidth:s,textureHeight:o,clipBias:a});b.matrixAutoUpdate=!1,A.matrixAutoUpdate=!1,this.material=new Zt({name:f.name,uniforms:fl.merge([oe.fog,f.uniforms]),vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,transparent:!0,fog:!0}),v!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:v}):this.material.uniforms.flowDirection={type:"v2",value:l},x.wrapS=x.wrapT=qa,m.wrapS=m.wrapT=qa,this.material.uniforms.tReflectionMap.value=b.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=A.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=x,this.material.uniforms.tNormalMap1.value=m,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=g,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=_,this.material.uniforms.config.value.z=_,this.material.uniforms.config.value.w=d;function E(G){g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(G.projectionMatrix),g.multiply(G.matrixWorldInverse),g.multiply(i.matrixWorld)}function C(){const G=S.getDelta(),y=i.material.uniforms.config;y.value.x+=c*G,y.value.y=y.value.x+_,y.value.x>=h?(y.value.x=0,y.value.y=_):y.value.y>=h&&(y.value.y=y.value.y-h)}this.onBeforeRender=function(G,y,w){E(w),C(),i.visible=!1,b.matrixWorld.copy(i.matrixWorld),A.matrixWorld.copy(i.matrixWorld),b.onBeforeRender(G,y,w),A.onBeforeRender(G,y,w),i.visible=!0}}}Zu.WaterShader={name:"WaterShader",uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new ct}},vertexShader:`

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

		}`};const rN={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qu{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sN=new OS(-1,1,1,-1,0,1);class oN extends $n{constructor(){super(),this.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ln([0,2,0,0,2,0],2))}}const aN=new oN;class lN{constructor(e){this._mesh=new tn(aN,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sN)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cN extends Qu{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fl.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new lN(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class A_ extends Qu{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class uN extends Qu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class fN{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Xe);this._width=i.width,this._height=i.height,n=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Br}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cN(rN),this.copyPass.material.blending=ji,this.clock=new jS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}A_!==void 0&&(o instanceof A_?i=!0:o instanceof uN&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Xe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dN extends Qu{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new De}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const hN=""+new URL("Water0-DV-NIPW-.jpg",import.meta.url).href,pN=""+new URL("Water1-RY8KFRSX.jpg",import.meta.url).href,mN=`// This shader comes from three.js sky example by zz85 / https://github.com/zz85
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
`,gN=""+new URL("star-B1sxJgSz.png",import.meta.url).href,vN=`// This shader comes from three.js sky example by zz85 / https://github.com/zz85
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
`,Ed=2e4,ac=new LD([new N(0,1,2.5),new N(0,2,0),new N(-200,400,-400),new N(-350,700,-700)],!1,"chordal");Fe.tonemapping_pars_fragment=Fe.tonemapping_pars_fragment.replace("vec3 CustomToneMapping( vec3 color ) { return color; }",`#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )

      float toneMappingWhitePoint = 1.0;

      vec3 CustomToneMapping( vec3 color ) {
        color *= toneMappingExposure;
        return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );

      }`);function _N(){const{relative:t,total:e}=Wi(l=>l.progression),n=at.useRef(),{width:i,height:r,devicePixelRatio:s}=Wi(l=>l.page),o=Wi(l=>l.anchors),a=at.useMemo(()=>({day:{start:0,end:1.075*o.bio/(e-r)},night:{start:1.1*o.bio/(e-r),end:o.meta/(e-r)},stars:{start:(o.bio-r)/(e-r),end:o.contact/(e-r)},water:{start:o.projects/(e-r),end:o.extra2/(e-r)},travelling:{start:o.contact/(e-r),end:.99},tesseract:{start:1-2*r/(e-r),end:.99}}),[o,r,e]);return at.useEffect(()=>{let l=null;try{l=new AD,l.setPixelRatio(s),l.setSize(i,r),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=uS,l.toneMappingExposure=.4,l.outputColorSpace=bi,l.domElement.id="canvas",document.body.appendChild(l.domElement)}catch{return}const c=new hn(60,i/r,1,1e3);c.zoom=Math.min(1,i/r);const u={turbidity:{value:20},rayleigh:{value:3},mieCoefficient:{value:.001},mieDirectionalG:{value:.995},sunPosition:{value:new N},up:{value:new N(0,1,0)},shade:{value:0}},d=new Zt({fragmentShader:mN,vertexShader:vN,uniforms:u,side:rn}),f=new tn(new Xo(1,1,1),d);f.scale.setScalar(9e3);const p=new bD;p.add(f);const v=new FD(16777215);p.add(v);const x=new w_,m=new $n,h=new Array(Ed).fill().map(()=>{x.radius=250+Math.random()*800,x.theta=Math.random()*2*Math.PI,x.phi=Math.acos(Math.random());const Y=new N().setFromSpherical(x);return[Y.x,Y.y,Y.z]}).flat();m.setAttribute("position",new Ln(h,3));const _=Ed/10,g=_/3,S=Y=>(Y+2)/3;m.setAttribute("color",new Ln(new Array(Ed).fill().map(()=>{const Y=Math.random()*(_+1),B=Y>2*g?1-(Y-2*g)/g:1,ee=Y<g?Y/g:B,L=Y<g?0:Y>2*g?1:(Y-g)/g;return[B,ee,L].map(S)}).flat(),3));const b=new VS({size:8,map:new bp().load(gN,()=>{l.render(p,c)}),vertexColors:!0,blending:Xi,transparent:!0,opacity:1,depthWrite:!1});b.map.premultiplyAlpha=!0,b.map.colorSpace=bi;const A=new GS(m,b);A.rotation.reorder("ZXY"),p.add(A);const E=new w_,C=new bp,G=new dl(500,500),y=new Zu(G,{color:"#ffffff",scale:5,flowDirection:new Xe(.1,.1),textureWidth:1024,textureHeight:1024,normalMap0:C.load(hN),normalMap1:C.load(pN)});y.rotation.x=-Math.PI/2,y.visible=!1,p.add(y);const{tesseract:w}=iN,H=new HD(1.5,5),F=new BD(w,{all:{colors:["#5c6370","#e06c75","#98c379","#d19a66","#61afef","#c678dd","#56b6c2","#403e41"]},faces:{material:new ID({opacity:.25,transparent:!0,blending:Xi,side:Tn,depthWrite:!1,vertexColors:!0})},edges:{material:new Ku({opacity:.1,transparent:!0,blending:Xi,side:Tn,depthWrite:!1,linewidth:2,vertexColors:!0})}});F.position.copy(ac.getPointAt(1).multiplyScalar(1.005)),p.add(F);const V=new fN(l);V.addPass(new dN(p,c)),window.sky=n.current={scene:p,camera:c,renderer:l,composer:V,sky:f,water:y,stars:A,sunSpherical:E,hyperRenderer:H,hyperMesh:F},V.render(p)},[]),at.useEffect(()=>{const{current:l}=n;if(!l)return;const{renderer:c,composer:u,scene:d,camera:f}=l;f.aspect=i/r,f.zoom=Math.min(1,i/r),f.updateProjectionMatrix(),c.setSize(i,r),u.setSize(i,r),u.render(d)},[i,r]),at.useEffect(()=>{const{current:l}=n;if(!l)return;const{composer:c,scene:u,water:d,hyperMesh:f,hyperRenderer:p}=l;let v=null;const x=()=>{v=requestAnimationFrame(x),f.visible&&(p.rotate({xy:0,xz:0,xw:10,yz:0,yw:10,zw:10}),f.update(p)),(f.visible||d.visible)&&c.render(u)};return v=requestAnimationFrame(x),()=>cancelAnimationFrame(v)},[]),at.useEffect(()=>{const{current:l}=n;if(!l)return;const{composer:c,renderer:u,scene:d,camera:f,sky:p,water:v,stars:x,sunSpherical:m,hyperMesh:h}=l,_=Rs(t,a.day);m.radius=1e3,m.theta=(Math.PI/2-Math.PI*_)/Math.PI,m.phi=-Math.PI/2+Math.PI/4*(1-Math.pow(1.5*_-.41,2));const{uniforms:{sunPosition:g}}=p.material;g.value.setFromSpherical(m);const S=Rs(t,a.night);p.material.uniforms.shade.value=S,u.toneMappingExposure=.4+.4*S;const b=Rs(t,a.water);v.visible=b>0&&b<1;const A=Rs(t,a.stars);x.material.opacity=Math.pow(A,3),x.rotation.set(-Math.PI/4,t,Math.PI/8);const E=Rs(t,a.travelling);f.position.copy(ac.getPoint(E)),f.lookAt(ac.getPoint(E).add(ac.getTangent(E))),f.updateProjectionMatrix();const C=Rs(t,a.tesseract);h.visible=!!C,h.config.faces.splitScale=h.config.edges.splitScale=C*C*C*100;const G=50-49*C;h.scale.setScalar(G),c.render(d)},[t,a]),null}const xN="data:image/webp;base64,UklGRgAHAABXRUJQVlA4IPQGAABwPgCdASqNAUABPpFCnUyloyKioZC40LASCWlu7tp//d1XzUYAGcqBC4OwrT6/bgSHe8Bv0zf8/dbc8Hptn9S6bz1ov+BkpL8GFDZ6dkv/px18GPv2Ja/aui47aYDPSYcSAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEfsHOiBrjIy2hCMdY6yOB91FQxwP4KnL8sSAkBIBgCDEhvvP1XL6cxOZz86nP4idfliQEgIyH/u+un/RHCqonRTjSMleQum+Bv3dwgSFc6Bn39c3Iy2hCMdWQNCPF/zbXUFgossIKnpOfwRz5/9O8MGK7OHv1JoCWc0mHEgJASiXuMM1ICENVIaSIaJ3W1xgIF0mHEgGKzMmeltu3JoKXTtVAZK2wE4hMjLaEIxznW12QEh/Il78CmfUfT4t1W7h779BkGVMYB/xeS7vDcSSxICQEgIyx26+LweuOZx79RmS+r1B11zjCk28roX4rAfQYZCoe0tvo/wD4P7w6x1i31ja+Lo3N1nKzW1kA2X5HgolvduYBza+KjHWOsdYvBtCXl3EvdsjaLXUZ9GtwpdVyEY6x1jrHWekNdfliQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBICQEgJASAkBGAAP76HqAAAAAAYQJP847VXc2TH9kXOQFN6ToL5PekzqqhYcpfuYUZot+6aP+PIUlaLX2/spGavhCXf2xo627lUWAJBndGykjXuzE3RbPh10kuhTxYsUahXcpVVRmdQdnF4Dbw4+/fY0NXuzhXX5KAu0uxNl/WrHaQEWS8+OOV/SGnAQIgHYXV6RxBAjgGlHTviV68OjmFol6ui/PcAegrwbcx+IcRXxLwoYTE+AJck42ydT6tdGzXQ+cukv7VNAbxf7nSKXoJaSYRK5U1E1iwhwxTj90hvnofnp1+fdmxnnMa5uPRj0nkV/+9tO641bE3+znB3wM75T8pYtNKci/a5cKZKNShpPUqeJy1pOT0ETD8aMJkwR0Tfn2GsA3D2Vu4c5x6FowGpYrtxqceMMPbwMAs4LbMJUfgBOt0hmMEM5KCrjA4IdDyf4dfkVYMTWQ1Aspcxz/q5PWg4T6o+DjZLfI408Db0rN4psUKkokCLx345ZyjrDJDuW513nncKKbLvTJdgshJCI7ey1bujAHEWWSm3Jhhe1pJcmsTp6JzKvGNEzvSx0xa7xJbaQ8cEqTacjxAcI+C648HxXBn83zHaefUYib06Plgs37iINvN12WoZ8YVN9oCxurZrSneyG2RbXo7cYRVJI9p5pxCp1a4omClkZcR1V0nqJbYSD2bt/aHuJAvLRkcDjIkzyLJiyMtpRDjfYO9qTl+JsnczTA0CraH2gc6RKpcvAlZpmgbfv6VFyuAc3k+R9riVgXy/qCiDQa39DUhxRVi16J2AOTWpOVvsN7ouWg/PGTyJPSqI6Pnk1NqOWhk26D91X+yTjibJN+5dafqWG8j41DCh4i+xbwBbrbcV7HzB2BPCTdREt58d8GLu69MO4z0JsCfPEiK3Ka9Xiai9cYRe6bgvYTvaAAUaFfHB3Yj/JyrG4G/55Keh5XV0PCkGRJtUBkeeIEaccPCXVkI0Tv20YyyqNhv+mHBeDkQs1m766LxUOA1Vf55Ug+tJATTa7GJAssZz+a/hfvnCwOB4Oiv9H3traXJSwjuUQW949B4gLGtHygrN7DpkPpH6duBVwtTGZW7xOqPruO3WSUDfqMc4Z3V2lVjQ00yGfz5ryFURHFkYDAGECsFdK61GFr/rKQaE1K1aFEk8irjYTNVd4wcA9Cy/EVsqVk3UNjU2SsID/vhHbmMmi+NQUqeeYsT72Ds5HO0jl7E7iD5n/P7UKnBiQcTdITvzj51xAXxL26RW82Eb0h8tj+6U3t9HudocKCehLVVqp+4gXqgg7BfWuqjb+JnPViUuC2/BB5an7LavNI+wmXXb1lU7vd/x8eRIzYCRtfXvcWKcAAnb+9tYCUZchb3ihTa1ztLXh80qzegqAYmqTYWjKrHkOKsE+gQT2jf5n5/j0ZGcFKBFC5XL/Je9Pn6yyvcMvym8PJX5cGUBfXIh2D1WMck800QCRr5bQGkTTYKCxiOAxV4zH+rti8ojazXUbkXFGvlR1gF9UDyqRmMy5VHvrTd8lMRlO7qn+zPyjGM6ZaoaC/zam171QCswhH1IvcItp8EzqFQ7EnaD093894uQwHTxtb+Rqa8SyzplF+egLsIZRkJIepr9QquNGSy7RDYORaIOkCag2HcUZuLkB9XEqxr9qALawrxjY/aoR6LJWgHZzm0LUqFazHxLAnv4CIAAAAAAAAAAAAA",yN=""+new URL("frustals-CDs1UxHi.webp",import.meta.url).href,SN=""+new URL("kalong-DpyvaaDL.webp",import.meta.url).href,MN=""+new URL("inversion-B5Qdyc9u.webp",import.meta.url).href,EN="data:image/webp;base64,UklGRgAPAABXRUJQVlA4IPQOAACwYACdASpuAUABPpFEnEulo6Kho3IKqLASCWlu4XHhETkWJLkS3lT++/yvt7/ufhH4XfRck44/+T/Zj9v/cfMT/b+BfxY1Avyf+j7oTpv+i9AL2M+q/83vyP6r+6eof1s9gD+Wf07/d+oP+u8DfyD2AP5h/VP+F/e/zA+lD+R/9v+o86H6J/k//X7gv87/r//h/xftgeu390/ZG/aT//j55lK235QYQOpNXUZgrNGxfhwaYKvT6aJhZNEuzCYbdGX+w7f7PjJKV76sz5XNQMV4wvg8AsOrG6pTIkbKkQWFL3cjT9vodWdxVZ3C0aolPBWA0+rBEjZUiQ2mNd8v3+lM9HMwcHzoQShNt/xpdLn3ePfavRAIKa6RspgLtTVeF9jon9ySgQR3QZjKfMUKa6RsqRI2VIkbKkSNlSJGx4T16FfoVEiZeFErtHwho+b/OWxF9L1EFWED7FcoTQ2GJEvTRMLJSVM082Kp3bKFzWdcDz/C+0ZkpuvaMxfQiIBicaX4IEPVKdOcDpfA6YttlQWJOeLr5ZhNtUqMXdlna7qz9ov0ghjQuv+7Ia1DVqp0Uwhmn8f1Vd7ctlO+zPyl4xgsAsgx6mnZ2ORtjUOME5PWfnlsrP0bK0bSM0a2bGgr2jAPzl/1vJToxPML3GcCrONdI2VHW2VG1Wkb0sZnmt9PpomFk0TCyZ1aWURjN1Cm/nP1MXvJj4VbiBQCte0ZkpuvaMyU3XsjcmccTQ86iaX3DMNba22HXpqs2zTFIrdbxVxLppZerVNGrlAnsN3xpuWUerW3jt155RWAu/rn3CrFu5WY2wNZKgy20z13z0VNXK3dRilN17RmSm66KNXwV0L/gPwg5C2tDKMj6CjyVT4FNdI2VKdb5M2TKyL03qBUtSL8MpCCr1rTPTTG2ns+qn7ekk7Ahq7CwKa6RsqRI2PUwaEn5jz2CwIMO+SmukbKkSNjwk6xkxN3pymPAEKLluw0yAuvUY5fXEbUlHQHUG7pvJTXSNlSJGzl6wfzwUh0jYdE2QZcSWqRI2VIkbKjYAD+8oWs7106ibwo3H2LHlaDa8/xE93SPZAbnG+LjR2JNUnv0nr/sLE9Jsnj7xYXzVybw+o9kbyjs7PNNzFDo9JSTLHZwLIR8n4licngSjCCp+dgVaUUdyj4QOnk9Tiz/nPfLH7eHkr8nKx1Eone4RmIKqj84fSYeVMUxazZPqBNHvKaO6k3jlj3TGzP/4F4c51Z5GcXlg31A2InfTKiixaADZ0PcxurPHt0wrDG3Q+oZp25sYxubXWPtoGFTe9PZS7aT8uKgfRO9mUfxIdw7CvOIIwgQSJmoJgRUEDOiiEyI3y9Ja5oFH34IZ4AG4GSABHN6rEHLHHHoU+tXT0jQFV1yZjpKzMxI0+VcF49Hy5KbNFsqyYftuqbPt45YQGmbKbjZmL+sytPncwLPnGcwucXKPW6fol1rSKwfZv2BB7Pr0VyUmNU1kB0hwv4x1Un5filFqJjkpaR522xYd7izpj1slCcMIVpM4aV8O/JrRYqpOuy2CIKvOPH/s/skjXLzpZPIz3/uluAfQ/xKkIDhHks9xg31nCOxHSXdLOSTrJmpSMhXzUz1XtvqqfKcjs3tzm97tDCPuEJrTH/CBETfMdiBptgm1uJ4dGe5o7UkJEqIBKu8IpoER7ExxmfBwM6CNVzWEvShqejp89Rd5/o5isqymhgfBKhGqXjtNnWP24o/s71a939umg3ihV9vOqVZ7GT0xcHRG0wQHwvEonxz+DD2czfMAReo2MZ5lp5W0UsZHN5u34eznlXgJZoTUxsjemSjVn7urhc6DJ7663A6cTbz4jNa7fgm/NH0BJDvEqzjoabnPNzBF9C5bZenohDvQiXPllLaXf2gkJNMwf1MtFKlF45g/NXfEUT2taAE1lK5NY44hHuxXl222IDuy2/241NynROV6ThKC3QCnashHfqqAzKQIW7y/bBWjSr0bPHwOZygLS34WuFNVZMcUvzYi3tId8alWMOnK4Z3Du5rEkCt2Wf1q9rKYlP50HaALV+p7iyj9P5jGtPgT9k+pG5zs3KWgCtG7otskHBiD13S6GkwLRrrCEMCCpMEA+7Lek4wWSJMujbHaV4OCu6HiPCD2oh8g0InYlTvIQcoudTyKBT6EOvXLshmUWHLueKJqYVTtWrozl950bpI0IwGlh+dR9KrAGrWdAjHlxg3AzumsDuVkX/ihD9N9mSvmXuwx3328mSVVCvom0WC9c5J6/C1gHGf+jHXeiy6rkBFrQv2vqytRBant1PNSki/ST4z9FkCcK3UB83Td0634suw3oZuT6APwfIgD43auLX3aGqzAQ75rzWAdDMx6Ihsx6pjRKnq4dLBDcDjkArkmQ8KlZscehpt31xLDt3BEau26s6aN/0RLh5EuCHBIQAH23AE8oFWySMQScg8CIbANjlmB6AICx2Jmnih1N9NZt3r+FexRGAlRywe6yAZ51F9lfWrG+GiGl5QV8lDlUW43MFE8mFU0U4SivUyn3cyBjeROBcv7w4ZepCIC9d2mCWYfH66m5NvR9kzQCar/6B7RG4YAxdqXM/1xPh3P2kSpOWoKQO+sDk8GgdQPA3zEk8SgamjPc6/hNaQbMXiOMGDCJNd/gYreSaNOlZhBjMmZkhY/9Y/mFbAtSz9AKxB3KKLfABnB7aQA1UOldDrRqa/h1l/inmhw/lx0Rp4czCaSPvXL8Vbm61NN59JqPj3ifzkcjzZJeUh2JtYd4UPTeYn0CvSnrLeID34nkElxMPXy5y0rQB0KNJ18epbRwc3n7ASsTareqPqPJjrtgzEAEgb70qrHJSOLWxfUqDX8rYa+urtVQwqcNaLxe87bnsjsSYoOlvEXxNfgYWnEEKl/umvHdeM5h45y+4Co+k86RKH4u5r8sQOh8DDQ9epFCjs2nGi/kDDmJrLe1kL20Lgzl9cTUCEmLck1mAFVzKVUGm9+Z0/lf7uK8XevvOrvXzdWOvPPhly5biagbOl00g5EdueB7ysJhPVjmrPdjTL50hoCmDiPmqtXkMAVSaoIMY5+GYDVbi8rgd66/LADbrFSMlZtokRiu4YKMlC0VBAN9qmUuOi5szsk9uOABiz1i016+Hf3KfI32eXagycBCaBMPgb37ZKGkBpxy3rh6kt/P+ej5SWQfkqCgA7310vZMLnlFi0kCPsQYwSJeqGtTTRvErtXUeTayQS6xAAv4i+wXgqOmGV5i5qaRrG+DclCbjARJN5KfVKXy3J0GomWxnly90u1r55QCJ4fPKZi7go4xQbRLAhV8JbmHFnePk0hbC3EUl+rRX57Od7Ra01F55ZRpukhDyDPA0akY0t9al6V4RNwrX+4/4M3lAapR3AwJpOwH5aTV/vykGEwSoKM0hNAymdC5g98yHFHao/GKEW8xf+HgX/JVUml2ceCpluw8iEoKeVGQCe2IZTTH+QWxjVmxmxJSWQlzni3gct/f59p/PqEVfBr/WXBczq4KvtrTPiK9eq0p37FLcoUS17mM5r4BDSdYyb1dzc1OrOFYiuG/tCW7xO8KB0L0WTb29wsjYhKIHWU69S3a/0F2r0vTUVH5bx/sMrontNMNvZBFABN720nvm2XwZJTbhRRdxnhjxpKdNwpgD+ljeLjZTZBbQsNtDN4uSN/oF+Aoqz/V5M9PwgJls+AzsXH7Rrtjbdt1XSkk8ItTrK5uD5wp/JPXzW7TlemZ2MIQpgzO0oqNq2A/+G2UgKGdRChLQDp0Si3NjmbSwPIwdlf842AMqlaGm5Fvc9Q2fv7RNkrDzbfj54b7tW91AaGbsTSDwz/HFciDW2Hct+QqofUvMK1vFiulc5qZl0H78cnlZpL2zP52INAw1XkPtB3L2b2sSC3rKXn8thHcGNc7darB8moQtfTQvpxEWcgunxmhzPKxPhbtBdVI3OnJ8Jhextztz3rnNz5OvCuwZBuSFf4C6Us9oprlAJms2NhWuKoGlc5hgBcUsdyd6FDXS+5SbSMCQTv5L+OTY0SAG64x1PO6NWaltzK13kxg46qJkLCJVDiNzLPVuWl9Hv3W81K8pskw2Sxga6dSsWJShvfHG0s3J+gObSrvggvofecn3OW890+LexhmnUILF3xO9rd0WrftPfiyZVuJHoaDXPRnBbE2E6TOllLzFJYE2s8/cEktzMKT2oVsS2u5OCA0X1QBi2WRj6sKEdEECuq0WjrEGr0uxY2y02TTEmV4Z9+mCG3k+kyVL+rpPHae50qmfQfOTusUTJIy0ZXuO1delL2vlUYEzPPDKif/9f9EXjr90p16yMMqQg4v+Gcw2FtWPZI6RsVoSWKuo2qphh/D9F3ky3lkNRU9ETi6vBPTd436ZMKqZmTGzkI1slKq054/w0xuLLWvzAilU8maB/KspQ9RxoXlLFQt5054ZOiUHC/zAkEEmUxSX1eyuSrGD97ajEfro8L2FMEwD13q46Pep0HvK96mMN3me2qCEro18anVsPGdF6Kyh0A9LhRlnlh098lHis+N5ZX9txOfUWL0RJlBCuHQ+t1nvBEaPKg+QgEJSG6EMbEOh+XMJ/lxEaHjV1XQFyBckQvxAVq+5Pf/XRr//OKd7vrpgF4+SUIycfYYaC+1pzd2fb0SvEERnBmWT4rIcw22tYSTsKVbpSdcAgkcVcUHDK8JnhDrdc5IxtJWZaqIwzFPTciGVwMN5X/8hzO/6GoL0brRagW9P59gFeidx2waE/B/Ab+PFiZctrDBnMsC3b9V8W3hMZ+xX5ogZX4lA/cx+QN/eVCyl6g4xMZl2MvuEjOMO+zVP2lZSgU9z7v04O0qT0nENC0f+yOhcqnvnq2euWeAD9ByiMnXHhj/Gm5bm2BrmhjvJqw5lbSlskqYrbPC4cgCexMLL1mV9Klid0EIUOxL63XZjid7N5YIhq9v4h+jy/UmLzoX5clT7TxGyN6t7fKRMriuIl8yWbxLYSV1F7b7uCspcibDZ6l087nMU3NgF7Tuw2lSUO752N8sf9k2U27/BZPC2Glpma18ekZ6CxktpOhzovAHFbMMltQNKgfMKgzgXG4/Thw3inWm7+OCIQN+BSS9J+66fARBFnpq50AAAAAA=",wN=""+new URL("unrest-QUsy8Jxf.webp",import.meta.url).href,TN=""+new URL("pygal-CkyrelLQ.webp",import.meta.url).href,AN=""+new URL("wdb-CmEGj5I8.webp",import.meta.url).href,bN=""+new URL("umlaut-DGKNeOF8.webp",import.meta.url).href,CN=""+new URL("butterfly-BhvkshCk.webp",import.meta.url).href,RN=""+new URL("anakataGL-CPWtUcT6.webp",import.meta.url).href,PN=""+new URL("annealation-BojtPpKn.webp",import.meta.url).href,LN="data:image/webp;base64,UklGRh4KAABXRUJQVlA4IBIKAABQTwCdASrQAUABPpFIn0wlpCKiotQYoLASCWlu4XJ0ImAMv2WJsp3cF29lQM/Rl/3t2JzyHnj755/Xemz9Xf/T5MD9f7quGbaS9hP8pxnjxrXvqEeEdaE+0+oB+TvWS72dFH7DfRPEKSoDri1W64MXF/PIZC1QHXFpbbELM3DL3SdcYIpe6Tri1XDP0WAsBYFaRn6LAWAsBYCwFgLAPEvnVwirhn6LAWAsBYCwFgHrZ8tVnm1qpe0u4wOH/DetcfCxcYCwFgLAn3c/Q8riUSTP1kbKPTWGLmrSgX5Y5utytUB1xaioXcoZAOkovpY5IDOEffIQL+JW/xGzaLkpMjAaAriA64tQL+U7wikmLFA+861Gzdx5OBGN+dZcmy080lvLHq82tcM5YoDj1TAm1qjZ3DQ1MOsvZn9eoQlWDC1dvwJQy90nXLWrADa/w5Zkdsbegz8wPb7EUdzR2f7ib0M1W0Eh+dBJHWP8rXLEWg9I0WW9NlfQ+/j8vxykb/cyKn+YIrnPRkyyPevmQr3gYrefzjiCegXsO0jj6ERw5yyjr/1AZgAYuvfvHy8jBZTnG+x1/l1HQAYHPXuGpauhRb9kpPY1JMKKAFzyEn7ZySbfjypGnM5YvxHtk3kTUgrhn6K+0SwpGnL4+UaE6kl0evvRDOsYEB4utbgz2bMb56JDP0WAtRyA0Cpk4iUWhlU0mYHjPXsJ19/Q1XDYqdcWq4Zebw0+oNzN5BAqcbk7Xmk3bw+EM/RYkoBn6LAWAsBVp39gT1/NrW8cEDPdnywyqeq4Z+iwFgMMDgLAVxvqi/yGfosBYCwFgLAWAvX8SdcWq4Z+iwFgLAV+k5JLvRGbWuGfoqwAAP7+p0bi0YGWsGud9gHtjqUJCpAe7Be7nvJOJKUi7agi2w2noP55KqMFjnqxU/q4Ca2qvQVC7dXAkADwSABw85xuMy/lFhv2cEaKon0GTQgAORUAoBpucKM8EPGMldZOWZtOj9HdLsFGZSAY3iZGOCHcStG5H+IHtuC4hFkqNq3SR58cd4hDw+uJsZ4xGlZC4RZ4GUwDqFiBJRYDnG2J3chrsQhKHMByyRpj2uNlfylI94t96BdXWyBW76vDpjcPgHSmYczM5dhIE7Cty83MMwN5IblhCKwmN4op/lQqP7NHEGwCBSjVNwOqk+va6x473LxSKhZABFOxWhgX2NNvxuIYU0KMpRWE0v5SbHVbNntRTRS7ZP0P/yM41AiTQhIyAZf6KS4BnBzdHWzruNOk5JrjNO3DajBjZ0Tcx1jtFonQ9AQxAQJUhd1+6Htb+XyrCSAyLEsKobebRcSIj1HV32XB6JauFNuB4EUYc9oVcTUoY2fnsV9oy6ofYIq1U06hvpjV9LWIrlWik5w0NKG8vLHFYM0pRT92zE15tR96Xn7UKhKQLyhxGk0lpGlZFrbEmYWAskNUY7Kk2w1wTRtHlaD9AC9Ci+DEkMYzXBLD/GvY8N9/w8QJoIi5DaWXKAmQLDuOV3WV7TMh23T0cA+ROXQC2X0FCpgGd8DGZgJn9nVCHUSfx+fblaxVJ6tPpuUQ97BTYa47IgaRA/z8s7NNGqHTu5zYVhIUwEzGMZTIkCpwVVu8lavtXi5i5n4El5aMPtXcXFDT2Z7jj9/fLohF262Jge2bwCx5p+rUa4q00vlZjIIvEAjP+nVBmz3HdjxYEUzLib/9lOuK41RFox34PCwkvXh5R+Yr97o+IJJGw3iPgPyqD1E0DB3RZSHdECEiAsZSgwCMwBqPoSieF3+dzRIJhbZNsq83JPHn0R8obnzO/I76bz9zRSAKDs0M721kCM7xLYL1wPkyYKftfgdIzN8ZuNW1W769oZddZC5ZsoIh7XezP0CJ6UO4xYyNs/nNS2v6fBWGrmx2tisWiQPuvv1FO5kQR5sDLUG0g3g9rD3HI0Xx/AUO1/W2aHqR/c6mChoGcq8FxvXx0DmN0aXhEwNjX9IZKFcwH9/7DMJ5w5+7+HuozcixVc2DgfBWyyHCdGomr9oQdNrpVGFFu9Ln69lX45OpaJX8lSVeyNQb5qm4OLdOvDeyIDxcmjgwPNdL2S3TayeVFUH7kcCqhjdvlzSofbQkaFVVORqLqrUF1+VZBvd7DhbREkRHoYoYyVchC7bHKc59AM7SUHTapWS0cOMb4hgnncASvbK6+HJ8cBKCnM1jtYi+EtudXU4VH/yjUPPd5Ydqzp1tfo+aVxmqDrcpqu2Jy7ye/QWSgN1B61LJUSmc/KwHLQBxOuQBeEyQUh5kSUM2I5lgsTap+ob+bd4+Chorz/sS/Up6hujo3dTpRy2Yg+OC2660ThvbmRAGfj8R01dkr8lz7i8UI2VxxsemhwBJg6DbZU75olqRh3Of/kkqC9dIy+63hfbczNGB79JBnQMLxWEqSyNysHJ2ZjzqwM9L0CwxpPbywu+Q0VeLqmE3Uw03cmnRtfZWlWFAGduYHw5XWyWGfgE5zoQhkDq+CzVgghd+R8wm8ZFiij8rcd9hWUwA1ylDD81usLMBn3H3Z+4X9dphfNiXKEpJGWX9LdekPJHOc14vT9c01mOS588ru9+fIJnZhrpr7wHyH31nWZNyjlSnOrfhCEz4GRn61qVGtfYyfHe2sRBmGli4x+a1N4m/qSXogh2FN+0ubyu6+BNmRuIGyr4yQVEHI6gW/QVhKk8YMikcyC+b3ZLu31sdD4TuNpl4L7y05YUkPO0VlafTFppElN2YQVEG5Ix9Dxtga6L7Vhf8APfmOYMk/wqC7LdDreyUfwwZ3CH1LVRYyrOV7D5ioNWP1bSBz0zGgdrP1oeZ1TlhzlrUK070SzoV34T/LV+b/1ibRe5O3PlMdD3NfWDaimOKEas+FllDB8SXUK4njULMacXhbiHaQ7zvkMqMBNdo5T/DT0ECaO71lCb2ywf0BxEJPNVj/wwrmDitHycX2GSU7huBGpQTEw16iYisxAIfj2WnRDCc/0bae35f6lxIyjMrlBZ7H/0AZElovD7w5NuoI2OgZXelQqyJYUsD/9OjyeLs1jvI6crxOHMO7BEn/VscKb90FFZ5ls6IKw3NsTcIJfQBHHNcwCyngE6BN9D2BcEfr6nuy6UR67jnZJn7wwHi751Dy/oXlQ3ROefC47HCU7LDUyJ8CvI0EeEsPeVwXn1wfff4SJWP+PE8lt9QLcVZMw7D9Oz8JfYxyx12jFBPP1svl3XM2ZNNAFo+AZH6ddK5qbzsSDJ19Zl4ZUp8GUkrE9Pci7UdB6Dt4hiPK/5g3ycCC0VeDbWv3YJrJA/oWSN4vwEXVu6bkhSM7cuDYrIARKlv2/W/GAdx6BaCkLuvnxO+Q1nnGzkkgFGXCBjPOZ5JawSpibLPeiAz3ktUJBfulf8K9nIqYqapSUzj2LoUdzOrCAAHSJmMr7gBg/kuAAP9WN/zBi3/3IkOBRZSjTu+QAAA",IN=""+new URL("graphitGL-BuDnIRSS.webp",import.meta.url).href,DN=""+new URL("hanabi-hmC4Vl5X.webp",import.meta.url).href,NN=""+new URL("nocolon-3qHUNkEW.webp",import.meta.url).href,UN=""+new URL("clutterm-BdQ1Pn8P.webp",import.meta.url).href,ON=""+new URL("gnome-shell-shader-effect-BfY_3-2i.webp",import.meta.url).href,FN=""+new URL("gnome-shell-focus-effects-extension-BdXbjKMq.webp",import.meta.url).href,kN=""+new URL("jsfractals-DkL3QhSY.webp",import.meta.url).href,zN=""+new URL("gnome-shell-system-monitor-DKC_mEcY.webp",import.meta.url).href,BN=""+new URL("bemboo-BBnSdDNl.webp",import.meta.url).href,HN=""+new URL("atom-python-import-magic-B9LWRUQ-.webp",import.meta.url).href,VN=""+new URL("atom-undo-tree-CcLaGvTa.webp",import.meta.url).href,GN=""+new URL("atom-rainbow-delimiters-tGfV1cuS.webp",import.meta.url).href,WN=""+new URL("atom-one-color-by-project-BqITgD1X.webp",import.meta.url).href,jN=""+new URL("fawn-CfCaE3S0.webp",import.meta.url).href,XN=""+new URL("scudd-Cs8Fy4L6.webp",import.meta.url).href,$N=""+new URL("helicity-DfAwyD7g.webp",import.meta.url).href,YN=""+new URL("fracture-Bx_4djPL.webp",import.meta.url).href,qN=""+new URL("coxeter-explorer-Sh6C_zvw.webp",import.meta.url).href,KN=""+new URL("raymarcher-BkVtVnay.webp",import.meta.url).href,ZN=[{id:"paradoxxxzero/coxeter-explorer",name:"Coxeter Explorer",url:"https://github.com/paradoxxxzero/coxeter-explorer",demoUrl:"https://florian.mounier.dev/coxeter-explorer",languages:["ECMAScript","glsl"],libraries:["webgl"],major:!0,type:"experiments",description:"A N dimensional coxeter group explorer.",preview:qN},{id:"paradoxxxzero/fracture",name:"Fracture",url:"https://github.com/paradoxxxzero/fracture",demoUrl:"https://florian.mounier.dev/fracture",languages:["ECMAScript"],libraries:["webgl"],major:!0,type:"experiments",description:"Domain coloring of various complex functions and associated fractals.",preview:YN},{id:"paradoxxxzero/helicity",name:"Helicity",url:"https://github.com/paradoxxxzero/helicity",demoUrl:"https://helicity.vercel.app/",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"Shoot ’em up with power-ups as orbital shields.",preview:$N,unreleased:!0},{id:"paradoxxxzero/kalong",name:"Kalong",url:"https://github.com/paradoxxxzero/kalong",languages:["ECMAScript","Python"],libraries:["React","Redux","Material-UI","aiohttp"],major:!0,type:"projects",description:"Standalone Python debugger with a web interface.",preview:SN},{id:"paradoxxxzero/anakataGL",name:"AnakataGL",url:"https://github.com/paradoxxxzero/anakataGL",demoUrl:"https://florian.mounier.dev/anakataGL",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"4 dimensions mesh renderer in WebGL.",preview:RN},{id:"paradoxxxzero/annealation",name:"Annealation",url:"https://github.com/paradoxxxzero/annealation",demoUrl:"https://florian.mounier.dev/annealation",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"Gravitational N-Body simulation in WebGL.",preview:PN},{id:"paradoxxxzero/raymarcher",name:"Raymarcher",url:"https://github.com/paradoxxxzero/raymarcher",demoUrl:"https://florian.mounier.dev/raymarcher",languages:["ECMAScript","glsl"],libraries:[],type:"experiments",description:"A simple glsl editor with bundled raymarching functions.",preview:KN},{id:"paradoxxxzero/frustals",name:"Frustals",url:"https://github.com/paradoxxxzero/frustals",demoUrl:"https://florian.mounier.dev/frustals",languages:["ECMAScript","Rust"],libraries:["wasm-bindgen"],major:!1,type:"experiments",description:"Fractal plotter written in Rust with a web interface base on WASM.",preview:yN},{id:"paradoxxxzero/inversion",name:"Inversion",url:"https://github.com/paradoxxxzero/inversion",demoUrl:"https://inversion-one.vercel.app/",languages:["ECMAScript"],libraries:["three.js","React","Redux"],major:!0,type:"experiments",description:"Puzzle game in WebGL.",preview:MN,unreleased:!0},{id:"Kozea/formol",name:"Formol",url:"https://github.com/Kozea/formol/",demoUrl:"https://kozea.github.io/formol/",languages:["ECMAScript"],libraries:["React"],major:!0,type:"projects",description:"Full featured object edition form framework for React.",preview:EN},{id:"Kozea/unrest",name:"Unrest",url:"https://github.com/Kozea/unrest/",demoUrl:"https://kozea.github.io/unrest/",languages:["Python"],libraries:["SqlAlchemy","Flask","Tornado","Sanic"],major:!0,type:"projects",description:"Simple sqlalchemy REST API generation.",preview:wN},{id:"paradoxxxzero/butterfly",name:"Butterfly",url:"https://github.com/paradoxxxzero/butterfly",languages:["Python","ECMAScript"],libraries:["Tornado"],major:!0,type:"projects",description:"Xterm compatible terminal that runs in your browser.",preview:CN},{id:"Kozea/pygal",name:"Pygal",url:"https://kozea.github.io/pygal/",demoUrl:"http://www.pygal.org/",languages:["Python"],libraries:["lxml"],major:!0,type:"projects",description:"Python charting library with a clean and simple API.",preview:TN},{id:"Kozea/wdb",name:"Wdb",url:"https://github.com/Kozea/wdb",languages:["Python","ECMAScript"],libraries:["tornado"],major:!0,type:"projects",description:"Full featured web debugger for python based on a client-server",preview:AN},{id:"Kozea/umlaut",name:"Umlaut",url:"https://kozea.github.io/umlaut/",languages:["ECMAScript"],libraries:["d3.js","jQuery"],major:!0,type:"projects",description:"Simple SVG diagram modeler with dot support.",preview:bN},{id:"paradoxxxzero/gnome-shell-system-monitor-applet",name:"System Monitor",url:"https://github.com/paradoxxxzero/gnome-shell-system-monitor-applet",languages:["ECMAScript"],libraries:["GLib"],major:!0,type:"projects",description:"Gnome extension that displays system informations in gnome shell",preview:zN},{id:"paradoxxxzero/anakata",name:"Anakata",url:"https://florian.mounier.dev/anakata/",languages:["ECMAScript"],libraries:["canvas"],major:!1,type:"experiments",description:"4 dimensions mesh renderer implemented in 2d canvas. Ancestor of anakataGL",preview:xN},{id:"paradoxxxzero/hanabi",name:"Hanabi",url:"https://florian.mounier.dev/hanabi/",languages:["ECMAScript"],libraries:["canvas"],major:!1,type:"experiments",description:"Fireworks in canvas.",preview:DN},{id:"paradoxxxzero/bemboo",name:"Bemboo",url:"https://github.com/paradoxxxzero/bemboo",languages:["ECMAScript"],libraries:["React"],major:!1,type:"projects",description:"BEM generator based on objects for React 16+.",preview:BN},{id:"paradoxxxzero/atom-python-import-magic",name:"Atom Python importmagic",url:"https://github.com/paradoxxxzero/atom-python-import-magic",languages:["ECMAScript","Python"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to automatically import python modules using",preview:HN,hidden:!0},{id:"paradoxxxzero/atom-undo-tree",name:"Atom undo tree",url:"https://github.com/paradoxxxzero/atom-undo-tree",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to transform undo/redo in an undo tree similar to emacs",preview:VN,hidden:!0},{id:"paradoxxxzero/atom-rainbow-delimiters",name:"Atom rainbow delimiters",url:"https://github.com/paradoxxxzero/atom-rainbow-delimiters",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to highlight delimiters around the cursor.",preview:GN,hidden:!0},{id:"paradoxxxzero/atom-one-theme-color-by-project",name:"Atom one theme color by project",url:"https://github.com/paradoxxxzero/atom-one-theme-color-by-project",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to colorize Atom One themes according to the current",preview:WN,hidden:!0},{id:"paradoxxxzero/jinja2-mode",name:"Jinja2 mode",url:"https://github.com/paradoxxxzero/jinja2-mode",languages:["Elisp"],libraries:["Emacs","Jinja2"],major:!1,type:"projects",description:"Jinja2 mode for Emacs."},{id:"paradoxxxzero/tornado-template-mode",name:"Tornado template mode",url:"https://github.com/paradoxxxzero/tornado-template-mode",languages:["Elisp"],libraries:["Emacs","Jinja2"],major:!1,type:"projects",description:"Tornado template mode for Emacs.",hidden:!0},{id:"paradoxxxzero/graphit",name:"Graphit",url:"https://github.com/paradoxxxzero/graphit",demoUrl:"http://paradoxxxzero.github.io/graphit",languages:["ECMAScript"],libraries:["canvas"],major:!0,type:"experiments",description:"Advanced function plotter and sound generator.",preview:LN},{id:"paradoxxxzero/graphitGL",name:"GraphitGL",url:"https://github.com/paradoxxxzero/graphitGL",demoUrl:"https://florian.mounier.dev/graphitGL",languages:["ECMAScript"],libraries:["three.js"],type:"experiments",major:!1,description:"z = f(x, y) function plotter demo.",preview:IN},{id:"paradoxxxzero/nocolon",name:"Nocolon",url:"https://github.com/paradoxxxzero/nocolon",languages:["Python"],libraries:[],type:"experiments",major:!1,description:"UTF-8 compatible toy encoding that removes the need of colons in",preview:NN},{id:"paradoxxxzero/gnome-shell-shader-extension",name:"Gnome Shell Shader Extension",url:"https://github.com/paradoxxxzero/gnome-shell-shader-extension",languages:["ECMAScript","glsl"],libraries:["GLib"],type:"experiments",major:!1,description:"Gnome extension that allows to add glsl shaders on specific windows.",preview:ON,hidden:!0},{id:"paradoxxxzero/gnome-shell-focus-effects-extension",name:"Gnome Shell, Focus Effects Extension",url:"https://github.com/paradoxxxzero/gnome-shell-focus-effects-extension",languages:["ECMAScript"],libraries:["GLib"],type:"experiments",major:!1,description:"Gnome extension that allows to add custom effects on window",preview:FN,hidden:!0},{id:"paradoxxxzero/clutterm",name:"Clutterm",url:"https://github.com/paradoxxxzero/clutterm",languages:["Python"],libraries:["clutter"],type:"experiments",major:!1,description:"Attempt to create a clutter based terminal written in pure python.",preview:UN},{id:"paradoxxxzero/jsfractals",name:"Jsfsactals",url:"https://github.com/paradoxxxzero/jsfractals",demoUrl:"https://florian.mounier.dev/jsfractals",languages:["ECMAScript"],libraries:["canvas","jQuery"],type:"experiments",major:!1,description:"Pure js fractal drawer.",preview:kN},{id:"paradoxxxzero/wsreload",name:"Wsreload",url:"https://github.com/paradoxxxzero/wsreload",languages:["ECMAScript","Python"],libraries:["tornado"],type:"projects",major:!1,description:"Browser page reloader based on WebSocket.",hidden:!0},{id:"paradoxxxzero/fawn",name:"Fawn",url:"https://github.com/paradoxxxzero/fawn",languages:["Python"],libraries:["Flask","uWSGI"],type:"projects",major:!1,description:"Flask extension allowing WebSocket uWSGI broadcasting from PostgreSQL",preview:jN},{id:"paradoxxxzero/scudd",name:"Scudd",url:"https://github.com/paradoxxxzero/scudd",languages:["ECMAScript"],libraries:["React"],type:"projects",major:!1,description:"Small lib for inspecting React PureComponent render triggers.",preview:XN,hidden:!0}],QN={progression:{relative:0,absolute:0,direction:"up"},page:typeof window<"u"?{width:window.innerWidth,height:document.body.clientHeight,devicePixelRatio:window.devicePixelRatio}:{width:1920,height:1080,devicePixelRatio:1},projects:ZN,stars:{},anchors:{}},JN=(t=QN,e)=>{switch(e.type){case vy:return{...t,progression:{relative:e.relative,absolute:e.absolute,total:e.total,direction:e.absolute-t.progression.absolute>0?"down":"up"}};case yy:return{...t,page:{...t.page,width:e.width,height:e.height,devicePixelRatio:e.devicePixelRatio}};case _y:return{...t,stars:e.stars};case xy:return{...t,anchors:{...t.anchors,[e.name]:e.anchor}};default:return t}},eU=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$1,tU=X1(JN,eU(eT(nT))),nU=X.jsxs(Yw,{store:tU,children:[X.jsx(_N,{}),X.jsx(AC,{})]});B1(document.getElementById("root"),nU);
