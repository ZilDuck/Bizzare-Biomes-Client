<script lang="ts">
	import { onMount } from 'svelte';
	type Biome = {
		owner: string;
		id: number;
		data: {
			attributes: [];
			resources: [
				{
					uri: string;
				}
			];
		};
	};

	export let biome: Biome;
	export let id: number;
	export let imageText: string; // TEMP WHILE CONTRACTS NOT UP

	$: image = '';

	onMount(() => {
		const resolveIPFS = (ipfs: string): string => {
			if (!ipfs.toLowerCase().startsWith('ipfs')) return ipfs;
			return `https://cloudflare-ipfs.com/ipfs/${ipfs.split('ipfs://')[1]}`;
		};

		if (biome) image = resolveIPFS(biome.data!.resources![0]!.uri);
		if (imageText) image = resolveIPFS(imageText);
	});
</script>

<a href="/directory/id/{id}">
	<img
		src={image}
		alt="Loading biome"
		class="{$$restProps.class} md:min-h-[200px] border border-[#495A7F]  w-full"
	/>
</a>
