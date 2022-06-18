import * as api from '../../../../api';

export async function get(url: { params: { address: never } }) {
    const address = await api.get(`address/${url.params.address}`);
    return {
        body: {
            address
        }
    };
}
