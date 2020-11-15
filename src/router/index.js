import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue'),
    redirect: '/index',
    children:[
      {
        path: '/index',
        name: 'Home',
        component: () => import(/* webpackChunkName: "login" */ '../views/layout/home/index.vue'),
      },
      {
        path: '/stats',
        name: 'Stats',
        component: () => import(/* webpackChunkName: "login" */ '../views/layout/stats/index.vue'),
      },
      {
        path: '/wms',
        name: 'WMS',
        component: () => import(/* webpackChunkName: "login" */ '../views/layout/wms/index.vue'),
        redirect: '/list',
        children:[
          {
            path: '/list',
            name: 'List',
            component: () => import(/* webpackChunkName: "login" */ '../views/layout/wms/list.vue'),
          },
          {
            path: '/users',
            name: 'User',
            component: () => import(/* webpackChunkName: "login" */ '../views/layout/wms/user.vue'),
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
