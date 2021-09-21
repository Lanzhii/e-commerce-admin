module.exports = [
  {
    url: '/e-commerce-admin/deshboard/record',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        data: [
          {
            icon: 'el-icon-user',
            name: '商城用户',
            color: '#39c',
            number: 12795
          },
          {
            icon: 'el-icon-document-copy',
            name: '分拣记录',
            color: '#f66',
            number: 245647
          },
          {
            icon: 'el-icon-sell',
            name: '商城记录',
            color: '#036',
            number: 345678
          },
          {
            icon: 'el-icon-set-up',
            name: '交易记录',
            color: '#f96',
            number: 456673
          }
        ]
      }
    }
  },
  {
    url: '/e-commerce-admin/deshboard/statistics',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        success: true,
        message: '操作成功',
        data: [
          {
            title: '用户信息统计',
            list: [
              { names: '会员数', numbers: 15469 },
              { names: '非会员数', numbers: 30064 },
              { names: '新增用户', numbers: 345 },
              { names: '新增会员', numbers: 48 },
              { names: '消费人数', numbers: 597 }
            ]
          },
          {
            title: '商品统计信息',
            list: [
              { names: '商品总数', numbers: 15469 },
              { names: '回收站商品', numbers: 30064 },
              { names: '上架商品', numbers: 197 },
              { names: '下架商品', numbers: 48 },
              { names: '待批准商品', numbers: 597 }
            ]
          },
          {
            title: '订单信息统计',
            list: [
              { names: '未处理订单', numbers: 15469 },
              { names: '代发货订单', numbers: 30064 },
              { names: '待结算订单', numbers: 197 },
              { names: '已成交订单', numbers: 48 },
              { names: '交易失败', numbers: 597 }
            ]
          },
          {
            title: '库存预报',
            list: [
              { names: '围巾', numbers: 469 },
              { names: '围巾', numbers: 469 },
              { names: '围巾', numbers: 469 },
              { names: '围巾', numbers: 469 },
              { names: '围巾', numbers: 469 }
            ]
          }
        ]
      }
    }
  }

]
