import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ProductList from '@/components/ProductList'
import Product from '@/components/Product'
import Cart from '@/components/Cart'
import OrderConfirm from '@/components/OrderConfirm'
import SystemPrompts from '@/components/SystemPrompts'
import OrderList from '@/components/OrderList'
import OrderDetail from '@/components/OrderDetail'
import PaySuccess from '@/components/PaySuccess'

Vue.use(Router)

export default new Router({
  routes: [
 {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/systemPrompts',
      name: 'SystemPrompts',
      component: SystemPrompts
    },
    {
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },
    {
      path: '/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/paySuccess',
      name: 'PaySuccess',
      component: PaySuccess
    }
  ]
})
