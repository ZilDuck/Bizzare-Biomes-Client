<script>
	import NavItem from './NavItem.svelte';
	import ConnectWallet from '../ConnectWallet.svelte';
	import Burger from '../icons/Burger.svelte';
	import Logo from '../icons/Logo.svelte';
	import Discord from '../icons/Discord.svelte';
	import Twitter from '../icons/Twitter.svelte';
	import Telegram from '../icons/Telegram.svelte';
	export let sidebar = false;
</script>

<div class="absolute w-full z-[10]">
	<div
		class="
        w-full
        max-w-screen-xl
        mx-auto
        p-10
        min-h-0
        justify-center
        flex
        bg-transparent
        {$$restProps.class}
      "
	>
		<!-- desktop nav-->
		<div class="max-w-screen-2xl w-full mx-auto hidden lg:flex">
			<div class="mx-2 self-center py-auto mr-12">
				<a href="/"><Logo /></a>
			</div>
			<div class="ml-4 self-center flex">
				<NavItem to="/" class="self-center">Home</NavItem>
				<NavItem to="/directory" class="self-center">Biomes</NavItem>
				<NavItem to="/mint" class="self-center">Mint</NavItem>
				<NavItem to="/marketplace" class="self-center">Marketplace</NavItem>
			</div>
			<div class="flex flex-row space-x-4 py-auto ml-auto items-center mr-10 text-white">
				<Discord />
				<Twitter />
				<Telegram />
			</div>
			<ConnectWallet />
		</div>

		<!-- end desktop nav-->

		<div class="container mx-auto flex lg:hidden">
			<div class="mr-2 self-center py-auto">
				<Logo />
			</div>
			<div class="flex ml-auto p-4">
				<Burger bind:open={sidebar} class="text-white inline-flex" />
			</div>
		</div>
	</div>
</div>
