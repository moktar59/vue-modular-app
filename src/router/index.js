import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogRoutes from '../modules/blogs/routes'
import UserRoutes from '../modules/users/routes'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const defaultRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    component: NotFound
  }
]
const routes = [...BlogRoutes, ...UserRoutes, ...defaultRoutes]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...BlogRoutes, ...UserRoutes, ...defaultRoutes]
})

console.log('routes=', routes)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('accessToken')) {
      next({
        path: '/user/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      const userType = localStorage.getItem('userType')
      console.log('userType at localstorage=', userType)
      const userIsAdmin = userType === 'ADMIN'
      console.log('userIsAdmin=', userIsAdmin)

      if (to.matched.some(record => record.meta.isAdmin)) {
        if (userIsAdmin) {
          next()
        } else {
          console.log('userIsAdmin in else', userIsAdmin)
          next({
            path: '/notfound'
          })
        }
      } else {
        console.log('to.matched.some(record => record.meta.userIsAdmin) = ', to.matched.some(record => record.meta.userIsAdmin))
        next()
      }
    }
  } else {
    next()
  }
})

export default router
