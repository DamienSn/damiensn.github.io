<script>
import Button from "./components/Button.svelte";

</script>
<section id="about">
	<div class="section-title left">
		<span />
		<h1>About</h1>
		<span />
	</div>

	<div id="infos">
        <img src="img/avatar.png" alt="Damien Stéphan's Photo">
        <div>
            <h3>Code, Cycling, Student</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nulla facilisi morbi tempus iaculis urna id volutpat.</p>
            <a href="https://github.com/DamienSn" target="_blank"><Button>Github</Button></a>
        </div>
    </div>
</section>

<style type="scss">
    #infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap-reverse;
    }

    #infos img {
        width: 10%;
        min-width: 125px;
    }

    #infos div {
        width: 90%;
    }
</style>