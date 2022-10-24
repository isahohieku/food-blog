<template>
  <v-app-bar elevation="0">
    <v-spacer />
    <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.path">
      {{ item.title }}
    </v-btn>
    <v-spacer />
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
