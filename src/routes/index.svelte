<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import MintInfo from '../components/MintInfo.svelte';
	import RecentlyMinted from '../components/RecentlyMinted.svelte';

	// Backgrounds
	let pineForest = 'src/assets/backgrounds/Pine forest.png';
	let rocket = 'src/assets/foregrounds/Cloud world.png';
	let shroomland = 'src/assets/foregrounds/Shroomland.png';
	let spikyRidge = 'src/assets/backgrounds/Spiky ridge.png';
	let floatingIsland = 'src/assets/compositions/1.png';

	// Foregrounds
	let arctic = 'src/assets/foregrounds/Arctic.png';

	// Ducks
	let duck1 = 'src/assets/ducks/1.png';
	let duck2 = 'src/assets/foregrounds/2.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section
	class="flex flex-col justify-center items-center flex-1"
	style="background: linear-gradient(180deg, #48597E 76.3%, #3477B7 100%) "
>
	<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white my-16">
		<h1 class="w-full font-black text-7xl mt-[230px]">Welcome to Bizarre Biomes.</h1>

		<h2 class="mt-5 text-xl">An NFT project for duck holders, and newcomers alike.</h2>
		<MintInfo class="mt-5" />
	</div>
</section>

<img src={pineForest} alt="Pine Forest" />

<section style="background: #50cf7d" class="py-28">
	<div class="max-w-screen-xl mx-auto grid grid-cols-2 items-center">
		<div>
			<RecentlyMinted class="border-4 border-gray-700 rounded" />
		</div>
		<div class="px-28">
			<h1 class="text-4xl mb-5 font-semibold text-white">
				From the skyline to the pits of Mordor.
			</h1>
			<p class="font-normal text-base text-white">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000
				different biomes.
			</p>
			<div class="flex flex-row my-5 gap-x-5">
				<button class="btn btn-primary">Mint a new biome</button>
				<button class="btn btn-secondary">View all biomes</button>
			</div>
		</div>
	</div>
</section>

<img src={rocket} alt="rocket" style="background: #50cf7d;" />

<div class="h-16" style="background: linear-gradient(180deg, #E6F1F2 0%, #CCEEF7 100%);" />

<img src={shroomland} alt="shroomland" style="background: #CCEEF7;" />

<section style="background: #A1A1E4;">
	<div class="max-w-screen-xl mx-auto py-28">
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

<img src={spikyRidge} alt="spiky ridge" style="background: #FCB698;" />
<section style="background: #E4CF81;">
	<div class="max-w-screen-xl mx-auto py-28 text-primary">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col  ">
			<h1 class="font-semibold text-4xl max-w-[496px] text-center">Frequently asked questions</h1>
			<p class="mt-5 text-base max-w-[600px] text-center">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000
				different worlds from the multiverse.
			</p>
		</div>
		<div class="grid grid-cols-2 gap-6 mt-20">
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
<img src={floatingIsland} alt="Floating island" style="background: #9DD380;" class="w-full" />
<section style="background: #9DD380;">
	<div class="max-w-screen-xl mx-auto pt-28 text-primary">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col  ">
			<h1 class="font-semibold text-4xl text-white max-w-[496px] text-center">
				A creation from the team behind Ducks.
			</h1>
			<p class="mt-5 text-base max-w-[600px] text-center text-white">
				For a great project, you need a great team. Luckily, we have that with these fine people
				shown below.
			</p>
		</div>
		<div class="grid grid-cols-4 gap-6 mt-20">
			{#each Array(8) as i}
				<div class="bg-[#90C772] flex flex-col items-center justify-center p-5">
					<img src={duck1} alt="Floating island" class="max-w-[100%]" />
					<h3 class="text-white text-xl mb-[10px] font-semibold">Nines</h3>
					<p class="text-white">Developer</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<img src={arctic} alt="Arctic" class="bg-[#9DD380]" />
<section class="py-28 bg-[#EEF5F7]">
	<div class="max-w-screen-xl mx-auto grid grid-cols-2 items-center mb-20">
		<div>
			<h1 class="text-4xl mb-5 font-semibold text-[#495A7F]">Join the discord.</h1>
			<p class="font-normal text-base text-[#495A7F]">
				Join the discord and connect with the rest of the community. Here you will find duck lovers,
				as well as our new biome holders. A friendly place to connect with others.
			</p>
			<div class="flex flex-row my-5 gap-x-5">
				<button class="btn btn-primary">Join the discord</button>
			</div>
		</div>
	</div>
	<hr class="border-b-[1px] border-t-0 border-[rgba(0,0,0,0.1)] bg-transparent" />
</section>
