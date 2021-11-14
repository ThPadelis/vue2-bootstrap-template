import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import preferencesModule from "./preferencesModule";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    preferences: preferencesModule,
  },
  plugins: [createPersistedState({})],
});
