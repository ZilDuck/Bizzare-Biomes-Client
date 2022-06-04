<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../../components/Footer.svelte';
	import HeroContent from '../../components/HeroContent.svelte';
	import { worldLevelBiomes } from '../../store/biomes';
	const floatingIsland = '/assets/backgrounds/Floating islands WIP.png';
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
	<HeroContent />
</section>

<section class="bg-[#FDC3CB]">
	{#if $worldLevelBiomes}
	<div class="grid grid-rows-6 grid-flow-col gap-40 pl-40 pr-40">
			{#each $worldLevelBiomes as biome}
				<a href="/directory/{biome.sitePath}">
					<div class="relative mb-5">
						<h2
							class="text-white font-bold text-[24px] md:text-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
						>
							{biome.name}
						</h2> <br>
					
					</div>
				</a>
			{/each}
		</div>
	{/if}
	<Footer />
</section>
