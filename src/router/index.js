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
        meta:{title:'首页'},
      },
      {
        path: '/stats',
        name: 'Stats',
        component: () => import(/* webpackChunkName: "login" */ '../views/layout/stats/index.vue'),
        meta:{title:'数据统计'},
      },
      {
        path: '/wms',
        name: 'WMS',
        component: () => import(/* webpackChunkName: "login" */ '../views/layout/wms/index.vue'),
        redirect: '/list',
        meta:{title:'信息管理'},
        children:[
          {
            path: '/list',
            name: 'List',
            component: () => import(/* webpackChunkName: "login" */ '../views/layout/wms/list.vue'),
            meta:{title:'列表展示'},
          },
          {
            path: '/users',
            name: 'User',
            component: () => import(/* webpackChunkName: "login" */ '../views/layout/wms/user.vue'),
            meta:{title:'用户统计'},
          }
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/pdf',
    name: 'PDF',
    component: () => import(/* webpackChunkName: "login" */ '../views/pdf/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
