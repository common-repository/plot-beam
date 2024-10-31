<script lang="ts">
  import * as d3 from "d3";
	import type { DefaultArcObject, Arc } from "d3"; 
  import {width, height} from "../../lib/canvasSetup"
  export let valueSlices: number[]; 
  export let segmentSlices: number[]; 
  export let valueColors: string[]; 
  export let displayMarks: string[];
  export let displayValue: string;
  export let segmentColors: string[];

  const radius: number = height / 2;
  const pie = d3
    .pie<{ valueOf(): number }>()
    .startAngle((-2 / 3) * Math.PI)
    .endAngle((2 / 3) * Math.PI)
    .sort(null);

  $: segmentDonut= pie(segmentSlices);
  $: valueDonut = pie(valueSlices);
  
  const valueArc: Arc<any, DefaultArcObject> = d3
    .arc()
    .innerRadius(radius - 40)
    .outerRadius(radius - 10);

  const segmentArc: Arc<any, DefaultArcObject> = d3
    .arc()
    .innerRadius(radius - 9)
    .outerRadius(radius);
</script>

<div class="container">
  <svg {width} {height} class="chart" data-testid="svg-element">
    <g class="gauge" transform="translate({width / 2}, {height / 2+50})">
      <!-- getting the segment arc -->
      {#each segmentDonut as slice,i (slice.startAngle)}
        {#if i === segmentDonut.length - 1}
        <path
        class="segments"
        d={segmentArc(slice)}
        fill={segmentColors[i]}
        id={`${slice.startAngle}`}
      />
      <text class='segment-label' dy={-5}>
        <textPath  href={`#${slice.startAngle}`} >{displayMarks[i]}</textPath>
      </text>
      <text class='segment-label' dy={-5}>
        <textPath startOffset="48%" text-anchor="end" href={`#${slice.startAngle}`}>{displayMarks.slice(-1)[0]}</textPath>
      </text>
        {:else}
        <path
        class="segments"
        d={segmentArc(slice)}
        fill={segmentColors[i]}
        id={`${slice.startAngle}`}
      />
      <text class='segment-label' dy={-5}>
       <textPath  href={`#${slice.startAngle}`} >{displayMarks[i]}</textPath>
      </text> 
        {/if}
      {/each}
      
      <!-- getting the value arc -->
      {#each valueDonut as slice, i}
        <path d={valueArc(slice)} fill={valueColors[i]} class="valueSlices" />
      {/each}
      <text text-anchor="middle" class="value-label"  data-testid="value">{displayValue}</text>
    </g>
  </svg>
</div>

<style>
  .chart {
    display: flex;
    direction: row;
  }
  .gauge {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: #4d4d4d;
    height: fit-content;
    width: 100%;
  }
  .value-label {
    color: #4D4D4D;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 600;
  }
  .segment-label {
    font-size: 12px;
  }
</style>

