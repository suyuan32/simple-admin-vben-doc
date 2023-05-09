---
title: Excel
author: Ryan SU
---

# Excel component

Excel import and export operations

XLSX is used in the project. For specific documents, please refer to [XLSX Documentation](https://sheetjs.com/)

## Import

### Usage

```vue
<template>
  <ImpExcel @success="loadDataSuccess">
    <a-button class="m-3">导入Excel</a-button>
  </ImpExcel>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ImpExcel, ExcelData } from "/@/components/Excel";

export default defineComponent({
  components: { ImpExcel },
  setup() {
    function loadDataSuccess(excelDataList: ExcelData[]) {
      console.log(excelDataList);
    }
    return {
      loadDataSuccess,
    };
  },
});
</script>
```

### Events

| Name    | Callback Parameters     | Description                        |
| ------- | ----------------------- | ---------------------------------- |
| success | `(res:ExcelData)=>void` | Callback when import is successful |
| error   | `()=>void`              | Callback when export fails         |

### ExcelData

| Name    | Type                    | Default | Description  |
| ------- | ----------------------- | ------- | ------------ |
| header  | `string[]`              |         | Table header |
| results | `T[]`                   |         | Table data   |
| meta    | `{ sheetName: string }` |         | Table title  |

## Export

For more details, please refer to the full version of the example.

```ts
import { jsonToSheetXlsx, aoaToSheetXlsx } from "/@/components/Excel";
```

### Array format data export

```ts
import { aoaToSheetXlsx } from "/@/components/Excel";
// 保证data顺序与header一致
aoaToSheetXlsx({
  data: [],
  header: [],
  filename: "二维数组方式导出excel.xlsx",
});
```

### Custom export format

```ts
import { jsonToSheetXlsx } from "/@/components/Excel";

jsonToSheetXlsx({
  data,
  filename,
  write2excelOpts: {
    // 可以是 xlsx/html/csv/txt
    bookType,
  },
});
```

### Json format export

```ts
import { jsonToSheetXlsx } from "/@/components/Excel";

jsonToSheetXlsx({
  data,
  filename: "使用key作为默认头部.xlsx",
});

jsonToSheetXlsx({
  data,
  header: {
    id: "ID",
    name: "姓名",
    age: "年龄",
    no: "编号",
    address: "地址",
    beginTime: "开始时间",
    endTime: "结束时间",
  },
  filename: "自定义头部.xlsx",
  json2sheetOpts: {
    // 指定顺序
    header: ["name", "id"],
  },
});
```

## Function

| Name            | Callback Parameters     | Return Value | Description                |
| --------------- | ----------------------- | ------------ | -------------------------- |
| jsonToSheetXlsx | `Function(JsonToSheet)` |              | Export JSON data to excel  |
| aoaToSheetXlsx  | `Function(AoAToSheet)`  |              | Export array data to excel |

### JsonToSheet Type

| Name              | Type             | Default                | Description                                                                       |
| ----------------- | ---------------- | ---------------------- | --------------------------------------------------------------------------------- |
| data              | `T[]`            |                        | Array of JSON objects to be exported                                              |
| header?:          | `T`;             |                        | If not set, the `key` of the JSON object is used as the `header`                  |
| filename?:        | `string`         | `excel-list.xlsx`      | Name of the exported file                                                         |
| json2sheetOpts?:  | `JSON2SheetOpts` |                        | Optional parameters for `XLSX.utils.json_to_sheet`                                |
| write2excelOpts?: | `WritingOptions` | `{ bookType: 'xlsx' }` | Optional parameters for `XLSX.writeFile`, refer to XLSX documentation for details |

### AoAToSheet Type

| Name              | Type             | Default                | Description                                                                       |
| ----------------- | ---------------- | ---------------------- | --------------------------------------------------------------------------------- |
| data              | `T[][]`          |                        | Two-dimensional array to be exported                                              |
| header?:          | `T`;             |                        | Header; if not set, there is no header                                            |
| filename?:        | `string`         | `excel-list.xlsx`      | Name of the exported file                                                         |
| write2excelOpts?: | `WritingOptions` | `{ bookType: 'xlsx' }` | Optional parameters for `XLSX.writeFile`, refer to XLSX documentation for details |
