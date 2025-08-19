<script>
    import '../app.css'
	import Button from '../components/button.svelte'
	import Project from '../components/project.svelte'
	import Link from "../components/link.svelte"
    import { projects, writings } from '$lib'
    import Article from '../components/article.svelte';
</script>

<main class="flex-col max-w-lg">
    <img class="avatar" src="https://github.com/giridhar7632.png" alt="@giridhar7632" width="62" height="62" />
    <h1 class="text-xl">Giridhar Talla</h1>
    <p>👋 Hey there! I build and ship web and mobile apps, as well as scalable systems, with clean code. Currently, I work as a software engineer at <Link href="https://herofincorp.com" external>HeroFinCorp</Link>, developing fintech solutions. Outside of work, I enjoy participating in <Link href="https://devpost.com/@giridhar-talla" external>hackathons</Link> and working on turning projects into startups. I also write tutorials and share my knowledge through a <Link href="https://medium.com/@giridhartalla" external>blog</Link>, where I post articles on coding and development.</p>
    <div>
        <a href="mailto:giridhar.talla5139@gmail.com"><Button>email me</Button></a>
        <a href="https://giridhar.pages.dev/resume.pdf" target="_blank"><Button variant='outline'>view resume</Button></a>
    </div>
    <p><Link href="https://github.com/giridhar7632">github</Link> ~ <Link href="https://x.com/giridhar-talla">twitter</Link> ~ <Link href="https://www.linkedin.com/in/giridhar-talla/">linkedin</Link> </p>
    <p>Here are some projects I've worked on:</p>
</main>

<section class="max-w-xl my-xl grid-3">
    {#each projects as project}
        <Project name={project.title} link={project.link} description={project.description} lang={project.language} />
    {/each}
</section>

<p class="max-w-lg">I also write articles for some websites as a freelancer technical writer. Here are some of my previous works:</p>

<section class="max-w-xl my-xl grid-1">
    {#each writings as article}
        <Article name={article.title} link={article.link} description={article.description} image={article.image} />
    {/each}
</section>

<p class="max-w-lg">
    More things about me are on my GitHub, <Link
        href="https://github.com/giridhar7632"
        external>@giridhar7632</Link
    >. Feel free to email me about anything at <Link
        href="mailto:giridhar.talla5139@gmail.com"
        external>giridhar.talla5139@gmail.com</Link
    >.
</p>

<footer>
    <p class="max-w-lg text-sm text-center">
        <i
            >You can find the code for this website on <Link
                href="https://github.com/giridhar7632/personal-site"
                external>GitHub</Link
            > ✌️</i
        >
    </p>
</footer>

<style>
    main {
        margin-top: 15vh;
    }

    .text-sm {
        font-size: 0.875rem;
    }

    .text-center {
        text-align: center;
    }

    .my-xl {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .grid-1 {
        display: grid;
        grid-template-columns: 1fr;
        gap: 8px;
        margin-top: 24px;
    }

    .grid-3 {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 8px;
        margin-top: 8px;
    }

    footer {
        padding: 40px 0;
    }

    @media screen and (max-width: 768px) {
        main {
            margin-top: 5vh;
        }
        .grid-1,
        .grid-3 {
            grid-template-columns: 1fr;
        }
    }
</style>
