import { writable } from 'svelte/store'

export const STORAGE_KEY = 'theme'
export const DARK_PREFERENCE = '(prefers-color-scheme: dark)'

export const THEMES = {
	DARK: 'dark',
	LIGHT: 'light'
}
export const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches
export let currentTheme = writable('')

export const applyTheme = () => {
	const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT
	const theme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme
	currentTheme.set(theme)

	console.log(
		'preferredTheme',
		preferredTheme,
		'theme',
		theme,
		'stored',
		localStorage.getItem(STORAGE_KEY)
	)

	if (theme === THEMES.DARK) {
		document.documentElement.classList.add(THEMES.DARK)
	} else {
		document.documentElement.classList.remove(THEMES.DARK)
	}
}

export const toggleTheme = () => {
	const stored = localStorage.getItem(STORAGE_KEY)

	if (!stored) {
		// clear storage
		localStorage.setItem(STORAGE_KEY, !prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT)
	} else {
		console.log(stored)
		localStorage.setItem(STORAGE_KEY, stored == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
	}

	applyTheme()
}

export const projects = [
	{
		title: 'Gamestore',
		desc: 'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	},
	{
		title: 'Gamestore',
		desc: 'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	},
	{
		title: 'Gamestore',
		desc: 'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	}
]

export const writings = [
	{
		title: 'Gamestore',
		desc: 'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	},
	{
		title: 'Gamestore',
		desc: 'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	},
	{
		title: 'Gamestore',
		desc: 'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	}
]
