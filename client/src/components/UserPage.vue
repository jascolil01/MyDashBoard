<template>
  <h1 class="user" v-if="change" @dblclick="handleClean()" @click="change = false">{{ userInfo.name }}'s Dashboard</h1>
  <h1 class="user" v-else @click="change = true">{{ userInfo.username }}'s Dashboard</h1>
  <div class='button' v-if="clean" @click="clean = false">clear unused data</div>
  <div class="flex">
    <div class='button' @click="deleteUser">Delete user</div>
  </div>
  <div class="main">
    <div class="components">
      <BudgetPage :grabBudget="this.getBudget" :budgetData="this.budgetData" :userData="userInfo" />
    </div>

    <div class="components">
      <HobbyPage :userData="userInfo" :hobbyData="hobbyData" :grabHobby="this.getHobby" />
    </div>

    <div class="components">
      <ToDo :userData="userInfo" :todoData="todoData" :grabTodo="this.getTodo" />
    </div>

    <div class="components">
      <PostPage :userData="userInfo" :postData="postData" :grabPost="this.getPost" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PostPage from './PostPage.vue'
import HobbyPage from './HobbyPage.vue'
import { BASE_URL } from '@/globals'
import ToDo from './ToDo.vue'
import BudgetPage from './BudgetPage.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'UserPage',
  components: {
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
      const results = await axios.get(`${BASE_URL}/api/users/${route.params.id}`)
      this.userInfo = results.data.user
    },
    async getPost() {
      const res = await axios.get(`${BASE_URL}/api/posts/by_id/${this.userInfo._id}`)
      this.postData = res.data.post
    },
    async getTodo() {
      const res = await axios.get(`${BASE_URL}/api/todo/by_userId/${this.userInfo._id}`)
      this.todoData = res.data.todo
    },
    async getHobby() {
      const res = await axios.get(`${BASE_URL}/api/hobby/by_userId/${this.userInfo._id}`)
      this.hobbyData = res.data.hobby
    },
    async deleteUser() {
      await axios.delete(`${BASE_URL}/api/users/delete_user/${this.userInfo._id}`)
      this.$router.push('/')
    },
    async handleClean() {
      alert("Secrets")
      this.clean = true
    },
    async getBudget() {
      const res = await axios.get(`${BASE_URL}/api/budget/by_userId/${this.userInfo._id}`)
      this.budgetData = res.data.budget
    },



  }
}
</script>

<style>
.user {
  cursor: pointer;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 15px;
}

.components {
  background-image: linear-gradient(to bottom, #45a29e, #66fcf2cc, transparent);
  width: fit-content;
  height: fit-content;
  margin: 15px;
  border-radius: 100px;
  padding: 40px;
}
</style>