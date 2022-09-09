<script>

import Button from "./components/Button.svelte";

</script>
<section id="contact">
	<div class="section-title right">
		<span />
		<h1>Contact</h1>
		<span />
	</div>

	<div class="contact">
        <p>Vous avez un projet et souhaitez en discuter ? N'hésitez pas à me contacter !</p>
        <Button><a href="mailto:damienstephan07@gmail.com">Contactez moi</a></Button>
	</div>
</section>

<style type="scss">
    .contact {
        margin-left: 40px;
        margin-bottom: 20px;
    }

    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
    }

    a:hover {
        color: black;
    }
</style>
