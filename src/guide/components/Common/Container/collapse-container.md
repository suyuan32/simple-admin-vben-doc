---
title: CollapseContainer
author: Ryan SU
---

# CollapseContainer

Area Collapsed Card Container

## Usage

```vue
<template>
  <div>
    <CollapseContainer> content </CollapseContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { CollapseContainer } from "/@/components/Container/index";

export default defineComponent({
  components: {
    CollapseContainer,
  },
});
</script>
```

## Props

| Name                | Type              | Default | Options | Description                                                             |
| ------------------- | ----------------- | ------- | ------- | ----------------------------------------------------------------------- |
| title               | `string`          | -       | -       | Title.                                                                  |
| canExpand           | `boolean`         | `true`  | -       | Whether it can be expanded. If `true`, a fold button will be displayed. |
| helpMessage         | `string[],string` | -       | -       | Warm reminder on the right side of the title.                           |
| triggerWindowResize | `boolean`         | `false` | -       | Whether to trigger `window.resize` when expanding or collapsing.        |
| loading             | `boolean`         | `false` | -       | Whether to display the loading skeleton screen.                         |
| lazyTime            | `number`          | `0`     | -       | Lazy loading time.                                                      |

## Slots

| Name    | Description                             |
| ------- | --------------------------------------- |
| title   | Custom title.                           |
| action  | Custom action button on the right side. |
| default | Default area.                           |
| footer  | Custom footer area.                     |
