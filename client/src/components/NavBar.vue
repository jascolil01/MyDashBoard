<template>
  <router-link to="/" name="HomePage">Home</router-link>
  <router-link to="/About" name="About">About</router-link>
  <router-link to="/Feed" name="Feed">Feed</router-link>
  <router-link to="/UserPage/:userId" name="UserPage">UserPage</router-link>
  <router-link to="/About" name="About">About</router-link>
  <router-link to="/SignIn" name="SignIn">SignIn</router-link>
</template>

<script>


export default {
  name: 'NavBar',
  components: {

  }
}
</script>

<style></style>
