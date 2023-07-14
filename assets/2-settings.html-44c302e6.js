import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as i,c as l,a as n,d as s,b as e,e as t}from"./app-8654fcba.js";const c={},r=n("h1",{id:"project-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#project-configuration","aria-hidden":"true"},"#"),s(" Project Configuration")],-1),u=n("p",null,"Include color scheme, layout, caching, multi-language support, and default component configuration.",-1),d=n("h2",{id:"environment-variables-configuration",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#environment-variables-configuration","aria-hidden":"true"},"#"),s(" Environment Variables Configuration")],-1),k={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/.env",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/.env.development",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/.env.production",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/vitejs/vite#modes-and-environment-variables",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.env                <span class="token comment"># Loaded in all environments</span>
.env.local          <span class="token comment"># Loaded in all environments, ignored by git</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         <span class="token comment"># Only loaded in specified mode</span>
.env.<span class="token punctuation">[</span>mode<span class="token punctuation">]</span>.local   <span class="token comment"># Only loaded in specified mode, ignored by git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Note</p><ul><li>Only variables starting with <code>VITE_</code> will be embedded in the client-side package, and you can access them in your project code like this:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PROT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Variables starting with <code>VITE_GLOB_*</code> will be added to the <a href="#production-environment-dynamic-configuration">_app.config.js</a> configuration file during packaging.</li></ul></div><h3 id="configuration-item-description" tabindex="-1"><a class="header-anchor" href="#configuration-item-description" aria-hidden="true">#</a> Configuration Item Description</h3><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> .env</h3><p>Applicable to all environments</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Website title</span>
<span class="token assign-left variable">VITE_GLOB_APP_TITLE</span><span class="token operator">=</span>vben admin
<span class="token comment"># Abbreviation, used to configure file names, no spaces, numbers, or other special characters at the beginning</span>
<span class="token assign-left variable">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">=</span>vben_admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="env-development" tabindex="-1"><a class="header-anchor" href="#env-development" aria-hidden="true">#</a> .env.development</h3><p>Applicable to development environment</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Whether to enable mock data. When turned off, you need to connect to the backend interface manually.</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># Public resource path, must start and end with /</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># Whether to delete Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>false
<span class="token comment"># Interface address</span>
<span class="token comment"># If there is no cross-domain problem, you can configure it here.</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># File upload interface, optional</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># Interface address prefix. Some systems have a prefix for all interface addresses, which can be added here to facilitate switching.</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The <code>VITE_GLOB_API_URL</code>, /api here must be unique and not conflict with the name of the interface in proxy.</p><p>If your interface is like <code>http://localhost:3000/api</code>, please consider changing <code>VITE_GLOB_API_URL=/xxxx</code> to another name.</p></div><h3 id="env-production" tabindex="-1"><a class="header-anchor" href="#env-production" aria-hidden="true">#</a> .env.production</h3><p>Applicable to production environment</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Whether to enable mock data</span>
<span class="token assign-left variable">VITE_USE_MOCK</span><span class="token operator">=</span>true
<span class="token comment"># Interface address, which can be forwarded by nginx or written with the actual address</span>
<span class="token assign-left variable">VITE_GLOB_API_URL</span><span class="token operator">=</span>/api
<span class="token comment"># File upload address, which can be forwarded by nginx or written with the actual address</span>
<span class="token assign-left variable">VITE_GLOB_UPLOAD_URL</span><span class="token operator">=</span>/upload
<span class="token comment"># Interface address prefix. Some systems have a prefix for all interface addresses, which can be added here to facilitate switching.</span>
<span class="token assign-left variable">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">=</span>
<span class="token comment"># Whether to delete Console.log</span>
<span class="token assign-left variable">VITE_DROP_CONSOLE</span><span class="token operator">=</span>true
<span class="token comment"># Public resource path, must start and end with /</span>
<span class="token assign-left variable">VITE_PUBLIC_PATH</span><span class="token operator">=</span>/
<span class="token comment"># Whether to output gz|br files during packaging</span>
<span class="token comment"># Optional: gzip | brotli | none</span>
<span class="token comment"># There can be multiple, for example, &#39;gzip&#39;|&#39;brotli&#39;, which will generate .gz and .br files at the same time.</span>
VITE_BUILD_COMPRESS <span class="token operator">=</span> <span class="token string">&#39;gzip&#39;</span>
<span class="token comment"># Whether to compress images during packaging</span>
VITE_USE_IMAGEMIN <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment"># Whether to enable pwa function during packaging</span>
VITE_USE_PWA <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token comment"># Whether to be compatible with old browsers. After turning it on, the packaging time will be about twice as slow. The old browser compatibility package will be generated, and the appropriate version will be automatically used according to the browser compatibility.</span>
VITE_LEGACY <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="production-environment-dynamic-configuration" tabindex="-1"><a class="header-anchor" href="#production-environment-dynamic-configuration" aria-hidden="true">#</a> Production Environment Dynamic Configuration</h2><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h3><p>After executing <code>pnpm build</code> to build the project, the <code>_app.config.js</code> file will be automatically generated and inserted into <code>index.html</code>.</p><p><strong>Note: It will not be generated in the development environment.</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// _app.config.js</span>
<span class="token comment">// Variable naming rule __PRODUCTION__xxx_CONF__   xxx: VITE_GLOB_APP_SHORT_NAME in .env configuration</span>
window<span class="token punctuation">.</span>__PRODUCTION__VUE_VBEN_ADMIN__CONF__ <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">VITE_GLOB_APP_TITLE</span><span class="token operator">:</span> <span class="token string">&quot;vben admin&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_APP_SHORT_NAME</span><span class="token operator">:</span> <span class="token string">&quot;vue_vben_admin&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL</span><span class="token operator">:</span> <span class="token string">&quot;/app&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_API_URL_PREFIX</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">VITE_GLOB_UPLOAD_URL</span><span class="token operator">:</span> <span class="token string">&quot;/upload&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="function" tabindex="-1"><a class="header-anchor" href="#function" aria-hidden="true">#</a> Function</h3><p><code>_app.config.js</code> is used for scenarios where the project needs to dynamically modify the configuration after packaging, such as interface addresses. You do not need to rebuild the project and can update the local variable in the <code>/_app.config.js</code> file. After refreshing, the local variable in the code will be updated.</p><h3 id="how-to-get-global-variables" tabindex="-1"><a class="header-anchor" href="#how-to-get-global-variables" aria-hidden="true">#</a> How to Get Global Variables</h3>`,21),g=n("code",null,"_app.config.js",-1),f={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts",target:"_blank",rel:"noopener noreferrer"},y=n("h3",{id:"how-to-add-add-a-configurable-item",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-add-add-a-configurable-item","aria-hidden":"true"},"#"),s(" How to Add (Add a Configurable Item)")],-1),_=t("<li><p>First, add the variable that needs to be dynamically configured to the <code>.env</code> or the corresponding development environment configuration file. It needs to start with <code>VITE_GLOB_</code>.</p></li><li><p>Variables starting with <code>VITE_GLOB_</code> will be automatically added to the environment variables. Modify the values of the <code>GlobEnvConfig</code> and <code>GlobConfig</code> environment variables in <code>src/types/config.d.ts</code> to define the types of newly added variables.</p></li>",2),w={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="local-proxy-configuration" tabindex="-1"><a class="header-anchor" href="#local-proxy-configuration" aria-hidden="true">#</a> Local Proxy Configuration</h2><p><code>vite.config.ts</code></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineApplicationConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@vben/vite-config&quot;</span><span class="token punctuation">;</span>

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
      <span class="token comment">// Add your own api proxy to match diffrent api service</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="project-configuration-1" tabindex="-1"><a class="header-anchor" href="#project-configuration-1" aria-hidden="true">#</a> Project Configuration</h2><div class="hint-container warning"><p class="hint-container-title">Note</p><p>The project configuration file is used to configure the content, layout, text and other effects displayed in the project and is stored in <code>localStorage</code>. If the project configuration is changed, you need to manually <strong>clear</strong> the <code>localStorage</code> cache and refresh and log in again to take effect.</p></div><h3 id="configuration-file-path" tabindex="-1"><a class="header-anchor" href="#configuration-file-path" aria-hidden="true">#</a> Configuration file path</h3>`,7),x={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>Here is the English translation of your text in markdown:</p><h3 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1" aria-hidden="true">#</a> Description</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// ! You need to clear your browser cache after making changes</span>
<span class="token keyword">const</span> <span class="token literal-property property">setting</span><span class="token operator">:</span> ProjectConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Whether to show the SettingButton</span>
  <span class="token literal-property property">showSettingButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// Whether to show the theme switch button</span>
  <span class="token literal-property property">showDarkModeToggle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// Setting button position options</span>
  <span class="token comment">// SettingButtonPositionEnum.AUTO: Automatic selection</span>
  <span class="token comment">// SettingButtonPositionEnum.HEADER: Located at the top</span>
  <span class="token comment">// SettingButtonPositionEnum.FIXED: Fixed on the right side</span>
  <span class="token literal-property property">settingButtonPosition</span><span class="token operator">:</span> SettingButtonPositionEnum<span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">,</span>

  <span class="token comment">// Permission mode, default front-end role permission mode</span>
  <span class="token comment">// ROUTE_MAPPING: Front-end mode (menu generated by routing, default)</span>
  <span class="token comment">// ROLE: Front-end mode (menu routing separated)</span>
  <span class="token literal-property property">permissionMode</span><span class="token operator">:</span> PermissionModeEnum<span class="token punctuation">.</span><span class="token constant">ROUTE_MAPPING</span><span class="token punctuation">,</span>
  <span class="token comment">// Where to store permission cache. Default storage in localStorage</span>
  <span class="token literal-property property">permissionCacheType</span><span class="token operator">:</span> CacheTypeEnum<span class="token punctuation">.</span><span class="token constant">LOCAL</span><span class="token punctuation">,</span>
  <span class="token comment">// Session timeout processing scheme</span>
  <span class="token comment">// SessionTimeoutProcessingEnum.ROUTE_JUMP: Route jump to login page</span>
  <span class="token comment">// SessionTimeoutProcessingEnum.PAGE_COVERAGE: Generate login pop-up window, covering the current page</span>
  <span class="token literal-property property">sessionTimeoutProcessing</span><span class="token operator">:</span> SessionTimeoutProcessingEnum<span class="token punctuation">.</span><span class="token constant">ROUTE_JUMP</span><span class="token punctuation">,</span>
  <span class="token comment">// Project theme color</span>
  <span class="token literal-property property">themeColor</span><span class="token operator">:</span> primaryColor<span class="token punctuation">,</span>
  <span class="token comment">// Website gray mode, used for possible mourning dates to open</span>
  <span class="token literal-property property">grayMode</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// Color weak mode</span>
  <span class="token literal-property property">colorWeak</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether to cancel the display of menus, top, multi-tab pages, which may be embedded in other systems</span>
  <span class="token literal-property property">fullContent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// Theme content width</span>
  <span class="token literal-property property">contentMode</span><span class="token operator">:</span> ContentEnum<span class="token punctuation">.</span><span class="token constant">FULL</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether to show logo</span>
  <span class="token literal-property property">showLogo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether to display the bottom information copyright</span>
  <span class="token literal-property property">showFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Header configuration</span>
  <span class="token literal-property property">headerSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Background color</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&quot;#ffffff&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// Fixed head</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to display the top</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Theme</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> MenuThemeEnum<span class="token punctuation">.</span><span class="token constant">LIGHT</span><span class="token punctuation">,</span>
    <span class="token comment">// Turn on the lock screen function</span>
    <span class="token literal-property property">useLockPage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Show fullscreen button</span>
    <span class="token literal-property property">showFullScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Show document button</span>
    <span class="token literal-property property">showDoc</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Show message center button</span>
    <span class="token literal-property property">showNotice</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Show menu search button</span>
    <span class="token literal-property property">showSearch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// menu configuration</span>
  <span class="token literal-property property">menuSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// background color</span>
    <span class="token literal-property property">bgColor</span><span class="token operator">:</span> <span class="token string">&quot;#273352&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to fix the menu</span>
    <span class="token literal-property property">fixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// menu collapse</span>
    <span class="token literal-property property">collapsed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to display the menu name when the menu is collapsed</span>
    <span class="token literal-property property">collapsedShowTitle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// whether it is draggable</span>
    <span class="token literal-property property">canDrag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to display</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// menu width</span>
    <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token number">180</span><span class="token punctuation">,</span>
    <span class="token comment">// menu mode</span>
    <span class="token literal-property property">mode</span><span class="token operator">:</span> MenuModeEnum<span class="token punctuation">.</span><span class="token constant">INLINE</span><span class="token punctuation">,</span>
    <span class="token comment">// menu type</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> MenuTypeEnum<span class="token punctuation">.</span><span class="token constant">SIDEBAR</span><span class="token punctuation">,</span>
    <span class="token comment">// menu theme</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> MenuThemeEnum<span class="token punctuation">.</span><span class="token constant">DARK</span><span class="token punctuation">,</span>
    <span class="token comment">// split menu</span>
    <span class="token literal-property property">split</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// top menu layout</span>
    <span class="token literal-property property">topMenuAlign</span><span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// position of the collapse trigger</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> TriggerEnum<span class="token punctuation">.</span><span class="token constant">HEADER</span><span class="token punctuation">,</span>
    <span class="token comment">// Accordion mode, only one menu is displayed</span>
    <span class="token literal-property property">accordion</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Close the left mixed menu expansion menu when the route is switched</span>
    <span class="token literal-property property">closeMixSidebarOnChange</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// Switch the trigger mode of the mixed menu module on the left</span>
    <span class="token literal-property property">mixSideTrigger</span><span class="token operator">:</span> MixSidebarTriggerEnum<span class="token punctuation">.</span><span class="token constant">CLICK</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to fix the left mixed menu</span>
    <span class="token literal-property property">mixSideFixed</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// multi-label</span>
  <span class="token literal-property property">multiTabsSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Whether to keep the opened tabs after refreshing</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// open</span>
    <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// enable quick action</span>
    <span class="token literal-property property">showQuick</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// whether it can be dragged</span>
    <span class="token literal-property property">canDrag</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to display the refresh button</span>
    <span class="token literal-property property">showRedo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to display the collapse button</span>
    <span class="token literal-property property">showFold</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// animation configuration</span>
  <span class="token literal-property property">transitionSetting</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Whether to enable switching animation</span>
    <span class="token literal-property property">enable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// animation name</span>
    <span class="token literal-property property">basicTransition</span><span class="token operator">:</span> RouterTransitionEnum<span class="token punctuation">.</span><span class="token constant">FADE_SIDE</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to open the page to switch loading</span>
    <span class="token literal-property property">openPageLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// Whether to open the page to switch the top progress bar</span>
    <span class="token literal-property property">openNProgress</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Whether to enable the KeepAlive cache or not, it is best to turn it off during development, otherwise you need to clear the cache every time</span>
  <span class="token literal-property property">openKeepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Automatic lock screen time, 0 does not lock the screen. The unit is minutes, the default is 1 hour</span>
  <span class="token literal-property property">lockTime</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token comment">// show breadcrumbs</span>
  <span class="token literal-property property">showBreadCrumb</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// show the breadcrumb icon</span>
  <span class="token literal-property property">showBreadCrumbIcon</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether to use global error capture</span>
  <span class="token literal-property property">useErrorHandle</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// whether to open back to the top</span>
  <span class="token literal-property property">useOpenBackTop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether it is possible to embed an iframe page</span>
  <span class="token literal-property property">canEmbedIFramePage</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether to delete the unclosed message and notify when switching the interface</span>
  <span class="token literal-property property">closeMessageOnSwitch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Whether to cancel the http request that has been sent but not responded when switching the interface.</span>
  <span class="token comment">// If enabled, want to override for individual interfaces. Can be set on a separate interface</span>
  <span class="token literal-property property">removeAllHttpPending</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="theme-color-configuration" tabindex="-1"><a class="header-anchor" href="#theme-color-configuration" aria-hidden="true">#</a> Theme Color Configuration</h2>`,4),T={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/build/config/themeConfig.ts",target:"_blank",rel:"noopener noreferrer"},I=t(`<p>Just change primaryColor to the color you need and then re-run <code>pnpm serve</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * less global variable
 */</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> primaryColor <span class="token operator">=</span> <span class="token string">&quot;#0960bd&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="style-configuration" tabindex="-1"><a class="header-anchor" href="#style-configuration" aria-hidden="true">#</a> Style Configuration</h2><h3 id="css-prefix-settings" tabindex="-1"><a class="header-anchor" href="#css-prefix-settings" aria-hidden="true">#</a> CSS Prefix Settings</h3><p>Used to modify the unified prefix of the component class in the project</p>`,5),P={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/designSetting.ts",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token string">&quot;vben&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),L={href:"https://github.com/vbenjs/vue-vben-admin/blob/main/src/design/var/index.less",target:"_blank",rel:"noopener noreferrer"},O=t(`<div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token variable">@namespace<span class="token punctuation">:</span></span> vben<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="prefix-usage" tabindex="-1"><a class="header-anchor" href="#prefix-usage" aria-hidden="true">#</a> Prefix Usage</h3><p><strong>In CSS</strong></p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* namespace has been globally injected and does not need to be imported again */</span>
<span class="token atrule"><span class="token rule">@prefix-cls</span><span class="token punctuation">:</span> ~<span class="token string">&quot;@{namespace}-app-logo&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">.@</span><span class="token punctuation">{</span>prefix-cls<span class="token punctuation">}</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>In vue/ts</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useDesign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/hooks/web/useDesign&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> prefixCls <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDesign</span><span class="token punctuation">(</span><span class="token string">&quot;app-logo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// prefixCls =&gt; vben-app-logo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="color-configuration" tabindex="-1"><a class="header-anchor" href="#color-configuration" aria-hidden="true">#</a> Color Configuration</h2><p>Used to preset some color arrays</p>`,8),C={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/designSetting.ts",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// app theme color preset</span>
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

<span class="token comment">// Top background color preset</span>
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

<span class="token comment">// Left menu background color preset</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is the English translation of your text in markdown:</p><h2 id="component-default-parameter-configuration" tabindex="-1"><a class="header-anchor" href="#component-default-parameter-configuration" aria-hidden="true">#</a> Component Default Parameter Configuration</h2>`,3),R={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Used to configure some common configurations of certain components without modifying the components</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> SorterResult <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../components/Table&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// Table configuration</span>
  table<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Common configuration of table interface request, can be overridden by component prop</span>
    <span class="token comment">// Supports xxx.xxx.xxx format</span>
    fetchSetting<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// The current page field passed to the backend</span>
      pageField<span class="token operator">:</span> <span class="token string">&quot;page&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// The field passed to the backend for how many items are displayed per page</span>
      sizeField<span class="token operator">:</span> <span class="token string">&quot;pageSize&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// The field returned by the interface for table data</span>
      listField<span class="token operator">:</span> <span class="token string">&quot;items&quot;</span><span class="token punctuation">,</span>
      <span class="token comment">// The field returned by the interface for the total number of tables</span>
      totalField<span class="token operator">:</span> <span class="token string">&quot;total&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Optional pagination options</span>
    pageSizeOptions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// Default number of items displayed per page</span>
    defaultPageSize<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token comment">// Default sorting method</span>
    <span class="token function-variable function">defaultSortFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>sortInfo<span class="token operator">:</span> SorterResult<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> field<span class="token punctuation">,</span> order <span class="token punctuation">}</span> <span class="token operator">=</span> sortInfo<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// Sorting field</span>
        field<span class="token punctuation">,</span>
        <span class="token comment">// Sorting method asc/desc</span>
        order<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Custom filtering method</span>
    <span class="token function-variable function">defaultFilterFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Recordable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Scroll component configuration</span>
  scrollbar<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Whether to use native scrolling style</span>
    <span class="token comment">// After opening, menus, pop-ups, and drawers will use native scrollbars</span>
    native<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function V(B,U){const a=p("ExternalLinkIcon");return i(),l("div",null,[r,u,d,n("p",null,[s("The project's environment variables configuration is located in the "),n("a",k,[s(".env"),e(a)]),s(", "),n("a",m,[s(".env.development"),e(a)]),s(", and "),n("a",v,[s(".env.production"),e(a)]),s(" files in the project root directory.")]),n("p",null,[s("For more information, please refer to the "),n("a",b,[s("Vite documentation"),e(a)]),s(".")]),h,n("p",null,[s("To get the variables in "),g,s(", you can use the function provided by "),n("a",f,[s("src/hooks/setting/index.ts"),e(a)]),s(" to get them.")]),y,n("ol",null,[_,n("li",null,[n("p",null,[s("Add the newly added return value in "),n("a",w,[s("useGlobSetting"),e(a)]),s(" function.")])])]),q,n("p",null,[n("a",x,[s("src/settings/projectSetting.ts"),e(a)])]),E,n("p",null,[s("The default global theme color configuration is located in "),n("a",T,[s("build/config/glob/themeConfig.ts"),e(a)])]),I,n("ul",null,[n("li",null,[s("Configure in "),n("a",P,[s("src/settings/designSetting.ts"),e(a)])])]),S,n("ul",null,[n("li",null,[s("Configure CSS prefix in "),n("a",L,[s("src/design/var/index.less"),e(a)])])]),O,n("p",null,[s("Configure in "),n("a",C,[s("src/settings/designSetting.ts"),e(a)])]),A,n("p",null,[s("Configure in "),n("a",R,[s("src/settings/componentSetting.ts"),e(a)])]),j])}const D=o(c,[["render",V],["__file","2-settings.html.vue"]]);export{D as default};
