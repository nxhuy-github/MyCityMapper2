import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aroundme from '@/components/aroundme'
import myaddresses from '@/components/myaddresses'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aroundme',
      name: 'aroundme',
      component: aroundme
    },
    {
      path: '/myaddresses',
      name: 'myaddresses',
      component: myaddresses
    }
  ]
})
