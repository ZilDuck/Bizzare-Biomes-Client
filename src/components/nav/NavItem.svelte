<script>
	export let to = '';
</script>

<template>
	<li class="p-0 m-0 list-none">
		<a href={to} class="h-auto text-white font-normal text-base lg:p-5 {$$restProps.class}"
			><slot /></a
		>
	</li>
</template>
