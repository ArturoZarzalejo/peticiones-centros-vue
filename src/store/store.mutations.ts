import { RootState } from '@/store/store.types';
import { MutationTree } from 'vuex';

export const StoreMutations: MutationTree<RootState> = {
	setTechnologiesCDR(state, technologiesCDR: string[]): any {
		state.technologiesCDR = technologiesCDR;
	},
 setTechnologiesCAC(state, technologiesCAC: string[]): any {
		state.technologiesCAC = technologiesCAC;
	},
 setTechnologiesCGIS(state, technologiesCGIS: string[]): any {
		state.technologiesCGIS = technologiesCGIS;
	},
 setCategoriesEmployee(state, categoriesEmployee: string[]): any {
		state.categoriesEmployee = categoriesEmployee;
	},
 setQualityAssuranceTestingTypes(state, qualityAssuranceTestingTypes: string[]): any {
		state.qualityAssuranceTestingTypes = qualityAssuranceTestingTypes;
	},
 setOpportunityTypes(state, opportunityTypes: string[]): any {
		state.opportunityTypes = opportunityTypes;
	},
	setPetition(state, petition: string[]): any {
		state.petition = petition;
	},
};
