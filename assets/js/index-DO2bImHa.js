import{d as _,P as U,r as a,o as w,c as C,b as l,w as t,a as S,e as i,N as A}from"./index-C-cPWdW8.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const O={class:"card content-box"},P=_({name:"basicForm"}),B=_({...P,setup(z){const o=U({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),f=()=>{A.success("提交的数据为 : "+JSON.stringify(o))};return(E,e)=>{const s=a("el-input"),d=a("el-form-item"),m=a("el-option"),c=a("el-select"),V=a("el-date-picker"),v=a("el-col"),y=a("el-time-picker"),b=a("el-switch"),u=a("el-checkbox"),x=a("el-checkbox-group"),r=a("el-radio"),k=a("el-radio-group"),p=a("el-button"),g=a("el-form");return w(),C("div",O,[l(g,{model:o,"label-width":"140px"},{default:t(()=>[l(d,{label:"Activity name :"},{default:t(()=>[l(s,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=n=>o.name=n)},null,8,["modelValue"])]),_:1}),l(d,{label:"Activity zone :"},{default:t(()=>[l(c,{modelValue:o.region,"onUpdate:modelValue":e[1]||(e[1]=n=>o.region=n),placeholder:"please select your zone"},{default:t(()=>[l(m,{label:"Zone one",value:"shanghai"}),l(m,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"Activity time :"},{default:t(()=>[l(V,{modelValue:o.date1,"onUpdate:modelValue":e[2]||(e[2]=n=>o.date1=n),type:"date",placeholder:"Pick a date"},null,8,["modelValue"]),l(v,{span:1,class:"text-center"},{default:t(()=>e[8]||(e[8]=[S("span",{class:"text-gray-500"},"-",-1)])),_:1}),l(y,{modelValue:o.date2,"onUpdate:modelValue":e[3]||(e[3]=n=>o.date2=n),placeholder:"Pick a time"},null,8,["modelValue"])]),_:1}),l(d,{label:"Instant delivery :"},{default:t(()=>[l(b,{modelValue:o.delivery,"onUpdate:modelValue":e[4]||(e[4]=n=>o.delivery=n)},null,8,["modelValue"])]),_:1}),l(d,{label:"Activity type :"},{default:t(()=>[l(x,{modelValue:o.type,"onUpdate:modelValue":e[5]||(e[5]=n=>o.type=n)},{default:t(()=>[l(u,{value:"Online activities",name:"type"},{default:t(()=>e[9]||(e[9]=[i(" Online activities ")])),_:1}),l(u,{value:"Promotion activities",name:"type"},{default:t(()=>e[10]||(e[10]=[i(" Promotion activities ")])),_:1}),l(u,{value:"Offline activities",name:"type"},{default:t(()=>e[11]||(e[11]=[i(" Offline activities ")])),_:1}),l(u,{value:"Simple brand exposure",name:"type"},{default:t(()=>e[12]||(e[12]=[i(" Simple brand exposure ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"Resources :"},{default:t(()=>[l(k,{modelValue:o.resource,"onUpdate:modelValue":e[6]||(e[6]=n=>o.resource=n)},{default:t(()=>[l(r,{value:"Sponsor"},{default:t(()=>e[13]||(e[13]=[i("Sponsor")])),_:1}),l(r,{value:"Venue"},{default:t(()=>e[14]||(e[14]=[i("Venue")])),_:1})]),_:1},8,["modelValue"])]),_:1}),l(d,{label:"Activity form :"},{default:t(()=>[l(s,{modelValue:o.desc,"onUpdate:modelValue":e[7]||(e[7]=n=>o.desc=n),type:"textarea"},null,8,["modelValue"])]),_:1}),l(d,null,{default:t(()=>[l(p,{type:"primary",onClick:f},{default:t(()=>e[15]||(e[15]=[i(" Create ")])),_:1}),l(p,null,{default:t(()=>e[16]||(e[16]=[i("Cancel")])),_:1})]),_:1})]),_:1},8,["model"])])}}}),j=N(B,[["__scopeId","data-v-f38e2c71"]]);export{j as default};
