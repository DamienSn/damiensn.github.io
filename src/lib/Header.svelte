<script type="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { onMount } from 'svelte';

	let mini: string | false = false;

	onMount(() => {
		window.addEventListener('scroll', (e: UIEvent) => {
			if (window.pageYOffset > 50) {
				mini = 'black';
			} else {
				mini = false;
			}
		});
	});
</script>

<nav class={`${mini ? mini : ''}`}>
	<span>DS.</span>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#skills">Skills</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
		<li>
			<a href="https://github.com/DamienSn" target="_blank"><Fa icon={faGithub} scale={2.5} /></a>
		</li>
	</ul>
</nav>

<style type="scss">
	nav {
		width: 100%;
		position: sticky;
		top: 0;
		left: 0;
		padding: 15px;

		background-color: $onyx;

		display: flex;
		align-items: center;
		justify-content: space-between;

		transition: background-color 0.5s linear;
		// Compensation transition font-size
		transition: margin-bottom 0.2s linear;
		z-index: 10000;
	}

	nav.black {
		background-color: #2c2c2c;
		margin-bottom: 41px;
	}

	nav ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style-type: none;
	}

	nav ul li {
		padding: 0 15px;
	}

	nav ul li:last-child {
		padding: 0 20px;
	}

	nav ul li a {
		text-decoration: none;
		color: white;
	}

	nav ul li a:hover {
		font-weight: bold;
	}

	nav span {
		font-family: 'Major Mono Display', sans-serif;
		font-size: 96px;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: 1px #f4f4f4;
		transition: font-size 0.2s linear;
	}

	nav.black span {
		font-size: 55px;
	}
</style>
