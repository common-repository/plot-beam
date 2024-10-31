import { it, expect, describe } from 'vitest';

import getTicks from './getTicks';

it( 'giving range array all positive number, it returns equal tickNumber -1 segments', () => {
	const range = [ 4000, 56000 ];
	const tickNumber = 3;

	const expectResult = [ 4000, 30000, 56000 ];

	const ticks = getTicks( range, tickNumber );
	expect( ticks ).toEqual( expectResult );
} );

it( 'giving range array all positive number, it returns equal tickNumber -1 segments', () => {
	const range = [ -4000, 56000 ];
	const tickNumber = 3;

	const expectResult = [ -4000, 26000, 56000 ];

	const ticks = getTicks( range, tickNumber );
	expect( ticks ).toEqual( expectResult );
} );
