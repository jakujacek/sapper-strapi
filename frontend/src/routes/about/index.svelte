<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(articles => {
			return { articles };
		});
	}
</script>

<script>
	import Content from '../../components/markdowns/Content.svexy'; 
	export let articles;
</script>
	
<style>
	.article-list {
		display: flex;
		flex-wrap: wrap;

	}
	.article-box {
		width: 50%;
	}

	img {
		width: 100%;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="article-list">
	{#each articles as article}
		<div class="article-box">
			<h1>{article.name}</h1>
			<img src="http://localhost:1337{article.image.url}" alt="{article.name}">
			<Content content="{article.description}" />
		</div>
	{/each}
</div>