---
title: StrengthMeter
author: Ryan SU
---

# StrengthMeter

Used to verify password strength

## Usage

```vue
<template>
  <div class="p-4 flex justify-center">
    <div class="demo-wrap p-10">
      <StrengthMeter placeholder="默认" />
      <StrengthMeter placeholder="禁用" disabled />
      <br />
      <StrengthMeter
        placeholder="隐藏input"
        :show-input="false"
        value="!@#qwe12345"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StrengthMeter from "/@/components/StrengthMeter/index";
export default defineComponent({
  components: {
    StrengthMeter,
  },
});
</script>
<style lang="less" scoped>
.demo-wrap {
  width: 50%;
  background: #fff;
  border-radius: 10px;
}
</style>
```

## Props

| Property  | Type      | Default | Options | Description                        |
| --------- | --------- | ------- | ------- | ---------------------------------- |
| value     | `string`  | -       | -       | The value to be validated.         |
| showInput | `boolean` | `true`  | -       | Whether to show the input field.   |
| disabled  | `boolean` | `false` | -       | Whether the component is disabled. |

## Events

| Event Name   | Callback Parameters | Description                                |
| ------------ | ------------------- | ------------------------------------------ |
| score-change | `number`            | Triggered when the strength value changes. |
| change       | `string`            | Triggered when the input value changes.    |
