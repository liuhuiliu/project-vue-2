import auth from '@/api/auth';


const state = {
    user: null,
    isLogin: false,
}
const getters = {
        user: state => state.user,
        isLogin: state => state.isLogin
    } //getters 多走一步，也是返回user和isLogin
const mutations = {
    setUser(state, payload) {
        // console.log(state.user)
        // console.log(payload.user)
        state.user = payload.user
            // console.log(state.user)
    },
    setLogin(state, payload) {
        // console.log(state.isLogin)
        // console.log(payload.isLogin)
        state.isLogin = payload.isLogin
            // console.log(state.isLogin)
    }
}
const actions = {
    login({ commit }, { username, password }) {
        return auth.login({ username, password })
            .then(res => {
                commit('setUser', { user: res.data })
                commit('setLogin', { isLogin: true })
            })
    },
    async register({ commit }, { username, password }) {
        let res = await auth.register({ username, password })
        commit('setUser', { user: res.data })
        commit('setLogin', { isLogin: true })
        return res.data
    },
    async logout({ commit, state }) {
        await auth.logout()
        commit('setUser', { user: null })
        commit('setLogin', { isLogin: false })
        console.log(localStorage.token)
        localStorage.token = undefined
        console.log(localStorage.token)

    },
    async checkLogin({ commit, state }) {
        // console.log('running checkLogin')
        if (state.isLogin) return true
            // console.log('done')
        let res = await auth.getInfo()
        commit('setLogin', { isLogin: res.isLogin })
            // console.log('done1')
        if (!res.isLogin) return false
        commit('setUser', { user: res.data })
            // console.log('done2')
        return true


    },

}

export default {
    state,
    getters,
    mutations,
    actions
}