<template>
  <div v-for="post in postData" :key="post.id">
    <h1>{{ post.name }}</h1>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
import { BASE_URL } from '@/globals';
import axios from 'axios';
// import { useRoute } from 'vue-router';

export default {
  name: 'PostPage',
  components: {

  },
  data: () => ({
    postData: {},
    userId: '6421b9dc8f6804c90be72ce9'
  }),
  mounted: function () {
    this.getPost()
  },
  methods: {
    async getPost() {
      // const route = useRoute()
      console.log(this.userId)
      const res = await axios.get(`${BASE_URL}posts/by_id/${this.userId}`)
      console.log(res.data)
    }
  }
}
</script>

<style></style>
