<template>
  <li>
    <span :class="{done: todo.completed}">
      <input type="checkbox" v-model="todo.completed"/>
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    }
  },
  props: {
    index: Number,
    todo: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>
input {
  margin-right: 1rem;
}

li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.done {
  text-decoration: line-through;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}
</style>