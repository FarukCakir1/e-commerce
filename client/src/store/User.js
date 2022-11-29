import { defineStore } from "pinia"
import { appAxios, axiosAdmin, axiosClient } from "../utils/appAxios"
import  router  from "../router"

export const useUserStore = defineStore("User", {
    state: () => ({
        user: null,
        allUsers: null,
        loginSuccess: null
    }),

    getters: {
        _currentUser: (state) => {
            return state.user
        },
        _allUsers: (state) => {
            return state.allUsers
        },
        _loginSuccess: (state) => {
            return state.loginSuccess
        }
    },

    actions: {

        getAllUsers(){
            axiosAdmin.get("/users")
                .then(response => {
                    this.$state.allUsers = response.data
                })
                .catch(err => console.log(err))
        },
        registerUser(data) {
            axiosClient.post("/users", data)
                .then(response => {
                    this.$state.user = response.data
                    router.push({name: 'Home'})
                    this.getAllUsers()
                })
                .catch(err => console.log(err))
        },
        userLogin(loginData){
            axiosClient.post("/users/login", loginData)
                .then(response => {
                    this.$state.user = response.data
                    router.push({name: "Home"})
                    this.$state.loginSuccess = true
                })
                .catch(err => {
                    console.log(err)
                    this.$state.loginSuccess = false
                })
        },
        userLogout(){
            this.$state.user = null
        },
        addFavorite(_id, product) {
            if(this._currentUser.favorites.filter(prd => prd._id === product._id).length === 0){
                axiosClient.post(`/users/favorites/${_id}`, product)
                .then(response => {
                    this._currentUser.favorites.push(product)
                })
                .catch(err => console.log(err))
            }         
        },
        removeFavorite(_id, product){
            axiosClient.post(`/users/favorites-remove/${_id}`, product)
                .then(response => {
                    this._currentUser.favorites = this._currentUser.favorites.filter(prd => prd._id !== product._id)
                })
                .catch(err => console.log(err))
        }

    },

    persist: true
})


// /favorites-remove/:id