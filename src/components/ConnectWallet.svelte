<script lang="ts">
	import { goto } from '$app/navigation'
	import { createEventDispatcher } from 'svelte'
	import wallet from '../store/wallet'
	const dispatch = createEventDispatcher()

	$: truncatedWallet = $wallet.bech32
		? `${$wallet.bech32.slice(0, 6)}...${$wallet.bech32.slice(-6)}`
		: false;

	function handleWallet() {
		if ($wallet.isConnected) {
			closeSidebar()
			goto('/your-biomes');
		}
		
		wallet.connect();
	}
	const closeSidebar = () => (dispatch('close'))
</script>

<div class="relative">
	<button
		class="flex items-center justify-center w-full lg:w-auto h-12 bg-white text-[#495a7f] rounded-lg text-zilkroad-gray-dark mt-5 lg:mt-0 pl-[20px] pr-[20px] relative"
		on:click={handleWallet}
	>
		{truncatedWallet || 'Connect wallet'}
	</button>
</div>
