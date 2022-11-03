<script lang="ts">
	import type { AllowedImageType, ImageSources } from './types';

	export let src: ImageSources;
	export let baseType: AllowedImageType;
	export let alt = '';
	export let title = alt;
	export let instance: HTMLImageElement | undefined = undefined;

	$: baseUrl = src[baseType];
	$: extraSources = Object.keys(src).filter((s) => s !== baseType) as AllowedImageType[];
</script>

<picture>
	{#each extraSources as type}
		<source srcset={src[type]} type="image/{type}" />
	{/each}
	<img bind:this={instance} {...$$restProps} {alt} {title} src={baseUrl} loading="lazy" />
</picture>
