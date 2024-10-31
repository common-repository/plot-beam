<script lang="ts">
  import type {AppProp, BarChartDataType, ChartData, LineChartDataType, QlikChartDataType, ScatterplotChartDataType} from './appConfig/types';
  export let props: AppProp;
  import type { UseQueryStoreResult } from "@sveltestack/svelte-query";
  import Chart from './Chart.svelte';
	import BrandIcon from './component/BrandIcon.svelte';
	import type {AxiosError} from 'axios';
	import { getPBChartData } from './lib/getPbChartData';
	import { getTestChartData } from './lib/getTestChartData';

  const {
		appID,
		objectID,
    description,
		objectTitle,
		dataType, 
		objectSlug
	} = props;

  let result: UseQueryStoreResult<ChartData, AxiosError>;
	//getting object data from Qlik
	$: result = dataType==="userData"? getPBChartData(objectSlug): getTestChartData(appID, objectID);
  
</script>

<div class="qlik-block">
  <div class="card">
    <div class="card-title">
      {objectTitle}
      <BrandIcon />
    </div>
    <div class="card-body">
      {#if $result.isLoading}
        <div class="card-chart">
          <div class="custom-loader" />
        </div>
      {:else if $result.error}
        <div class="card-chart card-error">
          Something went wrong: {$result.error.message}
        </div>
      {:else if $result.data}
        <div class="card-chart-title">
          {$result.data.measurements[0]}
        </div>
        <div class="card-chart">
          <Chart data={$result.data} {props} />
        </div>
				{#if description}
				<div class="card-description">{description}</div>
				{/if}
      {/if}
    </div>
  </div>

</div>

  <style>
    .qlik-block {
      display: flex;
      justify-content: center;
	  }
    .card {
		justify-self: center;
		box-sizing: border-box;
		width: 580px;
		border: 1px solid #e5e5e8;
		border-radius: 22px;
		background: #fff;
		padding: 20px;
		display: flex;
		flex-direction: column;
		min-height: 300px;
	}

	.card-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #ccc;
		padding-bottom: 10px;
		padding-inline: 5px;
		color: #353535;
		font-family: "Inter", sans-serif;
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		margin-bottom: 0;
	}

	.card-error {
		margin: 70px auto;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		margin-top: 0;
		margin-bottom: 0;
		padding-inline: 10px;
	}

	.card-chart-title {
		padding-top: 27px;
		margin-top: 0;
		display: inline;
		color: #4d4d4d;
		font-size: 18px;
		font-weight: 400;
		font-family: "Inter", sans-serif;
		align-self: start;
		/* padding-bottom: 22px; */
	}

	.card-chart {
		width: 382px;
		display: flex;
		flex: 1;
		align-self: center;
		height: fit-content;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.card-description {
		/* padding-top: 18px; */
		color: #4d4d4d;
		font-size: 14px;
		font-weight: 400;
		margin-top: auto;
		font-family: "Inter", sans-serif;
	}

	.custom-loader {
		display: inline-flex;
		margin: 70px auto;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 8px solid;
		border-color: #e4e4ed;
		border-right-color: #70b1a0;
		animation: s2 1s infinite linear;
	}

	@keyframes s2 {
		to {
			transform: rotate(1turn);
		}
	}
  </style>