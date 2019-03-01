import { StoreExampleActions } from '@/store/modules/storeExample/storeExample.actions';
import { StoreExampleGetters } from '@/store/modules/storeExample/storeExample.getters';
import { StoreExampleMutations } from '@/store/modules/storeExample/storeExample.mutations';
import { StoreExampleState } from '@/store/modules/storeExample/storeExample.types';
import { RootState } from '@/store/store.types';
import { Module } from 'vuex';

export const state: StoreExampleState = {
	heroList: [],
};

const namespaced: boolean = true;

export const StoreExampleStore: Module<StoreExampleState, RootState> = {
	actions: StoreExampleActions,
	getters: StoreExampleGetters,
	mutations: StoreExampleMutations,
	namespaced,
	state,
};