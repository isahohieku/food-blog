<template>
  <footer>
    <v-container class="container-max">
      <v-row>
        <v-col cols="4">
          <v-img
            src="assets/img/png/hamburger.png"
            width="50"
            class="mb-4"
          ></v-img>
          <p class="text-grey lighten-4 text-body-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            dolorem ducimus ratione quaerat ipsum. Aliquid, quisquam cupiditate.
          </p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="5">
          <v-row>
            <v-col>
              <p class="mb-2 text-body-2">Food app</p>
              <v-list-item
                class="px-0 py-0 text-grey"
                v-for="link in mainRoutes"
                :key="link.name"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-body-2">{{
                    link.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <p class="mb-2 text-body-2">Legal</p>
              <v-list-item
                class="px-0 py-0 text-grey"
                v-for="link in legalRoutes"
                :key="link.name"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-body-2">{{
                    link.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col>
              <p class="mb-2 text-body-2">Follow</p>
              <v-list-item
                class="px-0 py-0 text-grey"
                v-for="link in socialRoutes"
                :key="link.name"
              >
                <v-list-item-content>
                  <v-list-item-title class="text-body-2">{{
                    link.name
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="mb-3" />
      <v-row class="pb-12 text-grey">
        <v-col class="d-flex align-center justify-space-between">
          <p class="text-body-2">
            &copy;{{ year }} Food Recipes - All rights reserved
          </p>
          <v-card elevation="0" color="transparent" class="px-0 py-0">
            <v-card-text class="px-0 py-0">
              <v-btn
                :to="route.path"
                v-for="route in socialRoutes"
                :key="route.icon"
                class="mx-0 text-grey bg-transparent"
                height="30"
                width="30"
                icon
                elevation="0"
              >
                <v-icon size="24px"> mdi-{{ route.icon }} </v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface FooterRoutes {
  path: string;
  name: string;
  icon?: string;
}

export default defineComponent({
  name: "FooterSection",
  setup() {
    const mainRoutes = ref<FooterRoutes[]>([
      {
        name: "About",
        path: "",
      },
      {
        name: "Careers",
        path: "",
      },
      {
        name: "Contact Us",
        path: "",
      },
      {
        name: "Feedback",
        path: "",
      },
    ]);

    const legalRoutes = ref<FooterRoutes[]>([
      {
        name: "Terms",
        path: "",
      },
      {
        name: "Conditions",
        path: "",
      },
      {
        name: "Cookies",
        path: "",
      },
      {
        name: "Copyright",
        path: "",
      },
    ]);

    const socialRoutes = ref<FooterRoutes[]>([
      {
        name: "Facebook",
        path: "",
        icon: "facebook",
      },
      {
        name: "Twitter",
        path: "",
        icon: "twitter",
      },
      {
        name: "Instagram",
        path: "",
        icon: "instagram",
      },
      {
        name: "Youtube",
        path: "",
        icon: "youtube",
      },
    ]);

    const year = new Date().getFullYear();

    return { mainRoutes, socialRoutes, legalRoutes, year };
  },
});
</script>

<style lang="scss" scoped>
footer {
  background-color: #f9f9f9;
  padding-top: 100px;
}

hr {
  margin-top: 100px;
}

.v-list-item--density-default {
  min-height: 30px;
}
</style>
