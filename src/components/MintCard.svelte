<script lang="ts">
	import ProgressBar from './ProgressBar.svelte';
  	import walletStore from '../store/wallet'

    let mintTime = '02/07/2022 @ 00:01 UTC' //  this will be a block in the future
    let mintCount = 3000
    let mintPrice = 2000
    let currentMinted = 0 // TODO read NFT token_id
    let currentMintCount = 1;


function handleDecrease() {
    if (currentMintCount <= 1) {
        return;
    } else {
        currentMintCount--;
    }
}

function handleIncrease() {
    if (currentMintCount > mintCount - currentMinted) {
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
				<h6 class="text-gray-300 font-semibold text-base">Mint count</h6>
				<h5 class="text-gray-700 font-normal text-base">{mintCount}</h5>
			</div>
			<div class="flex flex-col gap-1">
				<h6 class="text-gray-300 font-semibold text-base">Mint price</h6>
				<h5 class="text-gray-700 font-normal text-base">{mintPrice} Zil</h5>
			</div>
		</div>

		<div class="border-t border-b gap-x-[20px] border-gray-100 flex flex-row py-[20px]">
			<p class="font-normal text-base text-gray-700 shrink-0">{currentMinted} / {mintCount}</p>
			<ProgressBar current={currentMinted} total={mintCount} class="w-full self-center" />
		</div>

		<div class="py-[20px] flex gap-5">
			<button
				on:click={MintTokens}
                class="btn btn-primary w-full self-center text-center"
        >
				Mint {currentMintCount} NFT for {mintPrice * currentMintCount} ZIL
            </button>
			<button
				on:click={handleDecrease}
				disabled={currentMintCount === 1}
				class="btn btn-primary disabled:!bg-gray">-</button
			>
			<button
				on:click={handleIncrease}
				disabled={currentMintCount >= mintCount - currentMinted}
				class="btn btn-primary">+</button
			>
		</div>
	</div>
</div>
