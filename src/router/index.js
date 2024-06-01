import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart/Index.vue';
import Product from '../views/product/Index.vue';
import ProductDetail from '../views/product/Detail.vue';
import NotFound from '../views/errors/404.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: Product
    },
    {
      path: '/product/:id',
      name: 'productdetail',
      component:ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component:Cart
    },
    {
      path:'/:catchAll(.*)',
      name :'NotFound',
      component:NotFound
    }

  ]
})

export default router
