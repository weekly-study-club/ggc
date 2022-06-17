import { createVuetify } from 'vuetify';
import * as Components from 'vuetify/components';
import * as Directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(createVuetify({
    components: Components,
    directives: Directives
  }));
});
