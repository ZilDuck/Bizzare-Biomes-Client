<script lang="ts">
import { goto } from '$app/navigation';

  import wallet from '../store/wallet'

  $: truncatedWallet = $wallet.bech32
    ? `${$wallet.bech32.slice(0, 6)}...${$wallet.bech32.slice(-6)}`
    : false

  function handleWallet() {
    if ($wallet.isConnected) goto('/your-biomes')
		wallet.connect()
  }
</script>

<div class="relative">
  <button
    class="flex items-center justify-center h-12 bg-white rounded-lg text-zilkroad-gray-dark pl-[20px] pr-[20px] relative"
    on:click={handleWallet}
  >
    {truncatedWallet || 'Connect wallet'}
  </button>
</div>
