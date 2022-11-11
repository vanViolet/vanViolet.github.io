import{d as E,r as S,e as I,b as T,B as z,j as s,x as M,u as h,k as p,c as x,i as _,l as A,L as G,M as V}from"./index.b434fc44.js";import{c as v,S as W,A as F,T as w,_ as q,F as J}from"./TableSortHeader.bb089a8a.js";import{T as K}from"./Title.7bad72e9.js";var Q=Object.defineProperty,U=Object.defineProperties,X=Object.getOwnPropertyDescriptors,O=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,P=(e,a,r)=>a in e?Q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,y=(e,a)=>{for(var r in a||(a={}))Y.call(a,r)&&P(e,r,a[r]);if(O)for(var r of O(a))Z.call(a,r)&&P(e,r,a[r]);return e},ee=(e,a)=>U(e,X(a));const m={xs:{fontSize:9,height:16},sm:{fontSize:10,height:18},md:{fontSize:11,height:20},lg:{fontSize:13,height:26},xl:{fontSize:16,height:32}},re={xs:4,sm:4,md:6,lg:8,xl:10};function ae({theme:e,variant:a,color:r,size:o,gradient:l}){if(a==="dot"){const n=e.fn.size({size:o,sizes:re});return{backgroundColor:"transparent",color:e.colorScheme==="dark"?e.colors.dark[0]:e.colors.gray[7],border:`1px solid ${e.colorScheme==="dark"?e.colors.dark[3]:e.colors.gray[3]}`,paddingLeft:e.fn.size({size:o,sizes:e.spacing})/1.5-n/2,"&::before":{content:'""',display:"block",width:n,height:n,borderRadius:n,backgroundColor:e.fn.themeColor(r,e.colorScheme==="dark"?4:e.fn.primaryShade("light"),!0),marginRight:n}}}const i=e.fn.variant({color:r,variant:a,gradient:l});return{background:i.background,color:i.color,border:`${a==="gradient"?0:1}px solid ${i.border}`}}var oe=E((e,{color:a,size:r,radius:o,gradient:l,fullWidth:i,variant:n})=>{const{fontSize:d,height:t}=r in m?m[r]:m.md;return{leftSection:{marginRight:`calc(${e.spacing.xs}px / 2)`},rightSection:{marginLeft:`calc(${e.spacing.xs}px / 2)`},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:y(ee(y(y({},e.fn.focusStyles()),e.fn.fontStyles()),{fontSize:d,height:t,WebkitTapHighlightColor:"transparent",lineHeight:`${t-2}px`,textDecoration:"none",padding:`0 ${e.fn.size({size:r,sizes:e.spacing})/1.5}px`,boxSizing:"border-box",display:i?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:i?"100%":"auto",textTransform:"uppercase",borderRadius:e.fn.radius(o),fontWeight:700,letterSpacing:.25,cursor:"inherit",textOverflow:"ellipsis",overflow:"hidden"}),ae({theme:e,variant:n,color:a,size:r,gradient:l}))}});const te=oe;var le=Object.defineProperty,b=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,k=(e,a,r)=>a in e?le(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,ie=(e,a)=>{for(var r in a||(a={}))C.call(a,r)&&k(e,r,a[r]);if(b)for(var r of b(a))R.call(a,r)&&k(e,r,a[r]);return e},ne=(e,a)=>{var r={};for(var o in e)C.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&b)for(var o of b(e))a.indexOf(o)<0&&R.call(e,o)&&(r[o]=e[o]);return r};const se={variant:"light",size:"md",radius:"xl"},N=S.exports.forwardRef((e,a)=>{const r=I("Badge",se,e),{className:o,color:l,variant:i,fullWidth:n,children:d,size:t,leftSection:f,rightSection:c,radius:u,gradient:$,classNames:j,styles:B,unstyled:D}=r,L=ne(r,["className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles","unstyled"]),{classes:g,cx:H}=te({size:t,fullWidth:n,color:l,radius:u,variant:i,gradient:$},{classNames:j,styles:B,name:"Badge",unstyled:D});return T(z,{...ie({className:H(g.root,o),ref:a},L),children:[f&&s("span",{className:g.leftSection,children:f}),s("span",{className:g.inner,children:d}),c&&s("span",{className:g.rightSection,children:c})]})});N.displayName="@mantine/core/Badge";const de=M(N),ge=()=>{var d;const[e,a]=S.exports.useState(null);h(t=>t.counter.sidebarToggle);const r=h(t=>t.darkMode.darkMode),o=[{documentType:"Izin Edar",reminderRenewal:[{day:360,color:"#eab308"},{day:270,color:"#f59e0b"},{day:180,color:"#c2410c"},{day:90,color:"#d946ef"},{day:60,color:"#dc2626"}]},{documentType:"Suket Spare Part",reminderRenewal:[{day:360,color:"#eab308"},{day:270,color:"#f59e0b"},{day:180,color:"#c2410c"},{day:90,color:"#d946ef"},{day:60,color:"#dc2626"}]}],[l,i]=S.exports.useState(o),n=[{GridCol:[K("Periode Notifikasi",_("Bell","MenuSize")),{colspan:12,sx:{...v("CrudAction"),backgroundColor:r?p("sidebar-dark"):p("sidebar-light")},Button:[{disabled:!e,sx:{...(d=x("Button"))==null?void 0:d.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:_("Detail","ButtonSize"),label:"Detail"}]},{colspan:12,sx:{...x("ShadowSm"),padding:0,borderRadius:3},Box:[{child:s(W,{children:s(F,{TableRoot:[{key:"manajement-akun-table",...A,style:{position:"relative"},TableHeadRow:[{style:{...v("StickyTableHeader"),backgroundColor:r?p("sidebar-dark"):p("sidebar-light")},TableHeader:[{style:{position:"relative",padding:10},label:"No"},{style:{position:"relative",padding:0},label:w("Document Type",i,l,o,"department")},{style:{position:"relative",padding:0},label:w("Reminder renewal (+ Color coding )",i,l,o,"documentType")}]}],TableBodyRow:l?l.length?l.map((t,f)=>({TableColumn:[{label:f+1},{label:t.documentType},{label:t.reminderRenewal.map((c,u)=>s(z,{children:T(de,{sx:{backgroundColor:c.color,borderRadius:5,width:300},mb:5,size:"lg",variant:"filled",children:["H - ",c.day," Hari"]})},u))}],style:{backgroundColor:e===t?p("hover-bg-light"):""},selected(){a(t)}})):[{TableColumn:[{label:q,colSpan:5}]}]:[{TableColumn:[{label:s(G,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},J()]}];return s(V,{GridArrayObject:n})};export{ge as default};
