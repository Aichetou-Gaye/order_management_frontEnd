<template>
    <div class="container">
        <div class="d-flex justify-content-end my-3">
            <router-link to="/orders" class="btn btn-secondary me-4">Orders List</router-link>
            <button class="btn btn-primary" @click="onSubmit()">Submit</button>
        </div>
        <div>
            <form class="row g-3">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="date" class="form-label">Date</label>
                        <input type="date" class="form-control" id="date" v-model="order.date" required>
                    </div>
                    <div class="mb-3">
                        <label for="customer" class="form-label">Customer Name</label>
                        <select class="form-select" id="customer" v-model="order.customer_name" required>
                            <option v-for="item in storeCust.customers" :key="item.id" :value="item.name">
                                {{ item.name }}</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="address" class="form-label">Delivery Address</label>
                        <input type="text" class="form-control" id="address" v-model="order.delivery_address" required>
                    </div>
                    <div class="mb-3">
                        <label for="track" class="form-label">Track Number</label>
                        <input type="text" class="form-control" id="track" v-model="order.track_number" required>
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Order Status</label>
                        <select class="form-select" id="status" v-model="order.status" required>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
        <h4 class="mt-3">Order Details</h4>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in store.details" :key="index">
                    <td>
                        <select class="form-select" id="product" v-model="detail.product" required>
                            <option v-for="item in storeProd.products" :key="item.id" :value="item.name">
                                {{ item.name }}</option>
                        </select>
                    </td>
                    <td>
                        <input type="number" class="form-control" min="1" value="1" v-model="detail.quantity" required>
                    </td>
                    <td>
                        <input type="number" class="form-control" min="0" value="0" v-model="detail.price" required>
                    </td>
                    <td>
                        <button class="btn btn-danger" @click="dropDetail(item)">Remove</button>
                    </td>
                </tr>

                <tr>
                    <td colspan="4"><button class="btn btn-success" @click="addDetail()">Add New Detail</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useOrderStore, useProductStore, useCustomerStore } from '@store'

const store = useOrderStore()
const storeProd = useProductStore()
const storeCust = useCustomerStore()

const order = store.orderForm
const detail = store.detailForm

const addDetail = () => {
    store.addDetail()
}

const dropDetail = (item) => {
    store.dropDetail(item)
}

const onSubmit = () => {
    if (order.date && order.customer_name && order.delivery_address && order.track_number && order.status) {
        store.add()
    }
}
</script>

<style scoped></style>
