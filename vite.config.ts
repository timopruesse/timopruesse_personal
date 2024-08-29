import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = defineConfig({
	server: {
		https: {},
		proxy: {}
	},
	plugins: [sveltekit()],
	build: {
		sourcemap: true,
		rollupOptions: {
			output: {
				compact: true,
				manualChunks: undefined
			},
			treeshake: 'smallest'
		}
	}
});

export default config;
