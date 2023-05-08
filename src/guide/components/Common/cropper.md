---
title: Copper
author: Ryan SU
---

# Cropper

Image cropping component

## CropperImage

Image cropping component

### Usage

```vue
<template>
  <CropperImage
    ref="refCropper"
    :src="img"
    @cropend="handleCropend"
    style="width: 40vw"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { CropperImage } from "/@/components/Cropper";
import img from "/@/assets/images/header.jpg";

export default defineComponent({
  components: {
    CropperImage,
  },
  setup() {
    const info = ref("");
    const cropperImg = ref("");

    function handleCropend({ imgBase64, imgInfo }) {
      info.value = imgInfo;
      cropperImg.value = imgBase64;
    }

    return {
      img,
      info,
      cropperImg,
      handleCropend,
    };
  },
});
</script>
```

#### Props

| Name            | Type      | Default          | Description       |
| --------------- | --------- | ---------------- | ----------------- |
| src             | `string`  | -                | Image source      |
| alt             | `string`  | -                | Image alt         |
| circled         | `boolean` | `false`          | Circular clipping |
| realTimePreview | `boolean` | `true`           | Real-time preview |
| height          | `string`  | `360px`          | Height            |
| crossorigin     | `string`  | -                | Cross-origin      |
| imageStyle      | `object`  | ``               | Image style       |
| options         | `object`  | `DefaultOptions` | Corpperjs options |

#### DefaultOptions

```ts
{
  aspectRatio: 1,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
  toggleDragModeOnDblclick: true,
  autoCrop: true,
  background: true,
  highlight: true,
  center: true,
  responsive: true,
  restore: true,
  checkCrossOrigin: true,
  checkOrientation: true,
  scalable: true,
  modal: true,
  guides: true,
  movable: true,
  rotatable: true,
}
```

## CropperAvatar

头像裁剪组件

### Usage

```vue
<template>
  <CropperAvatar :uploadApi="uploadApi" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { CropperAvatar } from "/@/components/Cropper";
import { uploadApi } from "/@/api/sys/upload";

export default defineComponent({
  components: {
    CropperAvatar,
  },
});
</script>
```

#### Props

| Name      | Type                                              | Default | Description                      | Version |
| --------- | ------------------------------------------------- | ------- | -------------------------------- | ------- |
| width     | `string,number`                                   | `200px` | Image width                      |         |
| uploadApi | `({ file: Blob, name: string }) => Promise<void>` | -       | Image upload API                 |         |
| value     | `String`                                          | -       | Current avatar address (v-model) | 2.5.3   |
| showBtn   | `Boolean`                                         | true    | Whether to show button           | 2.5.3   |
| btnText   | `String`                                          | -       | Button text                      | 2.5.3   |
| btnProps  | `ButtonProps`                                     | -       | Other button props               | 2.5.3   |

#### Events

| Name   | Parameters      | Description                       | Version |
| ------ | --------------- | --------------------------------- | ------- |
| change | `value: String` | Triggered when avatar is uploaded | 2.5.3   |

#### Methods

| Name       | Definition | Description        | Version |
| ---------- | ---------- | ------------------ | ------- |
| openModal  | `()=>void` | Open upload modal  | 2.5.3   |
| closeModal | `()=>void` | Close upload modal | 2.5.3   |
