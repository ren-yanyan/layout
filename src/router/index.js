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
        meta: { title: 'mainindex', icon: 'mainindex', affix: true }
      },
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      },
      {
        path: '/roleManagement', // 角色管理
        component: () => import('@/views/index/RoleManagement'),
        meta: { requireAuth: true }
      },
      {
        path: '/userManagement', // 用户管理
        component: () => import('@/views/index/UserManagement'),
        meta: { requireAuth: true }
      },
      {
        path: '/menuManagement', // 菜单管理
        component: () => import('@/views/index/MenuManagement'),
        meta: { requireAuth: true }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/error/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
