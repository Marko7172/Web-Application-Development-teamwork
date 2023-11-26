import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import AddPost from '../views/AddPost.vue'
import SignUpPage from '../views/SignUpPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/add',
    name: 'addpost',
    component: AddPost
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
