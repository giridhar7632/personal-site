<script>
	import Button from '@/components/common/Button.svelte'
	import Link from '@/components/common/Link.svelte'
	import Arrow from '@/components/icons/Arrow.svelte'
</script>

<section id="projects" class="block min-h-screen px-2 py-5 md:px-4">
	<header class="my-10">
		<h1 class="text-5xl font-black mb-5">About me</h1>
		<p class="text-gray-600 text-xl dark:text-gray-300 mb-5">
			I am Giridhar and I'm a senior undergrad student at National Institute of Technology,
			Kurukshetra (Electronics major).
		</p>
		<div class="flex items-center gap-4 my-6">
			<a href={'#contact'}>
				<Button class="text-sm sm:text-base"
					>Get connected
					<Arrow size={20} />
				</Button>
			</a>
			<a href={'/resume.pdf'}>
				<Button class="text-sm sm:text-base">Resume</Button>
			</a>
		</div>
		<ul class="flex flex-wrap items-center my-3 text-sm text-gray-700 dark:text-gray-200 sm:mt-0">
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
	</header>
	<div class="my-6">
		<!-- <h2 class="text-3xl font-bold mb-4 text-gray-600 dark:text-gray-300">As a Developer...</h2> -->
		<p class="text-gray-600 text-xl dark:text-gray-300 mb-5">
			I have been a full-stack JavaScript developer for over 2 years. I like JavaScript and Python because they let me create web and mobile applications. I can create interactive front-end for web applications using JavaScript while also program the backend for them. I also enjoy building complex machine learning models using Python.
		</p>
		<a href={'/projects'}>
			<Button variant="text" class="w-full text-gray-400 hover:ring-gray-400">
				Explore my projects
				<Arrow size={20} />
			</Button>
		</a>
	</div>
	<div class="my-6">
		<!-- <h2 class="text-3xl font-bold mb-4 text-gray-600 dark:text-gray-300">
			As a Technical writer...
		</h2> -->
		<p class="text-gray-600 text-xl dark:text-gray-300 mb-5">
			Besides coding, I love writing and sharing what I know with others. I mostly write about web development with JavaScript and programming concepts with Python. Currently, I write blog posts for various developer blogs such as <a
				href={'https://stackoverflow.blog/author/giridhar-talla/'}>StackOverflow blog</a
			>, <a href={'https://www.honeybadger.io/blog/authors/giridhartalla/'}>HoneyBadger</a>,
			<a href={'https://auth0.com/blog/authors/giridhar-talla/'}>Auth0 blog</a>,
			<a href={'https://workshops.hackclub.com/'}>HackClub workshops</a>, etc. It makes me happy to know that my work can help others. 
		</p>
		<a href="/writings">
			<Button variant="text" class="w-full text-gray-400 hover:ring-gray-400">
				See my work
				<Arrow size={20} />
			</Button>
		</a>
	</div>
</section>
