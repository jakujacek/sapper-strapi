<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style lang="scss">
@import '../styles/_mixins.scss';

	main {
		position: relative;
		width: 100vw;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>