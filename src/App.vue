<template>
  <div id="root">
    <div class="todo-container">
      <TodoListHeader :receive="addTodo"/>
      <TodoList :todoList="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
      <TodoListFooter :todos="todos"/>

    </div>
  </div>
</template>

<script>

import TodoListFooter from "@/components/TodoListFooter.vue";
import TodoListHeader from "@/components/TodoListHeader.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {
          'id': '001',
          'title': '吃饭',
          'done': true
        },
        {
          'id': '002',
          'title': '睡觉',
          'done': false
        }
        ,
        {
          'id': '003',
          'title': '打豆豆',
          'done': false
        }
      ]
    }
  },
  components: {
    TodoListFooter, TodoListHeader, TodoList
  },
  methods: {
    addTodo(todoItem){
      this.todos.unshift(todoItem)
    },
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if (todo.id === id){
          todo.done = !todo.done
        }
      })
    },
    deleteTodo(id){
      this.todos= this.todos.filter((todo)=>{
        return todo.id !== id
      })
    }

  }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.075);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #da4f49;
}

.btn-danger :hover {
  color: #fff;
  background-color: #da4f49;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>