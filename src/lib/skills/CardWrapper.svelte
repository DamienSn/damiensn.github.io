<script type="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

	export let title: string = 'Lorem Ipsum';

	let collapsed: boolean = false;

	function collapse(): void {
		collapsed = !collapsed;
	}
</script>

<div class="card-wrapper">
	<div class="head" on:click={collapse}>
		<h2>{title}</h2>
		<Fa icon={faPlus} />
	</div>
	<div class="body" class:collapsed><slot /></div>
</div>

<style type="scss">
	// Wrapper
	.card-wrapper {
		display: grid;
		grid-template-columns: 40px 1fr;
		margin: 20px 0;

		// Header
		.head {
			cursor: pointer;
			writing-mode: vertical-lr;
			transform: rotate(180deg);
			padding: 10px;
			user-select: none;

			h2 {
				font-weight: normal;
			}

			> * {
				display: inline;
			}
		}

        // Body
        .body {
            display: grid;
			grid-template-columns: repeat(auto-fill, 250px);
			grid-gap: 15px;
			justify-content: center;

            &.collapsed {
                display: none;
            }
        }
	}

	// Text horizontal
	@media screen and (max-width: 884px) {
		.card-wrapper {
			grid-template-columns: 1fr;
			grid-template-rows: 64px 1fr;

			.head {
				writing-mode: horizontal-tb;
				transform: rotate(0);
			}
		}
	}
</style>
