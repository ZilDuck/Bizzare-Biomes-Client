<script lang="ts">
    import ProgressBar from "./ProgressBar.svelte"


    let mintTime = '01/01/2022, 10:00AM GMT'
    let mintCount = 2048
    let mintPrice = 3000

    // current minted amount (to be replaced with data from store)
    let currentMinted = 1500
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
            <ProgressBar current={currentMinted} total={mintCount} class="w-full self-center"/>
        </div>

        <div class="py-[20px]">
            <a href={'/mint'} class="btn btn-primary w-full self-center text-center">Mint an NFT for {mintPrice} Zil</a>
        </div>
    </div>
</div>