import templateHTML from "./src/templates/main.html!text"
import rp from "request-promise"
import fs from "fs"

export async function render() {
	const jsonResp = JSON.parse(await rp("https://content.guardianapis.com/football/series/rumourmill?api-key=2ee3fc58-b10c-421e-9b61-3ccb619549ef&show-fields=all"));

	const jsonToSave = jsonResp.response.results[0];

	fs.writeFileSync("./src/assets/latest.json", JSON.stringify(jsonToSave));

    return ``;
}