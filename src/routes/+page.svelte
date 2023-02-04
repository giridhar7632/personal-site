<script>
	import { onMount } from 'svelte'
	import { applyTheme, DARK_PREFERENCE } from '../utils/store'

	// import { spring } from 'svelte/motion'

	// let coords = spring(
	// 	{ x: 50, y: 50 },
	// 	{
	// 		stiffness: 0.1,
	// 		damping: 0.25
	// 	}
	// )

	// let size = spring(10)

	onMount(() => {
		applyTheme()
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme)
	})
</script>

<!-- <svg
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg> -->

<h1 class="text-3xl font-bold underline h-screen">Hello world!</h1>
<h1 class="text-3xl font-bold underline h-screen">Hello world!</h1>
<h1 class="text-3xl font-bold underline h-screen">Hello world!</h1>

<style lang="postcss">
	:global(html) {
		overflow-x: hidden;
	}
	/* svg {
		position: absolute;
		width: 100%;
		height: 100%;
		margin: -8px;
	}
	circle {
		fill: #ff3e00;
	} */
</style>
