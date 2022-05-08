<script lang="ts">
    import { onMount } from "svelte";
    type NFT = {
        contract:string,
        name:string,
        symbol:string,
        tokenId:number,
        tokenUri?:string,
        metadata?:{
            image?:any,     //morphs
            resources:[]
        },
        owner:string,
        type:'ZRC1'|'ZRC6',
        resources?:any
    }

    export let nft:NFT

    $: image = ''
    $: id = 0
    $: collection = ''

    onMount(() => {
        const resolveIPFS = (ipfs:string):string => {
            if (!ipfs.toLowerCase().startsWith('ipfs')) return ipfs
            return `https://cloudflare-ipfs.com/ipfs/${ipfs.split('ipfs://')[1]}`
        }

        if (nft.type == 'ZRC1') {
            if (!nft.metadata?.image) {
                image = resolveIPFS(nft.tokenUri!)
            } else {
                image = resolveIPFS(nft.metadata?.image)
            }
        } else if (nft.type == 'ZRC6') {
            image = `https://cdn.zildexr.com/${nft.contract}/${nft.tokenId}?optimizer=image&width=400`
        } else {
            image = `https://cdn.zildexr.com/${nft.contract}/${nft.tokenId}?optimizer=image&width=400`
        }
        image = `https://cdn.zildexr.com/${nft.contract}/${nft.tokenId}?optimizer=image&width=400`
        id = nft.tokenId
        collection = nft.name
    })
</script>

<div class="flex flex-col mb-5">
    <img src={image} alt="Nft" class="mb-5 rounded-lg bg-white bg-opacity-80 aspect-square" />
    <h3 class="text-[#495A7F] text-xl mb-[10px] font-semibold">#{id}</h3>
    <p class="text-[#495A7F]">{collection}</p>
</div>

