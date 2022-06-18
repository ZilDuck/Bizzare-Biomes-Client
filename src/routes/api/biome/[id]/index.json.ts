import * as api from '../../../../api';

export async function get(url: { params: { id: never } }) {
    const metadata = await api.get(`biome/${url.params.id}`);
    return {
        body: {
            metadata
        }
    };
}
