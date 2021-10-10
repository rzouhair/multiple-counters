import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import UUID from "vue-uuid";

Vue.use(UUID)
Vue.use(Vuetify)
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

new Vue({
  vuetify : new Vuetify(),
  render: h => h(App),
}).$mount('#app')
