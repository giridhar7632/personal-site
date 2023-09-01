<script>
	import Arrow from '../icons/Arrow.svelte'

	export let title = 'untitled'
	export let desc =
		"No description provided. I believe this project needs no description, cause it's already amazing."
	export let link = `https://github.com/giridhar7632`
	export let slug = title.toLocaleLowerCase()
</script>

<a class="group appearance-none block relative" href={link || `/p/${slug}`}>
	<div
		class="flex max-w-full my-4 flex-col duration-300 ease-in-out justify-center items-start box-border bg-opacity-50 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-gray-200 text-gray-800 dark:text-gray-200 group-hover:bg-gray-800 dark:group-hover:bg-gray-100 group-hover:text-gray-50 backdrop-blur-sm p-5 md:p-10"
	>
		<div class="flex justify-between items-center w-full">
			<h1
				class="font-black leading-snug text-4xl md:text-5xl grow-0 tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-gray-100 dark:group-hover:text-gray-700 duration-300 ease-in-out"
			>
				{title}
			</h1>
			<Arrow
				size={80}
				thickness={1}
				class="-rotate-45 opacity-0 group-hover:opacity-100 text-gray-300"
			/>
		</div>
		<p
			class="text-gray-600 group-hover:text-gray-300 dark:group-hover:text-gray-600 duration-300 ease-in-out dark:text-gray-300 mt-2 md:text-lg"
		>
			{desc}
		</p>
	</div>
</a>
