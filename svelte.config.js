import vercel from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess({
			postcss: true,
			sourceMap: true
		})
	],

	kit: {
		adapter: vercel({
			maxDuration: 60
		})
	},

	compilerOptions: {
		enableSourcemap: true
	}
};

export default config;
