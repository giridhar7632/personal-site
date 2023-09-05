import adapter from '@sveltejs/adapter-cloudflare'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex, escapeSvelte } from 'mdsvex'
import remarkUnwrapImages from 'remark-unwrap-images'
import autolink from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import shiki from 'shiki'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: './src/mdsvex.svelte'
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' })
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { heading: 'contents', tight: true }]],
	rehypePlugins: [rehypeSlug, [autolink, { behavior: 'wrap' }]]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			strict: false
		}),
		alias: {
			'@/*': 'src/*'
		}
	}
}

export default config
