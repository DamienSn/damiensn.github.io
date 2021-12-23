<script>
	import Button from './components/Button.svelte';
</script>

<section id="about">
	<div class="section-title left">
		<span />
		<h1>About</h1>
		<span />
	</div>

	<div id="infos">
		<img src="img/avatar.png" alt="Damien Stéphan's Photo" />
		<div>
			<h3>Code, Cycling, Student</h3>
			<p>
				Passionné de nouvelles technologies, je me suis lancé dans le code en 2020, en débutant avec JavaScript. J'ai ensuite appris Python et le framework React JS. J'ai ensuite appris Node JS et MySQL pour pouvoir aussi développer en back-end.
			</p>
			<a href="https://github.com/DamienSn" target="_blank"><Button>Github</Button></a>
		</div>
	</div>
</section>

<style type="scss">
	#infos {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		img {
			width: 12em;
            height: 12em;
            object-fit: cover;
			// min-width: 125px;
            border-radius: 9999px;
            margin: 20px;
            margin-right: 40px;
		}

		div {
			width: 90%;
		}
	}
</style>
