import { defineStore } from "pinia";
import { appAxios } from "../utils/appAxios"; 



export const useProductsStore = defineStore("products", {
    state: () => ({
        products: null
    }),

    getters: {
        _allProducts: (store) => {
            return store.products
        }
    },

    actions: {
        getAllProducts(){
            appAxios.get("/product")
                .then(response => {
                    this.$state.products = response.data.map(prod => {
                        return {
                            ...prod,
                            measure: JSON.parse(prod.measure)
                        }
                    })
                    
                    console.log(this.$state.products);
                })
                .catch(err => console.log(err))
        },
        deleteProduct(_id){
            appAxios.delete(`/product/${_id}`)
            this.$state.products = this.$state.products.filter(prd => prd._id !== _id)
        },
        editProduct(product){
            console.log(product.getAll("name"))
            appAxios.post("/product/update", product)
                .then(response => console.log(response))
        },
        changeCategory(id){
            this.$state.products = this.$state.products.filter(prd => prd.category === id)
        }
    },

    persist: true
})