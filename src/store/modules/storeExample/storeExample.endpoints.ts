const baseUrl: string = '';
const baseUrlMock: string = '/mocks/';

export const StoreExampleEndpoints = {
	getHero: baseUrl + '/hero',
	getHeroList: baseUrl + '/characters',
	getHeroListMock: baseUrlMock + 'heroes.json',
	getHeroMock: baseUrlMock + 'hero.json',
};
