<script lang="ts">
	import { onMount } from 'svelte';
	type Biome = {
		owner: string;
		id: number;
		attributes: [];
		resources: [
			{
				uri: string;
			}
		];
	};

	export let biome: Biome;
	export let id: number;

	$: image = '';

	onMount(() => {
		if (biome) {
			image = `https://cdn.zildexr.com/0x38c30391667d178e982af3a14e8bd2aa00efc771/${biome.id}`;
		}
	});
</script>

<a href="/directory/id/{id}">
	<img
		src={image}
		alt="Loading Biome"
		class="{$$restProps.class} md:min-h-[200px] border border-[#495A7F]  w-full"
	/>
</a>
