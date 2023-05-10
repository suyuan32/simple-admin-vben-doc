---
title: Setting
order: 2
author: Ryan SU
---

# Project Configuration

Include color scheme, layout, caching, multi-language support, and default component configuration.

## Environment Variables Configuration

The project's environment variables configuration is located in the [.env](https://github.com/vbenjs/vue-vben-admin/blob/main/.env), [.env.development](https://github.com/vbenjs/vue-vben-admin/blob/main/.env.development), and [.env.production](https://github.com/vbenjs/vue-vben-admin/blob/main/.env.production) files in the project root directory.

For more information, please refer to the [Vite documentation](https://github.com/vitejs/vite#modes-and-environment-variables).

```bash
.env                # Loaded in all environments
.env.local          # Loaded in all environments, ignored by git
.env.[mode]         # Only loaded in specified mode
.env.[mode].local   # Only loaded in specified mode, ignored by git
```

::: tip Note

- Only variables starting with `VITE_` will be embedded in the client-side package, and you can access them in your project code like this:

```js
console.log(import.meta.env.VITE_PROT);
```

- Variables starting with `VITE_GLOB_*` will be added to the [\_app.config.js](#production-environment-dynamic-configuration) configuration file during packaging.

:::

### Configuration Item Description

### .env

Applicable to all environments

```bash
# Website title
VITE_GLOB_APP_TITLE=vben admin
# Abbreviation, used to configure file names, no spaces, numbers, or other special characters at the beginning
VITE_GLOB_APP_SHORT_NAME=vben_admin
```

### .env.development

Applicable to development environment

```bash
# Whether to enable mock data. When turned off, you need to connect to the backend interface manually.
VITE_USE_MOCK=true
# Public resource path, must start and end with /
VITE_PUBLIC_PATH=/
# Whether to delete Console.log
VITE_DROP_CONSOLE=false
# Interface address
# If there is no cross-domain problem, you can configure it here.
VITE_GLOB_API_URL=/api
# File upload interface, optional
VITE_GLOB_UPLOAD_URL=/upload
# Interface address prefix. Some systems have a prefix for all interface addresses, which can be added here to facilitate switching.
VITE_GLOB_API_URL_PREFIX=
```

::: warning Note

The `VITE_GLOB_API_URL`, /api here must be unique and not conflict with the name of the interface in proxy.

If your interface is like `http://localhost:3000/api`, please consider changing `VITE_GLOB_API_URL=/xxxx` to another name.

:::

### .env.production

Applicable to production environment

```bash
# Whether to enable mock data
VITE_USE_MOCK=true
# Interface address, which can be forwarded by nginx or written with the actual address
VITE_GLOB_API_URL=/api
# File upload address, which can be forwarded by nginx or written with the actual address
VITE_GLOB_UPLOAD_URL=/upload
# Interface address prefix. Some systems have a prefix for all interface addresses, which can be added here to facilitate switching.
VITE_GLOB_API_URL_PREFIX=
# Whether to delete Console.log
VITE_DROP_CONSOLE=true
# Public resource path, must start and end with /
VITE_PUBLIC_PATH=/
# Whether to output gz|br files during packaging
# Optional: gzip | brotli | none
# There can be multiple, for example, 'gzip'|'brotli', which will generate .gz and .br files at the same time.
VITE_BUILD_COMPRESS = 'gzip'
# Whether to compress images during packaging
VITE_USE_IMAGEMIN = false
# Whether to enable pwa function during packaging
VITE_USE_PWA = false
# Whether to be compatible with old browsers. After turning it on, the packaging time will be about twice as slow. The old browser compatibility package will be generated, and the appropriate version will be automatically used according to the browser compatibility.
VITE_LEGACY = false
```

## Production Environment Dynamic Configuration

### Description

After executing `pnpm build` to build the project, the `_app.config.js` file will be automatically generated and inserted into `index.html`.

**Note: It will not be generated in the development environment.**

```js
// _app.config.js
// Variable naming rule __PRODUCTION__xxx_CONF__   xxx: VITE_GLOB_APP_SHORT_NAME in .env configuration
window.__PRODUCTION__VUE_VBEN_ADMIN__CONF__ = {
  VITE_GLOB_APP_TITLE: "vben admin",
  VITE_GLOB_APP_SHORT_NAME: "vue_vben_admin",
  VITE_GLOB_API_URL: "/app",
  VITE_GLOB_API_URL_PREFIX: "/",
  VITE_GLOB_UPLOAD_URL: "/upload",
};
```

### Function

`_app.config.js` is used for scenarios where the project needs to dynamically modify the configuration after packaging, such as interface addresses. You do not need to rebuild the project and can update the local variable in the `/_app.config.js` file. After refreshing, the local variable in the code will be updated.

### How to Get Global Variables

To get the variables in `_app.config.js`, you can use the function provided by [src/hooks/setting/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts) to get them.

### How to Add (Add a Configurable Item)

1. First, add the variable that needs to be dynamically configured to the `.env` or the corresponding development environment configuration file. It needs to start with `VITE_GLOB_`.

2. Variables starting with `VITE_GLOB_` will be automatically added to the environment variables. Modify the values of the `GlobEnvConfig` and `GlobConfig` environment variables in `src/types/config.d.ts` to define the types of newly added variables.

3. Add the newly added return value in [useGlobSetting](https://github.com/vbenjs/vue-vben-admin/tree/main/src/hooks/setting/index.ts) function.

```js
const {
  VITE_GLOB_APP_TITLE,
  VITE_GLOB_API_URL,
  VITE_GLOB_APP_SHORT_NAME,
  VITE_GLOB_API_URL_PREFIX,
  VITE_GLOB_UPLOAD_URL,
} = ENV;

export const useGlobSetting = (): SettingWrap => {
  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX,
    uploadUrl: VITE_GLOB_UPLOAD_URL
  };
  return glob as Readonly<GlobConfig>;
};

```

## Local Proxy Configuration

`vite.config.ts`

```ts
import { defineApplicationConfig } from "@vben/vite-config";

export default defineApplicationConfig({
  overrides: {
    optimizeDeps: {
      include: [
        "echarts/core",
        "echarts/charts",
        "echarts/components",
        "echarts/renderers",
        "qrcode",
        "@iconify/iconify",
        "ant-design-vue/es/locale/zh_CN",
        "ant-design-vue/es/locale/en_US",
      ],
    },
    server: {
      // Add your own api proxy to match diffrent api service
      proxy: {
        "/sys-api": {
          target: "http://192.168.50.204:9100",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/sys-api`), ""),
          // only https
          // secure: false
        },
        "/fms-api": {
          target: "http://192.168.50.204:9102",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/fms-api`), ""),
        },
        "/mms-api": {
          target: "http://localhost:9104",
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(new RegExp(`^/mms-api`), ""),
        },
      },
    },
  },
});
```

## Project Configuration

::: warning

The project configuration file is used to configure the content, layout, text and other effects displayed in the project and is stored in `localStorage`. If the project configuration is changed, you need to manually **clear** the `localStorage` cache and refresh and log in again to take effect.

:::

### Configuration file path

[src/settings/projectSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts)

Here is the English translation of your text in markdown:

### Description

```js
// ! You need to clear your browser cache after making changes
const setting: ProjectConfig = {
  // Whether to show the SettingButton
  showSettingButton: true,

  // Whether to show the theme switch button
  showDarkModeToggle: true,

  // Setting button position options
  // SettingButtonPositionEnum.AUTO: Automatic selection
  // SettingButtonPositionEnum.HEADER: Located at the top
  // SettingButtonPositionEnum.FIXED: Fixed on the right side
  settingButtonPosition: SettingButtonPositionEnum.AUTO,

  // Permission mode, default front-end role permission mode
  // ROUTE_MAPPING: Front-end mode (menu generated by routing, default)
  // ROLE: Front-end mode (menu routing separated)
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  // Where to store permission cache. Default storage in localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,
  // Session timeout processing scheme
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: Route jump to login page
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: Generate login pop-up window, covering the current page
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
  // Project theme color
  themeColor: primaryColor,
  // Website gray mode, used for possible mourning dates to open
  grayMode: false,
  // Color weak mode
  colorWeak: false,
  // Whether to cancel the display of menus, top, multi-tab pages, which may be embedded in other systems
  fullContent: false,
  // Theme content width
  contentMode: ContentEnum.FULL,
  // Whether to show logo
  showLogo: true,
  // Whether to display the bottom information copyright
  showFooter: true,
  // Header configuration
  headerSetting: {
    // Background color
    bgColor: "#ffffff",
    // Fixed head
    fixed: true,
    // Whether to display the top
    show: true,
    // Theme
    theme: MenuThemeEnum.LIGHT,
    // Turn on the lock screen function
    useLockPage: true,
    // Show fullscreen button
    showFullScreen: true,
    // Show document button
    showDoc: true,
    // Show message center button
    showNotice: true,
    // Show menu search button
    showSearch: true,
  },
  // menu configuration
  menuSetting: {
    // background color
    bgColor: "#273352",
    // Whether to fix the menu
    fixed: true,
    // menu collapse
    collapsed: false,
    // Whether to display the menu name when the menu is collapsed
    collapsedShowTitle: false,
    // whether it is draggable
    canDrag: true,
    // Whether to display
    show: true,
    // menu width
    menuWidth: 180,
    // menu mode
    mode: MenuModeEnum.INLINE,
    // menu type
    type: MenuTypeEnum.SIDEBAR,
    // menu theme
    theme: MenuThemeEnum.DARK,
    // split menu
    split: false,
    // top menu layout
    topMenuAlign: "start",
    // position of the collapse trigger
    trigger: TriggerEnum.HEADER,
    // Accordion mode, only one menu is displayed
    accordion: true,
    // Close the left mixed menu expansion menu when the route is switched
    closeMixSidebarOnChange: false,
    // Switch the trigger mode of the mixed menu module on the left
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // Whether to fix the left mixed menu
    mixSideFixed: false,
  },
  // multi-label
  multiTabsSetting: {
    // Whether to keep the opened tabs after refreshing
    cache: false,
    // open
    show: true,
    // enable quick action
    showQuick: true,
    // whether it can be dragged
    canDrag: true,
    // Whether to display the refresh button
    showRedo: true,
    // Whether to display the collapse button
    showFold: true,
  },

  // animation configuration
  transitionSetting: {
    // Whether to enable switching animation
    enable: true,
    // animation name
    basicTransition: RouterTransitionEnum.FADE_SIDE,
    // Whether to open the page to switch loading
    openPageLoading: true,
    // Whether to open the page to switch the top progress bar
    openNProgress: false,
  },

  // Whether to enable the KeepAlive cache or not, it is best to turn it off during development, otherwise you need to clear the cache every time
  openKeepAlive: true,
  // Automatic lock screen time, 0 does not lock the screen. The unit is minutes, the default is 1 hour
  lockTime: 0,
  // show breadcrumbs
  showBreadCrumb: true,
  // show the breadcrumb icon
  showBreadCrumbIcon: false,
  // Whether to use global error capture
  useErrorHandle: false,
  // whether to open back to the top
  useOpenBackTop: true,
  // Whether it is possible to embed an iframe page
  canEmbedIFramePage: true,
  // Whether to delete the unclosed message and notify when switching the interface
  closeMessageOnSwitch: true,
  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  // If enabled, want to override for individual interfaces. Can be set on a separate interface
  removeAllHttpPending: true,
};
```

## Theme Color Configuration

The default global theme color configuration is located in [build/config/glob/themeConfig.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/build/config/themeConfig.ts)

Just change primaryColor to the color you need and then re-run `pnpm serve`

```js
/**
 * less global variable
 */
export const primaryColor = "#0960bd";
```

## Style Configuration

### CSS Prefix Settings

Used to modify the unified prefix of the component class in the project

- Configure in [src/settings/designSetting.ts](https://github.com/vbenjs/vue-vben-admin/blob/main/src/settings/designSetting.ts)

```ts
export const prefixCls = "vben";
```

- Configure CSS prefix in [src/design/var/index.less](https://github.com/vbenjs/vue-vben-admin/blob/main/src/design/var/index.less)

```less
@namespace: vben;
```

### Prefix Usage

**In CSS**

```vue
<style lang="less" scoped>
/* namespace has been globally injected and does not need to be imported again */
@prefix-cls: ~"@{namespace}-app-logo";

.@{prefix-cls} {
  width: 100%;
}
</style>
```

**In vue/ts**

```ts
import { useDesign } from "/@/hooks/web/useDesign";

const { prefixCls } = useDesign("app-logo");

// prefixCls => vben-app-logo
```

## Color Configuration

Used to preset some color arrays

Configure in [src/settings/designSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/designSetting.ts)

```ts
// app theme color preset
export const APP_PRESET_COLOR_LIST: string[] = [
  "#0960bd",
  "#0084f4",
  "#009688",
  "#536dfe",
  "#ff5c93",
  "#ee4f12",
  "#0096c7",
  "#9c27b0",
  "#ff9800",
];

// Top background color preset
export const HEADER_PRESET_BG_COLOR_LIST: string[] = [
  "#ffffff",
  "#009688",
  "#5172DC",
  "#1E9FFF",
  "#018ffb",
  "#409eff",
  "#4e73df",
  "#e74c3c",
  "#24292e",
  "#394664",
  "#001529",
  "#383f45",
];

// Left menu background color preset
export const SIDE_BAR_BG_COLOR_LIST: string[] = [
  "#001529",
  "#273352",
  "#ffffff",
  "#191b24",
  "#191a23",
  "#304156",
  "#001628",
  "#28333E",
  "#344058",
  "#383f45",
];
```

Here is the English translation of your text in markdown:

## Component Default Parameter Configuration

Configure in [src/settings/componentSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts)

```ts
// Used to configure some common configurations of certain components without modifying the components
import type { SorterResult } from "../components/Table";

export default {
  // Table configuration
  table: {
    // Common configuration of table interface request, can be overridden by component prop
    // Supports xxx.xxx.xxx format
    fetchSetting: {
      // The current page field passed to the backend
      pageField: "page",
      // The field passed to the backend for how many items are displayed per page
      sizeField: "pageSize",
      // The field returned by the interface for table data
      listField: "items",
      // The field returned by the interface for the total number of tables
      totalField: "total",
    },
    // Optional pagination options
    pageSizeOptions: ["10", "50", "80", "100"],
    // Default number of items displayed per page
    defaultPageSize: 10,
    // Default sorting method
    defaultSortFn: (sortInfo: SorterResult) => {
      const { field, order } = sortInfo;
      return {
        // Sorting field
        field,
        // Sorting method asc/desc
        order,
      };
    },
    // Custom filtering method
    defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
      return data;
    },
  },
  // Scroll component configuration
  scrollbar: {
    // Whether to use native scrolling style
    // After opening, menus, pop-ups, and drawers will use native scrollbars
    native: false,
  },
};
```
