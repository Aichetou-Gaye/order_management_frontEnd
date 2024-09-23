<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand bg-body-tertiary">
      <div class="container">
        <router-link to="/"><img class="logo" src="./assets/images/lg.png" alt="logo"></router-link>
        <!-- <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"></ul>
          <nav class="d-flex">
            <ul class="navbar-nav me-auto my-2 navbar-nav-scroll">
            <li class="nav-item">
              <router-link to="/customer" activeClass="active" class="nav-link" ><img class="icon"  src="./assets/icones/customer.png" alt="customer">Customers</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product" activeClass="active" class="nav-link"><img class="icon"  src="./assets/icones/product.png" alt="product">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/order" activeClass="active" class="nav-link"><img class="icon"  src="./assets/icones/order.png" alt="order">Orders</router-link>
            </li>
          </ul>
          </nav>
        </div> -->
        <div></div>
        <div class="navbar-nav my-2" >
          <router-link to="/customer" activeClass="active" class="nav-link" ><img class="icon"  src="./assets/icones/customer.png" alt="customer">Customers</router-link>

          <router-link to="/product" activeClass="active" class="nav-link"><img class="icon"  src="./assets/icones/product.png" alt="product">Products</router-link>

          <router-link to="/order" activeClass="active" class="nav-link"><img class="icon"  src="./assets/icones/order.png" alt="order">Orders</router-link>
        </div>
      </div>
    </nav>
    <router-link to="/" />

    <router-view />
  </div>
  
</template>

<script setup>
</script>


<style>
.active{
  font-weight: 600;
  background-color: rgb(221, 205, 184);
  border-radius: 10px;
}
.icon {
  width: 25px;
  margin-right: 4px;
}
.logo {
  width: 200px;
}
</style>
