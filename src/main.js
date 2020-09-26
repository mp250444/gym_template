import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
Vue.config.productionTip = false
export const eventBus = new Vue();


Vue.use(VueRouter);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
