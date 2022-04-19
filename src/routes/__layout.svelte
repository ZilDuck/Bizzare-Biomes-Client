
<script>
  import Footer from '../components/Footer.svelte'
  import '../app.css'
  import NavBar from '../components/nav/NavBar.svelte'
  import SideBar from '../components/nav/SideBar.svelte'
  let open = false
</script>

<div>
  <div class="z-[1000] flex max-w-screen">
    <SideBar bind:open />
  </div>
  <div class="z-10 flex max-w-screen">
    <NavBar bind:sidebar={open} />
  </div>
  <div class="min-h-screen">
    <slot />
  </div>
 
</div>

<style>
  :global(body) {
    touch-action: manipulation;
  }
</style>