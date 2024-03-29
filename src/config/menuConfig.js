const menuList = [
  {
    title: '首页',
    key: '/admin/home'
  },
  {
    title: 'UI',
    key: '/admin/ui',
    children: [
      {
        title: '按钮',
        key: '/admin/ui/buttons'
      },
      {
        title: '弹框',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loadings',
        key: '/admin/ui/loadings'
      },
      {
        title: '通知提醒',
        key: '/admin/ui/notices'
      },
      {
        title: '全局提示框',
        key: '/admin/ui/messages'
      },
      {
        title: 'Tab页签',
        key: '/admin/ui/tabs'
      },
      {
        title: '图片画廊',
        key: '/admin/ui/gallery'
      },
      {
        title: '轮播图',
        key: '/admin/ui/carousel'
      }
    ]
  },
  {
    title: '表单',
    key: '/admin/form',
    children: [
      {
        title: '登陆',
        key: '/admin/form/login',
      },
      {
        title: '注册',
        key: '/admin/form/register',
      },
    ]
  },
  {
    title: '表格',
    key: '/admin/table',
    children: [
      {
        title: '基础表格',
        key: '/admin/table/basic',
      },
      // {
      //   title: '注册',
      //   key: '/admin/form/register',
      // },
    ]
  },
  {
    title: '富文本',
    key: '/admin/rich'
  },
  {
    title: '城市管理',
    key: '/admin/city'
  },
  {
    title: '订单管理',
    key: '/admin/order'
  },
  {
    title: '员工管理',
    key: '/admin/user'
  },
  {
    title: '车辆地图',
    key: '/admin/map'
  },
  {
    title: '权限设置',
    key: '/admin/permission'
  }
]

export default menuList;