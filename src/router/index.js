import { createRouter, createMemoryHistory } from "vue-router";

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
    name: "home",
    component: Home,
  },
  {
    path: "/customers",
    name: "customers",
    component: Customers,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/orders",
    name: "orders",
    component: Orders,
  },
  {
    path: "/order/new",
    name: "add-order",
    component: AddOrder,
  },
  {
    path: "/order/edit/:id",
    name: "edit-order",
    component: EditOrder,
  },
  {
    path: "/order/show/:id",
    name: "show-order",
    component: ViewOrder,
  }
];

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
