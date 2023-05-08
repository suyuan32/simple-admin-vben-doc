---
title: Introduction
author: Ryan SU
---

::: danger
The `defaultXXX` attribute of the component should not be used, it will be gradually removed after the `ant-design-vue 2.2` version. Repackaged components are also not compatible with `defaultXXX` attributes.
:::

## Usage

Most of the project's components are not globally registered. The on-demand import registration method is adopted, as follows

```vue
<template>
  <ConfigProvider>
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";
export default defineComponent({
  name: "App",
  components: { ConfigProvider },
});
</script>
```
