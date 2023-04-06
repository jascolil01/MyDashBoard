<template>
  <div class="kaz">
    <div class="feed" @click='handleComment(post._id)' v-for="post in postData" :key="post._id">
      <h1>{{ post.name }}</h1>
      <p>{{ post.content }}</p>
      <div v-if="this.comment === true || post._id === this.postId">
        <div v-if="readComment && post._id === this.postId">
          <div v-for="comment in commentData" :key="comment._id">
            <h2>{{ comment.name }}</h2>
            <p>{{ comment.content }}</p>
            <div class='comment' v-if="this.userId === comment.userId" @click="handleDelete(comment._id)">Delete</div>
          </div>
        </div>
        <input class='input' v-if="comment && post._id === this.postId" :value="this.content"
          @input="$emit(this.content = $event.target.value)">
        <div class='comment' v-if="this.drake === false && post._id === this.postId" @click="handleClick(post._id)">Submit
        </div>
      </div>
      <div class='comment' v-if="drake" @click="handleClick(post._id)">add a comment</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/globals'

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
      const res = await axios.get(`${BASE_URL}/api/posts`)
      this.postData = res.data.posts
    },
    async getInfo() {
      const results = await axios.get(`${BASE_URL}/api/users/${this.$route.params.userid}`)
      this.name = results.data.user.name
      this.userId = results.data.user._id
    },
    async handleComment(x) {
      this.readComment = true
      this.postId = x
      const res = await axios.get(`${BASE_URL}/api/comment/by_postId/${x}`)
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
        await axios.post(`${BASE_URL}/api/comment`, data)
        this.postId = ''
        this.comment = false,
          this.content = '',
          this.drake = true
      }
    },
    async handleDelete(x) {
      await axios.delete(`${BASE_URL}/api/comment/delete_comment/${x}`)
      this.handleComment(this.postId)
    }
  }
}
</script>

<style>
.kaz {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.feed {
  display: flex;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 1px solid #45a29e;
  background-color: #1f2833;
}

.comment {
  cursor: pointer;
  background-color: #45a29e;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 20px;
}
</style>
