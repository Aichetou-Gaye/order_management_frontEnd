import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCustomerStore = defineStore("customerStore", {
  state: () => ({
    customers: [
      {
        id: 1,
        name: "John Doe",
        address: "123 Main St, New York, NY",
        email: "johndoe@example.com",
        phone: "123-456-7890",
      },
      {
        id: 2,
        name: "Jane Smith",
        address: "456 Oak St, Los Angeles, CA",
        email: "janesmith@example.com",
        phone: "098-765-4321",
      },
      {
        id: 3,
        name: "Alice Martin",
        address: "789 Pine St, Chicago, IL",
        email: "alicemartin@example.com",
        phone: "234-567-8901",
      },
    ],
    customerForm: reactive({
      name: null,
      address: null,
      email: null,
      phone: null,
    }),
  }),
  actions: {
    resetForm() {
      this.customerForm.name = null;
      this.customerForm.address = null;
      this.customerForm.email = null;
      this.customerForm.phone = null;
    },
    getById(id) {
      const result = this.customers.find((r) => r.id == id);
      return result.id;
    },
    getCustomerById(id) {
      const result = this.customers.find((r) => r.id == id);
      return result;
    },
    add() {
      const maxId =
        this.customers.length > 0
          ? Math.max(...this.customers.map((c) => c.id))
          : 0;
      const newId = maxId + 1;
      const customer = {
        ...this.customerForm,
        id: newId,
      };
      this.customers.push(customer);
      this.resetForm();
    },
    drop(id) {
      this.customers = this.customers.filter((r) => r.id !== id);
    },
    edit(id, newCustomer) {
      const index = this.customers.findIndex((f) => f.id == id);
      this.customers[index] = { id: Number(id), ...newCustomer };
      this.resetForm();
    },
  },
});
