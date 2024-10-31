// get numbers of digts regardless its negative or positive value
const getNumberOfDigits = ( num: number ): number => {
	if ( Math.abs( num ) === num ) return num.toString().length;

	return num.toString().length - 1;
};

const getTickBase = ( numDigits: number ): number => {
	return Math.pow( 10, numDigits - 1 );
};

const getExtendedMax = ( value: number, base: number ): number => {
	const numDigits = getNumberOfDigits( base );
	const tickBase = getTickBase( numDigits );
	const largeNumberCheck = numDigits > 3 ? true : false;
	if ( value === 0 ) return largeNumberCheck ? tickBase / 10 : tickBase;

	if ( numDigits < 4 ) return Math.ceil( value / tickBase ) * tickBase;

	if ( Math.abs( value % tickBase ) < tickBase / 2 )
		return Math.ceil( value / ( tickBase / 10 ) ) * ( tickBase / 10 );

	return Math.ceil( value / tickBase ) * tickBase;
};

const getExtendedMin = ( value: number, base: number ): number => {
	const numDigits = getNumberOfDigits( base );
	const tickBase = getTickBase( numDigits );
	//determin if the range/base is large number or small number
	const largeNumberCheck = numDigits > 3 ? true : false;

	if ( value > 0 || value === 0 ) return 0;

	if ( numDigits < 4 ) return Math.floor( value / tickBase ) * tickBase;

	if ( Math.abs( value % tickBase ) < tickBase / 2 )
		return Math.floor( value / ( tickBase / 10 ) ) * ( tickBase / 10 );

	return Math.floor( value / tickBase ) * tickBase;
};

const getExtendedRange = ( range: number[] ): number[] => {
	const min = Math.round( range[ 0 ] );
	const max = Math.round( range[ 1 ] );
	const base = Math.max( Math.abs( max ), Math.abs( min ) );

	const extendedMin = getExtendedMin( min, base );
	const extendedMax = getExtendedMax( max, base );

	return [ extendedMin, extendedMax ];
};

export {
	getNumberOfDigits,
	getExtendedRange,
	getTickBase,
	getExtendedMax,
	getExtendedMin,
};
