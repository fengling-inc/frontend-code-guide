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
    - [分号](#%e5%88%86%e5%8f%b7)
    - [空格](#%e7%a9%ba%e6%a0%bc)
    - [换行](#%e6%8d%a2%e8%a1%8c)
    - [注释](#%e6%b3%a8%e9%87%8a)
    - [引号](#%e5%bc%95%e5%8f%b7)
    - [命名](#%e5%91%bd%e5%90%8d)
    - [颜色](#%e9%a2%9c%e8%89%b2)
    - [属性简写](#%e5%b1%9e%e6%80%a7%e7%ae%80%e5%86%99)
    - [属性声明顺序](#%e5%b1%9e%e6%80%a7%e5%a3%b0%e6%98%8e%e9%a1%ba%e5%ba%8f)
    - [带前缀的属性](#%e5%b8%a6%e5%89%8d%e7%bc%80%e7%9a%84%e5%b1%9e%e6%80%a7)
    - [清除浮动](#%e6%b8%85%e9%99%a4%e6%b5%ae%e5%8a%a8)
    - [Less 和 Sass 中的嵌套](#less-%e5%92%8c-sass-%e4%b8%ad%e7%9a%84%e5%b5%8c%e5%a5%97)
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

### 分号

🚨每个属性声明末尾都要加分号。「.sass」文件除外。

```css
.element {
    width: 20px;
    height: 20px;

    background-color: red;
}
```

### 空格

🚨以下几种情况不需要空格：

- 属性名后
- 多个规则的分隔符「`,`」前
- `!important` 「`!`」后
- 属性值中「`(`」后和「`)`」前
- 行末不要有多余的空格

🚨以下几种情况需要空格：

- 每条声明语句的「`:`」后
- 选择器「`>`」、「`+`」、「`~`」前后
- 在每个声明块的左花括号前，「`{`」前
- `!important`「`!`」前
- 属性值中的「`,`」后
- 注释「`\*`」后和「`*/`」前

```css
/* bad */
.element {
    color :red! important;
    background-color: rgba(0,0,0,.5);
}

/* good */
.element {
    color: red !important;
    background-color: rgba(0, 0, 0, .5);
}

/* bad */
.element ,
.dialog{
    ...
}

/* good */
.element,
.dialog {
    ...
}

/* bad */
.element>.dialog{
    ...
}

/* good */
.element > .dialog {
    ...
}

/* bad */
.element{
    ...
}

/* good */
.element {
    ...
}

/* bad */
@media screen and ( max-width: 300px ){
    body {
        background-color:lightblue;
    }
}

/* good */
@media screen and (max-width: 300px) {
    body {
        background-color: lightblue;
    }
}
```

### 换行

🚨以下几种情况不需要换行：

- '{'前

🚨以下几种情况需要换行：

- '{'后和'}'前
- 每个属性独占一行
- 多个规则的分隔符','后

```css
/* bad */
.selector, .selector-secondary, .selector[type=text]{
    padding:15px;
    margin:0px 0px 15px;
    background-color:rgba(0, 0, 0, 0.5);
    box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* good */
.selector,
.selector-secondary,
.selector[type="text"] {
    margin-bottom: 15px;
    padding: 15px;

    background-color: rgba(0, 0, 0, .5);

    box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

### 注释

💡请确保你的代码能够自描述、注释良好并且易于他人理解。好的代码注释能够传达上下文关系和代码目的。不要简单地重申组件或 class 名称。

对于较长的注释，务必书写完整的句子；对于一般性注解，可以书写简洁的短语。

```css
/* bad */
/* Modal header */
.modal-header {
    ...
}

/* good example */
/* Wrapping element for .modal-title and .modal-close */
.modal-header {
    ...
}
```

### 引号

🚨最外层统一使用双引号；

🚨url的内容要用引号；

🚨属性选择器中的属性值需要引号。

```css
.element:after {
    content: "";

    background-image: url("logo.png");
}


li[data-type="single"] {
    ...
}
```

### 命名

🚨按照 [bem](http://getbem.com/introduction/) 的规则命名

```css
.template-card{
    ...
}

.template-card__image{
    ...
}

.template-card__image—active{
    ...
}
```

### 颜色

🚨颜色16进制用小写字母；

🚨颜色16进制尽量用全写；

```css
/* bad */
.element {
    color: #ABCDEF;
    background-color: #001122;
}

/* good */
.element {
    color: #abcdef;
    background-color: #012;
}
```

### 属性简写

📌在需要显示地设置所有值的情况下，应当尽量限制使用简写形式的属性声明。

常被滥用的简写属性如下：

- padding
- margin
- font
- background
- border
- border-radius

大部分情况下，我们不需要为简写形式的属性声明指定所有值。例如，HTML 的标题元素只需要设置上、下边距（`margin`）的值，因此，在必要的时候，只需覆盖这两个值就可以了。`0` 值表示对浏览器默认值或以前指定的值的覆盖。

过度的使用属性简写会导致代码出现不必要的覆盖和意外的副作用。

在 MDN 上有一篇关于 [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) 的写得非常好的文章，对于不太熟悉简写属性声明及其行为的同学可以看看。

```css
/* bad */
.element {
    margin: 0 0 10px;
    background: red;
    background: url("image.jpg");
    border-radius: 3px 3px 0 0;
}

/* good */
.element {
    margin-bottom: 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    background-color: red;
    background-image: url("image.jpg");
}

```

### 属性声明顺序

相关的属性声明按顺序做分组处理，组之间需要有一个空行。

```css
.declaration-order {
    display: block;
    float: right;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    border: 1px solid #e5e5e5;
    border-radius: 3px;
    width: 100px;
    height: 100px;

    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    text-align: center;

    color: #333;
    background-color: #f5f5f5;

    opacity: 1;
}

/* 下面是推荐的属性的顺序 */
[
    [ "$import" ],
    [ "$variable" ],
    [ "$include" ],
    [ "$extend" ],
    [
        "content",
        "display",
        "visibility",
        "float",
        "clear",
        "overflow",
        "overflow-x",
        "overflow-y",
        "clip",
        "zoom"
    ],
    [
        "table-layout",
        "empty-cells",
        "caption-side",
        "border-spacing",
        "border-collapse",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image"
    ],
    [
        "-webkit-box-orient",
        "-webkit-box-direction",
        "-webkit-box-decoration-break",
        "-webkit-box-pack",
        "-webkit-box-align",
        "-webkit-box-flex"
    ],
    [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index"
    ],
    [
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "-webkit-box-sizing",
        "-moz-box-sizing",
        "box-sizing",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "-webkit-border-radius",
        "-moz-border-radius",
        "border-radius",
        "-webkit-border-top-left-radius",
        "-moz-border-radius-topleft",
        "border-top-left-radius",
        "-webkit-border-top-right-radius",
        "-moz-border-radius-topright",
        "border-top-right-radius",
        "-webkit-border-bottom-right-radius",
        "-moz-border-radius-bottomright",
        "border-bottom-right-radius",
        "-webkit-border-bottom-left-radius",
        "-moz-border-radius-bottomleft",
        "border-bottom-left-radius",
        "-webkit-border-image",
        "-moz-border-image",
        "-o-border-image",
        "border-image",
        "-webkit-border-image-source",
        "-moz-border-image-source",
        "-o-border-image-source",
        "border-image-source",
        "-webkit-border-image-slice",
        "-moz-border-image-slice",
        "-o-border-image-slice",
        "border-image-slice",
        "-webkit-border-image-width",
        "-moz-border-image-width",
        "-o-border-image-width",
        "border-image-width",
        "-webkit-border-image-outset",
        "-moz-border-image-outset",
        "-o-border-image-outset",
        "border-image-outset",
        "-webkit-border-image-repeat",
        "-moz-border-image-repeat",
        "-o-border-image-repeat",
        "border-image-repeat",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height"
    ],
    [
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-effect",
        "font-emphasize",
        "font-emphasize-position",
        "font-emphasize-style",
        "font-smooth",
        "line-height",
        "text-align",
        "-webkit-text-align-last",
        "-moz-text-align-last",
        "-ms-text-align-last",
        "text-align-last",
        "vertical-align",
        "white-space",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-style",
        "text-emphasis-position",
        "text-indent",
        "-ms-text-justify",
        "text-justify",
        "letter-spacing",
        "word-spacing",
        "-ms-writing-mode",
        "text-outline",
        "text-transform",
        "text-wrap",
        "-ms-text-overflow",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "-ms-word-wrap",
        "word-wrap",
        "-ms-word-break",
        "word-break"
    ],
    [
        "color",
        "background",
        "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
        "background-color",
        "background-image",
        "background-repeat",
        "background-attachment",
        "background-position",
        "-ms-background-position-x",
        "background-position-x",
        "-ms-background-position-y",
        "background-position-y",
        "-webkit-background-clip",
        "-moz-background-clip",
        "background-clip",
        "background-origin",
        "-webkit-background-size",
        "-moz-background-size",
        "-o-background-size",
        "background-size"
    ],
    [
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "opacity",
        "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
        "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
        "-ms-interpolation-mode",
        "-webkit-box-shadow",
        "-moz-box-shadow",
        "box-shadow",
        "filter:progid:DXImageTransform.Microsoft.gradient",
        "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
        "text-shadow"
    ],
    [
        "-webkit-transition",
        "-moz-transition",
        "-ms-transition",
        "-o-transition",
        "transition",
        "-webkit-transition-delay",
        "-moz-transition-delay",
        "-ms-transition-delay",
        "-o-transition-delay",
        "transition-delay",
        "-webkit-transition-timing-function",
        "-moz-transition-timing-function",
        "-ms-transition-timing-function",
        "-o-transition-timing-function",
        "transition-timing-function",
        "-webkit-transition-duration",
        "-moz-transition-duration",
        "-ms-transition-duration",
        "-o-transition-duration",
        "transition-duration",
        "-webkit-transition-property",
        "-moz-transition-property",
        "-ms-transition-property",
        "-o-transition-property",
        "transition-property",
        "-webkit-transform",
        "-moz-transform",
        "-ms-transform",
        "-o-transform",
        "transform",
        "-webkit-transform-origin",
        "-moz-transform-origin",
        "-ms-transform-origin",
        "-o-transform-origin",
        "transform-origin",
        "-webkit-animation",
        "-moz-animation",
        "-ms-animation",
        "-o-animation",
        "animation",
        "-webkit-animation-name",
        "-moz-animation-name",
        "-ms-animation-name",
        "-o-animation-name",
        "animation-name",
        "-webkit-animation-duration",
        "-moz-animation-duration",
        "-ms-animation-duration",
        "-o-animation-duration",
        "animation-duration",
        "-webkit-animation-play-state",
        "-moz-animation-play-state",
        "-ms-animation-play-state",
        "-o-animation-play-state",
        "animation-play-state",
        "-webkit-animation-timing-function",
        "-moz-animation-timing-function",
        "-ms-animation-timing-function",
        "-o-animation-timing-function",
        "animation-timing-function",
        "-webkit-animation-delay",
        "-moz-animation-delay",
        "-ms-animation-delay",
        "-o-animation-delay",
        "animation-delay",
        "-webkit-animation-iteration-count",
        "-moz-animation-iteration-count",
        "-ms-animation-iteration-count",
        "-o-animation-iteration-count",
        "animation-iteration-count",
        "-webkit-animation-direction",
        "-moz-animation-direction",
        "-ms-animation-direction",
        "-o-animation-direction",
        "animation-direction"
    ],
    [
        "quotes",
        "counter-reset",
        "counter-increment",
        "resize",
        "cursor",
        "-webkit-user-select",
        "-moz-user-select",
        "-ms-user-select",
        "user-select",
        "nav-index",
        "nav-up",
        "nav-right",
        "nav-down",
        "nav-left",
        "-moz-tab-size",
        "-o-tab-size",
        "tab-size",
        "-webkit-hyphens",
        "-moz-hyphens",
        "hyphens",
        "pointer-events"
    ]
]
```

### 带前缀的属性

当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。

```css
.element {
    -webkit-border-radius: 3px;
       -moz-border-radius: 3px;
            border-radius: 3px;

    background: -webkit-linear-gradient(top, #fff 0, #eee 100%);
    background:    -moz-linear-gradient(top, #fff 0, #eee 100%);
    background:         linear-gradient(top, #fff 0, #eee 100%);
}
```

### 清除浮动

📌 当元素需要撑起高度以包含内部的浮动元素时，通过对伪类设置 `clear` 或触发 [BFC](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context) 的方式进行 `clearfix`。尽量不使用增加空标签的方式。

如希望使用更小副作用的清除浮动方法，参见 [A new micro clearfix hack](http://nicolasgallagher.com/micro-clearfix-hack/) 一文。对已经触发 BFC 的元素不需要再进行 clearfix。

```scss
.clearfix {
    /**
     * IE < 8
     * Include this rule to trigger hasLayout and contain floats.
     */
    zoom: 1;

    /**
     * For modern browsers
     * 1. The space content is one way to avoid an Opera bug when the
     *    contenteditable attribute is included anywhere else in the document.
     *    Otherwise it causes space to appear at the top and bottom of elements
     *    that are clearfixed.
     * 2. The use of `table` rather than `block` is only necessary if using
     *    `:before` to contain the top-margins of child elements.
     */
    &:before,
    &:after {
        content: " "; /* 1 */
        display: table; /* 2 */
    }
    &:after {
        clear: both;
    }
}
```

### Less 和 Sass 中的嵌套

📌避免不必要的嵌套。

这是因为虽然你可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套。

扩展阅读：[Nesting in Sass and Less](http://markdotto.com/2015/07/20/css-nesting/)

```scss
// bad
.table > thead > tr > th {
    ...
}
.table > thead > tr > td {
    ...
}

// good
.table > thead > tr {
    > th {
        ...
    }
    > td {
        ...
    }
}

// best use bem
.table {
    > &__item {
        ...
    }
}
```

## 参考

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Code Guide by @mdo](https://codeguide.co/)
- [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide)
- [Popular Coding Convention on Github](http://sideeffect.kr/popularconvention#javascript)
- [JavaScript Standard Style](https://standardjs.com/)
