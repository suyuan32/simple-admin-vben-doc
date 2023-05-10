import{_ as l,X as a,Y as s,Z as t,a0 as n,$ as o,a1 as i,a2 as r,F as c}from"./framework-13746272.js";const d={},h=r('<h1 id="跨域处理" tabindex="-1"><a class="header-anchor" href="#跨域处理" aria-hidden="true">#</a> 跨域处理</h1><h2 id="产生原因" tabindex="-1"><a class="header-anchor" href="#产生原因" aria-hidden="true">#</a> 产生原因</h2><p>跨域产生的原因是由于前端地址与后台接口不是同源，从而导致 ajax 不能发送</p><div class="hint-container tip"><p class="hint-container-title">非同源产生的问题</p><ol><li>Cookie、LocalStorage 和 IndexDB 无法获取</li><li>DOM 无法获得</li><li>AJAX 请求不能发送</li></ol></div><div class="hint-container tip"><p class="hint-container-title">同源条件</p><p><strong>协议</strong>，<strong>端口</strong>，<strong>主机</strong> 三者相同即为同源</p><p>反之，其中只要 <strong>某一个</strong> 不一样则为不同源</p></div><h2 id="解决方式" tabindex="-1"><a class="header-anchor" href="#解决方式" aria-hidden="true">#</a> 解决方式</h2><p><strong>本地开发跨域</strong></p><p>本地开发一般使用下面 3 种方式进行处理</p><ol><li>vite 的 proxy 进行代理</li><li>后台开启 cors</li><li>使用 nginx 转发请求</li></ol>',9),p=t("p",null,[t("strong",null,"生产环境跨域")],-1),u=t("p",null,"生产环境一般使用下面 2 种方式进行处理",-1),_=t("ol",null,[t("li",null,"后台开启 cors"),t("li",null,"使用 nginx 转发请求")],-1),g=t("p",null,[t("strong",null,"后台开启 cors 不需要前端做任何改动")],-1);function x(f,m){const e=c("RouterLink");return a(),s("div",null,[h,t("p",null,[n("项目内部自带第一种方式，具体可以参考"),o(e,{to:"/zh/guide/tutorial/guide/mock.html#%E9%85%8D%E7%BD%AE"},{default:i(()=>[n("服务端交互-本地开发环境接口地址修改")]),_:1})]),p,u,_,g,t("p",null,[n("nginx 配置文件可以查看"),o(e,{to:"/zh/guide/tutorial/guide/deploy.html#%E4%BD%BF%E7%94%A8-nginx-%E5%A4%84%E7%90%86%E8%B7%A8%E5%9F%9F"},{default:i(()=>[n("nginx 配置")]),_:1})])])}const v=l(d,[["render",x],["__file","cors.html.vue"]]);export{v as default};
