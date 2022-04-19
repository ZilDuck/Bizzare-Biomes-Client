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
      <ConnectWallet on:click={closeSidebar} class="w-full" />
      <NavItem on:click={closeSidebar} to="/">Home</NavItem>
      <NavItem on:click={closeSidebar} to="/marketplace">Marketplace</NavItem>
      <NavItem on:click={closeSidebar} to="/explore">Explore</NavItem>
    </nav>
  </aside>
{/if}
