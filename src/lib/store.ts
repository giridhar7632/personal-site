// import { writable } from 'svelte/store'

// export const STORAGE_KEY = 'theme'
// export const DARK_PREFERENCE = '(prefers-color-scheme: dark)'

// export const THEMES = {
// 	DARK: 'dark',
// 	LIGHT: 'light'
// }
// export const prefersDarkThemes = () => window.matchMedia(DARK_PREFERENCE).matches
// export let currentTheme = writable('')

// export const applyTheme = () => {
// 	const preferredTheme = prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT
// 	const theme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme
// 	currentTheme.set(theme)

// 	if (theme === THEMES.DARK) {
// 		document.documentElement.classList.add(THEMES.DARK)
// 	} else {
// 		document.documentElement.classList.remove(THEMES.DARK)
// 	}
// }

// export const toggleTheme = () => {
// 	const stored = localStorage.getItem(STORAGE_KEY)

// 	if (!stored) {
// 		// clear storage
// 		localStorage.setItem(STORAGE_KEY, !prefersDarkThemes() ? THEMES.DARK : THEMES.LIGHT)
// 	} else {
// 		console.log(stored)
// 		localStorage.setItem(STORAGE_KEY, stored == THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
// 	}

// 	applyTheme()
// }

export const projects = [
	{
		title: '🕹️ Gamestore',
		description:
			'A place where you can explore and buy exciting video games of various playforms at one place.',
		link: 'https://github.com/giridhar7632/gamestore'
	},
	{
		title: '💻 Zen Meet',
		description:
			'A simple video conferencing progressive web app with easy to use user UI and fluid user experience. ',
		link: 'https://github.com/giridhar7632/zen-meet'
	},
	{
		title: '✨ Ecommerce CMS',
		description:
			'The full-stack serverless ecommerce CMS web application creating using Xata and Cloudinary.',
		link: 'https://github.com/giridhar7632/jamstackhack-22'
	},
	{
		title: '📔 Scrapbook',
		description:
			'A secure full-stack web application to store your daily memories privately at one place and access them from anywhere.',
		link: 'https://github.com/giridhar7632/scrapbook-demo'
	},
	{
		title: '📊 Sort Viz',
		description:
			'A simple and scalable bubble sort algorithm visualizer created from scratch using React and modular CSS.',
		link: 'https://github.com/giridhar7632/sort-viz'
	},
	{
		title: '🤖 Timezome Bot',
		description: 'A discord bot that converts one time zone to another 🕖 => 🕞',
		link: 'https://github.com/giridhar7632/timezone-bot'
	},
	{
		title: '🏵️ Profile Links',
		description:
			'An open source app for storing all your important links in one place and add your profile in social media bio.',
		link: 'https://github.com/giridhar7632/profile-links'
	}
]

export const writings = [
	{
		title: 'How edge functions move your back end close to your front end',
		description:
			'Serverless functions have made computing seamless and fast. but for worldwide audiences, you need to get closer to your user to overcome latency.',
		link: 'https://stackoverflow.blog/2023/02/23/how-edge-functions-move-your-back-end-close-to-your-front-end/'
	},
	{
		title:
			'How to Build a Full Stack Content Management System using Next.js, Xata, and Cloudinary',
		description:
			"Managing a website's content is always challenging when developing a modern web application. Using a Content Management System (CMS) is one of the simple and efficient methods.",
		link: 'https://dev.to/hackmamba/how-to-build-a-full-stack-content-management-system-using-nextjs-xata-and-cloudinary-iaa'
	},
	{
		title: 'Memory Game',
		description: 'Create your own memory game using JavaScript',
		link: 'https://workshops.hackclub.com/memory_game/'
	},
	{
		title: 'Build a Jamstack Full-stack Application',
		description:
			'Many modern approaches for designing flexible and scalable web applications have become popular as browsers have evolved. Jamstack is one of these cutting-edge techniques to develop lightning-fast web apps.',
		link: 'https://dev.to/hackmamba/build-a-full-stack-jamstack-application-5apm'
	},
	{
		title:
			'Why solve a problem twice? Design patterns let you apply existing solutions to your code',
		description:
			'Software design patterns are like best practices employed by many experienced software developers. You can use design patterns to make your application scalable and flexible.',
		link: 'https://stackoverflow.blog/2021/10/13/why-solve-a-problem-twice-design-patterns-let-you-apply-existing-solutions-to-your-code/'
	},
	{
		title: 'Strategy Design Pattern in Python',
		description: 'Learn strategy design pattern to write better code in Python',
		link: 'https://auth0.com/blog/strategy-design-pattern-in-python/'
	},
	{
		title: 'Configuring PostgreSQL as Auth0 Custom Database',
		description: 'Connect Auth0 to PostgreSQL to create and maintain your own user store.',
		link: 'https://auth0.com/blog/configuring-postgresql-as-auth0-custom-database/'
	}
]

export const featured = {
	projects: projects.slice(0, 3),
	writings: writings.slice(0, 3)
}
