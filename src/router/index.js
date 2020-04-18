import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subscribe-cards',
    name: 'SubscribeCards',
    component: () => import('../views/SubscribeCards.vue')
  },
  {
    path: '/project-cards',
    name: 'ProjectCards',
    component: () => import('../views/ProjectCards.vue')
  },
  {
    path: '/pricings',
    name: 'Pricings',
    component: () => import('../views/Pricings.vue')
  },
  {
    path: '/flow-messages',
    name: 'FlowMessages',
    component: () => import('../views/FlowMessages.vue')
  },
  {
    path: '/card-flow-messages',
    name: 'CardFlowMessages',
    component: () => import('../views/CardFlowMessages.vue')
  },
  {
    path: '/ar-permissions',
    name: 'ARPermissions',
    component: () => import('../views/ARPermissions.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
