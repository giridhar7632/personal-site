<script>
	import PageTransition from './transition.svelte'

	import '@/app.css'
	import Nav from '@/components/layout/Nav.svelte'
	import Footer from '@/components/layout/Footer.svelte'

	export let data
	console.log(data.url)
</script>

<div
	class={`absolute inset-0 w-screen min-h-screen -z-1  bg-[url('/bg.png')] opacity-30 ${
		data.url.startsWith('/blog/') ? 'dark:opacity-20' : 'dark:opacity-70'
	} bg-no-repeat bg-top blur-[150px] dark:blur-[132px]`}
/>
<div class="container max-w-5xl mx-auto flex flex-col min-h-screen">
	<Nav />

	<main class="flex-1 flex flex-col text-gray-800 dark:text-gray-100">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<section id="contact" class="flex flex-col justify-center min-h-[50vh] px-2 md:px-4 my-16">
		<h2 class="text-5xl font-black text-gray-800 dark:text-gray-200 my-5">Say hi to me</h2>
		<p
			class="text-xl md:text-3xl text-ellipsis text-gray-500 dark:text-gray-400 font-bold my-5 max-w-full"
		>
			<a href={'mailto:giridhar.talla2002@gmail.com'}>👉 giridhar.talla2002@gmail.com</a>
		</p>
	</section>
	<Footer />
</div>

<style>
	/* .container {
		margin: 0 auto;
		max-width: 1080px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	nav {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin-top: 15px;
	}

	main {
		flex: 1;
	}

	footer {
		width: 100%;
		text-align: center;
		margin-bottom: 15px;
	} */
</style>
