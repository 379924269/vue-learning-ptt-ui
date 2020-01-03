import Vue from 'vue'
import App from './App'

// 引入路由
import router from './router'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入normalize.css
import 'normalize.css'

// 引入mockjs  用于测试
import './mock.js'

// 引入store

import store from '@/store'
import Cookie from 'js-cookie'
// 引入表单验证
import './view/vee-validate.js'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('-------')
  let name = Cookie.get('name') || store.state.name
  if (name) {
    store.commit('loginIn', name)
    next()
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({name: 'Login'})
      store.commit('loginOut')
    }
  }
})

router.afterEach(() => {
})

// TODO 注意这里引入store 不然别的地方调用会出错
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
