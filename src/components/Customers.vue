<template>
    <div class="container">
        <h3 class="my-3">List of Customers</h3>
        <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Add
                New Customer</button>
        </div>
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
                    <tr v-if="store.customers.length === 0">
                        <td colspan="5" class="text-center bg-light">No data</td>
                    </tr>
                    <tr v-for="item in store.customers" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.address }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                        <td class="text-center">
                            <button class="btn text-info" data-bs-toggle="modal" data-bs-target="#viewModal"
                                @click="view(item)"><i class="fa-solid fa-eye"></i></button>
                            <button class="btn text-warning" data-bs-toggle="modal" data-bs-target="#editModal"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn text-danger" @click="del(item.id)"><i
                                    class="fa-solid fa-trash-can"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Modal D'ajout -->
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="exampleModalLabel">Create New
                                Customer</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Customer Name</label>
                                    <input type="text" class="form-control" id="name" v-model="customer.name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address</label>
                                    <textarea type="text" class="form-control" id="address" v-model="customer.address"
                                        rows="2" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="customer.email"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="phone" v-model="customer.phone"
                                        required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                @click="submitForm">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal De modification -->
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center" id="exampleModalLabel">Edit Customer</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Customer Name</label>
                                    <input disabled type="text" class="form-control bg-light" id="name" v-model="edit.name" required>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address</label>
                                    <textarea type="text" class="form-control" id="address" v-model="edit.address"
                                        rows="2" required></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="edit.email"
                                        required>
                                </div>
                                <div class="mb-3">
                                    <label for="phone" class="form-label">Phone</label>
                                    <input type="text" class="form-control" id="phone" v-model="edit.phone"
                                        required>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                @click="editForm()">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de details -->
            <div v-if="isVisible" class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold text-center text-danger" id="exampleModalLabel">View Customer
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <p for="name" class="form-label">Customer Name</p>
                                <p class="form-control bg-light"> {{ current.name }}</p>
                            </div>
                            <div class="mb-3">
                                <p for="address" class="form-label">Address</p>
                                <p class="form-control bg-light">{{ current.address }}</p>
                            </div>
                            <div class="mb-3">
                                <p for="email" class="form-label">Email</p>
                                <p class="form-control bg-light">{{ current.email }}</p>
                            </div>
                            <div class="mb-3">
                                <p for="phone" class="form-label">Phone</p>
                                <p class="form-control bg-light">{{ current.phone }}</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useCustomerStore } from '@store'

const store = useCustomerStore()
const customer = store.customerForm

// Add function
const submitForm = () => {
    store.add()
}

// Edit function
const edit = reactive({
    name:store.customerForm.name,
    address: store.customerForm.address,
    email:store.customerForm.email,
    phone: store.customerForm.phone,
})

const editForm = () => {
    store.edit(edit)
}

// Show function
const current = ref(null)
const isVisible = ref(false)
const view = (item) => {
    isVisible.value = true
    current.value = item
}

// Delete function
const del = (id) => {
    confirm("Are you sure you want to delete this customer?")
    if (confirm) {
    store.drop(id)
    }
}
</script>

<style scoped>
i {
    width: 100px;
}
</style>
