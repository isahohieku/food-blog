<template>
  <v-container fluid class="bg d-flex align-center">
    <v-row>
      <v-col class="d-flex flex-column align-center justify-center">
        <p class="text-h3 text-center text-section text-bolder">
          Get delicious recipes to you mailbox
        </p>

        <p
          class="text-h6 font-weight-light mt-2 text-center text-section text-bolder"
        >
          Enjoy weekly handpicked delicious recipes and recommendation
        </p>

        <v-form class="mt-4 d-flex">
          <v-text-field
            placeholder="Email Address"
            variant="solo"
            class="input rounded-te-0 rounded-be-0 email-input"
            hide-details
          >
          </v-text-field>
          <v-btn
            depressed
            tile
            color="primary"
            class="ma-0 rounded-ts-0 rounded-bs-0 px-10"
            height="56"
          >
            Subscribe
          </v-btn>
        </v-form>

        <p class="text-body-2 font-weight-light mt-3">
          By joining our newsletter, you agree to our
          <span class="text-undeline">Terms and Condition</span>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailSubscription",
});
</script>

<style lang="scss" scoped>
.bg {
  background-color: #ffece5;
  height: 600px;
}

.text-section {
  width: 650px;
}

.input {
  width: 450px;
}

.input > .v-input__control > .v-field {
  border: 0;
}
</style>
