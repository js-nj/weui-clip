import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import adjust from '@/page/adjust'
import detail from '@/page/detail'
import question from '@/page/question'
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
  }, {
    path: '/question',
    name: 'question',
    component: question
  }, {
    path: '/adjust',
    name: 'adjust',
    component: adjust
  }]
})
