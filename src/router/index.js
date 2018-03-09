import Vue from 'vue'
import Router from 'vue-router'

import Uedtior from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Uedtior',
      component: Uedtior
    }
  ]
})
