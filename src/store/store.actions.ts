import { StoreEndpoints } from '@/store/store.endpoints';
import { RootState } from '@/store/store.types';
import axios from 'axios';
import { ActionTree } from 'vuex';

export const StoreActions: ActionTree<RootState, RootState> = {
	setTechnologiesCDR({ commit, state }): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.getTechnologiesCDRMock : StoreEndpoints.getTechnologiesCDR;
		return axios.get(endpoint)
				.then( (response) => {
					commit('setTechnologiesCDR', response.data);
				});
	},
	setTechnologiesCAC({ commit, state }): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.getTechnologiesCACMock : StoreEndpoints.getTechnologiesCAC;
		return axios.get(endpoint)
				.then( (response) => {
					commit('setTechnologiesCAC', response.data);
				});
	},
	setTechnologiesCGIS({ commit, state }): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.getTechnologiesCGISMock : StoreEndpoints.getTechnologiesCGIS;
		return axios.get(endpoint)
				.then( (response) => {
					commit('setTechnologiesCGIS', response.data);
				});
	},
	setCategoriesEmployee({ commit, state }): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.getCategoriesEmployeeMock : StoreEndpoints.getCategoriesEmployee;
		return axios.get(endpoint)
				.then( (response) => {
					commit('setCategoriesEmployee', response.data);
				});
	},
	setQualityAssuranceTestingTypes({ commit, state }): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.getQualityAssuranceTestingTypesMock : StoreEndpoints.getQualityAssuranceTestingTypes;
		return axios.get(endpoint)
				.then( (response) => {
					commit('setQualityAssuranceTestingTypes', response.data);
				});
	},
	setSelectableInfoPetitionForm({ dispatch }): any {
		const setters = [];
		setters.push(dispatch('setTechnologiesCDR'));
		setters.push(dispatch('setTechnologiesCAC'));
		setters.push(dispatch('setTechnologiesCGIS'));
		setters.push(dispatch('setCategoriesEmployee'));
		setters.push(dispatch('setQualityAssuranceTestingTypes'));

		axios.all(setters).then(axios.spread( (res) => {
			console.log('Recibida toda la informacion sobre el form correctamente');
		}));
	},
	setPetition({ commit, state }): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.getPetitionMock : StoreEndpoints.getPetition;
		axios.get(endpoint)
		.then( (response) => {
			commit('setPetition', response.data);
		});
	},
	sendPetition({ state }, petition): any {
		const endpoint = state.isMocksActivated ? StoreEndpoints.sendPetitionMock : StoreEndpoints.sendPetition;
		axios.post(endpoint, petition)
		.then( (response) => {
			console.log('Peticion enviada correctamente');
		});
	},
};
