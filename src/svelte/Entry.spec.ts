import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Entry__SvelteComponent_ from './Entry.svelte';
import type { AppProp } from './appConfig/types';
import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

// Create a QueryClient instance
const queryClient = new QueryClient();

const mockProps: AppProp = {
	objectID: 'MkcvQD',
	appID: '0d40467d-e362-4d74-b445-4166a1b32cc9',
	objectTitle: 'Sales',
	description: 'this is a testing description',
	styleChoice: 'qlik',
	label: 'value',
	valueOptions: 'millions',
	decimal: 0,
};
it( 'has a svg', () => {
	const { container } = render( Entry__SvelteComponent_, {
		props: {
			props: mockProps,
		},
	} );

	const svg = screen.getByTestId( 'svg-element' );
	expect( svg ).toBeInTheDocument();
} );
