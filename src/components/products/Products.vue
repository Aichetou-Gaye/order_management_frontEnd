<template>
    <div class="container">
        <h3 class="my-3">List of Products</h3>
        <div class="d-flex justify-content-end mb-3"><router-link to="/product/new" class="btn btn-primary ">Add New Product</router-link></div>
        <div class="contact-list-table">
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Category</th>
                        <th scope="col">Barcode</th>
                        <th scope="col">Status</th>
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
