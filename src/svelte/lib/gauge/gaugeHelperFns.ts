import type {
	LabelOptions,
	SegmentInfo,
	StyleOptions,
	ValueOptions,
	MeasureAxis
} from '../../appConfig/types';

const getKeyValueSet = (exactData: any[]) => {
	if (typeof exactData[0][0] === "string" && exactData[0][0].includes("%"))
		return Number(exactData[0][0].replace('%', ''))/100
	return exactData[0][0]
}

const getSegmentColor = (
	notitiaColors: string[],
	styleChoice: StyleOptions,
	segmentInfo: SegmentInfo
): string[] => {
	if ( styleChoice === 'qlik' )
		return segmentInfo.paletteColors.map( ( colorSet ) => colorSet.color );

	return notitiaColors;
};

const getSegmentMarks = (
	styleChoices: StyleOptions,
	min: number,
	max: number,
	segmentInfo?: SegmentInfo
): number[] => {
	let segmentMarks: number[] = [];
	if ( styleChoices === 'qlik' && segmentInfo ) {
		segmentMarks = segmentInfo.limits.map( ( mark ) => mark.value );
		segmentMarks.push( max );
		segmentMarks.unshift( min );
	} else if ( styleChoices === 'qlik' ) {
		//admin choose qlik but not having customised segment, aka no segmentInfo, then return one segment
		segmentMarks = [ min, max ];
	} else {
		for ( let i = 0; i < 6; i++ ) {
			segmentMarks.push( min + 0.2 * i * ( max - min ) );
		}
	}
	return segmentMarks;
};

const getDisplayValue = (
	value: number,
	label: LabelOptions,
	decimal: number,
	valueOptions: string,
	min: number,
	max: number
): string => {
	if ( label === 'percentage' ) {
		if ( value === min ) return '0';

		return `${ ( ( ( value - min ) / ( max - min ) ) * 100 ).toFixed(
			decimal
		) }%`;
	}
	let displayValue;
	if ( value === 0 ) return '0';
	if ( valueOptions === 'thousands' ) {
		displayValue = `${ ( value / 1000 ).toFixed( 2 ) }K`;
	} else if ( valueOptions === 'millions' ) {
		displayValue = `${ ( value / 1000000 ).toFixed( 2 ) }M`;
	} else if ( valueOptions === 'billions' ) {
		displayValue = `${ ( value / 1000000000 ).toFixed( 2 ) }B`;
	} else {
		displayValue = `${ value.toFixed( 0 ) }`;
	}
	return displayValue;
};

const getDisplayMarks = (
	segmentMarks: number[],
	label: LabelOptions,
	valueOptions: ValueOptions,
	decimal: number,
	min: number,
	max: number
): string[] => {
	return segmentMarks.map( ( mark: number ) =>
		getDisplayValue( mark, label, decimal, valueOptions, min, max )
	);
};

const getSegmentSlices = (
	styleChoice: StyleOptions = 'notitia',
	notitiaSlices: number[],
	segmentInfo: SegmentInfo,
	segmentMarks: number[]
): number[] => {
	if ( styleChoice === 'notitia' ) return notitiaSlices;

	if ( styleChoice === 'qlik' && segmentInfo ) {
		let segmentSlices = [];
		for ( let i = 0; i < segmentMarks.length - 1; i++ ) {
			segmentSlices.push( segmentMarks[ i + 1 ] - segmentMarks[ i ] );
		}
		return segmentSlices;
	}

	return [ 1 ];
};

export {
	getSegmentColor,
	getSegmentMarks,
	getDisplayValue,
	getSegmentSlices,
	getDisplayMarks,
	getKeyValueSet
};
