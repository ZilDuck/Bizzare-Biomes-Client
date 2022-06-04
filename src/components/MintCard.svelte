<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
  import walletStore from '../store/wallet'
  import getCurrentMintCount from '../store/blockchain'
  import { onMount } from 'svelte';

    let mintTime = '01/01/2022, 10:00AM GMT'
    let maxMintCount = 3000
    var currentlyMintCount = fetchCurrentMintCount()
    let mintPrice = 2000
    let currentMinted = 0 // TODO
    let currentMintCount = 1;

	// onMount(() => {
	// 	async function fetchCurrentMintCount() {
	// 		currentlyMintCount = await getCurrentMintCount();
	// 	}
	// 	fetchCurrentMintCount();
	// })
	async function fetchCurrentMintCount() {
		let count = await getCurrentMintCount()
			.catch((error) => {
				console.log(error)
			})
			.then((r) => r)
		return count
	}

function handleDecrease() {
    if (currentMintCount <= 1) {
        return;
    } else {
        currentMintCount--;
    }
}

function handleIncrease() {
    if (currentMintCount > maxMintCount - currentMinted) {
        return;
    } else {
        currentMintCount++;
    }
}

async function MintTokens(){
  const response = await walletStore.mintVouchers(String(currentMintCount))
  console.log(`got response ${response}`)
}



</script>

<div class="bg-white rounded-lg {$$restProps.class}">
	<div class="px-[20px] mx-auto justify-center">
		<div class="py-[20px] flex flex-row max-w-max">
			<div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
				<h6 class="text-gray-300 font-semibold text-base">Mint time</h6>
				<h5 class="text-gray-700 font-normal text-base">{mintTime}</h5>
			</div>
      <div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
				<h6 class="text-gray-300 font-semibold text-base">Currently mint</h6>
				<h5 class="text-gray-700 font-normal text-base">{currentlyMintCount}</h5>
			</div>
			<div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
				<h6 class="text-gray-300 font-semibold text-base">Max mint</h6>
				<h5 class="text-gray-700 font-normal text-base">{maxMintCount}</h5>
			</div>
			<div class="flex flex-col gap-1">
				<h6 class="text-gray-300 font-semibold text-base">Mint price</h6>
				<h5 class="text-gray-700 font-normal text-base">{mintPrice} Zil</h5>
			</div>
		</div>

		<div class="border-t border-b gap-x-[20px] border-gray-100 flex flex-row py-[20px]">
			<p class="font-normal text-base text-gray-700 shrink-0">{currentMinted} / {maxMintCount}</p>
			<ProgressBar current={currentMinted} total={maxMintCount} class="w-full self-center" />
		</div>

		<div class="py-[20px] flex gap-5">
			<button
				on:click={MintTokens}
                class="btn btn-primary w-full self-center text-center"
        >
				Mint {currentMintCount} NFT for {mintPrice * currentMintCount} Zilkroad
            </button>
			<button
				on:click={handleDecrease}
				disabled={currentMintCount === 1}
				class="btn btn-primary disabled:!bg-gray">-</button
			>
			<button
				on:click={handleIncrease}
				disabled={currentMintCount >= maxMintCount - currentMinted}
				class="btn btn-primary">+</button
			>
		</div>
	</div>
</div>
