import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Layout from '../layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () => import('../view/Index.vue'),
          meta: {
            title: 'Index'
          }
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: () => import('../components/404.vue')
    }
  ]
})
