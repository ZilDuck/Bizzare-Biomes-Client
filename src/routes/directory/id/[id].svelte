<script context="module">
	export async function load({ params, url }) {
		const { id } = params;
		const page = url.searchParams.get('page') ?? 1;

		const metadata = await API.get(`biome/${id}`);
		console.log(metadata)
		const { ownedNFTs, pagination } = await API.get(
			`address/${metadata.base16}?page=${page}&size=20`
		);
		console.log(page)

		const truncatedWallet = metadata.bech32
			? `${metadata.bech32.slice(0, 6)}...${metadata.bech32.slice(-6)}`
			: '';

		const nftImage = metadata.data.resources[0].uri;
		const biomeName = metadata.data.attributes[0].value;

		return {
			props: {
				biomeName,
				id,
				metadata,
				ownedNFTs,
				truncatedWallet,
				nftImage,
				pagination
			}
		};
	}
</script>

<script lang="ts">
	import API from '../../../api';
	import { worldLevelBiomes } from '../../../store/biomes';
	import Footer from '../../../components/Footer.svelte';
	import NftCard from '../../../components/NFTCard.svelte';
	import BiomeCard from '../../../components/BiomeCard.svelte';
	import Pagination from '../../../components/Pagination.svelte';
	import HeroContent from '../../../components/HeroContent.svelte';

	import { page } from '$app/stores';

	export let id: string;
	export let biomeName: string;
	export let metadata: any;
	export let ownedNFTs: any;
	export let truncatedWallet: string;
	export let nftImage: string;
	export let pagination = {
		size: 20,
		page: 1,
		total_pages: 0,
		total_elements: 0
	};
	export let currentPage = $page.url.searchParams.get('page') ?? 1;

	export const replaceStateWithQuery = (values: Record<string, string>) => {
		const url = new URL(window.location.toString());
		for (let [k, v] of Object.entries(values)) {
			if (!!v) {
				url.searchParams.set(encodeURIComponent(k), encodeURIComponent(v));
			} else {
				url.searchParams.delete(k);
			}
		}
		history.replaceState({}, '', url);
	};

	async function handlePageChange(event: any) {
		const page = event.detail.currentPage;
		const res = await API.get(
			`address/${metadata.base16}?page=${page}&size=${pagination.size}`
		).catch((error) => {
			console.error(error);
		});

		ownedNFTs = [...res.ownedNFTs];

		currentPage = page;
		replaceStateWithQuery({
			page: page
		});
	}

	const biome = $worldLevelBiomes.find((biome) => biome.name === biomeName);

	$: nftName = `${biome?.name} #${id}`;
	let biomeTypeBackground = '/assets/compositions/lightblueclouds.png';
	console.log(`metadata ${JSON.stringify(metadata)}`)
	console.log(`pagination ${JSON.stringify(pagination)}`)
</script>

<svelte:head>
	<title>{nftName}</title>
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1 bg-[#90ebd0] relative">
	<div class="h-[69px] bg-[#90ebd0] " />
	<img
		src={biomeTypeBackground}
		alt="Floating island"
		class="bg-[#90ebd0] absolute w-full top-20 left-0"
	/>
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
					<h5 class="text-gray-700 font-normal text-base">? ZIL</h5>
				</div>
				<div
					class="flex flex-col sm:gap-1 sm:pr-5 sm:mr-5 border-r-0 sm:border-r border-b sm:border-b-0 border-gray-200 mb-5 sm:mb-0 pb-5 sm:pb-0"
				>
					<h6 class="text-[#CDCDCD] font-normal text-base">Sales</h6>
					<h5 class="text-gray-700 font-normal text-base">?</h5>
				</div>
				<div
					class="flex flex-col sm:gap-1 sm:pr-5 sm:mr-5 border-b sm:border-b-0 border-gray-200 mb-5 sm:mb-0 pb-5 sm:pb-0"
				>
					<h6 class="text-[#CDCDCD] font-normal text-base">Volume 30d</h6>
					<h5 class="text-gray-700 font-normal text-base">? $</h5>
				</div>
			</div>
			<div class="flex items-center">
				<div class="w-[40px] h-[40px] bg-[#495A7F] rounded-[100%] mr-5" />
				<p class="text-[#495A7F]">Owned by <a href="https://viewblock.io/zilliqa/address/{metadata.bech32}" target="_blank" class="underline">{truncatedWallet}</a></p>
			</div>
		</div>
		<div class="flex items-center mt-5 mb-[120px]">
			{#if metadata.data.attributes}
				{#each metadata.data.attributes as attribute}
					<div class="bg-white rounded-lg flex justify-between items-center py-[12px] px-5 mr-5">
						<p><span class="text-[#CDCDCD]">{attribute.trait_type}:</span> {attribute.value}</p>
					</div>
				{/each}
			{/if}
		</div>

		<main
			class="flex flex-col max-w-screen-xl mx-5 mt-5 space-y-12 xl:mx-auto md:grid md:grid-cols-2 md:space-y-0 md:gap-6 lg:grid-cols-3 xl:grid-cols-4"
		>
			<h2 class="md:col-span-2 lg:col-span-3 xl:col-span-4 text-[#495A7F] font-semibold text-2xl">
				<a href="https://viewblock.io/zilliqa/address/{metadata.bech32}" target="_blank" class="underline">{truncatedWallet}</a>’s owned NFTs
			</h2>
			<h2 class="text-[#495A7F] mt-10 text-xl md:col-span-2 lg:col-span-3 xl:col-span-4">
				Showing <span class="text-black"
					>{pagination.size < pagination.total_elements
						? pagination.size
						: pagination.total_elements}</span
				>
				of <span class="text-black">{pagination.total_elements}</span> items
			</h2>

			<Pagination
				numPages={pagination.total_pages}
				currentPage={parseInt(String(currentPage))}
				className="md:col-span-2 lg:col-span-3 xl:col-span-4 mx-auto"
				on:pageChange={handlePageChange}
			/>

			{#each ownedNFTs as nft (nft.contract + nft.tokenId)}
				<NftCard {nft} />
			{/each}

			<Pagination
				numPages={pagination.total_pages}
				currentPage={parseInt(String(currentPage))}
				className="md:col-span-2 lg:col-span-3 xl:col-span-4 mx-auto"
				on:pageChange={handlePageChange}
			/>
		</main>
	</div>
</section>

<div class="bg-[#90ebd0]">
	<Footer />
</div>
