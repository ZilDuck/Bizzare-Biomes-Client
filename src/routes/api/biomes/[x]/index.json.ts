import * as api from '../../../../api';

export async function get(url: { params: { x: never } }) {
    const userBiomes = await api.get(`biomes/${url.params.x}`);
    return {
        body: {
            userBiomes
        }
    };
}
