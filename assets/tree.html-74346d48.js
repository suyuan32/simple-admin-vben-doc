import{_ as p,X as o,Y as c,Z as n,a0 as s,$ as e,a2 as t,F as l}from"./framework-13746272.js";const d={},r=t(`<h1 id="tree" tabindex="-1"><a class="header-anchor" href="#tree" aria-hidden="true">#</a> Tree</h1><p>对 <code>antv</code> 的 tree 组件进行封装</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTree</span> <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>treeData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BasicTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/Tree/index&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> treeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./data&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/Container/index&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/Tree/index&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">treeData</span><span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;parent 1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;0-0&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;home|svg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;0-0-0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;0-0-1&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;0-0-0-0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;0-0-0-1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;parent 2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;1-1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;home|svg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;1-1-0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;1-1-1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;parent 3&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;2-2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;home|svg&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;2-2-0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;leaf&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;2-2-1&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BasicTree<span class="token punctuation">,</span> CollapseContainer <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> treeData <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2>`,5),i={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"温馨提醒",-1),k={href:"https://2x.antdv.com/components/tree-cn/#Tree-props",target:"_blank",rel:"noopener noreferrer"},v=t(`<table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>treeData</td><td><code>TreeItem[]</code></td><td>-</td><td>-</td><td>树组件数据</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>右键菜单列表</td><td></td></tr><tr><td>checkedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>勾选的节点</td><td></td></tr><tr><td>selectedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>选中的节点</td><td></td></tr><tr><td>expandedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>展开的节点</td><td></td></tr><tr><td>actionList</td><td><code>ActionItem[]</code></td><td>-</td><td>-</td><td>鼠标移动上去右边操作按钮列表</td><td></td></tr><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>定制标题字符串</td><td></td></tr><tr><td>toolbar</td><td><code>boolean</code></td><td>-</td><td>-</td><td>是否显示工具栏</td><td></td></tr><tr><td>search</td><td><code>boolean</code></td><td>-</td><td>-</td><td>显示搜索框</td><td></td></tr><tr><td>clickRowToExpand</td><td><code>boolean</code></td><td>-</td><td>-</td><td>是否在点击行时自动展开</td><td></td></tr><tr><td>beforeRightClick</td><td><code>(node, event)=&gt;ContextMenuItem[]</code></td><td>-</td><td>-</td><td>右键点击回调，可返回右键菜单列表数据来生成右键菜单</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>右键菜单列表数据</td><td></td></tr><tr><td>defaultExpandLevel</td><td><code>string ｜ number</code></td><td>-</td><td>-</td><td>初次渲染后默认展开的层级</td><td>2.4.1</td></tr><tr><td>defaultExpandAll</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>初次渲染后默认全部</td><td>2.4.1</td></tr><tr><td>searchValue(v-model)</td><td><code>string</code></td><td>-</td><td>-</td><td>当前搜索词</td><td>2.7.1</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">注意</p><p><code>defaultExpandLevel</code>、<code>defaultExpandAll</code> 仅在<strong>初次渲染</strong>时生效。如果<code>basicTree</code>是在创建完毕之后才设置的<code>treeData</code>(如异步数据)，需要在更新后自己调用<code>basicTree</code>提供的<code>expandAll</code>、<code>filterByLevel</code>来执行展开</p></div><p><strong>ActionItem</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 渲染的图标</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>record<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// 是否显示</span>
  show<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>record<span class="token operator">:</span> Recordable<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ContextMenuItem</strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 文本</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 图标</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// 是否禁用</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// 事件</span>
  handler<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token comment">// 是否显示分隔线</span>
  divider<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// 子级菜单数据</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ContextMenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2>`,7),m={class:"hint-container tip"},y=n("p",{class:"hint-container-title"},"温馨提醒",-1),b={href:"https://2x.antdv.com/components/tree-cn/#Tree-props",target:"_blank",rel:"noopener noreferrer"},g=t('<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>checkAll</td><td><code>(checkAll: boolean) =&gt; void</code></td><td>选择所有</td></tr><tr><td>expandAll</td><td><code>(expandAll: boolean) =&gt; void</code></td><td>展开所有</td></tr><tr><td>setExpandedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>设置展开节点</td></tr><tr><td>getExpandedKeys</td><td><code>() =&gt; Keys</code></td><td>获取展开节点</td></tr><tr><td>setSelectedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>设置选中节点</td></tr><tr><td>getSelectedKeys</td><td><code>() =&gt; Keys</code></td><td>获取选中节点</td></tr><tr><td>setCheckedKeys</td><td><code>(keys: CheckKeys) =&gt; void</code></td><td>设置勾选节点</td></tr><tr><td>getCheckedKeys</td><td><code>() =&gt; CheckKeys</code></td><td>获取勾选节点</td></tr><tr><td>filterByLevel</td><td><code>(level: number) =&gt; void</code></td><td>显示指定等级</td></tr><tr><td>insertNodeByKey</td><td><code>(opt: InsertNodeParams) =&gt; void</code></td><td>插入子节点到指定节点内</td></tr><tr><td>deleteNodeByKey</td><td><code>(key: string) =&gt; void</code></td><td>根据 key 删除节点</td></tr><tr><td>updateNodeByKey</td><td><code>(key: string, node: Omit&lt;TreeItem, &#39;key&#39;&gt;) =&gt; void</code></td><td>根据 key 更新节点</td></tr><tr><td>setSearchValue</td><td><code>(value: string) =&gt; void</code></td><td>设置当前搜索词（v2.7.1）</td></tr><tr><td>getSearchValue</td><td><code>() =&gt; string</code></td><td>获取当前搜索词(v2.7.1)</td></tr></tbody></table>',2);function h(q,f){const a=l("ExternalLinkIcon");return o(),c("div",null,[r,n("div",i,[u,n("p",null,[s("除以下参数外，官方文档内的 props 也都支持，具体可以参考 "),n("a",k,[s("antv tree"),e(a)])])]),v,n("div",m,[y,n("p",null,[s("官方文档内的 slot 都支持，具体可以参考 "),n("a",b,[s("antv tree"),e(a)])])]),g])}const _=p(d,[["render",h],["__file","tree.html.vue"]]);export{_ as default};