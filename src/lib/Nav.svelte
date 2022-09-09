<script type="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
</script>

<ul>
	<li><a href="#">Accueil</a></li>
	<li><a href="#about">À propos</a></li>
	<li><a href="#skills">Compétences</a></li>
	<li><a href="#projects">Projets</a></li>
	<li><a href="#contact">Contact</a></li>
	<li>
		<a href="https://github.com/DamienSn" target="_blank"><Fa icon={faGithub} scale={2.5} /></a>
	</li>
</ul>

<style type="scss">
	ul {
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style-type: none;
	}

	ul li {
		padding: 0 15px;
	}

	ul li:last-child {
		padding: 0 20px;
	}

	ul li a {
		text-decoration: none;
		color: white;
	}

	ul li a:hover {
		font-weight: bold;
	}
</style>
