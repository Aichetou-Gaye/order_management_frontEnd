<template>
    <div class="container">
        <div class="d-flex justify-content-end my-3">
            <router-link to="/orders" class="btn btn-secondary me-4">Return to Home</router-link>
            <button class="btn btn-primary">Submit</button>
        </div>
        <div>
            <form class="row g-3">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="date" class="form-label">Date</label>
                        <input type="date" class="form-control" id="date" required>
                    </div>
                    <div class="mb-3">
                        <label for="customer" class="form-label">Customer Name</label>
                        <input type="text" class="form-control" id="customer" required>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label for="address" class="form-label">Delivery Address</label>
                        <input type="text" class="form-control" id="address" required>
                    </div>
                    <div class="mb-3">
                        <label for="track" class="form-label">Track Number</label>
                        <input type="text" class="form-control" id="track" required>
                    </div>
                    <div class="mb-3">
                        <label for="status" class="form-label">Order Status</label>
                        <select class="form-select" id="status" required>
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
                <tr>
                    <td><select class="form-select" id="product" required>
                            <option disabled value="">Select Product</option>
                        </select>
                    </td>
                    <td><input type="number" class="form-control" min="1" required></td>
                    <td><input type="number" class="form-control" min="0" required></td>
                    <td><button class="btn btn-danger">Remove</button></td>
                </tr>
                <tr>
                    <td colspan="4"><button class="btn btn-success">Add New Detail</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useOrderStore } from '@store'
const store = useOrderStore()

</script>

<style scoped></style>
