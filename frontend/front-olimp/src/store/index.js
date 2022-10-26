import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //  храним логин и пароль
        login: '',
        password: '',
        email: ''
    },
    getters:{ // будут нужны для входа
        getLogin(state){
            return state.login
        },
        getPassword(state){
            return state.password
        },
        getEmail(state){
            return state.email
        }
    },
    mutations: {
        setLogin(state, newLogin){
            state.login = newLogin
        },
        setPassword(state, newPassword){
            state.password = newPassword
        },
        setEmail(state, newEmail){
            state.email = newEmail
        }
    }

})