import{c,S as N,A as L,T as n,_ as M,F as v}from"./TableSortHeader.bb089a8a.js";import{r as C,u as z,a as A,c as l,i as o,j as r,M as R,k as d,l as E,L as q}from"./index.b434fc44.js";import{M as w}from"./MobileCrud.f7cf5577.js";import{T as I}from"./Title.7bad72e9.js";const P=({obsolete:b})=>{var x,g,m,S,D,f,y;const[t,B]=C.exports.useState(null),p=z(e=>e.darkMode.darkMode),h=A("(max-width:768px)",!0,{getInitialValueInEffect:!1}),i=b?[]:[{partNo:"001",description:"Dummy Description",licenseNo:"9862384",sequenceNo:"4237553",issuanceDate:"22 Maret 2022",expiredDate:"2 Agustus 2023"},{partNo:"002",description:"Dummy Description",licenseNo:"3862384",sequenceNo:"7237553",issuanceDate:"12 Maret 2022",expiredDate:"13 Desember 2023"}],[a,s]=C.exports.useState(i),u=b?[{disabled:!t,sx:{...(f=l("Button"))==null?void 0:f.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Detail","ButtonSize"),label:"Detail"},{disabled:!t,sx:{...(y=l("Button"))==null?void 0:y.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Back","ButtonSize"),label:"Back To Existing Data"}]:[{disabled:!t,sx:{...(x=l("Button"))==null?void 0:x.success,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("ClipboardData","ButtonSize"),label:"Done Renewed"},{disabled:!t,sx:{...(g=l("Button"))==null?void 0:g.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Detail","ButtonSize"),label:"Detail"},{disabled:!t,sx:{...(m=l("Button"))==null?void 0:m.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Edit","ButtonSize"),label:"Edit",onClick(){}},{disabled:!t,sx:{...(S=l("Button"))==null?void 0:S.danger,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("Trash","ButtonSize"),label:"Not Renew"},{disabled:!t,sx:{...(D=l("Button"))==null?void 0:D.success,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:o("ClipboardData","ButtonSize"),label:"Done Amendment",onClick(){}}];function k(){return[{GridCol:[I(b?"Obsolete Suket Spare Part":"Suket Spare Part",o(b?"SquareOutlined":"CubeTransparent","MenuSize")),h?{colspan:12,sx:{...c("CrudAction"),backgroundColor:p?d("sidebar-dark"):d("sidebar-light"),justifyContent:"space-between"},Box:[{child:r(w,{MenuItem:u.map(e=>({disabled:e.disabled,icon:e.icon,label:e.label}))})}]}:{colspan:12,sx:{...c("CrudAction"),backgroundColor:p?d("sidebar-dark"):d("sidebar-light")},Button:u},{colspan:12,sx:{...l("ShadowSm"),padding:0,borderRadius:3},Box:[{child:r(N,{children:r(L,{TableRoot:[{...E,TableHeadRow:[{style:{...c("StickyTableHeader"),backgroundColor:p?d("sidebar-dark"):d("sidebar-light")},TableHeader:[{style:{position:"relative",padding:5},label:"No"},{style:{position:"relative",padding:0},label:n("Part No.",s,a,i,"partNo",100)},{style:{position:"relative",padding:0},label:n("Description",s,a,i,"description",200)},{style:{position:"relative",padding:0},label:n("License No.",s,a,i,"licenseNo",200)},{style:{position:"relative",padding:0},label:n("Sequence no. in license",s,a,i,"sequenceNo",300)},{style:{position:"relative",padding:0},label:n("Issuance Date",s,a,i,"issuanceDate",200)},{style:{position:"relative",padding:0},label:n("Expired Date",s,a,i,"expiredDate",200)},{style:{position:"relative",padding:0},label:n("Reminder for process renewal",s,a,i,"username",200)}]}],TableBodyRow:a?a.length?a.map((e,T)=>({TableColumn:[{label:T+1},{label:e.partNo},{label:e.description},{label:e.licenseNo},{label:e.sequenceNo},{label:e.issuanceDate},{label:e.expiredDate},{label:"-"}],style:{backgroundColor:t===e?d("hover-bg-light"):""},selected(){B(e)}})):[{TableColumn:[{label:M,colSpan:99}]}]:[{TableColumn:[{label:r(q,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},v()]}]}return r(R,{GridArrayObject:k()})};export{P as default};
