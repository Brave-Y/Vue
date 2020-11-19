/**
 1. 要放在项目的根目录下。
 2. 在npx webpack打包时，会自动去找这个文件，并运行其中的
    代码。如果找不到，则进入零配置模式 ---- 采用一些默认配置。
*/
// nodejs中一个核心模板

console.log('test--test--test....');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清空文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {

    mode: 'development',
    devtool: 'cheap-module-source-map',

    entry: './src/js/main.js',// 入口
    output: {
        // 拼接一个绝对路由
        path: path.join(__dirname, '/build'), //出口文件位置
        filename: 'bundle.js' //出口名字
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin({
                parallel: 4,
                extractComments: true,
                terserOptions: {
                    compress: {
                        warnings: false,
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },
    devServer: {
        host: '127.0.0.1',  // 配置启动ip地址
        port: 10088,  // 配置端口
        open: true  // 配置是否自动打开浏览器
    },
    //配置css
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },

        {

            test: /\.less$/,
            use: ['style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
                {

                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }

            ]
        }

            ,
        {

            test: /\.woff$/,
            use: {

                loader: 'file-loader',
                options: {
                    // [name]: 这里[]表示里面放一个占位符。name就是要处理的文件名
                    // [ext]:  这里[]表示里面放一个占位符。ext就是要处理的文件后缀名
                    name: '[name].[ext]',
                    outputPath: './fonts'
                }
            }

            ,
        }

            ,
        {

            test: /\.(png|svg|jpg)$/,
            // jpg
            use: {

                loader: 'url-loader',
                // url-loader是增强版的file-loader
                // 如果图片小于指定的大小，则会转成base64,否则就调用file-loader进行拷贝
                options: {
                    limit: 3 * 1024, // 如果图片小于3k就转成base64,否则就直接拷贝
                    name: '[name].[ext]',
                    outputPath: './img' // 它会在出口文件夹下创建一个msg文件夹来保存图片
                }
            }
        }

            ,
        {

            test: /\.js$/,
            exclude: /node_modules/,
            // 排除目录，通知webpack不要管这个目录下的js
            use: [{

                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }

            ] // es6转es5
        }

            ,

        ],
    }

    ,
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        },
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),
            new HtmlWebpackPlugin({
                minify: { // 压缩HTML文件
                    removeComments: true, // 移除HTML中的注释
                    collapseWhitespace: true, // 删除空白符与换行符
                    minifyCSS: true// 压缩内联css
                },
                filename: 'index.html',
                // path.resolve()就是转成绝对路径
                template: path.resolve('./src/index.html') // 指定模块的位置
            })

        )]
}