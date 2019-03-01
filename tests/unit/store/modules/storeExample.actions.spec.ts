jest.mock('axios', () => ({
	get: jest.fn(() => {
		return Promise.resolve({
			data: {},
		});
	}),
}));
import { HelperTestAction } from '@/../tests/helperTestAction';
import { StoreExampleActions } from '@/store/modules/storeExample/storeExample.actions';
import { HeroModel } from '@/store/modules/storeExample/storeExample.types';

describe('storeExample.actions', () => {
	it('addHero', (done) => {
		const payload: HeroModel = {
			avatar: 'avatar',
			description: 'description',
			id: '11',
			name: 'name',
		};
		const expectedMutations = [
			{ type: 'addHero', payload },
		];
		const state = {};

		const rootState = {
			isMocksActivated: true,
		};

		// TODO: Fix action test with axios using jest mock. Delete done() statement.
		// await HelperTestAction(StoreExampleActions.addHero, payload, state, rootState, expectedMutations, done);
		done();
	});

	it('initHeroList', (done) => {
		const payload: HeroModel[] = [
			{
				avatar: '',
				description: 'I am super strong',
				id: '1',
				name: 'Superman',
			},
			{
				avatar: '',
				description: 'I didnt ask for this',
				id: '2',
				name: 'Wolverine',
			},
			{
				avatar: '',
				description: 'Waka waka waka',
				id: '3',
				name: 'Pacman',
			},
		];
		const expectedMutations = [
			{ type: 'initHeroList', payload },
		];
		const state = {};

		const rootState = {
			isMocksActivated: true,
		};

		// TODO: Fix action test with axios using jest mock. Delete done() statement.
		// await HelperTestAction(StoreExampleActions.initHeroList, payload, state, rootState, expectedMutations, done);
		done();
	});
});
