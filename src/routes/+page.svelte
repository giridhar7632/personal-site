<script>
	// import { onMount } from 'svelte'
	import Button from '../components/common/Button.svelte'
	import Card from '../components/common/Card.svelte'
	import Arrow from '../components/icons/Arrow.svelte'
	import { featured } from '../utils/store'
	// import { applyTheme, DARK_PREFERENCE, featured } from '../utils/store'

	// import { spring } from 'svelte/motion'

	// let coords = spring(
	// 	{ x: 50, y: 50 },
	// 	{
	// 		stiffness: 0.1,
	// 		damping: 0.25
	// 	}
	// )

	// let size = spring(10)

	// onMount(() => {
	// 	applyTheme()
	// 	window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme)
	// })
</script>

<!-- <svg
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg> -->

<section id="home" class="min-h-[80vh] relative flex flex-col justify-center p-6">
	<p class="md:text-[18px]">Full stack developer and Technical writer</p>
	<h1
		class="text-[72px] md:text-[20vw] lg:text-[10vw] my-4 md:my-2 leading-none nd:leading-tight line font-black"
	>
		Giridhar Talla
	</h1>
	<p class="md:text-[18px]">
		A Full Stack Developer who turns ideas into reality, fueled by a passion for design and content.
	</p>
	<div class="flex items-center gap-4 my-6">
		<a href={'#contact'}>
			<Button class="text-sm sm:text-base"
				>Get connected
				<Arrow size={20} />
			</Button>
		</a>
		<a href={'/resume.pdf'}>
			<Button class="text-sm sm:text-base">Resume</Button>
		</a>
	</div>
</section>

<section id="projects" class="block min-h-screen px-2 py-5 md:px-4 my-10">
	<h2 class="text-3xl font-black mb-5 text-gray-600 dark:text-gray-300">Projects</h2>
	{#each featured.projects as project}
		<Card {...project} />
	{/each}
	<a href={'/projects'}>
		<Button variant="text" class="w-full text-gray-400">
			All projects
			<Arrow size={20} />
		</Button>
	</a>
</section>

<section id="writings" class="block min-h-screen px-2 py-5 md:px-4 my-10">
	<h2 class="text-3xl font-black my-5 text-gray-600 dark:text-gray-300">Writings</h2>
	{#each featured.writings as post}
		<Card {...post} />
	{/each}
	<a href="/writings">
		<Button variant="text" class="w-full text-gray-400">
			All writings
			<Arrow size={20} />
		</Button>
	</a>
</section>
