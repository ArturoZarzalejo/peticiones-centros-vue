import HeroListAddMore from '@/components/HeroListAddMore.vue';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';

describe('HeroListAddMore.vue', () => {

	let wrapper: any;
	const mockHeroName: string = 'hero';
	const mockHeroListNames: string[] = [mockHeroName, mockHeroName, mockHeroName];
	const actionSpy = jest.fn();

	beforeEach(() => {
		const localVue = createLocalVue();
		localVue.use(Vuex);

		const store = new Vuex.Store({
			modules: {
				storeExample: {
					actions: {
						addHeroByName: actionSpy,
					},
					getters: {
						getHeroListNames: () => mockHeroListNames,
					},
					namespaced: true,
					state: { },
				},
			},
			state: { },
		});

		wrapper = mount(HeroListAddMore, {
			localVue,
			store,
		});
	});

	it('should set heroListNames', () => {
		expect(wrapper.vm.heroListNames).toBe(mockHeroListNames);
	});

	it('should call action to add hero when clicking button', () => {
		wrapper.find('button').trigger('click');
		expect(actionSpy).toHaveBeenCalled();
	});
});
