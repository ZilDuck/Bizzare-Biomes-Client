<script lang="ts">
  import wallet from '../store/wallet'

  let showWalletOptions = false

  $: truncatedWallet = $wallet.bech32
    ? `${$wallet.bech32.slice(0, 6)}...${$wallet.bech32.slice(-6)}`
    : false

  function handleWallet() {
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
