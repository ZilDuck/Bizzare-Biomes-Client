<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import MintInfo from "../components/MintInfo.svelte";
	import RecentlyMinted from "../components/RecentlyMinted.svelte";

	let pineForest = "src/assets/backgrounds/Pine forest.png"
	let rocket = "src/assets/foregrounds/Cloud world.png"
	let shroomland = "src/assets/foregrounds/Shroomland.png"
	let spikyRidge = "src/assets/backgrounds/Spiky ridge.png"
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
		<MintInfo class="mt-5" />
	</div>
</section>

<img src="{pineForest}" alt="Pine Forest" />

<section style="background: #50cf7d" class="py-28">
	<div class="max-w-screen-xl mx-auto grid grid-cols-2">
		<div>
			<RecentlyMinted class="border-4 border-gray-700 rounded" />
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

<img src="{rocket}" alt="rocket"  style="background: #50cf7d;" />

<div class="h-16" style="background: linear-gradient(180deg, #E6F1F2 0%, #CCEEF7 100%);"></div>

<img src="{shroomland}" alt="shroomland"  style="background: #CCEEF7;"/>

<section style="background: #A1A1E4;">
	<div class="max-w-screen-xl mx-auto py-28">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white ">
			<h3 class="font-semibold text-4xl ">
				A title on the latest NFTs minted
			</h3>
		
			<h2 class="mt-5 text-base">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000 different worlds from the multiverse.
			</h2>
	
		</div>
		<RecentlyMinted class="mt-20" />
	</div>
</section>


<div class="h-16" style="background: linear-gradient(180deg, #A1A1E4 0%, #FCB698 100%);"></div>

<img src="{spikyRidge}" alt="spiky ridge"  style="background: #FCB698;"/>

<section style="background: #E4CF81;">
	<div class="max-w-screen-xl mx-auto py-28 text-primary">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col  ">
			<h3 class="font-semibold text-4xl ">
			Frequently asked questions
			</h3>
		
			<h2 class="mt-5 text-base">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000 different worlds from the multiverse.
			</h2>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-20">
			{#each Array(7) as i}
			<div>
				<h4 class="font-semibold text-2xl">FAQ title.</h4>
				<p class="mt-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate risus non diam sit quis quisque. Purus commodo aliquet justo, ipsum eu tortor quis vitae.</p>
			</div>
			{/each}
		</div>
	</div>
</section>

<div class="h-28" style="background: linear-gradient(180deg, #E4CF81 0%, #FDC3CB 100%);"></div>
