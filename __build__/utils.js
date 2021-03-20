/*
 * @Author: 卓文理
 * @Email: zhuowenligg@gmail.com
 * @Date: 2019-10-10 10:52:22
 */

const path = require('path');
const { execSync } = require('child_process');
const pkg = require('../package.json');

const DEBUG = !process.env.GIT_BRANCH;
const version = process.env.GIT_COMMIT || pkg.version;
const branch = (process.env.GIT_BRANCH || execSync('git symbolic-ref --short -q HEAD').toString()).trim();
const distRoot = path.join(__dirname, '../../__dist__');

module.exports = {
    DEBUG,
    branch,
    version,
    distRoot,
};
