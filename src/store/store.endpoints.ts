const baseUrl: string = '';
const baseUrlMock: string = '/mocks/';

export const StoreEndpoints = {
	getCategoriesEmployee: baseUrl + '',
	getCategoriesEmployeeMock: baseUrlMock + 'categoriesEmployee.json',
	getOpportunityTypes: baseUrl + '',
	getOpportunityTypesMock: baseUrlMock + 'opportunityTypes.json',
	getPetition: baseUrl + '',
	getPetitionMock: baseUrlMock + 'petition.json',
	getQualityAssuranceTestingTypes: baseUrl + '',
	getQualityAssuranceTestingTypesMock: baseUrlMock + 'qualityAssuranceTestingTypes.json',
	getTechnologiesCAC: baseUrl + '',
	getTechnologiesCACMock: baseUrlMock + 'technologiesCAC.json',
	getTechnologiesCDR: baseUrl + '',
	getTechnologiesCDRMock: baseUrlMock + 'technologiesCDR.json',
	getTechnologiesCGIS: baseUrl + '',
	getTechnologiesCGISMock: baseUrlMock + 'technologiesCGIS.json',
	sendPetition: baseUrl + '',
	sendPetitionMock: baseUrlMock + 'sendPetition.json',
};
