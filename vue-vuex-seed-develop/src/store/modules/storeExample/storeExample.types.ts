export interface StoreExampleState {
	heroList: HeroModel[];
}

export interface HeroModel {
	avatar: string;
	description: string;
	id: string;
	name: string;
}

export const HeroModelKeysBackend = ['avatar', 'alias', 'description', 'id'];