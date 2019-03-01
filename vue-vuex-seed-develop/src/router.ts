import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export enum Views {
	ABOUT = 'About',
	HOME = 'Home',
	STORE_EXAMPLE = 'StoreExample',
}

function getView(view: string) {
	return () => import(/* webpackChunkName: "view" */ '@/views/' + view + '.vue');
}

export default new Router({
	base: process.env.BASE_URL,
	mode: 'history',
	routes: [
		{
			component: getView(Views.HOME),
			name: Views.HOME,
			path: '/',
		},
		{
			component: getView(Views.STORE_EXAMPLE),
			name: Views.STORE_EXAMPLE,
			path: '/storeExample/:paramExample?',
			props: true,
		},
		{
			component: getView(Views.ABOUT),
			name: Views.ABOUT,
			path: '/about',
		},
	],
});
