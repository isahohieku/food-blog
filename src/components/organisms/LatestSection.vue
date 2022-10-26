<template>
  <v-container>
    <v-row>
      <v-col>
        <h2 class="font-weight-semi mb-2 mt-16">Latest Recipe</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="recipe in latestRecipes" :key="recipe.img">
        <latest-card :recipe="recipe" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LatestCard from "@/components/molecules/LatestCard.vue";
import { LatestItems } from "@/types";

export default defineComponent({
  name: "TrendingSection",
  components: {
    LatestCard,
  },
  setup() {
    const latestRecipes = ref<LatestItems[]>([
      {
        title: "Simple Juice Recipes to boost your immune system",
        img: "assets/img/jpg/orange.jpg",
        category: "Fruits",
        readTime: 5,
      },
      {
        title: "Juice variations using avocado",
        img: "assets/img/jpg/avocado.jpg",
        category: "Fruits",
        readTime: 3,
      },
      {
        title: "Simple recipe strawberry juice",
        img: "assets/img/jpg/strawberry.jpg",
        category: "Fruits",
        readTime: 2,
      },
    ]);

    return { latestRecipes };
  },
});
</script>
