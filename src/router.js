import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('./views/Post.vue')
    },
    {
      path: '/category/:id',
      name: 'category',
      component: () => import('./views/CategoryPosts.vue')
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
