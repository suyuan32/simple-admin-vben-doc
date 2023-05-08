---
title: Menu
order: 4
author: Ryan SU
---

# Menu

The project menu configuration is stored in [src/router/menus](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/menus)

::: tip Tip

The menu must match the route to be displayed

:::

## Menu Item Types

```ts
export interface Menu {
  // Menu name
  name: string;
  // Menu icon, if not, will try to use route.meta.icon
  icon?: string;
  // Menu path
  path: string;
  // Whether to disable
  disabled?: boolean;
  // Submenu
  children?: Menu[];
  // Menu tag settings
  tag: {
    // If true, a small dot is displayed
    dot: boolean;
    // Content
    content: string';
    // Type
    type: 'error' | 'primary' | 'warn' | 'success';
  };
  // Whether to hide the menu
  hideMenu?: boolean;
}
```

## Menu Module

A menu file will be treated as a module

::: tip Tip

The `path` field of `children` does not need to start with `/`

:::

```ts
import type { MenuModule } from "/@/router/types";
import { t } from "/@/hooks/web/useI18n";
const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: t("routes.dashboard.dashboard"),
    path: "/dashboard",

    children: [
      {
        path: "analysis",
        name: t("routes.dashboard.analysis"),
      },
      {
        path: "workbench",
        name: t("routes.dashboard.workbench"),
      },
    ],
  },
};
export default menu;
```

The above module will be transformed into the following structure

```ts
[
  path: '/dashboard',
  name: t('routes.dashboard.dashboard'),
  children: [
    {
      path: 'dashboard/analysis',
      name: t('routes.dashboard.analysis'),
    },
    {
      path: 'dashboard/workbench',
      name: t('routes.dashboard.workbench'),
    },
  ],
]
```

## Add Menu

Just add a new module file in [src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules).

No need to manually import, files placed in [src/router/routes/modules](https://github.com/vbenjs/vue-vben-admin/tree/main/src/router/routes/modules) will be automatically loaded.

## Menu Sorting

In the menu module, set the `orderNo` variable, the larger the value, the later the sorting.
