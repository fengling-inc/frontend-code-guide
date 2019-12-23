/**
 * Author: 绿间
 * Email: lvjian@huanleguang.com
 * Created: 2017-12-07 11:40:49
 * Modified By: 绿间
 */

'use strict';

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const pkg = require('../package.json');
const { branch } = require('./libs/utils');

// 编译输出目录
const DIST_PATH = path.join(__dirname, '..', '__dist__');
const CODE_PATH = path.join(__dirname, '..', 'lib');
const LOGO_PATH = path.join(__dirname, 'libs/logo.txt');
const isMaster = branch === 'master';

function uploadPackage() {
    console.log('开始同步：', CODE_PATH);

    return new Promise((resolve, reject) => {
        if (fs.existsSync(CODE_PATH) && isMaster) {
            childProcess.exec(`rsync -azv . cdn:/service/libcdn/package/hlg-ui@${pkg.version}/`, {
                cwd: CODE_PATH,
            }, (errors, e) => {
                if (errors) {
                    return reject(new Error());
                }
                console.log(e);
                console.log('同步完成：', CODE_PATH);

                resolve();
            });
        } else {
            resolve();
            console.log('无需同步：', CODE_PATH);
        }
    });
}

function uploadDist() {
    console.log('开始同步：', DIST_PATH);

    return new Promise((resolve, reject) => {
        if (fs.existsSync(DIST_PATH) && isMaster) {
            childProcess.exec('rsync -azv . cdn:/service/libcdn/hlgui/dist/', {
                cwd: DIST_PATH,
            }, (errors, e) => {
                if (errors) {
                    return reject(new Error());
                }
                console.log(e);
                console.log('同步完成：', DIST_PATH);
                resolve();
            });
        } else {
            resolve();
            console.log('无需同步：', DIST_PATH);
        }
    });
}

(async () => {
    await uploadPackage();
    await uploadDist();
    console.log(fs.readFileSync(LOGO_PATH, 'utf8'));
})();
