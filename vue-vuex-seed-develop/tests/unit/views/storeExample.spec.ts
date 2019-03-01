import { RouterMock } from '@/../tests/mocks/router-mocks';
import HeroList from '@/components/HeroList.vue';
import HeroListAddMore from '@/components/HeroListAddMore.vue';
import StoreExample from '@/views/StoreExample.vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import Vuex from 'vuex';


describe('StoreExample.vue', () => {

	let wrapper: any;
	const initHeroListSpy = jest.fn();
	const addHeroSpy = jest.fn();
	const paramExample = 'paramExample';

	beforeEach(() => {
		const localVue = createLocalVue();
		localVue.use(Vuex);
		localVue.use(VueRouter);
		localVue.use(VueI18n);

		const store = new Vuex.Store({
			modules: {
				storeExample: {
					actions: {
						addHero: addHeroSpy,
						initHeroList: initHeroListSpy,
					},
					namespaced: true,
					state: { },
				},
			},
			state: {
				appVersion: 'appVersion',
			},
		});

		wrapper = shallowMount(StoreExample, {
			i18n: { },
			localVue,
			mocks: {
				$t: jest.fn(),
			},
			propsData: {
				paramExample,
			},
			router: RouterMock,
			store,
		});

	});

	it('should have called update hero list action when creating component', () => {
		expect(initHeroListSpy).toHaveBeenCalled();
	});

	it('should instatiate several components', () => {
		expect(wrapper.find(HeroList)).toBeTruthy();
		expect(wrapper.find(HeroListAddMore)).toBeTruthy();
	});

	it('should have set props when creating component', () => {
		expect(wrapper.vm.paramExample).toBe(paramExample);
	});

	it('should call action to add hero when clicking button', () => {
		wrapper.find('button').trigger('click');
		expect(addHeroSpy).toHaveBeenCalled();
	});
});
