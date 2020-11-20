<template>
  <div class="container">
    <my-header></my-header>
    <div class="col-md-2">
      <my-sideBar></my-sideBar>
    </div>
    <div class="col-md-10">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import MyHeader from "./components/header.vue";
import MySideBar from "./components/sideBar.vue";
export default {
  data() {
    return {
      msg: "单文件组件数据",
    };
  },
  //组件项
  components: {
    //组件名：对象
    "my-header": MyHeader,
    "my-sideBar": MySideBar,
  },
};
</script>
<style>
.red {
  color: red;
}
</style>
