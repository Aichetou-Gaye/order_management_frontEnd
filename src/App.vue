<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <img class="logo" src="./assets/images/logo.png" alt="logo">
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
          <form class="d-flex">
            <ul class="navbar-nav me-auto my-3 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link active"><img class="icon"  src="./assets/icones/man.png" alt="customer">Customers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active"><img class="icon"  src="./assets/icones/box(3).png" alt="product">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active"><img class="icon"  src="./assets/icones/grocery-cart.png" alt="order">Orders</a>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
    <HelloWorldVue />
  </div>
</template>

<script setup>
import HelloWorldVue from "./components/Home.vue";
</script>


<style scoped>
.icon {
  width: 25px;
  margin-right: 4px;
}
.logo {
  width: 250px;
}
</style>
