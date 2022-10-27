<template>
  <v-app-bar elevation="0">
    <v-container class="d-flex align-center">
      <v-app-bar-nav-icon
        ><v-img src="assets/img/png/hamburger.png" width="30"
      /></v-app-bar-nav-icon>
      <v-spacer />
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
        {{ item.title }}
      </v-btn>
      <v-spacer />
      <v-card width="48" elevation="0"></v-card>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  data() {
    return {
      menuItems: [
        { title: "Browse", path: "/browse" },
        { title: "Trending", path: "/trending" },
        { title: "Contributors", path: "/contributors" },
        { title: "Community", path: "/community" },
      ],
    };
  },
});
</script>
