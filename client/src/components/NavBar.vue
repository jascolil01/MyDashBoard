<template>
  <router-link to="/" name="HomePage">Home</router-link>
  <router-link to="/About" name="About">About</router-link>
  <router-link to="/Feed" name="Feed">Feed</router-link>
  <router-link v-if='id' :to="{ path: '/UserPage/' + this.id }" name="UserPage">UserPage</router-link>
  <router-link v-else to="/Register" name="Register">Register</router-link>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

  },
  props: {
    id: String
  },
  data: () => ({

  }),
  mounted: async function () {

  },
  methods: {

  }
}
</script>

<style></style>
