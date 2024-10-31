import type { ExactData, TypeOneExactData } from "src/svelte/appConfig/types";

const getLineChartData = (data: TypeOneExactData[]) => {
	const nodes = data[0].qData[0].qSubNodes;
	const xTicks: string[] = nodes.map((node: any) => node.qText);
	const lines: string[] = nodes[0].qSubNodes.map((line: any) => line.qText);
	const nodesData: number[][] = nodes.map((node: any) => {
		return node.qSubNodes.map((subNode: any) => subNode.qSubNodes[0].qValue);
	});

	return { nodesData, xTicks, lines };
};

export default getLineChartData;
