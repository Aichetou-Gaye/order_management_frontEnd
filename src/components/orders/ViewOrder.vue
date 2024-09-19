<template>
    <div class="container">
        <h4 class="text-danger fw-bold text-center my-3 mb-4">View Order</h4>
        <div class="row">
            <div class="col-md-6">
                <p class="form-control bg-light">{{ store.currentOrder.date }}</p>
                <p class="form-control bg-light">{{ store.currentOrder.customer_name }}</p>
            </div>
            <div class="col-md-6">
                <p class="form-control bg-light">{{ store.currentOrder.delivery_address }}</p>
                <p class="form-control bg-light">{{ store.currentOrder.track_number }}</p>
                <p class="form-control bg-light">{{ store.currentOrder.status }}</p>
            </div>
        </div>


    </div>

</template>

<script setup>
import { useOrderStore } from '@store'
const store = useOrderStore()
</script>