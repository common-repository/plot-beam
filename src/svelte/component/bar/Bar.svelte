<script lang="ts">
	import * as d3 from "d3";
	import {
		margin,
		height,
		innerHeight,
		innerWidth,
	} from "../../lib/canvasSetup";
	import AxisX from "./AxisX.svelte";
	import AxisY from "./AxisY.svelte";
	import { getExtendedRange } from "../../lib/getExtendedRange";
	import getBaseRange from "../../lib/getBaseRange";
	import getBarsWidth from "../../lib/bar/getBarsWidth";
	import getTicks from "../../lib/getTicks";
	import Tooltip from "./Tooltip.svelte";
	export let nodesData: number[][];
	export let groupLabel: string;
	export let group: string[];
	export let subGroup: string[]
let width: number;
	const colors = ['#9ADDC2', '#37CC90', '#29996C', '#154D36', '#002415', 
		  '#BECDF7','#185DF2', '#1245B3', '#0B2C73', '#C4C4C4']
	$: xMeasureData = group
	$: yBaseRange = getBaseRange(nodesData)
	$: yDomain = getExtendedRange(yBaseRange);
	$: barsWidth = getBarsWidth(group, subGroup, nodesData, innerWidth);

	$: yScale = d3.scaleLinear().domain(yDomain).range([innerHeight, 0]);
	$: xScale = d3
		.scaleBand()
		.domain(xMeasureData)
		.range([0, barsWidth])
		.paddingInner(0.1)
		.paddingOuter(0.1);
	//fill color of different subGroup bars;
	$: subGroupScale = d3.scaleOrdinal()
    .domain(subGroup)
    .range(colors)

	$: yTicks = getTicks(yDomain, 5);
	$: bandwidth = xScale.bandwidth();
	$: xSubgroup = d3.scaleBand<string>() 
    .domain(subGroup)
    .range([0, bandwidth])
    .paddingInner(0.05)
	$: subBarWidth = xSubgroup.bandwidth()

	const getFillColor = (i: number): string => {
    const nodeSubgroup = subGroup[i]
    return subGroupScale(nodeSubgroup) as string
  }

  const getSubNodeX = (i: number, index: number):number => {
    const groupNode: string = group[index]
    const groupX = xScale(groupNode) as number 
    const nodeSubGroup: string = subGroup[i]
    const subGroupX = xSubgroup(nodeSubGroup) as number
    return groupX + subGroupX
  }

	let hoveredData: [number, string, string ] | null;
	const handleChartHover = (data: [number, string, string]) => {
		hoveredData = data;
	}

	const handleLeaveChart = () => {
		hoveredData = null;
	};

	let mousePointWithMarginOffset = { x: 0, y: 0 };
	const handleMouseCoord = (event: any) => {
		mousePointWithMarginOffset.x = event.pageX - margin.left - margin.right;
		mousePointWithMarginOffset.y = event.pageY - margin.top - margin.bottom;
	};
</script>

<div role="tooltip" class="container" on:mousemove={handleMouseCoord}    
bind:clientWidth={width}
style="--max-width: {width};" id="bar-group" >
	<svg width={barsWidth+margin.right+margin.left} {height} class="chart" data-testid="svg-element">
		<g transform="translate({margin.left}, {margin.top})" class="bar-frame">
			{#each nodesData as node, index}
				{#each node as subnode, i}
					<rect y={yScale(subnode)} width={subBarWidth} x={getSubNodeX(i, index)} height={innerHeight - yScale(subnode)} fill={getFillColor(i)} 
					opacity={hoveredData ? (hoveredData[0] === subnode? '1' : '0.6') : '0.8'}
					on:mouseover={() => handleChartHover([subnode, group[index], subGroup[i]])}
					on:focus={() => handleChartHover([subnode, group[index], subGroup[i]])}
					on:mouseleave={() => handleLeaveChart()}
					tabIndex="0"
					role="tooltip"
					/>
				{/each}
			{/each}
			<AxisX {xScale} {barsWidth} {nodesData} {bandwidth} {yScale} {groupLabel} {group}/>
			<AxisY {yTicks} {yScale} />
		</g>
	</svg>
</div>
<div>
	{#if hoveredData}
		<Tooltip
			data={hoveredData}
			xPosition={mousePointWithMarginOffset.x}
			yPosition={mousePointWithMarginOffset.y}
			{groupLabel}
		/>
	{/if}
</div>

<style>
  #bar-group {
    position: relative;
    max-width: var(--max-width);
    height: fit-content;
    overflow-x: auto;
    overflow-y:auto;
    padding:0
  }
</style>
