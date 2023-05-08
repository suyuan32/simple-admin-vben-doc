import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Tutorial",
    icon: "fa-solid fa-book",
    link: "/guide/tutorial",
  },
  {
    text: "Components",
    icon: "fa-solid fa-book",
    link: "/guide/components/",
  },
  {
    text: "Other Documents",
    icon: "fa-solid fa-book",
    children: [
      {
        text: "Ent Document",
        icon: "fa-solid fa-book",
        link: "https://entgo.io/docs/getting-started",
      },
      {
        text: "Go Zero Document",
        icon: "fa-solid fa-book",
        link: "https://go-zero.dev/",
      },
      {
        text: "Vben Admin Document",
        icon: "fa-solid fa-book",
        link: "https://doc.vvbin.cn/",
      },
      {
        text: "Go Swagger Document",
        icon: "fa-solid fa-book",
        link: "https://goswagger.io/",
      },
      {
        text: "Ant Design Vue Document",
        icon: "fa-solid fa-book",
        link: "https://antdv.com/components/overview",
      },
    ],
  },
  {
    text: "Github Repo",
    icon: "fa-solid fa-code",
    children: [
      {
        text: "Simple Admin Core",
        icon: "fa-solid fa-box",
        link: "https://github.com/suyuan32/simple-admin-core",
      },
      {
        text: "Simple Admin Backend UI",
        icon: "fa-solid fa-box",
        link: "https://github.com/suyuan32/simple-admin-backend-ui",
      },
      {
        text: "Simple Admin File Manager",
        icon: "fa-solid fa-box",
        link: "https://github.com/suyuan32/simple-admin-file",
      },
      {
        text: "Simple Admin Tools",
        icon: "fa-solid fa-box",
        link: "https://github.com/suyuan32/simple-admin-tools",
      },
      {
        text: "Simple Admin Job",
        icon: "fa-solid fa-box",
        link: "https://github.com/suyuan32/simple-admin-job",
      },
      {
        text: "Simple Admin Common",
        icon: "fa-solid fa-box",
        link: "https://github.com/suyuan32/simple-admin-common",
      },
    ],
  },
]);
