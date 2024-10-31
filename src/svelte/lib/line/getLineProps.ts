import type { Line } from "d3";
import type {
	LineChartDataType,
	LabelOptions,
	StyleOptions,
	ValueOptions,
	LineProps,
} from "../../appConfig/types";
import getLineChartData from "./getLineChartData";
import xferLineChartData from "./xferLineChartData";
import { isTypeOneExactData } from "../exactDataTypeCheck";
const getLineProps = (
	data: LineChartDataType["data"],
	styleChoice: StyleOptions = "notitia",
	label: LabelOptions = "percentage",
	valueOptions: ValueOptions = "numeric",
	decimal: number = 0,
): LineProps => {
	const { dimensions, exactData, measurements } = data;
	let chartData: {
		nodesData: number[][];
		xTicks: string[];
		lines: string[];
	};
	if (isTypeOneExactData(exactData)) {
		chartData = getLineChartData(exactData);
	} else {
		chartData = xferLineChartData(dimensions, measurements, exactData);
	}

	return { ...chartData, measurements, dimensions };
};

export default getLineProps;
