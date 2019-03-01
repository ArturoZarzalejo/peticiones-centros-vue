import Hero from '@/components/Hero.vue';
import { shallowMount } from '@vue/test-utils';

describe('Hero.vue', () => {

	let wrapper: any;
	const mockAvatar: string = 'avatar';
	const mockDescription: string = 'description';
	const mockName: string = 'name';

	beforeEach(() => {
		wrapper = shallowMount(Hero, {
			propsData: {
				avatar: mockAvatar,
				description: mockDescription,
				name: mockName,
			},
		});
	});

	it('assigns correctly props values', () => {
		expect(wrapper.props().avatar).toEqual(mockAvatar);
		expect(wrapper.props().description).toEqual(mockDescription);
		expect(wrapper.props().name).toEqual(mockName);
	});
});
