<script lang="ts">
	import { slide } from 'svelte/transition';
	export let open = false;
	import ConnectWallet from '../ConnectWallet.svelte';
	import NavItem from './NavItem.svelte';
	const closeSidebar = () => (open = false)
</script>

{#if open}
	<div class="absolute z-[2] flex max-w-screen w-full h-full">
		<aside
			class="w-full h-full bg-[#495A7F] text-white border-r-2 shadow-lg pt-20"
			transition:slide
		>
			<nav class="p-10 text-xl flex flex-col space-y-4 mt-4">
				<NavItem on:close={closeSidebar} to="/" class="self-center">Home</NavItem>
				<NavItem on:close={closeSidebar} to="/directory" class="self-center">Biomes</NavItem>
				<NavItem on:close={closeSidebar} to="/mint" class="self-center">Mint</NavItem>
				<ConnectWallet on:close={closeSidebar} />
			</nav>
		</aside>
	</div>
{/if}
