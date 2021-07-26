import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Create from '@/pages/Create/Create.vue'
// import Detail from '@/pages/Detail/Detail.vue'
// import Index from '@/pages/Index/Index.vue'
// import Login from '@/pages/Login/Login.vue'
// import My from '@/pages/My/My.vue'
// import Register from '@/pages/Register/Register.vue'
// import User from '@/pages/User/User.vue'
// import Edit from '@/pages/Edit/Edit.vue'
import store from '../store'

window.store = store


Vue.use(Router)


// const router = new Router({
//     routes: [{
//             path: '/',
//             // redirect: '/index',
//             component: Index,
//         },
//         // {
//         //     path: '/index',
//         //     component: Index,
//         // },
//         {
//             path: '/login',
//             component: Login
//         },
//         {
//             path: '/create',
//             component: Create,
//             meta: {
//                 requiresAuth: true
//             }
//         },
//         {
//             path: '/detail/:blogId',
//             component: Detail,

//         },
//         {
//             path: '/edit/:blogId',
//             component: Edit,
//             meta: {
//                 requiresAuth: true
//             }
//         },
//         {
//             path: '/my',
//             component: My,
//             meta: {
//                 requiresAuth: true
//             }
//         },
//         {
//             path: '/register',
//             component: Register
//         },
//         {
//             path: '/user/:userId',
//             component: User,
//             // meta: {
//             //     requiresAuth: true
//             // }
//         },
//     ]

// })
const router = new Router({
    routes: [{
            path: '/',
            // redirect: '/index',
            component: () =>
                import ('@/pages/Index/Index.vue'),
        },
        {
            path: '/index',
            component: () =>
                import ('@/pages/Index/Index.vue'),
        },
        {
            path: '/login',
            component: () =>
                import ('@/pages/Login/Login.vue'),
        },
        {
            path: '/create',
            component: () =>
                import ('@/pages/Create/Create.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/detail/:blogId',
            component: () =>
                import ('@/pages/Detail/Detail.vue'),

        },
        {
            path: '/edit/:blogId',
            component: () =>
                import ('@/pages/Edit/Edit.vue'),

            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/my',
            component: () =>
                import ('@/pages/My/My.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/register',
            component: () =>
                import ('@/pages/Register/Register.vue'),
        },
        {
            path: '/user/:userId',
            component: () =>
                import ('@/pages/User/User.vue'),
            meta: {
                requiresAuth: true
            }
        },
    ]

})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.

        // store.dispatch('checkLogin')
        // console.log('test dispatch')
        // console.log(store.state.auth.isLogin)
        store.dispatch('checkLogin').then(isLogin => {
                if (!store.getters.isLogin) {
                    next({
                        path: '/login',
                        query: { redirect: to.fullPath }
                    })
                } else {
                    next()
                        // console.log('d1')
                }
            }

        ).catch(() => {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        })
    } else {
        // console.log('d1')
        next() // 确保一定要调用 next()
    }
})
export default router