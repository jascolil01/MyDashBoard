import { createWebHistory, createRouter } from "vue-router"
import AboutPage from './components/AboutPage.vue'
import BudgetPage from './components/BudgetPage.vue'



const routes = [
  { path: '/About', component: AboutPage, name: 'About' },
  { path: '/Budget/:id', component: BudgetPage, name: 'Budget' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router