import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Goods from '../components/Goods.vue'
import Car from '../components/Car.vue'
import Order from '../components/Order.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', redirect: '/login'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Goods/:id',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/Car',
    name: 'Car',
    component: Car
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})
// 路由导航
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
