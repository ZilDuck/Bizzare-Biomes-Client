<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import RecentlyMinted from "../components/RecentlyMinted.svelte";

	let pineForest = "src/assets/backgrounds/Pine forest.png"
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1" style="background: linear-gradient(180deg, #48597E 76.3%, #3477B7 100%) ">
	<div class="max-w-screen-xl flex mx-auto justify-center items-center h-72 flex-col text-white my-16">
		<h1 class="w-full font-black text-7xl mt-40">
			Welcome to Bizarre Biomes.
		</h1>
	
		<h2 class="mt-5 text-xl">
			An NFT project for duck holders, and newcomers alike.
		</h2>

	</div>
</section>

<img src="{pineForest}" alt="Pine Forest" />

<section style="background: #50cf7d" class="py-28">
	<div class="max-w-screen-xl mx-auto grid grid-cols-2">
		<div>
			<RecentlyMinted />
		</div>
		<div class="p-28">
			<h2 class="text-4xl mb-5 font-semibold text-white">From the skyline to the pits of Mordor.</h2>
			<p class="font-normal text-base text-white">Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000 different biomes.</p>
			<div class="flex flex-row my-5 gap-x-5">
				<button class="btn btn-primary">Mint a new biome</button>
				<button class="btn btn-secondary">View all biomes</button>
			</div>
		</div>	
	</div>
</section>