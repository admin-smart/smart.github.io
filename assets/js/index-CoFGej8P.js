import{d as A,h as p,ag as F,S as v,r as s,o as V,c as C,t as N,W as O,a as T,b as a,w as d,e as y,u as P,ah as R,ab as I,z as K,M as U}from"./index-C-cPWdW8.js";import{_ as W}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={class:"card filter"},G={key:0,class:"title sle"},H={class:"search"},J={class:"el-tree-node__label"},L=A({name:"TreeFilter"}),Q=A({...L,props:{requestApi:{},data:{},title:{},id:{default:"id"},label:{default:"label"},multiple:{type:Boolean,default:!1},defaultValue:{}},emits:["change"],setup(x,{expose:B,emit:M}){const l=x,S={children:"children",label:l.label},i=p(),f=p([]),m=p([]),h=p(),b=()=>{l.multiple?h.value=Array.isArray(l.defaultValue)?l.defaultValue:[l.defaultValue]:h.value=typeof l.defaultValue=="string"?l.defaultValue:""};F(async()=>{if(b(),l.requestApi){const{data:e}=await l.requestApi();f.value=e,m.value=[{id:"",[l.label]:"全部"},...e]}}),v(()=>l.defaultValue,()=>U(()=>b()),{deep:!0,immediate:!0}),v(()=>l.data,()=>{var e;(e=l.data)!=null&&e.length&&(f.value=l.data,m.value=[{id:"",[l.label]:"全部"},...l.data])},{deep:!0,immediate:!0});const _=p("");v(_,e=>{i.value.filter(e)});const q=(e,t,o)=>{if(!e)return!0;let n=o.parent,u=[o.label],c=1;for(;c<o.level;)u=[...u,n.label],n=n.parent,c++;return u.some(k=>k.indexOf(e)!==-1)},g=e=>{var o;let t=(o=i.value)==null?void 0:o.store.nodesMap;if(t)for(const n in t)t.hasOwnProperty(n)&&(t[n].expanded=e)},w=M,z=e=>{l.multiple||w("change",e[l.id])},D=()=>{var e;w("change",(e=i.value)==null?void 0:e.getCheckedKeys())};return B({treeData:f,treeAllData:m,treeRef:i}),(e,t)=>{const o=s("el-input"),n=s("More"),u=s("el-icon"),c=s("el-dropdown-item"),k=s("el-dropdown-menu"),$=s("el-dropdown"),E=s("el-scrollbar");return V(),C("div",j,[e.title?(V(),C("h4",G,N(e.title),1)):O("",!0),T("div",H,[a(o,{modelValue:_.value,"onUpdate:modelValue":t[0]||(t[0]=r=>_.value=r),placeholder:"输入关键字进行过滤",clearable:""},null,8,["modelValue"]),a($,{trigger:"click"},{dropdown:d(()=>[a(k,null,{default:d(()=>[a(c,{onClick:t[1]||(t[1]=r=>g(!0))},{default:d(()=>t[3]||(t[3]=[y("展开全部")])),_:1}),a(c,{onClick:t[2]||(t[2]=r=>g(!1))},{default:d(()=>t[4]||(t[4]=[y("折叠全部")])),_:1})]),_:1})]),default:d(()=>[a(u,{size:"20"},{default:d(()=>[a(n)]),_:1})]),_:1})]),a(E,{style:K({height:e.title?"calc(100% - 95px)":"calc(100% - 56px)"})},{default:d(()=>[a(P(R),{ref_key:"treeRef",ref:i,"default-expand-all":"","node-key":e.id,data:e.multiple?f.value:m.value,"show-checkbox":e.multiple,"check-strictly":!1,"current-node-key":e.multiple?"":h.value,"highlight-current":!e.multiple,"expand-on-click-node":!1,"check-on-click-node":e.multiple,props:S,"filter-node-method":q,"default-checked-keys":e.multiple?h.value:[],onNodeClick:z,onCheck:D},{default:d(r=>[T("span",J,[I(e.$slots,"default",{row:r},()=>[y(N(r.node.label),1)],!0)])]),_:3},8,["node-key","data","show-checkbox","current-node-key","highlight-current","check-on-click-node","default-checked-keys"])]),_:3},8,["style"])])}}}),Z=W(Q,[["__scopeId","data-v-b844d4d8"]]);export{Z as T};
