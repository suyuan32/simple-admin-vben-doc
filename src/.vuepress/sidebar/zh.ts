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
          children: [
            { text: "基础", prefix: "Basic/", children: "structure" },
            { text: "进阶", prefix: "Advanced/", children: "structure" },
            { text: "其他", prefix: "Other/", children: "structure" },
          ],
        },
        {
          text: "组件",
          prefix: "components/",
          children: [
            { text: "全局组件", prefix: "Global/", children: "structure" },
            { text: "常用组件", prefix: "Common/", children: "structure" },
            {
              text: "函数式组件",
              prefix: "Functional/",
              children: "structure",
            },
          ],
        },
      ],
    },
  ],
});
