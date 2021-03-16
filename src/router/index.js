import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Create from '@/pages/Create/Create.vue'
import Detail from '@/pages/Detail/Detail.vue'
import Index from '@/pages/Index/Index.vue'
import Login from '@/pages/Login/Login.vue'
import My from '@/pages/My/My.vue'
import Register from '@/pages/Register/Register.vue'
import User from '@/pages/User/User.vue'
import Edit from '@/pages/Edit/Edit.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            component: Index,
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/create',
            component: Create
        },
        {
            path: '/detail',
            component: Detail
        },
        {
            path: '/edit',
            component: Edit
        },
        {
            path: '/my',
            component: My
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/user',
            component: User
        },
    ]
})