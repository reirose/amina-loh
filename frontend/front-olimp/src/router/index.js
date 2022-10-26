import VueRouter from 'vue-router'
import * as Vue from 'vue'
console.log(Vue)
import home from '../components/home.vue'
import sign_InForm from '../components/SignInForm.vue'
import sign_UpForm from '../components/SignUpForm.vue'

export default new VueRouter({
    routes:[
        {        
        path: '/',
        name: "home",
        component: home
        },
        {        
            path: '/register',
            name: "register",
            component: sign_UpForm
        },
        {        
            path: '/login',
            name: "login",
            component: sign_InForm
        }       
    ]
})