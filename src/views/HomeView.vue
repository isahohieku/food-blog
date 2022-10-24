<template>
  <jumbotron-molecule />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JumbotronMolecule from "@/components/molecules/Jumbotron.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    JumbotronMolecule,
  },
});
</script>
