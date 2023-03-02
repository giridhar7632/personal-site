<script>
	import { page } from '$app/stores'
	import Button from '../components/common/Button.svelte'
</script>

<div class="flex my-auto w-full flex-col items-center justify-center">
	<h1 class="text-8xl font-black">{$page.status}</h1>
	<h3 class="my-4 text-xl">{$page.error.message}</h3>
	<a href={'/'}>
		<Button>Go to Home</Button>
	</a>
</div>
