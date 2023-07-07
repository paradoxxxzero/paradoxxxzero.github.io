(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function U_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var N_={exports:{}},fu={},O_={exports:{}},je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Js=Symbol.for("react.element"),dM=Symbol.for("react.portal"),hM=Symbol.for("react.fragment"),pM=Symbol.for("react.strict_mode"),mM=Symbol.for("react.profiler"),gM=Symbol.for("react.provider"),vM=Symbol.for("react.context"),_M=Symbol.for("react.forward_ref"),xM=Symbol.for("react.suspense"),yM=Symbol.for("react.memo"),SM=Symbol.for("react.lazy"),qm=Symbol.iterator;function MM(t){return t===null||typeof t!="object"?null:(t=qm&&t[qm]||t["@@iterator"],typeof t=="function"?t:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F_=Object.assign,z_={};function Uo(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||k_}Uo.prototype.isReactComponent={};Uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B_(){}B_.prototype=Uo.prototype;function lp(t,e,n){this.props=t,this.context=e,this.refs=z_,this.updater=n||k_}var cp=lp.prototype=new B_;cp.constructor=lp;F_(cp,Uo.prototype);cp.isPureReactComponent=!0;var Km=Array.isArray,H_=Object.prototype.hasOwnProperty,up={current:null},G_={key:!0,ref:!0,__self:!0,__source:!0};function V_(t,e,n){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)H_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Js,type:t,key:a,ref:o,props:r,_owner:up.current}}function EM(t,e){return{$$typeof:Js,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Js}function wM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zm=/\/+/g;function vf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wM(""+t.key):e.toString(36)}function dc(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Js:case dM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+vf(o,0):i,Km(r)?(n="",t!=null&&(n=t.replace(Zm,"$&/")+"/"),dc(r,e,n,"",function(c){return c})):r!=null&&(fp(r)&&(r=EM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Zm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Km(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+vf(a,s);o+=dc(a,e,n,l,r)}else if(l=MM(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+vf(a,s++),o+=dc(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hl(t,e,n){if(t==null)return t;var i=[],r=0;return dc(t,i,"","",function(a){return e.call(n,a,r++)}),i}function bM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},hc={transition:null},TM={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:hc,ReactCurrentOwner:up};je.Children={map:hl,forEach:function(t,e,n){hl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hl(t,function(){e++}),e},toArray:function(t){return hl(t,function(e){return e})||[]},only:function(t){if(!fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};je.Component=Uo;je.Fragment=hM;je.Profiler=mM;je.PureComponent=lp;je.StrictMode=pM;je.Suspense=xM;je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=F_({},t.props),r=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=up.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)H_.call(e,l)&&!G_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:Js,type:t.type,key:r,ref:a,props:i,_owner:o}};je.createContext=function(t){return t={$$typeof:vM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gM,_context:t},t.Consumer=t};je.createElement=V_;je.createFactory=function(t){var e=V_.bind(null,t);return e.type=t,e};je.createRef=function(){return{current:null}};je.forwardRef=function(t){return{$$typeof:_M,render:t}};je.isValidElement=fp;je.lazy=function(t){return{$$typeof:SM,_payload:{_status:-1,_result:t},_init:bM}};je.memo=function(t,e){return{$$typeof:yM,type:t,compare:e===void 0?null:e}};je.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};je.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};je.useCallback=function(t,e){return dn.current.useCallback(t,e)};je.useContext=function(t){return dn.current.useContext(t)};je.useDebugValue=function(){};je.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};je.useEffect=function(t,e){return dn.current.useEffect(t,e)};je.useId=function(){return dn.current.useId()};je.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};je.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};je.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};je.useMemo=function(t,e){return dn.current.useMemo(t,e)};je.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};je.useRef=function(t){return dn.current.useRef(t)};je.useState=function(t){return dn.current.useState(t)};je.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};je.useTransition=function(){return dn.current.useTransition()};je.version="18.2.0";O_.exports=je;var We=O_.exports;const Ai=U_(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AM=We,CM=Symbol.for("react.element"),RM=Symbol.for("react.fragment"),PM=Object.prototype.hasOwnProperty,LM=AM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IM={key:!0,ref:!0,__self:!0,__source:!0};function W_(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)PM.call(e,i)&&!IM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:CM,type:t,key:a,ref:o,props:r,_owner:LM.current}}fu.Fragment=RM;fu.jsx=W_;fu.jsxs=W_;N_.exports=fu;var q=N_.exports,j_={exports:{}},Dn={},$_={exports:{}},X_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,z){var B=I.length;I.push(z);e:for(;0<B;){var D=B-1>>>1,V=I[D];if(0<r(V,z))I[D]=z,I[B]=V,B=D;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var z=I[0],B=I.pop();if(B!==z){I[0]=B;e:for(var D=0,V=I.length,re=V>>>1;D<re;){var ee=2*(D+1)-1,oe=I[ee],he=ee+1,xe=I[he];if(0>r(oe,B))he<V&&0>r(xe,oe)?(I[D]=xe,I[he]=B,D=he):(I[D]=oe,I[ee]=B,D=ee);else if(he<V&&0>r(xe,B))I[D]=xe,I[he]=B,D=he;else break e}}return z}function r(I,z){var B=I.sortIndex-z.sortIndex;return B!==0?B:I.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var z=n(c);z!==null;){if(z.callback===null)i(c);else if(z.startTime<=I)i(c),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(c)}}function y(I){if(x=!1,m(I),!_)if(n(l)!==null)_=!0,Z(S);else{var z=n(c);z!==null&&j(y,z.startTime-I)}}function S(I,z){_=!1,x&&(x=!1,h(R),R=-1),p=!0;var B=d;try{for(m(z),f=n(l);f!==null&&(!(f.expirationTime>z)||I&&!G());){var D=f.callback;if(typeof D=="function"){f.callback=null,d=f.priorityLevel;var V=D(f.expirationTime<=z);z=t.unstable_now(),typeof V=="function"?f.callback=V:f===n(l)&&i(l),m(z)}else i(l);f=n(l)}if(f!==null)var re=!0;else{var ee=n(c);ee!==null&&j(y,ee.startTime-z),re=!1}return re}finally{f=null,d=B,p=!1}}var w=!1,E=null,R=-1,M=5,b=-1;function G(){return!(t.unstable_now()-b<M)}function Q(){if(E!==null){var I=t.unstable_now();b=I;var z=!0;try{z=E(!0,I)}finally{z?N():(w=!1,E=null)}}else w=!1}var N;if(typeof v=="function")N=function(){v(Q)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,F=H.port2;H.port1.onmessage=Q,N=function(){F.postMessage(null)}}else N=function(){g(Q,0)};function Z(I){E=I,w||(w=!0,N())}function j(I,z){R=g(function(){I(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Z(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var B=d;d=z;try{return I()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=d;d=I;try{return z()}finally{d=B}},t.unstable_scheduleCallback=function(I,z,B){var D=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?D+B:D):B=D,I){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=B+V,I={id:u++,callback:z,priorityLevel:I,startTime:B,expirationTime:V,sortIndex:-1},B>D?(I.sortIndex=B,e(c,I),n(l)===null&&I===n(c)&&(x?(h(R),R=-1):x=!0,j(y,B-D))):(I.sortIndex=V,e(l,I),_||p||(_=!0,Z(S))),I},t.unstable_shouldYield=G,t.unstable_wrapCallback=function(I){var z=d;return function(){var B=d;d=z;try{return I.apply(this,arguments)}finally{d=B}}}})(X_);$_.exports=X_;var DM=$_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_=We,In=DM;function J(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var q_=new Set,ws={};function ya(t,e){vo(t,e),vo(t+"Capture",e)}function vo(t,e){for(ws[t]=e,t=0;t<e.length;t++)q_.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zd=Object.prototype.hasOwnProperty,UM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qm={},Jm={};function NM(t){return zd.call(Jm,t)?!0:zd.call(Qm,t)?!1:UM.test(t)?Jm[t]=!0:(Qm[t]=!0,!1)}function OM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kM(t,e,n,i){if(e===null||typeof e>"u"||OM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var dp=/[\-:]([a-z])/g;function hp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dp,hp);Wt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dp,hp);Wt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dp,hp);Wt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function pp(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kM(e,n,r,i)&&(n=null),i||r===null?NM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=Y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Ga=Symbol.for("react.portal"),Va=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),K_=Symbol.for("react.provider"),Z_=Symbol.for("react.context"),gp=Symbol.for("react.forward_ref"),Hd=Symbol.for("react.suspense"),Gd=Symbol.for("react.suspense_list"),vp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),Q_=Symbol.for("react.offscreen"),eg=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,_f;function rs(t){if(_f===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_f=e&&e[1]||""}return`
`+_f+t}var xf=!1;function yf(t,e){if(!t||xf)return"";xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{xf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?rs(t):""}function FM(t){switch(t.tag){case 5:return rs(t.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 2:case 15:return t=yf(t.type,!1),t;case 11:return t=yf(t.type.render,!1),t;case 1:return t=yf(t.type,!0),t;default:return""}}function Vd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Va:return"Fragment";case Ga:return"Portal";case Bd:return"Profiler";case mp:return"StrictMode";case Hd:return"Suspense";case Gd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Z_:return(t.displayName||"Context")+".Consumer";case K_:return(t._context.displayName||"Context")+".Provider";case gp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vp:return e=t.displayName||null,e!==null?e:Vd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Vd(t(e))}catch{}}return null}function zM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vd(e);case 8:return e===mp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function BM(t){var e=J_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=BM(t))}function e1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=J_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Lc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wd(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function t1(t,e){e=e.checked,e!=null&&pp(t,"checked",e,!1)}function jd(t,e){t1(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$d(t,e.type,n):e.hasOwnProperty("defaultValue")&&$d(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $d(t,e,n){(e!=="number"||Lc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var as=Array.isArray;function oo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Xd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(J(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(J(92));if(as(n)){if(1<n.length)throw Error(J(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function n1(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gl,r1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HM=["Webkit","ms","Moz","O"];Object.keys(fs).forEach(function(t){HM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fs[e]=fs[t]})});function a1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fs.hasOwnProperty(t)&&fs[t]?(""+e).trim():e+"px"}function o1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=a1(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var GM=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(GM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(J(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(J(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(J(61))}if(e.style!=null&&typeof e.style!="object")throw Error(J(62))}}function Kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function _p(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qd=null,so=null,lo=null;function ag(t){if(t=nl(t)){if(typeof Qd!="function")throw Error(J(280));var e=t.stateNode;e&&(e=gu(e),Qd(t.stateNode,t.type,e))}}function s1(t){so?lo?lo.push(t):lo=[t]:so=t}function l1(){if(so){var t=so,e=lo;if(lo=so=null,ag(t),e)for(t=0;t<e.length;t++)ag(e[t])}}function c1(t,e){return t(e)}function u1(){}var Sf=!1;function f1(t,e,n){if(Sf)return t(e,n);Sf=!0;try{return c1(t,e,n)}finally{Sf=!1,(so!==null||lo!==null)&&(u1(),l1())}}function Ts(t,e){var n=t.stateNode;if(n===null)return null;var i=gu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(J(231,e,typeof n));return n}var Jd=!1;if(Xi)try{var $o={};Object.defineProperty($o,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{Jd=!1}function VM(t,e,n,i,r,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ds=!1,Ic=null,Dc=!1,eh=null,WM={onError:function(t){ds=!0,Ic=t}};function jM(t,e,n,i,r,a,o,s,l){ds=!1,Ic=null,VM.apply(WM,arguments)}function $M(t,e,n,i,r,a,o,s,l){if(jM.apply(this,arguments),ds){if(ds){var c=Ic;ds=!1,Ic=null}else throw Error(J(198));Dc||(Dc=!0,eh=c)}}function Sa(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function d1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function og(t){if(Sa(t)!==t)throw Error(J(188))}function XM(t){var e=t.alternate;if(!e){if(e=Sa(t),e===null)throw Error(J(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return og(r),t;if(a===i)return og(r),e;a=a.sibling}throw Error(J(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(J(189))}}if(n.alternate!==i)throw Error(J(190))}if(n.tag!==3)throw Error(J(188));return n.stateNode.current===n?t:e}function h1(t){return t=XM(t),t!==null?p1(t):null}function p1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p1(t);if(e!==null)return e;t=t.sibling}return null}var m1=In.unstable_scheduleCallback,sg=In.unstable_cancelCallback,YM=In.unstable_shouldYield,qM=In.unstable_requestPaint,Et=In.unstable_now,KM=In.unstable_getCurrentPriorityLevel,xp=In.unstable_ImmediatePriority,g1=In.unstable_UserBlockingPriority,Uc=In.unstable_NormalPriority,ZM=In.unstable_LowPriority,v1=In.unstable_IdlePriority,du=null,bi=null;function QM(t){if(bi&&typeof bi.onCommitFiberRoot=="function")try{bi.onCommitFiberRoot(du,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:tE,JM=Math.log,eE=Math.LN2;function tE(t){return t>>>=0,t===0?32:31-(JM(t)/eE|0)|0}var vl=64,_l=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=os(s):(a&=o,a!==0&&(i=os(a)))}else o=n&~r,o!==0?i=os(o):a!==0&&(i=os(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function nE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-ci(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=nE(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function th(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _1(){var t=vl;return vl<<=1,!(vl&4194240)&&(vl=64),t}function Mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function el(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function rE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function x1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var y1,Sp,S1,M1,E1,nh=!1,xl=[],_r=null,xr=null,yr=null,As=new Map,Cs=new Map,fr=[],aE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lg(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":As.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function Xo(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=nl(e),e!==null&&Sp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function oE(t,e,n,i,r){switch(e){case"focusin":return _r=Xo(_r,t,e,n,i,r),!0;case"dragenter":return xr=Xo(xr,t,e,n,i,r),!0;case"mouseover":return yr=Xo(yr,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return As.set(a,Xo(As.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Cs.set(a,Xo(Cs.get(a)||null,t,e,n,i,r)),!0}return!1}function w1(t){var e=Kr(t.target);if(e!==null){var n=Sa(e);if(n!==null){if(e=n.tag,e===13){if(e=d1(n),e!==null){t.blockedOn=e,E1(t.priority,function(){S1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zd=i,n.target.dispatchEvent(i),Zd=null}else return e=nl(n),e!==null&&Sp(e),t.blockedOn=n,!1;e.shift()}return!0}function cg(t,e,n){pc(t)&&n.delete(e)}function sE(){nh=!1,_r!==null&&pc(_r)&&(_r=null),xr!==null&&pc(xr)&&(xr=null),yr!==null&&pc(yr)&&(yr=null),As.forEach(cg),Cs.forEach(cg)}function Yo(t,e){t.blockedOn===e&&(t.blockedOn=null,nh||(nh=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,sE)))}function Rs(t){function e(r){return Yo(r,t)}if(0<xl.length){Yo(xl[0],t);for(var n=1;n<xl.length;n++){var i=xl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&Yo(_r,t),xr!==null&&Yo(xr,t),yr!==null&&Yo(yr,t),As.forEach(e),Cs.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)w1(n),n.blockedOn===null&&fr.shift()}var co=er.ReactCurrentBatchConfig,Oc=!0;function lE(t,e,n,i){var r=Je,a=co.transition;co.transition=null;try{Je=1,Mp(t,e,n,i)}finally{Je=r,co.transition=a}}function cE(t,e,n,i){var r=Je,a=co.transition;co.transition=null;try{Je=4,Mp(t,e,n,i)}finally{Je=r,co.transition=a}}function Mp(t,e,n,i){if(Oc){var r=ih(t,e,n,i);if(r===null)If(t,e,i,kc,n),lg(t,i);else if(oE(r,t,e,n,i))i.stopPropagation();else if(lg(t,i),e&4&&-1<aE.indexOf(t)){for(;r!==null;){var a=nl(r);if(a!==null&&y1(a),a=ih(t,e,n,i),a===null&&If(t,e,i,kc,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else If(t,e,i,null,n)}}var kc=null;function ih(t,e,n,i){if(kc=null,t=_p(i),t=Kr(t),t!==null)if(e=Sa(t),e===null)t=null;else if(n=e.tag,n===13){if(t=d1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return kc=t,null}function b1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(KM()){case xp:return 1;case g1:return 4;case Uc:case ZM:return 16;case v1:return 536870912;default:return 16}default:return 16}}var hr=null,Ep=null,mc=null;function T1(){if(mc)return mc;var t,e=Ep,n=e.length,i,r="value"in hr?hr.value:hr.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[a-i];i++);return mc=r.slice(t,1<i?1-i:void 0)}function gc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function ug(){return!1}function Un(t){function e(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?yl:ug,this.isPropagationStopped=ug,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),e}var No={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=Un(No),tl=vt({},No,{view:0,detail:0}),uE=Un(tl),Ef,wf,qo,hu=vt({},tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(Ef=t.screenX-qo.screenX,wf=t.screenY-qo.screenY):wf=Ef=0,qo=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:wf}}),fg=Un(hu),fE=vt({},hu,{dataTransfer:0}),dE=Un(fE),hE=vt({},tl,{relatedTarget:0}),bf=Un(hE),pE=vt({},No,{animationName:0,elapsedTime:0,pseudoElement:0}),mE=Un(pE),gE=vt({},No,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vE=Un(gE),_E=vt({},No,{data:0}),dg=Un(_E),xE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ME(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SE[t])?!!e[t]:!1}function bp(){return ME}var EE=vt({},tl,{key:function(t){if(t.key){var e=xE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bp,charCode:function(t){return t.type==="keypress"?gc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wE=Un(EE),bE=vt({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=Un(bE),TE=vt({},tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bp}),AE=Un(TE),CE=vt({},No,{propertyName:0,elapsedTime:0,pseudoElement:0}),RE=Un(CE),PE=vt({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LE=Un(PE),IE=[9,13,27,32],Tp=Xi&&"CompositionEvent"in window,hs=null;Xi&&"documentMode"in document&&(hs=document.documentMode);var DE=Xi&&"TextEvent"in window&&!hs,A1=Xi&&(!Tp||hs&&8<hs&&11>=hs),pg=String.fromCharCode(32),mg=!1;function C1(t,e){switch(t){case"keyup":return IE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wa=!1;function UE(t,e){switch(t){case"compositionend":return R1(e);case"keypress":return e.which!==32?null:(mg=!0,pg);case"textInput":return t=e.data,t===pg&&mg?null:t;default:return null}}function NE(t,e){if(Wa)return t==="compositionend"||!Tp&&C1(t,e)?(t=T1(),mc=Ep=hr=null,Wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A1&&e.locale!=="ko"?null:e.data;default:return null}}var OE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!OE[t.type]:e==="textarea"}function P1(t,e,n,i){s1(i),e=Fc(e,"onChange"),0<e.length&&(n=new wp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ps=null,Ps=null;function kE(t){H1(t,0)}function pu(t){var e=Xa(t);if(e1(e))return t}function FE(t,e){if(t==="change")return e}var L1=!1;if(Xi){var Tf;if(Xi){var Af="oninput"in document;if(!Af){var vg=document.createElement("div");vg.setAttribute("oninput","return;"),Af=typeof vg.oninput=="function"}Tf=Af}else Tf=!1;L1=Tf&&(!document.documentMode||9<document.documentMode)}function _g(){ps&&(ps.detachEvent("onpropertychange",I1),Ps=ps=null)}function I1(t){if(t.propertyName==="value"&&pu(Ps)){var e=[];P1(e,Ps,t,_p(t)),f1(kE,e)}}function zE(t,e,n){t==="focusin"?(_g(),ps=e,Ps=n,ps.attachEvent("onpropertychange",I1)):t==="focusout"&&_g()}function BE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pu(Ps)}function HE(t,e){if(t==="click")return pu(e)}function GE(t,e){if(t==="input"||t==="change")return pu(e)}function VE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:VE;function Ls(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function xg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yg(t,e){var n=xg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xg(n)}}function D1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?D1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function U1(){for(var t=window,e=Lc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Lc(t.document)}return e}function Ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WE(t){var e=U1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&D1(n.ownerDocument.documentElement,n)){if(i!==null&&Ap(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=yg(n,a);var o=yg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jE=Xi&&"documentMode"in document&&11>=document.documentMode,ja=null,rh=null,ms=null,ah=!1;function Sg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||ja==null||ja!==Lc(i)||(i=ja,"selectionStart"in i&&Ap(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ms&&Ls(ms,i)||(ms=i,i=Fc(rh,"onSelect"),0<i.length&&(e=new wp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ja)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $a={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},Cf={},N1={};Xi&&(N1=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function mu(t){if(Cf[t])return Cf[t];if(!$a[t])return t;var e=$a[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in N1)return Cf[t]=e[n];return t}var O1=mu("animationend"),k1=mu("animationiteration"),F1=mu("animationstart"),z1=mu("transitionend"),B1=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){B1.set(t,e),ya(e,[t])}for(var Rf=0;Rf<Mg.length;Rf++){var Pf=Mg[Rf],$E=Pf.toLowerCase(),XE=Pf[0].toUpperCase()+Pf.slice(1);Nr($E,"on"+XE)}Nr(O1,"onAnimationEnd");Nr(k1,"onAnimationIteration");Nr(F1,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(z1,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),YE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ss));function Eg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$M(i,e,void 0,t),t.currentTarget=null}function H1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;Eg(r,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;Eg(r,s,c),a=l}}}if(Dc)throw t=eh,Dc=!1,eh=null,t}function ot(t,e){var n=e[uh];n===void 0&&(n=e[uh]=new Set);var i=t+"__bubble";n.has(i)||(G1(e,t,2,!1),n.add(i))}function Lf(t,e,n){var i=0;e&&(i|=4),G1(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Is(t){if(!t[Ml]){t[Ml]=!0,q_.forEach(function(n){n!=="selectionchange"&&(YE.has(n)||Lf(n,!1,t),Lf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,Lf("selectionchange",!1,e))}}function G1(t,e,n,i){switch(b1(e)){case 1:var r=lE;break;case 4:r=cE;break;default:r=Mp}n=r.bind(null,e,n,t),r=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function If(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Kr(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}f1(function(){var c=a,u=_p(n),f=[];e:{var d=B1.get(t);if(d!==void 0){var p=wp,_=t;switch(t){case"keypress":if(gc(n)===0)break e;case"keydown":case"keyup":p=wE;break;case"focusin":_="focus",p=bf;break;case"focusout":_="blur",p=bf;break;case"beforeblur":case"afterblur":p=bf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=AE;break;case O1:case k1:case F1:p=mE;break;case z1:p=RE;break;case"scroll":p=uE;break;case"wheel":p=LE;break;case"copy":case"cut":case"paste":p=vE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hg}var x=(e&4)!==0,g=!x&&t==="scroll",h=x?d!==null?d+"Capture":null:d;x=[];for(var v=c,m;v!==null;){m=v;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,h!==null&&(y=Ts(v,h),y!=null&&x.push(Ds(v,y,m)))),g)break;v=v.return}0<x.length&&(d=new p(d,_,null,n,u),f.push({event:d,listeners:x}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Zd&&(_=n.relatedTarget||n.fromElement)&&(Kr(_)||_[Yi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Kr(_):null,_!==null&&(g=Sa(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=fg,y="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=hg,y="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:Xa(p),m=_==null?d:Xa(_),d=new x(y,v+"leave",p,n,u),d.target=g,d.relatedTarget=m,y=null,Kr(u)===c&&(x=new x(h,v+"enter",_,n,u),x.target=m,x.relatedTarget=g,y=x),g=y,p&&_)t:{for(x=p,h=_,v=0,m=x;m;m=Ma(m))v++;for(m=0,y=h;y;y=Ma(y))m++;for(;0<v-m;)x=Ma(x),v--;for(;0<m-v;)h=Ma(h),m--;for(;v--;){if(x===h||h!==null&&x===h.alternate)break t;x=Ma(x),h=Ma(h)}x=null}else x=null;p!==null&&wg(f,d,p,x,!1),_!==null&&g!==null&&wg(f,g,_,x,!0)}}e:{if(d=c?Xa(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=FE;else if(gg(d))if(L1)S=GE;else{S=BE;var w=zE}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=HE);if(S&&(S=S(t,c))){P1(f,S,n,u);break e}w&&w(t,d,c),t==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&$d(d,"number",d.value)}switch(w=c?Xa(c):window,t){case"focusin":(gg(w)||w.contentEditable==="true")&&(ja=w,rh=c,ms=null);break;case"focusout":ms=rh=ja=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,Sg(f,n,u);break;case"selectionchange":if(jE)break;case"keydown":case"keyup":Sg(f,n,u)}var E;if(Tp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Wa?C1(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(A1&&n.locale!=="ko"&&(Wa||R!=="onCompositionStart"?R==="onCompositionEnd"&&Wa&&(E=T1()):(hr=u,Ep="value"in hr?hr.value:hr.textContent,Wa=!0)),w=Fc(c,R),0<w.length&&(R=new dg(R,t,null,n,u),f.push({event:R,listeners:w}),E?R.data=E:(E=R1(n),E!==null&&(R.data=E)))),(E=DE?UE(t,n):NE(t,n))&&(c=Fc(c,"onBeforeInput"),0<c.length&&(u=new dg("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=E))}H1(f,e)})}function Ds(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ts(t,n),a!=null&&i.unshift(Ds(t,a,r)),a=Ts(t,e),a!=null&&i.push(Ds(t,a,r))),t=t.return}return i}function Ma(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wg(t,e,n,i,r){for(var a=e._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,r?(l=Ts(n,a),l!=null&&o.unshift(Ds(n,l,s))):r||(l=Ts(n,a),l!=null&&o.push(Ds(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qE=/\r\n?/g,KE=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(qE,`
`).replace(KE,"")}function El(t,e,n){if(e=bg(e),bg(t)!==e&&n)throw Error(J(425))}function zc(){}var oh=null,sh=null;function lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,ZE=typeof clearTimeout=="function"?clearTimeout:void 0,Tg=typeof Promise=="function"?Promise:void 0,QE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tg<"u"?function(t){return Tg.resolve(null).then(t).catch(JE)}:ch;function JE(t){setTimeout(function(){throw t})}function Df(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Rs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Rs(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Oo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Oo,Us="__reactProps$"+Oo,Yi="__reactContainer$"+Oo,uh="__reactEvents$"+Oo,ew="__reactListeners$"+Oo,tw="__reactHandles$"+Oo;function Kr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ag(t);t!==null;){if(n=t[Mi])return n;t=Ag(t)}return e}t=n,n=t.parentNode}return null}function nl(t){return t=t[Mi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(J(33))}function gu(t){return t[Us]||null}var fh=[],Ya=-1;function Or(t){return{current:t}}function ct(t){0>Ya||(t.current=fh[Ya],fh[Ya]=null,Ya--)}function at(t,e){Ya++,fh[Ya]=t.current,t.current=e}var Cr={},en=Or(Cr),vn=Or(!1),fa=Cr;function _o(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function _n(t){return t=t.childContextTypes,t!=null}function Bc(){ct(vn),ct(en)}function Cg(t,e,n){if(en.current!==Cr)throw Error(J(168));at(en,e),at(vn,n)}function V1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(J(108,zM(t)||"Unknown",r));return vt({},n,i)}function Hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,fa=en.current,at(en,t),at(vn,vn.current),!0}function Rg(t,e,n){var i=t.stateNode;if(!i)throw Error(J(169));n?(t=V1(t,e,fa),i.__reactInternalMemoizedMergedChildContext=t,ct(vn),ct(en),at(en,t)):ct(vn),at(vn,n)}var zi=null,vu=!1,Uf=!1;function W1(t){zi===null?zi=[t]:zi.push(t)}function nw(t){vu=!0,W1(t)}function kr(){if(!Uf&&zi!==null){Uf=!0;var t=0,e=Je;try{var n=zi;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,vu=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),m1(xp,kr),r}finally{Je=e,Uf=!1}}return null}var qa=[],Ka=0,Gc=null,Vc=0,Fn=[],zn=0,da=null,Bi=1,Hi="";function $r(t,e){qa[Ka++]=Vc,qa[Ka++]=Gc,Gc=t,Vc=e}function j1(t,e,n){Fn[zn++]=Bi,Fn[zn++]=Hi,Fn[zn++]=da,da=t;var i=Bi;t=Hi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var a=32-ci(e)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-ci(e)+r|n<<r|i,Hi=a+t}else Bi=1<<a|n<<r|i,Hi=t}function Cp(t){t.return!==null&&($r(t,1),j1(t,1,0))}function Rp(t){for(;t===Gc;)Gc=qa[--Ka],qa[Ka]=null,Vc=qa[--Ka],qa[Ka]=null;for(;t===da;)da=Fn[--zn],Fn[zn]=null,Hi=Fn[--zn],Fn[zn]=null,Bi=Fn[--zn],Fn[zn]=null}var Pn=null,Rn=null,ft=!1,ri=null;function $1(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=da!==null?{id:Bi,overflow:Hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hh(t){if(ft){var e=Rn;if(e){var n=e;if(!Pg(t,e)){if(dh(t))throw Error(J(418));e=Sr(n.nextSibling);var i=Pn;e&&Pg(t,e)?$1(i,n):(t.flags=t.flags&-4097|2,ft=!1,Pn=t)}}else{if(dh(t))throw Error(J(418));t.flags=t.flags&-4097|2,ft=!1,Pn=t}}}function Lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function wl(t){if(t!==Pn)return!1;if(!ft)return Lg(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lh(t.type,t.memoizedProps)),e&&(e=Rn)){if(dh(t))throw X1(),Error(J(418));for(;e;)$1(t,e),e=Sr(e.nextSibling)}if(Lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(J(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?Sr(t.stateNode.nextSibling):null;return!0}function X1(){for(var t=Rn;t;)t=Sr(t.nextSibling)}function xo(){Rn=Pn=null,ft=!1}function Pp(t){ri===null?ri=[t]:ri.push(t)}var iw=er.ReactCurrentBatchConfig;function ni(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Wc=Or(null),jc=null,Za=null,Lp=null;function Ip(){Lp=Za=jc=null}function Dp(t){var e=Wc.current;ct(Wc),t._currentValue=e}function ph(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){jc=t,Lp=Za=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(Lp!==t)if(t={context:t,memoizedValue:e,next:null},Za===null){if(jc===null)throw Error(J(308));Za=t,jc.dependencies={lanes:0,firstContext:t}}else Za=Za.next=t;return e}var Zr=null;function Up(t){Zr===null?Zr=[t]:Zr.push(t)}function Y1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Up(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function Np(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function q1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Up(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function vc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yp(t,n)}}function Ig(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $c(t,e,n,i){var r=t.updateQueue;ur=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=r.baseState;o=0,u=c=l=null,s=a;do{var d=s.lane,p=s.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,x=s;switch(d=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=vt({},f,d);break e;case 2:ur=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[s]:d.push(s))}else p={eventTime:p,lane:d,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;d=s,s=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);pa|=o,t.lanes=o,t.memoizedState=f}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(J(191,r));r.call(i)}}}var K1=new Y_.Component().refs;function mh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?Sa(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=wr(t),a=Vi(i,r);a.payload=e,n!=null&&(a.callback=n),e=Mr(t,a,r),e!==null&&(ui(e,t,r,i),vc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=wr(t),a=Vi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=Mr(t,a,r),e!==null&&(ui(e,t,r,i),vc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=wr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(t,r,i),e!==null&&(ui(e,t,i,n),vc(e,t,i))}};function Ug(t,e,n,i,r,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Ls(n,i)||!Ls(r,a):!0}function Z1(t,e,n){var i=!1,r=Cr,a=e.contextType;return typeof a=="object"&&a!==null?a=Wn(a):(r=_n(e)?fa:en.current,i=e.contextTypes,a=(i=i!=null)?_o(t,r):Cr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Ng(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function gh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=K1,Np(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=Wn(a):(a=_n(e)?fa:en.current,r.context=_o(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(mh(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&_u.enqueueReplaceState(r,r.state,null),$c(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(J(309));var i=n.stateNode}if(!i)throw Error(J(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=r.refs;s===K1&&(s=r.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(J(284));if(!n._owner)throw Error(J(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(J(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Og(t){var e=t._init;return e(t._payload)}function Q1(t){function e(h,v){if(t){var m=h.deletions;m===null?(h.deletions=[v],h.flags|=16):m.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=br(h,v),h.index=0,h.sibling=null,h}function a(h,v,m){return h.index=m,t?(m=h.alternate,m!==null?(m=m.index,m<v?(h.flags|=2,v):m):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function s(h,v,m,y){return v===null||v.tag!==6?(v=Hf(m,h.mode,y),v.return=h,v):(v=r(v,m),v.return=h,v)}function l(h,v,m,y){var S=m.type;return S===Va?u(h,v,m.props.children,y,m.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cr&&Og(S)===v.type)?(y=r(v,m.props),y.ref=Ko(h,v,m),y.return=h,y):(y=Ec(m.type,m.key,m.props,null,h.mode,y),y.ref=Ko(h,v,m),y.return=h,y)}function c(h,v,m,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=Gf(m,h.mode,y),v.return=h,v):(v=r(v,m.children||[]),v.return=h,v)}function u(h,v,m,y,S){return v===null||v.tag!==7?(v=ia(m,h.mode,y,S),v.return=h,v):(v=r(v,m),v.return=h,v)}function f(h,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Hf(""+v,h.mode,m),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pl:return m=Ec(v.type,v.key,v.props,null,h.mode,m),m.ref=Ko(h,null,v),m.return=h,m;case Ga:return v=Gf(v,h.mode,m),v.return=h,v;case cr:var y=v._init;return f(h,y(v._payload),m)}if(as(v)||jo(v))return v=ia(v,h.mode,m,null),v.return=h,v;bl(h,v)}return null}function d(h,v,m,y){var S=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(h,v,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case pl:return m.key===S?l(h,v,m,y):null;case Ga:return m.key===S?c(h,v,m,y):null;case cr:return S=m._init,d(h,v,S(m._payload),y)}if(as(m)||jo(m))return S!==null?null:u(h,v,m,y,null);bl(h,m)}return null}function p(h,v,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(m)||null,s(v,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pl:return h=h.get(y.key===null?m:y.key)||null,l(v,h,y,S);case Ga:return h=h.get(y.key===null?m:y.key)||null,c(v,h,y,S);case cr:var w=y._init;return p(h,v,m,w(y._payload),S)}if(as(y)||jo(y))return h=h.get(m)||null,u(v,h,y,S,null);bl(v,y)}return null}function _(h,v,m,y){for(var S=null,w=null,E=v,R=v=0,M=null;E!==null&&R<m.length;R++){E.index>R?(M=E,E=null):M=E.sibling;var b=d(h,E,m[R],y);if(b===null){E===null&&(E=M);break}t&&E&&b.alternate===null&&e(h,E),v=a(b,v,R),w===null?S=b:w.sibling=b,w=b,E=M}if(R===m.length)return n(h,E),ft&&$r(h,R),S;if(E===null){for(;R<m.length;R++)E=f(h,m[R],y),E!==null&&(v=a(E,v,R),w===null?S=E:w.sibling=E,w=E);return ft&&$r(h,R),S}for(E=i(h,E);R<m.length;R++)M=p(E,h,R,m[R],y),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?R:M.key),v=a(M,v,R),w===null?S=M:w.sibling=M,w=M);return t&&E.forEach(function(G){return e(h,G)}),ft&&$r(h,R),S}function x(h,v,m,y){var S=jo(m);if(typeof S!="function")throw Error(J(150));if(m=S.call(m),m==null)throw Error(J(151));for(var w=S=null,E=v,R=v=0,M=null,b=m.next();E!==null&&!b.done;R++,b=m.next()){E.index>R?(M=E,E=null):M=E.sibling;var G=d(h,E,b.value,y);if(G===null){E===null&&(E=M);break}t&&E&&G.alternate===null&&e(h,E),v=a(G,v,R),w===null?S=G:w.sibling=G,w=G,E=M}if(b.done)return n(h,E),ft&&$r(h,R),S;if(E===null){for(;!b.done;R++,b=m.next())b=f(h,b.value,y),b!==null&&(v=a(b,v,R),w===null?S=b:w.sibling=b,w=b);return ft&&$r(h,R),S}for(E=i(h,E);!b.done;R++,b=m.next())b=p(E,h,R,b.value,y),b!==null&&(t&&b.alternate!==null&&E.delete(b.key===null?R:b.key),v=a(b,v,R),w===null?S=b:w.sibling=b,w=b);return t&&E.forEach(function(Q){return e(h,Q)}),ft&&$r(h,R),S}function g(h,v,m,y){if(typeof m=="object"&&m!==null&&m.type===Va&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case pl:e:{for(var S=m.key,w=v;w!==null;){if(w.key===S){if(S=m.type,S===Va){if(w.tag===7){n(h,w.sibling),v=r(w,m.props.children),v.return=h,h=v;break e}}else if(w.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cr&&Og(S)===w.type){n(h,w.sibling),v=r(w,m.props),v.ref=Ko(h,w,m),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}m.type===Va?(v=ia(m.props.children,h.mode,y,m.key),v.return=h,h=v):(y=Ec(m.type,m.key,m.props,null,h.mode,y),y.ref=Ko(h,v,m),y.return=h,h=y)}return o(h);case Ga:e:{for(w=m.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(h,v.sibling),v=r(v,m.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=Gf(m,h.mode,y),v.return=h,h=v}return o(h);case cr:return w=m._init,g(h,v,w(m._payload),y)}if(as(m))return _(h,v,m,y);if(jo(m))return x(h,v,m,y);bl(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,m),v.return=h,h=v):(n(h,v),v=Hf(m,h.mode,y),v.return=h,h=v),o(h)):n(h,v)}return g}var yo=Q1(!0),J1=Q1(!1),il={},Ti=Or(il),Ns=Or(il),Os=Or(il);function Qr(t){if(t===il)throw Error(J(174));return t}function Op(t,e){switch(at(Os,e),at(Ns,t),at(Ti,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}ct(Ti),at(Ti,e)}function So(){ct(Ti),ct(Ns),ct(Os)}function ex(t){Qr(Os.current);var e=Qr(Ti.current),n=Yd(e,t.type);e!==n&&(at(Ns,t),at(Ti,n))}function kp(t){Ns.current===t&&(ct(Ti),ct(Ns))}var mt=Or(0);function Xc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nf=[];function Fp(){for(var t=0;t<Nf.length;t++)Nf[t]._workInProgressVersionPrimary=null;Nf.length=0}var _c=er.ReactCurrentDispatcher,Of=er.ReactCurrentBatchConfig,ha=0,gt=null,Ct=null,Ot=null,Yc=!1,gs=!1,ks=0,rw=0;function Xt(){throw Error(J(321))}function zp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function Bp(t,e,n,i,r,a){if(ha=a,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_c.current=t===null||t.memoizedState===null?lw:cw,t=n(i,r),gs){a=0;do{if(gs=!1,ks=0,25<=a)throw Error(J(301));a+=1,Ot=Ct=null,e.updateQueue=null,_c.current=uw,t=n(i,r)}while(gs)}if(_c.current=qc,e=Ct!==null&&Ct.next!==null,ha=0,Ot=Ct=gt=null,Yc=!1,e)throw Error(J(300));return t}function Hp(){var t=ks!==0;return ks=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?gt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function jn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ot===null?gt.memoizedState:Ot.next;if(e!==null)Ot=e,Ct=t;else{if(t===null)throw Error(J(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ot===null?gt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Fs(t,e){return typeof e=="function"?e(t):e}function kf(t){var e=jn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,c=a;do{var u=c.lane;if((ha&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=i):l=l.next=f,gt.lanes|=u,pa|=u}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,hi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,gt.lanes|=a,pa|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ff(t){var e=jn(),n=e.queue;if(n===null)throw Error(J(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=t(a,o.action),o=o.next;while(o!==r);hi(a,e.memoizedState)||(mn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function tx(){}function nx(t,e){var n=gt,i=jn(),r=e(),a=!hi(i.memoizedState,r);if(a&&(i.memoizedState=r,mn=!0),i=i.queue,Gp(ax.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,zs(9,rx.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(J(349));ha&30||ix(n,e,r)}return r}function ix(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&sx(t)}function ax(t,e,n){return n(function(){ox(e)&&sx(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function sx(t){var e=qi(t,1);e!==null&&ui(e,t,1,-1)}function kg(t){var e=_i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fs,lastRenderedState:t},e.queue=t,t=t.dispatch=sw.bind(null,gt,t),[e.memoizedState,t]}function zs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lx(){return jn().memoizedState}function xc(t,e,n,i){var r=_i();gt.flags|=t,r.memoizedState=zs(1|e,n,void 0,i===void 0?null:i)}function xu(t,e,n,i){var r=jn();i=i===void 0?null:i;var a=void 0;if(Ct!==null){var o=Ct.memoizedState;if(a=o.destroy,i!==null&&zp(i,o.deps)){r.memoizedState=zs(e,n,a,i);return}}gt.flags|=t,r.memoizedState=zs(1|e,n,a,i)}function Fg(t,e){return xc(8390656,8,t,e)}function Gp(t,e){return xu(2048,8,t,e)}function cx(t,e){return xu(4,2,t,e)}function ux(t,e){return xu(4,4,t,e)}function fx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dx(t,e,n){return n=n!=null?n.concat([t]):null,xu(4,4,fx.bind(null,e,t),n)}function Vp(){}function hx(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function px(t,e){var n=jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mx(t,e,n){return ha&21?(hi(n,e)||(n=_1(),gt.lanes|=n,pa|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function aw(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Of.transition;Of.transition={};try{t(!1),e()}finally{Je=n,Of.transition=i}}function gx(){return jn().memoizedState}function ow(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},vx(t))_x(e,n);else if(n=Y1(t,e,n,i),n!==null){var r=cn();ui(n,t,i,r),xx(n,e,i)}}function sw(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(vx(t))_x(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,hi(s,o)){var l=e.interleaved;l===null?(r.next=r,Up(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Y1(t,e,r,i),n!==null&&(r=cn(),ui(n,t,i,r),xx(n,e,i))}}function vx(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function _x(t,e){gs=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yp(t,n)}}var qc={readContext:Wn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},lw={readContext:Wn,useCallback:function(t,e){return _i().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:Fg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xc(4194308,4,fx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xc(4194308,4,t,e)},useInsertionEffect:function(t,e){return xc(4,2,t,e)},useMemo:function(t,e){var n=_i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=_i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ow.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=_i();return t={current:t},e.memoizedState=t},useState:kg,useDebugValue:Vp,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=kg(!1),e=t[0];return t=aw.bind(null,t[1]),_i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=_i();if(ft){if(n===void 0)throw Error(J(407));n=n()}else{if(n=e(),Ft===null)throw Error(J(349));ha&30||ix(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,Fg(ax.bind(null,i,a,t),[t]),i.flags|=2048,zs(9,rx.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=_i(),e=Ft.identifierPrefix;if(ft){var n=Hi,i=Bi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ks++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cw={readContext:Wn,useCallback:hx,useContext:Wn,useEffect:Gp,useImperativeHandle:dx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:kf,useRef:lx,useState:function(){return kf(Fs)},useDebugValue:Vp,useDeferredValue:function(t){var e=jn();return mx(e,Ct.memoizedState,t)},useTransition:function(){var t=kf(Fs)[0],e=jn().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1},uw={readContext:Wn,useCallback:hx,useContext:Wn,useEffect:Gp,useImperativeHandle:dx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:Ff,useRef:lx,useState:function(){return Ff(Fs)},useDebugValue:Vp,useDeferredValue:function(t){var e=jn();return Ct===null?e.memoizedState=t:mx(e,Ct.memoizedState,t)},useTransition:function(){var t=Ff(Fs)[0],e=jn().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1};function Mo(t,e){try{var n="",i=e;do n+=FM(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function zf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var fw=typeof WeakMap=="function"?WeakMap:Map;function yx(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Zc||(Zc=!0,Ah=i),vh(t,e)},n}function Sx(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vh(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function zg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new fw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bw.bind(null,t,e,n),e.then(t,t))}function Bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var dw=er.ReactCurrentOwner,mn=!1;function an(t,e,n,i){e.child=t===null?J1(e,null,n,i):yo(e,t.child,n,i)}function Gg(t,e,n,i,r){n=n.render;var a=e.ref;return uo(e,r),i=Bp(t,e,n,i,a,r),n=Hp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(ft&&n&&Cp(e),e.flags|=1,an(t,e,i,r),e.child)}function Vg(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Zp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,Mx(t,e,a,i,r)):(t=Ec(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ls,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=br(a,i),t.ref=e.ref,t.return=e,e.child=t}function Mx(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Ls(a,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return _h(t,e,n,i,r)}function Ex(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ja,Tn),Tn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,at(Ja,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,at(Ja,Tn),Tn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,at(Ja,Tn),Tn|=i;return an(t,e,r,n),e.child}function wx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _h(t,e,n,i,r){var a=_n(n)?fa:en.current;return a=_o(e,a),uo(e,r),n=Bp(t,e,n,i,a,r),i=Hp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(ft&&i&&Cp(e),e.flags|=1,an(t,e,n,r),e.child)}function Wg(t,e,n,i,r){if(_n(n)){var a=!0;Hc(e)}else a=!1;if(uo(e,r),e.stateNode===null)yc(t,e),Z1(e,n,i),gh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=_n(n)?fa:en.current,c=_o(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&Ng(e,o,i,c),ur=!1;var d=e.memoizedState;o.state=d,$c(e,i,o,r),l=e.memoizedState,s!==i||d!==l||vn.current||ur?(typeof u=="function"&&(mh(e,n,u,i),l=e.memoizedState),(s=ur||Ug(e,n,s,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,q1(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:ni(e.type,s),o.props=c,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=_n(n)?fa:en.current,l=_o(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||d!==l)&&Ng(e,o,i,l),ur=!1,d=e.memoizedState,o.state=d,$c(e,i,o,r);var _=e.memoizedState;s!==f||d!==_||vn.current||ur?(typeof p=="function"&&(mh(e,n,p,i),_=e.memoizedState),(c=ur||Ug(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return xh(t,e,n,i,a,r)}function xh(t,e,n,i,r,a){wx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Rg(e,n,!1),Ki(t,e,a);i=e.stateNode,dw.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=yo(e,t.child,null,a),e.child=yo(e,null,s,a)):an(t,e,s,a),e.memoizedState=i.state,r&&Rg(e,n,!0),e.child}function bx(t){var e=t.stateNode;e.pendingContext?Cg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cg(t,e.context,!1),Op(t,e.containerInfo)}function jg(t,e,n,i,r){return xo(),Pp(r),e.flags|=256,an(t,e,n,i),e.child}var yh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tx(t,e,n){var i=e.pendingProps,r=mt.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),at(mt,r&1),t===null)return hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Mu(o,i,0,null),t=ia(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Sh(n),e.memoizedState=yh,t):Wp(e,o));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return hw(t,e,o,i,s,r,n);if(a){a=i.fallback,o=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=br(s,a):(a=ia(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=yh,i}return a=t.child,t=a.sibling,i=br(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wp(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Tl(t,e,n,i){return i!==null&&Pp(i),yo(e,t.child,null,n),t=Wp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hw(t,e,n,i,r,a,o){if(n)return e.flags&256?(e.flags&=-257,i=zf(Error(J(422))),Tl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Mu({mode:"visible",children:i.children},r,0,null),a=ia(a,r,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&yo(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=yh,a);if(!(e.mode&1))return Tl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(J(419)),i=zf(a,i,void 0),Tl(t,e,o,i)}if(s=(o&t.childLanes)!==0,mn||s){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,qi(t,r),ui(i,t,r,-1))}return Kp(),i=zf(Error(J(421))),Tl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Tw.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,Rn=Sr(r.nextSibling),Pn=e,ft=!0,ri=null,t!==null&&(Fn[zn++]=Bi,Fn[zn++]=Hi,Fn[zn++]=da,Bi=t.id,Hi=t.overflow,da=e),e=Wp(e,i.children),e.flags|=4096,e)}function $g(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ph(t.return,e,n)}function Bf(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function Ax(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(an(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$g(t,n,e);else if(t.tag===19)$g(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(at(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Xc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Bf(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Xc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Bf(e,!0,n,null,a);break;case"together":Bf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),pa|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(J(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pw(t,e,n){switch(e.tag){case 3:bx(e),xo();break;case 5:ex(e);break;case 1:_n(e.type)&&Hc(e);break;case 4:Op(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;at(Wc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(at(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?Tx(t,e,n):(at(mt,mt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);at(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ax(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),at(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ex(t,e,n)}return Ki(t,e,n)}var Cx,Mh,Rx,Px;Cx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mh=function(){};Rx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(Ti.current);var a=null;switch(n){case"input":r=Wd(t,r),i=Wd(t,i),a=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),a=[];break;case"textarea":r=Xd(t,r),i=Xd(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=zc)}qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var s=r[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ws.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ws.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ot("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};Px=function(t,e,n,i){n!==i&&(e.flags|=4)};function Zo(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function mw(t,e,n){var i=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return _n(e.type)&&Bc(),Yt(e),null;case 3:return i=e.stateNode,So(),ct(vn),ct(en),Fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Ph(ri),ri=null))),Mh(t,e),Yt(e),null;case 5:kp(e);var r=Qr(Os.current);if(n=e.type,t!==null&&e.stateNode!=null)Rx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(J(166));return Yt(e),null}if(t=Qr(Ti.current),wl(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[Mi]=e,i[Us]=a,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ss.length;r++)ot(ss[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":tg(i,a),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},ot("invalid",i);break;case"textarea":ig(i,a),ot("invalid",i)}qd(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&El(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&El(i.textContent,s,t),r=["children",""+s]):ws.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ot("scroll",i)}switch(n){case"input":ml(i),ng(i,a,!0);break;case"textarea":ml(i),rg(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=zc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Mi]=e,t[Us]=i,Cx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kd(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ss.length;r++)ot(ss[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":tg(t,i),r=Wd(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":ig(t,i),r=Xd(t,i),ot("invalid",t);break;default:r=i}qd(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?o1(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&r1(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bs(t,l):typeof l=="number"&&bs(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ws.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ot("scroll",t):l!=null&&pp(t,a,l,o))}switch(n){case"input":ml(t),ng(t,i,!1);break;case"textarea":ml(t),rg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?oo(t,!!i.multiple,a,!1):i.defaultValue!=null&&oo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=zc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)Px(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(J(166));if(n=Qr(Os.current),Qr(Ti.current),wl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(a=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:El(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return Yt(e),null;case 13:if(ct(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&Rn!==null&&e.mode&1&&!(e.flags&128))X1(),xo(),e.flags|=98560,a=!1;else if(a=wl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(J(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(J(317));a[Mi]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),a=!1}else ri!==null&&(Ph(ri),ri=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Kp())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return So(),Mh(t,e),t===null&&Is(e.stateNode.containerInfo),Yt(e),null;case 10:return Dp(e.type._context),Yt(e),null;case 17:return _n(e.type)&&Bc(),Yt(e),null;case 19:if(ct(mt),a=e.memoizedState,a===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)Zo(a,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xc(t),o!==null){for(e.flags|=128,Zo(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return at(mt,mt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Et()>Eo&&(e.flags|=128,i=!0,Zo(a,!1),e.lanes=4194304)}else{if(!i)if(t=Xc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ft)return Yt(e),null}else 2*Et()-a.renderingStartTime>Eo&&n!==1073741824&&(e.flags|=128,i=!0,Zo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Et(),e.sibling=null,n=mt.current,at(mt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return qp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(J(156,e.tag))}function gw(t,e){switch(Rp(e),e.tag){case 1:return _n(e.type)&&Bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return So(),ct(vn),ct(en),Fp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kp(e),null;case 13:if(ct(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(J(340));xo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(mt),null;case 4:return So(),null;case 10:return Dp(e.type._context),null;case 22:case 23:return qp(),null;case 24:return null;default:return null}}var Al=!1,Zt=!1,vw=typeof WeakSet=="function"?WeakSet:Set,de=null;function Qa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function Eh(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Xg=!1;function _w(t,e){if(oh=Oc,t=U1(),Ap(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(s=o+r),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(s=o),d===a&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sh={focusedElem:t,selectionRange:n},Oc=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?x:ni(e.type,x),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(J(163))}}catch(y){yt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return _=Xg,Xg=!1,_}function vs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&Eh(e,n,a)}r=r.next}while(r!==i)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lx(t){var e=t.alternate;e!==null&&(t.alternate=null,Lx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[Us],delete e[uh],delete e[ew],delete e[tw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function Yg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zc));else if(i!==4&&(t=t.child,t!==null))for(bh(t,e,n),t=t.sibling;t!==null;)bh(t,e,n),t=t.sibling}function Th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var Ht=null,ii=!1;function nr(t,e,n){for(n=n.child;n!==null;)Dx(t,e,n),n=n.sibling}function Dx(t,e,n){if(bi&&typeof bi.onCommitFiberUnmount=="function")try{bi.onCommitFiberUnmount(du,n)}catch{}switch(n.tag){case 5:Zt||Qa(n,e);case 6:var i=Ht,r=ii;Ht=null,nr(t,e,n),Ht=i,ii=r,Ht!==null&&(ii?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(ii?(t=Ht,n=n.stateNode,t.nodeType===8?Df(t.parentNode,n):t.nodeType===1&&Df(t,n),Rs(t)):Df(Ht,n.stateNode));break;case 4:i=Ht,r=ii,Ht=n.stateNode.containerInfo,ii=!0,nr(t,e,n),Ht=i,ii=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Eh(n,e,o),r=r.next}while(r!==i)}nr(t,e,n);break;case 1:if(!Zt&&(Qa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){yt(n,e,s)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,nr(t,e,n),Zt=i):nr(t,e,n);break;default:nr(t,e,n)}}function qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vw),e.forEach(function(i){var r=Aw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ht=s.stateNode,ii=!1;break e;case 3:Ht=s.stateNode.containerInfo,ii=!0;break e;case 4:Ht=s.stateNode.containerInfo,ii=!0;break e}s=s.return}if(Ht===null)throw Error(J(160));Dx(a,o,r),Ht=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ux(e,t),e=e.sibling}function Ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),vi(t),i&4){try{vs(3,t,t.return),yu(3,t)}catch(x){yt(t,t.return,x)}try{vs(5,t,t.return)}catch(x){yt(t,t.return,x)}}break;case 1:Zn(e,t),vi(t),i&512&&n!==null&&Qa(n,n.return);break;case 5:if(Zn(e,t),vi(t),i&512&&n!==null&&Qa(n,n.return),t.flags&32){var r=t.stateNode;try{bs(r,"")}catch(x){yt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&t1(r,a),Kd(s,o);var c=Kd(s,a);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?o1(r,f):u==="dangerouslySetInnerHTML"?r1(r,f):u==="children"?bs(r,f):pp(r,u,f,c)}switch(s){case"input":jd(r,a);break;case"textarea":n1(r,a);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?oo(r,!!a.multiple,p,!1):d!==!!a.multiple&&(a.defaultValue!=null?oo(r,!!a.multiple,a.defaultValue,!0):oo(r,!!a.multiple,a.multiple?[]:"",!1))}r[Us]=a}catch(x){yt(t,t.return,x)}}break;case 6:if(Zn(e,t),vi(t),i&4){if(t.stateNode===null)throw Error(J(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(x){yt(t,t.return,x)}}break;case 3:if(Zn(e,t),vi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Rs(e.containerInfo)}catch(x){yt(t,t.return,x)}break;case 4:Zn(e,t),vi(t);break;case 13:Zn(e,t),vi(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Xp=Et())),i&4&&qg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||u,Zn(e,t),Zt=c):Zn(e,t),vi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(de=t,u=t.child;u!==null;){for(f=de=u;de!==null;){switch(d=de,p=d.child,d.tag){case 0:case 11:case 14:case 15:vs(4,d,d.return);break;case 1:Qa(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){yt(i,n,x)}}break;case 5:Qa(d,d.return);break;case 22:if(d.memoizedState!==null){Zg(f);continue}}p!==null?(p.return=d,de=p):Zg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=a1("display",o))}catch(x){yt(t,t.return,x)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){yt(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Zn(e,t),vi(t),i&4&&qg(t);break;case 21:break;default:Zn(e,t),vi(t)}}function vi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(J(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(bs(r,""),i.flags&=-33);var a=Yg(t);Th(t,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Yg(t);bh(t,s,o);break;default:throw Error(J(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xw(t,e,n){de=t,Nx(t)}function Nx(t,e,n){for(var i=(t.mode&1)!==0;de!==null;){var r=de,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Al;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Zt;s=Al;var c=Zt;if(Al=o,(Zt=l)&&!c)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Qg(r):l!==null?(l.return=o,de=l):Qg(r);for(;a!==null;)de=a,Nx(a),a=a.sibling;de=r,Al=s,Zt=c}Kg(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,de=a):Kg(t)}}function Kg(t){for(;de!==null;){var e=de;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||yu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ni(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Dg(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Rs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(J(163))}Zt||e.flags&512&&wh(e)}catch(d){yt(e,e.return,d)}}if(e===t){de=null;break}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}}function Zg(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var n=e.sibling;if(n!==null){n.return=e.return,de=n;break}de=e.return}}function Qg(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var a=e.return;try{wh(e)}catch(l){yt(e,a,l)}break;case 5:var o=e.return;try{wh(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===t){de=null;break}var s=e.sibling;if(s!==null){s.return=e.return,de=s;break}de=e.return}}var yw=Math.ceil,Kc=er.ReactCurrentDispatcher,jp=er.ReactCurrentOwner,Gn=er.ReactCurrentBatchConfig,qe=0,Ft=null,At=null,Vt=0,Tn=0,Ja=Or(0),Rt=0,Bs=null,pa=0,Su=0,$p=0,_s=null,pn=null,Xp=0,Eo=1/0,ki=null,Zc=!1,Ah=null,Er=null,Cl=!1,pr=null,Qc=0,xs=0,Ch=null,Sc=-1,Mc=0;function cn(){return qe&6?Et():Sc!==-1?Sc:Sc=Et()}function wr(t){return t.mode&1?qe&2&&Vt!==0?Vt&-Vt:iw.transition!==null?(Mc===0&&(Mc=_1()),Mc):(t=Je,t!==0||(t=window.event,t=t===void 0?16:b1(t.type)),t):1}function ui(t,e,n,i){if(50<xs)throw xs=0,Ch=null,Error(J(185));el(t,n,i),(!(qe&2)||t!==Ft)&&(t===Ft&&(!(qe&2)&&(Su|=n),Rt===4&&dr(t,Vt)),xn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Eo=Et()+500,vu&&kr()))}function xn(t,e){var n=t.callbackNode;iE(t,e);var i=Nc(t,t===Ft?Vt:0);if(i===0)n!==null&&sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&sg(n),e===1)t.tag===0?nw(Jg.bind(null,t)):W1(Jg.bind(null,t)),QE(function(){!(qe&6)&&kr()}),n=null;else{switch(x1(i)){case 1:n=xp;break;case 4:n=g1;break;case 16:n=Uc;break;case 536870912:n=v1;break;default:n=Uc}n=Vx(n,Ox.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ox(t,e){if(Sc=-1,Mc=0,qe&6)throw Error(J(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=Nc(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Jc(t,i);else{e=i;var r=qe;qe|=2;var a=Fx();(Ft!==t||Vt!==e)&&(ki=null,Eo=Et()+500,na(t,e));do try{Ew();break}catch(s){kx(t,s)}while(1);Ip(),Kc.current=a,qe=r,At!==null?e=0:(Ft=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=th(t),r!==0&&(i=r,e=Rh(t,r))),e===1)throw n=Bs,na(t,0),dr(t,i),xn(t,Et()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Sw(r)&&(e=Jc(t,i),e===2&&(a=th(t),a!==0&&(i=a,e=Rh(t,a))),e===1))throw n=Bs,na(t,0),dr(t,i),xn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(J(345));case 2:Xr(t,pn,ki);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Xp+500-Et(),10<e)){if(Nc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ch(Xr.bind(null,t,pn,ki),e);break}Xr(t,pn,ki);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ci(i);a=1<<o,o=e[o],o>r&&(r=o),i&=~a}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*yw(i/1960))-i,10<i){t.timeoutHandle=ch(Xr.bind(null,t,pn,ki),i);break}Xr(t,pn,ki);break;case 5:Xr(t,pn,ki);break;default:throw Error(J(329))}}}return xn(t,Et()),t.callbackNode===n?Ox.bind(null,t):null}function Rh(t,e){var n=_s;return t.current.memoizedState.isDehydrated&&(na(t,e).flags|=256),t=Jc(t,e),t!==2&&(e=pn,pn=n,e!==null&&Ph(e)),t}function Ph(t){pn===null?pn=t:pn.push.apply(pn,t)}function Sw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!hi(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~$p,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function Jg(t){if(qe&6)throw Error(J(327));fo();var e=Nc(t,0);if(!(e&1))return xn(t,Et()),null;var n=Jc(t,e);if(t.tag!==0&&n===2){var i=th(t);i!==0&&(e=i,n=Rh(t,i))}if(n===1)throw n=Bs,na(t,0),dr(t,e),xn(t,Et()),n;if(n===6)throw Error(J(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,pn,ki),xn(t,Et()),null}function Yp(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Eo=Et()+500,vu&&kr())}}function ma(t){pr!==null&&pr.tag===0&&!(qe&6)&&fo();var e=qe;qe|=1;var n=Gn.transition,i=Je;try{if(Gn.transition=null,Je=1,t)return t()}finally{Je=i,Gn.transition=n,qe=e,!(qe&6)&&kr()}}function qp(){Tn=Ja.current,ct(Ja)}function na(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZE(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Rp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Bc();break;case 3:So(),ct(vn),ct(en),Fp();break;case 5:kp(i);break;case 4:So();break;case 13:ct(mt);break;case 19:ct(mt);break;case 10:Dp(i.type._context);break;case 22:case 23:qp()}n=n.return}if(Ft=t,At=t=br(t.current,null),Vt=Tn=e,Rt=0,Bs=null,$p=Su=pa=0,pn=_s=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}Zr=null}return t}function kx(t,e){do{var n=At;try{if(Ip(),_c.current=qc,Yc){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Yc=!1}if(ha=0,Ot=Ct=gt=null,gs=!1,ks=0,jp.current=null,n===null||n.return===null){Rt=1,Bs=e,At=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=Vt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=s,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Bg(o);if(p!==null){p.flags&=-257,Hg(p,o,s,a,e),p.mode&1&&zg(a,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){zg(a,c,e),Kp();break e}l=Error(J(426))}}else if(ft&&s.mode&1){var g=Bg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Hg(g,o,s,a,e),Pp(Mo(l,s));break e}}a=l=Mo(l,s),Rt!==4&&(Rt=2),_s===null?_s=[a]:_s.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var h=yx(a,l,e);Ig(a,h);break e;case 1:s=l;var v=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Er===null||!Er.has(m)))){a.flags|=65536,e&=-e,a.lanes|=e;var y=Sx(a,s,e);Ig(a,y);break e}}a=a.return}while(a!==null)}Bx(n)}catch(S){e=S,At===n&&n!==null&&(At=n=n.return);continue}break}while(1)}function Fx(){var t=Kc.current;return Kc.current=qc,t===null?qc:t}function Kp(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(pa&268435455)&&!(Su&268435455)||dr(Ft,Vt)}function Jc(t,e){var n=qe;qe|=2;var i=Fx();(Ft!==t||Vt!==e)&&(ki=null,na(t,e));do try{Mw();break}catch(r){kx(t,r)}while(1);if(Ip(),qe=n,Kc.current=i,At!==null)throw Error(J(261));return Ft=null,Vt=0,Rt}function Mw(){for(;At!==null;)zx(At)}function Ew(){for(;At!==null&&!YM();)zx(At)}function zx(t){var e=Gx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?Bx(t):At=e,jp.current=null}function Bx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gw(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,At=null;return}}else if(n=mw(n,e,Tn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Rt===0&&(Rt=5)}function Xr(t,e,n){var i=Je,r=Gn.transition;try{Gn.transition=null,Je=1,ww(t,e,n,i)}finally{Gn.transition=r,Je=i}return null}function ww(t,e,n,i){do fo();while(pr!==null);if(qe&6)throw Error(J(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(J(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(rE(t,a),t===Ft&&(At=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cl||(Cl=!0,Vx(Uc,function(){return fo(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Gn.transition,Gn.transition=null;var o=Je;Je=1;var s=qe;qe|=4,jp.current=null,_w(t,n),Ux(n,t),WE(sh),Oc=!!oh,sh=oh=null,t.current=n,xw(n),qM(),qe=s,Je=o,Gn.transition=a}else t.current=n;if(Cl&&(Cl=!1,pr=t,Qc=r),a=t.pendingLanes,a===0&&(Er=null),QM(n.stateNode),xn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Zc)throw Zc=!1,t=Ah,Ah=null,t;return Qc&1&&t.tag!==0&&fo(),a=t.pendingLanes,a&1?t===Ch?xs++:(xs=0,Ch=t):xs=0,kr(),null}function fo(){if(pr!==null){var t=x1(Qc),e=Gn.transition,n=Je;try{if(Gn.transition=null,Je=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,Qc=0,qe&6)throw Error(J(331));var r=qe;for(qe|=4,de=t.current;de!==null;){var a=de,o=a.child;if(de.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(de=c;de!==null;){var u=de;switch(u.tag){case 0:case 11:case 15:vs(8,u,a)}var f=u.child;if(f!==null)f.return=u,de=f;else for(;de!==null;){u=de;var d=u.sibling,p=u.return;if(Lx(u),u===c){de=null;break}if(d!==null){d.return=p,de=d;break}de=p}}}var _=a.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}de=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,de=o;else e:for(;de!==null;){if(a=de,a.flags&2048)switch(a.tag){case 0:case 11:case 15:vs(9,a,a.return)}var h=a.sibling;if(h!==null){h.return=a.return,de=h;break e}de=a.return}}var v=t.current;for(de=v;de!==null;){o=de;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,de=m;else e:for(o=v;de!==null;){if(s=de,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:yu(9,s)}}catch(S){yt(s,s.return,S)}if(s===o){de=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,de=y;break e}de=s.return}}if(qe=r,kr(),bi&&typeof bi.onPostCommitFiberRoot=="function")try{bi.onPostCommitFiberRoot(du,t)}catch{}i=!0}return i}finally{Je=n,Gn.transition=e}}return!1}function e0(t,e,n){e=Mo(n,e),e=yx(t,e,1),t=Mr(t,e,1),e=cn(),t!==null&&(el(t,1,e),xn(t,e))}function yt(t,e,n){if(t.tag===3)e0(t,t,n);else for(;e!==null;){if(e.tag===3){e0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=Mo(n,t),t=Sx(e,t,1),e=Mr(e,t,1),t=cn(),e!==null&&(el(e,1,t),xn(e,t));break}}e=e.return}}function bw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>Et()-Xp?na(t,0):$p|=n),xn(t,e)}function Hx(t,e){e===0&&(t.mode&1?(e=_l,_l<<=1,!(_l&130023424)&&(_l=4194304)):e=1);var n=cn();t=qi(t,e),t!==null&&(el(t,e,n),xn(t,n))}function Tw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hx(t,n)}function Aw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(J(314))}i!==null&&i.delete(e),Hx(t,n)}var Gx;Gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,pw(t,e,n);mn=!!(t.flags&131072)}else mn=!1,ft&&e.flags&1048576&&j1(e,Vc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;yc(t,e),t=e.pendingProps;var r=_o(e,en.current);uo(e,n),r=Bp(null,e,i,t,r,n);var a=Hp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(a=!0,Hc(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Np(e),r.updater=_u,e.stateNode=r,r._reactInternals=e,gh(e,i,t,n),e=xh(null,e,i,!0,a,n)):(e.tag=0,ft&&a&&Cp(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(yc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Rw(i),t=ni(i,t),r){case 0:e=_h(null,e,i,t,n);break e;case 1:e=Wg(null,e,i,t,n);break e;case 11:e=Gg(null,e,i,t,n);break e;case 14:e=Vg(null,e,i,ni(i.type,t),n);break e}throw Error(J(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),_h(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Wg(t,e,i,r,n);case 3:e:{if(bx(e),t===null)throw Error(J(387));i=e.pendingProps,a=e.memoizedState,r=a.element,q1(t,e),$c(e,i,null,n);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Mo(Error(J(423)),e),e=jg(t,e,i,n,r);break e}else if(i!==r){r=Mo(Error(J(424)),e),e=jg(t,e,i,n,r);break e}else for(Rn=Sr(e.stateNode.containerInfo.firstChild),Pn=e,ft=!0,ri=null,n=J1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xo(),i===r){e=Ki(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return ex(e),t===null&&hh(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,o=r.children,lh(i,r)?o=null:a!==null&&lh(i,a)&&(e.flags|=32),wx(t,e),an(t,e,o,n),e.child;case 6:return t===null&&hh(e),null;case 13:return Tx(t,e,n);case 4:return Op(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=yo(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),Gg(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,o=r.value,at(Wc,i._currentValue),i._currentValue=o,a!==null)if(hi(a.value,o)){if(a.children===r.children&&!vn.current){e=Ki(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ph(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(J(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ph(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=Wn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=ni(i,e.pendingProps),r=ni(i.type,r),Vg(t,e,i,r,n);case 15:return Mx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ni(i,r),yc(t,e),e.tag=1,_n(i)?(t=!0,Hc(e)):t=!1,uo(e,n),Z1(e,i,r),gh(e,i,r,n),xh(null,e,i,!0,t,n);case 19:return Ax(t,e,n);case 22:return Ex(t,e,n)}throw Error(J(156,e.tag))};function Vx(t,e){return m1(t,e)}function Cw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new Cw(t,e,n,i)}function Zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Rw(t){if(typeof t=="function")return Zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gp)return 11;if(t===vp)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ec(t,e,n,i,r,a){var o=2;if(i=t,typeof t=="function")Zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Va:return ia(n.children,r,a,e);case mp:o=8,r|=8;break;case Bd:return t=Hn(12,n,e,r|2),t.elementType=Bd,t.lanes=a,t;case Hd:return t=Hn(13,n,e,r),t.elementType=Hd,t.lanes=a,t;case Gd:return t=Hn(19,n,e,r),t.elementType=Gd,t.lanes=a,t;case Q_:return Mu(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K_:o=10;break e;case Z_:o=9;break e;case gp:o=11;break e;case vp:o=14;break e;case cr:o=16,i=null;break e}throw Error(J(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function ia(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Mu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=Q_,t.lanes=n,t.stateNode={isHidden:!1},t}function Hf(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Gf(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Pw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mf(0),this.expirationTimes=Mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qp(t,e,n,i,r,a,o,s,l){return t=new Pw(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Hn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Np(a),t}function Lw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ga,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wx(t){if(!t)return Cr;t=t._reactInternals;e:{if(Sa(t)!==t||t.tag!==1)throw Error(J(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(J(171))}if(t.tag===1){var n=t.type;if(_n(n))return V1(t,n,e)}return e}function jx(t,e,n,i,r,a,o,s,l){return t=Qp(n,i,!0,t,r,a,o,s,l),t.context=Wx(null),n=t.current,i=cn(),r=wr(n),a=Vi(i,r),a.callback=e??null,Mr(n,a,r),t.current.lanes=r,el(t,r,i),xn(t,i),t}function Eu(t,e,n,i){var r=e.current,a=cn(),o=wr(r);return n=Wx(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(r,e,o),t!==null&&(ui(t,r,o,a),vc(t,r,o)),o}function eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function t0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jp(t,e){t0(t,e),(t=t.alternate)&&t0(t,e)}function Iw(){return null}var $x=typeof reportError=="function"?reportError:function(t){console.error(t)};function em(t){this._internalRoot=t}wu.prototype.render=em.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(J(409));Eu(t,e,null,null)};wu.prototype.unmount=em.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ma(function(){Eu(null,t,null,null)}),e[Yi]=null}};function wu(t){this._internalRoot=t}wu.prototype.unstable_scheduleHydration=function(t){if(t){var e=M1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&w1(t)}};function tm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n0(){}function Dw(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=eu(o);a.call(c)}}var o=jx(e,i,t,0,null,!1,!1,"",n0);return t._reactRootContainer=o,t[Yi]=o.current,Is(t.nodeType===8?t.parentNode:t),ma(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var c=eu(l);s.call(c)}}var l=Qp(t,0,!1,null,null,!1,!1,"",n0);return t._reactRootContainer=l,t[Yi]=l.current,Is(t.nodeType===8?t.parentNode:t),ma(function(){Eu(e,l,n,i)}),l}function Tu(t,e,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=eu(o);s.call(l)}}Eu(e,o,t,r)}else o=Dw(n,e,t,r,i);return eu(o)}y1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(yp(e,n|1),xn(e,Et()),!(qe&6)&&(Eo=Et()+500,kr()))}break;case 13:ma(function(){var i=qi(t,1);if(i!==null){var r=cn();ui(i,t,1,r)}}),Jp(t,1)}};Sp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=cn();ui(e,t,134217728,n)}Jp(t,134217728)}};S1=function(t){if(t.tag===13){var e=wr(t),n=qi(t,e);if(n!==null){var i=cn();ui(n,t,e,i)}Jp(t,e)}};M1=function(){return Je};E1=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Qd=function(t,e,n){switch(e){case"input":if(jd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gu(i);if(!r)throw Error(J(90));e1(i),jd(i,r)}}}break;case"textarea":n1(t,n);break;case"select":e=n.value,e!=null&&oo(t,!!n.multiple,e,!1)}};c1=Yp;u1=ma;var Uw={usingClientEntryPoint:!1,Events:[nl,Xa,gu,s1,l1,Yp]},Qo={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Nw={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=h1(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||Iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{du=Rl.inject(Nw),bi=Rl}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;Dn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tm(e))throw Error(J(200));return Lw(t,e,null,n)};Dn.createRoot=function(t,e){if(!tm(t))throw Error(J(299));var n=!1,i="",r=$x;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qp(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,Is(t.nodeType===8?t.parentNode:t),new em(e)};Dn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(J(188)):(t=Object.keys(t).join(","),Error(J(268,t)));return t=h1(e),t=t===null?null:t.stateNode,t};Dn.flushSync=function(t){return ma(t)};Dn.hydrate=function(t,e,n){if(!bu(e))throw Error(J(200));return Tu(null,t,e,!0,n)};Dn.hydrateRoot=function(t,e,n){if(!tm(t))throw Error(J(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=$x;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jx(e,null,t,1,n??null,r,!1,a,o),t[Yi]=e.current,Is(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wu(e)};Dn.render=function(t,e,n){if(!bu(e))throw Error(J(200));return Tu(null,t,e,!1,n)};Dn.unmountComponentAtNode=function(t){if(!bu(t))throw Error(J(40));return t._reactRootContainer?(ma(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};Dn.unstable_batchedUpdates=Yp;Dn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!bu(n))throw Error(J(200));if(t==null||t._reactInternals===void 0)throw Error(J(38));return Tu(t,e,n,!1,i)};Dn.version="18.2.0-next-9e3b772b8-20220608";function Xx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xx)}catch(t){console.error(t)}}Xx(),j_.exports=Dn;var Yx=j_.exports,qx,i0=Yx;i0.createRoot,qx=i0.hydrateRoot;var Kx={exports:{}},Zx={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo=We;function Ow(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kw=typeof Object.is=="function"?Object.is:Ow,Fw=wo.useState,zw=wo.useEffect,Bw=wo.useLayoutEffect,Hw=wo.useDebugValue;function Gw(t,e){var n=e(),i=Fw({inst:{value:n,getSnapshot:e}}),r=i[0].inst,a=i[1];return Bw(function(){r.value=n,r.getSnapshot=e,Vf(r)&&a({inst:r})},[t,n,e]),zw(function(){return Vf(r)&&a({inst:r}),t(function(){Vf(r)&&a({inst:r})})},[t]),Hw(n),n}function Vf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kw(t,n)}catch{return!0}}function Vw(t,e){return e()}var Ww=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Vw:Gw;Zx.useSyncExternalStore=wo.useSyncExternalStore!==void 0?wo.useSyncExternalStore:Ww;Kx.exports=Zx;var jw=Kx.exports,Qx={exports:{}},Jx={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Au=We,$w=jw;function Xw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yw=typeof Object.is=="function"?Object.is:Xw,qw=$w.useSyncExternalStore,Kw=Au.useRef,Zw=Au.useEffect,Qw=Au.useMemo,Jw=Au.useDebugValue;Jx.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var a=Kw(null);if(a.current===null){var o={hasValue:!1,value:null};a.current=o}else o=a.current;a=Qw(function(){function l(p){if(!c){if(c=!0,u=p,p=i(p),r!==void 0&&o.hasValue){var _=o.value;if(r(_,p))return f=_}return f=p}if(_=f,Yw(u,p))return _;var x=i(p);return r!==void 0&&r(_,x)?_:(u=p,f=x)}var c=!1,u,f,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var s=qw(t,a[0],a[1]);return Zw(function(){o.hasValue=!0,o.value=s},[s]),Jw(s),s};Qx.exports=Jx;var e2=Qx.exports;function t2(t){t()}let ey=t2;const n2=t=>ey=t,i2=()=>ey,r0=Symbol.for(`react-redux-context-${We.version}`),a0=globalThis;function r2(){let t=a0[r0];return t||(t=We.createContext(null),a0[r0]=t),t}const Rr=new Proxy({},new Proxy({},{get(t,e){const n=r2();return(i,...r)=>Reflect[e](n,...r)}}));function nm(t=Rr){return function(){return We.useContext(t)}}const ty=nm(),a2=()=>{throw new Error("uSES not initialized!")};let ny=a2;const o2=t=>{ny=t},s2=(t,e)=>t===e;function l2(t=Rr){const e=t===Rr?ty:nm(t);return function(i,r={}){const{equalityFn:a=s2,stabilityCheck:o=void 0,noopCheck:s=void 0}=typeof r=="function"?{equalityFn:r}:r,{store:l,subscription:c,getServerState:u,stabilityCheck:f,noopCheck:d}=e();We.useRef(!0);const p=We.useCallback({[i.name](x){return i(x)}}[i.name],[i,f,o]),_=ny(c.addNestedSub,l.getState,u||l.getState,p,a);return We.useDebugValue(_),_}}const Wi=l2();var iy={exports:{}},et={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zt=typeof Symbol=="function"&&Symbol.for,im=zt?Symbol.for("react.element"):60103,rm=zt?Symbol.for("react.portal"):60106,Cu=zt?Symbol.for("react.fragment"):60107,Ru=zt?Symbol.for("react.strict_mode"):60108,Pu=zt?Symbol.for("react.profiler"):60114,Lu=zt?Symbol.for("react.provider"):60109,Iu=zt?Symbol.for("react.context"):60110,am=zt?Symbol.for("react.async_mode"):60111,Du=zt?Symbol.for("react.concurrent_mode"):60111,Uu=zt?Symbol.for("react.forward_ref"):60112,Nu=zt?Symbol.for("react.suspense"):60113,c2=zt?Symbol.for("react.suspense_list"):60120,Ou=zt?Symbol.for("react.memo"):60115,ku=zt?Symbol.for("react.lazy"):60116,u2=zt?Symbol.for("react.block"):60121,f2=zt?Symbol.for("react.fundamental"):60117,d2=zt?Symbol.for("react.responder"):60118,h2=zt?Symbol.for("react.scope"):60119;function Nn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case im:switch(t=t.type,t){case am:case Du:case Cu:case Pu:case Ru:case Nu:return t;default:switch(t=t&&t.$$typeof,t){case Iu:case Uu:case ku:case Ou:case Lu:return t;default:return e}}case rm:return e}}}function ry(t){return Nn(t)===Du}et.AsyncMode=am;et.ConcurrentMode=Du;et.ContextConsumer=Iu;et.ContextProvider=Lu;et.Element=im;et.ForwardRef=Uu;et.Fragment=Cu;et.Lazy=ku;et.Memo=Ou;et.Portal=rm;et.Profiler=Pu;et.StrictMode=Ru;et.Suspense=Nu;et.isAsyncMode=function(t){return ry(t)||Nn(t)===am};et.isConcurrentMode=ry;et.isContextConsumer=function(t){return Nn(t)===Iu};et.isContextProvider=function(t){return Nn(t)===Lu};et.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===im};et.isForwardRef=function(t){return Nn(t)===Uu};et.isFragment=function(t){return Nn(t)===Cu};et.isLazy=function(t){return Nn(t)===ku};et.isMemo=function(t){return Nn(t)===Ou};et.isPortal=function(t){return Nn(t)===rm};et.isProfiler=function(t){return Nn(t)===Pu};et.isStrictMode=function(t){return Nn(t)===Ru};et.isSuspense=function(t){return Nn(t)===Nu};et.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Cu||t===Du||t===Pu||t===Ru||t===Nu||t===c2||typeof t=="object"&&t!==null&&(t.$$typeof===ku||t.$$typeof===Ou||t.$$typeof===Lu||t.$$typeof===Iu||t.$$typeof===Uu||t.$$typeof===f2||t.$$typeof===d2||t.$$typeof===h2||t.$$typeof===u2)};et.typeOf=Nn;iy.exports=et;var p2=iy.exports,ay=p2,m2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},g2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oy={};oy[ay.ForwardRef]=m2;oy[ay.Memo]=g2;var nt={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om=Symbol.for("react.element"),sm=Symbol.for("react.portal"),Fu=Symbol.for("react.fragment"),zu=Symbol.for("react.strict_mode"),Bu=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),v2=Symbol.for("react.server_context"),Vu=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),ju=Symbol.for("react.suspense_list"),$u=Symbol.for("react.memo"),Xu=Symbol.for("react.lazy"),_2=Symbol.for("react.offscreen"),sy;sy=Symbol.for("react.module.reference");function Yn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case om:switch(t=t.type,t){case Fu:case Bu:case zu:case Wu:case ju:return t;default:switch(t=t&&t.$$typeof,t){case v2:case Gu:case Vu:case Xu:case $u:case Hu:return t;default:return e}}case sm:return e}}}nt.ContextConsumer=Gu;nt.ContextProvider=Hu;nt.Element=om;nt.ForwardRef=Vu;nt.Fragment=Fu;nt.Lazy=Xu;nt.Memo=$u;nt.Portal=sm;nt.Profiler=Bu;nt.StrictMode=zu;nt.Suspense=Wu;nt.SuspenseList=ju;nt.isAsyncMode=function(){return!1};nt.isConcurrentMode=function(){return!1};nt.isContextConsumer=function(t){return Yn(t)===Gu};nt.isContextProvider=function(t){return Yn(t)===Hu};nt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===om};nt.isForwardRef=function(t){return Yn(t)===Vu};nt.isFragment=function(t){return Yn(t)===Fu};nt.isLazy=function(t){return Yn(t)===Xu};nt.isMemo=function(t){return Yn(t)===$u};nt.isPortal=function(t){return Yn(t)===sm};nt.isProfiler=function(t){return Yn(t)===Bu};nt.isStrictMode=function(t){return Yn(t)===zu};nt.isSuspense=function(t){return Yn(t)===Wu};nt.isSuspenseList=function(t){return Yn(t)===ju};nt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Fu||t===Bu||t===zu||t===Wu||t===ju||t===_2||typeof t=="object"&&t!==null&&(t.$$typeof===Xu||t.$$typeof===$u||t.$$typeof===Hu||t.$$typeof===Gu||t.$$typeof===Vu||t.$$typeof===sy||t.getModuleId!==void 0)};nt.typeOf=Yn;function x2(){const t=i2();let e=null,n=null;return{clear(){e=null,n=null},notify(){t(()=>{let i=e;for(;i;)i.callback(),i=i.next})},get(){let i=[],r=e;for(;r;)i.push(r),r=r.next;return i},subscribe(i){let r=!0,a=n={callback:i,next:null,prev:n};return a.prev?a.prev.next=a:e=a,function(){!r||e===null||(r=!1,a.next?a.next.prev=a.prev:n=a.prev,a.prev?a.prev.next=a.next:e=a.next)}}}}const o0={notify(){},get:()=>[]};function y2(t,e){let n,i=o0;function r(f){return l(),i.subscribe(f)}function a(){i.notify()}function o(){u.onStateChange&&u.onStateChange()}function s(){return!!n}function l(){n||(n=e?e.addNestedSub(o):t.subscribe(o),i=x2())}function c(){n&&(n(),n=void 0,i.clear(),i=o0)}const u={addNestedSub:r,notifyNestedSubs:a,handleChangeWrapper:o,isSubscribed:s,trySubscribe:l,tryUnsubscribe:c,getListeners:()=>i};return u}const S2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",M2=S2?We.useLayoutEffect:We.useEffect;function E2({store:t,context:e,children:n,serverState:i,stabilityCheck:r="once",noopCheck:a="once"}){const o=We.useMemo(()=>{const c=y2(t);return{store:t,subscription:c,getServerState:i?()=>i:void 0,stabilityCheck:r,noopCheck:a}},[t,i,r,a]),s=We.useMemo(()=>t.getState(),[t]);M2(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),s!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,s]);const l=e||Rr;return Ai.createElement(l.Provider,{value:o},n)}function ly(t=Rr){const e=t===Rr?ty:nm(t);return function(){const{store:i}=e();return i}}const w2=ly();function b2(t=Rr){const e=t===Rr?w2:ly(t);return function(){return e().dispatch}}const lm=b2();o2(e2.useSyncExternalStoreWithSelector);n2(Yx.unstable_batchedUpdates);function Hs(t){"@babel/helpers - typeof";return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hs(t)}function T2(t,e){if(Hs(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(Hs(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function A2(t){var e=T2(t,"string");return Hs(e)==="symbol"?e:String(e)}function C2(t,e,n){return e=A2(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function l0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?s0(Object(n),!0).forEach(function(i){C2(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function bn(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var c0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Wf=function(){return Math.random().toString(36).substring(7).split("").join(".")},u0={INIT:"@@redux/INIT"+Wf(),REPLACE:"@@redux/REPLACE"+Wf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Wf()}};function R2(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function cy(t,e,n){var i;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(bn(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(bn(1));return n(cy)(t,e)}if(typeof t!="function")throw new Error(bn(2));var r=t,a=e,o=[],s=o,l=!1;function c(){s===o&&(s=o.slice())}function u(){if(l)throw new Error(bn(3));return a}function f(x){if(typeof x!="function")throw new Error(bn(4));if(l)throw new Error(bn(5));var g=!0;return c(),s.push(x),function(){if(g){if(l)throw new Error(bn(6));g=!1,c();var v=s.indexOf(x);s.splice(v,1),o=null}}}function d(x){if(!R2(x))throw new Error(bn(7));if(typeof x.type>"u")throw new Error(bn(8));if(l)throw new Error(bn(9));try{l=!0,a=r(a,x)}finally{l=!1}for(var g=o=s,h=0;h<g.length;h++){var v=g[h];v()}return x}function p(x){if(typeof x!="function")throw new Error(bn(10));r=x,d({type:u0.REPLACE})}function _(){var x,g=f;return x={subscribe:function(v){if(typeof v!="object"||v===null)throw new Error(bn(11));function m(){v.next&&v.next(u())}m();var y=g(m);return{unsubscribe:y}}},x[c0]=function(){return this},x}return d({type:u0.INIT}),i={dispatch:d,subscribe:f,getState:u,replaceReducer:p},i[c0]=_,i}function uy(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(i){return i}:e.length===1?e[0]:e.reduce(function(i,r){return function(){return i(r.apply(void 0,arguments))}})}function P2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return function(){var r=i.apply(void 0,arguments),a=function(){throw new Error(bn(15))},o={getState:r.getState,dispatch:function(){return a.apply(void 0,arguments)}},s=e.map(function(l){return l(o)});return a=uy.apply(void 0,s)(r.dispatch),l0(l0({},r),{},{dispatch:a})}}}function fy(t){var e=function(i){var r=i.dispatch,a=i.getState;return function(o){return function(s){return typeof s=="function"?s(r,a,t):o(s)}}};return e}var dy=fy();dy.withExtraArgument=fy;const L2=dy;var Qt=function(){return Qt=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Qt.apply(this,arguments)};function tu(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,a;i<r;i++)(a||!(i in e))&&(a||(a=Array.prototype.slice.call(e,0,i)),a[i]=e[i]);return t.concat(a||Array.prototype.slice.call(e))}var st="-ms-",ys="-moz-",Ze="-webkit-",hy="comm",Yu="rule",cm="decl",I2="@import",py="@keyframes",D2="@layer",U2=Math.abs,um=String.fromCharCode,Lh=Object.assign;function N2(t,e){return kt(t,0)^45?(((e<<2^kt(t,0))<<2^kt(t,1))<<2^kt(t,2))<<2^kt(t,3):0}function my(t){return t.trim()}function Fi(t,e){return(t=e.exec(t))?t[0]:t}function Ne(t,e,n){return t.replace(e,n)}function wc(t,e){return t.indexOf(e)}function kt(t,e){return t.charCodeAt(e)|0}function bo(t,e,n){return t.slice(e,n)}function xi(t){return t.length}function gy(t){return t.length}function ls(t,e){return e.push(t),t}function O2(t,e){return t.map(e).join("")}function f0(t,e){return t.filter(function(n){return!Fi(n,e)})}var qu=1,To=1,vy=0,$n=0,Tt=0,ko="";function Ku(t,e,n,i,r,a,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:a,line:qu,column:To,length:o,return:"",siblings:s}}function lr(t,e){return Lh(Ku("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ea(t){for(;t.root;)t=lr(t.root,{children:[t]});ls(t,t.siblings)}function k2(){return Tt}function F2(){return Tt=$n>0?kt(ko,--$n):0,To--,Tt===10&&(To=1,qu--),Tt}function fi(){return Tt=$n<vy?kt(ko,$n++):0,To++,Tt===10&&(To=1,qu++),Tt}function ra(){return kt(ko,$n)}function bc(){return $n}function Zu(t,e){return bo(ko,t,e)}function Ih(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z2(t){return qu=To=1,vy=xi(ko=t),$n=0,[]}function B2(t){return ko="",t}function jf(t){return my(Zu($n-1,Dh(t===91?t+2:t===40?t+1:t)))}function H2(t){for(;(Tt=ra())&&Tt<33;)fi();return Ih(t)>2||Ih(Tt)>3?"":" "}function G2(t,e){for(;--e&&fi()&&!(Tt<48||Tt>102||Tt>57&&Tt<65||Tt>70&&Tt<97););return Zu(t,bc()+(e<6&&ra()==32&&fi()==32))}function Dh(t){for(;fi();)switch(Tt){case t:return $n;case 34:case 39:t!==34&&t!==39&&Dh(Tt);break;case 40:t===41&&Dh(t);break;case 92:fi();break}return $n}function V2(t,e){for(;fi()&&t+Tt!==47+10;)if(t+Tt===42+42&&ra()===47)break;return"/*"+Zu(e,$n-1)+"*"+um(t===47?t:fi())}function W2(t){for(;!Ih(ra());)fi();return Zu(t,$n)}function j2(t){return B2(Tc("",null,null,null,[""],t=z2(t),0,[0],t))}function Tc(t,e,n,i,r,a,o,s,l){for(var c=0,u=0,f=o,d=0,p=0,_=0,x=1,g=1,h=1,v=0,m="",y=r,S=a,w=i,E=m;g;)switch(_=v,v=fi()){case 40:if(_!=108&&kt(E,f-1)==58){wc(E+=Ne(jf(v),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=jf(v);break;case 9:case 10:case 13:case 32:E+=H2(_);break;case 92:E+=G2(bc()-1,7);continue;case 47:switch(ra()){case 42:case 47:ls($2(V2(fi(),bc()),e,n,l),l);break;default:E+="/"}break;case 123*x:s[c++]=xi(E)*h;case 125*x:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:h==-1&&(E=Ne(E,/\f/g,"")),p>0&&xi(E)-f&&ls(p>32?h0(E+";",i,n,f-1,l):h0(Ne(E," ","")+";",i,n,f-2,l),l);break;case 59:E+=";";default:if(ls(w=d0(E,e,n,c,u,r,s,m,y=[],S=[],f,a),a),v===123)if(u===0)Tc(E,e,w,w,y,a,f,s,S);else switch(d===99&&kt(E,3)===110?100:d){case 100:case 108:case 109:case 115:Tc(t,w,w,i&&ls(d0(t,w,w,0,0,r,s,m,r,y=[],f,S),S),r,S,f,s,i?y:S);break;default:Tc(E,w,w,w,[""],S,0,s,S)}}c=u=p=0,x=h=1,m=E="",f=o;break;case 58:f=1+xi(E),p=_;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&F2()==125)continue}switch(E+=um(v),v*x){case 38:h=u>0?1:(E+="\f",-1);break;case 44:s[c++]=(xi(E)-1)*h,h=1;break;case 64:ra()===45&&(E+=jf(fi())),d=ra(),u=f=xi(m=E+=W2(bc())),v++;break;case 45:_===45&&xi(E)==2&&(x=0)}}return a}function d0(t,e,n,i,r,a,o,s,l,c,u,f){for(var d=r-1,p=r===0?a:[""],_=gy(p),x=0,g=0,h=0;x<i;++x)for(var v=0,m=bo(t,d+1,d=U2(g=o[x])),y=t;v<_;++v)(y=my(g>0?p[v]+" "+m:Ne(m,/&\f/g,p[v])))&&(l[h++]=y);return Ku(t,e,n,r===0?Yu:s,l,c,u,f)}function $2(t,e,n,i){return Ku(t,e,n,hy,um(k2()),bo(t,2,-2),0,i)}function h0(t,e,n,i,r){return Ku(t,e,n,cm,bo(t,0,i),bo(t,i+1,-1),i,r)}function _y(t,e,n){switch(N2(t,e)){case 5103:return Ze+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ze+t+t;case 4789:return ys+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+t+ys+t+st+t+t;case 5936:switch(kt(t,e+11)){case 114:return Ze+t+st+Ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ze+t+st+Ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ze+t+st+Ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ze+t+st+t+t;case 6165:return Ze+t+st+"flex-"+t+t;case 5187:return Ze+t+Ne(t,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+st+"flex-$1$2")+t;case 5443:return Ze+t+st+"flex-item-"+Ne(t,/flex-|-self/g,"")+(Fi(t,/flex-|baseline/)?"":st+"grid-row-"+Ne(t,/flex-|-self/g,""))+t;case 4675:return Ze+t+st+"flex-line-pack"+Ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ze+t+st+Ne(t,"shrink","negative")+t;case 5292:return Ze+t+st+Ne(t,"basis","preferred-size")+t;case 6060:return Ze+"box-"+Ne(t,"-grow","")+Ze+t+st+Ne(t,"grow","positive")+t;case 4554:return Ze+Ne(t,/([^-])(transform)/g,"$1"+Ze+"$2")+t;case 6187:return Ne(Ne(Ne(t,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),t,"")+t;case 5495:case 3959:return Ne(t,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Ne(Ne(t,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+st+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ze+t+t;case 4200:if(!Fi(t,/flex-|baseline/))return st+"grid-column-align"+bo(t,e)+t;break;case 2592:case 3360:return st+Ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Fi(i.props,/grid-\w+-end/)})?~wc(t+(n=n[e].value),"span")?t:st+Ne(t,"-start","")+t+st+"grid-row-span:"+(~wc(n,"span")?Fi(n,/\d+/):+Fi(n,/\d+/)-+Fi(t,/\d+/))+";":st+Ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Fi(i.props,/grid-\w+-start/)})?t:st+Ne(Ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ne(t,/(.+)-inline(.+)/,Ze+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xi(t)-1-e>6)switch(kt(t,e+1)){case 109:if(kt(t,e+4)!==45)break;case 102:return Ne(t,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+ys+(kt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~wc(t,"stretch")?_y(Ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,a,o,s,l,c){return st+r+":"+a+c+(o?st+r+"-span:"+(s?l:+l-+a)+c:"")+t});case 4949:if(kt(t,e+6)===121)return Ne(t,":",":"+Ze)+t;break;case 6444:switch(kt(t,kt(t,14)===45?18:11)){case 120:return Ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(kt(t,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+st+"$2box$3")+t;case 100:return Ne(t,":",":"+st)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ne(t,"scroll-","scroll-snap-")+t}return t}function nu(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function X2(t,e,n,i){switch(t.type){case D2:if(t.children.length)break;case I2:case cm:return t.return=t.return||t.value;case hy:return"";case py:return t.return=t.value+"{"+nu(t.children,i)+"}";case Yu:if(!xi(t.value=t.props.join(",")))return""}return xi(n=nu(t.children,i))?t.return=t.value+"{"+n+"}":""}function Y2(t){var e=gy(t);return function(n,i,r,a){for(var o="",s=0;s<e;s++)o+=t[s](n,i,r,a)||"";return o}}function q2(t){return function(e){e.root||(e=e.return)&&t(e)}}function K2(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case cm:t.return=_y(t.value,t.length,n);return;case py:return nu([lr(t,{value:Ne(t.value,"@","@"+Ze)})],i);case Yu:if(t.length)return O2(n=t.props,function(r){switch(Fi(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ea(lr(t,{props:[Ne(r,/:(read-\w+)/,":"+ys+"$1")]})),Ea(lr(t,{props:[r]})),Lh(t,{props:f0(n,i)});break;case"::placeholder":Ea(lr(t,{props:[Ne(r,/:(plac\w+)/,":"+Ze+"input-$1")]})),Ea(lr(t,{props:[Ne(r,/:(plac\w+)/,":"+ys+"$1")]})),Ea(lr(t,{props:[Ne(r,/:(plac\w+)/,st+"input-$1")]})),Ea(lr(t,{props:[r]})),Lh(t,{props:f0(n,i)});break}return""})}}var Z2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ao=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",fm=typeof window<"u"&&"HTMLElement"in window,Q2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Qu=Object.freeze([]),Co=Object.freeze({});function J2(t,e,n){return n===void 0&&(n=Co),t.theme!==n.theme&&t.theme||e||n.theme}var xy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tb=/(^-|-$)/g;function p0(t){return t.replace(eb,"-").replace(tb,"")}var nb=/(a)(d)/gi,m0=function(t){return String.fromCharCode(t+(t>25?39:97))};function Uh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=m0(e%52)+n;return(m0(e%52)+n).replace(nb,"$1-$2")}var $f,eo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},yy=function(t){return eo(5381,t)};function ib(t){return Uh(yy(t)>>>0)}function rb(t){return t.displayName||t.name||"Component"}function Xf(t){return typeof t=="string"&&!0}var Sy=typeof Symbol=="function"&&Symbol.for,My=Sy?Symbol.for("react.memo"):60115,ab=Sy?Symbol.for("react.forward_ref"):60112,ob={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ey={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lb=(($f={})[ab]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$f[My]=Ey,$f);function g0(t){return("type"in(e=t)&&e.type.$$typeof)===My?Ey:"$$typeof"in t?lb[t.$$typeof]:ob;var e}var cb=Object.defineProperty,ub=Object.getOwnPropertyNames,v0=Object.getOwnPropertySymbols,fb=Object.getOwnPropertyDescriptor,db=Object.getPrototypeOf,_0=Object.prototype;function wy(t,e,n){if(typeof e!="string"){if(_0){var i=db(e);i&&i!==_0&&wy(t,i,n)}var r=ub(e);v0&&(r=r.concat(v0(e)));for(var a=g0(t),o=g0(e),s=0;s<r.length;++s){var l=r[s];if(!(l in sb||n&&n[l]||o&&l in o||a&&l in a)){var c=fb(e,l);try{cb(t,l,c)}catch{}}}}return t}function ga(t){return typeof t=="function"}function dm(t){return typeof t=="object"&&"styledComponentId"in t}function Jr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function x0(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=e?e+t[i]:t[i];return n}function Gs(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Nh(t,e,n){if(n===void 0&&(n=!1),!n&&!Gs(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Nh(t[i],e[i]);else if(Gs(e))for(var i in e)t[i]=Nh(t[i],e[i]);return t}function hm(t,e){Object.defineProperty(t,"toString",{value:e})}function va(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var hb=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,a=r;e>=a;)if((a<<=1)<0)throw va(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[e]++,s++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var a=i;a<r;a++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),a=r+i,o=r;o<a;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),Ac=new Map,iu=new Map,Yf=1,Pl=function(t){if(Ac.has(t))return Ac.get(t);for(;iu.has(Yf);)Yf++;var e=Yf++;return Ac.set(t,e),iu.set(e,t),e},pb=function(t,e){Ac.set(t,e),iu.set(e,t)},mb="style[".concat(Ao,"][").concat("data-styled-version",'="').concat("6.0.2",'"]'),gb=new RegExp("^".concat(Ao,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),vb=function(t,e,n){for(var i,r=n.split(","),a=0,o=r.length;a<o;a++)(i=r[a])&&t.registerName(e,i)},_b=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],a=0,o=i.length;a<o;a++){var s=i[a].trim();if(s){var l=s.match(gb);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(pb(u,c),vb(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(s)}}};function xb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var by=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(s){var l=Array.from(s.querySelectorAll("style[".concat(Ao,"]")));return l[l.length-1]}(n),a=r!==void 0?r.nextSibling:null;i.setAttribute(Ao,"active"),i.setAttribute("data-styled-version","6.0.2");var o=xb();return o&&i.setAttribute("nonce",o),n.insertBefore(i,a),i},yb=function(){function t(e){this.element=by(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,a=i.length;r<a;r++){var o=i[r];if(o.ownerNode===n)return o}throw va(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Sb=function(){function t(e){this.element=by(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Mb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),y0=fm,Eb={isServer:!fm,useCSSOMInjection:!Q2},Ty=function(){function t(e,n,i){e===void 0&&(e=Co),n===void 0&&(n={});var r=this;this.options=Qt(Qt({},Eb),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&fm&&y0&&(y0=!1,function(a){for(var o=document.querySelectorAll(mb),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(Ao)!=="active"&&(_b(a,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),hm(this,function(){return function(a){for(var o=a.getTag(),s=o.length,l="",c=function(f){var d=function(h){return iu.get(h)}(f);if(d===void 0)return"continue";var p=a.names.get(d),_=o.getGroup(f);if(p===void 0||_.length===0)return"continue";var x="".concat(Ao,".g").concat(f,'[id="').concat(d,'"]'),g="";p!==void 0&&p.forEach(function(h){h.length>0&&(g+="".concat(h,","))}),l+="".concat(_).concat(x,'{content:"').concat(g,'"}').concat(`/*!sc*/
`)},u=0;u<s;u++)c(u);return l}(r)})}return t.registerId=function(e){return Pl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Qt(Qt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new Mb(r):i?new yb(r):new Sb(r)}(this.options),new hb(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Pl(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Pl(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Pl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),wb=/&/g,bb=/^\s*\/\/.*$/gm;function Ay(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ay(n.children,e)),n})}function Tb(t){var e,n,i,r=t===void 0?Co:t,a=r.options,o=a===void 0?Co:a,s=r.plugins,l=s===void 0?Qu:s,c=function(d,p,_){return _===n||_.startsWith(n)&&_.endsWith(n)&&_.replaceAll(n,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===Yu&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(wb,n).replace(i,c))}),o.prefix&&u.push(K2),u.push(X2);var f=function(d,p,_,x){p===void 0&&(p=""),_===void 0&&(_=""),x===void 0&&(x="&"),e=x,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var g=d.replace(bb,""),h=j2(_||p?"".concat(_," ").concat(p," { ").concat(g," }"):g);o.namespace&&(h=Ay(h,o.namespace));var v=[];return nu(h,Y2(u.concat(q2(function(m){return v.push(m)})))),v};return f.hash=l.length?l.reduce(function(d,p){return p.name||va(15),eo(d,p.name)},5381).toString():"",f}var Ab=new Ty,Oh=Tb(),Cy=Ai.createContext({shouldForwardProp:void 0,styleSheet:Ab,stylis:Oh});Cy.Consumer;Ai.createContext(void 0);function S0(){return We.useContext(Cy)}var Cb=function(){function t(e,n){var i=this;this.inject=function(r,a){a===void 0&&(a=Oh);var o=i.name+a.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,a(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,hm(this,function(){throw va(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Oh),this.name+e.hash},t}(),Rb=function(t){return t>="A"&&t<="Z"};function M0(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;Rb(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var Ry=function(t){return t==null||t===!1||t===""},Py=function(t){var e,n,i=[];for(var r in t){var a=t[r];t.hasOwnProperty(r)&&!Ry(a)&&(Array.isArray(a)&&a.isCss||ga(a)?i.push("".concat(M0(r),":"),a,";"):Gs(a)?i.push.apply(i,tu(tu(["".concat(r," {")],Py(a),!1),["}"],!1)):i.push("".concat(M0(r),": ").concat((e=r,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Z2||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function aa(t,e,n,i){if(Ry(t))return[];if(dm(t))return[".".concat(t.styledComponentId)];if(ga(t)){if(!ga(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var r=t(e);return aa(r,e,n,i)}var a;return t instanceof Cb?n?(t.inject(n,i),[t.getName(i)]):[t]:Gs(t)?Py(t):Array.isArray(t)?Array.prototype.concat.apply(Qu,t.map(function(o){return aa(o,e,n,i)})):[t.toString()]}function Pb(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ga(n)&&!dm(n))return!1}return!0}var Lb=yy("6.0.2"),Ib=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Pb(e),this.componentId=n,this.baseHash=eo(Lb,n),this.baseStyle=i,Ty.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Jr(r,this.staticRulesId);else{var a=x0(aa(this.rules,e,n,i)),o=Uh(eo(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=i(a,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}r=Jr(r,o),this.staticRulesId=o}else{for(var l=eo(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var d=x0(aa(f,e,n,i));l=eo(l,d),c+=d}}if(c){var p=Uh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=Jr(r,p)}}return r},t}(),ru=Ai.createContext(void 0);ru.Consumer;function Db(t){var e=Ai.useContext(ru),n=We.useMemo(function(){return function(i,r){if(!i)throw va(14);if(ga(i)){var a=i(r);return a}if(Array.isArray(i)||typeof i!="object")throw va(8);return r?Qt(Qt({},r),i):i}(t.theme,e)},[t.theme,e]);return t.children?Ai.createElement(ru.Provider,{value:n},t.children):null}var qf={};function Ub(t,e,n){var i=dm(t),r=t,a=!Xf(t),o=e.attrs,s=o===void 0?Qu:o,l=e.componentId,c=l===void 0?function(m,y){var S=typeof m!="string"?"sc":p0(m);qf[S]=(qf[S]||0)+1;var w="".concat(S,"-").concat(ib("6.0.2"+S+qf[S]));return y?"".concat(y,"-").concat(w):w}(e.displayName,e.parentComponentId):l,u=e.displayName;u===void 0&&function(m){return Xf(m)?"styled.".concat(m):"Styled(".concat(rb(m),")")}(t);var f=e.displayName&&e.componentId?"".concat(p0(e.displayName),"-").concat(e.componentId):e.componentId||c,d=i&&r.attrs?r.attrs.concat(s).filter(Boolean):s,p=e.shouldForwardProp;if(i&&r.shouldForwardProp){var _=r.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;p=function(m,y){return _(m,y)&&x(m,y)}}else p=_}var g=new Ib(n,f,i?r.componentStyle:void 0);function h(m,y){return function(S,w,E){var R=S.attrs,M=S.componentStyle,b=S.defaultProps,G=S.foldedComponentIds,Q=S.styledComponentId,N=S.target,H=Ai.useContext(ru),F=S0(),Z=S.shouldForwardProp||F.shouldForwardProp,j=function(re,ee,oe){for(var he,xe=Qt(Qt({},ee),{className:void 0,theme:oe}),ye=0;ye<re.length;ye+=1){var Xe=ga(he=re[ye])?he(xe):he;for(var dt in Xe)xe[dt]=dt==="className"?Jr(xe[dt],Xe[dt]):dt==="style"?Qt(Qt({},xe[dt]),Xe[dt]):Xe[dt]}return ee.className&&(xe.className=Jr(xe.className,ee.className)),xe}(R,w,J2(w,H,b)||Co),I=j.as||N,z={};for(var B in j)j[B]===void 0||B[0]==="$"||B==="as"||B==="theme"||(B==="forwardedAs"?z.as=j.forwardedAs:Z&&!Z(B,I)||(z[B]=j[B]));var D=function(re,ee){var oe=S0(),he=re.generateAndInjectStyles(ee,oe.styleSheet,oe.stylis);return he}(M,j),V=Jr(G,Q);return D&&(V+=" "+D),j.className&&(V+=" "+j.className),z[Xf(I)&&!xy.has(I)?"class":"className"]=V,z.ref=E,We.createElement(I,z)}(v,m,y)}var v=Ai.forwardRef(h);return v.attrs=d,v.componentStyle=g,v.shouldForwardProp=p,v.foldedComponentIds=i?Jr(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=f,v.target=i?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=i?function(y){for(var S=[],w=1;w<arguments.length;w++)S[w-1]=arguments[w];for(var E=0,R=S;E<R.length;E++)Nh(y,R[E],!0);return y}({},r.defaultProps,m):m}}),hm(v,function(){return".".concat(v.styledComponentId)}),a&&wy(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function E0(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var w0=function(t){return Object.assign(t,{isCss:!0})};function Ju(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ga(t)||Gs(t)){var i=t;return w0(aa(E0(Qu,tu([i],e,!0))))}var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?aa(r):w0(aa(E0(r,e)))}function kh(t,e,n){if(n===void 0&&(n=Co),!e)throw va(1,e);var i=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return t(e,n,Ju.apply(void 0,tu([r],a,!1)))};return i.attrs=function(r){return kh(t,e,Qt(Qt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return kh(t,e,Qt(Qt({},n),r))},i}var Ly=function(t){return kh(Ub,t)},Ce=Ly;xy.forEach(function(t){Ce[t]=Ly(t)});const Nb={fg:{normal:"hsla(0, 100%, 100%, 1)",clickable:"hsla(180, 100%, 64%, 1)",mute:"hsla(0, 0%, 100%, 0.75)"},bg:{normal:"hsla(0, 0%, 0%, 0.4)",mute:"hsla(0, 0%, 0%, 0.2)"},animationDuration:"250ms"},Iy="SET_PAGE_PROGRESSION",Ob=(t,e,n)=>({type:Iy,relative:t,absolute:e,total:n}),Dy="SET_STARS",b0=t=>({type:Dy,stars:t}),Uy="SET_ANCHOR",kb=(t,e)=>({type:Uy,name:t,anchor:e}),Ny="SET_PAGE_SIZE",Fb=(t,e,n)=>({type:Ny,width:t,height:e,devicePixelRatio:n});var zb={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Bb={prefix:"fas",iconName:"shuttle-space",icon:[640,512,["space-shuttle"],"f197","M130 480c40.6 0 80.4-11 115.2-31.9L352 384l-224 0 0 96h2zM352 128L245.2 63.9C210.4 43 170.6 32 130 32h-2v96l224 0zM96 128l0-96H80C53.5 32 32 53.5 32 80v48h8c-22.1 0-40 17.9-40 40v16V328v16c0 22.1 17.9 40 40 40H32v48c0 26.5 21.5 48 48 48H96l0-96h8c26.2 0 49.4-12.6 64-32H456c69.3 0 135-22.7 179.2-81.6c6.4-8.5 6.4-20.3 0-28.8C591 182.7 525.3 160 456 160H168c-14.6-19.4-37.8-32-64-32l-8 0zM512 243.6v24.9c0 19.6-15.9 35.6-35.6 35.6c-2.5 0-4.4-2-4.4-4.4V212.4c0-2.5 2-4.4 4.4-4.4c19.6 0 35.6 15.9 35.6 35.6z"]},Hb=Bb,Gb={prefix:"fas",iconName:"up-right-from-square",icon:[512,512,["external-link-alt"],"f35d","M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Vb=Gb,Wb={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},jb={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]};function T0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function fe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T0(Object(n),!0).forEach(function(i){Pt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function au(t){"@babel/helpers - typeof";return au=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},au(t)}function $b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A0(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function Xb(t,e,n){return e&&A0(t.prototype,e),n&&A0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function pm(t,e){return qb(t)||Zb(t,e)||Oy(t,e)||Jb()}function rl(t){return Yb(t)||Kb(t)||Oy(t)||Qb()}function Yb(t){if(Array.isArray(t))return Fh(t)}function qb(t){if(Array.isArray(t))return t}function Kb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function Oy(t,e){if(t){if(typeof t=="string")return Fh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fh(t,e)}}function Fh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Qb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C0=function(){},mm={},ky={},Fy=null,zy={mark:C0,measure:C0};try{typeof window<"u"&&(mm=window),typeof document<"u"&&(ky=document),typeof MutationObserver<"u"&&(Fy=MutationObserver),typeof performance<"u"&&(zy=performance)}catch{}var eT=mm.navigator||{},R0=eT.userAgent,P0=R0===void 0?"":R0,Pr=mm,ut=ky,L0=Fy,Ll=zy;Pr.document;var tr=!!ut.documentElement&&!!ut.head&&typeof ut.addEventListener=="function"&&typeof ut.createElement=="function",By=~P0.indexOf("MSIE")||~P0.indexOf("Trident/"),Il,Dl,Ul,Nl,Ol,Zi="___FONT_AWESOME___",zh=16,Hy="fa",Gy="svg-inline--fa",_a="data-fa-i2svg",Bh="data-fa-pseudo-element",tT="data-fa-pseudo-element-pending",gm="data-prefix",vm="data-icon",I0="fontawesome-i2svg",nT="async",iT=["HTML","HEAD","STYLE","SCRIPT"],Vy=function(){try{return!0}catch{return!1}}(),lt="classic",St="sharp",_m=[lt,St];function al(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[lt]}})}var Vs=al((Il={},Pt(Il,lt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Pt(Il,St,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Il)),Ws=al((Dl={},Pt(Dl,lt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Pt(Dl,St,{solid:"fass",regular:"fasr",light:"fasl"}),Dl)),js=al((Ul={},Pt(Ul,lt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Pt(Ul,St,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Ul)),rT=al((Nl={},Pt(Nl,lt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Pt(Nl,St,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Nl)),aT=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Wy="fa-layers-text",oT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,sT=al((Ol={},Pt(Ol,lt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Pt(Ol,St,{900:"fass",400:"fasr",300:"fasl"}),Ol)),jy=[1,2,3,4,5,6,7,8,9,10],lT=jy.concat([11,12,13,14,15,16,17,18,19,20]),cT=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ea={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},$s=new Set;Object.keys(Ws[lt]).map($s.add.bind($s));Object.keys(Ws[St]).map($s.add.bind($s));var uT=[].concat(_m,rl($s),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ea.GROUP,ea.SWAP_OPACITY,ea.PRIMARY,ea.SECONDARY]).concat(jy.map(function(t){return"".concat(t,"x")})).concat(lT.map(function(t){return"w-".concat(t)})),Ss=Pr.FontAwesomeConfig||{};function fT(t){var e=ut.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function dT(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ut&&typeof ut.querySelector=="function"){var hT=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hT.forEach(function(t){var e=pm(t,2),n=e[0],i=e[1],r=dT(fT(n));r!=null&&(Ss[i]=r)})}var $y={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hy,replacementClass:Gy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ss.familyPrefix&&(Ss.cssPrefix=Ss.familyPrefix);var Ro=fe(fe({},$y),Ss);Ro.autoReplaceSvg||(Ro.observeMutations=!1);var ve={};Object.keys($y).forEach(function(t){Object.defineProperty(ve,t,{enumerable:!0,set:function(n){Ro[t]=n,Ms.forEach(function(i){return i(ve)})},get:function(){return Ro[t]}})});Object.defineProperty(ve,"familyPrefix",{enumerable:!0,set:function(e){Ro.cssPrefix=e,Ms.forEach(function(n){return n(ve)})},get:function(){return Ro.cssPrefix}});Pr.FontAwesomeConfig=ve;var Ms=[];function pT(t){return Ms.push(t),function(){Ms.splice(Ms.indexOf(t),1)}}var ir=zh,wi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mT(t){if(!(!t||!tr)){var e=ut.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ut.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return ut.head.insertBefore(e,i),t}}var gT="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xs(){for(var t=12,e="";t-- >0;)e+=gT[Math.random()*62|0];return e}function Fo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xm(t){return t.classList?Fo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Xy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vT(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Xy(t[n]),'" ')},"").trim()}function ef(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ym(t){return t.size!==wi.size||t.x!==wi.x||t.y!==wi.y||t.rotate!==wi.rotate||t.flipX||t.flipY}function _T(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function xT(t){var e=t.transform,n=t.width,i=n===void 0?zh:n,r=t.height,a=r===void 0?zh:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&By?l+="translate(".concat(e.x/ir-i/2,"em, ").concat(e.y/ir-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):l+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),l+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var yT=`:root, :host {
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
}`;function Yy(){var t=Hy,e=Gy,n=ve.cssPrefix,i=ve.replacementClass,r=yT;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var D0=!1;function Kf(){ve.autoAddCss&&!D0&&(mT(Yy()),D0=!0)}var ST={mixout:function(){return{dom:{css:Yy,insertCss:Kf}}},hooks:function(){return{beforeDOMElementCreation:function(){Kf()},beforeI2svg:function(){Kf()}}}},Qi=Pr||{};Qi[Zi]||(Qi[Zi]={});Qi[Zi].styles||(Qi[Zi].styles={});Qi[Zi].hooks||(Qi[Zi].hooks={});Qi[Zi].shims||(Qi[Zi].shims=[]);var li=Qi[Zi],qy=[],MT=function t(){ut.removeEventListener("DOMContentLoaded",t),ou=1,qy.map(function(e){return e()})},ou=!1;tr&&(ou=(ut.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ut.readyState),ou||ut.addEventListener("DOMContentLoaded",MT));function ET(t){tr&&(ou?setTimeout(t,0):qy.push(t))}function ol(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?Xy(t):"<".concat(e," ").concat(vT(i),">").concat(a.map(ol).join(""),"</").concat(e,">")}function U0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wT=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},Zf=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?wT(n,r):n,l,c,u;for(i===void 0?(l=1,u=e[a[0]]):(l=0,u=i);l<o;l++)c=a[l],u=s(u,e[c],c,e);return u};function bT(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Hh(t){var e=bT(t);return e.length===1?e[0].toString(16):null}function TT(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function N0(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Gh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=N0(e);typeof li.hooks.addPack=="function"&&!r?li.hooks.addPack(t,N0(e)):li.styles[t]=fe(fe({},li.styles[t]||{}),a),t==="fas"&&Gh("fa",e)}var kl,Fl,zl,to=li.styles,AT=li.shims,CT=(kl={},Pt(kl,lt,Object.values(js[lt])),Pt(kl,St,Object.values(js[St])),kl),Sm=null,Ky={},Zy={},Qy={},Jy={},eS={},RT=(Fl={},Pt(Fl,lt,Object.keys(Vs[lt])),Pt(Fl,St,Object.keys(Vs[St])),Fl);function PT(t){return~uT.indexOf(t)}function LT(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!PT(r)?r:null}var tS=function(){var e=function(a){return Zf(to,function(o,s,l){return o[l]=Zf(s,a,{}),o},{})};Ky=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Zy=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),eS=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in to||ve.autoFetchSvg,i=Zf(AT,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Qy=i.names,Jy=i.unicodes,Sm=tf(ve.styleDefault,{family:ve.familyDefault})};pT(function(t){Sm=tf(t.styleDefault,{family:ve.familyDefault})});tS();function Mm(t,e){return(Ky[t]||{})[e]}function IT(t,e){return(Zy[t]||{})[e]}function ta(t,e){return(eS[t]||{})[e]}function nS(t){return Qy[t]||{prefix:null,iconName:null}}function DT(t){var e=Jy[t],n=Mm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Lr(){return Sm}var Em=function(){return{prefix:null,iconName:null,rest:[]}};function tf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?lt:n,r=Vs[i][t],a=Ws[i][t]||Ws[i][r],o=t in li.styles?t:null;return a||o||null}var O0=(zl={},Pt(zl,lt,Object.keys(js[lt])),Pt(zl,St,Object.keys(js[St])),zl);function nf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},Pt(e,lt,"".concat(ve.cssPrefix,"-").concat(lt)),Pt(e,St,"".concat(ve.cssPrefix,"-").concat(St)),e),o=null,s=lt;(t.includes(a[lt])||t.some(function(c){return O0[lt].includes(c)}))&&(s=lt),(t.includes(a[St])||t.some(function(c){return O0[St].includes(c)}))&&(s=St);var l=t.reduce(function(c,u){var f=LT(ve.cssPrefix,u);if(to[u]?(u=CT[s].includes(u)?rT[s][u]:u,o=u,c.prefix=u):RT[s].indexOf(u)>-1?(o=u,c.prefix=tf(u,{family:s})):f?c.iconName=f:u!==ve.replacementClass&&u!==a[lt]&&u!==a[St]&&c.rest.push(u),!r&&c.prefix&&c.iconName){var d=o==="fa"?nS(c.iconName):{},p=ta(c.prefix,c.iconName);d.prefix&&(o=null),c.iconName=d.iconName||p||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!to.far&&to.fas&&!ve.autoFetchSvg&&(c.prefix="fas")}return c},Em());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===St&&(to.fass||ve.autoFetchSvg)&&(l.prefix="fass",l.iconName=ta(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Lr()||"fas"),l}var UT=function(){function t(){$b(this,t),this.definitions={}}return Xb(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=fe(fe({},n.definitions[s]||{}),o[s]),Gh(s,o[s]);var l=js[lt][s];l&&Gh(l,o[s]),tS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,c=o.icon,u=c[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[s][f]=c)}),n[s][l]=c}),n}}]),t}(),k0=[],no={},ho={},NT=Object.keys(ho);function OT(t,e){var n=e.mixoutsTo;return k0=t,no={},Object.keys(ho).forEach(function(i){NT.indexOf(i)===-1&&delete ho[i]}),k0.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),au(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){no[o]||(no[o]=[]),no[o].push(a[o])})}i.provides&&i.provides(ho)}),n}function Vh(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=no[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function xa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=no[t]||[];r.forEach(function(a){a.apply(null,n)})}function Ji(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ho[t]?ho[t].apply(null,e):void 0}function Wh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Lr();if(e)return e=ta(n,e)||e,U0(iS.definitions,n,e)||U0(li.styles,n,e)}var iS=new UT,kT=function(){ve.autoReplaceSvg=!1,ve.observeMutations=!1,xa("noAuto")},FT={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return tr?(xa("beforeI2svg",e),Ji("pseudoElements2svg",e),Ji("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;ve.autoReplaceSvg===!1&&(ve.autoReplaceSvg=!0),ve.observeMutations=!0,ET(function(){BT({autoReplaceSvgRoot:n}),xa("watch",e)})}},zT={icon:function(e){if(e===null)return null;if(au(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ta(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=tf(e[0]);return{prefix:i,iconName:ta(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(ve.cssPrefix,"-"))>-1||e.match(aT))){var r=nf(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||Lr(),iconName:ta(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=Lr();return{prefix:a,iconName:ta(a,e)||e}}}},On={noAuto:kT,config:ve,dom:FT,parse:zT,library:iS,findIconDefinition:Wh,toHtml:ol},BT=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?ut:n;(Object.keys(li.styles).length>0||ve.autoFetchSvg)&&tr&&ve.autoReplaceSvg&&On.dom.i2svg({node:i})};function rf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ol(i)})}}),Object.defineProperty(t,"node",{get:function(){if(tr){var i=ut.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function HT(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(ym(o)&&n.found&&!i.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=ef(fe(fe({},a),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function GT(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(ve.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:fe(fe({},r),{},{id:o}),children:i}]}]}function wm(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,u=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,_=i.found?i:n,x=_.width,g=_.height,h=r==="fak",v=[ve.replacementClass,a?"".concat(ve.cssPrefix,"-").concat(a):""].filter(function(M){return f.classes.indexOf(M)===-1}).filter(function(M){return M!==""||!!M}).concat(f.classes).join(" "),m={children:[],attributes:fe(fe({},f.attributes),{},{"data-prefix":r,"data-icon":a,class:v,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(g)})},y=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(x/g*16*.0625,"em")}:{};p&&(m.attributes[_a]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(u||Xs())},children:[l]}),delete m.attributes.title);var S=fe(fe({},m),{},{prefix:r,iconName:a,main:n,mask:i,maskId:c,transform:o,symbol:s,styles:fe(fe({},y),f.styles)}),w=i.found&&n.found?Ji("generateAbstractMask",S)||{children:[],attributes:{}}:Ji("generateAbstractIcon",S)||{children:[],attributes:{}},E=w.children,R=w.attributes;return S.children=E,S.attributes=R,s?GT(S):HT(S)}function F0(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=fe(fe(fe({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(c[_a]="");var u=fe({},o.styles);ym(r)&&(u.transform=xT({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);var f=ef(u);f.length>0&&(c.style=f);var d=[];return d.push({tag:"span",attributes:c,children:[e]}),a&&d.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),d}function VT(t){var e=t.content,n=t.title,i=t.extra,r=fe(fe(fe({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=ef(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qf=li.styles;function jh(t){var e=t[0],n=t[1],i=t.slice(4),r=pm(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(ve.cssPrefix,"-").concat(ea.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(ea.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(ve.cssPrefix,"-").concat(ea.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var WT={found:!1,width:512,height:512};function jT(t,e){!Vy&&!ve.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function $h(t,e){var n=e;return e==="fa"&&ve.styleDefault!==null&&(e=Lr()),new Promise(function(i,r){if(Ji("missingIconAbstract"),n==="fa"){var a=nS(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&Qf[e]&&Qf[e][t]){var o=Qf[e][t];return i(jh(o))}jT(t,e),i(fe(fe({},WT),{},{icon:ve.showMissingIcons&&t?Ji("missingIconAbstract")||{}:{}}))})}var z0=function(){},Xh=ve.measurePerformance&&Ll&&Ll.mark&&Ll.measure?Ll:{mark:z0,measure:z0},cs='FA "6.4.0"',$T=function(e){return Xh.mark("".concat(cs," ").concat(e," begins")),function(){return rS(e)}},rS=function(e){Xh.mark("".concat(cs," ").concat(e," ends")),Xh.measure("".concat(cs," ").concat(e),"".concat(cs," ").concat(e," begins"),"".concat(cs," ").concat(e," ends"))},bm={begin:$T,end:rS},Cc=function(){};function B0(t){var e=t.getAttribute?t.getAttribute(_a):null;return typeof e=="string"}function XT(t){var e=t.getAttribute?t.getAttribute(gm):null,n=t.getAttribute?t.getAttribute(vm):null;return e&&n}function YT(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(ve.replacementClass)}function qT(){if(ve.autoReplaceSvg===!0)return Rc.replace;var t=Rc[ve.autoReplaceSvg];return t||Rc.replace}function KT(t){return ut.createElementNS("http://www.w3.org/2000/svg",t)}function ZT(t){return ut.createElement(t)}function aS(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?KT:ZT:n;if(typeof t=="string")return ut.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(aS(o,{ceFn:i}))}),r}function QT(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Rc={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(aS(r),n)}),n.getAttribute(_a)===null&&ve.keepOriginalSource){var i=ut.createComment(QT(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~xm(n).indexOf(ve.replacementClass))return Rc.replace(e);var r=new RegExp("".concat(ve.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===ve.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return ol(s)}).join(`
`);n.setAttribute(_a,""),n.innerHTML=o}};function H0(t){t()}function oS(t,e){var n=typeof e=="function"?e:Cc;if(t.length===0)n();else{var i=H0;ve.mutateApproach===nT&&(i=Pr.requestAnimationFrame||H0),i(function(){var r=qT(),a=bm.begin("mutate");t.map(r),a(),n()})}}var Tm=!1;function sS(){Tm=!0}function Yh(){Tm=!1}var su=null;function G0(t){if(L0&&ve.observeMutations){var e=t.treeCallback,n=e===void 0?Cc:e,i=t.nodeCallback,r=i===void 0?Cc:i,a=t.pseudoElementsCallback,o=a===void 0?Cc:a,s=t.observeMutationsRoot,l=s===void 0?ut:s;su=new L0(function(c){if(!Tm){var u=Lr();Fo(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!B0(f.addedNodes[0])&&(ve.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&ve.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&B0(f.target)&&~cT.indexOf(f.attributeName))if(f.attributeName==="class"&&XT(f.target)){var d=nf(xm(f.target)),p=d.prefix,_=d.iconName;f.target.setAttribute(gm,p||u),_&&f.target.setAttribute(vm,_)}else YT(f.target)&&r(f.target)})}}),tr&&su.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function JT(){su&&su.disconnect()}function eA(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function tA(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=nf(xm(t));return r.prefix||(r.prefix=Lr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=IT(r.prefix,t.innerText)||Mm(r.prefix,Hh(t.innerText))),!r.iconName&&ve.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function nA(t){var e=Fo(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return ve.autoA11y&&(n?e["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(i||Xs()):(e["aria-hidden"]="true",e.focusable="false")),e}function iA(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function V0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=tA(t),i=n.iconName,r=n.prefix,a=n.rest,o=nA(t),s=Vh("parseNodeAttributes",{},t),l=e.styleParser?eA(t):[];return fe({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:wi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var rA=li.styles;function lS(t){var e=ve.autoReplaceSvg==="nest"?V0(t,{styleParser:!1}):V0(t);return~e.extra.classes.indexOf(Wy)?Ji("generateLayersText",t,e):Ji("generateSvgReplacementMutation",t,e)}var Ir=new Set;_m.map(function(t){Ir.add("fa-".concat(t))});Object.keys(Vs[lt]).map(Ir.add.bind(Ir));Object.keys(Vs[St]).map(Ir.add.bind(Ir));Ir=rl(Ir);function W0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!tr)return Promise.resolve();var n=ut.documentElement.classList,i=function(f){return n.add("".concat(I0,"-").concat(f))},r=function(f){return n.remove("".concat(I0,"-").concat(f))},a=ve.autoFetchSvg?Ir:_m.map(function(u){return"fa-".concat(u)}).concat(Object.keys(rA));a.includes("fa")||a.push("fa");var o=[".".concat(Wy,":not([").concat(_a,"])")].concat(a.map(function(u){return".".concat(u,":not([").concat(_a,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Fo(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=bm.begin("onTree"),c=s.reduce(function(u,f){try{var d=lS(f);d&&u.push(d)}catch(p){Vy||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(d){oS(d,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(function(d){l(),f(d)})})}function aA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;lS(t).then(function(n){n&&oS([n],e)})}function oA(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Wh(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Wh(r||{})),t(i,fe(fe({},n),{},{mask:r}))}}var sA=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?wi:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,c=n.maskId,u=c===void 0?null:c,f=n.title,d=f===void 0?null:f,p=n.titleId,_=p===void 0?null:p,x=n.classes,g=x===void 0?[]:x,h=n.attributes,v=h===void 0?{}:h,m=n.styles,y=m===void 0?{}:m;if(e){var S=e.prefix,w=e.iconName,E=e.icon;return rf(fe({type:"icon"},e),function(){return xa("beforeDOMElementCreation",{iconDefinition:e,params:n}),ve.autoA11y&&(d?v["aria-labelledby"]="".concat(ve.replacementClass,"-title-").concat(_||Xs()):(v["aria-hidden"]="true",v.focusable="false")),wm({icons:{main:jh(E),mask:l?jh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:w,transform:fe(fe({},wi),r),symbol:o,title:d,maskId:u,titleId:_,extra:{attributes:v,styles:y,classes:g}})})}},lA={mixout:function(){return{icon:oA(sA)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=W0,n.nodeCallback=aA,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?ut:i,a=n.callback,o=a===void 0?function(){}:a;return W0(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,c=i.symbol,u=i.mask,f=i.maskId,d=i.extra;return new Promise(function(p,_){Promise.all([$h(r,s),u.iconName?$h(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var g=pm(x,2),h=g[0],v=g[1];p([n,wm({icons:{main:h,mask:v},prefix:s,iconName:r,transform:l,symbol:c,maskId:f,title:a,titleId:o,extra:d,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=ef(s);l.length>0&&(r.style=l);var c;return ym(o)&&(c=Ji("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(c||a.icon),{children:i,attributes:r}}}},cA={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return rf({type:"layer"},function(){xa("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(ve.cssPrefix,"-layers")].concat(rl(a)).join(" ")},children:o}]})}}}},uA={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,c=l===void 0?{}:l,u=i.styles,f=u===void 0?{}:u;return rf({type:"counter",content:n},function(){return xa("beforeDOMElementCreation",{content:n,params:i}),VT({content:n.toString(),title:a,extra:{attributes:c,styles:f,classes:["".concat(ve.cssPrefix,"-layers-counter")].concat(rl(s))}})})}}}},fA={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?wi:r,o=i.title,s=o===void 0?null:o,l=i.classes,c=l===void 0?[]:l,u=i.attributes,f=u===void 0?{}:u,d=i.styles,p=d===void 0?{}:d;return rf({type:"text",content:n},function(){return xa("beforeDOMElementCreation",{content:n,params:i}),F0({content:n,transform:fe(fe({},wi),a),title:s,extra:{attributes:f,styles:p,classes:["".concat(ve.cssPrefix,"-layers-text")].concat(rl(c))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(By){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/c,l=u.height/c}return ve.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,F0({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},dA=new RegExp('"',"ug"),j0=[1105920,1112319];function hA(t){var e=t.replace(dA,""),n=TT(e,0),i=n>=j0[0]&&n<=j0[1],r=e.length===2?e[0]===e[1]:!1;return{value:Hh(r?e[0]:e),isSecondary:i||r}}function $0(t,e){var n="".concat(tT).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=Fo(t.children),o=a.filter(function(E){return E.getAttribute(Bh)===e})[0],s=Pr.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(oT),c=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&u!=="none"&&u!==""){var f=s.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?St:lt,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ws[d][l[2].toLowerCase()]:sT[d][c],_=hA(f),x=_.value,g=_.isSecondary,h=l[0].startsWith("FontAwesome"),v=Mm(p,x),m=v;if(h){var y=DT(x);y.iconName&&y.prefix&&(v=y.iconName,p=y.prefix)}if(v&&!g&&(!o||o.getAttribute(gm)!==p||o.getAttribute(vm)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var S=iA(),w=S.extra;w.attributes[Bh]=e,$h(v,p).then(function(E){var R=wm(fe(fe({},S),{},{icons:{main:E,mask:Em()},prefix:p,iconName:m,extra:w,watchable:!0})),M=ut.createElement("svg");e==="::before"?t.insertBefore(M,t.firstChild):t.appendChild(M),M.outerHTML=R.map(function(b){return ol(b)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function pA(t){return Promise.all([$0(t,"::before"),$0(t,"::after")])}function mA(t){return t.parentNode!==document.head&&!~iT.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Bh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function X0(t){if(tr)return new Promise(function(e,n){var i=Fo(t.querySelectorAll("*")).filter(mA).map(pA),r=bm.begin("searchPseudoElements");sS(),Promise.all(i).then(function(){r(),Yh(),e()}).catch(function(){r(),Yh(),n()})})}var gA={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=X0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?ut:i;ve.searchPseudoElements&&X0(r)}}},Y0=!1,vA={mixout:function(){return{dom:{unwatch:function(){sS(),Y0=!0}}}},hooks:function(){return{bootstrap:function(){G0(Vh("mutationObserverCallbacks",{}))},noAuto:function(){JT()},watch:function(n){var i=n.observeMutationsRoot;Y0?Yh():G0(Vh("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},q0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},_A={mixout:function(){return{parse:{transform:function(n){return q0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=q0(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:f,path:d};return{tag:"g",attributes:fe({},p.outer),children:[{tag:"g",attributes:fe({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:fe(fe({},i.icon.attributes),p.path)}]}]}}}},Jf={x:0,y:0,width:"100%",height:"100%"};function K0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xA(t){return t.tag==="g"?t.children:[t]}var yA={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?nf(r.split(" ").map(function(o){return o.trim()})):Em();return a.prefix||(a.prefix=Lr()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,c=a.width,u=a.icon,f=o.width,d=o.icon,p=_T({transform:l,containerWidth:f,iconWidth:c}),_={tag:"rect",attributes:fe(fe({},Jf),{},{fill:"white"})},x=u.children?{children:u.children.map(K0)}:{},g={tag:"g",attributes:fe({},p.inner),children:[K0(fe({tag:u.tag,attributes:fe(fe({},u.attributes),p.path)},x))]},h={tag:"g",attributes:fe({},p.outer),children:[g]},v="mask-".concat(s||Xs()),m="clip-".concat(s||Xs()),y={tag:"mask",attributes:fe(fe({},Jf),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,h]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:xA(d)},y]};return i.push(S,{tag:"rect",attributes:fe({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(v,")")},Jf)}),{children:i,attributes:r}}}},SA={provides:function(e){var n=!1;Pr.matchMedia&&(n=Pr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:fe(fe({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=fe(fe({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:fe(fe({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:fe(fe({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:fe(fe({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:fe(fe({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:fe(fe({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:fe(fe({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:fe(fe({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},MA={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},EA=[ST,lA,cA,uA,fA,gA,vA,_A,yA,SA,MA];OT(EA,{mixoutsTo:On});On.noAuto;On.config;On.library;On.dom;var qh=On.parse;On.findIconDefinition;On.toHtml;var wA=On.icon;On.layer;On.text;On.counter;var cS={exports:{}},bA="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",TA=bA,AA=TA;function uS(){}function fS(){}fS.resetWarningCache=uS;var CA=function(){function t(i,r,a,o,s,l){if(l!==AA){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:fS,resetWarningCache:uS};return n.PropTypes=n,n};cS.exports=CA();var RA=cS.exports;const He=U_(RA);function Z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function mr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z0(Object(n),!0).forEach(function(i){io(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function lu(t){"@babel/helpers - typeof";return lu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lu(t)}function io(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function PA(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function LA(t,e){if(t==null)return{};var n=PA(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Kh(t){return IA(t)||DA(t)||UA(t)||NA()}function IA(t){if(Array.isArray(t))return Zh(t)}function DA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UA(t,e){if(t){if(typeof t=="string")return Zh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zh(t,e)}}function Zh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function NA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OA(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,u=t.spinReverse,f=t.pulse,d=t.fixedWidth,p=t.inverse,_=t.border,x=t.listItem,g=t.flip,h=t.size,v=t.rotation,m=t.pull,y=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":_,"fa-li":x,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},io(e,"fa-".concat(h),typeof h<"u"&&h!==null),io(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),io(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),io(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(S){return y[S]?S:null}).filter(function(S){return S})}function kA(t){return t=t-0,t===t}function dS(t){return kA(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var FA=["style"];function zA(t){return t.charAt(0).toUpperCase()+t.slice(1)}function BA(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=dS(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[zA(r)]=a:e[r]=a,e},{})}function hS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return hS(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=BA(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[dS(c)]=u}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=LA(n,FA);return r.attrs.style=mr(mr({},r.attrs.style),o),t.apply(void 0,[e.tag,mr(mr({},r.attrs),s)].concat(Kh(i)))}var pS=!1;try{pS=!0}catch{}function HA(){if(!pS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Q0(t){if(t&&lu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qh.icon)return qh.icon(t);if(t===null)return null;if(t&&lu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ed(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?io({},t,e):{}}var An=Ai.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,c=Q0(n),u=ed("classes",[].concat(Kh(OA(t)),Kh(a.split(" ")))),f=ed("transform",typeof t.transform=="string"?qh.transform(t.transform):t.transform),d=ed("mask",Q0(i)),p=wA(c,mr(mr(mr(mr({},u),f),d),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!p)return HA("Could not find icon",c),null;var _=p.abstract,x={ref:e};return Object.keys(t).forEach(function(g){An.defaultProps.hasOwnProperty(g)||(x[g]=t[g])}),GA(_[0],x)});An.displayName="FontAwesomeIcon";An.propTypes={beat:He.bool,border:He.bool,beatFade:He.bool,bounce:He.bool,className:He.string,fade:He.bool,flash:He.bool,mask:He.oneOfType([He.object,He.array,He.string]),maskId:He.string,fixedWidth:He.bool,inverse:He.bool,flip:He.oneOf([!0,!1,"horizontal","vertical","both"]),icon:He.oneOfType([He.object,He.array,He.string]),listItem:He.bool,pull:He.oneOf(["right","left"]),pulse:He.bool,rotation:He.oneOf([0,90,180,270]),shake:He.bool,size:He.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:He.bool,spinPulse:He.bool,spinReverse:He.bool,symbol:He.oneOfType([He.bool,He.string]),title:He.string,titleId:He.string,transform:He.oneOfType([He.string,He.object]),swapOpacity:He.bool};An.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var GA=hS.bind(null,Ai.createElement);const mS=Ce.span`
  position: absolute;
  transform: scale(0);
  transition: ease-in-out ${t=>t.theme.animationDuration} transform;
  top: 0;
  left: 0.25em;
  color: ${t=>t.theme.fg.mute};
  font-size: 0.75em;
`,VA=Ce.span`
  position: relative;
`,WA=Ce.div`
  display: inline-block;

  &:hover ${mS} {
    transform: scale(1);
  }
`,jA=Ce.a`
  color: ${t=>t.theme.fg.clickable};
`;function ln({url:t,className:e,children:n,...i}){return q.jsxs(WA,{className:e,children:[q.jsx(jA,{rel:"noreferrer noopener",href:t,target:"_blank",...i,children:n}),q.jsx(VA,{children:q.jsx(mS,{children:q.jsx(An,{icon:Vb})})})]})}const $A=Ce.div`
  color: ${t=>t.theme.fg.mute};
`,XA=Ce.time`
  color: ${t=>t.theme.fg.normal};
  font-size: 1.5em;
`,YA=Ce.time`
  color: ${t=>t.theme.fg.mute};
  font-size: 0.75em;
`;function qA({start:t,end:e}){return q.jsxs($A,{children:[q.jsx(XA,{dateTime:e,children:e})," ‒ ",q.jsx(YA,{dateTime:t,children:t})]})}const KA=[{start:"2019",end:new Date().getFullYear(),activities:[{name:"EAP Expertise Art et Patrimoine",role:"CEO",url:"https://www.eap-expertise.fr/"},{name:"Akretion",role:"Odoo freelancer",url:"https://www.akretion.com/fr"}]},{start:"2011",end:"2019",activities:[{name:"Kozea",role:"Python / ECMAScript Architect",url:"https://kozea.fr/"}]},{start:"2009",end:"2011",activities:[{name:"Viseo",role:"Java / ECMAScript Developper",url:"https://www.viseo.com/"}]},{start:"2004",end:"2009",activities:[{name:"INSA Lyon",role:"Studied IT",url:"http://insa-lyon.fr/"}]}],ZA=Ce.header`
  margin-top: 2em;
  margin-bottom: 2em;
  margin-right: ${t=>t.$left?"1em":0};
  margin-left: ${t=>t.$left?0:"1em"};
  display: flex;
  flex-direction: column;
  text-align: ${t=>t.$left?"right":"left"};
  min-width: ${t=>t.$left?57:48}%;
  align-self: ${t=>t.$left?"flex-start":"flex-end"};
`,QA=Ce.div`
  width: 100%;
  color: ${t=>t.theme.fg.normal};
  border-bottom: 2px solid ${t=>t.theme.fg.normal};
  font-size: 2em;
  align-self: flex-end;
  margin-left: ${t=>t.$left?"1em":0};
  margin-bottom: 0.5em;
`,JA=Ce.div`
  color: ${t=>t.theme.fg.mute};
  font-size: 1.25em;
  margin-left: ${t=>t.$left?"1em":0};
  margin-right: ${t=>t.$left?0:"1em"};
`;function zo({level:t,children:e,className:n}){t=t||2;const i=t%2;return q.jsx(ZA,{$left:i,className:n,children:We.Children.map(e,(r,a)=>a===0?q.jsx(QA,{as:`h${t}`,$left:i,children:r}):q.jsx(JA,{$left:i,children:r}))})}const eC=Ce.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
`;function Fr({anchor:t,className:e,children:n}){const i=We.useRef(),r=lm(),{width:a,height:o}=Wi(l=>l.page),s=We.useCallback(()=>r(kb(t,i.current.offsetTop)),[r,t,a,o]);return We.useEffect(()=>(s(),window.addEventListener("load",s,!1),()=>window.removeEventListener("load",s)),[s]),q.jsx(eC,{className:e,ref:i,children:n})}const tC=Ce.article`
  margin: 1em;
  font-size: 1.5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${t=>t.theme.fg.normal};
  align-self: center;
`,nC=Ce.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  background: ${t=>t.theme.bg.normal};
  backdrop-filter: blur(5px);
`;function Am({className:t,children:e}){return q.jsx(tC,{className:t,children:q.jsx(nC,{children:e})})}const iC=Ce.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;function Cm({className:t,children:e}){return q.jsx(iC,{className:t,children:e})}const rC=Ce.li`
  margin: 1em 0.5em;
`;function Ei({className:t,children:e}){return q.jsx(rC,{className:t,children:e})}const aC=Ce.div`
  margin-left: 1em;
  margin-top: 0.25em;
  margin-bottom: 0.5em;
`;function oC(){const t=Math.floor((new Date().getTime()-523e9)/31536e6);return q.jsxs(Fr,{anchor:"bio",children:[q.jsxs(zo,{children:["Bio",q.jsxs(q.Fragment,{children:[t," years old"]}),q.jsxs(q.Fragment,{children:["Living in"," ",q.jsx(ln,{url:"https://www.google.com/maps/place/Lyon",children:"Lyon, France"})]})]}),q.jsx(Am,{children:q.jsx(Cm,{children:KA.map(({start:e,end:n,activities:i})=>q.jsxs(Ei,{children:[q.jsx(qA,{start:e,end:n}),i.map(({name:r,role:a,url:o})=>q.jsxs(aC,{children:[a," at ",q.jsx(ln,{url:o,children:r})]},o))]},i.map(({name:r})=>r).join("|")))})})]})}var sC={prefix:"fab",iconName:"gitlab",icon:[512,512,[],"f296","M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"]},lC={prefix:"fab",iconName:"reddit-alien",icon:[512,512,[],"f281","M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"]},cC={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},uC={prefix:"far",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]};function fC(){return q.jsxs(Fr,{anchor:"contact",children:[q.jsx(zo,{children:"Contact"}),q.jsx(Am,{children:q.jsxs(Cm,{children:[q.jsxs(Ei,{children:[q.jsx(An,{icon:Wb})," ",q.jsx(ln,{url:"mailto:mounier.florian+dev@gmail.com",title:"Professional",children:"mounier.florian@gmail.com"})," "]}),q.jsxs(Ei,{children:[q.jsx(An,{icon:uC})," ",q.jsx(ln,{url:"mailto:paradoxxx.zero+dev@gmail.com",title:"Personal",children:"paradoxxx.zero@gmail.com"})]}),q.jsxs(Ei,{children:[q.jsx(An,{icon:cC})," ",q.jsx(ln,{url:"https://github.com/paradoxxxzero",title:"github",children:"paradoxxxzero"})]}),q.jsxs(Ei,{children:[q.jsx(An,{icon:sC})," ",q.jsx(ln,{url:"https://gitlab.com/paradoxxxzero",title:"gitlab",children:"paradoxxxzero"})]}),q.jsxs(Ei,{children:[q.jsx(An,{icon:lC})," ",q.jsx(ln,{url:"https://www.reddit.com/user/paradoxxx_zero",title:"reddit",children:"paradoxxx_zero"})]})]})})]})}const dC=Ce(Fr)`
  min-height: 400%;
`,hC=Ce(Fr)`
  min-height: 800%;
`;function pC(){return q.jsxs(q.Fragment,{children:[q.jsx(dC,{anchor:"extra"}),q.jsx(hC,{anchor:"extra2"}),q.jsx(Fr,{anchor:"end"})]})}function mC(){return q.jsx(Fr,{anchor:"home",children:q.jsxs(zo,{$level:1,children:["Full Stack Developper",q.jsx(q.Fragment,{children:"Skilled Pythonist"}),q.jsx(q.Fragment,{children:"Seasoned ECMAScripter"}),q.jsx(q.Fragment,{children:"Open Source Enthusiast"})]})})}const cu=680,gC=Ce.ul`
  position: relative;
  display: flex;
  flex-direction: ${t=>t.$expanded?"row":"column"};
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
`,vC=Ce.li`
  color: ${t=>t.theme.fg.normal};
  cursor: pointer;
  font-weight: ${t=>t.$active?"bold":"normal"};
  &:hover {
    background: ${t=>t.theme.bg.normal};
  }
  ${t=>t.$display&&Ju`
      padding: 1em ${e=>e.$expanded?"2em":"1em"};
    `};

  font-size: ${t=>t.$expanded?"1em":"1.25em"};
  user-select: none;
`,_C=Ce.div`
  position: absolute;
  background-color: ${t=>t.theme.fg.normal};
  height: 5px;
  left: 0;
  top: -3px;
  transition: ${t=>t.theme.animationDuration} all;
`,xC=Ce.div`
  position: absolute;
  background-color: ${t=>t.theme.fg.normal};
  width: 5px;
  right: 0;
  top: 0;
  transition: ${t=>t.theme.animationDuration} all;
`,yC=Ce.nav`
  backdrop-filter: blur(2px);
  position: fixed;
  right: 0;
  top: 2em;
  z-index: 42;

  ${t=>t.$expanded&&Ju`
      border-top: 2px solid ${e=>e.theme.fg.normal};
      min-width: 33%;
      max-width: max-content;
    `}
`,SC=[{name:"home",content:q.jsx(An,{icon:jb})},{name:"experiments",content:"Experiments"},{name:"projects",content:"Projects"},{name:"bio",content:"Bio"},{name:"contact",content:"Contact"},{name:"meta",content:"Meta"},{name:"extra",content:q.jsx(An,{icon:Hb})},{name:"extra2",content:null},{name:"end",content:null}];function MC({onScrollRequested:t}){const e=Wi(d=>d.anchors),{width:n}=Wi(d=>d.page),i=We.useRef(),r=We.useRef(),a=We.useRef({}),o=We.useRef(),{absolute:s}=Wi(d=>d.progression),l=Object.entries(e).sort((d,p)=>d[1]-p[1]).reduce((d,[p,_])=>s>=_?p:d,null),c=n>cu&&l===Object.keys(e)[0],u=d=>()=>t(e[d]),f=d=>p=>{a.current[d]=p};return We.useEffect(()=>{const{current:d}=i,{current:p}=r;if(!l)return;o.current!==null&&(clearTimeout(o.current),o.current=null);const _=a.current[l],x=()=>{c?(d.style.left=`${_.offsetLeft}px`,d.style.width=`${_.clientWidth}px`):(p.style.top=`${_.offsetTop}px`,p.style.height=`${_.clientHeight}px`),c?d.style.opacity=1:p.style.opacity=1};return!c&&+d.style.opacity==0?x():o.current=setTimeout(x,250),c?p.style.opacity=0:d.style.opacity=0,()=>{o.current!==null&&(clearTimeout(o.current),o.current=null)}},[i,r,o,a,l,c]),q.jsxs(yC,{anchor:"extra",$expanded:c,children:[q.jsx(_C,{ref:i}),q.jsx(xC,{ref:r}),q.jsx(gC,{$expanded:c,children:SC.map(({name:d,content:p})=>q.jsx(vC,{$anchor:d,$active:l===d,$expanded:c,$display:!!p,onClick:u(d),ref:f(d),title:typeof p=="string"?p:null,children:c||typeof p!="string"?p:p[0]},d))})]})}const EC=Ce.p`
  margin-top: 0.5em;
`,wC=Ce(zo)`
  justify-content: flex-end;
`;function bC(){return q.jsxs(Fr,{anchor:"meta",children:[q.jsx(zo,{children:"Meta"}),q.jsxs(Am,{children:[q.jsx(EC,{children:"This site has been hand-crafted with the help of these wonderful libraries:"}),q.jsxs(Cm,{children:[q.jsxs(Ei,{children:[q.jsx(ln,{url:"https://react.dev/",children:"React"})," — for building the structure."]}),q.jsxs(Ei,{children:[q.jsx(ln,{url:"https://redux.js.org/",children:"redux"})," ","— for containing this application state."]}),q.jsxs(Ei,{children:[q.jsx(ln,{url:"https://threejs.org/",children:"three.js"})," ","— for a simple and powerful API on top of WebGL."]}),q.jsxs(Ei,{children:[q.jsx(ln,{url:"https://vitejs.dev/",children:"vite"})," — to put everything together."]})]})]}),q.jsxs(wC,{$level:3,children:["Browse this site source code at",q.jsx(ln,{url:"https://github.com/paradoxxxzero/paradoxxxzero.github.io/tree/src",children:"github.com/paradoxxxzero/paradoxxxzero.github.io"})]})]})}const TC=t=>t.replace(/https?:\/\/(.*)\/?/,"$1"),J0=t=>t.reduce((e,{full_name:n,stargazers_count:i})=>(e[n]=i,e),{}),AC=(t,e,n)=>isNaN(t)?e:Math.min(n,Math.max(e,t)),wa=(t,{start:e,end:n},i=0,r=1)=>AC((t-e)/(n-e),i,r),ev=()=>new Date().getTime(),CC=50,tv=async t=>{const e=await fetch(t),[n]=(e.headers.get("Content-Type")||"").split(";");if(e.status>300||e.status<200){if(n!=="application/json"){const r=await e.text();return console.error(e.status,r),{data:[],response:e}}const i=await e.json();return console.error(e.status,i.message||i.description,i),{data:[],response:e}}return{data:await e.json(),response:e}},RC=async t=>{const e=o=>`https://api.github.com/${t}/repos?per_page=${CC}&page=${o}`,{data:n,response:i}=await tv(e(1)),r=i.headers.get("Link");if(!r)return[];const a=+r.match(/<.+page=(\d+)>;\srel="last"/)[1];return a!==1&&(await Promise.all(new Array(a-1).fill().map((o,s)=>tv(e(s+2))))).map(({data:o})=>n.push(...o)),n},PC=()=>async t=>{try{const r=JSON.parse(localStorage.getItem("stars")||"{}");if(Object.keys(r).length&&(t(b0(r.stars)),ev()-r.time<1e3*60*60))return}catch(r){console.error(r)}const[e,n]=await Promise.all(["users/paradoxxxzero","orgs/Kozea"].map(r=>RC(r))),i={...J0(e),...J0(n)};try{localStorage.setItem("stars",JSON.stringify({time:ev(),stars:i}))}catch(r){console.error(r)}return t(b0(i))},LC=""+new URL("default-cae45da6.png",import.meta.url).href,gS=Ce.a`
  display: flex;
  color: gold;
  text-decoration: none;
`,IC=Ce.span`
  color: ${t=>t.theme.fg.normal};
`;function DC({url:t,stars:e,className:n}){return e==null&&(e=null),q.jsxs(gS,{href:t,className:n,children:[q.jsx(IC,{children:e||""}),q.jsx("span",{children:" "}),q.jsx(An,{icon:zb})]})}const UC=Ce.article`
  flex: 2;
  margin: 1em;
`,vS=Ce.h2`
  display: flex;
  justify-content: space-between;
  flex: 1;
  color: ${t=>t.theme.fg.normal};
  margin: 0.5em 0;
`,NC=Ce.span`
  font-size: 0.75em;
  color: ${t=>t.theme.fg.mute};
`,_S=Ce.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`,xS=Ce.li`
  background: ${t=>t.theme.bg.normal};
  padding: 0.3em;
  margin: 0.2em;
  color: ${t=>t.theme.fg.mute};
`,OC=Ce(xS)`
  font-size: 0.75em;
`,kC=Ce(xS)`
  font-size: 0.66em;
`,FC=Ce.div`
  margin: 1em 0;
  color: ${t=>t.theme.fg.mute};
`,zC=Ce.aside`
  flex: 1;
  display: flex;
`,BC=Ce(ln)`
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
`,HC=Ce(ln)`
  a {
    color: inherit;
    text-decoration: none;
  }
`,GC=Ce(ln)`
  @media (max-width: ${`${cu}px`}) {
    word-break: break-all;
  }
`,VC=Ce.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  min-width: 256px;
`,WC=Ce.li`
  background: ${t=>t.theme.bg.normal};
  ${t=>t.$unreleased&&Ju`
      filter: grayscale(0.1);
    `};

  margin: 1em;
  font-size: ${t=>t.$major?"1.5em":"1.15em"};
  text-align: left;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: ${`${cu}px`}) {
    flex-direction: column-reverse;
  }

  &:nth-child(2n) {
    flex-direction: row;
    @media (max-width: ${`${cu}px`}) {
      flex-direction: column-reverse;
    }
    text-align: right;
    ${vS} {
      flex-direction: row-reverse;
    }
    ${gS} {
      flex-direction: row-reverse;
    }
    ${_S} {
      flex-direction: row-reverse;
    }
  }
`;function jC({id:t,name:e,url:n,demoUrl:i,description:r,languages:a,libraries:o,major:s,preview:l,unreleased:c}){const f=Wi(p=>p.stars)[t],d=i||n;return q.jsxs(WC,{$major:s,$unreleased:c,children:[q.jsxs(UC,{children:[q.jsxs(vS,{children:[q.jsx(HC,{url:d,children:e}),q.jsx(DC,{url:n,stars:f})]}),q.jsxs(_S,{children:[a.map(p=>q.jsx(OC,{children:p},p)),o.map(p=>q.jsx(kC,{children:p},p))]}),q.jsx(FC,{children:r}),c?q.jsx(NC,{children:" Unreleased"}):q.jsx(GC,{url:d,children:TC(d)})]}),q.jsx(zC,{children:q.jsx(BC,{url:d,children:q.jsx(VC,{src:l||LC,alt:`Image preview of ${e}`})})})]})}const $C={projects:"Projects",experiments:"Experiments"},XC=Ce.ul`
  max-width: 1000px;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
`;function nv({type:t}){const e=lm(),n=Wi(i=>i.projects).filter(i=>i.type===t).sort((i,r)=>r.major-i.major);return We.useEffect(()=>{e(PC())},[e]),q.jsxs(Fr,{anchor:t,children:[q.jsx(zo,{children:$C[t]}),q.jsx(XC,{children:n.filter(({hidden:i})=>!i).map(i=>q.jsx(jC,{...i},i.id))})]})}const YC=Ce.main`
  position: relative;
  z-index: 2;
  height: 100%;
`;function qC(){const t=lm(),e=We.useCallback(n=>{document.scrollingElement.scrollTo(0,n)},[]);return We.useEffect(()=>{const n=()=>{t(Fb(window.innerWidth,document.body.clientHeight,window.devicePixelRatio))},i=r=>{const{scrollingElement:a}=r.target,{clientHeight:o,scrollTop:s,scrollHeight:l}=a,c=s/(l-o);t(Ob(c,s,l))};return window.addEventListener("resize",n,!1),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("load",i,!1),()=>{window.removeEventListener("resize",n),window.removeEventListener("scroll",i),window.removeEventListener("load",i)}},[t]),q.jsx(Db,{theme:Nb,children:q.jsxs(YC,{children:[q.jsx(MC,{onScrollRequested:e}),q.jsx(mC,{}),q.jsx(nv,{type:"experiments"}),q.jsx(nv,{type:"projects"}),q.jsx(oC,{}),q.jsx(fC,{}),q.jsx(bC,{}),q.jsx(pC,{})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rm="154",KC=0,iv=1,ZC=2,yS=1,QC=2,Oi=3,Dr=0,un=1,Cn=2,ji=0,oa=1,$i=2,rv=3,av=4,JC=5,Ha=100,eR=101,tR=102,ov=103,sv=104,nR=200,iR=201,rR=202,aR=203,SS=204,MS=205,oR=206,sR=207,lR=208,cR=209,uR=210,fR=0,dR=1,hR=2,Qh=3,pR=4,mR=5,gR=6,vR=7,af=0,_R=1,xR=2,di=0,yR=1,SR=2,MR=3,ES=4,ER=5,wS=300,Po=301,Lo=302,Jh=303,ep=304,of=306,Ys=1e3,oi=1001,tp=1002,on=1003,lv=1004,td=1005,Bn=1006,wR=1007,qs=1008,Tr=1009,bR=1010,TR=1011,Pm=1012,bS=1013,gr=1014,vr=1015,Ur=1016,TS=1017,AS=1018,sa=1020,AR=1021,si=1023,CR=1024,RR=1025,la=1026,Io=1027,PR=1028,CS=1029,LR=1030,RS=1031,PS=1033,nd=33776,id=33777,rd=33778,ad=33779,cv=35840,uv=35841,fv=35842,dv=35843,IR=36196,hv=37492,pv=37496,mv=37808,gv=37809,vv=37810,_v=37811,xv=37812,yv=37813,Sv=37814,Mv=37815,Ev=37816,wv=37817,bv=37818,Tv=37819,Av=37820,Cv=37821,od=36492,DR=36283,Rv=36284,Pv=36285,Lv=36286,LS=3e3,ca=3001,UR=3200,NR=3201,Lm=0,OR=1,ua="",Oe="srgb",Xn="srgb-linear",IS="display-p3",sd=7680,kR=519,FR=512,zR=513,BR=514,HR=515,GR=516,VR=517,WR=518,jR=519,Iv=35044,Dv=35040,Uv="300 es",np=1035,Gi=2e3,uu=2001;class Bo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,ip=180/Math.PI;function sl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function $R(t,e){return(t%e+e)%e}function cd(t,e,n){return(1-n)*t+n*e}function Nv(t){return(t&t-1)===0&&t!==0}function rp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Bl(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,a,o,s,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c)}set(e,n,i,r,a,o,s,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=s,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],g=r[3],h=r[6],v=r[1],m=r[4],y=r[7],S=r[2],w=r[5],E=r[8];return a[0]=o*x+s*v+l*S,a[3]=o*g+s*m+l*w,a[6]=o*h+s*y+l*E,a[1]=c*x+u*v+f*S,a[4]=c*g+u*m+f*w,a[7]=c*h+u*y+f*E,a[2]=d*x+p*v+_*S,a[5]=d*g+p*m+_*w,a[8]=d*h+p*y+_*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*s*c-i*a*u+i*s*l+r*a*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=u*o-s*c,d=s*l-u*a,p=c*a-o*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(s*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*a-s*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(ud.makeScale(e,n)),this}rotate(e){return this.premultiply(ud.makeRotation(-e)),this}translate(e,n){return this.premultiply(ud.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ud=new Fe;function DS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ks(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Ov={};function Es(t){t in Ov||(Ov[t]=!0,console.warn(t))}function po(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const XR=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),YR=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function qR(t){return t.convertSRGBToLinear().applyMatrix3(YR)}function KR(t){return t.applyMatrix3(XR).convertLinearToSRGB()}const ZR={[Xn]:t=>t,[Oe]:t=>t.convertSRGBToLinear(),[IS]:qR},QR={[Xn]:t=>t,[Oe]:t=>t.convertLinearToSRGB(),[IS]:KR},Qn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Xn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ZR[e],r=QR[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ba;class US{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ba===void 0&&(ba=Ks("canvas")),ba.width=e.width,ba.height=e.height;const i=ba.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ba}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ks("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=po(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(po(n[i]/255)*255):n[i]=po(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JR=0;class NS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JR++}),this.uuid=sl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(dd(r[o].image)):a.push(dd(r[o]))}else a=dd(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function dd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?US.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let e3=0;class yn extends Bo{constructor(e=yn.DEFAULT_IMAGE,n=yn.DEFAULT_MAPPING,i=oi,r=oi,a=Bn,o=qs,s=si,l=Tr,c=yn.DEFAULT_ANISOTROPY,u=ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e3++}),this.uuid=sl(),this.name="",this.source=new NS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ca?Oe:ua),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case tp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case tp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Oe?ca:LS}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ca?Oe:ua}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=wS;yn.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,n=0,i=0,r=1){Qe.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,y=(p+1)/2,S=(h+1)/2,w=(u+d)/4,E=(f+x)/4,R=(_+g)/4;return m>y&&m>S?m<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(m),r=w/i,a=E/i):y>S?y<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(y),i=w/r,a=R/r):S<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(S),i=E/a,r=R/a),this.set(i,r,a,n),this}let v=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-x)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends Bo{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Qe(0,0,e,n),this.scissorTest=!1,this.viewport=new Qe(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ca?Oe:ua),this.texture=new yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new NS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OS extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class t3 extends yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=a[o+0],p=a[o+1],_=a[o+2],x=a[o+3];if(s===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(s===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==d||c!==p||u!==_){let g=1-s;const h=l*d+c*p+u*_+f*x,v=h>=0?1:-1,m=1-h*h;if(m>Number.EPSILON){const S=Math.sqrt(m),w=Math.atan2(S,h*v);g=Math.sin(g*w)/S,s=Math.sin(s*w)/S}const y=s*v;if(l=l*g+d*y,c=c*g+p*y,u=u*g+_*y,f=f*g+x*y,g===1-s){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=a[o],d=a[o+1],p=a[o+2],_=a[o+3];return e[n]=s*_+u*f+l*p-c*d,e[n+1]=l*_+u*d+c*f-s*p,e[n+2]=c*_+u*p+s*d-l*f,e[n+3]=u*_-s*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),u=s(r/2),f=s(a/2),d=l(i/2),p=l(r/2),_=l(a/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+s+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(o-r)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*s+r*c-a*l,this._y=r*u+o*l+a*s-i*c,this._z=a*u+o*c+i*l-r*s,this._w=o*u-i*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,s),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=a*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=l*n+o*r-s*i,u=l*i+s*n-a*r,f=l*r+a*i-o*n,d=-a*n-o*i-s*r;return this.x=c*l+d*-a+u*-s-f*-o,this.y=u*l+d*-o+f*-a-c*-s,this.z=f*l+d*-s+c*-o-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hd.copy(this).projectOnVector(e),this.sub(hd)}reflect(e){return this.sub(hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hd=new P,kv=new Ho;class ll{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox),Ta.applyMatrix4(e.matrixWorld),this.union(Ta);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)Li.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Li)}else r.boundingBox===null&&r.computeBoundingBox(),Ta.copy(r.boundingBox),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Hl.subVectors(this.max,Jo),Aa.subVectors(e.a,Jo),Ca.subVectors(e.b,Jo),Ra.subVectors(e.c,Jo),rr.subVectors(Ca,Aa),ar.subVectors(Ra,Ca),Gr.subVectors(Aa,Ra);let n=[0,-rr.z,rr.y,0,-ar.z,ar.y,0,-Gr.z,Gr.y,rr.z,0,-rr.x,ar.z,0,-ar.x,Gr.z,0,-Gr.x,-rr.y,rr.x,0,-ar.y,ar.x,0,-Gr.y,Gr.x,0];return!pd(n,Aa,Ca,Ra,Hl)||(n=[1,0,0,0,1,0,0,0,1],!pd(n,Aa,Ca,Ra,Hl))?!1:(Gl.crossVectors(rr,ar),n=[Gl.x,Gl.y,Gl.z],pd(n,Aa,Ca,Ra,Hl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new P,new P,new P,new P,new P,new P,new P,new P],Li=new P,Ta=new ll,Aa=new P,Ca=new P,Ra=new P,rr=new P,ar=new P,Gr=new P,Jo=new P,Hl=new P,Gl=new P,Vr=new P;function pd(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){Vr.fromArray(t,a);const s=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>s)return!1}return!0}const n3=new ll,es=new P,md=new P;class cl{constructor(e=new P,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):n3.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const n=es.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(md)),this.expandByPoint(es.copy(e.center).sub(md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new P,gd=new P,Vl=new P,or=new P,vd=new P,Wl=new P,_d=new P;class Im{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gd.copy(e).add(n).multiplyScalar(.5),Vl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(gd);const a=e.distanceTo(n)*.5,o=-this.direction.dot(Vl),s=or.dot(this.direction),l=-or.dot(Vl),c=or.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-s,d=o*s-l,_=a*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+o*d+2*s)+d*(o*f+d+2*l)+c}else d=a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d=-a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*a+s)),d=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(f=Math.max(0,-(o*a+s)),d=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+d*(d+2*l)+c);else d=o>0?-a:a,f=Math.max(0,-(o*d+s)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(gd).addScaledVector(Vl,d),p}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(a=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(a=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,a){vd.subVectors(n,e),Wl.subVectors(i,e),_d.crossVectors(vd,Wl);let o=this.direction.dot(_d),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=s*this.direction.dot(Wl.crossVectors(or,Wl));if(l<0)return null;const c=s*this.direction.dot(vd.cross(or));if(c<0||l+c>o)return null;const u=-s*or.dot(_d);return u<0?null:this.at(u/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,n,i,r,a,o,s,l,c,u,f,d,p,_,x,g){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,o,s,l,c,u,f,d,p,_,x,g)}set(e,n,i,r,a,o,s,l,c,u,f,d,p,_,x,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=a,h[5]=o,h[9]=s,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pa.setFromMatrixColumn(e,0).length(),a=1/Pa.setFromMatrixColumn(e,1).length(),o=1/Pa.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const d=o*u,p=o*f,_=s*u,x=s*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=d-x*c,n[9]=-s*l,n[2]=x-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d+x*s,n[4]=_*s-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-s,n[2]=p*s-_,n[6]=x+d*s,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,x=c*f;n[0]=d-x*s,n[4]=-o*f,n[8]=_+p*s,n[1]=p+_*s,n[5]=o*u,n[9]=x-d*s,n[2]=-o*c,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=s*u,x=s*f;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=p*c-_,n[2]=-c,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=s*l,x=s*c;n[0]=l*u,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=o*u,n[9]=-s*u,n[2]=-c*u,n[6]=p*f+_,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=s*l,x=s*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=s*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i3,e,r3)}lookAt(e,n,i){const r=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),sr.crossVectors(i,En),sr.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),sr.crossVectors(i,En)),sr.normalize(),jl.crossVectors(En,sr),r[0]=sr.x,r[4]=jl.x,r[8]=En.x,r[1]=sr.y,r[5]=jl.y,r[9]=En.y,r[2]=sr.z,r[6]=jl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],g=i[10],h=i[14],v=i[3],m=i[7],y=i[11],S=i[15],w=r[0],E=r[4],R=r[8],M=r[12],b=r[1],G=r[5],Q=r[9],N=r[13],H=r[2],F=r[6],Z=r[10],j=r[14],I=r[3],z=r[7],B=r[11],D=r[15];return a[0]=o*w+s*b+l*H+c*I,a[4]=o*E+s*G+l*F+c*z,a[8]=o*R+s*Q+l*Z+c*B,a[12]=o*M+s*N+l*j+c*D,a[1]=u*w+f*b+d*H+p*I,a[5]=u*E+f*G+d*F+p*z,a[9]=u*R+f*Q+d*Z+p*B,a[13]=u*M+f*N+d*j+p*D,a[2]=_*w+x*b+g*H+h*I,a[6]=_*E+x*G+g*F+h*z,a[10]=_*R+x*Q+g*Z+h*B,a[14]=_*M+x*N+g*j+h*D,a[3]=v*w+m*b+y*H+S*I,a[7]=v*E+m*G+y*F+S*z,a[11]=v*R+m*Q+y*Z+S*B,a[15]=v*M+m*N+y*j+S*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],g=e[11],h=e[15];return _*(+a*l*f-r*c*f-a*s*d+i*c*d+r*s*p-i*l*p)+x*(+n*l*p-n*c*d+a*o*d-r*o*p+r*c*u-a*l*u)+g*(+n*c*f-n*s*p-a*o*f+i*o*p+a*s*u-i*c*u)+h*(-r*s*u-n*l*f+n*s*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],g=e[14],h=e[15],v=f*g*c-x*d*c+x*l*p-s*g*p-f*l*h+s*d*h,m=_*d*c-u*g*c-_*l*p+o*g*p+u*l*h-o*d*h,y=u*x*c-_*f*c+_*s*p-o*x*p-u*s*h+o*f*h,S=_*f*l-u*x*l-_*s*d+o*x*d+u*s*g-o*f*g,w=n*v+i*m+r*y+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(x*d*a-f*g*a-x*r*p+i*g*p+f*r*h-i*d*h)*E,e[2]=(s*g*a-x*l*a+x*r*c-i*g*c-s*r*h+i*l*h)*E,e[3]=(f*l*a-s*d*a-f*r*c+i*d*c+s*r*p-i*l*p)*E,e[4]=m*E,e[5]=(u*g*a-_*d*a+_*r*p-n*g*p-u*r*h+n*d*h)*E,e[6]=(_*l*a-o*g*a-_*r*c+n*g*c+o*r*h-n*l*h)*E,e[7]=(o*d*a-u*l*a+u*r*c-n*d*c-o*r*p+n*l*p)*E,e[8]=y*E,e[9]=(_*f*a-u*x*a-_*i*p+n*x*p+u*i*h-n*f*h)*E,e[10]=(o*x*a-_*s*a+_*i*c-n*x*c-o*i*h+n*s*h)*E,e[11]=(u*s*a-o*f*a-u*i*c+n*f*c+o*i*p-n*s*p)*E,e[12]=S*E,e[13]=(u*x*r-_*f*r+_*i*d-n*x*d-u*i*g+n*f*g)*E,e[14]=(_*s*r-o*x*r-_*i*l+n*x*l+o*i*g-n*s*g)*E,e[15]=(o*f*r-u*s*r+u*i*l-n*f*l-o*i*d+n*s*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,u=a*s;return this.set(c*o+i,c*s-r*l,c*l+r*s,0,c*s+r*l,u*s+i,u*l-r*o,0,c*l-r*s,u*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,c=a+a,u=o+o,f=s+s,d=a*c,p=a*u,_=a*f,x=o*u,g=o*f,h=s*f,v=l*c,m=l*u,y=l*f,S=i.x,w=i.y,E=i.z;return r[0]=(1-(x+h))*S,r[1]=(p+y)*S,r[2]=(_-m)*S,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+h))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(_+m)*E,r[9]=(g-v)*E,r[10]=(1-(d+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=Pa.set(r[0],r[1],r[2]).length();const o=Pa.set(r[4],r[5],r[6]).length(),s=Pa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/a,u=1/o,f=1/s;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,n.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o,s=Gi){const l=this.elements,c=2*a/(n-e),u=2*a/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(s===Gi)p=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===uu)p=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,o,s=Gi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-a),d=(n+e)*c,p=(i+r)*u;let _,x;if(s===Gi)_=(o+a)*f,x=-2*f;else if(s===uu)_=a*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pa=new P,Jn=new tt,i3=new P(0,0,0),r3=new P(1,1,1),sr=new P,jl=new P,En=new P,Fv=new tt,zv=new Ho;class sf{constructor(e=0,n=0,i=0,r=sf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zv.setFromEuler(this),this.setFromQuaternion(zv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sf.DEFAULT_ORDER="XYZ";class kS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a3=0;const Bv=new P,La=new Ho,Di=new tt,$l=new P,ts=new P,o3=new P,s3=new Ho,Hv=new P(1,0,0),Gv=new P(0,1,0),Vv=new P(0,0,1),l3={type:"added"},Wv={type:"removed"};class Jt extends Bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a3++}),this.uuid=sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new P,n=new sf,i=new Ho,r=new P(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Fe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new kS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return La.setFromAxisAngle(e,n),this.quaternion.multiply(La),this}rotateOnWorldAxis(e,n){return La.setFromAxisAngle(e,n),this.quaternion.premultiply(La),this}rotateX(e){return this.rotateOnAxis(Hv,e)}rotateY(e){return this.rotateOnAxis(Gv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,n){return Bv.copy(e).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hv,e)}translateY(e){return this.translateOnAxis(Gv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$l.copy(e):$l.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(ts,$l,this.up):Di.lookAt($l,ts,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),La.setFromRotationMatrix(Di),this.quaternion.premultiply(La.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(l3)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wv)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Wv)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,o3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,s3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const l=[];for(const c in s){const u=s[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new P(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new P,Ui=new P,xd=new P,Ni=new P,Ia=new P,Da=new P,jv=new P,yd=new P,Sd=new P,Md=new P;let Xl=!1;class ai{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ei.subVectors(e,n),r.cross(ei);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){ei.subVectors(r,n),Ui.subVectors(i,n),xd.subVectors(e,n);const o=ei.dot(ei),s=ei.dot(Ui),l=ei.dot(xd),c=Ui.dot(Ui),u=Ui.dot(xd),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const d=1/f,p=(c*l-s*u)*d,_=(o*u-s*l)*d;return a.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni),Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,n,i,r,a,o,s,l){return Xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xl=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,Ni),l.setScalar(0),l.addScaledVector(a,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(s,Ni.z),l}static isFrontFacing(e,n,i,r){return ei.subVectors(i,n),Ui.subVectors(e,n),ei.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),ei.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ai.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return Xl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xl=!0),ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return ai.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;Ia.subVectors(r,i),Da.subVectors(a,i),yd.subVectors(e,i);const l=Ia.dot(yd),c=Da.dot(yd);if(l<=0&&c<=0)return n.copy(i);Sd.subVectors(e,r);const u=Ia.dot(Sd),f=Da.dot(Sd);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ia,o);Md.subVectors(e,a);const p=Ia.dot(Md),_=Da.dot(Md);if(_>=0&&p<=_)return n.copy(a);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return s=c/(c-_),n.copy(i).addScaledVector(Da,s);const g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return jv.subVectors(a,r),s=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(jv,s);const h=1/(g+x+d);return o=x*h,s=d*h,n.copy(i).addScaledVector(Ia,o).addScaledVector(Da,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let c3=0;class zr extends Bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=sl(),this.name="",this.type="Material",this.blending=oa,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=SS,this.blendDst=MS,this.blendEquation=Ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Qh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kR,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sd,this.stencilZFail=sd,this.stencilZPass=sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==oa&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const FS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Ed(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Le{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Oe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qn.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qn.workingColorSpace){if(e=$R(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=Ed(o,a,e+1/3),this.g=Ed(o,a,e),this.b=Ed(o,a,e-1/3)}return Qn.toWorkingColorSpace(this,r),this}setStyle(e,n=Oe){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Oe){const i=FS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}copyLinearToSRGB(e){return this.r=fd(e.r),this.g=fd(e.g),this.b=fd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oe){return Qn.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Gt(Kt.r*255,0,255))*65536+Math.round(Gt(Kt.g*255,0,255))*256+Math.round(Gt(Kt.b*255,0,255))}getHexString(e=Oe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qn.workingColorSpace){Qn.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,a=Kt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,c;const u=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=u<=.5?f/(o+s):f/(2-o-s),o){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qn.workingColorSpace){return Qn.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Oe){Qn.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Oe?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ti),ti.h+=e,ti.s+=n,ti.l+=i,this.setHSL(ti.h,ti.s,ti.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ti),e.getHSL(Yl);const i=cd(ti.h,Yl.h,n),r=cd(ti.s,Yl.s,n),a=cd(ti.l,Yl.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Le;Le.NAMES=FS;class zS extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new P,ql=new Ge;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Iv,this.updateRange={offset:0,count:-1},this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ql.fromBufferAttribute(this,n),ql.applyMatrix3(e),this.setXY(n,ql.x,ql.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bl(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bl(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bl(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Iv&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class BS extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class HS extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ln extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let u3=0;const kn=new tt,wd=new Jt,Ua=new P,wn=new ll,ns=new ll,Nt=new P;class qn extends Bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u3++}),this.uuid=sl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DS(e)?HS:BS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Fe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ua).negate(),this.translate(Ua.x,Ua.y,Ua.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ln(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];wn.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];ns.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(wn.min,ns.min),wn.expandByPoint(Nt),Nt.addVectors(wn.max,ns.max),wn.expandByPoint(Nt)):(wn.expandByPoint(ns.min),wn.expandByPoint(ns.max))}wn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Nt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let c=0,u=s.count;c<u;c++)Nt.fromBufferAttribute(s,c),l&&(Ua.fromBufferAttribute(e,c),Nt.add(Ua)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<s;b++)c[b]=new P,u[b]=new P;const f=new P,d=new P,p=new P,_=new Ge,x=new Ge,g=new Ge,h=new P,v=new P;function m(b,G,Q){f.fromArray(r,b*3),d.fromArray(r,G*3),p.fromArray(r,Q*3),_.fromArray(o,b*2),x.fromArray(o,G*2),g.fromArray(o,Q*2),d.sub(f),p.sub(f),x.sub(_),g.sub(_);const N=1/(x.x*g.y-g.x*x.y);isFinite(N)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(N),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(N),c[b].add(h),c[G].add(h),c[Q].add(h),u[b].add(v),u[G].add(v),u[Q].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let b=0,G=y.length;b<G;++b){const Q=y[b],N=Q.start,H=Q.count;for(let F=N,Z=N+H;F<Z;F+=3)m(i[F+0],i[F+1],i[F+2])}const S=new P,w=new P,E=new P,R=new P;function M(b){E.fromArray(a,b*3),R.copy(E);const G=c[b];S.copy(G),S.sub(E.multiplyScalar(E.dot(G))).normalize(),w.crossVectors(R,G);const N=w.dot(u[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=N}for(let b=0,G=y.length;b<G;++b){const Q=y[b],N=Q.start,H=Q.count;for(let F=N,Z=N+H;F<Z;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new P,a=new P,o=new P,s=new P,l=new P,c=new P,u=new P,f=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),s.add(u),l.add(u),c.add(u),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),a.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,a),f.subVectors(r,a),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(s,l){const c=s.array,u=s.itemSize,f=s.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){s.isInterleavedBufferAttribute?p=l[x]*s.data.stride+s.offset:p=l[x]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);n.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $v=new tt,Wr=new Im,Kl=new cl,Xv=new P,Na=new P,Oa=new P,ka=new P,bd=new P,Zl=new P,Ql=new Ge,Jl=new Ge,ec=new Ge,Yv=new P,qv=new P,Kv=new P,tc=new P,nc=new P;class gn extends Jt{constructor(e=new qn,n=new zS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){Zl.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=s[l],f=a[l];u!==0&&(bd.fromBufferAttribute(f,e),o?Zl.addScaledVector(bd,u):Zl.addScaledVector(bd.sub(n),u))}n.add(Zl)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(a),Wr.copy(e.ray).recast(e.near),!(Kl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Kl,Xv)===null||Wr.origin.distanceToSquared(Xv)>(e.far-e.near)**2))&&($v.copy(a).invert(),Wr.copy(e.ray).applyMatrix4($v),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,d=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(s.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,S=m;y<S;y+=3){const w=s.getX(y),E=s.getX(y+1),R=s.getX(y+2);r=ic(this,h,e,i,c,u,f,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(s.count,p.start+p.count);for(let g=_,h=x;g<h;g+=3){const v=s.getX(g),m=s.getX(g+1),y=s.getX(g+2);r=ic(this,o,e,i,c,u,f,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const g=d[_],h=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,S=m;y<S;y+=3){const w=y,E=y+1,R=y+2;r=ic(this,h,e,i,c,u,f,w,E,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,h=x;g<h;g+=3){const v=g,m=g+1,y=g+2;r=ic(this,o,e,i,c,u,f,v,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function f3(t,e,n,i,r,a,o,s){let l;if(e.side===un?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===Dr,s),l===null)return null;nc.copy(s),nc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(nc);return c<n.near||c>n.far?null:{distance:c,point:nc.clone(),object:t}}function ic(t,e,n,i,r,a,o,s,l,c){t.getVertexPosition(s,Na),t.getVertexPosition(l,Oa),t.getVertexPosition(c,ka);const u=f3(t,e,n,i,Na,Oa,ka,tc);if(u){r&&(Ql.fromBufferAttribute(r,s),Jl.fromBufferAttribute(r,l),ec.fromBufferAttribute(r,c),u.uv=ai.getInterpolation(tc,Na,Oa,ka,Ql,Jl,ec,new Ge)),a&&(Ql.fromBufferAttribute(a,s),Jl.fromBufferAttribute(a,l),ec.fromBufferAttribute(a,c),u.uv1=ai.getInterpolation(tc,Na,Oa,ka,Ql,Jl,ec,new Ge),u.uv2=u.uv1),o&&(Yv.fromBufferAttribute(o,s),qv.fromBufferAttribute(o,l),Kv.fromBufferAttribute(o,c),u.normal=ai.getInterpolation(tc,Na,Oa,ka,Yv,qv,Kv,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new P,materialIndex:0};ai.getNormal(Na,Oa,ka,f.normal),u.face=f}return u}class Go extends qn{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,a,0),_("z","y","x",1,-1,i,n,-e,o,a,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,a,4),_("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(f,2));function _(x,g,h,v,m,y,S,w,E,R,M){const b=y/E,G=S/R,Q=y/2,N=S/2,H=w/2,F=E+1,Z=R+1;let j=0,I=0;const z=new P;for(let B=0;B<Z;B++){const D=B*G-N;for(let V=0;V<F;V++){const re=V*b-Q;z[x]=re*v,z[g]=D*m,z[h]=H,c.push(z.x,z.y,z.z),z[x]=0,z[g]=0,z[h]=w>0?1:-1,u.push(z.x,z.y,z.z),f.push(V/E),f.push(1-B/R),j+=1}}for(let B=0;B<R;B++)for(let D=0;D<E;D++){const V=d+D+F*B,re=d+D+F*(B+1),ee=d+(D+1)+F*(B+1),oe=d+(D+1)+F*B;l.push(V,re,oe),l.push(re,ee,oe),I+=6}s.addGroup(p,I,M),p+=I,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Do(t[n]);for(const r in i)e[r]=i[r]}return e}function d3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function GS(t){return t.getRenderTarget()===null?t.outputColorSpace:Xn}const ul={clone:Do,merge:rn};var h3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h3,this.fragmentShader=p3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=d3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class VS extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends VS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ld*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fa=-90,za=1;class m3 extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new sn(Fa,za,e,n);r.layers=this.layers,this.add(r);const a=new sn(Fa,za,e,n);a.layers=this.layers,this.add(a);const o=new sn(Fa,za,e,n);o.layers=this.layers,this.add(o);const s=new sn(Fa,za,e,n);s.layers=this.layers,this.add(s);const l=new sn(Fa,za,e,n);l.layers=this.layers,this.add(l);const c=new sn(Fa,za,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,o,s,l]=n;for(const c of n)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,s,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=di,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,a),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,s),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class WS extends yn{constructor(e,n,i,r,a,o,s,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Po,super(e,n,i,r,a,o,s,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class g3 extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ca?Oe:ua),this.texture=new WS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Go(5,5,5),a=new fn({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:ji});a.uniforms.tEquirect.value=n;const o=new gn(r,a),s=n.minFilter;return n.minFilter===qs&&(n.minFilter=Bn),new m3(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const Td=new P,v3=new P,_3=new Fe;class yi{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Td.subVectors(i,n).cross(v3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Td),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_3.getNormalMatrix(e),r=this.coplanarPoint(Td).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new cl,rc=new P;class Dm{constructor(e=new yi,n=new yi,i=new yi,r=new yi,a=new yi,o=new yi){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gi){const i=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],g=r[11],h=r[12],v=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-a,d-c,g-p,y-h).normalize(),i[1].setComponents(l+a,d+c,g+p,y+h).normalize(),i[2].setComponents(l+o,d+u,g+_,y+v).normalize(),i[3].setComponents(l-o,d-u,g-_,y-v).normalize(),i[4].setComponents(l-s,d-f,g-x,y-m).normalize(),n===Gi)i[5].setComponents(l+s,d+f,g+x,y+m).normalize();else if(n===uu)i[5].setComponents(s,f,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(rc.x=r.normal.x>0?e.max.x:e.min.x,rc.y=r.normal.y>0?e.max.y:e.min.y,rc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jS(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function x3(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=t.createBuffer();t.bindBuffer(u,p),t.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,u,f){const d=u.array,p=u.updateRange;t.bindBuffer(f,c),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(a(f.buffer,c,u),f.version=c.version)}return{get:o,remove:s,update:l}}class lf extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),c=s+1,u=l+1,f=e/s,d=n/l,p=[],_=[],x=[],g=[];for(let h=0;h<u;h++){const v=h*d-o;for(let m=0;m<c;m++){const y=m*f-a;_.push(y,-v,0),x.push(0,0,1),g.push(m/s),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<s;v++){const m=v+c*h,y=v+c*(h+1),S=v+1+c*(h+1),w=v+1+c*h;p.push(m,y,w),p.push(y,S,w)}this.setIndex(p),this.setAttribute("position",new Ln(_,3)),this.setAttribute("normal",new Ln(x,3)),this.setAttribute("uv",new Ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.width,e.height,e.widthSegments,e.heightSegments)}}var y3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S3=`#ifdef USE_ALPHAHASH
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
#endif`,M3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w3=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,L3=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,I3=`#ifdef USE_BUMPMAP
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
#endif`,D3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,B3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H3=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
} // validated`,G3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,V3=`vec3 transformedNormal = objectNormal;
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
#endif`,W3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y3="gl_FragColor = linearToOutputTexel( gl_FragColor );",q3=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K3=`#ifdef USE_ENVMAP
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
#endif`,Z3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q3=`#ifdef USE_ENVMAP
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
#endif`,J3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eP=`#ifdef USE_ENVMAP
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
#endif`,tP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aP=`#ifdef USE_GRADIENTMAP
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
}`,oP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,fP=`#ifdef USE_ENVMAP
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
#endif`,dP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,vP=`struct PhysicalMaterial {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,_P=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
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
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,SP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,wP=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bP=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,TP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CP=`#if defined( USE_POINTS_UV )
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
#endif`,RP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LP=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IP=`#ifdef USE_MORPHNORMALS
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
#endif`,DP=`#ifdef USE_MORPHTARGETS
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
#endif`,UP=`#ifdef USE_MORPHTARGETS
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
#endif`,NP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,OP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BP=`#ifdef USE_NORMALMAP
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
#endif`,HP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,GP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jP=`#ifdef OPAQUE
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
}`,XP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nL=`float getShadowMask() {
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
}`,iL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rL=`#ifdef USE_SKINNING
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
#endif`,aL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oL=`#ifdef USE_SKINNING
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
#endif`,sL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uL=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fL=`#ifdef USE_TRANSMISSION
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
#endif`,dL=`#ifdef USE_TRANSMISSION
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
#endif`,hL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_L=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
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
}`,yL=`#ifdef ENVMAP_TYPE_CUBE
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
}`,SL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ML=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EL=`#include <common>
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
}`,wL=`#if DEPTH_PACKING == 3200
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
}`,bL=`#define DISTANCE
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
}`,TL=`#define DISTANCE
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
}`,AL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CL=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RL=`uniform float scale;
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
}`,PL=`uniform vec3 diffuse;
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
}`,LL=`#include <common>
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
}`,IL=`uniform vec3 diffuse;
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
}`,DL=`#define LAMBERT
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
}`,UL=`#define LAMBERT
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
}`,NL=`#define MATCAP
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
}`,OL=`#define MATCAP
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
}`,kL=`#define NORMAL
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
}`,FL=`#define NORMAL
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
}`,zL=`#define PHONG
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
}`,BL=`#define PHONG
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
}`,HL=`#define STANDARD
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
}`,GL=`#define STANDARD
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
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VL=`#define TOON
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
}`,WL=`#define TOON
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
}`,jL=`uniform float size;
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
}`,XL=`#include <common>
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
}`,YL=`uniform vec3 color;
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
}`,qL=`uniform float rotation;
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
}`,KL=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:y3,alphahash_pars_fragment:S3,alphamap_fragment:M3,alphamap_pars_fragment:E3,alphatest_fragment:w3,alphatest_pars_fragment:b3,aomap_fragment:T3,aomap_pars_fragment:A3,begin_vertex:C3,beginnormal_vertex:R3,bsdfs:P3,iridescence_fragment:L3,bumpmap_pars_fragment:I3,clipping_planes_fragment:D3,clipping_planes_pars_fragment:U3,clipping_planes_pars_vertex:N3,clipping_planes_vertex:O3,color_fragment:k3,color_pars_fragment:F3,color_pars_vertex:z3,color_vertex:B3,common:H3,cube_uv_reflection_fragment:G3,defaultnormal_vertex:V3,displacementmap_pars_vertex:W3,displacementmap_vertex:j3,emissivemap_fragment:$3,emissivemap_pars_fragment:X3,colorspace_fragment:Y3,colorspace_pars_fragment:q3,envmap_fragment:K3,envmap_common_pars_fragment:Z3,envmap_pars_fragment:Q3,envmap_pars_vertex:J3,envmap_physical_pars_fragment:fP,envmap_vertex:eP,fog_vertex:tP,fog_pars_vertex:nP,fog_fragment:iP,fog_pars_fragment:rP,gradientmap_pars_fragment:aP,lightmap_fragment:oP,lightmap_pars_fragment:sP,lights_lambert_fragment:lP,lights_lambert_pars_fragment:cP,lights_pars_begin:uP,lights_toon_fragment:dP,lights_toon_pars_fragment:hP,lights_phong_fragment:pP,lights_phong_pars_fragment:mP,lights_physical_fragment:gP,lights_physical_pars_fragment:vP,lights_fragment_begin:_P,lights_fragment_maps:xP,lights_fragment_end:yP,logdepthbuf_fragment:SP,logdepthbuf_pars_fragment:MP,logdepthbuf_pars_vertex:EP,logdepthbuf_vertex:wP,map_fragment:bP,map_pars_fragment:TP,map_particle_fragment:AP,map_particle_pars_fragment:CP,metalnessmap_fragment:RP,metalnessmap_pars_fragment:PP,morphcolor_vertex:LP,morphnormal_vertex:IP,morphtarget_pars_vertex:DP,morphtarget_vertex:UP,normal_fragment_begin:NP,normal_fragment_maps:OP,normal_pars_fragment:kP,normal_pars_vertex:FP,normal_vertex:zP,normalmap_pars_fragment:BP,clearcoat_normal_fragment_begin:HP,clearcoat_normal_fragment_maps:GP,clearcoat_pars_fragment:VP,iridescence_pars_fragment:WP,opaque_fragment:jP,packing:$P,premultiplied_alpha_fragment:XP,project_vertex:YP,dithering_fragment:qP,dithering_pars_fragment:KP,roughnessmap_fragment:ZP,roughnessmap_pars_fragment:QP,shadowmap_pars_fragment:JP,shadowmap_pars_vertex:eL,shadowmap_vertex:tL,shadowmask_pars_fragment:nL,skinbase_vertex:iL,skinning_pars_vertex:rL,skinning_vertex:aL,skinnormal_vertex:oL,specularmap_fragment:sL,specularmap_pars_fragment:lL,tonemapping_fragment:cL,tonemapping_pars_fragment:uL,transmission_fragment:fL,transmission_pars_fragment:dL,uv_pars_fragment:hL,uv_pars_vertex:pL,uv_vertex:mL,worldpos_vertex:gL,background_vert:vL,background_frag:_L,backgroundCube_vert:xL,backgroundCube_frag:yL,cube_vert:SL,cube_frag:ML,depth_vert:EL,depth_frag:wL,distanceRGBA_vert:bL,distanceRGBA_frag:TL,equirect_vert:AL,equirect_frag:CL,linedashed_vert:RL,linedashed_frag:PL,meshbasic_vert:LL,meshbasic_frag:IL,meshlambert_vert:DL,meshlambert_frag:UL,meshmatcap_vert:NL,meshmatcap_frag:OL,meshnormal_vert:kL,meshnormal_frag:FL,meshphong_vert:zL,meshphong_frag:BL,meshphysical_vert:HL,meshphysical_frag:GL,meshtoon_vert:VL,meshtoon_frag:WL,points_vert:jL,points_frag:$L,shadow_vert:XL,shadow_frag:YL,sprite_vert:qL,sprite_frag:KL},ae={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Si={basic:{uniforms:rn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:rn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:rn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:rn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:rn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Le(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:rn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:rn([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:rn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:rn([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:rn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:rn([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:rn([ae.common,ae.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:rn([ae.lights,ae.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Si.physical={uniforms:rn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const ac={r:0,b:0,g:0};function ZL(t,e,n,i,r,a,o){const s=new Le(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function _(g,h){let v=!1,m=h.isScene===!0?h.background:null;switch(m&&m.isTexture&&(m=(h.backgroundBlurriness>0?n:e).get(m)),m===null?x(s,l):m&&m.isColor&&(x(m,1),v=!0),t.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),v=!0;break}(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===of)?(u===void 0&&(u=new gn(new Go(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Do(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=m,u.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=m.colorSpace!==Oe,(f!==m||d!==m.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new gn(new lf(2,2),new fn({name:"BackgroundMaterial",uniforms:Do(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=m.colorSpace!==Oe,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=m,d=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,h){g.getRGB(ac,GS(t)),i.buffers.color.setClear(ac.r,ac.g,ac.b,h,o)}return{getClearColor:function(){return s},setClearColor:function(g,h=1){s.set(g),l=h,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(s,l)},render:_}}function QL(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=g(null);let c=l,u=!1;function f(H,F,Z,j,I){let z=!1;if(o){const B=x(j,Z,F);c!==B&&(c=B,p(c.object)),z=h(H,j,Z,I),z&&v(H,j,Z,I)}else{const B=F.wireframe===!0;(c.geometry!==j.id||c.program!==Z.id||c.wireframe!==B)&&(c.geometry=j.id,c.program=Z.id,c.wireframe=B,z=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,R(H,F,Z,j),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function d(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(H){return i.isWebGL2?t.bindVertexArray(H):a.bindVertexArrayOES(H)}function _(H){return i.isWebGL2?t.deleteVertexArray(H):a.deleteVertexArrayOES(H)}function x(H,F,Z){const j=Z.wireframe===!0;let I=s[H.id];I===void 0&&(I={},s[H.id]=I);let z=I[F.id];z===void 0&&(z={},I[F.id]=z);let B=z[j];return B===void 0&&(B=g(d()),z[j]=B),B}function g(H){const F=[],Z=[],j=[];for(let I=0;I<r;I++)F[I]=0,Z[I]=0,j[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:j,object:H,attributes:{},index:null}}function h(H,F,Z,j){const I=c.attributes,z=F.attributes;let B=0;const D=Z.getAttributes();for(const V in D)if(D[V].location>=0){const ee=I[V];let oe=z[V];if(oe===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(oe=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(oe=H.instanceColor)),ee===void 0||ee.attribute!==oe||oe&&ee.data!==oe.data)return!0;B++}return c.attributesNum!==B||c.index!==j}function v(H,F,Z,j){const I={},z=F.attributes;let B=0;const D=Z.getAttributes();for(const V in D)if(D[V].location>=0){let ee=z[V];ee===void 0&&(V==="instanceMatrix"&&H.instanceMatrix&&(ee=H.instanceMatrix),V==="instanceColor"&&H.instanceColor&&(ee=H.instanceColor));const oe={};oe.attribute=ee,ee&&ee.data&&(oe.data=ee.data),I[V]=oe,B++}c.attributes=I,c.attributesNum=B,c.index=j}function m(){const H=c.newAttributes;for(let F=0,Z=H.length;F<Z;F++)H[F]=0}function y(H){S(H,0)}function S(H,F){const Z=c.newAttributes,j=c.enabledAttributes,I=c.attributeDivisors;Z[H]=1,j[H]===0&&(t.enableVertexAttribArray(H),j[H]=1),I[H]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,F),I[H]=F)}function w(){const H=c.newAttributes,F=c.enabledAttributes;for(let Z=0,j=F.length;Z<j;Z++)F[Z]!==H[Z]&&(t.disableVertexAttribArray(Z),F[Z]=0)}function E(H,F,Z,j,I,z,B){B===!0?t.vertexAttribIPointer(H,F,Z,I,z):t.vertexAttribPointer(H,F,Z,j,I,z)}function R(H,F,Z,j){if(i.isWebGL2===!1&&(H.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const I=j.attributes,z=Z.getAttributes(),B=F.defaultAttributeValues;for(const D in z){const V=z[D];if(V.location>=0){let re=I[D];if(re===void 0&&(D==="instanceMatrix"&&H.instanceMatrix&&(re=H.instanceMatrix),D==="instanceColor"&&H.instanceColor&&(re=H.instanceColor)),re!==void 0){const ee=re.normalized,oe=re.itemSize,he=n.get(re);if(he===void 0)continue;const xe=he.buffer,ye=he.type,Xe=he.bytesPerElement,dt=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||re.gpuType===bS);if(re.isInterleavedBufferAttribute){const Ve=re.data,O=Ve.stride,jt=re.offset;if(Ve.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)S(V.location+be,Ve.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let be=0;be<V.locationSize;be++)y(V.location+be);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let be=0;be<V.locationSize;be++)E(V.location+be,oe/V.locationSize,ye,ee,O*Xe,(jt+oe/V.locationSize*be)*Xe,dt)}else{if(re.isInstancedBufferAttribute){for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve,re.meshPerAttribute);H.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)y(V.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ve=0;Ve<V.locationSize;Ve++)E(V.location+Ve,oe/V.locationSize,ye,ee,oe*Xe,oe/V.locationSize*Ve*Xe,dt)}}else if(B!==void 0){const ee=B[D];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(V.location,ee);break;case 3:t.vertexAttrib3fv(V.location,ee);break;case 4:t.vertexAttrib4fv(V.location,ee);break;default:t.vertexAttrib1fv(V.location,ee)}}}}w()}function M(){Q();for(const H in s){const F=s[H];for(const Z in F){const j=F[Z];for(const I in j)_(j[I].object),delete j[I];delete F[Z]}delete s[H]}}function b(H){if(s[H.id]===void 0)return;const F=s[H.id];for(const Z in F){const j=F[Z];for(const I in j)_(j[I].object),delete j[I];delete F[Z]}delete s[H.id]}function G(H){for(const F in s){const Z=s[F];if(Z[H.id]===void 0)continue;const j=Z[H.id];for(const I in j)_(j[I].object),delete j[I];delete Z[H.id]}}function Q(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Q,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:G,initAttributes:m,enableAttribute:y,disableUnusedAttributes:w}}function JL(t,e,n,i){const r=i.isWebGL2;let a;function o(c){a=c}function s(c,u){t.drawArrays(a,c,u),n.update(u,a,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,c,u,f),n.update(u,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function eI(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),h=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,y=o||e.has("OES_texture_float"),S=m&&y,w=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:w}}function tI(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new yi,s=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||_===null||_.length===0||a&&!g)a?u(null):c();else{const v=a?0:i,m=v*4;let y=h.clippingState||null;l.value=y,y=u(_,d,m,p);for(let S=0;S!==m;++S)y[S]=n[S];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const h=p+x*4,v=d.matrixWorldInverse;s.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let m=0,y=p;m!==x;++m,y+=4)o.copy(f[m]).applyMatrix4(v,s),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function nI(t){let e=new WeakMap;function n(o,s){return s===Jh?o.mapping=Po:s===ep&&(o.mapping=Lo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Jh||s===ep)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new g3(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class $S extends VS{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=u*this.view.offsetY,l=s-u*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ro=4,Zv=[.125,.215,.35,.446,.526,.582],qr=20,Ad=new $S,Qv=new Le;let Cd=null;const Yr=(1+Math.sqrt(5))/2,Ba=1/Yr,Jv=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Yr,Ba),new P(0,Yr,-Ba),new P(Ba,0,Yr),new P(-Ba,0,Yr),new P(Yr,Ba,0),new P(-Yr,Ba,0)];class e_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cd=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=i_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=n_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cd),e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Po||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ur,format:si,colorSpace:Xn,depthBuffer:!1},r=t_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iI(a)),this._blurMaterial=rI(a,e,n)}return r}_compileMaterial(e){const n=new gn(this._lodPlanes[0],e);this._renderer.compile(n,Ad)}_sceneToCubeUV(e,n,i,r){const s=new sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Qv),u.toneMapping=di,u.autoClear=!1;const p=new zS({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),_=new gn(new Go,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Qv),x=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):v===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const m=this._cubeSize;oc(r,v*m,h>2?m:0,m,m),u.setRenderTarget(r),x&&u.render(_,s),u.render(e,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Po||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=i_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=n_());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new gn(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;oc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Ad)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jv[(r-1)%Jv.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*qr-1),x=a/_,g=isFinite(a)?1+Math.floor(u*x):qr;g>qr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qr}`);const h=[];let v=0;for(let E=0;E<qr;++E){const R=E/x,M=Math.exp(-R*R/2);h.push(M),E===0?v+=M:E<g&&(v+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:m}=this;d.dTheta.value=_,d.mipInt.value=m-i;const y=this._sizeLods[r],S=3*y*(r>m-ro?r-m+ro:0),w=4*(this._cubeSize-y);oc(n,S,w,3*y,2*y),l.setRenderTarget(n),l.render(f,Ad)}}function iI(t){const e=[],n=[],i=[];let r=t;const a=t-ro+1+Zv.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-ro?l=Zv[o-t+ro-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,g=2,h=1,v=new Float32Array(x*_*p),m=new Float32Array(g*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,R=w>2?0:-1,M=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];v.set(M,x*_*w),m.set(d,g*_*w);const b=[w,w,w,w,w,w];y.set(b,h*_*w)}const S=new qn;S.setAttribute("position",new Vn(v,x)),S.setAttribute("uv",new Vn(m,g)),S.setAttribute("faceIndex",new Vn(y,h)),e.push(S),r>ro&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function t_(t,e,n){const i=new Ci(t,e,n);return i.texture.mapping=of,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function oc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function rI(t,e,n){const i=new Float32Array(qr),r=new P(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Um(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function n_(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Um(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function i_(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Um(){return`

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
	`}function aI(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Jh||l===ep,u=l===Po||l===Lo;if(c||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return n===null&&(n=new e_(t)),f=c?n.fromEquirectangular(s,f):n.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new e_(t));const d=c?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",a),d.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function oI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sI(t,e,n,i){const r={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const x=d.morphAttributes[_];for(let g=0,h=x.length;g<h;g++)e.remove(x[g])}d.removeEventListener("dispose",o),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,h=x.length;g<h;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let m=0,y=v.length;m<y;m+=3){const S=v[m+0],w=v[m+1],E=v[m+2];d.push(S,w,w,E,E,S)}}else{const v=_.array;x=_.version;for(let m=0,y=v.length/3-1;m<y;m+=3){const S=m+0,w=m+1,E=m+2;d.push(S,w,w,E,E,S)}}const g=new(DS(d)?HS:BS)(d,1);g.version=x;const h=a.get(f);h&&e.remove(h),a.set(f,g)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function lI(t,e,n,i){const r=i.isWebGL2;let a;function o(d){a=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function u(d,p){t.drawElements(a,p,s,d*l),n.update(p,a,1)}function f(d,p,_){if(_===0)return;let x,g;if(r)x=t,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](a,p,s,d*l,_),n.update(p,a,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function cI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uI(t,e){return t[0]-e[0]}function fI(t,e){return Math.abs(e[1])-Math.abs(t[1])}function dI(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new Qe,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=p!==void 0?p.length:0;let x=a.get(u);if(x===void 0||x.count!==_){let H=function(){Q.dispose(),a.delete(u),u.removeEventListener("dispose",H)};x!==void 0&&x.texture.dispose();const v=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let R=0;v===!0&&(R=1),m===!0&&(R=2),y===!0&&(R=3);let M=u.attributes.position.count*R,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const G=new Float32Array(M*b*4*_),Q=new OS(G,M,b,_);Q.type=vr,Q.needsUpdate=!0;const N=R*4;for(let F=0;F<_;F++){const Z=S[F],j=w[F],I=E[F],z=M*b*4*F;for(let B=0;B<Z.count;B++){const D=B*N;v===!0&&(o.fromBufferAttribute(Z,B),G[z+D+0]=o.x,G[z+D+1]=o.y,G[z+D+2]=o.z,G[z+D+3]=0),m===!0&&(o.fromBufferAttribute(j,B),G[z+D+4]=o.x,G[z+D+5]=o.y,G[z+D+6]=o.z,G[z+D+7]=0),y===!0&&(o.fromBufferAttribute(I,B),G[z+D+8]=o.x,G[z+D+9]=o.y,G[z+D+10]=o.z,G[z+D+11]=I.itemSize===4?o.w:1)}}x={count:_,texture:Q,size:new Ge(M,b)},a.set(u,x),u.addEventListener("dispose",H)}let g=0;for(let v=0;v<d.length;v++)g+=d[v];const h=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(t,"morphTargetBaseInfluence",h),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=d===void 0?0:d.length;let _=i[u.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[u.id]=_}for(let m=0;m<p;m++){const y=_[m];y[0]=m,y[1]=d[m]}_.sort(fI);for(let m=0;m<8;m++)m<p&&_[m][1]?(s[m][0]=_[m][0],s[m][1]=_[m][1]):(s[m][0]=Number.MAX_SAFE_INTEGER,s[m][1]=0);s.sort(uI);const x=u.morphAttributes.position,g=u.morphAttributes.normal;let h=0;for(let m=0;m<8;m++){const y=s[m],S=y[0],w=y[1];S!==Number.MAX_SAFE_INTEGER&&w?(x&&u.getAttribute("morphTarget"+m)!==x[S]&&u.setAttribute("morphTarget"+m,x[S]),g&&u.getAttribute("morphNormal"+m)!==g[S]&&u.setAttribute("morphNormal"+m,g[S]),r[m]=w,h+=w):(x&&u.hasAttribute("morphTarget"+m)===!0&&u.deleteAttribute("morphTarget"+m),g&&u.hasAttribute("morphNormal"+m)===!0&&u.deleteAttribute("morphNormal"+m),r[m]=0)}const v=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function hI(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:o}}const XS=new yn,YS=new OS,qS=new t3,KS=new WS,r_=[],a_=[],o_=new Float32Array(16),s_=new Float32Array(9),l_=new Float32Array(4);function Vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=r_[r];if(a===void 0&&(a=new Float32Array(r),r_[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function cf(t,e){let n=a_[e];n===void 0&&(n=new Int32Array(e),a_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function gI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function vI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function _I(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;l_.set(i),t.uniformMatrix2fv(this.addr,!1,l_),It(n,i)}}function xI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;s_.set(i),t.uniformMatrix3fv(this.addr,!1,s_),It(n,i)}}function yI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;o_.set(i),t.uniformMatrix4fv(this.addr,!1,o_),It(n,i)}}function SI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function MI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function EI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function wI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function bI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function TI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function AI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function CI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function RI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||XS,r)}function PI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qS,r)}function LI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||KS,r)}function II(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||YS,r)}function DI(t){switch(t){case 5126:return pI;case 35664:return mI;case 35665:return gI;case 35666:return vI;case 35674:return _I;case 35675:return xI;case 35676:return yI;case 5124:case 35670:return SI;case 35667:case 35671:return MI;case 35668:case 35672:return EI;case 35669:case 35673:return wI;case 5125:return bI;case 36294:return TI;case 36295:return AI;case 36296:return CI;case 35678:case 36198:case 36298:case 36306:case 35682:return RI;case 35679:case 36299:case 36307:return PI;case 35680:case 36300:case 36308:case 36293:return LI;case 36289:case 36303:case 36311:case 36292:return II}}function UI(t,e){t.uniform1fv(this.addr,e)}function NI(t,e){const n=Vo(e,this.size,2);t.uniform2fv(this.addr,n)}function OI(t,e){const n=Vo(e,this.size,3);t.uniform3fv(this.addr,n)}function kI(t,e){const n=Vo(e,this.size,4);t.uniform4fv(this.addr,n)}function FI(t,e){const n=Vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function zI(t,e){const n=Vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function BI(t,e){const n=Vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function HI(t,e){t.uniform1iv(this.addr,e)}function GI(t,e){t.uniform2iv(this.addr,e)}function VI(t,e){t.uniform3iv(this.addr,e)}function WI(t,e){t.uniform4iv(this.addr,e)}function jI(t,e){t.uniform1uiv(this.addr,e)}function $I(t,e){t.uniform2uiv(this.addr,e)}function XI(t,e){t.uniform3uiv(this.addr,e)}function YI(t,e){t.uniform4uiv(this.addr,e)}function qI(t,e,n){const i=this.cache,r=e.length,a=cf(n,r);Lt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||XS,a[o])}function KI(t,e,n){const i=this.cache,r=e.length,a=cf(n,r);Lt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||qS,a[o])}function ZI(t,e,n){const i=this.cache,r=e.length,a=cf(n,r);Lt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||KS,a[o])}function QI(t,e,n){const i=this.cache,r=e.length,a=cf(n,r);Lt(i,a)||(t.uniform1iv(this.addr,a),It(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||YS,a[o])}function JI(t){switch(t){case 5126:return UI;case 35664:return NI;case 35665:return OI;case 35666:return kI;case 35674:return FI;case 35675:return zI;case 35676:return BI;case 5124:case 35670:return HI;case 35667:case 35671:return GI;case 35668:case 35672:return VI;case 35669:case 35673:return WI;case 5125:return jI;case 36294:return $I;case 36295:return XI;case 36296:return YI;case 35678:case 36198:case 36298:case 36306:case 35682:return qI;case 35679:case 36299:case 36307:return KI;case 35680:case 36300:case 36308:case 36293:return ZI;case 36289:case 36303:case 36311:case 36292:return QI}}class eD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=DI(n.type)}}class tD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=JI(n.type)}}class nD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function c_(t,e){t.seq.push(e),t.map[e.id]=e}function iD(t,e,n){const i=t.name,r=i.length;for(Rd.lastIndex=0;;){const a=Rd.exec(i),o=Rd.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){c_(n,c===void 0?new eD(s,t,e):new tD(s,t,e));break}else{let f=n.map[s];f===void 0&&(f=new nD(s),c_(n,f)),n=f}}}class Pc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);iD(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function u_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let rD=0;function aD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function oD(t){switch(t){case Xn:return["Linear","( value )"];case Oe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function f_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+aD(t.getShaderSource(e),o)}else return r}function sD(t,e){const n=oD(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function lD(t,e){let n;switch(e){case yR:n="Linear";break;case SR:n="Reinhard";break;case MR:n="OptimizedCineon";break;case ES:n="ACESFilmic";break;case ER:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function cD(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function uD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function fD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function us(t){return t!==""}function d_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dD=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(t){return t.replace(dD,pD)}const hD=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pD(t,e){let n=Ue[e];if(n===void 0){const i=hD.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ap(n)}const mD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(t){return t.replace(mD,gD)}function gD(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function m_(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===QC?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function _D(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Po:case Lo:e="ENVMAP_TYPE_CUBE";break;case of:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function yD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case af:e="ENVMAP_BLENDING_MULTIPLY";break;case _R:e="ENVMAP_BLENDING_MIX";break;case xR:e="ENVMAP_BLENDING_ADD";break}return e}function SD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function MD(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=vD(n),c=_D(n),u=xD(n),f=yD(n),d=SD(n),p=n.isWebGL2?"":cD(n),_=uD(a),x=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(us).join(`
`),g.length>0&&(g+=`
`),h=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(us).join(`
`),h.length>0&&(h+=`
`)):(g=[m_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),h=[p,m_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?Ue.tonemapping_pars_fragment:"",n.toneMapping!==di?lD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,sD("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(us).join(`
`)),o=ap(o),o=d_(o,n),o=h_(o,n),s=ap(s),s=d_(s,n),s=h_(s,n),o=p_(o),s=p_(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const m=v+g+o,y=v+h+s,S=u_(r,r.VERTEX_SHADER,m),w=u_(r,r.FRAGMENT_SHADER,y);if(r.attachShader(x,S),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),t.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),b=r.getShaderInfoLog(S).trim(),G=r.getShaderInfoLog(w).trim();let Q=!0,N=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,S,w);else{const H=f_(r,S,"vertex"),F=f_(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+H+`
`+F)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:Q,programLog:M,vertexShader:{log:b,prefix:g},fragmentShader:{log:G,prefix:h}})}r.deleteShader(S),r.deleteShader(w);let E;this.getUniforms=function(){return E===void 0&&(E=new Pc(r,x)),E};let R;return this.getAttributes=function(){return R===void 0&&(R=fD(r,x)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rD++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=w,this}let ED=0;class wD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bD(e),n.set(e,i)),i}}class bD{constructor(e){this.id=ED++,this.code=e,this.usedTimes=0}}function TD(t,e,n,i,r,a,o){const s=new kS,l=new wD,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,b,G,Q,N){const H=Q.fog,F=N.geometry,Z=M.isMeshStandardMaterial?Q.environment:null,j=(M.isMeshStandardMaterial?n:e).get(M.envMap||Z),I=j&&j.mapping===of?j.image.height:null,z=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const B=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,D=B!==void 0?B.length:0;let V=0;F.morphAttributes.position!==void 0&&(V=1),F.morphAttributes.normal!==void 0&&(V=2),F.morphAttributes.color!==void 0&&(V=3);let re,ee,oe,he;if(z){const mi=Si[z];re=mi.vertexShader,ee=mi.fragmentShader}else re=M.vertexShader,ee=M.fragmentShader,l.update(M),oe=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const xe=t.getRenderTarget(),ye=N.isInstancedMesh===!0,Xe=!!M.map,dt=!!M.matcap,Ve=!!j,O=!!M.aoMap,jt=!!M.lightMap,be=!!M.bumpMap,Ie=!!M.normalMap,Re=!!M.displacementMap,ht=!!M.emissiveMap,$e=!!M.metalnessMap,ke=!!M.roughnessMap,it=M.anisotropy>0,Bt=M.clearcoat>0,$t=M.iridescence>0,C=M.sheen>0,T=M.transmission>0,X=it&&!!M.anisotropyMap,te=Bt&&!!M.clearcoatMap,ne=Bt&&!!M.clearcoatNormalMap,le=Bt&&!!M.clearcoatRoughnessMap,_e=$t&&!!M.iridescenceMap,ce=$t&&!!M.iridescenceThicknessMap,K=C&&!!M.sheenColorMap,Se=C&&!!M.sheenRoughnessMap,Me=!!M.specularMap,we=!!M.specularColorMap,me=!!M.specularIntensityMap,ge=T&&!!M.transmissionMap,ze=T&&!!M.thicknessMap,rt=!!M.gradientMap,L=!!M.alphaMap,se=M.alphaTest>0,W=!!M.alphaHash,ie=!!M.extensions,ue=!!F.attributes.uv1,Ke=!!F.attributes.uv2,pt=!!F.attributes.uv3;return{isWebGL2:u,shaderID:z,shaderType:M.type,shaderName:M.name,vertexShader:re,fragmentShader:ee,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:ye,instancingColor:ye&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Xn,map:Xe,matcap:dt,envMap:Ve,envMapMode:Ve&&j.mapping,envMapCubeUVHeight:I,aoMap:O,lightMap:jt,bumpMap:be,normalMap:Ie,displacementMap:d&&Re,emissiveMap:ht,normalMapObjectSpace:Ie&&M.normalMapType===OR,normalMapTangentSpace:Ie&&M.normalMapType===Lm,metalnessMap:$e,roughnessMap:ke,anisotropy:it,anisotropyMap:X,clearcoat:Bt,clearcoatMap:te,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,iridescence:$t,iridescenceMap:_e,iridescenceThicknessMap:ce,sheen:C,sheenColorMap:K,sheenRoughnessMap:Se,specularMap:Me,specularColorMap:we,specularIntensityMap:me,transmission:T,transmissionMap:ge,thicknessMap:ze,gradientMap:rt,opaque:M.transparent===!1&&M.blending===oa,alphaMap:L,alphaTest:se,alphaHash:W,combine:M.combine,mapUv:Xe&&x(M.map.channel),aoMapUv:O&&x(M.aoMap.channel),lightMapUv:jt&&x(M.lightMap.channel),bumpMapUv:be&&x(M.bumpMap.channel),normalMapUv:Ie&&x(M.normalMap.channel),displacementMapUv:Re&&x(M.displacementMap.channel),emissiveMapUv:ht&&x(M.emissiveMap.channel),metalnessMapUv:$e&&x(M.metalnessMap.channel),roughnessMapUv:ke&&x(M.roughnessMap.channel),anisotropyMapUv:X&&x(M.anisotropyMap.channel),clearcoatMapUv:te&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:K&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(M.sheenRoughnessMap.channel),specularMapUv:Me&&x(M.specularMap.channel),specularColorMapUv:we&&x(M.specularColorMap.channel),specularIntensityMapUv:me&&x(M.specularIntensityMap.channel),transmissionMapUv:ge&&x(M.transmissionMap.channel),thicknessMapUv:ze&&x(M.thicknessMap.channel),alphaMapUv:L&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ie||it),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:ue,vertexUv2s:Ke,vertexUv3s:pt,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Xe||L),fog:!!H,useFog:M.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:V,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&G.length>0,shadowMapType:t.shadowMap.type,toneMapping:M.toneMapped?t.toneMapping:di,useLegacyLights:t.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Cn,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ie&&M.extensions.derivatives===!0,extensionFragDepth:ie&&M.extensions.fragDepth===!0,extensionDrawBuffers:ie&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)b.push(G),b.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(v(b,M),m(b,M),b.push(t.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function m(M,b){s.disableAll(),b.isWebGL2&&s.enable(0),b.supportsVertexTextures&&s.enable(1),b.instancing&&s.enable(2),b.instancingColor&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),M.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.skinning&&s.enable(4),b.morphTargets&&s.enable(5),b.morphNormals&&s.enable(6),b.morphColors&&s.enable(7),b.premultipliedAlpha&&s.enable(8),b.shadowMapEnabled&&s.enable(9),b.useLegacyLights&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),M.push(s.mask)}function y(M){const b=_[M.type];let G;if(b){const Q=Si[b];G=ul.clone(Q.uniforms)}else G=M.uniforms;return G}function S(M,b){let G;for(let Q=0,N=c.length;Q<N;Q++){const H=c[Q];if(H.cacheKey===b){G=H,++G.usedTimes;break}}return G===void 0&&(G=new MD(t,b,M,a),c.push(G)),G}function w(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function R(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:y,acquireProgram:S,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:R}}function AD(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function CD(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function g_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function v_(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,_,x,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=g),e++,h}function s(f,d,p,_,x,g){const h=o(f,d,p,_,x,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,_,x,g){const h=o(f,d,p,_,x,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||CD),i.length>1&&i.sort(d||g_),r.length>1&&r.sort(d||g_)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:u,sort:c}}function RD(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new v_,t.set(i,[o])):r>=a.length?(o=new v_,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function PD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Le};break;case"SpotLight":n={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":n={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function LD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ID=0;function DD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function UD(t,e){const n=new PD,i=LD(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new P);const a=new P,o=new tt,s=new tt;function l(u,f){let d=0,p=0,_=0;for(let G=0;G<9;G++)r.probe[G].set(0,0,0);let x=0,g=0,h=0,v=0,m=0,y=0,S=0,w=0,E=0,R=0;u.sort(DD);const M=f===!0?Math.PI:1;for(let G=0,Q=u.length;G<Q;G++){const N=u[G],H=N.color,F=N.intensity,Z=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=H.r*F*M,p+=H.g*F*M,_+=H.b*F*M;else if(N.isLightProbe)for(let I=0;I<9;I++)r.probe[I].addScaledVector(N.sh.coefficients[I],F);else if(N.isDirectionalLight){const I=n.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const z=N.shadow,B=i.get(N);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=j,r.directionalShadowMatrix[x]=N.shadow.matrix,y++}r.directional[x]=I,x++}else if(N.isSpotLight){const I=n.get(N);I.position.setFromMatrixPosition(N.matrixWorld),I.color.copy(H).multiplyScalar(F*M),I.distance=Z,I.coneCos=Math.cos(N.angle),I.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),I.decay=N.decay,r.spot[h]=I;const z=N.shadow;if(N.map&&(r.spotLightMap[E]=N.map,E++,z.updateMatrices(N),N.castShadow&&R++),r.spotLightMatrix[h]=z.matrix,N.castShadow){const B=i.get(N);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,r.spotShadow[h]=B,r.spotShadowMap[h]=j,w++}h++}else if(N.isRectAreaLight){const I=n.get(N);I.color.copy(H).multiplyScalar(F),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=I,v++}else if(N.isPointLight){const I=n.get(N);if(I.color.copy(N.color).multiplyScalar(N.intensity*M),I.distance=N.distance,I.decay=N.decay,N.castShadow){const z=N.shadow,B=i.get(N);B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,r.pointShadow[g]=B,r.pointShadowMap[g]=j,r.pointShadowMatrix[g]=N.shadow.matrix,S++}r.point[g]=I,g++}else if(N.isHemisphereLight){const I=n.get(N);I.skyColor.copy(N.color).multiplyScalar(F*M),I.groundColor.copy(N.groundColor).multiplyScalar(F*M),r.hemi[m]=I,m++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==x||b.pointLength!==g||b.spotLength!==h||b.rectAreaLength!==v||b.hemiLength!==m||b.numDirectionalShadows!==y||b.numPointShadows!==S||b.numSpotShadows!==w||b.numSpotMaps!==E)&&(r.directional.length=x,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=w+E-R,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=R,b.directionalLength=x,b.pointLength=g,b.spotLength=h,b.rectAreaLength=v,b.hemiLength=m,b.numDirectionalShadows=y,b.numPointShadows=S,b.numSpotShadows=w,b.numSpotMaps=E,r.version=ID++)}function c(u,f){let d=0,p=0,_=0,x=0,g=0;const h=f.matrixWorldInverse;for(let v=0,m=u.length;v<m;v++){const y=u[v];if(y.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(h),d++}else if(y.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(h),_++}else if(y.isRectAreaLight){const S=r.rectArea[x];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),s.identity(),o.copy(y.matrixWorld),o.premultiply(h),s.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(h),g++}}}return{setup:l,setupView:c,state:r}}function __(t,e){const n=new UD(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(f){i.push(f)}function s(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function ND(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new __(t,e),n.set(a,[l])):o>=s.length?(l=new __(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class OD extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=UR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kD extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zD=`uniform sampler2D shadow_pass;
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
}`;function BD(t,e,n){let i=new Dm;const r=new Ge,a=new Ge,o=new Qe,s=new OD({depthPacking:NR}),l=new kD,c={},u=n.maxTextureSize,f={[Dr]:un,[un]:Dr,[Cn]:Cn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:FD,fragmentShader:zD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new qn;_.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gn(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yS;let h=this.type;this.render=function(S,w,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const R=t.getRenderTarget(),M=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),G=t.state;G.setBlending(ji),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Q=h!==Oi&&this.type===Oi,N=h===Oi&&this.type!==Oi;for(let H=0,F=S.length;H<F;H++){const Z=S[H],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const I=j.getFrameExtents();if(r.multiply(I),a.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/I.x),r.x=a.x*I.x,j.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/I.y),r.y=a.y*I.y,j.mapSize.y=a.y)),j.map===null||Q===!0||N===!0){const B=this.type!==Oi?{minFilter:on,magFilter:on}:{};j.map!==null&&j.map.dispose(),j.map=new Ci(r.x,r.y,B),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}t.setRenderTarget(j.map),t.clear();const z=j.getViewportCount();for(let B=0;B<z;B++){const D=j.getViewport(B);o.set(a.x*D.x,a.y*D.y,a.x*D.z,a.y*D.w),G.viewport(o),j.updateMatrices(Z,B),i=j.getFrustum(),y(w,E,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===Oi&&v(j,E),j.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(R,M,b)};function v(S,w){const E=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(w,null,E,d,x,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(w,null,E,p,x,null)}function m(S,w,E,R){let M=null;const b=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)M=b;else if(M=E.isPointLight===!0?l:s,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=M.uuid,Q=w.uuid;let N=c[G];N===void 0&&(N={},c[G]=N);let H=N[Q];H===void 0&&(H=M.clone(),N[Q]=H),M=H}if(M.visible=w.visible,M.wireframe=w.wireframe,R===Oi?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=t.properties.get(M);G.light=E}return M}function y(S,w,E,R,M){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Oi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);const Q=e.update(S),N=S.material;if(Array.isArray(N)){const H=Q.groups;for(let F=0,Z=H.length;F<Z;F++){const j=H[F],I=N[j.materialIndex];if(I&&I.visible){const z=m(S,I,R,M);t.renderBufferDirect(E,null,Q,z,S,j)}}}else if(N.visible){const H=m(S,N,R,M);t.renderBufferDirect(E,null,Q,H,S,null)}}const G=S.children;for(let Q=0,N=G.length;Q<N;Q++)y(G[Q],w,E,R,M)}}function HD(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const se=new Qe;let W=null;const ie=new Qe(0,0,0,0);return{setMask:function(ue){W!==ue&&!L&&(t.colorMask(ue,ue,ue,ue),W=ue)},setLocked:function(ue){L=ue},setClear:function(ue,Ke,pt,Dt,mi){mi===!0&&(ue*=Dt,Ke*=Dt,pt*=Dt),se.set(ue,Ke,pt,Dt),ie.equals(se)===!1&&(t.clearColor(ue,Ke,pt,Dt),ie.copy(se))},reset:function(){L=!1,W=null,ie.set(-1,0,0,0)}}}function a(){let L=!1,se=null,W=null,ie=null;return{setTest:function(ue){ue?xe(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(ue){se!==ue&&!L&&(t.depthMask(ue),se=ue)},setFunc:function(ue){if(W!==ue){switch(ue){case fR:t.depthFunc(t.NEVER);break;case dR:t.depthFunc(t.ALWAYS);break;case hR:t.depthFunc(t.LESS);break;case Qh:t.depthFunc(t.LEQUAL);break;case pR:t.depthFunc(t.EQUAL);break;case mR:t.depthFunc(t.GEQUAL);break;case gR:t.depthFunc(t.GREATER);break;case vR:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=ue}},setLocked:function(ue){L=ue},setClear:function(ue){ie!==ue&&(t.clearDepth(ue),ie=ue)},reset:function(){L=!1,se=null,W=null,ie=null}}}function o(){let L=!1,se=null,W=null,ie=null,ue=null,Ke=null,pt=null,Dt=null,mi=null;return{setTest:function(_t){L||(_t?xe(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(_t){se!==_t&&!L&&(t.stencilMask(_t),se=_t)},setFunc:function(_t,gi,tn){(W!==_t||ie!==gi||ue!==tn)&&(t.stencilFunc(_t,gi,tn),W=_t,ie=gi,ue=tn)},setOp:function(_t,gi,tn){(Ke!==_t||pt!==gi||Dt!==tn)&&(t.stencilOp(_t,gi,tn),Ke=_t,pt=gi,Dt=tn)},setLocked:function(_t){L=_t},setClear:function(_t){mi!==_t&&(t.clearStencil(_t),mi=_t)},reset:function(){L=!1,se=null,W=null,ie=null,ue=null,Ke=null,pt=null,Dt=null,mi=null}}}const s=new r,l=new a,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,x=[],g=null,h=!1,v=null,m=null,y=null,S=null,w=null,E=null,R=null,M=!1,b=null,G=null,Q=null,N=null,H=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,j=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(I)[1]),Z=j>=1):I.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),Z=j>=2);let z=null,B={};const D=t.getParameter(t.SCISSOR_BOX),V=t.getParameter(t.VIEWPORT),re=new Qe().fromArray(D),ee=new Qe().fromArray(V);function oe(L,se,W,ie){const ue=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(L,Ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<W;pt++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(se,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(se+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return Ke}const he={};he[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(he[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(t.DEPTH_TEST),l.setFunc(Qh),Re(!1),ht(iv),xe(t.CULL_FACE),be(ji);function xe(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function ye(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Xe(L,se){return p[L]!==se?(t.bindFramebuffer(L,se),p[L]=se,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=se),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=se)),!0):!1}function dt(L,se){let W=x,ie=!1;if(L)if(W=_.get(se),W===void 0&&(W=[],_.set(se,W)),L.isWebGLMultipleRenderTargets){const ue=L.texture;if(W.length!==ue.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,pt=ue.length;Ke<pt;Ke++)W[Ke]=t.COLOR_ATTACHMENT0+Ke;W.length=ue.length,ie=!0}}else W[0]!==t.COLOR_ATTACHMENT0&&(W[0]=t.COLOR_ATTACHMENT0,ie=!0);else W[0]!==t.BACK&&(W[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Ve(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const O={[Ha]:t.FUNC_ADD,[eR]:t.FUNC_SUBTRACT,[tR]:t.FUNC_REVERSE_SUBTRACT};if(i)O[ov]=t.MIN,O[sv]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(O[ov]=L.MIN_EXT,O[sv]=L.MAX_EXT)}const jt={[nR]:t.ZERO,[iR]:t.ONE,[rR]:t.SRC_COLOR,[SS]:t.SRC_ALPHA,[uR]:t.SRC_ALPHA_SATURATE,[lR]:t.DST_COLOR,[oR]:t.DST_ALPHA,[aR]:t.ONE_MINUS_SRC_COLOR,[MS]:t.ONE_MINUS_SRC_ALPHA,[cR]:t.ONE_MINUS_DST_COLOR,[sR]:t.ONE_MINUS_DST_ALPHA};function be(L,se,W,ie,ue,Ke,pt,Dt){if(L===ji){h===!0&&(ye(t.BLEND),h=!1);return}if(h===!1&&(xe(t.BLEND),h=!0),L!==JC){if(L!==v||Dt!==M){if((m!==Ha||w!==Ha)&&(t.blendEquation(t.FUNC_ADD),m=Ha,w=Ha),Dt)switch(L){case oa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $i:t.blendFunc(t.ONE,t.ONE);break;case rv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case av:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $i:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case av:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,S=null,E=null,R=null,v=L,M=Dt}return}ue=ue||se,Ke=Ke||W,pt=pt||ie,(se!==m||ue!==w)&&(t.blendEquationSeparate(O[se],O[ue]),m=se,w=ue),(W!==y||ie!==S||Ke!==E||pt!==R)&&(t.blendFuncSeparate(jt[W],jt[ie],jt[Ke],jt[pt]),y=W,S=ie,E=Ke,R=pt),v=L,M=!1}function Ie(L,se){L.side===Cn?ye(t.CULL_FACE):xe(t.CULL_FACE);let W=L.side===un;se&&(W=!W),Re(W),L.blending===oa&&L.transparent===!1?be(ji):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),s.setMask(L.colorWrite);const ie=L.stencilWrite;c.setTest(ie),ie&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ke(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Re(L){b!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),b=L)}function ht(L){L!==KC?(xe(t.CULL_FACE),L!==G&&(L===iv?t.cullFace(t.BACK):L===ZC?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),G=L}function $e(L){L!==Q&&(Z&&t.lineWidth(L),Q=L)}function ke(L,se,W){L?(xe(t.POLYGON_OFFSET_FILL),(N!==se||H!==W)&&(t.polygonOffset(se,W),N=se,H=W)):ye(t.POLYGON_OFFSET_FILL)}function it(L){L?xe(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function Bt(L){L===void 0&&(L=t.TEXTURE0+F-1),z!==L&&(t.activeTexture(L),z=L)}function $t(L,se,W){W===void 0&&(z===null?W=t.TEXTURE0+F-1:W=z);let ie=B[W];ie===void 0&&(ie={type:void 0,texture:void 0},B[W]=ie),(ie.type!==L||ie.texture!==se)&&(z!==W&&(t.activeTexture(W),z=W),t.bindTexture(L,se||he[L]),ie.type=L,ie.texture=se)}function C(){const L=B[z];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function T(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(L){re.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),re.copy(L))}function me(L){ee.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),ee.copy(L))}function ge(L,se){let W=f.get(se);W===void 0&&(W=new WeakMap,f.set(se,W));let ie=W.get(L);ie===void 0&&(ie=t.getUniformBlockIndex(se,L.name),W.set(L,ie))}function ze(L,se){const ie=f.get(se).get(L);u.get(se)!==ie&&(t.uniformBlockBinding(se,ie,L.__bindingPointIndex),u.set(se,ie))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},z=null,B={},p={},_=new WeakMap,x=[],g=null,h=!1,v=null,m=null,y=null,S=null,w=null,E=null,R=null,M=!1,b=null,G=null,Q=null,N=null,H=null,re.set(0,0,t.canvas.width,t.canvas.height),ee.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:xe,disable:ye,bindFramebuffer:Xe,drawBuffers:dt,useProgram:Ve,setBlending:be,setMaterial:Ie,setFlipSided:Re,setCullFace:ht,setLineWidth:$e,setPolygonOffset:ke,setScissorTest:it,activeTexture:Bt,bindTexture:$t,unbindTexture:C,compressedTexImage2D:T,compressedTexImage3D:X,texImage2D:Se,texImage3D:Me,updateUBOMapping:ge,uniformBlockBinding:ze,texStorage2D:ce,texStorage3D:K,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:le,compressedTexSubImage3D:_e,scissor:we,viewport:me,reset:rt}}function GD(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let x;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,T){return h?new OffscreenCanvas(C,T):Ks("canvas")}function m(C,T,X,te){let ne=1;if((C.width>te||C.height>te)&&(ne=te/Math.max(C.width,C.height)),ne<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const le=T?rp:Math.floor,_e=le(ne*C.width),ce=le(ne*C.height);x===void 0&&(x=v(_e,ce));const K=X?v(_e,ce):x;return K.width=_e,K.height=ce,K.getContext("2d").drawImage(C,0,0,_e,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+_e+"x"+ce+")."),K}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function y(C){return Nv(C.width)&&Nv(C.height)}function S(C){return s?!1:C.wrapS!==oi||C.wrapT!==oi||C.minFilter!==on&&C.minFilter!==Bn}function w(C,T){return C.generateMipmaps&&T&&C.minFilter!==on&&C.minFilter!==Bn}function E(C){t.generateMipmap(C)}function R(C,T,X,te,ne=!1){if(s===!1)return T;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le=T;return T===t.RED&&(X===t.FLOAT&&(le=t.R32F),X===t.HALF_FLOAT&&(le=t.R16F),X===t.UNSIGNED_BYTE&&(le=t.R8)),T===t.RG&&(X===t.FLOAT&&(le=t.RG32F),X===t.HALF_FLOAT&&(le=t.RG16F),X===t.UNSIGNED_BYTE&&(le=t.RG8)),T===t.RGBA&&(X===t.FLOAT&&(le=t.RGBA32F),X===t.HALF_FLOAT&&(le=t.RGBA16F),X===t.UNSIGNED_BYTE&&(le=te===Oe&&ne===!1?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(le=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(le=t.RGB5_A1)),(le===t.R16F||le===t.R32F||le===t.RG16F||le===t.RG32F||le===t.RGBA16F||le===t.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function M(C,T,X){return w(C,X)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==Bn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function b(C){return C===on||C===lv||C===td?t.NEAREST:t.LINEAR}function G(C){const T=C.target;T.removeEventListener("dispose",G),N(T),T.isVideoTexture&&_.delete(T)}function Q(C){const T=C.target;T.removeEventListener("dispose",Q),F(T)}function N(C){const T=i.get(C);if(T.__webglInit===void 0)return;const X=C.source,te=g.get(X);if(te){const ne=te[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&H(C),Object.keys(te).length===0&&g.delete(X)}i.remove(C)}function H(C){const T=i.get(C);t.deleteTexture(T.__webglTexture);const X=C.source,te=g.get(X);delete te[T.__cacheKey],o.memory.textures--}function F(C){const T=C.texture,X=i.get(C),te=i.get(T);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)t.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(t.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&t.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&t.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&t.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ne=0,le=T.length;ne<le;ne++){const _e=i.get(T[ne]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(T[ne])}i.remove(T),i.remove(C)}let Z=0;function j(){Z=0}function I(){const C=Z;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),Z+=1,C}function z(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function B(C,T){const X=i.get(C);if(C.isVideoTexture&&Bt(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(X,C,T);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+T)}function D(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Xe(X,C,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+T)}function V(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){Xe(X,C,T);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+T)}function re(C,T){const X=i.get(C);if(C.version>0&&X.__version!==C.version){dt(X,C,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+T)}const ee={[Ys]:t.REPEAT,[oi]:t.CLAMP_TO_EDGE,[tp]:t.MIRRORED_REPEAT},oe={[on]:t.NEAREST,[lv]:t.NEAREST_MIPMAP_NEAREST,[td]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[wR]:t.LINEAR_MIPMAP_NEAREST,[qs]:t.LINEAR_MIPMAP_LINEAR},he={[FR]:t.NEVER,[jR]:t.ALWAYS,[zR]:t.LESS,[HR]:t.LEQUAL,[BR]:t.EQUAL,[WR]:t.GEQUAL,[GR]:t.GREATER,[VR]:t.NOTEQUAL};function xe(C,T,X){if(X?(t.texParameteri(C,t.TEXTURE_WRAP_S,ee[T.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ee[T.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ee[T.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,oe[T.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,oe[T.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(T.wrapS!==oi||T.wrapT!==oi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,b(T.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==on&&T.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,he[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===on||T.minFilter!==td&&T.minFilter!==qs||T.type===vr&&e.has("OES_texture_float_linear")===!1||s===!1&&T.type===Ur&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(t.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function ye(C,T){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",G));const te=T.source;let ne=g.get(te);ne===void 0&&(ne={},g.set(te,ne));const le=z(T);if(le!==C.__cacheKey){ne[le]===void 0&&(ne[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ne[le].usedTimes++;const _e=ne[C.__cacheKey];_e!==void 0&&(ne[C.__cacheKey].usedTimes--,_e.usedTimes===0&&H(T)),C.__cacheKey=le,C.__webglTexture=ne[le].texture}return X}function Xe(C,T,X){let te=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=t.TEXTURE_3D);const ne=ye(C,T),le=T.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+X);const _e=i.get(le);if(le.version!==_e.__version||ne===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ce=S(T)&&y(T.image)===!1;let K=m(T.image,ce,!1,u);K=$t(T,K);const Se=y(K)||s,Me=a.convert(T.format,T.colorSpace);let we=a.convert(T.type),me=R(T.internalFormat,Me,we,T.colorSpace);xe(te,T,Se);let ge;const ze=T.mipmaps,rt=s&&T.isVideoTexture!==!0,L=_e.__version===void 0||ne===!0,se=M(T,K,Se);if(T.isDepthTexture)me=t.DEPTH_COMPONENT,s?T.type===vr?me=t.DEPTH_COMPONENT32F:T.type===gr?me=t.DEPTH_COMPONENT24:T.type===sa?me=t.DEPTH24_STENCIL8:me=t.DEPTH_COMPONENT16:T.type===vr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===la&&me===t.DEPTH_COMPONENT&&T.type!==Pm&&T.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=gr,we=a.convert(T.type)),T.format===Io&&me===t.DEPTH_COMPONENT&&(me=t.DEPTH_STENCIL,T.type!==sa&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=sa,we=a.convert(T.type))),L&&(rt?n.texStorage2D(t.TEXTURE_2D,1,me,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,me,K.width,K.height,0,Me,we,null));else if(T.isDataTexture)if(ze.length>0&&Se){rt&&L&&n.texStorage2D(t.TEXTURE_2D,se,me,ze[0].width,ze[0].height);for(let W=0,ie=ze.length;W<ie;W++)ge=ze[W],rt?n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,Me,we,ge.data):n.texImage2D(t.TEXTURE_2D,W,me,ge.width,ge.height,0,Me,we,ge.data);T.generateMipmaps=!1}else rt?(L&&n.texStorage2D(t.TEXTURE_2D,se,me,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,K.width,K.height,Me,we,K.data)):n.texImage2D(t.TEXTURE_2D,0,me,K.width,K.height,0,Me,we,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,me,ze[0].width,ze[0].height,K.depth);for(let W=0,ie=ze.length;W<ie;W++)ge=ze[W],T.format!==si?Me!==null?rt?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,K.depth,Me,ge.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,me,ge.width,ge.height,K.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ge.width,ge.height,K.depth,Me,we,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,me,ge.width,ge.height,K.depth,0,Me,we,ge.data)}else{rt&&L&&n.texStorage2D(t.TEXTURE_2D,se,me,ze[0].width,ze[0].height);for(let W=0,ie=ze.length;W<ie;W++)ge=ze[W],T.format!==si?Me!==null?rt?n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,Me,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,W,me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?n.texSubImage2D(t.TEXTURE_2D,W,0,0,ge.width,ge.height,Me,we,ge.data):n.texImage2D(t.TEXTURE_2D,W,me,ge.width,ge.height,0,Me,we,ge.data)}else if(T.isDataArrayTexture)rt?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,me,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Me,we,K.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,K.width,K.height,K.depth,0,Me,we,K.data);else if(T.isData3DTexture)rt?(L&&n.texStorage3D(t.TEXTURE_3D,se,me,K.width,K.height,K.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Me,we,K.data)):n.texImage3D(t.TEXTURE_3D,0,me,K.width,K.height,K.depth,0,Me,we,K.data);else if(T.isFramebufferTexture){if(L)if(rt)n.texStorage2D(t.TEXTURE_2D,se,me,K.width,K.height);else{let W=K.width,ie=K.height;for(let ue=0;ue<se;ue++)n.texImage2D(t.TEXTURE_2D,ue,me,W,ie,0,Me,we,null),W>>=1,ie>>=1}}else if(ze.length>0&&Se){rt&&L&&n.texStorage2D(t.TEXTURE_2D,se,me,ze[0].width,ze[0].height);for(let W=0,ie=ze.length;W<ie;W++)ge=ze[W],rt?n.texSubImage2D(t.TEXTURE_2D,W,0,0,Me,we,ge):n.texImage2D(t.TEXTURE_2D,W,me,Me,we,ge);T.generateMipmaps=!1}else rt?(L&&n.texStorage2D(t.TEXTURE_2D,se,me,K.width,K.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,we,K)):n.texImage2D(t.TEXTURE_2D,0,me,Me,we,K);w(T,Se)&&E(te),_e.__version=le.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function dt(C,T,X){if(T.image.length!==6)return;const te=ye(C,T),ne=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+X);const le=i.get(ne);if(ne.version!==le.__version||te===!0){n.activeTexture(t.TEXTURE0+X),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,ce=T.image[0]&&T.image[0].isDataTexture,K=[];for(let W=0;W<6;W++)!_e&&!ce?K[W]=m(T.image[W],!1,!0,c):K[W]=ce?T.image[W].image:T.image[W],K[W]=$t(T,K[W]);const Se=K[0],Me=y(Se)||s,we=a.convert(T.format,T.colorSpace),me=a.convert(T.type),ge=R(T.internalFormat,we,me,T.colorSpace),ze=s&&T.isVideoTexture!==!0,rt=le.__version===void 0||te===!0;let L=M(T,Se,Me);xe(t.TEXTURE_CUBE_MAP,T,Me);let se;if(_e){ze&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ge,Se.width,Se.height);for(let W=0;W<6;W++){se=K[W].mipmaps;for(let ie=0;ie<se.length;ie++){const ue=se[ie];T.format!==si?we!==null?ze?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,0,0,ue.width,ue.height,we,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,0,0,ue.width,ue.height,we,me,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,ge,ue.width,ue.height,0,we,me,ue.data)}}}else{se=T.mipmaps,ze&&rt&&(se.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,ge,K[0].width,K[0].height));for(let W=0;W<6;W++)if(ce){ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,K[W].width,K[W].height,we,me,K[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ge,K[W].width,K[W].height,0,we,me,K[W].data);for(let ie=0;ie<se.length;ie++){const Ke=se[ie].image[W].image;ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,0,0,Ke.width,Ke.height,we,me,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,ge,Ke.width,Ke.height,0,we,me,Ke.data)}}else{ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,we,me,K[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ge,we,me,K[W]);for(let ie=0;ie<se.length;ie++){const ue=se[ie];ze?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,0,0,we,me,ue.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,ge,we,me,ue.image[W])}}}w(T,Me)&&E(t.TEXTURE_CUBE_MAP),le.__version=ne.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ve(C,T,X,te,ne){const le=a.convert(X.format,X.colorSpace),_e=a.convert(X.type),ce=R(X.internalFormat,le,_e,X.colorSpace);i.get(T).__hasExternalTextures||(ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,ce,T.width,T.height,T.depth,0,le,_e,null):n.texImage2D(ne,0,ce,T.width,T.height,0,le,_e,null)),n.bindFramebuffer(t.FRAMEBUFFER,C),it(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0,ke(T)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ne,i.get(X).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(C,T,X){if(t.bindRenderbuffer(t.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let te=t.DEPTH_COMPONENT16;if(X||it(T)){const ne=T.depthTexture;ne&&ne.isDepthTexture&&(ne.type===vr?te=t.DEPTH_COMPONENT32F:ne.type===gr&&(te=t.DEPTH_COMPONENT24));const le=ke(T);it(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,te,T.width,T.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,le,te,T.width,T.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,T.width,T.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const te=ke(T);X&&it(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,T.width,T.height):it(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0;ne<te.length;ne++){const le=te[ne],_e=a.convert(le.format,le.colorSpace),ce=a.convert(le.type),K=R(le.internalFormat,_e,ce,le.colorSpace),Se=ke(T);X&&it(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,K,T.width,T.height):it(T)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,K,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,K,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function jt(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,ne=ke(T);if(T.depthTexture.format===la)it(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(T.depthTexture.format===Io)it(T)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function be(C){const T=i.get(C),X=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");jt(T.__webglFramebuffer,C)}else if(X){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=t.createRenderbuffer(),O(T.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),O(T.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(C,T,X){const te=i.get(C);T!==void 0&&Ve(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),X!==void 0&&be(C)}function Re(C){const T=C.texture,X=i.get(C),te=i.get(T);C.addEventListener("dispose",Q),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=T.version,o.memory.textures++);const ne=C.isWebGLCubeRenderTarget===!0,le=C.isWebGLMultipleRenderTargets===!0,_e=y(C)||s;if(ne){X.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)X.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(X.__webglFramebuffer=t.createFramebuffer(),le)if(r.drawBuffers){const ce=C.texture;for(let K=0,Se=ce.length;K<Se;K++){const Me=i.get(ce[K]);Me.__webglTexture===void 0&&(Me.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&C.samples>0&&it(C)===!1){const ce=le?T:[T];X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let K=0;K<ce.length;K++){const Se=ce[K];X.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[K]);const Me=a.convert(Se.format,Se.colorSpace),we=a.convert(Se.type),me=R(Se.internalFormat,Me,we,Se.colorSpace,C.isXRRenderTarget===!0),ge=ke(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,me,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,X.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),O(X.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),xe(t.TEXTURE_CUBE_MAP,T,_e);for(let ce=0;ce<6;ce++)Ve(X.__webglFramebuffer[ce],C,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce);w(T,_e)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){const ce=C.texture;for(let K=0,Se=ce.length;K<Se;K++){const Me=ce[K],we=i.get(Me);n.bindTexture(t.TEXTURE_2D,we.__webglTexture),xe(t.TEXTURE_2D,Me,_e),Ve(X.__webglFramebuffer,C,Me,t.COLOR_ATTACHMENT0+K,t.TEXTURE_2D),w(Me,_e)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(s?ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,te.__webglTexture),xe(ce,T,_e),Ve(X.__webglFramebuffer,C,T,t.COLOR_ATTACHMENT0,ce),w(T,_e)&&E(ce),n.unbindTexture()}C.depthBuffer&&be(C)}function ht(C){const T=y(C)||s,X=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ne=X.length;te<ne;te++){const le=X[te];if(w(le,T)){const _e=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(le).__webglTexture;n.bindTexture(_e,ce),E(_e),n.unbindTexture()}}}function $e(C){if(s&&C.samples>0&&it(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],X=C.width,te=C.height;let ne=t.COLOR_BUFFER_BIT;const le=[],_e=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),K=C.isWebGLMultipleRenderTargets===!0;if(K)for(let Se=0;Se<T.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){le.push(t.COLOR_ATTACHMENT0+Se),C.depthBuffer&&le.push(_e);const Me=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Me===!1&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),K&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]),Me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),K){const we=i.get(T[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,X,te,0,0,X,te,ne,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,le)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let Se=0;Se<T.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,ce.__webglColorRenderbuffer[Se]);const Me=i.get(T[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function ke(C){return Math.min(f,C.samples)}function it(C){const T=i.get(C);return s&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(C){const T=o.render.frame;_.get(C)!==T&&(_.set(C,T),C.update())}function $t(C,T){const X=C.colorSpace,te=C.format,ne=C.type;return C.isCompressedTexture===!0||C.format===np||X!==Xn&&X!==ua&&(X===Oe?s===!1?e.has("EXT_sRGB")===!0&&te===si?(C.format=np,C.minFilter=Bn,C.generateMipmaps=!1):T=US.sRGBToLinear(T):(te!==si||ne!==Tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=I,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=D,this.setTexture3D=V,this.setTextureCube=re,this.rebindTextures=Ie,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=it}function VD(t,e,n){const i=n.isWebGL2;function r(a,o=ua){let s;if(a===Tr)return t.UNSIGNED_BYTE;if(a===TS)return t.UNSIGNED_SHORT_4_4_4_4;if(a===AS)return t.UNSIGNED_SHORT_5_5_5_1;if(a===bR)return t.BYTE;if(a===TR)return t.SHORT;if(a===Pm)return t.UNSIGNED_SHORT;if(a===bS)return t.INT;if(a===gr)return t.UNSIGNED_INT;if(a===vr)return t.FLOAT;if(a===Ur)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===AR)return t.ALPHA;if(a===si)return t.RGBA;if(a===CR)return t.LUMINANCE;if(a===RR)return t.LUMINANCE_ALPHA;if(a===la)return t.DEPTH_COMPONENT;if(a===Io)return t.DEPTH_STENCIL;if(a===np)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===PR)return t.RED;if(a===CS)return t.RED_INTEGER;if(a===LR)return t.RG;if(a===RS)return t.RG_INTEGER;if(a===PS)return t.RGBA_INTEGER;if(a===nd||a===id||a===rd||a===ad)if(o===Oe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===nd)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===id)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===rd)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ad)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===nd)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===id)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===rd)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ad)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===cv||a===uv||a===fv||a===dv)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===cv)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===uv)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===fv)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===dv)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===IR)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===hv||a===pv)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===hv)return o===Oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===pv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===mv||a===gv||a===vv||a===_v||a===xv||a===yv||a===Sv||a===Mv||a===Ev||a===wv||a===bv||a===Tv||a===Av||a===Cv)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===mv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===gv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===vv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===_v)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===xv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===yv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Sv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Mv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Ev)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===wv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===bv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Tv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Av)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Cv)return o===Oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===od)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===od)return o===Oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===DR||a===Rv||a===Pv||a===Lv)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===od)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Rv)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pv)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Lv)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===sa?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class WD extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ao extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jD={type:"move"};class Pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),h=this._getHandJoint(c,x);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(jD)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ao;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class $D extends yn{constructor(e,n,i,r,a,o,s,l,c,u){if(u=u!==void 0?u:la,u!==la&&u!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===la&&(i=gr),i===void 0&&u===Io&&(i=sa),super(null,r,a,o,s,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class XD extends Bo{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const x=n.getContextAttributes();let g=null,h=null;const v=[],m=[],y=new sn;y.layers.enable(1),y.viewport=new Qe;const S=new sn;S.layers.enable(2),S.viewport=new Qe;const w=[y,S],E=new WD;E.layers.enable(1),E.layers.enable(2);let R=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let V=v[D];return V===void 0&&(V=new Pd,v[D]=V),V.getTargetRaySpace()},this.getControllerGrip=function(D){let V=v[D];return V===void 0&&(V=new Pd,v[D]=V),V.getGripSpace()},this.getHand=function(D){let V=v[D];return V===void 0&&(V=new Pd,v[D]=V),V.getHandSpace()};function b(D){const V=m.indexOf(D.inputSource);if(V===-1)return;const re=v[V];re!==void 0&&(re.update(D.inputSource,D.frame,c||o),re.dispatchEvent({type:D.type,data:D.inputSource}))}function G(){r.removeEventListener("select",b),r.removeEventListener("selectstart",b),r.removeEventListener("selectend",b),r.removeEventListener("squeeze",b),r.removeEventListener("squeezestart",b),r.removeEventListener("squeezeend",b),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Q);for(let D=0;D<v.length;D++){const V=m[D];V!==null&&(m[D]=null,v[D].disconnect(V))}R=null,M=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){s=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",b),r.addEventListener("selectstart",b),r.addEventListener("selectend",b),r.addEventListener("squeeze",b),r.addEventListener("squeezestart",b),r.addEventListener("squeezeend",b),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,V),r.updateRenderState({baseLayer:p}),h=new Ci(p.framebufferWidth,p.framebufferHeight,{format:si,type:Tr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let V=null,re=null,ee=null;x.depth&&(ee=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,V=x.stencil?Io:la,re=x.stencil?sa:gr);const oe={colorFormat:n.RGBA8,depthFormat:ee,scaleFactor:a};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),h=new Ci(d.textureWidth,d.textureHeight,{format:si,type:Tr,depthTexture:new $D(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const he=e.properties.get(h);he.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(D){for(let V=0;V<D.removed.length;V++){const re=D.removed[V],ee=m.indexOf(re);ee>=0&&(m[ee]=null,v[ee].disconnect(re))}for(let V=0;V<D.added.length;V++){const re=D.added[V];let ee=m.indexOf(re);if(ee===-1){for(let he=0;he<v.length;he++)if(he>=m.length){m.push(re),ee=he;break}else if(m[he]===null){m[he]=re,ee=he;break}if(ee===-1)break}const oe=v[ee];oe&&oe.connect(re)}}const N=new P,H=new P;function F(D,V,re){N.setFromMatrixPosition(V.matrixWorld),H.setFromMatrixPosition(re.matrixWorld);const ee=N.distanceTo(H),oe=V.projectionMatrix.elements,he=re.projectionMatrix.elements,xe=oe[14]/(oe[10]-1),ye=oe[14]/(oe[10]+1),Xe=(oe[9]+1)/oe[5],dt=(oe[9]-1)/oe[5],Ve=(oe[8]-1)/oe[0],O=(he[8]+1)/he[0],jt=xe*Ve,be=xe*O,Ie=ee/(-Ve+O),Re=Ie*-Ve;V.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Re),D.translateZ(Ie),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const ht=xe+Ie,$e=ye+Ie,ke=jt-Re,it=be+(ee-Re),Bt=Xe*ye/$e*ht,$t=dt*ye/$e*ht;D.projectionMatrix.makePerspective(ke,it,Bt,$t,ht,$e),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function Z(D,V){V===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(V.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;E.near=S.near=y.near=D.near,E.far=S.far=y.far=D.far,(R!==E.near||M!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,M=E.far);const V=D.parent,re=E.cameras;Z(E,V);for(let ee=0;ee<re.length;ee++)Z(re[ee],V);re.length===2?F(E,y,S):E.projectionMatrix.copy(y.projectionMatrix),j(D,E,V)};function j(D,V,re){re===null?D.matrix.copy(V.matrixWorld):(D.matrix.copy(re.matrixWorld),D.matrix.invert(),D.matrix.multiply(V.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0);const ee=D.children;for(let oe=0,he=ee.length;oe<he;oe++)ee[oe].updateMatrixWorld(!0);D.projectionMatrix.copy(V.projectionMatrix),D.projectionMatrixInverse.copy(V.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=ip*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let I=null;function z(D,V){if(u=V.getViewerPose(c||o),_=V,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ee=!1;re.length!==E.cameras.length&&(E.cameras.length=0,ee=!0);for(let oe=0;oe<re.length;oe++){const he=re[oe];let xe=null;if(p!==null)xe=p.getViewport(he);else{const Xe=f.getViewSubImage(d,he);xe=Xe.viewport,oe===0&&(e.setRenderTargetTextures(h,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(h))}let ye=w[oe];ye===void 0&&(ye=new sn,ye.layers.enable(oe),ye.viewport=new Qe,w[oe]=ye),ye.matrix.fromArray(he.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(he.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(xe.x,xe.y,xe.width,xe.height),oe===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ee===!0&&E.cameras.push(ye)}}for(let re=0;re<v.length;re++){const ee=m[re],oe=v[re];ee!==null&&oe!==void 0&&oe.update(ee,V,c||o)}I&&I(D,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),_=null}const B=new jS;B.setAnimationLoop(z),this.setAnimationLoop=function(D){I=D},this.dispose=function(){}}}function YD(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,GS(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,m,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(g,h):h.isMeshToonMaterial?(a(g,h),f(g,h)):h.isMeshPhongMaterial?(a(g,h),u(g,h)):h.isMeshStandardMaterial?(a(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,y)):h.isMeshMatcapMaterial?(a(g,h),_(g,h)):h.isMeshDepthMaterial?a(g,h):h.isMeshDistanceMaterial?(a(g,h),x(g,h)):h.isMeshNormalMaterial?a(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&s(g,h)):h.isPointsMaterial?l(g,h,v,m):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===un&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===un&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const m=t.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*m,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function s(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,m){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=m*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===un&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function x(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qD(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const y=m.program;i.uniformBlockBinding(v,y)}function c(v,m){let y=r[v.id];y===void 0&&(_(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",g));const S=m.program;i.updateUBOMapping(v,S);const w=e.render.frame;a[v.id]!==w&&(d(v),a[v.id]=w)}function u(v){const m=f();v.__bindingPointIndex=m;const y=t.createBuffer(),S=v.__size,w=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,S,w),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function f(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const m=r[v.id],y=v.uniforms,S=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let w=0,E=y.length;w<E;w++){const R=y[w];if(p(R,w,S)===!0){const M=R.__offset,b=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let Q=0;Q<b.length;Q++){const N=b[Q],H=x(N);typeof N=="number"?(R.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,M+G,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=N.elements[0],R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=N.elements[0],R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=N.elements[0]):(N.toArray(R.__data,G),G+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,M,R.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,y){const S=v.value;if(y[m]===void 0){if(typeof S=="number")y[m]=S;else{const w=Array.isArray(S)?S:[S],E=[];for(let R=0;R<w.length;R++)E.push(w[R].clone());y[m]=E}return!0}else if(typeof S=="number"){if(y[m]!==S)return y[m]=S,!0}else{const w=Array.isArray(y[m])?y[m]:[y[m]],E=Array.isArray(S)?S:[S];for(let R=0;R<w.length;R++){const M=w[R];if(M.equals(E[R])===!1)return M.copy(E[R]),!0}}return!1}function _(v){const m=v.uniforms;let y=0;const S=16;let w=0;for(let E=0,R=m.length;E<R;E++){const M=m[E],b={boundary:0,storage:0},G=Array.isArray(M.value)?M.value:[M.value];for(let Q=0,N=G.length;Q<N;Q++){const H=G[Q],F=x(H);b.boundary+=F.boundary,b.storage+=F.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,E>0){w=y%S;const Q=S-w;w!==0&&Q-b.boundary<0&&(y+=S-w,M.__offset=y)}y+=b.storage}return w=y%S,w>0&&(y+=S-w),v.__size=y,v.__cache={},this}function x(v){const m={boundary:0,storage:0};return typeof v=="number"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete a[m.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},a={}}return{bind:l,update:c,dispose:h}}function KD(){const t=Ks("canvas");return t.style.display="block",t}class ZS{constructor(e={}){const{canvas:n=KD(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Oe,this.useLegacyLights=!0,this.toneMapping=di,this.toneMappingExposure=1;const m=this;let y=!1,S=0,w=0,E=null,R=-1,M=null;const b=new Qe,G=new Qe;let Q=null;const N=new Le(0);let H=0,F=n.width,Z=n.height,j=1,I=null,z=null;const B=new Qe(0,0,F,Z),D=new Qe(0,0,F,Z);let V=!1;const re=new Dm;let ee=!1,oe=!1,he=null;const xe=new tt,ye=new Ge,Xe=new P,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return E===null?j:1}let O=i;function jt(A,k){for(let $=0;$<A.length;$++){const U=A[$],Y=n.getContext(U,k);if(Y!==null)return Y}return null}try{const A={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rm}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",W,!1),n.addEventListener("webglcontextcreationerror",ie,!1),O===null){const k=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&k.shift(),O=jt(k,A),O===null)throw jt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let be,Ie,Re,ht,$e,ke,it,Bt,$t,C,T,X,te,ne,le,_e,ce,K,Se,Me,we,me,ge,ze;function rt(){be=new oI(O),Ie=new eI(O,be,e),be.init(Ie),me=new VD(O,be,Ie),Re=new HD(O,be,Ie),ht=new cI(O),$e=new AD,ke=new GD(O,be,Re,$e,Ie,me,ht),it=new nI(m),Bt=new aI(m),$t=new x3(O,Ie),ge=new QL(O,be,$t,Ie),C=new sI(O,$t,ht,ge),T=new hI(O,C,$t,ht),Se=new dI(O,Ie,ke),_e=new tI($e),X=new TD(m,it,Bt,be,Ie,ge,_e),te=new YD(m,$e),ne=new RD,le=new ND(be,Ie),K=new ZL(m,it,Bt,Re,T,d,l),ce=new BD(m,T,Ie),ze=new qD(O,ht,Ie,Re),Me=new JL(O,be,ht,Ie),we=new lI(O,be,ht,Ie),ht.programs=X.programs,m.capabilities=Ie,m.extensions=be,m.properties=$e,m.renderLists=ne,m.shadowMap=ce,m.state=Re,m.info=ht}rt();const L=new XD(m,O);this.xr=L,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=be.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=be.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(F,Z,!1))},this.getSize=function(A){return A.set(F,Z)},this.setSize=function(A,k,$=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,Z=k,n.width=Math.floor(A*j),n.height=Math.floor(k*j),$===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(F*j,Z*j).floor()},this.setDrawingBufferSize=function(A,k,$){F=A,Z=k,j=$,n.width=Math.floor(A*$),n.height=Math.floor(k*$),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(B)},this.setViewport=function(A,k,$,U){A.isVector4?B.set(A.x,A.y,A.z,A.w):B.set(A,k,$,U),Re.viewport(b.copy(B).multiplyScalar(j).floor())},this.getScissor=function(A){return A.copy(D)},this.setScissor=function(A,k,$,U){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,k,$,U),Re.scissor(G.copy(D).multiplyScalar(j).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(A){Re.setScissorTest(V=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){z=A},this.getClearColor=function(A){return A.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor.apply(K,arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha.apply(K,arguments)},this.clear=function(A=!0,k=!0,$=!0){let U=0;if(A){let Y=!1;if(E!==null){const pe=E.texture.format;Y=pe===PS||pe===RS||pe===CS}if(Y){const pe=E.texture.type,Ee=pe===Tr||pe===gr||pe===Pm||pe===sa||pe===TS||pe===AS,Te=K.getClearColor(),Ae=K.getClearAlpha(),Be=Te.r,Pe=Te.g,De=Te.b;Ee?(p[0]=Be,p[1]=Pe,p[2]=De,p[3]=Ae,O.clearBufferuiv(O.COLOR,0,p)):(_[0]=Be,_[1]=Pe,_[2]=De,_[3]=Ae,O.clearBufferiv(O.COLOR,0,_))}else U|=O.COLOR_BUFFER_BIT}k&&(U|=O.DEPTH_BUFFER_BIT),$&&(U|=O.STENCIL_BUFFER_BIT),O.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",W,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),ne.dispose(),le.dispose(),$e.dispose(),it.dispose(),Bt.dispose(),T.dispose(),ge.dispose(),ze.dispose(),X.dispose(),L.dispose(),L.removeEventListener("sessionstart",_t),L.removeEventListener("sessionend",gi),he&&(he.dispose(),he=null),tn.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=ht.autoReset,k=ce.enabled,$=ce.autoUpdate,U=ce.needsUpdate,Y=ce.type;rt(),ht.autoReset=A,ce.enabled=k,ce.autoUpdate=$,ce.needsUpdate=U,ce.type=Y}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const k=A.target;k.removeEventListener("dispose",ue),Ke(k)}function Ke(A){pt(A),$e.remove(A)}function pt(A){const k=$e.get(A).programs;k!==void 0&&(k.forEach(function($){X.releaseProgram($)}),A.isShaderMaterial&&X.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,$,U,Y,pe){k===null&&(k=dt);const Ee=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=lM(A,k,$,U,Y);Re.setMaterial(U,Ee);let Ae=$.index,Be=1;U.wireframe===!0&&(Ae=C.getWireframeAttribute($),Be=2);const Pe=$.drawRange,De=$.attributes.position;let xt=Pe.start*Be,Mt=(Pe.start+Pe.count)*Be;pe!==null&&(xt=Math.max(xt,pe.start*Be),Mt=Math.min(Mt,(pe.start+pe.count)*Be)),Ae!==null?(xt=Math.max(xt,0),Mt=Math.min(Mt,Ae.count)):De!=null&&(xt=Math.max(xt,0),Mt=Math.min(Mt,De.count));const Kn=Mt-xt;if(Kn<0||Kn===1/0)return;ge.setup(Y,U,Te,$,Ae);let Ri,wt=Me;if(Ae!==null&&(Ri=$t.get(Ae),wt=we,wt.setIndex(Ri)),Y.isMesh)U.wireframe===!0?(Re.setLineWidth(U.wireframeLinewidth*Ve()),wt.setMode(O.LINES)):wt.setMode(O.TRIANGLES);else if(Y.isLine){let Ye=U.linewidth;Ye===void 0&&(Ye=1),Re.setLineWidth(Ye*Ve()),Y.isLineSegments?wt.setMode(O.LINES):Y.isLineLoop?wt.setMode(O.LINE_LOOP):wt.setMode(O.LINE_STRIP)}else Y.isPoints?wt.setMode(O.POINTS):Y.isSprite&&wt.setMode(O.TRIANGLES);if(Y.isInstancedMesh)wt.renderInstances(xt,Kn,Y.count);else if($.isInstancedBufferGeometry){const Ye=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,hf=Math.min($.instanceCount,Ye);wt.renderInstances(xt,Kn,hf)}else wt.render(xt,Kn)},this.compile=function(A,k){function $(U,Y,pe){U.transparent===!0&&U.side===Cn&&U.forceSinglePass===!1?(U.side=un,U.needsUpdate=!0,dl(U,Y,pe),U.side=Dr,U.needsUpdate=!0,dl(U,Y,pe),U.side=Cn):dl(U,Y,pe)}g=le.get(A),g.init(),v.push(g),A.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights(m.useLegacyLights),A.traverse(function(U){const Y=U.material;if(Y)if(Array.isArray(Y))for(let pe=0;pe<Y.length;pe++){const Ee=Y[pe];$(Ee,A,U)}else $(Y,A,U)}),v.pop(),g=null};let Dt=null;function mi(A){Dt&&Dt(A)}function _t(){tn.stop()}function gi(){tn.start()}const tn=new jS;tn.setAnimationLoop(mi),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(A){Dt=A,L.setAnimationLoop(A),A===null?tn.stop():tn.start()},L.addEventListener("sessionstart",_t),L.addEventListener("sessionend",gi),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(k),k=L.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,k,E),g=le.get(A,v.length),g.init(),v.push(g),xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),re.setFromProjectionMatrix(xe),oe=this.localClippingEnabled,ee=_e.init(this.clippingPlanes,oe),x=ne.get(A,h.length),x.init(),h.push(x),Vm(A,k,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(I,z),this.info.render.frame++,ee===!0&&_e.beginShadows();const $=g.state.shadowsArray;if(ce.render($,A,k),ee===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset(),K.render(x,A),g.setupLights(m.useLegacyLights),k.isArrayCamera){const U=k.cameras;for(let Y=0,pe=U.length;Y<pe;Y++){const Ee=U[Y];Wm(x,A,Ee,Ee.viewport)}}else Wm(x,A,k);E!==null&&(ke.updateMultisampleRenderTarget(E),ke.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(m,A,k),ge.resetDefaultState(),R=-1,M=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function Vm(A,k,$,U){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||re.intersectsSprite(A)){U&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Ee=T.update(A),Te=A.material;Te.visible&&x.push(A,Ee,Te,$,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||re.intersectsObject(A))){const Ee=T.update(A),Te=A.material;if(U&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Xe.copy(Ee.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(Te)){const Ae=Ee.groups;for(let Be=0,Pe=Ae.length;Be<Pe;Be++){const De=Ae[Be],xt=Te[De.materialIndex];xt&&xt.visible&&x.push(A,Ee,xt,$,Xe.z,De)}}else Te.visible&&x.push(A,Ee,Te,$,Xe.z,null)}}const pe=A.children;for(let Ee=0,Te=pe.length;Ee<Te;Ee++)Vm(pe[Ee],k,$,U)}function Wm(A,k,$,U){const Y=A.opaque,pe=A.transmissive,Ee=A.transparent;g.setupLightsView($),ee===!0&&_e.setGlobalState(m.clippingPlanes,$),pe.length>0&&sM(Y,pe,k,$),U&&Re.viewport(b.copy(U)),Y.length>0&&fl(Y,k,$),pe.length>0&&fl(pe,k,$),Ee.length>0&&fl(Ee,k,$),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function sM(A,k,$,U){const Y=Ie.isWebGL2;he===null&&(he=new Ci(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Ur:Tr,minFilter:qs,samples:Y?4:0})),m.getDrawingBufferSize(ye),Y?he.setSize(ye.x,ye.y):he.setSize(rp(ye.x),rp(ye.y));const pe=m.getRenderTarget();m.setRenderTarget(he),m.getClearColor(N),H=m.getClearAlpha(),H<1&&m.setClearColor(16777215,.5),m.clear();const Ee=m.toneMapping;m.toneMapping=di,fl(A,$,U),ke.updateMultisampleRenderTarget(he),ke.updateRenderTargetMipmap(he);let Te=!1;for(let Ae=0,Be=k.length;Ae<Be;Ae++){const Pe=k[Ae],De=Pe.object,xt=Pe.geometry,Mt=Pe.material,Kn=Pe.group;if(Mt.side===Cn&&De.layers.test(U.layers)){const Ri=Mt.side;Mt.side=un,Mt.needsUpdate=!0,jm(De,$,U,xt,Mt,Kn),Mt.side=Ri,Mt.needsUpdate=!0,Te=!0}}Te===!0&&(ke.updateMultisampleRenderTarget(he),ke.updateRenderTargetMipmap(he)),m.setRenderTarget(pe),m.setClearColor(N,H),m.toneMapping=Ee}function fl(A,k,$){const U=k.isScene===!0?k.overrideMaterial:null;for(let Y=0,pe=A.length;Y<pe;Y++){const Ee=A[Y],Te=Ee.object,Ae=Ee.geometry,Be=U===null?Ee.material:U,Pe=Ee.group;Te.layers.test($.layers)&&jm(Te,k,$,Ae,Be,Pe)}}function jm(A,k,$,U,Y,pe){A.onBeforeRender(m,k,$,U,Y,pe),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(m,k,$,U,A,pe),Y.transparent===!0&&Y.side===Cn&&Y.forceSinglePass===!1?(Y.side=un,Y.needsUpdate=!0,m.renderBufferDirect($,k,U,Y,A,pe),Y.side=Dr,Y.needsUpdate=!0,m.renderBufferDirect($,k,U,Y,A,pe),Y.side=Cn):m.renderBufferDirect($,k,U,Y,A,pe),A.onAfterRender(m,k,$,U,Y,pe)}function dl(A,k,$){k.isScene!==!0&&(k=dt);const U=$e.get(A),Y=g.state.lights,pe=g.state.shadowsArray,Ee=Y.state.version,Te=X.getParameters(A,Y.state,pe,k,$),Ae=X.getProgramCacheKey(Te);let Be=U.programs;U.environment=A.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(A.isMeshStandardMaterial?Bt:it).get(A.envMap||U.environment),Be===void 0&&(A.addEventListener("dispose",ue),Be=new Map,U.programs=Be);let Pe=Be.get(Ae);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===Ee)return $m(A,Te),Pe}else Te.uniforms=X.getUniforms(A),A.onBuild($,Te,m),A.onBeforeCompile(Te,m),Pe=X.acquireProgram(Te,Ae),Be.set(Ae,Pe),U.uniforms=Te.uniforms;const De=U.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=_e.uniform),$m(A,Te),U.needsLights=uM(A),U.lightsStateVersion=Ee,U.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.directionalShadowMap.value=Y.state.directionalShadowMap,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotShadowMap.value=Y.state.spotShadowMap,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMap.value=Y.state.pointShadowMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix);const xt=Pe.getUniforms(),Mt=Pc.seqWithValue(xt.seq,De);return U.currentProgram=Pe,U.uniformsList=Mt,Pe}function $m(A,k){const $=$e.get(A);$.outputColorSpace=k.outputColorSpace,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function lM(A,k,$,U,Y){k.isScene!==!0&&(k=dt),ke.resetTextureUnits();const pe=k.fog,Ee=U.isMeshStandardMaterial?k.environment:null,Te=E===null?m.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Xn,Ae=(U.isMeshStandardMaterial?Bt:it).get(U.envMap||Ee),Be=U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Pe=!!$.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),De=!!$.morphAttributes.position,xt=!!$.morphAttributes.normal,Mt=!!$.morphAttributes.color,Kn=U.toneMapped?m.toneMapping:di,Ri=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,wt=Ri!==void 0?Ri.length:0,Ye=$e.get(U),hf=g.state.lights;if(ee===!0&&(oe===!0||A!==M)){const Sn=A===M&&U.id===R;_e.setState(U,A,Sn)}let Ut=!1;U.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==hf.state.version||Ye.outputColorSpace!==Te||Y.isInstancedMesh&&Ye.instancing===!1||!Y.isInstancedMesh&&Ye.instancing===!0||Y.isSkinnedMesh&&Ye.skinning===!1||!Y.isSkinnedMesh&&Ye.skinning===!0||Ye.envMap!==Ae||U.fog===!0&&Ye.fog!==pe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==_e.numPlanes||Ye.numIntersection!==_e.numIntersection)||Ye.vertexAlphas!==Be||Ye.vertexTangents!==Pe||Ye.morphTargets!==De||Ye.morphNormals!==xt||Ye.morphColors!==Mt||Ye.toneMapping!==Kn||Ie.isWebGL2===!0&&Ye.morphTargetsCount!==wt)&&(Ut=!0):(Ut=!0,Ye.__version=U.version);let Br=Ye.currentProgram;Ut===!0&&(Br=dl(U,k,Y));let Xm=!1,Wo=!1,pf=!1;const nn=Br.getUniforms(),Hr=Ye.uniforms;if(Re.useProgram(Br.program)&&(Xm=!0,Wo=!0,pf=!0),U.id!==R&&(R=U.id,Wo=!0),Xm||M!==A){if(nn.setValue(O,"projectionMatrix",A.projectionMatrix),Ie.logarithmicDepthBuffer&&nn.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Wo=!0,pf=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Sn=nn.map.cameraPosition;Sn!==void 0&&Sn.setValue(O,Xe.setFromMatrixPosition(A.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&nn.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Y.isSkinnedMesh)&&nn.setValue(O,"viewMatrix",A.matrixWorldInverse)}if(Y.isSkinnedMesh){nn.setOptional(O,Y,"bindMatrix"),nn.setOptional(O,Y,"bindMatrixInverse");const Sn=Y.skeleton;Sn&&(Ie.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),nn.setValue(O,"boneTexture",Sn.boneTexture,ke),nn.setValue(O,"boneTextureSize",Sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const mf=$.morphAttributes;if((mf.position!==void 0||mf.normal!==void 0||mf.color!==void 0&&Ie.isWebGL2===!0)&&Se.update(Y,$,Br),(Wo||Ye.receiveShadow!==Y.receiveShadow)&&(Ye.receiveShadow=Y.receiveShadow,nn.setValue(O,"receiveShadow",Y.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Hr.envMap.value=Ae,Hr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Wo&&(nn.setValue(O,"toneMappingExposure",m.toneMappingExposure),Ye.needsLights&&cM(Hr,pf),pe&&U.fog===!0&&te.refreshFogUniforms(Hr,pe),te.refreshMaterialUniforms(Hr,U,j,Z,he),Pc.upload(O,Ye.uniformsList,Hr,ke)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Pc.upload(O,Ye.uniformsList,Hr,ke),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&nn.setValue(O,"center",Y.center),nn.setValue(O,"modelViewMatrix",Y.modelViewMatrix),nn.setValue(O,"normalMatrix",Y.normalMatrix),nn.setValue(O,"modelMatrix",Y.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Sn=U.uniformsGroups;for(let gf=0,fM=Sn.length;gf<fM;gf++)if(Ie.isWebGL2){const Ym=Sn[gf];ze.update(Ym,Br),ze.bind(Ym,Br)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Br}function cM(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function uM(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,k,$){$e.get(A.texture).__webglTexture=k,$e.get(A.depthTexture).__webglTexture=$;const U=$e.get(A);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=$===void 0,U.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const $=$e.get(A);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,$=0){E=A,S=k,w=$;let U=!0,Y=null,pe=!1,Ee=!1;if(A){const Ae=$e.get(A);Ae.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(O.FRAMEBUFFER,null),U=!1):Ae.__webglFramebuffer===void 0?ke.setupRenderTarget(A):Ae.__hasExternalTextures&&ke.rebindTextures(A,$e.get(A.texture).__webglTexture,$e.get(A.depthTexture).__webglTexture);const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ee=!0);const Pe=$e.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Y=Pe[k],pe=!0):Ie.isWebGL2&&A.samples>0&&ke.useMultisampledRTT(A)===!1?Y=$e.get(A).__webglMultisampledFramebuffer:Y=Pe,b.copy(A.viewport),G.copy(A.scissor),Q=A.scissorTest}else b.copy(B).multiplyScalar(j).floor(),G.copy(D).multiplyScalar(j).floor(),Q=V;if(Re.bindFramebuffer(O.FRAMEBUFFER,Y)&&Ie.drawBuffers&&U&&Re.drawBuffers(A,Y),Re.viewport(b),Re.scissor(G),Re.setScissorTest(Q),pe){const Ae=$e.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,$)}else if(Ee){const Ae=$e.get(A.texture),Be=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ae.__webglTexture,$||0,Be)}R=-1},this.readRenderTargetPixels=function(A,k,$,U,Y,pe,Ee){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=$e.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){Re.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ae=A.texture,Be=Ae.format,Pe=Ae.type;if(Be!==si&&me.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Ur&&(be.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&be.has("EXT_color_buffer_float"));if(Pe!==Tr&&me.convert(Pe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===vr&&(Ie.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-U&&$>=0&&$<=A.height-Y&&O.readPixels(k,$,U,Y,me.convert(Be),me.convert(Pe),pe)}finally{const Ae=E!==null?$e.get(E).__webglFramebuffer:null;Re.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(A,k,$=0){const U=Math.pow(2,-$),Y=Math.floor(k.image.width*U),pe=Math.floor(k.image.height*U);ke.setTexture2D(k,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,A.x,A.y,Y,pe),Re.unbindTexture()},this.copyTextureToTexture=function(A,k,$,U=0){const Y=k.image.width,pe=k.image.height,Ee=me.convert($.format),Te=me.convert($.type);ke.setTexture2D($,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,$.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,$.unpackAlignment),k.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,U,A.x,A.y,Y,pe,Ee,Te,k.image.data):k.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,U,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Ee,k.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,U,A.x,A.y,Ee,Te,k.image),U===0&&$.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(A,k,$,U,Y=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=A.max.x-A.min.x+1,Ee=A.max.y-A.min.y+1,Te=A.max.z-A.min.z+1,Ae=me.convert(U.format),Be=me.convert(U.type);let Pe;if(U.isData3DTexture)ke.setTexture3D(U,0),Pe=O.TEXTURE_3D;else if(U.isDataArrayTexture)ke.setTexture2DArray(U,0),Pe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);const De=O.getParameter(O.UNPACK_ROW_LENGTH),xt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Mt=O.getParameter(O.UNPACK_SKIP_PIXELS),Kn=O.getParameter(O.UNPACK_SKIP_ROWS),Ri=O.getParameter(O.UNPACK_SKIP_IMAGES),wt=$.isCompressedTexture?$.mipmaps[0]:$.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?O.texSubImage3D(Pe,Y,k.x,k.y,k.z,pe,Ee,Te,Ae,Be,wt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Pe,Y,k.x,k.y,k.z,pe,Ee,Te,Ae,wt.data)):O.texSubImage3D(Pe,Y,k.x,k.y,k.z,pe,Ee,Te,Ae,Be,wt),O.pixelStorei(O.UNPACK_ROW_LENGTH,De),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Mt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Kn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ri),Y===0&&U.generateMipmaps&&O.generateMipmap(Pe),Re.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?ke.setTextureCube(A,0):A.isData3DTexture?ke.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ke.setTexture2DArray(A,0):ke.setTexture2D(A,0),Re.unbindTexture()},this.resetState=function(){S=0,w=0,E=null,Re.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Oe?ca:LS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ca?Oe:Xn}}class ZD extends ZS{}ZD.prototype.isWebGL1Renderer=!0;class QD extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class uf extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const x_=new P,y_=new P,S_=new tt,Ld=new Im,sc=new cl;class JD extends Jt{constructor(e=new qn,n=new uf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,a=n.count;r<a;r++)x_.fromBufferAttribute(n,r-1),y_.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=x_.distanceTo(y_);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(r),sc.radius+=a,e.ray.intersectsSphere(sc)===!1)return;S_.copy(r).invert(),Ld.copy(e.ray).applyMatrix4(S_);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new P,u=new P,f=new P,d=new P,p=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let m=h,y=v-1;m<y;m+=p){const S=_.getX(m),w=_.getX(m+1);if(c.fromBufferAttribute(g,S),u.fromBufferAttribute(g,w),Ld.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||n.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let m=h,y=v-1;m<y;m+=p){if(c.fromBufferAttribute(g,m),u.fromBufferAttribute(g,m+1),Ld.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||n.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}const M_=new P,E_=new P;class eU extends JD{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,a=n.count;r<a;r+=2)M_.fromBufferAttribute(n,r),E_.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+M_.distanceTo(E_);e.setAttribute("lineDistance",new Ln(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class QS extends zr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const w_=new tt,op=new Im,lc=new cl,cc=new P;class JS extends Jt{constructor(e=new qn,n=new QS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(r),lc.radius+=a,e.ray.intersectsSphere(lc)===!1)return;w_.copy(r).invert(),op.copy(e.ray).applyMatrix4(w_);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,x=p;_<x;_++){const g=c.getX(_);cc.fromBufferAttribute(f,g),b_(cc,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,x=p;_<x;_++)cc.fromBufferAttribute(f,_),b_(cc,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function b_(t,e,n,i,r,a,o){const s=op.distanceSqToPoint(t);if(s<n){const l=new P;op.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class tU{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),a=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),n.push(a),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const a=i.length;let o;n?o=n:o=e*i[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=i[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(a-1);const u=i[r],d=i[r+1]-u,p=(o-u)/d;return(r+p)/(a-1)}getTangent(e,n){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=n||(o.isVector2?new Ge:new P);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new P,r=[],a=[],o=[],s=new P,l=new tt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new P)}a[0]=new P,o[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),o[p]=o[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();const _=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(s,_))}o[p].crossVectors(r[p],a[p])}if(n===!0){let p=Math.acos(Gt(a[0].dot(a[e]),-1,1));p/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(p=-p);for(let _=1;_<=e;_++)a[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],a[_])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Nm(){let t=0,e=0,n=0,i=0;function r(a,o,s,l){t=a,e=s,n=-3*a+3*o-2*s-l,i=2*a-2*o+s+l}return{initCatmullRom:function(a,o,s,l,c){r(o,s,c*(s-a),c*(l-o))},initNonuniformCatmullRom:function(a,o,s,l,c,u,f){let d=(o-a)/c-(s-a)/(c+u)+(s-o)/u,p=(s-o)/u-(l-o)/(u+f)+(l-s)/f;d*=u,p*=u,r(o,s,d,p)},calc:function(a){const o=a*a,s=o*a;return t+e*a+n*o+i*s}}}const uc=new P,Id=new Nm,Dd=new Nm,Ud=new Nm;class nU extends tU{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new P){const i=n,r=this.points,a=r.length,o=(a-(this.closed?0:1))*e;let s=Math.floor(o),l=o-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:l===0&&s===a-1&&(s=a-2,l=1);let c,u;this.closed||s>0?c=r[(s-1)%a]:(uc.subVectors(r[0],r[1]).add(r[0]),c=uc);const f=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?u=r[(s+2)%a]:(uc.subVectors(r[a-1],r[a-2]).add(r[a-1]),u=uc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),p),x=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(u),p);x<1e-4&&(x=1),_<1e-4&&(_=x),g<1e-4&&(g=x),Id.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,x,g),Dd.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,x,g),Ud.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,x,g)}else this.curveType==="catmullrom"&&(Id.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Dd.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Ud.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Id.calc(l),Dd.calc(l),Ud.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class eM extends zr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lm,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iU extends zr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lm,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const T_={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class rU{constructor(e,n,i){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){s++,a===!1&&r.onStart!==void 0&&r.onStart(u,o,s),a=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const aU=new rU;class Om{constructor(e){this.manager=e!==void 0?e:aU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,a){i.load(e,r,n,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Om.DEFAULT_MATERIAL_NAME="__DEFAULT";class oU extends Om{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=T_.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){n&&n(o),a.manager.itemEnd(e)},0),o;const s=Ks("img");function l(){u(),T_.add(e,this),n&&n(this),a.manager.itemEnd(e)}function c(f){u(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function u(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class sp extends Om{constructor(e){super(e)}load(e,n,i,r){const a=new yn,o=new oU(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,n!==void 0&&n(a)},i,r),a}}class sU extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Nd=new tt,A_=new P,C_=new P;class lU{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dm,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;A_.setFromMatrixPosition(e.matrixWorld),n.position.copy(A_),C_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(C_),n.updateMatrixWorld(),Nd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const R_=new tt,is=new P,Od=new P;class cU extends lU{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ge(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),i.position.copy(is),Od.copy(i.position),Od.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Od),i.updateMatrixWorld(),r.makeTranslation(-is.x,-is.y,-is.z),R_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R_)}}class uU extends sU{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cU}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=P_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=P_();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function P_(){return(typeof performance>"u"?Date:performance).now()}class L_{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rm);const mo=({colors:t})=>({cell:e})=>t[(e||0)%t.length],nM=`
uniform float size;
attribute vec3 color;
varying vec3 vColor;

void main() {
  vColor = color;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

  gl_PointSize = size * (10.0 / - mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
`,iM=`
uniform float opacity;
varying vec3 vColor;

void main() {
  if (length(gl_PointCoord - vec2( 0.5, 0.5 )) > 0.475) discard;

  gl_FragColor = vec4(vColor, opacity);
}
`,go=new Array(128).fill().map((t,e)=>`hsl(${e*29%360}, 60%, 60%)`),kd={faces:{enabled:!0,useColors:!0,colorGenerator:mo,colors:go,reuse:"none",split:"cells",splitScale:100,material:new eM({transparent:!0,opacity:.25,blending:oa,depthWrite:!1,side:Cn,vertexColors:!0})},edges:{enabled:!0,useColors:!0,colorGenerator:mo,colors:go,reuse:"faces",split:"cells",splitScale:100,material:new uf({transparent:!0,opacity:.25,blending:$i,depthWrite:!1,vertexColors:!0,linewidth:2})},points:{enabled:!1,useColors:!0,colorGenerator:mo,colors:go,reuse:"faces",split:"none",splitScale:100,material:new fn({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:nM,fragmentShader:iM,transparent:!0,blending:$i})}},fU=["all","faces","none"],dU=["none","cells","faces"];class hU extends ao{constructor(e,{all:n={},faces:i={},edges:r={},points:a={}}={all:{},faces:{},edges:{},points:{}}){super(),this.shape=e,this.config={faces:{...kd.faces,...i,...n},edges:{...kd.edges,...r,...n},points:{...kd.points,...a,...n}},this.parts={};const o={faces:gn,edges:eU,points:JS};["points","edges","faces"].map((s,l)=>{if(this.config[s].enabled){const c=typeof this.config[s].reuse=="string"?fU.indexOf(this.config[s].reuse):this.config[s].reuse;let u=typeof this.config[s].split=="string"?dU.indexOf(this.config[s].split):this.config[s].split;u>c&&(console.warn(`Geometry order ${u} can’t be superior to unfold order ${c}`),u=c);const f=this.getVerticesIndices(c,u),d=this.getIndices(c,u,l+1),p=this.buildGeometry(f,this.config[s].useColors,s);d&&this.setIndices(p,d),this[s]=this.createMesh(p,this.config[s].material,o[s]),this.config[s].useColors&&this.setColor(p,f,c,u,this.config[s].colorGenerator,this.config[s].colors,s),this.parts[s]={geometry:p,verticesIndices:f},this.add(this[s])}})}initGeometry(e,n){}getVerticesIndices(e,n){const i=r=>this.shape.faces[r];if(e===0){if(n===0)return new Array(this.shape.vertices.length).fill().map((r,a)=>a)}else if(e===1){if(n===0)return this.shape.cells.map(r=>[...new Set(r.map(i).flat())]).flat();if(n===1)return this.shape.cells.map(r=>[...new Set(r.map(i).flat())])}else if(e===2){if(n===0)return this.shape.cells.map(r=>r.map(i).flat()).flat();if(n===1)return this.shape.cells.map(r=>r.map(i).flat());if(n===2)return this.shape.cells.map(r=>r.map(i))}}setColor(e,n,i,r,a,o,s){const l=a({shape:this.shape,colors:o.map(u=>new Le(u))}),c=u=>this.shape.faces[u];if(i===0){if(r===0){let u=0;n.forEach(f=>{const[d,p,_]=l({vertex:f,type:s}).toArray();e.attributes.color.array[u++]=d,e.attributes.color.array[u++]=p,e.attributes.color.array[u++]=_}),e.attributes.color.needsUpdate=!0}}else if(i===1){if(r===0){let u=0;this.shape.cells.forEach((f,d)=>{[...new Set(f.map(c).flat())].map(p=>{const[_,x,g]=l({cell:d,vertex:p,type:s}).toArray();e.attributes.color.array[u++]=_,e.attributes.color.array[u++]=x,e.attributes.color.array[u++]=g})}),e.attributes.color.needsUpdate=!0}r===1&&this.shape.cells.forEach((u,f)=>{let d=0;[...new Set(u.map(c).flat())].map(p=>{const[_,x,g]=l({cell:f,vertex:p,type:s}).toArray();e[f].attributes.color.array[d++]=_,e[f].attributes.color.array[d++]=x,e[f].attributes.color.array[d++]=g}),e[f].attributes.color.needsUpdate=!0})}else if(i===2)if(r===0){let u=0;this.shape.cells.forEach((f,d)=>{f.map(c).map((p,_)=>{p.forEach(x=>{const[g,h,v]=l({cell:d,face:_,vertex:x,type:s}).toArray();e.attributes.color.array[u++]=g,e.attributes.color.array[u++]=h,e.attributes.color.array[u++]=v})})}),e.attributes.color.needsUpdate=!0}else r===1?this.shape.cells.forEach((u,f)=>{let d=0;u.map(c).map((p,_)=>{p.forEach(x=>{const[g,h,v]=l({cell:f,face:_,vertex:x,type:s}).toArray();e[f].attributes.color.array[d++]=g,e[f].attributes.color.array[d++]=h,e[f].attributes.color.array[d++]=v})}),e[f].attributes.color.needsUpdate=!0}):r===2&&this.shape.cells.forEach((u,f)=>{u.map(c).map((d,p)=>{let _=0;d.forEach(x=>{const[g,h,v]=l({cell:f,face:p,vertex:x,type:s}).toArray();e[f][p].attributes.color.array[_++]=g,e[f][p].attributes.color.array[_++]=h,e[f][p].attributes.color.array[_++]=v}),e[f][p].attributes.color.needsUpdate=!0})})}getIndices(e,n,i){const r=o=>this.shape.faces[o];let a;if(i===0||i===1)a=null;else if(i===2){if(a=[],e===0)n===0&&this.shape.cells.forEach(o=>o.map(r).forEach(s=>{s.forEach((l,c)=>{a.push(l,s[(c+1)%s.length])})}));else if(e===1)if(n===0){let o=0;this.shape.cells.forEach(s=>{const l=[...new Set(s.map(r).flat())];s.map(r).forEach(c=>{c.forEach((u,f)=>{a.push(o+l.indexOf(u),o+l.indexOf(c[(f+1)%c.length]))})}),o+=l.length})}else n===1&&this.shape.cells.forEach((o,s)=>{const l=[...new Set(o.map(r).flat())],c=[];o.map(r).forEach(u=>{u.forEach((f,d)=>{c.push(l.indexOf(f),l.indexOf(u[(d+1)%u.length]))})}),a.push(c)});else if(e===2)if(n===0){let o=0;this.shape.cells.forEach(s=>{s.map(r).forEach(l=>{l.forEach((c,u)=>{a.push(o+u,o+(u+1)%l.length)}),o+=l.length})})}else n===1?this.shape.cells.forEach(o=>{let s=0;const l=[];o.map(r).forEach(c=>{c.forEach((u,f)=>{l.push(s+f,s+(f+1)%c.length)}),s+=c.length}),a.push(l)}):n===2&&this.shape.cells.forEach(o=>{const s=[];o.map(r).forEach(l=>{const c=[];l.forEach((u,f)=>{c.push(f,(f+1)%l.length)}),s.push(c)}),a.push(s)})}else if(i===3){if(a=[],e===0)this.shape.cells.forEach(o=>o.map(r).forEach(s=>{new Array(s.length-2).fill().forEach((l,c)=>{a.push(s[0],s[c+1],s[c+2])})}));else if(e===1)if(n===0){let o=0;this.shape.cells.forEach(s=>{const l=[...new Set(s.map(r).flat())];s.map(r).forEach(c=>{new Array(c.length-2).fill().forEach((u,f)=>{a.push(o+l.indexOf(c[0]),o+l.indexOf(c[f+1]),o+l.indexOf(c[f+2]))})}),o+=l.length})}else n===1&&this.shape.cells.forEach((o,s)=>{const l=[...new Set(o.map(r).flat())],c=[];o.map(r).forEach(u=>{new Array(u.length-2).fill().forEach((f,d)=>{c.push(l.indexOf(u[0]),l.indexOf(u[d+1]),l.indexOf(u[d+2]))})}),a.push(c)});else if(e===2)if(n===0){let o=0;this.shape.cells.forEach(s=>{s.map(r).forEach(l=>{new Array(l.length-2).fill().forEach((c,u)=>{a.push(o,o+u+1,o+u+2)}),o+=l.length})})}else n===1?this.shape.cells.forEach(o=>{let s=0;const l=[];o.map(r).forEach(c=>{new Array(c.length-2).fill().forEach((u,f)=>{l.push(s,s+f+1,s+f+2)}),s+=c.length}),a.push(l)}):n===2&&this.shape.cells.forEach(o=>{const s=[];o.map(r).forEach(l=>{const c=[];new Array(l.length-2).fill().forEach((u,f)=>{c.push(0,f+1,f+2)}),s.push(c)}),a.push(s)})}return a}buildGeometry(e,n,i,r=0){const[a]=e;if(Array.isArray(a))return e.map(l=>this.buildGeometry(l,n,i,r+1));const o=e.length,s=new qn;return s.setAttribute("position",new Vn(new Float32Array(3*o),3).setUsage(Dv)),n&&s.setAttribute("color",new Vn(new Float32Array(3*o),3).setUsage(Dv)),s.name=`${i} geometry, level ${r}`,s}setIndices(e,n){return Array.isArray(e)?e.map((i,r)=>this.setIndices(i,n[r])):e.setIndex(n)}createMesh(e,n,i){if(Array.isArray(e)){const r=new ao;return r.add(...e.map((a,o)=>this.createMesh(a,Array.isArray(n)?n[o]:n,i))),r}return new i(e,n)}walk(e,n,i){if(Array.isArray(e))return e.forEach((r,a)=>this.walk(r,n[a],i));i(e,n)}setPoint(e,n,i,r){this.walk(e,n,(a,o)=>{let s=0;o.forEach(l=>{const[c,u,f]=r[l];a.attributes.position.array[s++]=c,a.attributes.position.array[s++]=u,a.attributes.position.array[s++]=f}),a.attributes.position.needsUpdate=!0,i==="faces"&&(a.computeVertexNormals(),a.attributes.normal.needsUpdate=!0)})}recenter(e,n){if(e.isGroup)return e.children.map(r=>this.recenter(r,n));const i=new P;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getCenter(i),e.geometry.center(),e.position.copy(i),e.scale.setScalar(n/100)}update(e){e.prepare(this.shape.vertices);const n=this.shape.vertices.map(e.project.bind(e));Object.entries(this.parts).forEach(([i,r])=>{this.config[i].enabled&&(this.setPoint(r.geometry,r.verticesIndices,i,n),this.recenter(this[i],this.config[i].splitScale))})}}class pU{constructor(e,n,i){this.fov=e||Math.PI/2,this.w=n||10,this.wt=0,this.wSlice=0,this.rotation=i||{xy:0,xz:0,xw:0,yz:0,yw:0,zw:0}}_directProject([e,n,i,r]){const a=1+r*this.fov/this.w;return[e/a,n/a,i/a]}project([e,n,i,r]){return this._directProject(this.rotatePoint([e,n,i,r]))}_directSlice([e,n,i,r],[a,o,s,l]){if((this.wSlice-r)*(this.wSlice-l)>=0)return;const c=(this.wSlice-r)/(l-r),u=e+c*(a-e),f=n+c*(o-n),d=i+c*(s-i);return[u,f,d]}slice(e,n){return this._directSlice(this.rotatePoint(e),this.rotatePoint(n))}shiftSlice(e,n,i){this.wt+=e/100;const r=(1+Math.cos(this.wt))*.5;this.wSlice=n+(i-n)*r}rotate(e){Object.keys(this.rotation).forEach(n=>{this.rotation[n]=(this.rotation[n]+(e[n]||0)/1e3)%(2*Math.PI)})}rotatePoint([e,n,i,r]){const{xy:a,xz:o,xw:s,yz:l,yw:c,zw:u}=this.rotation,f=Math.cos(a),d=Math.sin(a),p=Math.cos(o),_=Math.sin(o),x=Math.cos(s),g=Math.sin(s),h=Math.cos(l),v=Math.sin(l),m=Math.cos(c),y=Math.sin(c),S=Math.cos(u),w=Math.sin(u);let E=e;return e=e*f+n*d,n=n*f-E*d,E=e,e=e*p+i*_,i=i*p-E*_,E=e,e=e*x+r*g,r=r*x-E*g,E=n,n=n*h+i*v,i=i*h-E*v,E=n,n=n*m+r*y,r=r*m-E*y,E=i,i=i*S+r*w,r=r*S-E*w,[e,n,i,r]}prepare(){}}new eM({side:Cn,shininess:50,vertexColors:!0}),new uf({transparent:!0,opacity:.25,blending:$i,depthWrite:!1,vertexColors:!0,linewidth:2}),new fn({uniforms:{size:{value:5},opacity:{value:.25}},vertexShader:nM,fragmentShader:iM,transparent:!0,blending:$i});var mU={vertices:[[-1,0,0,0],[1,0,0,0],[0,-1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,1,0],[0,0,0,-1],[0,0,0,1]],faces:[[0,2,4],[0,2,5],[0,2,6],[0,2,7],[0,3,4],[0,3,5],[0,3,6],[0,3,7],[0,4,6],[0,4,7],[0,5,6],[0,5,7],[1,2,4],[1,2,5],[1,2,6],[1,2,7],[1,3,4],[1,3,5],[1,3,6],[1,3,7],[1,4,6],[1,4,7],[1,5,6],[1,5,7],[2,4,6],[2,4,7],[2,5,6],[2,5,7],[3,4,6],[3,4,7],[3,5,6],[3,5,7]],cells:[[0,2,8,24],[0,3,9,25],[1,2,10,26],[1,3,11,27],[4,6,8,28],[4,7,9,29],[5,6,10,30],[5,7,11,31],[12,14,20,24],[12,15,21,25],[13,14,22,26],[13,15,23,27],[16,18,20,28],[16,19,21,29],[17,18,22,30],[17,19,23,31]]},I_={vertices:[[1,1,1,-1/Math.sqrt(5)],[1,-1,-1,-1/Math.sqrt(5)],[-1,1,-1,-1/Math.sqrt(5)],[-1,-1,1,-1/Math.sqrt(5)],[0,0,0,Math.sqrt(5)-1/Math.sqrt(5)]],faces:[[1,2,3],[0,1,2],[0,1,3],[0,3,2],[0,4,1],[0,2,4],[0,3,4],[2,4,3],[1,3,4],[1,4,2]],cells:[[0,1,2,3],[1,5,4,9],[3,6,5,7],[2,4,6,8],[0,7,8,9]]};const km=([t,e],[n,i],[r,a],[o,s])=>({vertices:[[e,i,a,s],[e,i,r,s],[e,n,r,s],[e,n,a,s],[t,i,a,s],[t,i,r,s],[t,n,r,s],[t,n,a,s],[e,i,a,o],[e,i,r,o],[e,n,r,o],[e,n,a,o],[t,i,a,o],[t,i,r,o],[t,n,r,o],[t,n,a,o]],faces:[[0,1,2,3],[0,4,5,1],[0,3,7,4],[3,2,6,7],[1,5,6,2],[4,7,6,5],[0,1,9,8],[4,5,13,12],[3,2,10,11],[7,6,14,15],[0,3,11,8],[4,7,15,12],[1,2,10,9],[5,6,14,13],[0,4,12,8],[1,5,13,9],[2,6,14,10],[3,7,15,11],[11,10,9,8],[9,13,12,8],[12,15,11,8],[15,14,10,11],[10,14,13,9],[13,14,15,12]],cells:[[0,1,2,3,4,5],[0,6,12,8,10,18],[1,6,14,7,15,19],[4,12,16,13,15,22],[3,8,16,9,17,21],[2,10,17,11,14,20],[5,7,13,9,11,23],[18,19,20,21,22,23]]}),gU=km([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),rM=t=>km([-t,t],[-t,t],[-t,t],[-t,t]);var vU=rM(1);const Fm=([t,e],[n,i],[r,a],o)=>({vertices:[[t,n,r,0],[t,n,a,0],[t,i,r,0],[t,i,a,0],[e,n,r,0],[e,n,a,0],[e,i,r,0],[e,i,a,0],[0,0,0,o]],faces:[[1,5,8],[4,5,8],[0,4,8],[0,1,8],[0,1,5,4],[2,6,8],[4,6,8],[0,2,8],[0,2,6,4],[1,3,8],[2,3,8],[0,1,3,2],[5,7,8],[6,7,8],[4,5,7,6],[3,7,8],[2,3,7,6],[1,3,7,5]],cells:[[0,1,2,3,4],[5,6,2,7,8],[9,10,7,3,11],[12,13,6,1,14],[15,13,5,10,16],[15,12,0,9,17],[4,8,11,14,16,17]]}),_U=t=>Fm([-t,t],[-t,t],[-t,t],t),xU=Fm([-.25,.25],[-.5,.5],[-.75,.75],1),zm=([t,e],[n,i],[r,a],[o,s])=>({vertices:[[0,0,0,o],[t,n,r,0],[t,n,a,0],[t,i,r,0],[t,i,a,0],[e,n,r,0],[e,n,a,0],[e,i,r,0],[e,i,a,0],[0,0,0,s]],faces:[[6,8,9],[7,8,9],[5,7,9],[5,6,9],[5,6,8,7],[4,8,9],[3,7,9],[3,4,9],[3,4,8,7],[2,6,9],[2,4,9],[2,4,8,6],[1,5,9],[1,3,9],[1,3,7,5],[1,2,9],[1,2,6,5],[1,2,4,3],[0,7,8],[0,6,8],[0,5,6],[0,5,7],[0,4,8],[0,3,4],[0,3,7],[0,2,4],[0,2,6],[0,1,3],[0,1,5],[0,1,2]],cells:[[0,1,2,3,4],[5,1,6,7,8],[5,0,9,10,11],[6,2,12,13,14],[9,3,12,15,16],[10,7,13,15,17],[18,19,20,21,4],[18,22,23,24,8],[19,22,25,26,11],[21,24,27,28,14],[20,26,29,28,16],[23,25,29,27,17]]}),yU=t=>zm([-t,t],[-t,t],[-t,t],[-t,t]),SU=zm([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]),Bm=([t,e],[n,i],[r,a],o)=>({vertices:[[t,0,0,0],[0,n,0,0],[0,0,r,0],[0,0,a,0],[0,i,0,0],[e,0,0,0],[0,0,0,o]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),MU=t=>Bm([-t,t],[-t,t],[-t,t],t),EU=Bm([-.25,.25],[-.5,.5],[-.75,.75],1),Hm=([t,e],[n,i],[r,a],[o,s])=>({vertices:[[t,0,0,0],[0,n,0,0],[0,0,r,0],[0,0,0,o],[0,0,0,s],[0,0,a,0],[0,i,0,0],[e,0,0,0]],faces:[[4,5,6],[3,5,6],[3,4,6],[3,4,5],[2,5,6],[2,4,6],[2,4,5],[1,5,6],[1,3,6],[1,3,5],[1,2,6],[1,2,5],[0,4,6],[0,3,6],[0,3,4],[0,2,6],[0,2,4],[0,1,6],[0,1,3],[0,1,2]],cells:[[0,1,2,3],[0,4,5,6],[1,7,8,9],[4,7,10,11],[2,12,13,14],[5,12,15,16],[8,13,17,18],[10,15,17,19],[3,6,9,11,14,16,18,19]]}),wU=t=>Hm([-t,t],[-t,t],[-t,t],[-t,t]),bU=Hm([-.25,.25],[-.5,.5],[-.75,.75],[-1,1]);var TU={vertices:[[-.5,-.5,-.5,-.5],[-.5,-.5,-.5,.5],[-.5,-.5,.5,-.5],[-.5,-.5,.5,.5],[-1,0,0,0],[-.5,.5,-.5,-.5],[-.5,.5,-.5,.5],[-.5,.5,.5,-.5],[-.5,.5,.5,.5],[0,-1,0,0],[0,0,-1,0],[0,0,0,-1],[0,0,0,1],[0,0,1,0],[0,1,0,0],[.5,-.5,-.5,-.5],[.5,-.5,-.5,.5],[.5,-.5,.5,-.5],[.5,-.5,.5,.5],[1,0,0,0],[.5,.5,-.5,-.5],[.5,.5,-.5,.5],[.5,.5,.5,-.5],[.5,.5,.5,.5]],faces:[[14,20,22],[11,20,22],[7,14,22],[7,11,22],[5,14,20],[5,11,20],[5,7,14],[5,7,11],[11,15,17],[9,15,17],[2,11,17],[2,9,17],[0,11,15],[0,9,15],[0,2,11],[0,2,9],[12,16,21],[10,16,21],[6,12,21],[6,10,21],[1,12,16],[1,10,16],[1,6,12],[1,6,10],[13,17,18],[9,17,18],[3,13,18],[3,9,18],[2,13,17],[2,3,13],[2,3,9],[12,16,18],[9,16,18],[3,12,18],[1,9,16],[1,3,12],[1,3,9],[5,6,10],[0,5,10],[0,1,10],[4,5,6],[1,4,6],[0,4,5],[0,1,4],[10,15,16],[9,15,16],[0,10,15],[0,1,9],[2,7,11],[0,5,11],[4,5,7],[2,4,7],[0,2,4],[14,20,21],[10,20,21],[6,14,21],[5,10,20],[5,6,14],[13,17,22],[11,17,22],[7,13,22],[2,7,13],[2,3,4],[1,3,4],[6,8,12],[3,8,12],[4,6,8],[3,4,8],[7,8,13],[3,8,13],[4,7,8],[17,18,19],[16,18,19],[15,17,19],[15,16,19],[7,8,14],[6,8,14],[11,15,20],[10,15,20],[19,20,21],[16,19,21],[15,19,20],[19,20,22],[17,19,22],[19,21,23],[12,21,23],[18,19,23],[12,18,23],[14,21,23],[8,14,23],[8,12,23],[13,18,23],[8,13,23],[19,22,23],[13,22,23],[14,22,23]],cells:[[0,1,2,3,4,5,6,7],[8,9,10,11,12,13,14,15],[16,17,18,19,20,21,22,23],[24,25,26,27,28,11,29,30],[31,32,33,27,20,34,35,36],[37,23,38,39,40,41,42,43],[44,45,21,34,46,13,39,47],[7,48,49,14,50,51,42,52],[53,54,55,19,4,56,57,37],[58,59,60,3,28,10,61,48],[30,36,15,47,62,63,52,43],[64,65,22,35,66,67,41,63],[68,69,61,29,70,67,51,62],[71,72,73,74,25,32,9,45],[75,76,6,57,70,66,50,40],[77,78,5,56,12,46,49,38],[79,54,80,17,81,78,74,44],[82,1,83,59,81,77,73,8],[84,85,86,87,80,16,72,31],[88,85,89,90,55,18,76,64],[91,87,92,90,26,33,69,65],[93,94,86,91,83,58,71,24],[95,94,89,92,2,60,75,68],[93,95,84,88,82,0,79,53]]};const aM=(t,[e,n,i=16,r=!1,a=!0],[o,s,l=16,c=!1,u=!0])=>{const f=[],d=[],p=[];for(let _=0;_<l;_++){let x=[];for(let g=0;g<i;g++){f.push(t(e+g*(n-e)/(i-(r?1:0)),o+_*(s-o)/(l-(c?1:0))));const h=g+1<i?g+1:0,v=_+1<l?_+1:0;(a||g+1<i)&&(u||_+1<l)&&(d.push([g+_*i,h+_*i,h+v*i,g+v*i]),x.push(d.length-1))}x.length&&p.push(x)}return{vertices:f,faces:d,cells:p}},oM=(t,e,n=32)=>aM((i,r)=>[t*Math.cos(i),t*Math.sin(i),e*Math.cos(r),e*Math.sin(r)],[-Math.PI,Math.PI,n],[-Math.PI,Math.PI,n]),AU=(t,e=32)=>oM(t,t,e);oM(1,.5);AU(1);aM((t,e)=>[Math.cos(t)*Math.sin(e),Math.sin(t)*Math.sin(e),Math.cos(e)*Math.sin(t),Math.cos(e)*Math.cos(t)],[-Math.PI,Math.PI,32],[-Math.PI,Math.PI,32]);const pi=(t,[e,n,i=16,r=!1,a=!0],[o,s,l=16,c=!1,u=!0],[f,d,p=16,_=!1,x=!0],g={u:!0,v:!0,w:!0})=>{const h=[],v=[],m=[],y=[],S=[];for(let w=0;w<p;w++){let E=[];for(let R=0;R<l;R++){let M=S[R]||[];for(let b=0;b<i;b++){let G=y[b]||[];h.push(t(e+b*(n-e)/(i-(r?1:0)),o+R*(s-o)/(l-(c?1:0)),f+w*(d-f)/(p-(_?1:0))));const Q=b+1<i?b+1:0,N=R+1<l?R+1:0,H=w+1<p?w+1:0;(a||b+1<i)&&(u||R+1<l)&&(v.push([b+R*i+w*i*l,Q+R*i+w*i*l,Q+N*i+w*i*l,b+N*i+w*i*l]),E.push(v.length-1)),(a||b+1<i)&&(x||w+1<p)&&(v.push([b+R*i+w*i*l,b+R*i+H*i*l,Q+R*i+H*i*l,Q+R*i+w*i*l]),M.push(v.length-1)),(u||R+1<l)&&(x||w+1<p)&&(v.push([b+R*i+w*i*l,b+R*i+H*i*l,b+N*i+H*i*l,b+N*i+w*i*l]),G.push(v.length-1)),y[b]=G}S[R]=M}g.w&&m.push(E)}return g.v&&S.map(w=>m.push(w)),g.u&&y.map(w=>m.push(w)),{vertices:h,faces:v,cells:m}},CU=t=>pi((e,n,i)=>[t*Math.cos(e),t*Math.sin(e)*Math.cos(n),t*Math.sin(e)*Math.sin(n)*Math.cos(i),t*Math.sin(e)*Math.sin(n)*Math.sin(i)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]);CU(1);const RU=(t,e,n)=>pi((i,r,a)=>[t*Math.cos(i),(e+t*Math.sin(i))*Math.cos(r),(n+(e+t*Math.sin(i))*Math.sin(r))*Math.cos(a),(n+(e+t*Math.sin(i))*Math.sin(r))*Math.sin(a)],[0,Math.PI,16,!0],[0,2*Math.PI,16],[0,2*Math.PI,16]);RU(.25,.5,1);pi((t,e,n)=>[2*Math.cos(t)*Math.cos(e),2*Math.cos(t)*Math.sin(e),2*Math.sin(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]);pi((t,e,n)=>[n+2*Math.cos(t)*Math.cos(e),n+2*Math.cos(t)*Math.sin(e),n+2*Math.sin(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,5]);pi((t,e,n)=>[Math.sin(t)*Math.cos(e),Math.sin(t)*Math.sin(e),Math.cos(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0});pi((t,e,n)=>[(1+.5*Math.cos(t))*Math.cos(e),(1+.5*Math.cos(t))*Math.sin(e),.5*Math.cos(t),n],[-Math.PI,Math.PI,16,!0],[-Math.PI,Math.PI,16,!0],[-1,1,2,!0],{u:!0,v:!1,w:!0});pi((t,e,n)=>[Math.cos(t),Math.sin(t),e,n],[-Math.PI,Math.PI,32,!0],[-1,1,2,!0],[-1,1,2,!0],{u:!1,v:!0,w:!0});pi((t,e,n)=>[.25*Math.cos(t)+1*Math.cos(t)*Math.cos(n),.25*Math.sin(t)+1*Math.sin(t)*Math.cos(n),.75*Math.cos(e)+1*Math.cos(e)*Math.sin(n),.75*Math.sin(e)+1*Math.sin(e)*Math.sin(n)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],{u:!0,v:!1,w:!0});pi((t,e,n)=>[.5*Math.cos(t)*Math.cos(e)*Math.cos(n)+1*Math.cos(e)*Math.cos(n),.5*Math.cos(t)*Math.cos(e)*Math.sin(n)+1*Math.cos(e)*Math.sin(n),.5*Math.cos(t)*Math.sin(e)+1*Math.sin(e),.5*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]);pi((t,e,n)=>[.5*Math.cos(t)*Math.cos(e)*Math.cos(n)+1*Math.cos(n),.5*Math.cos(t)*Math.cos(e)*Math.sin(n)+1*Math.sin(n),.5*Math.cos(t)*Math.sin(e),.5*Math.sin(t)],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,8,!0],[-Math.PI,Math.PI,16,!0]);pi((t,e,n)=>[t,e,n,t*e*n],[-1,1,2,!0],[-1,1,2,!0],[-1,1,2,!0]);const PU={cuboidPyramid:xU,generateCubicPyramid:_U,generateCuboidPyramid:Fm,cuboidBiPyramid:SU,generateCubicBiPyramid:yU,generateCuboidBiPyramid:zm,hexadecachoron:mU,pentachoron:I_,icositetrachoron:TU,octahedraloidPyramid:EU,generateOctahedralPyramid:MU,generateOctahedraloidPyramid:Bm,octahedraloidBiPyramid:bU,generateOctahedralBiPyramid:wU,generateOctahedraloidBiPyramid:Hm,pentachoron:I_,tesseract:vU,hyperCuboid:gU,generateTesseract:rM,generateHyperCuboid:km};class Zs extends gn{constructor(e,n={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new sn;const i=this,r=n.color!==void 0?new Le(n.color):new Le(8355711),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,l=n.shader||Zs.ReflectorShader,c=n.multisample!==void 0?n.multisample:4,u=new yi,f=new P,d=new P,p=new P,_=new tt,x=new P(0,0,-1),g=new Qe,h=new P,v=new P,m=new Qe,y=new tt,S=this.camera,w=new Ci(a,o,{samples:c,type:Ur}),E=new fn({name:l.name!==void 0?l.name:"unspecified",uniforms:ul.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});E.uniforms.tDiffuse.value=w.texture,E.uniforms.color.value=r,E.uniforms.textureMatrix.value=y,this.material=E,this.onBeforeRender=function(R,M,b){if(d.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(b.matrixWorld),_.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(_),h.subVectors(d,p),h.dot(f)>0)return;h.reflect(f).negate(),h.add(d),_.extractRotation(b.matrixWorld),x.set(0,0,-1),x.applyMatrix4(_),x.add(p),v.subVectors(d,x),v.reflect(f).negate(),v.add(d),S.position.copy(h),S.up.set(0,1,0),S.up.applyMatrix4(_),S.up.reflect(f),S.lookAt(v),S.far=b.far,S.updateMatrixWorld(),S.projectionMatrix.copy(b.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(S.projectionMatrix),y.multiply(S.matrixWorldInverse),y.multiply(i.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(S.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const G=S.projectionMatrix;m.x=(Math.sign(g.x)+G.elements[8])/G.elements[0],m.y=(Math.sign(g.y)+G.elements[9])/G.elements[5],m.z=-1,m.w=(1+G.elements[10])/G.elements[14],g.multiplyScalar(2/g.dot(m)),G.elements[2]=g.x,G.elements[6]=g.y,G.elements[10]=g.z+1-s,G.elements[14]=g.w,i.visible=!1;const Q=R.getRenderTarget(),N=R.xr.enabled,H=R.shadowMap.autoUpdate,F=R.outputColorSpace,Z=R.toneMapping;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.outputColorSpace=Xn,R.toneMapping=di,R.setRenderTarget(w),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(M,S),R.xr.enabled=N,R.shadowMap.autoUpdate=H,R.outputColorSpace=F,R.toneMapping=Z,R.setRenderTarget(Q);const j=b.viewport;j!==void 0&&R.state.viewport(j),i.visible=!0},this.getRenderTarget=function(){return w},this.dispose=function(){w.dispose(),i.material.dispose()}}}Zs.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};class Qs extends gn{constructor(e,n={}){super(e),this.isRefractor=!0,this.type="Refractor",this.camera=new sn;const i=this,r=n.color!==void 0?new Le(n.color):new Le(8355711),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,l=n.shader||Qs.RefractorShader,c=n.multisample!==void 0?n.multisample:4,u=this.camera;u.matrixAutoUpdate=!1,u.userData.refractor=!0;const f=new yi,d=new tt,p=new Ci(a,o,{samples:c,type:Ur});this.material=new fn({uniforms:ul.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,transparent:!0}),this.material.uniforms.color.value=r,this.material.uniforms.tDiffuse.value=p.texture,this.material.uniforms.textureMatrix.value=d;const _=function(){const m=new P,y=new P,S=new tt,w=new P,E=new P;return function(M){return m.setFromMatrixPosition(i.matrixWorld),y.setFromMatrixPosition(M.matrixWorld),w.subVectors(m,y),S.extractRotation(i.matrixWorld),E.set(0,0,1),E.applyMatrix4(S),w.dot(E)<0}}(),x=function(){const m=new P,y=new P,S=new Ho,w=new P;return function(){i.matrixWorld.decompose(y,S,w),m.set(0,0,1).applyQuaternion(S).normalize(),m.negate(),f.setFromNormalAndCoplanarPoint(m,y)}}(),g=function(){const m=new yi,y=new Qe,S=new Qe;return function(E){u.matrixWorld.copy(E.matrixWorld),u.matrixWorldInverse.copy(u.matrixWorld).invert(),u.projectionMatrix.copy(E.projectionMatrix),u.far=E.far,m.copy(f),m.applyMatrix4(u.matrixWorldInverse),y.set(m.normal.x,m.normal.y,m.normal.z,m.constant);const R=u.projectionMatrix;S.x=(Math.sign(y.x)+R.elements[8])/R.elements[0],S.y=(Math.sign(y.y)+R.elements[9])/R.elements[5],S.z=-1,S.w=(1+R.elements[10])/R.elements[14],y.multiplyScalar(2/y.dot(S)),R.elements[2]=y.x,R.elements[6]=y.y,R.elements[10]=y.z+1-s,R.elements[14]=y.w}}();function h(m){d.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),d.multiply(m.projectionMatrix),d.multiply(m.matrixWorldInverse),d.multiply(i.matrixWorld)}function v(m,y,S){i.visible=!1;const w=m.getRenderTarget(),E=m.xr.enabled,R=m.shadowMap.autoUpdate,M=m.outputColorSpace,b=m.toneMapping;m.xr.enabled=!1,m.shadowMap.autoUpdate=!1,m.outputColorSpace=Xn,m.toneMapping=di,m.setRenderTarget(p),m.autoClear===!1&&m.clear(),m.render(y,u),m.xr.enabled=E,m.shadowMap.autoUpdate=R,m.outputColorSpace=M,m.toneMapping=b,m.setRenderTarget(w);const G=S.viewport;G!==void 0&&m.state.viewport(G),i.visible=!0}this.onBeforeRender=function(m,y,S){S.userData.refractor!==!0&&_(S)&&(x(),h(S),g(S),v(m,y,S))},this.getRenderTarget=function(){return p},this.dispose=function(){p.dispose(),i.material.dispose()}}}Qs.RefractorShader={uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`

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

		}`};class ff extends gn{constructor(e,n={}){super(e),this.isWater=!0,this.type="Water";const i=this,r=n.color!==void 0?new Le(n.color):new Le(16777215),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,l=n.flowDirection||new Ge(1,0),c=n.flowSpeed||.03,u=n.reflectivity||.02,f=n.scale||1,d=n.shader||ff.WaterShader,p=new sp,_=n.flowMap||void 0,x=n.normalMap0||p.load("textures/water/Water_1_M_Normal.jpg"),g=n.normalMap1||p.load("textures/water/Water_2_M_Normal.jpg"),h=.15,v=h*.5,m=new tt,y=new tM;if(Zs===void 0){console.error("THREE.Water: Required component Reflector not found.");return}if(Qs===void 0){console.error("THREE.Water: Required component Refractor not found.");return}const S=new Zs(e,{textureWidth:a,textureHeight:o,clipBias:s}),w=new Qs(e,{textureWidth:a,textureHeight:o,clipBias:s});S.matrixAutoUpdate=!1,w.matrixAutoUpdate=!1,this.material=new fn({uniforms:ul.merge([ae.fog,d.uniforms]),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,transparent:!0,fog:!0}),_!==void 0?(this.material.defines.USE_FLOWMAP="",this.material.uniforms.tFlowMap={type:"t",value:_}):this.material.uniforms.flowDirection={type:"v2",value:l},x.wrapS=x.wrapT=Ys,g.wrapS=g.wrapT=Ys,this.material.uniforms.tReflectionMap.value=S.getRenderTarget().texture,this.material.uniforms.tRefractionMap.value=w.getRenderTarget().texture,this.material.uniforms.tNormalMap0.value=x,this.material.uniforms.tNormalMap1.value=g,this.material.uniforms.color.value=r,this.material.uniforms.reflectivity.value=u,this.material.uniforms.textureMatrix.value=m,this.material.uniforms.config.value.x=0,this.material.uniforms.config.value.y=v,this.material.uniforms.config.value.z=v,this.material.uniforms.config.value.w=f;function E(M){m.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),m.multiply(M.projectionMatrix),m.multiply(M.matrixWorldInverse),m.multiply(i.matrixWorld)}function R(){const M=y.getDelta(),b=i.material.uniforms.config;b.value.x+=c*M,b.value.y=b.value.x+v,b.value.x>=h?(b.value.x=0,b.value.y=v):b.value.y>=h&&(b.value.y=b.value.y-h)}this.onBeforeRender=function(M,b,G){E(G),R(),i.visible=!1,S.matrixWorld.copy(i.matrixWorld),w.matrixWorld.copy(i.matrixWorld),S.onBeforeRender(M,b,G),w.onBeforeRender(M,b,G),i.visible=!0}}}ff.WaterShader={uniforms:{color:{type:"c",value:null},reflectivity:{type:"f",value:0},tReflectionMap:{type:"t",value:null},tRefractionMap:{type:"t",value:null},tNormalMap0:{type:"t",value:null},tNormalMap1:{type:"t",value:null},textureMatrix:{type:"m4",value:null},config:{type:"v4",value:new Qe}},vertexShader:`

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

		}`};const LU={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class df{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const IU=new $S(-1,1,1,-1,0,1),Gm=new qn;Gm.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3));Gm.setAttribute("uv",new Ln([0,2,0,0,2,0],2));class DU{constructor(e){this._mesh=new gn(Gm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IU)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class UU extends df{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ul.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new DU(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class D_ extends df{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),a.buffers.stencil.setClear(s),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class NU extends df{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class OU{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new Ge);this._width=i.width,this._height=i.height,n=new Ci(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ur}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new UU(LU),this.copyPass.material.blending=ji,this.clock=new tM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}D_!==void 0&&(o instanceof D_?i=!0:o instanceof NU&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kU extends df{constructor(e,n,i,r,a){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a!==void 0?a:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let a,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),a=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,a),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const FU=`// This shader comes from three.js sky example by zz85 / https://github.com/zz85
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
`,zU=""+new URL("star-74dfdec5.png",import.meta.url).href,BU=`// This shader comes from three.js sky example by zz85 / https://github.com/zz85
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
`,HU=""+new URL("Water0-6d782546.jpg",import.meta.url).href,GU=""+new URL("Water1-1f6f3fc5.jpg",import.meta.url).href,Fd=5e3,fc=new nU([new P(0,1,2.5),new P(0,2,0),new P(-200,400,-400),new P(-350,700,-700)],!1,"chordal");function VU(){const{relative:t,total:e}=Wi(l=>l.progression),n=We.useRef(),{width:i,height:r,devicePixelRatio:a}=Wi(l=>l.page),o=Wi(l=>l.anchors),s=We.useMemo(()=>({day:{start:0,end:1.075*o.bio/(e-r)},night:{start:1.1*o.bio/(e-r),end:o.extra2/(e-r)},stars:{start:(o.bio-r)/(e-r),end:o.contact/(e-r)},water:{start:o.projects/(e-r),end:o.extra2/(e-r)},travelling:{start:o.contact/(e-r),end:.99},tesseract:{start:1-2*r/(e-r),end:.99}}),[o,r,e]);return We.useEffect(()=>{let l=null;try{l=new ZS,l.setPixelRatio(a),l.setSize(i,r),l.setPixelRatio(window.devicePixelRatio),l.setSize(window.innerWidth,window.innerHeight),l.toneMapping=ES,l.toneMappingExposure=.25,l.domElement.id="canvas",document.body.appendChild(l.domElement)}catch{return}const c=new sn(60,i/r,1,1e3);c.zoom=Math.min(1,i/r);const u={turbidity:{value:20},rayleigh:{value:3},mieCoefficient:{value:.005},mieDirectionalG:{value:.995},sunPosition:{value:new P},up:{value:new P(0,1,0)},shade:{value:0}},f=new fn({fragmentShader:FU,vertexShader:BU,uniforms:u,side:un}),d=new gn(new Go(1,1,1),f);d.scale.setScalar(9e3);const p=new QD;p.add(d);const _=new uU(16777181,1,0,2);p.add(_);const x=new L_,g=new qn,h=new Array(Fd).fill().map(()=>{x.radius=250+Math.random()*750,x.theta=-Math.PI/2+Math.random()*Math.PI,x.phi=Math.random()*2*Math.PI;const F=new P().setFromSpherical(x);return[F.x,F.y,F.z]}).flat();g.setAttribute("position",new Ln(h,3));const v=Fd/10,m=v/3,y=F=>(F+2)/3;g.setAttribute("color",new Ln(new Array(Fd).fill().map(()=>{const F=Math.random()*(v+1),Z=F>2*m?1-(F-2*m)/m:1,j=F<m?F/m:Z,I=F<m?0:F>2*m?1:(F-m)/m;return[Z,j,I].map(y)}).flat(),3));const S=new QS({size:8,map:new sp().load(zU,()=>{l.render(p,c)}),vertexColors:!0,blending:$i,transparent:!0,opacity:1,depthTest:!1}),w=new JS(g,S);w.rotation.reorder("ZXY"),p.add(w);const E=new L_,R=new sp,M=new lf(500,500),b=new ff(M,{color:"#ffffff",scale:5,flowDirection:new Ge(.1,.1),textureWidth:1024,textureHeight:1024,normalMap0:R.load(HU),normalMap1:R.load(GU)});b.rotation.x=-Math.PI/2,b.visible=!1,p.add(b);const{tesseract:G}=PU,Q=new pU(1.5,5),N=new hU(G,{all:{colors:["#5c6370","#e06c75","#98c379","#d19a66","#61afef","#c678dd","#56b6c2","#403e41"]},faces:{material:new iU({opacity:.25,transparent:!0,blending:$i,side:Cn,depthWrite:!1,vertexColors:!0})},edges:{material:new uf({opacity:.1,transparent:!0,blending:$i,side:Cn,depthWrite:!1,linewidth:2,vertexColors:!0})}});N.position.copy(fc.getPointAt(1).multiplyScalar(1.005)),p.add(N);const H=new OU(l);H.addPass(new kU(p,c)),window.sky=n.current={scene:p,camera:c,renderer:l,composer:H,sky:d,water:b,stars:w,sunSpherical:E,sunLight:_,hyperRenderer:Q,hyperMesh:N},H.render(p)},[]),We.useEffect(()=>{const{current:l}=n;if(!l)return;const{renderer:c,composer:u,scene:f,camera:d}=l;d.aspect=i/r,d.zoom=Math.min(1,i/r),d.updateProjectionMatrix(),c.setSize(i,r),u.setSize(i,r),u.render(f)},[i,r]),We.useEffect(()=>{const{current:l}=n;if(!l)return;const{composer:c,scene:u,water:f,hyperMesh:d,hyperRenderer:p}=l;let _=null;const x=()=>{_=requestAnimationFrame(x),d.visible&&(p.rotate({xy:0,xz:0,xw:10,yz:0,yw:10,zw:10}),d.update(p)),(d.visible||f.visible)&&c.render(u)};return _=requestAnimationFrame(x),()=>cancelAnimationFrame(_)},[]),We.useEffect(()=>{const{current:l}=n;if(!l)return;const{composer:c,scene:u,camera:f,sky:d,water:p,stars:_,sunSpherical:x,sunLight:g,hyperMesh:h}=l,v=wa(t,s.day);x.radius=1e3,x.theta=(Math.PI/2-Math.PI*v)/Math.PI,x.phi=-Math.PI/2+Math.PI/4*(1-Math.pow(1.5*v-.41,2));const{uniforms:{sunPosition:m}}=d.material;m.value.setFromSpherical(x),g.position.setFromSpherical(x);const y=wa(t,s.night);console.log(y),d.material.uniforms.shade.value=y,console.log(s.night,t);const S=wa(t,s.water);p.visible=S>0&&S<1;const w=wa(t,s.stars);_.material.opacity=Math.pow(w,3),_.rotation.set(-Math.PI/4,t,Math.PI/8);const E=wa(t,s.travelling);f.position.copy(fc.getPoint(E)),f.lookAt(fc.getPoint(E).add(fc.getTangent(E))),f.updateProjectionMatrix();const R=wa(t,s.tesseract);h.visible=!!R,h.config.faces.splitScale=h.config.edges.splitScale=R*R*R*100;const M=50-49*R;h.scale.setScalar(M),c.render(u)},[t,s]),null}const WU=""+new URL("anakata-2e8f5711.png",import.meta.url).href,jU=""+new URL("frustals-6b6ffdd6.png",import.meta.url).href,$U=""+new URL("kalong-900c2cf2.png",import.meta.url).href,XU=""+new URL("inversion-a6328a0d.png",import.meta.url).href,YU=""+new URL("formol-612594d8.png",import.meta.url).href,qU=""+new URL("unrest-27b566e4.png",import.meta.url).href,KU=""+new URL("pygal-60917055.png",import.meta.url).href,ZU=""+new URL("wdb-f0329cd8.png",import.meta.url).href,QU=""+new URL("umlaut-0823c940.png",import.meta.url).href,JU=""+new URL("butterfly-6e5dd56c.png",import.meta.url).href,eN=""+new URL("anakataGL-3ec4deae.png",import.meta.url).href,tN=""+new URL("annealation-ba655197.png",import.meta.url).href,nN=""+new URL("graphit-028de23d.png",import.meta.url).href,iN=""+new URL("graphitGL-dd2e1507.png",import.meta.url).href,rN=""+new URL("hanabi-c5a88908.png",import.meta.url).href,aN=""+new URL("nocolon-3f2d47d0.png",import.meta.url).href,oN=""+new URL("clutterm-23716b0b.png",import.meta.url).href,sN=""+new URL("gnome-shell-shader-effect-47c80273.png",import.meta.url).href,lN=""+new URL("gnome-shell-focus-effects-extension-8ac8ce62.png",import.meta.url).href,cN=""+new URL("jsfractals-52948457.png",import.meta.url).href,uN=""+new URL("gnome-shell-system-monitor-1a7bae9e.png",import.meta.url).href,fN=""+new URL("bemboo-d90a4a92.png",import.meta.url).href,dN=""+new URL("atom-python-import-magic-61394a2e.png",import.meta.url).href,hN=""+new URL("atom-undo-tree-23b368a5.png",import.meta.url).href,pN=""+new URL("atom-rainbow-delimiters-4cfcfb47.png",import.meta.url).href,mN=""+new URL("atom-one-color-by-project-0f93a913.png",import.meta.url).href,gN=""+new URL("fawn-724aa54f.png",import.meta.url).href,vN=""+new URL("scudd-d796fe03.png",import.meta.url).href,_N=""+new URL("helicity-fb2b9a40.png",import.meta.url).href,xN=""+new URL("coxeter-explorer-77c6dc27.png",import.meta.url).href,yN=""+new URL("raymarcher-9dcbdf3e.png",import.meta.url).href,SN=[{id:"paradoxxxzero/coxeter-explorer",name:"Coxeter Explorer",url:"https://github.com/paradoxxxzero/coxeter-explorer",demoUrl:"https://florian.mounier.dev/coxeter-explorer",languages:["ECMAScript","glsl"],libraries:["three.js"],major:!0,type:"experiments",description:"A N dimensional coxeter group explorer.",preview:xN},{id:"paradoxxxzero/helicity",name:"Helicity",url:"https://github.com/paradoxxxzero/helicity",demoUrl:"https://helicity.vercel.app/",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"Shoot ’em up with power-ups as orbital shields.",preview:_N,unreleased:!0},{id:"paradoxxxzero/kalong",name:"Kalong",url:"https://github.com/paradoxxxzero/kalong",languages:["ECMAScript","Python"],libraries:["React","Redux","Material-UI","aiohttp"],major:!0,type:"projects",description:"Standalone Python debugger with a web interface.",preview:$U},{id:"paradoxxxzero/anakataGL",name:"AnakataGL",url:"https://github.com/paradoxxxzero/anakataGL",demoUrl:"https://florian.mounier.dev/anakataGL",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"4 dimensions mesh renderer in WebGL.",preview:eN},{id:"paradoxxxzero/annealation",name:"Annealation",url:"https://github.com/paradoxxxzero/annealation",demoUrl:"https://florian.mounier.dev/annealation",languages:["ECMAScript"],libraries:["three.js"],major:!0,type:"experiments",description:"Gravitational N-Body simulation in WebGL.",preview:tN},{id:"paradoxxxzero/raymarcher",name:"Raymarcher",url:"https://github.com/paradoxxxzero/raymarcher",demoUrl:"https://florian.mounier.dev/raymarcher",languages:["ECMAScript","glsl"],libraries:[],type:"experiments",description:"A simple glsl editor with bundled raymarching functions.",preview:yN},{id:"paradoxxxzero/frustals",name:"Frustals",url:"https://github.com/paradoxxxzero/frustals",demoUrl:"https://florian.mounier.dev/frustals",languages:["ECMAScript","Rust"],libraries:["wasm-bindgen"],major:!1,type:"experiments",description:"Fractal plotter written in Rust with a web interface base on WASM.",preview:jU},{id:"paradoxxxzero/inversion",name:"Inversion",url:"https://github.com/paradoxxxzero/inversion",demoUrl:"https://inversion-one.vercel.app/",languages:["ECMAScript"],libraries:["three.js","React","Redux"],major:!0,type:"experiments",description:"Puzzle game in WebGL.",preview:XU,unreleased:!0},{id:"Kozea/formol",name:"Formol",url:"https://github.com/Kozea/formol/",demoUrl:"https://kozea.github.io/formol/",languages:["ECMAScript"],libraries:["React"],major:!0,type:"projects",description:"Full featured object edition form framework for React.",preview:YU},{id:"Kozea/unrest",name:"Unrest",url:"https://github.com/Kozea/unrest/",demoUrl:"https://kozea.github.io/unrest/",languages:["Python"],libraries:["SqlAlchemy","Flask","Tornado","Sanic"],major:!0,type:"projects",description:"Simple sqlalchemy REST API generation.",preview:qU},{id:"paradoxxxzero/butterfly",name:"Butterfly",url:"https://github.com/paradoxxxzero/butterfly",languages:["Python","ECMAScript"],libraries:["Tornado"],major:!0,type:"projects",description:"Xterm compatible terminal that runs in your browser.",preview:JU},{id:"Kozea/pygal",name:"Pygal",url:"https://kozea.github.io/pygal/",demoUrl:"http://www.pygal.org/",languages:["Python"],libraries:["lxml"],major:!0,type:"projects",description:"Python charting library with a clean and simple API.",preview:KU},{id:"Kozea/wdb",name:"Wdb",url:"https://github.com/Kozea/wdb",languages:["Python","ECMAScript"],libraries:["tornado"],major:!0,type:"projects",description:"Full featured web debugger for python based on a client-server",preview:ZU},{id:"Kozea/umlaut",name:"Umlaut",url:"https://kozea.github.io/umlaut/",languages:["ECMAScript"],libraries:["d3.js","jQuery"],major:!0,type:"projects",description:"Simple SVG diagram modeler with dot support.",preview:QU},{id:"paradoxxxzero/gnome-shell-system-monitor-applet",name:"System Monitor",url:"https://github.com/paradoxxxzero/gnome-shell-system-monitor-applet",languages:["ECMAScript"],libraries:["GLib"],major:!0,type:"projects",description:"Gnome extension that displays system informations in gnome shell",preview:uN},{id:"paradoxxxzero/anakata",name:"Anakata",url:"https://florian.mounier.dev/anakata/",languages:["ECMAScript"],libraries:["canvas"],major:!1,type:"experiments",description:"4 dimensions mesh renderer implemented in 2d canvas. Ancestor of anakataGL",preview:WU},{id:"paradoxxxzero/hanabi",name:"Hanabi",url:"https://florian.mounier.dev/hanabi/",languages:["ECMAScript"],libraries:["canvas"],major:!1,type:"experiments",description:"Fireworks in canvas.",preview:rN},{id:"paradoxxxzero/bemboo",name:"Bemboo",url:"https://github.com/paradoxxxzero/bemboo",languages:["ECMAScript"],libraries:["React"],major:!1,type:"projects",description:"BEM generator based on objects for React 16+.",preview:fN},{id:"paradoxxxzero/atom-python-import-magic",name:"Atom Python importmagic",url:"https://github.com/paradoxxxzero/atom-python-import-magic",languages:["ECMAScript","Python"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to automatically import python modules using",preview:dN,hidden:!0},{id:"paradoxxxzero/atom-undo-tree",name:"Atom undo tree",url:"https://github.com/paradoxxxzero/atom-undo-tree",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to transform undo/redo in an undo tree similar to emacs",preview:hN,hidden:!0},{id:"paradoxxxzero/atom-rainbow-delimiters",name:"Atom rainbow delimiters",url:"https://github.com/paradoxxxzero/atom-rainbow-delimiters",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to highlight delimiters around the cursor.",preview:pN,hidden:!0},{id:"paradoxxxzero/atom-one-theme-color-by-project",name:"Atom one theme color by project",url:"https://github.com/paradoxxxzero/atom-one-theme-color-by-project",languages:["ECMAScript"],libraries:["Atom"],major:!1,type:"projects",description:"Atom extension to colorize Atom One themes according to the current",preview:mN,hidden:!0},{id:"paradoxxxzero/jinja2-mode",name:"Jinja2 mode",url:"https://github.com/paradoxxxzero/jinja2-mode",languages:["Elisp"],libraries:["Emacs","Jinja2"],major:!1,type:"projects",description:"Jinja2 mode for Emacs."},{id:"paradoxxxzero/tornado-template-mode",name:"Tornado template mode",url:"https://github.com/paradoxxxzero/tornado-template-mode",languages:["Elisp"],libraries:["Emacs","Jinja2"],major:!1,type:"projects",description:"Tornado template mode for Emacs.",hidden:!0},{id:"paradoxxxzero/graphit",name:"Graphit",url:"https://github.com/paradoxxxzero/graphit",demoUrl:"http://paradoxxxzero.github.io/graphit",languages:["ECMAScript"],libraries:["canvas"],major:!0,type:"experiments",description:"Advanced function plotter and sound generator.",preview:nN},{id:"paradoxxxzero/graphitGL",name:"GraphitGL",url:"https://github.com/paradoxxxzero/graphitGL",demoUrl:"https://florian.mounier.dev/graphitGL",languages:["ECMAScript"],libraries:["three.js"],type:"experiments",major:!1,description:"z = f(x, y) function plotter demo.",preview:iN},{id:"paradoxxxzero/nocolon",name:"Nocolon",url:"https://github.com/paradoxxxzero/nocolon",languages:["Python"],libraries:[],type:"experiments",major:!1,description:"UTF-8 compatible toy encoding that removes the need of colons in",preview:aN},{id:"paradoxxxzero/gnome-shell-shader-extension",name:"Gnome Shell Shader Extension",url:"https://github.com/paradoxxxzero/gnome-shell-shader-extension",languages:["ECMAScript","glsl"],libraries:["GLib"],type:"experiments",major:!1,description:"Gnome extension that allows to add glsl shaders on specific windows.",preview:sN,hidden:!0},{id:"paradoxxxzero/gnome-shell-focus-effects-extension",name:"Gnome Shell, Focus Effects Extension",url:"https://github.com/paradoxxxzero/gnome-shell-focus-effects-extension",languages:["ECMAScript"],libraries:["GLib"],type:"experiments",major:!1,description:"Gnome extension that allows to add custom effects on window",preview:lN,hidden:!0},{id:"paradoxxxzero/clutterm",name:"Clutterm",url:"https://github.com/paradoxxxzero/clutterm",languages:["Python"],libraries:["clutter"],type:"experiments",major:!1,description:"Attempt to create a clutter based terminal written in pure python.",preview:oN},{id:"paradoxxxzero/jsfractals",name:"Jsfsactals",url:"https://github.com/paradoxxxzero/jsfractals",demoUrl:"https://florian.mounier.dev/jsfractals",languages:["ECMAScript"],libraries:["canvas","jQuery"],type:"experiments",major:!1,description:"Pure js fractal drawer.",preview:cN},{id:"paradoxxxzero/wsreload",name:"Wsreload",url:"https://github.com/paradoxxxzero/wsreload",languages:["ECMAScript","Python"],libraries:["tornado"],type:"projects",major:!1,description:"Browser page reloader based on WebSocket."},{id:"paradoxxxzero/fawn",name:"Fawn",url:"https://github.com/paradoxxxzero/fawn",languages:["Python"],libraries:["Flask","uWSGI"],type:"projects",major:!1,description:"Flask extension allowing WebSocket uWSGI broadcasting from PostgreSQL",preview:gN},{id:"paradoxxxzero/scudd",name:"Scudd",url:"https://github.com/paradoxxxzero/scudd",languages:["ECMAScript"],libraries:["React"],type:"projects",major:!1,description:"Small lib for inspecting React PureComponent render triggers.",preview:vN,hidden:!0}],MN={progression:{relative:0,absolute:0,direction:"up"},page:typeof window<"u"?{width:window.innerWidth,height:document.body.clientHeight,devicePixelRatio:window.devicePixelRatio}:{width:1920,height:1080,devicePixelRatio:1},projects:SN,stars:{},anchors:{}},EN=(t=MN,e)=>{switch(e.type){case Iy:return{...t,progression:{relative:e.relative,absolute:e.absolute,total:e.total,direction:e.absolute-t.progression.absolute>0?"down":"up"}};case Ny:return{...t,page:{...t.page,width:e.width,height:e.height,devicePixelRatio:e.devicePixelRatio}};case Dy:return{...t,stars:e.stars};case Uy:return{...t,anchors:{...t.anchors,[e.name]:e.anchor}};default:return t}},wN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||uy,bN=cy(EN,wN(P2(L2))),TN=q.jsxs(E2,{store:bN,children:[q.jsx(VU,{}),q.jsx(qC,{})]});qx(document.getElementById("root"),TN);
