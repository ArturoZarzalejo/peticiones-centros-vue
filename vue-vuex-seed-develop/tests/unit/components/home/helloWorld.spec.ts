import { RouterMock } from '@/../tests/mocks/router-mocks';
import HelloWorld from '@/components/HelloWorld.vue';
import { Views } from '@/router';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import VueRouter from 'vue-router';

describe('HelloWorld.vue', () => {

	let wrapper: any;

	beforeEach(() => {
		// Testing vue-router is a special case which needs a local vue instance
		const localVue = createLocalVue();
		localVue.use(VueRouter);

		// Create and shallow mount (no child components are instantiated) our component to be tested
		wrapper = shallowMount(HelloWorld, {
			localVue,
			propsData: { msg: '' },
			router: RouterMock,
		});
	});

	it('renders props.msg when passed', () => {
		expect(wrapper.props().msg).toBeDefined();
	});

	it('should check with $route if go to store example when call goToStoreExample', () => {
		// Call functionality to be tested and get results
		const previousRouteName = wrapper.vm.$route.name;

		// Call function to be tested
		wrapper.vm.goToStoreExample();

		const posteriorRouteName = wrapper.vm.$route.name;

		// Test results
		expect(previousRouteName).not.toEqual(posteriorRouteName);
		expect(posteriorRouteName).toMatch(Views.STORE_EXAMPLE);
	});

	it('should check with spy if go to store example when call goToStoreExample', () => {
		// Declare spies on methods inside the functionality to be tested
		wrapper.vm.$router.push = jest.fn();

		// Call functionality to be tested
		const button = wrapper.find('.my-button');
		button.trigger('click');

		// Test spies have been called
		expect(wrapper.vm.$router.push).toHaveBeenCalled();
	});
});
