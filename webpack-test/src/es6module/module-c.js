// 混合导入
//  同时有默认导出和 按需导出

const fn = function (x, y) {
    return x + y
}

const a = 100
const fn1 = function (x, y, z) {
    return x + y + z
}

// 按需导出
export {
    a, fn1
}

// 默认导出
export default {
    fn
}