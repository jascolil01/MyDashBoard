import { createWebHistory, createRouter } from "vue-router"
import AboutPage from './components/AboutPage.vue'
import CommentPage from './components/CommentPage.vue'
import FeedPage from './components/FeedPage.vue'
import SignIn from './components/SignIn.vue'
import UserPage from './components/UserPage.vue'
import HomePage from './components/HomePage.vue'
import RegisterPerson from './components/RegisterPerson.vue'



const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/About', component: AboutPage, name: 'About' },
  { path: '/Register', component: RegisterPerson, name: 'Register' },
  { path: '/Comment/:postId', component: CommentPage, name: 'Comment' },
  { path: '/Feed', component: FeedPage, name: 'Feed' },
  { path: '/SignIn', component: SignIn, name: 'SignIn' },
  { path: '/UserPage', component: UserPage, name: 'UserPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router