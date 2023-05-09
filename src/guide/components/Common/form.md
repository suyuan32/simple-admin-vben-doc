---
title: Form
author: Ryan SU
---

# Form form component

Encapsulate the form component of `antv` and extend some common functions

> If not in the documentation, try looking for it in the online examples

## Usage

### useForm method

Here is an example using a simple form with only one input field

```vue
<template>
  <div class="m-4">
    <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      @submit="handleSubmit"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicForm, FormSchema } from "/@/components/Form";
import { useMessage } from "/@/hooks/web/useMessage";

const schemas: FormSchema[] = [
  {
    field: "field",
    component: "Input",
    label: "字段1",
    colProps: {
      span: 8,
    },
    defaultValue: "1",
    componentProps: {
      placeholder: "自定义placeholder",
      onChange: (e) => {
        console.log(e);
      },
    },
  },
];

export default defineComponent({
  components: { BasicForm },
  setup() {
    const { createMessage } = useMessage();
    return {
      schemas,
      handleSubmit: (values: any) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
    };
  },
});
</script>
```

### template method

See `Methods` description below for all callable functions

```vue
<template>
  <div class="m-4">
    <BasicForm
      :schemas="schemas"
      ref="formElRef"
      :labelWidth="100"
      :actionColOptions="{ span: 24 }"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  BasicForm,
  FormSchema,
  FormActionType,
  FormProps,
} from "/@/components/Form";

const schemas: FormSchema[] = [];

export default defineComponent({
  components: { BasicForm },
  setup() {
    const formElRef = ref<Nullable<FormActionType>>(null);
    return {
      formElRef,
      schemas,
      setProps(props: FormProps) {
        const formEl = formElRef.value;
        if (!formEl) return;
        formEl.setProps(props);
      },
    };
  },
});
</script>
```

## useForm

The form component also provides `useForm`, which is convenient to call the internal method of the function

### Example

```vue
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicForm, FormSchema, useForm } from "/@/components/Form/index";
import { useMessage } from "/@/hooks/web/useMessage";

const schemas: FormSchema[] = [
  {
    field: "field1",
    component: "Input",
    label: "字段1",
    colProps: {
      span: 8,
    },
    componentProps: {
      placeholder: "自定义placeholder",
      onChange: (e: any) => {
        console.log(e);
      },
    },
  },
];

export default defineComponent({
  components: { BasicForm },
  setup() {
    const { createMessage } = useMessage();
    const [register, { setProps }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
      },
    });
    return {
      register,
      schemas,
      handleSubmit: (values: any) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
      setProps,
    };
  },
});
</script>
```

### Parameter introduction

```ts
const [register, methods] = useForm(props);
```

**The value in the parameter props can be `computed` or `ref` type**

**register**

register is used to register `useForm`, if you need to use the api provided by `useForm`, you must pass register to `onRegister` of the component

```vue
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicForm, useForm } from "/@/components/Form";

export default defineComponent({
  components: { BasicForm },
  setup() {
    const [register] = useForm();
    function handleSubmit() {
      console.log("submit");
    }
    return {
      register,
      handleSubmit,
    };
  },
});
</script>
```

See below for the explanation of `Methods`.

### Methods

**getFieldsValue**

Type: `() => Recordable;`

Description: Get form values.

**setFieldsValue**

Type: `<T>(values: T) => Promise<void>`

Description: Set form field values.

**resetFields**

Type: `() => Promise<any>`

Description: Reset form values.

**validateFields**

Type: `(nameList?: NamePath[]) => Promise<any>`

Description: Validate specified form items.

**validate**

Type: `(nameList?: NamePath[]) => Promise<any>`

Description: Validate the entire form.

**submit**

Type: `() => Promise<void>`

Description: Submit the form.

**scrollToField**

Type: `(name: NamePath, options?: ScrollOptions) => Promise<void>`

Description: Scroll to the corresponding field position.

**clearValidate**

Type: `(name?: string | string[]) => Promise<void>`

Description: Clear validation.

**setProps**

::: tip

Setting the props of the form can be done by passing them directly to the tag, using `setProps`, or by initializing with `useForm(props)`.

