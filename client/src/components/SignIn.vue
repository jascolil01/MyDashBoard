<template>
  <form>
    <h1>email</h1>
    <input type="text" :value="this.email" @input="$emit(this.email = $event.target.value)">
    <h1>password</h1>
    <input type="text" :value="this.password" @input="$emit(this.password = $event.target.value)">
  </form>
</template>

<script>


export default {
  name: 'SignIn',
  components: {

  },
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
  }
}
</script>

<style></style>
