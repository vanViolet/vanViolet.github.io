import{J as y,j as b,r as h,n as ae,e as oe,K as ie,N as de,O as le,Q as se,i as H,M as X,I as ue,u as ce,h as w,c as V,k as pe,L as fe}from"./index.0802afcc.js";import{c as q,S as me,A as ye,T as be,_ as ge,F as ve}from"./TableSortHeader.55930a8c.js";import{T as he}from"./Title.5e9cb9c3.js";import{M as Se}from"./MyDialog.9e72cbd4.js";import{S as Ee}from"./sweetalert2.all.f219d456.js";/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */function xe(e,t,r){var n=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");typeof t=="function"&&(r=t,t={}),t=t||{},r=r||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async="async"in t?!!t.async:!0,a.src=e,t.attrs&&ke(a,t.attrs),t.text&&(a.text=String(t.text));var o="onload"in a?$:Te;o(a,r),a.onload||$(a,r),n.appendChild(a)}function ke(e,t){for(var r in t)e.setAttribute(r,t[r])}function $(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Te(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var P;function K(e,t){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):typeof e!="string"||e.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(P||(P=K.scriptLoader(e).then(function(r){return t&&t(r),r})),P)}K.scriptLoader=function(e){return new Promise(function(t,r){xe(e,function(n){if(P=void 0,n)return r(n);if(!window.CKEDITOR)return r(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."));t(CKEDITOR)})})};/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */var l=function(){return l=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},l.apply(this,arguments)};function Ce(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function M(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var Z=["activeEnterModeChange","activeFilterChange","afterCommandExec","afterInsertHtml","afterPaste","afterPasteFromWord","afterSetData","afterUndoImage","ariaEditorHelpLabel","ariaWidget","autogrow","beforeCommandExec","beforeDestroy","beforeGetData","beforeModeUnload","beforeSetMode","beforeUndoImage","blur","change","configLoaded","contentDirChanged","contentDom","contentDomInvalidated","contentDomUnload","contentPreview","customConfigLoaded","dataFiltered","dataReady","destroy","dialogHide","dialogShow","dirChanged","doubleclick","dragend","dragstart","drop","elementsPathUpdate","exportPdf","fileUploadRequest","fileUploadResponse","floatingSpaceLayout","focus","getData","getSnapshot","insertElement","insertHtml","insertText","instanceReady","key","langLoaded","loadSnapshot","loaded","lockSnapshot","maximize","menuShow","mode","notificationHide","notificationShow","notificationUpdate","paste","pasteFromWord","pluginsLoaded","readOnly","removeFormatCleanup","required","resize","save","saveSnapshot","selectionChange","setData","stylesRemove","stylesSet","template","toDataFormat","toHtml","uiSpace","unlockSnapshot","updateSnapshot","widgetDefinition"],_=["beforeLoad","namespaceLoaded"],z=M(M([],Z,!0),_,!0),B="__CKE__";function Oe(e){return"".concat(B).concat(e)}function De(e){return e.substr(B.length)}function Y(e){var t=e.substr(0,1).toUpperCase()+e.substr(1);return"on".concat(t)}function Re(e){return e.substr(2,1).toLowerCase()+e.substr(3)}var W=M(M([],Z,!0),_,!0).reduce(function(e,t){var r;return l(l({},e),(r={},r[t]=Oe(t),r))},{});function we(e){return e.split(/(?=[A-Z])/).join("-").toLowerCase()}function Ie(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,5)}function Le(e,t,r){var n={display:"none",visibility:"hidden"};return e==="classic"?n:t==="ready"?r!=null?r:void 0:n}function N(e){var t=e.debug,r=e.editor,n=e.evtName,a=e.handler,o=e.listenerData,s=e.priority,i=t&&Ie(),d=a;return t&&(d=function(u){console.log({operation:"invoke",editor:r.name,evtName:n,handlerId:i,data:u.data,listenerData:u.listenerData}),a(u)}),t&&console.log({operation:"register",editor:r.name,evtName:n,handlerId:i}),r.on(n,d,null,o,s),function(){t&&console.log({operation:"unregister",editor:r.name,evtName:n,handlerId:i}),r.removeListener(n,d)}}var Ue=h.exports.useEffect,je=h.exports.useReducer,E=h.exports.useRef,Ae="https://cdn.ckeditor.com/4.20.0/standard-all/ckeditor.js",Ne={};function Pe(e){var t=e.config,r=e.debug,n=e.dispatchEvent,a=e.subscribeTo,o=a===void 0?z:a,s=e.editorUrl,i=e.element,d=e.initContent,u=e.type,I=u===void 0?"classic":u,L=E(s||Ae),C=E(o!=null?o:z),x=E(r),g=E(n),U=E(d),O=E(t||Ne),f=E(I),m=je(Me,{editor:void 0,hookStatus:"init"}),p=m[0],c=p.editor,j=p.hookStatus,v=m[1];return Ue(function(){if(i&&!c){v({type:"loading"});var A=function(k){var S;C.current.indexOf("namespaceLoaded")!==-1&&((S=g.current)===null||S===void 0||S.call(g,{type:W.namespaceLoaded,payload:k}))},te=function(k){var S,G=f.current==="inline",re=O.current.readOnly;C.current.indexOf("beforeLoad")!==-1&&((S=g.current)===null||S===void 0||S.call(g,{type:W.beforeLoad,payload:k}));var D=k[G?"inline":"replace"](i,O.current),ne=C.current.filter(function(T){return _.indexOf(T)===-1});ne.forEach(function(T){N({debug:x.current,editor:D,evtName:T,handler:function(R){var F;(F=g.current)===null||F===void 0||F.call(g,{type:"".concat(B).concat(T),payload:R})}})}),N({debug:x.current,editor:D,evtName:"loaded",handler:function(){v({type:"loaded"})},priority:-1}),N({debug:x.current,editor:D,evtName:"instanceReady",handler:function(T){var R=T.editor;v({type:"ready"}),G&&!re&&R.setReadOnly(!1),U.current&&R.setData(U.current,{noSnapshot:!0,callback:function(){R.resetUndo()}})},priority:-1}),N({debug:x.current,editor:D,evtName:"destroy",handler:function(){v({type:"destroyed"})},priority:-1}),v({type:"unloaded",payload:D})};K(L.current,A).then(te).catch(function(k){console.error(k),v({type:"error"})})}return function(){c&&c.destroy()}},[c,i]),{editor:c,status:c==null?void 0:c.status,error:j==="error",loading:j==="loading"}}function Me(e,t){switch(t.type){case"init":return l(l({},e),{hookStatus:"init"});case"loading":return l(l({},e),{hookStatus:"loading"});case"unloaded":return{editor:t.payload,hookStatus:"unloaded"};case"loaded":return l(l({},e),{hookStatus:"loaded"});case"ready":return l(l({},e),{hookStatus:"ready"});case"destroyed":return{editor:void 0,hookStatus:"destroyed"};case"error":return{editor:void 0,hookStatus:"error"};default:return e}}var J=h.exports.useEffect,Fe=h.exports.useRef,He=h.exports.useState;function ee(e){var t=e.config,r=t===void 0?{}:t,n=e.debug,a=e.editorUrl,o=e.initData,s=e.name,i=e.readOnly,d=e.style,u=e.type,I=Ce(e,["config","debug","editorUrl","initData","name","readOnly","style","type"]),L=He(null),C=L[0],x=L[1],g=Fe(I),U=function(p){var c=p.type,j=p.payload,v=Y(De(c)),A=g.current[v];A&&A(j)};r&&typeof i=="boolean"&&(r.readOnly=i);var O=Pe({config:r,dispatchEvent:U,debug:n,editorUrl:a,element:C,initContent:typeof o=="string"?o:void 0,subscribeTo:Object.keys(I).filter(function(p){return p.indexOf("on")===0}).map(Re),type:u}),f=O.editor,m=O.status;return J(function(){var p=u!=="inline"&&f&&(m==="loaded"||m==="ready");return d&&p&&f.container.setStyles(d),function(){d&&p&&Object.keys(d).map(we).forEach(function(c){f.container.removeStyle(c)})}},[f,m,d,u]),J(function(){f&&m==="ready"&&typeof i=="boolean"&&f.setReadOnly(i)},[f,m,i]),b("div",{id:s!=null?s:void 0,ref:x,style:Le(u!=null?u:"classic",m,d),children:typeof o=="string"?null:o})}var ze=l({config:y.exports.object,debug:y.exports.bool,editorUrl:y.exports.string,initData:y.exports.node,name:y.exports.string,readOnly:y.exports.bool,style:y.exports.object,type:y.exports.oneOf(["classic","inline"])},z.reduce(function(e,t){var r;return l(l({},e),(r={},r[Y(t)]=y.exports.func,r))},{}));ee.propTypes=ze;const Ke=({selected:e})=>{const t=ae(),r=oe(),n=ie().shape({name:de().min(2,"Nama tidak boleh kurang dari 2 karakter")}),a=`<div>
  <div style="background-color: #fff;border-radius: 10px;font-family: arial">
  <p>Dear All,</p>

  <p>Berikut adalah summary vendor/insurance/third party agreement to be expired hingga :expired_month: bulan kedepan, mohon bantuannya agar proses perpanjangan dapat segera di <strong>proses ke pihak terkait dan proses dapat diselesaikan selambatnya 1 bulan sebelum tanggal expired</strong>, serta dapat memberikan progress update secara berkala atas agreement-agreement berikut:</p>

  <p>:tabel:</p>
  </div>
  </div>
  `,o=le({validateInputOnChange:!0,initialValues:{name:(e==null?void 0:e.name)||""},validate:se(n)}),s=[{GridCol:[{colspan:12,TextInput:[{label:"Template Name",getValue:{...o.getInputProps("name")},requireSymbol:!0,props:{readOnly:!0}}]},{colspan:12,TextInput:[{label:"Subject Email",requireSymbol:!0,props:{value:"Vendor/Insurance/Third Party Agreement to be Expired"}}]},{colspan:12,Text:[{label:"Template",weight:500}]},{colspan:12,Box:[{child:b(ee,{initData:a,config:{width:"100%",allowedContent:!0}})}]}]}],i=()=>{r(ue()),Ee.fire({title:"Template berhasil di update",icon:"success",background:t.colorScheme==="dark"?"#27272a":"white",color:t.colorScheme==="dark"?"white":"rgba(0,0,0,0.7)"})};return b(Se,{size:750,title:"Update Template",icon:H("Edit","MenuSize"),onSubmit:o.onSubmit(d=>i()),children:b(X,{GridArrayObject:s})})},Q=[{name:"Izin Edar - Renewal"},{name:"Vendor Agreement - Renewal"},{name:"Izin Edar - Done Renew"},{name:"Vendor Agreement - Done Renew"},{name:"Izin Edar - Expired"},{name:"Vendor Agreement - Expired"}],$e=()=>{const[e,t]=h.exports.useState(null),[r,n]=h.exports.useState(Q),a=ce(s=>s.darkMode.darkMode);function o(){var s;return[{GridCol:[he("Template",H("DocumentText","MenuSize")),{colspan:12,sx:{...q("CrudAction"),backgroundColor:a?w("sidebar-dark"):w("sidebar-light")},Button:[{disabled:!e,sx:{...(s=V("Button"))==null?void 0:s.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:H("Edit","ButtonSize"),label:"Update",CrudAction:e&&b(Ke,{selected:e})}]},{colspan:12,sx:{...V("ShadowSm"),padding:0,borderRadius:3},Box:[{child:b(me,{children:b(ye,{TableRoot:[{key:"manajement-akun-table",...pe,TableHeadRow:[{style:{...q("StickyTableHeader"),backgroundColor:a?w("sidebar-dark"):w("sidebar-light")},TableHeader:[{style:{position:"relative",padding:5},label:"No"},{style:{position:"relative",padding:0},label:be("Template Name",n,r,Q,"nama")}]}],TableBodyRow:r?r.length?r.map((i,d)=>({TableColumn:[{label:d+1},{label:i.name}],style:{backgroundColor:e===i?w("hover-bg-light"):""},selected(){t(i)}})):[{TableColumn:[{label:ge,colSpan:99}]}]:[{TableColumn:[{label:b(fe,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},ve()]}]}return b(X,{GridArrayObject:o()})};export{$e as default,Q as initialData};
