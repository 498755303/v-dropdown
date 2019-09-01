import Vue from 'vue'
import App from './App.vue'
import clickoutside from '../util/clickoutside.js';
Vue.directive('clickoutside', clickoutside);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