:::

Type: `(formProps: Partial<FormProps>) => Promise<void>`

Description: Set form props.

**removeSchemaByFiled**

Type: `(field: string | string[]) => Promise<void>`

Description: Delete schema by field.

**appendSchemaByField**

Type: `(schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined) => Promise<void>`

Description: Insert after the specified field. If no specified field is passed, insert at the end. When `first = true`, insert at the first position.

**updateSchema**

Type: `(data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>`

Description: Update the form's schema, only updating the parameters passed to the function.

e.g

```ts
updateSchema({ field: "filed", componentProps: { disabled: true } });
updateSchema([
  { field: "filed", componentProps: { disabled: true } },
  { field: "filed1", componentProps: { disabled: false } },
]);
```

## Props

::: tip Reminder

In addition to the following parameters, all props in the official documentation are also supported, please refer to [antv form](https://2x.antdv.com/components/form-cn/#Form) for details.

:::

| Name                  | Type                                    | Default   | Options                         | Description                                                                                                                                                                                                                      | Version |
| --------------------- | --------------------------------------- | --------- | ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| schemas               | `Schema[]`                              | -         | -                               | Form configuration, see `FormSchema` configuration below                                                                                                                                                                         |         |
| submitOnReset         | `boolean`                               | `false`   | -                               | Whether to submit the form when reset                                                                                                                                                                                            |         |
| labelCol              | `Partial<ColEx>`                        | -         | -                               | Common `LabelCol` configuration for the entire form                                                                                                                                                                              |         |
| wrapperCol            | `Partial<ColEx>`                        | -         | -                               | Common `wrapperCol` configuration for the entire form                                                                                                                                                                            |         |
| baseColProps          | `Partial<ColEx>`                        | -         | -                               | Configures `ColProps` for all selection items. Child items can also be configured individually.                                                                                                                                  |         |
| baseRowStyle          | `object`                                | -         | -                               | Configures the `style` of all `Row`s.                                                                                                                                                                                            |         |
| labelWidth            | `number , string`                       | -         | -                               | Extends the form component to increase the label width, applies to all components in the form. Can be overridden or disabled for a specific item.                                                                                |         |
| labelAlign            | `string`                                | -         | `'left'`,`'right'`              | Label layout                                                                                                                                                                                                                     |         |
| mergeDynamicData      | `object`                                | -         | -                               | Additional parameters passed to child components` values`                                                                                                                                                                        |         |
| autoFocusFirstItem    | `boolean`                               | `false`   | -                               | Whether to focus on the first input box. Only works when the first form item is an `input`.                                                                                                                                      |         |
| compact               | `boolean`                               | `false`   | `true/false`                    | Compact form, reduces `margin-bottom`.                                                                                                                                                                                           |         |
| size                  | `string`                                | `default` | `'default'`,`'small'`,`'large'` | Passes the `size` parameter to all components in the form. Custom components need to implement `size` acceptance.                                                                                                                |         |
| disabled              | `boolean`                               | `false`   | `true/false`                    | Passes the `disabled` attribute to all components in the form. Custom components need to implement `disabled` acceptance.                                                                                                        |         |
| autoSetPlaceHolder    | `boolean`                               | `true`    | ` true/false`                   | Automatically set the `placeholder` for components in the form. Custom components need to implement this themselves.                                                                                                             |         |
| autoSubmitOnEnter     | `boolean`                               | `false`   | ` true/false`                   | Automatically submit when Enter is pressed in `input`.                                                                                                                                                                           | 2.4.0   |
| rulesMessageJoinLabel | `boolean`                               | `false`   | `true/false`                    | If the form item has validation, the validation information will be automatically generated. This parameter controls whether to concatenate the Chinese name of the field to the end of the automatically generated information. |         |
| showAdvancedButton    | `boolean`                               | `false`   | `true/false`                    | Whether to display the expand/collapse button.                                                                                                                                                                                   |         |
| emptySpan             | `number , Partial<ColEx>`               | `0`       | -                               | Blank line cell, can be a number or a `Col` object.                                                                                                                                                                              |         |
| autoAdvancedLine      | `number`                                | `3`       | -                               | If `showAdvancedButton` is `true`, it will be collapsed by default when it exceeds the specified number of lines.                                                                                                                |         |
| alwaysShowLines       | `number`                                | `1`       | -                               | When collapsed, always display the specified number of lines.                                                                                                                                                                    | 2.7.1   |
| showActionButtonGroup | `boolean`                               | `true`    | `true/false`                    | Whether to display action buttons (reset/submit).                                                                                                                                                                                |         |
| actionColOptions      | `Partial<ColEx>`                        | -         | -                               | `Col` component configuration outside the action buttons. If `showAdvancedButton` is enabled, it does not need to be set. See `actionColOptions` below for details.                                                              |         |
| showResetButton       | `boolean`                               | `true`    | -                               | Whether to display the reset button.                                                                                                                                                                                             |         |
| resetButtonOptions    | `object`                                |           | -                               | Reset button configuration, see `ActionButtonOption` below.                                                                                                                                                                      |         |
| showSubmitButton      | `boolean`                               | `true`    | -                               | Whether to display the submit button.                                                                                                                                                                                            |         |
| submitButtonOptions   | `object`                                |           | -                               | Confirm button configuration, see `ActionButtonOption` below.                                                                                                                                                                    |         |
| resetFunc             | ` () => Promise<void>`                  |           | -                               | Custom reset button logic `() => Promise<void>;`                                                                                                                                                                                 |         |
| submitFunc            | ` () => Promise<void>`                  |           | -                               | Custom submit button logic `() => Promise<void>;`                                                                                                                                                                                |         |
| fieldMapToTime        | `[string, [string, string], string?][]` |           | -                               | Used to set the time area in the form to two fields, see below for details.                                                                                                                                                      |         |

### ColEx

见[src/components/Form/src/types/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Form/src/types/index.ts)

### ActionButtonOption

[BasicButtonProps](https://github.com/vbenjs/vue-vben-admin/tree/main/src/components/Button/types.ts)

```ts
export interface ButtonProps extends BasicButtonProps {
  text?: string;
}
```

### fieldMapToTime

Map the value of the time zone in the form into 2 fields

If there is a time interval component in the form, the obtained value is an array, but often we need to pass it to the background with 2 fields

```ts
useForm({
   fieldMapToTime: [
     // data is the field of the time component in the form, startTime, endTime are the converted start time and end time
     // 'YYYY-MM-DD' is the time format, refer to moment
     ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],
     // supports multiple fields
     ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'],
   ],
});

// The value obtained by the form when fieldMapToTime is not written
{
   datetime: [Date(),Date()]
}
// ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'], after
{
     datetime: [Date(),Date()],
     startTime: '2020-08-12',
     endTime: '2020-08-15',
}
```

### FormSchema

| Property               | Type                                                                       | Default | Optional Values | Description                                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------- | ------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| field                  | `string`                                                                   | -       | -               | The name of the field.                                                                                                                 |
| label                  | `string`                                                                   | -       | -               | The label of the field.                                                                                                                |
| subLabel               | `string`                                                                   | -       | -               | The gray sub-label of the field.                                                                                                       |
| suffix                 | `string , number , ((values: RenderCallbackParams) => string / number);`   | -       | -               | The content after the component.                                                                                                       |
| changeEvent            | `string`                                                                   | -       | -               | The name of the form update event.                                                                                                     |
| helpMessage            | `string , string[]`                                                        | -       | -               | The warm prompt to the right of the label.                                                                                             |
| helpComponentProps     | `HelpComponentProps`                                                       | -       | -               | The props of the warm prompt component to the right of the label, see HelpComponentProps below.                                        |
| labelWidth             | `string , number`                                                          | -       | -               | Overrides the labelWidth set globally.                                                                                                 |
| disabledLabelWidth     | `boolean`                                                                  | false   | true/false      | Disables the labelWidth set globally, manually sets labelCol and wrapperCol.                                                           |
| component              | `string`                                                                   | -       | -               | The type of component, see ComponentType below.                                                                                        |
| componentProps         | `any,()=>{}`                                                               | -       | -               | The props of the rendered component.                                                                                                   |
| rules                  | `ValidationRule[]`                                                         | -       | -               | The validation rules, see ValidationRule below.                                                                                        |
| required               | `boolean`                                                                  | -       | -               | Simplifies the rules configuration, if true, it is converted to [{required:true}]. Versions before `2.4.0` only support string values. |
| rulesMessageJoinLabel  | `boolean`                                                                  | false   | -               | Whether to join the validation message with the label.                                                                                 |
| itemProps              | `any`                                                                      | -       | -               | Refer to FormItem below.                                                                                                               |
| colProps               | `ColEx`                                                                    | -       | -               | Refer to actionColOptions above.                                                                                                       |
| defaultValue           | `object`                                                                   | -       | -               | The initial value of the rendered component.                                                                                           |
| render                 | `(renderCallbackParams: RenderCallbackParams) => VNode / VNode[] / string` | -       | -               | Custom render component.                                                                                                               |
| renderColContent       | `(renderCallbackParams: RenderCallbackParams) => VNode / VNode[] / string` | -       | -               | Custom render component (needs to include formItem).                                                                                   |
| renderComponentContent | `(renderCallbackParams: RenderCallbackParams) => any / string`             | -       | -               | Custom render the slot inside the component.                                                                                           |
| slot                   | `string`                                                                   | -       | -               | Custom slot, renders the component.                                                                                                    |
| colSlot                | `string`                                                                   | -       | -               | Custom slot, renders the component (needs to include formItem).                                                                        |
| show                   | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)`      | -       | -               | Dynamically determine whether the current component is displayed, controlled by CSS, and will not delete the DOM.                      |
| ifShow                 | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)`      | -       | -               | Dynamically determine whether the current component is displayed, controlled by JS, and will delete the DOM.                           |
| dynamicDisabled        | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean) `     | -       | -               | Dynamically determine whether the current component is disabled.                                                                       |
| dynamicRules           | `boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)`      | -       | -               | Dynamically determine the validation rule for the current component.                                                                   |

**RenderCallbackParams**

```ts
export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}
```

**componentProps**

- When the value is an object type, the object will be passed as props to the component corresponding to`component`.

- When the value is a function:

There are 4 parameters:

`schema`: The entire schemas of the form.

`formActionType`: The function to operate the form. Consistent with the operation function returned by `useForm`.

`formModel`: The two-way binding object of the form, which is reactive. So it can easily handle many operations.

`tableAction`: The function to operate the table. Consistent with the operation function returned by `useTable`. Note that this parameter only has a value when searching the form inside the table, otherwise it is `null`.

```tsx
{
  // A simple example, operate the table or modify the value of other elements in the form when the value changes
  component:'Input',
  componentProps: ({ schema, tableAction, formActionType, formModel }) => {
    return {
      // xxxx props
      onChange:(e)=>{
        const {reload}=tableAction
        reload()
        // or
        formModel.xxx='123'
      }
    };
  };
}
```

**HelpComponentProps**

```ts
export interface HelpComponentProps {
  maxWidth: string;
  // Whether to display the index
  showIndex: boolean;
  // Text list
  text: any;
  // Color
  color: string;
  // Font size
  fontSize: string;
  icon: string;
  absolute: boolean;
  // Positioning
  position: any;
}
```

**ComponentType**

Optional types of components in the schema.

```tsx
export type ComponentType =
  | "Input"
  | "InputGroup"
  | "InputPassword"
  | "InputSearch"
  | "InputTextArea"
  | "InputNumber"
  | "InputCountDown"
  | "Select"
  | "ApiSelect"
  | "TreeSelect"
  | "RadioButtonGroup"
  | "RadioGroup"
  | "Checkbox"
  | "CheckboxGroup"
  | "AutoComplete"
  | "Cascader"
  | "DatePicker"
  | "MonthPicker"
  | "RangePicker"
  | "WeekPicker"
  | "TimePicker"
  | "Switch"
  | "StrengthMeter"
  | "Upload"
  | "IconPicker"
  | "Render"
  | "Slider"
  | "Rate"
  | "Divider"; // v2.7.2新增
