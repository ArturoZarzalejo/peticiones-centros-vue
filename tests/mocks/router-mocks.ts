import { Views } from '@/router';
import VueRouter from 'vue-router';

export const RouterMock = new VueRouter({
	routes: [
		{
			name: Views.HOME,
			path: '/',
		},
		{
			name: Views.STORE_EXAMPLE,
			path: '/' + Views.STORE_EXAMPLE,
		},
		{
			name: Views.ABOUT,
			path: '/' + Views.ABOUT,
		},
	],
});