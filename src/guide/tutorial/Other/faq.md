---
title: FAQ
author: Ryan SU
---

# Frequently Asked Questions

::: tip

This is a list of some common questions. If you don't have one, you can mention it in the [issue](https://github.com/vbenjs/vue-vben-admin/issues).

:::

## Advice

When you encounter a problem, you can start by looking for it in the following ways

1. search the GitHub repository [issue](https://github.com/vbenjs/vue-vben-admin/issues) for the module in question
2. search for the problem from [google](https://www.google.com)
3. search from [baidu](https://www.baidu.com) for the issue
4. If you can't find the issue in the list below, you can ask a question at issue [issues](https://github.com/vbenjs/vue-vben-admin/issues)
5. If you need to discuss something other than the issue type, please go to [discussions](https://github.com/vbenjs/vue-vben-admin/discussions) to discuss

## Question about cache update

The project configuration of vben-admin is cached in `localStorage` by default, so some configuration may not be changed after the version update.

The solution is to change the `version` version number in `package.json` each time you update the code. Because the key of localStorage is based on the version number. So after updating, the previous configuration will be invalidated if the version is different. Just log in again

`VUE_VBEN_ADMIN__DEVELOPMENT__2.0.3__COMMON__LOCAL__KEY__` The composition of the key is [project name]+[development environment]+[version number]+[key].

## Questions about modifying configuration files

When modifying environment files such as `.env` and `vite.config.ts` files, vite will automatically restart the service.

Please re-run the project to solve the problem.

## esbuild mode with LEGACY package failure

If build.minify is set to 'esbuild' and LEGACY is not enabled, otherwise the package will report an error, choose one of the two.

## ant-design-vue console warnings

The reason you see the following warning in the console is that `ant-design-vue` detects if `babel-plugin-import` is used to determine if the component library is introduced on-demand.

But the project is using the vite plugin [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) for on-demand importing. There's no need to use babel to convert the code once in vite.

So if you want to turn off this warning, you have to wait for ant-design-vue to provide a configuration that turns off the warning.

```bash
You are using a whole package of antd, please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size. Not support Vite !!!
```

Translated with www.DeepL.com/Translator (free version)

## Add a menu and it doesn't show up

The menu must match the route to be displayed in the interface, so make sure the menu and the corresponding route exist to be displayed.

## imagemin dependency installation failed

Since imagemin is difficult to install in China, here are a few solutions:

1. Using npm, add the following configuration to your computer host file

```bash
199.232.4.133 raw.githubusercontent.com
```

## Failed to install imagemin dependency using pnpm

If you still can't install the dependency using pnpm, you can remove the image compression feature by doing the following:

- Remove the `vite-plugin-imagemin` dependency from `package.json`. This will cause the images to be uncompressed, but you can manually go to the online site to do so. Here we recommend [tinypng](https://tinypng.com/)
- 2. Note `vite-plugin-imagemin` plugin reference

```ts
import { configImageminPlugin } from ". /imagemin".
VITE_USE_IMAGEMIN && vitePlugins.push(configImageminPlugin()).
```

## Failed to install dependencies within Linux

If you execute `pnpm install` you will get the following error:

```bash
gifsicle pre-build test failed
compiling from source
```

It is possible that the linux server needs to be configured, and `imagemin` will cause the dependency installation to fail.

Here is `Centos` as an example

- Solution 1.

1. Add the following to the yum source

```bash
[nasm]
name=The Netwide Assembler
baseurl=http://www.nasm.us/pub/nasm/stable/linux/
enabled=1
gpgcheck=0

[nasm-testing]
name=The Netwide Assembler (release candidate builds)
baseurl=http://www.nasm.us/pub/nasm/testing/linux/
enabled=0
gpgcheck=0

[nasm-snapshot]
name=The Netwide Assembler (daily snapshot builds)
baseurl=http://www.nasm.us/pub/nasm/snapshots/latest/linux/
enabled=0
gpgcheck=0
```

Create a new `Centos-Nasm.repo` under `/etc/yum.repos.d/`, copy the above content to this file

2. Execute `yum install libtool automake autoconf nasm`
3. Re-execute `pnpm install`

## Local running error reporting

Because vite does not convert the code locally, and the code uses relatively new syntax such as optional chains. Therefore, local development needs to use a higher version browser (`Chrome 85+`) for development

## The page is blank after the tab page is switched

This is because the routing switching animation is enabled, and the corresponding page component has multiple root nodes, just add `<div></div>` to the outermost layer of the page

**Error example**

```vue
<template>
  <!-- 注释也算一个节点 -->
  <h1>text h1</h1>
  <h2>text h2</h2>
</template>
```

**Correct Example**

```vue
<template>
  <div>
    <h1>text h1</h1>
    <h2>text h2</h2>
  </div>
</template>
```

::: tip tip

- If you want to use multiple root tags, you can disable the route switching animation
- The root comment node under the template is also a node

:::

## Component naming problem

Currently in vite+vue3.0.5 version, if the component name contains keywords, it may cause memory overflow. For example `ImportExcel` excel import component.

## My code can be developed locally, but not packaged

At present, it is found that there may be the following reasons, which can be checked from the following reasons. If there are other possibilities, you can submit a pr to tell me

1. The variable ctx is used, and ctx itself is not exposed in the instance type. You Da also said not to use this attribute. This attribute is for internal use only.

```ts
import { getCurrentInstance } from "vue";
getCurrentInstance().ctx.xxxx;
```

## safari problem

At present, there will be problems with the local development and running style on safari. I haven't found the reason yet. If you know it, please let me know.

## Template difference

- [Vue-Vben-Admin](https://github.com/vbenjs/vue-vben-admin) - It contains Demo examples, and I personally suggest not to develop on it. Of course, if you have strong hands-on ability, you can change it directly.
- [Vue-Vben-Admin-Thin-Next](https://github.com/vbenjs/vben-admin-thin-next) template project after streamlining the code. It is suitable for secondary development on this basis.

## Environmental issues

If there is a dependency installation error report, an error report at startup, etc. First check whether the computer environment is fully installed.

- Node version must be greater than `12.0.0`, `13` is not supported, version 14 is recommended.
- Git
- pnpm latest version

## Dependency installation problem

- If the dependency cannot be installed or the startup error is reported, you can first try to delete `pnpm.lock` and `node_modules`, and then run `pnpm install` again
- If the dependency cannot be installed or an error is reported, you can try to switch the phone hotspot to install the dependency.
- If it still doesn't work, you can configure the domestic mirror installation by yourself.
- You can also create a `.npmrc` file in the project root directory, the content is as follows

```bash
# .npmrc
registry = https://registry.npm.taobao.org
```

Then re-execute `pnpm run reinstall` and wait for the installation to complete

## How to ensure that my code can be updated to the latest code

If you use this project for project development. During development, I want to synchronize the latest code. The way you can set multiple sources

1. Clone code

```bash
git clone https://github.com/vbenjs/vben-admin-thin-next.git
```

2. Add your own company git source address

```bash
# up is the source name, which can be set at will
# gitUrl is the latest open source code
git remote add up gitUrl;
```

3. Submit the code to your company git

```bash
# Submit the code to your company
# main is the branch name and needs to be modified according to the situation
git push up main

# Synchronize company code
# main is the branch name and needs to be modified according to the situation
git pull up main
```

4. How to synchronize the latest open source code

```bash
git pull origin main
```

::: tip

Conflicts arise when synchronizing code. Just need to resolve the conflict

:::

## The package file is too large

- First of all, because the full version refers to more library files, the package will be larger. You can use the lite version for development

- Secondly, it is recommended to enable gzip, and the volume will be only about 1/3 of the original size after use.

gzip can be opened directly by the server. If so, the frontend does not need to build `.gz` formatted files

If the front-end builds a `.gz` file, taking nginx as an example, nginx needs to enable the `gzip_static: on` option.

- When enabling gzip, you can also enable `brotli` at the same time, which has better compression than gzip. both can coexist

**Notice**

- gzip_static: This module requires nginx to be installed separately. The default nginx does not have this module installed.

- Turning on `brotli` also requires nginx to install additional modules

## run error

If an error similar to the following occurs, please check that the full path of the project (including all parent paths) cannot appear in Chinese, Japanese, or Korean. Otherwise there will be path access 404 causing the following problems

```ts
[vite] Failed to resolve module import "ant-design-vue/dist/antd.css-vben-adminode_modulesant-design-vuedistantd.css". (imported by /@/setup/ant-design-vue/index.ts)
```

## Why moment.js

Many people ask why not use `dayjs`. As you can see in the project dependencies, it comes with [Ant-Design-Vue](https://2x.antdv.com/docs/vue/introduce-cn/) internally.

At present, there is no Vite-based dayjs solution to replace momentjs, and webpack already has it. Wait for it to appear in the future and replace it.

## Console routing warning issues

If you see the following warning on the console, and the page **can be opened normally**, you can ignore the warning.

Subsequent `vue-router` may provide configuration items to turn off warnings

**This warning has been removed from version 2.6.1 and above**

```ts
[Vue Router warn]: No match found for location with path "xxxx"
```

## Start error

When the following error message appears, please check whether your nodejs version number meets the requirements

```bash
TypeError: str.matchAll is not a function
at Object.extractor (vue-vben-admin-main\node_modules@purge-icons\core\dist\index.js:146:27)
at Extract (vue-vben-admin-main\node_modules@purge-icons\core\dist\index.js:173:54)

```

## Page error

When the following error occurs on the page, it is because there is an error inside the routing component corresponding to /xxx.

```ts
  Uncaught (in promise) Error: Couldn't resolve component "default" at "/xxx"

```

You can try to check from the following points

1. Check whether all files imported in the corresponding component are correct
2. Check whether the import method is wrong.

```ts
// correct
import { cloneDeep } from "lodash-es";

// wrong
import _ from "lodash-es";
```

3. Check whether the style uses variables and whether the corresponding variable file is imported
4. Check the code for obvious syntax errors

In this way, the value used will not forget xxx.value for data acquisition

## Cross domain issues

Refer to [Cross Domain Issues](../dep/cors)

## Interface request problem

Proxy failed, did not proxy to the actual address?

The proxy is only a service request proxy, and this address will not change. The principle can be simply understood as, when you start a service locally, you first request the local service, and the local service forwards your request to the actual server. So the request address you see on the browser is still `http://localhost:8000/xxx`. It depends on whether the server receives the request.

## Component library issues

Questions related to the component library can be found in [FAQ](https://2x.antdv.com/docs/vue/faq-cn/)
