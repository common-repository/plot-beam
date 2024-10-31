import Chart from "../Chart.svelte";

type AppProp = {
	appID: string;
	objectID: string;
	description: string;
	objectTitle: string;
	dataType: string;
	objectSlug: string;
	// styleChoice: StyleOptions;
	// label: LabelOptions;
	// valueOptions: ValueOptions;
	// decimal: number;
};

type QlikChartDataType<ChartData> = {
	data: ChartData;
};

type GaugeChartDataType = QlikChartDataType<{
	visType: string;
	dimensions: string[];
	measurements: string[];
	measureAxis: MeasureAxis;
	segmentInfo: SegmentInfo;
	exactData: string[];
}>;

type LineChartDataType = QlikChartDataType<{
	visType: string;
	dimensions: string[];
	measurements: string[];
	exactData: ExactData<TypeOneExactData[]> | ExactData<TypeTwoExactData[]>;
}>;

type BarChartDataType = QlikChartDataType<{
	visType: string;
	dimensions: string[];
	measurements: string[];
	exactData: ExactData<TypeOneExactData[]> | ExactData<TypeTwoExactData[]>;
}>;

type ScatterplotChartDataType = QlikChartDataType<{
	visType: string;
	dimensions: string[];
	measurements: string[];
	exactData: [string, number, number][];
}>;

type SubNode = {
	qText: string;
	qNum: number;
	qSubNodes: {
		qText: string;
		qValue: number;
	}[];
};
type Nodes = {
	qSubNodes: SubNode[];
	qText: string;
};
type QData = {
	qElemNumber: number;
	qText: string;
	qNum: number;
	qSubNodes: Nodes[];
};
type TypeOneExactData = {
	qData: QData[];
};
type TypeTwoExactData = [string, ...[number]];
type ExactData<T extends TypeOneExactData[] | TypeTwoExactData[]> = T;
// type ChartData<
// 	T extends
// 		| BarChartDataType
// 		| LineChartDataType
// 		| ScatterplotChartDataType
// 		| GaugeChartDataType,
// > = T["data"];
type MeasureAxis = {
	min: number;
	max: number;
};
type Limits = {
	value: number;
	gradient: boolean;
};

type PaletteColors = {
	color: string;
	index: number;
};
type SegmentInfo = {
	paletteColors: PaletteColors[];
	limits: Limits[];
};

type ChartData = {
	visType: string;
	dimensions: string[];
	measurements: string[];
	measureAxis?: MeasureAxis;
	segmentInfo?: SegmentInfo;
	exactData: any[];
};

type GaugeProps = {
	segmentColors: string[];
	segmentSlices: number[];
	displayMarks: string[];
	displayValue: string;
	valueSlices: number[];
	valueColors: string[];
};

type DonutProps = {
	data: number;
	index: number;
	value: number;
	startAngle: number;
	endAngle: number;
	padAngle: number;
};

type ScatterPlotProps = {
	xMeasure: string;
	yMeasure: string;
	dimension: string;
	nodesData: number[][];
	nodeLabel: string[];
};

type BarProps = {
	group: string[];
	subGroup: string[];
	groupLabel: string;
	nodesData: number[][];
};

type LineProps = {
	nodesData: number[][];
	lines: string[];
	xTicks: string[];
	measurements: string[];
	dimensions: string[];
};

type ChartProps = BarProps | ScatterPlotProps | GaugeProps | LineProps;
type StyleOptions = "qlik" | "notitia";
type LabelOptions = "value" | "percentage";
type ValueOptions = "numeric" | "thousands" | "millions" | "billions";

export type {
	AppProp,
	BarChartDataType,
	GaugeChartDataType,
	ScatterplotChartDataType,
	ScatterPlotProps,
	BarProps,
	GaugeProps,
	DonutProps,
	StyleOptions,
	LabelOptions,
	ValueOptions,
	SegmentInfo,
	ChartProps,
	LineProps,
	MeasureAxis,
	LineChartDataType,
	ExactData,
	TypeOneExactData,
	TypeTwoExactData,
	QlikChartDataType,
	ChartData,
};
