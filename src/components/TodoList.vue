<template>
  <div>
    <ul>
      <TodoItem
          v-for="(todo, i) of todos"
          :todo="todo"
          :index="i"
          @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem'
export default {
  components: {
    TodoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  },
  props: ['todos']
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>