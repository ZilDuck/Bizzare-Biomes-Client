import * as api from '../../../api';

export async function get() {
    const mintCount = await api.get(`mintdata`);
    return {
        body: {
            mintCount
        }
    };
}