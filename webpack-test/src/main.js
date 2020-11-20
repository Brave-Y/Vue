//入口文件
//引入跟组件
import app from './app.vue'
console.log(app)
import vue from 'vue'
new vue({
    //vue的配置项，名为render，值是函数
    //功能：把app这个组件
    render: function (h) {
        return h(app)
    }
}).$mount('#app')




// //------------------------------------------导入a.js
// import { fn } from './es6module/a.js'
// console.log(fn(100, 200)) // 300


// //------------------------------------------导入module-a
// import obj from './es6module/module-a'
// console.log(obj) // {name: "模块A", attr: "属性"}


// //------------------------------------------导入module-b
// // 按需导入
// import { a, b } from './es6module/module-b'
// console.log(a, b)

// //------------------------------------------导入module-c
// // 有混合导入
// import obj, { fn1 } from './es6module/module-c.js'
// console.log(obj, fn1)

// //------------------------------------------导入module-d
// // index.js
// import { f2 as f1 } from "./es6module/module-d.js"
// console.log(f1)