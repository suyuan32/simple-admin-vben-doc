---
title: Preview
author: Ryan SU
---

# Preview

Functionalize the image preview component. Easily create components through functions

## Usage

```vue
<template>
  <div class="p-4">
    <Alert message="有预览图" type="info" />
    <div class="flex justify-center mt-4">
      <img
        :src="img"
        v-for="img in imgList"
        :key="img"
        class="mr-2"
        @click="handleClick(img)"
      />
    </div>
    <Alert message="无预览图" type="info" />
    <a-button @click="handlePreview" type="primary" class="mt-4"
      >预览图片</a-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Alert } from "ant-design-vue";
import { createImgPreview } from "/@/components/Preview/index";
const imgList: string[] = [
  "https://picsum.photos/id/66/346/216",
  "https://picsum.photos/id/67/346/216",
  "https://picsum.photos/id/68/346/216",
];
export default defineComponent({
  components: { Alert },
  setup() {
    function handleClick(img: string) {
      createImgPreview({ imageList: [img] });
    }

    function handlePreview() {
      createImgPreview({ imageList: imgList });
    }
    return { imgList, handleClick, handlePreview };
  },
});
</script>
```

## createImgPreview

### Parameters/Options

| Name          | Type                                                              | Default | Options      | Description                                                                                                      |
| ------------- | ----------------------------------------------------------------- | ------- | ------------ | ---------------------------------------------------------------------------------------------------------------- |
| imgList       | `string[]`                                                        | -       | -            | List of images                                                                                                   |
| index         | `number`                                                          | 0       | -            | The initial image index for previewing                                                                           |
| scaleStep     | `number`                                                          | -       | -            | The step size of zooming (the amount of each zooming). The default is automatic (10% of the current zoom value). |
| defaultWidth  | `number`                                                          | -       | -            | The default width (in pixels). When provided, all images will be scaled to this width initially.                 |
| maskClosable  | `boolean`                                                         | false   | `true/false` | Whether to automatically close the preview when clicking the mask.                                               |
| rememberState | `boolean`                                                         | false   | `true/false` | Whether to remember the zoom state of each image.                                                                |
| onImgLoad     | `({ index: number, url: string, dom: HTMLImageElement }) => void` | -       | -            | Callback function when an image is successfully loaded.                                                          |
| onImgError    | `({ index: number, url: string, dom: HTMLImageElement }) => void` | -       | -            | Callback function when an image fails to load.                                                                   |

### Return Value/PreviewActions

Can be used to control the current preview state.

```typescript
interface PreviewActions {
  // Reset the state
  resume: () => void;
  // Close the preview
  close: () => void;
  // Show the previous image
  prev: () => void;
  // Show the next image
  next: () => void;
  // Set the zoom ratio (for the current image)
  setScale: (scale: number) => void;
  // Set the rotation angle (for the current image)
  setRotate: (rotate: number) => void;
}
```
