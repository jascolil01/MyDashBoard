<template>
  <h2>{{ title }}</h2>
  <div v-for="post in postData" :key="post.id">
    <h1>{{ post.name }}</h1>
    <div v-if="update">
      <input class='input' :placeholder=post.content :value='updatePostContent'
        @input="$emit(this.updatePostContent = $event.target.value)" />
      <div class='button' @click="updatePost(post._id)">Update Post</div>
    </div>
    <p class="post" v-else @click="update = true">{{ post.content }}</p>
    <div class="flex">
      <div class='button' @click="deletePost(post._id)">Delete Post</div>
    </div>
  </div>
  <form @submit.prevent="makePost()">
    <input class='input' placeholder="write out a post here" :value="postContent"
      @input="$emit(this.postContent = $event.target.value)" />
    <button class="button" type="submit">Click here to post it</button>
  </form>
</template>

<script>

import axios from 'axios';
import { BASE_URL } from '@/globals'

export default {
  name: 'PostPage',
  components: {

  },
  props: {
    userData: Object,
    postData: Object,
    grabPost: Function
  },
  data: () => ({
    title: "Posts",
    postContent: '',
    update: false,
    updatePostContent: ''

  }),
  mounted: async function () {

  },
  methods: {
    async makePost() {
      const data = {
        name: this.userData.name,
        content: this.postContent,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}/api/posts`, data)
      this.postContent = ''
      await this.grabPost()
    },
    async deletePost(x) {
      await axios.delete(`${BASE_URL}/api/posts/delete_post/${x}`)
      await this.grabPost()
    },
    async updatePost(x) {
      const data = {
        name: this.userData.name,
        content: this.updatePostContent,
        userId: this.userData._id
      }
      await axios.put(`${BASE_URL}/api/posts/update_post/${x}`, data)
      this.update = false
      await this.grabPost()
    }
  }
}
</script>

<style>
.post {
  cursor: pointer;
}
</style>
