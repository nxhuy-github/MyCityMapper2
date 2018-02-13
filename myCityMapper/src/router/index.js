import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AroundMe from '@/components/AroundMe'
import MyAddresses from '@/components/MyAddresses'

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
      name: 'AroundMe',
      component: AroundMe
    },
    {
      path: '/myaddresses',
      name: 'MyAddresses',
      component: MyAddresses
    }
  ]
})
