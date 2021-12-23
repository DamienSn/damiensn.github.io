<script type="ts">
	import { onMount } from 'svelte';
import MenuToggler from './components/MenuToggler.svelte';
	import Nav from './Nav.svelte';
import NavMobile from './NavMobile.svelte';

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
	<div class="nav-lg">
		<Nav />
	</div>
	<div class="nav-sm">
		<MenuToggler />
		<NavMobile />
	</div>
</nav>

<style type="scss">
	nav {
		width: 100vw;
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
		z-index: 999;
	}

	nav.black {
		background-color: $black;
		margin-bottom: 41px;
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

	// Responsive
	.nav-sm {
		display: none;
	}

	@media screen and (max-width: 600px) {
		.nav-lg {
			display: none;
		}
		.nav-sm {
			display: block;
		}
	}
</style>
