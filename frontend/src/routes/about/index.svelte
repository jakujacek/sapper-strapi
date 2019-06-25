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
	console.log(articles);
</script>
	
<style lang="scss">
@import '../../styles/_mixins.scss';

	.article-list {
		display: flex;
		flex-wrap: wrap;

	}
	.article-box {
		width: 50%;
		cursor: pointer;
		text-decoration: none;
	}

	img {
		width: 100%;
	}

	h1 {
		color: red;

		@include phone {
			color: blue;
		}
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="article-list">
	{#each articles as article}
		<a class="article-box" href='about/{ article.link_name }'>
			<h1>{article.title}</h1>
			<img src="http://localhost:1337{article.main_image.url}" alt="{article.title}">
			<Content content="{article.short_description}" />
		</a>
	{/each}
</div>