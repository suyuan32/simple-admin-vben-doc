---
title: ClickOutSide
author: Ryan SU
---

# ClickOutSide

Used to monitor the wrapped element click external trigger event

## Usage

```vue
<template>
  <div>
    <ClickOutSide @clickOutside="() => (showRef = false)">
      <div @click="() => (showRef = true)">
        {{
          showRef
            ? "鼠标点击那部（点击边框外可以恢复）"
            : "点击该区域状态(初始状态)"
        }}
      </div>
    </ClickOutSide>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { ClickOutSide } from "/@/components/ClickOutSide/";
export default defineComponent({
  components: { ClickOutSide },
  setup() {
    const showRef = ref(false);
    return {
      showRef,
    };
  },
});
</script>
```

## Events

| Event        | Callback Parameters | Description                                      |
| ------------ | ------------------- | ------------------------------------------------ |
| clickOutside | `()=>void`          | Triggered when click outside the wrapped element |

## Slots

| Name    | Description     |
| ------- | --------------- |
| default | wrapped element |
