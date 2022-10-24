<template>
  <v-card class="p-0 d-flex flex-column" elevation="0">
    <div>
      <v-img :src="recipe.img"></v-img>
    </div>
    <div class="d-flex align-center my-3">
      <p class="text-red text-uppercase text-caption">{{ recipe.category }}</p>
      <span class="d-inline-flex w-10 mx-2 border dash"></span>
      <p class="text-gray lignten-5 text-caption">
        {{ recipe.readTime }} mins read
      </p>
    </div>
    <h3 class="font-weight-regular">
      {{ recipe.title }}
    </h3>
  </v-card>
</template>

<script lang="ts">
import { LatestItems } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "LatestCard",
  props: {
    recipe: {
      type: Object as PropType<LatestItems>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.dash {
  width: 10px;
}
</style>
