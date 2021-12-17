<script type="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
	import { onMount } from 'svelte';

	let mini: string | false = false;

	onMount(() => {
		window.addEventListener('scroll', (e: UIEvent) => {
			if (window.pageYOffset > 50) {
				mini = 'mini';
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
		background-color: $onyx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px;
		transition: 0.5s linear;
		position: sticky;
		top: 0;
		left: 0;
	}

	nav.mini {
		background-color: #2c2c2c;
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
		transition: 0.2s linear;
	}

	nav.mini span {
		font-size: 55px;
	}
</style>
