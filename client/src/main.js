//initial vue
import { createApp } from 'vue'
import App from './App.vue'
//packages
import router from "./router/index"
import { appAxios } from './utils/appAxios'
import persisted from "pinia-plugin-persistedstate"
// stylesheets
import "./assets/style.css"

//state management
import { createPinia } from "pinia"

//shared components
import Header from "./components/Home/Header.vue"
import Footer from "./components/Home/Footer.vue"
const pinia = createPinia();
pinia.use(persisted)
const app = createApp(App)


app.use(pinia)
app.use(router)
app.provide("appAxios", appAxios)
app.provide("router", router)
app.component("Header", Header)
app.component("Footer", Footer)
app.mount('#app')
