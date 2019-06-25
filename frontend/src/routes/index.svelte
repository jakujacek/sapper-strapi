<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(articles => {
			return { articles };
		});
	}
</script>

<script>
	import Content from '../components/markdowns/Content.svexy';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let articles;
	let show = false;
	
	onMount(() => {
		show = true;
	});

</script>
	
<style lang="scss">
@import '../styles/_mixins.scss';

	section {
		@include main-grid();
		background-color: color(white, 2);
		min-height: 100vh;
	}

	.article-list {
		width: 100%;

	}
	.article-box {
		width: 100%;
		position: relative;
		cursor: pointer;
		text-decoration: none;
		margin-bottom: 20px;

		&:hover h1 {
			transform: translateY(-20%);
		}
	}

	figure {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 100%;
		margin: auto;
		overflow: hidden;
	}

	img {
		position: relative;
		display: block;
		width: auto;
		height: 350px;
		text-align: center;

		
	}

	.short {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: white;
		border: 1px solid #C2B3B4;
		box-sizing: border-box;
		text-align: center;
	}

	h1 {
		color: color(white);
		position: absolute;
		top: 30%;
		left: 0;
		width: 100%;
		text-transform: uppercase;
		text-align: center;
		font-weight: 700;
		transition: transform 0.3s ease-in-out;
		z-index: 1;
	}

</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>
<section>
	<div class="article-list container"> 
		{#each articles as article}
			{#if !!show}
			<a rel=prefetch class="article-box" href='{ article.link_name }' in:fly="{{y:40, duration: 800 * article.animationIndex}}">
				<h1>{article.title}</h1>
				<figure>
					<img src="http://localhost:1337{article.main_image.url}" alt="{article.title}">
				</figure>
				
				<div class="short">
					<Content content="{article.short_description}" />
					{#if article.first}
					<Content content="{article.article}" />
					{/if}
				</div>
				
				
			</a>
			{/if}
		{/each}
	</div>
</section>
