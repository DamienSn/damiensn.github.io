<script type="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from "svelte";
	import {els} from '../store'

    function deactivateNav (): void {
		els.update((val) => ({...val, menuToggler: !val.menuToggler, nav: !val.nav}));
    }

</script>

<aside class="nav-mobile" class:active={$els.nav} on:click={deactivateNav}>
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
</aside>

<style type="scss">
	.nav-mobile {
		position: fixed;
		top: 84px;
		right: -50vw;
		width: 50vw;
		height: 100vh;
		background: $black;
		transition: right 0.2s linear;
	}

    .nav-mobile.active {
        right: 0;
    }

	ul {
		list-style-type: none;
	}

	ul li {
		padding: 15px;
	}

	ul li:last-child {
		padding: 20px;
	}

	ul li a {
		text-decoration: none;
		color: white;
	}

	ul li a:hover {
		font-weight: bold;
	}
</style>
