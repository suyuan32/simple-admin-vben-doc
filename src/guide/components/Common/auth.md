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
    <Authority :value="RoleEnum.SUPER">
      <a-button type="primary" block> 只有admin角色可见 </a-button>
    </Authority>
  </div>
</template>

<script lang="ts">
import { Authority } from "/@/components/Authority";
import { defineComponent } from "vue";
import { RoleEnum } from "/@/enums/roleEnum";

export default defineComponent({
  components: { Authority },
  setup() {
    return {
      RoleEnum,
    };
  },
});
</script>
```

## Props

| Property | Type                                  | Default | Description                                                                             |
| -------- | ------------------------------------- | ------- | --------------------------------------------------------------------------------------- |
| value    | `RoleEnum,RoleEnum[],string,string[]` | -       | Role information or permission encoding. Will automatically distinguish permission mode |
