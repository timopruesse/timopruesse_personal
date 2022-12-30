<script lang="ts">
	import '../app.css';
</script>

<section class="min-h-screen overflow-hidden bg-cover antialiased lg:px-6 flex flex-col">
	<slot />
</section>

<style lang="scss">
	section {
		background-image: url('/images/bg_sunset.jpg');

		@supports (background-image: url('/images/bg_sunset.webp')) {
			background-image: url('/images/bg_sunset.webp');
		}
	}
</style>
