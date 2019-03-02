import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import store from './store/store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
	theme: {
		primary: colors.orange.darken1,
		secondary: colors.orange.lighten4,
		accent: colors.orange.base
	}
})

new Vue({
	i18n,
	render: (h) => h(App),
	router,
	store,
}).$mount('#app');


