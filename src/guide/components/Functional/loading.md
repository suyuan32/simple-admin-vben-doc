---
title: Loading
author: Ryan SU
---

# Loading

## Usage

```vue
<template>
  <div class="p-5" ref="wrapEl" v-loading="loadingRef" loading-tip="加载中...">
    <a-alert message="函数方式" />

    <a-button class="my-4 mr-4" type="primary" @click="openFnFullLoading"
      >全屏 Loading</a-button
    >
    <a-button class="my-4" type="primary" @click="openFnWrapLoading"
      >容器内 Loading</a-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { Loading, useLoading } from "/@/components/Loading";
export default defineComponent({
  components: { Loading },
  setup() {
    const [openFullLoading, closeFullLoading] = useLoading({
      tip: "加载中...",
    });

    const [openWrapLoading, closeWrapLoading] = useLoading({
      target: wrapEl,
      props: {
        tip: "加载中...",
        absolute: true,
      },
    });

    function openFnFullLoading() {
      openFullLoading();

      setTimeout(() => {
        closeFullLoading();
      }, 2000);
    }

    function openFnWrapLoading() {
      openWrapLoading();

      setTimeout(() => {
        closeWrapLoading();
      }, 2000);
    }

    return {
      openFnFullLoading,
      openFnWrapLoading,
      ...toRefs(compState),
    };
  },
});
</script>
```

## useLoading

Usage

```ts
import { useLoading } from '/@/components/Loading';

const [open, close, setTip] = useLoading(opt: Partial<LoadingProps> | Partial<UseLoadingOptions>);
```

### UseLoadingOptions

| Name   | Type                              | Default | Options | Description                  |
| ------ | --------------------------------- | ------- | ------- | ---------------------------- |
| target | `HTMLElement or Ref<HTMLElement>` | -       | -       | The DOM node to be mounted   |
| props  | `LoadingProps`                    | -       | -       | Loading component parameters |

### LoadingProps

| Name       | Type                     | Default   | Options | Description                                                         |
| ---------- | ------------------------ | --------- | ------- | ------------------------------------------------------------------- |
| tip        | `string`                 | -         | -       | Loading text                                                        |
| size       | `default, small , large` | `default` | -       | Size                                                                |
| absolute   | `boolean`                | `false`   | -       | Absolute positioning, can be full screen when `false`.              |
| loading    | `boolean`                | -         | -       | The current loading state                                           |
| background | `string`                 | -         | -       | Background color                                                    |
| theme      | `'dark' or 'light'`      | `light`   | -       | Background color theme, used when the background color is not empty |

### Return Value

**open**

Open loading.

**close**

Close loading.

**setTip**

Set the loading prompt text (version 2.6.2 or above).
