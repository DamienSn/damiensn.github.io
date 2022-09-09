<script type="ts">
	import Button from './components/Button.svelte';

	export let name: string;
	export let subtitle: string;
	export let technos: string;
	export let url: string;
	export let image: string;
	export let reverse: boolean = false;
</script>

<div>
	<h1>{name}</h1>
	<h2>{subtitle}</h2>

	<p><b>Technos : </b>{technos}</p>
	<p><slot /></p>

	<Button>
		<a href={url} target="_blank">Voir le projet</a>
	</Button>
</div>

<img src={image} alt={`Image de ${name}`} />

<style type="scss">
	img {
		width: 100%;
		height: auto;
		border-radius: 10px;
		grid-column: 5 / 7;
	}

	div {
		grid-column: 1 / 5;
	}

	h1 {
		font-size: 32px;
		margin-bottom: 0;
	}

	h2 {
		margin-top: 2px;
		font-weight: normal;
	}

	a {
		color: white;
		text-decoration: none;
	}

	a:hover {
		color: black;
	}
</style>
