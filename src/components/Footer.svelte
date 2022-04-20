<script>
  let arctic = 'src/assets/foregrounds/Arctic.png'

  import Discord from './icons/Discord.svelte'
  import Telegram from './icons/Telegram.svelte'
  import Twitter from './icons/Twitter.svelte'
</script>

<img src={arctic} alt="Arctic" class="{$$restProps.class} bg-transparent" />
<section class="pt-28 pb-10 bg-[#EEF5F7]">
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
					<a href="#" class="text-[#495A7F]">
						<Discord />
					</a>
				</li>
				<li class="mr-5">
					<a href="#" class="text-[#495A7F]">
						<Twitter />
					</a>
				</li>
				<li class="mr-5">
					<a href="#" class="text-[#495A7F]">
						<Telegram />
					</a>
				</li>
			</ul>
		</div>
	</div>
	<hr class="border-b-[1px] border-t-0 border-[rgba(0,0,0,0.1)] bg-transparent" />
	<div class="max-w-screen-xl mx-auto">
		<p class="text-[#495A7F] mt-10">© 2021 - Bizarre Biomes.</p>
	</div>
</section>
