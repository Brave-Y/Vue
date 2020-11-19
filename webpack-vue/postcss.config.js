const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        autoprefixer({
            // last 2 versions ： 浏览器最近的2版本
            // >1% 全球市场占有率在1%以上的浏览器
            overrideBrowserslist: ['last 2 versions', '> 1%']
        })
    ]
}