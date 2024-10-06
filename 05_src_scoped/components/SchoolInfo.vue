<template>
  <!--  组件的结构 html-->
  <div class="demo">
    <h2>学校姓名：{{ schoolName}}</h2>
    <h2>学校地址：{{ schoolAddress }}</h2>
  </div>
</template>

<script>


export default {
  name: 'SchoolInfo',
  data() {
    return {
      schoolName: "深圳雪像小学",
      schoolAddress: "深圳市区雪象花园新村",
    }
  },
  methods: {
    showName() {
      alert(this.schoolName)
    }
  }
};


</script>

<style scoped>
/* css 样式*/
.demo {
  background-color: orange;
}
</style>