<script lang="ts">
	import ArrowLeft from '$lib/icons/arrowLeft.svelte';
	import Address from '$lib/imprint/address.svelte';
</script>

<svelte:head>
	<title>Imprint | Timo Prüße</title>
	<meta name="description" content="The imprint of timo-pruesse.de" />
</svelte:head>

<section
	class="w-full text-sm flex items-center max-w-screen-md lg:max-w-screen-lg mx-auto md:mt-32 mb:mb-8 flex-col gap-y-8"
>
	<a href="/" class="group max-md:mt-6">
		<h1
			class="text-4xl md:text-6xl text-accent-2 hover:text-accent-1 transform-gpu group-hover:scale-110 transition-transform flex gap-x-2 items-center"
		>
			<ArrowLeft
				class="h-10 md:h-14 group-hover:-translate-x-4 group-hover:scale-110 transform-gpu transition-transform"
			/> Timo Prüße
		</h1>
	</a>
	<div
		class="bg-primary-1/90 backdrop-blur-lg p-4 md:px-16 md:pt-10 md:pb-8 text-accent-1 md:rounded-xl"
	>
		<h2 class="text-xl mb-4">Impressum</h2>

		<p class="italic">Angaben gemäß § 5 TMG</p>

		<Address />

		<ul class="mb-2">
			<li class="font-semibold">Vertreten durch:</li>
			<li>Timo Prüße</li>
		</ul>

		<ul class="mb-2">
			<li class="font-semibold">Kontakt:</li>
			<li>
				E-Mail: <a
					href="mailto:hi@timo-pruesse.de"
					class="text-iceblue underline hover:text-accent-2">hi@timo-pruesse.de</a
				>
			</li>
		</ul>

		<p class="font-semibold mt-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</p>
		<Address />

		<div class="py-2">
			<p class="mb-2 text-lg font-semibold">Haftungsausschluss:</p>

			<p class="mb-2 font-semibold">Haftung für Inhalte</p>

			<p class="pb-2">
				Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
				Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
				Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
				allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
				jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
				oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
				Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
				allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
				ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
				von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
			</p>

			<p class="my-2 font-semibold">Haftung für Links</p>

			<p class="pb-2">
				Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
				Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
				Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
				Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
				mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
				nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
				konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
				Rechtsverletzungen werden wir derartige Links umgehend entfernen.
			</p>

			<p class="my-2 font-semibold">Urheberrecht</p>

			<p>
				Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
				deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
				Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
				des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
				privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht
				vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
				werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
				Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
				Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
			</p>
		</div>
	</div>
</section>
