import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c,a as s,d as n,b as e,e as t}from"./app-c7502ac8.js";const i={},r=s("h1",{id:"项目配置项",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#项目配置项","aria-hidden":"true"},"#"),n(" 项目配置项")],-1),u=s("p",null,"用于修改项目的配色、布局、缓存、多语言、组件默认配置",-1),d=s("h2",{id:"环境变量配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#环境变量配置","aria-hidden":"true"},"#"),n(" 环境变量配置")],-1),k={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/.env",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/.env.development",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/.env.production",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/vitejs/vite#modes-and-environment-variables",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.env                <span class="token comment"># 在所有的环境中被载入</span>
.env.local          <span class="token comment"># 在所有的环境中被载入，但会被 git 忽略</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># 只在指定的模式中被载入</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># 只在指定的模式中被载入，但会被 git 忽略</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">温馨提醒</p><ul><li>只有以 <code>VITE_ </code> 开头的变量会被嵌入到客户端侧的包中，你可以项目代码中这样访问它们：</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PROT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>以 <code>VITE_GLOB_*</code> 开头的的变量，在打包的时候，会被加入<a href="#%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%8A%A8%E6%80%81%E9%85%8D%E7%BD%AE">_app.config.js</a>配置文件当中.</li></ul></div><h3 id="配置项说明" tabindex="-1"><a class="header-anchor" href="#配置项说明" aria-hidden="true">#</a> 配置项说明</h3><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3><p>所有环境适用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 网站标题</span>
<span class="token assign-left variable">VITE_GLOB_APP_TITLE</span><span class="token operator">=</span>vben admin
<span class="token comment"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span>
<span class="token assign-left variable">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">=</span>vben_admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3><p>开发环境适用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 是否开启mock数据，关闭时需要自行对接后台接口</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># 资源公共路径,需要以 /开头和结尾</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># 是否删除Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>false
<span class="token comment"># 接口地址</span>
<span class="token comment"># 如果没有跨域问题，直接在这里配置即可</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># 文件上传接口  可选</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这里配置的 <code>VITE_GLOB_API_URL</code> /api 需要是唯一的，不要和 proxy 接口有的名字冲突</p><p>如果你的接口是 <code>http://localhost:3000/api</code> 之类的，请考虑将 <code>VITE_GLOB_API_URL=/xxxx</code> 换成别的名字</p></div><h3 id="env-production" tabindex="-1"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h3><p>生产环境适用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 是否开启mock</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># 接口地址 可以由nginx做转发或者直接写实际地址</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># 文件上传地址 可以由nginx做转发或者直接写实际地址</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
<span class="token comment"># 是否删除Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>true
<span class="token comment"># 资源公共路径,需要以 / 开头和结尾</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># 打包是否输出gz｜br文件</span>
<span class="token comment"># 可选: gzip | brotli | none</span>
<span class="token comment"># 也可以有多个, 例如 ‘gzip’|&#39;brotli&#39;,这样会同时生成 .gz和.br文件</span>
VITE_BUILD_COMPRESS <span class="token operator">=</span> <span class="token string">&#39;gzip&#39;</span>
<span class="token comment"># 打包是否压缩图片</span>
VITE_USE_IMAGEMIN <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment"># 打包是否开启pwa功能</span>
VITE_USE_PWA <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment"># 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本</span>
VITE_LEGACY <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地-proxy-配置" tabindex="-1"><a class="header-anchor" href="#本地-proxy-配置" aria-hidden="true">#</a> 本地 Proxy 配置</h2><p><code>vite.config.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineApplicationConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vben/vite-config&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineApplicationConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  overrides<span class="token operator">:</span> <span class="token punctuation">{</span>
    optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>
      include<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;echarts/core&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;echarts/charts&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;echarts/components&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;echarts/renderers&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;qrcode&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@iconify/iconify&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ant-design-vue/es/locale/zh_CN&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;ant-design-vue/es/locale/en_US&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    server<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 添加自己的api proxy 用于匹配</span>
      proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;/sys-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&quot;http://192.168.50.204:9100&quot;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/sys-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token comment">// only https</span>
          <span class="token comment">// secure: false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/fms-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&quot;http://192.168.50.204:9102&quot;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/fms-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;/mms-api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          target<span class="token operator">:</span> <span class="token string">&quot;http://localhost:9104&quot;</span><span class="token punctuation">,</span>
          changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          ws<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">^/mms-api</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生产环境动态配置" tabindex="-1"><a class="header-anchor" href="#生产环境动态配置" aria-hidden="true">#</a> 生产环境动态配置</h2><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明</h3><p>当执行<code>pnpm build</code>构建项目之后，会自动生成 <code>_app.config.js</code> 文件并插入 <code>index.html</code>。</p><p><strong>注意: 开发环境不会生成</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// _app.config.js</span>
<span class="token comment">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span>
window<span class="token punctuation">.</span>__PRODUCTION__VUE_VBEN_ADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">&quot;vben admin&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">&quot;vue_vben_admin&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">&quot;/app&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">&quot;/upload&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><p><code>_app.config.js</code> 用于项目在打包后，需要动态修改配置的需求，如接口地址。不用重新进行打包，可在打包后修改 <code>/dist/_app.config.js</code> 内的变量，刷新即可更新代码内的局部变量。</p><h3 id="如何获取全局变量" tabindex="-1"><a class="header-anchor" href="#如何获取全局变量" aria-hidden="true">#</a> 如何获取全局变量</h3>`,24),h=s("code",null,"_app.config.js",-1),_={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts",target:"_blank",rel:"noopener noreferrer"},y=s("h3",{id:"如何新增-新增一个可动态修改的配置项",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#如何新增-新增一个可动态修改的配置项","aria-hidden":"true"},"#"),n(" 如何新增(新增一个可动态修改的配置项)")],-1),f=t("<li><p>首先在 <code>.env</code> 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 <code>VITE_GLOB_</code>开头</p></li><li><p><code>VITE_GLOB_</code> 开头的变量会自动加入环境变量，通过在 <code>src/types/config.d.ts</code> 内修改 <code>GlobEnvConfig</code> 和 <code>GlobConfig</code> 两个环境变量的值来定义新添加的类型</p></li>",2),q={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts",target:"_blank",rel:"noopener noreferrer"},E=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">ENV</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useGlobSetting <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">SettingWrap</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Take global configuration</span>
  <span class="token keyword">const</span> <span class="token literal-property property">glob</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token punctuation">,</span>
    <span class="token literal-property property">apiUrl</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL</span><span class="token punctuation">,</span>
    <span class="token literal-property property">shortName</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token punctuation">,</span>
    <span class="token literal-property property">urlPrefix</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token punctuation">,</span>
    <span class="token literal-property property">uploadUrl</span><span class="token operator">:</span> <span class="token constant">VITE_GLOB_UPLOAD_URL</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> glob <span class="token keyword">as</span> Readonly<span class="token operator">&lt;</span>GlobConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>项目配置文件用于配置项目内展示的内容、布局、文本等效果，存于<code>localStorage</code>中。如果更改了项目配置，需要手动<strong>清空</strong> <code>localStorage</code> 缓存，刷新重新登录后方可生效。</p></div><h3 id="配置文件路径" tabindex="-1"><a class="header-anchor" href="#配置文件路径" aria-hidden="true">#</a> 配置文件路径</h3>`,4),x={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts",target:"_blank",rel:"noopener noreferrer"},L=t(`<h3 id="说明-1" tabindex="-1"><a class="header-anchor" href="#说明-1" aria-hidden="true">#</a> 说明</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ! 改动后需要清空浏览器缓存</span>
<span class="token keyword">const</span> <span class="token literal-property property">setting</span><span class="token operator">:</span> ProjectConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 是否显示SettingButton</span>
  <span class="token literal-property property">showSettingButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 是否显示主题切换按钮</span>
  <span class="token literal-property property">showDarkModeToggle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 设置按钮位置 可选项</span>
  <span class="token comment">// SettingButtonPositionEnum.AUTO: 自动选择</span>
  <span class="token comment">// SettingButtonPositionEnum.HEADER: 位于头部</span>
  <span class="token comment">// SettingButtonPositionEnum.FIXED: 固定在右侧</span>
  <span class="token literal-property property">settingButtonPosition</span><span class="token operator">:</span> SettingButtonPositionEnum<span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">,</span>

  <span class="token comment">// 权限模式,默认前端角色权限模式</span>
  <span class="token comment">// ROUTE_MAPPING: 前端模式（菜单由路由生成，默认）</span>
  <span class="token comment">// ROLE：前端模式（菜单路由分开）</span>
  <span class="token literal-property property">permissionMode</span><span class="token operator">:</span> PermissionModeEnum<span class="token punctuation">.</span><span class="token constant">ROUTE_MAPPING</span><span class="token punctuation">,</span>
  <span class="token comment">// 权限缓存存放位置。默认存放于localStorage</span>
  <span class="token literal-property property">permissionCacheType</span><span class="token operator">:</span> CacheTypeEnum<span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">,</span>
  <span class="token comment">// 会话超时处理方案</span>
  <span class="token comment">// SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页</span>
  <span class="token comment">// SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录弹窗，覆盖当前页面</span>
  <span class="token literal-property property">sessionTimeoutProcessing</span><span class="token operator">:</span> SessionTimeoutProcessingEnum<span class="token punctuation">.</span><span class="token constant">ROUTE_JUMP</span><span class="token punctuation">,</span>
  <span class="token comment">// 项目主题色</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> primaryColor<span class="token punctuation">,</span>
  <span class="token comment">// 网站灰色模式，用于可能悼念的日期开启</span>
  <span class="token literal-property property">grayMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 色弱模式</span>
  <span class="token literal-property property">colorWeak</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内</span>
  <span class="token literal-property property">fullContent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 主题内容宽度</span>
  <span class="token literal-property property">contentMode</span><span class="token operator">:</span> ContentEnum<span class="token punctuation">.</span><span class="token constant">FULL</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否显示logo</span>
  <span class="token literal-property property">showLogo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否显示底部信息 copyright</span>
  <span class="token literal-property property">showFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 头部配置</span>
  <span class="token literal-property property">headerSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 背景色</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 固定头部</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示顶部</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 主题</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> MenuThemeEnum<span class="token punctuation">.</span><span class="token constant">LIGHT</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启锁屏功能</span>
    <span class="token literal-property property">useLockPage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 显示全屏按钮</span>
    <span class="token literal-property property">showFullScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 显示文档按钮</span>
    <span class="token literal-property property">showDoc</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 显示消息中心按钮</span>
    <span class="token literal-property property">showNotice</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 显示菜单搜索按钮</span>
    <span class="token literal-property property">showSearch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 菜单配置</span>
  <span class="token literal-property property">menuSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 背景色</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&quot;#273352&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否固定住菜单</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 菜单折叠</span>
    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 折叠菜单时候是否显示菜单名</span>
    <span class="token literal-property property">collapsedShowTitle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否可拖拽</span>
    <span class="token literal-property property">canDrag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 菜单宽度</span>
    <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
    <span class="token comment">// 菜单模式</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> MenuModeEnum<span class="token punctuation">.</span><span class="token constant">INLINE</span><span class="token punctuation">,</span>
    <span class="token comment">// 菜单类型</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> MenuTypeEnum<span class="token punctuation">.</span><span class="token constant">SIDEBAR</span><span class="token punctuation">,</span>
    <span class="token comment">// 菜单主题</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> MenuThemeEnum<span class="token punctuation">.</span><span class="token constant">DARK</span><span class="token punctuation">,</span>
    <span class="token comment">// 分割菜单</span>
    <span class="token literal-property property">split</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 顶部菜单布局</span>
    <span class="token literal-property property">topMenuAlign</span><span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 折叠触发器的位置</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> TriggerEnum<span class="token punctuation">.</span><span class="token constant">HEADER</span><span class="token punctuation">,</span>
    <span class="token comment">// 手风琴模式，只展示一个菜单</span>
    <span class="token literal-property property">accordion</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 在路由切换的时候关闭左侧混合菜单展开菜单</span>
    <span class="token literal-property property">closeMixSidebarOnChange</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 左侧混合菜单模块切换触发方式</span>
    <span class="token literal-property property">mixSideTrigger</span><span class="token operator">:</span> MixSidebarTriggerEnum<span class="token punctuation">.</span><span class="token constant">CLICK</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否固定左侧混合菜单</span>
    <span class="token literal-property property">mixSideFixed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 多标签</span>
  <span class="token literal-property property">multiTabsSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 刷新后是否保留已经打开的标签页</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 开启快速操作</span>
    <span class="token literal-property property">showQuick</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否可以拖拽</span>
    <span class="token literal-property property">canDrag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示刷新按钮</span>
    <span class="token literal-property property">showRedo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否显示折叠按钮</span>
    <span class="token literal-property property">showFold</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 动画配置</span>
  <span class="token literal-property property">transitionSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//  是否开启切换动画</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 动画名</span>
    <span class="token literal-property property">basicTransition</span><span class="token operator">:</span> RouterTransitionEnum<span class="token punctuation">.</span><span class="token constant">FADE_SIDE</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否打开页面切换loading</span>
    <span class="token literal-property property">openPageLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否打开页面切换顶部进度条</span>
    <span class="token literal-property property">openNProgress</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存</span>
  <span class="token literal-property property">openKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时</span>
  <span class="token literal-property property">lockTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">// 显示面包屑</span>
  <span class="token literal-property property">showBreadCrumb</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 显示面包屑图标</span>
  <span class="token literal-property property">showBreadCrumbIcon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否使用全局错误捕获</span>
  <span class="token literal-property property">useErrorHandle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否开启回到顶部</span>
  <span class="token literal-property property">useOpenBackTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">//  是否可以嵌入iframe页面</span>
  <span class="token literal-property property">canEmbedIFramePage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 切换界面的时候是否删除未关闭的message及notify</span>
  <span class="token literal-property property">closeMessageOnSwitch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 切换界面的时候是否取消已经发送但是未响应的http请求。</span>
  <span class="token comment">// 如果开启,想对单独接口覆盖。可以在单独接口设置</span>
  <span class="token literal-property property">removeAllHttpPending</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存配置" tabindex="-1"><a class="header-anchor" href="#缓存配置" aria-hidden="true">#</a> 缓存配置</h2><p>用于配置缓存内容加密信息，对缓存到浏览器的信息进行 AES 加密</p>`,4),T={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/encryptionSetting.ts",target:"_blank",rel:"noopener noreferrer"},I=s("code",null,"localStorage",-1),w=s("code",null,"sessionStorage",-1),O=s("strong",null,"前提:",-1),P={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/utils/cache/index.ts",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> isDevMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/utils/env&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 缓存默认过期时间</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">DEFAULT_CACHE_TIME</span> <span class="token operator">=</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">;</span>

<span class="token comment">// 开启缓存加密后，加密密钥。采用aes加密</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> cacheCipher <span class="token operator">=</span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> <span class="token string">&quot;_11111000001111@&quot;</span><span class="token punctuation">,</span>
  iv<span class="token operator">:</span> <span class="token string">&quot;@11111000001111_&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 是否加密缓存，默认生产环境加密</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> enableStorageEncryption <span class="token operator">=</span> <span class="token operator">!</span><span class="token function">isDevMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多语言配置" tabindex="-1"><a class="header-anchor" href="#多语言配置" aria-hidden="true">#</a> 多语言配置</h2><p>用于配置多语言信息</p>`,3),A={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/localeSetting.ts",target:"_blank",rel:"noopener noreferrer"},C=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LOCALE</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> LocaleType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">ZH_CN</span><span class="token operator">:</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">EN_US</span><span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> localeSetting<span class="token operator">:</span> LocaleSetting <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 是否显示语言选择器</span>
  showPicker<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 当前语言</span>
  locale<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// 默认语言</span>
  fallback<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// 允许的语言</span>
  availableLocales<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">EN_US</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 语言列表</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> localeList<span class="token operator">:</span> DropMenu<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;简体中文&quot;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">EN_US</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主题色配置" tabindex="-1"><a class="header-anchor" href="#主题色配置" aria-hidden="true">#</a> 主题色配置</h2>`,2),R={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/build/config/themeConfig.ts",target:"_blank",rel:"noopener noreferrer"},B=t(`<p>只需要修改 primaryColor 为您需要的配色，然后重新执行 <code>pnpm serve</code> 即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * less global variable
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> primaryColor <span class="token operator">=</span> <span class="token string">&quot;#0960bd&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式配置" tabindex="-1"><a class="header-anchor" href="#样式配置" aria-hidden="true">#</a> 样式配置</h2><h3 id="css-前缀设置" tabindex="-1"><a class="header-anchor" href="#css-前缀设置" aria-hidden="true">#</a> css 前缀设置</h3><p>用于修改项目内组件 class 的统一前缀</p>`,5),V={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/designSetting.ts",target:"_blank",rel:"noopener noreferrer"},U=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token string">&quot;vben&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),G={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/design/var/index.less",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@namespace<span class="token punctuation">:</span></span> vben<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="前缀使用" tabindex="-1"><a class="header-anchor" href="#前缀使用" aria-hidden="true">#</a> 前缀使用</h3><p><strong>在 css 内</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* namespace已经全局注入，不需要额外再引入 */</span>
<span class="token atrule"><span class="token rule">@prefix-cls</span><span class="token punctuation">:</span> ~<span class="token string">&quot;@{namespace}-app-logo&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">.@</span><span class="token punctuation">{</span>prefix-cls<span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在 vue/ts 内</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDesign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/hooks/web/useDesign&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> prefixCls <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDesign</span><span class="token punctuation">(</span><span class="token string">&quot;app-logo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// prefixCls =&gt; vben-app-logo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="颜色配置" tabindex="-1"><a class="header-anchor" href="#颜色配置" aria-hidden="true">#</a> 颜色配置</h2><p>用于预设一些颜色数组</p>`,8),N={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/designSetting.ts",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//  app主题色预设</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">APP_PRESET_COLOR_LIST</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;#0960bd&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#0084f4&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#009688&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#536dfe&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#ff5c93&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#ee4f12&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#0096c7&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#9c27b0&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#ff9800&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 顶部背景色预设</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">HEADER_PRESET_BG_COLOR_LIST</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#009688&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#5172DC&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#1E9FFF&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#018ffb&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#409eff&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#4e73df&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#e74c3c&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#24292e&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#394664&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#001529&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#383f45&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 左侧菜单背景色预设</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">SIDE_BAR_BG_COLOR_LIST</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;#001529&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#273352&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#191b24&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#191a23&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#304156&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#001628&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#28333E&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#344058&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;#383f45&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件默认参数配置" tabindex="-1"><a class="header-anchor" href="#组件默认参数配置" aria-hidden="true">#</a> 组件默认参数配置</h2>`,2),M={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts",target:"_blank",rel:"noopener noreferrer"},F=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 用于配置某些组件的常规配置，而无需修改组件</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> SorterResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../components/Table&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 表格配置</span>
  table<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 表格接口请求通用配置，可在组件prop覆盖</span>
    <span class="token comment">// 支持 xxx.xxx.xxx格式</span>
    fetchSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// 传给后台的当前页字段</span>
      pageField<span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 传给后台的每页显示多少条的字段</span>
      sizeField<span class="token operator">:</span> <span class="token string">&quot;pageSize&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 接口返回表格数据的字段</span>
      listField<span class="token operator">:</span> <span class="token string">&quot;items&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// 接口返回表格总数的字段</span>
      totalField<span class="token operator">:</span> <span class="token string">&quot;total&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 可选的分页选项</span>
    pageSizeOptions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//默认每页显示多少条</span>
    defaultPageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// 默认排序方法</span>
    <span class="token function-variable function">defaultSortFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>sortInfo<span class="token operator">:</span> SorterResult<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> field<span class="token punctuation">,</span> order <span class="token punctuation">}</span> <span class="token operator">=</span> sortInfo<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 排序字段</span>
        field<span class="token punctuation">,</span>
        <span class="token comment">// 排序方式 asc/desc</span>
        order<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 自定义过滤方法</span>
    <span class="token function-variable function">defaultFilterFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Recordable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 滚动组件配置</span>
  scrollbar<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 是否使用原生滚动样式</span>
    <span class="token comment">// 开启后，菜单，弹窗，抽屉会使用原生滚动条组件</span>
    native<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function H(z,K){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,u,d,s("p",null,[n("项目的环境变量配置位于项目根目录下的 "),s("a",k,[n(".env"),e(a)]),n("、"),s("a",v,[n(".env.development"),e(a)]),n("、"),s("a",m,[n(".env.production"),e(a)])]),s("p",null,[n("具体可以参考 "),s("a",b,[n("Vite 文档"),e(a)])]),g,s("p",null,[n("想要获取 "),h,n(" 内的变量，可以使用 "),s("a",_,[n("src/hooks/setting/index.ts"),e(a)]),n(" 提供的函数来进行获取")]),y,s("ol",null,[f,s("li",null,[s("p",null,[s("a",q,[n("useGlobSetting"),e(a)]),n(" 函数中添加刚新增的返回值即可")])])]),E,s("p",null,[s("a",x,[n("src/settings/projectSetting.ts"),e(a)])]),L,s("p",null,[n("在 "),s("a",T,[n("/@/settings/encryptionSetting.ts"),e(a)]),n(" 内可以配置 "),I,n(" 及 "),w,n(" 缓存信息")]),s("p",null,[O,n(" 使用项目自带的缓存工具类 "),s("a",P,[n("/@/utils/cache"),e(a)]),n(" 来进行缓存操作")]),S,s("p",null,[n("在 "),s("a",A,[n("src/settings/localeSetting.ts"),e(a)]),n(" 内配置")]),C,s("p",null,[n("默认全局主题色配置位于 "),s("a",R,[n("build/config/glob/themeConfig.ts"),e(a)]),n(" 内")]),B,s("ul",null,[s("li",null,[n("在 "),s("a",V,[n("src/settings/designSetting.ts"),e(a)]),n(" 内配置")])]),U,s("ul",null,[s("li",null,[n("在 "),s("a",G,[n("src/design/var/index.less"),e(a)]),n(" 配置 css 前缀")])]),j,s("p",null,[n("在 "),s("a",N,[n("src/settings/designSetting.ts"),e(a)]),n(" 内配置")]),D,s("p",null,[n("在 "),s("a",M,[n("src/settings/componentSetting.ts"),e(a)]),n(" 内配置")]),F])}const W=p(i,[["render",H],["__file","2-settings.html.vue"]]);export{W as default};