```

### Divider schema explanation

The `Divider` type is used as a placeholder in `schemas` and will be rendered as a divider (taking up a whole row of space), which can be used to separate the layout of longer forms. Please treat the `Divider` type schema only as a divider, not a regular form field.

- **`Divider` will only be displayed when `showAdvancedButton` is false** (that is, if the form collapse and expand function is enabled, `Divider` will not be displayed)
- `Divider` uses the `label` and `helpMessage` in `schema` to render the prompt content in the divider.
- `Divider` can use `componentProps` to set props other than `type`.
- `Divider` will not render `AFormItem`, so properties in `schema` other than `label`, `componentProps`, `helpMessage`, and `helpComponentProps` will not be used.

## Adding custom component types

In `src/components/Form/src/componentMap.ts`, add the required components and add the corresponding type key above in **ComponentType**.

### Method 1

This writing method is suitable for components with high frequency of use.

```tsx
componentMap.set("componentName", component);

// ComponentType
export type ComponentType = xxxx | "componentName";
```

### Method 2

Use **useComponentRegister** to register.

This writing method can only be used on the current page. The corresponding component will be removed from `componentMap` after the page is destroyed.

```tsx
import { useComponentRegister } from "@/components/form/index";

import { StrengthMeter } from "@/components/strength-meter/index";

