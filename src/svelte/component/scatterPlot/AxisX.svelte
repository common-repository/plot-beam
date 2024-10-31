<script lang="ts">
	import { getNumberOfDigits } from '../../lib/getExtendedRange';
	import {  innerHeight, innerWidth} from "../../lib/canvasSetup";
  export let xMeasure: string; 
  export let xTicks: number[]; 
  export let xScale: any;
</script>

<g class="axisX">
  <line x1={0} y1={innerHeight} x2={innerWidth} y2={innerHeight}  class="benchMark" stroke="grey"/>
  <!-- <text x={innerWidth} y={innerHeight} dy={-5} text-anchor="end">{xMeasure}</text> -->
  {#each xTicks as tick, index}
      {#if index !== 0 }
        <line x1={xScale(tick)} y1={innerHeight} x2={xScale(tick)} y2={innerHeight-6} stroke="grey" />
        <text class="label" x={xScale(tick)} y={innerHeight} text-anchor="middle" dy={15}>{ getNumberOfDigits(tick) > 3? `${tick/1000}k` : tick}</text> 
      {:else}
        <text class="label" x={xScale(tick)} y={innerHeight} text-anchor="start" dy={15}>{ getNumberOfDigits(tick) > 3? `${tick/1000}k` : tick}</text> 
      {/if}    
  {/each}
</g>

<style>
  .label {
    font-size: 15px;
  }
</style>