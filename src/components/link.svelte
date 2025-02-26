<script lang='ts'>
	export let href: string = '/'
	export let external: boolean = false
</script>

<a
	aria-label={'link'}
	class="link {$$props.class}"
	{href}
	{...external ? { target: '_blank', rel: 'noopener noreferer' } : {}}
>
<slot />
</a>