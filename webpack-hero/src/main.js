//入口文件
//引入跟组件
// import './style/bootstrap.css'
import app from './app.vue'
import Vue from 'vue'
//路由文件
import index from './pages/hero/index.vue'
import add from './pages/hero/add.vue'
import edit from './pages/hero/edit.vue'
import zb from './pages/zb/zb.vue'
import jn from './pages/jn/jn.vue'
//导入包
import VueRouter from 'vue-router'
//引用
Vue.use(VueRouter)
//创建路由对象
const router = new VueRouter({
    routes: [
        {//重定向
            path: '/',
            redirect: '/hero'
        },
        {
            path: '/hero',
            component: index,
        },
        {
            path: '/add',
            component: add,
        },
        {
            path: '/edit/:hero_id',
            component: edit,
        },
        //装备管理
        {
            path: '/zb',
            component: zb,
        },

        //技能管理
        {
            path: '/jn',
            component: jn,
        },

    ]
})
//挂在vue实例中
new Vue({
    router: router,
    //vue的配置项，名为render，值是函数
    // 功能： 把app这个组件手挂载到vue实例 ------ vue实例中就只一个根组件
    render: function (h) {
        return h(app)
    }
}).$mount('#app')

