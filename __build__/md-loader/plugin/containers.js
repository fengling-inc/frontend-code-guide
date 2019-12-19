/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-03-15 10:48:45
 */

const mdContainer = require('markdown-it-container');
const { convert, stripTags, fetchHtml } = require('../utils');

module.exports = md => {
    md.use(mdContainer, 'demo', {
        validate(params) {
            return params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

            if (tokens[idx].nesting === 1) {
                const description = m && m.length > 1 ? m[1] : '';
                const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
                const html = convert(stripTags(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                const script = fetchHtml(content, 'script');
                const style = fetchHtml(content, 'style');
                const jsfiddle = md.utils.escapeHtml(JSON.stringify({ html, script, style }));

                return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                    ${md.render(description)}
                    <!--element-demo: ${content}:element-demo-->
                `;
            }

            return '</demo-block>';
        }
    });

    md.use(mdContainer, 'tip');
    md.use(mdContainer, 'warning');
};