---
title: Tinymce
author: Ryan SU
---

# Tinymce

The rich text component is located in [src/components/TinyMce](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce)

::: tip The rich text component is imported by CDN

Can be changed at [/@/components/TinyMce/src/Editor.vue](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Tinymce/src/Editor.vue) CDN address below

```ts
const CDN_URL = "https://cdn.bootcdn.net/ajax/libs/tinymce/5.5.1";
```

:::

## Usage

```vue
<template>
  <Tinymce v-model="value" @change="handleChange" width="100%" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Tinymce } from "/@/components/Tinymce/index";

export default defineComponent({
  components: { Tinymce },
  setup() {
    const value = ref("hello world!");
    function handleChange(value: string) {
      console.log(value);
    }
    return { handleChange, value };
  },
});
</script>
```

## Props

| Property        | Type              | Default | Description                                   |
| --------------- | ----------------- | ------- | --------------------------------------------- |
| options         | `any`             | {}      | Configuration options for TinyMCE.            |
| value(v-model)  | `string`          | -       | Two-way binding value.                        |
| height          | `number , string` | 400     | Height of the editor.                         |
| width           | `number , string` | auto    | Width of the editor.                          |
| toolbar         | `string[]`        | -       | Array of toolbar buttons.                     |
| plugins         | `string[]`        | -       | Array of plugins.                             |
| showImageUpload | `boolean`         | true    | Whether to show the upload button for images. |

## Events

| Event  | Callback Arguments    | Return | Description                                          |
| ------ | --------------------- | ------ | ---------------------------------------------------- |
| change | `(str: string) => {}` |        | Triggered when the content of the editor is changed. |
