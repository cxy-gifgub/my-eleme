import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const home = () => import("@/views/home/home.vue")
const category = () => import("@/views/category/category.vue")
const cart = () => import("@/views/cart/cart.vue")
const profile = () => import("@/views/profile/profile.vue")
const detail = () => import("@/views/detail/detail.vue")
const order = () => import("@/views/order/order.vue")
const address = () => import("@/views/address/address.vue")
const address_new = () => import("@/views/address/addressNew.vue")
const orderRemark = () => import("@/views/order/orderRemark.vue")
const categoryList = () => import("@/views/category/categoryList.vue")
const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        name: "home",
        path: '/home',
        component: home
    },
    {
        name: "category",
        path: '/category',
        component: category
    },
    {
        name: "cart",
        path: '/cart',
        component: cart
    },
    {
        name: "profile",
        path: '/profile',
        component: profile
    },
    {
        name: "detail",
        path: '/detail',
        component: detail,
        meta: {
            navDontShow: true
        }
    },
    {
        name: "order",
        path: '/order',
        component: order,
        meta: {
            navDontShow: true
        }
    },
    {
        name: "address",
        path: '/address',
        component: address,
        meta: {
            navDontShow: true
        }
    },
    {
        name: "address_new",
        path: '/address_new',
        component: address_new,
        meta: {
            navDontShow: true
        }
    },
    {
        name: "orderRemark",
        path: '/orderRemark',
        component: orderRemark,
        meta: {
            navDontShow: true
        }
    },
    {
        name: "categoryList",
        path: '/categoryList',
        component: categoryList,
        meta: {
            navDontShow: true
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router