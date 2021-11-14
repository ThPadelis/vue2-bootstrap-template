<template>
  <div @click="toggleTheme">
    <span class="fa" :class="isDark ? 'fa-sun' : 'fa-moon'"></span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("preferences", {
      getMediaPreference: "getMediaPreference",
      isDark: "isDark",
    }),
  },
  mounted() {
    this.setTheme(this.getMediaPreference);
  },
  methods: {
    ...mapActions("preferences", {
      toggleTheme: "toggleTheme",
      setTheme: "setTheme",
    }),
  },
};
</script>

<style></style>
