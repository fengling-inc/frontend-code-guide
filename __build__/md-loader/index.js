/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-03-15 10:49:04
 */

const cheerio = require('cheerio');
const md = require('./markdown');
const { encodeHtml } = require('./utils');


module.exports = function (source) {
    const content = md.render(source);
    const $ = cheerio.load(`<section class="content">${content}</section>`, {
        decodeEntities: false,
        xmlMode: false,
    });

    let isHeader = false;
    let isSection = false;
    let index = -1;
    const headers = [];
    const sections = [];

    $('.content').children().map((inx, el) => {
        if (el.type === 'tag' && el.name === 'h1') {
            headers.push(el);
            isHeader = true;
            return el;
        }
        if (el.type === 'tag' && el.name === 'h2') {
            sections.push(el);
            isSection = false;
            isHeader = false;
            index += 1;
            return el;
        }
        if (el.type === 'tag' && el.name === 'h3') {
            index += 1;
            isHeader = false;
            isSection = true;
            sections[index] = [el];
            return el;
        }

        if (isHeader) {
            headers.push(el);
            return el;
        }

        if (isSection) {
            sections[index].push(el);
            return el;
        }

        index += 1;
        sections.push(el);
    });

    let data = '';
    let headerHtml = '';

    headers.map(item => {
        headerHtml += $.html(item);
    });

    data += `<header>${headerHtml}</header>`;

    sections.map(item => {
        if (item.type === 'tag') {
            data += $.html(item);
            return item;
        }

        let section = ''
        let pre = '';

        item.map(el => {
            if (el.name === 'pre') {
                const code = $(el).find('code');
                pre += `<pre><code class="${code.attr('class')}">${encodeHtml(code.text())}</code></pre>`
                return el;
            }

            section += $.html(el);
        });

        data += `<section><div class="col">${section}</div>${pre ? `<div class="col">${pre}</div>` : ''}</section>`
    });

    return `<template><article class="content">${data}</article></template>`;
};