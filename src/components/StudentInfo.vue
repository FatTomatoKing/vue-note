<template>
  <!--  组件的结构 html-->
  <div class="demo">
    <h2>消息：{{ msg }}</h2>
    <h2>学生姓名：{{ studentName }}</h2>
    <h2>学生年龄：{{ schoolAge + 1 }}</h2>
  </div>
</template>

<script>
/* 组件的数据,方法 js*/

export default {
  name: 'StudentInfo',
  // props: ['studentName', 'schoolAge']
  props:{
    studentName:{
      type: String,
      required: true
    },
    schoolAge:{
      type:Number,
      default:18,
      required: false
    }
  },
  data() {
    return {
      // studentName: "小明",
      // schoolAge: "13",
      msg: "瓜娃子"
    }
  },

};


</script>

<style>
/* css 样式*/
.demo {
  background-color: orange;
}
</style>