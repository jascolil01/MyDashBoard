<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="todo in todoData" :key="todo._id">
        <div v-if="update && todo._id === this.id">
          <input :placeholder="todo.content" :value="this.updateContent"
            @input="$emit(this.updateContent = $event.target.value)" />
          <button @click="updateTodo(this.id)">Update post</button>
        </div>
        <div v-else>
          <input @click="handleDelete(todo._id)" type="checkbox" v-model="todo.completed" />{{ todo.content }}
          <button @click="handleConsole(todo._id), this.update = true">Change this item</button>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="Add new item" v-model="newItem">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '../globals'


export default {
  name: 'ToDo',
  props: {
    userData: Object,
    todoData: Object,
    grabTodo: Function
  },
  data: () => ({
    title: 'Todo List',
    newItem: '',
    updateContent: '',
    update: false,
    id: ''
  }),
  methods: {
    async addItem() {
      const data = {
        content: this.newItem,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}todo`, data)
      await this.grabTodo()
      this.newItem = ''
    },
    async updateTodo(x) {
      console.log(x)
      let data = {
        content: this.updateContent
      }
      await axios.put(`${BASE_URL}todo/update_todo/${x}`, data)
      this.updateContent = ''
      this.update = false
      await this.grabTodo()
    },
    async handleDelete(x) {
      console.log(this.id)
      await axios.delete(`${BASE_URL}todo/delete_todo/${x}`)
      await this.grabTodo()
    },
    handleConsole(id) {
      this.id = id
    }
  }
};
</script>