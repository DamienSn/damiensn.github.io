<script>
	import CardWrapper from './CardWrapper.svelte';
	import SkillCard from './SkillCard.svelte';
</script>

<section id="skills">
	<!-- Title -->
	<div class="section-title right">
		<span />
		<h1>Skills</h1>
		<span />
	</div>

	<h2>Front-End</h2>
	<div class="skills-bar">
		<CardWrapper title="Basics">
			<SkillCard title="HTML" icon="/img/logos/html.svg">The Hypertext Markup Language</SkillCard>
			<SkillCard title="CSS" icon="/img/logos/css.svg">For styling HTML</SkillCard>
			<SkillCard title="JavaScript" icon="/img/logos/js.svg">
				A must to work in web development
			</SkillCard>
		</CardWrapper>

		<CardWrapper title="Frameworks">
			<SkillCard icon="/img/logos/react.svg" title="ReactJS">
				ReactJS is a common choice for web development
			</SkillCard>
			<SkillCard icon="/img/logos/svelte.svg" title="Svelte">I love svelte</SkillCard>
		</CardWrapper>
	</div>

	<h2>Back-End</h2>
	<div class="skills-bar">
		<CardWrapper title="Languages">
			<SkillCard icon="/img/logos/node.svg" title="NodeJS">The server side version of JS</SkillCard>
		</CardWrapper>

		<CardWrapper title="Databases">
			<SkillCard icon="/img/logos/mysql.svg" title="MySQL">
				The most popular relationnal database
			</SkillCard>
		</CardWrapper>
	</div>

	<h2>Others</h2>
	<div class="skills-bar">
		<CardWrapper title="Languages">
			<SkillCard icon="/img/logos/python.svg" title="Python">
				Universal programming language
			</SkillCard>
		</CardWrapper>

		<CardWrapper title="Tools">
			<SkillCard icon="/img/logos/docker.svg" title="Docker">
				I can deploy container withh docker and docker-compose
			</SkillCard>
			<SkillCard icon="/img/logos/git.svg" title="Git">
				Git is a must to work with other developers
			</SkillCard>
		</CardWrapper>
	</div>
</section>

<style type="scss">
	#skills {
		text-align: center;
	}

	.skills-bar {
		display: grid;
		grid-template-columns: auto 1fr;
	}
</style>
