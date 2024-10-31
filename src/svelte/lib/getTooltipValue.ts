import { getNumberOfDigits } from './getExtendedRange';

const getTooltipValue = ( value: number ) => {
	const trimedValue = Math.round( value );
	const digits = getNumberOfDigits( trimedValue );
	if ( digits < 4 ) return `${ trimedValue }`;

	if ( digits < 7 ) return `${ ( value / 1000 ).toFixed( 2 ) }k`;

	if ( digits < 11 ) return `${ ( value / 1000000 ).toFixed( 2 ) }m`;

	return `${ ( trimedValue / 1000000000 ).toFixed( 2 ) }b`;
};

export default getTooltipValue;
