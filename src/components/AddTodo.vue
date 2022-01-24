<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <input type="date">
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit() {
      //console.log('Submit', this.title);
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
          status: 0
        }
        this.$emit('add-todo', newTodo);
        this.title = ''
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input {
  width: 400px;
}
</style>