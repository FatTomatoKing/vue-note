<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom">点我输出上方的 Dom 元素</button>

    <img src="./assets/logo.png" alt="logo">
    <SchoolInfo ref="sch"></SchoolInfo>
    <!--    <StudentInfo student-name="张三" :school-age="18"></StudentInfo>-->
    <StudentInfo student-name="张三" :school-age=18></StudentInfo>
  </div>
</template>

<script>

import SchoolInfo from "./components/SchoolInfo.vue";
import StudentInfo from "./components/StudentInfo.vue";

export default {
  name: 'App',
  data() {
    return {
      msg: '欢迎学习vue'
    }
  },
  components: {
    SchoolInfo, StudentInfo
  },
  methods: {
    showDom() {
      // html 对象
      console.log(this.$refs.title)
      // VueComponents 对象
      console.log(this.$refs.sch)
    }
  }
}
</script>
