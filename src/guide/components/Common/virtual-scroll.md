---
title: VirtualScroll
author: Ryan SU
---

# VirtualScroll

Virtual scrolling component (used for pure display of large amounts of data)

## Usage

```vue
<template>
  <div class="p-4 virtual-scroll-demo">
    <Divider>基础滚动示例</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VScroll :itemHeight="41" :items="data" :height="300" :width="300">
        <template #default="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VScroll>
    </div>

    <Divider>即使不可见，也预先加载50条数据，防止空白</Divider>
    <div class="virtual-scroll-demo-wrap">
      <VScroll
        :itemHeight="41"
        :items="data"
        :height="300"
        :width="300"
        :bench="50"
      >
        <template #default="{ item }">
          <div class="virtual-scroll-demo__item">{{ item.title }}</div>
        </template>
      </VScroll>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { VScroll } from "/@/components/VirtualScroll/index";

import { Divider } from "ant-design-vue";

const data: any[] = (() => {
  const arr: any[] = [];
  for (let index = 1; index < 20000; index++) {
    arr.push({
      title: "列表项" + index,
    });
  }
  return arr;
})();
export default defineComponent({
  components: { VScroll, Divider },
  setup() {
    return { data: data };
  },
});
</script>
<style lang="less" scoped>
.virtual-scroll-demo {
  &-wrap {
    display: flex;
    justify-content: center;
    margin: 0 30%;
    background: #fff;
  }

  /deep/ &__item {
    height: 40px;
    padding: 0 20px;
    border-bottom: 1px solid #ddd;
    line-height: 40px;
  }
}
</style>
```

## Props

| Name       | Type             | Default | Options | Description                          |
| ---------- | ---------------- | ------- | ------- | ------------------------------------ |
| height     | `string｜number` | -       | -       | Height.                              |
| width      | `string｜number` | -       | -       | Width.                               |
| maxHeight  | `string｜number` | -       | -       | Maximum height.                      |
| maxWidth   | `string｜number` | -       | -       | Maximum width.                       |
| minHeight  | `string｜number` | -       | -       | Minimum height.                      |
| minWidth   | `string｜number` | -       | -       | Minimum width.                       |
| itemHeight | `string｜number` | -       | -       | The height of each option, required. |
| items      | `any[]`          | -       | -       | Option list.                         |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | Default.    |
