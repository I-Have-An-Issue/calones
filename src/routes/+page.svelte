<script>
	export let data;
</script>

<div class="container h-full flex flex-col pt-24 xl:pt-72 text-white text-0 ">
	<div class="flex max-w-lg">
		<img class="mr-2 h-20 md:h-24 rounded-full" src="https://cdn.discordapp.com/avatars/{data.discord.id}/{data.discord.avatar}.png" alt="" />
		<div class="py-3 md:py-2 flex-grow">
			<p class="tracking-widest text-2xl md:text-5xl text-white text-opacity-75">{data.discord.username}</p>
			<p class="tracking-wide text-sm md:text-2xl text-white text-opacity-30">#{data.discord.discriminator}</p>
		</div>
	</div>
	<div class="md:w-[32rem] flex place-content-between text-xl text-white text-opacity-60 ">
		<p class="py-1 font-light">Full stack JavaScript developer.</p>
		<div class="text-2xl">
			<a href="https://twitter.com/i_have_an_issue"><i class="fa-brands fa-twitter mx-1" /></a>
			<a href="https://github.com/I-Have-An-Issue"><i class="fa-brands fa-github mx-1" /></a>
		</div>
	</div>
	<div class="md:w-[32rem] pt-1 bg-white bg-opacity-25 rounded-full my-1" />
	{#if data.spotify}
		<div class="max-w-lg py-2 text-lg text-white">
			<iframe
				title="Spotify Track"
				style="border-radius:12px"
				src="https://open.spotify.com/embed/track/{data.spotify.item.id}?utm_source=generator"
				width="100%"
				height="80"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			/>
		</div>
	{/if}
</div>
