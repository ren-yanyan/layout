const asyncRoutes = [
  {
    index: '2',
    title: '权限管理',
    icon: 'el-icon-user',
    content: [
      { item: '用户管理', path: '/userManagement' },
      { item: '角色管理', path: '/roleManagement' },
      {
        item: '菜单管理',
        path: '/menuManagement'
      }
    ]
  },
  {
    index: '3',
    title: '数据交换',
    icon: 'el-icon-coin',
    content: [
      { item: '交换对象配置', path: '/answerDescription' },
      {
        item: '任务管理',
        path: '/selectAnswer'
      }
    ]
  },
  {
    index: '4',
    title: '日志审计',
    icon: 'el-icon-tickets',
    content: [
      { item: '用户日志', path: '/allStudentsGrade' },
      { item: '日志下载', path: '/grade' },
      {
        item: '系统日志',
        path: '/selectExamToPart'
      }
    ]
  },
  {
    index: '5',
    title: '系统管理',
    icon: 'el-icon-setting',
    content: [
      { item: '参数配置', path: '/studentManage' },
      { item: '初始化配置', path: '/addStudent' },
      {
        item: '业务树',
        path: '/addStudent'
      },
      { item: '导入导出', path: '/addStudent' },
      { item: '恢复出厂设置', path: '/addStudent' },
      {
        item: '病毒库管理',
        path: '/addStudent'
      },
      { item: '网络配置', path: '/addStudent' },
      { item: '配置ntp', path: '/addStudent' },
      {
        item: '数据转发',
        path: '/addStudent'
      }
    ]
  },
  {
    index: '6',
    title: '报表管理',
    icon: 'el-icon-picture',
    content: [
      { item: '流量统计', path: '/Statistics' },
      { item: '数据库统计', path: '/addStudent' },
      { item: '文件统计', path: '/addStudent' }
    ]
  }
]
const constantRoutes = [
  {
    index: '2',
    title: '权限管理',
    icon: 'el-icon-user',
    content: [
      { item: '用户管理', path: '/userManagement' },
      { item: '角色管理', path: '/roleManagement' },
      {
        item: '菜单管理',
        path: '/menuManagement'
      }
    ]
  }
]
export { constantRoutes, asyncRoutes }
