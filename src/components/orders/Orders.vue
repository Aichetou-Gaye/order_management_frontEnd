<template>
    <div class="container">
        <h3 class="my-3">List of Orders</h3>
        <div class="d-flex justify-content-end mb-3"><router-link to="/order/new" class="btn btn-primary ">Add New Order</router-link></div>
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
                    <tr>
                        <td colspan="6" class="text-center bg-light">No data</td>
                    </tr>
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped></style>
