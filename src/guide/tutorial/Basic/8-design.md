---
title: Style
order: 8
author: Ryan SU
---

# Style

## Introduction

This is an introduction to using and planning style files in your projects.

The default is to use less as the preprocessing language, so it is recommended to learn the features of [Less](http://lesscss.org/) before using it or when in doubt (for basic CSS knowledge or to consult properties, please refer to [MDN documentation](https://developer.mozilla.org/zh- CN/docs/Web/CSS/Reference)).

The generic styles used in the project are stored under [src/design/](https://github.com/vbenjs/vue-vben-admin/tree/main/src/design).

````bash
.
├── ant # ant design Some style overrides
├── color.less # color
├── index.less # entry
├── public.less # public classes
├── theme.less # Theme related
├── config.less # Each component will automatically introduce styles
├── transition # Animation related
└── var # Variables

ðŸ™'

::: tip Global injection

The config.less file is injected globally into all files, so variables can be used directly within the page without having to be introduced manually

::.

```html
<style lang="less" scoped>
  // config.less is implicitly injected here
</style>
````

##tailwindcss(2.5.0+)

The project references [tailwindcss](https://tailwindcss.com/docs), see the documentation for details.

The syntax is as follows.

```html
<div class="relative w-full h-full px-4"></div>
```

## windicss (2.5.0 deprecated)

[windicss](https://windicss.org/) is used in the project, please refer to the documentation for details.

The syntax is as follows:

```html
<div class="relative w-full h-full px-4"></div>
```

::: danger precautions

Windcss currently causes local development memory overflow, so you may consider switching to TailwindCss in the future, the two are basically the same.

Therefore, use the new features of Windicss as little as possible to prevent subsequent switching costs.

:::

## Why use Less

The main reason is that Ant Design uses less as the style language by default, and using Less can be consistent with it.

## Enable scoped

If the `scoped` attribute is not added, it will be compiled into a global style by default, which may cause global pollution

```vue
<style></style>

<style scoped></style>
```

::: tip Warm reminder

After using scoped, the parent component's style will not permeate to the child component. However, the root node of a child component will be affected by both the scoped CSS of its parent component and the scoped CSS of the child component. This design is to allow the parent component to adjust the style of the root element of its child components from the perspective of layout.

:::

## depth selector

Sometimes we may want to explicitly make a rule for subcomponents.

If you want a selector in a `scoped` style to act "deeper", i.e. affect child components, you can use the `>>>` operator. Some preprocessors like Sass don't parse `>>>` correctly. In this case you can use the `/deep/` or `::v-deep` operators instead - both are aliases for `>>>` and will work just as well.

For details, please refer to RFC[0023-scoped-styles-changes](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md).

After using scoped, the style of the parent component will not penetrate into the child component, so you can use the following method to solve it:

```vue
<style scoped>
/* deep selectors */
::v-deep(.foo) {
}
/* shorthand */
:deep(.foo) {
}

/* targeting slot content */
::v-slotted(.foo) {
}
/* shorthand */
:slotted(.foo) {
}

/* one-off global rule */
::v-global(.foo) {
}
/* shorthand */
:global(.foo) {
}
</style>
```

# CSS Modules

For style coverage, another solution is to use the CSS Modules modularization solution. The way to use it is as follows.

```vue
<template>
  <span :class="$style.span1">hello</span>
</template>

<script>
import { useCSSModule } from "vue";

export default {
  setup(props, context) {
    const $style = useCSSModule();
    const moduleAStyle = useCSSModule("moduleA");
    return {
      $style,
      moduleAStyle,
    };
  },
};
</script>

<style lang="less" module>
.span1 {
  color: green;
  font-size: 30px;
}
</style>

<style lang="less" module="moduleA">
.span1 {
  color: green;
  font-size: 30px;
}
</style>
```

## Duplicate citation issues

Adding **reference** can solve the problem that repeated references in the page cause the actual generated style sheet to be duplicated.

This step has been introduced globally. So ** can not write **, directly use variables

```vue
<style lang="less" scoped>
   /* This line of code is referenced globally. Can not be imported separately */
   @import (reference) '../../design/config.less';
<style>
```
