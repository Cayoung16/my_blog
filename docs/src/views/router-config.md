# 页面路由配置

## 基于文件的路由

VitePress 使用基于文件的路由，这意味着生成的 HTML 页面是从源 Markdown 文件的目录结构映射而来的。例如，给定以下目录结构：

```
.
├─ guide
│  ├─ getting-started.md
│  └─ index.md
├─ index.md
└─ prologue.md
```

生成的 HTML 页面会是这样：

```
index.md                  -->  /index.html (可以通过 / 访问)
prologue.md               -->  /prologue.html
guide/index.md            -->  /guide/index.html (可以通过 /guide/ 访问)
guide/getting-started.md  -->  /guide/getting-started.html
```

## 根目录和源目录

VitePress 项目的文件结构中有两个重要的概念：项目根目录 (**project root**) 和源目录 (**source directory**)。

### 根目录

项目根目录是 VitePress 将尝试寻找 `.vitepress` 特殊目录的地方。.vitepress 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的预留位置。

### 源目录

源目录是 `Markdown` 源文件所在的位置。默认情况下，它与项目根目录相同。但是，可以通过 `srcDir` 配置选项对其进行配置。

你可以在 `config.mts` 文件中进行源目录配置`(srcDir: src/views)`

## 设置你的页面

在 `config.mts` 文件中的 `sidebar` 属性里可以配置你的页面

```
sidebar: [
      {
        text: "VitePress建站教程",
        items: [
          { text: "快速开始", link: "/build-course" },
          { text: "页面路由配置", link: "/router-config" },
          { text: "页面开发", link: "/take-notes" },
        ],
      },
    ],
```

::: warning
注意：link 链接的地址一定要创建好对应的 md 文件
:::

OK，此时你的页面就已经创建完毕了！
