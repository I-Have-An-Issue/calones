import getUser from "../lib/discord.server";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	return {
		discord: await getUser()
	};
}
