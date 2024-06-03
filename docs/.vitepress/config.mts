import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cayoung's Blog",
  description: "A VitePress Site",
  // srcDir: "src/views",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "技术日志",
        items: [
          { text: "前端", link: "/src/views/build-course" },
          { text: "后端", link: "/src/views/markdown-examples" },
        ],
      },
    ],

    sidebar: [
      {
        text: "前端",
        collapsed: true,
        items: [
          {
            text: "VitePress建站教程",
            collapsed: true,
            items: [
              { text: "快速开始", link: "/src/views/build-course" },
              { text: "页面路由配置", link: "/src/views/router-config" },
              { text: "页面开发", link: "/src/views/take-notes" },
            ],
          },
          {
            text: "TypeScript",
            collapsed: true,
            items: [
              { text: "TypeScript基础", link: "/src/views/typescript/basic" },
            ],
          },
        ],
      },
      {
        text: "后端",
        collapsed: true,
        items: [{ text: "NodeJS", link: "/src/views/markdown-examples" }],
      },
    ],
    footer: {
      copyright: "Cayoung's blog CMZ💘",
    },
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
