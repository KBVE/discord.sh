"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[380],{5434:function(e,r,t){var n=t(4836);r.Z=void 0;var i=n(t(4938)),o=t(5893),a=(0,i.default)((0,o.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer");r.Z=a},8456:function(e,r,t){t.d(r,{Z:function(){return E}});var n=t(3366),i=t(7462),o=t(7294),a=t(6010),c=t(4780),u=t(917),s=t(8216),l=t(4502),f=t(1496),d=t(4867);function v(e){return(0,d.Z)("MuiCircularProgress",e)}(0,t(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=t(5893);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let g,m,y,b,w=e=>e;const k=44,S=(0,u.F4)(g||(g=w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),x=(0,u.F4)(m||(m=w`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),R=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,s.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,u.iv)(y||(y=w`
      animation: ${0} 1.4s linear infinite;
    `),S))),Z=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,s.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,u.iv)(b||(b=w`
      animation: ${0} 1.4s ease-in-out infinite;
    `),x)));var E=o.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:u="primary",disableShrink:f=!1,size:d=40,style:g,thickness:m=3.6,value:y=0,variant:b="indeterminate"}=t,w=(0,n.Z)(t,p),S=(0,i.Z)({},t,{color:u,disableShrink:f,size:d,thickness:m,value:y,variant:b}),x=(e=>{const{classes:r,variant:t,color:n,disableShrink:i}=e,o={root:["root",t,`color${(0,s.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,s.Z)(t)}`,i&&"circleDisableShrink"]};return(0,c.Z)(o,v,r)})(S),E={},P={},O={};if("determinate"===b){const e=2*Math.PI*((k-m)/2);E.strokeDasharray=e.toFixed(3),O["aria-valuenow"]=Math.round(y),E.strokeDashoffset=`${((100-y)/100*e).toFixed(3)}px`,P.transform="rotate(-90deg)"}return(0,h.jsx)(R,(0,i.Z)({className:(0,a.Z)(x.root,o),style:(0,i.Z)({width:d,height:d},P,g),ownerState:S,ref:r,role:"progressbar"},O,w,{children:(0,h.jsx)(Z,{className:x.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,h.jsx)(C,{className:x.circle,style:E,ownerState:S,cx:k,cy:k,r:(k-m)/2,fill:"none",strokeWidth:m})})}))}))},6447:function(e,r,t){var n=t(3366),i=t(7462),o=t(7294),a=t(5408),c=t(8700),u=t(9707),s=t(9766),l=t(1496),f=t(4502),d=t(5893);const v=["component","direction","spacing","divider","children"];function h(e,r){const t=o.Children.toArray(e).filter(Boolean);return t.reduce(((e,n,i)=>(e.push(n),i<t.length-1&&e.push(o.cloneElement(r,{key:`separator-${i}`})),e)),[])}const p=(0,l.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>[r.root]})((({ownerState:e,theme:r})=>{let t=(0,i.Z)({display:"flex"},(0,a.k9)({theme:r},(0,a.P$)({values:e.direction,breakpoints:r.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const n=(0,c.hB)(r),i=Object.keys(r.breakpoints.values).reduce(((r,t)=>(("object"===typeof e.spacing&&null!=e.spacing[t]||"object"===typeof e.direction&&null!=e.direction[t])&&(r[t]=!0),r)),{}),o=(0,a.P$)({values:e.direction,base:i}),u=(0,a.P$)({values:e.spacing,base:i}),l=(r,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=t?o[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,c.NA)(n,r)}};var i};t=(0,s.Z)(t,(0,a.k9)({theme:r},u,l))}return t})),g=o.forwardRef((function(e,r){const t=(0,f.Z)({props:e,name:"MuiStack"}),o=(0,u.Z)(t),{component:a="div",direction:c="column",spacing:s=0,divider:l,children:g}=o,m=(0,n.Z)(o,v),y={direction:c,spacing:s};return(0,d.jsx)(p,(0,i.Z)({as:a,ownerState:y,ref:r},m,{children:l?h(g,l):g}))}));r.Z=g},8100:function(e,r,t){t.d(r,{ZP:function(){return Q}});var n=t(7294);function i(e,r,t,n){return new(t||(t=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(r){o(r)}}function c(e){try{u(n.throw(e))}catch(r){o(r)}}function u(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,c)}u((n=n.apply(e,r||[])).next())}))}function o(e,r){var t,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(e,a)}catch(c){o=[6,c],n=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var a,c=function(){},u=c(),s=Object,l=function(e){return e===u},f=function(e){return"function"==typeof e},d=function(e,r){return s.assign({},e,r)},v="undefined",h=function(){return typeof window!=v},p=new WeakMap,g=0,m=function(e){var r,t,n=typeof e,i=e&&e.constructor,o=i==Date;if(s(e)!==e||o||i==RegExp)r=o?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(r=p.get(e))return r;if(r=++g+"~",p.set(e,r),i==Array){for(r="@",t=0;t<e.length;t++)r+=m(e[t])+",";p.set(e,r)}if(i==s){r="#";for(var a=s.keys(e).sort();!l(t=a.pop());)l(e[t])||(r+=t+":"+m(e[t])+",");p.set(e,r)}}return r},y=!0,b=h(),w=typeof document!=v,k=b&&window.addEventListener?window.addEventListener.bind(window):c,S=w?document.addEventListener.bind(document):c,x=b&&window.removeEventListener?window.removeEventListener.bind(window):c,R=w?document.removeEventListener.bind(document):c,Z={isOnline:function(){return y},isVisible:function(){var e=w&&document.visibilityState;return l(e)||"hidden"!==e}},C={initFocus:function(e){return S("visibilitychange",e),k("focus",e),function(){R("visibilitychange",e),x("focus",e)}},initReconnect:function(e){var r=function(){y=!0,e()},t=function(){y=!1};return k("online",r),k("offline",t),function(){x("online",r),x("offline",t)}}},E=!h()||"Deno"in window,P=function(e){return h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},O=E?n.useEffect:n.useLayoutEffect,D="undefined"!==typeof navigator&&navigator.connection,M=!E&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),T=function(e){if(f(e))try{e=e()}catch(t){e=""}var r=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",r,e?"$swr$"+e:""]},V=new WeakMap,$=function(e,r,t,n,i,o,a){void 0===a&&(a=!0);var c=V.get(e),u=c[0],s=c[1],l=c[3],f=u[r],d=s[r];if(a&&d)for(var v=0;v<d.length;++v)d[v](t,n,i);return o&&(delete l[r],f&&f[0])?f[0](2).then((function(){return e.get(r)})):e.get(r)},I=0,L=function(){return++I},F=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return i(void 0,void 0,void 0,(function(){var r,t,n,i,a,c,s,v,h,p,g,m,y,b,w,k,S,x,R,Z,C;return o(this,(function(o){switch(o.label){case 0:if(r=e[0],t=e[1],n=e[2],i=e[3],c=!!l((a="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||a.populateCache,s=!1!==a.revalidate,v=!1!==a.rollbackOnError,h=a.optimisticData,p=T(t),g=p[0],m=p[2],!g)return[2];if(y=V.get(r),b=y[2],e.length<3)return[2,$(r,g,r.get(g),u,u,s,!0)];if(w=n,S=L(),b[g]=[S,0],x=!l(h),R=r.get(g),x&&(Z=f(h)?h(R):h,r.set(g,Z),$(r,g,Z)),f(w))try{w=w(r.get(g))}catch(E){k=E}return w&&f(w.then)?[4,w.catch((function(e){k=e}))]:[3,2];case 1:if(w=o.sent(),S!==b[g][0]){if(k)throw k;return[2,w]}k&&x&&v&&(c=!0,w=R,r.set(g,R)),o.label=2;case 2:return c&&(k||(f(c)&&(w=c(w,R)),r.set(g,w)),r.set(m,d(r.get(m),{error:k}))),b[g][1]=L(),[4,$(r,g,w,k,u,s,!!c)];case 3:if(C=o.sent(),k)throw k;return[2,c?C:w]}}))}))},N=function(e,r){for(var t in e)e[t][0]&&e[t][0](r)},j=function(e,r){if(!V.has(e)){var t=d(C,r),n={},i=F.bind(u,e),o=c;if(V.set(e,[n,{},{},{},i]),!E){var a=t.initFocus(setTimeout.bind(u,N.bind(u,n,0))),s=t.initReconnect(setTimeout.bind(u,N.bind(u,n,1)));o=function(){a&&a(),s&&s(),V.delete(e)}}return[e,i,o]}return[e,V.get(e)[4]]},A=j(new Map),z=A[0],W=A[1],B=d({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:function(e,r,t,n,i){var o=t.errorRetryCount,a=i.retryCount,c=~~((Math.random()+.5)*(1<<(a<8?a:8)))*t.errorRetryInterval;!l(o)&&a>o||setTimeout(n,c,i)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:M?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:M?5e3:3e3,compare:function(e,r){return m(e)==m(r)},isPaused:function(){return!1},cache:z,mutate:W,fallback:{}},Z),H=function(e,r){var t=d(e,r);if(r){var n=e.use,i=e.fallback,o=r.use,a=r.fallback;n&&o&&(t.use=n.concat(o)),i&&a&&(t.fallback=d(i,a))}return t},_=(0,n.createContext)({}),q=function(e){return f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},J=function(){return d(B,(0,n.useContext)(_))},G=function(e,r,t){var n=r[e]||(r[e]=[]);return n.push(t),function(){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.pop())}},K={dedupe:!0},Q=(s.defineProperty((function(e){var r=e.value,t=H((0,n.useContext)(_),r),i=r&&r.provider,o=(0,n.useState)((function(){return i?j(i(t.cache||z),r):u}))[0];return o&&(t.cache=o[0],t.mutate=o[1]),O((function(){return o?o[2]:u}),[]),(0,n.createElement)(_.Provider,d(e,{value:t}))}),"default",{value:B}),a=function(e,r,t){var a=t.cache,c=t.compare,s=t.fallbackData,v=t.suspense,h=t.revalidateOnMount,p=t.refreshInterval,g=t.refreshWhenHidden,m=t.refreshWhenOffline,y=V.get(a),b=y[0],w=y[1],k=y[2],S=y[3],x=T(e),R=x[0],Z=x[1],C=x[2],D=(0,n.useRef)(!1),M=(0,n.useRef)(!1),I=(0,n.useRef)(R),N=(0,n.useRef)(r),j=(0,n.useRef)(t),A=function(){return j.current},z=function(){return A().isVisible()&&A().isOnline()},W=function(e){return a.set(C,d(a.get(C),e))},B=a.get(R),H=l(s)?t.fallback[R]:s,_=l(B)?H:B,q=a.get(C)||{},J=q.error,Q=!D.current,U=function(){return Q&&!l(h)?h:!A().isPaused()&&(v?!l(_)&&t.revalidateIfStale:l(_)||t.revalidateIfStale)},X=!(!R||!r)&&(!!q.isValidating||Q&&U()),Y=function(e,r){var t=(0,n.useState)({})[1],i=(0,n.useRef)(e),o=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,n.useCallback)((function(e){var n=!1,a=i.current;for(var c in e){var u=c;a[u]!==e[u]&&(a[u]=e[u],o.current[u]&&(n=!0))}n&&!r.current&&t({})}),[]);return O((function(){i.current=e})),[i,o.current,a]}({data:_,error:J,isValidating:X},M),ee=Y[0],re=Y[1],te=Y[2],ne=(0,n.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var r,n,i,s,d,v,h,p,g,m,y,b,w;return o(this,(function(o){switch(o.label){case 0:if(r=N.current,!R||!r||M.current||A().isPaused())return[2,!1];s=!0,d=e||{},v=!S[R]||!d.dedupe,h=function(){return!M.current&&R===I.current&&D.current},p=function(){var e=S[R];e&&e[1]===i&&delete S[R]},g={isValidating:!1},m=function(){W({isValidating:!1}),h()&&te(g)},W({isValidating:!0}),te({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&($(a,R,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!a.get(R)&&setTimeout((function(){s&&h()&&A().onLoadingSlow(R,t)}),t.loadingTimeout),S[R]=[r.apply(void 0,Z),L()]),w=S[R],n=w[0],i=w[1],[4,n];case 2:return n=o.sent(),v&&setTimeout(p,t.dedupingInterval),S[R]&&S[R][1]===i?(W({error:u}),g.error=u,y=k[R],!l(y)&&(i<=y[0]||i<=y[1]||0===y[1])?(m(),v&&h()&&A().onDiscarded(R),[2,!1]):(c(ee.current.data,n)?g.data=ee.current.data:g.data=n,c(a.get(R),n)||a.set(R,n),v&&h()&&A().onSuccess(n,R,t),[3,4])):(v&&h()&&A().onDiscarded(R),[2,!1]);case 3:return b=o.sent(),p(),A().isPaused()||(W({error:b}),g.error=b,v&&h()&&(A().onError(b,R,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||f(t.shouldRetryOnError)&&t.shouldRetryOnError(b))&&z()&&A().onErrorRetry(b,R,t,ne,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,m(),h()&&v&&$(a,R,g.data,g.error,!1),[2,!0]}}))}))}),[R]),ie=(0,n.useCallback)(F.bind(u,a,(function(){return I.current})),[]);if(O((function(){N.current=r,j.current=t})),O((function(){if(R){var e=R!==I.current,r=ne.bind(u,K),t=0,n=G(R,w,(function(e,r,t){te(d({error:r,isValidating:t},c(ee.current.data,e)?u:{data:e}))})),i=G(R,b,(function(e){if(0==e){var n=Date.now();A().revalidateOnFocus&&n>t&&z()&&(t=n+A().focusThrottleInterval,r())}else if(1==e)A().revalidateOnReconnect&&z()&&r();else if(2==e)return ne()}));return M.current=!1,I.current=R,D.current=!0,e&&te({data:_,error:J,isValidating:X}),U()&&(l(_)||E?r():P(r)),function(){M.current=!0,n(),i()}}}),[R,ne]),O((function(){var e;function r(){var r=f(p)?p(_):p;r&&-1!==e&&(e=setTimeout(t,r))}function t(){ee.current.error||!g&&!A().isVisible()||!m&&!A().isOnline()?r():ne(K).then(r)}return r(),function(){e&&(clearTimeout(e),e=-1)}}),[p,g,m,ne]),(0,n.useDebugValue)(_),v&&l(_)&&R)throw N.current=r,j.current=t,M.current=!1,l(J)?ne(K):J;return{mutate:ie,get data(){return re.data=!0,_},get error(){return re.error=!0,J},get isValidating(){return re.isValidating=!0,X}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=J(),n=q(e),i=n[0],o=n[1],c=n[2],u=H(t,c),s=a,l=u.use;if(l)for(var f=l.length;f-- >0;)s=l[f](s);return s(i,o||u.fetcher,u)})}}]);