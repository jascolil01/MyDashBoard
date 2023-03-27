import { createWebHistory, createRouter } from "vue-router"
import AboutPage from './components/AboutPage.vue'
import BudgetPage from './components/BudgetPage.vue'
import CalculatorPage from './components/CalculatorPage.vue'
import CommentPage from './components/CommentPage.vue'
import FeedPage from './components/FeedPage.vue'
import HobbyPage from './components/HobbyPage.vue'
import PostPage from './components/PostPage.vue'
import SignIn from './components/SignIn.vue'
import ToDo from './components/ToDo.vue'
import UserPage from './components/UserPage.vue'



const routes = [
  { path: '/About', component: AboutPage, name: 'About' },
  { path: '/Budget/:userId', component: BudgetPage, name: 'Budget' },
  { path: '/Calculator', component: CalculatorPage, name: 'Calculator' },
  { path: '/Comment/:postId', component: CommentPage, name: 'Comment' },
  { path: '/Feed', component: FeedPage, name: 'Feed' },
  { path: '/Hobby/:userId', component: HobbyPage, name: 'Hobby' },
  { path: '/Post/:userId', component: PostPage, name: 'Post' },
  { path: '/SignIn', component: SignIn, name: 'SignIn' },
  { path: '/ToDo/:userId', component: ToDo, name: 'ToDo' },
  { path: '/UserPage', component: UserPage, name: 'UserPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router