import App from './svelte/App.svelte';
import type { AppProp } from './svelte/appConfig/types';

const createApp = () => {
	document.addEventListener( 'DOMContentLoaded', () => {
		const targetClass = 'qlik-block';
		const targetElements = document.querySelectorAll( `.${ targetClass }` );

		if ( targetElements.length > 0 ) {
			return targetElements.forEach( ( element ) => {
				const attribute = element.querySelector( 'pre' );
				const props = attribute
					? JSON.parse( atob( attribute.innerHTML ) )
					: null;
				element.classList.remove( 'qlik-block' );
				element.classList.add( 'wp-block-create-block-plot-beam' );

				new App( {
					target: element,
					props: { props },
				} );
			} );
		} else {
			console.error( `No elements found with class '${ targetClass }'.` );
			return null;
		}
	} );
};
createApp();
