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
        title: 'loading',
        key: '/admin/ui/loading'
      }
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