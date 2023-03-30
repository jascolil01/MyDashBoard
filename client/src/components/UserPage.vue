<template>
  <h1 v-if="change" @click="change = false">{{ userInfo.name }}'s Dashboard</h1>
  <h1 v-else @click="change = true">{{ userInfo.username }}'s Dashboard</h1>
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
// import CalculatorPage from './CalculatorPage.vue'
import PostPage from './PostPage.vue'
import HobbyPage from './HobbyPage.vue'
import ToDo from './ToDo.vue'
import BudgetPage from './BudgetPage.vue'

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
    await this.getUserInfo()
    await this.getPost()

  },
  methods: {
    async getUserInfo() {
      const res = await axios.get(`${BASE_URL}users/64246677e249cfe059e64997`)
      this.userInfo = res.data.user
    },
    async getPost() {
      const res = await axios.get(`${BASE_URL}posts/by_id/${this.userInfo._id}`)
      this.postData = res.data.post
    }



  }
}
</script>

<style></style>
