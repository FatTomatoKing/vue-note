<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
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
  props: ['todos'],
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        if (current.done) {
          return pre + 1;
        } else {
          return pre;
        }
      }, 0)
    }
  }

}
</script>
<style scoped>

</style>