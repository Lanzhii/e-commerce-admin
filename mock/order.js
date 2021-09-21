const Mock = require('mockjs')

module.exports = [
  {
    url: 'e-commerce-admin/customer',
    type: 'get',
    data: config => {
      return {
        code: 2000,
        success: true,
        message: '成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|10000-99999': 1,
            'name|1': ['李华', '李华', '李华', '李华'],
            'gender|1': ['男', '女'],
            'number': Mock.Random.integer(100000000000, 99999999999),
            'address': '广东广州',
            'customer|1': ['普通用户', '会员用户'],
            'date': Mock.Random.date()
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  },
  {
    url: 'e-commerce-admin/order',
    type: 'get',
    data: config => {
      return {
        code: 2000,
        success: true,
        message: '成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|10000-99999': 1,
            'name|1': ['iPhone X', 'iPhone X', 'iPhone X', 'iPhone X'],
            'price|1': ['￥3999', '￥3999'],
            'classify': '手机',
            'number|1-99': 1,
            'image|1': '',
            'date': Mock.Random.date('yyyy-MM-dd'),
            'status|1': ['1', '2']
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  },
  {
    url: 'e-commerce-admin/purchase',
    type: 'get',
    data: config => {
      return {
        code: 2000,
        success: true,
        message: '成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|10000-99999': 1,
            'name|1': ['小米'],
            'product|1': ['小米9', '小米9'],
            'person': '小高',
            'size': '台',
            'number|1-99': 1,
            'price|1000-9999': 1,
            'text|1': '备注',
            'date': Mock.Random.date()
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  },
  {
    url: 'e-commerce-admin/repertory',
    type: 'get',
    data: config => {
      return {
        code: 2000,
        success: true,
        message: '成功',
        data: Mock.mock({
          'list|20-40': [{
            'name|1': ['小米公司'],
            'product|1': ['小米9', '小米9'],
            'classify': '手机数码',
            'repertory|1-99': 1,
            'status|1': ['已上架', '待上架'],
            'repertoryStatus|1': ['不足', '充足'],
            'number|1-99': 1
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  },
  {
    url: 'e-commerce-admin/supplier',
    type: 'get',
    data: config => {
      return {
        code: 2000,
        success: true,
        message: '成功',
        data: Mock.mock({
          'list|20-40': [{
            'account|10000-99999': 1,
            'name|1': ['小米'],
            'addressNum|000000-999999': 1,
            'address': '中国/广东/深圳',
            'product': '手机',
            'telphone|10000000000-19999999999': 1,
            'person': '李华',
            'phone|10000000000-19999999999': 1,
            'status': ['1', '2']
          }],
          'total|1': [10, 20, 30, 40, 50]
        })
      }
    }
  }
]
