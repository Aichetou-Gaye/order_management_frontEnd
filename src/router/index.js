import { createRouter, createMemoryHistory } from "vue-router";

import Home from "../components/Home.vue";
import Customers from "../components/customers/Customers.vue";
import AddCustomer from "../components/customers/AddCustomer.vue";
import EditCustomer from "../components/customers/EditCustomer.vue";
import ViewCustomer from "../components/customers/ViewCustomer.vue";

import Products from "../components/products/Products.vue";
import AddProduct from "../components/products/AddProduct.vue";
import EditProduct from "../components/products/EditProduct.vue";
import ViewProduct from "../components/products/ViewProduct.vue";

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
    path: "/customer/new",
    name: "add-customer",
    component: AddCustomer,
  },
  {
    path: "/customer/edit/:id",
    name: "edit-customer",
    component: EditCustomer,
  },
  {
    path: "/customer/view/:id",
    name: "show-customer",
    component: ViewCustomer,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/product/new",
    name: "add-product",
    component: AddProduct,
  },
  {
    path: "/product/edit/:id",
    name: "edit-product",
    component: EditProduct,
  },
  {
    path: "/product/view/:id",
    name: "show-product",
    component: ViewProduct,
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
    path: "/order/view/:id",
    name: "show-order",
    component: ViewOrder,
  },
];

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
