import { notitiaColors, notitiaSlices, valueColors } from "../notitiaTemplate";
import type {
	LabelOptions,
	StyleOptions,
	ValueOptions,
	GaugeProps,
	GaugeChartDataType,
} from "../../appConfig/types";
import {
	getSegmentColor,
	getSegmentMarks,
	getDisplayValue,
	getSegmentSlices,
	getKeyValueSet,
} from "./gaugeHelperFns";
export const getGaugeProps = (
	data: GaugeChartDataType["data"],
	styleChoice: StyleOptions = "notitia",
	label: LabelOptions = "percentage",
	valueOptions: ValueOptions = "numeric",
	decimal: number = 0,
): GaugeProps => {
	const { exactData, segmentInfo, measureAxis } = data;
	const { min, max } = measureAxis;
	// const value = exactData[0][0];
	const value = getKeyValueSet(exactData);

	//get the correct props set according to style choices
	const valueSlices = [value - min, max - value];
	const segmentColors = getSegmentColor(
		notitiaColors,
		styleChoice,
		segmentInfo,
	);
	const segmentMarks = getSegmentMarks(styleChoice, min, max, segmentInfo);

	const segmentSlices: number[] = getSegmentSlices(
		styleChoice,
		notitiaSlices,
		segmentInfo,
		segmentMarks,
	);

	//get the correct props according to display preferences
	const displayValue = getDisplayValue(
		value,
		label,
		decimal,
		valueOptions,
		min,
		max,
	);
	const displayMarks = segmentMarks.map((mark: number) =>
		getDisplayValue(mark, label, decimal, valueOptions, min, max),
	);

	return {
		valueSlices,
		segmentColors,
		displayMarks,
		segmentSlices,
		displayValue,
		valueColors,
	};
};
