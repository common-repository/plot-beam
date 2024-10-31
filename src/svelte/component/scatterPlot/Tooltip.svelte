<script lang="ts">
	import getTooltipValue from "../../lib/getTooltipValue";
  export let data: number[];
  export let xPosition: number; 
  export let yPosition: number
  export let xMeasure: string; 
  export let yMeasure: string;
	export let nodeLabel: string[];

	$: xAdjusted = xPosition - 50;
	$: yAdjusted = yPosition - 50;
</script>

<div class="tooltip" style="position: absolute; top: {yAdjusted}px; left: {xAdjusted}px;">
    <h5>{nodeLabel[data[2]]}</h5>
    <p>{xMeasure}: {getTooltipValue(data[0])}</p>
    <p>{yMeasure}: {getTooltipValue(data[1])}</p>
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