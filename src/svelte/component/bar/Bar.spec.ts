import { it, expect, test, describe } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Bar_SelvteComponent from './Bar.svelte';

type MockProps = {
	measurement: string;
	dimension: string;
	rawData: [ string, number ][];
};
const mockProps: MockProps = {
	rawData: [
		[ 'Jimmy', 50 ],
		[ 'Jonsy', 5 ],
		[ 'Jarrag', 15 ],
		[ 'Jiffy', 35 ],
		[ 'Jilly', 25 ],
	],
	dimension: 'name',
	measurement: 'age',
};

it( 'Bar Component contains a svg element', () => {
	render( Bar_SelvteComponent, { props: mockProps } );

	const svg = screen.getByTestId( 'svg-element' );
	expect( svg ).toBeInTheDocument();
} );

it( 'the number of bars/groups of bars is the data length', () => {
	const { container } = render( Bar_SelvteComponent, { props: mockProps } );

	const bars = container.querySelectorAll( '.bar' );

	expect( bars.length ).toBe( mockProps.rawData.length );
} );

describe( 'tick marks should include extended max value, and texted min value for both xAxis and yAxis', () => {
	const yMeasureData = mockProps.rawData.map( ( row ) => row[ 1 ] );

	it( 'tick marks on xAxis inclues extended min value', () => {
		render( Bar_SelvteComponent, { props: mockProps } );
		const extendedXmin = screen.getByText( '0' );

		expect( extendedXmin ).toBeInTheDocument();
	} );

	it( 'tick marks on xAxis inclues extended min value', () => {
		render( Bar_SelvteComponent, { props: mockProps } );
		const extendedXmin = screen.getByText( '50' );

		expect( extendedXmin ).toBeInTheDocument();
	} );
} );

describe( 'tick marks should also contains proper tick accounting to ticks array', () => {
	it( 'for xAxies, it renders the 3rd tick', () => {
		const ticks = [ 0, 0.25, 0.5, 0.75, 1 ];
		const secondTick = Math.round( 50 * ticks[ 2 ] );

		render( Bar_SelvteComponent, { props: mockProps } );

		const extendedXmin = screen.getByText( secondTick );
		expect( extendedXmin ).toBeInTheDocument();
	} );
} );
