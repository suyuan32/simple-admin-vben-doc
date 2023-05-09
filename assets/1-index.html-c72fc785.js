import{_ as o,W as c,X as r,Y as s,$ as n,Z as e,a0 as d,a1 as t,D as i}from"./framework-4a45a4a9.js";const p={},u=t('<h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><p>本文会帮助你从头启动项目</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><div class="hint-container tip"><p class="hint-container-title">关于组件</p><p>项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。</p></div><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2>',5),m={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},b={class:"hint-container warning"},k=s("p",{class:"hint-container-title"},"注意",-1),g={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},q={href:"http://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"18.x",-1),f=s("h2",{id:"工具配置",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#工具配置","aria-hidden":"true"},"#"),n(" 工具配置")],-1),y={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://marketplace.visualstudio.com/items?itemName=antfu.iconify",target:"_blank",rel:"noopener noreferrer"},N={href:"https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense",target:"_blank",rel:"noopener noreferrer"},w={href:"https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally",target:"_blank",rel:"noopener noreferrer"},j={href:"https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin",target:"_blank",rel:"noopener noreferrer"},E={href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"},I={href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"},L={href:"https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint",target:"_blank",rel:"noopener noreferrer"},B={href:"https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv",target:"_blank",rel:"noopener noreferrer"},V=t(`<h2 id="代码获取" tabindex="-1"><a class="header-anchor" href="#代码获取" aria-hidden="true">#</a> 代码获取</h2><div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。</p></div><h3 id="从-github-获取代码" tabindex="-1"><a class="header-anchor" href="#从-github-获取代码" aria-hidden="true">#</a> 从 GitHub 获取代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># clone 代码</span>
<span class="token function">git</span> clone https://github.com/suyuan32/simple-admin-backend-ui.git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="从-gitee-获取代码" tabindex="-1"><a class="header-anchor" href="#从-gitee-获取代码" aria-hidden="true">#</a> 从 Gitee 获取代码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/hopefire/simple-admin-backend-ui.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="安装-node-js" tabindex="-1"><a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a> 安装 Node.js</h3>`,8),S={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},C=t(`<p><strong>验证</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 出现相应npm版本即可</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>
<span class="token comment"># 出现相应node版本即可</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G={href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"},R=s("h3",{id:"安装依赖",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装依赖","aria-hidden":"true"},"#"),n(" 安装依赖")],-1),z=s("h4",{id:"pnpm-安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pnpm-安装","aria-hidden":"true"},"#"),n(" pnpm 安装")],-1),A={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},D=t(`<p>如果未安装<code>pnpm</code>，可以用下面命令来进行全局安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局安装yarn</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> <span class="token function">pnpm</span>
<span class="token comment"># 验证</span>
<span class="token function">pnpm</span> <span class="token parameter variable">-v</span> <span class="token comment"># 出现对应版本号即代表安装成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="依赖安装命令" tabindex="-1"><a class="header-anchor" href="#依赖安装命令" aria-hidden="true">#</a> 依赖安装命令</h4><p>在项目根目录下，打开命令窗口执行，耐心等待安装完成即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>
<span class="token function">pnpm</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="imagemin-依赖安装失败解决方法" tabindex="-1"><a class="header-anchor" href="#imagemin-依赖安装失败解决方法" aria-hidden="true">#</a> imagemin 依赖安装失败解决方法</h3><p>由于 imagemin 在国内安装困难，提供以下几个解决方案：</p><ol><li>使用 npm，在电脑 host 文件加上如下配置即可</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">199.232</span>.4.133 raw.githubusercontent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">安装依赖时 husky 安装失败</p><p>请查看你的源码是否从 github 直接下载的，直接下载是没有 <code>.git</code> 文件夹的，而 <code>husky</code> 需要依赖 <code>git</code> 才能安装。此时需使用 <code>git init</code> 初始化项目，再尝试重新安装即可。</p></div><h2 id="npm-script" tabindex="-1"><a class="header-anchor" href="#npm-script" aria-hidden="true">#</a> npm script</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token comment"># 安装依赖</span>
  <span class="token string">&quot;bootstrap&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn install&quot;</span>,
  <span class="token comment"># 运行项目</span>
  <span class="token string">&quot;serve&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run dev&quot;</span>,
  <span class="token comment"># 运行项目</span>
  <span class="token string">&quot;dev&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite&quot;</span>,
  <span class="token comment"># 构建项目</span>
  <span class="token string">&quot;build&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite build &amp;&amp; esno ./build/script/postBuild.ts&quot;</span>,
  <span class="token comment"># 清空缓存后构建项目</span>
  <span class="token string">&quot;build:no-cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;yarn clean:cache &amp;&amp; npm run build&quot;</span>,
  <span class="token comment"># 生成打包分析，在 \`Mac OS\` 电脑上执行完成后会自动打开界面，在 \`Window\` 电脑上执行完成后需要打开 \`./build/.cache/stats.html\` 查看</span>
  <span class="token string">&quot;report&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;cross-env REPORT=true npm run build&quot;</span>,
  <span class="token comment"># 类型检查</span>
  <span class="token string">&quot;type:check&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vue-tsc --noEmit --skipLibCheck&quot;</span>,
  <span class="token comment"># 预览打包后的内容（先打包在进行预览）</span>
  <span class="token string">&quot;preview&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run build &amp;&amp; vite preview&quot;</span>,
  <span class="token comment"># 直接预览本地 dist 文件目录</span>
  <span class="token string">&quot;preview:dist&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;vite preview&quot;</span>,
  <span class="token comment"># 生成 ChangeLog</span>
  <span class="token string">&quot;log&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot;</span>,
  <span class="token comment"># 删除缓存</span>
  <span class="token string">&quot;clean:cache&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf node_modules/.cache/ &amp;&amp; rimraf node_modules/.vite&quot;</span>,
  <span class="token comment"># 删除 node_modules (\`window\` 系统手动删除该目录较慢，可以使用该命令来进行删除)</span>
  <span class="token string">&quot;clean:lib&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf node_modules&quot;</span>,
  <span class="token comment"># 执行 eslint 校验，并修复部分问题</span>
  <span class="token string">&quot;lint:eslint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;eslint <span class="token entity" title="\\&quot;">\\&quot;</span>{src,mock}/**/*.{vue,ts,tsx}<span class="token entity" title="\\&quot;">\\&quot;</span> --fix&quot;</span>,
  <span class="token comment"># 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）</span>
  <span class="token string">&quot;lint:prettier&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;prettier --write --loglevel warn <span class="token entity" title="\\&quot;">\\&quot;</span>src/**/*.{js,json,tsx,css,less,scss,vue,html,md}<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>,
  <span class="token comment"># 执行 stylelint 格式化</span>
  <span class="token string">&quot;lint:stylelint&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;stylelint --fix <span class="token entity" title="\\&quot;">\\&quot;</span>**/*.{vue,less,postcss,css,scss}<span class="token entity" title="\\&quot;">\\&quot;</span> --cache --cache-location node_modules/.cache/stylelint/&quot;</span>,
  <span class="token string">&quot;lint:lint-staged&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lint-staged -c ./.husky/lintstagedrc.js&quot;</span>,
  <span class="token string">&quot;lint:pretty&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;pretty-quick --staged&quot;</span>,
  <span class="token comment"># 对打包结果进行 gzip 测试</span>
  <span class="token string">&quot;test:gzip&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http-server dist --cors --gzip -c-1&quot;</span>,
  <span class="token comment"># 对打包目录进行 brotli 测试</span>
  <span class="token string">&quot;test:br&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http-server dist --cors --brotli -c-1&quot;</span>,
  <span class="token comment"># 重新安装依赖，见下方说明</span>
  <span class="token string">&quot;reinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;rimraf yarn.lock &amp;&amp; rimraf package.lock.json &amp;&amp; rimraf node_modules &amp;&amp; npm run bootstrap&quot;</span>,
  <span class="token string">&quot;install:husky&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;is-ci || husky install&quot;</span>,
  <span class="token comment"># 生成图标集，见下方说明</span>
  <span class="token string">&quot;gen:icon&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;esno ./build/generate/icon/index.ts&quot;</span>,
  <span class="token string">&quot;postinstall&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;npm run install:husky&quot;</span>
<span class="token punctuation">}</span>,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成图标集" tabindex="-1"><a class="header-anchor" href="#生成图标集" aria-hidden="true">#</a> 生成图标集</h3>`,13),H=t(`<h3 id="重新安装依赖" tabindex="-1"><a class="header-anchor" href="#重新安装依赖" aria-hidden="true">#</a> 重新安装依赖</h3><p>该命令会先删除 <code>node_modules</code>、<code>yarn.lock</code>、<code>package.lock.json</code> 后再进行依赖重新安装（安装速度会明显变慢）。</p><p>接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。</p><h2 id="目录说明" tabindex="-1"><a class="header-anchor" href="#目录说明" aria-hidden="true">#</a> 目录说明</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── apps
├── deploy
├── internal              <span class="token comment"># 内部配置文件夹</span>
│   ├── eslint-config     <span class="token comment"># eslint 配置</span>
│   ├── stylelint-config  <span class="token comment"># stylelint 配置</span>
│   ├── ts-config         <span class="token comment"># typescript 配置</span>
│   └── vite-config       <span class="token comment"># vite 配置</span>
├── mock                  <span class="token comment"># mock 文件夹</span>
│   └── sys
├── packages
│   ├── hooks
│   │   └── src
│   └── types
│       └── src
├── public                <span class="token comment"># 公开下载的文件夹</span>
│   └── resource
│       ├── img
│       └── tinymce
├── src
│   ├── api              <span class="token comment"># api 接口定义文件夹</span>
│   ├── assets           <span class="token comment"># 内部资源文件夹</span>
│   ├── components       <span class="token comment"># 组件</span>
│   ├── design           <span class="token comment"># 设计资源文件</span>
│   ├── directives       <span class="token comment"># 指令</span>
│   ├── enums            <span class="token comment"># 枚举</span>
│   ├── hooks            <span class="token comment"># hook</span>
│   ├── layouts          <span class="token comment"># 布局文件</span>
│   ├── locales          <span class="token comment"># 多语言</span>
│   ├── logics           <span class="token comment"># 逻辑</span>
│   ├── router           <span class="token comment"># 路由</span>
│   ├── settings         <span class="token comment"># 项目配置</span>
│   ├── store            <span class="token comment"># 仓库存储</span>
│   ├── utils            <span class="token comment"># 工具类</span>
│   └── views            <span class="token comment"># 页面</span>
└── types

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function O(M,P){const a=i("ExternalLinkIcon"),l=i("RouterLink");return c(),r("div",null,[u,s("p",null,[n("本地环境需要安装 "),s("a",m,[n("pnpm"),e(a)]),n("、"),s("a",v,[n("Node.js"),e(a)]),n(" 和 "),s("a",h,[n("Git"),e(a)])]),s("div",b,[k,s("ul",null,[s("li",null,[n("推荐使用"),s("a",g,[n("pnpm"),e(a)]),n("，否则依赖可能安装不上。")]),s("li",null,[s("a",q,[n("Node.js"),e(a)]),n(" 版本要求"),_,n("以上。")])])]),f,s("p",null,[n("如果您使用的 IDE 是"),s("a",y,[n("vscode"),e(a)]),n("(推荐)的话，可以安装以下工具来提高开发效率及代码格式化")]),s("ul",null,[s("li",null,[s("a",x,[n("Iconify IntelliSense"),e(a)]),n(" - Iconify 图标插件")]),s("li",null,[s("a",N,[n("windicss IntelliSense"),e(a)]),n(" - windicss 提示插件")]),s("li",null,[s("a",w,[n("I18n-ally"),e(a)]),n(" - i18n 插件")]),s("li",null,[s("a",j,[n("Volar"),e(a)]),n(" - vue 开发必备")]),s("li",null,[s("a",E,[n("ESLint"),e(a)]),n(" - 脚本代码检查")]),s("li",null,[s("a",I,[n("Prettier"),e(a)]),n(" - 代码格式化")]),s("li",null,[s("a",L,[n("Stylelint"),e(a)]),n(" - css 格式化")]),s("li",null,[s("a",B,[n("DotENV"),e(a)]),n(" - .env 文件 高亮")])]),V,s("p",null,[n("如果您电脑未安装"),s("a",S,[n("Node.js"),e(a)]),n("，请安装它。")]),C,s("p",null,[n("如果你需要同时存在多个 node 版本，可以使用 "),s("a",G,[n("Nvm"),e(a)]),n(" 或者其他工具进行 Node.js 进行版本管理。")]),R,z,s("p",null,[n("必须使用 "),s("a",A,[n("pnpm"),e(a)]),n("进行依赖安装（若其他包管理器安装不了需要自行处理）。")]),D,s("p",null,[n("该命令会生成所选择的图标集，提供给图标选择器使用。具体使用方式请查看 "),e(l,{to:"/zh/guide/tutorial/dep/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E9%A2%84%E7%94%9F%E6%88%90"},{default:d(()=>[n("图标集生成")]),_:1})]),H])}const W=o(p,[["render",O],["__file","1-index.html.vue"]]);export{W as default};
