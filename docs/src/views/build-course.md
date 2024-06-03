# 关于 VitePress 的建站教程

这是一个关于 VitePress 的建站教学文章，请仔细阅读并根据步骤操作即可创建一个属于你自己的个人博客网站.

## 安装

### 前置环境准备

你需要准备好：

- Node.js18 以上的版本
- 通过命令行界面（CLI）访问 VItePress 的终端
- 支持 Markdown 语法的编辑器
  - 推荐[VSCode](https://code.visualstudio.com/)及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### 安装向导

首先创建一个文件夹

```shell
mkdir my-vitepress-site
```

进入文件夹

```shell
cd my-vitepress-site
```

局部安装 vitepress

```shell
npm add -D vitepress
```

初始化项目

```shell
npx vitepress init
```

接下来将会提示你几条信息并要求你提供选择或输入

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config? // 这里是输入配置文件安装的地址
│  ./docs
│
◇  Site title: // 站点的一级标题也就是首页的最显眼的标题
│  My Awesome Project
│
◇  Site description: // 站点的二级描述
│  A VitePress Site
│
◆  Theme: //使用哪一种主题 建议选择第一项默认
│  ● Default Theme (Out of the box, good-looking docs)
│  ○ Default Theme + Customization
│  ○ Custom Theme
└
```

## 项目文件的结构

默认生成的项目结构应该是下面这样：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json

```

### 配置文件

在(.vitepress/config.mts)文件中可以对你的项目进行配置

```
// .vitepress/config.mts
export default {
  // 站点级选项
  title: '网站标题',
  description: '描述',

  themeConfig: {
    // 主题级选项
  }
}
```

## 启动并运行

你可以执行 package.json 脚本文件中的 script 命令来运行项目：

```
npm run docs:dev
```

OK 接下来你的网站就已经搭建起来并成功运行啦！
