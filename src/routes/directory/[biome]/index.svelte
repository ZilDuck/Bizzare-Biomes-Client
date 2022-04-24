<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { worldLevelBiomes } from '../../../store/biomes';
	let arctic = '/assets/foregrounds/Arctic.png'
	import {page} from '$app/stores'
	import Discord from '../../../components/icons/Discord.svelte';
	import Twitter from '../../../components/icons/Twitter.svelte';
	import Telegram from '../../../components/icons/Telegram.svelte';
	
	const currentPage = $page.url.pathname.split('/directory/')[1]
	const biome = $worldLevelBiomes.find(biome => biome.sitePath === currentPage)

	$: topColor = biome?.topColour;

	console.log(biome)
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="h-[150px]" style="background-color: {topColor};"/>

<div class="relative w-full">
	<img src={arctic} alt="Arctic" class="bg-transparent absolute" />
	<img src={biome?.imagePath} alt="Arctic" class=" bg-transparent" />
</div>
<section class="pb-10 bg-[#EEF5F7]">

	<div
		class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-primary  mb-[120px] "
	>
		<h1 class="w-full font-black text-[72px]  text-center">{biome?.name}</h1>
		<p class="mt-5 text-xl">An NFT project for duck holders, and newcomers alike.</p>
		<div class="flex flex-row my-5 gap-x-5 w-full max-w-screen-xl justify-start">
			<a href="/directory" class="btn btn-primary">Go back to all biomes</a>
		</div>
		<div class="max-w-screen-xl w-full bg-[#495A7F] p-10 pb-20">
			<div class="w-full border-b-[1px] border-b-[#647FBB] pb-10 mb-10">
				<h2 class="text-4xl text-white font-semibold">Biome directory</h2>
			</div>
			<ul class="grid grid-cols-3 gap-6 mt-10">
				{#each Array(18).fill(1) as i}
					<li><a href="/directory/{biome?.sitePath}/{i}" class="text-xl font-semibold text-white">Biome #{String(i).padStart(4, '0')}</a></li>
				{/each}
			</ul>
		</div>
	</div>
	

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
	<div class="max-w-screen-xl mx-auto grid grid-cols-4 gap-6 my-20">
		<div>
			<h2 class="font-semibold mb-5 text-[#495A7F]">Team</h2>
			<ul>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">About us</a></li>
			</ul>
		</div>
		<div>
			<h2 class="font-semibold mb-5 text-[#495A7F]">Links</h2>
			<ul>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">Mint an NFT</a></li>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">View all biomes</a></li>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">Marketplace</a></li>
			</ul>
		</div>
		<div>
			<h2 class="font-semibold mb-5 text-[#495A7F]">Other</h2>
			<ul>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">Privacy policy</a></li>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">Terms and conditions</a></li>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">Cookie policy</a></li>
				<li><a href="#" class="text-[#495A7F] mb-[16px] block">Business info</a></li>
			</ul>
		</div>
		<div>
			<h2 class="font-semibold mb-5 text-[#495A7F]">Team</h2>
			<ul class="flex">
				<li class="mr-5">
					<Discord class="text-primary" />
				</li>
				<li class="mr-5">
					<Twitter class="text-primary" />
				</li>
				<li class="mr-5">
					<Telegram class="text-primary"/>
				</li>
			</ul>
		</div>
	</div>
	<hr class="border-b-[1px] border-t-0 border-[rgba(0,0,0,0.1)] bg-transparent" />
	<div class="max-w-screen-xl mx-auto">
		<p class="text-[#495A7F] mt-10">© 2021 - Bizarre Biomes.</p>
	</div>
</section>
