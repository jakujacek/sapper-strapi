<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(articles => {
			return { articles };
		});
	}
</script>

<script>
	export let articles;
</script>

<style>
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>