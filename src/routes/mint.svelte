<script lang="ts">
	import MintCard from '../components/MintCard.svelte';
	import Footer from '../components/Footer.svelte';
	import HeroContent from '../components/HeroContent.svelte';
	let zeldaMoon = '/assets/backgrounds/Dark moon.png';
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
					The wait is over. Use the card on the right-hand side to mint yourself a Biome.
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
			<div>
				<h2 class="font-semibold text-2xl">Why develop another NFT project, what makes Biomes special?</h2>
				<p class="mt-5 ">
					We spent a lot of time developing an NFT indexer which purpose is to store all the blocks and dynamically update and calculates what NFT's you are holding in your wallet at any given time.
					We wanted to utilise the ability of the indexer to show your latest NFT, with the concept of a virtual gallery of holders. What better way than to invite everyone holding an NFT to the gallery!
					Biomes also fulfills one of our original objectives to continue to develop value for NFD holders.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">OK, so I have a Biome, now what?</h2>
				<p class="mt-5 ">
					We spent a lot of time developing an NFT indexer which purpose is to store all the blocks and dynamically update and  calculate what NFT's you are holding in your wallet at any given time.
					We wanted to utilise the novel ability of the indexer to show your latest NFT, with the concept of a virtual gallery of holders. What better way than to invite everyone holding an NFT to the gallery!
					Keep it, sell it, do whatever you want with it - it's our gift!
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">When is the mint?</h2>
				<p class="mt-5 ">
					Block xxxxxx estimated to be 00:01 on the 2nd July UTC.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">What is the price of a Biome?</h2>
				<p class="mt-5 ">
					2000 ZIL.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How was the airdrop calculated?</h2>
				<p class="mt-5 ">
					We looked across the NFD distribution for a fair way to distribute the airdrop to addresses which support our projects.
					All calculations include the ZRC-1 and ZRC-6 NFD contracts, excluding the migrator address which holds the ZRC-6's in escrow for ZRC-1 holders, snapshot taken on 09/06/2022 @ 1:25 UTC.
				</p>
				<ul>
					<li>Holding 1 NFD = 1 BIOME = 963 addresses valid </li>
					<li>Everyone in DUCK LP = 4 BIOME = 25 addresses valid </li>
					<li>Holding more than 10 NFD = 1 BIOME = 74 addresses valid </li>
					<li>Holding more than 20 NFD = 3 BIOME = 28 addresses valid </li>
					<li>Holding more than 50 NFD = 4 BIOME = 16 addresses valid </li>
					<li>Holding more than 90 NFD = 11 BIOME = 2 addresses valid </li>
				</ul>
				<p>
					Airdrops have been sent out so sign into bizarrebiomes.com and click your address to see 'Your Biomes', or check viewblock for incoming NFT transactions.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How was the distribution calculated?</h2>
				<ul class="mt-5">
					<li>43.3% = Airdrop as above</li>
					<li>53.3% = Public sale</li>
					<li>3.4% = Marketing</li>
					<li>0% = Team</li>
				</ul>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">So is this project finished?</h2>
				<p class="mt-5 ">
					Biomes is a finished product! It sits within the Duck family of products. Maybe expect to see it return for NFT staking alongside NFDs.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How are the street addresses generated?</h2>
				<p class="mt-5 ">
					Each biome has a random street and door number attribute associated with it during generation, some streets have more Biomes than others. Say hello to your neighbours.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How does royalty work for Biomes?</h2>
				<p class="mt-5 ">
					The Biomes NFT contract has a 10% royalty when sold through marketplaces which support royalty.
					5% of royalty generated through Biomes (and NFD) sales are distributed to NFD holders through an upcoming piece of work, estimated date unknown, but soon. 
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">Does Biomes have anything to do with Zilkroad?</h2>
				<p class="mt-5 ">
					No, Biomes will have no functional effect of how Zilkroad behaves, though you can use Zilkroad to buy and sell Biomes.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">So you created an indexer for Zilkroad, created a whole project and usecase around it, and are airdropping a majority out - why?</h2>
				<p class="mt-5 ">
					Why not.
				</p>
			</div>
		</div>
	</div>
	<Footer />
</section>
