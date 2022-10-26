<template>
  <v-container fluid class="jumbotron d-flex align-center justify-end">
    <template class="d-flex flex-column">
      <v-card
        class="py-2 px-1 d-flex align-center justify-space-around text-primary font-weight-semi-normal"
        elevation="0"
        color="rgba(78, 154, 169, 0.15)"
      >
        <v-btn class="new-recipe-btn text-primary" elevation="0"
          >New Recipe</v-btn
        >
        <p class="text-body-2">Delicious fruit juice combinations</p>
        <v-icon> mdi-arrow-right </v-icon>
      </v-card>
      <h4 class="header font-weight-semi mt-5">
        Simple and Tasty Juice Recipes
      </h4>
      <p class="text-body-1 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </template>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "JumbotronMolecule",
});
</script>

<style lang="scss" scoped>
.jumbotron {
  background-image: url(~@/assets/img/jpg/hero.jpg);
  background-size: cover;
  height: 700px;
  padding-right: 180px;
}

.header {
  width: 488px;
  font-size: 85px;
  line-height: 95px;
  letter-spacing: -2px;
}

.text-body-1 {
  width: 444px;
}
</style>
