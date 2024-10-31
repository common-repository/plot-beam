import type {
	ChartData,
	LabelOptions,
	StyleOptions,
	ValueOptions,
	GaugeProps,
	ScatterPlotProps,
	BarProps,
	ChartProps,
	LineProps,
} from '../appConfig/types';
import { getGaugeProps } from './gauge/getGaugePorps';
import getBarProps from './bar/getBarProps';
import getScatterPlotProps from './scatterPlot/getScatterPlotProps';
import getLineProps from './line/getLineProps';

export const getChartProps = async (
	data: ChartData,
	styleChoice: StyleOptions,
	label: LabelOptions,
	valueOptions: ValueOptions,
	decimal: number
): Promise< ChartProps > => {
	switch ( data.visType ) {
		case 'gauge': {
			const guageProps: GaugeProps = await getGaugeProps(
				data,
				styleChoice,
				label,
				valueOptions,
				decimal
			);
			return guageProps;
		}
		case 'barchart': {
			const barProps: BarProps = await getBarProps(
				data,
				styleChoice,
				label,
				valueOptions,
				decimal
			);
			return barProps;
		}
		case 'scatterplot': {
			const scatterPlotProps: ScatterPlotProps =
				await getScatterPlotProps(
					data,
					styleChoice,
					label,
					valueOptions,
					decimal
				);
			return scatterPlotProps;
		}
		case 'linechart': {
			const lineProps: LineProps = await getLineProps(
				data,
				styleChoice,
				label,
				valueOptions,
				decimal
			);
			return lineProps;
		}
		default:
			throw new Error(
				`${ data.visType } can not be displayed, please contact Notitia`
			);
	}
};
