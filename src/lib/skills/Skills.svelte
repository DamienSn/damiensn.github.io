<script>
	import CardWrapper from './CardWrapper.svelte';
	import SkillCard from './SkillCard.svelte';
</script>

<section id="skills">
	<!-- Title -->
	<div class="section-title right">
		<span />
		<h1>Compétences</h1>
		<span />
	</div>

	<h2>Front-End</h2>
	<div class="skills-bar">
		<SkillCard title="HTML" icon="/img/logos/html.svg"></SkillCard>
		<SkillCard title="CSS" icon="/img/logos/css.svg"></SkillCard>
		<SkillCard title="JavaScript" icon="/img/logos/js.svg">
		</SkillCard>

		<SkillCard icon="/img/logos/react.svg" title="ReactJS">
		</SkillCard>
		<SkillCard icon="/img/logos/svelte.svg" title="Svelte"></SkillCard>
	</div>

	<h2>Back-End</h2>
	<div class="skills-bar">
		<SkillCard icon="/img/logos/node.svg" title="NodeJS"></SkillCard>

		<SkillCard icon="/img/logos/mysql.svg" title="MySQL">
		</SkillCard>
	</div>

	<h2>Autres</h2>
	<div class="skills-bar">
		<SkillCard icon="/img/logos/python.svg" title="Python">
		</SkillCard>

		<SkillCard icon="/img/logos/docker.svg" title="Docker">
		</SkillCard>
		<SkillCard icon="/img/logos/git.svg" title="Git">
		</SkillCard>
	</div>
</section>

<style type="scss">
	#skills {
		text-align: center;
	}

	.skills-bar {
		display: grid;
		grid-template-columns: repeat(auto-fill, 250px);
		grid-gap: 15px;
		justify-content: center;
	}
</style>
