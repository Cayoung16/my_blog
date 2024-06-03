---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: "你好，我是Cayoung！"
  text: "一名前端开发者"
  tagline: 笨鸟先飞，持续学习，不断进步
  image:
    src: logo.svg
    alt: cayoung
  actions:
    - theme: brand
      text: 开始阅读
      link: /src/views/build-course
    # - theme: alt
    #   text: API Examples
    #   link: /api-examples

features:
  - title: 前端
    icon: 🌔
    details: 一名正在持续学习的Rookie Coder
    link: /src/views/typescript/basic
  - title: 后端
    icon: 🌙
    details: NodeJS，其他正在学习中……
    link: /src/views/markdown-examples
  - title: 面试笔记
    icon: 😉
    details: 正在记录中……
    link:
---

<style>
  .image-src{
    width:500px;
  }
  .grid-6:hover span{
    cursor: pointer;
    border: 1px solid var(--vp-home-hero-name-color);
  }
  :root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);

}
</style>
