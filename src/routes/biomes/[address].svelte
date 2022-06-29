<script context="module" lang="ts">
    export async function load({ params, url, fetch }) {
        const { address } = params;
        const { userBiomes } = await fetch(`/api/biomes/${address}.json`).then((r) => r.json());

        return {
            props: {
                address: address,
                userBiomes: userBiomes,
            }
        }
    }
</script>

<script lang="ts">
    import Footer from '../../components/Footer.svelte';

    import BiomeCard from '../../components/BiomeCard.svelte';
    let nightSky = '/assets/backgrounds/Night sky.png';
    export let address: string;
    export let userBiomes: any[];
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#447197] relative">
    <img src={nightSky} alt="Floating island" class="bg=[#447197] w-full absolute top-20 left-0" />
    <div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0">
        <h1 class="w-full font-black text-7xl mt-28 md:mt-[230px] mb-5 text-center px-5">
            Biomes
        </h1>
        <div class="flex items-center">
            <div class="w-[40px] h-[40px] bg-white rounded-[100%] mr-5" />
            <p class="text-white">
                Owned by <a
                    href="https://viewblock.io/zilliqa/address/{address}"
                    target="_blank"
                    class="underline break-all">{address}</a
            >
            </p>
        </div>
    </div>
</section>

<section class="bg-[#447197]">
    <div class="flex max-w-screen-xl justify-center m-auto flex-wrap">
        {#if userBiomes.length > 0}
            {#each userBiomes as biome}
                <div class="relative mb-5 mx-5">
                    <BiomeCard class=" self-center" id={biome.id} {biome} />
                </div>
            {/each}
        {/if}
        {#if userBiomes.length === 0}
            <p class="text-white text-xl">This address does not have any Biomes...</p>
        {/if}
    </div>

    <Footer />
</section>
