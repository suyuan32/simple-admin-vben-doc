---
title: Loading
author: Ryan SU
---

# Loading

## Usage

```vue
<template>
  <div class="p-5" ref="wrapEl" v-loading="loadingRef" loading-tip="加载中...">
    <a-button class="my-4 mr-4" type="primary" @click="openCompFullLoading"
      >全屏 Loading</a-button
    >
    <a-button class="my-4" type="primary" @click="openCompAbsolute"
      >容器内 Loading</a-button
    >
    <Loading :loading="loading" :absolute="absolute" :tip="tip" />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { Loading } from "/@/components/Loading";

export default defineComponent({
  components: { Loading },
  setup() {
    const loadingRef = ref<boolean>(false);

    const compState = reactive({
      absolute: false,
      loading: false,
      tip: "加载中...",
    });

    function openLoading(absolute: boolean) {
      compState.absolute = absolute;
      compState.loading = true;
      setTimeout(() => {
        compState.loading = false;
      }, 2000);
    }

    function openCompFullLoading() {
      openLoading(false);
    }

    function openCompAbsolute() {
      openLoading(true);
    }

    return {
      openCompFullLoading,
      openCompAbsolute,
      ...toRefs(compState),
      loadingRef,
    };
  },
});
</script>
```

### Props

| Property   | Type                        | Default   | Options | Description                                                                 |
| ---------- | --------------------------- | --------- | ------- | --------------------------------------------------------------------------- |
| tip        | `string`                    | -         | -       | Loading text.                                                               |
| size       | `default`, `small`, `large` | `default` | -       | Size.                                                                       |
| absolute   | `boolean`                   | `false`   | -       | Absolute positioning. Set to `false` for full-screen mode.                  |
| loading    | `boolean`                   | -         | -       | Current loading status.                                                     |
| background | `string`                    | -         | -       | Background color.                                                           |
| theme      | `'dark'` or `'light'`       | `light`   | -       | Theme of the background color. Used when the background color is not empty. |
