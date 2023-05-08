---
title: Common Doubt
author: Ryan SU
---

Here is the translation of the selected text into English markdown text:

# Common Doubt Explanation

This category mainly explains why some places are done this way and what the reasons are.

## Project alias

`/@/` is an alias configured in `vite`

`/@/settings` is equivalent to `src/settings`

::: tip Why is it /@/

Because the project was transitioned from `vite1.0`, `vite1.0` can only start with `/`, so some users who have switched from `webpack` may not be used to it.

:::

## Why are component library styles not imported on demand locally, but imported in production

In main.ts, you can see that antd.less is fully imported during local development, and vite-plugin-style-import has no effect locally.

The main reason for doing this is to speed up the refresh speed of local development. If on-demand import is also used in local development, you can see in the browser console that an average page has increased by about 100 http requests. If it is fully imported, only one request is added, so in order to reduce the number of requests, this kind of seed is used.

```ts
// src/main.ts
if (import.meta.env.DEV) {
  import("ant-design-vue/dist/antd.less");
}

// build/vite/plugin/styleImport
import styleImport from "vite-plugin-style-import";
export function configStyleImportPlugin(isBuild: boolean) {
  if (!isBuild) return [];
  const styleImportPlugin = styleImport({
    libs: [
      {
        libraryName: "ant-design-vue",
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  });
  return styleImportPlugin;
}
```

## Why put moment separately into dataUtil

In `src/utils/dataUtil`, moment is used. Secondly, dateUtil is used for time operations on the page instead of directly `import moment from 'moment'`.

This is mainly to facilitate the subsequent switch to `dayjs`, because the api is the same, so in subsequent switching, you only need to change the import in dataUtil instead of changing all.
