import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Document",
      icon: "fa-solid fa-book",
      prefix: "guide/",
      children: [
        {
          text: "Tutorial",
          prefix: "tutorial/",
          children: "structure",
        },
        {
          text: "Components",
          prefix: "components/",
          children: "structure",
        },
      ],
    },
  ],
});
