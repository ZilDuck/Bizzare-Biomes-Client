<script context="module">
	export async function load({ params, fetch }) {
		const { id, biome } = params;
		const biomePath = biome;
		const metadata = await API.get(`biome/${id}`);
		const ownedNFTs = await API.get(`address/${metadata.owner}`);
		const truncatedWallet = metadata.owner
			? `${metadata.owner.slice(0, 6)}...${metadata.owner.slice(-6)}`
			: '';
		const nftImage = metadata.data.resources[0].uri;

		console.table(metadata);
		console.table(ownedNFTs);
		console.log(truncatedWallet);
		console.log(nftImage);

		return {
			props: {
				id,
				biomePath,
				metadata,
				ownedNFTs,
				truncatedWallet,
				nftImage
			}
		};
	}
</script>

<script lang="ts">
	import API from '../../../../api';
	import { worldLevelBiomes } from '../../../../store/biomes';
	import Footer from '../../../../components/Footer.svelte';
	import NftCard from '../../../../components/NFTCard.svelte';
	import BiomeCard from '../../../../components/BiomeCard.svelte';
	import HeroContent from '../../../../components/HeroContent.svelte';

	export let id: string;
	export let biomePath: string;
	export let metadata: any;
	export let ownedNFTs: any;
	export let truncatedWallet: string;
	export let nftImage: string;
	console.log(biomePath);
	const biome = $worldLevelBiomes.find((biome) => biome.sitePath === biomePath);

	$: nftName = `${biome?.name} #${id}`;
	let biomeTypeBackground = '/assets/compositions/lightblueclouds.png';
</script>

<svelte:head>
	<title>{nftName}</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#90ebd0] relative">
	<div class="h-[69px] bg-[#90ebd0] " />
	<img src={biomeTypeBackground} alt="Floating island" class="bg-[#90ebd0] w-full top-20 left-0" />
	<HeroContent title={nftName} content="An NFT project for duck holders, and newcomers alike." />
</section>

<section class="bg-[#90ebd0]">
	<div class="max-w-screen-xl mx-auto px-5">
		<div class="flex flex-row mb-5 gap-x-5 w-full max-w-screen-xl justify-start">
			<a href="/directory/{biome?.sitePath}" class="btn btn-primary"
				>Go back to all {biome?.name}'s</a
			>
		</div>
		<div class="relative mb-5">
			<BiomeCard imageText={nftImage} />
		</div>
		<div
			class="bg-white rounded-lg w-full max-w-screen-xl flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center p-5"
		>
			<div class="flex flex-col sm:flex-row">
				<div
					class="flex flex-col sm:gap-1 sm:pr-5 sm:mr-5 border-r-0 sm:border-r border-b sm:border-b-0 border-gray-200 mb-5 sm:mb-0 pb-5 sm:pb-0"
				>
					<h6 class="text-[#CDCDCD] font-normal text-base">Zilkroad price</h6>
					<h5 class="text-gray-700 font-normal text-base">2000 ZIL</h5>
				</div>
				<div
					class="flex flex-col sm:gap-1 sm:pr-5 sm:mr-5 border-r-0 sm:border-r border-b sm:border-b-0 border-gray-200 mb-5 sm:mb-0 pb-5 sm:pb-0"
				>
					<h6 class="text-[#CDCDCD] font-normal text-base">Sales</h6>
					<h5 class="text-gray-700 font-normal text-base">5</h5>
				</div>
				<div
					class="flex flex-col sm:gap-1 sm:pr-5 sm:mr-5 border-b sm:border-b-0 border-gray-200 mb-5 sm:mb-0 pb-5 sm:pb-0"
				>
					<h6 class="text-[#CDCDCD] font-normal text-base">Volume 30d</h6>
					<h5 class="text-gray-700 font-normal text-base">$1,200</h5>
				</div>
			</div>
			<div class="flex items-center">
				<div class="w-[40px] h-[40px] bg-[#495A7F] rounded-[100%] mr-5" />
				<p class="text-[#495A7F]">Owned by <a href="#" class="underline">{truncatedWallet}</a></p>
			</div>
		</div>
		<div class="flex items-center mt-5 mb-[120px]">
			{#if metadata.attributes}
				{#each metadata.attributes as attribute}
					<div class="bg-white rounded-lg flex justify-between items-center py-[12px] px-5 mr-5">
						<p><span class="text-[#CDCDCD]">{attribute.trait_type}:</span> {attribute.value}</p>
					</div>
				{/each}
			{/if}
		</div>

		<!-- Owned NFTs -->
		<div class="w-full max-w-screen-xl">
			{#if ownedNFTs}
				<h2 class="text-[#495A7F] font-semibold text-2xl">
					<a href="#" class="underline">{truncatedWallet}</a>’s owned NFTs
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
					{#each ownedNFTs as nft}
						<NftCard {nft} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<Footer />
</section>
