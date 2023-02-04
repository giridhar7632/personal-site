<script>
	import '../app.css'
	import Nav from '../components/layout/Nav.svelte'
	import Footer from '../components/layout/Footer.svelte'
</script>

<div class="container max-w-5xl mx-auto flex flex-col min-h-screen">
	<Nav />

	<main class="flex-1">
		<slot />
	</main>

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
