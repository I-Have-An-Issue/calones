<script>
	export let data;
	import "../app.css";
</script>

<svelte:head>
	<title>{data.discord.username}</title>
	<link rel="icon" type="image/png" href="https://cdn.discordapp.com/avatars/{data.discord.id}/{data.discord.avatar}.png" />
	<link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
	<link href="/fontawesome/css/brands.css" rel="stylesheet" />
	<link href="/fontawesome/css/solid.css" rel="stylesheet" />
</svelte:head>

<div class="h-screen">
	<div class="full unglow" />
	<div class="full background blur-sm" />
	<div class="full darken" />
	<slot />
</div>
