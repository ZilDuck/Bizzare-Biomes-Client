<script>
	import '../app.css';
	import NavBar from '../components/nav/NavBar.svelte';
	import SideBar from '../components/nav/SideBar.svelte';
	let open = false;
</script>

<div>
	<SideBar bind:open />
	<NavBar bind:sidebar={open} />
	<div class="min-h-screen">
		<slot />
	</div>
</div>

<style>
	:global(body) {
		touch-action: manipulation;
	}
</style>
