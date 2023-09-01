<script>
	import { browser } from '$app/environment'

	let darkMode = false

	function handleSwitchDarkMode() {
		darkMode = !darkMode

		localStorage.setItem('theme', darkMode ? 'dark' : 'light')

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark')
	}

	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			darkMode = true
		} else {
			document.documentElement.classList.remove('dark')
			darkMode = false
		}
	}
</script>

<button
	aria-label="theme-toggle"
	on:click={handleSwitchDarkMode}
	class={darkMode ? 'text-gray-100 hover:text-sky-300' : 'text-gray-800 hover:text-sky-600'}
>
	{#if darkMode}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<circle cx="12" cy="12" r="4" />
			<path
				d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
			/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
			<path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
			<path d="M19 11h2m-1 -1v2" />
		</svg>
	{/if}
</button>
