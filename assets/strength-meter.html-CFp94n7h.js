import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B9i7bvnE.js";const t={},l=n(`<h1 id="strengthmeter" tabindex="-1"><a class="header-anchor" href="#strengthmeter"><span>StrengthMeter</span></a></h1><p>Used to verify password strength</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;p-4 flex justify-center&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;demo-wrap p-10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">StrengthMeter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;默认&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">StrengthMeter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;禁用&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">br</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">StrengthMeter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">        placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;隐藏input&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">show-input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">        value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;!@#qwe12345&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">StrengthMeter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/@/components/StrengthMeter/index&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  components</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    StrengthMeter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;less&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> scoped</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">.demo-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">50</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  border-radius</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">  background</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">#fff</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>value</td><td><code>string</code></td><td>-</td><td>-</td><td>The value to be validated.</td></tr><tr><td>showInput</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Whether to show the input field.</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>-</td><td>Whether the component is disabled.</td></tr></tbody></table><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><table><thead><tr><th>Event Name</th><th>Callback Parameters</th><th>Description</th></tr></thead><tbody><tr><td>score-change</td><td><code>number</code></td><td>Triggered when the strength value changes.</td></tr><tr><td>change</td><td><code>string</code></td><td>Triggered when the input value changes.</td></tr></tbody></table>`,8),e=[l];function h(p,k){return a(),i("div",null,e)}const B=s(t,[["render",h],["__file","strength-meter.html.vue"]]),g=JSON.parse('{"path":"/guide/components/Common/strength-meter.html","title":"StrengthMeter","lang":"en-US","frontmatter":{"title":"StrengthMeter","author":"Ryan SU","description":"StrengthMeter Used to verify password strength Usage Props Events","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vben.ryansu.tech/zh/guide/components/Common/strength-meter.html"}],["meta",{"property":"og:url","content":"https://vben.ryansu.tech/guide/components/Common/strength-meter.html"}],["meta",{"property":"og:site_name","content":"Simple Admin Vben UI"}],["meta",{"property":"og:title","content":"StrengthMeter"}],["meta",{"property":"og:description","content":"StrengthMeter Used to verify password strength Usage Props Events"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-09T05:14:49.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-05-09T05:14:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"StrengthMeter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-09T05:14:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\"}]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"Events","slug":"events","link":"#events","children":[]}],"git":{"createdTime":1683559583000,"updatedTime":1683609289000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":0.46,"words":139},"filePathRelative":"guide/components/Common/strength-meter.md","localizedDate":"May 8, 2023","autoDesc":true,"excerpt":"\\n<p>Used to verify password strength</p>\\n<h2>Usage</h2>\\n<div class=\\"language-vue line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"vue\\" data-title=\\"vue\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">div</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> class</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"p-4 flex justify-center\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">div</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> class</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"demo-wrap p-10\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">StrengthMeter</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> placeholder</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"默认\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">StrengthMeter</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> placeholder</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"禁用\\"</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> disabled</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">br</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">StrengthMeter</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">        placeholder</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"隐藏input\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">        :</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">show-input</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#ABB2BF\\">\\"</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">false</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#ABB2BF\\">\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">        value</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"!@#qwe12345\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">div</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  &lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">div</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">script</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> lang</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"ts\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">defineComponent</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"vue\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">StrengthMeter</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"/@/components/StrengthMeter/index\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> default</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> defineComponent</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">  components</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">    StrengthMeter</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">});</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">script</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">style</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> lang</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"less\\"</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> scoped</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">.demo-wrap</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#ABB2BF\\">  width</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">50</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E06C75\\">%</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#ABB2BF\\">  border-radius</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">10</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E06C75\\">px</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#ABB2BF\\">  background</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">#fff</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">style</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{B as comp,g as data};