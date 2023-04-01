<template>
  <label class="hamburger-menu"><input type="checkbox"></label>
  <div class="sidebar">
    <div class="parent">
      <div>
        <router-link to="/" name="HomePage">Home</router-link>
      </div>
      <div>
        <router-link to="/About" name="About">About</router-link>
      </div>
      <div>
        <router-link v-if='id' :to="{ path: '/Feed/' + this.id }" name="Feed">Feed</router-link>
      </div>
      <div v-if='id'>
        <router-link :to="{ path: '/UserPage/' + this.id }" name="UserPage">UserPage</router-link>
      </div>
      <div v-else>
        <router-link to="/Register" name="Register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  components: {

  },
  props: {
    id: String
  },
  data: () => ({

  }),
  mounted: async function () {

  },
  methods: {

  }
}
</script>

<style>
:root {
  --bar-width: 60px;
  --bar-height: 8px;
  --hamburger-gap: 6px;
  --foreground: #66fcf1;
  --background: #1f2833;
  --hamburger-margin: 20px;
  --animation-timing: 200ms ease-in-out;
  --hamburger-height: calc(var(--bar-height)*3 + var(--hamburger-gap)*2)
}

.hamburger-menu {
  --x-width: calc(var(--hamburger-height)* 1.41421356237);
  display: flex;
  flex-direction: column;
  gap: var(--hamburger-gap);
  width: max-content;
  position: absolute;
  top: var(--hamburger-margin);
  left: var(--hamburger-margin);
  z-index: 2;
  cursor: pointer
}

.parent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}

a {
  color: #c5c6c7;
  text-decoration: none;
  background-color: #1f2833;
  padding: 5px;
  border-radius: 10px;
}

.hamburger-menu:has(input:checked) {
  --foreground: #1f2833;
  --background: #66fcf1
}

.hamburger-menu::before,
.hamburger-menu::after,
.hamburger-menu input {
  content: "";
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: var(--foreground);
  border-radius: 20px;
  transform-origin: left center;
  transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing), background-color var(--animation-timing), ;
}

.hamburger-menu input {
  appearance: none;
  padding: 0;
  margin: 0;
  outline: none;
  pointer-events: none;
}

.hamburger-menu:has(input:checked)::before {
  rotate: 45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height)/-2);
}

.hamburger-menu:has(input:checked)::after {
  rotate: -45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height)/2);
}

.hamburger-menu input:checked {
  opacity: 0;
  width: 0;
}

.sidebar {
  border-radius: 20px;
  transition: translate var(--animation-timing);
  translate: -150%;
  padding: 0.5rem;
  padding-top: calc(var(--hamburger-height) + var(--hamburger-margin) + 0.002px);
  background-color: var(--foreground);
  color: var(--background);
  max-width: 180vh;
}

.hamburger-menu:has(input:checked)+.sidebar {
  translate: 0;
}
</style>
