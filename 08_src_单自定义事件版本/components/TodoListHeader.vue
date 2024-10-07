<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称,按回车确认" v-model="title" @keyup.enter="add">
  </div>
</template>
<script>
import {nanoid} from "nanoid";

export default {

  name: "TodoListHeader",
  data() {
    return {
      'title': ''
    }
  },
  methods: {
    add() {
      if (!this.title.trim()) {
        return
      }
      const todoItem = {
        id: nanoid(),
        title: this.title,
        done: false
      }
      // 自定义事件 receive 是事件名称
      // 父级中 @receive 是 事件名称,addTodo 是方法名称,$emit 是发射的意思
      // 功能类似于java 的publish event <TodoListHeader @receive="addTodo"/>
      this.$emit("receive", todoItem)
      this.title = null
    }
  },
  props: []
}
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.075), 0 1px 8px rgba(82, 168, 255, 0.075);
}
</style>