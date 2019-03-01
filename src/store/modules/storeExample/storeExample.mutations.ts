import { HeroModel, StoreExampleState } from '@/store/modules/storeExample/storeExample.types';
import { MutationTree } from 'vuex';

export const StoreExampleMutations: MutationTree<StoreExampleState> = {
	addHero(state, hero: HeroModel): any {
		state.heroList.push(hero);
	},
	initHeroList(state, heroList: HeroModel[]): any {
		state.heroList = heroList;
	},
};