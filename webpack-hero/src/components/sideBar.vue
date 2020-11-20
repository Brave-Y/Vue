<template>
  <div class="row">
    <div class="list-group">
      <!-- <a href="#" class="list-group-item active">英雄列表</a>
      <a href="#" class="list-group-item">装备列表</a>
      <a href="#" class="list-group-item">技能列表</a> -->
      <router-link active-class="active" class="list-group-item" to="/hero"
        >英雄列表</router-link
      >
      <router-link active-class="active" class="list-group-item" to="/zb"
        >装备列表</router-link
      >
      <router-link active-class="active" class="list-group-item" to="/jn"
        >技能列表</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list-group-item.router-link-active,
.list-group-item.router-link-active:hover,
.list-group-item.router-link-active:focus {
  z-index: 2;
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
</style>