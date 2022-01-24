export default {
    actions: {
        addTodoAction({ commit }, todo) {
            commit("addTodo", todo);
        },
        removeTodoAction({ commit }, id) {
            commit("removeTodo", id);
        }
    },
    getters: {
        allTodos: (state) => state.todos,
    },
    mutations: {
        addTodo(state, payload) {
            state.todos.push(payload)
        },
        removeTodo(state, id) {
            state.todos = state.todos.filter(t => t.id !== id)
        }
    },
    state: {
        todos: [
            // status: 0 - создана, 1 - удалена, 2 - просрочена
            {id: 1, title: 'Программировать', completed: false, status: 0, date: new Date(2022, 0, 15, 2, 3, 4, 567)},
            {id: 2, title: 'Программировать больше', completed: false, status: 1, date: new Date(2022, 0, 16, 2, 3, 4, 567)},
            {id: 3, title: 'Отдыхать', completed: false, status: 2, date: new Date(2022, 0, 17, 2, 3, 4, 567)}
        ]
    }
}