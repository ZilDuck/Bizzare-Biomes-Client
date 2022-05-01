<script lang="ts">
	import MintCard from '../components/MintCard.svelte';
	import Footer from '../components/Footer.svelte';
	import HeroContent from '../components/HeroContent.svelte';
	let zeldaMoon = '/assets/backgrounds/Zelda moon.png';
	let gemFields = '/assets/foregrounds/Gem fields.png';
</script>

<svelte:head>
	<title>Mint</title>
</svelte:head>

<div class="h-[69px] bg-[#9A233E] pb-[-69px]" />

<section class="flex flex-col justify-center items-center flex-1 bg-[#763344] relative">
	<img src={zeldaMoon} alt="Floating island" class="bg=[#763344] w-full absolute top-0 left-0" />
	<HeroContent />
</section>

<section class="bg-[#763344]">
	<div class="max-w-screen-xl grid md:grid-cols-2 grid-cols-1 items-center mx-auto px-5">
		<div class="px-5 sm:px-0 mt-10 md:mt-0 w-full flex justify-center">
			<div class="max-w-full md:max-w-[412px]">
				<h2 class="text-4xl mb-5 font-semibold text-white">It's time to create a new biome.</h2>
				<p class="font-normal text-base text-white">
					The wait is over. Use the card on the right-hand side to mint yourself a biome. Once
					they’re gone, they’re gone. So grab them as quick as you can!
				</p>
			</div>
		</div>
		<div class="px-5 sm:px-0 mt-5 md:mt-0">
			<div>
				<MintCard class="max-w-full" />
			</div>
		</div>
	</div>
</section>

<img src={gemFields} class="bg-[#763344]" alt="Gem fields" />

<section class="bg-[#98BBD6]">
	<div class="max-w-screen-xl mx-auto py-28 px-5 text-primary">
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
	<Footer />
</section>
