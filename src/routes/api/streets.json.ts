import * as api from '../../api';

export async function get() {
	const streetNames = await api.get('street');
	return {
		body: {
			streetNames
		}
	};
}
