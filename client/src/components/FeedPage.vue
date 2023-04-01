<template>
  <div @click='handleComment(post._id)' v-for="post in postData" :key="post._id">
    <h1>{{ post.name }}</h1>
    <p>{{ post.content }}</p>
    <div v-if="this.comment === true || post._id === this.postId">
      <div v-if="readComment && post._id === this.postId">
        <div v-for="comment in commentData" :key="comment._id">
          <h2>{{ comment.name }}</h2>
          <p>{{ comment.content }}</p>
          <button v-if="this.userId === comment.userId" @click="handleDelete(comment._id)">Delete</button>
        </div>
      </div>
      <input v-if="comment && post._id === this.postId" :value="this.content"
        @input="$emit(this.content = $event.target.value)">
      <button v-if="this.drake === false && post._id === this.postId" @click="handleClick(post._id)">Submit</button>
    </div>
    <button v-if="drake" @click="handleClick(post._id)">add a comment</button>

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
    postData: {},
    commentData: {},
    comment: false,
    drake: true,
    readComment: false,
    postId: '',
    name: '',
    content: '',
    userId: ''
  }),
  mounted: async function () {
    await this.getPosts()
    await this.getInfo()
  },
  methods: {
    async getPosts() {
      const res = await axios.get(`${BASE_URL}posts`)
      this.postData = res.data.posts
    },
    async getInfo() {
      const results = await axios.get(`${BASE_URL}users/${this.$route.params.userid}`)
      this.name = results.data.user.name
      this.userId = results.data.user._id
    },
    async handleComment(x) {
      this.readComment = true
      this.postId = x
      const res = await axios.get(`${BASE_URL}comment/by_postId/${x}`)
      this.commentData = res.data.comment
    },
    async handleClick(x) {
      if (this.drake) {
        this.postId = x
        this.comment = true
        this.drake = false
      } else {
        const data = {
          name: this.name,
          content: this.content,
          postId: this.postId,
          userId: this.userId
        }
        await axios.post(`${BASE_URL}comment`, data)
        this.postId = ''
        this.comment = false,
          this.drake = true
      }
    },
    async handleDelete(x) {
      await axios.delete(`${BASE_URL}comment/delete_comment/${x}`)
      this.handleComment(this.postId)
    }
  }
}
</script>

<style></style>
