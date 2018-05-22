import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import AroundMe from '@/components/AroundMe'
import MyAddresses from '@/components/MyAddresses'
import Lines from '@/components/Lines'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lignes',
      name: 'Lines',
      component: Lines
    },
    {
      path: '/',
      name: 'Root',
      component: Root
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
