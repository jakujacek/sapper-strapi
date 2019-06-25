<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;
		const res = await this.fetch(`${slug}.json`);
		const article = await res.json();

		return { article };
	}
</script>

<script>
    import { fade } from 'svelte/transition';
	export let article;
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<div in:fade>
    <h1>{article.title}</h1>
    <p>{article.article}</p>
</div>

{#if article.next}
<a rel="prefetch" href="{article.next}">NEXT</a>
{/if}

{#if article.prev}
<a rel="prefetch" href="{article.prev}">PREV</a>
{/if}