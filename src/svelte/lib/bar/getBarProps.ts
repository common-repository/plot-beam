import type {
	BarProps,
	BarChartDataType,
	ChartProps,
	LabelOptions,
	StyleOptions,
	ValueOptions,
} from "../../appConfig/types";
import { isTypeOneExactData, isTypeTwoExactData } from "../exactDataTypeCheck";
import { getBarChartData } from "./getBarChartData";
import sortAlterBarChartData from "./sortAlterBarChartData";
import xferBarChartData from "./xferBarChartData";

const getBarProps = (
	data: BarChartDataType["data"],
	styleChoice: StyleOptions = "notitia",
	label: LabelOptions = "percentage",
	valueOptions: ValueOptions = "numeric",
	decimal: number = 0,
): BarProps => {
	let chartData: BarProps;
	const { dimensions, measurements, exactData } = data;
	if (isTypeOneExactData(exactData)) {
		chartData = sortAlterBarChartData(exactData, dimensions);
	} else if (isTypeTwoExactData(exactData)) {
		chartData = getBarChartData(dimensions, measurements, exactData);
	} else {
		chartData = xferBarChartData(dimensions, exactData);
	}

	return { ...chartData };
};

export default getBarProps;
