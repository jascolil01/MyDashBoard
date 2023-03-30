<template>
  <h1 v-if="change" @click="change = false">{{ userInfo.name }}'s Dashboard</h1>
  <h1 v-else @click="change = true">{{ userInfo.username }}'s Dashboard</h1>
  <button @click="deleteUser">Delete user</button>
  <div>
    <!-- <CalculatorPage /> -->
    <BudgetPage />
    <HobbyPage />
    <ToDo />
    <PostPage :userData="userInfo" :postData="postData" :test="this.getPost" />
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
// import { useRoute } from 'vue-router'
// import CalculatorPage from './CalculatorPage.vue
import PostPage from './PostPage.vue'
import HobbyPage from './HobbyPage.vue'
import ToDo from './ToDo.vue'
import BudgetPage from './BudgetPage.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'UserPage',
  components: {
    // CalculatorPage,
    PostPage,
    HobbyPage,
    ToDo,
    BudgetPage
  },
  data: () => ({
    userInfo: {},
    postData: {},
    change: true
  }),
  mounted: async function () {
    await this.getInfo()
    await this.getPost()

  },
  methods: {
    async getInfo() {
      let route = useRoute()
      const results = await axios.get(`${BASE_URL}users/${route.params.id}`)
      this.userInfo = results.data.user
    },
    async getPost() {
      const res = await axios.get(`${BASE_URL}posts/by_id/${this.userInfo._id}`)
      this.postData = res.data.post
    },
    async deleteUser() {
      await axios.delete(`${BASE_URL}users/delete_user/${this.userInfo._id}`)
      this.$router.push('/')
    }



  }
}
</script>

<style></style>
