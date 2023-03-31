<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="hobby in hobbyData" :key="hobby._id">
        <div v-if="update && hobby._id === this.id">
          <input :placeholder="hobby.name" :value="this.updateContent"
            @input="$emit(this.updateContent = $event.target.value)" />
          <button @click="updateHobby(this.id)">Update post</button>
        </div>
        <div v-else>
          <input @click="handleDelete(hobby._id)" type="checkbox" />{{ hobby.name }}
          <button @click="handleId(hobby._id), this.update = true">Change this item</button>
        </div>
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="Add new item" v-model="newHobby">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals';

export default {
  name: 'HobbyPage',
  props: {
    userData: Object,
    hobbyData: Object,
    grabHobby: Function
  },
  data() {
    return {
      title: 'Hobby Tracker',
      newHobby: '',
      updateContent: '',
      update: false,
      id: ''
    };
  },
  methods: {
    async addItem() {
      let data = {
        name: this.newHobby,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}hobby`, data)
      this.newItem = ''
      this.grabHobby()
    },
    async updateHobby(x) {
      let data = {
        name: this.updateContent
      }
      await axios.put(`${BASE_URL}hobby/update_hobby/${x}`, data)
      this.updateContent = ''
      this.update = false
      await this.grabHobby()
    },
    async handleDelete(x) {
      await axios.delete(`${BASE_URL}hobby/delete_hobby/${x}`)
      await this.grabHobby()
    },
    handleId(id) {
      this.id = id
    }
  }
};
</script>