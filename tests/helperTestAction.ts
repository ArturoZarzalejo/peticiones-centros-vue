// helper for testing action with expected mutations
export const HelperTestAction = (action: any, payload: any, state: any, rootState: any, expectedMutations: any, done: any) => {
	let count = 0;

	// mock commit
	const commit = (type: any, commitPayload: any) => {
		const mutation = expectedMutations[count];

		try {
			expect(type).toEqual(mutation.type);
			if (commitPayload) {
				expect(commitPayload).toEqual(mutation.payload);
			}
		} catch (error) {
			done(error);
		}

		count++;
		if (count >= expectedMutations.length) {
			done();
		}
	};

	// call the action with mocked store and arguments
	action({ commit, state, rootState }, payload);

	// check if no mutations should have been dispatched
	if (expectedMutations.length === 0) {
		expect(count).toEqual(0);
		done();
	}
};