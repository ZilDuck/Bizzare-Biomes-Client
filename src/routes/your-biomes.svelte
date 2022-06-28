<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import wallet from '../store/wallet';
	import { onDestroy } from 'svelte';
	import BiomeCard from '../components/BiomeCard.svelte';
	let nightSky = '/assets/backgrounds/Night sky.png';
	export let userBiomes: any[] = [];

	$: truncatedWallet = $wallet.bech32
		? `${$wallet.bech32.slice(0, 6)}...${$wallet.bech32.slice(-6)}`
		: false;

	const getBiomes = async (x: string) => {
		({ userBiomes } = await fetch(`/api/biomes/${x}.json`).then((r) => r.json()));
	};

	const unsubscribe = wallet.subscribe((value) => {
		if (value.base16) {
			getBiomes(value.base16);
		}
		console.log('UserBiomes: ', userBiomes.length);
	});

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#447197] relative">
	<img src={nightSky} alt="Floating island" class="bg=[#447197] w-full absolute top-20 left-0" />
	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0"
	>
		<h1 class="w-full font-black text-7xl mt-28 md:mt-[230px] mb-5 text-center px-5">
			Your Biomes
		</h1>
		<div class="flex items-center">
			<div class="w-[40px] h-[40px] bg-white rounded-[100%] mr-5" />
			<p class="text-white">
				Owned by <a
					href="https://viewblock.io/zilliqa/address/{$wallet.bech32}"
					target="_blank"
					class="underline break-all">{truncatedWallet}</a
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
			<p class="text-white text-xl">Oh no, you don't have any Biomes... Time to mint one...</p>
		{/if}
	</div>

	<Footer />
</section>
