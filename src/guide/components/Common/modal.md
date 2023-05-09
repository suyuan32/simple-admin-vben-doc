---
title: Model
author: Ryan SU
---

# Modal Component

Encapsulates the antv Modal component and adds features such as dragging, full-screen display, and adaptive height.

Code path: [src/components/Modal](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Modal).

## Usage

**Since the code inside the Modal component is generally a single-file component, it is recommended to keep it that way. Therefore, all examples are in the form of single-file components.**

::: tip

Note that `v-bind="$attrs"` should be included to pass the `attribute` of the modal component to the `BasicModal` component.

:::

```vue
<template>
  <BasicModal
    v-bind="$attrs"
    :visible="true"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
  >
    Modal Info.
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicModal } from "/@/components/Modal";

export default defineComponent({
  components: { BasicModal },
  setup() {
    return {};
  },
});
</script>
```

**Page inner modal**

```vue
// Page.vue
<template>
  <div class="px-10">
    <Modal @register="register" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useModal } from "/@/components/Modal";
import Modal from "./Modal.vue";
export default defineComponent({
  components: { Modal },
  setup() {
    const [register, { openModal }] = useModal();
    return {
      register,
      openModal,
    };
  },
});
</script>
```

## useModal

Used for external component calls.

**useModal** is used to manipulate the component.

```ts
const [register, { openModal, setModalProps }] = useModal();
```

**register**

`register` is used to register `useModal`. If you need to use the API provided by `useModal`, you must pass `register` to the component's `onRegister` prop.

The principle is actually very simple, which is to use vue's parent-child component communication. `emit("register", instance)` is used internally to implement this.

At the same time, the separate component needs to bind `attrs` to `BasicModal`.

```vue
<template>
  <BasicModal v-bind="$attrs"></BasicModal>
</template>
```

**openModal**

Used to open/close the modal.

```tsx
// true/false: open/close the modal
// data: data passed to the child component
openModal(true, data);
```

**closeModal**

Used to close the modal.

```ts
closeModal();
```

**setModalProps**

Used to change the modal's props. Because the contents of the modal are separate components, it may be cumbersome to change the props in the external page. Therefore, `setModalProps` is provided to facilitate changing the modal's props internally.

[Props](#Props) can be found below.

```ts
setModalProps(props);
```

## useModalInner

Used for separate Modal internal calls.

### Usage

```vue
<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
  >
    <a-button type="primary" @click="closeModal" class="mr-2"
      >从内部关闭弹窗</a-button
    >

    <a-button type="primary" @click="setModalProps">从内部修改title</a-button>
  </BasicModal>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicModal, useModalInner } from "/@/components/Modal";
export default defineComponent({
  components: { BasicModal },
  setup() {
    const [register, { closeModal, setModalProps }] = useModalInner();
    return {
      register,
      closeModal,
      setModalProps: () => {
        setModalProps({ title: "Modal New Title" });
      },
    };
  },
});
</script>
```

**useModalInner** is used to operate independent components

```ts
const [register, { closeModal, setModalProps }] = useModalInner(callback);
```

**callback**

type: `(data:any)=>void`

The callback function is used to receive the value passed by the second parameter of openModal

```ts
useModal((data: any) => {
  console.log(data);
});
```

**closeModal**

Used to close the popup window

```ts
closeModal();
```

**changeOkLoading**

Used to modify the loading state of the confirm button

```ts
changeOkLoading(true);
```

**changeLoading**

Used to modify the loading state of the modal

```tsx
//true or false
changeLoading(true);
```

**setModalProps**

It is used to change the props parameter of the modal. Because the modal content is independently composed of components, it may be troublesome if you need to change the props on the external page, so **setModalProps** is provided to facilitate changing the props of the internal modal

[Props](#Props) content can be seen below

## Props

::: tip

In addition to the following parameters, all props in the component library documentation are also supported. For details, see [antv modal](https://2x.antdv.com/components/modal-cn/#API).

:::

| Property            | Type                     | Default        | Options | Description                                                                                                                                                                              |
| ------------------- | ------------------------ | -------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title               | `string`                 | -              | -       | Title of the modal.                                                                                                                                                                      |
| height              | `number`                 | -              | -       | Fixed height of the modal.                                                                                                                                                               |
| minHeight           | `number`                 | -              | -       | Minimum height of the modal.                                                                                                                                                             |
| draggable           | `boolean`                | `true`         | -       | Whether dragging is enabled.                                                                                                                                                             |
| useWrapper          | `boolean`                | `true`         | -       | Whether adaptive height is enabled. If enabled, the content will be adapted to the screen and a scrollbar will appear.                                                                   |
| wrapperFooterOffset | `number`                 | `0`            | -       | If the height exceeds the screen height after adaptive height is enabled, the bottom and top will have the same spacing. This parameter can be used to reduce the spacing at the bottom. |
| canFullscreen       | `boolean`                | `true`         | -       | Whether full-screen mode is allowed.                                                                                                                                                     |
| defaultFullscreen   | `boolean`                | `false`        | -       | Default full-screen mode.                                                                                                                                                                |
| loading             | `boolean`                | `false`        | -       | Loading status.                                                                                                                                                                          |
| loadingTip          | `string`                 | -              | -       | Loading text.                                                                                                                                                                            |
| showCancelBtn       | `boolean`                | `true`         | -       | Whether the close button is displayed.                                                                                                                                                   |
| showOkBtn           | `boolean`                | `true`         | -       | Whether the confirm button is displayed.                                                                                                                                                 |
| helpMessage         | `string` or `string[]`   | -              | -       | Tip text to the right of the title.                                                                                                                                                      |
| centered            | `boolean`                | `false`        | -       | Whether the modal is centered.                                                                                                                                                           |
| cancelText          | `string`                 | `'关闭'`       | -       | Text of the close button.                                                                                                                                                                |
| okText              | `string`                 | `'保存'`       | -       | Text of the confirm button.                                                                                                                                                              |
| closeFunc           | `() => Promise<boolean>` | Close function | -       | Function to execute before closing. Returns `true` to close the modal, otherwise it will not close.                                                                                      |

## Events

| Event          | Callback parameters     | Description                                  |
| -------------- | ----------------------- | -------------------------------------------- |
| ok             | `function(e)`           | Callback when the confirm button is clicked. |
| cancel         | `function(e)`           | Callback when the close button is clicked.   |
| visible-change | `(visible:boolean)=>{}` | Triggered when opened or closed.             |

## Slots

| Name         | Description                                                                              |
| ------------ | ---------------------------------------------------------------------------------------- |
| default      | Default area.                                                                            |
| footer       | Footer area (replaces the default buttons).                                              |
| insertFooter | To the left of the close button (effective when footer slot is not used).                |
| centerFooter | In between the close button and confirm button (effective when footer slot is not used). |
| appendFooter | To the right of the confirm button (effective when footer slot is not used).             |
