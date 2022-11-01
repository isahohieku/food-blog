<template>
  <v-container class="container-max mt-16 mb-16">
    <v-row>
      <v-col>
        <h2 class="font-weight-semi mb-2">Trending</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <trending-card />
      </v-col>
      <v-col>
        <trending-card />
      </v-col>
      <v-col>
        <trending-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TrendingCard from "../molecules/TrendingCard.vue";

export default defineComponent({
  name: "TrendingSection",
  components: {
    TrendingCard,
  },
});
</script>
