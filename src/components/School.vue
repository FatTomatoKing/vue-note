<script>
export default {
  name: "School.vue",
  methods:
}

const emit = defineEmits(['updateData', 'onChange'])

const sendToParent = () => {
  // 发送单个值
  emit('updateData', '要传递的值')

  // 发送多个值
  emit('onChange', {
    name: '张三',
    age: 18
  })
}
</script>

<template>
  <h1>这是一个学校</h1>
  <div>
    <button @click="sendToParent">发送到父组件</button>
  </div>
</template>

<style scoped>

</style>
