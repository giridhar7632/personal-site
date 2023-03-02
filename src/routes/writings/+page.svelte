<script>
	import Button from '../../components/common/Button.svelte'
	import Card from '../../components/common/Card.svelte'
	import Arrow from '../../components/icons/Arrow.svelte'
</script>

<section id="projects" class="block min-h-screen px-2 py-5 md:px-4">
	<header class="my-10">
		<h1 class="text-5xl font-black mb-5">Writings</h1>
		<p class="text-gray-600 dark:text-gray-300 mb-5">
			This is the catelogue of some of the blog posts I have written for vatious organizations. You
			can find more details on my content portfolio.
		</p>
		<a
			href={'https://husky-radon-51f.notion.site/7736fa302d4e4891933c1f08c07ae39d?v=9e837ef4f96847bf845dcdceafb1b6e7'}
			><Button>Visit my content portfolio <Arrow size={20} /></Button></a
		>
	</header>
	<Card />
	<Card />
	<Card />
</section>
