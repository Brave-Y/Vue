<template>
  <div>
    <my-header></my-header>
    我是一个vue组件，第一次见面，就是永远！<br />
    <div class="red">必须有一个root（根）标签 {{ msg }}</div>
    <br />
    <hr />
    <my-logo></my-logo>
    <hr />
    拉拉
    <mylogo></mylogo>
  </div>
</template>
<script>
//1.导入一个组件
import myheader from "./components/header.vue";
import mylogo from "./components/logo.vue";
//2.使用组件
//(1).全局注册组件
// vue.component('xxx',myheader)
//(2)局部组件
//components: {
//    组件名：对象
//  "my-header": myheader,
// },
//3.使用组件
//在template中直接使用
export default {
  // 其他组件配置对象
  data() {
    return {
      msg: "单文件组件数据",
    };
  },
  //配置项，用来设置组件
  //在组建内部再次嵌套定义组件
  components: {
    //组件名：对象
    "my-header": myheader,
    "my-logo": mylogo,
    mylogo: mylogo,
  },
};
</script>
// 当前组件需要样式
<style>
.red {
  color: red;
}
</style>
