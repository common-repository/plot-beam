import type { S } from "vitest/dist/reporters-2ff87305";
import type {
	ScatterplotChartDataType,
	LabelOptions,
	ScatterPlotProps,
	StyleOptions,
	ValueOptions,
} from "../../appConfig/types";
import xferScatterPlotChartData from "./xferScatterPlotChartData";
const getScatterPlotProps = (
	data: ScatterplotChartDataType["data"],
	styleChoice: StyleOptions = "notitia",
	label: LabelOptions = "value",
	valueOptions: ValueOptions = "numeric",
	decimal: number = 0,
): ScatterPlotProps => {
	const { dimensions, measurements, exactData } = data;
	const xMeasure = measurements[0];
	const yMeasure = measurements[1];
	const dimension = dimensions[0];

	const chartData = xferScatterPlotChartData(exactData);

	return { xMeasure, yMeasure, dimension, ...chartData };
};

export default getScatterPlotProps;
