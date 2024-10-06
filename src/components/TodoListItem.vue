<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)">
      <span>{{ todo.title }}</span>
      <button class="btn btn-danger" style="display:none">删除</button>
    </label>
  </li>
</template>
<script>
export default {
  name: "TodoListItem",
  props: ['todo','checkTodo'],
  methods:{
    handleCheck(id){
      console.log(id)
      this.checkTodo(id)
    }
  }
}
</script>
<style scoped>

</style>