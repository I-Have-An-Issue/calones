import { DISCORD } from "./constants.server.js";

export default async function getUser() {
	const response = await fetch(`https://discord.com/api/users/${DISCORD}`, {
		method: "GET",
		headers: { Authorization: `Bot ${import.meta.env.VITE_TOKEN || process.env.TOKEN}` }
	});

	return response.json();
}
