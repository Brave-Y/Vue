/**
 1. 要放在项目的根目录下。
 2. 在npx webpack打包时，会自动去找这个文件，并运行其中的
    代码。如果找不到，则进入零配置模式 ---- 采用一些默认配置。
*/
// nodejs中一个核心模板

console.log('test--test--test....')
const path = require('path')
module.exports = {
    mode: 'production',
    entry: './src/js/index.js', // 入口
    output: {
        // 拼接一个绝对路由
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js'
    }
}