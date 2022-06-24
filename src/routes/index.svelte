<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Footer from '../components/Footer.svelte';

	import MintInfo from '../components/MintInfo.svelte';
	import RecentlyMinted from '../components/RecentlyMinted.svelte';

	// Backgrounds
	let pineForest = '/assets/backgrounds/Pine forest.png';
	let rocket = '/assets/foregrounds/Cloud world.png';
	let shroomland = '/assets/foregrounds/Shroomland.png';
	let spikyRidge = '/assets/backgrounds/Spiky ridge.png';
	let floatingIsland = '/assets/compositions/1.png';

	// Ducks
	let duck1 = '/assets/ducks/1.png';

	// NFTs
	let ducknft = '/assets/nfts/duck.png';
	let demons = '/assets/nfts/demons.png';
	let beanterra = '/assets/nfts/beanterra.png';
	let soulless = '/assets/nfts/soulless.png';

	// Team details
	const team = [
		{
			name: 'Nines',
			role: 'Developer',
			duck: 3
		},
		{
			name: 'Bucko',
			role: 'Artist',
			duck: 2
		},
		{
			name: '50Cal',
			role: 'Designer',
			duck: 5
		},
		{
			name: 'Badman',
			role: 'Developer',
			duck: 1
		},
		{
			name: 'Nicfusc',
			role: 'Developer',
			duck: 6
		},
		{
			name: 'Prodpeak',
			role: 'Developer',
			duck: 4
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section
	class="flex flex-col justify-center items-center flex-1"
	style="background: linear-gradient(180deg, #48597E 76.3%, #3477B7 100%)"
>
	<div
		class="max-w-screen-xl flex justify-center items-center flex-col text-white my-16 mx-auto px-5"
	>
		<h1 class="w-full font-black text-5xl sm:text-7xl mt-[160px] sm:mt-[230px] text-center">
			Welcome to Bizarre Biomes.
		</h1>
		<h2 class="mt-5 text-xl text-center">An NFT project for duck holders, and newcomers alike.</h2>
		<MintInfo class="mt-10 sm:mt-5" />
	</div>
</section>

<img src={pineForest} alt="Pine Forest" />

<section class="bg-[#50cf7d] py-28">
	<div class="max-w-screen-xl grid md:grid-cols-2 grid-cols-1 items-center mx-auto px-5">
		<div class="px-5 sm:px-0">
			<RecentlyMinted class="border-4 border-gray-700 rounded" />
		</div>
		<div class="px-5 sm:px-0 mt-10 md:mt-0 w-full flex justify-center">
			<div class="max-w-full md:max-w-[412px]">
				<h1 class="text-3xl md:text-4xl mb-5 font-semibold text-white">
					From the skyline to the pits of Mordor, come and be a neighbour and enjoy the view.
				</h1>
				<p class="text-white">
					Biomes are a new project behind the Duck project. It's a collection of 3000 NFTs with a
					pretty unique feature.
				</p>
				<div class="flex flex-row flex-wrap my-5 gap-x-5">
					<a href={'/mint'} class="btn btn-primary">Mint a Biome</a>
					<button class="btn btn-secondary">View all biomes</button>
				</div>
			</div>
		</div>
	</div>
</section>

<img src={rocket} alt="rocket" class="bg-[#50cf7d] max-w-full" />
<div
	class="h-16 max-w-full"
	style="background: linear-gradient(180deg, #E6F1F2 0%, #CCEEF7 100%);"
/>

<section class="bg-[#CCEEF7] pb-20 md:pb-[120px]">
	<div class="max-w-screen-xl mx-auto mt-[-1px] pt-28 text-primary">
		<div class="max-w-screen-xl flex justify-center items-center flex-col mx-auto px-5">
			<h1 class="font-semibold text-3xl  md:text-4xl  max-w-[1016px] text-center">
				It’s finally time to show-off the NFTs in your wallet to the world!
			</h1>
			<p class="mt-5 text-base max-w-[600px] text-center ">
				Using the latest indexer technology Biomes are able to dynamically load and keep track of
				what NFT's are in your wallet. This includes both ZRC-1* and ZRC-6 based NFTs!
			</p>
		</div>
		<div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 mx-auto px-5">
			<div class="bg-transparent flex flex-col items-center justify-center rounded-lg">
				<img src={ducknft} alt="Floating island" class="max-w-[100%]" />
			</div>
			<div class="bg-transparent flex flex-col items-center justify-center rounded-lg">
				<img src={soulless} alt="Floating island" class="max-w-[100%]" />
			</div>
			<div class="bg-transparent flex flex-col items-center justify-center rounded-lg">
				<img src={beanterra} alt="Floating island" class="max-w-[100%]" />
			</div>
			<div class="bg-transparent flex flex-col items-center justify-center rounded-lg">
				<img src={demons} alt="Floating island" class="max-w-[100%]" />
			</div>
		</div>
	</div>
</section>

<img src={shroomland} alt="shroomland" class="bg-[#CCEEF7]" />

<section class="bg-[#A1A1E4]">
	<div class="max-w-screen-xl py-28 mx-auto px-5">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white ">
			<h1 class="font-semibold text-3xl  md:text-4xl max-w-[496px] text-center">
				View the latest Biomes minted
			</h1>
			<p class="mt-5 text-base max-w-[600px] text-center">
				Welcome to the newest project from the team behind Ducks and Zilkroad. A collection of 2000
				different worlds from the multiverse.
			</p>
		</div>
		<RecentlyMinted class="mt-20" />
	</div>
</section>

<div class="h-16" style="background: linear-gradient(180deg, #A1A1E4 0%, #FCB698 100%);" />

<img src={spikyRidge} alt="spiky ridge" class="bg-[#FCB698]" />
<section style="background: #E4CF81;">
	<div class="max-w-screen-xl py-28 text-primary mx-auto px-5">
		<div class="max-w-screen-xl flex mx-auto justify-center items-center flex-col  ">
			<h1 class="font-semibold text-3xl  md:text-4xl max-w-[496px] text-center">
				Frequently asked questions
			</h1>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-20">
			<div>
				<h2 class="font-semibold text-2xl">
					Why develop another NFT project, what makes Biomes special?
				</h2>
				<p class="mt-5 ">
					We spent a lot of time developing an NFT indexer which purpose is to store all the blocks
					and dynamically update and calculates what NFT's you are holding in your wallet at any
					given time. We wanted to utilise the ability of the indexer to show your latest NFT, with
					the concept of a virtual gallery of holders. What better way than to invite everyone
					holding an NFT to the gallery! Biomes also fulfills one of our original objectives to
					continue to develop value for NFD holders.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">OK, so I have a Biome, now what?</h2>
				<p class="mt-5 ">
					We spent a lot of time developing an NFT indexer which purpose is to store all the blocks
					and dynamically update and calculate what NFT's you are holding in your wallet at any
					given time. We wanted to utilise the novel ability of the indexer to show your latest NFT,
					with the concept of a virtual gallery of holders. What better way than to invite everyone
					holding an NFT to the gallery! Keep it, sell it, do whatever you want with it - it's our
					gift!
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">When is the mint?</h2>
				<p class="mt-5 ">Block xxxxxx estimated to be 00:01 on the 2nd July UTC.</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">What is the price of a Biome?</h2>
				<p class="mt-5 ">2000 ZIL.</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How was the airdrop calculated?</h2>
				<p class="mt-5 ">
					We looked across the NFD distribution for a fair way to distribute the airdrop to
					addresses which support our projects. All calculations include the ZRC-1 and ZRC-6 NFD
					contracts, excluding the migrator address which holds the ZRC-6's in escrow for ZRC-1
					holders, snapshot taken on 09/06/2022 @ 1:25 UTC. Airdrops have been sent out so sign into
					bizarrebiomes.com and click your address to see 'Your Biomes', or check viewblock for
					incoming NFT transactions.
				</p>
				<br />
				<ul class="mb-5">
					<li>Holding 1 NFD = 1 BIOME = 963 addresses valid</li>
					<li>Everyone in DUCK LP = 4 BIOME = 25 addresses valid</li>
					<li>Holding more than 10 NFD = 1 BIOME = 74 addresses valid</li>
					<li>Holding more than 20 NFD = 3 BIOME = 28 addresses valid</li>
					<li>Holding more than 50 NFD = 4 BIOME = 16 addresses valid</li>
					<li>Holding more than 90 NFD = 11 BIOME = 2 addresses valid</li>
				</ul>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How was the distribution calculated?</h2>
				<ul class="mt-5 ">
					<li>43.3% = Airdrop as above</li>
					<li>53.3% = Public sale</li>
					<li>3.4% = Marketing</li>
					<li>0% = Team</li>
				</ul>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">So is this project finished?</h2>
				<p class="mt-5 ">
					Biomes is a finished product! It sits within the Duck family of products. Maybe expect to
					see it return for NFT staking alongside NFDs.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How are the street addresses generated?</h2>
				<p class="mt-5 ">
					Each biome has a random street and door number attribute associated with it during
					generation, some streets have more Biomes than others. Say hello to your neighbours.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">How does royalty work for Biomes?</h2>
				<p class="mt-5 ">
					The Biomes NFT contract has a 10% royalty when sold through marketplaces which support
					royalty. 5% of royalty generated through Biomes (and NFD) sales are distributed to NFD
					holders through an upcoming piece of work, estimated date unknown, but soon.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">Does Biomes have anything to do with Zilkroad?</h2>
				<p class="mt-5 ">
					No, Biomes will have no functional effect of how Zilkroad behaves, though you can use
					Zilkroad to buy and sell Biomes.
				</p>
			</div>
			<div>
				<h2 class="font-semibold text-2xl">
					So you created an indexer for Zilkroad, created a whole project and usecase around it, and
					are airdropping a majority out - why?
				</h2>
				<p class="mt-5 ">Why not.</p>
			</div>
		</div>
	</div>
</section>

<div class="h-28" style="background: linear-gradient(180deg, #E4CF81 0%, #FDC3CB 100%);" />

<img src={floatingIsland} alt="Floating island" class="bg=[#9DD380] w-full" />

<section class="bg-[#9DD380]" id="about-us">
	<div class="max-w-screen-xl mx-auto mt-[-1px] pt-28 text-primary">
		<div class="max-w-screen-xl flex justify-center items-center flex-col mx-auto px-5">
			<h1 class="font-semibold text-3xl  md:text-4xl text-white max-w-[496px] text-center">
				Duck team.
			</h1>
		</div>
		<div class="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-20 mx-auto px-5">
			{#each team as teamMember}
				<div class="flex flex-col items-center justify-start">
					<img
						src={`/assets/ducks/${teamMember.duck}.png`}
						alt="Floating island"
						class="max-w-[100%] mb-5 rounded-lg"
					/>
					<h3 class="text-white text-xl font-semibold">{teamMember.name}</h3>
					<p class="text-white">{teamMember.role}</p>
				</div>
			{/each}
		</div>
	</div>
	<Footer />
</section>
