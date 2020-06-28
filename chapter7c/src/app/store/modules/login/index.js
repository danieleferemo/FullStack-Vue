import axios from 'axios';

const state = {
    token: null,
    loading: false
}

const mutations = {
    SET_TOKEN (state, token) {
        state.token = token;
    },
    LOGIN_PENDING (state) {
        state.loading = false;
    },
    LOGIN_SUCCESS (state) {
        state.loading = true;
    }
}

const actions = {
    login ({ commit }) {
        return axios.post('/api/login')
                    .then((response) => {
                        localStorage.setItem("token", response.data.token);
                        commit('SET_TOKEN', response.data.token);
                        commit('LOGIN_SUCCESS');
                    })
    },
    logout ( { commit } ) {
        return new Promise((resolve) => {
            localStorage.removeItem("token");
            commit('SET_TOKEN', null);
            commit('LOGIN_PENDING');
            resolve();
        });
    }
}

const getters = {
    token: state => state.token,
    loading: state => state.loading
}

const loginModule = { state, mutations, actions, getters }

export default loginModule;