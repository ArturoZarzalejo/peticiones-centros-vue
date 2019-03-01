import Hero from '@/components/Hero.vue';
import HeroList from '@/components/HeroList.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

describe('HeroList.vue', () => {

	let wrapper: any;
	const mockHero = {
		avatar: 'avatar',
		description: 'description',
		id: '1',
		name: 'name',
	};

	beforeEach(() => {
		const localVue = createLocalVue();
		localVue.use(Vuex);

		const store = new Vuex.Store({
			modules: {
				storeExample: {
					namespaced: true,
					state: {
						heroList: [mockHero, mockHero, mockHero],
					},
				},
			},
			state: { },
		});

		wrapper = mount(HeroList, {
			localVue,
			store,
		});
	});

	it('renders Hero components depending on the state', () => {
		expect(wrapper.findAll(Hero).length).toBe(3);
	});
});
