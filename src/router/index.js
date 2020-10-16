import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('@/layout/index')
const Login = () => import('@/views/login/index')
const MainIndex = () => import('@/views/index/modules/index')
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: Login,
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

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index.vue'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
