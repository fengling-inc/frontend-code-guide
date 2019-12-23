/*
 * @Author: 绿间
 * @Email: zhuowenligg@gmail.com
 * @Date: 2018-12-11 11:48:49
 */

module.exports = {
    presets: [
        [
            '@babel/env',
            {
                corejs: 2,
                useBuiltIns: 'usage',
                targets: {
                    chrome: '40',
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import',
        'transform-vue-jsx',
    ],
    sourceType: 'unambiguous',
};
