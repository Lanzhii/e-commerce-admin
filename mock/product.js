const Mock = require('mockjs')

module.exports = [
  {
    url: '/e-commerce-admin/product/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        list: [{
          id: 1,
          label: '图书',
          children: [{
            id: 4,
            label: '外文',
            children: [{
              id: 9,
              label: '小说'
            }, {
              id: 10,
              label: '教育'
            }]
          }]
        }, {
          id: 2,
          label: '家用电器',
          children: [{
            id: 5,
            label: '大家电'
          }, {
            id: 6,
            label: '厨房电器'
          }]
        }, {
          id: 3,
          label: '手机数码',
          children: [{
            id: 7,
            label: '手机配件'
          }, {
            id: 8,
            label: '摄影影像'
          }]
        }]
      }
    }
  },
  {
    url: '/e-commerce-admin/product/all',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|100000-999999': 1,
            'name|1': ['黑白熊猫篮球鞋', '蓝白T恤', 'Overszie卫衣'],
            'category|1': ['鞋/篮球鞋', '针织衫', 'T恤', '卫衣'],
            'maximum|100000-999999': 1,
            'status|1': [1, 2],
            'image|1': '',
            'repertory|1000-9999': 1,
            'minPrice|100-999': 1,
            'date|1': Mock.mock('@date("2021-11-02 MM:dd")')
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  }
]