useComponentRegister("StrengthMeter", StrengthMeter);
```

::: tip Note

The reason for the appearance of Method 2 is to reduce the size of the package. If the size of a component is large, using Method 1 may increase the size of the initial screen.

:::

### Render

Custom rendering content.

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register" @submit="handleSubmit" />
  </div>
</template>
<script lang="ts">
import { defineComponent, h } from "vue";
import { BasicForm, FormSchema, useForm } from "/@/components/Form/index";
import { useMessage } from "/@/hooks/web/useMessage";
import { Input } from "ant-design-vue";

const schemas: FormSchema[] = [
  {
    field: "field1",
    component: "Input",
    label: "字段1",
    colProps: {
      span: 8,
    },
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Input, {
        placeholder: "请输入",
        value: model[field],
        onChange: (e) => {
          model[field] = e.target.value;
        },
      });
    },
  },
  {
    field: "field2",
    component: "Input",
    label: "字段2",
    colProps: {
      span: 8,
    },
    rules: [{ required: true }],
    renderComponentContent: () => {
      return {
        suffix: () => "suffix",
      };
    },
  },
];
export default defineComponent({
  components: { BasicForm },
  setup() {
    const { createMessage } = useMessage();
    const [register, { setProps }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
      },
    });
    return {
      register,
      schemas,
      handleSubmit: (values: any) => {
        createMessage.success("click search,values:" + JSON.stringify(values));
      },
      setProps,
    };
  },
});
</script>
```

