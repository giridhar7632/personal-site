<script>
	import Arrow from '../icons/Arrow.svelte'

	export let href = '/'
	export let external = false
</script>

<a
	class="inline-block mr-4 md:mr-6 hover:text-sky-600 hover:dark:text-sky-300 hover:text-underline"
	{href}
	{...external ? { target: '_blank', rel: 'noopener noreferer' } : {}}
>
	<span class="flex items-center justify-center gap-1"
		><slot />
		{#if external}
			<Arrow size={16} class="text-gray-400 -rotate-45" />
		{/if}
	</span></a
>
