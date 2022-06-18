<script context="module">

	export async function load({ params, fetch }) {
	    const {streetNames} = await fetch('/api/streets.json').then((r) => r.json())
		return {
			props: {
				streetNames
			}
		};
	}
</script>

<script lang="ts">
    import Footer from '../../components/Footer.svelte';
    let floatingIsland = '/assets/backgrounds/Floating islands.png';

    export let streetNames: [];
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
		<h1 class="w-full font-black text-[72px]  text-center">Directory</h1>
		<p class="mt-5 text-xl">An NFT project for duck holders, and newcomers alike.</p>
		<div class="max-w-screen-xl mt-20 w-full bg-[#495A7F] p-10 pb-20">
			<div class="w-full border-b-[1px] border-b-[#647FBB] pb-10 mb-10">
				<h2 class="text-4xl text-white font-semibold">Biome directory</h2>
			</div>
			<ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
				{#if streetNames}
					{#each streetNames as street}
						<li>
							<a href="/directory/street/{street}" class="text-xl font-semibold text-white"
								>{street}</a
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