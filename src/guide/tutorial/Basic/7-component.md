---
title: Component Registration
order: 7
author: Ryan SU
---

## Component Registration

## On-demand introduction

The project's current component registration mechanism is on-demand, and is introduced only on pages that need to be used.

```vue
<template>
  <Menu>
    <SubMenu></SubMenu>
  <Menu>

  <menu>
    <sub-menu></sub-menu>
  <menu>
</template>
<script>
import { Menu } from 'ant-design-vue';
export default defineComponent({
  components: {
    Menu: Menu,
    SubMenu: Menu.SubMenu
  },
})
</script>
```

### tsx file registration

**tsx files cannot have globally registered components within them**

```jsx
import { Menu } from "ant-design-vue";

export default defineComponent({
  setup() {
    return () => (
      <Menu>
        <Menu.SubMenu></Menu.SubMenu>
      </Menu>
    );
  },
});
```

## Global registration

If you are not comfortable with the on-demand introduction method, you can do global registration. Global registration is also divided into two ways

### Global on-demand registration

Register only the required components

Code address: [src/components/registerGlobComp.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/registerGlobComp.ts)

```ts
import {
  // Need
  Button as AntButton,
  Optional
  Select,
  Alert,
  Checkbox,
  DatePicker,
  Radio,
  Switch,
  Card,
  List,
  Tabs,
  Descriptions,
  Tree,
  Table,
  Divider,
  Modal,
  Drawer,
  Dropdown,
  Tag,
  Tooltip,
  Badge,
  Popover,
  Upload,
  Transfer,
  Steps,
  PageHeader,
  Result,
  Empty,
  Avatar,
  Menu,
  Breadcrumb,
  Form,
  Input,
  Row,
  Col,
  Spin,
} from 'ant-design-vue';

export function registerGlobComp(app: App) {
  app
    .use(Select)
    .use(Alert)
    .use(Breadcrumb)
    .use(Checkbox)
    .use(DatePicker)
    .use(Radio)
    .use(Switch)
    .use(Card)
    .use(List)
    .use(Descriptions)
    .use(Tree)
    .use(Table)
    .use(Divider)
    .use(Modal)
    .use(Drawer)
    .use(Dropdown)
    .use(Tag)
    .use(Tooltip)
    .use(Badge)
    .use(Popover)
    .use(Upload)
    .use(Transfer)
    .use(Steps)
    .use(PageHeader)
    .use(Result)
    .use(Empty)
    .use(Avatar)
    .use(Menu)
    .use(Tabs)
    .use(Form)
    .use(Input)
    .use(Row)
    .use(Col)
    .use(Spin);
}
```

### Full registration

- Inside `main.ts`

```ts
import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
const app = createApp(App);
app.use(Antd);
```

- Delete the codes below

```ts
if (import.meta.env.DEV) {
  import("ant-design-vue/dist/antd.less");
}
```