### slot

Custom rendering content

::: tip

When using slots to customize form fields, please pay attention to antdv's [related instructions](https://2x.antdv.com/components/form-cn#API) about FormItem.

:::

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register">
      <template #customSlot="{ model, field }">
        <a-input v-model:value="model[field]" />
      </template>
    </BasicForm>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicForm, useForm } from "@/components/Form/index";

export default defineComponent({
  name: "FormDemo",
  components: { BasicForm },
  setup() {
    const [register] = useForm({
      labelWidth: 100,
      actionColOptions: {
        span: 24,
      },
      schemas: [
        {
          field: "id",
          label: "ID",
          component: "Input",
          show: true,
        },
      ],
    });
    return {
      register,
    };
  },
});
</script>
```

### ifShow/show/dynamicDisabled

Custom display/disable

```vue
<template>
  <div class="m-4">
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicForm, FormSchema, useForm } from "/@/components/Form/index";

const schemas: FormSchema[] = [
  {
    field: "field1",
    component: "Input",
    label: "字段1",
    colProps: {
      span: 8,
    },
    show: ({ values }) => {
      return !!values.field5;
    },
  },
  {
    field: "field2",
    component: "Input",
    label: "字段2",
    colProps: {
      span: 8,
    },
    ifShow: ({ values }) => {
      return !!values.field6;
    },
  },
  {
    field: "field3",
    component: "DatePicker",
    label: "字段3",
    colProps: {
      span: 8,
    },
    dynamicDisabled: ({ values }) => {
      return !!values.field7;
    },
  },
  {
    field: "field4",
    component: "DatePicker",
    label: "字段4",
    colProps: {
      span: 8,
    },
    dynamicDisabled: ({ values }) => {
      return !!values.field7;
    },
  },
  {
    field: "field5",
    component: "Input",
    label: "字段5",
    colProps: {
      span: 8,
    },
  },
  {
    field: "field6",
    component: "Input",
    label: "字段6",
    colProps: {
      span: 8,
    },
  },
  {
    field: "field7",
    component: "Input",
    label: "字段7",
    colProps: {
      span: 8,
    },
  },
];

