<template>
  <b-navbar
    toggleable="lg"
    :type="isDark ? 'dark' : 'light'"
    :sticky="true"
    class="mb-4"
  >
    <b-container
      ><b-navbar-brand to="/">VueBootstrap</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-for="(v, i) in views" :key="i" :to="v.to">{{
            v.text
          }}</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <theme-button />
          </b-nav-item>
        </b-navbar-nav> </b-collapse
    ></b-container>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import ThemeButton from "./ThemeButton.vue";
export default {
  name: "navbar",
  components: {
    ThemeButton,
  },
  data: () => ({
    views: [{ text: "About", to: "/about" }],
  }),
  computed: {
    ...mapGetters("preferences", {
      isDark: "isDark",
    }),
  },
};
</script>
