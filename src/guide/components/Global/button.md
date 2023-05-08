---
title: Button
author: Ryan SU
---

# Button Component

A wrapper component for the `a-button` component with additional props.

::: tip

- The `a-button` component is globally registered and does not need to be imported. Simply use the `a-button` tag.
- If using TypeScript, you will need to manually import the component.

:::

## Usage

```vue
<template>
  <a-button color="success">Success Button</a-button>
  <a-button color="error">Error Button</a-button>
  <a-button color="warning">Warning Button</a-button>
</template>
```

## Props

::: tip

This component extends the functionality of the [Ant Design Button component](https://2x.antdv.com/components/button/).

:::

| Name     | Type                           | Default | Description                                             |
| -------- | ------------------------------ | ------- | ------------------------------------------------------- |
| color    | `'error','warning', 'success'` | -       | The color of the button.                                |
| preIcon  | `string`                       | -       | The name of the icon to display before the button text. |
| postIcon | `string`                       | -       | The name of the icon to display after the button text.  |
| iconSize | `number`                       | `14`    | The size of the button icon.                            |
