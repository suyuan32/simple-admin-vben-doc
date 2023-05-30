import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c,a as s,d as n,b as e,e as i}from"./app-b1dd07f2.js";const l={},r=s("h1",{id:"菜单",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#菜单","aria-hidden":"true"},"#"),n(" 菜单")],-1),u={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus",target:"_blank",rel:"noopener noreferrer"},d=i(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>菜单必须和路由匹配才能显示</p></div><h2 id="菜单项类型" tabindex="-1"><a class="header-anchor" href="#菜单项类型" aria-hidden="true">#</a> 菜单项类型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Menu</span> <span class="token punctuation">{</span>
  <span class="token comment">//  菜单名</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 菜单图标,如果没有，则会尝试使用route.meta.icon</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 菜单路径</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 是否禁用</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// 子菜单</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Menu<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token comment">// 菜单标签设置</span>
  tag<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 为true则显示小圆点</span>
    dot<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token comment">// 内容</span>
    content<span class="token operator">:</span> <span class="token builtin">string</span>&#39;<span class="token punctuation">;</span>
    <span class="token comment">// 类型</span>
    type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warn&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// 是否隐藏菜单</span>
  hideMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="菜单模块" tabindex="-1"><a class="header-anchor" href="#菜单模块" aria-hidden="true">#</a> 菜单模块</h2><p>一个菜单文件会被当作一个模块</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>children 的 path 字段不需要以<code>/</code>开头</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> MenuModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/router/types&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/hooks/web/useI18n&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> menu<span class="token operator">:</span> MenuModule <span class="token operator">=</span> <span class="token punctuation">{</span>
  orderNo<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  menu<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;routes.dashboard.dashboard&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    path<span class="token operator">:</span> <span class="token string">&quot;/dashboard&quot;</span><span class="token punctuation">,</span>

    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;analysis&quot;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;routes.dashboard.analysis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&quot;workbench&quot;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;routes.dashboard.workbench&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> menu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上模块会转化成以下结构</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">[</span>
  path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  children<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;dashboard/analysis&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      path<span class="token operator">:</span> <span class="token string">&#39;dashboard/workbench&#39;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新增菜单" tabindex="-1"><a class="header-anchor" href="#新增菜单" aria-hidden="true">#</a> 新增菜单</h2>`,10),k={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules",target:"_blank",rel:"noopener noreferrer"},m=s("h2",{id:"菜单排序",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#菜单排序","aria-hidden":"true"},"#"),n(" 菜单排序")],-1),b=s("p",null,[n("在菜单模块内，设置 "),s("code",null,"orderNo"),n(" 变量，数值越大，排序越靠后")],-1);function h(g,_){const a=p("ExternalLinkIcon");return o(),c("div",null,[r,s("p",null,[n("项目菜单配置存放于 "),s("a",u,[n("src/router/menus"),e(a)]),n(" 下面")]),d,s("p",null,[n("直接在 "),s("a",k,[n("src/router/routes/modules"),e(a)]),n(" 内新增一个模块文件即可。")]),s("p",null,[n("不需要手动引入，放在"),s("a",v,[n("src/router/routes/modules"),e(a)]),n(" 内的文件会自动被加载。")]),m,b])}const q=t(l,[["render",h],["__file","4-menu.html.vue"]]);export{q as default};
