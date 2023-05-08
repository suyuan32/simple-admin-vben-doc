---
title: Drawer
author: Ryan SU
---

# Drawer drawer component

Encapsulate the drawer component of `antv`, extend drag and drop, full screen, adaptive height and other functions.

## Usage

**Because the internal code of the drawer is generally independent into a separate file, it is recommended to develop independently into components, so the examples are all explained in separate files**

**Independent component code, used to write content inside the component**

```vue
<template>
  <BasicDrawer v-bind="$attrs" title="Drawer Title" width="50%">
    Drawer Info.
  </BasicDrawer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicDrawer } from "/@/components/Drawer";
export default defineComponent({
  components: { BasicDrawer },
});
</script>
```

**page citation popup**

```vue
<template>
  <div>
    <Drawer @register="register" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Alert } from "ant-design-vue";
import { useDrawer } from "/@/components/Drawer";
import Drawer from "./Drawer.vue";

export default defineComponent({
  components: { Drawer },
  setup() {
    const [register, { openDrawer }] = useDrawer();
    return {
      register,
      openDrawer,
    };
  },
});
</script>
```

## useDrawer

**useDrawer** is used to manipulate the component.

```ts
const [register, { openDrawer, setDrawerProps }] = useDrawer();
```

**register**

`register` is used to register `useDrawer`. If you need to use the api provided by `useDrawer`, you must pass `register` to the component's `onRegister`.

The principle is actually very simple, it is vue's component child-to-parent communication, implemented internally through `emit("register", instance)`.

At the same time, the independent component needs to bind `attrs` to the top of the Drawer.

```tsx
<BasicDrawer v-bind="$attrs"> Drawer Info. </BasicDrawer>
```

**openDrawer**

Used to open/close the dialog

```ts
// true/false: open/close the dialog
// data: data passed to the child component
openDrawer(true, data);
```

**closeDrawer**

Used to close the dialog

```ts
closeDrawer();
```

**setDrawerProps**

Used to change the props parameters of drawer. Because the content of the drawer is an independent component, it may be difficult to change props on external pages, so `setDrawerProps` is provided to facilitate changing the props of the internal drawer.

See [Props](#Props) below for content.

```ts
setDrawerProps(props);
```

## useDrawerInner

Used for independent Drawer internal calls.

```vue
<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="register"
    title="Drawer Title"
    width="50%"
  >
    Drawer Info.
    <a-button type="primary" @click="closeDrawer">内部关闭drawer</a-button>
  </BasicDrawer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicDrawer, useDrawerInner } from "/@/components/Drawer";
export default defineComponent({
  components: { BasicDrawer },
  setup() {
    const [register, { closeDrawer }] = useDrawerInner();
    return { register, closeDrawer };
  },
});
</script>
```

**useModalInner** is used to manipulate independent components.

```ts
const [register, { closeModal, setModalProps }] = useModalInner(callback);
```

**callback**

type: `(data:any)=>void`

The callback function is used to receive the value passed by the second parameter of `openDrawer`.

```ts
openDrawer((data: any) => {
  console.log(data);
});
```

**closeModal**

Used to close the modal.

```ts
closeModal();
```

**changeOkLoading**

Used to change the loading state of the confirmation button.

```ts
// true or false
changeOkLoading(true);
```

**changeLoading**

Used to change the loading state of the modal.

```ts
// true or false
changeLoading(true);
```

**setModalProps**

Used to change the props parameters of the modal. Because the content of the modal is an independent component, it may be difficult to change props on external pages, so `setModalProps` is provided to facilitate changing the props of the internal modal.

See [Props](#Props) below for content.

## Props

::: tip Reminder

In addition to the parameters listed below, all other props in the official documentation are also supported. For details, please refer to [antv drawer](https://2x.antdv.com/components/drawer-cn/#API)

:::

| Name           | Type                     | Default | Options | Description                                                           |
| -------------- | ------------------------ | ------- | ------- | --------------------------------------------------------------------- |
| isDetail       | `boolean`                | `false` | -       | Whether it is in detail mode                                          |
| loading        | `boolean`                | `false` | -       | Loading status                                                        |
| loadingText    | `string`                 | ``      | -       | Loading text                                                          |
| showDetailBack | `boolean`                | `true`  | -       | Whether to show the back button in detail mode                        |
| closeFunc      | `() => Promise<boolean>` | -       | -       | Custom close function, return `true` to close, otherwise do not close |
| showFooter     | `boolean`                | -       | -       | Whether to show the footer                                            |
| footerHeight   | `number`                 | `60`    | -       | Height of the footer area                                             |

## Events

| Name           | Callback Parameters       | Description                                   |
| -------------- | ------------------------- | --------------------------------------------- |
| close          | `(e)=>void`               | Callback when close is clicked                |
| visible-change | `(visible:boolean)=>void` | Triggered when the dialog is opened or closed |
| ok             | `(e)=>void`               | Callback when ok is clicked                   |
