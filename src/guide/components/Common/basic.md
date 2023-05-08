---
title: Basic
author: Ryan SU
---

# Basic Basic Components

Some basic and common component usage methods

## BasicTitle

Used to display the title, you can display the help button and text.

### Usage

```vue
<template>
  <div>
    <BasicTitle helpMessage="提示1">标题</BasicTitle>
    <BasicTitle :helpMessage="['提示1', '提示2']">标题</BasicTitle>
  </div>
</template>
<script>
import { BasicTitle } from "/@/components/Basic/index";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BasicTitle },
});
</script>
```

### Props

| Property    | Type               | Default | Description                                                     |
| ----------- | ------------------ | ------- | --------------------------------------------------------------- |
| helpMessage | `string｜string[]` | -       | Help button information on the right side of the title          |
| span        | `boolean`          | `false` | Whether to display the blue block on the left side of the title |
| normal      | `boolean`          | `false` | Default the text without bolding                                |

### Slots

| Name    | Description |
| ------- | ----------- |
| default | Title text  |

## BasicArrow

Animated arrow component.

### Usage

```vue
<template>
  <div>
    <BasicArrow :expand="false" />
  </div>
</template>
<script>
import { BasicArrow } from "/@/components/Basic/index";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BasicArrow },
});
</script>
```

### Props

| Property | Type      | Default | Description                         |
| -------- | --------- | ------- | ----------------------------------- |
| expand   | `boolean` | `false` | Arrow expansion status              |
| top      | `boolean` | `false` | The arrow defaults upwards          |
| bottom   | `boolean` | `false` | The arrow defaults downwards        |
| inset    | `boolean` | `false` | Cancel padding/margin for embedding |

## BasicHelp

Help button component.

### Usage

```vue
<template>
  <div>
    <BasicHelp :text="['提示1', '提示2']" />
    <BasicHelp text="提示" />
  </div>
</template>
<script>
import { BasicHelp } from "/@/components/Basic/index";
import { defineComponent } from "vue";
export default defineComponent({
  components: { BasicHelp },
});
</script>
```

### Props

| Property | Type | Default | Optional value ｜ Description |
| --------- | ------------------ | -------- ｜ ------ ｜ ------------------------------------------ |
| fontSize | `string` ｜ `14px` ｜ - ｜ Font size |
| color ｜ `string` ｜ #fff ｜ - ｜ Color |
| text ｜ `string｜string[]` ｜ - ｜ - ｜ Text list |
| showIndex ｜ `boolean` ｜ true ｜ - ｜ Whether to show the serial number, effective when text is string[]|
| maxWidth ｜ `string` ｜ `600px` ｜ - ｜ Maximum width |
| placement ｜ `string` ｜ `right` ｜ - ｜ Display direction, refer to Tooltip component|

### Slots

| Name    | Description  |
| ------- | ------------ |
| default | Default icon |
