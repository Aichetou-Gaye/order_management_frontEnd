<template>
    <div class="container">
        <h3 class="my-3">List of Customers</h3>
        <div class="d-flex justify-content-end mb-3"><router-link to="/customer/new" class="btn btn-primary ">Add New Customer</router-link></div>
        <div class="contact-list-table">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col" class="text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5" class="text-center bg-light">No data</td>
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
