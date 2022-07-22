(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5434:function(e,r,t){"use strict";var i=t(4836);r.Z=void 0;var n=i(t(4938)),a=t(5893),s=(0,n.default)((0,a.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer");r.Z=s},4938:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i.createSvgIcon}});var i=t(3875)},8456:function(e,r,t){"use strict";t.d(r,{Z:function(){return P}});var i=t(3366),n=t(7462),a=t(7294),s=t(6010),o=t(4780),c=t(917),l=t(8216),u=t(1657),d=t(1496),f=t(4867);function v(e){return(0,f.Z)("MuiCircularProgress",e)}(0,t(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=t(5893);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let p,k,x,Z,g=e=>e;const S=44,b=(0,c.F4)(p||(p=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),w=(0,c.F4)(k||(k=g`
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
`)),y=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,n.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(x||(x=g`
      animation: ${0} 1.4s linear infinite;
    `),b))),_=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),j=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,n.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(Z||(Z=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),w)));var P=a.forwardRef((function(e,r){const t=(0,u.Z)({props:e,name:"MuiCircularProgress"}),{className:a,color:c="primary",disableShrink:d=!1,size:f=40,style:p,thickness:k=3.6,value:x=0,variant:Z="indeterminate"}=t,g=(0,i.Z)(t,m),b=(0,n.Z)({},t,{color:c,disableShrink:d,size:f,thickness:k,value:x,variant:Z}),w=(e=>{const{classes:r,variant:t,color:i,disableShrink:n}=e,a={root:["root",t,`color${(0,l.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,n&&"circleDisableShrink"]};return(0,o.Z)(a,v,r)})(b),P={},M={},C={};if("determinate"===Z){const e=2*Math.PI*((S-k)/2);P.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(x),P.strokeDashoffset=`${((100-x)/100*e).toFixed(3)}px`,M.transform="rotate(-90deg)"}return(0,h.jsx)(y,(0,n.Z)({className:(0,s.Z)(w.root,a),style:(0,n.Z)({width:f,height:f},M,p),ownerState:b,ref:r,role:"progressbar"},C,g,{children:(0,h.jsx)(_,{className:w.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,h.jsx)(j,{className:w.circle,style:P,ownerState:b,cx:S,cy:S,r:(S-k)/2,fill:"none",strokeWidth:k})})}))}))},8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},5075:function(e,r,t){"use strict";t.r(r);var i=t(603),n=t(5893),a=t(7294),s=t(1664),o=t.n(s),c=t(7357),l=t(6447),u=t(5861),d=t(8456),f=t(5434);r.default=function(){var e=(0,i.Z)(a.useState(!1),2),r=e[0],t=e[1];return a.useEffect((function(){var e=setTimeout((function(){return t(!0)}),5e3);return function(){clearTimeout(e)}}),[]),(0,n.jsx)(c.Z,{p:4,children:(0,n.jsxs)(l.Z,{direction:"column",spacing:4,children:[(0,n.jsxs)(l.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,n.jsx)(f.Z,{}),(0,n.jsxs)(u.Z,{variant:"h5",children:["Hello World. ",(0,n.jsx)(o(),{href:"/about",children:"About"})," ",(0,n.jsx)(o(),{href:"/kbve",children:"KBVE"})]})]}),r?(0,n.jsx)(u.Z,{variant:"body2",children:JSON.stringify({timedOut:r})}):(0,n.jsx)(d.Z,{})]})})}},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[774,888,179],(function(){return r=8312,e(e.s=r);var r}));var r=e.O();_N_E=r}]);