<script lang="ts">
	export let url: string;
	export let title: string;
	export let path: string;
	export let hoverPath: string | undefined = undefined;
</script>

<a class="group" href={url} target="_blank" rel="noopener noreferrer">
	<svg
		class="h-6 md:h-8 fill-current text-white/75 hover:text-white transform-gpu hover:scale-125 transition-transform"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{title}</title>
		<path
			d={path}
			class:group-hover:opacity-0={hoverPath !== undefined}
			class="transition-opacity duration-300 ease-in-out"
		/>
		{#if hoverPath}
			<path
				d={hoverPath}
				class="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
			/>
		{/if}
	</svg>
</a>