export default defineComponent({
  components: { BasicForm },
  setup() {
    const [register, { setProps }] = useForm({
      labelWidth: 120,
      schemas,
      actionColOptions: {
        span: 24,
      },
    });
    return {
      register,
      schemas,
      setProps,
    };
  },
});
</script>
```

---

见 [antv form](https://2x.antdv.com/components/form-cn/#%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99)

## Slots

| Name          | Description          |
| ------------- | -------------------- |
| formFooter    | Form footer area     |
| formHeader    | Form header area     |
| resetBefore   | Before reset button  |
| submitBefore  | Before submit button |
| advanceBefore | Before expand button |
| advanceAfter  | After expand button  |

## ApiSelect

Remote dropdown loading component, which can be used for learning and reference on how to customize components and integrate them into the Form component, and then manage the custom components with Form.

### Usage

```ts
const schemas: FormSchema[] = [
  {
    field: "field",
    component: "ApiSelect",
    label: "字段",
  },
];
```

### Props

| Property       | Type                                                                  | Default | Description                                                                                                             |
| -------------- | --------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| numberToString | `boolean`                                                             | `false` | Whether to convert `number` values to `string`.                                                                         |
| api            | `()=>Promise<{ label: string; value: string; disabled?: boolean }[]>` | -       | Data interface, accepts a Promise object.                                                                               |
| params         | `object`                                                              | -       | Interface parameters. The interface data will be reloaded automatically on change.                                      |
| resultField    | `string`                                                              | -       | The field returned by the interface. If the interface returns an array, this can be left blank. Supports `x.x.x` format |
| labelField     | `string`                                                              | `label` | The field for the display text of the `label` in the dropdown item. Supports `x.x.x` format.                            |
| valueField     | `string`                                                              | `value` | The field for the actual value of the `value` in the dropdown item. Supports `x.x.x` format.                            |
| immediate      | `boolean`                                                             | `true`  | Whether to request the interface immediately. Otherwise, the request will be triggered on the first click.              |

## ApiTreeSelect

Remote tree dropdown loading component, similar to `ApiSelect`, version 2.6.1 or higher.

### Props

| Property    | Type                                                                | Default | Description                                                                                                              |
| ----------- | ------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| api         | `()=>Promise<{ label: string; value: string; children?: any[] }[]>` | -       | Data interface, accepts a Promise object.                                                                                |
| params      | `object`                                                            | -       | Interface parameters. The interface data will be reloaded automatically on change.                                       |
| resultField | `string`                                                            | -       | The field returned by the interface. If the interface returns an array, this can be left blank. Supports `x.x.x` format. |
| immediate   | `boolean`                                                           | `true`  | Whether to request the interface immediately.                                                                            |

## RadioButtonGroup

Radio Button style selection button.

### Usage

```ts
const schemas: FormSchema[] = [
  {
    field: "field",
    component: "RadioButtonGroup",
    label: "字段",
  },
];
```

### Props

| Property | Type                                                     | Default | Description |
| -------- | -------------------------------------------------------- | ------- | ----------- |
| options  | `{ label: string; value: string; disabled?: boolean }[]` | -       | Data field. |
