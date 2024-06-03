import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Chen's Blog",
  description: "A VitePress Site",
  srcDir: "src/views",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      {
        text: "技术日志",
        items: [
          { text: "前端", link: "/build-course" },
          { text: "后端", link: "/markdown-examples" },
        ],
      },
    ],
    footer: {
      copyright: "chen's blog",
    },
    sidebar: [
      {
        text: "前端",
        collapsed: true,
        items: [
          {
            text: "VitePress建站教程",
            collapsed: true,
            items: [
              { text: "快速开始", link: "/build-course" },
              { text: "页面路由配置", link: "/router-config" },
              { text: "页面开发", link: "/take-notes" },
            ],
          },
        ],
      },
      {
        text: "后端",
        collapsed: true,
        items: [{ text: "NodeJS", link: "/markdown-examples" }],
      },
    ],

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
