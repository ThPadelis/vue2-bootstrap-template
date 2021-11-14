const preferencesModule = {
  namespaced: true,
  state: () => ({
    mode: "dark-theme",
  }),
  mutations: {
    setMode: (state, payload) => {
      state.mode = payload;
    },
  },
  actions: {
    toggleTheme({ state, dispatch }) {
      const activeTheme = state.mode;
      activeTheme === "light-theme"
        ? dispatch("setTheme", "dark-theme")
        : dispatch("setTheme", "light-theme");
    },

    setTheme({ commit }, theme) {
      commit("setMode", theme);
      document.documentElement.className = theme;
    },
  },
  getters: {
    isDark: (state) => state.mode === "dark-theme",
    mode: (state) => state.mode,
    getMediaPreference: () => {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return hasDarkPreference ? "dark-theme" : "light-theme";
    },
  },
};

export default preferencesModule;
