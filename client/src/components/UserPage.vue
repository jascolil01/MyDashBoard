<template>
  <h1>{{ userInfo._id }}'s Dashboard</h1>
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
    userInfo: {}
  }),
  mounted: function () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo() {
      // const route = useRoute()
      const res = await axios.get(`${BASE_URL}users/6421b9dc8f6804c90be72ce9`)
      this.userInfo = res.data.user
    }


  }
}
</script>

<style></style>
