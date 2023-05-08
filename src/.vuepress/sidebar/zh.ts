import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    {
      text: "文档",
      icon: "fa-solid fa-book",
      prefix: "guide/",
      children: [
        {
          text: "教程",
          prefix: "tutorial/",
          children: "structure",
        },
        {
          text: "组件",
          prefix: "components/",
          children: "structure",
        },
      ],
    },
  ],
});
