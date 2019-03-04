import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { StoreActions } from './store.actions';
import { StoreMutations } from './store.mutations';
// import modules from './store.modules';
import { RootState } from './store.types';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	actions: StoreActions,
	mutations: StoreMutations,
	// modules,
	state: {
		categoriesEmployee: [],
		isMocksActivated: process.env.VUE_APP_MOCKS_ACTIVATED === 'true',
		petition: {},
		qualityAssuranceTestingTypes: [],
		technologiesCAC: [],
		technologiesCDR: [],
		technologiesCGIS: [],
	},
};

export default new Vuex.Store<RootState>(store);
