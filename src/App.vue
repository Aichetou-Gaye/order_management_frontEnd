<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <router-link to="/"><img class="logo" src="./assets/images/lg.png" alt="logo"></router-link>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
          <form class="d-flex">
            <ul class="navbar-nav me-auto my-2 navbar-nav-scroll">
            <li class="nav-item">
              <router-link class="nav-link active" to="/customers"><img class="icon"  src="./assets/icones/man.png" alt="customer">Customers</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link active"><img class="icon"  src="./assets/icones/box(3).png" alt="product">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/orders" class="nav-link active"><img class="icon"  src="./assets/icones/grocery-cart.png" alt="order">Orders</router-link>
            </li>
          </ul>
          </form>
        </div>
      </div>
    </nav>
    <router-link to="/" />

    <router-view />
  </div>
  
</template>

<script setup>
</script>


<style scoped>
.icon {
  width: 25px;
  margin-right: 4px;
}
.logo {
  width: 200px;
}
</style>
