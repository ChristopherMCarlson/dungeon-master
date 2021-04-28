import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/Start.vue'
import Characters from '../views/Characters.vue'
import Battle from '../views/Battle.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/battle',
    name: 'Battle',
    component: Battle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
