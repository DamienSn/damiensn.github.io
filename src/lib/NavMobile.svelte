<script type="ts">
	import Fa from 'svelte-fa';
	import { faGithub } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from "svelte";

	let btn: HTMLButtonElement;
	let nav: HTMLElement;
	let header: HTMLElement;

	onMount(() => {
		btn = document.querySelector(".menu-toggler");
		header = document.querySelector('nav');
	})

    function deactivateNav (): void {
        btn.classList.toggle('active');
		nav.classList.toggle("active");
		header.classList.add("black");
		if (window.pageYOffset <= 50 && !btn.classList.contains("active")) {
			header.classList.remove("black");
		}
    }

</script>

<aside class="nav-mobile active" bind:this={nav} on:click={deactivateNav}>
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
