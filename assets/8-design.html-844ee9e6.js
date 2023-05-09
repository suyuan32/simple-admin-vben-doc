import{_ as o,W as l,X as p,Y as s,$ as n,Z as e,a1 as t,D as c}from"./framework-4a45a4a9.js";const i={},u=s("h1",{id:"style",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#style","aria-hidden":"true"},"#"),n(" Style")],-1),d=s("h2",{id:"introduction",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),r=s("p",null,"This is an introduction to using and planning style files in your projects.",-1),v={href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/zh-",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/vbenjs/vue-vben-admin/tree/main/src/design",target:"_blank",rel:"noopener noreferrer"},g=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
├── ant <span class="token comment"># ant design Some style overrides</span>
├── color.less <span class="token comment"># color</span>
├── index.less <span class="token comment"># entry</span>
├── public.less <span class="token comment"># public classes</span>
├── theme.less <span class="token comment"># Theme related</span>
├── config.less <span class="token comment"># Each component will automatically introduce styles</span>
├── transition <span class="token comment"># Animation related</span>
└── var <span class="token comment"># Variables</span>

ðŸ™&#39;

::: tip Global injection

The config.less <span class="token function">file</span> is injected globally into all files, so variables can be used directly within the page without having to be introduced manually

::.

\`\`\`html
<span class="token operator">&lt;</span>style <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span>
  // config.less is implicitly injected here
<span class="token operator">&lt;</span>/style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##tailwindcss(2.5.0+)</p>`,2),h={href:"https://tailwindcss.com/docs",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>The syntax is as follows.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>relative w-full h-full px-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="why-use-less" tabindex="-1"><a class="header-anchor" href="#why-use-less" aria-hidden="true">#</a> Why use Less</h2><p>The main reason is that Ant Design uses less as the style language by default, and using Less can be consistent with it.</p><h2 id="enable-scoped" tabindex="-1"><a class="header-anchor" href="#enable-scoped" aria-hidden="true">#</a> Enable scoped</h2><p>If the <code>scoped</code> attribute is not added, it will be compiled into a global style by default, which may cause global pollution</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Warm reminder</p><p>After using scoped, the parent component&#39;s style will not permeate to the child component. However, the root node of a child component will be affected by both the scoped CSS of its parent component and the scoped CSS of the child component. This design is to allow the parent component to adjust the style of the root element of its child components from the perspective of layout.</p></div><h2 id="depth-selector" tabindex="-1"><a class="header-anchor" href="#depth-selector" aria-hidden="true">#</a> depth selector</h2><p>Sometimes we may want to explicitly make a rule for subcomponents.</p><p>If you want a selector in a <code>scoped</code> style to act &quot;deeper&quot;, i.e. affect child components, you can use the <code>&gt;&gt;&gt;</code> operator. Some preprocessors like Sass don&#39;t parse <code>&gt;&gt;&gt;</code> correctly. In this case you can use the <code>/deep/</code> or <code>::v-deep</code> operators instead - both are aliases for <code>&gt;&gt;&gt;</code> and will work just as well.</p>`,11),f={href:"https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>After using scoped, the style of the parent component will not penetrate into the child component, so you can use the following method to solve it:</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token comment">/* deep selectors */</span>
<span class="token selector">::v-deep(.foo)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* shorthand */</span>
<span class="token selector">:deep(.foo)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* targeting slot content */</span>
<span class="token selector">::v-slotted(.foo)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* shorthand */</span>
<span class="token selector">:slotted(.foo)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">/* one-off global rule */</span>
<span class="token selector">::v-global(.foo)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">/* shorthand */</span>
<span class="token selector">:global(.foo)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="css-modules" tabindex="-1"><a class="header-anchor" href="#css-modules" aria-hidden="true">#</a> CSS Modules</h1><p>For style coverage, another solution is to use the CSS Modules modularization solution. The way to use it is as follows.</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$style.span1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCSSModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> $style <span class="token operator">=</span> <span class="token function">useCSSModule</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> moduleAStyle <span class="token operator">=</span> <span class="token function">useCSSModule</span><span class="token punctuation">(</span><span class="token string">&quot;moduleA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      $style<span class="token punctuation">,</span>
      moduleAStyle<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">module</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.span1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>moduleA<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.span1</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="duplicate-citation-issues" tabindex="-1"><a class="header-anchor" href="#duplicate-citation-issues" aria-hidden="true">#</a> Duplicate citation issues</h2><p>Adding <strong>reference</strong> can solve the problem that repeated references in the page cause the actual generated style sheet to be duplicated.</p><p>This step has been introduced globally. So ** can not write **, directly use variables</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span>
   /* This line of code is referenced globally. Can not be imported separately */
   @import (reference) &#39;../../design/config.less&#39;;
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function _(w,x){const a=c("ExternalLinkIcon");return l(),p("div",null,[u,d,r,s("p",null,[n("The default is to use less as the preprocessing language, so it is recommended to learn the features of "),s("a",v,[n("Less"),e(a)]),n(" before using it or when in doubt (for basic CSS knowledge or to consult properties, please refer to [MDN documentation]("),s("a",k,[n("https://developer.mozilla.org/zh-"),e(a)]),n(" CN/docs/Web/CSS/Reference)).")]),s("p",null,[n("The generic styles used in the project are stored under "),s("a",m,[n("src/design/"),e(a)]),n(".")]),g,s("p",null,[n("The project references "),s("a",h,[n("tailwindcss"),e(a)]),n(", see the documentation for details.")]),b,s("p",null,[n("For details, please refer to RFC"),s("a",f,[n("0023-scoped-styles-changes"),e(a)]),n(".")]),y])}const q=o(i,[["render",_],["__file","8-design.html.vue"]]);export{q as default};
