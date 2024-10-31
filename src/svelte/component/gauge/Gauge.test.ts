import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Gauge__SvelteComponent_ from './Gauge.svelte';
const mockProps = {
	segmentColors: [ '#8e477d', '#7db8da', '#f93f17', '#f8981d', '#276e27' ],
	segmentSlices: [ 2, 2, 2, 2, 2 ],
	valueSlices: [ 985036.1850999983, 714963.8149000017 ],
	displayMarks: [ '0.80M', '1.14M', '1.48M', '1.82M', '2.16M', '2.50M' ],
	valueColors: [ '#70B1A0', '#EFEFEF' ],
	displayValue: '1.79M',
};

it( 'Gauge chart contains a svg element', () => {
	render( Gauge__SvelteComponent_, { props: mockProps } );

	const svg = screen.getByTestId( 'svg-element' );
	expect( svg ).toBeInTheDocument();
} );

it( 'Gauge chart contains any random mark in mockProps displayMarks', () => {
	render( Gauge__SvelteComponent_, { props: mockProps } );

	const mark = screen.getByText(
		mockProps.displayMarks[
			Math.floor( Math.random() * mockProps.displayMarks.length )
		]
	);
	expect( mark ).toBeInTheDocument();
} );

it( 'Gauge chart contains any random mark in mockProps displayMarks', () => {
	const { container } = render( Gauge__SvelteComponent_, {
		props: mockProps,
	} );

	const marks = container.querySelectorAll( '.segment-label' );
	expect( marks.length ).toBe( mockProps.displayMarks.length );
} );

it( 'Gauge chart contains the correct displayValue', () => {
	render( Gauge__SvelteComponent_, { props: mockProps } );
	const value = screen.getByText( mockProps.displayValue );
	expect( value ).toBeInTheDocument();
} );

it( 'Gauge chart containts correct segments length', () => {
	const { container } = render( Gauge__SvelteComponent_, {
		props: mockProps,
	} );

	const segments = container.querySelectorAll( '.segments' );
	expect( segments.length ).toBe( 5 );
} );

it( 'Gauge chart containts 2 segments in value slices', () => {
	const { container } = render( Gauge__SvelteComponent_, {
		props: mockProps,
	} );

	const segments = container.querySelectorAll( '.valueSlices' );
	expect( segments.length ).toBe( 2 );
} );
