<script lang="ts">
	export let title: string = 'button'
	export let type: "button" | "submit" | "reset" | null | undefined = 'button'
	export let variant: 'default' | 'outline' = 'default'
</script>

<button
	{type}
	aria-label={title}
	class="btn {variant} {$$props.class}"
>
	<slot />
</button>
