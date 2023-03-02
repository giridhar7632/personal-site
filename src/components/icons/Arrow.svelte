<script>
	export let size = 20
	export let color = 'currentColor'
	export let thickness = 2
</script>

<svg
	width={size}
	height={size}
	class={$$props.class}
	viewBox="0 0 20 21"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M4.16602 10.5L15.8327 10.5"
		stroke={color}
		stroke-width={thickness}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M10 4.66658L15.8333 10.4999L10 16.3333"
		stroke={color}
		stroke-width={thickness}
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
