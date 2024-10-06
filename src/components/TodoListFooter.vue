<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <input type="checkbox" :checked="isAll" @change="checkAll">
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span>/ 全部{{ todos.length }}
    </span>
    <button class='btn btn-danger'>清除已完成任务</button>
  </div>
</template>
<script>


export default {
  name: "TodoListFooter",
  props: ['todos',"checkAllTodo"],
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        if (current.done) {
          return pre + 1;
        } else {
          return pre;
        }
      }, 0)
    },
    isAll(){
      return this.doneTotal ===  this.todos.length
    }
  },
  methods:{
    checkAll(e){
      this.checkAllTodo(e.target.checked)
    }
  }

}
</script>
<style scoped>

</style>