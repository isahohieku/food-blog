<template>
  <jumbotron-molecule />
  <!-- <trending-section /> -->
  <latest-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JumbotronMolecule from "@/components/molecules/Jumbotron.vue";
// import TrendingSection from "@/components/organisms/TrendingSection.vue";
import LatestSection from "@/components/organisms/LatestSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    JumbotronMolecule,
    // TrendingSection,
    LatestSection,
  },
});
</script>
