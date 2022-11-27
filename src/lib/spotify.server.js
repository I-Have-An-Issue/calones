export default async function getSong() {
	const response = await fetch(`https://status.calones.xyz/spotify/json`, { method: "GET" });
	return response.json();
}
