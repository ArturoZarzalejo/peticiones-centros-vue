import { StoreExampleGetters } from '@/store/modules/storeExample/storeExample.getters';
import { StoreExampleState } from '@/store/modules/storeExample/storeExample.types';
import Store from '@/store/store.ts';

describe('storeExample.getters', () => {

	it('getHeroListNames', () => {
		const state: StoreExampleState = {
			heroList: [
				{
					avatar: 'avatar 1',
					description: 'description 1',
					id: '11',
					name: 'name 1',
				},
				{
					avatar: 'avatar 2',
					description: 'description 2',
					id: '22',
					name: 'name 2',
				},
			],
		};

		const otherGetters = {};

		const expectedResult = state.heroList.map((hero) => hero.name);
		const result = StoreExampleGetters.getHeroListNames(state, otherGetters, Store.state, Store.getters);

		expect(result).toEqual(expectedResult);
	});
});
