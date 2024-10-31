<script lang="ts">
  export let displayTicks: string[];
  export let xScale:any; 
  export let timeFormatter: any;
  export let xTicks: string[];
  export let timeParser: any;
  export let timeSeries: any[];
  import { innerHeight, innerWidth } from "../../lib/canvasSetup";
</script>

<g>
  <line x1={0} y1={innerHeight} x2={innerWidth} y2={innerHeight} stroke="grey"/>
  <!-- when there is a lager tick set, only display selected tick marks -->
  {#if xTicks.length > 6 } 
    {#each displayTicks as tick}
      <line x1={xScale(tick)} x2={xScale(tick)} y1={innerHeight} y2={innerHeight-8} stroke="grey"/>
      <text x={xScale(tick)} y={innerHeight} text-anchor="middle" dy={15} stroke="grey" class="label">{timeFormatter(tick)}</text>
    {/each}
    <!-- still segment the rest of ticks for references -->
    {#each xTicks as tick}
      <line x1={xScale(timeParser(tick))} x2={xScale(timeParser(tick))} y1={innerHeight} y2={innerHeight-4} stroke="grey"/>
    {/each}
  {:else}
  <!-- display all xTicks marks when there is only small tick set -->
    {#each xTicks as tick, index}
      <line x1={xScale(timeSeries[index])} x2={xScale(timeSeries[index])} y1={innerHeight} y2={innerHeight-8} stroke="grey"/>
      <text x={xScale(timeSeries[index])} y={innerHeight} text-anchor="middle" dy={15} stroke="grey" class="label">{tick}</text>
    {/each}
  {/if}
</g>

<style>
  .label {
    font-size: 10px;
  }
</style>