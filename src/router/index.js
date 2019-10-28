import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import detail from '@/page/detail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/detail',
    name: 'detail',
    component: detail
  }]
})
