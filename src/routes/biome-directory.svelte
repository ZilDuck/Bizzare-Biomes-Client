<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';

	import MintInfo from '../components/MintInfo.svelte';
	import RecentlyMinted from '../components/RecentlyMinted.svelte';

	// Backgrounds
	let floatingIsland = 'src/assets/backgrounds/floating-islands.png';
	let pineForest = 'src/assets/backgrounds/Pine forest.png';

	// Colours

	let topColor = '#3477B7';
	let mainColor = '#50CF7D';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#50CF7D] relative">
	<div class="top-section absolute top-0 left-0 w-full h-[100px] bg-[#3477B7]" />
	<img src={pineForest} alt="Pine Forest" class="w-full absolute top-20 left-0" />
	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0"
	>
		<h1 class="w-full font-black text-[72px] mt-[230px] text-center">View all the biomes names.</h1>
		<p class="mt-5 text-xl">An NFT project for duck holders, and newcomers alike.</p>
	</div>
	<div class="flex flex-row my-5 gap-x-5 w-full max-w-screen-xl justify-start">
		<a href="#" class="btn btn-primary">Go back to all biomes</a>
	</div>
	<div class="max-w-screen-xl w-full bg-[#495A7F] p-10 pb-20">
		<div class="w-full border-b-[1px] border-b-[#647FBB] pb-10 mb-10">
			<h2 class="text-4xl text-white font-semibold">Biome directory</h2>
		</div>
		<ul class="grid grid-cols-3 gap-6 mt-10">
			{#each Array(18) as i}
				<li><a href="#" class="text-xl font-semibold text-white">Biome #0277</a></li>
			{/each}
		</ul>
	</div>
	<div class="bg-[{mainColor}]">
		<Footer />
	</div>
</section>
