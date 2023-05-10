import{_ as t}from"./report-64961180.js";import{_ as l,X as c,Y as p,Z as n,a0 as s,$ as e,a2 as i,F as o}from"./framework-13746272.js";const d={},r=n("h1",{id:"构建-部署",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#构建-部署","aria-hidden":"true"},"#"),s(" 构建&部署")],-1),u={class:"hint-container tip"},v=n("p",{class:"hint-container-title"},"前言",-1),m=n("p",null,"由于是展示项目，所以打包后相对较大，如果项目中没有用到的插件，可以删除对应的文件或者路由，不引用即可，没有引用就不会打包。",-1),b={href:"https://github.com/vbenjs/vben-admin-thin-next",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建" aria-hidden="true">#</a> 构建</h2><p>项目开发完成之后，执行以下命令进行构建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件</p><h3 id="旧版浏览器兼容" tabindex="-1"><a class="header-anchor" href="#旧版浏览器兼容" aria-hidden="true">#</a> 旧版浏览器兼容</h3><p>在 <strong>.env.production</strong> 内</p><p>设置 <code>VITE_LEGACY=true</code> 即可打包出兼容旧版浏览器的代码</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>VITE_LEGACY <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h3><p>发布之前可以在本地进行预览，有多种方式，这里介绍两种</p><p><strong>不能直接打开构建后的 html 文件</strong></p><ul><li>使用项目自定的命令进行预览(推荐)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 先打包在进行预览</span>
<span class="token function">pnpm</span> preview
<span class="token comment"># 直接预览本地 dist 文件目录</span>
<span class="token function">pnpm</span> preview:dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>本地服务器预览(通过 live-server)</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.全局安装live-server</span>
<span class="token function">pnpm</span> global <span class="token function">add</span> live-server
<span class="token comment"># 2. 进入打包的后目录</span>
<span class="token builtin class-name">cd</span> ./dist
<span class="token comment"># 本地预览，默认端口8080</span>
live-server
<span class="token comment"># 指定端口</span>
live-server <span class="token parameter variable">--port</span> <span class="token number">9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分析构建文件体积" tabindex="-1"><a class="header-anchor" href="#分析构建文件体积" aria-hidden="true">#</a> 分析构建文件体积</h3>`,16),k={href:"https://github.com/doesdev/rollup-plugin-analyzer",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> report

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>运行之后，在自动打开的页面可以看到具体的体积分布，以分析哪些依赖有问题。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>左上角可以切换 显示 gzip 或者 brotli</p></div><figure><img src="`+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><h3 id="开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#开启-gzip-压缩" aria-hidden="true">#</a> 开启 gzip 压缩</h3><p>开启 gzip，并配合 nginx 的 <code>gzip_static</code> 功能可以大大加快页面访问速度</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>只需开启 <code>VITE_BUILD_COMPRESS=&#39;gzip&#39;</code> 即可在打包的同时生成 .gz 文件</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据自己路径来配置更改</span>
<span class="token comment"># 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启-brotli-压缩" tabindex="-1"><a class="header-anchor" href="#开启-brotli-压缩" aria-hidden="true">#</a> 开启 brotli 压缩</h3><p>brotli 是比 gzip 压缩率更高的算法，可以与 gzip 共存不会冲突，需要 nginx 安装指定模块并开启即可。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>只需开启 <code>VITE_BUILD_COMPRESS=&#39;brotli&#39;</code> 即可在打包的同时生成 .br 文件</p></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据自己路径来配置更改</span>
<span class="token comment"># 例如部署在nginx /next/路径下  则VITE_PUBLIC_PATH=/next/</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同时开启-gzip-与-brotli" tabindex="-1"><a class="header-anchor" href="#同时开启-gzip-与-brotli" aria-hidden="true">#</a> 同时开启 gzip 与 brotli</h3><p>只需开启 <code>VITE_BUILD_COMPRESS=&#39;brotli,gzip&#39;</code> 即可在打包的同时生成 <code>.gz</code> 和 <code>.br</code> 文件。</p><h3 id="gzip-与-brotli-在-nginx-内的配置" tabindex="-1"><a class="header-anchor" href="#gzip-与-brotli-在-nginx-内的配置" aria-hidden="true">#</a> gzip 与 brotli 在 nginx 内的配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http <span class="token punctuation">{</span>
  <span class="token comment"># 开启gzip</span>
  <span class="token function">gzip</span> on<span class="token punctuation">;</span>
  <span class="token comment"># 开启gzip_static</span>
  <span class="token comment"># gzip_static 开启后可能会报错，需要安装相应的模块, 具体安装方式可以自行查询</span>
  <span class="token comment"># 只有这个开启，vue文件打包的.gz文件才会有效果，否则不需要开启gzip进行打包</span>
  gzip_static on<span class="token punctuation">;</span>
  gzip_proxied any<span class="token punctuation">;</span>
  gzip_min_length 1k<span class="token punctuation">;</span>
  gzip_buffers <span class="token number">4</span> 16k<span class="token punctuation">;</span>
  <span class="token comment">#如果nginx中使用了多层代理 必须设置这个才可以开启gzip。</span>
  gzip_http_version <span class="token number">1.0</span><span class="token punctuation">;</span>
  gzip_comp_level <span class="token number">2</span><span class="token punctuation">;</span>
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png<span class="token punctuation">;</span>
  gzip_vary off<span class="token punctuation">;</span>
  gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>

  <span class="token comment"># 开启 brotli压缩</span>
  <span class="token comment"># 需要安装对应的nginx模块,具体安装方式可以自行查询</span>
  <span class="token comment"># 可以与gzip共存不会冲突</span>
  brotli on<span class="token punctuation">;</span>
  brotli_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
  brotli_buffers <span class="token number">16</span> 8k<span class="token punctuation">;</span>
  brotli_min_length <span class="token number">20</span><span class="token punctuation">;</span>
  brotli_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><div class="hint-container danger"><p class="hint-container-title">注意</p><p>项目默认是在生产环境开启 Mock，这样做非常不好，只是为了演示环境有数据，不建议在生产环境使用 Mock，而应该使用真实的后台接口，并将 Mock 关闭。</p></div><h3 id="发布" tabindex="-1"><a class="header-anchor" href="#发布" aria-hidden="true">#</a> 发布</h3><p>简单的部署只需要将最终生成的静态文件，dist 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 index.html 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。</p><p>例如上传到 nginx</p><p><code>/srv/www/project/index.html</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># nginx配置</span>
location / <span class="token punctuation">{</span>
  <span class="token comment"># 不缓存html，防止程序更新后缓存继续生效</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_filename</span> ~* .*<span class="token punctuation">\\</span>.<span class="token punctuation">(</span>?:htm<span class="token operator">|</span>html<span class="token punctuation">)</span>$<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    add_header Cache-Control <span class="token string">&quot;private, no-store, no-cache, must-revalidate, proxy-revalidate&quot;</span><span class="token punctuation">;</span>
    access_log on<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment"># 这里是vue打包文件dist内的文件的存放路径</span>
  root   /srv/www/project/<span class="token punctuation">;</span>
  index  index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>部署时可能会发现资源路径不对，只需要修改<code>.env.production</code>文件即可。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 根据自己路径来配置更改</span>
<span class="token comment"># 注意需要以 / 开头和结尾</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/xxx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="前端路由与服务端的结合" tabindex="-1"><a class="header-anchor" href="#前端路由与服务端的结合" aria-hidden="true">#</a> 前端路由与服务端的结合</h3><p>项目前端路由使用的是 vue-router，所以你可以选择两种方式：history 和 hash。</p><ul><li><strong>hash</strong> 默认会在 url 后面拼接<code>#</code></li><li><strong>history</strong> 则不会，不过 <code>history</code> 需要服务器配合</li></ul>`,29),_={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/index.ts",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  createRouter<span class="token punctuation">,</span>
  createWebHashHistory<span class="token punctuation">,</span>
  createWebHistory<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-router&quot;</span><span class="token punctuation">;</span>

<span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token comment">// or</span>
  history<span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="history-路由模式下服务端配置" tabindex="-1"><a class="header-anchor" href="#history-路由模式下服务端配置" aria-hidden="true">#</a> history 路由模式下服务端配置</h3>`,2),f={href:"https://next.router.vuejs.org/guide/essentials/history-mode.html#html5-mode",target:"_blank",rel:"noopener noreferrer"},y=i(`<p>这里以 nginx 配置为例</p><p><strong>部署到根目录</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  location / <span class="token punctuation">{</span>
    <span class="token comment"># 用于配合 History 使用</span>
    try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>部署到非根目录</strong></p><ol><li>首先需要在打包的时候更改配置</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在.env.production内，配置子目录路径</span>
VITE_PUBLIC_PATH <span class="token operator">=</span> /sub/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>
    location /sub/ <span class="token punctuation">{</span>
      <span class="token comment"># 这里是vue打包文件dist内的文件的存放路径</span>
      <span class="token builtin class-name">alias</span>   /srv/www/project/<span class="token punctuation">;</span>
      index index.html index.htm<span class="token punctuation">;</span>
      try_files <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /sub/index.html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-nginx-处理跨域" tabindex="-1"><a class="header-anchor" href="#使用-nginx-处理跨域" aria-hidden="true">#</a> 使用 nginx 处理跨域</h3><p>使用 nginx 处理项目部署后的跨域问题</p><ol><li>配置前端项目接口地址</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在.env.production内，配置接口地址</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 nginx 配置请求转发到后台</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen       <span class="token number">8080</span><span class="token punctuation">;</span>
  server_name  localhost<span class="token punctuation">;</span>
  <span class="token comment"># 接口代理，用于解决跨域问题</span>
  location /api <span class="token punctuation">{</span>
    proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    <span class="token comment"># 后台接口地址</span>
    proxy_pass http://110.110.1.1:8080/api<span class="token punctuation">;</span>
    proxy_redirect default<span class="token punctuation">;</span>
    add_header Access-Control-Allow-Origin *<span class="token punctuation">;</span>
    add_header Access-Control-Allow-Headers X-Requested-With<span class="token punctuation">;</span>
    add_header Access-Control-Allow-Methods GET,POST,OPTIONS<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function z(I,T){const a=o("ExternalLinkIcon");return c(),p("div",null,[r,n("div",u,[v,m,n("p",null,[s("当然，你也可以使用精简版 "),n("a",b,[s("vue-vben-admin-thin"),e(a)]),s(" 进行开发。")])]),h,n("p",null,[s("如果你的构建文件很大，可以通过项目内置 "),n("a",k,[s("rollup-plugin-analyzer"),e(a)]),s(" 插件进行代码体积分析，从而优化你的代码。")]),g,n("p",null,[s("可在 "),n("a",_,[s("src/router/index.ts"),e(a)]),s(" 内进行 mode 修改")]),x,n("p",null,[s("开启 history 模式需要服务器配置，更多的服务器配置详情可以看 "),n("a",f,[s("history-mode"),e(a)])]),y])}const w=l(d,[["render",z],["__file","10-deploy.html.vue"]]);export{w as default};
