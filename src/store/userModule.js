import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './mutationTypes';

const state = {
  currentUser: {},
  loading: false,
  loggedIn: false
};

const getters = {
}

const actions = {
  async login(context) {
    // First, let vuex know that we are waiting for user data
    context.commit(LOGIN_REQUEST);

    try {
      const meResponse = await this.$http.post('/api/users/me');
      const currentUser = meResponse.data;
      context.commit(LOGIN_SUCCESS, currentUser);
    } catch(err) {
      context.commit(LOGIN_FAIL);
    }
  }
};

const mutations = {
  [LOGIN_REQUEST](state) {
    state.loading = true;
  },
  [LOGIN_SUCCESS](state, currentUser) {
    state.currentUser = currentUser;
    state.loggedIn = true,
    state.loading = false;
  },
  [LOGIN_FAIL](state) {
    state.loading = false;

  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
