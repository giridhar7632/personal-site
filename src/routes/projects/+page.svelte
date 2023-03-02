<script>
	import Button from '../../components/common/Button.svelte'
	import Card from '../../components/common/Card.svelte'
	import Arrow from '../../components/icons/Arrow.svelte'
</script>

<section id="projects" class="block min-h-screen px-2 py-5 md:px-4">
	<header class="my-10">
		<h1 class="text-5xl font-black mb-5">Projects</h1>
		<p class="text-gray-600 dark:text-gray-300 mb-5">
			This is the catelogue of some of my awesome projects. You can find more projects on my GitHub.
		</p>
		<a href={'https://github.com/giridhar7632?tab=repositories'}
			><Button>Visit my GitHub <Arrow size={20} /></Button></a
		>
	</header>
	<Card />
	<Card />
	<Card />
</section>
