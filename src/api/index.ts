const baseURL: string = process.env.BIOMES_API ?? 'https://api.bizarrebiomes.com';

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
