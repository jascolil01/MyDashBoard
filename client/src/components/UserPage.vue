<template>
  <h1>Hi</h1>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'


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
      const res = await axios.get(`${BASE_URL}users/6421b9dc8f6804c90be72ce9`)
      console.log(res)
    }


  }
}
</script>

<style></style>
