<script lang="ts">
    let mintTime = '02/07/2022 @ 00:01 UTC' //  this will be a block in the future
    let mintCount = 3000
    let mintPrice = 2000
</script>

<div class="bg-white rounded-lg {$$restProps.class} max-w-full w-full sm:w-auto">
	<div class="flex sm:flex-row flex-col p-5">
		<div
			class="flex flex-col gap-1 pr-5 sm:mr-5 mb-5 pb-5 sm:mb-0 sm:pb-0 sm:border-r border-b sm:border-b-0 border-gray-200"
		>
			<h6 class="text-gray-300 font-semibold text-base">Mint time</h6>
			<h5 class="text-gray-700 font-normal text-base">{mintTime}</h5>
		</div>
		<div
			class="flex flex-col gap-1 pr-5 sm:mr-5 mb-5 pb-5 sm:mb-0 sm:pb-0 sm:border-r border-b sm:border-b-0 border-gray-200"
		>
			<h6 class="text-gray-300 font-semibold text-base">Mint count</h6>
			<h5 class="text-gray-700 font-normal text-base">{mintCount}</h5>
		</div>
		<div
			class="flex flex-col gap-1 pr-5 sm:mr-5 mb-5 pb-5 sm:mb-0 sm:pb-0 sm:border-r border-b sm:border-b-0 border-gray-200"
		>
			<h6 class="text-gray-300 font-semibold text-base">Mint price</h6>
			<h5 class="text-gray-700 font-normal text-base">{mintPrice} Zil</h5>
		</div>
		<a href={'/mint'} class="btn btn-primary mb-0 text-center">Mint a new biome</a>
	</div>
</div>
