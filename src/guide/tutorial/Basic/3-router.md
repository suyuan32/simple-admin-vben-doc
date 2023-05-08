---
title: Router
order: 3
author: Ryan SU
---

# Routing

The project routing configuration is stored in [src/router/routes](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes). [src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules) is used to store routing modules, and files in this directory will be automatically registered.

## Configuration

### Module Description

`.ts` files in [src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules) will be treated as a routing module.

A routing module contains the following structure

```ts
import type { AppRouteModule } from "/@/router/types";

import { LAYOUT } from "/@/router/constant";
import { t } from "/@/hooks/web/useI18n";

const dashboard: AppRouteModule = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    icon: "ion:grid-outline",
    title: t("routes.dashboard.dashboard"),
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("/@/views/dashboard/analysis/index.vue"),
      meta: {
        affix: true,
        title: t("routes.dashboard.analysis"),
      },
    },
    {
      path: "workbench",
      name: "Workbench",
      component: () => import("/@/views/dashboard/workbench/index.vue"),
      meta: {
        title: t("routes.dashboard.workbench"),
      },
    },
  ],
};
export default dashboard;
```

### Multi-level Routing

::: warning Notes

- The `name` of all routes in the entire project cannot be repeated
- All multi-level routes will eventually be converted to second-level routes, so sub-routes cannot be nested
- Except for the path corresponding to layout, which needs to be preceded by `/`, all other sub-routes should not start with `/`

:::

**Example**

```ts
import type { AppRouteModule } from '/@/router/types';
import { getParentLayout, LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';
const permission: AppRouteModule = {
  path: '/level',
  name: 'Level',
  component: LAYOUT,
  redirect: '/level/menu1/menu1-1/menu1-1-1',
  meta: {
    icon: 'ion:menu-outline',
    title: t('routes.demo.level.level'),
  },

  children: [
    {
      path: 'tabs/:id',
      name: 'TabsParams',
      component: getParentLayout('TabsParams'),
      meta: {
        carryParam: true,
        hidePathForChildren: true, // 本级path将会在子级菜单中合成完整path时会忽略这一层级
      },
      children: [
        path: 'tabs/id1', // 其上级有标记hidePathForChildren，所以本级在生成菜单时最终的path为  /level/tabs/id1
        name: 'TabsParams',
        component: getParentLayout('TabsParams'),
        meta: {
          carryParam: true,
          ignoreRoute: true,  // 本路由仅用于菜单生成，不会在实际的路由表中出现
        },
      ]
    },
    {
      path: 'menu1',
      name: 'Menu1Demo',
      component: getParentLayout('Menu1Demo'),
      meta: {
        title: 'Menu1',
      },
      redirect: '/level/menu1/menu1-1/menu1-1-1',
      children: [
        {
          path: 'menu1-1',
          name: 'Menu11Demo',
          component: getParentLayout('Menu11Demo'),
          meta: {
            title: 'Menu1-1',
          },
          redirect: '/level/menu1/menu1-1/menu1-1-1',
          children: [
            {
              path: 'menu1-1-1',
              name: 'Menu111Demo',
              component: () => import('/@/views/demo/level/Menu111.vue'),
              meta: {
                title: 'Menu111',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default permission;
```

### Meta Configuration Description

```ts
export interface RouteMeta {
  // Route title, usually required
  title: string;
  // Number of Tab pages that can be opened by dynamic routing
  dynamicLevel?: number;
  // The actual Path of the dynamic route, that is, removing the dynamic part of the route;
  realPath?: string;
  // Whether to ignore permissions, only valid when the permission mode is Role
  ignoreAuth?: boolean;
  // Roles that can be accessed, only valid when the permission mode is Role
  roles?: RoleEnum[];
  // Whether to ignore KeepAlive cache
  ignoreKeepAlive?: boolean;
  // Whether to fix the label
  affix?: boolean;
  // Icon, also menu icon
  icon?: string;
  // The address of the embedded iframe
  frameSrc?: string;
  // Specify the animation name for this route switch
  transitionName?: string;
  // Hide the display of this route on the breadcrumb
  hideBreadcrumb?: boolean;
  // If this route carries parameters and needs to be displayed on the tab page. Then you need to set it to true
  carryParam?: boolean;
  // Hide all submenus
  hideChildrenInMenu?: boolean;
  // The currently active menu. Used to configure the left active menu path when configuring the details page
  currentActiveMenu?: string;
  // The current route is not displayed on the tab page
  hideTab?: boolean;
  // The current route is not displayed in the menu
  hideMenu?: boolean;
  // Menu sorting, only valid for the first level
  orderNo?: number;
  // Ignore the route. It is used to generate the corresponding menu and ignore the routing in the ROUTE_MAPPING and BACK permission modes. Valid for versions above 2.5.3
  ignoreRoute?: boolean;
  // Whether to ignore the current-level path in the full path of the sub-level menu. Valid for versions above 2.5.3
  hidePathForChildren?: boolean;
}
```

```ts
const IFrame = () => import('/@/views/sys/iframe/FrameBlank.vue');
{
  path: 'doc',
  name: 'Doc',
  component: IFrame,
  meta: {
    frameSrc: 'https://vvbin.cn/doc-next/',
    title: t('routes.demo.iframe.doc'),
  },
},
```

