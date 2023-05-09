import{_ as o}from"./i18n-1b9864aa.js";import{_ as p,W as c,X as l,Y as n,$ as s,Z as e,a1 as t,D as i}from"./framework-4a45a4a9.js";const u={},r=n("h1",{id:"globalization",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#globalization","aria-hidden":"true"},"#"),s(" globalization")],-1),d={href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"},k=t('<h2 id="i18n-ally-plugin" tabindex="-1"><a class="header-anchor" href="#i18n-ally-plugin" aria-hidden="true">#</a> I18n-ally plugin</h2><p>After installing the plugin, you can see the corresponding language content in real time in your code</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="configure-the-default-language" tabindex="-1"><a class="header-anchor" href="#configure-the-default-language" aria-hidden="true">#</a> Configure the default language</h2>',4),v={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/localeSetting.ts",target:"_blank",rel:"noopener noreferrer"},m=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">LOCALE</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> LocaleType <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">ZH_CN</span><span class="token operator">:</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>
  <span class="token constant">EN_US</span><span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> localeSetting<span class="token operator">:</span> LocaleSetting <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// Whether to display the language selector</span>
  showPicker<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// Current language</span>
  locale<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// Default language</span>
  fallback<span class="token operator">:</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span>
  <span class="token comment">// Allowed languages</span>
  availableLocales<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">ZH_CN</span><span class="token punctuation">,</span> <span class="token constant">LOCALE</span><span class="token punctuation">.</span><span class="token constant">EN_US</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Configure language list</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> localeList<span class="token operator">:</span> DropMenu<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;简体中文&quot;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> <span class="token string">&quot;English&quot;</span><span class="token punctuation">,</span>
    event<span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> configuration</h2>`,2),g={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/setupI18n.ts",target:"_blank",rel:"noopener noreferrer"},b=n("h3",{id:"language-files",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#language-files","aria-hidden":"true"},"#"),s(" Language files")],-1),h={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/lang",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># locales/lang/</span>

<span class="token comment"># Chinese language</span>
zh_CN:
   component: component related
   layout: layout related
   routes: related to the routing menu
   sys: system page related

en: ditto

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="language-import-logic-description" tabindex="-1"><a class="header-anchor" href="#language-import-logic-description" aria-hidden="true">#</a> Language import logic description</h3><ol><li>Initialization</li></ol>`,3),y={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/setupI18n.ts",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> defaultLocal <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lang/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will import the <code>src/locales/lang/{lang}.ts</code> file language pack, which will import all files under the corresponding language.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> genMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../helper&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> antdLocale <span class="token keyword">from</span> <span class="token string">&quot;ant-design-vue/es/locale/zh_CN&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> momentLocale <span class="token keyword">from</span> <span class="token string">&quot;moment/dist/locale/zh-cn&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> modules <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">globEager</span><span class="token punctuation">(</span><span class="token string">&quot;./zh_CN/**/*.ts&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  message<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span><span class="token function">genMessage</span><span class="token punctuation">(</span>modules<span class="token punctuation">,</span> <span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    antdLocale<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  momentLocale<span class="token punctuation">,</span>
  momentLocaleName<span class="token operator">:</span> <span class="token string">&quot;zh-cn&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And convert it into a multi-level structure according to the corresponding directory structure.</p><p>Example:</p><p>The content of the <code>lang/zh_CN/components/modal.ts</code> file is</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&quot;Title&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then when using it, directly use <code>t(&#39;components.modal.title&#39;)</code> to get it.</p><p>The advantage of this is that it is easier to manage the multilingualism of large projects. If you don&#39;t need to divide by module, you can directly import it manually.</p><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2><p>Introduce the project&#39;s own <code>useI18n</code> <strong>Note not to introduce vue-i18n&#39;s useI18n</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useI18n <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/hooks/web/useI18n&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;components.modal.title&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="switch-languages" tabindex="-1"><a class="header-anchor" href="#switch-languages" aria-hidden="true">#</a> Switch languages</h2>`,13),w={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/useLocale.ts",target:"_blank",rel:"noopener noreferrer"},L=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLocale <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/locales/useLocale&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> changeLocale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">changeLocale</span><span class="token punctuation">(</span><span class="token string">&quot;en&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> Add</h2><h3 id="language-file" tabindex="-1"><a class="header-anchor" href="#language-file" aria-hidden="true">#</a> Language file</h3>`,3),x={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/lang",target:"_blank",rel:"noopener noreferrer"},q=n("h3",{id:"add-language",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#add-language","aria-hidden":"true"},"#"),s(" Add language")],-1),I=n("p",null,[s("Currently, the project comes with only two languages: "),n("code",null,"zh_CN"),s(" and "),n("code",null,"en")],-1),C=n("p",null,"If you need to add more, follow these steps:",-1),N={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/lang",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/types/config",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/localeSetting.ts",target:"_blank",rel:"noopener noreferrer"},A=t(`<h2 id="read-language-data-remotely" tabindex="-1"><a class="header-anchor" href="#read-language-data-remotely" aria-hidden="true">#</a> Read language data remotely</h2><p>Currently, the project will wait for the <code>setupI18n</code> function to execute before rendering the interface in <code>src/main.ts</code>, so just send an ajax request in setupI18n and set the corresponding data to the i18n instance.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// src/main.ts</span>
<span class="token keyword">await</span> <span class="token function">setupI18n</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setupi18n-function" tabindex="-1"><a class="header-anchor" href="#setupi18n-function" aria-hidden="true">#</a> setupI18n function</h3>`,4),T={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/setupI18n.ts",target:"_blank",rel:"noopener noreferrer"},E=t(`<p>As shown below, a default language will be set here first. The default language can be set locally, or you can wait for the interface to return to the default language here.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// setup i18n instance with glob</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">setupI18n</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createI18nOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  i18n <span class="token operator">=</span> <span class="token function">createI18n</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token keyword">as</span> I18n<span class="token punctuation">;</span>
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>i18n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createI18nOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>I18nOptions<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> locale <span class="token operator">=</span> localeStore<span class="token punctuation">.</span>getLocale<span class="token punctuation">;</span>

  <span class="token comment">// 这里改成接口获取</span>
  <span class="token keyword">const</span> defaultLocal <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lang/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> message <span class="token operator">=</span> defaultLocal<span class="token punctuation">.</span>default<span class="token operator">?.</span>message <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    legacy<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    locale<span class="token punctuation">,</span>
    fallbackLocale<span class="token operator">:</span> fallback<span class="token punctuation">,</span>
    messages<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token operator">:</span> message<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    availableLocales<span class="token operator">:</span> availableLocales<span class="token punctuation">,</span>
    sync<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    silentTranslationWarn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    missingWarn<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    silentFallbackWarn<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="changelocale-function" tabindex="-1"><a class="header-anchor" href="#changelocale-function" aria-hidden="true">#</a> changeLocale function</h3>`,3),S={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/locales/useLocale",target:"_blank",rel:"noopener noreferrer"},M=t(`<p>When manually switching the language, the <code>useLocale</code> function will be triggered. useLocale is also an asynchronous function, just wait for the interface to return the response data, and then set it</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">changeLocale</span><span class="token punctuation">(</span>locale<span class="token operator">:</span> LocaleType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> globalI18n <span class="token operator">=</span> i18n<span class="token punctuation">.</span>global<span class="token punctuation">;</span>
  <span class="token keyword">const</span> currentLocale <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>globalI18n<span class="token punctuation">.</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>currentLocale <span class="token operator">===</span> locale<span class="token punctuation">)</span> <span class="token keyword">return</span> locale<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>loadLocalePool<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">setI18nLanguage</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> locale<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 这里改成接口获取</span>
  <span class="token keyword">const</span> langModule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">./lang/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>locale<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.ts</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>default <span class="token keyword">as</span> LangModule<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>langModule<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> momentLocale<span class="token punctuation">,</span> momentLocaleName <span class="token punctuation">}</span> <span class="token operator">=</span> langModule<span class="token punctuation">;</span>

  globalI18n<span class="token punctuation">.</span><span class="token function">setLocaleMessage</span><span class="token punctuation">(</span>locale<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  moment<span class="token punctuation">.</span><span class="token function">updateLocale</span><span class="token punctuation">(</span>momentLocaleName<span class="token punctuation">,</span> momentLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  loadLocalePool<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">setI18nLanguage</span><span class="token punctuation">(</span>locale<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> locale<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function O(W,Z){const a=i("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("If you use vscode development tools, it is recommended to install "),n("a",d,[s("I18n-ally"),e(a)]),s(" this plugin")]),k,n("p",null,[s("The default language can be configured in "),n("a",v,[s("src/settings/localeSetting.ts"),e(a)])]),m,n("p",null,[s("The i18n introduced in "),n("a",g,[s("src/locales/setupI18n.ts"),e(a)]),s(" does not need to be modified")]),b,n("p",null,[s("Specific language can be configured in "),n("a",h,[s("src/locales/lang/"),e(a)])]),f,n("p",null,[s("The root language file in "),n("a",y,[s("src/locales/setupI18n"),e(a)]),s(" can be seen")]),_,n("p",null,[s("To switch languages, you need to use "),n("a",w,[s("src/locales/useLocale.ts"),e(a)])]),L,n("p",null,[s("Add the corresponding language file in "),n("a",x,[s("src/locales/lang/"),e(a)])]),q,I,C,n("ol",null,[n("li",null,[s("Add the corresponding language directory and language file in "),n("a",N,[s("src/locales/lang/"),e(a)]),s(" and import ant-design-vue and moment corresponding language packages")]),n("li",null,[s("Add preview type definition in "),n("a",j,[s("types/config.d.ts"),e(a)])]),n("li",null,[s("Modify language configuration in "),n("a",z,[s("src/settings/localeSetting.ts"),e(a)])])]),A,n("p",null,[s("Code: "),n("a",T,[s("src/locales/setupI18n/"),e(a)])]),E,n("p",null,[s("Code: "),n("a",S,[s("src/locales/useLocale/"),e(a)])]),M])}const V=p(u,[["render",O],["__file","i18n.html.vue"]]);export{V as default};