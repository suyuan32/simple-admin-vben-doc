---
title: ContextMenu
author: Ryan SU
---

# ContextMenu

Functionally create the right-click menu component, as long as you can get the `event` object of the dom, you can create a right-click menu for it.

## Usage

```vue
<template>
  <div>
    <a-button type="primary" @contextmenu="handleContext"
      >Right Click on me</a-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useContextMenu } from "/@/hooks/web/useContextMenu";
import { CollapseContainer } from "/@/components/Container";
import { useMessage } from "/@/hooks/web/useMessage";
export default defineComponent({
  components: { CollapseContainer },
  setup() {
    const [createContextMenu] = useContextMenu();
    const { createMessage } = useMessage();
    function handleContext(e: MouseEvent) {
      createContextMenu({
        event: e,
        items: [
          {
            label: "New",
            icon: "ant-design:plus-outlined",
            handler: () => {
              createMessage.success("click new");
            },
          },
          {
            label: "Open",
            icon: "ant-design:folder-open-filled",
            handler: () => {
              createMessage.success("click open");
            },
          },
        ],
      });
    }
    return { handleContext };
  },
});
</script>
```

## createContextMenu

**Options**

| Name  | Type                | Default | Options | Description                                                        |
| ----- | ------------------- | ------- | ------- | ------------------------------------------------------------------ |
| event | `Event`             | -       | -       | The `Event` object of the DOM element to be created                |
| items | `ContextMenuItem[]` | -       | -       | The right-click menu list, see `ContextMenuItem` below for details |

**ContextMenuItem**

| Name     | Type       | Description                                     |
| -------- | ---------- | ----------------------------------------------- |
| label    | `string`   | The label text.                                 |
| icon     | `string`   | The icon, see the icon component for reference. |
| disabled | `boolean`  | Whether it is disabled.                         |
| handler  | `()=>void` | The click trigger function.                     |
