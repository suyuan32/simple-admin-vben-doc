---
title: Authority | 权限
author: Ryan SU
---

# Authority

用于项目权限的组件，一般用于按钮级等细粒度权限管理

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

| 属性  | 类型                                  | 默认值 | 说明                                     |
| ----- | ------------------------------------- | ------ | ---------------------------------------- |
| value | `RoleEnum,RoleEnum[],string,string[]` | -      | 角色信息或者权限编码。会自动区分权限模式 |
