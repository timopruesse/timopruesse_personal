<script lang="ts">
	export let url: string;
	export let title: string;
	export let path: string;
</script>

<a class="link" href={url} target="_blank" rel="noopener noreferrer">
	<svg
		class="h-6 md:h-8 fill-current text-accent-0 hover:text-accent-1 transform-gpu hover:scale-125 transition-transform"
		role="img"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>{title}</title>
		<path d={path} />
	</svg>
</a>
