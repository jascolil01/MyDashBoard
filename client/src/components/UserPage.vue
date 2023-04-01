<template>
  <h1 v-if="change" @dblclick="handleClean()" @click="change = false">{{ userInfo.name }}'s Dashboard</h1>
  <h1 v-else @click="change = true">{{ userInfo.username }}'s Dashboard</h1>
  <button v-if="clean" @click="clean = false">clear unused data</button>
  <button @click="deleteUser">Delete user</button>
  <div>
    <!-- <CalculatorPage /> -->
    <BudgetPage :grabBudget="this.getBudget" :budgetData="this.budgetData" :userData="userInfo" />
    <HobbyPage :userData="userInfo" :hobbyData="hobbyData" :grabHobby="this.getHobby" />
    <ToDo :userData="userInfo" :todoData="todoData" :grabTodo="this.getTodo" />
    <PostPage :userData="userInfo" :postData="postData" :grabPost="this.getPost" />
  </div>
</template>

<script>
import axios from 'axios'
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
    todoData: {},
    hobbyData: {},
    budgetData: {},
    change: true,
    clean: false
  }),
  mounted: async function () {
    await this.getInfo()
    await this.getPost()
    await this.getTodo()
    await this.getHobby()
    await this.getBudget()

  },
  methods: {
    async getInfo() {
      let route = useRoute()
      const results = await axios.get(`/api/users/${route.params.id}`)
      this.userInfo = results.data.user
    },
    async getPost() {
      const res = await axios.get(`/api/posts/by_id/${this.userInfo._id}`)
      this.postData = res.data.post
    },
    async getTodo() {
      const res = await axios.get(`/api/todo/by_userId/${this.userInfo._id}`)
      this.todoData = res.data.todo
    },
    async getHobby() {
      const res = await axios.get(`/api/hobby/by_userId/${this.userInfo._id}`)
      this.hobbyData = res.data.hobby
    },
    async deleteUser() {
      await axios.delete(`/api/users/delete_user/${this.userInfo._id}`)
      this.$router.push('/')
    },
    async handleClean() {
      alert("Secrets")
      this.clean = true
    },
    async getBudget() {
      const res = await axios.get(`/api/budget/by_userId/${this.userInfo._id}`)
      this.budgetData = res.data.budget
    },



  }
}
</script>

<style></style>
