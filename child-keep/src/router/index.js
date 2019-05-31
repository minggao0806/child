import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views'
import Assis from '@/views/Assis'
import Learn from '@/views/learn'
import Ques from '@/views/ques'
import Vip from '@/views/vip'
import ChildMed from '@/views/childMed'
import Store from '@/views/store'
import Doctor from '@/views/doctor'
import MedDetail from '@/views/medDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/assis'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/assis',
          name: 'assis',
          component: Assis
        },
        {
          path: '/learn',
          name: 'learn',
          component: Learn
        },
        {
          path: '/ques',
          name: 'ques',
          component: Ques
        },
        {
          path: '/vip',
          name: 'vip',
          component: Vip
        }
      ]
    },
    {
      path: '/child',
      name: 'child',
      component: ChildMed
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/doctor',
      name: 'doctor',
      component: Doctor
    },
    {
      path: '/meddetail',
      name: 'meddetail',
      component: MedDetail
    }
  ]
})
