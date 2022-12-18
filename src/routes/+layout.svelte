<script lang="ts">
	import '../app.css';
</script>

<section class="min-h-screen w-screen overflow-hidden bg-cover antialiased lg:px-6">
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
