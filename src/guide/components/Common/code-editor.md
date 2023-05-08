---
title: CodeEditor
author: Ryan SU
---

# CodeEditor

code editor

## Usage

```vue
<template>
  <CodeEditor v-model:value="value" :mode="modeValue" />
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { CodeEditor },
  setup() {
    const modeValue = ref("application/json");
    return { value, modeValue };
  },
});
</script>
```

## Props

| Attribute            | Type      | Default            | Optional Values                                   | Description          |
| -------------------- | --------- | ------------------ | ------------------------------------------------- | -------------------- |
| value(v-model:value) | `any`     | -                  | -                                                 | bound value          |
| mode                 | `string`  | `application/json` | `'application/json'`,`'htmlmixed'`,`'javascript'` | code type            |
| readonly             | `boolean` | -                  | -                                                 | Whether to read only |
