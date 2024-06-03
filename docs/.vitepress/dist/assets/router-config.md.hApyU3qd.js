import{_ as a,c as s,o as n,a1 as e}from"./chunks/framework.DTR-fORK.js";const m=JSON.parse('{"title":"页面路由配置","description":"","frontmatter":{},"headers":[],"relativePath":"router-config.md","filePath":"router-config.md"}'),t={name:"router-config.md"},p=e(`<h1 id="页面路由配置" tabindex="-1">页面路由配置 <a class="header-anchor" href="#页面路由配置" aria-label="Permalink to &quot;页面路由配置&quot;">​</a></h1><h2 id="基于文件的路由" tabindex="-1">基于文件的路由 <a class="header-anchor" href="#基于文件的路由" aria-label="Permalink to &quot;基于文件的路由&quot;">​</a></h2><p>VitePress 使用基于文件的路由，这意味着生成的 HTML 页面是从源 Markdown 文件的目录结构映射而来的。例如，给定以下目录结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├─ guide</span></span>
<span class="line"><span>│  ├─ getting-started.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>├─ index.md</span></span>
<span class="line"><span>└─ prologue.md</span></span></code></pre></div><p>生成的 HTML 页面会是这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>index.md                  --&gt;  /index.html (可以通过 / 访问)</span></span>
<span class="line"><span>prologue.md               --&gt;  /prologue.html</span></span>
<span class="line"><span>guide/index.md            --&gt;  /guide/index.html (可以通过 /guide/ 访问)</span></span>
<span class="line"><span>guide/getting-started.md  --&gt;  /guide/getting-started.html</span></span></code></pre></div><h2 id="根目录和源目录" tabindex="-1">根目录和源目录 <a class="header-anchor" href="#根目录和源目录" aria-label="Permalink to &quot;根目录和源目录&quot;">​</a></h2><p>VitePress 项目的文件结构中有两个重要的概念：项目根目录 (<strong>project root</strong>) 和源目录 (<strong>source directory</strong>)。</p><h3 id="根目录" tabindex="-1">根目录 <a class="header-anchor" href="#根目录" aria-label="Permalink to &quot;根目录&quot;">​</a></h3><p>项目根目录是 VitePress 将尝试寻找 <code>.vitepress</code> 特殊目录的地方。.vitepress 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的预留位置。</p><h3 id="源目录" tabindex="-1">源目录 <a class="header-anchor" href="#源目录" aria-label="Permalink to &quot;源目录&quot;">​</a></h3><p>源目录是 <code>Markdown</code> 源文件所在的位置。默认情况下，它与项目根目录相同。但是，可以通过 <code>srcDir</code> 配置选项对其进行配置。</p><p>你可以在 <code>config.mts</code> 文件中进行源目录配置<code>(srcDir: src/views)</code></p><h2 id="设置你的页面" tabindex="-1">设置你的页面 <a class="header-anchor" href="#设置你的页面" aria-label="Permalink to &quot;设置你的页面&quot;">​</a></h2><p>在 <code>config.mts</code> 文件中的 <code>sidebar</code> 属性里可以配置你的页面</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sidebar: [</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        text: &quot;VitePress建站教程&quot;,</span></span>
<span class="line"><span>        items: [</span></span>
<span class="line"><span>          { text: &quot;快速开始&quot;, link: &quot;/build-course&quot; },</span></span>
<span class="line"><span>          { text: &quot;页面路由配置&quot;, link: &quot;/router-config&quot; },</span></span>
<span class="line"><span>          { text: &quot;页面开发&quot;, link: &quot;/take-notes&quot; },</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ],</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：link 链接的地址一定要创建好对应的 md 文件</p></div><p>OK，此时你的页面就已经创建完毕了！</p>`,18),i=[p];function o(l,c,d,r,u,h){return n(),s("div",null,i)}const b=a(t,[["render",o]]);export{m as __pageData,b as default};
