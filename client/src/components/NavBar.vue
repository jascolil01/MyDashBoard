<template>
  <router-link to="/" name="HomePage">Home</router-link>
  <router-link to="/About" name="About">About</router-link>
  <router-link to="/Feed" name="Feed">Feed</router-link>
  <router-link v-if='test' :to="{ path: '/UserPage/' + this.test }" name="UserPage">UserPage</router-link>
  <router-link to="/About" name="About">About</router-link>
  <router-link to="/SignIn" name="SignIn">SignIn</router-link>
  <router-link to="/Register" name="Register">Register</router-link>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

  },
  data: () => ({
    test: '6424d8b86218f3b9f1eecce1'
  })
}
</script>

<style></style>
