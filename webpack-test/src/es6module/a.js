// 创建一个模块

// 如何把es6module/a.js中的fn这个函数给main.js中去使用？

// const a = 100
function fn(x, y) {
    return x + y
}

// 导出模块中的fn
export { fn }