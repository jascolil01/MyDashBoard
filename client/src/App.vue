<template>
  <NavBar :id="id" />
  <div class='button' @click="handleLogOut" v-if="token">Sign out</div>
  <div class='button' @click="signin = true" v-else>Click to sign in</div>
  <div class='button' @click="signin = false" v-if='token === null'>Hide sign in</div>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <Component :is="Component"></Component>
      </div>
    </transition>
  </router-view>
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
*,
*::after,
*::before {
  box-sizing: border-box;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in;
}

body {
  background-image: radial-gradient(#0b0c10, #1f2833);
  background-repeat: repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #c5c6c7
}

.button {
  width: fit-content;
  height: fit-content;
  background-color: #1f2833;
  border-radius: 10px;
  padding: .3vh;
  transition: ease-in .2s;
}

li {
  list-style: none;
}

.button:hover {
  color: #1f2833;
  background-color: transparent;
}
</style>
