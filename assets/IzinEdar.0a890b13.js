import{c as z,S as V,A as W,T as p,_ as Q,F as X}from"./TableSortHeader.389d18ae.js";import{d as q,b as _,B as N,j as d,T as R,r as D,e as J,R as K,p as Y,A as Z,u as L,f as aa,g as P,i as c,h as M,c as b,M as j,a as ea,k as v,l as ia,L as ta}from"./index.208e0440.js";import{M as oa}from"./MobileCrud.aab120af.js";import{T as la}from"./Title.359824e3.js";import{M as ra}from"./MyDialog.2afb3a25.js";var na=q((a,{bulletSize:e,color:i,radius:t,align:r,lineVariant:n,lineWidth:o})=>{const s=a.fn.variant({variant:"filled",color:i});return{itemBody:{},itemContent:{},itemBullet:{boxSizing:"border-box",width:e,height:e,borderRadius:a.fn.size({size:t,sizes:a.radius}),border:`${o}px solid ${a.colorScheme==="dark"?a.colors.dark[4]:a.colors.gray[3]}`,backgroundColor:a.colorScheme==="dark"?a.colors.dark[7]:a.white,position:"absolute",top:0,left:r==="left"?-e/2-o/2:"auto",right:r==="right"?-e/2-o/2:"auto",display:"flex",alignItems:"center",justifyContent:"center",color:a.white,"&[data-with-child]":{borderWidth:1,backgroundColor:a.colorScheme==="dark"?a.colors.dark[4]:a.colors.gray[3],color:a.colorScheme==="dark"?a.colors.dark[0]:a.black},"&[data-active]":{borderColor:s.background,backgroundColor:a.white,"&[data-with-child]":{backgroundColor:s.background,color:a.white}}},item:{position:"relative",boxSizing:"border-box",color:a.colorScheme==="dark"?a.colors.dark[0]:a.black,paddingLeft:r==="left"?a.spacing.xl:0,paddingRight:r==="right"?a.spacing.xl:0,textAlign:r,"&:not(:last-of-type)::before":{display:"block"},"&:not(:first-of-type)":{marginTop:a.spacing.xl},"&::before":{boxSizing:"border-box",position:"absolute",top:0,left:r==="left"?-o:"auto",right:r==="right"?-o:"auto",bottom:-a.spacing.xl,borderLeft:`${o}px ${n} ${a.colorScheme==="dark"?a.colors.dark[4]:a.colors.gray[3]}`,content:'""',display:"none"},"&[data-line-active]":{"&::before":{borderLeftColor:s.background}}},itemTitle:{fontWeight:500,lineHeight:1,marginBottom:`calc(${a.spacing.xs}px / 2)`,textAlign:r}}});const sa=na;var da=Object.defineProperty,T=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,O=(a,e,i)=>e in a?da(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,ca=(a,e)=>{for(var i in e||(e={}))$.call(e,i)&&O(a,i,e[i]);if(T)for(var i of T(e))H.call(e,i)&&O(a,i,e[i]);return a},pa=(a,e)=>{var i={};for(var t in a)$.call(a,t)&&e.indexOf(t)<0&&(i[t]=a[t]);if(a!=null&&T)for(var t of T(a))e.indexOf(t)<0&&H.call(a,t)&&(i[t]=a[t]);return i};function U(a){var e=a,{className:i,bullet:t,title:r,bulletSize:n=20,radius:o="xl",lineWidth:s=4,active:g,lineActive:f,classNames:h,styles:S,children:k,color:y,align:B,lineVariant:C="solid",unstyled:m}=e,l=pa(e,["className","bullet","title","bulletSize","radius","lineWidth","active","lineActive","classNames","styles","children","color","align","lineVariant","unstyled"]);const{classes:u,cx:x}=sa({bulletSize:n,color:y,radius:o,align:B,lineVariant:C,lineWidth:s},{classNames:h,styles:S,unstyled:m,name:"Timeline"});return _(N,{...ca({className:x(u.item,i),"data-line-active":f||void 0,"data-active":g||void 0},l),children:[d("div",{className:u.itemBullet,"data-with-child":!!t||void 0,"data-active":g||void 0,children:t}),_("div",{className:u.itemBody,children:[r&&d(R,{className:u.itemTitle,children:r}),d("div",{className:u.itemContent,children:k})]})]})}U.displayName="@mantine/core/TimelineItem";var ba=Object.defineProperty,A=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,E=(a,e,i)=>e in a?ba(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,ua=(a,e)=>{for(var i in e||(e={}))G.call(e,i)&&E(a,i,e[i]);if(A)for(var i of A(e))F.call(e,i)&&E(a,i,e[i]);return a},ga=(a,e)=>{var i={};for(var t in a)G.call(a,t)&&e.indexOf(t)<0&&(i[t]=a[t]);if(a!=null&&A)for(var t of A(a))e.indexOf(t)<0&&F.call(a,t)&&(i[t]=a[t]);return i};const ma={active:-1,radius:"xl",bulletSize:20,align:"left",lineWidth:4,reverseActive:!1},I=D.exports.forwardRef((a,e)=>{const i=J("Timeline",ma,a),{children:t,active:r,color:n,radius:o,bulletSize:s,align:g,lineWidth:f,classNames:h,styles:S,sx:k,reverseActive:y,unstyled:B}=i,C=ga(i,["children","active","color","radius","bulletSize","align","lineWidth","classNames","styles","sx","reverseActive","unstyled"]),m=D.exports.Children.toArray(t),l=m.map((x,w)=>K.cloneElement(x,{classNames:h,styles:S,align:g,lineWidth:f,radius:x.props.radius||o,color:x.props.color||n,bulletSize:x.props.bulletSize||s,unstyled:B,active:x.props.active||(y?r>=m.length-w-1:r>=w),lineActive:x.props.lineActive||(y?r>=m.length-w-1:r-1>=w)})),u=g==="left"?{paddingLeft:s/2+f/2}:{paddingRight:s/2+f/2};return d(N,{...ua({ref:e,sx:[u,...Y(k)]},C),children:l})});I.Item=U;I.displayName="@mantine/core/Timeline";const xa=({TimeLineItem:a})=>d(N,{p:20,children:d(I,{active:99999999,children:a==null?void 0:a.map((e,i)=>_(I.Item,{title:e.title,bulletSize:24,bullet:d(Z,{size:22,radius:"xl",color:"cyan",children:e.avatar}),children:[d(R,{color:"dimmed",size:"sm",children:e.comment}),d(R,{size:"xs",mt:4,children:e.date})]},i))})}),fa=({selected:a})=>{var r,n;L(o=>o.darkMode.darkMode),aa();const[e,i]=D.exports.useState(!1),t=e?[{...P,GridCol:[{colspan:12,Box:[{child:d(xa,{TimeLineItem:[{title:"Bianca Loranza",avatar:"BL",comment:"Dummy Catatan , Merubah Material Type menjadi Instrument",date:"12:30, 9 November 2022"},{title:"Andriani Dwi",avatar:"AD",comment:"Dummy Catatan ",date:"07:24, 8 November 2022"}]})}]}]}]:[{...P,GridCol:[{sx:{padding:20},colspan:6,Text:[{weight:700,label:"Bussines Unit"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.businessUnit},{weight:700,label:"Material Type"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.materialType},{weight:700,label:"Item No. based on NIE Registration"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.itemRegis},{weight:700,label:"Item No. based on MySAP"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.itemSap},{weight:700,label:"Product Name based on NIE Registration"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.produkRegis},{weight:700,label:"Product Name based on MySAP"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.produkRegis}]},{sx:{padding:20},colspan:6,Text:[{weight:700,label:"1st Issuance Date"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.issuanceDate},{weight:700,label:"Latest Issuance Date"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.lateIssuance},{weight:700,label:"Expired Date"},{sx:{marginBottom:10},weight:400,label:a==null?void 0:a.expiredDate}]}]}];return d(ra,{size:"xl",title:e?"History":"Detail",DetailDialog:!0,icon:c(e?"History":"Detail","MenuSize"),detailFooter:e?d(M,{size:"sm",sx:{...(n=b("Button"))==null?void 0:n.info},leftIcon:c("Back","MenuSize"),onClick:()=>i(!1),children:"Back To Detail"}):d(M,{size:"sm",sx:{...(r=b("Button"))==null?void 0:r.success},leftIcon:c("History","ButtonSize"),onClick:()=>i(!0),children:"Go To History"}),children:d(j,{GridArrayObject:t})})},Ba=({obsolete:a})=>{var h,S,k,y,B,C,m;const[e,i]=D.exports.useState(null),t=L(l=>l.darkMode.darkMode),r=ea("(max-width:768px)",!0,{getInitialValueInEffect:!1}),n=a?[]:[{businessUnit:"Hemostasis",materialType:"Instrument",itemRegis:"CE-919552",itemSap:"SAP-419552",produkRegis:"PR-249553",produkSap:"PS-9191253",issuanceDate:"22 April 2020",lateIssuance:"30 Maret 2021",expiredDate:"12 Desember 2023"},{businessUnit:"Hematology",materialType:"Reagent",itemRegis:"CE-919553",itemSap:"SAP-419553",produkRegis:"PR-249553",produkSap:"PS-9191253",issuanceDate:"22 April 2020",lateIssuance:"30 Maret 2021",expiredDate:"12 Desember 2023"}],[o,s]=D.exports.useState(n),g=a?[{disabled:!e,sx:{...(C=b("Button"))==null?void 0:C.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("Detail","ButtonSize"),label:"Detail"},{disabled:!e,sx:{...(m=b("Button"))==null?void 0:m.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("Back","ButtonSize"),label:"Back To Existing Data"}]:[{disabled:!e,sx:{...(h=b("Button"))==null?void 0:h.success,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("ClipboardData","ButtonSize"),label:"Done Renewed"},{disabled:!e,sx:{...(S=b("Button"))==null?void 0:S.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("Detail","ButtonSize"),label:"Detail",CrudAction:d(fa,{selected:e})},{disabled:!e,sx:{...(k=b("Button"))==null?void 0:k.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("Edit","ButtonSize"),label:"Edit",onClick(){}},{disabled:!e,sx:{...(y=b("Button"))==null?void 0:y.danger,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("Trash","ButtonSize"),label:"Not Renew"},{disabled:!e,sx:{...(B=b("Button"))==null?void 0:B.success,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:c("ClipboardData","ButtonSize"),label:"Done Amendment",onClick(){}}];function f(){return[{GridCol:[la(a?"Obsolete Izin Edar":"Izin Edar",c(a?"ClipboardOutlinedX":"ClipboardFill","MenuSize"),"withSearchInput"),r?{colspan:12,sx:{...z("CrudAction"),backgroundColor:t?v("sidebar-dark"):v("sidebar-light"),justifyContent:"space-between"},AutoComplete:[{sx:{marginRight:20},placeholder:"Bussines Unit",icon:c("Filter","ButtonSize"),data:[]}],Box:[{child:d(oa,{MenuItem:g.map(l=>({disabled:l.disabled,icon:l.icon,label:l.label,CrudAction:l.CrudAction}))})}]}:{colspan:12,sx:{...z("CrudAction"),backgroundColor:t?v("sidebar-dark"):v("sidebar-light")},Button:g,AutoComplete:[{sx:{position:"absolute",left:5,top:7},placeholder:"Bussines Unit",icon:c("Filter","ButtonSize"),data:[]}]},{colspan:12,sx:{...b("ShadowSm"),padding:0,borderRadius:3},Box:[{child:d(V,{children:d(W,{TableRoot:[{key:"manajement-akun-table",...ia,TableHeadRow:[{style:{...z("StickyTableHeader"),backgroundColor:t?v("sidebar-dark"):v("sidebar-light")},TableHeader:[{style:{position:"relative",padding:10},label:"No"},{style:{position:"relative",padding:0},label:p("Business Unit",s,o,n,"businessUnit",200)},{style:{position:"relative",padding:0},label:p("Material Type",s,o,n,"materialType",200)},{style:{position:"relative",padding:0},label:p("Item No. based on NIE registration",s,o,n,"itemRegis",300)},{style:{position:"relative",padding:0},label:p("Item No. based on mySAP",s,o,n,"itemSap",300)},{style:{position:"relative",padding:0},label:p("Product Name based on NIE registration",s,o,n,"produkRegis",300)},{style:{position:"relative",padding:0},label:p("Product Name based on MySAP",s,o,n,"produkSap",300)},{style:{position:"relative",padding:0},label:p("1st Issuance Date",s,o,n,"issuanceDate",200)},{style:{position:"relative",padding:0},label:p("Latest Issuance Date",s,o,n,"lateIssuance",200)},{style:{position:"relative",padding:0},label:p("Date of expired",s,o,n,"expiredDate",200)},{style:{position:"relative",padding:0},label:p("Reminder for process renewal",s,o,n,"",300)},{style:{position:"relative",padding:0},label:p("Label distributor",s,o,n,"",200)}]}],TableBodyRow:o?o.length?o.map((l,u)=>({TableColumn:[{label:u+1},{label:l.businessUnit},{label:l.materialType},{label:l.itemRegis},{label:l.itemSap},{label:l.produkRegis},{label:l.produkSap},{label:l.issuanceDate},{label:l.lateIssuance},{label:l.expiredDate},{label:"-"},{label:"-"}],style:{backgroundColor:e===l?v("hover-bg-light"):""},selected(){i(l)}})):[{TableColumn:[{label:Q,colSpan:99}]}]:[{TableColumn:[{label:d(ta,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},X()]}]}return d(j,{GridArrayObject:f()})};export{Ba as default};
