import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';
import { mount } from '@vue/test-utils';

describe('Home.vue', () => {

	let wrapper: any;

	beforeEach(() => {
		wrapper = mount(Home, { });
	});

	it('should have init variables defined', () => {
		expect(wrapper.vm.appVersion).toBeDefined();
	});

	it('should instatiate a HelloWorld component', () => {
		expect(wrapper.find(HelloWorld)).toBeTruthy();
	});
});
