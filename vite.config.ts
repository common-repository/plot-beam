import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig( {
	plugins: [ svelte() ],
	base: './',
	build: {
		target: 'esnext',
		cssMinify: true,
		emptyOutDir: true,
		assetsDir: '',
		outDir: 'sveltebuild',
		rollupOptions: {
			input: 'src/main.ts',
			output: {
				entryFileNames: 'svelte.js',
				assetFileNames: 'svelte.css',
				//in product env, minifyInternalExport set true for code privacy
				// minifyInternalExports:true
			},
		},
	},
} );
