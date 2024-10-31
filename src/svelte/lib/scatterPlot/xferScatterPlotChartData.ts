import type { ScatterplotChartDataType } from "src/svelte/appConfig/types";

const xferScatterPlotChartData = (
	exactData: ScatterplotChartDataType["data"]["exactData"],
) => {
	const nodeLabel: string[] = exactData.map((row) => row[0]);
	const nodesData: number[][] = exactData.map((row) => {
		const [, ...rest] = row;
		return rest;
	});

	return { nodeLabel, nodesData };
};

export default xferScatterPlotChartData;
