import Vue from 'vue'
import Router from 'vue-router'
const Layout = () => import('@/layout/index')
const Login = () => import('@/views/login/index')
const MainIndex = () => import('@/views/index/modules/index')
Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: Login,
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: MainIndex,
        name: '首页',
        meta: { title: '首页', icon: 'el-icon-s-home' }
      }
    ]
  },
  {
    path: '/authorityManagement',
    name: '权限管理',
    component: Layout,
    meta: {
      title: '权限管理',
      icon: 'el-icon-s-custom'
    },
    children: [
      {
        path: '/authorityManagement/roleManagement', // 角色管理
        component: () => import('@/views/authorityManagement/RoleManagement'),
        name: '角色管理',
        meta: { title: '角色管理', requireAuth: true }
      },
      {
        path: '/authorityManagement/userManagement', // 用户管理
        component: () => import('@/views/authorityManagement/UserManagement.vue'),
        name: '用户管理',
        meta: { title: '用户管理', requireAuth: true }
      },
      {
        path: '/authorityManagement/menuManagement', // 菜单管理
        component: () => import('@/views/authorityManagement/MenuManagement'),
        name: '菜单管理',
        meta: { title: '菜单管理', requireAuth: true }
      }
    ]
  },
  {
    path: 'dataExchange',
    name: '数据交换',
    component: Layout,
    meta: {
      title: '数据交换',
      icon: 'icon-data'
    },
    children: [
      {
        path: '/answerDescription', // 交换对象配置
        component: () => import('@/views/dataExchange/answerDescription'),
        name: '交换对象配置',
        meta: { title: '交换对象配置', requireAuth: true }
      }
    ]
  },
  {
    path: 'reportManagement; ',
    name: '报表管理',
    component: Layout,
    meta: {
      title: '数据交换',
      icon: 'icon-baogao'
    },
    children: [
      {
        path: '/Statistics', // 流量统计
        component: () => import('@/views/Statistics/index'),
        name: '流量统计',
        meta: { title: '流量统计', requireAuth: true }
      }
    ]
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
