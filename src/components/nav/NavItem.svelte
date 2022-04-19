<script>
	export let to = '';
</script>

<template>
	<span class="">
		<a href={to} class="h-auto bg-500 text-white font-normal text-base p-5 {$$restProps.class}"><slot /></a>
	</span>
</template>
