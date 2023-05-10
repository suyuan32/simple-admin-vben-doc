import{_ as n,X as a,Y as s,a2 as t}from"./framework-13746272.js";const e={},p=t(`<h1 id="countdown" tabindex="-1"><a class="header-anchor" href="#countdown" aria-hidden="true">#</a> CountDown</h1><p>倒计时组件</p><h2 id="countbutton" tabindex="-1"><a class="header-anchor" href="#countbutton" aria-hidden="true">#</a> CountButton</h2><p>倒计时按钮组件</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountdownInput</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/CountDown&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>any</code></td><td>-</td><td>-</td><td>绑定值</td></tr><tr><td>count</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>倒计时时间</td></tr><tr><td>beforeStartFunc</td><td><code>()=&gt;promise</code></td><td>-</td><td>-</td><td>倒计时之前执行的函数，返回 true 才会开始执行</td></tr></tbody></table><h2 id="countdowninput" tabindex="-1"><a class="header-anchor" href="#countdowninput" aria-hidden="true">#</a> CountDownInput</h2><p>倒计时输入框按钮组件</p><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CountdownInput</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;/@/components/CountDown&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> CountdownInput <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props-1" tabindex="-1"><a class="header-anchor" href="#props-1" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>value</td><td><code>any</code></td><td>-</td><td>-</td><td>绑定值</td></tr><tr><td>size</td><td><code>string</code></td><td><code>&#39;default&#39;, &#39;large&#39;, &#39;small&#39;</code></td><td>-</td><td>输入框即按钮大小</td></tr><tr><td>count</td><td><code>number</code></td><td><code>60</code></td><td>-</td><td>倒计时时间</td></tr><tr><td>sendCodeApi</td><td><code>()=&gt;promise</code></td><td>-</td><td>-</td><td>倒计时之前执行的函数，返回 true 才会开始执行</td></tr></tbody></table>`,14),o=[p];function c(d,u){return a(),s("div",null,o)}const i=n(e,[["render",c],["__file","count-down.html.vue"]]);export{i as default};