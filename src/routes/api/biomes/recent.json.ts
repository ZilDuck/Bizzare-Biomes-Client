import * as api from '../../../api';

export async function get(url: { params: { x: never } }) {
    const biomes = await api.get(`biomes/recent`);
    return {
        body: {
            biomes
        }
    };
}
