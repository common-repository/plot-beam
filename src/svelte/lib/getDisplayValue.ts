import { getNumberOfDigits } from './getExtendedRange';

const getDisplayValue = ( value: number ) => {
	const trimedValue = Math.round( value );
	const digits = getNumberOfDigits( trimedValue );
	if ( digits < 4 ) return `${ trimedValue }`;

	if ( digits < 7 ) return `${ ( value / 1000 ).toFixed( 0 ) }k`;

	if ( digits < 11 ) return `${ ( value / 1000000 ).toFixed( 1 ) }m`;

	return `${ ( trimedValue / 1000000000 ).toFixed( 2 ) }b`;
};

export default getDisplayValue;
