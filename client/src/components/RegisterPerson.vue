<template>
  <h1>Register your user below</h1>
  <form @submit="handleSubmit">
    <h1>Username</h1>
    <input :value="this.username" @input="$emit(this.username = $event.target.value)" required />
    <h1>Name</h1>
    <input :value="this.name" @input="$emit(this.name = $event.target.value)" required />
    <h1>Email</h1>
    <input :value="this.email" @input="$emit(this.email = $event.target.value)" required />
    <h1>Salary</h1>
    <input type="number" :value="this.salary" @input="$emit(this.salary = $event.target.value)" required />
    <h1>Password</h1>
    <input :value="this.password" @input="$emit(this.password = $event.target.value)" required />
    <button type="submit">Click to register</button>
  </form>
</template>

<script>
import { RegisterUser } from '@/services/Auth';

export default {
  name: 'RegisterPerson',
  components: {

  },
  data: () => ({
    name: '',
    username: '',
    email: '',
    password: '',
    salary: null
  }),
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      await RegisterUser({
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        salary: parseInt(this.salary)
      }),
        this.name = '',
        this.username = '',
        this.email = '',
        this.password = '',
        this.salary = null
      this.$router.push('/')
    },
  }
}
</script>

<style></style>
