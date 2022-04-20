<script lang="ts">
import { compute_rest_props } from "svelte/internal";


    let mintTime = '01/01/2022, 10:00AM GMT'
    let mintCount = 2048
    let mintPrice = 3000

</script>

<div class="bg-white rounded-lg {$$restProps.class}">
    <div class="flex flex-row p-5">
        <div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
            <h6 class="text-gray-300 font-semibold text-base">Mint time</h6>
            <h5 class="text-gray-700 font-normal text-base">{mintTime}</h5>
        </div>
        <div class="flex flex-col gap-1 pr-5 mr-5 border-r border-gray-200">
            <h6 class="text-gray-300 font-semibold text-base">Mint count</h6>
            <h5 class="text-gray-700 font-normal text-base">{mintCount}</h5>
        </div>
        <div class="flex flex-col gap-1 pr-5 mr-5  border-r border-gray-200">
            <h6 class="text-gray-300 font-semibold text-base">Mint price</h6>
            <h5 class="text-gray-700 font-normal text-base">{mintPrice} Zil</h5>
        </div>
        <a href={'/mint'} class="btn btn-primary">Mint a new biome</a>
    </div>
</div>