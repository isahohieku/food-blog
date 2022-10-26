<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
    <footer-section />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/organisms/NavBar.vue";
import FooterSection from "@/components/organisms/FooterSection.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    FooterSection,
  },
});
</script>
