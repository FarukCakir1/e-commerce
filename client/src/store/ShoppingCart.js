import { defineStore } from "pinia";
import { axiosAdmin, axiosClient } from "../utils/appAxios"

export const useShoppingCartStore = defineStore("shoppingCart", {
    state: () => ({
        products: []
        
    }),
    getters: {

    },
    actions: {
        addToCart(product){
            const addingProduct = this.$state.products.find(prd => prd._id === product._id)
            if(addingProduct){
                addingProduct.orderQuantity += 1
            }else{
                this.$state.products?.push(product)
            }
        },

        unloadCart(){
            this.$state.products = []
        },

        increaseOrderQuantity(id){
            this.$state.products = this.$state.products.map((prd) => {
                if (prd._id === id) {
                  prd.orderQuantity++;
                  return prd;
                }
                return prd;
              });
        },

        decreaseOrderQuantity(id){
            this.$state.products = this.$state.products.map((prd) => {
                if (prd._id === id) {
                  prd.orderQuantity--;
                  prd.orderQuantity < 1 ? (prd.orderQuantity = 1) : (prd.orderQuantity = prd.orderQuantity);
                  return prd;
                }
                return prd;
              });
        },

        dropProduct(id){
            this.$state.products = this.$state.products.filter(prd => prd._id !== id)
        },

        completeOrder(products){
            axiosAdmin.post("/product/order", products)
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            
        }
    },
    persist: true
})