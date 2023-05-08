---
title: PopConfirmButton
author: Ryan SU
---

# PopConfirmButton button

Button with PopConfirm dropdown menu functionality

## Usage

```vue
<template>
  <PopConfirmButton>按钮文本</PopConfirmButton>
</template>

<script>
import { defineComponent } from "vue";
import { PopConfirmButton } from "/@/components/Button";
export default defineComponent({
  components: { PopConfirmButton },
});
</script>
```

## Props

::: tip tip

**Keep** [anv design popconfirm component](https://2x.antdv.com/components/popconfirm-cn/) **In the case of original function**, expand the following properties

:::

| Property | Type      | Default | Description                                                            |
| -------- | --------- | ------- | ---------------------------------------------------------------------- |
| enable   | `boolean` | true    | Whether to enable the drop-down menu, false to show the default button |
