<template>
    <div class="container">
        <h3 class="my-3">List of Products</h3>
        <div class="d-flex justify-content-end mb-3">
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">Add
                New Product</button>
        </div>
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
                    <tr v-if="store.products.length === 0">
                        <td colspan="5" class="text-center bg-light">No data</td>
                    </tr>
                    <tr v-for="item in store.products" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.stock }}</td>
                        <td>{{ item.category }}</td>
                        <td>{{ item.barcode }}</td>
                        <td>{{ item.status }}</td>
                        <td class="text-center">
                            <button class="btn text-info" data-bs-toggle="modal" data-bs-target="#viewModal"
                                @click="view(item)"><i class="fa-solid fa-eye"></i></button>
                            <button class="btn text-warning" data-bs-toggle="modal" data-bs-target="#editModal"
                                @click="edit(item.id)"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button class="btn text-danger" @click="del(item.id)"><i class="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Modal D'ajout -->
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center text-success" id="exampleModalLabel">Create New
                                Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="name" class="form-label">Product Name</label>
                                        <input type="text" class="form-control" id="name" v-model="product.name"
                                            required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="category" class="form-label">Category</label>
                                        <input type="text" class="form-control" id="category" v-model="product.category"
                                            required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="price" class="form-label">Price</label>
                                        <input type="number" class="form-control" id="price" v-model="product.price"
                                            required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="stock" class="form-label">Stock</label>
                                        <input type="number" class="form-control" id="stock" v-model="product.stock"
                                            required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="barcode" class="form-label">Barcode</label>
                                        <input type="number" class="form-control" id="barcode" v-model="product.barcode"
                                            required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="status" class="form-label">Status</label>
                                        <input type="text" class="form-control" id="status" v-model="product.status"
                                            required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="description" class="form-label">Description</label>
                                        <input type="text" class="form-control" id="description"
                                            v-model="product.description" rows="2" required>
                                    </div>
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
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-center text-primary" id="exampleModalLabel">Edit Product</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="name" class="form-label">Product Name</label>
                                        <input type="text" class="form-control" id="name" v-model="editP.name" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="category" class="form-label">Category</label>
                                        <input type="text" class="form-control" id="category" v-model="editP.category"
                                            required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="price" class="form-label">Price</label>
                                        <input type="number" class="form-control" id="price" v-model="editP.price"
                                            required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="stock" class="form-label">Stock</label>
                                        <input type="number" class="form-control" id="stock" v-model="editP.stock"
                                            required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-6">
                                        <label for="barcode" class="form-label">Barcode</label>
                                        <input type="number" class="form-control" id="barcode" v-model="editP.barcode"
                                            required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="status" class="form-label">Status</label>
                                        <input type="text" class="form-control" id="status" v-model="editP.status"
                                            required>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-md-12">
                                        <label for="description" class="form-label">Description</label>
                                        <input type="text" class="form-control" id="description"
                                            v-model="editP.description" rows="2" required>
                                    </div>
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
            <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold text-center text-danger" id="exampleModalLabel">View Product
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <p class="form-label">Product Name</p>
                                    <p class="form-control bg-light"> {{ current?.name }}</p>
                                </div>
                                <div class="col-md-6">
                                    <p class="form-label">Category</p>
                                    <p class="form-control bg-light">{{ current?.category }}</p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <p class="form-label">Price</p>
                                    <p class="form-control bg-light">{{ current?.price }}</p>
                                </div>

                                <div class="col-md-6">
                                    <p class="form-label">Stock</p>
                                    <p class="form-control bg-light">{{ current?.stock }}</p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-6">
                                    <p class="form-label">Barcode</p>
                                    <p class="form-control bg-light">{{ current?.barcode }}</p>
                                </div>
                                <div class="col-md-6">
                                    <p class="form-label">Status</p>
                                    <p class="form-control bg-light">{{ current?.status }}</p>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <p class="form-label">Description</p>
                                    <p class="form-control bg-light">{{ current?.description }}</p>
                                </div>
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
import { useProductStore } from '@store'

const store = useProductStore()
const product = store.productForm

// Add function
const submitForm = () => {
    store.add()
}

// Edit function
let editP = reactive({})
let get = 0

const edit = (id) => {
    editP = store.getProductById(id)
    get = store.getById(id)
}
const editForm = () => {
    store.edit(get, editP)
}

// Show function
const current = ref(null)
const view = (item) => {
    current.value = item
}

// Delete function
const del = (id) => {
    const choice = window.confirm("Are you sure you want to delete this product?")
    if (choice) {
        store.drop(id)
    }

}
</script>

<style scoped></style>
