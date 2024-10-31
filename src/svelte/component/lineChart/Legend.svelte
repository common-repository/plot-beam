<script lang="ts">
	import { margin } from "../../lib/canvasSetup";
  export let lines: string[];
  export let colors: string[];
</script>

{#each lines as line, index}
  <line x1={5} y1={index*30} x2={35} y2={index*30} stroke={colors[index]}/>
  <text class="label" x={margin.right} y={index*30+10} stroke={colors[index]} text-anchor="end">{line}</text>
{/each}

<style>
  .label {
    font-size: 8px;
  }
</style>