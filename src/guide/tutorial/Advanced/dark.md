---
title: Dark mode
author: Ryan SU
---

# Dark theme

## Introduce

The project has a built-in dark theme switch, just configure the color variables you need, and you can use it in the project

## Principle

Through the [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) plug-in, extract all color variables into independent css files, and add css selectors on the html. Dark theme switching by changing the `data-theme` attribute of the html tag

## Configuration

Dark theme color configuration is implemented through [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme), the specific code is in `build/vite/plugin/theme`

```ts
antdDarkThemePlugin({
  darkModifyVars: {
    ...generateModifyVars(true),
    "text-color": "#c9d1d9",
    "text-color-base": "#c9d1d9",
    "component-background": "#151515",
    "text-color-secondary": "#8b949e",
    "border-color-base": "#303030",
    "item-active-bg": "#111b26",
    "app-content-background": "rgb(255 255 255 / 4%)",
  },
});
```

## Toggle

Just use the functions provided by [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) to switch

```ts
import { darkCssIsReady, loadDarkThemeCss } from "vite-plugin-theme/es/client";

export async function updateDarkTheme(mode: string | null = "light") {
  const htmlRoot = document.getElementById("htmlRoot");
  if (mode === "dark") {
    if (import.meta.env.PROD && !darkCssIsReady) {
      await loadDarkThemeCss();
    }
    htmlRoot?.setAttribute("data-theme", "dark");
  } else {
    htmlRoot?.setAttribute("data-theme", "light");
  }
}
```
