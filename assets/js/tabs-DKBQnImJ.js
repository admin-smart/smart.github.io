import{ac as h,ad as r,ae as u,af as c}from"./index-C-cPWdW8.js";const o=h({id:"smart-keepAlive",state:()=>({keepAliveName:[]}),actions:{async addKeepAliveName(e){!this.keepAliveName.includes(e)&&this.keepAliveName.push(e)},async removeKeepAliveName(e){this.keepAliveName=this.keepAliveName.filter(t=>t!==e)},async setKeepAliveName(e=[]){this.keepAliveName=e}}}),n=o(),A=h({id:"smart-tabs",state:()=>({tabsMenuList:[]}),actions:{async addTabs(e){this.tabsMenuList.every(t=>t.path!==e.path)&&this.tabsMenuList.push(e),!n.keepAliveName.includes(e.name)&&e.isKeepAlive&&n.addKeepAliveName(e.path)},async removeTabs(e,t=!0){t&&this.tabsMenuList.forEach((a,i)=>{if(a.path!==e)return;const p=this.tabsMenuList[i+1]||this.tabsMenuList[i-1];p&&r.push(p.path)});const s=this.tabsMenuList.find(a=>a.path===e);s!=null&&s.isKeepAlive&&n.removeKeepAliveName(s.path),this.tabsMenuList=this.tabsMenuList.filter(a=>a.path!==e)},async closeTabsOnSide(e,t){const s=this.tabsMenuList.findIndex(i=>i.path===e);if(s!==-1){const i=t==="left"?[0,s]:[s+1,this.tabsMenuList.length];this.tabsMenuList=this.tabsMenuList.filter((p,l)=>l<i[0]||l>=i[1]||!p.close)}const a=this.tabsMenuList.filter(i=>i.isKeepAlive);n.setKeepAliveName(a.map(i=>i.path))},async closeMultipleTab(e){this.tabsMenuList=this.tabsMenuList.filter(s=>s.path===e||!s.close);const t=this.tabsMenuList.filter(s=>s.isKeepAlive);n.setKeepAliveName(t.map(s=>s.path))},async setTabs(e){this.tabsMenuList=e},async setTabsTitle(e){this.tabsMenuList.forEach(t=>{t.path==u()&&(t.title=e)})}},persist:c("smart-tabs")});export{o as a,A as u};
