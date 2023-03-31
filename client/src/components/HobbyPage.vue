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
          <!-- <input @click="handleDelete(hobby._id)" type="checkbox" /> -->
          <h3 @click="handleHID(hobby._id)">{{ hobby.name }}</h3>
        </div>
        <ul v-if="showItems && hobby._id === this.hId">
          <li v-for="item in itemData" :key="item._id">{{ item.content }}</li>
        </ul>
        <button @click="handleId(hobby._id), this.update = true">Change this item</button>
        <button @click="handleDelete(hobby._id)">Delete This Hobby</button>
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
      id: '',
      itemData: {},
      hId: '',
      showItems: false
    };
  },
  mounted: async function () {
  },
  methods: {
    async addItem() {
      let data = {
        name: this.newHobby,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}hobby`, data)
      this.grabHobby()
      this.newHobbyd = ''
    },
    async getItem(x) {
      const res = await axios.get(`${BASE_URL}item/by_hobbyId/${x}`)
      console.log(res.data.item)
      this.itemData = res.data.item
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
    },
    handleHID(id) {
      this.hId = id
      this.showItems = true
      this.getItem(id)
    }
  }
};
</script>