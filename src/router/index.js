import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import MyProjects from '../views/MyProjects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: AboutMe
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
    path: '/projects',
    name: 'MyProjects',
    component: MyProjects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
