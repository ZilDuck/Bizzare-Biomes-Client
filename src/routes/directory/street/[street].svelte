<script context="module">
	export async function load({ params, fetch }) {
        const { street } = params;
		const {biomesList} = await fetch(`/api/street/${street}.json`).then((r) => r.json())

		return {
			props: {
                street,
                biomesList
			}
		};
	}
</script>

<script lang="ts">
    import Footer from '../../../components/Footer.svelte';
    let floatingIsland = '/assets/backgrounds/Floating islands.png';
    let moonScape = '/assets/foregrounds/Moonscape.png';

    export let street: string;
	export let biomesList: any[];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="h-[150px]" style="background-color: #FDC2CA;" />

<div class="relative w-full">
    <img src={floatingIsland} alt="Floating Islands" class=" bg-transparent" />
</div>

<section class="pb-10 bg-[#FDC2CA]">
	<div
		class="max-w-screen-xl flex justify-center items-center flex-col text-primary mx-auto px-5"
	>
		<h1 class="w-full font-black text-[72px]  text-center">{street}</h1>
		<p class="mt-5 text-xl">Thinking of moving in or just checking the place out?</p>
		<div class="flex flex-row my-5 gap-x-5 w-full max-w-screen-xl justify-start">
			<a href="/directory" class="btn btn-primary">Go back to all streets</a>
		</div>
		<div class="max-w-screen-xl w-full bg-[#495A7F] p-10 pb-20">
			<!-- <div class="w-full border-b-[1px] border-b-[#647FBB] pb-10 mb-10">
				<h2 class="text-4xl text-white font-semibold">Biome directory</h2>
			</div> -->
			<ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
				{#if biomesList}
					{#each biomesList as biome}
						<li>
							<a href="/directory/id/{biome.id}" class="text-xl font-semibold text-white"
								>{biome.houseNumber} {biome?.streetName} #{String(biome.id).padStart(4, '0')}</a
							>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	</div>
</section>

<div class="bg-[#FDC2CA]">
	<Footer />
</div>