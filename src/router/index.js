import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/index.vue'
import CharacterCard from '../pages/CharacterCard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/card/:id',
    name: 'card',
    component: CharacterCard
  }
]

const router = new VueRouter({
  routes
})

export default router
