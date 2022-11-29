import { createRouter, createWebHashHistory } from "vue-router"
import { useUserStore } from "../store/User"

const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        name: "changeCategory",
        path: "/:id",
        component: () => import("../views/Home.vue")
    },
    {
        name: "Admin",
        path: "/admin",
        component: () => import("../views/Admin.vue"),
        children: [
            {
                name: "admin-products",
                path: "products",
                component: () => import("../components/AdminPanel/ProductList.vue")
            },
            {
                name: "addNewItem",
                path: "add-new-item",
                component: () => import("../components/AdminPanel/NewProductForm.vue")
            },
            {
                name: "addNewCategory",
                path: "new-category",
                component: () => import("../components/AdminPanel/NewCategory.vue")
            },
            {
                name: "adminList",
                path: "admin-list",
                component: () => import("../components/AdminPanel/AdminList.vue")
            },
            {
                name: "customerList",
                path: "customers",
                component: () => import("../components/AdminPanel/CustomerList.vue")
            },
            {
                name: "orderList",
                path: "orders",
                component: () => import("../components/AdminPanel/OrderList.vue")
            }

        ]
    },
    {
        name: "AdminLogin",
        path: "/admin-login",
        component: () => import("../views/AdminLogin.vue")
    },
    {
        name: "ShoppingCart",
        path: "/cart",
        component: () => import("../views/ShoppingCart.vue")
    },
    {
        name: "Register",
        path: "/register",
        component: () => import("../views/UserRegister.vue")
    },
    {
        name: "Login",
        path: "/login",
        component: () => import("../views/UserLogin.vue")
    },
    {
        name: "Favorites",
        path: "/favorites",
        component: () => import("../views/Favorites.vue")
    },
    {
        name: "Orders",
        path: "/orders",
        component: () => import("../views/Orders.vue")
    }
    
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    const store = useUserStore()
    const loginRequiredPages = ["Favorites"];
    const loginNotRequiredPages = ["Login", "Register"]

    if(loginNotRequiredPages.indexOf(to.name) > -1 && store._currentUser !== null) next(false)

    if(loginRequiredPages.indexOf(to.name) > -1){
        if(store._currentUser) next()
        else next({name: "Login"})
    }else{
        next()
    }

})

export default router