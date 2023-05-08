---
title: Electron
order: 11
author: Ryan SU
---

# Electron

## URL mode

This mode will first start the vite service, and Electron uses the Url address for rendering

### Get code from GitHub

**Electron** code is in the **electron-main** branch

```bash
# clone electron-main branch code
git clone -b electron-main https://github.com/vbenjs/vue-vben-admin vben-admin-electron
```

### Install dependencies

```bash
yarn
```

::: tip

Downloading Electron dependencies for the first time will be slow. You can create a `.npmrc` file in the project root directory and fill in the following content.

```bash
ELETRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

:::

### Rrun

```bash
yarn dev:app
```

### Pack

```bash
yarn build:app
```

## Standard mode

TODO: to be adapted
