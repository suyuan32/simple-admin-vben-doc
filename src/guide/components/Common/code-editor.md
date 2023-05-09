---
title: CodeEditor
author: Ryan SU
---

# CodeEditor

code editor

::: info
Use [vue-codemirror6](https://github.com/logue/vue-codemirror6)
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

## Props

| Props                     | Type                              | Information                                                                                                                                                                                                                    |
| ------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| model-value               | string \| Text                    | Text value. (Not `value`)                                                                                                                                                                                                      |
| basic                     | boolean                           | Use [basicSetup](https://codemirror.net/docs/ref/#codemirror.basicSetup).                                                                                                                                                      |
| minimal                   | boolean                           | Use [miniSetup](https://codemirror.net/docs/ref/#codemirror.minimalSetup). If a `basic` prop is also specified, that setting will take precedence.                                                                             |
| dark                      | boolean                           | Toggle Darkmode.                                                                                                                                                                                                               |
| placeholder               | string                            | Add placeholder text (or HTML DOM) when blank                                                                                                                                                                                  |
| wrap                      | boolean                           | Line text wrapping. see [lineWrapping](https://codemirror.net/6/docs/ref/#view.EditorView.lineWrapping).                                                                                                                       |
| tab                       | boolean                           | Enables tab indentation.                                                                                                                                                                                                       |
| allow-multiple-selections | boolean                           | Allow Multiple Selection. See [allowMultipleSelections](https://codemirror.net/docs/ref/#state.EditorState^allowMultipleSelections)                                                                                            |
| tab-size                  | number                            | Configures the tab size to use in this state.                                                                                                                                                                                  |
| line-separator            | string                            | Set line break (separetor) char. (Default is `\n`.)                                                                                                                                                                            |
| theme                     | { [selector: string]: StyleSpec } | Specify the theme. For example, if you use [@codemirror/theme-one-dark](https://github.com/codemirror/theme-one-dark), import `oneDark` and put it in this prop.                                                               |
| readonly                  | boolean                           | Makes the cursor visible or you can drag the text but not edit the value.                                                                                                                                                      |
| disabled                  | boolean                           | This is the reversed value of the CodeMirror editable. Similar to `readonly`, but setting this value to true disables dragging.                                                                                                |
| lang                      | LanguageSupport                   | The language you want to have syntax highlighting. see <https://codemirror.net/6/#languages>                                                                                                                                   |
| phrases                   | Record&lt;string, string&gt;      | Specify here if you want to make the displayed character string multilingual. see <https://codemirror.net/6/examples/translate/>                                                                                               |
| extensions                | Extension[]                       | Includes enhancements to extend CodeMirror.                                                                                                                                                                                    |
| linter                    | LintSource                        | Set Linter. Enter a linter (eg `esLint([arbitrary rule])` function for `@codemirror/lang-javascript`, `jsonParseLinter()`function for`@codemirror/json`). See the sources for various language libraries for more information. |
| linterConfig              | Object                            | see <https://codemirror.net/docs/ref/#lint.linter^config>                                                                                                                                                                      |
| gutter                    | boolean                           | Display 🔴 on the line where there was an error when `linter` was specified. It will not work if `linter` is not specified.                                                                                                    |
| gutterConfig              | Object                            | see <https://codemirror.net/docs/ref/#lint.lintGutter^config>                                                                                                                                                                  |
| tag                       | string                            | HTML tags used in the component. (Default is `div` tag.)                                                                                                                                                                       |

⚠ Notice: `lang` and `linter` can also be set together in `extensions`. These are separated for compatibility with previous versions of CodeMirror settings and for typing props.
