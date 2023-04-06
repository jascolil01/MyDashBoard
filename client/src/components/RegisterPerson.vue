<template>
  <h1>Register your user below</h1>
  <form class="register" @submit="handleSubmit">
    <div class="inputs">
      <h1>Username</h1>
      <input class='input' :value="this.username" @input="$emit(this.username = $event.target.value)" required />
    </div>
    <div class="inputs">
      <h1>Name</h1>
      <input class='input' :value="this.name" @input="$emit(this.name = $event.target.value)" required />
    </div>
    <div class="inputs">
      <h1>Email</h1>
      <input class='input' :value="this.email" @input="$emit(this.email = $event.target.value)" required />
    </div>
    <div class="inputs">
      <h1>Salary</h1>
      <input class='input' type="number" :value="this.salary" @input="$emit(this.salary = $event.target.value)"
        required />
    </div>
    <div class="inputs">
      <h1>Password</h1>
      <input class='input' :value="this.password" @input="$emit(this.password = $event.target.value)" required />
    </div>

    <button class="button" type="submit">Click to Register</button>

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

<style>
.register {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
}

.inputs {
  width: fit-content;
  height: fit-content;
  padding: 10px;
}
</style>
