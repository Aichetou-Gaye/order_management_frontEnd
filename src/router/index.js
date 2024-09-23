import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import Customers from "../components/Customers.vue";

import Products from "../components/Products.vue";

import Orders from "../components/orders/Orders.vue";
import AddOrder from "../components/orders/AddOrder.vue";
import EditOrder from "../components/orders/EditOrder.vue";
import ViewOrder from "../components/orders/ViewOrder.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/customer",
    component: Customers,
  },
  {
    path: "/product",
    component: Products,
  },
  {
    path: "/order",
    component: Orders,
  },
  {
    path: "/order/new",
    component: AddOrder,
  },
  {
    path: "/order/edit/:id",
    component: EditOrder,
  },
  {
    path: "/order/show/:id",
    component: ViewOrder,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
