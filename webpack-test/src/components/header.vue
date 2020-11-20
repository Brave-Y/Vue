<template>
  <div>
    vscode中的veter插件帮助我们写.vue文件
    <br />
    <hr />
    <my-logo></my-logo>
    <hr />
  </div>
</template>

<script>
//1.导入组件
import mylogo from "./logo.vue";
//2.注册组件
//在试图中使用
export default {
  components: {
    //注册组件
    "my-logo": mylogo,
  },
};
</script>

<style>
</style>