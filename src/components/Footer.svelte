<script>
	let arctic = '/assets/foregrounds/Arctic.png';
	import Discord from './icons/Discord.svelte';
	import Telegram from './icons/Telegram.svelte';
	import Twitter from './icons/Twitter.svelte';
</script>

<img src={arctic} alt="Arctic" class="{$$restProps.class} bg-transparent" />
<section class="pt-28 pb-10 bg-[#EEF5F7]">
	<div class="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 items-center mb-20 mx-auto px-5">
		<div>
			<h1 class="text-4xl mb-5 font-semibold text-[#495A7F]">Come be a neighbour and join the discord.</h1>
			<div class="flex flex-row my-5 gap-x-5">
				<a class="btn btn-primary" href="https://discord.gg/xBy4PfQ3SZ">Hey neighbour!</a>
			</div>
		</div>
	</div>
	<hr class="border-b-[1px] border-t-0 border-[rgba(0,0,0,0.1)] bg-transparent" />
	<div class="max-w-screen-xl grid grid-cols-2 sm:grid-cols-4 gap-6 my-20 mx-auto px-5">
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
					<Telegram class="text-primary" />
				</li>
			</ul>
		</div>
	</div>
	<hr class="border-b-[1px] border-t-0 border-[rgba(0,0,0,0.1)] bg-transparent" />
	<div class="max-w-screen-xl mx-auto px-5">
		<p class="text-[#495A7F] mt-10">© 2021 - Bizarre Biomes.</p>
	</div>
</section>