### External Links

Just set `path` to the **HTTP address** that needs to be redirected

```ts
{
  path: 'https://vvbin.cn/doc-next/',
  name: 'DocExternal',
  component: IFrame,
  meta: {
    title: t('routes.demo.iframe.docExternal'),
  },
}
```

### Dynamic Routing Tab Automatic Closing Function

If you need to enable this function, you need to set the following two parameters in `meta` of dynamic routing:

- `dynamicLevel` the maximum number of tabs that can be opened
- `realPath` is the actual path of dynamic routing (considering that dynamic routing may sometimes have N layers, for example: `/:id/:subId/:...`), in order to reduce calculation overhead, use the configuration method to specify in advance The actual path of the route (Note: If this parameter is not set, this function will not be available)

```ts
{
  path: 'detail/:id',
  name: 'TabDetail',
  component: () => import('/@/views/demo/feat/tabs/TabDetail.vue'),
  meta: {
    currentActiveMenu: '/feat/tabs',
    title: t('routes.demo.feat.tabDetail'),
    hideMenu: true,
    dynamicLevel: 3,
    realPath: '/feat/tabs/detail',
  },
}
```

## icon

The `icon` configuration here will be synchronized to **menu** (the value of the icon can be viewed [here](../components/icon.md)).

## Add new route

### How to add a routing module?

1. Add a new module file in [src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules).

Example, add test.ts file

```ts
import type { AppRouteModule } from "/@/router/types";
import { LAYOUT } from "/@/router/constant";
import { t } from "/@/hooks/web/useI18n";

const dashboard: AppRouteModule = {
  path: "/about",
  name: "About",
  component: LAYOUT,
  redirect: "/about/index",
  meta: {
    icon: "simple-icons:about-dot-me",
    title: t("routes.dashboard.about"),
  },
  children: [
    {
      path: "index",
      name: "AboutPage",
      component: () => import("/@/views/sys/about/index.vue"),
      meta: {
        title: t("routes.dashboard.about"),
        icon: "simple-icons:about-dot-me",
      },
    },
  ],
};

export default dashboard;
```

At this point, the route has been added, no need to manually import, put it in [src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/ modules) will be loaded automatically.

### verify

Visit **ip:port/about/index** and the content of the corresponding component appears, which means success

## Route Refresh

The project uses **redirect** method

### Accomplish

```ts
import { useRedo } from "/@/hooks/web/usePage";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const redo = useRedo();
    // 执行刷新
    redo();
    return {};
  },
});
```

### Redirect

[src/views/sys/redirect/index.vue](https://github.com/vbenjs/vue-vben-admin/tree/main/src/views/sys/redirect/index.vue)

```ts
import { defineComponent, unref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Redirect",
  setup() {
    const { currentRoute, replace } = useRouter();
    const { params, query } = unref(currentRoute);
    const { path } = params;
    const _path = Array.isArray(path) ? path.join("/") : path;
    replace({
      path: "/" + _path,
      query,
    });
    return {};
  },
});
```

## Page Jump

It is recommended to use the `useGo` provided by the project for page jumps.

### Method

```ts
import { useGo } from "/@/hooks/web/usePage";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    const go = useGo();

    // Perform refresh
    go();
    go(PageEnum.Home);
    return {};
  },
});
```

## Multi-tab Pages

The tab page uses `keep-alive` and `router-view` to implement, so that after switching tabs, the state before switching can still be saved.

### How to enable page caching

There are 3 conditions for enabling caching

1. Set `openKeepAlive` to `true` in [src/settings/projectSetting.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/projectSetting.ts)
2. Set the route `name`, and **cannot be repeated**
3. Add `name` to the component corresponding to the route, consistent with the `name` set by the route

```ts
 {
   ...,
    // name
    name: 'Login',
    // The name of the corresponding component
    component: () => import('/@/views/sys/login/index.vue'),
    ...
  },

  // /@/views/sys/login/index.vue
  export default defineComponent({
    // Needs to be consistent with the name of the route
    name:"Login"
  });
```

:::warning Note

The prerequisite for keep-alive to take effect is: you need to set the `name` attribute of the route and the `name` of the corresponding page to be the same. Because:

**include - string or regular expression, only components with matching names will be cached**
:::

### How to prevent a page from being cached

**Can be configured under router.meta**

You can set `ignoreKeepAlive` to `true` to turn off caching.

```ts
export interface RouteMeta {
  // Whether to ignore KeepAlive cache
  ignoreKeepAlive?: boolean;
}
```

## How to change the home page route

The home page route refers to the default route in the application. When no other routes are entered, it will automatically redirect to this route, and this route is fixed on the Tab, even if `affix: false` is set, it is not allowed to close

For example: The home page route is configured as `/dashboard/analysis`, then when directly accessing `http://localhost:3100/`, it will automatically jump to `http://localhost:3100/#/dashboard/analysis` (when the user is logged in)

You can change `BASE_HOME` in `pageEnum.ts` to the home page you want to set

```ts
export enum PageEnum {
  // basic home path
  // Change here
  BASE_HOME = "/dashboard",
}
```
