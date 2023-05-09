---
title: FlowChart
author: Ryan SU
---

# FlowChart

Flowchart component, a simple wrapper based on `didi/LogicFlow`. For detailed configuration, please refer to the document [FlowChart](http://logic-flow.org/guide/start.html)

## Usage

```vue
<template>
  <PageWrapper
    title="流程图"
    content="简单流程图示例,具体功能需要自己完善"
    contentFullHeight
    fixedHeight
  >
    <FlowChart :data="demoData" />
  </PageWrapper>
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

## Example data

```ts
{
  "flowElementList": [
    {
      "incoming": [],
      "outgoing": ["Flow_33inf2k"],
      "dockers": [],
      "type": 2,
      "properties": {
        "a": "efrwe",
        "b": "wewe",
        "name": "开始",
        "x": 280,
        "y": 200,
        "text": {
          "x": 280,
          "y": 200,
          "value": "开始"
        },
        "logicFlowType": "bpmn:startEvent"
      },
      "key": "Event_1d42u4p"
    },
    {
      "incoming": ["Flow_379e0o9"],
      "outgoing": [],
      "dockers": [],
      "type": 3,
      "properties": {
        "a": "efrwe",
        "b": "wewe",
        "name": "结束",
        "x": 920,
        "y": 200,
        "text": {
          "x": 920,
          "y": 200,
          "value": "结束"
        },
        "logicFlowType": "bpmn:endEvent"
      },
      "key": "Event_08p8i6q"
    },
    {
      "incoming": ["Flow_0pfouf0"],
      "outgoing": ["Flow_3918lhh"],
      "dockers": [],
      "type": 6,
      "properties": {
        "a": "efrwe",
        "b": "wewe",
        "name": "网关",
        "x": 580,
        "y": 200,
        "text": {
          "x": 580,
          "y": 200,
          "value": "网关"
        },
        "logicFlowType": "bpmn:exclusiveGateway"
      },
      "key": "Gateway_1fngqgj"
    },
    {
      "incoming": ["Flow_33inf2k"],
      "outgoing": ["Flow_0pfouf0"],
      "dockers": [],
      "type": 4,
      "properties": {
        "a": "efrwe",
        "b": "wewe",
        "name": "用户",
        "x": 420,
        "y": 200,
        "text": {
          "x": 420,
          "y": 200,
          "value": "用户"
        },
        "logicFlowType": "bpmn:userTask"
      },
      "key": "Activity_2mgtaia"
    },
    {
      "incoming": ["Flow_3918lhh"],
      "outgoing": ["Flow_379e0o9"],
      "dockers": [],
      "type": 5,
      "properties": {
        "a": "efrwe",
        "b": "wewe",
        "name": "服务",
        "x": 760,
        "y": 200,
        "text": {
          "x": 760,
          "y": 200,
          "value": "服务"
        },
        "logicFlowType": "bpmn:serviceTask"
      },
      "key": "Activity_1sp8qc8"
    },
    {
      "incoming": ["Event_1d42u4p"],
      "outgoing": ["Activity_2mgtaia"],
      "type": 1,
      "dockers": [],
      "properties": {
        "name": "边",
        "text": {
          "x": 331,
          "y": 200,
          "value": "边"
        },
        "startPoint": {
          "x": 298,
          "y": 200
        },
        "endPoint": {
          "x": 370,
          "y": 200
        },
        "pointsList": [
          {
            "x": 298,
            "y": 200
          },
          {
            "x": 370,
            "y": 200
          }
        ],
        "logicFlowType": "bpmn:sequenceFlow"
      },
      "key": "Flow_33inf2k"
    },
    {
      "incoming": ["Activity_2mgtaia"],
      "outgoing": ["Gateway_1fngqgj"],
      "type": 1,
      "dockers": [],
      "properties": {
        "name": "边2",
        "text": {
          "x": 507,
          "y": 200,
          "value": "边2"
        },
        "startPoint": {
          "x": 470,
          "y": 200
        },
        "endPoint": {
          "x": 555,
          "y": 200
        },
        "pointsList": [
          {
            "x": 470,
            "y": 200
          },
          {
            "x": 555,
            "y": 200
          }
        ],
        "logicFlowType": "bpmn:sequenceFlow"
      },
      "key": "Flow_0pfouf0"
    },
    {
      "incoming": ["Gateway_1fngqgj"],
      "outgoing": ["Activity_1sp8qc8"],
      "type": 1,
      "dockers": [],
      "properties": {
        "name": "边3",
        "text": {
          "x": 664,
          "y": 200,
          "value": "边3"
        },
        "startPoint": {
          "x": 605,
          "y": 200
        },
        "endPoint": {
          "x": 710,
          "y": 200
        },
        "pointsList": [
          {
            "x": 605,
            "y": 200
          },
          {
            "x": 710,
            "y": 200
          }
        ],
        "logicFlowType": "bpmn:sequenceFlow"
      },
      "key": "Flow_3918lhh"
    },
    {
      "incoming": ["Activity_1sp8qc8"],
      "outgoing": ["Event_08p8i6q"],
      "type": 1,
      "dockers": [],
      "properties": {
        "name": "边4",
        "text": {
          "x": 871,
          "y": 200,
          "value": "边4"
        },
        "startPoint": {
          "x": 810,
          "y": 200
        },
        "endPoint": {
          "x": 902,
          "y": 200
        },
        "pointsList": [
          {
            "x": 810,
            "y": 200
          },
          {
            "x": 902,
            "y": 200
          }
        ],
        "logicFlowType": "bpmn:sequenceFlow"
      },
      "key": "Flow_379e0o9"
    }
  ]
}

```
