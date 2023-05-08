---
title: Authority
author: Ryan SU
---

# Authority

Components for project permissions, generally used for fine-grained permission management such as button level

## Usage

```vue
<template>
  <div>
    <Authority :value="RoleEnum.ADMIN">
      <a-button type="primary" block> Only admin role is visible </a-button>
    </Authority>
  </div>
</template>
<script>
import { Authority } from "/@/components/Authority";
import { defineComponent } from "vue";
export default defineComponent({
  components: { Authority },
});
</script>
```

## Props

| Property | Type                                  | Default | Description                                                                             |
| -------- | ------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| value    | `RoleEnum,RoleEnum[],string,string[]` | -       | Role information or permission encoding. Will automatically distinguish permission mode |
