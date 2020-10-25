import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from '../views/personal.vue'
import Order from '../views/order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
