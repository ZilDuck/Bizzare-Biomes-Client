<script lang="ts">
    export let current:number 
    export let total:number
</script>

<div class="{$$restProps.class}">
    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
        <div style="width:{(current/total) * 100}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400"></div>
    </div>
</div>
