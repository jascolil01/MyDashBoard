<template>
  <form @submit="handleSubmit">
    <h1>email</h1>
    <input type="email" :value="this.email" @input="$emit(this.email = $event.target.value)" required>
    <h1>password</h1>
    <input type="password" :value="this.password" @input="$emit(this.password = $event.target.value)" required>
    <div class='button' type="submit">Sign in</div>
  </form>
</template>

<script>
import { SignInUser } from '@/services/Auth';


export default {
  name: 'SignIn',
  components: {

  },
  props: {
    id: String
  },
  data: () => ({
    email: '',
    password: ''
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
      this.email = '',
        this.password = ''
      this.$router.push(`/UserPage/${payload._id}`)
      this.$emit('handleSubmit', payload._id)
    }
  }
}
</script>

<style></style>
