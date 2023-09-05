<script lang="ts">
	import { formatDate } from '@/lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<meta property="og:type" content="article" />

	<title>{data.meta.title}</title>
  <meta property="og:title" content={data.meta.title} />
	<meta name="twitter:title" content={data.meta.title} />

  <meta	name="description" content={data.meta.description} />
	<meta	property="og:description"	content={data.meta.description}	/>
	<meta	name="twitter:description" content={data.meta.description} />

</svelte:head>

<article>
  <!-- Title -->
	<hgroup class="flex max-w-post mx-auto my-12 flex-col justify-center items-center">
		<h1 class="text-center font-black leading-snug text-3xl mx-4 md:text-5xl grow-0 tracking-tight text-gray-800 dark:text-gray-100 my-4">{data.meta.title}</h1>
		<p class="text-gray-600 my-2 duration-300 ease-in-out dark:text-gray-300 mt-2">By <a href={data.meta.profile} target="_blank" class="italic hover:text-sky-600 hover:dark:text-sky-300 hover:text-underline">{data.meta.author}</a> on {formatDate(data.meta.date)}</p>
    <div class="tags">
		{#each data.meta.categories as category}
			<span class="bg-opacity-50 bg-gray-100 dark:bg-gray-700 backdrop-blur-sm text-sm text-gray-600 mr-2 px-2.5 py-0.5 rounded dark:text-gray-300">&num;{category}</span>
		{/each}
	</div>
	</hgroup>

  <!-- Post -->
	<div class="prose max-w-post mx-auto px-4 dark:text-gray-100 text-gray-800 md:px-2">
		<svelte:component this={data.content} />
	</div>
</article>

