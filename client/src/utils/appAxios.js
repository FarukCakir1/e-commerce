import axios from "axios"
import { useAdminStore } from "../store/Admin"
import { useUserStore } from "../store/User"

export const appAxios = axios.create({
    baseURL: "http://localhost:3000"
})

export const axiosAdmin = axios.create({
    baseURL:"http://localhost:3000"
})


export const axiosClient = axios.create({
    baseURL:"http://localhost:3000"
})

axiosAdmin.interceptors.request.use((config) => {
    const adminStore = useAdminStore();
    config.headers.Authorization = `Bearer ${adminStore.admin?.tokens?.access_token}`;
    config.headers.Accept = "application/json";
    return config
})

axiosClient.interceptors.request.use((config) => {
    const userStore = useUserStore();
    config.headers.Authorization = `Bearer ${userStore.user?.tokens?.access_token}`;
    config.headers.Accept = "application/json";
    return config
})
