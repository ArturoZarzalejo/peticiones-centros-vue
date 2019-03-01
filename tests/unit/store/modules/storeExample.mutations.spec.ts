import { StoreExampleMutations } from '@/store/modules/storeExample/storeExample.mutations';

describe('storeExample.mutations', () => {

	it('addHero', () => {
		const { addHero } = StoreExampleMutations;

		const state = {
			heroList: [
				{
					avatar: 'avatar',
					description: 'description',
					id: '11',
					name: 'name',
				},
			],
		};
		const oldHeroListLength = state.heroList.length;
		const newHero = [
			{
				avatar: 'newAvatar',
				description: 'newDescription',
				id: '1',
				name: 'newName',
			},
		];

		addHero(state, newHero);

		expect(state.heroList.length).toEqual(oldHeroListLength + 1);
	});

	it('initHeroList', () => {
		const { initHeroList } = StoreExampleMutations;

		const state = {
			heroList: [
				{
					avatar: 'avatar',
					description: 'description',
					id: '11',
					name: 'name',
				},
			],
		};
		const oldHeroList = state.heroList;
		const newHeroList = [
			{
				avatar: 'newAvatar',
				description: 'newDescription',
				id: '22',
				name: 'newName',
			},
		];

		initHeroList(state, newHeroList);

		expect(state.heroList).not.toEqual(oldHeroList);
	});
});
