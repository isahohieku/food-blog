const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  lintOnSave: true,
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    vuetify: {
      styles: { configFile: "src/styles/variables.scss" },
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
