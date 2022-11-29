
import { defineStore } from "pinia";
import { appAxios, axiosAdmin } from "../utils/appAxios";

export const useCategoriesStore = defineStore("Categories", {
    state: () => ({
        categories: null
    }),

    getters: {
        _existingCategories: (store) => {
            return store.categories;
        }
    },

    actions: {
        addNewCategory(data){
            appAxios.post("/categories", data)
                .then(resp => console.log(resp))
                .catch(err => console.log(err))
        },

        getAllCategories(){
            appAxios.get("/categories")
                .then(resp => {
                    this.$state.categories = resp.data
                })
                .catch(err => console.log(err))
        },
        deleteCategory(id) {
            axiosAdmin.post(`/categories/${id}`)
                .then(response => {
                    this.$state.categories = this.$state.categories.filter(ctg => ctg._id !== id)
                })
                .catch(err => console.log(err))
        }
    }

})