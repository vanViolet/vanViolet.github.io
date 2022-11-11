import{c as h,S as v,A as I,T as l,_ as L,F as w}from"./TableSortHeader.55930a8c.js";import{n as M,e as f,K as B,N as d,O as N,Q as P,i as s,c as m,j as t,Z as y,M as A,I as z,r as C,u as G,h as b,k as D,L as E}from"./index.0802afcc.js";import{S as g}from"./sweetalert2.all.f219d456.js";import{T as R}from"./Title.5e9cb9c3.js";import{M as j}from"./MyDialog.9e72cbd4.js";const x=({selected:a})=>{const u=M(),n=f(),o=B().shape({nama:d().min(2,"Nama tidak boleh kurang dari 2 karakter"),email:d().required("Email wajib diisi").email("Harus berupa email yang valid"),username:d().min(4,"Username tidak boleh kurang dari 4 karakter"),password:d().min(6,"Password tidak boleh kurang dari 6 karakter")}),i=N({validateInputOnChange:!0,initialValues:{nama:(a==null?void 0:a.nama)||"",inisial:(a==null?void 0:a.inisial)||"",email:(a==null?void 0:a.email)||"",position:(a==null?void 0:a.position)||"",username:(a==null?void 0:a.username)||"",password:(a==null?void 0:a.password)||"",department:(a==null?void 0:a.department)||"LNC",kategori:(a==null?void 0:a.kategori)||""},validate:P(o)}),c=[{GridCol:[{colspan:6,TextInput:[{label:"Nama",getValue:{...i.getInputProps("nama")},requireSymbol:!0}]},{colspan:6,TextInput:[{label:"Inisial",getValue:{...i.getInputProps("inisial")}}]},{colspan:12,TextInput:[{requireSymbol:!0,icon:s("At","ButtonSize"),label:"Email",getValue:i.getInputProps("email")}]},{sx:{...m("FlexItemCenter"),justifyContent:"space-between"},colspan:12,Box:[{child:t(y,{value:(a==null?void 0:a.department)||"",label:"Department",data:[{value:"LNC",label:"LNC"},{value:"SCM",label:"SCM"},{value:"FIN",label:"FIN"},{value:"HRGA",label:"HRGA"},{value:"CCIT",label:"CCIT"},{value:"MKT",label:"MKT"},{value:"SLS",label:"SLS"},{value:"SINE FINANCE",label:"SINE FINANCE"},{value:"LGL",label:"LGL"}],...i.getInputProps("department")})},{child:t(y,{value:(a==null?void 0:a.kategori)||"",label:"Kategori",data:[{value:"RA",label:"RA"},{value:"MKT",label:"MKT"},{value:"LGL",label:"LGL"},{value:"SCM",label:"SCM"},{value:"PJT",label:"PJT"}],...i.getInputProps("kategori")})}]},{colspan:12,TextInput:[{label:"Position",getValue:{...i.getInputProps("position")}}]},{colspan:12,TextInput:[{icon:s("UserCircle","ButtonSize"),label:"Username",requireSymbol:!0,getValue:{...i.getInputProps("username")}}]},{colspan:12,PasswordInput:[{icon:s("Key","ButtonSize"),label:"Password",getValue:{...i.getInputProps("password")}}]},{colspan:12,AutoComplete:[{label:"Level User",data:[]}]}]}],p=()=>{n(z()),a?g.fire({title:"Akun berhasil diupdate",icon:"success",background:u.colorScheme==="dark"?"#27272a":"white",color:u.colorScheme==="dark"?"white":"rgba(0,0,0,0.7)"}):g.fire({title:"Akun berhasil dibuat",icon:"success",background:u.colorScheme==="dark"?"#27272a":"white",color:u.colorScheme==="dark"?"white":"rgba(0,0,0,0.7)"})};return t(j,{size:"lg",title:a?"Update Akun":"Tambah Akun",icon:s(a?"Edit":"Plus","MenuSize"),onSubmit:i.onSubmit(k=>p()),children:t(A,{GridArrayObject:c})})},r=[{nama:"Bianca Loranza",inisial:"BLZ",email:"loranza.bianca@sysmex.co.id",department:"LNC",position:"Assistant Manager, RA",kategori:"RA",username:"BiancaLoranza",password:"Bianca123"},{nama:"Andriani Dwi",inisial:"ADI",email:"andriani.dwi@sysmex.co.id",department:"CCIT",position:"Manager",kategori:"RA",username:"AndrianiDwi",password:"Andriani"},{nama:"Vonny Lidya",inisial:"VNY",email:"vonny.lidya@sysmex.co.id",department:"FIN",position:"Assistant Manager",kategori:"PJT",username:"VonnyLidya",password:"Lidya1800"},{nama:"Susanti Yossi",inisial:"SYI",email:"susanti.yossi@sysmex.co.id",department:"SCM",position:"Assistant Manager",kategori:"SCM",username:"SustiYossi",password:"Yossi253"}],Y=()=>{const[a,u]=C.exports.useState(null),[n,o]=C.exports.useState(r),i=G(p=>p.darkMode.darkMode);function c(){var p,k,S;return[{GridCol:[R("Manajemen Akun",s("Users","MenuSize")),{colspan:12,sx:{...h("CrudAction"),backgroundColor:i?b("sidebar-dark"):b("sidebar-light")},Button:[{sx:{...(p=m("Button"))==null?void 0:p.success,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:s("Plus","ButtonSize"),label:"Add",CrudAction:t(x,{})},{disabled:!a,sx:{...(k=m("Button"))==null?void 0:k.info,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:s("Edit","ButtonSize"),label:"Update",CrudAction:a&&t(x,{selected:a})},{disabled:!a,sx:{...(S=m("Button"))==null?void 0:S.danger,marginLeft:10,"&[data-disabled]":{boxShadow:"0px 0px 0px rgba(0,0,0,0)"}},icon:s("Trash","ButtonSize"),label:"Delete",onClick(){g.fire({title:"Apakah anda yakin ingin menghapus akun ini?",showDenyButton:!0,confirmButtonText:"Ya, hapus!",denyButtonText:"Tidak",icon:"warning",background:i?"#27272a":"white",color:i?"white":"rgba(0,0,0,0.7)"}).then(e=>{e.isConfirmed&&g.fire({title:"Akun berhasil dihapus",icon:"success",background:i?"#27272a":"white",color:i?"white":"rgba(0,0,0,0.7)"})})}}]},{colspan:12,sx:{...m("ShadowSm"),padding:0,borderRadius:3},Box:[{child:t(v,{children:t(I,{TableRoot:[{key:"manajement-akun-table",...D,TableHeadRow:[{style:{...h("StickyTableHeader"),backgroundColor:i?b("sidebar-dark"):b("sidebar-light")},TableHeader:[{style:{position:"relative",padding:5},label:"No"},{style:{position:"relative",padding:0},label:l("Nama",o,n,r,"nama")},{style:{position:"relative",padding:0},label:l("Inisial",o,n,r,"inisial")},{style:{position:"relative",padding:0},label:l("Email",o,n,r,"email")},{style:{position:"relative",padding:0},label:l("Department",o,n,r,"department")},{style:{position:"relative",padding:0},label:l("Position",o,n,r,"position")},{style:{position:"relative",padding:0},label:l("Kategori",o,n,r,"kategori")},{style:{position:"relative",padding:0},label:l("Username",o,n,r,"username")},{style:{position:"relative",padding:0},label:l("Password",o,n,r,"password")}]}],TableBodyRow:n?n.length?n.map((e,T)=>({TableColumn:[{label:T+1},{label:e.nama},{label:e.inisial},{label:e.email},{label:e.department},{label:e.position},{label:e.kategori},{label:e.username},{label:e.password}],style:{backgroundColor:a===e?b("hover-bg-light"):""},selected(){u(e)}})):[{TableColumn:[{label:L,colSpan:99}]}]:[{TableColumn:[{label:t(E,{size:"xl",variant:"bars",m:20}),colSpan:99,align:"center"}]}]}]})})}]},w()]}]}return t(A,{GridArrayObject:c()})};export{Y as default,r as initialData};
