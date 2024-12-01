import{d as L,B as I,h as y,P as C,b as l,N as c,r as d,e as n,F as Y,Z as O,o as m,c as J,w as s,a2 as g,g as v,u as o,_ as j,i as q,a1 as G,a0 as _,t as k,aR as W,$ as Z,E as z,ay as K}from"./index-C-cPWdW8.js";import{u as f}from"./useHandleData-CHSngA42.js";import{I as Q,u as X}from"./index-D0cgU-ge.js";import{u as ee}from"./useAuthButtons-CreFVq5g.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_name_ProTable_lang-2tkCPdqN.js";import{_ as ae}from"./UserDrawer.vue_vue_type_script_setup_true_name_UserDrawer_lang-Dxjx0oIR.js";import{a as le,b as re,j as se,c as ne,d as x,r as ie,e as $,B as oe,h as ue,i as de}from"./user-w2AB0UMU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./sortable.esm-CGHLlJBv.js";import"./Imgs-21J6QI3b.js";import"./upload-CAhNjJZ8.js";const pe={class:"table-box"},ce=L({name:"useProTable"}),Le=L({...ce,setup(me){const U=I(),D=()=>{U.push(`/proTable/useProTable/detail/${Math.random().toFixed(3)}?params=detail-page`)},i=y(),S=C({type:1}),A=t=>({list:t.list,total:t.total}),h=t=>{let e=JSON.parse(JSON.stringify(t));return e.createTime&&(e.startTime=e.createTime[0]),e.createTime&&(e.endTime=e.createTime[1]),delete e.createTime,ne(e)},{BUTTONS:B}=ee(),V=C([{type:"selection",fixed:"left",width:70},{type:"sort",label:"Sort",width:80},{type:"expand",label:"Expand",width:85},{prop:"username",label:"用户姓名",search:{el:"input",tooltip:"我是搜索提示"},render:t=>l(d("el-button"),{type:"primary",link:!0,onClick:()=>c.success("我是通过 tsx 语法渲染的内容")},{default:()=>[t.row.username]})},{prop:"gender",label:"性别",enum:le,search:{el:"select",props:{filterable:!0}},fieldNames:{label:"genderLabel",value:"genderValue"}},{prop:"user.detail.age",label:"年龄",search:{render:({searchParam:t})=>l("div",{class:"flx-center"},[l(d("el-input"),{modelValue:t.minAge,modelModifiers:{trim:!0},"onUpdate:modelValue":e=>t.minAge=e,placeholder:"最小年龄"},null),l("span",{class:"mr10 ml10"},[n("-")]),l(d("el-input"),{modelValue:t.maxAge,modelModifiers:{trim:!0},"onUpdate:modelValue":e=>t.maxAge=e,placeholder:"最大年龄"},null)])}},{prop:"idCard",label:"身份证号",search:{el:"input"}},{prop:"email",label:"邮箱"},{prop:"address",label:"居住地址"},{prop:"status",label:"用户状态",enum:re,search:{el:"tree-select",props:{filterable:!0}},fieldNames:{label:"userLabel",value:"userStatus"},render:t=>l(Y,null,[B.value.status?l(d("el-switch"),{"model-value":t.row.status,"active-text":t.row.status?"启用":"禁用","active-value":1,"inactive-value":0,onClick:()=>M(t.row)},null):l(d("el-tag"),{type:t.row.status?"success":"danger"},{default:()=>[t.row.status?"启用":"禁用"]})])},{prop:"createTime",label:"创建时间",headerRender:t=>l(d("el-button"),{type:"primary",onClick:()=>c.success("我是通过 tsx 语法渲染的表头")},{default:()=>[t.column.label]}),width:180,search:{el:"date-picker",span:2,props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss"},defaultValue:["2022-11-12 11:35:00","2022-12-12 11:35:00"]}},{prop:"operation",label:"操作",fixed:"right",width:330}]),E=({newIndex:t,oldIndex:e})=>{var a;(a=i.value)==null||a.tableData,c.success("修改列表排序成功")},F=async t=>{var e;await f(x,{id:[t.id]},`删除【${t.username}】用户`),(e=i.value)==null||e.getTableList()},N=async t=>{var e,a;await f(x,{id:t},"删除所选用户信息"),(e=i.value)==null||e.clearSelection(),(a=i.value)==null||a.getTableList()},R=async t=>{var e;await f(ie,{id:t.id},`重置【${t.username}】用户密码`),(e=i.value)==null||e.getTableList()},M=async t=>{var e;await f(se,{id:t.id,status:t.status==1?0:1},`切换【${t.username}】用户状态`),(e=i.value)==null||e.getTableList()},P=async()=>{K.confirm("确认导出用户数据?","温馨提示",{type:"warning"}).then(()=>{var t;return X($,"用户列表",(t=i.value)==null?void 0:t.searchParam)})},w=y(null),H=()=>{var e,a;const t={title:"用户",tempApi:$,importApi:oe,getTableList:(e=i.value)==null?void 0:e.getTableList};(a=w.value)==null||a.acceptParams(t)},T=y(null),b=(t,e={})=>{var p,r;const a={title:t,isView:t==="查看",row:{...e},api:t==="新增"?ue:t==="编辑"?de:void 0,getTableList:(p=i.value)==null?void 0:p.getTableList};(r=T.value)==null||r.acceptParams(a)};return(t,e)=>{const a=d("el-button"),p=O("auth");return m(),J("div",pe,[l(te,{ref_key:"proTable",ref:i,columns:V,"request-api":h,"init-param":S,"data-callback":A,onDragSort:E},{tableHeader:s(r=>[g((m(),v(a,{type:"primary",icon:o(j),onClick:e[0]||(e[0]=u=>b("新增"))},{default:s(()=>e[3]||(e[3]=[n("新增用户")])),_:1},8,["icon"])),[[p,"add"]]),g((m(),v(a,{type:"primary",icon:o(q),plain:"",onClick:H},{default:s(()=>e[4]||(e[4]=[n("批量添加用户")])),_:1},8,["icon"])),[[p,"batchAdd"]]),g((m(),v(a,{type:"primary",icon:o(G),plain:"",onClick:P},{default:s(()=>e[5]||(e[5]=[n("导出用户数据")])),_:1},8,["icon"])),[[p,"export"]]),l(a,{type:"primary",plain:"",onClick:D},{default:s(()=>e[6]||(e[6]=[n("To 子集详情页面")])),_:1}),l(a,{type:"danger",icon:o(_),plain:"",disabled:!r.isSelected,onClick:u=>N(r.selectedListIds)},{default:s(()=>e[7]||(e[7]=[n(" 批量删除用户 ")])),_:2},1032,["icon","disabled","onClick"])]),expand:s(r=>[n(k(r.row),1)]),usernameHeader:s(r=>[l(a,{type:"primary",onClick:e[1]||(e[1]=u=>o(c).success("我是通过作用域插槽渲染的表头"))},{default:s(()=>[n(k(r.column.label),1)]),_:2},1024)]),createTime:s(r=>[l(a,{type:"primary",link:"",onClick:e[2]||(e[2]=u=>o(c).success("我是通过作用域插槽渲染的内容"))},{default:s(()=>[n(k(r.row.createTime),1)]),_:2},1024)]),operation:s(r=>[l(a,{type:"primary",link:"",icon:o(W),onClick:u=>b("查看",r.row)},{default:s(()=>e[8]||(e[8]=[n("查看")])),_:2},1032,["icon","onClick"]),l(a,{type:"primary",link:"",icon:o(Z),onClick:u=>b("编辑",r.row)},{default:s(()=>e[9]||(e[9]=[n("编辑")])),_:2},1032,["icon","onClick"]),l(a,{type:"primary",link:"",icon:o(z),onClick:u=>R(r.row)},{default:s(()=>e[10]||(e[10]=[n("重置密码")])),_:2},1032,["icon","onClick"]),l(a,{type:"primary",link:"",icon:o(_),onClick:u=>F(r.row)},{default:s(()=>e[11]||(e[11]=[n("删除")])),_:2},1032,["icon","onClick"])]),_:1},8,["columns","init-param"]),l(ae,{ref_key:"drawerRef",ref:T},null,512),l(Q,{ref_key:"dialogRef",ref:w},null,512)])}}});export{Le as default};
