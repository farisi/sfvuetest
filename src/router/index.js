import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Customers from '../views/Customers.vue';
import Products from '../views/Products.vue';

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        component: Home,
        name: 'Home',
      },
      {
        path: 'customers',
        component: Customers,
        name: 'Customers',
      },
      {
        path: 'products',
        component: Products,
        name: 'Products',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;