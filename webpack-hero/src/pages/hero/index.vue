<template>
  <div>
    <a href="#" class="btn btn-primary" @click.prevent="$router.push('/add')"
      >添加英雄</a
    >
    <!-- <router-link to="add" class="btn btn-primary">添加英雄</router-link> -->
    <hr />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="heroes.length > 0">
        <!-- 在循环中，通过key来区别一个tr与另外一个tr，一定要写
        key的是一般就是：数值或者是字符串，两个tr不同就好 -->
        <tr v-for="item in heroes" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.heroName }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.cTime }}</td>
          <td>
            <button
              class="btn btn-success"
              @click="$router.push('/edit/' + item.id)"
            >
              编辑
            </button>
            &nbsp;
            <button class="btn btn-danger" @click="hDel(item.id)">删除</button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5">数据为空呐</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//引入axios去发aja请求
import axios from "axios";
export default {
  data() {
    return {
      heroes: [],
    };
  },
  created() {
    this.loadHeros();
  },
  methods: {
    hDel(id) {
      if (confirm("你确定要删除吗")) {
        axios({
          method: "DELETE",
          url: "http://localhost:3000/heroes/" + id,
        })
          .then((res) => {
            // 3. 重新加载数据
            this.loadHeros();
          })
          .catch((res) => {
            alert("删除失败");
          });
      }
    },
    loadHeros() {
      axios({
        method: "get",
        url: "http://localhost:3000/heroes",
        // 参数....
      })
        .then((res) => {
          console.log("res", res);
          this.heroes = res.data;
        })
        .catch((err) => {
          this.heroes = [];
        });
    },
  },
};
</script>

<style>
</style>