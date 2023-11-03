<script>
	// import { currentTheme, toggleTheme } from '@/utils/store'
	import { onMount } from 'svelte'
	import { page } from '$app/stores'
	import ThemeSwitch from '../common/ThemeSwitch.svelte'

	let path = '/'
	let showMenu = false

	onMount(() => {
		path = $page.url.pathname
	})

	const toggleMenu = () => {
		showMenu = !showMenu
	}

	page.subscribe((value) => {
		path = value.url.pathname
		showMenu = false
	})
</script>

<nav class="px-2 sm:px-4 py-2.5">
	<div class="container relative flex flex-wrap items-center justify-between mx-auto">
		<a href="/" class="flex items-center">
			<span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">GIRID</span>
		</a>
		<button
			type="button"
			on:click={toggleMenu}
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-800 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white  dark:focus:ring-gray-300"
		>
			<!-- <svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			> -->
			{showMenu ? 'Close' : 'Menu'}
		</button>
		<div
			class={`absolute md:opacity-100 transistion-all ease-in-out duration-300 z-10 top-10 left-0 md:translate-x-0 md:top-0 md:relative w-full md:block md:w-auto ${
				showMenu ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
			}`}
			id="navbar-default"
		>
			<ul
				class="flex flex-col items-center p-4 mt-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 md:border-none bg-opacity-50 backdrop-blur-md md:bg-transparent dark:md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm font-semibold"
			>
				{#if path !== '/'}
					<li>
						<a
							href="/"
							class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600  md:p-0 dark:text-white md:dark:hover:text-sky-300  dark:hover:text-white"
							>Home</a
						>
					</li>
				{/if}
				{#if path !== '/about'}
					<li>
						<a
							href="about"
							class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600  md:p-0 dark:text-white md:dark:hover:text-sky-300  dark:hover:text-white "
							>About</a
						>
					</li>
				{/if}

				{#if path !== '/blog'}
					<li>
						<a
							href={path === '/' ? '/blog' : '/blog'}
							class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600  md:p-0 dark:text-white md:dark:hover:text-sky-300  dark:hover:text-white "
							>Blog</a
						>
					</li>
				{/if}

				{#if path !== '/writings'}
					<li>
						<a
							href={path === '/' ? '#writings' : '/writings'}
							class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600  md:p-0 dark:text-white md:dark:hover:text-sky-300  dark:hover:text-white "
							>Writings</a
						>
					</li>
				{/if}

				{#if path !== '/projects'}
					<li>
						<a
							href={path === '/' ? '#projects' : '/projects'}
							class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600  md:p-0 dark:text-white md:dark:hover:text-sky-300  dark:hover:text-white "
							>Projects</a
						>
					</li>
				{/if}
				<li>
					<a
						href="#contact"
						class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600  md:p-0 dark:text-white md:dark:hover:text-sky-300  dark:hover:text-white "
						>Contact</a
					>
				</li>
				<li>
					<a
						href="https://guestbook-giridhar7632.vercel.app/"
						class="block py-2 pl-3 pr-4 text-gray-700 rounded md:border-0 md:hover:text-sky-600 md:p-0 dark:text-white md:dark:hover:text-sky-300 dark:hover:text-white"
						>Guestbook</a
					>
				</li>
				<li class="flex align-middle">
					<ThemeSwitch />
				</li>
			</ul>
		</div>
	</div>
</nav>
