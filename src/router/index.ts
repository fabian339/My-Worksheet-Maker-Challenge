import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateWorkSheet from '@/components/CreateWorkSheet.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  {
    path: '/CreateWorkSheet',
    name: 'CreateWorkSheet',
    component: CreateWorkSheet
  }
]


const router = new VueRouter({
  routes
})

export default router
