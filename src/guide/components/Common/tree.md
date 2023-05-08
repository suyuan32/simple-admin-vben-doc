---
title: Tree
author: Ryan SU
---

# Tree

Encapsulate the tree component of `antv`

## Usage

```vue
<template>
  <BasicTree :treeData="treeData" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicTree } from "/@/components/Tree/index";
import { treeData } from "./data";
import { CollapseContainer } from "/@/components/Container/index";
import { TreeItem } from "/@/components/Tree/index";

export const treeData: TreeItem[] = [
  {
    title: "parent 1",
    key: "0-0",
    icon: "home|svg",
    children: [
      { title: "leaf", key: "0-0-0" },
      {
        title: "leaf",
        key: "0-0-1",
        children: [
          { title: "leaf", key: "0-0-0-0" },
          { title: "leaf", key: "0-0-0-1" },
        ],
      },
    ],
  },
  {
    title: "parent 2",
    key: "1-1",
    icon: "home|svg",
    children: [
      { title: "leaf", key: "1-1-0" },
      { title: "leaf", key: "1-1-1" },
    ],
  },
  {
    title: "parent 3",
    key: "2-2",
    icon: "home|svg",
    children: [
      { title: "leaf", key: "2-2-0" },
      { title: "leaf", key: "2-2-1" },
    ],
  },
];
export default defineComponent({
  components: { BasicTree, CollapseContainer },
  setup() {
    return { treeData };
  },
});
</script>
```

## Props

::: tip Note

In addition to the following parameters, the props in the official documentation are also supported. Please refer to the [Ant Design Vue Tree](https://2x.antdv.com/components/tree-cn/#Tree-props) documentation for details.

:::

| Property             | Type                                 | Default | Options      | Description                                                                                    | Version |
| -------------------- | ------------------------------------ | ------- | ------------ | ---------------------------------------------------------------------------------------------- | ------- |
| treeData             | `TreeItem[]`                         | -       | -            | Data for the tree component.                                                                   |         |
| rightMenuList        | `ContextMenuItem[]`                  | -       | -            | List of context menu items.                                                                    |         |
| checkedKeys          | `string[]`                           | -       | -            | Keys of the checked nodes.                                                                     |         |
| selectedKeys         | `string[]`                           | -       | -            | Keys of the selected nodes.                                                                    |         |
| expandedKeys         | `string[]`                           | -       | -            | Keys of the expanded nodes.                                                                    |         |
| actionList           | `ActionItem[]`                       | -       | -            | List of action buttons to display on mouse hover.                                              |         |
| title                | `string`                             | -       | -            | Customized title string.                                                                       |         |
| toolbar              | `boolean`                            | -       | -            | Whether to show the toolbar.                                                                   |         |
| search               | `boolean`                            | -       | -            | Whether to show the search box.                                                                |         |
| clickRowToExpand     | `boolean`                            | -       | -            | Whether to automatically expand the row on click.                                              |         |
| beforeRightClick     | `(node, event) => ContextMenuItem[]` | -       | -            | Callback function triggered on right-click. Returns an array of context menu items to display. |         |
| rightMenuList        | `ContextMenuItem[]`                  | -       | -            | List of context menu items.                                                                    |         |
| defaultExpandLevel   | `string \| number`                   | -       | -            | The number of levels to expand by default after the initial rendering.                         | 2.4.1   |
| defaultExpandAll     | `boolean`                            | `false` | `true/false` | Whether to expand all nodes by default after the initial rendering.                            | 2.4.1   |
| searchValue(v-model) | `string`                             | -       | -            | The current search keyword.                                                                    | 2.7.1   |

::: tip Note

`defaultExpandLevel` and `defaultExpandAll` only take effect during the **initial rendering**. If `treeData` for `basicTree` is set after the creation (such as with asynchronous data), you need to call `expandAll` or `filterByLevel` provided by `basicTree` to expand the nodes after updating.

:::

**ActionItem**

```ts
{
  // The icon to be rendered.
  render: (record: any) => any;
  // Whether to show the button.
  show?: boolean | ((record: Recordable) => boolean);
}
```

**ContextMenuItem**

```ts
{
  // The text of the menu item.
  label: string;
  // The icon of the menu item.
  icon?: string;
  // Whether the menu item is disabled.
  disabled?: boolean;
  // The event handler.
  handler?: (...arg) => any;
  // Whether to show a divider line.
  divider?: boolean;
  // Submenu items.
  children?: ContextMenuItem[];
}
```

## Slots

::: tip Note

All slots in the official documentation are supported. Please refer to the [Ant Design Vue Tree](https://2x.antdv.com/components/tree-cn/#Tree-props) documentation for details.

:::

## Methods

| Name            | Arguments                                            | Description                                  |
| --------------- | ---------------------------------------------------- | -------------------------------------------- |
| checkAll        | `(checkAll: boolean) => void`                        | Check all nodes.                             |
| expandAll       | `(expandAll: boolean) => void`                       | Expand all nodes.                            |
| setExpandedKeys | `(keys: Keys) => void`                               | Set the keys of the expanded nodes.          |
| getExpandedKeys | `() => Keys`                                         | Get the keys of the expanded nodes.          |
| setSelectedKeys | `(keys: Keys) => void`                               | Set the keys of the selected nodes.          |
| getSelectedKeys | `() => Keys`                                         | Get the keys of the selected nodes.          |
| setCheckedKeys  | `(keys: CheckKeys) => void`                          | Set the keys of the checked nodes.           |
| getCheckedKeys  | `() => CheckKeys`                                    | Get the keys of the checked nodes.           |
| filterByLevel   | `(level: number) => void`                            | Show nodes of a specified level.             |
| insertNodeByKey | `(opt: InsertNodeParams) => void`                    | Insert a child node into the specified node. |
| deleteNodeByKey | `(key: string) => void`                              | Delete the node with the specified key.      |
| updateNodeByKey | `(key: string, node: Omit<TreeItem, 'key'>) => void` | Update the node with the specified key.      |
| setSearchValue  | `(value: string) => void`                            | Set the current search keyword (v2.7.1).     |
| getSearchValue  | `() => string`                                       | Get the current search keyword (v2.7.1).     |
