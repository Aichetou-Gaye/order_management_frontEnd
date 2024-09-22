import { defineStore } from "pinia";
import { reactive } from "vue";

export const useOrderStore = defineStore("orderStore",{
    state: () => ({
        orders: [
            {
                id: 1,
                date: "25/07/2024", 
                customer_name: "John Doe",
                delivery_address: "123 Main St, New York, NY",
                track_number: "TN001",
                status: "Shipped"
            },
            {
                id: 2,
                date: "26/07/2024", 
                customer_name: "Jane Smith",
                delivery_address: "456 Oak St, Los Angeles, CA",
                track_number: "TN002",
                status: "Delivered"
            },
            {
                id: 3,
                date: "27/07/2024", 
                customer_name: "John Doe",
                delivery_address: "789 Pine St, Chicago, IL",
                track_number: "TN003",
                status: "Processing"
            },
        ],
        details: [{
            product:"",
            quantity:1,
            price:0
        }],
        detailForm: reactive({
            product: null,
            quantity: null,
            price: null
        }),
        orderForm: reactive({
            date: null,
            customer_name: null,
            delivery_address: null,
            track_number: null,
            status: null
        }),
        currentOrder:null,
    }),
    actions: {
        resetForm(){
            this.orderForm.date = null,
            this.orderForm.customer_name = null,
            this.orderForm.delivery_address = null,
            this.orderForm.track_number = null,
            this.orderForm.status = null
        },
        // resetDetail() { 
        //     this.detailForm.product = null,
        //     this.detailForm.quantity = null,
        //     this.detailForm.price = null
        // },
        add() {
            const maxId = this.orders.length > 0 ? Math.max(...this.orders.map(c => c.id)) : 0

            const newId = maxId + 1
            const order = {
                ...this.orderForm,
                id: newId,
            }
            this.orders.push(order)
            this.resetForm()
        },
        drop(id) {
            this.orders = this.orders.filter(r => r.id !== id)
        },
        edit(id, newOrder) {
            const index = this.orders.findIndex(c => c.id == id)
            this.orders[index] = {
                id: Number(id),
                ...newOrder
            }
        },
        show(id) {
            const index = this.orders.findIndex(c => c.id == id)
            this.currentOrder = this.orders[index]
            console.log(this.currentOrder)
        },
        addDetail() {
            const detail = {
                ...this.detailForm,
            }
            this.details.push(detail)
            console.log("detail",this.details)
        },
        dropDetail(detail) {
            const index = this.details.indexOf(detail)
            console.log("detail index", index)
            if(this.details.length > 1) {
                this.details = this.details.splice(index, 1)
                console.log("detail add", this.details)
            }else {
                alert("At least one item must be present.")
            }
        },
    }

})