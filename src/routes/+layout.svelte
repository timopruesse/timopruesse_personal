<script lang="ts">
	import '../app.css';
</script>

<section class="min-h-screen overflow-hidden bg-cover antialiased lg:px-6 flex flex-col">
	<slot />
</section>

<style lang="scss">
	section {
		background-image: url('/images/bg_flowers.jpg');

		@supports (background-image: url('/images/bg_flowers_portrait.webp')) {
			background-image: url('/images/bg_flowers_portrait.webp');
		}

		@media screen and (min-width: 640px) {
			background-image: url('/images/bg_flowers.jpg');

			@supports (background-image: url('/images/bg_flowers.webp')) {
				background-image: url('/images/bg_flowers.webp');
			}
		}
	}
</style>
