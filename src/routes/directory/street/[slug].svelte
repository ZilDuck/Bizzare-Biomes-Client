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

    export let street: string;
	export let biomesList: any[];
</script>

<svelte:head>
	<title>{street}</title>
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
		<div class="max-w-screen-xl w-full bg-[#495A7F] p-10 mt-5">
			<ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
				{#if biomesList}
					{#each biomesList as biome}
						<li>
							<a href="/directory/id/{biome.id}" class="text-xl font-semibold text-white"
								>{biome.houseNumber} {biome?.streetName}</a
							>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
		<div class="flex flex-row my-5 gap-x-5 w-full max-w-screen-xl justify-start">
			<a href="/directory" class="btn btn-primary">Return to the directory</a>
		</div>
	</div>
</section>

<div class="bg-[#FDC2CA]">
	<Footer />
</div>