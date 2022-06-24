import { variables } from '../variables.js';

export const { baseURL } = variables;

console.log('Base URL', baseURL);

type endPoints = 'biomes-list' | 'biomes' | 'street' | string;

export const get = async (point: endPoints) => {
	return fetch(`${baseURL}/${point}`)
		.then((r) => r.text())
		.then((json) => {
			try {
				return JSON.parse(json);
			} catch (err) {
				return json;
			}
		});
};
