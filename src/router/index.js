import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/layout/index')
const Index = () => import('@/views/login/index')
const MainIndex = () => import('@/views/index/modules/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    hidden: true
  },
  {
    path: '/main',
    component: Layout,
    children: [
      {
        path: '/',
        component: MainIndex,
        name: 'MainIndex',
        meta: { title: 'Main', icon: 'mainindex', affix: true }
      },
      {
        path: '/roleManagement', // 角色管理
        component: () => import('@/views/authorityManagement/RoleManagement'),
        name: 'roleManagement',
        meta: { title: 'RoleManagement', requireAuth: true }
      },
      {
        path: '/userManagement', // 用户管理
        component: () => import('@/views/authorityManagement/UserManagement'),
        name: 'userManagement',
        meta: { title: 'UserManagement', requireAuth: true }
      },
      {
        path: '/menuManagement', // 菜单管理
        component: () => import('@/views/authorityManagement/MenuManagement'),
        name: 'menuManagement',
        meta: { title: 'MenuManagement', requireAuth: true }
      },
      {
        path: '/answerDescription', // 交换对象配置
        component: () => import('@/views/dataExchange/answerDescription'),
        name: 'answerDescription',
        meta: { title: 'answerDescription', requireAuth: true }
      },
      {
        path: '/Statistics', // 流量统计
        component: () => import('@/views/Statistics/index'),
        name: 'Statistics',
        meta: { title: 'Statistics', requireAuth: true }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404', requireAuth: true },
    component: () => import(/* webpackChunkName: "about" */ '../views/error/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
