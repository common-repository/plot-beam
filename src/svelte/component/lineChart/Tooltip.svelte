<script lang="ts">
  export let data: number[];
  export let xPosition: number; 
  export let yPosition: number;
  export let lines: string[];
  export let measurements: string[];
  import getTooltipValue from "../../lib/getTooltipValue";
  import {margin} from "../../lib/canvasSetup"
</script>

<div class="tooltip" style="position: absolute; top: {yPosition+margin.top-10}px; left: {xPosition+50}px;">
  <h5>{lines[data[1]]}</h5>
  <p>{measurements[0]}: {getTooltipValue(data[0])}</p>
</div>


<style>
h5 {
  margin: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
p {
  font-size: small;
  margin: 0;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
}
.tooltip {
  padding: 0.2rem;
  border: solid 1px black;
  background: white;
  pointer-events: none;
  border-radius: 1rem;
  opacity: 0;
  animation: fadeIn 300ms ease-in forwards;
}
@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
</style>