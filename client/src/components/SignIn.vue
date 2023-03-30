<template>
  <form>
    <input type="text" :value="this.email" @input="$emit(this.email = $event.target.value)">
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
