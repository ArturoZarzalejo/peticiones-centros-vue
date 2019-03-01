import { StoreExampleEndpoints } from '@/store/modules/storeExample/storeExample.endpoints';
import { HeroModel, HeroModelKeysBackend, StoreExampleState } from '@/store/modules/storeExample/storeExample.types';
import { RootState } from '@/store/store.types';
import axios from 'axios';
import { ActionTree } from 'vuex';

export const StoreExampleActions: ActionTree<StoreExampleState, RootState> = {
	addHero({ commit, rootState }, getHeroParams): any {
		const endpoint = rootState.isMocksActivated ? StoreExampleEndpoints.getHeroMock : StoreExampleEndpoints.getHero;
		axios.get(endpoint, getHeroParams)
			.then( (response) => {
				if (isHeroModel(response.data)) {
					commit('addHero', prepareHeroForView(response.data));
				}
			});
	},
	initHeroList({ commit, rootState }, getHeroListParams): any {
		const endpoint = rootState.isMocksActivated ? StoreExampleEndpoints.getHeroListMock : StoreExampleEndpoints.getHeroList;
		axios.get(endpoint, getHeroListParams)
			.then( (response) => {
				if (response.data.every(isHeroModel)) {
					const heroListForView: HeroModel[] = response.data.map(prepareHeroForView);
					commit('initHeroList', heroListForView);					
				}
			});
	},
	addHeroByName({ commit, state }, heroName): any {
		const heroForView = state.heroList.find((hero: HeroModel) => {
			return hero.name === heroName;
		});
		commit('addHero', heroForView);
	},
};

/* 'Prepare' functions are only necessary when the server you are requesting resources from is unstable 
 * (response properties change frequently) or you need to parse a complex object to a simpler model you 
 * can use in your views */
function prepareHeroForView(hero: any): HeroModel {
	const heroForView: HeroModel = {
		avatar: hero.avatar,
		description: hero.description,
		id: hero.id,
		name: hero.alias,
	};

	return heroForView;
}

/* Functions checking backend responses are only necessary when the server you are requesting resources
 * from is unstable (response properties change frequently) and need to detect this changes */
function isHeroModel(hero: any): boolean {
	HeroModelKeysBackend.forEach( (heroModelKey) => {
		if (!hero[heroModelKey]) {
			console.error('Hero received could not be parsed. Key "', heroModelKey, '" is missing!');
			return false;
		}
	});

	return true;
}