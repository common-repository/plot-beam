<script lang="ts">
  export let props: AppProp;
  import type {AppProp, ChartData} from './appConfig/types'
  import Gauge from './component/gauge/Gauge.svelte';
  import Bar from './component/bar/Bar.svelte';
	import ScatterPlot from './component/scatterPlot/ScatterPlot.svelte';
	import LineChart from './component/lineChart/LineChart.svelte';
	import { getGaugeProps } from './lib/gauge/getGaugePorps';
  import getLineProps from './lib/line/getLineProps';
  import getBarProps from './lib/bar/getBarProps';
  import getScatterPlotProps from './lib/scatterPlot/getScatterPlotProps';
	import { isGauge } from './lib/chartDataTypeCheck';
  // export let data: QlikChartDataType<GaugeChartDataType | LineChartDataType | ScatterplotChartDataType | BarChartDataType>;
    export let data: ChartData; 

  const styleChoice ="notitia"
  const decimal = 0
  const label = "percentage"
  const valueOptions = "millions"

  const chartPool = ['gauge', 'scatterplot', 'barchart', 'linechart']
  //as we commented out the feature props, using hardcoare value for gauge display for now
  
  $: isInPool = chartPool.filter(chart => chart === data.visType).length > 0? true : false;
</script>
  
  {#if isInPool && data}
    {#if isGauge(data) }
      {#await getGaugeProps(data, styleChoice, label, valueOptions, decimal) then gaugeProps}
      <Gauge 	
      valueSlices={gaugeProps.valueSlices}
      segmentSlices={gaugeProps.segmentSlices}
      valueColors={gaugeProps.valueColors}
      displayMarks={gaugeProps.displayMarks}
      displayValue ={gaugeProps.displayValue}
      segmentColors={gaugeProps.segmentColors} 
    />
      {/await}
    {/if}
    {#if data.visType === "barchart"}
      {#await getBarProps(data, styleChoice, label, valueOptions, decimal) then barProps}
        <Bar	
          nodesData = {barProps.nodesData}
          group = {barProps.group}
          subGroup={barProps.subGroup}
          groupLabel={barProps.groupLabel}
        />
        {/await}
    {/if}

    {#if data.visType === "scatterplot"}
      {#await getScatterPlotProps(data, styleChoice, label, valueOptions, decimal) then scatterPlotProps}
        <ScatterPlot	
          xMeasure = {scatterPlotProps.xMeasure}
          yMeasure = {scatterPlotProps.yMeasure}
          dimension = {scatterPlotProps.dimension}
          nodesData = {scatterPlotProps.nodesData}
          nodeLabel = {scatterPlotProps.nodeLabel}
        /> 
        {/await}
    {/if}

    {#if data.visType === "linechart"}
      {#await getLineProps(data, styleChoice, label, valueOptions, decimal) then lineProps}
        <LineChart	
          nodesData={lineProps.nodesData}
          xTicks={lineProps.xTicks}
          lines={lineProps.lines}
          measurements={lineProps.measurements}
          dimensions={lineProps.dimensions}
        /> 
      {/await}
    {/if}
{:else}
  <p class="card-error">{ data.visType } can not be displayed, please contact Notitia</p>
{/if}
<style>
  .card-error {
		margin: 70px auto;
	}

</style>