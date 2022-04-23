<script lang="ts">
  import { slide } from 'svelte/transition'
  export let open = false
  import ConnectWallet from '../ConnectWallet.svelte'
  import NavItem from './NavItem.svelte'
  const closeSidebar = () => open = false
</script>

{#if open}
  <aside
    class="fixed w-full h-full bg-black text-white border-r-2 shadow-lg pt-20"
    transition:slide
  >
    <nav class="p-6 text-xl flex flex-col space-y-4 mt-4">
      <ConnectWallet on:click={closeSidebar} />
      <NavItem on:click={closeSidebar} to="/" class="self-center">Home</NavItem>
			<NavItem on:click={closeSidebar} to="/directory" class="self-center">Biomes</NavItem>
			<NavItem on:click={closeSidebar} to="/mint" class="self-center">Mint</NavItem>
			<NavItem on:click={closeSidebar} to="/marketplace" class="self-center">Marketplace</NavItem>
    </nav>
  </aside>
{/if}
