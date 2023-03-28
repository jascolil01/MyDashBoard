<template>
  <h1>{{ userInfo.name }}'s Dashboard</h1>
  <div>
    <!-- <CalculatorPage /> -->
    <BudgetPage />
    <HobbyPage />
    <ToDo />
    <PostPage />
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useRoute } from 'vue-router'
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
    userInfo: {}
  }),
  mounted: function () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      const route = useRoute()
      const res = await axios.get(`${BASE_URL}users/${route.params.userId}`)
      console.log(res.data.user)
      this.userInfo = res.data.user
    }


  }
}
</script>

<style></style>
