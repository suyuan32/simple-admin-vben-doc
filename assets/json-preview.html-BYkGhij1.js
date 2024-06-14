import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-B4-XZcQ1.js";const e={},t=n(`<h1 id="jsonpreview" tabindex="-1"><a class="header-anchor" href="#jsonpreview"><span>JsonPreview</span></a></h1><p>json data preview component</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">JsonPreview</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">JsonPreview</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;/@/components/JsonPreview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  components</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">JsonPreview</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  setup</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Optional Values</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>Json data to be previewed</td></tr></tbody></table>`,6),l=[t];function h(p,k){return a(),i("div",null,l)}const o=s(e,[["render",h],["__file","json-preview.html.vue"]]),B=JSON.parse('{"path":"/guide/components/Common/json-preview.html","title":"JsonPreview","lang":"en-US","frontmatter":{"title":"JsonPreview","author":"Ryan SU","description":"JsonPreview json data preview component Usage Props","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://vben.ryansu.tech/zh/guide/components/Common/json-preview.html"}],["meta",{"property":"og:url","content":"https://vben.ryansu.tech/guide/components/Common/json-preview.html"}],["meta",{"property":"og:site_name","content":"Simple Admin Vben UI"}],["meta",{"property":"og:title","content":"JsonPreview"}],["meta",{"property":"og:description","content":"JsonPreview json data preview component Usage Props"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-05-09T05:14:49.000Z"}],["meta",{"property":"article:author","content":"Ryan SU"}],["meta",{"property":"article:modified_time","content":"2023-05-09T05:14:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JsonPreview\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-05-09T05:14:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ryan SU\\"}]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"git":{"createdTime":1683559583000,"updatedTime":1683609289000,"contributors":[{"name":"Ryan SU","email":"yuansu.china.work@gmail.com","commits":2}]},"readingTime":{"minutes":0.18,"words":54},"filePathRelative":"guide/components/Common/json-preview.md","localizedDate":"May 8, 2023","autoDesc":true,"excerpt":"\\n<p>json data preview component</p>\\n<h2>Usage</h2>\\n<div class=\\"language-vue line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"vue\\" data-title=\\"vue\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">JsonPreview</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> :</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\">data</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#ABB2BF\\">\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">data</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#ABB2BF\\">\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> /&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">template</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">script</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#D19A66\\"> lang</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"ts\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">defineComponent</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"vue\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">JsonPreview</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> } </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"/@/components/JsonPreview\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">export</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> default</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> defineComponent</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">  components</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">JsonPreview</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">  setup</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">() {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    return</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">      data</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: { </span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">hello</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"world\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    };</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">  },</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">});</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">script</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,B as data};
