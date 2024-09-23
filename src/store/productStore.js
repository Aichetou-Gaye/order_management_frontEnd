import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Product 001",
        description: "High-quality product.",
        price: 100,
        stock: 50,
        category: "Electronics",
        barcode: "123456789012",
        status: "Active",
      },
      {
        id: 2,
        name: "Product 002",
        description: "	Affordable product.",
        price: 50,
        stock: 100,
        category: "Home Appliances",
        barcode: "987654321098",
        status: "Inactive",
      },
      {
        id: 3,
        name: "Product 003",
        description: "Durable product..",
        price: 75,
        stock: 75,
        category: "	Sports",
        barcode: "234567890123",
        status: "Active",
      },
    ],
    productForm: reactive({
      name: null,
      description: null,
      price: null,
      stock: null,
      category: null,
      barcode: null,
      status: null,
    }),
  }),
  actions: {
    resetForm() {
      (this.productForm.name = null),
        (this.productForm.description = null),
        (this.productForm.price = null),
        (this.productForm.stock = null),
        (this.productForm.category = null),
        (this.productForm.barcode = null),
        (this.productForm.status = null);
    },
    getById(id) {
      const result = this.products.find((r) => r.id == id);
      return result.id;
    },
    getProductById(id) {
      const result = this.products.find((r) => r.id == id);
      return result;
    },
    add() {
      const maxId =
        this.products.length > 0
          ? Math.max(...this.products.map((c) => c.id))
          : 0;

      const newId = maxId + 1;
      const product = {
        ...this.productForm,
        id: newId,
      };
      this.products.push(product);
      this.resetForm();
    },
    drop(id) {
      this.products = this.products.filter((r) => r.id !== id);
    },
    edit(id, newProduct) {
      const index = this.products.findIndex((f) => f.id == id);
      this.products[index] = { id: Number(id), ...newProduct };
      this.resetForm();
    },
  },
});
