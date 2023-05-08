---
title: Description
author: Ryan SU
---

# Description Details component

Encapsulate the Descriptions component of `antv`

## Usage

```vue
<template>
  <div class="p-4">
    <Description
      title="基础示例"
      :collapseOptions="{ canExpand: true, helpMessage: 'help me' }"
      :column="3"
      :data="mockData"
      :schema="schema"
    />
    <Description @register="register" class="mt-4" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Alert } from "ant-design-vue";
import {
  Description,
  DescItem,
  useDescription,
} from "/@/components/Description/index";
const mockData: any = {
  username: "test",
  nickName: "VB",
  age: 123,
  phone: "15695909xxx",
  email: "190848757@qq.com",
  addr: "厦门市思明区",
  sex: "男",
  certy: "3504256199xxxxxxxxx",
  tag: "orange",
};
const schema: DescItem[] = [
  {
    field: "username",
    label: "用户名",
  },
  {
    field: "nickName",
    label: "昵称",
    render: (curVal, data) => {
      return `${data.username}-${curVal}`;
    },
  },
  {
    field: "phone",
    label: "联系电话",
  },
  {
    field: "email",
    label: "邮箱",
  },
  {
    field: "addr",
    label: "地址",
  },
];
export default defineComponent({
  components: { Description, Alert },
  setup() {
    const [register] = useDescription({
      title: "useDescription",
      data: mockData,
      schema: schema,
    });
    return { mockData, schema, register };
  },
});
</script>
```

## useDescription

Refer to the above example

```ts
const [register] = useDescription(Props);
```

## Props

::: tip Reminder

In addition to the parameters listed below, all other props in the official documentation are also supported. For details, please refer to [antv Description](https://2x.antdv.com/components/descriptions-cn/#API)

:::

| Name            | Type             | Default                                         | Options | Description                                                        |
| --------------- | ---------------- | ----------------------------------------------- | ------- | ------------------------------------------------------------------ |
| title           | `string`         | -                                               | -       | Title                                                              |
| size            | `string`         | `small`                                         | -       | Size                                                               |
| bordered        | `boolean`        | `true`                                          | -       | Whether to show border                                             |
| column          | `Number, Object` | `{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }` | -       | Number of `DescriptionItems` per row                               |
| useCollapse     | `boolean`        | -                                               | -       | Whether to wrap with CollapseContainer component                   |
| collapseOptions | `Object`         | -                                               | -       | Properties of `CollapseContainer` component                        |
| schema          | `DescItem[]`     | -                                               | -       | Configuration for detail items, see `DescItem` configuration below |
| data            | `object`         | -                                               | -       | Data source                                                        |

## DescItem

| Name            | Type                                                              | Default | Options | Description                                              |
| --------------- | ----------------------------------------------------------------- | ------- | ------- | -------------------------------------------------------- |
| field           | `string`                                                          | -       | -       | Field name                                               |
| label           | `string`                                                          | -       | -       | Label name                                               |
| labelMinWidth   | `number`                                                          | -       | -       | Minimum width of label                                   |
| contentMinWidth | `number`                                                          | -       | -       | Minimum width of content                                 |
| labelStyle      | `any`                                                             | -       | -       | Label style                                              |
| span            | `number`                                                          | -       | -       | Number of columns to merge                               |
| show            | `(data)=>boolean`                                                 | -       | -       | Dynamically determine whether the component is displayed |
| render          | `(val: string, data: any)=>VNode,undefined,Element,string,number` | -       | -       | Custom rendering of content                              |
