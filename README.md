# 前端代码规范

本文档定义了 HTML、CSS、JavaScript 以及 Vue 的编写格式和代码规范。旨在促进协作编程、提高代码质量并提供相应的编辑器配置和构建检查工具。

## 约定

- 🚨表示**强制**，必须执行
- 📌表示**强烈建议**，非特殊情况下，必须执行
- 💡表示**建议**，尽可能执行
<!-- - 🚫表示**禁止**，不要使用 -->

## 目录

- [约定](#%e7%ba%a6%e5%ae%9a)
- [目录](#%e7%9b%ae%e5%bd%95)
- [项目规范](#%e9%a1%b9%e7%9b%ae%e8%a7%84%e8%8c%83)
    - [项目命名](#%e9%a1%b9%e7%9b%ae%e5%91%bd%e5%90%8d)
    - [目录命名](#%e7%9b%ae%e5%bd%95%e5%91%bd%e5%90%8d)
    - [文件命名](#%e6%96%87%e4%bb%b6%e5%91%bd%e5%90%8d)
- [Git 规范](#git-%e8%a7%84%e8%8c%83)
    - [commits](#commits)
    - [分支命名](#%e5%88%86%e6%94%af%e5%91%bd%e5%90%8d)
- [HTML](#html)
    - [语法](#%e8%af%ad%e6%b3%95)
    - [语言属性](#%e8%af%ad%e8%a8%80%e5%b1%9e%e6%80%a7)
    - [IE 兼容模式](#ie-%e5%85%bc%e5%ae%b9%e6%a8%a1%e5%bc%8f)
    - [协议](#%e5%8d%8f%e8%ae%ae)
    - [属性顺序](#%e5%b1%9e%e6%80%a7%e9%a1%ba%e5%ba%8f)
    - [布尔（boolean）型属性](#%e5%b8%83%e5%b0%94boolean%e5%9e%8b%e5%b1%9e%e6%80%a7)
    - [减少标签的数量](#%e5%87%8f%e5%b0%91%e6%a0%87%e7%ad%be%e7%9a%84%e6%95%b0%e9%87%8f)
    - [JavaScript 生成的标签](#javascript-%e7%94%9f%e6%88%90%e7%9a%84%e6%a0%87%e7%ad%be)
    - [实用为王](#%e5%ae%9e%e7%94%a8%e4%b8%ba%e7%8e%8b)
- [CSS](#css)
    - [缩进](#%e7%bc%a9%e8%bf%9b)
- [参考](#%e5%8f%82%e8%80%83)

## 项目规范

### 项目命名

🚨全部采用小写方式，以中划线分隔。

> 例：project-name

### 目录命名

🚨全部采用小写方式，以中划线分隔。

📌有复数结构时，要采用复数命名法。

> 例：scripts, assets, components, main-header

### 文件命名

🚨全部采用小写方式，以中划线分隔。

> 例：index.html, test-data.js, error-report.sass, custom-component.vue

## Git 规范

📌在项目中配置 Git 的 username 和 email，并设置为花名和公司邮箱

```bash
git config user.name ${花名}
git config user.email ${公司邮箱}
```

### commits

~~📌Git Commit Message 按 [「git Conventional Commits」](https://conventionalcommits.org/) 约定 提交。~~ **待定**

### 分支命名

🚨分支分为三种：版本分支、特性分支、BUG分支。

- 版本分支: 一般无需管理，主要有：`master`, `release`, `dev`；
- 特性分支: 新需求时启用此分支，命名为： `f_{username}{desc}${date:yyyyMMddHH}`
- BUG 分支: 当有 BUG 时启用此分支，命名为： `b_{username}{desc}${date:yyyyMMddHH}`

💡命名需要简洁易懂。

```bash
b_qianxun_fixTmPropsTooltipBug_20171211   # bad
b_qianxun_tianmao_props_tooltip_20171211  # good
```

## HTML

### 语法

🚨用**四个空格**来代替制表符（tab）。 —— 「这是唯一能保证在所有环境下获得一致展现的方法」<br>
🚨嵌套元素应当缩进一次（即四个空格）。<br>
🚨对于属性的定义，永远全部使用双引号，绝对不要使用单引号。<br>
🚨属性名全小写，用中划线做分隔符。<br>
🚨不要省略可选的结束标签（closing tag）（例如，`</li>` 或 `</body>`）。<br>
📌不要在自闭合（self-closing）元素的尾部添加斜线。 —— 「[HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 中明确说明斜线是可忽略的」

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <img src="images/company_logo.png" alt="Company">

        <h1 class="hello-world">Hello, world!</h1>
    </body>
</html>
```

### 语言属性

📌强烈建议为 html 根元素指定 `lang` 属性，从而为文档设置正确的语言。

> 根据 HTML5 规范：
>
> 强烈建议为 html 根元素指定 `lang` 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。
>
> 更多关于 `lang` 属性的知识可以从 [此规范](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element) 中了解。Sitepoint 站点上 [给出了一份语言代码表](https://www.sitepoint.com/iso-2-letter-language-codes/)。

```html
<html lang="en">
    <!-- ... -->
</html>
```

### IE 兼容模式

📌强烈建议将 IE 浏览器指定为 **edge mode** 模式。

IE 支持通过特定的 `<meta>` 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 **edge mode**，从而通知 IE 采用其所支持的最新的绘制模式。

了解更多信息请阅读 [Stack Overflow](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do) 上的文章。

```html
<meta http-equiv="x-ua-compatible" content="ie=edge">
```

### 协议

🚨省略图像、媒体文件、样式表和脚本等 URL 的协议头声明「`http:`、`https:`」。

如果不是这两个声明的 URL 则不省略。省略协议声明、使 URL 成相对地址，可以防止内容混淆问题和文件加载异常。

```html
<!-- very bad -->
<script src="http://alicdn.dancf.com/package/hlg-ui@0.26.4/index.js"></script>

<!-- bad -->
<script src="https://alicdn.dancf.com/package/hlg-ui@0.26.4/index.js"></script>

<!-- good -->
<script src="//alicdn.dancf.com/package/hlg-ui@0.26.4/index.js"></script>
```

### 属性顺序

💡HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`

`class` 用于标识高度可复用组件，因此应该排在首位。`id` 用于标识具体组件，应当谨慎使用，因此排在第二位。

```html
<a class="..." id="..." data-toggle="modal" href="#">
    Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

### 布尔（boolean）型属性

💡布尔型属性可以在声明时不赋值。

> XHTML 规范要求为其赋值，但是 HTML5 规范不需要。更多信息请参考 [WhatWG 的 Boolean attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)：
>
> 元素的布尔型属性如果有值，就是 `true`，如果没有值，就是 `false`。

如果一定要为其赋值的话，请参考 WhatWG 规范：

> If the attribute is present, its value must either be the empty string or a value that is an [ASCII case-insensitive](https://infra.spec.whatwg.org/#ascii-case-insensitive) match for the attribute's canonical name, with no leading or trailing whitespace.

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

### 减少标签的数量

💡编写 HTML 代码时，尽量避免多余的父元素。

```html
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

### JavaScript 生成的标签

📌通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。能避免时尽量避免。

### 实用为王

📌强烈推荐遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

```html
<!-- bad -->
<div onclick="goToItems();">jump to items</div>

<!-- good -->
<a href="/items">jump to items</a>
```

## CSS

### 缩进

🚨使用**四个空格**来代替制表符 (tab) 缩进。

```css
.element {
    position: absolute;
    top: 10px;
    left: 10px;

    border-radius: 10px;
    width: 50px;
    height: 50px;
}
```

## 参考

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Code Guide by @mdo](https://codeguide.co/)
- [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide)
- [Popular Coding Convention on Github](http://sideeffect.kr/popularconvention#javascript)
- [JavaScript Standard Style](https://standardjs.com/)
