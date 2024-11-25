/**
* JSON Query Alternative (jqa)
* An alternative to the program jq from linux
* Very useful if you're looking to read JSON files using Git Bash
* Written by Erique Bomfim on November 24, 2024.
*/
const fs = require('fs').promises;
const p = process.argv[2]
const f = process.argv[3]
const jqa = async function(conf){
	
	const comm = p.split("|").map(m=>m.trim().replace(".",""));
	const content = await fs.readFile(f, 'utf-8');
	const data = JSON.parse(content);
	const rs = data[comm[0]].map(prop=>prop[comm[2]]).join("\n");
	console.log(rs);
}
jqa(p)