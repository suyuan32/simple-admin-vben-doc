---
title: Icon
author: Ryan SU
---

# Icon Component

## Icon

Used for displaying icons in the project, supports almost all icon libraries (supports on-demand loading, only packing used icons).

The icon component is located in [src/components/Icon](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Icon).

::: tip

The value of the icon can be found on [Iconify](https://iconify.design) or [Netlify](https://icones.netlify.app/collection/ant-design).

:::

### Usage

```vue
<template>
  <Icon icon="gg:loadbar-doc"></Icon>
</template>

<script>
import { defineComponent } from "vue";
import { Icon } from "/@/components/Icon";
export default defineComponent({
  components: { Icon },
});
</script>
```

### Props

| Property | Type     | Default | Description  |
| -------- | -------- | ------- | ------------ |
| icon     | `string` | -       | Icon name.   |
| color    | `string` | -       | Icon color.  |
| size     | `number` | 16      | Icon size.   |
| prefix   | `string` | -       | Icon prefix. |

::: tip Note

If the `icon` value ends with `|svg`, it will be rendered as an [SvgIcon component](#SvgIcon).

:::

## SvgIcon

Used for using project SVG sprites.

### Usage

```vue
<template>
  <div>
    <SvgIcon name="test"> </SvgIcon>
  </div>
</template>
<script>
import { SvgIcon } from "/@/components/Icon";
import { defineComponent } from "vue";
export default defineComponent({
  components: { SvgIcon },
});
</script>
```

### Props

| Property | Type     | Default | Description    |
| -------- | -------- | ------- | -------------- |
| name     | `string` | -       | SVG icon name. |
| size     | `number` | 16      | Icon size.     |

## IconPicker

For detailed information about this component, please refer to [Icon Picker](../dep/icon.html#icon-picker).

### Usage

```vue
<template>
  <div>
    <IconPicker />
  </div>
</template>
<script>
import { IconPicker } from "/@/components/Icon";
import { defineComponent } from "vue";
export default defineComponent({
  components: { IconPicker },
});
</script>
```

### Props

| Property | Type      | Default   | Description                                                                                                                                                                                                                                                                                                             |
| -------- | --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width    | `string`  | 100%      | Width.                                                                                                                                                                                                                                                                                                                  |
| pageSize | `number`  | 140       | The number of icons displayed per page.                                                                                                                                                                                                                                                                                 |
| copy     | `boolean` | false     | Whether copying is allowed.                                                                                                                                                                                                                                                                                             |
| mode     | `string`  | `iconify` | The alternative icon pool. When it is `svg`, all SVG sprite icons under `/src/assets/icons` (including first-level subdirectories) will be used as the alternative icon pool. See [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.zh_CN.md#vite-plugin-svg-icons) for details. |

::: tip Note on mode

- When `mode` is `iconify`, the pre-generated [icon set data](../dep/icon.html#icon-set-pre-generation) will be used as the alternative icon pool.
- When `mode` is `svg`, all SVG icons under `/src/assets/icons` (including first-level subdirectories) will be used as the alternative icon pool. See [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons/blob/main/README.md#vite-plugin-svg-icons) for details.

:::
