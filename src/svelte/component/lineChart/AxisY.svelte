<script lang="ts">
   export let yScale: (tick: number) => number;  
  export let yTicks: number[];
  import { innerHeight, innerWidth } from "../../lib/canvasSetup";
  import getDisplayValue from "../../lib/getDisplayValue";
</script>

<g>
  <line x1={0} y1={0} x2={0} y2={innerHeight} stroke="grey"/>
  {#each yTicks as tick}
  <line x1={0} y1={yScale(tick)} y2={yScale(tick)} x2={4} stroke="grey" />
  <text class="yTicks"  text-anchor="end" y={yScale(tick)}>{getDisplayValue(tick)}</text>
  {/each}
</g>

<style>
  .yTicks {
    font-size: 15px;
  }
</style>