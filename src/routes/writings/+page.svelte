<script>
	import Button from '@/components/common/Button.svelte'
	import Card from '@/components/common/Card.svelte'
	import Arrow from '@/components/icons/Arrow.svelte'

	import { writings } from '@/lib/store'
</script>

<section id="projects" class="block min-h-screen px-2 py-5 md:px-4">
	<header class="my-10">
		<h1 class="text-5xl font-black mb-5">Writings</h1>
		<p class="text-gray-600 dark:text-gray-300 mb-5">
			This is the catelogue of some of the blog posts I have written for various organizations
			including <a href={'https://stackoverflow.blog/author/giridhar-talla/'}>StackOverflow blog</a
			>, <a href={'https://www.honeybadger.io/blog/authors/giridhartalla/'}>HoneyBadger</a>,
			<a href={'https://auth0.com/blog/authors/giridhar-talla/'}>Auth0 blog</a>,
			<a href={'https://workshops.hackclub.com/'}>HackClub workshops</a>. You can find more details
			on my content portfolio.
		</p>
		<a
			href={'https://husky-radon-51f.notion.site/7736fa302d4e4891933c1f08c07ae39d?v=9e837ef4f96847bf845dcdceafb1b6e7'}
			><Button>Visit my content portfolio <Arrow size={20} /></Button></a
		>
	</header>

	{#each writings as post}
		<Card {...post} />
	{/each}
</section>
