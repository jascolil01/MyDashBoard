<template>
  <NavBar :test="this.id" />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div :key="route.name">
        <Component :is="Component"></Component>
      </div>
    </transition>
  </router-view>
  <button @click="signin = true">Click to sign in</button>
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
    id: ''
  }),
  mounted: async function () {
    await this.CheckSession()
  },
  methods: {
    handleSubmit(value) {
      this.id = value
      console.log(this.id)
    },
    async CheckSession() {
      const user = await CheckSession()
      console.log(user)
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
