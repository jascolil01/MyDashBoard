<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="todo in todoData" :key="todo._id">
        <div v-if="update && todo._id === this.id">
          <input class='input' :placeholder="todo.content" :value="this.updateContent"
            @input="$emit(this.updateContent = $event.target.value)" />
          <div class='button' @click="updateTodo(this.id)">Update Post</div>
        </div>
        <div v-else>
          <input class='input' @click="handleDelete(todo._id)" type="checkbox" />{{ todo.content }}
          <div class='button' @click="handleId(todo._id), this.update = true">Change this item</div>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input class='input' type="text" placeholder="Add new item" v-model="newItem">
      <button class='button'>Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'
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
      await axios.post(`${BASE_URL}/api/todo`, data)
      await this.grabTodo()
      this.newItem = ''
    },
    async updateTodo(x) {
      let data = {
        content: this.updateContent
      }
      await axios.put(`${BASE_URL}/api/todo/update_todo/${x}`, data)
      this.updateContent = ''
      this.update = false
      await this.grabTodo()
    },
    async handleDelete(x) {
      await axios.delete(`${BASE_URL}/api/todo/delete_todo/${x}`)
      await this.grabTodo()
    },
    handleId(id) {
      this.id = id
    }
  }
};
</script>
<style>
.button {
  color: #c5c6c7
}
</style>