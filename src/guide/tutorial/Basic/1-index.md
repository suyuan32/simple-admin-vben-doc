---
title: Getting started
order: 1
author: Ryan SU
---

# Getting Started

This article will guide you through setting up a project from scratch.

## Introduction

::: tip About Components

Although the project includes some wrapped components, they may not meet all of your requirements. Therefore, if the components do not meet your requirements, you can write your own code and don't need to use or keep the project's built-in components.

:::

## Environment Setup

You need to install [pnpm](https://pnpm.io/), [Node.js](http://nodejs.org/), and [Git](https://git-scm.com/) on your local environment.

::: warning Note

- It is recommended to use [pnpm](https://pnpm.io/), otherwise the dependencies may not be installed.
- [Node.js](http://nodejs.org/) version should be `18.x` or higher
  :::

## Tool Configuration

If you are using [VS Code](https://code.visualstudio.com/) (recommended), you can install the following extensions to improve development efficiency and code formatting:

- [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Iconify icon plugin
- [windicss IntelliSense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - windicss suggestion plugin
- [I18n-ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n plugin
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) - vue3 support
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - script code check
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - code formatting
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css formatting
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - .env file highlighting

## Getting the Code

::: warning Note

Make sure that the directory where you store the code and all of its parent directories do not contain Chinese, Korean, Japanese, or spaces, otherwise errors may occur after installing dependencies and starting the project.

:::

### Getting the Code from GitHub

```bash
# clone the code
git clone https://github.com/suyuan32/simple-admin-backend-ui.git
```

### Getting the Code from Gitee

```bash
git clone https://gitee.com/hopefire/simple-admin-backend-ui.git
```

## Installation

### Installing Node.js

If you haven't installed [Node.js](https://nodejs.org/en/) on your computer, please install it.

**Verification**

```bash
# should output the corresponding npm version
npm -v
# should output the corresponding node version
node -v
```

If you need to have multiple versions of Node.js installed at the same time, you can use [Nvm](https://github.com/nvm-sh/nvm) or other tools to manage Node.js versions.

### Installing Dependencies

#### Installing pnpm

You must use [pnpm](https://pnpm.io/) for dependency installation (if other package managers cannot install dependencies, you need to handle it yourself).

If `pnpm` is not installed, you can globally install it using the following command:

```bash
# globally install pnpm
npm install -g pnpm
# verify
pnpm -v # should output the corresponding version number indicating successful installation
```

#### Dependency Installation Command

In the project's root directory, open a command prompt and execute the following command. Wait patiently for the installation to complete.

```bash
# install dependencies
pnpm install
```

### Troubleshooting imagemin Dependency Installation Failure

Since imagemin is difficult to install in China, here are several solutions:

1. Use `npm` and add the following configuration to your computer's `host` file:

```bash
199.232.4.133 raw.githubusercontent.com
```

::: tip Husky Installation Failure During Dependency Installation

Please check if your source code is downloaded directly from GitHub. Direct downloads do not have a `.git` folder, and `husky` requires `git` dependencies to be installed. In this case, you need to use `git init` to initialize the project and try to reinstall it.

:::

## npm script

```bash
"scripts": {
  # install dependencies
  "bootstrap": "pnpm install",
  # run the project
  "serve": "npm run dev",
  # run the project
  "dev": "vite",
  # build the project
  "build": "vite build && esno ./build/script/postBuild.ts",
  # build the project after clearing the cache
  "build:no-cache": "pnpm clean:cache && npm run build",
  # generate a bundle analysis. On Mac OS computers, the interface will automatically open after execution. On Windows computers, you need to open `./build/.cache/stats.html` to view it.
  "report": "cross-env REPORT=true npm run build",
  # type checking
  "type:check": "vue-tsc --noEmit --skipLibCheck",
  # preview the packaged content (packaging must be done first)
  "preview": "npm run build && vite preview",
  # preview the local dist file directory directly
  "preview:dist": "vite preview",
  # generate ChangeLog
  "log": "conventional-changelog -p angular -i CHANGELOG.md -s",
  # delete cache
  "clean:cache": "rimraf node_modules/.cache/ && rimraf node_modules/.vite",
  # delete node_modules (manual deletion of this directory is slow on Windows systems, so you can use this command to delete it)
  "clean:lib": "rimraf node_modules",
  # execute eslint validation and fix some problems
  "lint:eslint": "eslint \"{src,mock}/**/*.{vue,ts,tsx}\" --fix",
  # execute prettier formatting (this command will format all the code in the project with prettier, please use it with caution)
  "lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,json,tsx,css,less,scss,vue,html,md}\"",
  # execute stylelint formatting
  "lint:stylelint": "stylelint --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
  "lint:lint-staged": "lint-staged -c ./.husky/lintstagedrc.js",
  "lint:pretty": "pretty-quick --staged",
  # test gzip compression on the packaged result
  "test:gzip": "http-server dist --cors --gzip -c-1",
  # test brotli compression on the packaged directory
  "test:br": "http-server dist --cors --brotli -c-1",
  # reinstall dependencies, see instructions below
  "reinstall": "rimraf pnpm.lock && rimraf package.lock.json && rimraf node_modules && npm run bootstrap",
  "install:husky": "is-ci || husky install",
  # generate icon set, see instructions below
  "gen:icon": "esno ./build/generate/icon/index.ts",
  "postinstall": "npm run install:husky"
},
```

### Generating an Icon Set

This command generates the selected icon set, which is provided to the icon selector. Please refer to [Icon Set Generation](../dep/icon.md#预生成) for specific usage.

### Reinstalling Dependencies

This command will first delete `node_modules`, `pnpm.lock`, and `package.lock.json` before reinstalling dependencies (the installation speed will be significantly slower).

You can now modify the code for business development. We have built-in mock data, HMR real-time preview, state management, internationalization, global routing, and many other useful features to assist development. Please read other sections for more information.

## Directory description

```bash
├── apps
├── deploy
├── internal              # Internal configuration folder
│   ├── eslint-config     # Eslint configuration
│   ├── stylelint-config  # Stylelint configuration
│   ├── ts-config         # Typescript configuration
│   └── vite-config       # Vite configuration
├── mock                  # Mock folder
│   └── sys
├── packages
│   ├── hooks
│   │   └── src
│   └── types
│       └── src
├── public                # Publicly downloadable folder
│   └── resource
│       ├── img
│       └── tinymce
├── src
│   ├── api              # API interface definition folder
│   ├── assets           # Internal resource folder
│   ├── components       # Components
│   ├── design           # Design resource files
│   ├── directives       # Directives
│   ├── enums            # Enumerations
│   ├── hooks            # Hooks
│   ├── layouts          # Layout files
│   ├── locales          # Multilingual support
│   ├── logics           # Logic
│   ├── router           # Router
│   ├── settings         # Project settings
│   ├── store            # Store storage
│   ├── utils            # Utility classes
│   └── views            # Pages
└── types
```
