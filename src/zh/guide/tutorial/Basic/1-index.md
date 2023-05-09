---
title: 开始
order: 1
author: Ryan SU
---

# 开始

本文会帮助你从头启动项目

## 前言

::: tip 关于组件

项目虽然二次封装了一些组件，但是可能不能满足大部分的要求。所以，如果组件不满足你的要求，完全可以不用甚至删除代码自己写，不必坚持使用项目自带的组件。

:::

## 环境准备

本地环境需要安装 [pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- 推荐使用[pnpm](https://pnpm.io/)，否则依赖可能安装不上。
- [Node.js](http://nodejs.org/) 版本要求`18.x`以上。

:::

## 工具配置

如果您使用的 IDE 是[vscode](https://code.visualstudio.com/)(推荐)的话，可以安装以下工具来提高开发效率及代码格式化

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify 图标插件
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss 提示插件
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 插件
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - vue 开发必备
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 脚本代码检查
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env 文件 高亮

## 代码获取

::: warning 注意

注意存放代码的目录及所有父级目录不能存在中文、韩文、日文以及空格，否则安装依赖后启动会出错。

:::

### 从 GitHub 获取代码

```bash
# clone 代码
git clone https://github.com/suyuan32/simple-admin-backend-ui.git

```

### 从 Gitee 获取代码

```bash
git clone https://gitee.com/hopefire/simple-admin-backend-ui.git
```

## 安装

### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v

```

如果你需要同时存在多个 node 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

### 安装依赖

#### pnpm 安装

必须使用 [pnpm](https://pnpm.io/)进行依赖安装（若其他包管理器安装不了需要自行处理）。

如果未安装`pnpm`，可以用下面命令来进行全局安装

```bash
# 全局安装yarn
npm install -g pnpm
# 验证
pnpm -v # 出现对应版本号即代表安装成功
```

#### 依赖安装命令

在项目根目录下，打开命令窗口执行，耐心等待安装完成即可

```bash
# 安装依赖
pnpm i
```

### imagemin 依赖安装失败解决方法

由于 imagemin 在国内安装困难，提供以下几个解决方案：

1. 使用 npm，在电脑 host 文件加上如下配置即可

```bash
199.232.4.133 raw.githubusercontent.com
```

::: tip 安装依赖时 husky 安装失败

请查看你的源码是否从 github 直接下载的，直接下载是没有 `.git` 文件夹的，而 `husky` 需要依赖 `git` 才能安装。此时需使用 `git init` 初始化项目，再尝试重新安装即可。

:::

## npm script

```bash
"scripts": {
  # 安装依赖
  "bootstrap": "yarn install",
  # 运行项目
  "serve": "npm run dev",
  # 运行项目
  "dev": "vite",
  # 构建项目
  "build": "vite build && esno ./build/script/postBuild.ts",
  # 清空缓存后构建项目
  "build:no-cache": "yarn clean:cache && npm run build",
  # 生成打包分析，在 `Mac OS` 电脑上执行完成后会自动打开界面，在 `Window` 电脑上执行完成后需要打开 `./build/.cache/stats.html` 查看
  "report": "cross-env REPORT=true npm run build",
  # 类型检查
  "type:check": "vue-tsc --noEmit --skipLibCheck",
  # 预览打包后的内容（先打包在进行预览）
  "preview": "npm run build && vite preview",
  # 直接预览本地 dist 文件目录
  "preview:dist": "vite preview",
  # 生成 ChangeLog
  "log": "conventional-changelog -p angular -i CHANGELOG.md -s",
  # 删除缓存
  "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
  # 删除 node_modules (`window` 系统手动删除该目录较慢，可以使用该命令来进行删除)
  "clean:lib": "rimraf node_modules",
  # 执行 eslint 校验，并修复部分问题
  "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # 执行 prettier 格式化（该命令会对项目所有代码进行 prettier 格式化，请谨慎执行）
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # 执行 stylelint 格式化
  "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  # 对打包结果进行 gzip 测试
  "test:gzip": "http-server dist --cors --gzip -c-1",
  # 对打包目录进行 brotli 测试
  "test:br": "http-server dist --cors --brotli -c-1",
  # 重新安装依赖，见下方说明
  "reinstall": "rimraf yarn.lock && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
  "install:husky": "is-ci || husky install",
  # 生成图标集，见下方说明
  "gen:icon": "esno ./build/generate/icon/index.ts",
  "postinstall": "npm run install:husky"
},
```

### 生成图标集

该命令会生成所选择的图标集，提供给图标选择器使用。具体使用方式请查看 [图标集生成](../dep/icon.md#图标集预生成)

### 重新安装依赖

该命令会先删除 `node_modules`、`yarn.lock`、`package.lock.json` 后再进行依赖重新安装（安装速度会明显变慢）。

接下来你可以修改代码进行业务开发了。我们内建了模拟数据、HMR 实时预览、状态管理、国际化、全局路由等各种实用的功能辅助开发，请阅读其他章节了解更多。

## 目录说明

```bash
├── apps
├── deploy
├── internal              # 内部配置文件夹
│   ├── eslint-config     # eslint 配置
│   ├── stylelint-config  # stylelint 配置
│   ├── ts-config         # typescript 配置
│   └── vite-config       # vite 配置
├── mock                  # mock 文件夹
│   └── sys
├── packages
│   ├── hooks
│   │   └── src
│   └── types
│       └── src
├── public                # 公开下载的文件夹
│   └── resource
│       ├── img
│       └── tinymce
├── src
│   ├── api              # api 接口定义文件夹
│   ├── assets           # 内部资源文件夹
│   ├── components       # 组件
│   ├── design           # 设计资源文件
│   ├── directives       # 指令
│   ├── enums            # 枚举
│   ├── hooks            # hook
│   ├── layouts          # 布局文件
│   ├── locales          # 多语言
│   ├── logics           # 逻辑
│   ├── router           # 路由
│   ├── settings         # 项目配置
│   ├── store            # 仓库存储
│   ├── utils            # 工具类
│   └── views            # 页面
└── types

```
