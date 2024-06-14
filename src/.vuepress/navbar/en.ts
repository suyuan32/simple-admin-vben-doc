import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Tutorial",
    icon: "mingcute:book-line",
    link: "/zh/guide/tutorial/README.md",
  },
  {
    text: "Components",
    icon: "iconoir:book",
    link: "/guide/components/README.md",
  },
  {
    text: "Other Documents",
    icon: "iconoir:book",
    children: [
      {
        text: "Ent Document",
        icon: "iconoir:book",
        link: "https://entgo.io/docs/getting-started",
      },
      {
        text: "Go Zero Document",
        icon: "iconoir:book",
        link: "https://go-zero.dev/",
      },
      {
        text: "Vben Admin Document",
        icon: "iconoir:book",
        link: "https://doc.vvbin.cn/",
      },
      {
        text: "Go Swagger Document",
        icon: "iconoir:book",
        link: "https://goswagger.io/",
      },
      {
        text: "Ant Design Vue Document",
        icon: "iconoir:book",
        link: "https://antdv.com/components/overview",
      },
    ],
  },
  {
    text: "Github Repo",
    icon: "material-symbols:box-outline",
    children: [
      {
        text: "Simple Admin Core",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-core",
      },
      {
        text: "Simple Admin Backend UI",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-backend-ui",
      },
      {
        text: "Simple Admin File Manager",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-file",
      },
      {
        text: "Simple Admin Tools",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-tools",
      },
      {
        text: "Simple Admin Job",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-job",
      },
      {
        text: "Simple Admin Common",
        icon: "system-uicons:box",
        link: "https://github.com/suyuan32/simple-admin-common",
      },
    ],
  },
]);
