<script lang="ts">
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import wallet from '../store/wallet'

	function handleClick() {
    alert('clicked')
    console.log(window.zilPay)
		if (browser && $wallet.isConnected) goto(`/account/${$wallet.bech32}`);
		if (browser && !window.zilPay) return;
		wallet.connect();
	}
</script>

<template>
	<button on:click={handleClick} class="btn bg-white text-primary text-lg font-normal">
    {$wallet.bech32
        ? `${$wallet.bech32.slice(0, 6)}...${$wallet.bech32.slice(-6)}`
        : 'Connect wallet'}
  </button>
</template>
