import { it, expect, describe } from 'vitest';
import {
	getExtendedRange,
	getNumberOfDigits,
	getTickBase,
	getExtendedMin,
	getExtendedMax,
} from './getExtendedRange';

describe( 'getNumberOfDigits()', () => {
	it( 'postive number should get the correct numbers of digitals', () => {
		const value = 5;
		const expectResult = 1;

		const numberOfDigits = getNumberOfDigits( value );
		expect( numberOfDigits ).toBe( expectResult );
	} );

	it( 'negative number should get the correct numbers of digitals regardless the minus sign', () => {
		const value = -18500;
		const expectResult = 5;

		const numberOfDigits = getNumberOfDigits( value );
		expect( numberOfDigits ).toBe( expectResult );
	} );

	it( '0, should return 1 digits', () => {
		const value = 0;
		const expectResult = 1;

		const numberOfDigits = getNumberOfDigits( value );
		expect( numberOfDigits ).toBe( expectResult );
	} );
	it( 'random test', () => {
		const value = 970;
		const expectResult = 3;

		const numberOfDigits = getNumberOfDigits( value );
		expect( numberOfDigits ).toBe( expectResult );
	} );
} );

describe( 'getTickBase()', () => {
	it( 'give the correct number of digitals, it return correct multiples of ten, eg 2500 should return 1000 ', () => {
		const value = getNumberOfDigits( -18500 );
		const expectResult = 10000;

		const tickBase = getTickBase( value );
		expect( tickBase ).toEqual( expectResult );
	} );

	it( 'giving 1 digital, it should return 1', () => {
		const value = 1;
		const expectResult = 1;

		const tickBase = getTickBase( value );
		expect( tickBase ).toEqual( expectResult );
	} );

	it( 'random test', () => {
		const value = 3;
		const expectResult = 100;

		const tickBase = getTickBase( value );
		expect( tickBase ).toBe( expectResult );
	} );
} );

describe( 'getExtendedMin()', () => {
	it( 'giving a negative number, it should return correct extended value that is also negative number', () => {
		const value = -18500;
		const tickBase = 10000;
		const expectResult = -20000;

		const extendedMin = getExtendedMin( value, tickBase );
		expect( extendedMin ).toEqual( expectResult );
	} );

	it( 'giving 0 as value and 0 for tickBase, it should small neative segment', () => {
		const value = 0;
		const tickBase = 30000;
		const expectResult = 0;

		const extendedMin = getExtendedMin( value, tickBase );
		expect( extendedMin ).toEqual( expectResult );
	} );

	it( 'giving 0 as value and 0 for tickBase, it should 0', () => {
		const value = 5;
		const tickBase = 1;
		const expectResult = 0;

		const extendedMin = getExtendedMin( value, tickBase );
		expect( extendedMin ).toEqual( expectResult );
	} );
} );

describe( 'getExtendedMax()', () => {
	it( 'giving a negative number, it should return correct extended value that is also negative number', () => {
		const value = -18500;
		const tickBase = 10000;
		const expectResult = -10000;

		const extendedMax = getExtendedMax( value, tickBase );
		expect( extendedMax ).toEqual( expectResult );
	} );

	it( 'giving 0 as value and 1000 for tickBase, it should small positive segment', () => {
		const value = 0;
		const tickBase = 1000;
		const expectResult = 100;

		const extendedMin = getExtendedMax( value, tickBase );
		expect( extendedMin ).toEqual( expectResult );
	} );

	it( 'giving 5 as value and 1 for tickBase, it should 0', () => {
		const value = 5;
		const tickBase = 1;
		const expectResult = 5;

		const extendedMin = getExtendedMax( value, tickBase );
		expect( extendedMin ).toEqual( expectResult );
	} );
	it( 'random test', () => {
		const value = 841;
		const base = 970;
		const expectResult = 900;

		const extendedMax = getExtendedMax( value, base );
		expect( extendedMax ).toEqual( expectResult );
	} );
} );

describe( 'getExtendedRange()', () => {
	it( 'min is 0, max is large positive number should return small segment on negative side for min, proper segment over the max value ', () => {
		const range = [ 0, 26700 ];
		const expectResult = [ 0, 30000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange ).toEqual( expectResult );
	} );

	it( 'max is 0, min is small negative number should return small segment on positive side for max, proper segment over the min value is negative value', () => {
		const range = [ -12500, 0 ];
		const expectResult = [ -13000, 1000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange ).toEqual( expectResult );
	} );

	it( 'max is a large number, if residual is above middle treashhold, it return high scale of extened max', () => {
		const range = [ 0, 26700 ];
		const expectResult = [ 0, 30000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange[ 1 ] ).toEqual( expectResult[ 1 ] );
	} );

	it( 'max is a large number, if residual is below middle treashhold, it return low scale of extened max', () => {
		const range = [ 0, 21700 ];
		const expectResult = [ 0, 22000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange[ 1 ] ).toEqual( expectResult[ 1 ] );
	} );

	it( 'max is a large number, if residual is above middle treashhold, it return high scale of extened max', () => {
		const range = [ 0, 23500 ];
		const expectResult = [ 0, 24000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange[ 1 ] ).toEqual( expectResult[ 1 ] );
	} );
	it( 'min is negative number, it should still get close prime number', () => {
		const range = [ -18500, 0 ];
		const expectResult = [ -20000, 1000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange ).toEqual( expectResult );
	} );
	it( 'max is a large number, if residual is below middle treashhold, it return low scale of extened max', () => {
		const range = [ 0, 21700 ];
		const expectResult = [ 0, 22000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange ).toEqual( expectResult );
	} );

	it( 'mins is nagative number, if residual is above middle treashhold, it return high scale of extened max', () => {
		const range = [ -5799, 5100 ];
		const expectResult = [ -6000, 6000 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange[ 0 ] ).toEqual( expectResult[ 0 ] );
	} );

	it( 'random tests', () => {
		const range = [ 128, 842 ];
		const expectResult = [ 0, 900 ];

		const extentedRange = getExtendedRange( range );
		expect( extentedRange ).toEqual( expectResult );
	} );
} );
