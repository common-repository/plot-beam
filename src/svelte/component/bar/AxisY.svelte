<script lang="ts">
  import * as d3 from "d3"
  import {margin, height, width, innerHeight, innerWidth} from '../../lib/canvasSetup'
  export let yTicks: number[];
  export let yScale: any;
  import getDisplayValue from '../../lib/getDisplayValue';

</script>

<g>
  <line x1={0} y1={0} x2={0} y2={innerHeight} class="benchMark" stroke="grey"/>
  {#each yTicks as tick}
    <line x1={0} y1={yScale(tick)} y2={yScale(tick)} x2={-5} stroke="grey" />
    <text class="yTicks" text-anchor="end" y={yScale(tick)}  x={0}>{getDisplayValue(tick)}</text>
  {/each}
</g>

<style>
  .yTicks {
    font-size: 15px;
  }
</style>