import type { TypeTwoExactData } from "src/svelte/appConfig/types";

const xferLineChartData = (
	dimensions: string[],
	measurements: string[],
	exactData: TypeTwoExactData[],
) => {
	const xTicks: string[] = exactData.map((row) => row[0]);
	const lines: string[] = measurements;
	const nodesData: number[][] = exactData.map((row) => {
		const [, ...rest] = row;
		return rest;
	});
	return { xTicks, lines, nodesData };
};

export default xferLineChartData;
