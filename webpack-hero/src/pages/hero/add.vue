<template>
  <div>
    <form>
      <legend>添加英雄{{ $route.params.hero_id }}</legend>
      <div class="form-group">
        <label>英雄名称</label>
        <input type="text" v-model.trim="heroName" class="form-control" />
      </div>
      <div class="form-group">
        <label>英雄性别</label>
        <div>
          <input type="radio" value="男" v-model="gender" /> 男
          <input type="radio" value="女" v-model="gender" /> 女
        </div>
      </div>
      <button class="btn btn-primary" @click.prevent="hAdd">提交</button>
    </form>
  </div>
</template>

<script>
// 引入axios去发ajax请求
import axios from "axios";
export default {
  data() {
    return {
      heroName: "",
      gender: "女",
    };
  },
  methods: {
    hAdd() {
      const { heroName, gender } = this;
      // 1. 校验用户的输入
      if (heroName === "") {
        return;
      }
      // 2. 发请求
      axios({
        method: "POST",
        url: "http://localhost:3000/heroes",
        data: {
          cTime: Date.now(),
          heroName,
          gender,
        },
      })
        .then((res) => {
          // 3. 添加成功，要回到主页
          this.$router.push("/");
        })
        .catch((err) => {
          //    添加失败要给提示
          alert("你添加失败了");
        });
    },
  },
};
</script>


<style>
</style>