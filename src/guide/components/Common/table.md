---
title: Table
author: Ryan SU
---

# Table form

Encapsulate the table component of `antv`

> If not in the documentation, try looking for it in the online examples

## Usage

### Example

```vue
<template>
  <div class="p-4">
    <BasicTable
      title="基础示例"
      titleHelpMessage="温馨提醒"
      :columns="columns"
      :dataSource="data"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      :pagination="{ pageSize: 20 }"
    >
      <template #toolbar>
        <a-button type="primary"> 操作按钮 </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { BasicTable } from "/@/components/Table";
import { getBasicColumns, getBasicData } from "./tableData";

export default defineComponent({
  components: { BasicTable },
  setup() {
    return {
      columns: getBasicColumns(),
      data: getBasicData(),
    };
  },
});
</script>
```

### template example

See `Methods` description below for all callable functions

```vue
<template>
  <div class="p-4">
    <BasicTable
      :canResize="false"
      title="RefTable示例"
      titleHelpMessage="使用Ref调用表格内方法"
      ref="tableRef"
      :api="api"
      :columns="columns"
      rowKey="id"
      :rowSelection="{ type: 'checkbox' }"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, unref } from "vue";
import { BasicTable, TableActionType } from "/@/components/Table";
import { getBasicColumns, getBasicShortColumns } from "./tableData";
import { demoListApi } from "/@/api/demo/table";
export default defineComponent({
  components: { BasicTable },
  setup() {
    const tableRef = ref<Nullable<TableActionType>>(null);

    function getTableAction() {
      const tableAction = unref(tableRef);
      if (!tableAction) {
        throw new Error("tableAction is null");
      }
      return tableAction;
    }
    function changeLoading() {
      getTableAction().setLoading(true);
      setTimeout(() => {
        getTableAction().setLoading(false);
      }, 1000);
    }
    return {
      tableRef,
      api: demoListApi,
      columns: getBasicColumns(),
      changeLoading,
    };
  },
});
</script>
```

### BasicColumn and tableAction display hidden examples through permissions and business controls

```vue
<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              onClick: handleEdit.bind(null, record),
              auth: 'other', // 根据权限控制是否显示: 无权限，不显示
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
          ]"
          :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
              },
            },
            {
              label: '禁用',
              popConfirm: {
                title: '是否禁用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status === 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
              },
            },
            {
              label: '同时控制',
              popConfirm: {
                title: '是否动态显示？',
                confirm: handleOpen.bind(null, record),
              },
              auth: 'super', // 同时根据权限和业务控制是否显示
              ifShow: () => {
                return true; // 根据业务控制是否显示
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  BasicTable,
  useTable,
  BasicColumn,
  TableAction,
} from "/@/components/Table";

import { demoListApi } from "/@/api/demo/table";
const columns: BasicColumn[] = [
  {
    title: "姓名",
    dataIndex: "name",
    auth: "test", // 根据权限控制是否显示: 无权限，不显示
  },
  {
    title: "地址",
    dataIndex: "address",
    auth: "super", // 同时根据权限控制是否显示
    ifShow: (_column) => {
      return true; // 根据业务控制是否显示
    },
  },
];
export default defineComponent({
  components: { BasicTable, TableAction },
  setup() {
    const [registerTable] = useTable({
      title: "TableAction组件及固定列示例",
      api: demoListApi,
      columns: columns,
      bordered: true,
      actionColumn: {
        width: 250,
        title: "Action",
        dataIndex: "action",
        slots: { customRender: "action" },
      },
    });
    function handleEdit(record: Recordable) {
      console.log("点击了编辑", record);
    }
    function handleDelete(record: Recordable) {
      console.log("点击了删除", record);
    }
    function handleOpen(record: Recordable) {
      console.log("点击了启用", record);
    }
    return {
      registerTable,
      handleEdit,
      handleDelete,
      handleOpen,
    };
  },
});
</script>
```

## useTable

Use the **useTable** that comes with the component to facilitate the use of forms

Here is an example using a simple table,

```vue
<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { BasicTable, useTable } from '/@/components/Table';
import { getBasicColumns, getBasicShortColumns } from './tableData';
import { demoListApi } from '/@/api/demo/table';
export default defineComponent({
  components: { BasicTable },
  setup() {
    const [
      registerTable,
      {
        setLoading,
      },
    ] = useTable({
      api: demoListApi,
      columns: getBasicColumns(),
    });

    function changeLoading() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    }
    return {
      registerTable,
      changeLoading,
    };
  },
});
</script>
```

### Usage

Used to call Table internal methods and table parameter configuration

