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
import VeeValidate, {Validator} from 'vee-validate'

// 汉化表单验证
import zhCN from 'vee-validate/dist/locale/zh_CN'

Validator.localize('zh_CN',
  zhCN)

Vue.use(VeeValidate, {
  fieldsBagName: 'vee-fields'
})

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

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
