---
title: QrCode
author: Ryan SU
---

# QrCode

Components for generating QR codes

## Usage

```vue
<template>
  <QrCode :value="qrCodeUrl" />
</template>
<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import { QrCode, QrCodeActionType } from "/@/components/Qrcode/index";
import LogoImg from "/@/assets/images/logo.png";
const qrCodeUrl = "https://www.vvbin.cn";
export default defineComponent({
  components: { QrCode },
  setup() {
    const qrRef = ref<Nullable<QrCodeActionType>>(null);
    function download() {
      const qrEl = unref(qrRef);
      if (!qrEl) return;
      qrEl.download("文件名");
    }
    return {
      qrCodeUrl,
      LogoImg,
      download,
      qrRef,
    };
  },
});
</script>
<style scoped>
.qrcode-demo-item {
  width: 30%;
  margin-right: 1%;
}
</style>
```

## Props

| Property | Type                     | Default  | Options         | Description                                                          |
| -------- | ------------------------ | -------- | --------------- | -------------------------------------------------------------------- |
| value    | `string`                 | -        | -               | The URL or text to encode into the QR code.                          |
| options  | `QRCodeRenderersOptions` | -        | -               | Configuration options for the QR code, see `QRCodeRenderersOptions`. |
| width    | `number`                 | `2`      | -               | Width of the QR code.                                                |
| logo     | `string｜LogoType`       | -        | -               | Logo configuration for the center of the QR code, see `LogoType`.    |
| tag      | `render tag`             | `canvas` | `canvas \| img` | Render tag, `img` does not support embedded logos.                   |

**QRCodeRenderersOptions**

```ts
/**
 * Width of the margin.
 * Default: 4
 */
margin?: number;
/**
 * Scale factor. A value of 1 means each module is 1 pixel (black dot).
 * Default: 4
 */
scale?: number;
/**
 * Force a specific width for the output image.
 * If the width is too small to hold the QR symbol, this option will be ignored.
 * Takes precedence over scale.
 */
width?: number;
color?: {
  /**
   * Color of the dark modules. Value must be in hexadecimal format (RGBA).
   * Note: Dark color should always be darker than color.light.
   * Default: #000000ff
   */
  dark?: string;
  /**
   * Color of the light modules. Value must be in hexadecimal format (RGBA).
   * Default: #ffffffff
   */
  light?: string;
};

```

**LogoType**

```js
{
  // Logo image.
  src: string;
  // Logo size.
  logoSize: number;
  // Background color.
  bgColor: string;
  // Logo border radius.
  logoRadius: number;
}
```

## Methods

| Name     | Callback Parameters          | Description |
| -------- | ---------------------------- | ----------- |
| download | `Function(fileName: string)` | Download.   |

## Events

| Name  | Callback Parameters                     | Description                                     |
| ----- | --------------------------------------- | ----------------------------------------------- |
| done  | `(data: QrcodeDoneEventParams) => void` | QR code drawing is completed.                   |
| error | `(error: any) => void`                  | An error occurred while generating the QR code. |

QrcodeDoneEventParams

```js
{
  url: string;  // QR code data URL.
  ctx?: CanvasRenderingContext2D;  // This object is the 2D rendering context of the canvas, only valid when tag is canvas, and can be used for custom drawing.
}
```

In the `done` event callback, you can customize the drawing of the QR code. The example code is as follows:

```vue
<QrCode :value="qrCodeUrl" :width="200" @done="onQrcodeDone" />
```

```js
function onQrcodeDone({ ctx }) {
  if (ctx instanceof CanvasRenderingContext2D) {
    // Extra drawing
    ctx.fillStyle = "black";
    ctx.font = '16px "Microsoft YaHei"';
    ctx.textBaseline = "bottom";
    ctx.textAlign = "center";
    ctx.fillText("Scan me first", 100, 195, 200);
  }
}
```

For more information and drawing methods for `CanvasRenderingContext2D`, please refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D).
