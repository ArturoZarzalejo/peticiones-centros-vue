import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import modules from './store.modules';
import { RootState } from './store.types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	modules,
	state: {
		isMocksActivated: process.env.VUE_APP_MOCKS_ACTIVATED === 'true',
		version: '1.0.0',
	},
};

export default new Vuex.Store<RootState>(store);
