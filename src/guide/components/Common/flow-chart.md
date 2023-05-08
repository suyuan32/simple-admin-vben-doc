---
title: FlowChart
author: Ryan SU
---

# FlowChart

Flowchart component, a simple wrapper based on `didi/LogicFlow`. For detailed configuration, please refer to the document [FlowChart](http://logic-flow.org/guide/start.html)

## Usage

```vue
<template>
  <FlowChart :data="demoData" />
</template>

<script lang="ts">
import { FlowChart } from "/@/components/FlowChart";
import { PageWrapper } from "/@/components/Page";

import demoData from "./dataTurbo.json";
export default {
  components: { FlowChart, PageWrapper },
  setup() {
    return { demoData };
  },
};
</script>
```

## Props

| Name         | Type      | Default | Options | Description                          |
| ------------ | --------- | ------- | ------- | ------------------------------------ |
| flowOptions  | `object`  | -       | -       | FlowCharts options                   |
| data         | `object`  | -       | -       | Flow data                            |
| toolbar      | `boolean` | `true`  | -       | Whether to show the toolbar          |
| patternItems | `[]`      | -       | -       | Data for the left drag-and-drop list |
