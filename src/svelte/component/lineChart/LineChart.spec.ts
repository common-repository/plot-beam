import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import LineChart__SvelteComponent_ from './LineChart.svelte';

type MockProps = {
	xTicks: string[];
	nodesData: number[][];
	lines: string[];
	measurements: string[];
};
const mockProps: MockProps = {
	nodesData: [
		[ 87666.29400000005, 72043.92419999996, 208757.69999999992 ],
		[ 458871.0101, 363073.9277000001, 580147.4999999994 ],
		[ 1101379.7817, 868841.0968000006, 1280426.099999999 ],
		[ 1785036.1851000001, 1421877.3500000006, 1222286.9999999993 ],
	],
	lines: [ 'Sales', 'COS', 'Freight' ],
	xTicks: [ '2015', '2016', '2017', "2018" ],
	measurements: ["years"]
};

it( 'LineChart Component contains a svg element', () => {
	render( LineChart__SvelteComponent_, { props: mockProps } );

	const svg = screen.getByTestId( 'svg-element' );
	expect( svg ).toBeInTheDocument();
} );

it( 'the number of intersections is the data length', () => {
	const { container } = render( LineChart__SvelteComponent_, {
		props: mockProps,
	} );

	const intersections = container.querySelectorAll( '.intersection' );

	expect( intersections.length ).toBe(mockProps.nodesData.flat().length);
} );

describe( 'on AxisX, the years in xTicks should be rendered on the page', () => {
	it( 'render 2015 on the page', () => {
		render( LineChart__SvelteComponent_, { props: mockProps } );
		const tick1 = screen.getByText( mockProps.xTicks[0] );
		expect( tick1 ).toBeInTheDocument();
	} );

	it( 'render 2016 on the page', () => {
		render( LineChart__SvelteComponent_, { props: mockProps } );
		const tick2 = screen.getByText( mockProps.xTicks[1]  );
		expect( tick2 ).toBeInTheDocument();
	} );

	it( 'render 2017 on the page', () => {
		render( LineChart__SvelteComponent_, { props: mockProps } );
		const tick3 = screen.getByText( mockProps.xTicks[2]  );
		expect( tick3 ).toBeInTheDocument();
	} );

	it( 'render 2018 on the page', () => {
		render( LineChart__SvelteComponent_, { props: mockProps } );
		const tick4 = screen.getByText(mockProps.xTicks[3]);
		expect( tick4 ).toBeInTheDocument();
	} );
} );
