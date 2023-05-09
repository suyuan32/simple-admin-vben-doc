---
title: External modules
order: 9
author: Ryan SU
---

# Introducing external modules

In addition to self-contained components, sometimes we need to introduce other external modules. Let's take `ant-design-vue` as an example:

## Install

Install `ant-design-vue`

```bash
## Enter the following command in the terminal to complete the installation
pnpm add ant-design-vue
```

## Use

### Global use

```ts
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
const app = createApp(App);
app.use(Antd);
app.mount("#app");
```

### Local use

```vue
<template>
  <Button>text</Button>
</template>

<script>
import { defineComponent } from "vue";
import { Button } from "ant-design-vue";
export default defineComponent({
  components: {
    Button,
  },
});
</script>
```

## Notice

- If the component has a dependent style, you need to import the style file
