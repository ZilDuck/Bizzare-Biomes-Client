<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';

	import MintInfo from '../components/MintInfo.svelte';
	import RecentlyMinted from '../components/RecentlyMinted.svelte';

	// Backgrounds
	let floatingIsland = 'src/assets/backgrounds/floating-islands.png';

	let biomes = [
		{
			name: 'Aurora',
			file: 'src/assets/backgrounds/Aurora borealis sky.png'
		},
		{
			name: 'Big clouds',
			file: 'src/assets/backgrounds/Big clouds.png'
		},
		{
			name: 'Cityscape',
			file: 'src/assets/backgrounds/City scape WIP.png'
		},
		{
			name: 'Comet sky',
			file: 'src/assets/backgrounds/Comet sky.png'
		},
		{
			name: 'Desert sky',
			file: 'src/assets/backgrounds/Desert sky.png'
		},
		{
			name: 'Floating islands',
			file: 'src/assets/backgrounds/Floating islands WIP.png'
		},
		{
			name: 'Great wave',
			file: 'src/assets/backgrounds/Great wave.png'
		},
		{
			name: 'Islands sky',
			file: 'src/assets/backgrounds/Islands sky.png'
		},
		{
			name: 'Japanese pagoda',
			file: 'src/assets/backgrounds/Japanese pagoda.png'
		},
		{
			name: 'Mountain sky',
			file: 'src/assets/backgrounds/Mountains sky.png'
		},
		{
			name: 'Night sky',
			file: 'src/assets/backgrounds/Night sky.png'
		},
		{
			name: 'Pine forest',
			file: 'src/assets/backgrounds/Pine forest.png'
		},
		{
			name: 'Rainbow sky',
			file: 'src/assets/backgrounds/Rainbow sky.png'
		},
		{
			name: 'Sky serpent',
			file: 'src/assets/backgrounds/Sky serpent.png'
		},
		{
			name: 'Spiky ridge',
			file: 'src/assets/backgrounds/Spiky ridge.png'
		},
		{
			name: 'Sunny sky',
			file: 'src/assets/backgrounds/Sunny sky.png'
		},
		{
			name: 'Sunny sky two',
			file: 'src/assets/backgrounds/Sunset sky WIP 2.png'
		},
		{
			name: 'Volcano sky',
			file: 'src/assets/backgrounds/Volcano sky fixed.png'
		},
		{
			name: 'Dark moon',
			file: 'src/assets/backgrounds/Zelda moon.png'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#FDC3CB] relative">
	<img
		src={floatingIsland}
		alt="Floating island"
		class="bg=[#FDC3CB] w-full absolute top-20 left-0"
	/>
	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0"
	>
		<h1 class="w-full font-black text-7xl mt-[230px]">Welcome to Bizarre Biomes.</h1>
		<p class="mt-5 text-xl">An NFT project for duck holders, and newcomers alike.</p>
	</div>
</section>

<section class="bg-[#FDC3CB]">
	<div class="max-w-screen-xl mx-auto">
		{#each biomes as biome}
			<div class="relative mb-5">
				<h2
					class="text-white font-bold text-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
				>
					{biome.name}
				</h2>
				<img src={biome.file} alt="Loading biome" class="min-h-28" />
			</div>
		{/each}
	</div>
	<Footer />
</section>
