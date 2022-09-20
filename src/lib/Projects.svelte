<script type="ts">
	import ProjectCard from './ProjectCard.svelte';
	import ProjectCardReverse from './ProjectCardReverse.svelte';
</script>

<section id="projects">
	<div class="section-title left">
		<span />
		<h1>Projets</h1>
		<span />
	</div>

	<div class="projects-container">
		<ProjectCard
			name="BpfMgr"
			subtitle="Gestionnaire de BPF et BCN"
			technos="ReactJs - TailwindCSS - NodeJs - Mysql"
			url="https://bpfmgr.herokuapp.com"
			image="/img/projects/bpfmgr.jpg"
			reverse={false}
		>
			Un gestionnaire de BPF et BCN, points de passages d'un concours pour cyclotouristes organisé
			par la FFVelo. J'ai entièrement codé le projet seul (Interface + Serveur + Base de données),
			et il est prévu d'y travailler en collaboration avec la Fédération Française de Vélo.
		</ProjectCard>

		<ProjectCard
			name="Vélorêveurs"
			subtitle="Blog"
			technos="Wordpress"
			url="https://veloreveurs.ovh"
			image="/img/projects/veloreveurs.jpg"
			reverse={true}
		>
			Le blog de ma famille pour nos voyages en vélos. Le projet utilise Wordpress, mai j'ai
			entiérement créé le thème (cad. le design). De plus j'ai codé la partie carte, qui utilise les
			données externes de Strava.
		</ProjectCard>

		<ProjectCard
			name="Le chêne d'en Pontier"
			subtitle="Site d'un professionnel"
			technos="CMS grand public"
			url="https://chene-en-pontier.jimdofree.com"
			image="/img/projects/chene-en-pontier.jpg"
			reverse={false}
		>
			Site d'un agriculteur bio. J'ai chosi pour ce projet d'utiliser le CMS jimdo qui permettra
			dans le futur une gestion par d'autres personnes que moi.
		</ProjectCard>
	</div>
</section>

<style type="scss">
	.projects-container {
		margin: 0 50px;

		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 40px;
		align-items: center;
	}

	@media screen and (max-width: 600px) {
		.projects-container {
			margin: 0;
		}
	}
</style>
