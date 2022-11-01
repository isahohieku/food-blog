<template>
  <jumbotron-molecule />
  <latest-section />
  <email-subscription />
  <trending-section />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JumbotronMolecule from "@/components/molecules/Jumbotron.vue";
import TrendingSection from "@/components/organisms/TrendingSection.vue";
import LatestSection from "@/components/organisms/LatestSection.vue";
import EmailSubscription from "@/components/organisms/EmaliSubscriptionSection.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    JumbotronMolecule,
    TrendingSection,
    LatestSection,
    EmailSubscription,
  },
});
</script>
