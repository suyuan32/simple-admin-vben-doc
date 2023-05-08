---
title: BasicDragVerify
author: Ryan SU
---

# BasicDragVerify

Drag check component

## BasicDragVerify

### Usage

```vue
<template>
  <div class="p-10">
    <BasicDragVerify @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  BasicDragVerify,
  DragVerifyActionType,
  PassingData,
} from "/@/components/Verify/index";
export default defineComponent({
  components: { BasicDragVerify },
  setup() {
    function handleSuccess(data: PassingData) {
      const { time } = data;
      createMessage.success(`校验成功,耗时${time}秒`);
    }
    return {
      handleSuccess,
      handleBtnClick,
    };
  },
});
</script>
```

### Props

| Name         | Type             | Default          | Description                                              |
| ------------ | ---------------- | ---------------- | -------------------------------------------------------- |
| value        | `boolean`        | -                | Whether it has passed.                                   |
| text         | `string`         | `请按住滑块拖动` | The text displayed when not dragged.                     |
| successText  | `string`         | `验证通过`       | The text displayed after the verification is successful. |
| height       | `string｜string` | `40`             | Height.                                                  |
| width        | `string｜string` | `260`            | Width.                                                   |
| circle       | `boolean`        | `false`          | Whether it is rounded.                                   |
| wrapStyle    | `any`            | -                | Outer container style.                                   |
| contentStyle | `any`            | -                | Main content style.                                      |
| barStyle     | `any`            | -                | Bar style.                                               |
| actionStyle  | `any`            | -                | Drag button style.                                       |

### Methods

| Name   | Arguments | Description         |
| ------ | --------- | ------------------- |
| resume | `()=>{}`  | Restore to default. |

## RotateDragVerify

Image orientation verification component.

### Usage

```vue
<template>
  <div class="p-10">
    <RotateDragVerify :src="img" ref="el" @success="handleSuccess" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RotateDragVerify } from "/@/components/Verify/index";

import img from "/@/assets/images/header.jpg";
export default defineComponent({
  components: { RotateDragVerify },
  setup() {
    const handleSuccess = () => {
      console.log("success!");
    };
    return {
      handleSuccess,
      img,
    };
  },
});
</script>
```

### Props

| Name         | Type             | Default          | Description                                              |
| ------------ | ---------------- | ---------------- | -------------------------------------------------------- |
| src          | `string`         | -                | Image source.                                            |
| imgWidth     | `number`         | -                | Image width.                                             |
| imgWrapStyle | `any`            | -                | Image outer container style.                             |
| minDegree    | `number`         | -                | Minimum rotation angle.                                  |
| maxDegree    | `number`         | -                | Maximum rotation angle.                                  |
| diffDegree   | `number`         | -                | Error angle.                                             |
| value        | `boolean`        | -                | Whether it has passed.                                   |
| text         | `string`         | `请按住滑块拖动` | The text displayed when not dragged.                     |
| successText  | `string`         | `验证通过`       | The text displayed after the verification is successful. |
| height       | `string｜string` | `40`             | Height.                                                  |
| width        | `string｜string` | `260`            | Width.                                                   |
| circle       | `boolean`        | `false`          | Whether it is rounded.                                   |
| wrapStyle    | `any`            | -                | Outer container style.                                   |
| contentStyle | `any`            | -                | Main content style.                                      |
| barStyle     | `any`            | -                | Bar style.                                               |
| actionStyle  | `any`            | -                | Drag button style.                                       |

### Methods

| Name   | Arguments  | Description         |
| ------ | ---------- | ------------------- |
| resume | `Function` | Restore to default. |
