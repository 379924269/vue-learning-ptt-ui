import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login'
import Layout from '../layout/Layout.vue'

Vue.use(Router)

export const menus = [

]

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: '/home',
          component: () => import('../view/Home.vue'),
          meta: {
            title: '主页'
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
