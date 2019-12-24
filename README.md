# 前端代码规范

本文档定义了 HTML、CSS、JavaScript 以及 Vue 的编写格式和代码规范。旨在促进协作编程、提高代码质量并提供相应的编辑器配置和构建检查工具。

**掌握本规范的最好方法是安装并在自己的代码中使用它。**

## 约定

- 🚨表示**强制**，必须执行
- 📌表示**强烈建议**，非特殊情况下，必须执行
- 💡表示**建议**，尽可能执行
- ✅表示编辑器保存后可以**自动修复**一些该规则报告的问题

## 目录

- [约定](#%e7%ba%a6%e5%ae%9a)
- [目录](#%e7%9b%ae%e5%bd%95)
- [项目规范](#%e9%a1%b9%e7%9b%ae%e8%a7%84%e8%8c%83)
    - [项目命名](#%e9%a1%b9%e7%9b%ae%e5%91%bd%e5%90%8d)
    - [目录命名](#%e7%9b%ae%e5%bd%95%e5%91%bd%e5%90%8d)
    - [文件命名](#%e6%96%87%e4%bb%b6%e5%91%bd%e5%90%8d)
- [Git](#git)
    - [设置用户名](#%e8%ae%be%e7%bd%ae%e7%94%a8%e6%88%b7%e5%90%8d)
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
    - [语义化和实用性](#%e8%af%ad%e4%b9%89%e5%8c%96%e5%92%8c%e5%ae%9e%e7%94%a8%e6%80%a7)
- [CSS](#css)
    - [缩进](#%e7%bc%a9%e8%bf%9b)
    - [分号](#%e5%88%86%e5%8f%b7)
    - [空格](#%e7%a9%ba%e6%a0%bc)
    - [换行](#%e6%8d%a2%e8%a1%8c)
    - [引号](#%e5%bc%95%e5%8f%b7)
    - [命名](#%e5%91%bd%e5%90%8d)
    - [颜色](#%e9%a2%9c%e8%89%b2)
    - [属性简写](#%e5%b1%9e%e6%80%a7%e7%ae%80%e5%86%99)
    - [属性声明顺序](#%e5%b1%9e%e6%80%a7%e5%a3%b0%e6%98%8e%e9%a1%ba%e5%ba%8f)
    - [带前缀的属性](#%e5%b8%a6%e5%89%8d%e7%bc%80%e7%9a%84%e5%b1%9e%e6%80%a7)
    - [清除浮动](#%e6%b8%85%e9%99%a4%e6%b5%ae%e5%8a%a8)
    - [Less 和 Sass 中的嵌套](#less-%e5%92%8c-sass-%e4%b8%ad%e7%9a%84%e5%b5%8c%e5%a5%97)
    - [注释](#%e6%b3%a8%e9%87%8a)
- [JavaScript](#javascript)
    - [缩进](#%e7%bc%a9%e8%bf%9b-1)
    - [单行长度](#%e5%8d%95%e8%a1%8c%e9%95%bf%e5%ba%a6)
    - [空格](#%e7%a9%ba%e6%a0%bc-1)
    - [引号](#%e5%bc%95%e5%8f%b7-1)
    - [分号](#%e5%88%86%e5%8f%b7-1)
    - [逗号](#%e9%80%97%e5%8f%b7)
    - [括号](#%e6%8b%ac%e5%8f%b7)
    - [空行](#%e7%a9%ba%e8%a1%8c)
    - [换行](#%e6%8d%a2%e8%a1%8c-1)
    - [变量与声明](#%e5%8f%98%e9%87%8f%e4%b8%8e%e5%a3%b0%e6%98%8e)
    - [变量命名](#%e5%8f%98%e9%87%8f%e5%91%bd%e5%90%8d)
    - [函数](#%e5%87%bd%e6%95%b0)
    - [数组](#%e6%95%b0%e7%bb%84)
    - [对象](#%e5%af%b9%e8%b1%a1)
    - [字符串](#%e5%ad%97%e7%ac%a6%e4%b8%b2)
    - [运算符和条件语句](#%e8%bf%90%e7%ae%97%e7%ac%a6%e5%92%8c%e6%9d%a1%e4%bb%b6%e8%af%ad%e5%8f%a5)
    - [正则](#%e6%ad%a3%e5%88%99)
    - [ES6](#es6)
    - [最佳实践](#%e6%9c%80%e4%bd%b3%e5%ae%9e%e8%b7%b5)
    - [Node.js](#nodejs)
- [Vue](#vue)
    - [风格指南](#%e9%a3%8e%e6%a0%bc%e6%8c%87%e5%8d%97)
    - [缩进](#%e7%bc%a9%e8%bf%9b-2)
    - [命名方式](#%e5%91%bd%e5%90%8d%e6%96%b9%e5%bc%8f)
    - [多个特性的元素](#%e5%a4%9a%e4%b8%aa%e7%89%b9%e6%80%a7%e7%9a%84%e5%85%83%e7%b4%a0)
    - [换行](#%e6%8d%a2%e8%a1%8c-2)
- [编辑器和代码配置](#%e7%bc%96%e8%be%91%e5%99%a8%e5%92%8c%e4%bb%a3%e7%a0%81%e9%85%8d%e7%bd%ae)
    - [VSCode](#vscode)
    - [代码配置](#%e4%bb%a3%e7%a0%81%e9%85%8d%e7%bd%ae)
- [相关文档](#%e7%9b%b8%e5%85%b3%e6%96%87%e6%a1%a3)

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

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

## Git

### 设置用户名

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

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

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

### 语义化和实用性

📌强烈推荐遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

```html
<!-- bad -->
<div onclick="goToItems();">jump to items</div>

<!-- good -->
<a href="/items">jump to items</a>
```

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

## CSS

### 缩进

🚨✅使用**四个空格**来代替制表符 (tab) 缩进。

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

🚨✅每个属性声明末尾都要加分号。「.sass」文件除外。

```css
.element {
    width: 20px;
    height: 20px;

    background-color: red;
}
```

### 空格

🚨以下几种情况不需要空格：

- ✅属性名后
- 多个规则的分隔符「`,`」前
- `!important` 「`!`」后
- 属性值中「`(`」后和「`)`」前
- ✅行末不要有多余的空格

🚨以下几种情况需要空格：

- ✅每条声明语句的「`:`」后
- ✅选择器「`>`」、「`+`」、「`~`」前后
- ✅在每个声明块的左花括号前，「`{`」前
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

- 「`{`」前

🚨以下几种情况需要换行：

- 「`{`」后和「`}`」前
- 每个属性独占一行
- 多个规则的分隔符「`,`」后

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

### 引号

🚨✅最外层统一使用双引号；

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

🚨✅颜色16进制用小写字母；

🚨✅颜色16进制尽量用全写；

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

📌✅相关的属性声明按顺序做分组处理，组之间需要有一个空行。

[这是推荐的属性的顺序](https://git.gaoding.com/devops/frontend-code-guide/blob/master/.csscomb.json#L32)

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
```

### 带前缀的属性

📌✅当使用特定厂商的带有前缀的属性时，通过缩进的方式，让每个属性的值在垂直方向对齐，这样便于多行编辑。

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
/* bad */
.table > thead > tr > th {
    ...
}
.table > thead > tr > td {
    ...
}

/* bad */
.table > thead > tr {
    > th {
        ...
    }
    > td {
        ...
    }
}

/* best use bem */
.table {
    > &__item {
        ...
    }
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

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

## JavaScript

### 缩进

🚨✅使用**四个空格**进行缩进。

eslint: [`indent`](http://cn.eslint.org/docs/rules/indent)

🚨✅禁止混合使用空格与 tab 作为缩进。

eslint: [`no-mixed-spaces-and-tabs`](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs)

🚨✅禁止使用制表符(tab)。

eslint: [`no-tabs`](http://cn.eslint.org/docs/rules/no-tabs)

```js
function hello(name) {
    console.log('hi', name)
}
```

### 单行长度

🚨避免一行代码超过160个字符（包含空格）。

eslint: [`max-len`](http://cn.eslint.org/docs/rules/max-len.html)

> 虽然现在基本人手拥有大屏显示器作为开发工具，但是过长的代码仍然不利于可读性和可维护性，所以该换行时就要换行。

```javascript
// bad
$.ajax({ method: 'POST', url: 'https://gaoding.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this name.'));

// good
$.ajax({
    method: 'POST',
    url: 'https://gaoding.com/',
    data: { name: 'John' },
})
    .done(() => console.log('Congratulations!'))
    .fail(() => console.log('You have failed this name.'));
```

### 空格

🚨✅关键字后面加空格。

eslint: [`keyword-spacing`](http://cn.eslint.org/docs/rules/keyword-spacing)

🚨✅运算符(space-infix-ops)周围要有空格。

eslint: [`space-infix-ops`](http://cn.eslint.org/docs/rules/space-infix-ops)

🚨✅逗号后面加空格

eslint: [`comma-spacing`](http://eslint.org/docs/rules/comma-spacing)

🚨✅单行代码块两边加空格

eslint: [`block-spacing`](http://cn.eslint.org/docs/rules/block-spacing)

🚨✅除了缩进，不要使用多个空格。

eslint: [`no-multi-spaces`](http://cn.eslint.org/docs/rules/no-multi-spaces)

🚨✅行末不留空格。

eslint: [`no-trailing-spaces`](http://cn.eslint.org/docs/rules/no-trailing-spaces)

🚨✅属性前面不要加空格。

eslint: [`no-whitespace-before-property`](http://cn.eslint.org/docs/rules/no-whitespace-before-property)

🚨✅遇到分号时空格后留前不留。

eslint: [`semi-spacing`](http://cn.eslint.org/docs/rules/semi-spacing)

🚨✅代码块首尾留空格。

eslint: [`space-before-blocks`](http://cn.eslint.org/docs/rules/space-before-blocks)

🚨✅圆括号间不留空格。

eslint: [`space-in-parens`](http://cn.eslint.org/docs/rules/space-in-parens)

🚨✅一元运算符后面跟一个空格。

eslint: [`space-unary-ops`](http://cn.eslint.org/docs/rules/space-unary-ops)

🚨✅注释首尾留空格。

eslint: [`spaced-comment`](http://cn.eslint.org/docs/rules/spaced-comment)

🚨✅模板字符串中变量前后不加空格。

eslint: [`template-curly-spacing`](http://cn.eslint.org/docs/rules/template-curly-spacing)

🚨✅键值对当中冒号与值之间要留空格。

eslint: [`key-spacing`](http://cn.eslint.org/docs/rules/key-spacing)

🚨✅展开运算符与它的表达式间不要有空格。

eslint: [`rest-spread-spacing`](http://cn.eslint.org/docs/rules/rest-spread-spacing)

🚨✅代码块中避免多余留白

eslint: [`padded-blocks`](http://cn.eslint.org/docs/rules/padded-blocks)

```js
// bad
if(condition){ ... }

// good
if (condition) { ... }

// bad
const x=y+5;

// good
const x = y + 5;

// bad
function foo() {return true;}
if (foo) { bar = 0;}

// good
function foo() { return true; }
if (foo) { bar = 0; }

// bad
for (let i = 0 ;i < items.length ;i++) {...}

// good
for (let i = 0; i < items.length; i++) {...}

// bad
typeof!admin

// good
typeof !admin

// bad
const message = `Hello, ${ name }`;

// good
const message = `Hello, ${name}`;

// bad
const obj = { 'key' : 'value' };
const obj = { 'key' :'value' };
const obj = { 'key':'value' };

// good
const obj = { 'key': 'value' };

// bad
fn(... args);

// good
fn(...args);

if (user) {
                            // bad
    const name = getName();

}

// good
if (user) {
    const name = getName();
}
```

### 引号

🚨✅最外层统一使用单引号。

eslint: [`quotes`](http://cn.eslint.org/docs/rules/quotes)

🚨✅只对那些无效的标示使用引号 `''`

eslint: [`quote-props`](http://cn.eslint.org/docs/rules/quote-props)

```js
// bad
const name = "Capt. Janeway";

// bad
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';

// bad
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

// good
const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};
```

### 分号

🚨✅结束语句后面需要加分号

eslint: [`semi`](http://cn.eslint.org/docs/rules/semi.html)

> 当 JavaScript 遇到没有分号结尾的一行，它会执行[自动插入分号 `Automatic Semicolon Insertion`](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)的规则来决定行末是否加分号。如果 JavaScript 在你的断行里错误的插入了分号，就会出现一些古怪的行为。当新的功能加到 JavaScript 里后，这些规则会就变得更复杂难懂。显示的结束语句，并通过配置代码检查去捕获没有带分号的地方可以帮助你防止这种错误。

[Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214%237365214).

```javascript
// bad
(function () {
    const name = 'Skywalker'
    return name
})()

// good
(function () {
    const name = 'Skywalker';
    return name;
}());

// good, 行首加分号，避免文件被连接到一起时立即执行函数被当做变量来执行。
;(() => {
    const name = 'Skywalker';
    return name;
}());
```

### 逗号

🚨✅多行结尾要有逗号。

eslint: [`comma-dangle`](http://cn.eslint.org/docs/rules/comma-dangle.html)

> 多行结尾添加逗号可以使 git diffs 更清洁。另外，像 Babel 这样的转换器会删除转换代码中的额外的逗号，这意味着你不必担心旧版浏览器~~（我们也不需要支持旧版 IE）~~中的结尾逗号问题。

🚨✅始终将逗号置于行末。

eslint: [`comma-style`](http://cn.eslint.org/docs/rules/comma-style)

```diff
// bad - 没有结尾逗号的 git diff
const hero = {
    firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - 有结尾逗号的 git diff
const hero = {
    firstName: 'Florence',
    astName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
```

### 括号

🚨`return` 语句中的赋值必需有括号包裹。

eslint: [`no-return-assign`](http://cn.eslint.org/docs/rules/no-return-assign)

🚨✅`else` 关键字要与花括号保持在同一行。

eslint: [`brace-style`](http://cn.eslint.org/docs/rules/brace-style)

🚨✅ 多行 `if` 语句的的括号不能省。

eslint: [`curly`](http://cn.eslint.org/docs/rules/curly)

🚨 **条件语句中赋值语句**使用括号包起来。这样使得代码更加清晰可读，而不会认为是将条件判断语句的全等号（`===`）错写成了等号（`=`）。

eslint: [`no-cond-assign`](http://cn.eslint.org/docs/rules/no-cond-assign)

```js
// bad
function sum(a, b) {
    return result = a + b;
}

// good
function sum(a, b) {
    return (result = a + b);
}

// gppd
if (condition) {
} else {
}

// bad
if (condition)
{
}
else
{
}

// good
if (options.quiet !== true) console.log('done');

// good
if (options.quiet !== true) {
    console.log('done');
}

// bad
if (options.quiet !== true)
console.log('done');

// good
while ((m = text.match(expr))) { }

// bad
while (m = text.match(expr)) { }
```

### 空行

🚨✅不允许有连续多行空行。

eslint: [`no-multiple-empty-lines`](http://cn.eslint.org/docs/rules/no-multiple-empty-lines)

🚨✅文件末尾留一空行。

eslint: [`eol-last`](http://cn.eslint.org/docs/rules/eol-last)

```js
// bad
const value = 'hello world';


console.log(value);

// good
const value = 'hello world';
console.log(value);

```

### 换行

🚨✅对象属性换行时注意统一代码风格。

eslint: [`object-property-newline`](http://cn.eslint.org/docs/rules/object-property-newline)

```js
// bad
const user = {
    name: 'Jane Doe', age: 30,
    username: 'jdoe86',
};

// good
const user = { name: 'Jane Doe', age: 30, username: 'jdoe86' };

// good
const user = {
    name: 'Jane Doe',
    age: 30,
    username: 'jdoe86',
};
```

### 变量与声明

🚨不要定义未使用的变量。

eslint: [`no-unused-vars`](http://cn.eslint.org/docs/rules/no-unused-vars)

🚨使用浏览器全局变量时加上 `window.` 前缀。<br>
`document`、`console` 和 `navigator` 除外。

eslint: [`no-undef`](http://cn.eslint.org/docs/rules/no-undef)

🚨✅声明变量使用 `let` 或 `const` 而不是 `var`

eslint: [`no-var`](http://cn.eslint.org/docs/rules/no-var)

🚨每个变量都用一个 `const` 或 `let`。

eslint: [`one-var`](http://cn.eslint.org/docs/rules/one-var)

🚨不要修改使用 `const` 声明的变量。

eslint: [`no-const-assign`](http://cn.eslint.org/docs/rules/no-const-assign)

🚨不要对变量使用 `delete` 操作。

eslint: [`no-delete-var`](http://cn.eslint.org/docs/rules/no-delete-var)

🚨不要重复声明变量。

eslint: [`no-redeclare`](http://cn.eslint.org/docs/rules/no-redeclare)

🚨避免将变量赋值给自己。

eslint: [`no-self-assign`](http://cn.eslint.org/docs/rules/no-self-assign)

🚨避免将变量与自己进行比较操作。

esint: [`no-self-compare`](http://cn.eslint.org/docs/rules/no-self-compare)

🚨不要使用 `undefined` 来初始化变量。

eslint: [`no-undef-init`](http://cn.eslint.org/docs/rules/no-undef-init)

🚨循环语句中注意更新循环变量。

eslint: [`no-unmodified-loop-condition`](http://cn.eslint.org/docs/rules/no-unmodified-loop-condition)

🚨不要随意更改关键字的值。

eslint: [`no-shadow-restricted-names`](http://cn.eslint.org/docs/rules/no-shadow-restricted-names)

```js
function myFunction () {
    // bad unused result
    const result = something();
}

// good
const link = window.location.href;

// bad
var silent = true, verbose = true;
let silent = true,
    verbose = true;

// good
let silent = true;
let verbose = true;


// bad
let name = 'John';
let name = 'Jane';

// good
let firstName = 'John';
firstName = 'Jane';

// bad
name = name;
if (name === name) {}

// bad
let foo = undefined;

// good
let bar;
bar = 'value';

// bad
for (let i = 0; i < items.length; j++) {...}

// good
for (let i = 0; i < items.length; i++) {...}

// bad
let undefined = 'value';
```

### 变量命名

🚨对于变量和函数名统一使用驼峰命名法。

eslint: [`camelcase`](http://cn.eslint.org/docs/rules/camelcase)

```js
// bad
function my_function () { }

// good
function myFunction () { }

// bad
const my_var = 'hello';

// good
const myVar = 'hello';
```

### 函数

🚨✅函数声明时括号与函数名间加空格。

eslint: [`space-before-function-paren`](http://cn.eslint.org/docs/rules/space-before-function-paren)

🚨✅函数调用时标识符与括号间不留间隔。

eslint: [`func-call-spacing`](http://cn.eslint.org/docs/rules/func-call-spacing)

🚨构造函数要以大写字母开头。

eslint: [`new-cap`](http://cn.eslint.org/docs/rules/new-cap)

🚨无参的构造函数调用时要带上括号。

eslint: [`new-parens`](http://cn.eslint.org/docs/rules/new-parens)

🚨不要定义冗余的函数参数。

eslint: [`no-dupe-args`](http://cn.eslint.org/docs/rules/no-dupe-args)

🚨避免多余的函数上下文绑定。

eslint: [`no-extra-bind`](http://cn.eslint.org/docs/rules/no-extra-bind)

🚨不要使用多余的括号包裹函数。

eslint: [`no-extra-parens`](http://cn.eslint.org/docs/rules/no-extra-parens)

🚨避免对声明过的函数重新赋值。

eslint: [`no-func-assign`](http://cn.eslint.org/docs/rules/no-func-assign)

🚨嵌套的代码块中禁止再定义函数。

eslint: [`no-inner-declarations`](http://cn.eslint.org/docs/rules/no-inner-declarations)

🚨不要将全局对象的属性作为函数调用。

eslint: [`no-obj-calls`](http://cn.eslint.org/docs/rules/no-obj-calls)

🚨自调用匿名函数 (IIFEs) 使用括号包裹。

eslint: [`wrap-iife`](http://cn.eslint.org/docs/rules/wrap-iife)

🚨禁止使用 `Function` 构造器。

eslint: [`no-new-func`](http://cn.eslint.org/docs/rules/no-new-func)

🚨避免不必要的 `.call()` 和 `.apply()`。

eslint: [`no-useless-call`](http://cn.eslint.org/docs/rules/no-useless-call)

🚨`return`，`throw`，`continue` 和 `break` 后不要再跟代码。

eslint: [`no-unreachable`](http://cn.eslint.org/docs/rules/no-unreachable)

🚨避免使用 `arguments.callee` 和 `arguments.caller`。

eslint: [`no-caller`](http://cn.eslint.org/docs/rules/no-caller)

```js
// bad
function name ( arg ) { ... }
run(function () { ... });
console.log ('hello');

// good
function name(arg) { ... }
run(function() { ... });
console.log('hello');

// bad
function animal() {}
const dog = new animal;
const dog = new animal();

// good
function Animal() {}
const dog = new Animal();

// bad
function sum(a, b, a) {}

// good
function sum(a, b, c) {}

// bad
const name = function() {
    getName();
}.bind(user);

// good
const name = function() {
    this.getName();
}.bind(user);

// bad
const myFunc = (function() {});

// bad
function myFunc() {}
myFunc = myOtherFunc;

if (authenticated) {
    // bad
    function setAuthUser() {}
}

// bad
const math = Math();

// bad
const getName = function() { }();

// good
const getName = (function() { }());
const getName = (function() { })();

// bad
const sum = new Function('a', 'b', 'return a + b');

// bad
sum.call(null, 1, 2, 3);

// bad
function doSomething () {
    return true;
    console.log('never called');
}

// bad
function foo (n) {
    if (n <= 0) return;
    arguments.callee(n - 1);
}

// bad
function foo (n) {
    if (n <= 0) return;
    foo(n - 1);
}
```

### 数组

🚨使用数组字面量而不是构造器。

eslint: [`no-array-constructor`](http://cn.eslint.org/docs/rules/no-array-constructor)

🚨禁止使用稀疏数组（Sparse arrays）。

eslint: [`no-sparse-arrays`](http://cn.eslint.org/docs/rules/no-sparse-arrays)

```js
// bad
const nums = new Array(1, 2, 3);

// good
const nums = [1, 2, 3];

// bad
const fruits = ['apple',, 'orange'];
```

### 对象

🚨禁止使用 `Object` 构造器。

eslint: [`no-new-object`](http://cn.eslint.org/docs/rules/no-new-object)

🚨对象中定义了存值器，一定要对应的定义取值器。

eslint: [`accessor-pairs`](http://cn.eslint.org/docs/rules/accessor-pairs)

🚨对象字面量中不要定义重复的属性。

eslint: [`no-dupe-keys`](http://cn.eslint.org/docs/rules/no-dupe-keys)

🚨不要扩展原生对象。

eslint: [`no-extend-native`](http://cn.eslint.org/docs/rules/no-extend-native)

🚨不要对全局只读对象重新赋值。

eslint: [`no-global-assign`](http://cn.eslint.org/docs/rules/no-global-assign)

🚨外部变量不要与对象属性重名。

eslint: [`no-label-var`](http://cn.eslint.org/docs/rules/no-label-var)

🚨`new` 创建对象实例后需要赋值给变量。

eslint: [`no-new`](http://cn.eslint.org/docs/rules/no-new)

🚨✅避免使用不必要的计算值作对象属性。

eslint: [`no-useless-computed-key`](http://cn.eslint.org/docs/rules/no-useless-computed-key)

🚨使用 `getPrototypeOf` 来替代 **`__proto__`**。

eslint: [`no-proto`](http://cn.eslint.org/docs/rules/no-proto)

🚨禁止直接使用 ``Object.prototypes`的内置属性

eslint: [`no-prototype-builtins`](<http://cn.eslint.org/docs/rules/no-prototype-builtins)>

```js
// bad
let config = new Object();

// bad
const person = {
    set name (value) {
        this._name = value;
    }
};

// good
const person = {
    set name (value) {
        this._name = value;
    },
    get name () {
        return this._name;
    }
};

// bad
const user = {
    name: 'Jane Doe',
    name: 'John Doe',
};

// bad
Object.prototype.age = 21;

// bad
window = {};

let score = 100
function game () {
    // bad
    score: while (true) {
        score -= 10;
        if (score > 0) continue score;
        break;
    }
}

// bad
new Character();

// good
const character = new Character();

// bad
const user = { ['name']: 'John Doe' };

// good
const user = { name: 'John Doe' };

// bad
const foo = obj.__proto__;

// good
const foo = Object.getPrototypeOf(obj);

// bad
const hasBarProperty = foo.hasOwnProperty("bar");

// good
const hasBarProperty = Object.prototype.hasOwnProperty.call(foo, "bar");
```

### 字符串

🚨禁止使用原始包装器。

eslint: [`no-new-wrappers`](http://cn.eslint.org/docs/rules/no-new-wrappers)

🚨不要使用多行字符串。

eslint: [`no-multi-str`](http://cn.eslint.org/docs/rules/no-multi-str)

🚨字符串字面量中也不要使用八进制转义字符。

eslint: [`no-octal-escape`](http://cn.eslint.org/docs/rules/no-octal-escape)

🚨禁止不必要的转义。

eslint: [`no-useless-escape`](http://cn.eslint.org/docs/rules/no-useless-escape)

```js
// bad
const message = new String('hello');

// bad
const message = 'Hello \
                world';

// bad
const copyright = 'Copyright \251';

// bad
let message = 'Hell\o';
```

### 运算符和条件语句

🚨避免使用逗号操作符。

eslint: [`no-sequences`](http://cn.eslint.org/docs/rules/no-sequences)

🚨不要使用非法的空白符。

eslint: [`no-irregular-whitespace`](http://cn.eslint.org/docs/rules/no-irregular-whitespace)

🚨点号操作符须与属性需在同一行。

eslint: [`dot-location`](http://cn.eslint.org/docs/rules/dot-location)

🚨始终使用 `===` 替代 `==`。<br>
例外： `obj == null` 可以用来检查 `null || undefined`。

eslint: [`eqeqeq`](http://cn.eslint.org/docs/rules/eqeqeq)

🚨对于三元运算符 `?` 和 `:` 与他们所负责的代码处于同一行

eslint: [`operator-linebreak`](http://cn.eslint.org/docs/rules/operator-linebreak)

🚨避免不必要的布尔转换。

eslint: [`no-extra-boolean-cast`](http://cn.eslint.org/docs/rules/no-extra-boolean-cast)

🚨不要省去小数点前面的0。

eslint: [`no-floating-decimal`](http://cn.eslint.org/docs/rules/no-floating-decimal)

🚨如果有更好的实现，尽量不要使用三元表达式。

eslint: [`no-unneeded-ternary`](http://cn.eslint.org/docs/rules/no-unneeded-ternary)

🚨关系运算符的左值不要做取反操作。

eslint: [`no-unsafe-negation`](http://cn.eslint.org/docs/rules/no-unsafe-negation)

🚨检查 `NaN` 的正确姿势是使用 `isNaN()`。

eslint: [`use-isnan`](http://cn.eslint.org/docs/rules/use-isnan)

🚨用合法的字符串跟 `typeof` 进行比较操作。

eslint: [`valid-typeof`](http://cn.eslint.org/docs/rules/valid-typeof)

🚨请书写优雅的条件语句（avoid Yoda conditions）。

eslint: [`yoda`](http://cn.eslint.org/docs/rules/yoda)

🚨避免使用常量作为条件表达式的条件（循环语句除外）。

eslint: [`no-constant-condition`](http://cn.eslint.org/docs/rules/no-constant-condition)

```js
// bad
if (doSomething(), !!test) {}

// bad
function myFunc () /*<\NBSP>*/{}

// bad
console.
log('hello');

// good
console.log('hello');

// good
if (name === 'John')

// bad
if (name == 'John')

// good
if (name !== 'John')

// bad
if (name != 'John')

// good
const location = env.development ? 'localhost' : 'www.api.com';

// good
const location = env.development
    ? 'localhost'
    : 'www.api.com';

// ✗ avoid
const location = env.development ?
'localhost' :
'www.api.com';

const result = true;

// bad
if (!!result) {}

// good
if (result) {}

// bad
const discount = .5;

// good
const discount = 0.5;

// bad
let score = val ? val : 0;

// good
let score = val || 0;

// bad
if (!key in obj) {}

// bad
if (price === NaN) { }

// good
if (isNaN(price)) { }

// bad
typeof name === 'undefimed'

// good
typeof name === 'undefined'

// bad
if (42 === age) { }

// good
if (age === 42) { }

// bad
if (false) {}

// good
if (x === 0) {}

// good
while (true) {}
```

### 正则

🚨✅正则中避免使用多个空格。

eslint: [`no-regex-spaces`](http://cn.eslint.org/docs/rules/no-regex-spaces)

🚨正则中不要使用控制符。

eslint: [`no-control-regex`](http://cn.eslint.org/docs/rules/no-control-regex)

🚨正则中不要使用空字符。

eslint: [`no-empty-character-class`](http://cn.eslint.org/docs/rules/no-empty-character-class)

🚨不要向 `RegExp` 构造器传入非法的正则表达式。

eslint: [`no-invalid-regexp`](http://cn.eslint.org/docs/rules/no-invalid-regexp)

```js
// bad
const regexp = /test   value/;

// good
const regexp = /test {3}value/;
const regexp = /test value/;

// bad
const pattern = /\x1f/;

// good
const pattern = /\x20/;
// bad
const myRegex = /^abc[]/;

// good
const myRegex = /^abc[a-z]/;

// bad
RegExp('[a-z');

// good
RegExp('[a-z]');
```

### ES6

🚨✅所有变量的赋值都尽量用`const`。

该规则旨在标记那些使用 `let` 声明，但在初始化赋值后从未被修改过的变量。

eslint: [`prefer-const`](http://cn.eslint.org/docs/rules/prefer-const.html)

🚨import, export 和解构操作中，禁止赋值到同名变量。

eslint: [`no-useless-rename`](http://cn.eslint.org/docs/rules/no-useless-rename)

🚨子类的构造器中一定要调用 `super`

eslint: [`constructor-super`](http://cn.eslint.org/docs/rules/constructor-super)

🚨避免对类名重新赋值。

eslint: [`no-class-assign`](http://cn.eslint.org/docs/rules/no-class-assign)

🚨类中不要定义冗余的属性。

eslint: [`no-dupe-class-members`](http://cn.eslint.org/docs/rules/no-dupe-class-members)

🚨同一模块有多个导入时一次性写完。

eslint: [`no-duplicate-imports`](http://cn.eslint.org/docs/rules/no-duplicate-imports)

🚨不要解构空值。

eslint: [`no-empty-pattern`](http://cn.eslint.org/docs/rules/no-empty-pattern)

🚨禁止使用 `Symbol` 构造器。

`Symbol` 不和 `new` 操作符一起使用，而是作为函数调用。

eslint: [`no-new-symbol`](http://cn.eslint.org/docs/rules/no-new-symbol)

🚨要求有 symbol 描述 (symbol-description)

eslint: [`symbol-description`](https://cn.eslint.org/docs/rules/symbol-description)

🚨正确使用 ES6 中的字符串模板。

eslint: [`no-template-curly-in-string`](http://cn.eslint.org/docs/rules/no-template-curly-in-string)

🚨使用 `this` 前请确保 `super()` 已调用。

eslint: [`no-this-before-super`](http://cn.eslint.org/docs/rules/no-this-before-super)

🚨禁止多余的构造器。

eslint: [`no-useless-constructor`](http://cn.eslint.org/docs/rules/no-useless-constructor)

🚨✅`yield *` 中的 `*` 前后都要有空格。

eslint: [`yield-star-spacing`](http://cn.eslint.org/docs/rules/yield-star-spacing)

🚨✅`generator *` 中的 `*` 前后都要有空格。

eslint: [`generator-star-spacing`](http://cn.eslint.org/docs/rules/generator-star-spacing)

🚨✅要求箭头函数的箭头前后都有空格

eslint: [`arrow-spacing`](https://cn.eslint.org/docs/rules/arrow-spacing)

```js
// bad
var name = 'John';

// good
const name = 'Jane';

// bad
import { config as config } from './config';

// good
import { config } from './config';

// bad
class Dog {
    constructor () {
        super();
    }
}

// good
class Dog extends Mammal {
    constructor () {
        super();
    }
}

// bad
Dog = 'Fido';

// bad
class Dog {
    bark () {}
    bark () {}
}

// bad
import { myFunc1 } from 'module';
import { myFunc2 } from 'module';

// good
import { myFunc1, myFunc2 } from 'module';

// bad
const { a: {} } = foo;

// good
const { a: { b } } = foo;

// bad
const foo = Symbol();
const foo = new Symbol('foo');

// good
const foo = Symbol("some description");

// bad
const message = 'Hello ${name}';

// good
const message = `Hello ${name}`;
class Dog extends Animal {
    constructor () {
        // bad
        this.legs = 4;
        super();
    }
}

// bad
class Car {
    constructor () {
    }
}

// bad
yield* increment();

// good
yield * increment();

// good
function * generator() {
    yield "44";
    yield "55";
}

// bad
(a)=>{};

// good
(a) => {};
```

### 最佳实践

🚨不要丢掉异常处理中`err`参数。

eslint: [`handle-callback-err`](http://cn.eslint.org/docs/rules/handle-callback-err)

🚨不要使用 `debugger`。

eslint: [`no-debugger`](http://cn.eslint.org/docs/rules/no-debugger)

🚨`switch` 语句中不要定义重复的 `case` 分支。

eslint: [`no-duplicate-case`](http://cn.eslint.org/docs/rules/no-duplicate-case)

🚨不要使用 `eval()`。

eslint: [`no-eval`](http://cn.eslint.org/docs/rules/no-eval)

🚨`catch` 中不要对错误重新赋值。

eslint: [`no-ex-assign`](http://cn.eslint.org/docs/rules/no-ex-assign)

🚨`switch` 一定要使用 `break` 来将条件分支正常中断。

eslint: [`no-fallthrough`](http://cn.eslint.org/docs/rules/no-fallthrough)

🚨注意隐式的 `eval()`。

eslint: [`no-implied-eval`](http://cn.eslint.org/docs/rules/no-implied-eval)

🚨禁止使用 `__iterator__`。

eslint: [`no-iterator`](http://cn.eslint.org/docs/rules/no-iterator)

🚨禁止使用标签语句。

eslint: [`no-labels`](http://cn.eslint.org/docs/rules/no-labels)

🚨不要书写不必要的嵌套代码块。

eslint: [`no-lone-blocks`](http://cn.eslint.org/docs/rules/no-lone-blocks)

🚨不要使用八进制字面量。

eslint: [`no-octal`](http://cn.eslint.org/docs/rules/no-octal)

🚨`finally` 代码块中不要再改变程序执行流程。

eslint: [`no-unsafe-finally`](http://cn.eslint.org/docs/rules/no-unsafe-finally)

🚨用 `throw` 抛错时，抛出 `Error` 对象而不是字符串。

eslint: [`no-throw-literal`](http://cn.eslint.org/docs/rules/no-throw-literal)

🚨禁止使用 `with`。

eslint: [`no-with`](http://cn.eslint.org/docs/rules/no-with)

```js
// good
run(function (err) {
    if (err) throw err;
    window.alert('done');
});

// bad
run(function (err) {
    window.alert('done');
});

// bad
function sum (a, b) {
    debugger;
    return a + b
}

switch (id) {
    case 1:
    // bad
    case 1:
}

// bad
eval( "var result = user." + propName );

// good
const result = user[propName];

try {
    // ...
} catch (e) {
    // bad
    e = 'new value';
}

switch (filter) {
    case 1:
        doSomething();    // bad
    case 2:
        doSomethingElse();
}

switch (filter) {
    case 1:
        doSomething();
        break           // good
    case 2:
        doSomethingElse();
}

switch (filter) {
  case 1:
      doSomething();
      // fall through  // good too
  case 2:
      doSomethingElse();
}

// bad
setTimeout("alert('Hello world')");

// good
setTimeout(function () { alert('Hello world') });

// bad
Foo.prototype.__iterator__ = function () {};

// bad
label:
    while (true) {
        break label;
    }
// bad
function myFunc () {
    {
        myOtherFunc();
    }
}

// good
function myFunc () {
    myOtherFunc();
}

// bad
const octal = 042;

// good
const decimal = 34;
const octalString = '042';

// bad
try {
    // ...
} catch (e) {
    // ...
} finally {
    return 42;
}

// bad
throw 'error';

// good
throw new Error('error');

// bad
with (val) {...}
```

### Node.js

🚨使用 `__dirname` 和 `__filename` 时尽量避免使用字符串拼接。

eslint: [`no-path-concat`](http://cn.eslint.org/docs/rules/no-path-concat)

🚨禁止使用 `new require`。

eslint: [`no-new-require`](http://cn.eslint.org/docs/rules/no-new-require)

```js
// bad
const pathToFile = __dirname + '/app.js';

// good
const pathToFile = path.join(__dirname, 'app.js');

// bad
const myModule = new require('my-module');
```

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

## Vue

### 风格指南

请参考官方的 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)，这里会根据 [eslint-plugin-vue](https://eslint.vuejs.org/) 做部分改造。

### 缩进

🚨✅使用**四个空格**进行缩进。

eslint: [`vue/html-indent`](https://eslint.vuejs.org/rules/html-indent.html)、[`vue/script-indent`](https://eslint.vuejs.org/rules/script-indent.html)

```html
<!-- good -->
<template>
    <div class="foo">
        Hello world.
    </div>
</template>

<script>
export default {
    name: 'ExampleComponent',
    data() {
        return {
            text: 'world',
        };
    },
}
</script>

<!-- bad -->
<template>
  <div class="foo">
    Hello world.
  </div>
</template>

<script>
export default {
  name: 'ExampleComponent',
  data() {
    return {
      text: 'world',
    };
  },
}
</script>
```

### 命名方式

🚨✅HTML 模板中自定义组件名始终大写。

eslint: [`vue/component-name-in-template-casing`](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)

🚨自定义组件文件命名全部采用小写方式，以中划线分隔。

```html
<!-- bad -->
<!-- FooBar.vue -->
<template>
    <div class="foo">
        <hlg-select v-model="type">
            <hlgOption v-for="item in types" :key="item.value" :label="item.text" :value="item.value" />
        </hlg-select>
    </div>
</template>

<!-- good -->
<!-- foo-bar.vue -->
<template>
    <div class="foo">
        <HlgSelect v-model="type">
            <HlgOption v-for="item in types" :key="item.value" :label="item.text" :value="item.value" />
        </HlgSelect>
    </div>
</template>

<!-- good -->
<script>
import { HlgSelect, HlgOption } from 'hlg-ui';
import FooBar from './foo-bar.vue';

export default {
    name: 'ExampleComponent',
    components: { HlgSelect, HlgOption, FooBar },
    ...
}
</script>
```

### 多个特性的元素

🚨✅多个特性的元素应该分多行撰写，每个特性一行。（单行特性最多不能超过四个）

eslint: [`vue/max-attributes-per-line`](https://eslint.vuejs.org/rules/max-attributes-per-line.html)

```html
<!-- bad -->
<template>
    <HlgSelect v-model="type" multiple size="small" placeholder="请选择" @change="onChange">
        <HlgOption v-for="item in types" :key="item.value" :label="item.text" :value="item.value" :disabled="item.disabled" />
    </HlgSelect>
</template>

<!-- good -->
<template>
    <HlgSelect
        v-model="type"
        multiple
        size="small"
        placeholder="请选择"
        @change="onChange"
    >
        <HlgOption
            v-for="item in types"
            :key="item.value"
            :label="item.text"
            :value="item.value"
            :disabled="item.disabled"
        />
    </HlgSelect>
</template>
```

### 换行

🚨✅在单行元素的内容的之前和之后需要换行

以下标签除外：

`&lt;pre&gt;, &lt;textarea&gt;, &lt;a&gt;, &lt;abbr&gt;, &lt;audio&gt;, &lt;b&gt;, &lt;bdi&gt;, &lt;bdo&gt;, &lt;canvas&gt;, &lt;cite&gt;, &lt;code&gt;, &lt;data&gt;, &lt;del&gt;, &lt;dfn&gt;, &lt;em&gt;, &lt;i&gt;, &lt;iframe&gt;, &lt;ins&gt;, &lt;kbd&gt;, &lt;label&gt;, &lt;map&gt;, &lt;mark&gt;, &lt;noscript&gt;, &lt;object&gt;, &lt;output&gt;, &lt;picture&gt;, &lt;q&gt;, &lt;ruby&gt;, &lt;s&gt;, &lt;samp&gt;, &lt;small&gt;, &lt;span&gt;, &lt;strong&gt;, &lt;sub&gt;, &lt;sup&gt;, &lt;svg&gt;, &lt;time&gt;, &lt;u&gt;, &lt;var&gt;, &lt;video&gt;, &lt;li&gt;, &lt;route&gt;-link', &lt;template&gt;, &lt;button&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;`

eslint: [`vue/singleline-html-element-content-newline`](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)

```html
<template>
    <!-- good -->
    <div attr>
        content
    </div>

    <tr attr>
        <td>data</td>
        <td>data</td>
    </tr>

    <div attr>
        <!-- comment -->
    </div>

    <!-- bad -->
    <div attr>content</div>

    <tr attr><td>data</td><td>data</td></tr>

    <div attr><!-- comment --></div>
</template>
```

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

## 编辑器和代码配置

### VSCode

1. 安装插件
    - [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [CSScomb](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb)
    - [Sass](https://marketplace.visualstudio.com/items?itemName=syler.sass-indented) (可选)
    - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) (可选)
2. 修改编辑器配置

    ```json
    {
        "editor.tabSize": 4,                  // tab 为 4 个空格
        "emmet.triggerExpansionOnTab": true,  // 按下 tab 时展开 Emmet 缩写
        "vetur.completion.autoImport": false,
        "files.trimTrailingWhitespace": true, // 保存文件时删除文件末尾的空格
        "csscomb.formatOnSave": true,         // 保存文件时自动修复 CSScomb 问题
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true      // 保存文件时自动修复 Eslint 问题
        }
    }
    ```

[返回目录 ⏫](#%e7%9b%ae%e5%bd%95)

### 代码配置

1. 安装依赖

    ```bash
    npm install --save-dev eslint eslint-config-gaoding eslint-plugin-vue eslint-config-gaoding-vue
    ```

2. 在根目录创建一个 `.eslintrc` 文件，并输入以下内容：

    ```json
    {
        "env": {
            "browser": true,
            "node": true
        },
        "extends": [
            "gaoding",
            "gaoding-vue"
        ]
    }
    ```

3. 复制 [`.csscomb.json`](https://git.gaoding.com/devops/frontend-code-guide/blob/master/.csscomb.json) 配置至根目录。

## 相关文档

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Code Guide by @mdo](https://codeguide.co/)
- [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide)
- [Popular Coding Convention on Github](http://sideeffect.kr/popularconvention#javascript)
- [JavaScript Standard Style](https://standardjs.com/)
