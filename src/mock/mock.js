import Mock from 'mockjs' // 引入mockjs，npm已安装
// 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
  timeout: 1000
  // 设置请求延时时间
})
const tableData = [
  {
    username: '@title(1, 5)',
    realname: '@title(1, 5)',
    userrole: '@title(1, 5)',
    description: '@title(1, 5)'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }, {
    username: 'aaaa',
    realname: 'aaaa',
    userrole: 'aaaa',
    description: 'aaaa'
  }
]
// 调用模拟数据方法
Mock.mock('/user', /post|get/i, tableData)
const menuInfo = [
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
      { item: '流量统计', path: '/studentManage' },
      { item: '数据库统计', path: '/addStudent' },
      { item: '文件统计', path: '/addStudent' }
    ]
  }
]
Mock.mock('/getMenuInfo', /post|get/i, menuInfo)
const taskRunStatus = [
  {
    name: '任务名称一',
    type: 0,
    startTime: '2020-8-24',
    endTime: '2022-1-5',
    number: 0,
    flow: 0,
    status: 0
  },
  {
    name: '任务名称二',
    type: 1,
    startTime: '2020-8-24',
    endTime: '2022-1-5',
    number: 0,
    flow: 0,
    status: 0
  },
  {
    name: '任务名称三',
    type: 2,
    startTime: '2020-8-24',
    endTime: '2022-1-5',
    number: 0,
    flow: 0,
    status: 0
  },
  {
    name: '任务名称四',
    type: 0,
    startTime: '2020-8-24',
    endTime: '2022-1-5',
    number: 0,
    flow: 0,
    status: 0
  }
]
Mock.mock('/taskRunStatus', /post|get/i, taskRunStatus)
