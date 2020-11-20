<template>
  <div>
    <form>
      <legend>编辑英雄{{ $route.params.hero_id }}</legend>
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
      <button class="btn btn-primary" @click.prevent="hSave">提交</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
// 1. 根据id去获取当前要编辑的英雄的数据
export default {
  data() {
    return {
      heroName: "",
      gender: "",
    };
  },
  created() {
    this.loadHeroById();
  },
  methods: {
    hSave() {
      // 1. 验证用户输入
      const { heroName, gender } = this;
      if (heroName === "") {
        return;
      }
      axios({
        method: "PUT",
        url: "http://localhost:3000/heroes/" + this.$route.params.hero_id,
        data: {
          cTime: Date.now(),
          heroName,
          gender,
          id: this.$route.params.hero_id,
        },
      })
        .then((res) => {
          this.$router.push("/");
        })
        .catch((err) => {
          alert("修改失败");
        });
    },
    loadHeroById() {
      axios({
        method: "GET",
        url: "http://localhost:3000/heroes/" + this.$route.params.hero_id,
      }).then((res) => {
        this.heroName = res.data.heroName;
        this.gender = res.data.gender;
      });
    },
  },
};
</script>

<style>
</style>