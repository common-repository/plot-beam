import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ScatterPlot__SvelteComponent_ from './ScatterPlot.svelte';
type MockProps = {
	xMeasure: string;
	yMeasure: string;
	dimension: string;
	rawData: [ string, number, number ][];
	ticks: number[];
};
const mockProps: MockProps = {
	xMeasure: 'Sales',
	yMeasure: 'Quantity',
	rawData: [
		[ 'Jimmy', 50, 200 ],
		[ 'Jonsy', 5, 129 ],
		[ 'Jarrag', 15, 572 ],
		[ 'Jiffy', 35, 288 ],
		[ 'Jilly', 25, 653 ],
	],
	dimension: 'Country',
	ticks: [ 0, 0.25, 0.5, 0.75, 1 ],
};

it( 'ScatterPlot Component contains a svg element', () => {
	render( ScatterPlot__SvelteComponent_, { props: mockProps } );

	const svg = screen.getByTestId( 'svg-element' );
	expect( svg ).toBeInTheDocument();
} );

it( 'the number of circiles should be the length of rawData', () => {
	const { container } = render( ScatterPlot__SvelteComponent_, {
		props: mockProps,
	} );

	const circiles = container.querySelectorAll( '.circle' );

	expect( circiles.length ).toBe( mockProps.rawData.length );
} );

// it( 'should contains xMeasure for labeling', () => {
// 	render( ScatterPlot__SvelteComponent_, { props: mockProps } );
// 	const xMeasure = screen.getByText( mockProps.xMeasure );

// 	expect( xMeasure ).toBeInTheDocument();
// } );

// it( 'should contains yMeasure for labeling', () => {
// 	render( ScatterPlot__SvelteComponent_, { props: mockProps } );
// 	const yMeasure = screen.getByText( mockProps.yMeasure );

// 	expect( yMeasure ).toBeInTheDocument();
// } );

describe( 'tick marks should include extended max value, and texted min value for both xAxis and yAxis', () => {
	const yMeasureData = mockProps.rawData.map( ( row ) => row[ 2 ] );
	const xMeasureData = mockProps.rawData.map( ( row ) => row[ 1 ] );

	it( 'tick marks on xAxis inclues extended min value', () => {
		render( ScatterPlot__SvelteComponent_, { props: mockProps } );
		const extendedXmin = screen.getByText( '0' );

		expect( extendedXmin ).toBeInTheDocument();
	} );

	it( 'tick marks on xAxis inclues extended min value', () => {
		render( ScatterPlot__SvelteComponent_, { props: mockProps } );
		const extendedXmin = screen.getByText( '50' );

		expect( extendedXmin ).toBeInTheDocument();
	} );

	it( 'tick marks on yAxis inclues extended min value', () => {
		render( ScatterPlot__SvelteComponent_, { props: mockProps } );
		const extendedXmin = screen.getByText( '100' );

		expect( extendedXmin ).toBeInTheDocument();
	} );

	it( 'tick marks on yAxis inclues extended max value', () => {
		render( ScatterPlot__SvelteComponent_, { props: mockProps } );
		const extendedXmin = screen.getByText( '700' );

		expect( extendedXmin ).toBeInTheDocument();
	} );
} );

describe( 'tick marks should also contains proper tick accounting to ticks array', () => {
	it( 'for xAxies, it renders the 3rd tick', () => {
		const secondTick = Math.round( 50 * mockProps.ticks[ 2 ] );

		render( ScatterPlot__SvelteComponent_, { props: mockProps } );

		const extendedXmin = screen.getByText( secondTick );
		expect( extendedXmin ).toBeInTheDocument();
	} );
} );
