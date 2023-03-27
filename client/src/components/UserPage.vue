<template>
  <h1>{{ userInfo.name }}'s Dashboard</h1>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useRoute } from 'vue-router'

export default {
  name: 'UserPage',
  components: {

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
