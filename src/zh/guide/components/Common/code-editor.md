---
title: CodeEditor | 代码编辑
author: Ryan SU
---

# CodeEditor

代码编辑器

::: info
使用 [vue-codemirror6](https://github.com/logue/vue-codemirror6)
:::

## Usage

```vue
<template>
  <CodeMirror
    style="color: black"
    :lang="lang"
    v-model="value"
    basic
    :dark="false"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import CodeMirror from "vue-codemirror6";
import { json, jsonParseLinter } from "@codemirror/lang-json";

export default defineComponent({
  components: { CodeMirror },
  setup() {
    const value = ref<string>();
    const lang = json();
    const linter = jsonParseLinter();

    value.value = '{ hello: "world"}';
    return { value, lang, linter };
  },
});
</script>
```

## 属性

| 属性                      | 类型                              | 信息                                                                                                                                                                                     |
| ------------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| model-value               | string \| Text                    | 文本值。 (不是 `value`)                                                                                                                                                                  |
| basic                     | boolean                           | 使用 [basicSetup](https://codemirror.net/docs/ref/#codemirror.basicSetup)。                                                                                                              |
| minimal                   | boolean                           | 使用 [miniSetup](https://codemirror.net/docs/ref/#codemirror.minimalSetup)。如果还指定了 `basic` 属性，则该设置将优先。                                                                  |
| dark                      | boolean                           | 切换到暗模式。                                                                                                                                                                           |
| placeholder               | string                            | 当为空时添加占位符文本（或 HTML DOM）。                                                                                                                                                  |
| wrap                      | boolean                           | 行文本换行。参见 [lineWrapping](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping)。                                                                                       |
| tab                       | boolean                           | 启用制表符缩进。                                                                                                                                                                         |
| allow-multiple-selections | boolean                           | 允许多重选择。参见 [allowMultipleSelections](https://codemirror.net/docs/ref/#state.EditorState^allowMultipleSelections)。                                                               |
| tab-size                  | number                            | 配置此状态中要使用的制表符大小。                                                                                                                                                         |
| line-separator            | string                            | 设置换行符。 （默认为 `\n`。）                                                                                                                                                           |
| theme                     | { [selector: string]: StyleSpec } | 指定主题。例如，如果您使用 [@codemirror/theme-one-dark](https://github.com/codemirror/theme-one-dark)，请导入 `oneDark` 并将其放在此属性中。                                             |
| readonly                  | boolean                           | 使光标可见，或者您可以拖动文本但不能编辑值。                                                                                                                                             |
| disabled                  | boolean                           | 这是 CodeMirror 可编辑的相反值。类似于 `readonly`，但将此值设为 true 将禁用拖动。                                                                                                        |
| lang                      | LanguageSupport                   | 您希望进行语法高亮的语言。参见 <https://codemirror.net/6/#languages>                                                                                                                     |
| phrases                   | Record&lt;string, string&gt;      | 如果要使显示的字符字符串多语言化，请在此处指定。参见 <https://codemirror.net/6/examples/translate/>                                                                                      |
| extensions                | Extension[]                       | 包括扩展 CodeMirror 的增强功能。                                                                                                                                                         |
| linter                    | LintSource                        | 设置 Linter。输入 linter（例如 `@codemirror/lang-javascript` 的 `esLint([arbitrary rule])` 函数，`@codemirror/json` 的 `jsonParseLinter()` 函数） 。请参阅各种语言库的源以获取更多信息。 |
| linterConfig              | Object                            | 参见 <https://codemirror.net/docs/ref/#lint.linter^config>。                                                                                                                             |
| gutter                    | boolean                           | 当指定了 `linter` 时，在发生错误的行上显示 🔴。如果未指定 `linter`，则不起作用。                                                                                                         |
| gutterConfig              | Object                            | 参见 <https://codemirror.net/docs/ref/#lint.lintGutter^config>。                                                                                                                         |
| tag                       | string                            | 组件中使用的 HTML 标记。（默认为 `div` 标记。）                                                                                                                                          |

⚠ 注意：`lang` 和 `linter` 也可以一起在 `extensions` 中设置。这些是为了兼容以前的 CodeMirror 设置版本和为了对属性进行类型标注而分开的。
