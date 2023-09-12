import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o,c as e,a as n,d as s,b as r,e as u}from"./app-cf691029.js";const c={},i=n("h1",{id:"flowchart",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flowchart","aria-hidden":"true"},"#"),s(" FlowChart")],-1),l=n("code",null,"didi/LogicFlow",-1),k={href:"http://logic-flow.org/guide/start.html",target:"_blank",rel:"noopener noreferrer"},d=u(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PageWrapper</span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>流程图<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>简单流程图示例,具体功能需要自己完善<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">contentFullHeight</span>
    <span class="token attr-name">fixedHeight</span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FlowChart</span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demoData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>PageWrapper</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
import { FlowChart } from &quot;/@/components/FlowChart&quot;;
import { PageWrapper } from &quot;/@/components/Page&quot;;

import demoData from &quot;./dataTurbo.json&quot;;

export default {
  components: { FlowChart, PageWrapper },
  setup() {
    return { demoData };
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th></tr></thead><tbody><tr><td>flowOptions</td><td><code>object</code></td><td>-</td><td>-</td><td>FlowCharts 配置项</td></tr><tr><td>data</td><td><code>object</code></td><td>-</td><td>-</td><td>流程数据</td></tr><tr><td>toolbar</td><td><code>boolean</code></td><td><code>true</code></td><td>-</td><td>是否显示工具栏</td></tr><tr><td>patternItems</td><td><code>[]</code></td><td>-</td><td>-</td><td>左侧拖拽列表数据</td></tr></tbody></table><h2 id="example-data" tabindex="-1"><a class="header-anchor" href="#example-data" aria-hidden="true">#</a> Example data</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;flowElementList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_33inf2k&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;efrwe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wewe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;开始&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;开始&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:startEvent&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Event_1d42u4p&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_379e0o9&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;efrwe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wewe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;结束&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">920</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">920</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;结束&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:endEvent&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Event_08p8i6q&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_0pfouf0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_3918lhh&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;efrwe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wewe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网关&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网关&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:exclusiveGateway&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Gateway_1fngqgj&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_33inf2k&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_0pfouf0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;efrwe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wewe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">420</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">420</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;用户&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:userTask&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Activity_2mgtaia&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_3918lhh&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Flow_379e0o9&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token string">&quot;efrwe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wewe&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;服务&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;服务&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:serviceTask&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Activity_1sp8qc8&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Event_1d42u4p&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Activity_2mgtaia&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">331</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;startPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">298</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;endPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">370</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pointsList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">298</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">370</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:sequenceFlow&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flow_33inf2k&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Activity_2mgtaia&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Gateway_1fngqgj&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边2&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">507</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边2&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;startPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">470</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;endPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">555</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pointsList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">470</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">555</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:sequenceFlow&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flow_0pfouf0&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Gateway_1fngqgj&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Activity_1sp8qc8&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边3&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">664</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边3&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;startPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">605</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;endPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">710</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pointsList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">605</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">710</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:sequenceFlow&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flow_3918lhh&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;incoming&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Activity_1sp8qc8&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;outgoing&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Event_08p8i6q&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;dockers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边4&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">871</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;边4&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;startPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">810</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;endPoint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">902</span><span class="token punctuation">,</span>
          <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;pointsList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">810</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;x&quot;</span><span class="token operator">:</span> <span class="token number">902</span><span class="token punctuation">,</span>
            <span class="token string-property property">&quot;y&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;logicFlowType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bpmn:sequenceFlow&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Flow_379e0o9&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(q,y){const a=p("ExternalLinkIcon");return o(),e("div",null,[i,n("p",null,[s("流程图组件，基于 "),l,s(" 的简单封装。详细配置请参考文档 "),n("a",k,[s("FlowChart"),r(a)])]),d])}const g=t(c,[["render",v],["__file","flow-chart.html.vue"]]);export{g as default};
