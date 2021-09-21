const Mock = require('mockjs')
// 记录文案
module.exports = [
  {
    url: 'e-commerce-admin/content/all',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|1000-99999': 1,
            'classify|1': ['活动文案', '系统通知', '活动文案'],
            'detail|1': ['满99包邮', '满199包邮', '满99包邮'],
            'place|1': ['购物车', '购物车', '购物车'],
            'simple': '套餐商品内购满99元可以包邮',
            'status|1': [1, 2]
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  },
  {
    url: 'e-commerce-admin/content/activity',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|1000-99999': 1,
            'classify|1': ['满减活动', '优惠活动', '大减价'],
            'detail|1': [
              '适用于任何商品，属于购物车卷，购满99减5元',
              '适用于任何商品，属于购物车卷，购满99减5元',
              '适用于任何商品，属于购物车卷，购满99减5元'
            ],
            'place|1': ['购物车', '购物车', '购物车'],
            'simple': '满99减5元',
            'status|1': [1, 2]
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  },
  {
    url: 'e-commerce-admin/content/estate',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|1000-99999': 1,
            'classify|1': ['店铺满减优惠卷', '店铺满减优惠卷', '店铺满减优惠卷'],
            'detail|1': ['满99包邮', '满199包邮', '满99包邮'],
            'place|1': ['商品展示', '商品展示', '商品展示'],
            'simple': '满99减5元优惠卷',
            'status|1': [1, 2]
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  }
]
