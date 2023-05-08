---
title: CountDown
author: Ryan SU
---

# CountDown

Countdown component

## CountButton

Countdown button component

### Usage

```vue
<template>
  <CountButton />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { CountButton } from "/@/components/CountDown";

export default defineComponent({
  components: { CountButton },
});
</script>
```

### Props

| Property        | Type          | Default | Optional value | Description                                                                                   |
| --------------- | ------------- | ------- | -------------- | --------------------------------------------------------------------------------------------- |
| value           | `any`         | -       | -              | Binding value                                                                                 |
| count           | `number`      | `60`    | -              | Countdown time                                                                                |
| beforeStartFunc | `()=>promise` | -       | -              | The function executed before the countdown, only when it returns true will it start execution |

## CountDownInput

Countdown input box button component

### Usage

```vue
<template>
  <CountdownInput />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { CountdownInput } from "/@/components/CountDown";

export default defineComponent({
  components: { CountdownInput },
});
</script>
```

### Props

| Property | Type | Default | Optional value ｜ Description |
| ---------- ｜ ------------- ｜ ----------------------------- ｜ ------ ｜ -------------------------------------------- |
| value ｜ `any` ｜ - ｜ - ｜ Binding value |
| size ｜ `string` ｜ `'default', 'large', 'small'` ｜ - ｜ Input box and button size |
| count ｜ `number` ｜ `60` ｜ - ｜ Countdown time |
| sendCodeApi ｜ `()=>promise` ｜ - ｜ - ｜ The function executed before the countdown, only when it returns true will it start execution |
