<script lang="ts">
  import * as d3 from "d3";
  import {margin, width, height, innerHeight, innerWidth} from "../../lib/canvasSetup"
	import AxisX from "./AxisX.svelte";
	import AxisY from "./AxisY.svelte";
	import Tooltip from "./Tooltip.svelte";
	import {getExtendedRange }from "../../lib/getExtendedRange";
  import getTicks from "../../lib/getTicks";

  export let xMeasure: string; 
  export let yMeasure: string; 
  export let nodesData: number[][]; 
  export let dimension: string;
  export let nodeLabel: string[];

  $: xMeasureData = nodesData.map(row=> row[0])
  $: yMeasureData = nodesData.map(row=> row[1])

  $: yBaseRange = [Math.min(...yMeasureData), Math.max(...yMeasureData)]
  $: xBaseRange = [Math.min(...xMeasureData), Math.max(...xMeasureData)]

  $: xDomain = getExtendedRange(xBaseRange)
  $: yDomain = getExtendedRange(yBaseRange)
  
  $: xScale = d3.scaleLinear().domain(xDomain).range([0, innerWidth])
  $: yScale = d3.scaleLinear().domain(yDomain).range([innerHeight, 0])
  $: yTicks = getTicks(yDomain, 5)
  $: xTicks = getTicks(xDomain, 5)

  let hoveredData: number[] | null
	const handleCircleHover = (data: number[]) => {
		hoveredData = data;
	}

	const handleLeaveChart = () => {
		hoveredData = null;
	}

  let mousePointWithMarginOffset = { x: 0, y: 0 };
	function handleMouseCoord(event: any) {
		mousePointWithMarginOffset.x = event.pageX - margin.left - margin.right;
		mousePointWithMarginOffset.y = event.pageY - margin.top - margin.bottom;
	}
</script>

<div
role="tooltip"
class="container"
on:mousemove={handleMouseCoord}
>
  <svg {width} {height} class="chart" data-testid="svg-element">
    <g transform="translate({margin.left}, {margin.top})">
      {#each nodesData as row, index}
        <circle class="circle" cx={xScale(row[0])} cy={yScale(row[1])}
          r={hoveredData && hoveredData === row ? '12' : '8'}
				  opacity={hoveredData ? (hoveredData[2] === index ? '1' : '0.6') : '1'}
						fill="#37cc90"
						stroke="#010101"
        on:mouseover={() => handleCircleHover([...row, index])}
        on:focus={() => handleCircleHover([...row, index])}
        on:mouseleave={() => handleLeaveChart()}
        tabIndex="0" role="tooltip"/>     
      {/each}
      <AxisX {xMeasure} {xTicks} {xScale} />
      <AxisY {yMeasure} {yTicks} {yScale} />
    </g>
  </svg>
  </div>
  {#if hoveredData}
    <Tooltip
      {xMeasure} 
      {yMeasure} 
      data={hoveredData}
      xPosition={mousePointWithMarginOffset.x}
      yPosition={mousePointWithMarginOffset.y}
      {nodeLabel}
    />
  {/if}

<style>
	circle {
		transition: all 300ms ease;
		cursor: pointer;
	}
</style>