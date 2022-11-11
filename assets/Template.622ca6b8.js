import{K as y,j as b,r as h,a as X,D as oe,N as ie,O as de,Q as le,U as se,i as z,M as Z,J as ue,h as w,c as V,k as ce,L as pe}from"./index.93481fe5.js";import{c as q,S as fe,A as me,T as ye,_ as be,F as ge}from"./TableSortHeader.bedb192c.js";import{T as ve}from"./Title.727dcec9.js";import{M as he}from"./MyDialog.ea9c6344.js";import{S as Se}from"./sweetalert2.all.dcc1c4ee.js";/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */function Ee(e,t,r){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof t=="function"&&(r=t,t={}),t=t||{},r=r||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async="async"in t?!!t.async:!0,a.src=e,t.attrs&&xe(a,t.attrs),t.text&&(a.text=String(t.text));var o="onload"in a?$:ke;o(a,r),a.onload||$(a,r),n.appendChild(a)}function xe(e,t){for(var r in t)e.setAttribute(r,t[r])}function $(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function ke(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var P;function M(e,t){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):typeof e!="string"||e.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(P||(P=M.scriptLoader(e).then(function(r){return t&&t(r),r})),P)}M.scriptLoader=function(e){return new Promise(function(t,r){Ee(e,function(n){if(P=void 0,n)return r(n);if(!window.CKEDITOR)return r(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."));t(CKEDITOR)})})};/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */var l=function(){return l=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l.apply(this,arguments)};function Te(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function F(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var Y=["activeEnterModeChange","activeFilterChange","afterCommandExec","afterInsertHtml","afterPaste","afterPasteFromWord","afterSetData","afterUndoImage","ariaEditorHelpLabel","ariaWidget","autogrow","beforeCommandExec","beforeDestroy","beforeGetData","beforeModeUnload","beforeSetMode","beforeUndoImage","blur","change","configLoaded","contentDirChanged","contentDom","contentDomInvalidated","contentDomUnload","contentPreview","customConfigLoaded","dataFiltered","dataReady","destroy","dialogHide","dialogShow","dirChanged","doubleclick","dragend","dragstart","drop","elementsPathUpdate","exportPdf","fileUploadRequest","fileUploadResponse","floatingSpaceLayout","focus","getData","getSnapshot","insertElement","insertHtml","insertText","instanceReady","key","langLoaded","loadSnapshot","loaded","lockSnapshot","maximize","menuShow","mode","notificationHide","notificationShow","notificationUpdate","paste","pasteFromWord","pluginsLoaded","readOnly","removeFormatCleanup","required","resize","save","saveSnapshot","selectionChange","setData","stylesRemove","stylesSet","template","toDataFormat","toHtml","uiSpace","unlockSnapshot","updateSnapshot","widgetDefinition"],_=["beforeLoad","namespaceLoaded"],K=F(F([],Y,!0),_,!0),B="__CKE__";function Ce(e){return"".concat(B).concat(e)}function Oe(e){return e.substr(B.length)}function ee(e){var t=e.substr(0,1).toUpperCase()+e.substr(1);return"on".concat(t)}function De(e){return e.substr(2,1).toLowerCase()+e.substr(3)}var W=F(F([],Y,!0),_,!0).reduce(function(e,t){var r;return l(l({},e),(r={},r[t]=Ce(t),r))},{});function Re(e){return e.split(/(?=[A-Z])/).join("-").toLowerCase()}function we(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5)}function Ie(e,t,r){var n={display:"none",visibility:"hidden"};return e==="classic"?n:t==="ready"?r!=null?r:void 0:n}function N(e){var t=e.debug,r=e.editor,n=e.evtName,a=e.handler,o=e.listenerData,u=e.priority,i=t&&we(),d=a;return t&&(d=function(s){console.log({operation:"invoke",editor:r.name,evtName:n,handlerId:i,data:s.data,listenerData:s.listenerData}),a(s)}),t&&console.log({operation:"register",editor:r.name,evtName:n,handlerId:i}),r.on(n,d,null,o,u),function(){t&&console.log({operation:"unregister",editor:r.name,evtName:n,handlerId:i}),r.removeListener(n,d)}}var Le=h.exports.useEffect,Ue=h.exports.useReducer,E=h.exports.useRef,je="https://cdn.ckeditor.com/4.20.0/standard-all/ckeditor.js",Ae={};function Ne(e){var t=e.config,r=e.debug,n=e.dispatchEvent,a=e.subscribeTo,o=a===void 0?K:a,u=e.editorUrl,i=e.element,d=e.initContent,s=e.type,I=s===void 0?"classic":s,L=E(u||je),C=E(o!=null?o:K),x=E(r),g=E(n),U=E(d),O=E(t||Ae),f=E(I),m=Ue(Pe,{editor:void 0,hookStatus:"init"}),p=m[0],c=p.editor,j=p.hookStatus,v=m[1];return Le(function(){if(i&&!c){v({type:"loading"});var A=function(k){var S;C.current.indexOf("namespaceLoaded")!==-1&&((S=g.current)===null||S===void 0||S.call(g,{type:W.namespaceLoaded,payload:k}))},re=function(k){var S,G=f.current==="inline",ne=O.current.readOnly;C.current.indexOf("beforeLoad")!==-1&&((S=g.current)===null||S===void 0||S.call(g,{type:W.beforeLoad,payload:k}));var D=k[G?"inline":"replace"](i,O.current),ae=C.current.filter(function(T){return _.indexOf(T)===-1});ae.forEach(function(T){N({debug:x.current,editor:D,evtName:T,handler:function(R){var H;(H=g.current)===null||H===void 0||H.call(g,{type:"".concat(B).concat(T),payload:R})}})}),N({debug:x.current,editor:D,evtName:"loaded",handler:function(){v({type:"loaded"})},priority:-1}),N({debug:x.current,editor:D,evtName:"instanceReady",handler:function(T){var R=T.editor;v({type:"ready"}),G&&!ne&&R.setReadOnly(!1),U.current&&R.setData(U.current,{noSnapshot:!0,callback:function(){R.resetUndo()}})},priority:-1}),N({debug:x.current,editor:D,evtName:"destroy",handler:function(){v({type:"destroyed"})},priority:-1}),v({type:"unloaded",payload:D})};M(L.current,A).then(re).catch(function(k){console.error(k),v({type:"error"})})}return function(){c&&c.destroy()}},[c,i]),{editor:c,status:c==null?void 0:c.status,error:j==="error",loading:j==="loading"}}function Pe(e,t){switch(t.type){case"init":return l(l({},e),{hookStatus:"init"});case"loading":return l(l({},e),{hookStatus:"loading"});case"unloaded":return{editor:t.payload,hookStatus:"unloaded"};case"loaded":return l(l({},e),{hookStatus:"loaded"});case"ready":return l(l({},e),{hookStatus:"ready"});case"destroyed":return{editor:void 0,hookStatus:"destroyed"};case"error":return{editor:void 0,hookStatus:"error"};default:return e}}var J=h.exports.useEffect,Fe=h.exports.useRef,He=h.exports.useState;function te(e){var t=e.config,r=t===void 0?{}:t,n=e.debug,a=e.editorUrl,o=e.initData,u=e.name,i=e.readOnly,d=e.style,s=e.type,I=Te(e,["config","debug","editorUrl","initData","name","readOnly","style","type"]),L=He(null),C=L[0],x=L[1],g=Fe(I),U=function(p){var c=p.type,j=p.payload,v=ee(Oe(c)),A=g.current[v];A&&A(j)};r&&typeof i=="boolean"&&(r.readOnly=i);var O=Ne({config:r,dispatchEvent:U,debug:n,editorUrl:a,element:C,initContent:typeof o=="string"?o:void 0,subscribeTo:Object.keys(I).filter(function(p){return p.indexOf("on")===0}).map(De),type:s}),f=O.editor,m=O.status;return J(function(){var p=s!=="inline"&&f&&(m==="loaded"||m==="ready");return d&&p&&f.container.setStyles(d),function(){d&&p&&Object.keys(d).map(Re).forEach(function(c){f.container.removeStyle(c)})}},[f,m,d,s]),J(function(){f&&m==="ready"&&typeof i=="boolean"&&f.setReadOnly(i)},[f,m,i]),b("div",{id:u!=null?u:void 0,ref:x,style:Ie(s!=null?s:"classic",m,d),children:typeof o=="string"?null:o})}var ze=l({config:y.exports.object,debug:y.exports.bool,editorUrl:y.exports.string,initData:y.exports.node,name:y.exports.string,readOnly:y.exports.bool,style:y.exports.object,type:y.exports.oneOf(["classic","inline"])},K.reduce(function(e,t){var r;return l(l({},e),(r={},r[ee(t)]=y.exports.func,r))},{}));te.propTypes=ze;const Ke=({selected:e})=>{const{colorScheme:t}=X(),r=oe(),n=ie().shape({name:de().min(2,"Nama tidak boleh kurang dari 2 karakter")}),a=`<div>
  <div style="background-color: #fff;border-radius: 10px;font-family: arial">
  <p>Dear All,</p>

  <p>Berikut adalah summary vendor/insurance/third party agreement to be expired hingga :expired_month: bulan kedepan, mohon bantuannya agar proses perpanjangan dapat segera di <strong>proses ke pihak terkait dan proses dapat diselesaikan selambatnya 1 bulan sebelum tanggal expired</strong>, serta dapat memberikan progress update secara berkala atas agreement-agreement berikut:</p>

  <p>:tabel:</p>
  </div>
  </div>
  `,o=le({validateInputOnChange:!0,initialValues:{name:(e==null?void 0:e.name)||""},validate:se(n)}),u=[{GridCol:[{colspan:12,TextInput:[{label:"Template Name",getValue:{...o.getInputProps("name")},requireSymbol:!0,props:{readOnly:!0}}]},{colspan:12,TextInput:[{label:"Subject Email",requireSymbol:!0,props:{value:"Vendor/Insurance/Third Party Agreement to be Expired"}}]},{colspan:12,Text:[{label:"Template",weight:500}]},{colspan:12,Box:[{child:b(te,{initData:a,config:{width:"100%",allowedContent:!0}})}]}]}],i=()=>{r(ue()),Se.fire({title:"Template berhasil di update",icon:"success",background:t==="dark"?"#27272a":"white",color:t==="dark"?"white":"rgba(0,0,0,0.7)"})};return b(he,{size:750,title:"Update Template",icon:z("Edit","MenuSize"),onSubmit:o.onSubmit(d=>i()),children:b(Z,{GridArrayObject:u})})},Q=[{name:"Izin Edar - Renewal"},{name:"Vendor Agreement - Renewal"},{name:"Izin Edar - Done Renew"},{name:"Vendor Agreement - Done Renew"},{name:"Izin Edar - Expired"},{name:"Vendor Agreement - Expired"}],qe=()=>{const[e,t]=h.exports.useState(null),[r,n]=h.exports.useState(Q),{colorScheme:a}=X();function o(){var u;return[{GridCol:[ve("Template",z("DocumentText","MenuSize")),{colspan:12,sx:i=>({...q("CrudAction"),backgroundColor:i.colorScheme==="dark"?w("sidebar-dark"):w("sidebar-light")}),Button:[{disabled:!e,sx:{...(u=V("Button"))==null?void 0:u.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:z("Edit","ButtonSize"),label:"Update",CrudAction:e&&b(Ke,{selected:e})}]},{colspan:12,sx:{...V("ShadowSm"),padding:0,borderRadius:3},Box:[{child:b(fe,{children:b(me,{TableRoot:[{key:"manajement-akun-table",...ce,TableHeadRow:[{style:{...q("StickyTableHeader"),backgroundColor:a==="dark"?w("sidebar-dark"):w("sidebar-light")},TableHeader:[{style:{position:"relative",padding:5},label:"No"},{style:{position:"relative",padding:0},label:ye("Template Name",n,r,Q,"nama")}]}],TableBodyRow:r?r.length?r.map((i,d)=>({TableColumn:[{label:d+1},{label:i.name}],style:{backgroundColor:e===i?w("hover-bg-light"):""},selected(){t(i)}})):[{TableColumn:[{label:be,colSpan:99}]}]:[{TableColumn:[{label:b(pe,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},ge()]}]}return b(Z,{GridArrayObject:o()})};export{qe as default,Q as initialData};
