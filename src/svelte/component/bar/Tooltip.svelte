<script lang="ts">
	import getTooltipValue from "../../lib/getTooltipValue";
  export let data: [number, string, string];
  export let xPosition: number; 
  export let yPosition: number;
	export let groupLabel: string;
</script>

	<div class="tooltip" style="position: absolute; top: {yPosition}px; left: {xPosition}px;">
    <h5>{groupLabel}: {data[1]}</h5>
		<h5>{data[2]}</h5>
    <p>{getTooltipValue(data[0]) }</p>
 	</div>

<style>
	h5 {
		margin: 0;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	p {
		font-size: small;
		margin: 0;
		margin-left: 0.3rem;
		margin-right: 0.3rem;
	}
	.tooltip {
		padding: 0.2rem;
		border: solid 1px black;
		background: white;
		pointer-events: none;
		border-radius: 1rem;
		opacity: 0;
		animation: fadeIn 300ms ease-in forwards;
	}
	@keyframes fadeIn {
		100% {
			opacity: 1;
		}
	}
</style>