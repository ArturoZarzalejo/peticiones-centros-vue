import { StoreExampleState } from '@/store/modules/storeExample/storeExample.types';
import { RootState } from '@/store/store.types';
import { GetterTree } from 'vuex';

export const StoreExampleGetters: GetterTree<StoreExampleState, RootState> = {
	getHeroListNames(state): string[] {
		return [...new Set(state.heroList.map((hero) => hero.name))];
	},
};
