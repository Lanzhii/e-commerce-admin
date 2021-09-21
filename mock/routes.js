// 路由信息
const menuList = [
  {
    name: '首页系统',
    icon: 'el-icon-s-home',
    url: '/index'
  },
  {
    name: '商品管理',
    icon: 'el-icon-coin',
    url: '/account'
  },
  {
    name: '内容管理',
    icon: 'el-icon-menu',
    url: '/content',
    children: [
      {
        name: '文案管理',
        icon: 'el-icon-notebook-2',
        url: '/content/all'
      },
      {
        name: '活动管理',
        icon: 'el-icon-truck',
        url: '/content/activity'
      },
      {
        name: '优惠卷管理',
        icon: 'el-icon-office-building',
        url: '/content/estate'
      }
    ]
  },
  {
    name: '订单管理',
    icon: 'el-icon-s-order',
    url: '/order'
  },
  {
    name: '用户管理',
    icon: 'el-icon-user',
    url: '/customer'
  },
  {
    name: '采购管理',
    icon: 'el-icon-chat-dot-square',
    url: '/todo'
  },
  {
    name: '库存管理',
    icon: 'el-icon-copy-document',
    url: '/repertory'
  },
  {
    name: '供应商管理',
    icon: 'el-icon-user',
    url: '/supplier'
  }
]
module.exports = [
  {
    url: 'e-commerce-admin/routes/menu',
    type: 'get',
    response: config => {
      return {
        code: 2000,
        success: true,
        message: '操作成功',
        data: menuList
      }
    }
  }
]

