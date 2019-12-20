/*
 * Author: 绿间
 * Email: lvjian@huanleguang.com
 * Date: 2019-12-19 15:54:24
 */

import Vue from 'vue';
import hljs from 'highlight.js';
import VueRouter from 'vue-router';
import Promise, { resolve } from 'bluebird';
import App from './views/app.vue';
import 'highlight.js/styles/github.css';
import './stylesheet/app.scss';

Vue.use(VueRouter);

const component = r => r(require('../README.md'));
const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component,
        },
        {
            path: '/pages/devops/frontend-code-guide/',
            name: 'home',
            component,
        }
    ],
    mode: 'history',
});

router.afterEach((route, from) => {
    Vue.nextTick(async () => {
        const blocks = document.querySelectorAll('pre code:not(.hljs)');

        // 性能优化
        Promise.mapSeries(blocks, async el => hljs.highlightBlock(el));
    });
});

export default new Vue({
    router,
    mounted () {
        document.dispatchEvent(new Event('render-event'));
    },
    render: r => r(App)
}).$mount('#app');
