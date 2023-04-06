<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="hobby in hobbyData" :key="hobby._id">
        <div v-if="update && hobby._id === this.id">
          <input class='input' :placeholder="hobby.name" :value="this.updateContent"
            @input="$emit(this.updateContent = $event.target.value)" />
          <div class='button' @click="updateHobby(this.id)">Update Post</div>
        </div>
        <div v-else>
          <h3 class="hobby" @click="handleHID(hobby._id)">{{ hobby.name }}</h3>
        </div>
        <ul v-if="showItems && hobby._id === this.hId">
          <div v-for="item in itemData" :key="item._id">
            <div v-if="change && item._id === this.itemId">
              <input class='input' :placeholder="item.content" :value="itemUpdate"
                @input="$emit(this.itemUpdate = $event.target.value)" />
              <div class='button' @click="updateItem(item._id)">Click to Change</div>
            </div>
            <div v-else>
              <input class='input' @click="deleteItem(item._id)" type="checkbox" />
              <li @click="handleUpdate(item._id)">{{ item.content
              }}</li>
            </div>
          </div>
          <input class='input' placeholder="Add a task for this hobby" :value="mrStark"
            @input="$emit(this.mrStark = $event.target.value)" required>
          <div class="flex">
            <div class='button' @click="addItem()">Click to add an item</div>
          </div>
        </ul>
        <div class='button' @click="handleId(hobby._id), this.update = true">Change this item</div>
        <div class='button' @click="handleDelete(hobby._id)">Delete This Hobby</div>
        <div class='button' @click="this.showItems = false">Hide List</div>
      </li>
    </ul>
    <form @submit.prevent="addHobby">
      <input class='input' type="text" placeholder="Add new item" v-model="newHobby" required>
      <div class="flex">
        <button type='submit' class='button'>Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'

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
      showItems: false,
      change: false,
      itemUpdate: '',
      mrStark: '',
      itemId: ''
    };
  },
  mounted: async function () {
  },
  methods: {
    async addHobby() {
      let data = {
        name: this.newHobby,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}/api/hobby`, data)
      this.grabHobby()
      this.newHobbyd = ''
    },
    async getItem(x) {
      const res = await axios.get(`${BASE_URL}/api/item/by_hobbyId/${x}`)
      this.itemData = res.data.item
      this.grabHobby()
    },
    async updateHobby(x) {
      let data = {
        name: this.updateContent
      }
      await axios.put(`${BASE_URL}/api/hobby/update_hobby/${x}`, data)
      this.updateContent = ''
      this.update = false
      await this.grabHobby()
    },
    async handleDelete(x) {
      await axios.delete(`${BASE_URL}/api/hobby/delete_hobby/${x}`)
      await this.grabHobby()
    },
    handleId(id) {
      this.id = id
    },
    handleHID(id) {
      this.hId = id
      this.showItems = true
      this.getItem(id)
    },
    handleUpdate(x) {
      this.itemId = x
      this.change = true
    },
    async updateItem(x) {
      const data = {
        content: this.itemUpdate
      }
      await axios.put(`${BASE_URL}/api/item/update_item/${x}`, data)
      this.itemUpdate = ''
      this.change = false
      this.getItem(this.hId)
    },
    async addItem() {
      const data = {
        content: this.mrStark,
        hobbyId: this.hId
      }
      await axios.post(`${BASE_URL}/api/item`, data)
      this.getItem(this.hId)
      this.mrStark = ''
    },
    async deleteItem(x) {
      await axios.delete(`${BASE_URL}/api/item/delete_item/${x}`)
      this.getItem(this.hId)
    }
  }
};
</script> 

<style>
.hobby {
  cursor: pointer;
}
</style>