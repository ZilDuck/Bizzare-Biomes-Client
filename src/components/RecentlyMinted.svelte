<script lang="ts">
	let recentlyMinted: any[] = [
		{
			quick_resource: '/assets/temp_recently_minted/0.png'
		},
		{
			quick_resource: '/assets/temp_recently_minted/1.png'
		},
		{
			quick_resource: '/assets/temp_recently_minted/2.png'
		},
		{
			quick_resource: '/assets/temp_recently_minted/3.png'
		}
	];
</script>

<div class="flex flex-col {$$restProps.class}">
	{#each recentlyMinted as nft}
		<img src={nft.quick_resource} alt="Loading Biome" class="min-h-28 bg-green-200 " />
	{/each}
</div>
