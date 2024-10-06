<template>
  <ul class="todo-main">
    <TodoListItem v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem" :checkTodo='checkTodo' :deleteTodo="deleteTodo"/>
  </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoListItem
  },
  props:['todoList','checkTodo',"deleteTodo"]
}
</script>
<style scoped>

</style>