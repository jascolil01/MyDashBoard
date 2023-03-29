<template>
  <div v-for="post in postData" :key="post._id">
    <h1>{{ post.name }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals';


export default {
  name: 'FeedPage',
  components: {

  },
  data: () => ({
    postData: {}
  }),
  mounted: async function () {
    await this.getPosts()
  },
  methods: {
    async getPosts() {
      const res = await axios.get(`${BASE_URL}posts`)
      this.postData = res.data.posts
    }
  }
}
</script>

<style></style>
