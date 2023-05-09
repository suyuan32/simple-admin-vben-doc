import{_ as e,W as n,X as s,a1 as a}from"./framework-4a45a4a9.js";const i={},d=a(`<h1 id="测试服务器" tabindex="-1"><a class="header-anchor" href="#测试服务器" aria-hidden="true">#</a> 测试服务器</h1><p>在项目 <code>/test/server</code> 内有简单的 Node.js 测试后台接口服务，用 Koa2 实现</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token builtin class-name">cd</span> ./test/server

<span class="token comment"># 安装依赖</span>
<span class="token function">pnpm</span>

<span class="token comment"># 运行服务</span>
<span class="token function">pnpm</span> start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务运行成功之后，就可以访问测试上传接口及 websocket 接口服务</p>`,5),c=[d];function r(t,l){return n(),s("div",null,c)}const v=e(i,[["render",r],["__file","server.html.vue"]]);export{v as default};