import{c,S as N,A as k,T as s,_ as L,F as v}from"./TableSortHeader.bedb192c.js";import{r as h,u as z,c as l,i as o,j as d,M,h as r,k as A,L as R}from"./index.93481fe5.js";import{M as q}from"./MobileCrud.b5db009c.js";import{T as w}from"./Title.727dcec9.js";const O=({obsolete:b})=>{var u,x,m,g,S,D,y;const[t,f]=h.exports.useState(null),B=z("(max-width:768px)"),i=b?[]:[{partNo:"001",description:"Dummy Description",licenseNo:"9862384",sequenceNo:"4237553",issuanceDate:"22 Maret 2022",expiredDate:"2 Agustus 2023"},{partNo:"002",description:"Dummy Description",licenseNo:"3862384",sequenceNo:"7237553",issuanceDate:"12 Maret 2022",expiredDate:"13 Desember 2023"}],[a,n]=h.exports.useState(i),p=b?[{disabled:!t,sx:{...(D=l("Button"))==null?void 0:D.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Detail","ButtonSize"),label:"Detail"},{disabled:!t,sx:{...(y=l("Button"))==null?void 0:y.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Back","ButtonSize"),label:"Back To Existing Data"}]:[{disabled:!t,sx:{...(u=l("Button"))==null?void 0:u.success,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("ClipboardData","ButtonSize"),label:"Done Renewed"},{disabled:!t,sx:{...(x=l("Button"))==null?void 0:x.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Detail","ButtonSize"),label:"Detail"},{disabled:!t,sx:{...(m=l("Button"))==null?void 0:m.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Edit","ButtonSize"),label:"Edit",onClick(){}},{disabled:!t,sx:{...(g=l("Button"))==null?void 0:g.danger,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Trash","ButtonSize"),label:"Not Renew"},{disabled:!t,sx:{...(S=l("Button"))==null?void 0:S.success,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("ClipboardData","ButtonSize"),label:"Done Amendment",onClick(){}}];function C(){return[{GridCol:[w(b?"Obsolete Suket Spare Part":"Suket Spare Part",o(b?"SquareOutlined":"CubeTransparent","MenuSize")),B?{colspan:12,sx:e=>({...c("CrudAction"),backgroundColor:e.colorScheme==="dark"?r("sidebar-dark"):r("sidebar-light"),justifyContent:"space-between"}),Box:[{child:d(q,{MenuItem:p.map(e=>({disabled:e.disabled,icon:e.icon,label:e.label}))})}]}:{colspan:12,sx:e=>({...c("CrudAction"),backgroundColor:e.colorScheme==="dark"?r("sidebar-dark"):r("sidebar-light")}),Button:p},{colspan:12,sx:{...l("ShadowSm"),padding:0,borderRadius:3},Box:[{child:d(N,{children:d(k,{TableRoot:[{...A,TableHeadRow:[{style:{...c("StickyTableHeader")},TableHeader:[{style:{position:"relative",padding:5},label:"No"},{style:{position:"relative",padding:0},label:s("Part No.",n,a,i,"partNo",100)},{style:{position:"relative",padding:0},label:s("Description",n,a,i,"description",200)},{style:{position:"relative",padding:0},label:s("License No.",n,a,i,"licenseNo",200)},{style:{position:"relative",padding:0},label:s("Sequence no. in license",n,a,i,"sequenceNo",300)},{style:{position:"relative",padding:0},label:s("Issuance Date",n,a,i,"issuanceDate",200)},{style:{position:"relative",padding:0},label:s("Expired Date",n,a,i,"expiredDate",200)},{style:{position:"relative",padding:0},label:s("Reminder for process renewal",n,a,i,"username",200)}]}],TableBodyRow:a?a.length?a.map((e,T)=>({TableColumn:[{label:T+1},{label:e.partNo},{label:e.description},{label:e.licenseNo},{label:e.sequenceNo},{label:e.issuanceDate},{label:e.expiredDate},{label:"-"}],style:{backgroundColor:t===e?r("hover-bg-light"):""},selected(){f(e)}})):[{TableColumn:[{label:L,colSpan:99}]}]:[{TableColumn:[{label:d(R,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},v()]}]}return d(M,{GridArrayObject:C()})};export{O as default};
