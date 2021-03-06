import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/global.less'
import '@/assets/css/common.less'

Vue.config.productionTip = false;
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
