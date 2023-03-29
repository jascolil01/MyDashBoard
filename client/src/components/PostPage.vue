<template>
  <div v-for="post in postData" :key="post.id">
    <h1>{{ post.name }}</h1>
    <div v-if="update">
      <input :placeholder=post.content :value='updatePostContent' @input="handleChangeU" />
      <button @click="updatePost(post._id)">Update post</button>
    </div>
    <p v-else @click="update = true">{{ post.content }}"click on me to update"</p>
    <button @click="deletePost(post._id)">Delete Post</button>
  </div>
  <form @submit.prevent="makePost()">
    <input placeholder="write out a post here" :value="postContent" @input="handleChange" />
    <button type="submit">Click here to post it</button>
  </form>
</template>

<script>
import { BASE_URL } from '@/globals';
import axios from 'axios';

export default {
  name: 'PostPage',
  components: {

  },
  props: {
    userData: Object,
    postData: Object,
    test: Function
  },
  data: () => ({
    // userId: '6421b9dc8f6804c90be72ce9',
    postContent: '',
    update: false,
    updatePostContent: ''

  }),
  mounted: async function () {

  },
  methods: {
    handleChange(event) {
      this.postContent = event.target.value
    },
    handleChangeU(event) {
      this.updatePostContent = event.target.value
    },
    async makePost() {
      const data = {
        name: this.userData.name,
        content: this.postContent,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}posts`, data)
      this.postContent = ''
      await this.test()
    },
    async deletePost(x) {
      await axios.delete(`${BASE_URL}posts/delete_post/${x}`)
      await this.test()
    },
    async updatePost(x) {
      console.log(this.updatePostContent)
      const data = {
        name: this.userData.name,
        content: this.updatePostContent,
        userId: this.userData._id
      }
      await axios.put(`${BASE_URL}posts/update_post/${x}`, data)
      this.update = false
      await this.test()
    }
  }
}
</script>

<style></style>
