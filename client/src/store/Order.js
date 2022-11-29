import {defineStore} from "pinia"
import { appAxios, axiosAdmin, axiosClient } from "../utils/appAxios"
import router from "../router"

export const useOrderStore = defineStore("Orders", {
    state: () => ({
        userOrderList: null,
        allOrders: null
    }),

    getters: {
        _userOrders:(state) => {
            return state.userOrderList
        },
        _getOrders: (state) => {
            return state.allOrders;
        }
    },

    actions: {
        newOrder(data) {
            appAxios.post("/orders", data)
                .then(response => {
                    router.push({name: "Home"})
                })
                .catch(err => console.log(err))
        },
        usersOrder(customer_id){
            axiosClient.get(`/orders/user-orders?customer_id=${customer_id}`)
                .then(response => this.$state.userOrderList = response.data)
                .catch(err => console.log(err))
        },
        getAllOrders() {
            axiosAdmin.get("/orders")
                .then(response => {
                    this.$state.allOrders = response.data
                })
                .catch(err => console.log(err))
        },
        updateStatus(id, status) {
            axiosAdmin.post(`/orders/update-status?_id=${id}`, status)
                .then(response => {
                    this.getAllOrders()
                })
                .catch(err => console.log(err))
        }
    }
})