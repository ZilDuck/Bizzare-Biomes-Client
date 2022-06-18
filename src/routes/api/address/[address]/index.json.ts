import * as api from '../../../../api';

export async function get(url: { params: { address: never }, url: {searchParams: { get: (page: string) => number }}} ) {
    const page = url.url.searchParams.get('page') || 1
    const address = await api.get(`address/${url.params.address}?page=${page}&size=20`)
    const {pagination, ownedNFTs} = address
    return {
        body: {
            pagination,
            ownedNFTs
        }
    }
}
