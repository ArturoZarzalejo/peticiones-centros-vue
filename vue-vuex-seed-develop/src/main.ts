import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store/store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
	i18n,
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');

Vue.use(Vuetify)
