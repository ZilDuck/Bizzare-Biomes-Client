<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';

	import MintInfo from '../components/MintInfo.svelte';
	import RecentlyMinted from '../components/RecentlyMinted.svelte';

	// Backgrounds
	let pineForest = '/assets/backgrounds/Pine forest.png';
	let rocket = '/assets/foregrounds/Cloud world.png';
	let shroomland = '/assets/foregrounds/Shroomland.png';
	let spikyRidge = '/assets/backgrounds/Spiky ridge.png';
	let floatingIsland = '/assets/compositions/1.png';

	// Ducks
	let duck1 = 'src/assets/ducks/1.png';
	let duck2 = 'src/assets/foregrounds/2.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section
	class="flex flex-col justify-center items-center flex-1"
	style="background: linear-gradient(180deg, #48597E 76.3%, #3477B7 100%)"
>
	<div
		class="max-w-screen-xl flex justify-center items-center flex-col text-white my-16 mx-auto px-5"
	>
		<h1 class="w-full font-black text-5xl sm:text-7xl mt-[160px] sm:mt-[230px] text-center">
			Welcome to Bizarre Biomes.
		</h1>
		<h2 class="mt-5 text-xl text-center">An NFT project for duck holders, and newcomers alike.</h2>
		<MintInfo class="mt-10 sm:mt-5" />
	</div>
</section>

<img src={pineForest} alt="Pine Forest" />

<section class="bg-[#50cf7d] py-28">
	<div class="max-w-screen-xl grid md:grid-cols-2 grid-cols-1 items-center mx-auto px-5">
		<div class="px-5 sm:px-0">
			<RecentlyMinted class="border-4 border-gray-700 rounded" />
		</div>
		<div class="px-5 sm:px-0 mt-10 md:mt-0 w-full flex justify-center">
			<div class="max-w-full md:max-w-[412px]">
				<h1 class="text-4xl mb-5 font-semibold text-white">
					From the skyline to the pits of Mordor.
				</h1>
				<p class="font-normal text-base text-white">
					Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of
					2000 different biomes.
				</p>
				<div class="flex flex-row flex-wrap my-5 gap-x-5">
					<a href={'/mint'} class="btn btn-primary">Mint a new biome</a>
					<button class="btn btn-secondary">View all biomes</button>
				</div>
			</div>
		</div>
	</div>
</section>

<img src={rocket} alt="rocket" class="bg-[#50cf7d] max-w-full" />

<div
	class="h-16 max-w-full"
	style="background: linear-gradient(180deg, #E6F1F2 0%, #CCEEF7 100%);"
/>

<img src={shroomland} alt="shroomland" class="bg-[#CCEEF7]" />

<section class="bg-[#A1A1E4]">
	<div class="max-w-screen-xl py-28 mx-auto px-5">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white ">
			<h1 class="font-semibold text-4xl max-w-[496px] text-center">
				A title on the latest NFTs minted
			</h1>
			<p class="mt-5 text-base max-w-[600px] text-center">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000
				different worlds from the multiverse.
			</p>
		</div>
		<RecentlyMinted class="mt-20" />
	</div>
</section>

<div class="h-16" style="background: linear-gradient(180deg, #A1A1E4 0%, #FCB698 100%);" />

<img src={spikyRidge} alt="spiky ridge" class="bg-[#FCB698]" />
<section style="background: #E4CF81;">
	<div class="max-w-screen-xl py-28 text-primary mx-auto px-5">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col  ">
			<h1 class="font-semibold text-4xl max-w-[496px] text-center">Frequently asked questions</h1>
			<p class="mt-5 text-base max-w-[600px] text-center">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000
				different worlds from the multiverse.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
			{#each Array(7) as i}
				<div>
					<h2 class="font-semibold text-2xl">FAQ title.</h2>
					<p class="mt-5 ">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate risus non diam sit
						quis quisque. Purus commodo aliquet justo, ipsum eu tortor quis vitae.
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<div class="h-28" style="background: linear-gradient(180deg, #E4CF81 0%, #FDC3CB 100%);" />

<img src={floatingIsland} alt="Floating island" class="bg=[#9DD380] w-full" />

<section class="bg-[#9DD380]">
	<div class="max-w-screen-xl mx-auto mt-[-1px] pt-28 text-primary">
		<div class="max-w-screen-xl flex justify-center items-center flex-col mx-auto px-5">
			<h1 class="font-semibold text-4xl text-white max-w-[496px] text-center">
				A creation from the team behind Ducks.
			</h1>
			<p class="mt-5 text-base max-w-[600px] text-center text-white">
				For a great project, you need a great team. Luckily, we have that with these fine people
				shown below.
			</p>
		</div>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 mx-auto px-5">
			{#each Array(8) as i}
				<div class="bg-[#90C772] flex flex-col items-center justify-center p-5">
					<img src={duck1} alt="Floating island" class="max-w-[100%] mb-5" />
					<h3 class="text-white text-xl mb-[10px] font-semibold">Nines</h3>
					<p class="text-white">Developer</p>
				</div>
			{/each}
		</div>
	</div>
	<Footer />
</section>
