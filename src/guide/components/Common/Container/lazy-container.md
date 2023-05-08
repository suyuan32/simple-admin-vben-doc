---
title: LazyContainer
author: Ryan SU
---

# LazyContainer

Lazy loading only loading when the component is visible or delayed for a period of time

## Usage

```vue
<template>
  <div class="p-4 lazy-base-demo">
    <div class="lazy-base-demo-wrap">
      <h1>向下滚动</h1>
      <LazyContainer @init="() => {}">
        <TargetContent />
        <template #skeleton>
          <Skeleton :rows="10" />
        </template>
      </LazyContainer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Skeleton } from "ant-design-vue";
import TargetContent from "./TargetContent.vue";
import { LazyContainer } from "/@/components/Container/index";
export default defineComponent({
  components: { LazyContainer, TargetContent, Skeleton },
});
</script>
<style lang="less" scoped>
.lazy-base-demo {
  &-wrap {
    display: flex;
    width: 50%;
    height: 2000px;
    margin: 20px auto;
    text-align: center;
    background: #fff;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    height: 1300px;
    margin: 20px 0;
  }
}
</style>
```

## Props

| Name           | Type                                    | Default          | Options | Description                                                                                                                                       |
| -------------- | --------------------------------------- | ---------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| timeout        | `number`                                | -                | -       | The waiting time. If a time is specified, the component will be loaded automatically after that time, regardless of whether it is visible or not. |
| viewport       | `HTMLElement`                           | -                | -       | The viewport where the component is located. If the component is scrolled in a container on the page, the viewport is that container.             |
| threshold      | `string`                                | `0px`            | -       | The preloading threshold, in CSS units.                                                                                                           |
| direction      | `'vertical', 'horizontal'` , `vertical` | -                | Options | The scrolling direction of the viewport. `vertical` for vertical scrolling, `horizontal` for horizontal scrolling.                                |
| tag            | `string'`                               | `div`            | -       | The tag name of the outer container that wraps the component.                                                                                     |
| transitionName | `string'`                               | `lazy-container` | -       | The name of the transition animation.                                                                                                             |
| maxWaitingTime | `number'`                               | `80`             | -       | The maximum waiting time.                                                                                                                         |

## Events

| Name | Parameters | Description           |
| ---- | ---------- | --------------------- |
| init | `()=>void` | After initialization. |

## Slots

| Name     | Description                   |
| -------- | ----------------------------- |
| default  | Default area.                 |
| skeleton | Lazy loading skeleton screen. |
