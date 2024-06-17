import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as t}from"./app-B9i7bvnE.js";const e={},n=t(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page"><span>Page</span></a></h1><p>Page related components</p><h2 id="pagewrapper" tabindex="-1"><a class="header-anchor" href="#pagewrapper"><span>PageWrapper</span></a></h2><p>Used to wrap page components</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">PageWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;left&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;right&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">PageWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">PageWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/@/components/Page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  components</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">PageWrapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>Title of the pageHeader.</td></tr><tr><td>dense</td><td><code>boolean</code></td><td><code>false</code></td><td>If <code>true</code>, removes padding/margin from the content.</td></tr><tr><td>content</td><td><code>string</code></td><td>-</td><td>Content of the pageHeader.</td></tr><tr><td>contentStyle</td><td><code>object</code></td><td>-</td><td>Style of the content area.</td></tr><tr><td>contentClass</td><td><code>string</code></td><td>-</td><td>Class of the content area.</td></tr><tr><td>contentBackground</td><td><code>boolean</code></td><td>-</td><td>Whether to add a background to the content area.</td></tr><tr><td>contentFullHeight</td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the content area should take up the full height of the screen.</td></tr><tr><td>fixedHeight</td><td><code>boolean</code></td><td><code>false</code></td><td>Whether the content area has a fixed height.</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h3><p><strong>All slots for pageHeader are supported.</strong></p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>leftFooter</td><td>Left area of the PageFooter.</td></tr><tr><td>rightFooter</td><td>Right area of the PageFooter.</td></tr><tr><td>headerContent</td><td>Content area of the pageHeader.</td></tr><tr><td>default</td><td>Main content area.</td></tr></tbody></table><h2 id="pagefooter" tabindex="-1"><a class="header-anchor" href="#pagefooter"><span>PageFooter</span></a></h2><p>Used for the bottom toolbar of the page.</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">PageFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;left&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> #</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;right&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">PageFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">PageFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/@/components/Page&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  components</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">PageFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slots-1" tabindex="-1"><a class="header-anchor" href="#slots-1"><span>Slots</span></a></h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>left</td><td><code>slot</code></td><td>-</td><td>Left area.</td></tr><tr><td>right</td><td><code>slot</code></td><td>-</td><td>Right area.</td></tr></tbody></table>`,17),l=[n];function h(p,k){return a(),i("div",null,l)}const g=s(e,[["render",h],["__file","page.html.vue"]]),o=JSON.parse('{"path":"/guide/components/Common/page.html","title":"Page","lang":"en-US","frontmatter":{"title":"Page","author":"Ryan SU","description":"Page Page related components PageWrapper Used to wrap page components Usage Props Slots All slots for pageHeader are supported. PageFooter Used for the bottom toolbar of the pag...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vben.ryansu.tech/zh/guide/components/Common/page.html"}],["meta",{"property":"og:url","content":"https://vben.ryansu.tech/guide/components/Common/page.html"}],["meta",{"property":"og:site_name","content":"Simple Admin Vben UI"}],["meta",{"property":"og:title","content":"Page"}],["meta",{"property":"og:description","content":"Page Page related components PageWrapper Used to wrap page components Usage Props Slots All slots for pageHeader are supported. PageFooter Used for the bottom toolbar of the pag..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-09T05:14:49.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-05-09T05:14:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-09T05:14:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\"}]}"]]},"headers":[{"level":2,"title":"PageWrapper","slug":"pagewrapper","link":"#pagewrapper","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]}]},{"level":2,"title":"PageFooter","slug":"pagefooter","link":"#pagefooter","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Slots","slug":"slots-1","link":"#slots-1","children":[]}]}],"git":{"createdTime":1683559583000,"updatedTime":1683609289000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"guide/components/Common/page.md","localizedDate":"May 8, 2023","autoDesc":true,"excerpt":"\\n<p>Page related components</p>\\n<h2>PageWrapper</h2>\\n<p>Used to wrap page components</p>\\n<h3>Usage</h3>\\n<div class=\\"language-vue line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"vue\\" data-title=\\"vue\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">div</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">PageWrapper</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> #</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">left</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;left&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">      &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> #</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">right</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;right&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">PageWrapper</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  &lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">div</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">script</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> lang</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"ts\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">PageWrapper</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"/@/components/Page\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">defineComponent</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"vue\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> default</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> defineComponent</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">  components</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">PageWrapper</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  setup</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">() {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {};</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">});</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">script</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{g as comp,o as data};