import{_ as s,c as a,o as n,a1 as e}from"./chunks/framework.DTR-fORK.js";const g=JSON.parse('{"title":"关于 VitePress 的建站教程","description":"","frontmatter":{},"headers":[],"relativePath":"build-course.md","filePath":"build-course.md"}'),p={name:"build-course.md"},i=e(`<h1 id="关于-vitepress-的建站教程" tabindex="-1">关于 VitePress 的建站教程 <a class="header-anchor" href="#关于-vitepress-的建站教程" aria-label="Permalink to &quot;关于 VitePress 的建站教程&quot;">​</a></h1><p>这是一个关于 VitePress 的建站教学文章，请仔细阅读并根据步骤操作即可创建一个属于你自己的个人博客网站.</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="前置环境准备" tabindex="-1">前置环境准备 <a class="header-anchor" href="#前置环境准备" aria-label="Permalink to &quot;前置环境准备&quot;">​</a></h3><p>你需要准备好：</p><ul><li>Node.js18 以上的版本</li><li>通过命令行界面（CLI）访问 VItePress 的终端</li><li>支持 Markdown 语法的编辑器 <ul><li>推荐<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a>及其<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">官方 Vue 扩展</a></li></ul></li></ul><h3 id="安装向导" tabindex="-1">安装向导 <a class="header-anchor" href="#安装向导" aria-label="Permalink to &quot;安装向导&quot;">​</a></h3><p>首先创建一个文件夹</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-vitepress-site</span></span></code></pre></div><p>进入文件夹</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my-vitepress-site</span></span></code></pre></div><p>局部安装 vitepress</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span></span></code></pre></div><p>初始化项目</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>接下来将会提示你几条信息并要求你提供选择或输入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>┌  Welcome to VitePress!</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config? // 这里是输入配置文件安装的地址</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title: // 站点的一级标题也就是首页的最显眼的标题</span></span>
<span class="line"><span>│  My Awesome Project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description: // 站点的二级描述</span></span>
<span class="line"><span>│  A VitePress Site</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◆  Theme: //使用哪一种主题 建议选择第一项默认</span></span>
<span class="line"><span>│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span>│  ○ Default Theme + Customization</span></span>
<span class="line"><span>│  ○ Custom Theme</span></span>
<span class="line"><span>└</span></span></code></pre></div><h2 id="项目文件的结构" tabindex="-1">项目文件的结构 <a class="header-anchor" href="#项目文件的结构" aria-label="Permalink to &quot;项目文件的结构&quot;">​</a></h2><p>默认生成的项目结构应该是下面这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  ├─ api-examples.md</span></span>
<span class="line"><span>│  ├─ markdown-examples.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p>在(.vitepress/config.mts)文件中可以对你的项目进行配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// .vitepress/config.mts</span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  // 站点级选项</span></span>
<span class="line"><span>  title: &#39;网站标题&#39;,</span></span>
<span class="line"><span>  description: &#39;描述&#39;,</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  themeConfig: {</span></span>
<span class="line"><span>    // 主题级选项</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="启动并运行" tabindex="-1">启动并运行 <a class="header-anchor" href="#启动并运行" aria-label="Permalink to &quot;启动并运行&quot;">​</a></h2><p>你可以执行 package.json 脚本文件中的 script 命令来运行项目：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run docs:dev</span></span></code></pre></div><p>OK 接下来你的网站就已经搭建起来并成功运行啦！</p>`,27),l=[i];function t(c,o,h,d,r,u){return n(),a("div",null,l)}const b=s(p,[["render",t]]);export{g as __pageData,b as default};