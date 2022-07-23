(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5434:function(r,e,t){"use strict";var i=t(4836);e.Z=void 0;var a=i(t(4938)),n=t(5893),s=(0,a.default)((0,n.jsx)("path",{d:"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"}),"Computer");e.Z=s},8456:function(r,e,t){"use strict";t.d(e,{Z:function(){return _}});var i=t(3366),a=t(7462),n=t(7294),s=t(6010),o=t(4780),c=t(917),l=t(8216),u=t(1657),d=t(1496),h=t(4867);function v(r){return(0,h.Z)("MuiCircularProgress",r)}(0,t(1588).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var f=t(5893);const m=["className","color","disableShrink","size","style","thickness","value","variant"];let k,Z,p,x,g=r=>r;const S=44,w=(0,c.F4)(k||(k=g`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,c.F4)(Z||(Z=g`
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
`)),y=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[t.variant],e[`color${(0,l.Z)(t.color)}`]]}})((({ownerState:r,theme:e})=>(0,a.Z)({display:"inline-block"},"determinate"===r.variant&&{transition:e.transitions.create("transform")},"inherit"!==r.color&&{color:(e.vars||e).palette[r.color].main})),(({ownerState:r})=>"indeterminate"===r.variant&&(0,c.iv)(p||(p=g`
      animation: ${0} 1.4s linear infinite;
    `),w))),j=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(r,e)=>e.svg})({display:"block"}),P=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.circle,e[`circle${(0,l.Z)(t.variant)}`],t.disableShrink&&e.circleDisableShrink]}})((({ownerState:r,theme:e})=>(0,a.Z)({stroke:"currentColor"},"determinate"===r.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:r})=>"indeterminate"===r.variant&&!r.disableShrink&&(0,c.iv)(x||(x=g`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)));var _=n.forwardRef((function(r,e){const t=(0,u.Z)({props:r,name:"MuiCircularProgress"}),{className:n,color:c="primary",disableShrink:d=!1,size:h=40,style:k,thickness:Z=3.6,value:p=0,variant:x="indeterminate"}=t,g=(0,i.Z)(t,m),w=(0,a.Z)({},t,{color:c,disableShrink:d,size:h,thickness:Z,value:p,variant:x}),b=(r=>{const{classes:e,variant:t,color:i,disableShrink:a}=r,n={root:["root",t,`color${(0,l.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,l.Z)(t)}`,a&&"circleDisableShrink"]};return(0,o.Z)(n,v,e)})(w),_={},C={},N={};if("determinate"===x){const r=2*Math.PI*((S-Z)/2);_.strokeDasharray=r.toFixed(3),N["aria-valuenow"]=Math.round(p),_.strokeDashoffset=`${((100-p)/100*r).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,f.jsx)(y,(0,a.Z)({className:(0,s.Z)(b.root,n),style:(0,a.Z)({width:h,height:h},C,k),ownerState:w,ref:e,role:"progressbar"},N,g,{children:(0,f.jsx)(j,{className:b.svg,ownerState:w,viewBox:"22 22 44 44",children:(0,f.jsx)(P,{className:b.circle,style:_,ownerState:w,cx:S,cy:S,r:(S-Z)/2,fill:"none",strokeWidth:Z})})}))}))},8312:function(r,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},5075:function(r,e,t){"use strict";t.r(e);var i=t(603),a=t(5893),n=t(7294),s=t(1664),o=t.n(s),c=t(7357),l=t(6447),u=t(5861),d=t(8456),h=t(5434);e.default=function(){var r=(0,i.Z)(n.useState(!1),2),e=r[0],t=r[1];return n.useEffect((function(){var r=setTimeout((function(){return t(!0)}),5e3);return function(){clearTimeout(r)}}),[]),(0,a.jsx)(c.Z,{p:4,children:(0,a.jsxs)(l.Z,{direction:"column",spacing:4,children:[(0,a.jsxs)(l.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,a.jsx)(h.Z,{}),(0,a.jsxs)(u.Z,{variant:"h5",children:["Hello World. ",(0,a.jsx)(o(),{href:"/about",children:"About"})," ",(0,a.jsx)(o(),{href:"/kbve",children:"KBVE"})]})]}),e?(0,a.jsx)(u.Z,{variant:"body2",children:JSON.stringify({timedOut:e})}):(0,a.jsx)(d.Z,{})]})})}}},function(r){r.O(0,[774,888,179],(function(){return e=8312,r(r.s=e);var e}));var e=r.O();_N_E=e}]);