<script>
	export let data;
</script>

<div class="container h-full text-white text-0 pt-36 md:pt-64">
	<div class="mx-auto flex max-w-lg">
		<img class="mr-2 h-16 md:h-24 rounded-2xl" src="https://cdn.discordapp.com/avatars/{data.discord.id}/{data.discord.avatar}.png" alt="" />
		<div class="py-0.5 md:py-2 flex-grow">
			<p class="tracking-widest text-3xl md:text-5xl text-white text-opacity-75">{data.discord.username}</p>
			<p class="tracking-wide text-sm md:text-2xl text-white text-opacity-30">#{data.discord.discriminator}</p>
		</div>
	</div>
	<div class="mx-auto max-w-lg md:max-w-xl pt-1 bg-white bg-opacity-25 rounded-full mt-2 md:mt-4" />
	<div class="mx-auto max-w-lg md:max-w-xl py-2 text-lg text-white">
		<p class="md:text-center text-white text-opacity-60">
			You're probably looking for <a class="text-blue-500" href="https://cdn.calones.xyz/">calones cdn</a>.
		</p>
	</div>
</div>
