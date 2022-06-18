import * as api from '../../../../api';

export async function get(url: { params: { street: never } }) {
	const biomesList = await api.get(`street/${url.params.street}`);
	return {
		body: {
			biomesList
		}
	};
}
