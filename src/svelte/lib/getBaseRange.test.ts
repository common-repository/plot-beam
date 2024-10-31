import { it, expect, describe } from 'vitest';
import getBaseRange from './getBaseRange';

it( 'base tst', () => {
	const testArray: number[][] = [
		[  23, 49, 198 ],
		[  223, 249, 698 ],
		[  77, 97, 54 ],
		[ 628, 29, 763 ],
	];
	const xferArray = getBaseRange( testArray );
	const expectResult = [ 23, 763 ];

	expect( xferArray ).toEqual( expectResult );
} );

it( 'data object test', () => {
	const testArray: number[][] = [
		[ 87666.29400000005, 72043.92419999996, 208757.69999999992 ],
		[  458871.0101, 363073.9277000001, 580147.4999999994 ],
		[ 1101379.7817, 868841.0968000006, 1280426.099999999 ],
		[ 1785036.1851000001, 1421877.3500000006, 1222286.9999999993 ],
	];
	const xferArray = getBaseRange( testArray );
	const expectResult = [ 72043.92419999996, 1785036.1851000001 ];

	expect( xferArray ).toEqual( expectResult );
} );
