import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify, {
  theme: {
    primary: '#1E5F46',
    secondary: '#7986CB',
    accent: '#9c27b0',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#1E5F46',
    success: '#4caf50'
  }
})

export default new Vuetify({
});
