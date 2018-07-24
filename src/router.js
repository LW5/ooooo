import Vue from 'vue'
import Router from 'vue-router'

import login from './components/app/login.vue'
import reg from './components/app/reg.vue'
import Info from './components/info/info.vue'
import Shenqing from './components/app/shenqing.vue'
import Shenghe from './components/app/shenghe.vue'
import Service from "./components/service/service.vue"
import Clerk from "./components/clerk/clerk.vue"
import Order from "./components/order/order.vue"
import Pet from "./components/pet/pet.vue"
import Foods from "./components/foods/foods.vue"
import Artical from "./components/artical/artical.vue"
import Services from "./components/services/services.vue"

//这是平台管理
import _Info from './components1/info/info.vue'

import _Service from "./components1/shop/service/service.vue"
import _Pet from "./components1/shop/pet/pet.vue"
import _Foods from "./components1/shop/foods/foods.vue"
import _Artical from "./components1/shop/artical/artical.vue"

import _Clerk from "./components1/clerk/clerk.vue"
import _Order from "./components1/order/order.vue"
import _Services from "./components1/services/services.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/shenqing',
      name: 'Shenqing',
      component: Shenqing
    },
    {
      path: '/shenghe',
      name: 'Shenghe',
      component: Shenghe
    },{
      path:'/_Info',
      name: '_Info',
      component: _Info,
      children: [{
        path: '/_Info/_Service',
        name: '_Service',
        component: _Service
      },{
        path: '/_Info/_Pet',
        name: '_Pet',
        component: _Pet
      },{
        path: '/_Info/_Foods',
        name: '_Foods',
        component: _Foods
      },{
        path: '/_Info/_Artical',
        name: '_Artical',
        component: _Artical
      },{
        path: '/_Info/_Clerk',
        name: '_Clerk',
        component: _Clerk
      },{
        path: '/_Info/_Order',
        name: '_Order',
        component: _Order
      },{
        path: '/_Info/_Services',
        name: '_Services',
        component: _Services
      }
      ]
    },
    {
      path: '/Info',
      name: 'Info',
      component: Info,
      children: [{
        path: '/Info/Service',
        name: 'Service',
        component: Service
      },{
        path: '/Info/Clerk',
        name: 'Clerk',
        component: Clerk
      },{
        path: '/Info/Order',
        name: 'Order',
        component: Order
      },{
        path: '/Info/Pet',
        name: 'Pet',
        component: Pet
      },{
        path: '/Info/Foods',
        name: 'Foods',
        component: Foods
      },{
        path: '/Info/Artical',
        name: 'Artical',
        component: Artical
      },{
        path: '/Info/Services',
        name: 'Services',
        component: Services
      }],
    }
  ]
})
