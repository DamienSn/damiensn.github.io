<script>
	import MacButtons from './MacButtons.svelte';
	import Typewriter from 'svelte-typewriter';
</script>

<section id="home">
	<!-- <MacButtons /> -->
	<h1 class="home">Bonjour, je suis <span>Damien</span></h1>
	<Typewriter interval={60} delay={1000}><h2 class="home">> Jeune Développeur Web</h2></Typewriter>
	<!-- <h2 class="home terminal-cursor"><span>_</h2> -->

	<div id="bg" ></div>
</section>

<style type="scss">
	#home {
		height: 100vh;
	}

	h1.home {
		font-size: 74px;
		font-weight: 600;

		span {
			font-style: italic;
		}
	}

	h2.home {
		font-weight: normal;
		font-family: 'IBM Plex Mono', monospace;
	}

	// Background
	#bg {
		position: absolute;
		top: 50%;
		height: 50vh;
		width: 100%;
		background: url('/img/bg.png'), $onyx;
		background-position: center;
		background-size: cover;
		background-blend-mode: lighten;
	}

	// Cut the background
	#bg::before {
		content: "";
		position: absolute;
		border-right: 50vw solid transparent;
		border-left: 50vw solid $onyx;
		border-top: 10vh solid $onyx;
		border-bottom: 10vh solid transparent;
	}
	#bg::after {
		content: "";
		position: absolute;
		bottom: 0;
		border-right: 50vw solid $onyx;
		border-left: 50vw solid transparent;
		border-top: 10vh solid transparent;
		border-bottom: 10vh solid $onyx;
	}

	@media screen and (max-width: 1024px) {
		h1.home {
			font-size: 50px;
			margin-bottom: 0;
		}

		h2.home {
			font-size: 20px;
		}
	}

	@media screen and (max-width: 600px) {
		h1.home {
			font-size: 40px;
			margin-bottom: 0;
		}

		h2.home {
			font-size: 18px;
		}
	}
</style>
