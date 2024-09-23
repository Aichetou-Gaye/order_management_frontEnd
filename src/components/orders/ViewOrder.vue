<template>
    <div class="container">
        <div>
            <h4 class="text-danger fw-bold my-3 mb-4">Order Informations</h4>
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
        <div>
            <h5 class="text-danger fw-bold my-3 mb-4">Details of the Order</h5>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Product 001</td>
                        <td>100</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Product 002</td>
                        <td>200</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@store'
const store = useOrderStore()


</script>