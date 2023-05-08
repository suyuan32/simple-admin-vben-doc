---
title: Page
author: Ryan SU
---

# Page

Page related components

## PageWrapper

Used to wrap page components

### Usage

```vue
<template>
  <div>
    <PageWrapper>
      <template #left>left</template>
      <template #right>right</template>
    </PageWrapper>
  </div>
</template>
<script>
import { PageWrapper } from "/@/components/Page";
import { defineComponent } from "vue";
export default defineComponent({
  components: { PageWrapper },
  setup() {
    return {};
  },
});
</script>
```

### Props

| Property          | Type      | Default | Description                                                            |
| ----------------- | --------- | ------- | ---------------------------------------------------------------------- |
| title             | `string`  | -       | Title of the pageHeader.                                               |
| dense             | `boolean` | `false` | If `true`, removes padding/margin from the content.                    |
| content           | `string`  | -       | Content of the pageHeader.                                             |
| contentStyle      | `object`  | -       | Style of the content area.                                             |
| contentClass      | `string`  | -       | Class of the content area.                                             |
| contentBackground | `boolean` | -       | Whether to add a background to the content area.                       |
| contentFullHeight | `boolean` | `false` | Whether the content area should take up the full height of the screen. |
| fixedHeight       | `boolean` | `false` | Whether the content area has a fixed height.                           |

### Slots

**All slots for pageHeader are supported.**

| Name          | Description                     |
| ------------- | ------------------------------- |
| leftFooter    | Left area of the PageFooter.    |
| rightFooter   | Right area of the PageFooter.   |
| headerContent | Content area of the pageHeader. |
| default       | Main content area.              |

## PageFooter

Used for the bottom toolbar of the page.

### Usage

```vue
<template>
  <div>
    <PageFooter>
      <template #left>left</template>
      <template #right>right</template>
    </PageFooter>
  </div>
</template>
<script>
import { PageFooter } from "/@/components/Page";
import { defineComponent } from "vue";
export default defineComponent({
  components: { PageFooter },
  setup() {
    return {};
  },
});
</script>
```

### Slots

| Property | Type   | Default | Description |
| -------- | ------ | ------- | ----------- |
| left     | `slot` | -       | Left area.  |
| right    | `slot` | -       | Right area. |
