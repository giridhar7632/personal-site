<script>
	import Card from '@/components/common/Card.svelte'
  import { formatDate } from '@/lib/utils'

	export let data;
</script>

<section>
	<ul class="posts">
		{#each data.posts as post}
      <Card showArrow={false} {...post} date={formatDate(post.date)} />
		{/each}
	</ul>
</section>