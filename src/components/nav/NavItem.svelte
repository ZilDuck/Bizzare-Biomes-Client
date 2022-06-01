<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher()
	export let to = '';
	const closeSidebar = () => (dispatch('close'))
</script>

<template>
	<li on:click={closeSidebar} class="p-0 m-0 list-none">
		<a href={to} class="h-auto text-white font-normal text-base lg:p-5 {$$restProps.class}"
			><slot /></a
		>
	</li>
</template>
