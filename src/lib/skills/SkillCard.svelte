<script type="ts">
	export let icon: string;
	export let title: string;
</script>

<div class="skill-card">
	<img src={icon} alt={title} />
	<h2>{title}</h2>
	<p><slot /></p>
</div>

<style type="scss">
	.skill-card {
		width: 250px;
		height: 150px;
		padding: 20px;

		border-radius: 15px;
		text-align: center;

		background: $black;
		box-shadow: 6px 7px 6px 0px #2b2b2c;

		img {
			height: calc(250px / 4);
		}

		h2 {
			font-weight: normal;
		}
	}
</style>
