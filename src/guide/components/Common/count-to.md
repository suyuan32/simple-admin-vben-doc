---
title: CountTo
author: Ryan SU
---

# CountTo

数字动画组件

该组件对 [vue-countTo](https://github.com/PanJiaChen/vue-countTo) 进行了重构，改造成适配 vue3 语法的组件。

## Usage

```vue
<template>
  <CountTo
    prefix="$"
    :color="'#409EFF'"
    :startVal="1"
    :endVal="200000"
    :duration="8000"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { CountTo } from "/@/components/CountTo/index";

export default defineComponent({
  components: {
    CountTo,
  },
});
</script>
```

## Props

| Property   | Type      | Default  | Description                       |
| ---------- | --------- | -------- | --------------------------------- |
| startVal   | `number`  | `0`      | Starting value                    |
| endVal     | `number`  | `2021`   | End value                         |
| duration   | `number`  | `1500`   | Animation duration                |
| autoplay   | `boolean` | `true`   | Automatic execution               |
| prefix     | `string`  | -        | prefix                            |
| suffix     | `string`  | -        | suffix                            |
| separator  | `string`  | `,`      | separator                         |
| color      | `string`  | -        | font color                        |
| useEasing  | `boolean` | `true`   | Whether to enable animation       |
| transition | `string`  | `linear` | animation                         |
| decimals   | `number`  | `0`      | keep the number of decimal places |

## Methods

| Name  | Callback Parameters | Description     |
| ----- | ------------------- | --------------- |
| start | `()=>void`          | start animation |
| reset | `()=>void`          | reset           |
