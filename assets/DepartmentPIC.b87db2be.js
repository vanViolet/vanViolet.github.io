import{c as m,S as v,A as f,T as s,_ as D,F as L}from"./TableSortHeader.3b2300f7.js";import{r as b,u as y,h as o,c as u,i as x,j as t,k as A,L as B,F as g,a as T,B as h,M}from"./index.8a5c8923.js";import{T as j}from"./Title.31f5c25f.js";const H=()=>{var p;const[d,S]=b.exports.useState(null);y(e=>e.counter.sidebarToggle);const c=y(e=>e.darkMode.darkMode),l=[{department:"LNC",documentType:"Vendor Agreement",to:["vonny.lydia@sysmex.co.id"],cc:["puspita.feriza@sysmex.co.id","andriani.dwi@sysmex.co.id","loranza.bianca@sysmex.co.id","manuela.flavia@sysmex.co.id","puspita.thalia@sysmex.co.id"]},{department:"SCM",documentType:"Vendor Agreement",to:["susanti.yossi@sysmex.co.id"],cc:["rafael.ivan@sysmex.co.id","oktavia.anita@sysmex.co.id","ruspriandari.wiwik@sysmex.co.id"]}],[a,i]=b.exports.useState(l),C=[{GridCol:[j("Department PIC",x("EmailFill","MenuSize")),{colspan:12,sx:{...m("CrudAction"),backgroundColor:c?o("sidebar-dark"):o("sidebar-light")},Button:[{disabled:!d,sx:{...(p=u("Button"))==null?void 0:p.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:x("Detail","ButtonSize"),label:"Detail"}]},{colspan:12,sx:{...u("ShadowSm"),padding:0,borderRadius:3},Box:[{child:t(v,{children:t(f,{TableRoot:[{key:"manajement-akun-table",...A,TableHeadRow:[{style:{...m("StickyTableHeader"),backgroundColor:c?o("sidebar-dark"):o("sidebar-light")},TableHeader:[{style:{position:"relative",padding:10},label:"No"},{style:{position:"relative",padding:0},label:s("Department",i,a,l,"department")},{style:{position:"relative",padding:0,width:300},label:s("Document Type",i,a,l,"documentType")},{style:{position:"relative",padding:0},label:s("To",i,a,l,"to")},{style:{position:"relative",padding:0},label:s("Cc",i,a,l,"cc")}]}],TableBodyRow:a?a.length?a.map((e,k)=>({TableColumn:[{label:k+1},{label:e.department},{label:e.documentType},{label:t(g,{children:e.to.map((n,r)=>T(h,{children:["- ",n]},r))})},{label:t(g,{children:e.cc.map((n,r)=>T(h,{children:["- ",n]},r))})}],style:{backgroundColor:d===e?o("hover-bg-light"):""},selected(){S(e)}})):[{TableColumn:[{label:D,colSpan:5}]}]:[{TableColumn:[{label:t(B,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},L()]}];return t(M,{GridArrayObject:C})};export{H as default};
