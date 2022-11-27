import getUser from "../lib/discord.server";
import getSong from "../lib/spotify.server";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		discord: await getUser(),
		spotify: await getSong()
	};
}
