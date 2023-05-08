---
title: Time
author: Ryan SU
---

# Time

relative time components

## Usage

```vue
<template>
  <Time :value="time" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Time } from "/@/components/Time";

export default defineComponent({
  components: { Time },
  setup() {
    const now = new Date().getTime();
    const state = reactive({
      time: now - 60 * 3 * 1000,
    });
    return {
      ...toRefs(state),
      now,
    };
  },
});
</script>
```

## Props

| Attribute | Type                 | Default    | Optional Values | Description                                                    |
| --------- | -------------------- | ---------- | --------------- | -------------------------------------------------------------- |
| value     | `string,Date,number` | -          | -               | time value                                                     |
| step      | `number`             | `60`       | -               | refresh time                                                   |
| mode      | `string`             | `relative` | -               | mode, date: date, datetime: timestamp, relative: relative time |
