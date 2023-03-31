<template>
  <NavBar :id="id" />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <Component :is="Component"></Component>
      </div>
    </transition>
  </router-view>
  <button @click="handleLogOut" v-if="token">Sign out</button>
  <button @click="signin = true" v-else>Click to sign in</button>
  <button @click="signin = false" v-if='token === null'>Hide sign in</button>
  <SignIn v-if="signin" @handleSubmit="handleSubmit" />
</template>

<script>
import { CheckSession } from './services/Auth';
import NavBar from './components/NavBar.vue';
import SignIn from './components/SignIn.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SignIn
  },
  data: () => ({
    signin: false,
    id: '',
    token: localStorage.getItem('token')
  }),
  mounted: async function () {
    if (this.token) {
      console.log("made it")
      await this.CheckSession()
    }
  },
  methods: {
    handleSubmit(value) {
      this.id = value
      this.signin = false
      this.token = localStorage.getItem('token')
    },
    async CheckSession() {
      const user = await CheckSession()
      this.id = user.id
    },
    handleLogOut() {
      this.token = null
      this.id = ''
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in;
}
</style>
