---
title: JsonPreview
author: Ryan SU
---

# JsonPreview

json data preview component

## Usage

```vue
<template>
  <JsonPreview :data="data" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { JsonPreview } from "/@/components/JsonPreview";

export default defineComponent({
  components: { JsonPreview },
  setup() {
    return {
      data: { hello: "world" },
    };
  },
});
</script>
```

## Props

| Attribute | Type     | Default | Optional Values | Description               |
| --------- | -------- | ------- | --------------- | ------------------------- |
| data      | `object` | -       | -               | Json data to be previewed |
