/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-03-15 10:48:32
 */

const Config = require('markdown-it-chain');
const anchorPlugin = require('./plugin/anchor');
const containers = require('./plugin/containers');
const config = new Config();

config
    .options
    .html(true)
    .end()
    .plugin('anchor').use(anchorPlugin).end()
    .plugin('containers').use(containers).end();

const md = config.toMd();

module.exports = md;
