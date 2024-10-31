<script lang="ts">
  import { height, width, margin, innerHeight, innerWidth} from "../../lib/canvasSetup";
  export let xScale: any;
  export let nodesData: number[][]; 
  export let bandwidth: number;
  export let barsWidth:number;
  export let yScale: any; 
  export let groupLabel: string;
  export let group: string[];
  
</script>

<g class="axisX">
  <line x1={0} y1={innerHeight} x2={barsWidth} y2={innerHeight} dx={10} class="benchMark" stroke="grey"/>
  <text x={innerWidth/2} y={innerHeight} dy={30} text-anchor="middle">{groupLabel}</text>

  {#each nodesData as row, index}
    <text class="xTicks"  y={innerHeight} x={xScale(group[index])} stroke="grey"
    dx={bandwidth/2} dy={15} text-anchor="middle">{group[index]}</text>
    <!-- {#if yScale(row[1]) < innerHeight/2}
      <text class="subGroup"  y={innerHeight/2} x={xScale(row[0])} stroke="grey"
    dx={bandwidth/2} dy={-5} text-anchor="middle">{row[0]}</text>
    {:else} -->
    <!-- <text class="subGroup"  y={yScale(row[1])} x={xScale(row[0])} stroke="grey"
    dx={bandwidth/2} dy={-5} text-anchor="end">{row[0]}</text> -->
    <!-- {/if} -->
  {/each}
</g>
<style>
  .xTicks {
  font-size: 10px;
}
.subGroup {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>