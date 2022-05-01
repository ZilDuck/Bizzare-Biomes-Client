<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
	export let title = 'Welcome to Bizarre Biomes';
	export let content = 'An NFT project for duck holders, and newcomers alike.';
</script>

<div
	class="max-w-screen-xl flex mx-auto justify-center items-center flex-col text-white mt-16 mb-20 sm:mb-[120px] z-0"
>
	<h1 class="w-full font-black text-5xl sm:text-7xl mt-[91px] sm:mt-[139px] text-center">
		{title}
	</h1>
	<p class="mt-5 text-xl text-center">{content}</p>
</div>
