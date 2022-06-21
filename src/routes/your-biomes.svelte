<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte'
	import wallet from '../store/wallet'
	import { onDestroy } from 'svelte'
	import BiomeCard from '../components/BiomeCard.svelte'
	let nightSky = '/assets/backgrounds/Night sky.png'
	let comp1 = '/assets/compositions/1.png'
	export let userBiomes:any[] = []


  $: truncatedWallet = $wallet.bech32
    ? `${$wallet.bech32.slice(0, 6)}...${$wallet.bech32.slice(-6)}`
    : false

	// This gets populated after page load, I can't figure out how to
	// Do this in the module script block above
	// but I was getting errors of things being undefined
	// 		Following Zilkroad-Client/src/routes/wallet/[walletId]/index.svelte
	const getBiomes = async (x:string) => {
		const response = await fetch(`/api/biomes/${x}.json`).then((r) => r.json())
		userBiomes = response
		console.log("Wtf: %j", userBiomes)
	}

	const unsubscribe = wallet.subscribe(value => {
		if (value.base16) {
			getBiomes(value.base16)
		}
		console.log("UserBiomes: ", userBiomes.length)
	})

	onDestroy(unsubscribe)

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#447197] relative">
	<img src={nightSky} alt="Floating island" class="bg=[#447197] w-full absolute top-20 left-0" />
	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0"
	>
		<h1 class="w-full font-black text-7xl mt-28 md:mt-[230px] mb-5 text-center px-5">Your Biomes</h1>
		<div class="flex items-center">
			<div class="w-[40px] h-[40px] bg-white rounded-[100%] mr-5" />
			<p class="text-white">Owned by <a href="https://viewblock.io/zilliqa/address/{$wallet.bech32}" target="_blank" class="underline">{truncatedWallet}</a></p>
		</div>
	</div>
</section>

<section class="bg-[#447197]">
	<div class="flex max-w-screen-xl ">
		{#if userBiomes.length > 0}
			{#each userBiomes as biome}
				<div class="relative mb-5 mx-5">
					<BiomeCard class=" self-center" id={biome.id} biome={biome} />
				</div>
			{/each}
		{/if}
	</div>

	<Footer />
</section>
