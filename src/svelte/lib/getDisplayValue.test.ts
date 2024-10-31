import { it, expect, describe } from 'vitest';

import getDisplayValue from './getDisplayValue';

it( 'giving a large whole number, it should return a string contains abbreviations for neither thousands, millions, billions', () => {
	const value = 23000000;
	const expectResult = '23.0m';

	const displayValue = getDisplayValue( value );
	expect( displayValue ).toBe( expectResult );
} );

it( "giving a large whole number on negative side, it should return a string contains '-', as well as abbreviations for neither thousands, millions, billions", () => {
	const value = -23000000;
	const expectResult = '-23.0m';

	const displayValue = getDisplayValue( value );
	expect( displayValue ).toBe( expectResult );
} );

it( 'giving small number, it should return the number itself but convert to string', () => {
	const value = 23;
	const expectResult = '23';

	const displayValue = getDisplayValue( value );
	expect( displayValue ).toBe( expectResult );
} );

it( 'giving a small float, it should return the trimmed number as a string', () => {
	const value = 23.23;
	const expectResult = '23';

	const displayValue = getDisplayValue( value );
	expect( displayValue ).toBe( expectResult );
} );

it( 'giving a large float, it should return a string contains abbreviations for neither thousands, millions, billions based on the trimmed value ', () => {
	const value = 230000000.23;
	const expectResult = '230.0m';

	const displayValue = getDisplayValue( value );
	expect( displayValue ).toBe( expectResult );
} );
