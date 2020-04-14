import Vue from 'vue'
import App from './App.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import './assets/css/tailwind.css';

Vue.config.productionTip = false

Vue.component('fa', FontAwesomeIcon);

new Vue({
  render: h => h(App),
}).$mount('#app')
