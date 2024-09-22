<template>
    <div class="container">
        <h3 class="my-3">List of Orders</h3>
        <div class="d-flex justify-content-end mb-3"><router-link to="/order/new" class="btn btn-primary" >Add New
                Order</router-link></div>
        <div class="contact-list-table">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Delivery Address</th>
                        <th scope="col">Track Number</th>
                        <th scope="col">Status</th>
                        <th scope="col" class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="store.orders.length === 0">
                        <td colspan="6" class="text-center bg-light">No data</td>
                    </tr>
                    <tr v-for="item in store.orders" :key="item.id">
                        <td>{{ item.date }}</td>
                        <td>{{ item.customer_name }}</td>
                        <td>{{ item.delivery_address }}</td>
                        <td>{{ item.track_number }}</td>
                        <td> {{ item.status }}</td>
                        <td class="text-center">
                            <button class="btn text-info" @click="store.show(item.id), route.push('/order/show/' + item.id)"><i class="fa-solid fa-eye"></i></button>
                            <router-link class="btn text-warning"
                            :to="`/order/edit/${item.id}`"><i class="fa-solid fa-pen-to-square"></i></router-link>
                            <button class="btn text-danger" @click="del(item.id)"><i
                                    class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useOrderStore } from '@store'
import { useRouter } from 'vue-router'

const store = useOrderStore()
const route = useRouter()

const del = (id) => {
    const choice = window.confirm("Are you sure you want to delete this order?")
    if (choice) {
        store.drop(id)
    }
}

</script>

<style scoped></style>
