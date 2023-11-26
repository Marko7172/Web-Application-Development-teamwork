import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SignUpPage from '../views/SignUpPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
