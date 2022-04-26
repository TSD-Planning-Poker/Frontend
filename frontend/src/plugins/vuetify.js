import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#212121", 
          secondary: "#2962ff",
          accent: "c6ff00", // #3F51B5
        },
      },
    },
  })