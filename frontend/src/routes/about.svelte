<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].html
		const res = await this.fetch(`http://localhost:1337/restaurants`);
		const data = await res.json();

		if (res.status === 200) {
			console.log(data);
			return { restaurants: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let restaurants;
</script>
	
<style>
	.product-list {
		display: flex;
		flex-wrap: wrap;

	}
	.product-box {
		width: 50%;
	}

	img {
		width: 100%;
	}
</style>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<div class="product-list">
{#each restaurants as restaurant}
	<div class="product-box">
		<h1>{restaurant.name}</h1>
		<img src="http://localhost:1337{restaurant.image.url}" alt="">
		<p>{restaurant.description}</p>
	</div>
{/each}
</div>


<p>This is the 'about' page. There's not much here.</p>