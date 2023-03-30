<template>
  <form @submit="handleSubmit">
    <h1>email</h1>
    <input type="text" :value="this.email" @input="$emit(this.email = $event.target.value)">
    <h1>password</h1>
    <input type="text" :value="this.password" @input="$emit(this.password = $event.target.value)">
    <button type="submit">Sign in</button>
  </form>
</template>

<script>
import { SignInUser } from '@/services/Auth';


export default {
  name: 'SignIn',
  components: {

  },
  data: () => ({
    email: '',
    password: '',
  }),
  mounted() {

  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      let payload = await SignInUser(data)
      console.log(payload)
      this.email = '',
        this.password = ''
      this.$router.push(`/UserPage/${payload._id}`)
    }
  }
}
</script>

<style></style>
