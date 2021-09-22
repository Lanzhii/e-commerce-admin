import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product',
    children: [
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/Product'),
        meta: { roles: ['admin', 'editor'], title: '商品管理', icon: 'product' }
      },
      {
        path: 'classify',
        component: () => import('@/views/Product/Classify.vue'),
        name: 'Classify',
        hidden: true,
        meta: {
          title: '分类管理',
          icon: 'lock',
          roles: ['admin', 'editor']
        }
      }
    ]
  },
  {
    path: '/content',
    component: Layout,
    redirect: '/content',
    meta: { roles: ['admin', 'editor'], title: '内容管理', icon: 'content' },
    children: [
      {
        path: 'content',
        component: () => import('@/views/Content'),
        meta: { roles: ['admin', 'editor'], title: '文案管理', icon: 'content' }
      },
      {
        path: 'activity',
        component: () => import('@/views/Content/Activity'),
        name: 'Activity',
        meta: {
          title: '活动管理',
          icon: 'activity',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'Estate',
        component: () => import('@/views/Content/Estate'),
        name: 'Estate',
        meta: {
          title: '优惠卷管理',
          icon: 'estate',
          role: ['admin', 'editor']
        }
      }
    ]
  },
  {
    path: '/order',
    name: 'order',
    meta: { title: '订单管理', icon: 'order' },
    component: Layout,
    children: [
      {
        path: '/order',
        name: 'Order',
        icon: 'order',
        meta: { title: '订单管理' },
        component: () => import('@/views/Orders')
      }
    ]
  },
  {
    path: '/customer',
    name: 'Customer',
    component: Layout,
    meta: { title: '用户管理', icon: 'customer' },
    children: [
      {
        path: '/customer',
        name: 'Customer',
        meta: { title: '用户管理', icon: 'customer' },
        component: () => import('../views/Customer')
      }
    ]
  },
  {
    path: '/todo',
    name: 'todo',
    component: Layout,
    meta: { title: '采购管理', icon: 'purchase' },
    children: [
      {
        path: '/todo',
        name: 'todo',
        meta: { title: '采购管理', icon: 'purchase' },
        component: () => import('../views/Todo')
      }
    ]
  },
  {
    path: '/repertory',
    name: 'repertory',
    component: Layout,
    meta: { title: '库存管理', icon: 'repository' },
    children: [
      {
        path: '/repertory',
        name: 'repertory',
        meta: { title: '库存管理', icon: 'repository' },
        component: () => import('../views/repertory/Repertory.vue')
      }
    ]
  },
  {
    path: '/supplier',
    name: 'supplier',
    component: Layout,
    meta: { title: '供应商管理', icon: 'supplier' },
    children: [
      {
        path: '/supplier',
        name: 'supplier',
        meta: { title: '供应商管理', icon: 'supplier' },
        component: () => import('../views/supplier/Supplier.vue')
      },
      {
        path: '/addSupplier',
        name: 'AddSupplier',
        meta: { title: '新建供应商' },
        hidden: true,
        component: () => import('../views/supplier/components/addSupplier.vue')
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://Lanzhii.github.io/e-commerce-admin/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
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
