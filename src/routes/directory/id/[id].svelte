<script context="module">
	export async function load({ params, url, fetch }) {
		const { id } = params;
		const page = url.searchParams.get('page') ?? 1;

		const { metadata } = await fetch(`/api/biome/${id}.json`).then((r) => r.json());
		const { pagination, ownedNFTs } = await fetch(
			`/api/address/${metadata.base16}.json?page=${page}&size=20`
		).then((r) => r.json());
		const truncatedWallet = metadata.bech32
			? `${metadata.bech32.slice(0, 6)}...${metadata.bech32.slice(-6)}`
			: '';

		const biomeData = metadata;

		const nftImage = metadata.resources[0].uri;
		const biomeName = metadata.name;

		return {
			props: {
				biomeName,
				id,
				metadata,
				biomeData,
				ownedNFTs,
				truncatedWallet,
				nftImage,
				pagination
			}
		};
	}
</script>

<script lang="ts">
	import Footer from '../../../components/Footer.svelte';
	import NftCard from '../../../components/NFTCard.svelte';
	import BiomeCard from '../../../components/BiomeCard.svelte';
	import Pagination from '../../../components/Pagination.svelte';
	import HeroContent from '../../../components/HeroContent.svelte';

	import { page } from '$app/stores';

	export let id: string;
	export let biomeName: string;
	export let metadata: any;
	export let biomeData: any;
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
		({ pagination, ownedNFTs } = await fetch(
			`/api/address/${metadata.base16}.json?page=${page}&size=20`
		).then((r) => r.json()));

		currentPage = page;
		replaceStateWithQuery({
			page: page
		});
	}

	$: nftName = `${biomeName} #${id}`;
	let biomeTypeBackground = '/assets/compositions/lightblueclouds.png';
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
	<HeroContent title={nftName} content="Looks rare." />
</section>

<section class="bg-[#90ebd0]">
	<div class="max-w-screen-xl mx-auto px-5">
		<div class="flex flex-row mb-5 gap-x-5 w-full max-w-screen-xl justify-start">
			<a href="/directory/street/{biomeData?.streetName}" class="btn btn-primary"
				>Go back to all {biomeData?.streetName}'s</a
			>
		</div>
		<div class="relative mb-5">
			<BiomeCard id={biomeData.id} biome={biomeData} />
		</div>
		<div
			class="bg-white rounded-lg w-full max-w-screen-xl flex flex-col sm:flex-row justify-start sm:justify-between sm:items-center p-5"
		>
			<div class="flex items-center">
				<div class="w-[40px] h-[40px] bg-[#495A7F] rounded-[100%] mr-5" />
				<p class="text-[#495A7F]">
					Owned by <a
						href="https://viewblock.io/zilliqa/address/{metadata.bech32}"
						target="_blank"
						class="underline">{metadata.bech32}</a
					>
				</p>
			</div>
		</div>
		<div class="flex items-center mt-5 mb-[120px] flex-wrap">
			{#if biomeData.attributes}
				{#each biomeData.attributes as attribute}
					<div
						class="bg-white rounded-lg flex justify-between items-center py-[12px] px-5 mr-5 mb-5 sm:mb-0"
					>
						<p><span class="text-[#CDCDCD]">{attribute.trait_type}:</span> {attribute.value}</p>
					</div>
				{/each}
			{/if}
		</div>

		<main
			class="flex flex-col max-w-screen-xl mx-5 mt-5 space-y-12 xl:mx-auto md:grid md:grid-cols-2 md:space-y-0 md:gap-6 lg:grid-cols-3 xl:grid-cols-4"
		>
			<h2 class="md:col-span-2 lg:col-span-3 xl:col-span-4 text-[#495A7F] font-semibold text-2xl">
				<a
					href="https://viewblock.io/zilliqa/address/{metadata.bech32}"
					target="_blank"
					class="underline">{truncatedWallet}</a
				>’s owned NFTs
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

			{#if ownedNFTs}
				{#each ownedNFTs as nft (nft.contract + nft.tokenId)}
					<NftCard {nft} />
				{/each}
			{/if}

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
