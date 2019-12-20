/*
 * @Author: 绿间
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-01-10 11:04:50
 */

const { compileTemplate } = require('@vue/component-compiler-utils');
const cheerio = require('cheerio');
const compiler = require('vue-template-compiler');

function stripScript(content) {
    const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

function stripStyle(content) {
    const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
    return result && result[2] ? result[2].trim() : '';
}

// 编写例子时不一定有 template。所以采取的方案是剔除其他的内容
function stripTemplate(content) {
    content = content.trim();
    if (!content) {
        return content;
    }
    return content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim();
}

function pad(source) {
    return source
        .split(/\r?\n/)
        .map(line => `  ${line}`)
        .join('\n');
}

function genInlineComponentText(template, script) {
    // https://github.com/vuejs/vue-loader/blob/master/lib/loaders/templateLoader.js#L29
    const finalOptions = {
        source: `<div>${template}</div>`,
        filename: 'inline-component', // TODO：这里有待调整
        compiler
    };
    const compiled = compileTemplate(finalOptions);
    // tips
    if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(tip => {
            console.warn(tip);
        });
    }
    // errors
    if (compiled.errors && compiled.errors.length) {
        console.error(
            `\n  Error compiling template:\n${pad(compiled.source)}\n` +
            compiled.errors.map(e => `  - ${e}`).join('\n') +
            '\n'
        );
    }
    let demoComponentContent = `
    ${compiled.code}
  `;
    // todo: 这里采用了硬编码有待改进
    script = script.trim();
    if (script) {
        script = script.replace(/export\s+default/, 'const democomponentExport =');
    } else {
        script = 'const democomponentExport = {}';
    }
    demoComponentContent = `(function demo() {
    ${demoComponentContent}
    ${script}
    return {
        ...democomponentExport,
        render,
        staticRenderFns
    }
})()`;
    return demoComponentContent;
}

function encodeHtml(str){
    let s = "";
    if (str.length == 0) return "";

    s = str.replace(/&/g,"&gt;");
    s = s.replace(/</g,"&lt;");
    s = s.replace(/>/g,"&gt;");
    s = s.replace(/ /g,"&nbsp;");
    s = s.replace(/\'/g,"&apos;");
    s = s.replace(/\"/g,"&quot;");
    s = s.replace(/\n/g,"<br>");

    return s;
}

module.exports = {
    stripScript,
    stripStyle,
    stripTemplate,
    genInlineComponentText,
    encodeHtml,
    convert(str) {
        return str.replace(
            /(&#x)(\w{4});/gi,
            ($0) => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
        );
    },
    wrap(render) {
        return function() {
            return render.apply(this, arguments)
                .replace('<code v-pre class="', '<code class="hljs ')
                .replace('<code>', '<code class="hljs">');
        };
    },
    stripTags(str, tags) {
        const $ = cheerio.load(str, { decodeEntities: false });

        if (!tags || tags.length === 0) {
            return str;
        }

        tags = !Array.isArray(tags) ? [tags] : tags;
        let len = tags.length;

        while (len--) { // eslint-disable-line no-plusplus
            $(tags[len]).remove();
        }

        return $.html('body').replace(/<\/?body>/g, '');
    },
    fetchHtml(str, tag) {
        const $ = cheerio.load(str, { decodeEntities: false });
        if (!tag) return str;
        return $(tag).html();
    },
}
