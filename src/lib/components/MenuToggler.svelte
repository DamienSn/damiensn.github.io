<script type="ts">
import { onMount } from "svelte";


	let btn: HTMLButtonElement;
	let nav: HTMLElement;
	let header: HTMLElement;

	onMount(() => {
		nav = document.querySelector('aside.nav-mobile');
		header = document.querySelector('nav');
	})

    function toggleActive(e) {
        btn.classList.toggle('active');
		nav.classList.toggle("active");
		header.classList.add("black");
		if (window.pageYOffset <= 50 && !btn.classList.contains("active")) {
			header.classList.remove("black");
		}
    }
</script>

<button class="menu-toggler active" on:click={toggleActive} bind:this={btn}>
	<div />
	<div />
	<div />
</button>

<style type="scss">
	.menu-toggler {
		background: none;
		border: none;
		outline: none;

		display: block;
		width: 40px;
		height: 30px;
        margin-right: 10px;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		cursor: pointer;
        z-index: 10000;
	}

	.menu-toggler div {
		position: relative;
		width: 40px;
		height: 3px;
		background: white;
		border-radius: 2px;
		transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease 0.2s;
	}

	.menu-toggler div:nth-child(1) {
		top: -10px;
		transition: margin 0.2s linear;
	}

	.menu-toggler div:nth-child(3) {
		top: 10px;
		transition: margin 0.2s linear;
	}

	.menu-toggler div:nth-child(2) {
		transition: opacity 0.2s linear;
	}

	// Active state
	.menu-toggler.active div:nth-child(1) {
		top: 3px;
		transform: rotate(45deg);
		transition: top 0.2s ease, transform 0.2s ease 0.2s;
	}

	.menu-toggler.active div:nth-child(2) {
		opacity: 0;
		transition: opacity 0.2s linear;
	}

	.menu-toggler.active div:nth-child(3) {
		top: -3px;
		transform: rotate(-45deg);
		transition: top 0.2s ease, transform 0.2s ease 0.2s;
	}
</style>
