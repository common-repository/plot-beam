<script lang="ts">
  export let nodesData:number[][]; 
  export let dimensions: string[]
  export let xTicks:  string[];
  export let lines:  string[];
  export let measurements: string[];
  import {margin, innerHeight, innerWidth, width,height} from '../../lib/canvasSetup';
  import * as d3 from 'd3';
  import AxisX from './AxisX.svelte';
  import AxisY from './AxisY.svelte';
	import getTicks from '../../lib/getTicks';
	import Tooltip from './Tooltip.svelte';
	import getBaseRange from '../../lib/getBaseRange';
	import { getExtendedRange } from '../../lib/getExtendedRange';
	import Legend from './Legend.svelte';

  const radius = 5
  const colors = ['#9ADDC2', '#37CC90', '#29996C', '#154D36', '#002415', 
		  '#BECDF7','#185DF2', '#1245B3', '#0B2C73', '#C4C4C4']

  const getTimeParser = (dimensions:string[], xTicks: string[] ) => {
    if (dimensions[0] === "YearMonth" && xTicks[0].includes('-')) 
      return d3.timeParse('%Y-%b')

    return d3.timeParse("%Y")
  }

  const getTimeFormatter = (dimensions:string[], xTicks: string[]) => {
    if (dimensions[0] === "YearMonth" && xTicks[0].includes('-')) 
      return d3.timeFormat('%Y-%b')

    return d3.timeFormat("%Y")
  }
  $: timeParser = getTimeParser(dimensions, xTicks) 
  $: timeFormatter = getTimeFormatter(dimensions, xTicks)

  $: timeSeries = xTicks.map(tick => {
    if (dimensions[0] === "Year" && tick.length >4)
      return timeParser(tick.slice(0, 4))
    return timeParser(tick)
  })

  $: yBaseRange = getBaseRange(nodesData)
  $: yDomain = getExtendedRange(yBaseRange)
  $: yScale = d3.scaleLinear().domain(yDomain).range([innerHeight, 0])
  
  $: xScale =  d3.scaleTime()
    .domain(d3.extent(timeSeries)) // Set the scale domain to the extent of your date range
    .range([30, innerWidth]); 
  
  const getDisplayTicks = (xScale:any, ticksNumber: number, xTicks: string[]) => {
    let displayTicks = xScale.ticks(ticksNumber)

    displayTicks.push(timeParser(xTicks[xTicks.length-1]))
    displayTicks.unshift(timeParser(xTicks[0]))
    return displayTicks
  }

  $: displayTicks=xTicks.length > 6? getDisplayTicks(xScale, 5, xTicks): timeSeries
  
  $: indexArray = displayTicks.map((tick:any) => {
    return xTicks.indexOf(timeFormatter(tick))
  })
  
  //getTicks is a function taking extented range and numbers of ticks, return the array of tick display values
  $: yTicks = getTicks(yDomain, 4)
  // $: bandWidth = xScale.bandwidth()

  let hoveredData: number[] | null
	$: handleCircleHover = (data: number[]) => {
		hoveredData = data;
	}

	$: handleLeaveChart = () => {
		hoveredData = null;
	}

  let mousePointWithMarginOffset = { x: 0, y: 0 };
	$: handleMouseCoord = (event: any) => {
		mousePointWithMarginOffset.x = event.pageX - margin.left - margin.right;
		mousePointWithMarginOffset.y = event.pageY - margin.top - margin.bottom;
	}
</script>

<div class="container" role="tooltip"
on:mousemove={handleMouseCoord}>
  <svg {width} {height} class="chart" data-testid="svg-element">
    <g transform="translate({margin.left}, {margin.top})">
      <AxisX {displayTicks} {xScale} {timeFormatter} {xTicks} {timeParser} {timeSeries}/>
        <g>
          {#if xTicks.length > 6}
            {#each lines as line, index}
              {#each nodesData as node, i}
                {#if i > 0}
                  <line x1={xScale(timeParser(xTicks[i-1]))} y1={yScale(nodesData[i-1][index])} x2={xScale(timeParser(xTicks[i]))} y2={yScale(node[index])} stroke={colors[index]} />
                {/if}
              {/each}
            {/each} 
          {:else}
            {#each nodesData as node, index}
              {#each node as subNode, i}
                  <circle class="intersection" cx={xScale(timeSeries[index])} cy={yScale(subNode)} fill={colors[i]}  on:mouseover={() => handleCircleHover([subNode, i])}
                    on:focus={() => handleCircleHover([subNode, i])}
                    on:mouseleave={() => handleLeaveChart()}  
                    r={hoveredData&&hoveredData[0]==subNode? radius+3 : radius}
                    opacity={hoveredData ? (hoveredData[0]== subNode? '1' : '0.6') : '1'}
                    role="tooltip"/>
              {/each}
              {#each lines as line, index}
              {#each nodesData as node, i}
                {#if i > 0}
                  <line x1={xScale(timeSeries[i-1])} y1={yScale(nodesData[i-1][index])} x2={xScale(timeSeries[i])} y2={yScale(node[index])} stroke={colors[index]} />
                {/if}
              {/each}
            {/each} 
            {/each}
          {/if} 
      
        </g>
      <AxisY {yScale} {yTicks} />
    </g>
    <g transform="translate({margin.left+innerWidth}, {10})">
      <Legend {lines} {colors}/>
    </g>
    
  </svg>
</div>


{#if hoveredData}
  <Tooltip data={hoveredData} xPosition={mousePointWithMarginOffset.x}
  yPosition={mousePointWithMarginOffset.y} {lines} {measurements}/> 
{/if}

