<script>
	import Link from '../common/Link.svelte'
</script>

<footer class="p-4 md:flex md:items-center md:justify-between md:p-6 border-t border-gray-400">
	<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
		>© {new Date().getFullYear()} <a href="/" class="hover:underline">Giridhar </a>| All Rights
		Reserved.
	</span>
	<ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
		<li>
			<Link href={'https://github.com/giridhar7632'} external>GitHub</Link>
		</li>
		<li>
			<Link href={'https://facebook.com/giridhar7632'} external>Facebook</Link>
		</li>
		<li>
			<Link href={'https://www.instagram.com/mr_talla7632/'} external>Instagram</Link>
		</li>
		<li>
			<Link href={'https://twitter.com/@giridhar-talla'} external>Twitter</Link>
		</li>
	</ul>
</footer>
