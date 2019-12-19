/**
 * @author: 卓文理
 * @email : 531840344@qq.com
 * @desc  : Description
 */
'use strict';

const users = {
    lvjian: '绿间',
    cancan: '灿灿',
    jiangyou: '酱油',
    yaoxi: '耀西',
    yuguang: '余光',
    haimian: '海绵',
    fengling: '风铃',
    jieping: '截屏',
}

module.exports = (name) => {
    if (users[name]) {
        return users[name];
    }
    return name;
};
