const xferBarChartData = (
	dimensions: string[],
	exactData: [string, string, number][],
) => {
	const tempData = exactData;
	//under HybecubeData, group label is displayed in dimensions, and first element of each row is group names under the group label.
	const groupLabel: string = dimensions[0];
	const group: string[] = [];
	const subGroup: string[] = [];
	const unsortData: number[] = [];
	const nodesData: number[][] = [];
	tempData.forEach((row) => {
		if (!group.includes(row[0])) group.push(row[0]);
		if (!subGroup.includes(row[1])) subGroup.push(row[1]);
		unsortData.push(row[2]);
	});
	unsortData.forEach((number, index) => {
		if (index % subGroup.length === 0) {
			nodesData.push([]);
			nodesData[Math.floor(index / subGroup.length)].push(number);
		} else {
			nodesData[Math.floor(index / subGroup.length)].push(number);
		}
	});
	return { group, subGroup, nodesData, groupLabel };
};

export default xferBarChartData;
