---
title: Upload
author: Ryan SU
---

# Upload

File upload component

## Usage

```vue
<template>
  <BasicUpload
    :maxSize="20"
    :maxNumber="10"
    @change="handleChange"
    :api="uploadApi"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { BasicUpload } from "/@/components/Upload";
import { uploadApi } from "/@/api/sys/upload";

export default defineComponent({
  components: { BasicUpload },
  setup() {
    return {
      uploadApi,
      handleChange: (list: string[]) => {
        createMessage.info(`已上传文件${JSON.stringify(list)}`);
      },
    };
  },
});
</script>
```

## Config

`.env.development` and `.env.production` configure the file upload addresses for development and production

```bash
# .env.development

VITE_PROXY=[["/upload","http://localhost:3001/upload"]]

# If there is no cross-domain problem, use the real upload address directly
VITE_GLOB_UPLOAD_URL=/upload

# .env.production
VITE_GLOB_UPLOAD_URL=/upload

```

## Props

| Name              | Type       | Default    | Options | Description                                                                                                                                                 |
| ----------------- | ---------- | ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | `string[]` | -          | -       | The list of uploaded files, supports v-model.                                                                                                               |
| showPreviewNumber | `boolean`  | `true`     | -       | Whether to show the number of previews.                                                                                                                     |
| emptyHidePreview  | `boolean`  | `false`    | -       | Whether to hide the preview when no files are uploaded.                                                                                                     |
| helpText          | `string`   | -          | -       | Help text.                                                                                                                                                  |
| maxSize           | `number`   | `2`        | -       | The maximum size of a single file, in megabytes.                                                                                                            |
| maxNumber         | `number`   | `Infinity` | -       | The maximum number of files that can be uploaded. If set to `Infinity`, there is no limit.                                                                  |
| accept            | `string[]` | -          | -       | Restrict upload formats. Can use file extensions (with or without the dot) or MIME strings. For example, `['.doc,','docx','application/msword','image/*']`. |
| multiple          | `boolean`  | -          | -       | Enable multiple file upload.                                                                                                                                |
| uploadParams      | `any`      | -          | -       | Upload parameters.                                                                                                                                          |
| api               | `Function` | -          | -       | The upload interface, which is the interface configured above.                                                                                              |

## Events

| Name           | Arguments               | Description                                          | Version |
| -------------- | ----------------------- | ---------------------------------------------------- | ------- |
| change         | `(fileList) => void`    | Triggered when the contents of the file list change. | -       |
| delete         | `(record) => void`      | The event of deleting a file in the upload list.     | -       |
| preview-delete | `(url: string) => void` | The event of deleting a file in the preview list.    | 2.5.3   |
