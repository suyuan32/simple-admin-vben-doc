import{_ as e,W as p,X as o,Y as n,$ as s,Z as c,a1 as a,D as l}from"./framework-4a45a4a9.js";const i={},r=a(`<h1 id="description-details-component" tabindex="-1"><a class="header-anchor" href="#description-details-component" aria-hidden="true">#</a> Description Details component</h1><p>Encapsulate the Descriptions component of <code>antv</code></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p-4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>基础示例<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:collapseOptions</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ canExpand: true, helpMessage: &#39;help me&#39; }<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mockData<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>schema<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Description</span> <span class="token attr-name">@register</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>register<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mt-4<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;ant-design-vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Description<span class="token punctuation">,</span>
  DescItem<span class="token punctuation">,</span>
  useDescription<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/Description/index&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">mockData</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nickName</span><span class="token operator">:</span> <span class="token string">&quot;VB&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">&quot;15695909xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&quot;190848757@qq.com&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">addr</span><span class="token operator">:</span> <span class="token string">&quot;厦门市思明区&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">certy</span><span class="token operator">:</span> <span class="token string">&quot;3504256199xxxxxxxxx&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&quot;orange&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token literal-property property">schema</span><span class="token operator">:</span> DescItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;用户名&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;nickName&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;昵称&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">curVal<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>curVal<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;phone&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;联系电话&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;邮箱&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">&quot;addr&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;地址&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Description<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDescription</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;useDescription&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> mockData<span class="token punctuation">,</span>
      <span class="token literal-property property">schema</span><span class="token operator">:</span> schema<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> mockData<span class="token punctuation">,</span> schema<span class="token punctuation">,</span> register <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usedescription" tabindex="-1"><a class="header-anchor" href="#usedescription" aria-hidden="true">#</a> useDescription</h2><p>Refer to the above example</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>register<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDescription</span><span class="token punctuation">(</span>Props<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>`,8),u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"Reminder",-1),k={href:"https://2x.antdv.com/components/descriptions-cn/#API",target:"_blank",rel:"noopener noreferrer"},m=a('<table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>Title</td></tr><tr><td>size</td><td><code>string</code></td><td><code>small</code></td><td>-</td><td>Size</td></tr><tr><td>bordered</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>Whether to show border</td></tr><tr><td>column</td><td><code>Number, Object</code></td><td><code>{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }</code></td><td>-</td><td>Number of <code>DescriptionItems</code> per row</td></tr><tr><td>useCollapse</td><td><code>boolean</code></td><td>-</td><td>-</td><td>Whether to wrap with CollapseContainer component</td></tr><tr><td>collapseOptions</td><td><code>Object</code></td><td>-</td><td>-</td><td>Properties of <code>CollapseContainer</code> component</td></tr><tr><td>schema</td><td><code>DescItem[]</code></td><td>-</td><td>-</td><td>Configuration for detail items, see <code>DescItem</code> configuration below</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>Data source</td></tr></tbody></table><h2 id="descitem" tabindex="-1"><a class="header-anchor" href="#descitem" aria-hidden="true">#</a> DescItem</h2><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Options</th><th>Description</th></tr></thead><tbody><tr><td>field</td><td><code>string</code></td><td>-</td><td>-</td><td>Field name</td></tr><tr><td>label</td><td><code>string</code></td><td>-</td><td>-</td><td>Label name</td></tr><tr><td>labelMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>Minimum width of label</td></tr><tr><td>contentMinWidth</td><td><code>number</code></td><td>-</td><td>-</td><td>Minimum width of content</td></tr><tr><td>labelStyle</td><td><code>any</code></td><td>-</td><td>-</td><td>Label style</td></tr><tr><td>span</td><td><code>number</code></td><td>-</td><td>-</td><td>Number of columns to merge</td></tr><tr><td>show</td><td><code>(data)=&gt;boolean</code></td><td>-</td><td>-</td><td>Dynamically determine whether the component is displayed</td></tr><tr><td>render</td><td><code>(val: string, data: any)=&gt;VNode,undefined,Element,string,number</code></td><td>-</td><td>-</td><td>Custom rendering of content</td></tr></tbody></table>',3);function v(b,h){const t=l("ExternalLinkIcon");return p(),o("div",null,[r,n("div",u,[d,n("p",null,[s("In addition to the parameters listed below, all other props in the official documentation are also supported. For details, please refer to "),n("a",k,[s("antv Description"),c(t)])])]),m])}const y=e(i,[["render",v],["__file","desc.html.vue"]]);export{y as default};
