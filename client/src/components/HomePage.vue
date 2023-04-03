<template>
  <div class="home">
    <h1>Welcome to MyDashBoard</h1>
    <p>This Application will allow you to keep track of some daily tasks like:</p>
    <ul>
      <li>ToDo lists</li>
      <li>Budgets</li>
      <li>Hobbies</li>
    </ul>
    <p>You can also make post and leave comments on other peoples posts!</p>
  </div>
</template>

<script>


export default {
  name: 'HomePage',
  components: {

  }
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 30px;
}
</style>