```ts
// Table props can also be directly registered inside useTable
const [register, methods] = useTable(props);
```

**register**

`register` is used to register useTable, if you need to use the api provided by `useTable`, you must pass register to onRegister of the component

```vue
<template>
  <BasicTable @register="register" />
</template>
<script>
export default defineComponent({
  components: { BasicForm },
  setup() {
    const [register] = useTable();
    return { register };
  },
});
</script>
```

### Methods

**setProps**

Type: `(props: Partial<BasicTableProps>) => void`

Description: Used to set the table parameters.

**reload**

Type: `(opt?: FetchParams) => Promise<void>`

Description: Refresh the table.

**redoHeight**

Type: `() => void`

Description: Recalculate the height of the table.

**setLoading**

Type: `(loading: boolean) => void`

Description: Set the loading state of the table.

**getDataSource**

Type: `<T = Recordable>() => T[]`

Description: Get the table data.

**getRawDataSource**

Type: `<T = Recordable>() => T`

Description: Get the original data from the backend interface.

**getColumns**

Type: `(opt?: GetColumnsParams) => BasicColumn[]`

Description: Get the table columns.

**setColumns**

Type: `(columns: BasicColumn[] | string[]) => void`

Description: Set the table header data.

**setTableData**

Type: `<T = Recordable>(values: T[]) => void`

Description: Set the table data.

**setPagination**

Type: `(info: Partial<PaginationProps>) => void`

Description: Set the pagination information.

**deleteSelectRowByKey**

Type: `(key: string) => void`

Description: Remove the selected row by key.

**getSelectRowKeys**

Type: `() => string[]`

Description: Get the keys of the selected rows.

**getSelectRows**

Type: `<T = Recordable>() => T[]`

Description: Get the selected rows.

**clearSelectedRowKeys**

Type: `() => void`

Description: Clear the selected rows.

**setSelectedRowKeys**

Type: `(rowKeys: string[] | number[]) => void`

Description: Set the selected rows.

**getPaginationRef**

Type: `() => PaginationProps | boolean`

Description: Get the current pagination information.

**getShowPagination**

Type: `() => boolean`

Description: Get whether to display pagination.

**setShowPagination**

Type: `(show: boolean) => Promise<void>`

Description: Set whether to display pagination.

**getRowSelection**

Type: `() => TableRowSelection<Recordable>`

Description: Get the checkbox information.

**updateTableData**

Type: `(index: number, key: string, value: any) => void`

Description: Update table data.

**updateTableDataRecord**

Type: `(rowKey: string | number, record: Recordable) => Recordable | void`

Description: Update data for a specified row based on the unique `rowKey`. This can be used to update data locally without refreshing the entire table.

**deleteTableDataRecord**

Type: `(rowKey: string | number | string[] | number[]) => void`

Description: Dynamically delete data for specified rows based on the unique `rowKey`. This can be used to update data locally without refreshing the entire table.

**insertTableDataRecord**

Type: `(record: Recordable, index?: number) => Recordable | void`

Description: Insert data rows based on the `index` value passed in. If not passed in, the data will be inserted in order. This can be used to update data locally without refreshing the entire table.

**getForm**

Type: `() => FormActionType`

Description: If the search area is enabled, this function can be used to obtain the form object function for operation.

**expandAll**

Type: `() => void`

Description: Expand the tree table.

**collapseAll**

Type: `() => void`

Description: Collapse the tree table.

## Props

::: tip Friendly reminder

