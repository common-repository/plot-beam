<script lang="ts">
import { innerWidth} from '../../lib/canvasSetup'
import getDisplayValue from '../../lib/getDisplayValue';
  export let yMeasure: string;
  export let yTicks: number [];
  export let yScale: any;
</script>

<g>
  {#each yTicks as tick, index}
    {#if index === yTicks.length -1}
      <!-- <text x=0 y=0 text-anchor="start" dy={-20} >{yMeasure}</text> -->
      <line x1={0} y1={yScale(tick)} x2={innerWidth} y2={yScale(tick)} class="benchMark" stroke="grey" opacity={index === 0? 1 : 0.5}/>
      <text x={0} y={yScale(tick)} text-anchor="end" dy={5} class="label">{getDisplayValue(tick)}</text>
    {:else}
      <line x1={0} y1={yScale(tick)} x2={innerWidth} y2={yScale(tick)} class="benchMark" stroke="grey" text-anchor="end" opacity={index === 0? 1 : 0.5}/>
      <text x={0} y={yScale(tick)} text-anchor="end" class="label">{getDisplayValue(tick)}</text>
    {/if}  
  {/each}
</g>

<style>
   .label {
    font-size: 15px;
  }
</style>