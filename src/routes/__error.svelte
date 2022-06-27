<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				message: error.message,
				status // same as status: status
			}
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

{#if status == 404}
	<!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
	<p>404 not found</p>
{:else}
	<p>Error of {message} - {status}</p>
{/if}
