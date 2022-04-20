<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';

	// Backgrounds
	let nightSky = 'src/assets/backgrounds/Night sky.png';

	// Comps
	let comp1 = 'src/assets/compositions/1.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#447197] relative">
	<img src={nightSky} alt="Floating island" class="bg=[#447197] w-full absolute top-20 left-0" />
	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0"
	>
		<h1 class="w-full font-black text-7xl mt-[230px] mb-5">Your biomes</h1>
		<div class="flex items-center">
			<div class="w-[40px] h-[40px] bg-white rounded-[100%] mr-5" />
			<p class="text-white">Owned by <a href="#" class="underline">zil16wg79q...</a></p>
		</div>
	</div>
</section>

<section class="bg-[#447197]">
	<div class="max-w-screen-xl mx-auto">
		{#each Array(4) as i}
			<div class="relative mb-5">
				<img src={comp1} alt="Loading biome" class="min-h-28 border border-[#495A7F]" />
			</div>
		{/each}
	</div>

	<Footer />
</section>