- In addition to the following parameters, all props in the official documentation are also supported. For details, please refer to [antv table](https://2x.antdv.com/components/table-cn/#API).
- Note: the `defaultExpandAllRows` and `defaultExpandedRowKeys` properties are not supported in `basicTable`, and have also been removed in `antv table` v2.2.0.

:::

| Property                | Type                                                                                    | Default     | Options | Description                                                                                                                                                                                 | Version |
| ----------------------- | --------------------------------------------------------------------------------------- | ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| clickToRowSelect        | `boolean`                                                                               | `true`      | -       | Whether to select the checkbox or radio when clicking on a row. Requires enabling.                                                                                                          |         |
| sortFn                  | `(sortInfo: SorterResult<any>) => any`                                                  | -           | -       | Custom sorting method. See global configuration instructions below.                                                                                                                         |         |
| filterFn                | `(sortInfo: Partial<Recordable<string[]>>) => any`                                      | -           | -       | Custom filtering method. See global configuration instructions below.                                                                                                                       |         |
| showTableSetting        | `boolean`                                                                               | `false`     | -       | Whether to show the table setting tool.                                                                                                                                                     |         |
| tableSetting            | `TableSetting`                                                                          | -           | -       | Table setting tool configuration. See `TableSetting` below.                                                                                                                                 |         |
| striped                 | `boolean`                                                                               | `true`      | -       | Whether to use zebra stripes.                                                                                                                                                               |         |
| inset                   | `boolean`                                                                               | `false`     | -       | Whether to cancel the default padding of the table.                                                                                                                                         |         |
| autoCreateKey           | `boolean`                                                                               | `true`      | -       | Whether to generate keys automatically.                                                                                                                                                     |         |
| showSummary             | `boolean`                                                                               | `false`     | -       | Whether to show the summary row.                                                                                                                                                            |         |
| summaryData             | `any[]`                                                                                 | -           | -       | Custom summary data. If there is, it will be displayed.                                                                                                                                     |         |
| emptyDataIsShowTable    | `boolean`                                                                               | `true`      | -       | Whether to show the table when there is no data in the table, with the search form enabled.                                                                                                 |         |
| summaryFunc             | `(...arg) => any[]`                                                                     | -           | -       | Method for calculating the summary row.                                                                                                                                                     |         |
| ~~canRowDrag~~          | ~~`boolean`~~                                                                           | ~~`false`~~ | -       | ~~Whether rows can be dragged to sort.~~                                                                                                                                                    |         |
| ~~canColDrag~~          | ~~`boolean`~~                                                                           | ~~`false`~~ | -       | ~~Whether columns can be dragged.~~                                                                                                                                                         |         |
| isTreeTable             | `boolean`                                                                               | `false`     | -       | Whether it is a tree table.                                                                                                                                                                 |         |
| api                     | `(...arg: any) => Promise<any>`                                                         | -           | -       | Request interface, can directly pass in the function in `src/api`.                                                                                                                          |         |
| beforeFetch             | `(T)=>T`                                                                                | -           | -       | Process parameters before the request.                                                                                                                                                      |         |
| afterFetch              | `(T)=>T`                                                                                | -           | -       | Process return value after the request.                                                                                                                                                     |         |
| handleSearchInfoFn      | `(T)=>T`                                                                                | -           | -       | Process search parameter before request when search form is enabled.                                                                                                                        |         |
| fetchSetting            | `FetchSetting`                                                                          | -           | -       | Interface request configuration, can configure the request fields and response field names. See global configuration instructions below.                                                    |         |
| immediate               | `boolean`                                                                               | `true`      | -       | Whether to request the interface immediately after the component is loaded. If `api` is passed in and `false`, you need to use `reload` to load the table data.                             |         |
| searchInfo              | `any`                                                                                   | -           | -       | Additional request parameters.                                                                                                                                                              |         |
| useSearchForm           | `boolean`                                                                               | `false`     | -       | Whether to use the search form.                                                                                                                                                             |         |
| formConfig              | `any`                                                                                   | -           | -       | Form configuration, refer to the props of the form component.                                                                                                                               |         |
| columns                 | `any`                                                                                   | -           | -       | Column information of the table.                                                                                                                                                            |         |
| showIndexColumn         | `boolean`                                                                               | `true`      | -       | Whether to display the index column.                                                                                                                                                        |         |
| indexColumnProps        | `any`                                                                                   | -           | -       | Configuration for the index column.                                                                                                                                                         |         |
| actionColumn            | `any`                                                                                   | -           | -       | Configuration for the action column on the right side of the table.                                                                                                                         |         |
| ellipsis                | `boolean`                                                                               | `true`      | -       | Whether to show `...` when text exceeds the width.                                                                                                                                          |         |
| canResize               | `boolean`                                                                               | `true`      | -       | Whether the height can be adaptive. (If placed in the `PageWrapper` component, do not enable the `fixedHeight` property of the `PageWrapper`, and the two cannot be used at the same time.) |         |
| clearSelectOnPageChange | `boolean`                                                                               | `false`     | -       | Whether to reset the selection status when changing the page number.                                                                                                                        |         |
| resizeHeightOffset      | `number`                                                                                | `0`         | -       | The result of the table's adaptive height calculation will be reduced by this value.                                                                                                        |         |
| rowSelection            | `any`                                                                                   | -           | -       | Configuration for the selection column.                                                                                                                                                     |         |
| title                   | `string`                                                                                | -           | -       | Title of the table.                                                                                                                                                                         |         |
| titleHelpMessage        | `string ｜ string[]`                                                                    | -           | -       | Friendly reminder on the right side of the table title.                                                                                                                                     |         |
| maxHeight               | `number`                                                                                | -           | -       | The maximum height of the table, and a scrollbar will appear if it exceeds it.                                                                                                              |         |
| dataSource              | `any[]`                                                                                 | -           | -       | Table data, not loaded through `api`.                                                                                                                                                       |         |
| bordered                | `boolean`                                                                               | `false`     | -       | Whether to show the table border.                                                                                                                                                           |         |
| pagination              | `any`                                                                                   | -           | -       | Configuration for pagination, `false` to hide pagination.                                                                                                                                   |         |
| loading                 | `boolean`                                                                               | `false`     | -       | Loading state of the table.                                                                                                                                                                 |         |
| scroll                  | `any`                                                                                   | -           | -       | Refer to the `scroll` prop in the official documentation.                                                                                                                                   |         |
| beforeEditSubmit        | `({record: Recordable,index: number,key: string \| number,value: any}) => Promise<any>` | -           | -       | Callback function for submitting the edited cell state, returning `false` will prevent the cell from submitting data to the table. This callback is invalid in row editing mode.            | `2.7.2` |

### TableSetting

```ts
{
  // Whether to show the refresh button.
  redo?: boolean;
  // Whether to show the size adjustment button.
  size?: boolean;
  // Whether to show the field adjustment button.
  setting?: boolean;
  // Whether to show the full screen button.
  fullScreen?: boolean;
}
```

## BasicColumn

In addition to the [official `Column` configuration](https://2x.antdv.com/components/table-cn/#Column), the following parameters are added:

| Property           | Type                                                      | Default | Options | Description                                                                               |
| ------------------ | --------------------------------------------------------- | ------- | ------- | ----------------------------------------------------------------------------------------- |
| defaultHidden      | `boolean`                                                 | `false` | -       | Whether the column is hidden by default and can be displayed in the column configuration. |
| helpMessage        | `string｜string[]`                                        | -       | -       | Help text on the right side of the column header.                                         |
| edit               | `boolean`                                                 | -       | -       | Whether to enable cell editing.                                                           |
| editRow            | `boolean`                                                 | -       | -       | Whether to enable row editing.                                                            |
| editable           | `boolean`                                                 | `false` | -       | Whether the cell is in editing state.                                                     |
| editComponent      | `ComponentType`                                           | `Input` | -       | Editing component.                                                                        |
| editComponentProps | `any`                                                     | -       | -       | Props for the corresponding editing component.                                            |
| editRule           | `((text: string, record: Recordable) => Promise<string>)` | -       | -       | Form validation for the corresponding editing component.                                  |
| editValueMap       | `(value: any) => string`                                  | -       | -       | Enumeration of the corresponding cell value.                                              |
| onEditRow          | `（）=>void`                                              | -       | -       | Trigger row editing.                                                                      |
| format             | `CellFormat`                                              | -       | -       | Cell formatting.                                                                          |
| auth               | `RoleEnum` ｜ `RoleEnum[]` ｜ `string` ｜ `string[]`      | -       | -       | Control whether the current column is displayed based on the permission code.             |
| ifShow             | `boolean ｜ ((action: ActionItem) => boolean)`            | -       | -       | Control whether the current column is displayed based on the business status.             |

### EditComponentType

```ts
export type ComponentType =
  | "Input"
  | "InputNumber"
  | "Select"
  | "ApiSelect"
  | "Checkbox"
  | "Switch"
  | "DatePicker" // v2.5.0 以上
  | "TimePicker"; // v2.5.0 以上
```

### CellFormat

```ts
export type CellFormat =
  | string
  | ((text: string, record: Recordable, index: number) => string | number)
  | Map<string | number, any>;
```

## Events

::: tip Reminder

In addition to the following events, the events in the official documentation are also supported. For details, please refer to [antv table](https://2x.antdv.com/components/table-cn/#API).

:::

| Event            | Callback Parameters                     | Description                                                          |
| ---------------- | --------------------------------------- | -------------------------------------------------------------------- |
| fetch-success    | `Function({items,total})`               | Triggered after the interface request is successful.                 |
| fetch-error      | `Function(error)`                       | Error information.                                                   |
| selection-change | `Function({keys，rows})`                | Triggered when a row is selected.                                    |
| row-click        | `Function(record, index, event)`        | Triggered when a row is clicked.                                     |
| row-dbClick      | `Function(record, index, event)`        | Triggered when a row is double-clicked.                              |
| row-contextmenu  | `Function(record, index, event)`        | Triggered when the right mouse button is clicked on a row.           |
| row-mouseenter   | `Function(record, index, event)`        | Triggered when the mouse enters a row.                               |
| row-mouseleave   | `Function(record, index, event)`        | Triggered when the mouse leaves a row.                               |
| edit-end         | `Function({record, index, key, value})` | Triggered when cell editing is completed.                            |
| edit-cancel      | `Function({record, index, key, value})` | Triggered when cell editing is cancelled.                            |
| edit-row-end     | `Function()`                            | Triggered when row editing is completed.                             |
| edit-change      | `Function({column,value,record})`       | Triggered when the value of the editing component in a cell changes. |

::: tip Explanation of `edit-change`

Starting from version `2.4.2`, for the `edit-change` event, the `editValueRefs` property in the `record` object contains the `ref` objects of all editing components (if any) in the current row. This can be used to handle the linkage of editing components in the same row. See the example below:

:::

```javascript
function onEditChange({ column, record }) {
  // When the unit price or quantity in the same row changes, update the total amount (all three values are values of editing components in the current row)
  if (column.dataIndex === "qty" || column.dataIndex === "price") {
    const {
      editValueRefs: { total, qty, price },
    } = record;
    total.value = unref(qty) * unref(price);
  }
}
```

## Slots

::: tip Reminder

In addition to the following parameters, the slots in the official documentation are also supported. For details, please refer to [antv table](https://2x.antdv.com/components/table-cn/#API).

:::

| Name              | Description                  | Version |
| ----------------- | ---------------------------- | ------- |
| tableTitle        | Top left area of the table.  |         |
| toolbar           | Top right area of the table. |         |
| expandedRowRender | Expandable row area.         |         |
| headerTop         | Top area of the table title. | 2.6.1   |

## Form-Slots

When the form is enabled, slots with the prefix `form-xxxx` will be treated as slots for the form.

`xxxx` is the slot of the form component. For details, please refer to the [form component documentation](./form.md#Slots).

For example:

```
form-submitBefore
```

## Built-in Components (for internal use only)

### TableAction

Used to render the operation column on the right side of the table.

#### Props

| Property              | Type           | Default | Options      | Description                                                               | Version |
| --------------------- | -------------- | ------- | ------------ | ------------------------------------------------------------------------- | ------- |
| actions               | `ActionItem[]` | -       | -            | Button list in the operation column on the right.                         |         |
| dropDownActions       | `ActionItem[]` | -       | -            | Dropdown button list in the operation column on the right.                |         |
| stopButtonPropagation | `boolean`      | `false` | `true/false` | Whether to prevent the click event of the operation button from bubbling. | 2.5.0   |

**ActionItem**

```ts
export interface ActionItem {
  // Button text.
  label: string;
  // Whether the button is disabled.
  disabled?: boolean;
  // Button color.
  color?: "success" | "error" | "warning";
  // Button type.
  type?: string;
  // Button component props.
  props?: any;
  // Button icon.
  icon?: string;
  // Popconfirm.
  popConfirm?: PopConfirm;
  // Whether to show the divider line, v2.0.0+.
  divider?: boolean;
  // Control whether the column is displayed based on the permission code, v2.4.0+.
  auth?: RoleEnum | RoleEnum[] | string | string[];
  // Control whether the column is displayed based on the business status, v2.4.0+.
  ifShow?: boolean | ((action: ActionItem) => boolean);
  // Click callback.
  onClick?: Fn;
  // Tooltip configuration, supported in versions 2.5.3 and above. Can be configured as a string or a complete TooltipProps object.
  tooltip?: string | TooltipProps;
}
```

For more information on `TooltipProps`, please refer to the [tooltip documentation](https://2x.antdv.com/components/tooltip-cn#API).

**PopConfirm**

```ts
export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: Fn;
  cancel?: Fn;
  icon?: string;
}
```

### TableImg

Used to render images in table cells, and supports image preview.

#### Props

| Property   | Type       | Default | Options      | Description                                              | Version |
| ---------- | ---------- | ------- | ------------ | -------------------------------------------------------- | ------- |
| imgList    | `string[]` | -       | -            | List of image addresses.                                 |         |
| size       | `number`   | -       | -            | Image size.                                              |         |
| simpleShow | `boolean`  | `false` | `true/false` | Simple display mode (only the first image is displayed). | 2.5.0   |
| showBadge  | `boolean`  | `true`  | `true/false` | Whether to show the count badge in simple mode.          | 2.5.0   |
| margin     | `number`   | 4       | -            | Image spacing in normal mode.                            | 2.5.0   |
| srcPrefix  | `string`   | -       | -            | Content to be inserted before each image src.            | 2.5.0   |

## Global Configuration

The global parameters can be configured in [componentsSettings](https://github.com/vbenjs/vue-vben-admin/tree/main/src/settings/componentSetting.ts) to unify the style of the entire project. They can be overridden by passing props.
