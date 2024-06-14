import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B4-XZcQ1.js";const l={},t=n(`<h1 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单"><span>菜单</span></a></h1><p>项目菜单配置存放于 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus" target="_blank" rel="noopener noreferrer">src/router/menus</a> 下面</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>菜单必须和路由匹配才能显示</p></div><h2 id="菜单项类型" tabindex="-1"><a class="header-anchor" href="#菜单项类型"><span>菜单项类型</span></a></h2><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Menu</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  //  菜单名</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 菜单图标,如果没有，则会尝试使用route.meta.icon</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  icon</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 菜单路径</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  path</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 是否禁用</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  disabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 子菜单</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  children</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Menu</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[];</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 菜单标签设置</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  tag</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 为true则显示小圆点</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">    dot</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 内容</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">    content</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">    type</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;error&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;primary&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;warn&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;success&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  };</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 是否隐藏菜单</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  hideMenu</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="菜单模块" tabindex="-1"><a class="header-anchor" href="#菜单模块"><span>菜单模块</span></a></h2><p>一个菜单文件会被当作一个模块</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>children 的 path 字段不需要以<code>/</code>开头</p></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">MenuModule</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/@/router/types&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/@/hooks/web/useI18n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> menu</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> MenuModule</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  orderNo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  menu</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;routes.dashboard.dashboard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/dashboard&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    children</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;analysis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;routes.dashboard.analysis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;workbench&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;routes.dashboard.workbench&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> menu</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上模块会转化成以下结构</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/dashboard&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;routes.dashboard.dashboard&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  children</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;dashboard/analysis&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;routes.dashboard.analysis&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;dashboard/workbench&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">t</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;routes.dashboard.workbench&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新增菜单" tabindex="-1"><a class="header-anchor" href="#新增菜单"><span>新增菜单</span></a></h2><p>直接在 <a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> 内新增一个模块文件即可。</p><p>不需要手动引入，放在<a href="https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a> 内的文件会自动被加载。</p><h2 id="菜单排序" tabindex="-1"><a class="header-anchor" href="#菜单排序"><span>菜单排序</span></a></h2><p>在菜单模块内，设置 <code>orderNo</code> 变量，数值越大，排序越靠后</p>`,16),e=[t];function h(k,p){return a(),i("div",null,e)}const B=s(l,[["render",h],["__file","4-menu.html.vue"]]),g=JSON.parse(`{"path":"/zh/guide/tutorial/Basic/4-menu.html","title":"菜单","lang":"zh-CN","frontmatter":{"title":"菜单","order":4,"author":"Ryan SU","description":"菜单 项目菜单配置存放于 src/router/menus 下面 提示 菜单必须和路由匹配才能显示 菜单项类型 菜单模块 一个菜单文件会被当作一个模块 提示 children 的 path 字段不需要以/开头 以上模块会转化成以下结构 新增菜单 直接在 src/router/routes/modules 内新增一个模块文件即可。 不需要手动引入，放在s...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://vben.ryansu.tech/guide/tutorial/Basic/4-menu.html"}],["meta",{"property":"og:url","content":"https://vben.ryansu.tech/zh/guide/tutorial/Basic/4-menu.html"}],["meta",{"property":"og:site_name","content":"Simple Admin Vben UI"}],["meta",{"property":"og:title","content":"菜单"}],["meta",{"property":"og:description","content":"菜单 项目菜单配置存放于 src/router/menus 下面 提示 菜单必须和路由匹配才能显示 菜单项类型 菜单模块 一个菜单文件会被当作一个模块 提示 children 的 path 字段不需要以/开头 以上模块会转化成以下结构 新增菜单 直接在 src/router/routes/modules 内新增一个模块文件即可。 不需要手动引入，放在s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-05-09T00:16:17.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-05-09T00:16:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"菜单\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-09T00:16:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\"}]}"]]},"headers":[{"level":2,"title":"菜单项类型","slug":"菜单项类型","link":"#菜单项类型","children":[]},{"level":2,"title":"菜单模块","slug":"菜单模块","link":"#菜单模块","children":[]},{"level":2,"title":"新增菜单","slug":"新增菜单","link":"#新增菜单","children":[]},{"level":2,"title":"菜单排序","slug":"菜单排序","link":"#菜单排序","children":[]}],"git":{"createdTime":1683559583000,"updatedTime":1683591377000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":1}]},"readingTime":{"minutes":1.01,"words":304},"filePathRelative":"zh/guide/tutorial/Basic/4-menu.md","localizedDate":"2023年5月8日","autoDesc":true,"excerpt":"\\n<p>项目菜单配置存放于 <a href=\\"https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">src/router/menus</a> 下面</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>菜单必须和路由匹配才能显示</p>\\n</div>\\n<h2>菜单项类型</h2>\\n<div class=\\"language-ts line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"ts\\" data-title=\\"ts\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> interface</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\"> Menu</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  //  菜单名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  name</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> string</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 菜单图标,如果没有，则会尝试使用route.meta.icon</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  icon</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> string</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 菜单路径</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  path</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> string</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 是否禁用</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  disabled</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> boolean</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 子菜单</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  children</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#E5C07B\\"> Menu</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">[];</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 菜单标签设置</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  tag</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 为true则显示小圆点</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">    dot</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> boolean</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 内容</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">    content</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> string</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">'</span><span style=\\"--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 类型</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">    type</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 'error'</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\"> |</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 'primary'</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\"> |</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 'warn'</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\"> |</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 'success'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  };</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 是否隐藏菜单</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75\\">  hideMenu</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">?</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\">:</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#E5C07B\\"> boolean</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{B as comp,g as data};
