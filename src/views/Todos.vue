<template>
  <div>
    <h2>Ваш список дел</h2>
    <router-link to="/">На главную</router-link>
    <hr>
    <AddTodo
        @add-todo="addTodoAction"
    />
    <select v-model="filter">
      <option value="all">Все</option>
      <option value="completed">Готовые</option>
      <option value="not-completed">Неготовые</option>
    </select>
    <hr>
    <TodoList
        v-if="filteredTodos.length"
        :todos="filteredTodos"
        @remove-todo="removeTodoAction"
    />
    <p v-else>Список пуст!</p>
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
import TodoList from '@/components/TodoList'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    TodoList, AddTodo, Loader
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.allTodos
      }
      if (this.filter === 'completed') {
        return this.allTodos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.allTodos.filter(t => !t.completed)
      }
    },
    ...mapGetters(['allTodos'])
  },
  data(){
    return {
      filter: 'all',
    }
  },
  methods: {
    ...mapActions(['addTodoAction', 'removeTodoAction']),
  },
  name: 'App'
}
</script>