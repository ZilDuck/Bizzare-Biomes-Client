<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../../../components/Footer.svelte';

	// Placeholder
	let nftPlaceholder = '/assets/placeholders/nft-placeholder.png';

	// Backgrounds
	let floatingIsland = '/assets/backgrounds/floating-islands.png';

	// Nft details
	let nftName = 'Name of NFT';
	let biomeTypeName = 'Floating islands';
	let biomeTypeUrl = '#';
	let biomeTypeBackground = '/assets/backgrounds/floating-islands.png';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#FDC3CB] relative">
	<img
		src={biomeTypeBackground}
		alt="Floating island"
		class="bg=[#FDC3CB] w-full absolute top-20 left-0"
	/>
	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-[120px] z-0"
	>
		<h1 class="w-full font-black text-7xl mt-[230px]">{nftName}</h1>
		<p class="mt-5 text-xl">An NFT project for duck holders, and newcomers alike.</p>
	</div>

	<div class="flex flex-row my-5 gap-x-5 w-full max-w-screen-xl justify-start">
		<a href={biomeTypeUrl} class="btn btn-primary">Go back to all {biomeTypeName}'s</a>
	</div>
</section>

<section class="bg-[#FDC3CB]">
	<div class="max-w-screen-xl mx-auto">
		<div class="relative mb-5">
			<img src={floatingIsland} alt="Loading biome" class="min-h-28 border border-[#495A7F]" />
		</div>
		<div class="bg-white rounded-lg w-full max-w-screen-xl flex justify-between items-center p-5">
			<div class="flex flex-row">
				<div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
					<h6 class="text-[#CDCDCD] font-normal text-base">Zilkroad price</h6>
					<h5 class="text-gray-700 font-normal text-base">2000 ZIL</h5>
				</div>
				<div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
					<h6 class="text-[#CDCDCD] font-normal text-base">Sales</h6>
					<h5 class="text-gray-700 font-normal text-base">5</h5>
				</div>
				<div class="flex flex-col gap-1 pr-5 mr-5">
					<h6 class="text-[#CDCDCD] font-normal text-base">Volume 30d</h6>
					<h5 class="text-gray-700 font-normal text-base">$1,200</h5>
				</div>
			</div>
			<div class="flex items-center">
				<div class="w-[40px] h-[40px] bg-[#495A7F] rounded-[100%] mr-5" />
				<p class="text-[#495A7F]">Owned by <a href="#" class="underline">zil16wg79q...</a></p>
			</div>
		</div>
		<div class="flex items-center mt-5 mb-[120px]">
			{#each Array(3) as i}
				<div class="bg-white rounded-lg flex justify-between items-center py-[12px] px-5 mr-5">
					<p><span class="text-[#CDCDCD]">Trait:</span> Property</p>
				</div>
			{/each}
		</div>

		<!-- Owned NFTs -->
		<div class="w-full max-w-screen-xl">
			<h2 class="text-[#495A7F] font-semibold text-2xl">zil16wg79q’s owned NFTs</h2>
			<div class="grid grid-cols-4 gap-6 mt-10">
				{#each Array(8) as i}
					<div class="flex flex-col mb-5">
						<img src={nftPlaceholder} alt="Nft" class="mb-5 rounded-lg" />
						<h3 class="text-[#495A7F] text-xl mb-[10px] font-semibold">Item name</h3>
						<p class="text-[#495A7F]">Collection name</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<Footer />
</section>
