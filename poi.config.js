/*
 * @Author: 绿间
 * @Email: zhuowenligg@gmail.com
 * @Date: 2018-12-11 11:40:01
 */

const path = require('path');
const webpack = require('webpack');
const { distRoot } = require('./__build__/libs/utils');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        dir: distRoot,
        sourceMap: DEBUG,
        minimize: !DEBUG,
        fileNames: {
            js: '[name].[hash].js',
            css: '[name].[hash].css',
        },
        publicUrl: './',
    },
    css: {
        extract: !DEBUG,
    },
    assets: {
        inlineImageMaxSize: 5000,
    },
    configureWebpack: {
        mode: DEBUG ? 'development' : 'production',
        bail: !DEBUG,
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    loader: 'pug-plain-loader'
                },
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: 'vue-loader',
                            options: {
                                compilerOptions: {
                                    preserveWhitespace: false
                                }
                            }
                        },
                        {
                            loader: path.resolve(__dirname, './__build__/md-loader/index.js')
                        }
                    ]
                },
            ]
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.js',
            },
            extensions: ['.js', '.vue', '.json'],
        },
        optimization: {
            minimize: !DEBUG,
            runtimeChunk: false,
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: '(c)2019 huanleguang.com',
            }),
            new webpack.DefinePlugin({
                __DEBUG__: DEBUG,
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),
        ],
    }
};
