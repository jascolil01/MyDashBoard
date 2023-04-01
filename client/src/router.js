import { createWebHistory, createRouter } from "vue-router"
import AboutPage from './components/AboutPage.vue'
import FeedPage from './components/FeedPage.vue'
import UserPage from './components/UserPage.vue'
import HomePage from './components/HomePage.vue'
import RegisterPerson from './components/RegisterPerson.vue'



const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/About', component: AboutPage, name: 'About' },
  { path: '/Register', component: RegisterPerson, name: 'Register' },
  { path: '/Feed/:userid', component: FeedPage, name: 'Feed' },
  { path: '/UserPage/:id', component: UserPage, name: 'UserPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router