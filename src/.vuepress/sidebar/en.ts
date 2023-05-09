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
          children: [
            { text: "Basic", prefix: "Basic/", children: "structure" },
            { text: "Advanced", prefix: "Advanced/", children: "structure" },
            { text: "Other", prefix: "Other/", children: "structure" },
          ],
        },
        {
          text: "Components",
          prefix: "components/",
          children: [
            { text: "Global", prefix: "Global/", children: "structure" },
            { text: "Common", prefix: "Common/", children: "structure" },
            {
              text: "Functional",
              prefix: "Functional/",
              children: "structure",
            },
          ],
        },
      ],
    },
  ],
});
