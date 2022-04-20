<script lang="ts">
import MintCard from "../components/MintCard.svelte";

    let zeldaMoon = 'src/assets/backgrounds/Zelda moon.png'
    let gemFields = 'src/assets/foregrounds/Gem fields.png'
</script>

<svelte:head>
	<title>Mint</title>
</svelte:head>

<div class="h-[69px]" style="background: #9A233E;" />

<img src="{zeldaMoon}" alt="Zelda style moon" class="object-cover w-full h-full" />

<div class="w-full h-min -mt-24" style="background: #763344;">
    <h1 class="text-center text-white font-black text-7xl">Time to mint a biome.</h1>
    <div class="w-full py-2.5 bottom-0 inset-x-0  text-white text-xl font-normal text-center leading-4">The time has finally come to create yourself a biome.</div>
</div>

<section class="pt-[120px]" style="background: #763344;" >
    <div class="max-w-screen-xl mx-auto grid grid-cols-2">
		<div class="px-28 py-auto self-center">
			<h2 class="text-4xl mb-5 font-semibold text-white">It's time to create a new biome.</h2>
			<p class="font-normal text-base text-white">
                The wait is over. Use the card on the right-hand side to mint yourself a biome. Once they’re gone, they’re gone. So grab them as quick as you can!
            </p>
		</div>
        <div class="">
			<MintCard class="max-w-lg"/>
		</div>	
	</div>
</section>


<img src="{gemFields}" style="background: #763344;" alt="Gem fields" />

<section style="background: #98BBD6;">
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