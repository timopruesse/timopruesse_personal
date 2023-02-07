<script lang="ts">
	import type { AllowedImageType, ImageSources } from './types';

	export let src: ImageSources;
	export let baseType: AllowedImageType;
	export let alt = '';
	export let title = alt;
	export let instance: HTMLImageElement | undefined = undefined;
	export let mobile = false;

	$: baseUrl = src[baseType];
	$: extraSources = Object.keys(src).filter((s) => s !== baseType) as AllowedImageType[];
</script>

<picture>
	{#if mobile}
		<source
			srcset="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
			media="(min-width: 1280px)"
		/>
	{:else}
		<source
			srcset="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
			media="(max-width: 1279px)"
		/>
	{/if}

	{#each extraSources as type}
		<source srcset={src[type]} type="image/{type}" />
	{/each}
	<img bind:this={instance} {...$$restProps} {alt} {title} src={baseUrl} />
</picture>
