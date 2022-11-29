import {defineStore} from "pinia"
import { axiosAdmin } from "../utils/appAxios"
import router from "../router"

export const useAdminStore = defineStore("Admin", {
    state: () => ({
        admin: null,
        adminList: null
    }),
    getters: {
        _currentAdmin: (state) => {
            const admin = state.admin
            delete admin?.password
            return admin
        },
        _allRegisteredAdmins: (state) => {
            return state.adminList
        }
    },
    actions: {
        handleLogin(loginData){
            axiosAdmin.post("/admins/login", loginData.value).then(response => {
                this.$state.admin = response.data
                router.push({name: "Admin"})
            })
        },
        getAllAdmins(){
            axiosAdmin.get("/admins")
                .then(response => {
                    this.$state.adminList = response.data
                })
                .catch(err => console.log(err))
        },
        createNewAdmin(data){
            axiosAdmin.post("/admins", data)
                .then(response => {
                    this.getAllAdmins();
                })
        },
        handleDelete(id){
            axiosAdmin.delete(`/admins/${id}`)
            this.$state.adminList = this.$state.adminList.filter(admin => admin._id !== id)
        }
    },
    persist: true
})