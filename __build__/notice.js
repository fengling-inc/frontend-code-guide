/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-10-10 18:15:36
 */
/* eslint-disable max-len */

const axios = require('axios');
const exec = require('./libs/exec');
const getUser = require('./libs/get-user');
const { branch } = require('./libs/utils');
const { version } = require('../package.json');
const dingTalkAccessToken = 'f398f569db8ea716ef1c5032a5779748089b31280ab9a19f7c8e9702d353f092';
// const dingTalkAccessToken = '9dfdefea009a0838b4f1c5d86d3a5cc53944d43e4737bd8610ee4f856ee8e00b';
const githubAccessToken = '7f5a0f355edfe413aad48c901418ad10325f1a32';

async function notice() {
    if (!/master/.test(branch)) return;

    let text = `## HLGUI 发布提醒\n`;
    const log = await exec('git log -1');

    if (/ Merge pull request #(\d+)/.test(log)) {
        const id = RegExp.$1;

        const repo = await axios.get(`https://git.gaoding.com/api/v3/repos/hlg/ui/pulls/${id}?access_token=${githubAccessToken}`)
            .then(res => res.data);

        text += `
### [\#${id} ${repo.title}](https://git.gaoding.com/hlg/ui/pull/${id})\n
> 版本：${version}\n
> 开发：${getUser(repo.user.login)}\n
> 分支：${repo.head.ref}\n

&nbsp;
${repo.body ? `${repo.body}\n&nbsp;` : ''}

[查看版本变更记录](https://git.gaoding.com/hlg/ui/releases)
`;
    } else {
        const author = log.match(/Author: ([^\n]+)/mg) && RegExp.$1;
        const content = log.split(/Date: ([^\n]+)/mg)[2].trim();
        text += `
> 版本：${version}\n
> 开发：${author}\n
> 分支：${branch}\n
${content ? `\n\n&nbsp;\n${content}` : ''}`;
    }

    try {
        await axios({
            method: 'post',
            url: `https://oapi.dingtalk.com/robot/send?access_token=${dingTalkAccessToken}`,
            data: {
                "msgtype": "markdown",
                "markdown": {
                    "title":"HLGUI 发布提醒",
                    "text": text
                },
            },
        });
    } catch (e) {
        console.log(text);
        console.error('消息提醒失败!');
        console.error(e);
        process.exit(1);
        throw e;
    }
}

notice();
