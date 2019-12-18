# 前端代码规范

本文档定义了 HTML、CSS、JavaScript 以及 Vue 的编写格式和风格规则。旨在促进协作编程、提高代码质量并使其支持基础架构。

## HTML

### 项目命名

全部采用小写方式，以中划线分隔。

> 例：project-name

### 目录命名

参照项目命名规则；

有复数结构时，要采用复数命名法。

> 例：scripts, assets, components, main-header

### 文件命名

参照项目命名规则；

> 例：index.html, test-data.js, error-report.sass, custom-component.vue

## HTML

### 实用为王

尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

### 语法

- 用**四个空格**来代替制表符（tab） — *这是唯一能保证在所有环境下获得一致展现的方法*。
- 嵌套元素应当缩进一次（即四个空格）。
- 对于属性的定义，永远全部使用双引号，绝对不要使用单引号。
- 属性名全小写，用中划线做分隔符。
- 不要在自闭合（self-closing）元素的尾部添加斜线 — [HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 中明确说明斜线是可忽略的。
- 不要省略可选的结束标签（closing tag）（例如，`</li>` 或 `</body>`）。

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

根据 HTML5 规范：

> 强烈建议为 html 根元素指定 `lang` 属性，从而为文档设置正确的语言。这将有助于语音合成工具确定其所应该采用的发音，有助于翻译工具确定其翻译时所应遵守的规则等等。

更多关于 `lang` 属性的知识可以从 [此规范](http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element) 中了解。Sitepoint 站点上 [给出了一份语言代码表](https://www.sitepoint.com/iso-2-letter-language-codes/)。

```html
<html lang="en">
    <!-- ... -->
</html>
```

### IE 兼容模式

IE 支持通过特定的 `<meta>` 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为 **edge mode**，从而通知 IE 采用其所支持的最新的绘制模式。

了解更多信息请 阅读这篇 [Stack Overflow](https://stackoverflow.com/questions/6771258/what-does-meta-http-equiv-x-ua-compatible-content-ie-edge-do) 上的文章。

### 属性顺序

HTML 属性应当按照以下给出的顺序依次排列，确保代码的易读性。

class
id, name
data-*
src, for, type, href, value
title, alt
role, aria-*
class 用于标识高度可复用组件，因此应该排在首位。id 用于标识具体组件，应当谨慎使用（例如，页面内的书签），因此排在第二位。

```html
<a class="..." id="..." data-toggle="modal" href="#">
    Example link
</a>

<input class="form-control" type="text">

<img src="..." alt="...">
```

### 布尔（boolean）型属性

布尔型属性可以在声明时不赋值。XHTML 规范要求为其赋值，但是 HTML5 规范不需要。

更多信息请参考 [WhatWG section on boolean attributes](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes)：

> 元素的布尔型属性如果有值，就是 true，如果没有值，就是 false。

如果一定要为其赋值的话，请参考 WhatWG 规范：

> 如果属性存在，其值必须是空字符串或 [...] 属性的规范名称，并且不要在首尾添加空白符。

**简单来说，就是不用赋值。**

```html
<input type="text" disabled>

<input type="checkbox" value="1" checked>

<select>
    <option value="1" selected>1</option>
</select>
```

### 减少标签的数量

编写 HTML 代码时，尽量避免多余的父元素。很多时候，这需要迭代和重构来实现。请看下面的案例：

```html
<!-- Not so great -->
<span class="avatar">
  <img src="...">
</span>

<!-- Better -->
<img class="avatar" src="...">
```

## JavaScript 生成的标签

通过 JavaScript 生成的标签让内容变得不易查找、编辑，并且降低性能。能避免时尽量避免。

## 参考

- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [Code Guide by @mdo](https://codeguide.co/)
- [Code Guide by @AlloyTeam](http://alloyteam.github.io/CodeGuide)
- [Popular Coding Convention on Github](http://sideeffect.kr/popularconvention#javascript)
